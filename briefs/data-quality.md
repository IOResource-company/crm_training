# Brief — data-quality

Module: `content/data-quality.js` · slug `data-quality` · track `all` ·
Covers section 7 of the authoring brief.

## Verified facts and where they come from

| Claim in the module | Source |
|---|---|
| `salesRep` is the ownership field on Company; values SB / PM / CL / TK / MM / MMU / HOUSE | `IOR CRM/docs/data-model.md` §"Sales Target — new object" (`salesRep` select mirrors `Company.salesRep`); `IOR CRM/.claude/skills/ior-sales-campaign/SKILL.md` line 36 ("the IOR `salesRep` code (SB/PM/CL/TK/MM/HOUSE)"); `docs/pulse-system-overview.html` §6 roster table gives MMU = Marcus Murphy, RMC = Ross McClure (departed 17 Jul) |
| The built-in `accountOwner` is misleading and deliberately hidden | `IOR CRM/STATUS.md` line 14 — record pages reordered "salesRep-first; misleading accountOwner hidden everywhere"; `docs/pulse-system-overview.html` line 373 — "Ignore `accountOwnerId`: it reads as Stephen on everything"; `docs/crm-user-guide.html` §6 — "The misleading 'Account Owner' column is gone" |
| Ownership drives which rep sees an account; unowned accounts are effectively invisible | `scripts/crm-pulse.py` lines ~3106–3160 and ~3753–3784 (ownership lives on `company.salesRep`; a company with no rep "belongs to no rep at all"; "a new customer is invisible"); `docs/pulse-system-overview.html` line 422 |
| A meaningful number of companies sit unowned | `docs/sales-pulse-plan.html` §1 — unassigned accounts row; `docs/pulse-system-overview.html` line 457. Deliberately stated without figures (public repo). |
| `HOUSE — Unassigned` is a saved Companies view, target empty | `docs/sales-the-way-we-work.html` §10 and §12; `docs/crm-user-guide.html` §6 Companies views |
| Real duplicate company records exist: 2× STL Technology Solutions, 2× Qualcom, McLernons vs McLernon Computers, Touchstore vs TouchStore | `IOR CRM/.claude/skills/sales-pipeline-sweep/SKILL.md` §2 ("The CRM has duplicate company records…") |
| Prefer the twin that already holds open opportunities, else the one with `salesRep` set; never split a rep's quotes across twins | same, `sales-pipeline-sweep/SKILL.md` §2 |
| Short-name convention ("McLernons — …", not the full legal name) | `sales-pipeline-sweep/SKILL.md` §2, opportunity naming rule |
| `accountCode` is the Intact A/C code and the join key to sales data | `docs/data-model.md` Phase 1 Companies fields; Phase 4 Sales Transaction ("Backfill from Intact via `accountCode`") |
| `amountBasis` exists with QUOTED / ESTIMATED semantics | `sales-pipeline-sweep/SKILL.md` §2 (`amountBasis: "QUOTED"`, "never set amountBasis for a valueless row"); `docs/command-centre-v2-plan.md` constraints table ("27 valued: 21 est + 6 quoted"); `scripts/crm-pulse.py` line 2569 selects `o."amountBasis"` |
| Opportunity fields `probability`, `nextStep`, `nextStepDate`, `lastActivityDate`, `quoteRef`, `leadSource`, `forecastCategory`, `lostReason` | `docs/data-model.md` "Live schema as built — Phase 2" |
| Lost reason options: Price · Lead Time · Lost to Competitor · No Budget · No Decision · Stalled · Other | `docs/data-model.md` Phase 2; `docs/sales-the-way-we-work.html` §6 |
| Stages New → Screening → Meeting → Proposal → Customer (won) / Closed Lost | `docs/sales-the-way-we-work.html` §6 and Appendix B |
| Quote ref expected at Proposal | `docs/pipeline-monitoring-guide.html` §3 stage table and §5 "Quotes — Missing Quote Ref" view |
| Many open opportunities lack `amount` and `closeDate`; this is why Data Gaps / Stale Deals views exist | `docs/command-centre-v2-plan.md` "Hard constraints found in audit" (no closeDate / no amount rows); `docs/pipeline-monitoring-guide.html` §5 and §7 "Known gaps to close"; `docs/data-model.md` Phase 2 note ("Data backfill still pending"). Counts deliberately omitted — public repo. |
| `lastActivityDate` blank makes deals read as stale | `docs/pipeline-monitoring-guide.html` §5 amber callout and §7 gap 3 |
| Synced email shows subject + participants in the CRM; bodies are not readable on the record | `docs/mail-sync-enable.md` step "Set message-sync visibility to 'Subject and metadata'"; `docs/customer-operations-the-way-we-work.html` line 210; `docs/worklog-2026-07-01.md` line 23 |
| Notes / Tasks are where meeting and call substance belongs | `docs/sales-the-way-we-work.html` §8 |
| Five-minute-a-day discipline; amount / stage / next step / date | `docs/sales-the-way-we-work.html` §3 golden rules |
| Quote number in the subject line links mail to the record | `docs/sales-the-way-we-work.html` §8; `docs/crm-user-guide.html` "Everyday use — the short version" |

