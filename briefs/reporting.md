# Brief — `reporting.js` (The Weekly Picture)

Sources:

- R1 `C:\dev\IOR CRM\docs\command-centre-v2-plan.md` (dashboard build status, constraints, phase 2)
- R2 `C:\dev\IOR CRM\docs\pipeline-monitoring-guide.html` (pipeline views, stage exit bar, known gaps)
- R3 `C:\dev\IOR CRM\docs\case-monitoring-guide.html` (case views, SLA clock, known gaps)
- R4 `C:\dev\IOR CRM\docs\sales-the-way-we-work.html` (forecast categories, weighted pipeline, views, KPIs)
- R5 `C:\dev\IOR CRM\docs\worklog-2026-07-01.md` (API capability limits on v2.15)
- R6 `C:\dev\IOR CRM\docs\crm-pulse.md` + `pulse-system-overview.html` (SLA medians live in the pulse; sweep-freshness strip)

## Verified facts

| Fact as written | Source |
|---|---|
| Command Centre v2 is live with **six** widgets: Pipeline by Stage chart, Next Actions table (open opps, next-step date ascending, overdue/undated on top), Open Cases table (not Resolved/Closed, oldest received first), Open Pipeline value tile, Weighted Pipeline value tile, Unacknowledged Cases tile (target 0) | R1 build-status block |
| Further widgets are designed but not yet added: unowned-cases tile, no-amount tile, deals-created-per-month chart, cases-by-status chart | R1 build-status block ("Still to add from the design") |
| Action tables are **sort-based on purpose** so they never rot; hard-coded date filters do rot (the Stale Deals view was still filtering on an old date) | R1 constraints table + "Refresh/rot policy" |
| Charts diagnose, tables act — "a chart says there's a problem, a table says which record to open"; every widget must pass the so-what test; widget budget 6-8 | R1 "Research consensus" |
| **Sales Targets object empty; Sales Transactions empty** so there is no versus-target gauge, no coverage ratio and no revenue actuals in the CRM. Seeding targets is what unlocks them; actuals need an Intact backfill | R1 constraints table + "Phase 2" |
| Twenty v2.15: **dashboards are UI-build only (API read-only)** | R1 constraints table + build-status note |
| **Favourites and sidebar order are also not settable via the API** on v2.15 | R5 line 142 ("NOT possible via API on v2.15: dashboards (read-only), favorites, sidebar order") |
| SLA medians (ack 1h, first response 4h) are **not chartable** on our version and stay in the twice-daily Ops Pulse — no timestamp-diff aggregates available | R1 constraints table + "Refresh/rot policy"; R6 |
| Weighted pipeline **is** buildable because `weightedValue` and `probability` are populated on valued deals; weighted = amount x probability | R1 constraints table; R4 s7 and Appendix B |
| Forecast categories and their meanings: Commit (would stake your reputation / verbal yes / PO imminent), Best Case (winnable this period if things go our way), Pipeline (real but earlier), Omitted (tracked, not counted) | R4 s7; R2 s6 |
| Honest close dates: moving a slipped date is fine, leaving it wrong makes the quarter fiction | R4 s7 amber callout |
| Known data gaps: a large share of open opportunities carry **no amount**, and close dates were missing on nearly all open deals, so value widgets under-report and there is no close-month forecast widget | R1 constraints table; R2 s5, s7 |
| Last activity date blank means the stale detector flags everything; stale threshold is 14+ days (amber), 30-45 days red in the design | R2 s5 amber callout; R1 thresholds |
| `Received at` blank means that case's SLA is **unmeasurable** (counted as such, not as a pass) | R3 s3 amber callout; R6 (`crm-pulse.md` item 3: "Cases with blank receivedAt are counted as unmeasurable") |
| Reopening a resolved case keeps the old Resolved at — treat "resolved" by status, not by timestamp | R3 s7 gap 2 |
| The unowned-cases widget can count closed records and distort a target-0 tile | R3 s7 gap 3 |
| Pipeline views and what each answers: Open Pipeline, By Stage, Top Prizes, Closing This Quarter, Stale Deals, Data Gaps - no amount, Quotes - Missing Quote Ref, Kill the Zebra | R4 s10; R2 s5 |
| Case views: All Open (SLA), Unowned, Overdue, No Due Date, No Next Action Date, Escalated, Waiting - Supplier, Open cases (by status) | R3 s4 |
| Kill the Zebra = live competitor-displacement deals, tagged by competitor displaced — a strategic scoreboard | R4 s9; R2 s6 |
| Amount basis distinguishes estimated from quoted values; the Tuesday sweep writes `amountBasis: "QUOTED"` on swept rows | `sales-pipeline-sweep\SKILL.md` s2; R1 constraints table (27 valued: 21 est + 6 quoted) |
| Sweep-freshness amber strip warns when the weekly sweep has stopped and CRM amounts are drifting from the reps' sheets; rep editions are scoped and say so in the subject | R6 (`pulse-system-overview` s4.1, s7) |
| 100%-probability rows are deliberately surfaced for review because they inflate weighted pipeline | `sales-pipeline-sweep\SKILL.md` s2 |
| "Don't guess commercial figures — a blank is honest; a made-up number corrupts the forecast" | R2 s7 golden rules |

## Deliberately NOT written

- **Every actual figure.** R1 carries the live tile values, R2 the open-deal count and the single valued deal, R3 the open-case count. None appear in the module — widgets and gaps are described qualitatively ("a large share", "open pipeline value"), and both screenshot captions instruct the capturer to crop or blur value tiles.
- Per-rep pipeline splits (R1 band 3 designs a "Pipeline by rep" chart for a specific reassignment deadline) — internal and dated.

## Could NOT verify, surfaced as `confirms`

1. **Whether Sales Target / Sales Transaction are still empty.** Stated as empty on the authority of R1 (14 Jul 2026); no later source contradicts it, but it is exactly the kind of thing that changes.
2. **Whether the Command Centre still carries exactly those six widgets** or the remaining designed tiles/charts have since been added by hand. Also a howto-level `confirm` on "Read the Command Centre in five seconds".
3. **Whether the unowned-cases widget still counts closed records** (R3 gap 3, 5 Jul 2026 — may have been fixed).
4. **The current proportion of open deals carrying an amount and a close date.** The numbers in R1/R2 are a month or more old and are exactly the denominator behind every dashboard value, so the module asks the reader to re-check rather than quoting a stale ratio.
