# Brief — `quote-to-order.js`

Module: **Quote to Order** · track `ops`

## Sources used

| Ref | File | Sections |
|---|---|---|
| WoW | `C:\dev\IOR CRM\docs\customer-operations-the-way-we-work.html` | §2 (three tools, join key, golden rule), §3 (email → record table), §4 (responsibility matrix), §5 (decision authority), §6 (quote-to-order), §7 (SLAs), §9 (RMA), §11 (Sales Pipe mail), App. B, App. C |
| SWoW | `C:\dev\IOR CRM\docs\sales-the-way-we-work.html` | §2 split table + rule-of-thumb kicker (l.140–146) |
| DM | `C:\dev\IOR CRM\docs\data-model.md` | Phase 1 (Company `accountCode`), Phase 2 (Opportunity fields), Phase 3 (Aftercare), Phase 4 (Sales Transaction), Phase 5 (Case) |
| PULSE | `C:\dev\IOR CRM\docs\crm-pulse.md` | "(Sales Pipe mail)" routing (l.378–396) |

## Verified facts

**The boundary**
- Three tools, one system, each in its lane (WoW §2): sales@ = front door + transport, not a store of record; Twenty CRM = relationships + control (accounts, contacts, history, pipeline, cases, tasks, owner/status/next/due); **Intact ERP = system of record** for quotes, pro formas, orders, invoices, pricing, stock, real margin, dispatch.
- "One source of truth per fact. Intact owns money and documents; the CRM owns relationships and control; email carries information between them." (WoW §1 principles.)
- The join key: the quotation / pro forma / order number goes in the email subject every time — "the cheapest and most reliable link we'll ever build between our systems" (WoW §2). Example format from WoW §3 / App. B: *"Quotation 25926 — McLernon — Urovo DT66 battery"*.
- The golden rule: nothing important lives only in the inbox (WoW §2).
- `accountCode` (text) on Company = **Intact A/C code, the join key to sales data** (DM Phase 1). Same field name is the join key on Sales Transaction (DM Phase 4).
- **No order object exists in the CRM.** Confirmed by absence across all of DM Phases 1–5 and by WoW §2/§6 placing every document in Intact. WoW §3's email→record table maps an order to "Order → Opportunity to Won", i.e. the *Intact* order plus a CRM stage change.

**Documents and paths** (WoW §6)
- Quotation (pre-sale, pricing or price increase), Pro Forma (prepay account, paid before dispatch), Sales Order (credit account order confirmation), Invoice/Credit (after dispatch or to credit a return). All made in Intact.
- Prepay: order → Pro Forma → instant payment → dispatch → invoice. Credit: PO → Sales Order confirmation → dispatch → invoice on terms.
- 14-step end-to-end flow with owners (WoW §6 table) — condensed into the two flow howtos.
- Who prepares the quote: **Operations prepares in Intact; the salesperson decides the price only**; Operations sends from sales@. Same price as last time → Operations checks Intact and sends. New customers, non-standard requests, large/strategic opportunities stay salesperson-led. For a non-stocked product the salesperson makes the sourcing call (distributor, price, lead time) then hands it to Operations.
- Worked example (Genetiq, WoW §6): Honeywell 1200G scanners in stock, quote out and captured to the Opportunity; PO in with a Cork ship-to, Case opens for fulfilment; Sales Order + courier confirmed; Opportunity Won, Case closed on receipt. **Unit price and quantity-value stripped** for the public repo (quantity and PO number retained; no money).

**Ownership split**
- Rule of thumb (SWoW §2): "if it's about **winning the money**, it's sales. If it's about **delivering on the promise**, it's Customer Operations. When in doubt, it goes through sales@ and gets an owner either way."
- Sales side: relationship, commercial decisions/pricing/margin/price exceptions, the pipeline, account strategy, forecast honesty. Ops side: the sales@ inbox and SLAs, quote processing and order admin in Intact, supplier/courier chasing and delivery updates, Cases, keeping the customer informed.
- Decision authority verbatim scope (WoW §5): **Resolve alone** — acknowledge and own, request missing info, stock and lead times from Intact, standard quotes within agreed price/margin rules, chase suppliers and couriers, order confirmations, standard returns per policy, keep customer updated, escalate. **Needs sales approval** — non-standard pricing/discount, price exceptions, credit terms, any commercial promise, goodwill/write-offs, anything outside margin rules, commitments on strategic accounts. **Needs management approval** — new credit accounts, credit notes or compensation above the agreed limit, policy exceptions.
- Responsibility matrix (WoW §4) confirms Warranty/RMA = "Customer Ops (log)", approved by Tom (technical), escalates to Manager.

