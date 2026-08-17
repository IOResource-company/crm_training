# Capturing screenshots

The guide references screenshot keys; a module asking for `{key:"opp-kanban"}`
picks up `shots/opp-kanban.png` at the next assemble and renders a labelled
placeholder until then. This tool fills `shots/` with correctly named,
correctly sized files.

**This is a dev tool.** It lives in its own directory with its own
`package.json` so the guide stays a single dependency-free HTML file. Nothing
here ships.

## How this actually works today

Cloudflare Access blocks the Playwright browser at the gate with a bot-check
failure, and that is not something to work around. So captures are taken **by
hand in a real signed-in Chrome**:

1. Get the page looking right, and switch off any money column
   (**Options → Fields**) — see the warning at the top of `recipes.mjs`.
2. Snip the whole window with `Win+Shift+S`.
3. `.\save-clip.ps1 <key>` files it under the right name.
4. **Open the saved file and look at it.** The script refuses a stale clipboard
   but it cannot tell a wrong image from a right one — that already put a snip
   of the public website in `person-record.png` once.
5. `python to-webp.py`, then `node build/assemble.mjs` from the repo root.

`capture.mjs` is still the source of truth for the key list (`--list`) and would
work unchanged if the gate is ever opened to a service token.

## Once

```bash
cd tools/shots && npm install
```

Playwright drives your installed **Edge** via its `msedge` channel, so there is
no browser download and your Microsoft sign-in behaves normally. Pass
`--chromium` if you would rather use Playwright's own build.

## The plan

```bash
node capture.mjs --list
```

No browser, no auth — just what the guide wants and what is already captured.
The `x` column is how many slots in the guide use that key. Keys used by
several modules are worth doing first: `note-on-record` alone covers five.

## Signing in, once

```bash
node capture.mjs --login
```

Edge opens on the CRM. You sign in as yourself — the script never sees your
password, and it will not type one. It captures the Cloudflare Access gate as
`crm-login.png` on the way through, then saves the session to
`storage-state.json` so later runs skip the whole gauntlet.

**`storage-state.json` is a live credential.** It is gitignored. Leave it that
way, and re-run `--login` when it expires.

## Capturing

```bash
node capture.mjs                                  # everything still missing
node capture.mjs --only note-on-record,global-search
node capture.mjs --all                            # re-take, including existing
node build/assemble.mjs                           # from the repo root, after
```

Each shot navigates as far as it can, prints the real caption from the guide
plus any staging note, then waits for you to press Enter. Press `s` to skip.

It does not click its way through Twenty's field menus to hide columns, and it
does not pretend to know the DOM: a guessed selector that silently clicks the
wrong thing is worse than a prompt. Saved views *are* selected by name, because
our view names are stable even when the markup is not.

## Money

**This repo is public.** Amounts, margins and deal values must never appear in
a screenshot.

Stage the view rather than blurring — switch the Amount column off before you
capture. A hidden column cannot be un-blurred, and there is no image tooling on
this machine to blur with.

Before saving, the script reads what is actually on screen and lists anything
that looks like a figure. Add `--strict` to make that a refusal rather than a
prompt, which is the right setting if someone else is holding the camera.

## Size

Every file in `shots/` is base64-embedded into the single-file guide, so the
cost is roughly 4/3 of what is on disk. The guide is ~354KB today; 32 PNGs at
1440px wide will take it to a few MB. The run prints the running total and says
when it is getting heavy.

Run `python to-webp.py` before assembling. It halves the bytes with no visible
loss on flat UI screenshots, keeps a `.png.bak` of each original (gitignored)
until you have eyeballed the result, and `--clean` removes those afterwards.
Needs `python -m pip install pillow` once — there is no other image tooling on
this machine.

The daily email does not embed screenshots at all, so none of this affects
deliverability.
