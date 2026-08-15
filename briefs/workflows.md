# Brief — `content/workflows.js` (Common Daily Workflows)

Covers section 8 of the guide brief: five worked flows in our own stage and field
names. Sources are all inside `C:\dev\IOR CRM`. Facts shared with the pipeline
module (stage names, field semantics, lost reasons, ownership via
`company.salesRep`) are evidenced in `briefs/pipeline.md` and not repeated here.

## Verified facts and where they come from

| Fact used in the module | Source |
|---|---|
| New-enquiry sequence: search company → search contact → create what's missing → create opportunity from the company record → amount/stage → next step + date | `docs/sales-the-way-we-work.html` Appendix A ("New deal quick card") and §5; brief §8 |
| Opportunity created the same day as the conversation | `sales-the-way-we-work.html` §3 rule 2 and §11 "Daily (5 min)" |
| Duplicate company records genuinely exist in the CRM (2× STL Technology Solutions, 2× Qualcom, McLernons vs McLernon Computers, Touchstore vs TouchStore) and name drift is real | `.claude/skills/sales-pipeline-sweep/SKILL.md` §2 |
| Ownership on a new deal is set by the company's `salesRep`, nothing is assigned on the deal | `scripts/crm-pulse.py` `q_pipeline_audit` docstring + ~line 3753; `docs/crm-user-guide.html` §6 |
| An account with no owner is a to-do ("HOUSE — Unassigned", target zero) | `sales-the-way-we-work.html` §3 rule 1, §10, Appendix B |
| Existing-customer call: read the company timeline (open deals, emails, notes, cases) first | `docs/crm-user-guide.html` §1 ("One version of the customer", "Cover built in") |
| Split of responsibility — "winning the money" is sales, "delivering on the promise" is Customer Operations; queries/delivery chases/complaints/returns/credit queries are **Cases** | `sales-the-way-we-work.html` §2 kicker; `docs/data-model.md` Phase 5 (Case object and its `caseType` list) |
| Meeting notes and call summaries go in as **Notes**; to-dos as **Tasks** with a due date | `sales-the-way-we-work.html` §8 kicker |
| A person who isn't in People yet: their mail is stored but shows on no record until the contact exists | `sales-the-way-we-work.html` §8 rule 3 |
| Document numbers in the email subject line are what link a thread to the record; formal sales work goes through sales@ | `sales-the-way-we-work.html` §8 rules 1–2; `crm-user-guide.html` "Everyday use" |
| Quotation flow: move to Proposal, put the Intact quotation number on the deal | `sales-the-way-we-work.html` §5 table; `pipeline-monitoring-guide.html` §3 lifecycle table (Proposal row: Quote ref · Amount · Close date · Forecast category · Win %) |
| `amountBasis` flips to `QUOTED` when a real quotation exists (`ESTIMATED` otherwise) | `scripts/crm-pulse.py` weekly data check (quoted vs estimated columns); `sales-pipeline-sweep/SKILL.md` §2 |
| **QUOTE_FOLLOWUP cadence** = "Quote follow-up", 4 steps: email day 0, call day 3, email day 7, break-up email day 14 (≈2 weeks); applies to opportunity and person | `scripts/cadences.json` → `cadences.QUOTE_FOLLOWUP`; `docs/sales-cadence.md` §"How to use it (rep)" |
| The cadence **creates Tasks only** and never emails the prospect; the rep sends each touch from Outlook | `docs/sales-cadence.md` header callout and "Design"; `scripts/cadences.json` `_comment` |
| Enrolment is via the **Outreach Cadence** field; **Cadence Status** goes Active; auto-stops on reply, stage advance, win/loss, elapsed steps, or clearing the field; manual stop = Cadence Status Stopped | `docs/sales-cadence.md` steps 2–4; `cadences.json` `QUOTE_FOLLOWUP.note` ("Auto-stops on reply or when the opportunity advances a stage") |
| `outreachCadence` + `cadenceStatus` exist on Person **and** Opportunity (added 2026-07-15) | `docs/sales-cadence.md` "CRM fields added" |
| Cadence tasks are created overnight on weekdays and surfaced in the Sales Pulse | `docs/sales-cadence.md` cron table (`45 6 * * 1-5`) |
| Work the **Quotes Needing Follow-Up** view oldest-first; every proposal should have a scheduled chase | `pipeline-monitoring-guide.html` §4 |
| Won = stage **Customer**; order then lives in Intact and Customer Operations runs delivery | `sales-the-way-we-work.html` §5 and §2; `pipeline-monitoring-guide.html` §2 |
| Prospect account graduates to Active on its first order | `sales-the-way-we-work.html` §4 "The account motions" |
| Lost = **Closed Lost** + `lostReason` (7 options), reopen by moving the stage, never delete | `sales-the-way-we-work.html` §3 rule 5, §6 table + pills |
| Displacement wins need `competitorDisplaced` set to count on the Kill the Zebra scoreboard | `sales-the-way-we-work.html` §9; `pipeline-monitoring-guide.html` §6 |
| `quoteRef` is blank on a large share of proposals (hence the habit) | `pipeline-monitoring-guide.html` §5 and §7 gap 2 — **count not quoted** |

## Deliberately excluded (public repo)

No deal values, quote values, pipeline totals or margin figures. The
`cadences.json` email templates contain a competitive price-advantage claim
("40–60% below…") — deliberately **not** reproduced, as it is a commercial figure.
Customer names used are name-only.

## Could NOT verify — all appear as `confirm` / `confirms` in the module

Module-level `confirms`:

1. Where the **Outreach Cadence** / **Cadence Status** fields sit on the
   opportunity record in the current build, and the exact on-screen option label.
   `sales-cadence.md` names the fields and the option in prose ("Quote
   follow-up") but not their placement or UI rendering.
2. Who the cadence Tasks are assigned to. `sales-cadence.md` "Design" says
   enrolment creates tasks "assigned to Stephen" — that may be historical or may
   still be current, so the module does not state a rep gets their own tasks.
3. Whether the **Quotes Needing Follow-Up** and **Quotes — Missing Quote Ref**
   views still exist and filter correctly. `pipeline-monitoring-guide.html` §7
   itself flags that `quoteRef` is stored as an empty string rather than NULL on
   some records, so "is empty" filters may under-count.
4. Whether the Prospect → Active `accountStatus` change is manual or driven by the
   Intact feed. `data-model.md` shows the account summary block is manual today
   with Sales Transactions unbackfilled, but nothing states who flips the status.

Per-howto `confirm`:

5. *Follow up after sending a quotation* — whether reps may set the Outreach
   Cadence field themselves or enrolment is restricted, and how quickly the tasks
   appear given the engine runs overnight, weekdays only.

Flows also inherit the unverified items in `briefs/pipeline.md` (UI labels,
whether `lostReason` is technically enforced, whether anything automated fires on
a move to Customer). Those are carried in the pipeline module's `confirms` rather
than duplicated here.

## Screenshot keys referenced

`opp-record` (module-level); `opp-new`, `opp-cadence`, `opp-lost-reason`
(per-howto). `opp-cadence` is a new key beyond the suggested set — it captures
the Outreach Cadence + Cadence Status fields, which the quotation flow depends on.
Captions instruct the capturer to crop or blur any amount.
