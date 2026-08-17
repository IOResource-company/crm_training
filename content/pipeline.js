{
  slug: "pipeline",
  name: "Opportunities & Pipeline",
  track: "sales",
  tagline: "Every deal we are chasing, at an honest stage, with a next step and a date.",
  intro: "<p>An <strong>Opportunity</strong> is any revenue we are chasing: a quote in play, a refresh cycle, a tender, a rollout, a displacement attempt. One deal = one opportunity. Do not bundle a customer's whole year into one record, and do not split a single order into five.</p><p>Our stages are <strong>New &rarr; Screening &rarr; Meeting &rarr; Proposal &rarr; Customer</strong> (won) or <strong>Closed Lost</strong>. A stage is a fact about the deal, not a feeling &mdash; a deal moves when the thing has actually happened.</p><p>The rule the whole pipeline rests on is four items on every open deal: <strong>amount &middot; stage &middot; next step &middot; next step date</strong>. Get those right and the board, the forecast and the Monday review look after themselves.</p>",
  shots: [
    {key:"opp-kanban", cap:"Opportunities By Stage kanban - capture with the amount column hidden, so all six stage columns New / Screening / Meeting / Proposal / Customer / Closed Lost are visible"},
    {key:"opp-record", cap:"A single opportunity record page with the side panel showing Stage, Amount, Close Date, Probability, Next Step, Next Step Date, Quote Ref and the linked Company - pick a deal with no commercial figures on screen, or blur the amount"}
  ],
  howtos: [
    {
      title: "Create an opportunity",
      when: "A customer asks for pricing, or you learn of a refresh, EOL or rollout that could become an order",
      steps: [
        "Open the <strong>company</strong> record first, so the deal is linked from the start. If the company does not exist yet, create it before the deal.",
        "Add a new opportunity from that company record, so the <code>company</code> link is filled automatically.",
        "<strong>Name it so anyone reads it at a glance</strong>: <em>Company &mdash; what they are buying (context)</em>. For example <em>Bluecloud &mdash; Urovo K329 label printers (Agility trial)</em>. Use the short form of the company name that the other deals on that account already use.",
        "Link the <strong>contact</strong> (the person driving it) and, where there is a deployment site behind the reseller, the <strong>End Customer</strong> via <code>endCustomer</code> &mdash; Musgrave, Uniphar, Eason and so on.",
        "Set <code>amount</code> to your best estimate of the total value to IOR, ex-VAT, and check the currency is right (EUR for Irish deals, GBP for GB-office deals).",
        "Set <code>amountBasis</code> to <strong>ESTIMATED</strong> while it is your guess. It becomes <strong>QUOTED</strong> only when a real quotation exists.",
        "Set the <code>stage</code> honestly &mdash; usually <strong>New</strong> or <strong>Screening</strong> on day one.",
        "Set <code>closeDate</code> to when the order will realistically land, and <code>nextStep</code> plus <code>nextStepDate</code> to one concrete action.",
        "Spend thirty more seconds on <code>leadSource</code> and <code>vertical</code>. That is what makes the quarterly numbers mean anything."
      ],
      shot: {key:"opp-new", cap:"The new-opportunity panel opened from a company record, with the Company field already populated"},
      tip: "Create it the <strong>same day</strong> the conversation happens. If it is not in the CRM, it does not exist at Monday's review.",
      important: "Never create an opportunity without a company linked. Ownership is derived from the company &mdash; an opportunity with no company belongs to nobody and drops out of every rep's list.",
      mistake: "Waiting until the quote is ready before creating the deal, so the early pipeline looks empty.",
      confirm: "The exact label and location of the control that adds a related opportunity from a company record in our Twenty version."
    },
    {
      title: "Move a deal through the stages",
      when: "Something has actually happened on the deal - a call, a booked meeting, a quote going out, a PO landing",
      steps: [
        "<strong>New &rarr; Screening</strong>: you have spoken to them and there is a real need, a budget-holder and a rough timeframe. No substance behind it? Send it to Closed Lost with <code>lostReason</code> = No Decision.",
        "<strong>Screening &rarr; Meeting</strong>: a meeting, demo or site visit is actually booked. Make the meeting itself the <code>nextStep</code>, with its date.",
        "<strong>Meeting &rarr; Proposal</strong>: a formal quotation or proposal has been issued. Put the Intact quotation number in <code>quoteRef</code> and switch <code>amountBasis</code> to QUOTED at the same time.",
        "<strong>Proposal &rarr; Customer</strong>: the PO has been received. That is the won stage.",
        "<strong>Any stage &rarr; Closed Lost</strong>: it is dead, gone to a competitor or stalled forever. Always with a <code>lostReason</code>.",
        "Every time you move a stage, rewrite the <code>nextStep</code> and <code>nextStepDate</code> for the new reality, and stamp <code>lastActivityDate</code> with today.",
        "You can move deals on the <strong>By Stage</strong> kanban board or from the <code>stage</code> field on the record &mdash; both do the same thing."
      ],
      shot: {key:"opp-kanban", cap:"Dragging a card between two columns on the By Stage board"},
      tip: "Do it walking out of the meeting &mdash; thirty seconds on the phone. Batching it up on Friday is how deals rot.",
      important: "A stage is evidence, not optimism. Proposal means a quote is genuinely in the customer's hands, not that you intend to send one this week.",
      mistake: "Parking everything in Screening. If a stage column is piling up, that is where deals are stalling, not where they belong.",
      confirm: "Whether dragging a card into Closed Lost on the kanban prompts for a lost reason, or silently leaves lostReason blank."
    },
    {
      title: "Keep an open deal honest week to week",
      when: "Any time you touch the deal - a call, an email, a chase, a slip",
      steps: [
        "Rewrite <code>nextStep</code> as one concrete action with a name and a thing to do: <em>Follow up quote 25931 with Teresa</em>, not <em>chase</em>.",
        "Move <code>nextStepDate</code> forward to when you will really do it. A long-cycle deal is not overdue, it is mis-dated &mdash; push the date out honestly rather than letting it sit red.",
        "Stamp <code>lastActivityDate</code> with the date of the real contact. This is what drives stale-deal detection, so a blank one makes the deal look dead when it is not.",
        "Firm up <code>amount</code> and flip <code>amountBasis</code> to QUOTED once a real quotation exists.",
        "Re-date <code>closeDate</code> if it has slipped, and say why in the next step.",
        "Set <code>probability</code> to reflect reality, and set <code>forecastCategory</code> for the current period: Commit, Best Case, Pipeline or Omitted.",
        "If the deal is competitive, set <code>displacementTarget</code>, <code>competitorDisplaced</code> and, where special pricing is needed, <code>priceExceptionStatus</code>."
      ],
      shot: {key:"opp-next-step", cap:"An opportunity record with Next Step and Next Step Date being edited, plus Last Activity Date visible"},
      tip: "Nobody gets shot for moving a close date. Deals slip. The sin is leaving the date wrong so the whole quarter reads as fiction.",
      important: "Most of our open deals are still missing <code>closeDate</code> and <code>amount</code>, and <code>quoteRef</code> is blank on a lot of proposals. That is exactly why the hygiene views exist &mdash; when you touch a deal, fill the gaps you can fill.",
      mistake: "Updating the notes but not the dates, so the deal looks stale in every view even though you spoke to them yesterday.",
      confirm: "Whether lastActivityDate is ever stamped automatically by a workflow, or whether it is entirely manual today."
    },
    {
      title: "Close a deal as won",
      when: "The purchase order has landed",
      steps: [
        "Set <code>stage</code> to <strong>Customer</strong>. That is our won stage &mdash; there is no separate Closed Won.",
        "Make sure <code>amount</code> reflects what was actually ordered, with the right currency, and set <code>amountBasis</code> to QUOTED.",
        "Put the PO or quotation reference in <code>quoteRef</code>.",
        "Set <code>closeDate</code> to the date the order actually landed, and <code>probability</code> to 100.",
        "Write a final <code>nextStep</code> if anything is still owed &mdash; a delivery date to confirm, a phase 2 to schedule &mdash; otherwise clear it.",
        "Hand over to Customer Operations. The order goes into Intact and delivery is run from there; the opportunity is now history, not a to-do."
      ],
      tip: "If it is a phased rollout, close the phase that was ordered and create the next phase as its own opportunity rather than leaving one giant deal open forever.",
      important: "Moving a deal to Customer does <strong>not</strong> create anything in Intact. Someone still raises the order there.",
      mistake: "Leaving a deal at Proposal with probability 100 instead of closing it. That inflates weighted pipeline and hides the real win rate.",
      confirm: "Whether any automation fires when a deal moves to Customer - a task, a notification, or an Intact hand-off - or whether it is purely manual."
    },
    {
      title: "Close a deal as lost",
      when: "The deal is dead, gone to a competitor, or has stalled beyond saving",
      steps: [
        "Set <code>stage</code> to <strong>Closed Lost</strong>.",
        "Set <code>lostReason</code>. It is <strong>mandatory</strong> on every lost deal: Price, Lead Time, Lost to Competitor, No Budget, No Decision, Stalled or Other.",
        "If we lost it to a competitor, also set <code>competitorDisplaced</code> so we can see where we are bleeding.",
        "Leave <code>amount</code> and <code>closeDate</code> as they were &mdash; do not blank them. They are the raw material for win-rate and pricing analysis.",
        "Clear or finish the <code>nextStep</code> so it stops appearing in your due list.",
        "If the customer comes back later, just move the deal back to a live stage. A lost deal can be reopened."
      ],
      shot: {key:"opp-lost-reason", cap:"The Lost Reason picklist open on an opportunity, showing all seven options"},
      tip: "It takes ten seconds and it is worth gold. Patterns in Price and Lead Time go straight into supplier negotiations.",
      important: "Closing a loss is not an admission of failure. A pipeline full of zombie deals helps nobody, and an honest loss is better market research than anything we could buy.",
      mistake: "Deleting a dead opportunity instead of closing it lost. Deleted deals teach us nothing.",
      confirm: "Whether the CRM actually enforces lostReason as required when stage is set to Closed Lost, or whether it is only enforced by our rule."
    }
  ],
  fields: [
    {k:"stage", v:"New &middot; Screening &middot; Meeting &middot; Proposal &middot; <strong>Customer</strong> (won) &middot; <strong>Closed Lost</strong>. Move it when the thing has actually happened, not when you hope it will."},
    {k:"amount (+ currency)", v:"Best estimate of the total deal value to IOR, <strong>ex-VAT</strong>. Check the currency &mdash; EUR or GBP. A rough number now beats a precise blank forever."},
    {k:"amountBasis", v:"<strong>ESTIMATED</strong> = your judgement. <strong>QUOTED</strong> = a real quotation exists. Flip it to QUOTED the moment the quote goes out, so leadership can tell soft pipeline from hard."},
    {k:"closeDate", v:"When the order will realistically land, not when you would like it to. Slipped? Move the date and explain it in the next step. Most of the deals that came in with the data load have no close date at all, so yours is doing real work."},
    {k:"probability", v:"Win probability as a percentage. Keep it honest &mdash; 100% belongs on a won deal, not a hopeful one."},
    {k:"weightedValue", v:"<code>amount &times; probability</code>. Treat it as a stored number that has to keep up with the amount and probability you set. Note there is no Weighted Pipeline tile on the Command Centre as built - the field exists, the tile does not."},
    {k:"nextStep + nextStepDate", v:"One concrete action and the day you will do it: <em>Site survey w/c 14 Jul</em>. When it is done, write the next one. Overdue and undated next steps are the first thing the Sales Pulse shouts about."},
    {k:"lastActivityDate", v:"The date of your last real contact on this deal. It drives stale-deal detection (14+ days quiet). Blank means the deal reads as stale forever."},
    {k:"quoteRef", v:"The Intact quotation or PO number. Put it on the deal the day the quote goes out &mdash; it is also what links the email thread to the record when the number is in the subject line."},
    {k:"leadSource", v:"Website &middot; Referral &middot; Outbound &middot; Existing Account &middot; Trade Show &middot; Other. Thirty seconds at creation; it is how we learn which motions actually generate pipeline."},
    {k:"forecastCategory", v:"<strong>Commit</strong> (you would stake your name on it) &middot; <strong>Best Case</strong> (winnable this period) &middot; <strong>Pipeline</strong> (real but earlier) &middot; <strong>Omitted</strong> (tracked, deliberately not counted)."},
    {k:"lostReason", v:"Price &middot; Lead Time &middot; Lost to Competitor &middot; No Budget &middot; No Decision &middot; Stalled &middot; Other. Mandatory on every Closed Lost deal."},
    {k:"Kill-the-Zebra set", v:"<code>displacementTarget</code> (is this displacing an incumbent?), <code>competitorDisplaced</code> (Zebra / Honeywell / Other / None), <code>priceExceptionStatus</code> (none / requested / approved) and <code>vertical</code>. These four populate the <strong>Kill the Zebra</strong> view &mdash; the displacement scoreboard."},
    {k:"endCustomer", v:"The deployment site behind the reseller &mdash; Musgrave, Uniphar, Eason. Linking it gives the two-horse view: every reseller chasing the same end customer, rolled up on one record."}
  ],
  tips: [
    "The whole discipline in four words: <strong>amount, stage, next step, date</strong>. If every open deal has those four, the board, the forecast and the Monday meeting take care of themselves.",
    "Name deals as <em>Company &mdash; what they are buying (context)</em>. Someone covering for you should understand the deal from the pipeline board without opening it.",
    "Work from a view, not the full list. <strong>Open Pipeline</strong> for your day, <strong>By Stage</strong> for shape, <strong>Stale Deals</strong> and <strong>Data Gaps &mdash; no amount</strong> to clean up. Star the ones you use so they sit at the top of the sidebar."
  ],
  mistakes: [
    {m:"Creating an opportunity with no company linked.", fix:"Always start from the company record. Ownership comes from the company's <code>salesRep</code>, so a deal with no company has no owner and appears on nobody's list."},
    {m:"Leaving amount blank because you are not sure yet.", fix:"Put in a rough estimate with <code>amountBasis</code> = ESTIMATED. A blank amount makes the deal invisible in every value view; a rough number can be corrected later."},
    {m:"Letting dead deals sit at Proposal for months.", fix:"Move them to Closed Lost with a <code>lostReason</code>. Two weeks with no movement means a decision: re-date it honestly, escalate it, or close it."},
    {m:"Updating a deal but not stamping lastActivityDate.", fix:"Set it to today whenever you have real contact. Otherwise the stale view flags a live deal and everyone learns to ignore the view."}
  ],
  confirms: [
    "The exact on-screen labels our Twenty version uses for the opportunity fields - whether the reader sees Amount Basis, Next Step Date, Last Activity Date and Weighted Value spelled exactly that way.",
    "Whether weightedValue recalculates automatically when amount or probability change, or has to be recomputed and typed in.",
    "Whether the currency selector on amount offers GBP alongside EUR on every deal, and how mixed-currency deals are treated in the euro pipeline totals and dashboard tiles.",
    "Whether a rep can edit the stage field directly on the record, or only by dragging on the kanban board, in our version.",
    "Whether opportunities carry a usable Owner field at all today - the reporting treats company.salesRep as the only meaningful ownership, so confirm whether the Owner field should be ignored or kept in step."
  ],
  quiz: [
    {
      q: "What are our opportunity stages, in order?",
      o: ["New, Qualified, Demo, Quote, Closed Won, Closed Lost", "New, Screening, Meeting, Proposal, Customer, Closed Lost", "Lead, Prospect, Opportunity, Customer", "Enquiry, Quote, Order, Delivered, Invoiced"],
      c: 1,
      e: "New, Screening, Meeting, Proposal, then Customer for a win or Closed Lost for a loss. Customer is our won stage - there is no Closed Won."
    },
    {
      q: "A deal moves from Screening to Meeting when...",
      o: ["You have decided the deal is real", "A meeting, demo or site visit is actually booked", "The customer replies to your email", "You have set a close date"],
      c: 1,
      e: "Stages are facts, not feelings. Screening exits when a meeting, demo or site visit is genuinely in the diary."
    },
    {
      q: "What must be true before a deal sits at Proposal?",
      o: ["A meeting has happened", "A formal quotation or proposal has been issued", "The customer has verbally agreed", "The close date is inside this quarter"],
      c: 1,
      e: "Proposal means the quote is in the customer's hands. That is also when the Intact quotation number goes into quoteRef and amountBasis flips to QUOTED."
    },
    {
      q: "Who owns an opportunity?",
      o: ["Whoever created the record", "The Opportunity Owner field on the deal", "It derives from the salesRep field on the linked company", "Whoever last edited it"],
      c: 2,
      e: "Ownership comes from the company's salesRep. That is why a deal with no company linked belongs to nobody and drops out of every rep's list and pulse."
    },
    {
      q: "You quote a customer today. Which field changes to QUOTED?",
      o: ["forecastCategory", "amountBasis", "quoteRef", "probability"],
      c: 1,
      e: "amountBasis moves from ESTIMATED to QUOTED. At the same time put the quotation number in quoteRef and move the stage to Proposal."
    },
    {
      q: "Which forecast category means 'you would stake your reputation on it landing this period'?",
      o: ["Pipeline", "Best Case", "Commit", "Omitted"],
      c: 2,
      e: "Commit. Best Case is winnable if things go our way, Pipeline is real but earlier, Omitted is tracked deliberately outside the numbers."
    },
    {
      q: "A deal has gone to a competitor. What is the minimum you must record?",
      o: ["Stage Closed Lost", "Stage Closed Lost plus a lostReason", "A note on the company", "Delete the opportunity"],
      c: 1,
      e: "Closed Lost plus a lostReason is mandatory - here, Lost to Competitor. Also set competitorDisplaced so the displacement picture stays accurate. Never delete the deal."
    },
    {
      q: "Which field drives stale-deal detection?",
      o: ["closeDate", "nextStepDate", "lastActivityDate", "updatedAt"],
      c: 2,
      e: "lastActivityDate. A blank one makes a live deal read as stale, which is why so many of our deals still show up in the stale view."
    },
    {
      q: "Weighted pipeline is calculated as...",
      o: ["amount divided by the number of stages", "amount times probability", "amount minus cost", "the sum of Commit deals only"],
      c: 1,
      e: "amount times probability, held in weightedValue and summed on the Command Centre's Weighted Pipeline tile."
    },
    {
      q: "Which set of fields feeds the Kill the Zebra view?",
      o: ["leadSource and vertical", "displacementTarget, competitorDisplaced, priceExceptionStatus and vertical", "quoteRef and amountBasis", "forecastCategory and probability"],
      c: 1,
      e: "Those four turn a displacement play from a story in someone's head into a countable deal on the scoreboard."
    }
  ],
  flashcards: [
    {q: "Our won stage", a: "Customer"},
    {q: "The four things every open deal must have", a: "Amount, stage, next step, next step date"},
    {q: "ESTIMATED vs QUOTED on amountBasis", a: "ESTIMATED is your judgement; QUOTED means a real quotation exists"},
    {q: "Where opportunity ownership comes from", a: "The salesRep field on the linked company"},
    {q: "The four forecast categories", a: "Commit, Best Case, Pipeline, Omitted"},
    {q: "The seven lost reasons", a: "Price, Lead Time, Lost to Competitor, No Budget, No Decision, Stalled, Other"},
    {q: "What makes a deal stale", a: "No lastActivityDate in the last 14 days"},
    {q: "What endCustomer gives you", a: "The two-horse view - every reseller chasing the same deployment site on one record"}
  ],
  scenarios: [
    {
      scenario: "You meet a reseller on Tuesday. They want pricing on a fleet of rugged handhelds for one of their retail clients, roughly a hundred units, and they need it in for their client's Q1. You have not quoted anything yet.",
      q: "What do you do before the end of the day?",
      o: ["Wait until the quote is ready, then create the opportunity at Proposal", "Create the opportunity at Screening with an estimated amount, a close date, the end customer linked and a dated next step", "Email yourself a reminder and create it at the Monday review", "Create it at New with just the company name and fill the rest in later"],
      c: 1,
      e: "Same day, from the company record. Screening is right - there is a real need, a named contact and a rough size. An estimated amount with amountBasis ESTIMATED, a realistic closeDate, the endCustomer link and one dated next step is a minute's work and makes the deal real."
    },
    {
      scenario: "A proposal you sent six weeks ago has gone quiet. Two chases, no reply. The contact has stopped answering the phone and you have heard the client went with an incumbent-brand alternative.",
      q: "What is the right CRM action?",
      o: ["Leave it at Proposal in case they come back", "Move it to Closed Lost with lostReason Lost to Competitor and set competitorDisplaced", "Delete the opportunity to keep the pipeline clean", "Push the close date out six months and move on"],
      c: 1,
      e: "Close it honestly. Lost to Competitor plus competitorDisplaced tells us where we are bleeding, and the deal can be reopened by moving the stage if they come back. Leaving zombies at Proposal corrupts the forecast; deleting destroys the evidence."
    }
  ]
}
