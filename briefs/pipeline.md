# Brief — `content/pipeline.js` (Opportunities & Pipeline)

Covers section 3 of the guide brief. Sources are all inside `C:\dev\IOR CRM`.

## Verified facts and where they come from

| Fact used in the module | Source |
|---|---|
| Stages are New → Screening → Meeting → Proposal → **Customer** (won) / **Closed Lost** | `docs/sales-the-way-we-work.html` §6 + Appendix B; `docs/data-model.md` "Phase 2"; stored codes `NEW / SCREENING / MEETING / PROPOSAL / CUSTOMER / CLOSED_LOST` confirmed in `scripts/crm-pulse.py` (`OPEN_OPP_STAGES`, line ~159 and ~1478) |
| Exit criteria per stage (spoken + real need/budget-holder/timeframe → Screening; meeting/demo/site visit booked → Meeting; formal quotation issued → Proposal; PO received → Customer; dead/stalled → Closed Lost) | `docs/sales-the-way-we-work.html` §6 table, cross-checked against §5 "When to create one" |
| A stage is a fact, not a feeling; deals move when the thing has happened | `sales-the-way-we-work.html` §6 kicker |
| Golden rules: one owner per account; same-day opportunity creation; amount + stage + next step + date on every open deal; update as you go not Fridays; close losses with a reason | `sales-the-way-we-work.html` §3 |
| Deal naming convention `Company — what they're buying (context)`, e.g. Bluecloud / Urovo K329 | `sales-the-way-we-work.html` Appendix A step 2; short-name rule reinforced in `.claude/skills/sales-pipeline-sweep/SKILL.md` §2 |
| New-deal quick card sequence (new opp → name → link company/contact/end customer → amount → stage → close date → next step + date → displacement/price exception) | `sales-the-way-we-work.html` Appendix A |
| One deal = one opportunity; don't bundle a year, don't split an order | `sales-the-way-we-work.html` §5 |
| Amount is ex-VAT, best estimate; "a rough €5k beats a precise blank" | `sales-the-way-we-work.html` §5 (value itself deliberately not reproduced — public repo) |
| `amountBasis` values are `QUOTED` and `ESTIMATED` | `scripts/crm-pulse.py` ~line 2569 and 2630–2636 (weekly data check counts quoted vs estimated); `scripts/uk-expansion-pulse.py` ~line 174/506; sweep rule "stage: PROPOSAL, amountBasis: QUOTED" in `sales-pipeline-sweep/SKILL.md` §2 |
| Field list: `probability`, `nextStep`, `nextStepDate`, `lastActivityDate`, `quoteRef`, `leadSource`, `forecastCategory`, `lostReason` all added in Phase 2 | `docs/data-model.md` "Live schema as built — Phase 2" |
| `leadSource` options: Website / Referral / Outbound / Existing Account / Trade Show / Other | `docs/data-model.md` Phase 2 |
| `forecastCategory` options and their meaning (Commit / Best Case / Pipeline / Omitted) | `docs/data-model.md` Phase 2 for the options; meanings from `sales-the-way-we-work.html` §7 table and Appendix B; stored codes `COMMIT / BEST_CASE / PIPELINE / OMITTED` in `docs/crm-pulse.md` "Long-cycle deal rating" |
| `lostReason` options (Price / Lead Time / Lost to Competitor / No Budget / No Decision / Stalled / Other) | `docs/data-model.md` Phase 2; `sales-the-way-we-work.html` §6 pills + Appendix B |
| Lost reason mandatory on every Closed Lost deal (as a rule) | `sales-the-way-we-work.html` §3 rule 5, §12 KPI "Lost deals with a reason recorded — 100%"; `pipeline-monitoring-guide.html` §7 golden rules |
| Kill-the-Zebra set: `displacementTarget`, `competitorDisplaced` (Zebra / Honeywell / Other / None), `priceExceptionStatus` (none / requested / approved), `vertical` | `docs/data-model.md` Opportunities section + Phase 2 note; `sales-the-way-we-work.html` §9; `pipeline-monitoring-guide.html` §6 |
| `endCustomer` relation to the End Customer object; gives the "two-horse view"; examples Musgrave, Uniphar, Eason | `docs/data-model.md` Phase 5; `docs/crm-user-guide.html` §2 |
| Weighted pipeline = amount × probability; `weightedValue` is a stored field summed on the Command Centre tile | `sales-the-way-we-work.html` Appendix B; `docs/command-centre-v2-plan.md` (constraint table + Band 1 tile 3); sweep skill §2 "recompute `weightedValue` (amount × probability) as its maintenance note requires" |
| Ownership derives from `company.salesRep`, **not** from the opportunity's owner field | `scripts/crm-pulse.py` `q_pipeline_audit` docstring: *"Rep comes from company.salesRep — opportunity.ownerId is all Stephen and meaningless"*, and ~line 3753 (opps with NULL companyId fall off every rep's list); `docs/crm-user-guide.html` §6 ("the misleading Account Owner column is gone — Sales Rep is the ownership field everywhere") |
| `salesRep` is a select with codes SB / PM / RMC / CL / TK / MM / MMU / HOUSE | `scripts/pulse_roster.py` `SALES_REPS` (verified against the live DB 2026-08-04) |
| Stale deal = no activity 14+ days; `lastActivityDate` drives it | `sales-the-way-we-work.html` Appendix B; `scripts/crm-pulse.py` `audit_flags`; `pipeline-monitoring-guide.html` §5 |
| Hygiene views exist: Open Pipeline, By Stage (€), Top Prizes, Closing This Quarter, Stale Deals, ⚠️ Data Gaps — no amount, Kill the Zebra, Quotes Needing Follow-Up, Quotes — Missing Quote Ref, Open Opps — No Next Action | `sales-the-way-we-work.html` §10; `pipeline-monitoring-guide.html` §5; `crm-user-guide.html` §6 |
| Data-quality reality: most open deals lack `closeDate` and `amount`; `quoteRef` blank on proposals; `lastActivityDate` blank | `docs/command-centre-v2-plan.md` constraint table; `pipeline-monitoring-guide.html` §7 "Known gaps"; `docs/data-model.md` Phase 2 backfill note. **Counts deliberately not quoted** (public repo, and they are stale). |
| Long-cycle deals are "mis-dated, not overdue" — re-date rather than nag | `docs/crm-pulse.md` "Long-cycle deal rating (decided 2026-07-20)" |
| Won deals become orders in Intact; Customer Operations runs delivery | `sales-the-way-we-work.html` §2 and §5; `pipeline-monitoring-guide.html` §2 |
| Closed Lost can be reopened by moving the stage | `sales-the-way-we-work.html` §6 table |
| Amounts can be EUR or GBP (GB office) | `scripts/uk-expansion-pulse.py` (`amountCurrencyCode`); sweep skill §2 (`currency` is authoritative, EUR or GBP); `docs/data-model.md` Company `office` (IRL / GB) |

