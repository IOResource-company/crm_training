{
  slug: "mistakes",
  name: "Common Mistakes",
  track: "all",
  tagline: "The ten things that actually go wrong here — and the fix for each.",
  intro: "<p>This is not a list of theoretical CRM sins. Every one of these has happened in our system, and most of them are still visible in the data: duplicate companies, deals with no company linked, accounts sitting unowned, won business still parked at Proposal.</p><p>None of them are anyone's fault in particular. They are what happens when a busy person is one click away from a record and thirty seconds from being late for something. The fixes are all small, and they all happen at the moment of the mistake rather than in a clean-up project later.</p><p>Read the list once. Then use the three how-tos below when you actually need them — checking for a duplicate, closing a deal won, closing a deal lost.</p>",
  shots: [
    {key: "dq-stale-deals", cap: "Opportunities in the Stale Deals view, oldest last-activity date at the top"},
    {key: "house-unassigned", cap: "The HOUSE — Unassigned companies view, showing accounts with no Sales Rep"}
  ],
  howtos: [
    {
      title: "Check for a duplicate before you create a company",
      when: "Every time, before clicking New Company — this is the single highest-value thirty seconds in the CRM",
      steps: [
        "Use the search box at the top of the sidebar rather than the Companies list, so a filter left over from earlier cannot hide the record from you.",
        "Search a <strong>short distinctive fragment</strong>, not the full name from the purchase order: <code>mclern</code>, <code>qualcom</code>, <code>touchst</code>, <code>stl</code>.",
        "Try it three ways: singular and plural, with and without spaces, and the abbreviation people actually say out loud.",
        "Search the customer's email domain too — a contact already in People will point you straight at the company record.",
        "If you get a hit, use it. If you get two hits for the same customer, use the one that already holds the open opportunities or has a Sales Rep set, and flag the other.",
        "Only when all of that comes back empty, create the record — trading name, no <code>Ltd</code> unless you need it to disambiguate, then set <strong>Sales Rep</strong> and <strong>Account code</strong> straight away."
      ],
      tip: "Our real duplicates all share one shape: someone typed the long formal version of a name that already existed in a shorter everyday form. Search short.",
      important: "We already carry duplicates — <strong>STL Technology Solutions</strong>, <strong>Qualcom</strong>, <strong>McLernons</strong> versus <strong>McLernon Computers</strong>, <strong>Touchstore</strong> versus <strong>TouchStore</strong>. Never split one customer's deals across twins: a big account then reads as two small ones.",
      mistake: "Creating the company first and searching afterwards, when the duplicate is already saved.",
      confirm: "Whether the CRM can merge two company records, who is permitted to do it, and what we do with the losing record if it cannot."
    },
    {
      title: "Close a deal as won, properly",
      when: "The purchase order lands",
      steps: [
        "Open the opportunity — not the company, the deal itself.",
        "Move the <strong>Stage</strong> to <strong>Customer</strong>. That is our won stage; there is no separate Closed Won.",
        "Make the <strong>Amount</strong> match what was actually ordered, and set <strong>Amount basis</strong> to <em>Quoted</em>.",
        "Set the <strong>Close date</strong> to the date the order actually landed, not the date you originally hoped for.",
        "Put the PO or quotation reference in <strong>Quote ref</strong> so the deal ties back to the paperwork.",
        "Check the <strong>Company</strong>, <strong>Contact</strong> and, where there is a deployment behind it, the <strong>End Customer</strong> are all linked.",
        "Write a short <strong>Note</strong> on the deal saying what was ordered and anything Customer Operations needs to know — the order itself lives in Intact, not here."
      ],
      tip: "Do it the same day. A won deal left at Proposal keeps appearing in the quote follow-up view, and someone will chase a customer who has already bought.",
      important: "Stage <strong>Customer</strong> means won. If you leave the deal at Proposal, it inflates open pipeline, distorts the forecast and hides the win from the numbers.",
      mistake: "Recording the win by editing the company record or writing a note, and leaving the opportunity stage untouched.",
      confirm: "Whether anything else is expected on a won deal at close — a forecast category change, a linked Sales Transaction, or a handover Task to Customer Operations."
    },
    {
      title: "Close a deal as lost, properly",
      when: "The customer says no, buys elsewhere, or the deal has been dead long enough that you know",
      steps: [
        "Open the opportunity and move the <strong>Stage</strong> to <strong>Closed Lost</strong>.",
        "Set <strong>Lost reason</strong>: Price · Lead Time · Lost to Competitor · No Budget · No Decision · Stalled · Other. Never leave it blank.",
        "If it went to a competitor, set the competitor fields as well — that is what feeds the displacement scoreboard and tells us where we are bleeding.",
        "Add one line in a <strong>Note</strong> if there is anything worth knowing: who won it, what price beat us, when the customer might look again.",
        "Clear or complete the <strong>Next step</strong> so the deal stops appearing on action lists.",
        "If the customer comes back later, reopen the same deal by moving its stage — do not create a fresh one."
      ],
      tip: "Closing losses is not an admission, it is the raw material for win rate and for supplier price conversations. A pipeline full of zombies helps nobody.",
      important: "A blank <code>lostReason</code> makes the deal useless for analysis. Ten seconds of picking from the list is the whole cost.",
      mistake: "Leaving dead deals open at Proposal because closing them feels like giving up — which quietly makes the whole open pipeline figure wrong.",
      confirm: "Whether Closed Lost is a stage in the same list as New, Screening, Meeting, Proposal and Customer, and whether anything stops you saving it without a lost reason."
    },
    {
      title: "Sanity-check a saved view before you trust it",
      when: "Any time a view looks suspiciously empty, suspiciously full, or is about to be quoted in a meeting",
      steps: [
        "Open the view and look at the filter chips at the top of the list — they tell you exactly what is being included.",
        "Look specifically for a <strong>hardcoded date</strong> in the filter. Several of our views were built with a fixed date rather than a relative one, and a fixed date rots the moment the calendar moves past it.",
        "Check the same for anything named after a quarter — a Closing This Quarter view needs its dates refreshed every quarter or it silently shows the wrong window.",
        "Prefer the <strong>sort-based</strong> views where they exist: a list sorted by next step date or last activity date with the oldest on top never goes stale.",
        "If a count looks wrong, open two or three records and check them by hand before you repeat the number to anyone.",
        "Tell whoever maintains the views rather than quietly working around a broken one."
      ],
      tip: "\"The view says zero\" is not the same as \"there is nothing to do\". Empty can mean fixed, or it can mean filtered out.",
      important: "A view is a saved question, not a fact. If the question has a stale date in it, the answer is stale too.",
      mistake: "Reporting a number straight off a saved view in the Monday review without glancing at what the view is actually filtering on.",
      confirm: "Which of our current saved views still carry hardcoded date filters, and whether the Stale Deals view has been converted to a sort-based one."
    }
  ],
  fields: [
    {k: "salesRep", v: "Company ownership — <code>SB</code>, <code>PM</code>, <code>CL</code>, <code>TK</code>, <code>MM</code>, <code>MMU</code>, <code>HOUSE</code>. <code>HOUSE</code> or blank means nobody owns it. Not to be confused with the built-in <strong>Account Owner</strong> field, which is hidden across our views because it is misleading."},
    {k: "stage", v: "New → Screening → Meeting → Proposal → <strong>Customer</strong> (won) or <strong>Closed Lost</strong>. The stage is a fact about the deal, not a feeling about it."},
    {k: "lostReason", v: "Required on every Closed Lost deal: Price · Lead Time · Lost to Competitor · No Budget · No Decision · Stalled · Other. Blank here is the most common avoidable gap in the pipeline."},
    {k: "company vs endCustomer", v: "<strong>Company</strong> is who we invoice — the reseller, integrator or VAR. <strong>End Customer</strong> is the business the kit is actually for. Mixing them up breaks the two-horse view where competing resellers chase the same site."},
    {k: "nextStep &amp; nextStepDate", v: "The action and its due date. A deal without them cannot appear on anybody's list, so it goes quiet by default rather than by accident."}
  ],
  tips: [
    "Almost every mistake in this module is fixed by doing one thing at the moment it happens rather than in a clean-up later. Thirty seconds now, or somebody's afternoon in a month.",
    "If you are unsure whether something belongs in the CRM, put it in. A note nobody needed costs nothing; a decision that lived only in one person's inbox costs a customer.",
    "The order is in Intact. The relationship, the deal and the reasons are in the CRM. When the two disagree about what was ordered, Intact wins."
  ],
  mistakes: [
    {m: "Creating a second company record because the search for the full legal name came back empty.", fix: "Search a short distinctive fragment first — <code>mclern</code>, <code>qualcom</code>, <code>touchst</code> — and try the plural and the spacing. We already carry twins of STL Technology Solutions, Qualcom, McLernons/McLernon Computers and Touchstore/TouchStore."},
    {m: "Creating an opportunity with no company linked.", fix: "Create the deal from the company record, or link the company before you save. Ownership and reporting hang off the company — an unlinked deal belongs to no rep, appears in no Pulse and counts in nobody's pipeline."},
    {m: "Putting the end user in the Company field because that is who the kit is for.", fix: "<strong>Company</strong> is the reseller or integrator we invoice. The site behind the deal goes in <strong>End Customer</strong>. Both together are what let you see every reseller chasing the same end customer."},
    {m: "Leaving a won deal sitting at Proposal after the PO arrives.", fix: "Move the stage to <strong>Customer</strong> the same day. Until you do, the deal inflates open pipeline, keeps showing in quote follow-up lists, and the win is missing from the numbers."},
    {m: "Closing a deal lost and leaving lostReason blank.", fix: "Pick a reason from the list every time. Lost reasons are how we spot whether we are losing on price, on lead time or to a specific competitor — a blank teaches us nothing."},
    {m: "Updating the deal but not setting a next step, so it quietly goes stale.", fix: "Write one concrete <code>nextStep</code> with a <code>nextStepDate</code> before you leave the record. \"Follow up quotation 2119 with Fiachra, Thursday\" — not \"chase\"."},
    {m: "Keeping the important detail in a personal inbox, or assuming the CRM captured an email body.", fix: "Synced email shows subject and participants only — you cannot read the body on the record. Type what matters into a <strong>Note</strong> on the company or the deal. Formal sales work goes through sales@ with you in cc."},
    {m: "Typing the customer's name whichever way it came out this time.", fix: "Use the trading name, keep the customer's own spelling and capitalisation, and leave off <code>Ltd</code> unless you need it to tell two businesses apart. Touchstore and TouchStore are one company."},
    {m: "Leaving a new account on HOUSE, or with a blank Sales Rep, for somebody else to claim.", fix: "Set <code>salesRep</code> the day the record exists. Unowned accounts show in no rep's Sales Pulse, so in practice a new customer is invisible until somebody claims it."},
    {m: "Quoting a number straight off a saved view whose date filter went stale months ago.", fix: "Check the filter chips before you trust the count, prefer sort-based views where the oldest floats to the top, and get a rotten date filter fixed rather than working around it."},
    {m: "Looking for an order, a delivery date or an invoice in the CRM.", fix: "<strong>Intact is the system of record</strong> for orders, stock and invoicing. The CRM holds the pursuit and the relationship. Link them with <code>quoteRef</code> on the deal and <code>accountCode</code> on the company."}
  ],
  confirms: [
    "Whether the CRM has a merge tool for duplicate companies and people, or whether duplicates can only be retired by hand.",
    "Whether the CRM prevents you saving an opportunity with no company linked, or whether it simply allows it and the deal disappears from rep-scoped reporting.",
    "Whether anything enforces a lost reason when a deal is moved to Closed Lost.",
    "Which saved views still filter on a hardcoded date, and which have been rebuilt as sort-based views that cannot go stale.",
    "Whether a won deal should also get a forecast category or a linked Sales Transaction, given the Intact backfill is still outstanding."
  ],
  quiz: [
    {
      q: "A PO arrives for a deal sitting at Proposal. What is the mistake to avoid?",
      o: ["Updating the amount", "Leaving the stage at Proposal", "Adding the quote ref", "Writing a note"],
      c: 1,
      e: "Move it to Customer, our won stage. Left at Proposal it inflates open pipeline and keeps showing up in quote follow-up lists."
    },
    {
      q: "You are logging a deal where a reseller is supplying kit to a large grocery chain. What goes in Company?",
      o: ["The grocery chain", "The reseller we invoice", "Whichever is bigger", "Both, separated by a slash"],
      c: 1,
      e: "Company is the trade account we invoice. The grocery chain goes in End Customer, which is what lets competing resellers chasing the same site roll up in one view."
    },
    {
      q: "Why is a blank lostReason a real problem?",
      o: ["The deal cannot be reopened", "The record will be deleted", "We lose the pattern of why we lose — price, lead time, competitor", "The stage will not save"],
      c: 2,
      e: "Lost reasons are the cheapest market research we get. Patterns in Price and Lead Time go straight into supplier conversations."
    },
    {
      q: "A saved view shows a suspiciously small number just before the Monday review. What do you do first?",
      o: ["Quote it — the view is the system of record", "Check the filter chips for a hardcoded date", "Rebuild the view from scratch", "Ignore the view and count by hand every week"],
      c: 1,
      e: "Several of our views were built with fixed dates that rot over time. Check what the view is actually filtering on before you trust the count."
    },
    {
      q: "Where does an order live once it is placed?",
      o: ["The CRM opportunity record", "Intact ERP", "The sales@ inbox", "A note on the company"],
      c: 1,
      e: "Intact is the system of record for orders, stock and invoicing. The CRM holds the pursuit; quoteRef and accountCode are how the two tie together."
    },
    {
      q: "A customer email contains the delivery date they have committed to their own client. What must you do?",
      o: ["Nothing — the synced email carries the body onto the record", "Type it into a Note or the deal's next step", "Forward it to sales@ and rely on the sync", "Flag the email in your mailbox"],
      c: 1,
      e: "The CRM shows subject and participants only. If it is in the body, it does not exist in the CRM until somebody types it in."
    },
    {
      q: "You create a new company for a customer you just won. What are the two fields to fill before you move on?",
      o: ["Website and LinkedIn", "Sales Rep and Account code", "Annual revenue and staff count", "Account Owner and vertical"],
      c: 1,
      e: "salesRep so it is not unowned, and accountCode so it can be reconciled against Intact. Account Owner is the hidden, misleading field — do not use it."
    },
    {
      q: "Which of these is the safest way to avoid creating a duplicate company?",
      o: ["Search the full legal name from their PO", "Search a short distinctive fragment and a couple of variants", "Scroll the Companies list alphabetically", "Ask a colleague if they remember the customer"],
      c: 1,
      e: "Short fragments catch variants in spacing, plurals and capitalisation — which is exactly where every duplicate we carry came from."
    }
  ],
  flashcards: [
    {q: "Won deal — what changes?", a: "Stage moves to Customer, amount matches the order, amountBasis Quoted, real close date, quote ref filled."},
    {q: "Lost deal — what changes?", a: "Stage moves to Closed Lost and lostReason is set. Never leave the reason blank."},
    {q: "Company or End Customer?", a: "Company is the reseller we invoice. End Customer is the business the kit is actually for."},
    {q: "Why can a deal with no company linked disappear?", a: "Ownership lives on the company via salesRep, so an unlinked deal belongs to no rep and shows in no rep-scoped view or Pulse."},
    {q: "When can you not trust a saved view?", a: "When it filters on a hardcoded date. Check the filter chips; prefer sort-based views."},
    {q: "Where is the order actually recorded?", a: "Intact ERP. The CRM records the pursuit, the relationship and the reasons."}
  ],
  scenarios: [
    {
      scenario: "You take a call from a new contact at a company you are sure we deal with. Searching the Companies list for their full name on the email signature returns nothing, and you need to log an enquiry before your next meeting.",
      q: "What is the right next move?",
      o: [
        "Create the company from the email signature and move on",
        "Search again from the sidebar using a short fragment and the email domain before creating anything",
        "Log the enquiry against a similar-sounding company",
        "Email a colleague and deal with it tomorrow"
      ],
      c: 1,
      e: "The list may still carry a filter, and the formal name on a signature is often not the name in the CRM. Search short, search the domain, and only create when it is genuinely absent."
    },
    {
      scenario: "A reseller confirms an order by phone for a deal that has been at Proposal for weeks. You are due on the road in five minutes. The deal has an estimated amount and last month's close date.",
      q: "What is the minimum to do before you leave?",
      o: [
        "Nothing — update it all at the Monday review",
        "Move the stage to Customer, correct the amount and close date, and note the PO reference",
        "Just change the close date",
        "Write a note on the company and leave the deal alone"
      ],
      c: 1,
      e: "The stage move is what records the win; the corrected amount and date are what make the numbers true. Anything else can wait, but a won deal sitting at Proposal quietly distorts the whole pipeline."
    }
  ]
}
