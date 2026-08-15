# Brief — `routine.js` (Recommended Daily Routine)

Answers section 9 of `C:\Users\Stephen\Downloads\Prompt — Create a Twenty CRM How-To Guide.md`,
expanded to two routines because the guide serves both sales and Customer Operations.

Sources:

- S1 `C:\dev\IOR CRM\docs\sales-the-way-we-work.html` (daily/weekly rhythm, golden rules, Monday review)
- S2 `C:\dev\IOR CRM\docs\customer-operations-the-way-we-work.html` (inbox rhythm, SLAs, daily checklist)
- S3 `C:\dev\IOR CRM\docs\case-monitoring-guide.html` (the 10-minute morning routine, views, SLA clock)
- S4 `C:\dev\IOR CRM\docs\pipeline-monitoring-guide.html` (stage exit bar, hygiene views)
- S5 `C:\dev\IOR CRM\.claude\skills\sales-pipeline-sweep\SKILL.md` (Tuesday sweep)
- S6 `C:\dev\IOR CRM\.claude\skills\weekly-mail-summary\SKILL.md` (Friday digest)
- S7 `C:\dev\IOR CRM\docs\crm-pulse.md` + `pulse-system-overview.html` (pulse timings, meeting actions)

## Verified facts

| Fact as written | Source |
|---|---|
| Sales daily discipline is five minutes, not Friday homework: update any deal you touched (stage, next step, date), new enquiry → opportunity same day, new contact → People | S1 §3, §11 "Daily (5 min)" |
| Every open deal carries amount · stage · next step · next-step date; a rough amount beats a blank; never guess a figure | S1 §3, §5; S4 §7 |
| Thirty seconds on the phone walking out of a meeting; batching to Friday is how deals rot | S1 §3 rule 4 |
| Dead deals go to Closed Lost with a lost reason | S1 §3 rule 5, §6 |
| Notes for meeting/call summaries, Tasks with a due date for to-dos; "it's in my head" is not a storage location | S1 §8 |
| Formal work through sales@ with the rep cc'd; document number in the subject line is the primary link mechanism | S1 §8; S2 §3 |
| Ops start of day ~10 min: clear unowned/overdue, own and acknowledge every new item; the 08:00 Ops Pulse hands you the board | S2 §10; S3 §2 |
| Acknowledge within **1 working hour**; **15 minutes** for an urgent operational problem; first meaningful response within **4 working hours** | S2 §7 SLA table |
| An acknowledgement is not an answer — say we own it, what we're doing, when they'll hear next | S2 §7 callout, §8 templates |
| Daily junk-folder check of the shared inbox before anything is deleted | S2 §10 |
| Midday inbox/case sweep and re-prioritise; daily 10-min huddle on urgent and at-risk items | S2 §10 |
| Status labels: New · Acknowledged · In Progress · Waiting – Customer · Waiting – Supplier · Waiting – Internal · Resolved · Closed (Escalated is a flag on top) | S2 §3, Appendix B |
| Moving the status **is** the update; SLA timestamps stamp themselves; never type them by hand | S2 §9; S3 §3, §7 |
| Chase suppliers/couriers rather than wait; update the customer at the promised interval even when nothing has changed | S2 §5 "what great looks like", §7 update-frequency column |
| Case owner stays responsible until the customer is satisfied; handing over a task never hands over the case | S2 §4 callout |
| End of day: nothing unowned, every open item has a next action and a due date, at-risk items escalated; the 18:00 Ops Pulse shows what is still on the board | S2 §10, Appendix A |
| Monday: Sales Pulse data-quality audit (pipeline attachment, per-stage reconciliation, AI timing proposals with one-tap Apply) | S7 (`crm-pulse.md` cron table; pulse-system-overview §4.1) |
| Monday pipeline review, 20 min, live from the CRM: board first, then closing-this-period line by line, then stale deals — three questions per deal, and two quiet weeks forces a decision | S1 §11 |
| Tuesday 15:00 pipeline sweep of the rep files in the sales-meetings folder; **sheet wins on amount/probability/next step, CRM wins on stage and close date**; never marks Won, never deletes; flagged rows → one review task | S5 header, §2, §3 |
| Weekly sales meeting minutes are ingested and become Tasks grouped by owner, surfaced in the Sales Pulse with Done / Carry / Answer; repeated carries are flagged | S7 (`pulse-system-overview` §4.1 meeting actions, appendix "Meeting register") |
| Friday weekly mail digest → a `.docx` in the OneDrive "Weekly Summaries" folder (orders received, supplier orders, deliveries); **read-only, never writes to the CRM**; Monday 12:00 catch-up run | S6 header, "Where things live", "Procedure" |
| Weekly ops review: clear or escalate everything overdue, work Waiting – Supplier, scan recently resolved for recurring themes | S2 §10; S3 §6 |
| Monthly: Going Quiet (one call each), Win-Back (pick two), drive Data Gaps to zero | S1 §11 |
| Case hygiene views target zero: Unowned, Overdue, No Due Date, No Next Action Date | S3 §4 |
| Weekday nudge email for cases still New with no owner | S2 §3 |
| Pulse button links expire after 21 days (basis for the "don't work from an old pulse" step) | S7 (`crm-pulse.md`) |

## Deliberately NOT written

- Cover-hours times are given only as a `confirm`: S2 §3 says 08:30–17:30 but the Ops Pulse runs ~08:00/18:00, and I could not confirm which is current. The module says "over the cover hours" and asks the reader to confirm.
- No values, per-rep numbers or account names attached to numbers anywhere.

## Could NOT verify → surfaced as `confirm` / `confirms`

1. **The weekly sales meeting's day/time, and who ingests the minutes.** The register exists and is parsed on the laptop into the CRM, but the schedule and owner are not stated in any source, and `pulse-system-overview` §4.3 notes only one week's minutes had ever been ingested. → howto `confirm` on "The weekly rhythm".
2. **Current cover hours and named backups for the sales@ inbox.** S2 §3 gives 08:30–17:30 with named backups as a standard, but does not say who. → module `confirms`.
3. **Whether the daily 10-minute huddle still runs, and when.** Listed in S2 §10 as part of the model; no evidence it is live. → module `confirms`.
4. **Task-assignment notifications** (in-app / email, or Pulse only). Not documented anywhere. → module `confirms` (mirrors the same item in `pulse.js`).
