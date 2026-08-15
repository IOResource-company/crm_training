{
  slug: "workflows",
  name: "Common Daily Workflows",
  track: "sales",
  tagline: "The five flows that cover most of a sales day, step by step, in our fields.",
  intro: "<p>This module is the muscle memory. Five flows that between them cover most of what a salesperson does in the CRM in a normal day: a new enquiry, a call from an existing customer, chasing a quotation, winning, and losing.</p><p>Each one is short on purpose. None of them should take more than a minute or two once you know where the fields live &mdash; and each one is written for <em>our</em> stages and <em>our</em> field names, not generic CRM advice.</p><p>The rule underneath all five: update as you go, not on Fridays. Thirty seconds in the car park beats an hour of archaeology on Friday afternoon.</p>",
  shots: [
    {key:"opp-record", cap:"An opportunity record page showing Stage, Next Step, Next Step Date, Quote Ref and the linked Company and Contact - blur or crop any amount"}
  ],
  howtos: [
    {
      title: "New sales enquiry",
      when: "An enquiry arrives - by phone, from sales@, from the website form, or from a conversation on the road",
      steps: [
        "<strong>Search for the company first.</strong> Use global search and try a distinctive part of the name, not the full legal name. We already have duplicate company records in the CRM, so search before you create anything.",
        "<strong>Search for the contact.</strong> Same rule &mdash; check People before creating a person. If the email came into sales@ from someone not yet in People, the thread is stored but shows nowhere until the person exists.",
        "<strong>Create whatever is missing.</strong> Company first, then the contact linked to it. Set the company's <code>salesRep</code> if it is blank &mdash; an account with no rep is a to-do, not a home.",
        "<strong>Create the opportunity from the company record</strong> so the company link is filled for you. Name it <em>Company &mdash; what they are buying (context)</em>.",
        "<strong>Owner:</strong> there is nothing to assign on the deal. Ownership derives from the company's <code>salesRep</code>, so make sure that field is right and the deal lands on the correct rep's list.",
        "<strong>Value and stage:</strong> set <code>amount</code> with the right currency and <code>amountBasis</code> = ESTIMATED, then <code>stage</code> = New if it is still a raw signal, or Screening if you have already established a real need, a named contact and a rough size.",
        "<strong>Record the next action:</strong> <code>nextStep</code> as one concrete thing (<em>Call Teresa to confirm unit count</em>) and <code>nextStepDate</code> as the day you will actually do it. Stamp <code>lastActivityDate</code> with today.",
        "<strong>Thirty seconds more:</strong> <code>leadSource</code>, <code>vertical</code>, a realistic <code>closeDate</code>, and the <code>endCustomer</code> link if there is a deployment site behind the reseller."
      ],
      shot: {key:"opp-new", cap:"The new-opportunity panel opened from a company record, with Company pre-filled and Stage, Amount and Next Step visible"},
      tip: "Same day, every time. A conversation that could become an order becomes an opportunity before you go home.",
      important: "Always search before you create. Duplicate companies split a rep's deals across two records and quietly break the pipeline totals.",
      mistake: "Creating the opportunity but leaving the company's <code>salesRep</code> blank, so the deal never appears on anybody's list."
    },
    {
      title: "Existing customer calls",
      when: "A customer rings about something - a re-order, a spec question, a chase, a grumble",
      steps: [
        "Open the <strong>company</strong> record. The timeline shows the open deals, recent emails, notes and cases &mdash; read it before you talk, so you are not asking what they told someone else last week.",
        "If the call is about an <strong>existing deal</strong>: update that opportunity. New <code>nextStep</code> and <code>nextStepDate</code>, <code>lastActivityDate</code> = today, and move the <code>stage</code> if something has actually changed.",
        "If the call reveals <strong>new business</strong>: create a second opportunity. One deal = one opportunity &mdash; do not bolt it onto an existing record.",
        "If it is <strong>not a sale</strong> &mdash; a delivery chase, a return, a credit query, a complaint &mdash; it belongs to Customer Operations as a <strong>Case</strong>, not on the opportunity.",
        "Put the substance of the call in a <strong>Note</strong> on the company or the deal. Anything you owe them becomes a <strong>Task</strong> with a due date.",
        "If you spoke to someone who is not in People yet, add them &mdash; name, email, company &mdash; and their whole email history lights up on the record."
      ],
      tip: "Thirty seconds of reading the timeline before you pick up is the cheapest way to sound like the company has its act together.",
      important: '"It is in my head" is not a storage location. Cover, handover and the Monday review all run off the record.',
      mistake: "Logging the whole call as a note but leaving the deal's next step and dates untouched, so it still looks stale."
    },
    {
      title: "Follow up after sending a quotation",
      when: "A formal quotation has gone out of Intact and the customer now has a number in their hands",
      steps: [
        "Move the opportunity to <strong>Proposal</strong>.",
        "Put the quotation number in <code>quoteRef</code> &mdash; the same number that is in the email subject line, which is how the thread links itself to the record.",
        "Set <code>amount</code> to the quoted value with the correct currency and switch <code>amountBasis</code> to <strong>QUOTED</strong>.",
        "Set a realistic <code>closeDate</code>, a sensible <code>probability</code>, and a <code>forecastCategory</code> for the current period.",
        "Set <code>nextStep</code> to the chase (<em>Follow up quotation 25931 with Teresa</em>) and <code>nextStepDate</code> to the day you will do it. Stamp <code>lastActivityDate</code>.",
        "If the quote goes quiet, set the opportunity's <strong>Outreach Cadence</strong> to <strong>Quote follow-up</strong>. That is our QUOTE_FOLLOWUP cadence: four touches over about two weeks &mdash; email, call, email, then a break-up email that closes the loop.",
        "Understand what the cadence does and does not do: it <strong>creates Tasks with due dates</strong> and surfaces them in the Sales Pulse, with a paste-in template. It <strong>never emails the customer</strong> &mdash; you send every touch yourself from Outlook, personalised.",
        "It stops on its own when the customer replies, when the deal advances a stage, or when it is won or lost. To stop it by hand, set <strong>Cadence Status</strong> to Stopped.",
        "Work the <strong>Quotes Needing Follow-Up</strong> view oldest-first. Every proposal should have a scheduled chase."
      ],
      shot: {key:"opp-cadence", cap:"An opportunity's Outreach Cadence field set to Quote follow-up, with Cadence Status visible alongside"},
      tip: "Put the quotation number in the email subject line every time. That single habit is what links the whole thread to the deal.",
      important: "<code>quoteRef</code> is blank on a lot of our proposals. Filling it as the quote goes out is a five-second habit that makes the follow-up views work.",
      mistake: "Setting the cadence and then assuming the CRM is chasing the customer for you. It only creates your tasks.",
      confirm: "Whether reps can set the Outreach Cadence field themselves on an opportunity, or whether enrolment is restricted - and how quickly the tasks appear, given the engine runs overnight on weekdays."
    },
    {
      title: "Opportunity won",
      when: "The purchase order has landed",
      steps: [
        "Set <code>stage</code> to <strong>Customer</strong>. That is our won stage.",
        "Correct <code>amount</code> to what was actually ordered, with the right currency, and make sure <code>amountBasis</code> is QUOTED.",
        "Put the PO or quotation reference in <code>quoteRef</code> if it is not already there.",
        "Set <code>closeDate</code> to the date the order landed and <code>probability</code> to 100.",
        "Clear <code>nextStep</code>, or replace it with whatever is genuinely still owed &mdash; a delivery date to confirm, a phase 2 to schedule.",
        "Raise the order in Intact and hand delivery to Customer Operations. Moving the stage in the CRM does not create anything in Intact.",
        "If the account was a Prospect, update the company's <code>accountStatus</code> to Active.",
        "For a phased rollout, create the next phase as its own opportunity rather than leaving one giant deal open."
      ],
      tip: "Close it the day the PO arrives. A won deal sitting at Proposal makes the whole forecast look worse than it is.",
      important: "If the deal displaced a competitor, make sure <code>competitorDisplaced</code> is set before you close it. That is how a displacement win gets counted on the Kill the Zebra scoreboard.",
      mistake: "Leaving a won deal at Proposal with probability 100 - it inflates weighted pipeline and hides the real win rate."
    },
    {
      title: "Opportunity lost",
      when: "The deal is dead, gone to a competitor, or stalled beyond saving",
      steps: [
        "Set <code>stage</code> to <strong>Closed Lost</strong>.",
        "Set <code>lostReason</code>. This is <strong>required on every lost deal</strong>: Price, Lead Time, Lost to Competitor, No Budget, No Decision, Stalled or Other.",
        "If we lost to a competitor, set <code>competitorDisplaced</code> too, so the competitive picture stays honest.",
        "Leave <code>amount</code> and <code>closeDate</code> alone. Do not blank them &mdash; they are what win-rate and pricing analysis are built from.",
        "Clear <code>nextStep</code> and <code>nextStepDate</code> so it drops out of your due list, and stamp <code>lastActivityDate</code>.",
        "Add a one-line <strong>Note</strong> if there is something worth knowing next time &mdash; who won it, what the deciding factor was.",
        "If the customer comes back, move the stage back to a live stage. A lost deal is reopened, never recreated."
      ],
      shot: {key:"opp-lost-reason", cap:"The Lost Reason picklist open on an opportunity being moved to Closed Lost"},
      tip: "Ten seconds, worth gold. Patterns in Price and Lead Time go straight into supplier negotiations.",
      important: "Never delete a dead opportunity. Deleting destroys the only evidence we have of why we lose.",
      mistake: "Setting Closed Lost and skipping the reason because you are in a hurry. A lost deal with no reason teaches us nothing."
    }
  ],
  fields: [
    {k:"nextStep + nextStepDate", v:"The single most-touched pair in every flow. One concrete action, and the day you will really do it. Rewrite them every time you touch the deal."},
    {k:"lastActivityDate", v:"Stamp it on every real contact - call, meeting, email you actually sent. It is what stops a live deal reading as stale."},
    {k:"quoteRef", v:"The Intact quotation or PO number. Goes on the deal the moment the quote goes out, and into the email subject line so the thread links itself."},
    {k:"amountBasis", v:"ESTIMATED while you are guessing, <strong>QUOTED</strong> once a real quotation exists. Flipping it is part of the quotation flow, not an afterthought."},
    {k:"stage", v:"New &middot; Screening &middot; Meeting &middot; Proposal &middot; Customer (won) &middot; Closed Lost. Every flow ends with the stage being correct."},
    {k:"lostReason", v:"Mandatory the moment a deal goes to Closed Lost. Price &middot; Lead Time &middot; Lost to Competitor &middot; No Budget &middot; No Decision &middot; Stalled &middot; Other."},
    {k:"Outreach Cadence + Cadence Status", v:"Set Outreach Cadence to <strong>Quote follow-up</strong> on a quiet quote and the engine lays out four timed Tasks over about two weeks. Cadence Status shows Active, and you can set it to Stopped by hand."},
    {k:"salesRep (on the company)", v:"Not a field on the deal at all. Ownership of every opportunity derives from the linked company's <code>salesRep</code>, so fixing the company fixes the deal."}
  ],
  tips: [
    "Update as you go, not on Fridays. Walking out of a meeting, thirty seconds on the phone: move the stage, write the next step, set the date.",
    "Every flow starts with a <strong>search</strong>. Company, then contact, then create only what is genuinely missing. We already carry duplicate company records and every new one makes the pipeline harder to trust.",
    "Formal sales work goes through <strong>sales@</strong> with the document number in the subject line. That is what makes the email thread appear on the right company, contact and deal without anyone filing anything."
  ],
  mistakes: [
    {m:"Creating a new company or person without searching first.", fix:"Search a distinctive part of the name in global search. Names drift &mdash; a customer may be in as McLernon Computers while everyone says McLernons."},
    {m:"Treating a delivery chase or a return as sales work on the opportunity.", fix:"If it is about <em>delivering on the promise</em> rather than <em>winning the money</em>, it is a <strong>Case</strong> for Customer Operations."},
    {m:"Assuming the quote follow-up cadence emails the customer.", fix:"It only creates Tasks and surfaces them in the Sales Pulse with a template. You send every touch yourself from Outlook."},
    {m:"Closing a deal won or lost without tidying the fields.", fix:"Won: amount, quoteRef, closeDate, probability 100. Lost: lostReason, and leave the amount and close date as they were."}
  ],
  confirms: [
    "Exactly where the Outreach Cadence and Cadence Status fields appear on the opportunity record in our current build, and what the option is labelled on screen.",
    "Whether the QUOTE_FOLLOWUP tasks are assigned to the deal's rep or all to one person - the cadence engine has assigned everything to Stephen historically.",
    "Whether the Quotes Needing Follow-Up and Quotes - Missing Quote Ref views are still present and correctly filtered, given quoteRef has been stored as an empty string rather than blank on some records.",
    "Whether moving a company from Prospect to Active on first order is done by hand or driven by the Intact feed."
  ],
  quiz: [
    {
      q: "First action when a new enquiry arrives?",
      o: ["Create the opportunity", "Search for the company", "Email the customer a quote", "Add a task"],
      c: 1,
      e: "Search company, then contact, then create only what is missing. We already have duplicate company records, and every unnecessary new one splits a rep's deals."
    },
    {
      q: "How do you assign the owner of a new opportunity?",
      o: ["Pick your name in the Owner field on the deal", "Set the salesRep field on the linked company", "The creator is automatically the owner", "Ask an administrator"],
      c: 1,
      e: "There is nothing meaningful to assign on the deal. Ownership derives from the company's salesRep, so that is the field to get right."
    },
    {
      q: "You have just sent a formal quotation. Which three things change on the deal?",
      o: ["Stage to Proposal, quoteRef filled, amountBasis to QUOTED", "Stage to Customer, probability 100, closeDate today", "leadSource, vertical, endCustomer", "Nothing until they reply"],
      c: 0,
      e: "Proposal, the quotation number in quoteRef, and amountBasis flipped from ESTIMATED to QUOTED. Then set the chase as your next step with a date."
    },
    {
      q: "What does the Quote follow-up cadence actually do?",
      o: ["Sends four emails to the customer automatically", "Creates four timed Tasks over about two weeks that you action yourself", "Moves the deal through stages automatically", "Notifies the customer that the quote expires"],
      c: 1,
      e: "Four touches over about two weeks - email, call, email, break-up - created as Tasks with due dates and a paste-in template. It never emails the prospect; you send each one from Outlook."
    },
    {
      q: "When does the quote follow-up cadence stop on its own?",
      o: ["Never - you must always stop it manually", "When the customer replies, the deal advances a stage, or it is won or lost", "After 30 days", "When the close date passes"],
      c: 1,
      e: "It auto-stops on a reply, a stage advance, a win or a loss, or when all the steps have elapsed. You can also set Cadence Status to Stopped by hand."
    },
    {
      q: "An order lands. What is the correct stage?",
      o: ["Closed Won", "Proposal with probability 100", "Customer", "Order"],
      c: 2,
      e: "Customer is our won stage. Then correct the amount, fill quoteRef, set closeDate to the day the order landed and probability to 100."
    },
    {
      q: "Moving a deal to Customer in the CRM...",
      o: ["Raises the order in Intact automatically", "Creates a Case for Customer Operations", "Does not create anything in Intact - the order is still raised there by hand", "Emails the customer a confirmation"],
      c: 2,
      e: "The CRM stage change is a record of the win. Someone still raises the order in Intact and Customer Operations runs the delivery."
    },
    {
      q: "A customer rings about a delivery that has not arrived. Where does that belong?",
      o: ["A new opportunity", "A note on the opportunity", "A Case for Customer Operations", "A task for the supplier"],
      c: 2,
      e: "Winning the money is sales; delivering on the promise is Customer Operations. A delivery chase is a Case, not pipeline."
    },
    {
      q: "You are closing a deal as lost. What must you not do?",
      o: ["Set lostReason", "Blank out the amount and close date", "Set competitorDisplaced if we lost to a competitor", "Clear the next step"],
      c: 1,
      e: "Leave the amount and close date exactly as they were. They are the raw material for win-rate and pricing analysis - blanking them destroys the evidence."
    },
    {
      q: "You spoke to a contact who is not yet in People. Why does it matter?",
      o: ["It does not - the email is stored anyway", "Their email history is stored but shows on no record until the person exists", "The CRM will reject the email", "It blocks the opportunity from being created"],
      c: 1,
      e: "The mail is captured, but with no matching person it attaches to nothing. Two clicks - name, email, company - and the whole thread appears on the record."
    }
  ],
  flashcards: [
    {q: "The order of a new-enquiry flow", a: "Search company, search contact, create what is missing, create opportunity, check company salesRep, set value and stage, record the next action"},
    {q: "Three fields that change when a quotation goes out", a: "stage to Proposal, quoteRef filled, amountBasis to QUOTED"},
    {q: "What the QUOTE_FOLLOWUP cadence creates", a: "Four Tasks over about two weeks - it never emails the customer"},
    {q: "Won deal - stage and probability", a: "Stage Customer, probability 100"},
    {q: "The one field you cannot skip when losing a deal", a: "lostReason"},
    {q: "Where a delivery chase belongs", a: "A Case for Customer Operations, not the opportunity"}
  ],
  scenarios: [
    {
      scenario: "You quoted a reseller three weeks ago for a scanner refresh. Two chases by email, no reply. The contact is still answering the phone but says the client has not decided. You are heading into a busy fortnight on the road.",
      q: "What is the best CRM action?",
      o: ["Move the deal to Closed Lost with lostReason Stalled", "Set Outreach Cadence to Quote follow-up, push nextStepDate out honestly, and stamp lastActivityDate", "Leave it alone until they come back to you", "Drop the amount to zero so it stops skewing the forecast"],
      c: 1,
      e: "It is not dead - it is undecided, and you will be busy. The cadence lays out four timed Tasks so the chases still happen; an honest next-step date and a fresh lastActivityDate keep the deal out of the overdue and stale lists without lying about it."
    },
    {
      scenario: "An email lands in sales@ from a new name at an existing reseller, asking for pricing on kit for one of their retail clients. The reseller is already a company in the CRM with a rep set; the person is not in People.",
      q: "What is the minimum correct sequence?",
      o: ["Reply with pricing and log it later", "Create a duplicate company for the new contact, then a deal", "Add the person to People linked to the existing company, then create the opportunity from the company record with a value, stage and dated next step", "Create the opportunity only - the contact will appear automatically"],
      c: 2,
      e: "The company exists, so do not create a second one. Add the person so their email history attaches, then create the deal from the company record - which fills the company link and puts it on the right rep via salesRep. Link the end customer if there is a deployment site behind it."
    }
  ]
}
