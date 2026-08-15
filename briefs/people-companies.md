# Brief — people-companies

Module: `content/people-companies.js` · slug `people-companies` · track `all`

## Verified facts and where they came from

| Fact used in the module | Source |
|---|---|
| Two-layer model: we sell to resellers / SIs / VARs / IT teams; behind each deal sits an end-client deployment | `IOR CRM/docs/data-model.md` — "The two-layer relationship (important)" |
| Company = who we sell to; End Customer = who the kit is for (Musgrave, Uniphar, Eason) | `docs/crm-user-guide.html` "The building blocks" map + scene 2 |
| End Customer is a first-class object as of Phase 5 (2026-07-01), migrated out of `accountType=End-Client` company records | `docs/data-model.md` Phase 5; `docs/endcustomer-migration-log.md` |
| End Customer fields: name, sector, region (IRL/GB), status, deploymentStage (Evaluating/Awarded/Rolling out/Live), incumbentCompetitor, siteCount, notes | `docs/data-model.md` Phase 5 |
| `resellerOfRecord` (→ Company), inverse "Managed End Customers"; `Opportunity.endCustomer` is the two-horse link | `docs/data-model.md` Phase 5 |
| "Two-horse view" = one End Customer record with competing resellers' deals rolled up | `sales-the-way-we-work.html` Appendix B; `crm-user-guide.html` scene 2 |
| `salesRep` is the real ownership field; values SB / PM / RMC / CL / TK / MM / MMU / HOUSE | `docs/data-model.md` Phase 2 (Sales Target mirrors Company.salesRep); `scripts/sales-reps.json` `_comment` — "Codes match the CRM salesRep enum exactly: SB PM RMC CL TK MM MMU HOUSE" |
| Rep names behind the codes; Ross McClure (RMC) departed 2026-07-17 and his book was reassigned 2026-08-04 | `scripts/sales-reps.json`; `docs/pulse-system-overview.html` §6 table |
| `accountOwner` is misleading (reads as Stephen on everything) and is hidden across views/record pages | `docs/pulse-system-overview.html` §7 callout; `STATUS.md` 2026-07-01; `crm-user-guide.html` §6 lede |
| `Company.salesRep` is the single field that drives the book split, pipeline attribution and pulse routing | `docs/pulse-system-overview.html` §7; `scripts/crm-pulse.py` (ownership derived from `company.salesRep`, opportunity ownerId "meaningless") |
| `accountType` values RESELLER / SYSTEM_INTEGRATOR / VAR / IT_TEAM / SOFTWARE_VENDOR / END_CLIENT | `docs/data-model.md` Phase 1; `scripts/uk-expansion-pulse.py` label map; `exports/customers-review-2026-06-21.csv` real values |
| `accountTier` PLATINUM / STANDARD / PROSPECT; `accountStatus` ACTIVE / DORMANT / LAPSED / PROSPECT | `docs/data-model.md` Phase 1; `sales-the-way-we-work.html` §4 + Appendix B |
| Prospect graduates to Active on first order; Dormant/Lapsed are the win-back list | `sales-the-way-we-work.html` §4 "The account motions" |
| `accountCode` = the Intact A/C code, join key to sales data | `docs/data-model.md` Phase 1; real codes visible in `exports/customers-review-2026-06-21.csv` |
| `office` select IRL / GB; `verticals` = the six sectors | `docs/data-model.md` Phase 1 + "Vertical (the six sectors)" |
| Platform stack and incumbent competitor gate hardware choice | `docs/data-model.md` Phase 1; `sales-the-way-we-work.html` §4 field table |
| People: `company` is many-to-one; `decisionRole` = ECONOMIC_BUYER / CHAMPION / TECHNICAL_EVALUATOR / APPROVER / INFLUENCER / BLOCKER | `docs/data-model.md` Phase 1 People; `.claude/skills/ior-sales-campaign/SKILL.md` person-fields table |
| `linkedinStatus` (People, created 2026-07-20): NOT_STARTED → REQUEST_SENT → CONNECTED → IN_CONVERSATION → REPLIED; it **is** the campaign membership selector ("set on campaign contacts and nobody else") | `.claude/skills/ior-sales-campaign/SKILL.md`; `scripts/uk-expansion-pulse.py`; `docs/pulse-system-overview.html` §5 |
| A "Decision Makers" People view exists (economic buyers, approvers, champions) | `docs/crm-user-guide.html` §6 |
| Real duplicate company records: 2× STL Technology Solutions, 2× Qualcom, McLernons vs McLernon Computers, Touchstore vs TouchStore; prefer the record holding open opportunities, else the one with salesRep set; never split a rep's quotes across twins | `.claude/skills/sales-pipeline-sweep/SKILL.md` §2 "Match each row to the CRM" |
| Name drift is normal ("McLernons" = "McLernon Computers"; Qualcom is never Qualcomm) | same |
| An email from someone not yet in People is stored but shows nowhere | `sales-the-way-we-work.html` §8 habit 3 |
| HOUSE / unassigned accounts are effectively invisible — only whoever covers HOUSE sees them | `scripts/crm-pulse.py` (unowned-company section commentary); `sales-the-way-we-work.html` §3 rule 1 |
| Notes carry meeting/call intelligence on the company or deal | `sales-the-way-we-work.html` §8 kicker |

## Could NOT verify — carried into the module as `confirm` / `confirms`

Per-how-to (`confirm`):
- Whether the known duplicate pairs have been merged, and who to report a new duplicate to.
- What we do when a contact changes employer (repoint the record vs create a second one).
- Whether an End Customer can carry more than one Reseller of Record, or whether competition is only visible via the linked opportunities.
- Whether there is a house rule on naming new company records (trading name vs full legal name).

Module-level (`confirms`):
- Merge status of the known duplicates and the reporting route for new ones.
- Whether SUPPLIER and DISTRIBUTOR are selectable in the Account Type picklist for manual use, or only set automatically by the Pulse "Add to contacts" action (they appear in `scripts/supplier-domains.json` and `uk-expansion-pulse.py` but not in `data-model.md`).
- Whether `accountOwner` is hidden on *every* view and record page, or only those rebuilt on 2026-07-01.
- Whether a person can be linked to more than one company (e.g. an upstream platform vendor as well as their employer).
- Whether `verticals` is still the original six sectors.
- Whether Twenty's merge tool is available to ordinary users on our version (v2.15.0), or duplicates need an admin.
- The naming house rule.

## Deliberately excluded

- All spend, margin, YoY and deal-value figures — `exports/customers-review-2026-06-21.csv` and `docs/sales-sweep-log.md` contain them; the repo is public, so none were used. Real customer names were used (permitted), with no commercial numbers attached.
- Intact account codes for specific customers (available in the export) — the concept is taught, no live codes are printed.
- The legacy Company self-relations `endClientsServed` / `resellerOfRecord`, now redundant after the Phase 5 End Customer migration — omitted to avoid teaching a deprecated path.
