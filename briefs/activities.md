# Brief — `activities` (Tasks, Notes & Follow-Ups)

Module covers brief section 4: recording calls/meetings, tasks and follow-ups,
notes, outstanding actions, recent activity on a customer, and what to record.

## Verified facts (source → what it supports)

| Fact | Source |
|---|---|
| Notes and Tasks are the standard Twenty objects we use for call notes and to-dos, linked to any record | `IOR CRM/docs/customer-operations-the-way-we-work.html` §"Tasks / Notes" object table (line ~520) |
| Meeting notes and call summaries go in as **Notes**; to-dos as **Tasks with a due date**; "it's in my head" is not a storage location | `sales-the-way-we-work.html` §8 closing kicker |
| Golden rule — every open deal has amount · stage · next step · next-step date; update as you go, not on Fridays | `sales-the-way-we-work.html` §3 (golden rules) and the grey callout |
| Cadence engine `scripts/crm-cadence.py`: rep sets **Outreach Cadence** on a Person or Opportunity; overnight the engine creates the task series and stamps **Cadence Status = Active** | `docs/sales-cadence.md` §"How to use it (rep)" |
| **The engine never emails a prospect** — internal nudge only; it creates Tasks and the rep sends each touch from Outlook. Deliberate: keeps outreach personal, protects the sending domain | `docs/sales-cadence.md` blockquote under the intro |
| `UROVO_COLD` = "Urovo cold outreach", 6 touches, People only: LinkedIn d0 → email d2 → call d6 → email d10 → call d16 → break-up email d21 | `scripts/cadences.json` (`cadences.UROVO_COLD.steps`) |
| `QUOTE_FOLLOWUP` = "Quote follow-up", 4 touches, Opportunity + Person: email d0 → call d3 → email d7 → break-up d14 | `scripts/cadences.json` (`cadences.QUOTE_FOLLOWUP.steps`) |
| One native Twenty Task per step, `dueAt = startedAt + offsetDays` at **09:00 Irish**, linked via `taskTarget`, assigned to Stephen; task status written as `TODO`, completed as `DONE` | `docs/sales-cadence.md` §Design; `scripts/crm-cadence.py` (payload at ~line 164) |
| Templates carry merge tokens `{{firstName}} {{company}} {{repName}} {{quoteRef}}`; leftover `{{…}}` = finish by hand. Email templates append identity + postal address + opt-out; call steps append a CTPS/TPS + NDD screening reminder | `docs/sales-cadence.md` §Design, §Compliance; `scripts/cadences.json` `_comment` |
| Auto-stop conditions: prospect replies · opportunity advances a stage / won / lost · steps elapse · field cleared. Manual stop = **Cadence Status = Stopped** | `docs/sales-cadence.md` §How to use it, step 4 |
| Suppression: **Do Not Contact** on Person (or Company) + **Opted Out At** — no step is ever generated or surfaced | `docs/sales-cadence.md` §Suppression / opt-out |
| Sales Pulse cadence buttons: **Logged ✓ · Snooze +3d · Replied — stop · Stop**; the next run deletes remaining planned tasks for a terminated cadence | `docs/sales-cadence.md` §Sales Pulse buttons |
| Fields added 2026-07-15: `outreachCadence` + `cadenceStatus` on Person and Opportunity; `doNotContact` + `optOutAt` on Person and Company | `docs/sales-cadence.md` §Design, "CRM fields added" |
| Weekly sales-meeting minutes become CRM Tasks titled **"Sales mtg W28 #7 — <action>"**; the title prefix is the idempotency key (re-ingest updates, does not duplicate) | `scripts/meeting-actions.py` header, "Rules" |
| Owner string lives **verbatim on the first body line** of the task; `assigneeId` is the owner's workspace member id, else their proxy's — **only Stephen and Philip have CRM seats today** | `scripts/meeting-actions.py` header; corroborated by `scripts/sales-reps.json` (only SB and PM have a non-null `workspaceMemberId`; CL/TK/MM/MMU carry `proxyAssignee: "SB"`) |
| Carry-forward **never renumbers**: "W28 #7" keeps its number for life, gaining "Carried to W29" body lines and a new `dueAt`. Three carries = escalation list ("kill it or commit a date"). Idempotent | `scripts/meeting-actions.py` header |
| A meeting task links to a company only on an **exactly-one** name match in the action text — never created, never guessed | `scripts/meeting-actions.py` header |
| Pulse comments are stored as a **CRM Note titled `[Ops Pulse]` / `[Sales Pulse] YYYY-MM-DD — <record>`**, attached to the record and its company. The title prefix is load-bearing — `q_pulse_comments()` reads notes back by it | `docs/crm-pulse.md` §"Pulse comments" (line ~115); `scripts/crm-pulse.py` `PULSE_NOTE_WHERE` (~line 569) |
| Comment capture is **the 💬 Comment button and only the button**. Do not type comments into a reply beside quoted lines — only the unquoted top of a reply survives mail sync; this cost the 21 Jul and four of five 27 Jul comments | `docs/crm-pulse.md` §Pulse comments, bullets 1 and "Do not type comments into a reply" |
| Comment lifetime: deal comments live until **Won or Lost**, case comments until **Resolved**; snooze / re-dating no longer hides a commented item | `docs/crm-pulse.md` §Pulse comments |
| Sales Pulse deal buttons: Push +3d / +1m / +3m, Won, Lost (Lost requires a `lostReason`; both Won and Lost also set `cadenceStatus=STOPPED`) | `docs/crm-pulse.md` §Action buttons |
| "A long-cycle deal is not overdue, it is mis-dated" — rating lives in `probability`, `closeDate`, `forecastCategory`, `nextStepDate` | `docs/crm-pulse.md` §Long-cycle deal rating |
| Hygiene view **"Open Opps — No Next Action"** exists and is meant to read zero; `⚡ Next Actions` view = open opps sorted by `nextStepDate` with overdue/no-date on top | `docs/pipeline-monitoring-guide.html` §5; `docs/command-centre-v2-plan.md` build-status block |

