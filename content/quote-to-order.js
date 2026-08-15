{
  slug: "quote-to-order",
  name: "Quote to Order",
  track: "ops",
  tagline: "There are no orders in the CRM. Intact is the system of record — the CRM is the relationship and the control layer.",
  intro: "<p>This is the boundary that matters most, so learn it before anything else: <strong>quotes, pro formas, orders, invoices and credit notes are made in Intact and live in Intact.</strong> You will not find an order object in the CRM, and you should not try to recreate one. Intact owns the money and the documents. The CRM owns the relationship and the control layer — who the customer is, who owns them, what is in flight, what the next action is and whether we are on time.</p><p>Two things join the two systems, and both are habits rather than integrations. The <strong>Intact A/C code</strong> is stored on the company record as <strong>Account code</strong>, so any customer in the CRM can be matched to their Intact account. And the <strong>document number goes in the email subject</strong>, every time, so a quotation, pro forma or sales order can be traced back to the right record.</p><p>The other boundary is human: <em>if it is about winning the money it is sales; if it is about delivering on the promise it is Customer Operations.</em> When in doubt it goes through sales@ and gets an owner either way.</p>",
  shots: [
    {key:"company-account-code", cap:"A Company record with the Account code field visible, showing the Intact A/C code that joins CRM and Intact"},
    {key:"aftercare-record", cap:"An Aftercare record showing Service type, RMA number, Serial number, Opened date and Warranty end date"}
  ],
  howtos: [
    {
      title: "Take an enquiry through to a quotation",
      when: "A customer asks for pricing, or a price change means we need to re-quote",
      steps: [
        "Acknowledge inside the SLA and name yourself as owner. A pricing enquiry becomes an <strong>Opportunity</strong> in the CRM, not a Case.",
        "Check the account: does it exist in the CRM, and does it have an <strong>Account code</strong>? Is it a credit account or a prepay account? That decides everything downstream.",
        "Ask for anything missing before you quote — spec, quantity, dates, delivery address.",
        "Validate the requirement. Loop in Tom for compatibility or technical spec questions.",
        "Get supplier cost and lead time where we do not hold stock. For a product we do not stock, the <strong>salesperson</strong> makes the sourcing call — which distributor, price and lead time — then hands it back to Operations.",
        "Build the <strong>Quotation in Intact</strong>. The salesperson decides the <strong>price only</strong>; Operations builds and sends the rest. Same price as last time? Check Intact and send.",
        "Send it from <strong>sales@</strong> with the rep in cc and the quotation number in the subject — for example <em>Quotation 25926 — McLernon — Urovo DT66 battery</em>.",
        "Back in the CRM, put the quotation number in the Opportunity's <strong>Quote ref</strong>, set the <strong>Amount</strong> and <strong>Close date</strong>, move the <strong>Stage</strong> to Proposal, and set a <strong>Next step</strong> and <strong>Next step date</strong> to follow up."
      ],
      tip: "Standard quotation SLA is <strong>same day</strong>. A complex or project quotation is 2–3 working days, with an update to the customer every 24 hours until it goes out.",
      important: "New customers, non-standard requests and large or strategic opportunities stay <strong>salesperson-led</strong>. Operations does not quote those alone.",
      mistake: "Sending the quote without the number in the subject. That one habit is the cheapest and most reliable link we have between the inbox, the CRM and Intact."
    },
    {
      title: "Turn an accepted quote into an order",
      when: "The customer says yes, or a purchase order lands",
      steps: [
        "Capture the customer's <strong>PO number</strong> and confirm which path the account is on.",
        "<strong>Prepay account:</strong> raise a <strong>Pro Forma</strong> in Intact and send it for payment. Nothing dispatches until it is paid.",
        "<strong>Credit account:</strong> raise a <strong>Sales Order</strong> in Intact — that is the order confirmation — and send it.",
        "There is <strong>no order record to create in the CRM</strong>. The order exists in Intact. In the CRM you move the <strong>Opportunity</strong> to <strong>Customer</strong>, which is our won stage.",
        "Open a <strong>Case</strong> for the fulfilment side if there is anything to chase — dispatch, courier booking, a delivery date to confirm.",
        "Book the courier, capture the tracking, and tell the customer the dispatch and delivery date.",
        "Confirm receipt with the customer, then close the fulfilment Case. Invoicing happens in Intact — on dispatch for prepay, on terms for credit accounts."
      ],
      tip: "Real example, in shape: a quote goes out for six Honeywell 1200G scanners in stock; the customer replies with a PO and a Cork delivery address; the Sales Order goes back confirming a next-day courier; the Opportunity moves to won and the fulfilment Case closes on receipt.",
      important: "Prepay means <strong>paid before dispatch</strong>, without exception. If someone wants that relaxed, that is a management decision, not an Ops one.",
      mistake: "Leaving the Opportunity sitting in Proposal after the order has actually been placed. The pipeline is then wrong for everybody who reads it."
    },
    {
      title: "Match a CRM customer to their Intact account",
      when: "You need pricing history, stock, a previous quotation, or you are checking what an account actually buys",
      steps: [
        "Open the <strong>Company</strong> record in the CRM.",
        "Read the <strong>Account code</strong> field — that is the Intact A/C code, and it is the join key between the two systems.",
        "Use that code in Intact to find the account's documents, pricing and history.",
        "If the Account code is blank, that customer cannot be matched to their Intact data. Get it filled in rather than working around it.",
        "Also check <strong>Account status</strong> (Active / Dormant / Lapsed / Prospect) and the account summary block on the company before you promise terms."
      ],
      shot: {key:"company-account-code", cap:"Company record with Account code, Account status and the account summary fields visible"},
      important: "Never assume credit terms from the CRM alone. Intact is the system of record for what the account is actually allowed.",
      confirm: "Whether Account code is populated on every trading company, and who is responsible for adding it when a new account is opened in Intact."
    },
    {
      title: "Log an RMA or warranty job as Aftercare",
      when: "A customer returns faulty goods, claims warranty, needs an advance replacement, or a fleet is coming up for refresh",
      steps: [
        "Do <strong>not</strong> create a Case. RMA and warranty are deliberately not case types.",
        "Open <strong>Aftercare</strong> and create a record with the <strong>Service type</strong>: RMA, Warranty, Advance Replacement or Lifecycle Refresh.",
        "Link the <strong>Product</strong> and the <strong>Reseller</strong>, and record the <strong>RMA number</strong> from the technical system, the <strong>Serial number</strong>, the quantity and a short <strong>Fault description</strong>.",
        "Set <strong>Opened date</strong>, and <strong>Warranty end date</strong> or <strong>Refresh due date</strong> where they apply — those dates are what drive proactive renewal and refresh outreach later.",
        "Keep it slim. The separate technical system stays the single source of truth for RMA detail; the CRM entry is the RMA reference, the date and a one-line summary so the customer's history is visible in one place.",
        "Set <strong>Status</strong> (Open / In Progress / Closed) and add the <strong>Closed date</strong> when the job is finished."
      ],
      shot: {key:"aftercare-record", cap:"An Aftercare record with Service type, RMA number, Serial number and Warranty end date filled in"},
      tip: "Approval on warranty and RMA is technical — that is Tom's call. Operations owns the log and the customer communication; escalation goes to a manager.",
      mistake: "Duplicating the whole RMA history into the CRM. One shared reference number links the two systems; we do not maintain two copies.",
      confirm: "Whether Ops or the technical team creates the Aftercare record, and the naming convention for the Aftercare record name field."
    },
    {
      title: "Check what you can decide before you promise it",
      when: "Every time a customer asks for something that costs us money or bends a rule",
      steps: [
        "<strong>Resolve alone:</strong> acknowledge and own; ask for missing information; give stock and lead times from Intact; issue standard quotes within the agreed price and margin rules; chase suppliers and couriers; send order confirmations; process standard returns per policy; keep the customer updated; escalate.",
        "<strong>Needs sales approval:</strong> non-standard pricing or discount; price exceptions; credit terms; any commercial promise; goodwill or write-offs; anything outside the margin rules; commitments on strategic accounts.",
        "<strong>Needs management approval:</strong> new credit accounts; credit notes or compensation above the agreed limit; policy exceptions.",
        "If you are not sure which bracket you are in, treat it as needing approval and ask. Asking costs an hour; an unapprovable promise costs the relationship.",
        "Get the approval before it reaches the customer, not after."
      ],
      important: "The rule of thumb: <strong>if it is about winning the money it is sales; if it is about delivering on the promise it is Customer Operations.</strong> The salesperson keeps the relationship and every commercial decision; Ops owns the quoting admin, the order processing, the chasing and the updates."
    }
  ],
  fields: [
    {k:"Account code (Company)", v:"The Intact A/C code. This is <em>the</em> join key between the CRM and Intact — without it there is no reliable way to line a CRM customer up with their quotes, orders and invoices."},
    {k:"Quote ref (Opportunity)", v:"The quotation or PO reference for the deal. Fill it in the moment the quote goes out, so anyone can find the Intact document from the CRM record."},
    {k:"Amount and Close date (Opportunity)", v:"The value of the deal and when we expect it to land. Without both, the deal cannot be forecast and shows up on the data-gap views."},
    {k:"Stage (Opportunity)", v:"New → Screening → Meeting → Proposal → <strong>Customer</strong> (won) or <strong>Closed Lost</strong>. A quote sent means Proposal; an order placed means Customer."},
    {k:"Next step and Next step date (Opportunity)", v:"The follow-up after the quote goes out. Quotes are chased proactively — an opportunity with no next step is one nobody is working."},
    {k:"Lost reason (Opportunity)", v:"Price · Lead Time · Lost to Competitor · No Budget · No Decision · Stalled · Other. Record it every time a deal dies — it is the only way quote-to-order conversion means anything."},
    {k:"Service type (Aftercare)", v:"<strong>RMA</strong> · <strong>Warranty</strong> · <strong>Advance Replacement</strong> · <strong>Lifecycle Refresh</strong>. This is where returns-and-repairs work goes; it is deliberately not a Case type."},
    {k:"RMA number, Serial number, Fault description (Aftercare)", v:"The slim log. The RMA number is the shared code that links our record to the technical system, which holds the real detail."},
    {k:"Warranty end date / Refresh due date (Aftercare)", v:"The dates that drive proactive outreach — renewal, replacement and fleet refresh conversations before the customer goes looking elsewhere."},
    {k:"Sales Transaction (object)", v:"Built to hold historical invoices, orders and credit notes per reseller, joined to Intact on the same Account code. <strong>It is currently empty</strong> — the Intact backfill has not run, so it is not a source of truth yet. Do not quote figures from it."}
  ],
  tips: [
    "Document number in the subject, every time. <em>Quotation 25926 — McLernon — Urovo DT66 battery</em> — that is the whole convention, and it is the primary way anything links up.",
    "Nothing important lives only in the inbox. Every email either becomes a record in the CRM or its transaction lives in Intact — so anyone can pick up any customer at any time.",
    "To push something into the pipeline from anywhere, forward the email to sales@ with <strong>(Sales Pipe mail)</strong> in the subject. The CRM reads it, matches it against open deals and cases, and updates or creates the right record. Anything it is not sure about becomes a review task rather than a guess."
  ],
  mistakes: [
    {m:"Looking for orders, invoices or credit notes in the CRM.", fix:"They are not there and never will be. Intact is the system of record for every document and every euro. The CRM tells you who owns the customer, what is in flight and what happens next."},
    {m:"Promising a discount, credit terms or a goodwill gesture without approval.", fix:"Pricing and any commercial promise is the salesperson's call; new credit accounts and larger credit notes are management's. Get the answer before it reaches the customer."},
    {m:"Opening a Case for a warranty claim or an RMA.", fix:"Create an <strong>Aftercare</strong> record instead, with the service type and the RMA reference. The technical system holds the detail; the CRM keeps the slim log so the customer's history is visible."},
    {m:"Quoting spend or margin figures from the Sales Transaction object.", fix:"It is empty — the Intact backfill has not been done. Take the numbers from Intact until that changes."},
    {m:"Marking an opportunity won and moving on.", fix:"Won is the start of the delivery promise, not the end. Confirm the order in Intact, open a Case for the fulfilment chase, capture tracking and confirm delivery with the customer."}
  ],
  confirms: [
    "Whether the quotation-PDF reading backstop is live. The ops manual describes it as the safety net when a number is missed from a subject, but the CRM roadmap lists it as a later phase — so treat the subject-line number as the only reliable link for now.",
    "Whether there is any automated data flow between Intact and the CRM, or whether Account code plus the email subject convention are the only links today.",
    "When the Sales Transaction backfill from Intact is expected, and who owns getting the export done.",
    "Whether an Opportunity is expected for every single quotation, or only above some size or type of deal.",
    "Whether the shared, versioned spec-sheet asset library described in the ops manual has actually been built, and where it lives.",
    "Whether a fulfilment Case should be opened for every order or only where there is something to chase."
  ],
  quiz: [
    {
      q: "Where are quotes, orders, invoices and credit notes created and stored?",
      o: ["In the CRM, on the Opportunity", "In Intact — the CRM has no order object at all", "In both, kept in sync automatically", "In the sales@ inbox"],
      c: 1,
      e: "Intact is the system of record for money and documents. The CRM holds the relationship and the control layer. There is no order object in the CRM and you should not try to build one."
    },
    {
      q: "What joins a CRM company to its Intact account?",
      o: ["The company name", "The domain name", "The Account code — the Intact A/C code stored on the company", "The account owner's initials"],
      c: 2,
      e: "Account code is the join key. Names and domains drift and duplicate; the A/C code does not."
    },
    {
      q: "A prepay account places an order. What is issued?",
      o: ["A Sales Order confirmation", "A Pro Forma, paid before anything is dispatched", "An invoice on 30 day terms", "A quotation"],
      c: 1,
      e: "Prepay accounts get a Pro Forma for payment before dispatch. Credit accounts get a Sales Order confirmation and are invoiced on terms after dispatch."
    },
    {
      q: "Who decides the price on a standard quotation?",
      o: ["Customer Operations, within the agreed rules", "The salesperson — Operations builds and sends the rest", "The manager, on every quote", "Whoever opens the email first"],
      c: 1,
      e: "Operations prepares the quotation in Intact and sends it from sales@; the salesperson decides the price only. If it is the same price as last time, Operations checks Intact and sends."
    },
    {
      q: "Which of these can Customer Operations resolve alone, with no approval?",
      o: ["Giving a customer a discount to win the order", "Agreeing 30 day credit terms for a new account", "Giving stock and lead times from Intact and chasing a courier", "Issuing a credit note as a goodwill gesture"],
      c: 2,
      e: "Stock, lead times, supplier and courier chasing, order confirmations, standard quotes within the rules and standard returns are all resolve-alone. Discounts and credit terms need sales approval; new credit accounts and larger credit notes need management."
    },
    {
      q: "A customer returns a faulty scanner under warranty. What do you create?",
      o: ["A Case of type Return", "A Case of type Technical", "An Aftercare record with Service type Warranty", "An Opportunity with a negative amount"],
      c: 2,
      e: "RMA and warranty are deliberately not case types. They go in Aftercare as a slim log with the RMA reference, because the separate technical system is the source of truth."
    },
    {
      q: "What are the four Aftercare service types?",
      o: ["RMA, Warranty, Advance Replacement, Lifecycle Refresh", "Return, Repair, Replace, Refund", "RMA, Credit, Delivery, Technical", "Open, In Progress, Closed, Cancelled"],
      c: 0,
      e: "RMA, Warranty, Advance Replacement and Lifecycle Refresh. The last one is the proactive side — warranty end and refresh due dates drive renewal conversations."
    },
    {
      q: "Can you rely on the Sales Transaction object for a customer's spend history?",
      o: ["Yes, it is fed live from Intact", "Yes, it is updated weekly", "No — it is currently empty, the Intact backfill has not run", "No — the object does not exist"],
      c: 2,
      e: "The object exists and is designed to join to Intact on the same Account code, but it has not been populated. Until the backfill runs, take the numbers from Intact."
    },
    {
      q: "The rule of thumb for who owns what?",
      o: ["Whoever opened the email owns everything", "If it is about winning the money it is sales; if it is about delivering on the promise it is Customer Operations", "Sales owns the customer, Ops owns the system", "Ops owns everything until the order is placed"],
      c: 1,
      e: "Sales keeps the relationship, the pricing and every commercial decision. Ops owns the quoting admin, order processing, supplier and courier chasing, and keeping the customer informed. When in doubt it goes through sales@ and gets an owner either way."
    },
    {
      q: "Why does the document number go in the email subject?",
      o: ["So the customer can find it", "It is how the email links to the right CRM record and the right Intact document", "For the accounts team's filing", "It is optional but tidy"],
      c: 1,
      e: "It is the primary linking method between the inbox, the CRM and Intact — the cheapest, most reliable join we have."
    }
  ],
  flashcards: [
    {q: "Where do orders live?", a: "In Intact. The CRM has no order object — it holds the relationship and the control layer."},
    {q: "What is the join key between the CRM and Intact?", a: "The Account code on the Company record — the Intact A/C code."},
    {q: "Prepay account order path?", a: "Order placed → Pro Forma issued → customer pays → dispatch → invoice."},
    {q: "Credit account order path?", a: "PO received → Sales Order confirmation issued → dispatch → invoice on terms."},
    {q: "Where does a warranty or RMA get logged?", a: "Aftercare, as a slim record with the RMA number, dates and a one-line summary."},
    {q: "Which stage means the deal is won?", a: "Customer. The lost stage is Closed Lost, and it needs a lost reason."},
    {q: "Two things always in the email subject?", a: "The document number, and enough context to read it at a glance — customer and product."},
    {q: "Is Sales Transaction a source of truth?", a: "Not yet. The object exists but the Intact backfill has not run, so it is empty."}
  ],
  scenarios: [
    {
      scenario: "A reseller emails sales@ asking for a price on twelve handhelds. They are an existing credit account, we hold stock, and the price is the same as the last time they bought.",
      q: "What is the right sequence?",
      o: [
        "Ask the salesperson for a price and wait for them to build the quote",
        "Acknowledge and own it, check Intact for the last price, build the quotation in Intact, send from sales@ with the rep cc'd and the number in the subject, then set Quote ref, Amount, Close date and a follow-up date on the Opportunity",
        "Create a Case, quote from the CRM, and let the salesperson tidy up the record later",
        "Send the price by reply and record it once the order comes in"
      ],
      c: 1,
      e: "Same price as last time means Operations checks Intact and sends — no waiting on the rep. The quotation is built in Intact, sent from sales@ with the rep in cc and the number in the subject, and the Opportunity carries the quote ref, amount, close date and a proactive follow-up. Standard quote turnaround is same day. A pricing enquiry is an Opportunity, not a Case."
    },
    {
      scenario: "A prepay customer has placed an order and is pushing hard to have it shipped today, before their payment clears. They are a good long-standing account and the salesperson is on the road.",
      q: "What do you do?",
      o: [
        "Ship it — they are a good account and the money will follow",
        "Refuse and close the conversation there",
        "Hold the dispatch, tell the customer plainly when it will ship once payment lands, and get the salesperson or a manager to approve if they want the terms bent",
        "Convert them to a credit account so the order can go out"
      ],
      c: 2,
      e: "Prepay means paid before dispatch. Bending that is a commercial decision above Ops, and opening a new credit account needs management approval. The right handling is to hold, be straight with the customer about what happens when, and escalate the exception rather than making the call yourself — while still owning the case and the communication."
    }
  ]
}