## Deliberately not stated

- **Record counts, € values, margin, spend.** Available in
  `command-centre-v2-plan.md`, `pipeline-monitoring-guide.html` and
  `sales-pulse-plan.html`, but the training repo is public. Written as "many",
  "a meaningful number".
- **RMC (Ross McClure)** as a live `salesRep` code — he departed 17 Jul 2026
  (`docs/pulse-system-overview.html` §6), so the module lists the current codes only.
- **Bodies-in-Postgres nuance.** `docs/incident-runbook.md` §"Storage policy"
  records that Twenty v2.15 stores bodies in Postgres regardless of the
  visibility setting, and automation reads them. That is an
  admin/GDPR fact, not a user-facing one: for a CRM *user* the body is not
  visible on the record, which is what the module says.

## Could NOT verify — carried as `confirm` / `confirms` in the .js

1. Whether the CRM offers a **merge tool** for duplicate companies/people, who may
   use it, and the fallback process if it does not. (Upstream-Twenty question; no
   evidence in the IOR repo. `sales-pipeline-sweep/SKILL.md` works *around*
   duplicates rather than merging them, which is suggestive but not proof.)
2. Whether the CRM **warns at creation time** on a similar company name.
3. Whether **any field is genuinely mandatory** at save (company on an opportunity,
   amount, close date, lost reason). Everything in the repo enforces via views and
   habit, nothing shows a validation rule.
4. Whether **Data Gaps — no amount** and **Stale Deals** still exist: both were
   built as work-to-zero lists explicitly marked "then delete"
   (`docs/crm-user-guide.html` §6), and `command-centre-v2-plan.md` says Stale Deals
   was being reworked to a sort-based view.
5. Whether a saved view exists for **open opps missing a close date** (distinct from
   the missing-amount view). Not found in any view list.
6. Whether `accountCode` is **validated or de-duplicated** anywhere.
7. The **exact UI labels** on `amountBasis` (Quoted / Estimated) and whether a third
   option exists — only the API enum values appear in the repo.
8. Whether **HOUSE is an actual option** in the `salesRep` select or unowned accounts
   are simply left blank. Both forms appear: `data-model.md` lists "House" in the
   enum, `crm-pulse.py` and `sales-pulse-plan.html` treat unowned as
   `salesRep IS NULL`, and `pulse-system-overview.html` line 438 says
   "`salesRep = HOUSE` or null". Which the HOUSE view filters on is unconfirmed.
9. Whether **attachments** to sales@ are retained anywhere reachable from a record.
   `customer-operations-the-way-we-work.html` line 210 and `incident-runbook.md`
   both say attachments are NOT stored — but whether a user has any in-CRM route to
   the quote PDF is not documented, so it is asked rather than asserted.

## Screenshot keys used

`dq-data-gaps`, `dq-stale-deals`, `house-unassigned`, `dq-no-account-code` —
none captured yet; the guide renders labelled placeholders.