**Opportunity fields used** (DM Phase 2): `quoteRef` (quote/PO reference), `amount`, `closeDate`, `stage` (New/Screening/Meeting/Proposal/**Customer** = won, plus Closed Lost per WoW App. C), `nextStep`/`nextStepDate`, `lostReason` (Price / Lead Time / Lost to Competitor / No Budget / No Decision / Stalled / Other).

**Aftercare** (DM Phase 3): `serviceType` = RMA / Warranty / Advance Replacement / Lifecycle Refresh; `status` = Open / In Progress / Closed; `refreshDueDate`, `product` (→ Product), `reseller` (→ Company), `openedDate`, `closedDate`, `rmaNumber`, `serialNumber`, `quantity`, `warrantyEndDate`, `faultDescription`. WoW §9: Tom's system stays the single source of truth; the CRM logs only the RMA reference, date and a one-line summary; one shared code links the two; "we don't duplicate his records."

**Sales Transaction** (DM Phase 4): object exists — `transactionDate`, `documentType` (Invoice/Order/Credit Note), `documentRef`, `accountCode`, `netAmount`, `marginAmount`, `marginPct`, `quantity`, `salesRep`, relations to reseller/brand/product. **"Backfill from Intact via `accountCode` still pending (needs the data export)"** and listed again under "Not yet built / remaining" — so it is empty and not a source of truth. Stated as such in the module; no figures reproduced.

**"(Sales Pipe mail)" routing** (WoW §11, PULSE): forward to sales@ with `(Sales Pipe mail)` anywhere in the subject; the engine matches against open opportunities/cases/companies and updates or creates the right record; anything below the confidence gate becomes a "Review: Sales Pipe mail — …" task. "The engine never guesses."

## Could NOT verify (all appear as `confirm` / `confirms` in the .js)

1. **Whether the quotation-PDF reading backstop is live.** WoW §3 states it as fact ("the CRM reads the attached PDF and pulls the number, customer, value and lines automatically for a person to confirm"), but WoW App. C's starter roadmap lists "quotation-PDF reading as the linking backstop" under **Later (Q4)**. Direct contradiction in the same document; nothing in `crm-pulse.py` docs implements it. Written as needing confirmation, with the subject-line number presented as the only reliable link today. *(module `confirms`)*
2. Whether any automated data flow exists between Intact and the CRM, or whether `accountCode` + the subject convention are the only links. Nothing in the repo shows an Intact integration. *(module `confirms`)*
3. When the Sales Transaction backfill from Intact is expected and who owns the export. *(module `confirms`)*
4. Whether an Opportunity is expected for **every** quotation or only above some size/type. WoW §3 says a pricing enquiry becomes an Opportunity, with no threshold stated. *(module `confirms`)*
5. Whether the shared, versioned spec-sheet asset library (WoW §6) has actually been built and where it lives — described as a rule, but reads as intent. *(module `confirms`)*
6. Whether a fulfilment Case should be opened for **every** order or only where something needs chasing. WoW §6's Genetiq example opens one; the §3 triage table implies a Case only for a question/problem/chase. *(module `confirms`)*
7. Whether `accountCode` is populated on every trading company and who fills it when Intact opens a new account. *(howto: "Match a CRM customer to their Intact account")*
8. Whether Ops or the technical team creates the Aftercare record, and the naming convention for the Aftercare `name` field (DM says "label identifier" with no convention given). *(howto: "Log an RMA or warranty job as Aftercare")*

## Public-repo compliance

Deliberately stripped: the €95 unit price and the €357 sell price from the WoW §6 worked example and quote-preparation callout; the €1.3k pipeline figure and all dashboard KPI values from the mockups; `iorAnnualSpend` / `blendedMarginPct` / `netAmount` / `marginAmount` field *values*. Field **names** and their purpose are described where a user needs them (e.g. Opportunity `amount`), with no figures. Customer names retained (McLernon, Genetiq, Deycom) — all appear in source docs without commercial detail attached in the module.
