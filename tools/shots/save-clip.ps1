# Save whatever image is on the clipboard as shots/<key>.png
#
# Companion to the "I stage, you snip" workflow: Cloudflare Access blocks the
# automated browser at the gate, so captures are taken by hand in a real
# signed-in Chrome. This removes the file-dialog step - snip to the clipboard,
# then run this with the key the guide expects and the file lands named right.
#
#   .\save-clip.ps1 note-on-record
#   .\save-clip.ps1 note-on-record -Force     # overwrite an existing capture
#
# Run node capture.mjs --list for the key names and how many slots each fills.
#
# ASCII ONLY in this file. Windows PowerShell 5.1 reads .ps1 as ANSI, so a UTF-8
# em dash inside a string literal breaks the parse.

param(
  [Parameter(Mandatory = $true)][string]$Key,
  [switch]$Force,
  # Trim N pixels off every edge. Used to remove the pink guide frame that gets
  # injected into the page to show which region to snip.
  [int]$Inset = 0
)

Add-Type -AssemblyName System.Drawing

$shots = Join-Path (Split-Path (Split-Path $PSScriptRoot -Parent) -Parent) 'shots'
if (-not (Test-Path $shots)) { New-Item -ItemType Directory -Path $shots | Out-Null }

$path = Join-Path $shots "$Key.png"
if ((Test-Path $path) -and -not $Force) {
  Write-Host "  $Key.png already exists. Pass -Force to replace it." -ForegroundColor Yellow
  exit 1
}

$img = Get-Clipboard -Format Image
if ($null -eq $img) {
  Write-Host "  Nothing on the clipboard. Snip with Win+Shift+S first." -ForegroundColor Red
  exit 1
}

# Guard against filing the PREVIOUS snip under a new name. If the clipboard has
# not changed since the last capture, the snip never happened and we would
# silently write a duplicate - which looks like success and is not.
$probe = Join-Path $env:TEMP 'save-clip-probe.png'
$img.Save($probe, [System.Drawing.Imaging.ImageFormat]::Png)
$probeHash = (Get-FileHash $probe -Algorithm MD5).Hash
Remove-Item $probe -Force
$dupe = Get-ChildItem (Join-Path $shots '*.png') -ErrorAction SilentlyContinue |
  Where-Object { (Get-FileHash $_.FullName -Algorithm MD5).Hash -eq $probeHash } |
  Select-Object -First 1
if ($dupe -and -not $Force) {
  Write-Host "  The clipboard still holds $($dupe.Name) - nothing new was snipped." -ForegroundColor Red
  Write-Host "  Snip the page, then run this again. Pass -Force if the duplicate is intentional." -ForegroundColor Yellow
  $img.Dispose(); exit 1
}

if ($Inset -gt 0) {
  $iw = $img.Width - (2 * $Inset)
  $ih = $img.Height - (2 * $Inset)
  if ($iw -lt 50 -or $ih -lt 50) {
    Write-Host "  Inset of $Inset leaves nothing. Aborting." -ForegroundColor Red
    $img.Dispose(); exit 1
  }
  $cropped = New-Object System.Drawing.Bitmap $iw, $ih
  $g = [System.Drawing.Graphics]::FromImage($cropped)
  $src = New-Object System.Drawing.Rectangle $Inset, $Inset, $iw, $ih
  $dst = New-Object System.Drawing.Rectangle 0, 0, $iw, $ih
  $g.DrawImage($img, $dst, $src, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose(); $img.Dispose()
  $img = $cropped
}

$img.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
$w = $img.Width; $h = $img.Height
$img.Dispose()

$size = (Get-Item $path).Length
Write-Host ("  saved shots/{0}.png  {1}x{2}  {3:N0}KB" -f $Key, $w, $h, ($size / 1KB))
# Only warn on something that looks like a corner of a panel. Tall narrow strips
# are legitimate - the search results and field panels are that shape.
if ($w -lt 700 -and $h -lt 450) {
  Write-Host "  ! Small capture. Looks like a corner rather than the whole panel." -ForegroundColor Yellow
}
