# Brief — mistakes

Module: `content/mistakes.js` · slug `mistakes` · track `all` ·
Displayed as **Getting It Right First Time**. Covers section 10 of the authoring
brief. Deliberately trap-heavy (11 `mistakes` entries) and field-light
(5 `fields`), per the module brief.

## Framing (changed 17 Aug 2026)

Sales have not gone live on the CRM, so the module must not read as a
retrospective on errors the team has made — there are none. Rewritten so that:

- the module is named forward (**Getting It Right First Time**) and the intro
  says plainly that nothing here is anybody's error;
- every trap is stated as a trap, with the habit that avoids it beside it —
  rendered as *Easy to get wrong* / *The trap* / *The habit*;
- every how-to carries a **worked example** in its `tip` (a real search, a real
  next step, a five-edit won-close, a lost-reason judgement call, a rotten view);
- inferred causes are gone. Previous wording claimed the existing duplicates
  came from people typing long names — the sweep skill lists the pairs, it does
  not say how they got there. The shapes (plural / capital / straight repeat) are
  described instead, which is observable from the pairs themselves;
- state-of-the-data facts are kept but attributed to the data load rather than to
  behaviour, and a sixth `confirm` asks whether the pairs get merged before
  go-live.

A ninth quiz question and a fifth how-to ("Write a next step somebody else could
act on") were added — the next-step rule was already verified below but had no
how-to of its own here.

## Verified facts and where they come from

| Claim in the module | Source |
|---|---|
| Real duplicate companies exist — STL Technology Solutions ×2, Qualcom ×2, McLernons vs McLernon Computers, Touchstore vs TouchStore | `IOR CRM/.claude/skills/sales-pipeline-sweep/SKILL.md` §2 |
| When twins exist, work the record holding open opportunities, else the one with `salesRep` set; never split a rep's quotes across twins | same, §2 |
| "Qualcom" is never "Qualcomm"; sheet "McLernons" = CRM "McLernon Computers" | same, §2 known name drift |
| Ownership lives on `company.salesRep`, so a deal with a null `companyId` belongs to no rep | `scripts/crm-pulse.py` lines ~3753–3784 ("an opportunity with a NULL companyId or a company with no rep belongs to no rep at all"); line 2561 ("opportunity.ownerId is all Stephen and meaningless") |
| `salesRep` codes SB / PM / CL / TK / MM / MMU / HOUSE; `accountOwner` is hidden as misleading | `IOR CRM/STATUS.md` line 14; `docs/pulse-system-overview.html` lines 335 and 373; `docs/crm-user-guide.html` §6; `.claude/skills/ior-sales-campaign/SKILL.md` line 36 |
| Company = reseller / SI / VAR / IT team we invoice; End Customer = the deployment behind the deal; the "two-horse" view | `docs/data-model.md` "The two-layer relationship" and Phase 5 "End Customer — new object"; `docs/crm-user-guide.html` scene 2 (Musgrave / CBE) |
| Opportunity has an `endCustomer` relation | `docs/data-model.md` Phase 5 related changes |
| Stage `Customer` is our won stage; `Closed Lost` is the loss stage; full ladder New → Screening → Meeting → Proposal → Customer / Closed Lost | `docs/sales-the-way-we-work.html` §5 and §6; `docs/data-model.md` Phase 2 (`stage` New/Screening/Meeting/Proposal/Customer) |
| A closed-lost deal can be reopened by moving its stage rather than creating a new one | `docs/sales-the-way-we-work.html` §6 stage table; `sales-pipeline-sweep/SKILL.md` §2 reopen rule ("must reopen that opp … never create a duplicate") |
| Lost reason options and the requirement to set one on every loss | `docs/data-model.md` Phase 2; `docs/sales-the-way-we-work.html` §3 rule 5 and §6; `docs/pipeline-monitoring-guide.html` §7 golden rules |
| Every open deal needs a next step + next step date | `docs/sales-the-way-we-work.html` §3 rule 3; `docs/pipeline-monitoring-guide.html` §3 and §5 ("Open Opps — No Next Action") |
| `quoteRef` expected at Proposal; missing on the proposals audited | `docs/pipeline-monitoring-guide.html` §5 and §7 gap 2 |
| Hardcoded date filters in saved views go stale; sort-based views are preferred because they never rot | `docs/command-centre-v2-plan.md` — constraints table ("Hardcoded date filters rot (Stale Deals view still filters on 2026-06-17)"), Band 2 ("sort-based so they never rot"), and "Refresh/rot policy" |
| "Closing This Quarter (Q3)" needs its dates refreshed each quarter | `docs/crm-user-guide.html` §6 Opportunities views |
| Synced email in the CRM shows subject + participants only; bodies are not readable on the record | `docs/mail-sync-enable.md` step 3; `docs/customer-operations-the-way-we-work.html` line 210 |
| Formal sales work goes through sales@ with the salesperson in cc; quote number in the subject links the mail | `docs/sales-the-way-we-work.html` §8; `docs/crm-user-guide.html` "Everyday use — the short version" |
| Intact is the system of record for orders/invoicing; the CRM holds the pursuit; `accountCode` and `quoteRef` are the join points | `docs/data-model.md` Phase 1 + Phase 4; `docs/sales-the-way-we-work.html` §2 split table and §5 ("Order lands → move to Customer — Customer Operations takes the delivery from here") |
| Won deals must not linger at Proposal — the quote follow-up view keeps chasing them | `docs/pipeline-monitoring-guide.html` §4 "Quotes Needing Follow-Up" (its sample rows include deals whose next step is "PO received; confirm order & dispatch date") |
| Unowned accounts show in no rep's Pulse, so new business accumulates unseen | `docs/pulse-system-overview.html` lines 422–423; `scripts/crm-pulse.py` §"New & unassigned" |

## Deliberately not stated

- Counts and € values from `sales-pulse-plan.html` §1,
  `command-centre-v2-plan.md` and `pipeline-monitoring-guide.html` — public repo.
- `RMC` as a current rep code (departed 17 Jul 2026).
- The Sales Pulse "Assign →" button flow. It is real
  (`docs/sales-pulse-plan.html` §2, shipped 12 Aug) but it is a Pulse-email
  feature, not a CRM screen, so it belongs in the `pulse` module rather than here.

## Could NOT verify — carried as `confirm` / `confirms` in the .js

1. Whether a **merge tool** for duplicate companies/people exists, and who may use it.
2. Whether the CRM **blocks saving an opportunity with no company linked**, or simply
   allows it (the consequence — invisible to rep-scoped reporting — *is* verified from
   `crm-pulse.py`; the enforcement is not).
3. Whether anything **enforces a lost reason** on a Closed Lost move. Note also that
   `sales-pipeline-sweep/SKILL.md` §2b hedges on the `lostReason` field type
   ("if it is a SELECT with no fitting option, put the marker in `nextStep` instead"),
   so even the sweep skill does not assume the schema.
4. Whether **Closed Lost sits in the same stage list** as New/Screening/Meeting/
   Proposal/Customer. `data-model.md` Phase 2 lists the `stage` enum without
   Closed Lost, while `sales-the-way-we-work.html` §6 treats it as a stage — an
   unreconciled discrepancy, so the module asks rather than asserts.
5. **Which saved views still carry hardcoded date filters** today, and whether Stale
   Deals has been converted to sort-based (planned in `command-centre-v2-plan.md`,
   completion not recorded).
6. Whether a **won deal should also get a forecast category or a linked Sales
   Transaction** — the Sales Transaction object exists but the Intact backfill is
   still outstanding (`docs/data-model.md` "Not yet built / remaining").
7. Whether anything else is expected at won-close (handover Task to Customer
   Operations). The WoW doc implies a handover but names no CRM artefact.

## Screenshot keys used

`dq-stale-deals`, `house-unassigned` — shared with the data-quality module so the
same captures serve both; neither captured yet.
