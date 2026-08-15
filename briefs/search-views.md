# Brief — `search-views` (Search, Filters & Views)

Module covers brief section 5: global search, filtering, sorting, saved views,
finding records by name/email/company/owner/opportunity, and answering
"what is happening with this customer?".

## Verified facts (source → what it supports)

### The saved views themselves

| Object | Views | Source |
|---|---|---|
| Companies | All Companies · Customers · Book of Business (grouped by rep) · 5× per-rep **My Accounts** · **HOUSE — Unassigned** · **Going Quiet** (90d+ no order) · **Win-Back** · **Prospects** · **Accounts by Status** kanban (SUM € per column) · **⚠️ Data Quality — no account code** · *RMC — To Reassign (by 17 Jul)* (temporary) | `docs/worklog-2026-07-01.md` §"View overhaul"; `docs/crm-user-guide.html` §6; `docs/sales-the-way-we-work.html` §10; `docs/view-snapshot-2026-07-01.md` |
| Opportunities | Open Pipeline · **By Stage (€)** kanban · Top Prizes (€) · **Closing This Quarter (Q3)** · Commit & Best Case · **Kill the Zebra** · **Stale Deals (14d+)** · ⚠️ Data Gaps — no amount · **Quotes Needing Follow-Up** · **Quotes — Missing Quote Ref** · **Open Opps — No Next Action** · **⚡ Next Actions** | `docs/worklog-2026-07-01.md`; `docs/pipeline-monitoring-guide.html` §5; `docs/phase-1-control-layer-plan.md`; `docs/command-centre-v2-plan.md` (⚡ Next Actions, built 2026-07-14) |
| Cases | **All Open (SLA)** (sorted by due date) · Unowned · Overdue · **Open Cases — No Due Date** · **Open Cases — No Next Action Date** · Escalated · Waiting – Supplier · **Resolved — Last 30 Days** · Open cases (by status) kanban | `docs/case-monitoring-guide.html` §4; `docs/worklog-2026-07-01.md`; `docs/phase-1-control-layer-plan.md` |
| People | Decision Makers · Recently Added | `docs/worklog-2026-07-01.md`; `crm-user-guide.html` §6 |
| End Customers | **In Play (Two-Horse)** · stage kanban | `docs/worklog-2026-07-01.md` |
| Sales Transactions | default · Last 90 Days · By Rep · Credit Notes | `docs/worklog-2026-07-01.md` (mentioned in the module only as another hardcoded-date example) |

### The hardcoded-date problem (the module's most useful teaching point)

| View | Evidence |
|---|---|
| **Going Quiet** | "date filter hardcoded 2026-04-02 — refresh quarterly" — `docs/worklog-2026-07-01.md` §View overhaul |
| **Closing This Quarter (Q3)** | "[dates hardcoded — refresh quarterly]" — same source |
| **Stale Deals (14d+)** | "date hardcoded 2026-06-17 — refresh"; later "Stale Deals filter refreshed to 2026-06-30" on 2026-07-14 — `docs/worklog-2026-07-01.md`, `docs/command-centre-v2-plan.md` |
| **Resolved — Last 30 Days** | "resolvedAt filter hardcoded 2026-06-01 — refresh monthly or convert to relative in UI" — `docs/worklog-2026-07-01.md` |
| **Sales Transactions Last 90 Days** | "[date hardcoded 2026-04-02]" — same source |

Root cause worth knowing: these were built through the API, which could not
create rolling date filters — hence the module's line that the view name is a
description, not a guarantee.

### Other verified specifics

- **`salesRep` is the ownership field everywhere**; `accountOwner` was hidden in every view and on record pages because it read as Stephen on everything. Codes: `SB PM RMC CL TK MM MMU HOUSE` (uppercase). — `docs/worklog-2026-07-01.md`; `scripts/sales-reps.json` `_comment`
- **Views live in the picker at the top-left of each list; star favourites** — favourites sit at the top of the sidebar. Favourites/sidebar order **cannot** be set via the API on v2.15, so it is a manual per-person setup. — `crm-user-guide.html` §6 "Two minutes of setup each (manual, once)"; `docs/worklog-2026-07-01.md`
- **Decision-order columns** house standard: Name → Stage → Next step → Next-step date → Amount → Close date → Win% — applied to All Opportunities, Open Pipeline, Quotes Needing Follow-Up. Sorts: Open Pipeline & All Opps → next-step date ASC; Quotes → next-step date ASC then amount DESC. — `docs/worklog-2026-07-05.md` §7
- **Hard reload (Ctrl+Shift+R) needed after a view change** — the browser caches the old layout. — `docs/worklog-2026-07-05.md` §Notes
- **Stale Deals flagged all 65 open deals** because `lastActivityDate` was blank on every one. — `docs/pipeline-monitoring-guide.html` §5 amber callout
- **`quoteRef` is stored as an empty string, not NULL** — a view filtering on *is NULL* shows 0 instead of 22; flagged as needing confirmation in the source itself. — `docs/phase-1-control-layer-plan.md` (known gaps); `docs/pipeline-monitoring-guide.html` §7 gap 2
- **"Quotes Needing Follow-Up" once had a hidden "next-step date IS EMPTY" filter** that silently made it show 0 — fixed 2026-07-05. Good evidence that a view's name can mislead. — `docs/worklog-2026-07-05.md` §7
- Footer aggregates exist on several views (SUM amount, SUM IOR spend, %-empty on last order). — `docs/view-snapshot-2026-07-01.md`; `crm-user-guide.html` §6
- Hygiene targets: HOUSE = 0, Data Gaps = 0, Unowned = 0, Overdue = 0, Open Opps — No Next Action = 0. — `sales-the-way-we-work.html` §12 KPI table; `case-monitoring-guide.html` §4
- The customer-360 reading order (fields panel → opportunities → cases → notes → email) is our documented pattern. — `crm-user-guide.html` scene 1; `case-monitoring-guide.html` §2

## Could NOT verify (all appear as `confirm` / `confirms` in `search-views.js`)

- **Whether ordinary users can create, rename or delete their own saved views** in our version, and whether editing a shared view's filters changes it for everybody. This is upstream-Twenty behaviour we have no local evidence for, so it is stated only as a question. → howto 2 `confirm`, module `confirms`
- Whether a personal/temporary filter exists that does not alter the shared view. → howto 3 `confirm`, module `confirms`
- Global search: the keyboard shortcut, which record types and fields it matches, whether it reaches Note and Task text. → howto 1 `confirm`, module `confirms`
- Whether the hardcoded date filters have since been converted to rolling ones, and who owns refreshing them. → howto 4 `confirm`, module `confirms`
- Whether the temporary `RMC — To Reassign` view has been deleted (book was reassigned 2026-08-04 per `sales-reps.json`), and whether the per-rep My Accounts set now covers Marcus (MMU). → module `confirms` (deliberately worded without naming a departed colleague in the user-facing text)
- Section names and order on a Company record page; whether the email list appears on Companies as well as People. → howto 5 `confirm`
- Whether `Quotes — Missing Quote Ref` was ever corrected to filter on empty-string. Taught as "cross-check the count", not as a fact either way. → howto 4 step 6

## Deliberately not stated

- No € totals, spend figures or pipeline values, even though several views carry them in their footers (public repo rule). The module says "read the footer total", never what it says.
- Emoji prefixes on real view names (⚠️ Data Gaps, ⚡ Next Actions, ⌛ etc.) are described as "a warning icon in front of the name" rather than reproduced, matching the style already used in `content/pipeline.js`.
- Ross McClure is not named; the temporary reassignment view is referred to as "the temporary handover view for a departed rep's accounts".
