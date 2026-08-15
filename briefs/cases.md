# Brief — `cases.js`

Module: **Cases — the Customer Ops Queue** · track `ops`

## Sources used

| Ref | File | Sections |
|---|---|---|
| WoW | `C:\dev\IOR CRM\docs\customer-operations-the-way-we-work.html` | §3 (inbox, statuses, priority), §4 (ownership), §5 (decision authority, Take Control checklist), §7 (SLA table), §9 (Case record, RMA), §10 (rhythm), §11 (KPIs, pulse), App. B, App. C |
| CMG | `C:\dev\IOR CRM\docs\case-monitoring-guide.html` | §1–§7 |
| DM | `C:\dev\IOR CRM\docs\data-model.md` | Phase 5 — Case object |
| PULSE | `C:\dev\IOR CRM\docs\crm-pulse.md` | cron table (l.38), "Auto-case creation rules (`--ingest`)" (l.360–376), §Cases in the pulse (l.59–65) |
| WL05 | `C:\dev\IOR CRM\docs\worklog-2026-07-05.md` | §2 (case queue), §5 (SLA workflow verification) |
| STATUS | `C:\dev\IOR CRM\STATUS.md` | live workflows |

## Verified facts

**Object and fields** — DM Phase 5 "Case — new object":
- `subject` (label), `caseType` = Query · Delivery · Complaint · Return · Credit query · Technical.
- `status` = New · Acknowledged · In Progress · Waiting – Customer · Waiting – Supplier · Waiting – Internal · Resolved · Closed (8 values; same list in WoW §3 and App. B).
- `priority` = Urgent / High / Normal. Meanings from WoW §3: Urgent = drop other work; High = handle today; Normal = within SLA.
- SLA timestamps `receivedAt` / `acknowledgedAt` / `firstResponseAt` / `resolvedAt`; plus `dueDate`, `nextAction` / `nextActionDate`, `supplierDependency`, `escalated`, `resolutionNote`.
- Relations: `owner` (→ workspace member), `company`, `contact` (→ person), `opportunity`. WL05 §2 confirms cases carry **no** `salesRep`.

**SLA auto-stamp workflow** — verified live 5 Jul 2026 (WL05 §5, CMG §3, STATUS):
- Acknowledged → stamps `acknowledgedAt`; In Progress → `firstResponseAt`; Resolved → `resolvedAt`.
- Stamp-if-empty, no overwrite. Runs in-process (`LOGIC_FUNCTION_TYPE=LOCAL`, docker-compose l.92).
- `receivedAt` is **not** in the stamped set — it is the clock's start and must be present for SLA maths (CMG §3 amber callout).

**Auto-case creation** — PULSE:
- Cron `*/15 6-18 * * 1-5` runs `crm-pulse.py --ingest` → every 15 minutes, weekdays.
- Candidate = new inbound message whose sender resolves to a Person **with a Company**. Skipped: internal senders, no-reply/automated, `(Sales Pipe mail)` subjects, pulse replies, auto-response subjects. Unknown senders are **not** auto-cased — they surface in the pulse email.
- Dedup one case per mail thread via hidden field `sourceThreadId` (created 2026-07-12). "Never edit that field."
- Created as: status **New**, type **Query**, priority **Normal**, `receivedAt` = email timestamp, due date = next working day, contact + company linked, **owner defaulted to Stephen**.
- Reply detection: a reply from `@ioresource.com` on a thread whose case is still New → moves to **Acknowledged**, stamps `acknowledgedAt` with the actual reply time.

**SLA targets** — WoW §7:
- Any inbound: acknowledge 1 working hour. Urgent operational problem: 15 minutes, resolve same day, update every few hours.
- First meaningful response: 4 working hours. Standard quotation: same day. Complex/project quotation: 2–3 working days, update every 24h.
- Complaint: resolve 2 working days, update daily. Technical: 1–2 days via Tom, update every 24h. Supplier-dependent: update every 24–48h. Return: per policy, update at each step.
- Pulse medians computed on business hours **Mon–Fri 09:00–17:30 Irish** (PULSE l.61). Inbox cover hours are 08:30–17:30 (WoW §3) — the two differ; not flagged as an issue, but noted.

**Views** — CMG §4: All Open (SLA), Unowned cases, Overdue cases, Open Cases — No Due Date, Open Cases — No Next Action Date, Escalated, Waiting – Supplier, Open cases (by status) kanban. Plus **Resolved — Last 30 Days** (CMG §6, crm-user-guide l.394).

**Other verified**
- "Escalated is a flag on top of a status, not a status of its own" — WoW §3.
- Four non-negotiables (owner / status / next action / due date) — WoW §9, CMG §1.
- Case owner stays responsible until the customer is satisfied; handing over a task never hands over the case — WoW §4.
- Weekday 08:00 unowned-case nudge email, live since 1 Jul 2026 — WoW §3.
- Ops Pulse email 08:00 + 18:00 weekdays, live 12 Jul 2026 — WoW §11.
- RMA/warranty deliberately **not** a case type; slim log in Aftercare, technical system is source of truth — DM Phase 5 blockquote, WoW §9.
- Known gaps (CMG §7 / WL05 §5): reopening keeps `resolvedAt`; "Unowned cases" widget counts Closed cases; `receivedAt` blank on the 6 Ross-handover cases.
- New Case button labelled "+ New Case" in both mockups (CMG §2/§5, crm-user-guide l.318) — used in the module only as "click **New Case**" to stay safe on the exact glyph.

## Could NOT verify (all appear as `confirm` / `confirms` in the .js)

1. Whether auto-created cases still default their owner to Stephen Browne now that more workspace members exist. PULSE says "owner defaulted to Stephen"; WL05 §2 says he was the only member on 5 Jul; the crm-user-guide mockups show Majella owning cases. *(howto: "Understand where cases come from")*
2. Whether a manually created case stamps `receivedAt` automatically on save. The workflow table (CMG §3) only covers Acknowledged/In Progress/Resolved, and the handover cases have it blank — strong evidence it is manual, but not stated outright. *(howto: "Create a case by hand")*
3. What moving to **Closed** stamps, and the intended day-to-day difference between Resolved and Closed. Neither doc defines it. *(howto: "Escalate, resolve and close")*
4. Whether the three Waiting statuses pause the SLA / due-date clock. Not documented anywhere. *(module `confirms`)*
5. Whether the weekday 08:00 unowned-case nudge still runs now the Ops Pulse email covers the same ground (WoW §3 vs §11, added at different dates). *(module `confirms`)*
6. Whether saved views exist for Waiting – Customer and Waiting – Internal — only Waiting – Supplier is listed in CMG §4. *(module `confirms`)*
7. Exact steps to create a Case from a Company or Person record rather than the Cases list. *(module `confirms`)*
8. Whether the "Unowned cases widget counts Closed cases" gap has been fixed since 5 Jul. *(module `confirms`)*
9. Whether `receivedAt` has been backfilled on the 6 handover cases. *(module `confirms`)*

Also unverified and therefore **not written**: the data type of `supplierDependency` (text vs relation) — described functionally as "who we are waiting on" only.

## Public-repo compliance

No spend, margin, deal values or commercial figures. Real customer names used as examples (Deycom, ONIPOS, McLernon) — all appear in the source docs as case subjects with no money attached.