## Could NOT verify (all appear as `confirm` / `confirms` in `activities.js`)

- Exact UI control for adding a Note or Task from a record page in our Twenty version, and whether the UI allows one Note to target several records the way the API does. → howto 1, howto 5 `confirm`
- Which task statuses the UI offers (scripts only ever write `TODO` and `DONE`); whether an In Progress state is presented. → howto 2 `confirm`
- Exactly who holds a CRM seat *today* (registry shows only SB + PM with a `workspaceMemberId`, but that file is the sheet-side registry, not the live workspace). → howto 2 `confirm` + module `confirms`
- Whether team members without a seat can see tasks assigned to them anywhere. → module `confirms`
- Whether the `outreachCadence` / `cadenceStatus` fields are on the record layouts for all users or only reachable via the field list; exact wording of the picker options. → howto 3 `confirm` + module `confirms`
- Whether the sales-meeting minutes ingest runs on a schedule or by hand each week, and who runs it. Docs describe a laptop-side parse piped over ssh (`parse-meeting-minutes.py | ssh box meeting-actions.py`) with no cron entry found in `install-backup-cron.sh` for it — so it reads as manual, but this is not stated anywhere. → module `confirms`
- Whether Notes support file attachments in our version, and where quote PDFs / spec sheets should live. (Ops WoW says spec sheets live in "a shared asset library" — that library is not identified.) → module `confirms`
- Whether the CRM issues any task reminder/notification of its own, or whether the Pulse email is the only nudge. → module `confirms`
- Who currently receives the Sales Pulse and Ops Pulse (`pulse-recipients.json` referenced but recipients not read into the module). → howto 4 `confirm`
- Section/tab names and order on a Company record page. → howto 5 `confirm`

## Deliberately not stated

- No spend, margin or deal values anywhere (public repo rule). Cadence and task examples use product/customer names only.
- Nothing about upstream Twenty task/note behaviour (reminders, recurring tasks, mentions) — not verifiable for our instance.
