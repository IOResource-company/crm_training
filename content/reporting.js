{
  slug: "reporting",
  name: "The Weekly Picture",
  track: "all",
  tagline: "How to read the CRM rather than just feed it - the dashboard, the monitoring views, the forecast, and the gaps you must know about before you quote a number.",
  intro: "<p>Everything else in this guide is about putting good data in. This module is about taking it out: where to look for the roll-up, what each number actually means, and - just as important - which numbers our CRM cannot yet tell you.</p><p>There are three places to look. The <strong>Command Centre</strong> dashboard answers 'am I on track, and what needs me now' in about five seconds. The <strong>monitoring views</strong> for pipeline and cases answer 'which record do I open'. And the <strong>forecast fields</strong> on each deal are what turn a list of opportunities into a view of the quarter.</p><p>Be careful with numbers. Our pipeline still has real gaps in amounts and close dates, and two objects that would carry targets and revenue actuals are empty. A figure from the CRM is a good starting point and a bad quote unless you have checked what is behind it.</p>",
  shots: [
    {key:"command-centre", cap:"Command Centre dashboard - capture with value tiles cropped or blurred, leaving the widget titles, the case tiles and the action tables readable."},
    {key:"forecast-categories", cap:"An opportunity record showing the Forecast category, Probability, Close date and Weighted value fields - crop or blur the amount and weighted value figures."}
  ],
  howtos: [
    {
      title: "Read the Command Centre in five seconds",
      when: "First thing in the morning, and before any conversation about how the business is doing",
      steps: [
        "Open the <strong>IOR Command Centre</strong> dashboard from the sidebar.",
        "Read the <strong>tiles</strong> first: open pipeline value, weighted pipeline value, and unacknowledged cases. The case tile has a target of zero - that is the one that should make you act.",
        "Then read <strong>Pipeline by Stage</strong>. You are looking at the shape, not the total: a stage that is piling up is where deals stall.",
        "Then work the <strong>action tables</strong>. <strong>Next Actions</strong> lists open opportunities sorted by next-step date with overdue and undated deals floating to the top. <strong>Open Cases</strong> lists everything not resolved or closed, oldest first.",
        "Open the record from the table. A chart tells you there is a problem; a table tells you which record to open."
      ],
      shot: {key:"command-centre", cap:"Command Centre dashboard - capture with value tiles cropped or blurred, leaving the widget titles, the case tiles and the action tables readable."},
      important: "The action tables are <strong>sort-based</strong>, not date-filtered, so they never go stale. Any view built on a hard-coded date will quietly rot - if a view name mentions a specific date or quarter, check it before you trust it.",
      tip: "The dashboard is deliberately small. Every widget has to pass the test: what would I do differently because of this number? A widget nobody acts on is worse than no widget.",
      confirm: "Whether the extra widgets from the design have since been added - the unowned-cases tile, the deals-with-no-amount tile, and the deals-created-per-month and cases-by-status charts."
    },
    {
      title: "Use the pipeline monitoring views",
      when: "Weekly, at the pipeline review - and any time someone asks what is really live",
      steps: [
        "<strong>Open Pipeline</strong> - what is live, in close-date order. This is the default working view.",
        "<strong>By Stage</strong> - the board. Read it left to right: deals should flow New, Screening, Meeting, Proposal, then Customer or Closed Lost.",
        "<strong>Top Prizes</strong> - open deals ranked by value. Only as good as the amounts behind it.",
        "<strong>Closing This Quarter</strong> - the forecast view. It needs close dates to mean anything.",
        "<strong>Stale Deals</strong> - open deals with no recent activity. Each one gets a decision: push it, or kill it.",
        "<strong>Data Gaps - no amount</strong> and <strong>Quotes - Missing Quote Ref</strong> - your backfill worklists. Target: empty.",
        "<strong>Kill the Zebra</strong> - live displacement deals, the strategic scoreboard rather than a revenue one."
      ],
      important: "A deal with no real next step and no real date is <strong>not in the active pipeline</strong>, whatever the stage says. That rule is printed in the Sales Pulse every day for a reason.",
      tip: "Deals with no activity for 14 days or more count as stale. If a whole view is flagging as stale, check whether the underlying activity date is actually being stamped before you conclude the pipeline has stopped moving.",
      mistake: "Quoting the Top Prizes list as the biggest deals in the business when a large share of open deals still carry no amount at all."
    },
    {
      title: "Use the case monitoring views",
      when: "Daily for Customer Operations, weekly for anyone reviewing service quality",
      steps: [
        "<strong>All Open (SLA)</strong> - every live case sorted by due date. The daily worklist.",
        "<strong>Unowned cases</strong> and <strong>Overdue cases</strong> - both target zero, both driven down every morning.",
        "<strong>Open Cases - No Due Date</strong> and <strong>Open Cases - No Next Action Date</strong> - hygiene nets, both target zero.",
        "<strong>Escalated</strong> - at-risk and high-value items, reviewed daily.",
        "<strong>Waiting - Supplier</strong> - everything blocked on a vendor or courier. Each one needs a fresh chase.",
        "<strong>Open cases (by status)</strong> - the board view, for the flow at a glance.",
        "For the timing measures - median acknowledgement and first-response times against the 1-hour and 4-hour targets - read the <strong>Ops Pulse</strong>. Those are calculated in the pulse, not on the dashboard."
      ],
      important: "SLA medians are only true where <strong>Received at</strong> is set. Cases without it are counted as unmeasurable rather than as passing - so a good-looking median can be sitting on a smaller sample than you think.",
      tip: "Treat 'resolved' by <strong>status</strong>, not by whether the resolved timestamp is filled. Reopening a resolved case keeps the old timestamp."
    },
    {
      title: "Set and read the forecast",
      when: "Weekly on every open deal you own, and before any conversation about the quarter",
      steps: [
        "Set the <strong>Forecast category</strong> on each open deal. <strong>Commit</strong> - you would stake your reputation on it landing this period, verbal yes or purchase order imminent. <strong>Best Case</strong> - live and winnable this period if things go our way. <strong>Pipeline</strong> - real but earlier, qualified and being worked, timing less certain. <strong>Omitted</strong> - keep tracking it, but leave it out of the numbers.",
        "Set the <strong>Probability</strong> honestly. Weighted value is amount multiplied by probability, so a hopeful percentage inflates the weighted pipeline for everyone.",
        "Set a realistic <strong>Close date</strong> - when the order will actually land, not when you would like it to. Nobody is punished for moving a date; leaving it wrong is what makes the quarter fiction.",
        "Read <strong>raw</strong> and <strong>weighted</strong> together. Raw open pipeline is the total of what is in play. Weighted is the risk-adjusted view. Quote raw for coverage, weighted for expectation - and never present one as the other.",
        "Sense-check anything at 100 per cent probability that is not actually won. It inflates the weighted pipeline, and the pipeline sweep deliberately lists those rows for review."
      ],
      shot: {key:"forecast-categories", cap:"An opportunity record showing the Forecast category, Probability, Close date and Weighted value fields - crop or blur the amount and weighted value figures."},
      important: "Weighted pipeline can only include deals that have an <strong>amount</strong> and a <strong>probability</strong>. Deals with neither are invisible to it - so the weighted figure is always an understatement of what is genuinely in play, not a conservative estimate of it.",
      tip: "A forecast that is 80 per cent right and honest is useful. One that is 100 per cent hopeful is noise."
    },
    {
      title: "Sanity-check a number before you quote it",
      when: "Every single time you are about to put a CRM figure in front of anyone outside the CRM",
      steps: [
        "Ask <strong>how many deals are behind it</strong>. Then ask how many open deals have no amount at all - the difference is the size of the understatement.",
        "Ask <strong>whether the close dates are real</strong>. A period-based figure is only as good as the close dates it filters on, and close dates have been a known gap.",
        "Check whether the <strong>pipeline sweep is fresh</strong>. When it has stopped running, the Sales Pulse shows an amber freshness strip and the CRM amounts are drifting from the reps' sheets.",
        "Check whether you are reading a <strong>whole-book</strong> figure or a <strong>rep-scoped</strong> one. A rep edition of the Sales Pulse shows that rep's numbers and says so in the subject line.",
        "Say what the number is <strong>not</strong>. There are no revenue actuals in the CRM, so nothing on the dashboard is a statement about invoiced business.",
        "If the number will not survive those five questions, quote the count of deals rather than the value."
      ],
      important: "Never guess a commercial figure to fill a blank. A blank is honest; a made-up number corrupts every roll-up it touches and is impossible to trace afterwards.",
      mistake: "Reading a pipeline total off a widget and repeating it in a board pack or to a supplier without checking what share of deals carry an amount at all."
    }
  ],
  fields: [
    {k:"Amount", v:"The deal value to us, excluding VAT. Everything monetary on the dashboard sums this. A blank amount means the deal is simply absent from those totals."},
    {k:"Amount basis", v:"Whether the amount is an estimate or comes from an actual quote. Worth checking before treating a figure as firm - the pipeline sweep marks swept rows as quoted."},
    {k:"Probability", v:"Your honest percentage. It is one half of the weighted value, so optimism here inflates the weighted pipeline for the whole business."},
    {k:"Weighted value", v:"Amount multiplied by probability. Present it as the risk-adjusted view, never as the pipeline total, and never the other way round."},
    {k:"Close date", v:"When the order will realistically land. Every period-based and forecast view filters on this, so a wrong date does more damage than a missing one."},
    {k:"Forecast category", v:"Commit, Best Case, Pipeline or Omitted - the human judgement on top of the arithmetic. Omitted means tracked but deliberately excluded from the numbers."},
    {k:"Next step date", v:"What the Next Actions widget sorts on, with overdue and undated deals floating to the top. It is the discipline measure rather than a money measure."},
    {k:"Received at (case)", v:"The start of the SLA clock. Without it, that case's acknowledgement and response times cannot be measured at all and it is counted as unmeasurable."}
  ],
  tips: [
    "<strong>Charts diagnose, tables act.</strong> A chart tells you there is a problem in a stage; the action table tells you which record to open. Spend your time in the tables.",
    "Prefer <strong>sort-based</strong> views over date-filtered ones. A view filtered on a hard-coded date will silently rot and keep returning a confident, wrong answer.",
    "When you quote a figure, say what it excludes in the same breath. 'Open pipeline across deals that carry a value' is an honest sentence; a bare total is not."
  ],
  mistakes: [
    {m:"Presenting the open pipeline total as if every live deal were in it.", fix:"Check the no-amount count first and qualify the number. A large share of open deals have historically carried no amount, so the total understates what is really in play."},
    {m:"Quoting weighted pipeline and raw pipeline interchangeably.", fix:"They answer different questions. Raw is what is in play; weighted is amount multiplied by probability. Label which one you are using every time."},
    {m:"Looking for a versus-target gauge or a revenue-actuals report on the dashboard.", fix:"They do not exist yet. The <strong>Sales Target</strong> and <strong>Sales Transaction</strong> objects are present but <strong>empty</strong>, so there is no coverage ratio and no actuals in the CRM. Revenue lives in the finance system."},
    {m:"Trying to build a dashboard, star a favourite or reorder the sidebar programmatically.", fix:"On our version those are <strong>UI-only</strong> - dashboards are read-only through the API, and favourites and sidebar order cannot be set that way either. Build them by hand in the browser."}
  ],
  confirms: [
    "Whether the Sales Target and Sales Transaction objects are still empty, or whether monthly targets and an actuals feed have since been loaded - that is what would unlock a versus-target gauge and a pipeline coverage ratio.",
    "Whether the Command Centre still carries exactly the six widgets described here, or whether the remaining planned tiles and charts have been added.",
    "Whether the unowned-cases widget still counts closed records, which would make a target-zero tile read high for a reason that is not a real problem.",
    "The current proportion of open deals carrying an amount and a close date - the honest denominator behind every value on the dashboard."
  ],
  quiz: [
    {
      q: "What is weighted pipeline?",
      o: ["The total value of all open deals", "Amount multiplied by probability, summed across open deals", "The value of deals in Commit only", "Last quarter's revenue"],
      c: 1,
      e: "Weighted value is amount multiplied by probability. It is the risk-adjusted view and is always smaller than raw open pipeline - and it excludes any deal with no amount or no probability."
    },
    {
      q: "Which forecast category means 'keep tracking it, but leave it out of the numbers'?",
      o: ["Pipeline", "Best Case", "Omitted", "Commit"],
      c: 2,
      e: "Omitted. Commit is essentially won, Best Case is winnable this period if things go our way, and Pipeline is real but earlier."
    },
    {
      q: "Why is there no versus-target gauge on the dashboard?",
      o: ["The widget type is not supported", "The Sales Target and Sales Transaction objects are empty", "Targets are confidential", "It was removed for being a vanity metric"],
      c: 1,
      e: "Both objects exist but hold no data, so there is nothing to compare against. Seeding targets is what would unlock a versus-target gauge and a pipeline coverage ratio."
    },
    {
      q: "Which of these can you NOT do through the API on our version of the CRM?",
      o: ["Read opportunities", "Create a saved view", "Build a dashboard, star a favourite or reorder the sidebar", "Update a case status"],
      c: 2,
      e: "Dashboards are read-only through the API on our version, and favourites and sidebar order cannot be set that way either. They have to be built by hand in the browser."
    },
    {
      q: "The Next Actions widget sorts open opportunities by next-step date. Where do deals with no date at all appear?",
      o: ["They are excluded", "At the bottom", "At the top, with the overdue ones", "In a separate widget"],
      c: 2,
      e: "Overdue and undated deals float to the top. The widget is deliberately sort-based rather than date-filtered so it never goes stale."
    },
    {
      q: "Where do you find the median acknowledgement and first-response times?",
      o: ["On the Command Centre dashboard", "In the Ops Pulse email", "In the Cases list footer", "In the Sales Pulse"],
      c: 1,
      e: "The SLA medians are calculated in the twice-daily Ops Pulse. The dashboard widget types on our version cannot compute differences between timestamps."
    },
    {
      q: "A case has no Received at value. What does that mean for the SLA numbers?",
      o: ["It counts as a breach", "It counts as passing", "It is counted as unmeasurable", "It is excluded from the case queue entirely"],
      c: 2,
      e: "Without a start time there is no clock, so the case is counted as unmeasurable rather than as a pass or a fail. It still appears in the queue and still needs working."
    },
    {
      q: "Why are the dashboard's action tables built on sorts rather than date filters?",
      o: ["Sorts are faster", "Date filters rot - a hard-coded date quietly stops being right", "The API cannot write filters", "So the tables can be exported"],
      c: 1,
      e: "A view filtered on a hard-coded date keeps returning a confident, wrong answer as time passes. A sort-based table always floats the most urgent record to the top with no maintenance."
    },
    {
      q: "Someone asks for the value of the pipeline for a board pack. What should you do first?",
      o: ["Read the tile and send the number", "Check how many open deals carry no amount, and whether the sweep is fresh", "Add up the deals by hand", "Use the weighted figure instead, since it is smaller"],
      c: 1,
      e: "Sanity-check before you quote. Deals without an amount are simply absent from the total, and a stale pipeline sweep means the CRM amounts have drifted from the reps' sheets."
    },
    {
      q: "What does the Kill the Zebra view track?",
      o: ["Deals about to be lost", "Live competitor-displacement deals", "Deals with no amount", "Cases waiting on a supplier"],
      c: 1,
      e: "It collects live displacement plays, tagged with the competitor displaced. It is a strategic scoreboard rather than a revenue view."
    }
  ],
  flashcards: [
    {q:"The four forecast categories?", a:"Commit - would stake your reputation on it. Best Case - winnable this period. Pipeline - real but earlier. Omitted - tracked, not counted."},
    {q:"Raw versus weighted pipeline?", a:"Raw is the total value of open deals. Weighted is amount multiplied by probability - the risk-adjusted view. Never present one as the other."},
    {q:"What is on the Command Centre?", a:"Pipeline by stage, a next-actions table, an open-cases table, open pipeline value, weighted pipeline value, and unacknowledged cases with a target of zero."},
    {q:"Why is there no revenue actuals reporting?", a:"The Sales Target and Sales Transaction objects exist but are empty. There are no actuals in the CRM at all."},
    {q:"What can't be built through the API on our version?", a:"Dashboards, favourites and sidebar order - all UI-only. They are built by hand in the browser."},
    {q:"Where do SLA medians live?", a:"In the Ops Pulse email, not on the dashboard - the dashboard widget types cannot compute differences between timestamps."},
    {q:"Two known data gaps that affect every value on the dashboard?", a:"Missing amounts and missing close dates on open deals. Both understate or distort every roll-up that depends on them."},
    {q:"Charts or tables?", a:"A chart says there is a problem; a table says which record to open. Spend your time in the tables."}
  ],
  scenarios: [
    {
      scenario: "A supplier asks how much business you have in the pipeline for their product this quarter. The dashboard shows an open pipeline value and a weighted value, and you know a lot of deals still have no amount and no close date.",
      q: "What is the right answer?",
      o: ["Quote the open pipeline tile - it is the official figure", "Quote the weighted figure, since it is more conservative", "Give the number of live deals and say the values are incomplete, then offer a figure once the amounts are filled", "Estimate the missing amounts yourself and add them in"],
      c: 2,
      e: "Deals with no amount are simply absent from both totals, and a quarter view needs close dates to filter on. The count of live deals is a fact; the value is not yet, and inventing amounts corrupts every roll-up afterwards."
    },
    {
      scenario: "In a management meeting someone asks to see how the team is tracking against this month's sales target inside the CRM.",
      q: "What do you tell them?",
      o: ["Open the versus-target gauge on the Command Centre", "Explain that the Sales Target object is empty, so there is no target gauge or coverage ratio yet - targets would need to be loaded first", "Export the opportunities and calculate it manually as if it were a CRM report", "Use weighted pipeline as the target"],
      c: 1,
      e: "The Sales Target and Sales Transaction objects both exist but hold no data, so the CRM cannot show progress against a target or a coverage ratio. Say so plainly rather than substituting a number that means something else."
    }
  ]
}