## Deliberately excluded (public repo)

No deal values, pipeline totals, spend figures, margin percentages or gap counts
appear in the module — even though `pipeline-monitoring-guide.html`,
`command-centre-v2-plan.md` and `crm-user-guide.html` all contain them. Where an
example amount was needed the module describes it qualitatively ("a rough
estimate", "the quoted value"). Customer names used (Bluecloud, Musgrave,
Uniphar, Eason, McLernon) are name-only, with no commercial detail.

## Could NOT verify — all appear as `confirm` / `confirms` in the module

Module-level `confirms`:

1. The exact on-screen field labels our Twenty version shows (Amount Basis, Next
   Step Date, Last Activity Date, Weighted Value). The repo only ever names the
   API/DB field names.
2. Whether `weightedValue` recalculates automatically when `amount` or
   `probability` change. The sweep skill has to *recompute it manually* on every
   update, which strongly implies it does not auto-calculate — but nothing states
   the UI behaviour, so it is a confirm rather than a fact.
3. Whether the currency selector offers GBP on every deal, and how mixed-currency
   deals roll into the euro pipeline totals/tiles. `crm-pulse.py` divides
   `amountAmountMicros` and prints € with no FX handling visible.
4. Whether stage can be edited directly on the record or only by dragging on the
   kanban in our version.
5. Whether the Opportunity Owner field should be ignored entirely or kept in step
   with `company.salesRep` (reporting treats it as meaningless).

Per-howto `confirm`s:

6. *Create an opportunity* — the exact label/location of the control that adds a
   related opportunity from a company record. Appendix A says
   "Opportunities → + New Opportunity" but that is our own prose, not a verified
   v2.15 UI label, and the company-record route is not documented anywhere.
7. *Move a deal through the stages* — whether dragging a card into Closed Lost on
   the kanban prompts for a lost reason or leaves `lostReason` blank. Pure
   upstream-Twenty UI behaviour; nothing in the repo says.
8. *Keep an open deal honest* — whether `lastActivityDate` is ever stamped
   automatically by a workflow. `crm-pulse.py` falls back to
   `COALESCE(lastActivityDate, updatedAt::date)`, which suggests it is manual and
   often blank, but no automation is documented either way.
9. *Close a deal as won* — whether anything automated fires on the move to
   Customer (task, notification, Intact hand-off). Nothing in the repo describes
   one; the docs describe a manual hand-off.
10. *Close a deal as lost* — whether the CRM technically enforces `lostReason` as
    required on Closed Lost, or whether it is only our policy. Every source states
    it as a rule and a KPI, never as a validation.

## Screenshot keys referenced

`opp-kanban`, `opp-record` (module-level); `opp-new`, `opp-next-step`,
`opp-lost-reason` (per-howto). Captions are written as capture instructions and
tell the capturer to hide or blur amounts.
