# CRM Training

**How to Use Twenty CRM** — the training guide for IO Resource's CRM at
[crm.ioresource.com](https://crm.ioresource.com). Written for salespeople and
Customer Operations, not developers.

Two things live here:

- **The guide** — a single static page, deployed on Vercel.
- **The daily email** — one module a day, a weekly exam on Fridays, sent via Resend
  by a GitHub Actions cron job.

Modelled on the [io_training](https://github.com/IOResource-company/io_training)
product-training repo: same architecture, same house style, zero dependencies.

## Layout

```
IOR-CRM-Training.html   the guide — one self-contained file, assembled (do not hand-edit DATA)
index.html              redirect to the guide
daily-quiz.html         today's quiz, driven by today.json
content/<slug>.js       ONE MODULE PER FILE — this is where you write content
content/_order.json     module order (also the daily email's rotation order)
content/_sections.js    the hand-written Quick Start and Cheat Sheet
content/AUTHORING.md    the module format — read this before editing content
shots/*.png             screenshots, embedded at assemble time
briefs/<slug>.md        harvest notes: which source said what, and what is unverified
build/assemble.mjs      content + screenshots -> IOR-CRM-Training.html
scripts/daily-snippet.mjs   builds and sends the daily email
tools/shots/            Playwright capture tool — dev only, see its README
today.json              published quiz payload (committed by CI)
last-sent.txt           send guard (committed by CI)
```

## Editing the guide

Never edit the `DATA` block inside the HTML by hand — it is generated and your
change will be overwritten. Edit `content/<slug>.js`, then:

```bash
node build/assemble.mjs
```

That splices the modules, the screenshots and the hand-written sections into
`IOR-CRM-Training.html`, then prints a per-module content audit so thin modules
are obvious. `--check` verifies the current file without rewriting it.

Read [content/AUTHORING.md](content/AUTHORING.md) first. The syntax rules there
are load-bearing: no comments, no backticks, one bare object literal per file.
The daily email extracts `DATA` with a brace scanner, and those rules are what
keep it readable.

## The daily email

```bash
node scripts/daily-snippet.mjs --dry-run                  # writes out/preview.html + today.json, sends nothing
node scripts/daily-snippet.mjs --dry-run --force-exam     # preview the Friday exam
node scripts/daily-snippet.mjs --dry-run --module cases   # preview one module
RESEND_API_KEY=re_xxx node scripts/daily-snippet.mjs      # send for real
```

**Working days only, 13:30 Irish time.** Monday to Thursday it takes one module
in rotation and sends its intro, two how-tos, four fields, one thing that is easy
to get wrong, a tip drawn from the whole guide, and a four-question quiz. Friday
it sends an exam across every module. Nothing goes out at the weekend. Four modules a week, so the
15 modules cycle just under once a month.

Rotation counts *study days*, not calendar days — otherwise Saturday and Sunday
would each advance the pointer and two modules a week would never be sent.
Selection is seeded from the date, so re-running on the same day produces exactly
the same email.

Modules are tagged `all`, `sales` or `ops`. **Everyone gets every module** — the
team is small and cross-training is the point — but the subject line carries a
`[Sales]` or `[Customer Ops]` prefix so the day's slant is obvious.

`.github/workflows/daily-snippet.yml` runs it Mon–Fri at 12:30 UTC with a retry
at 14:00, guarded by `last-sent.txt` so a double-send is impossible. It publishes
`today.json` *before* sending, so the quiz page is live when the email lands.

GitHub cron has no timezone, so 12:30 UTC is 13:30 during Irish summer time and
12:30 once the clocks go back. Shift the cron to `30 13 * * 1-5` in late October
if the winter hour matters.

### Sending to the team

Currently it sends only to `stephen.browne@ioresource.com`, because Resend's
shared `onboarding@resend.dev` sender can only deliver to a verified address.
`ioresource.com` is already verified in Resend for the CRM's own automation, so
widening this is configuration, not code — set the repo variables `SNIPPET_FROM`
(e.g. `IO Resource CRM Training <crm@ioresource.com>`) and `SNIPPET_TO`
(comma-separated).

## Screenshots

Drop a PNG in `shots/` named after the key a module references — a module asking
for `{key:"opp-kanban"}` picks up `shots/opp-kanban.png` on the next assemble.
Until then the guide renders a labelled placeholder, so referencing a shot that
doesn't exist yet is safe.

**This repo is public.** Screenshots must not show commercial figures — stage the
view so amounts and margins are off screen. Switching the Amount column off beats
blurring, because a hidden column cannot be un-blurred.

To capture them in bulk, [tools/shots](tools/shots/README.md) drives your signed-in
Edge session: it reads the wanted keys straight out of the assembled guide, so the
plan can never drift from the content, and it checks each frame for figures before
saving. It is a dev tool with its own `package.json` — the guide itself stays a
single dependency-free file.

```bash
cd tools/shots && npm install && node capture.mjs --list
```

## Content rules

- Document **our** CRM. Never present stock Twenty behaviour as ours.
- **Sales have not gone live yet, so nobody has made a mistake.** Never write as
  if the team has already got something wrong. Traps are described forward —
  *easy to get wrong* — with the habit that avoids them and a worked example
  beside them. State-of-the-data facts (duplicates and blanks that arrived with
  the load, views with a fixed date in the filter) are fine, said as such.
- If something can't be verified, mark it `confirm` rather than guessing. Those
  surface in place *and* collect into the guide's **Items to Confirm** page.
- Real customer names are fine as examples. Spend, margin and deal values are not.
