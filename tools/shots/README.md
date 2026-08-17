# Capturing screenshots

The guide references screenshot keys; a module asking for `{key:"opp-kanban"}`
picks up `shots/opp-kanban.png` at the next assemble and renders a labelled
placeholder until then. This tool fills `shots/` with correctly named,
correctly sized files.

**This is a dev tool.** It lives in its own directory with its own
`package.json` so the guide stays a single dependency-free HTML file. Nothing
here ships.

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

Levers, in order of preference: `--width 1280`, then `--format jpeg`
(`assemble.mjs` also accepts `.webp` if you convert them yourself, which is the
best of both — but nothing here writes WebP, because Playwright cannot).

The daily email does not embed screenshots at all, so none of this affects
deliverability.
