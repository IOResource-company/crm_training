{
  slug: "data-quality",
  name: "Data Quality Rules",
  track: "all",
  tagline: "Nine habits that keep the CRM worth reading.",
  intro: "<p>The CRM is only as useful as what people type into it. Every dashboard tile, every Pulse email, every Monday pipeline review is assembled from the same records you edit during the day — so a blank <code>amount</code> or a second copy of a company doesn't just look untidy, it quietly makes a number wrong for everybody.</p><p>These are our rules, not generic CRM advice. They exist because we have already been bitten: we have genuine duplicate company records, a meaningful number of accounts sitting with no owner, and a lot of open deals with no value and no close date. That last one is exactly why the <strong>Data Gaps</strong> and <strong>Stale Deals</strong> views exist — they are worklists, not decorations.</p><p>None of it takes long. It is the five-minute-a-day discipline from <em>Sales — The Way We Work</em>, written out as field-level rules.</p>",
  shots: [
    {key: "dq-data-gaps", cap: "Opportunities list with the Data Gaps — no amount view open, showing the Amount column mostly empty"},
    {key: "dq-stale-deals", cap: "Opportunities list with the Stale Deals view open, sorted by last activity date, oldest at the top"},
    {key: "house-unassigned", cap: "Companies list with the HOUSE — Unassigned view open and the Sales Rep column visible"},
    {key: "dq-no-account-code", cap: "A company record panel with the Account code field visible and empty"}
  ],
  howtos: [
    {
      title: "Search before you create anything",
      when: "Every single time, before you click New on a company, a person or an opportunity",
      steps: [
        "Use the search box at the top of the sidebar, not the list you happen to be looking at — search covers every object at once.",
        "Search a <strong>distinctive fragment</strong>, never the full legal name. Type <code>mclern</code>, not <code>McLernon Computers Ltd</code> — that one habit would have prevented most of the duplicates we have.",
        "Try the obvious variants: with and without spaces, the abbreviation, the trading name, the domain. <code>stl</code> and <code>technology solutions</code> can find different records.",
        "For a person, search the email address as well as the name — contacts get added with initials, nicknames and married names.",
        "Only create the record when all of those come back empty.",
        "If you find two records that are clearly the same customer, do not quietly start using the empty one. Flag it (see the confirm note below) and work in the record that already holds the open opportunities."
      ],
      tip: "Global search matches on more than the name field, so a half-remembered contact or a quote reference will often find the account faster than the company name will.",
      important: "The two-second search is the cheapest data-quality control we have. Everything else in this module is cleaning up after it was skipped.",
      mistake: "Searching the Companies list with a filter still applied from earlier, seeing nothing, and creating a duplicate.",
      confirm: "Whether our CRM offers a merge function for duplicate records, and who is allowed to run it — and if there is no merge, the agreed process for retiring the losing record."
    },
    {
      title: "Name a company the way we name companies",
      when: "Creating any new company record",
      steps: [
        "Use the <strong>trading name</strong> the customer uses on their own emails and website — the name a colleague would say out loud.",
        "Leave off <code>Ltd</code>, <code>Limited</code>, <code>plc</code> and <code>t/a</code> unless you genuinely need them to tell two different businesses apart.",
        "Keep the customer's own capitalisation and spacing and then stop thinking about it. <strong>Touchstore</strong> and <strong>TouchStore</strong> are one company; picking one and sticking to it is the whole rule.",
        "Watch the singular and plural trap: <strong>McLernons</strong> and <strong>McLernon Computers</strong> are the same customer under two names.",
        "Do not add the group, the region or the product to the name. <code>Qualcom</code> is a company; <code>Qualcom — scanners</code> is an opportunity name.",
        "If a genuinely different legal entity shares a trading name, disambiguate in the fewest words possible and record why in a Note on both records."
      ],
      tip: "Names get typed from memory in a hurry, and the plural, the space and the capital letter are the three shapes that slip through. Slow down for those three.",
      important: "The loaded data already holds duplicate pairs: <strong>STL Technology Solutions</strong> twice, <strong>Qualcom</strong> twice, <strong>McLernons</strong> alongside <strong>McLernon Computers</strong>, and <strong>Touchstore</strong> alongside <strong>TouchStore</strong>. They came in with the load rather than from anybody's typing — but do not add to them. Splitting one customer's deals across twins is how a big account looks small.",
      mistake: "Typing the full legal name from a purchase order, so the CRM ends up with the everyday name and the Companies House name as two records.",
      confirm: "Whether the CRM warns you at creation time when a similar company name already exists, or whether the search-first habit is the only defence."
    },
    {
      title: "Give the account an owner and an account code",
      when: "As soon as a company record exists, and any time you notice one without them",
      steps: [
        "Set <strong>Sales Rep</strong> (<code>salesRep</code>) on the company. That is the ownership field — <code>SB</code>, <code>PM</code>, <code>CL</code>, <code>TK</code>, <code>MM</code>, <code>MMU</code> or <code>HOUSE</code>.",
        "Ignore the built-in <strong>Account Owner</strong> field. It is hidden across our views on purpose because it reads as the same person on nearly everything and tells you nothing.",
        "Treat <code>HOUSE</code> — and a blank Sales Rep — as a to-do, not a home. Both mean nobody owns this account.",
        "Put the Intact A/C code in <strong>Account code</strong> (<code>accountCode</code>) for any customer we actually trade with.",
        "If you do not know the code, ask Customer Operations rather than guessing or leaving a placeholder.",
        "Work the <strong>HOUSE — Unassigned</strong> view when you have five spare minutes: claim what is yours, and flag the rest."
      ],
      shot: {key: "house-unassigned", cap: "Companies list filtered to unassigned accounts, Sales Rep column empty"},
      tip: "Ownership drives who sees the account in their Sales Pulse email. An unowned account is invisible to every rep, so it is nobody's job by default.",
      important: "<code>accountCode</code> is the join key to Intact. A company with no account code cannot be reconciled against real orders, so it is missing from anything driven by actual trading history.",
      mistake: "Leaving a new account on HOUSE because \"someone will pick it up\" — a meaningful number of our companies are sitting exactly there.",
      confirm: "Whether HOUSE is an actual option in the Sales Rep list or whether unowned accounts are simply left blank, and which of the two the HOUSE — Unassigned view filters on."
    },
    {
      title: "Keep an open opportunity honest",
      when: "The moment you create a deal, and every time you touch it afterwards",
      steps: [
        "Set an <strong>Amount</strong> — your best ex-VAT estimate of what the deal is worth to us. A rough number beats a permanent blank.",
        "Set <strong>Amount basis</strong> (<code>amountBasis</code>) to say what that number is: <em>Quoted</em> when it comes off a real quotation, <em>Estimated</em> when it is your judgement. Never dress up an estimate as a quote.",
        "Set a real <strong>Close date</strong> — when the order will realistically land, not the end of the quarter you would like it in.",
        "Set <strong>Next step</strong> and <strong>Next step date</strong> together. One concrete action with a date on it: \"Follow up quotation 2119 with Fiachra\".",
        "At Proposal, add the <strong>Quote ref</strong> (<code>quoteRef</code>) from Intact or the quote email.",
        "When it dies, move it to <strong>Closed Lost</strong> and set a <strong>Lost reason</strong>. Always.",
        "Check your work in the <strong>Data Gaps — no amount</strong> view: if your deal is in it, it is not finished."
      ],
      shot: {key: "dq-data-gaps", cap: "The Data Gaps — no amount view, showing open deals with an empty Amount column"},
      tip: "Update the deal as you walk out of the meeting, not on Friday. Thirty seconds on the phone keeps the whole pipeline readable.",
      important: "A lot of our open opportunities still have no amount and no close date. That is why the forecast and close-month views cannot be trusted yet, and why filling these fields as you go matters more than any dashboard.",
      mistake: "Inventing a close date to make a view look tidy. A wrong date is worse than a blank one — it puts fiction into the quarter.",
      confirm: "The exact option labels on the Amount basis field in the UI, and whether a third option exists beyond Quoted and Estimated."
    },
    {
      title: "Write the note the email cannot",
      when: "After any call, meeting or email that contains something the next person would need to know",
      steps: [
        "Open the record it belongs to — the company for account-level intelligence, the opportunity for deal-specific news.",
        "Add a <strong>Note</strong>. Title it so the timeline is scannable: customer, subject, date context.",
        "Type the substance in your own words: what was said, what was agreed, what it changes, what happens next. Assume the reader has not seen the email.",
        "Put dates, quantities, model numbers and named people in the note — those are what colleagues search for later.",
        "Turn anything that needs doing into a <strong>Task</strong> with a due date, or into the deal's Next step. A note is a record, not a reminder.",
        "Keep it factual. Notes are read by colleagues, and they are customer data — write nothing you would not want the customer to read."
      ],
      tip: "One good note on the account beats five forwarded emails. It is also the whole of your cover plan when you are on the road or on holiday.",
      important: "Synced email in the CRM shows the <strong>subject and participants only</strong> — you cannot read the message body on the record. Anything important that lives in an email body effectively does not exist in the CRM until somebody types it into a Note.",
      mistake: "Writing \"spoke to customer, all good\" — which tells the next reader nothing and wastes the thirty seconds you spent typing it.",
      confirm: "Whether attachments sent to sales@ are retained anywhere reachable from the record, or whether a quote PDF must be re-attached by hand."
    }
  ],
  fields: [
    {k: "salesRep", v: "<strong>The ownership field.</strong> One of <code>SB</code>, <code>PM</code>, <code>CL</code>, <code>TK</code>, <code>MM</code>, <code>MMU</code>, <code>HOUSE</code>. Lives on the <em>company</em>, and everything downstream — your Sales Pulse, the Book of Business, per-rep views — reads it. Blank or <code>HOUSE</code> means unowned."},
    {k: "accountOwner", v: "The built-in Twenty owner field. <strong>Hidden across our views deliberately</strong> because it is misleading — do not go looking for it and do not use it to decide who owns an account."},
    {k: "accountCode", v: "The Intact A/C code — the join key between a CRM company and real order history. No account code means the account cannot be matched to what it actually bought."},
    {k: "amount &amp; amountBasis", v: "What the deal is worth to us, ex-VAT, and where that number came from: <em>Quoted</em> off a real quotation, <em>Estimated</em> off your judgement. Set both, and upgrade the basis when the quote firms up."},
    {k: "closeDate", v: "When the order will realistically land. It drives every forecast and close-month view — so an honest slipped date is a contribution, not an admission."},
    {k: "nextStep &amp; nextStepDate", v: "One concrete action and the date it is due. These two are what make a deal impossible to forget, and they feed the Next Actions widget and the Pulse."},
    {k: "quoteRef", v: "The Intact quotation or PO reference. Expected on anything at <strong>Proposal</strong> — it is how a deal ties back to the paperwork."},
    {k: "lostReason", v: "Why we lost: Price · Lead Time · Lost to Competitor · No Budget · No Decision · Stalled · Other. Required on everything Closed Lost. Ten seconds each, and it is the cheapest market research we will ever get."},
    {k: "lastActivityDate", v: "The date of the last real contact on the deal. Stale-deal detection reads it, so a deal with a blank one looks abandoned whether it is or not."}
  ],
  tips: [
    "Fix the record you are already looking at. If you open an account and spot a blank Sales Rep or a missing account code, that is the moment — not a project for later.",
    "Rough beats blank on <code>amount</code>; honest beats optimistic on <code>closeDate</code>. Those two sentences cover most of our pipeline hygiene.",
    "When you cannot verify a commercial figure, leave it blank rather than guessing. A blank is a known gap the views will surface; a made-up number is a lie nobody will ever catch."
  ],
  mistakes: [
    {m: "Creating a company because search came back empty on the full legal name.", fix: "Search a short distinctive fragment instead — <code>mclern</code>, <code>qualcom</code>, <code>touchstore</code> — and try the plural, the spacing and the abbreviation before you click New."},
    {m: "Leaving a new account on HOUSE or with a blank Sales Rep.", fix: "Set <code>salesRep</code> the day the record is created. Unowned accounts appear in nobody's Pulse, so nobody works them."},
    {m: "Recording the important detail from a customer email and assuming the CRM has it because the email synced.", fix: "The CRM shows subject and participants only. Type the substance into a <strong>Note</strong> on the company or the deal."},
    {m: "Marking an estimate as Quoted so the pipeline looks firmer.", fix: "Set <code>amountBasis</code> to <em>Estimated</em> and change it to <em>Quoted</em> the day a real quotation goes out."}
  ],
  confirms: [
    "Whether the CRM has a duplicate-merge tool for companies and people, who can use it, and what our agreed process is when no merge exists.",
    "Whether any field is genuinely mandatory at save time (company on an opportunity, amount, close date, lost reason on Closed Lost) or whether every rule here is enforced by habit and by the hygiene views only.",
    "Whether the Data Gaps — no amount and Stale Deals views are still present and current, given both were built as work-to-zero lists that were to be deleted once cleared.",
    "Whether a saved view exists for open opportunities missing a close date, as distinct from the one for missing amount.",
    "Whether accountCode is validated or de-duplicated anywhere, or whether two companies could carry the same Intact code without anything flagging it."
  ],
  quiz: [
    {
      q: "Which field tells you who owns a company account?",
      o: ["Account Owner", "Sales Rep (salesRep)", "Created By", "The person who wrote the last note"],
      c: 1,
      e: "salesRep is the ownership field. The built-in Account Owner field is hidden across our views because it is misleading."
    },
    {
      q: "You are about to add McLernon Computers Ltd. What do you type into search first?",
      o: ["The full name exactly as printed on their PO", "A short distinctive fragment such as mclern", "Nothing — the list is short enough to scan", "Their VAT number"],
      c: 1,
      e: "A short fragment catches variants. Searching the full legal name is precisely how we ended up with McLernons and McLernon Computers as separate records."
    },
    {
      q: "What does a blank accountCode on a company mean in practice?",
      o: ["The account is dormant", "The account cannot be reconciled against real orders in Intact", "The account has no contacts", "Nothing — it is optional metadata"],
      c: 1,
      e: "accountCode is the Intact join key. Without it the company cannot be matched to actual trading history."
    },
    {
      q: "A deal moves to Proposal. Which field is now expected on it?",
      o: ["Lost reason", "Quote ref", "Account code", "Decision role"],
      c: 1,
      e: "quoteRef ties the deal to the quotation or PO in Intact. Lost reason only applies when the deal is closed lost."
    },
    {
      q: "You have a rough idea of a deal's value but no quotation yet. What do you do?",
      o: ["Leave amount blank until the quote goes out", "Enter your estimate and set amountBasis to Estimated", "Enter your estimate and set amountBasis to Quoted", "Enter zero as a placeholder"],
      c: 1,
      e: "A rough number beats a permanent blank, but the basis has to be honest. Upgrade it to Quoted the day a real quotation issues."
    },
    {
      q: "An email to sales@ contains a customer's decision deadline. What must happen for the CRM to hold it?",
      o: ["Nothing — the email body syncs onto the record", "Someone must type it into a Note or the deal's next step", "Forward the email to yourself", "Attach the email to a Task"],
      c: 1,
      e: "Synced email shows subject and participants only. If the detail is in the body, it does not exist in the CRM until a person writes it down."
    },
    {
      q: "Why do the Data Gaps and Stale Deals views exist?",
      o: ["To rank reps against each other", "Because many open deals lack an amount and a close date, and stale ones need surfacing", "To hold deals that have been closed", "To list companies with no owner"],
      c: 1,
      e: "They are hygiene worklists built around the real gaps in our data. HOUSE — Unassigned is the equivalent for companies with no owner."
    },
    {
      q: "A deal has gone quiet and will not happen. What is the correct close?",
      o: ["Delete it so it stops cluttering the pipeline", "Leave it at Proposal in case they come back", "Move it to Closed Lost and set a lostReason", "Set the close date a year out"],
      c: 2,
      e: "Closed Lost with a reason. A closed lost deal can always be reopened if the customer returns, and the reason is what makes win-rate analysis possible."
    }
  ],
  flashcards: [
    {q: "Which field is the truth about account ownership?", a: "salesRep on the company — not accountOwner, which is hidden because it is misleading."},
    {q: "What does HOUSE mean?", a: "Nobody owns the account. It is a to-do, not a home — an unowned account appears in no rep's Pulse."},
    {q: "What is accountCode?", a: "The Intact A/C code. It is the join key to real order history; without it, no reconciliation against actual orders."},
    {q: "Quoted or Estimated?", a: "amountBasis. Quoted means the number came off a real quotation; Estimated means it is your judgement."},
    {q: "Four things every open deal needs.", a: "Amount, close date, next step, next step date. Plus quote ref at Proposal, and lost reason if it closes lost."},
    {q: "How much of a synced email can you read in the CRM?", a: "Subject and participants only. Anything from the body has to be typed into a Note."}
  ],
  scenarios: [
    {
      scenario: "You search Companies for a customer and get two hits: STL Technology Solutions with three open opportunities and a Sales Rep set, and a second STL Technology Solutions with nothing on it. You need to log a new enquiry today.",
      q: "What do you do?",
      o: [
        "Use the empty record — it is cleaner",
        "Create a third record with a clearer name",
        "Work in the record that holds the open opportunities and flag the duplicate for cleanup",
        "Log the enquiry against both so it is not missed"
      ],
      c: 2,
      e: "Always work in the record with the history and an owner, so one customer's deals do not get split across twins. Then flag the empty duplicate rather than silently leaving it to catch the next person."
    },
    {
      scenario: "A customer rings to say the rollout is on hold until their new financial year. The deal is at Proposal with a close date of next month and a next step dated last week.",
      q: "What is the minimum you update before you hang up?",
      o: [
        "Nothing — you will remember at the Monday review",
        "Close date to the realistic date, next step and next step date to the new chase, and a Note with what they said",
        "Move it to Closed Lost",
        "Just the next step date"
      ],
      c: 1,
      e: "Re-date it honestly, write the new next action, and put the reason in a Note. Nobody minds a slipped date; a stale one makes the whole quarter's view fiction. It is not lost — it is later."
    }
  ]
}
