{
  slug: "search-views",
  name: "Search, Filters & Views",
  track: "all",
  tagline: "Never scroll the full list. Open the view that answers today's question.",
  intro: "<p>Our CRM holds hundreds of companies, dozens of live deals and a running case queue. You are never meant to read the whole table. <strong>Search</strong> gets you to one record; a <strong>saved view</strong> gets you to the right subset of records for the job in front of you.</p><p>The views are not generic. They were built around how we work: a book of business per rep, hygiene lists that should read zero, chase lists you work oldest-first, and a couple of kanban boards for shape. Learn the six or seven you will actually use every day, star them, and the rest are there when you need them.</p><p>One thing to know before you trust any of them: <strong>several views carry hardcoded dates</strong>. A view called <em>Going Quiet (90d+)</em> or <em>Resolved &mdash; Last 30 Days</em> filters on a fixed date somebody typed in, not a rolling window. Glance at the filter chip before you draw a conclusion from the count.</p>",
  shots: [
    {key:"global-search", cap:"The global search open with a partial company name typed, showing results grouped by record type - use a real customer such as Touchstore or McLernon"},
    {key:"views-sidebar", cap:"The view picker on the Companies list expanded, showing the full list of saved views including the per-rep My Accounts views, with a starred favourite visible"},
    {key:"opp-filters", cap:"The Opportunities list with the filter and sort chips visible above the table - ideally on Stale Deals or Going Quiet so the hardcoded date in the filter chip is readable"}
  ],
  howtos: [
    {
      title: "Find one record fast",
      when: "You know roughly who you are looking for and you want the record, not a list",
      steps: [
        "Use <strong>global search</strong> from the top of the app. It reaches across record types, so a company, a person, a deal and a case can all come back from one query.",
        "Search by whatever you actually have: part of the <strong>company name</strong>, a <strong>person's name</strong>, or an <strong>email address</strong> when a message came in from somebody you do not recognise.",
        "Try the short form and the long form. We have accounts recorded as <em>C&amp;L</em>, <em>McLernon</em>, <em>Touchstore</em> &mdash; if you type the full legal name and get nothing, try the trading name and vice versa.",
        "If nothing comes back, that is a fact, not a dead end: search again a different way before you conclude the record does not exist. Creating a duplicate is far more expensive than thirty seconds of searching.",
        "Landed on the person but wanted the account? Open their <strong>Company</strong> from the person record &mdash; that is where the deals, cases, orders and history live."
      ],
      shot: {key:"global-search", cap:"Global search results for a partial company name, showing hits across companies, people and opportunities"},
      tip: "Search before you create. Every time. A duplicate company splits the spend history, the deals and the email trail three ways and nobody notices for months.",
      confirm: "Whether global search covers Notes and Task text as well as record names, and the keyboard shortcut that opens it in our version."
    },
    {
      title: "Work from the right saved view",
      when: "Every working day - this is where you live, not the default list",
      steps: [
        "Open a list (Companies, Opportunities, Cases, People, End Customers) and pick a view from the <strong>view picker at the top-left</strong> of the list.",
        "<strong>Star your favourites.</strong> A starred view sits at the top of the sidebar and becomes your daily navigation. This is a one-off two-minute setup and it has to be done by hand, per person.",
        "The four most people should star: your own <strong>My Accounts</strong> (SB / PM / CL / TK / MM), <strong>Open Pipeline</strong>, <strong>All Open (SLA)</strong> for cases, and <strong>Going Quiet</strong>.",
        "<strong>Companies views:</strong> All Companies &middot; Customers &middot; Book of Business (by Rep) &middot; the five per-rep My Accounts &middot; HOUSE &mdash; Unassigned &middot; Going Quiet (no order in 90+ days) &middot; Win-Back &middot; Prospects &middot; Accounts by Status (kanban) &middot; and a data-quality view listing companies with no account code.",
        "<strong>Opportunities views:</strong> Open Pipeline &middot; By Stage (kanban) &middot; Top Prizes &middot; Closing This Quarter &middot; Commit &amp; Best Case &middot; Kill the Zebra &middot; Stale Deals &middot; Data Gaps &mdash; no amount &middot; Quotes Needing Follow-Up &middot; Quotes &mdash; Missing Quote Ref &middot; Open Opps &mdash; No Next Action &middot; Next Actions.",
        "<strong>Cases views:</strong> All Open (SLA) &middot; Unowned &middot; Overdue &middot; Escalated &middot; Waiting &ndash; Supplier &middot; open cases with no due date &middot; open cases with no next action date &middot; Resolved &mdash; Last 30 Days &middot; and the status kanban.",
        "<strong>People:</strong> Decision Makers and Recently Added. <strong>End Customers:</strong> In Play (Two-Horse) and the stage kanban."
      ],
      shot: {key:"views-sidebar", cap:"The Companies view picker expanded showing the full saved-view list"},
      tip: "Some view names carry a warning icon in front of them &mdash; those are the hygiene lists (missing amounts, missing account codes). They are meant to be worked to zero and then left empty, not admired.",
      important: "A view is a lens on the same data, not a copy of it. Editing a record in one view changes it everywhere.",
      mistake: "Living in the default All list and scrolling. It is slower and you will miss the deals that need you.",
      confirm: "Whether ordinary users can create and save their own views in our version, and whether changing the filters on a shared saved view changes it for everybody or only for the person looking."
    },
    {
      title: "Filter and sort inside a view",
      when: "The saved view is close to what you want but not exactly it",
      steps: [
        "Use the <strong>filter</strong> and <strong>sort</strong> controls above the table. Typical filters: <code>salesRep</code> to see one person's book, <code>stage</code> to isolate proposals, <code>accountStatus</code> to separate Active from Dormant, <code>escalated</code> on cases.",
        "Sorts that earn their keep: <strong>next-step date ascending</strong> (what is due first), <strong>amount descending</strong> (where the money is), <strong>due date ascending</strong> on cases, <strong>last order date ascending</strong> on companies.",
        "Read the <strong>footer totals</strong>. Several of our views sum a column &mdash; open pipeline in euro, book value per rep &mdash; so the number at the bottom is the answer to most management questions.",
        "Our table views are laid out in <strong>decision order</strong>: Name &rarr; Stage &rarr; Next step &rarr; Next-step date &rarr; Amount &rarr; Close date. You should be able to triage a deal without scrolling sideways.",
        "Before you change a shared view's filters, ask whether you are changing it <em>for everyone</em>. If in doubt, filter, get your answer, and put it back.",
        "If a view looks wrong right after somebody has edited it, do a hard reload (Ctrl+Shift+R). The browser caches the old layout and a normal refresh is not enough."
      ],
      shot: {key:"opp-filters", cap:"Filter and sort chips above the Opportunities table, with a date filter chip readable"},
      mistake: "Changing the filters on a shared view to answer a one-off question and leaving them changed.",
      confirm: "Whether our version offers a personal or temporary filter that does not alter the saved view for other users."
    },
    {
      title: "Sanity-check a view's date filter before you trust it",
      when: "Any time you are about to act on a count from a date-based view",
      steps: [
        "Several of our views filter on a <strong>date somebody typed in</strong> rather than a rolling window. The name says <em>90 days</em> or <em>last 30 days</em>; the filter says a specific date that was correct when it was built.",
        "The known ones: <strong>Going Quiet</strong> (built against a fixed cut-off, meant to be refreshed quarterly), <strong>Stale Deals</strong> (fixed date, refreshed by hand from time to time), <strong>Closing This Quarter</strong> (hardcoded to one quarter), <strong>Resolved &mdash; Last 30 Days</strong> (fixed date, meant to be refreshed monthly), and the Sales Transactions <em>Last 90 Days</em> view.",
        "Look at the <strong>filter chip</strong> above the table. If the date in it is months old, the view is over-reporting: <em>Going Quiet</em> will list accounts that have since ordered, and <em>Stale Deals</em> will flag deals you touched last week.",
        "If the date is stale, do not quietly work from a wrong list. Either filter for the correct window yourself for the moment, or ask for the saved view to be refreshed so everyone benefits.",
        "The same caution applies to any view built on a field we do not fill consistently. <strong>Stale Deals</strong> reads <code>lastActivityDate</code> &mdash; a deal with a blank one looks dead even if you spoke to them this morning.",
        "<strong>Quotes &mdash; Missing Quote Ref</strong> has its own quirk: quote references have historically been stored as an empty string rather than nothing at all, so a filter written one way can undercount badly. Check the count against the number of open proposals before you treat it as clean."
      ],
      tip: "Treat a date-filtered view like a milk carton. Glance at the date on it before you use the contents.",
      important: "Nobody is doing anything wrong here &mdash; the tooling that built these views could not create rolling date filters at the time. It just means the <strong>view name is a description, not a guarantee</strong>.",
      confirm: "Whether the hardcoded date filters on Going Quiet, Stale Deals, Closing This Quarter and Resolved - Last 30 Days have since been converted to rolling filters, and who owns refreshing them if not."
    },
    {
      title: "Answer 'what is happening with this customer?' in two minutes",
      when: "A customer rings, a colleague asks, or you are covering somebody's account",
      steps: [
        "Search the <strong>company name</strong> and open the company record.",
        "Read the fields panel first: <strong>Sales Rep</strong> (who owns it), <strong>Account Status</strong>, <strong>Account Tier</strong>, <strong>Last Order Date</strong> and the trend. That is the health check in five seconds.",
        "Open <strong>Opportunities</strong> on the account. For each open one read Stage, Next Step and Next-Step Date &mdash; that is what we are doing next and when.",
        "Open <strong>Cases</strong>. Anything open, overdue or waiting on a supplier is what they are most likely ringing about.",
        "Read the <strong>Notes</strong>, newest first, including the Pulse-titled ones.",
        "Glance at the <strong>email list</strong> for the dates and subjects of recent traffic &mdash; enough to know a conversation happened, and with whom, even though the message text is not readable in the CRM.",
        "If the account is behind a deployment, open the linked <strong>End Customer</strong> and use <strong>In Play (Two-Horse)</strong> to see whether another reseller of ours is chasing the same site."
      ],
      tip: "That order is deliberate: ownership and health first, then what is in flight, then what is broken, then the narrative. It works even on an account you have never heard of.",
      confirm: "The exact names and order of the sections on a Company record in our version, and whether the email list appears on Companies as well as People."
    }
  ],
  fields: [
    {k:"Sales Rep (salesRep)", v:"The ownership field everywhere &mdash; SB, PM, CL, TK, MM, HOUSE. Every per-rep view, Book of Business and HOUSE &mdash; Unassigned read this. The older <em>Account Owner</em> column was hidden because it was misleading."},
    {k:"Account Status", v:"Active, Dormant, Lapsed or Prospect. Drives Customers, Win-Back, Prospects and the Accounts by Status kanban."},
    {k:"Last Order Date", v:"Fed from the ERP side. Going Quiet keys off it, so an account with a blank one behaves unpredictably in that view."},
    {k:"Next Step / Next Step Date", v:"On an opportunity. Feeds Next Actions, Open Opps &mdash; No Next Action, and the due and overdue lines in the daily Sales Pulse. Blank here means the deal is invisible to the whole follow-up system."},
    {k:"Last Activity Date", v:"On an opportunity. The only thing Stale Deals reads. Stamp it on every real contact or your live deals will keep showing as stale."},
    {k:"Amount", v:"Drives Top Prizes, the euro totals in the footers, the By Stage board and the forecast views. A blank amount puts the deal in Data Gaps &mdash; no amount."},
    {k:"Quote Ref", v:"The Intact quotation, pro-forma or PO number on the deal. Quotes &mdash; Missing Quote Ref is the worklist for filling them in."},
    {k:"Due Date and Escalated (Cases)", v:"All Open (SLA) sorts by due date; Overdue and Escalated filter on them. A case with no due date falls out of the SLA view entirely, which is why there is a view for that too."}
  ],
  tips: [
    "Star four views on day one: your <strong>My Accounts</strong>, <strong>Open Pipeline</strong>, <strong>All Open (SLA)</strong> and <strong>Going Quiet</strong>. Favourites sit at the top of the sidebar and become your navigation.",
    "The hygiene views are scoreboards, not reading material. <strong>HOUSE &mdash; Unassigned</strong>, <strong>Open Opps &mdash; No Next Action</strong>, <strong>Data Gaps &mdash; no amount</strong>, <strong>Unowned</strong> and <strong>Overdue</strong> cases should all read <strong>zero</strong>. Anything else is a to-do list.",
    "Use the kanban boards for shape and the tables for work. <strong>By Stage</strong> tells you where deals are piling up; <strong>Open Pipeline</strong> sorted by next-step date tells you what to do this morning."
  ],
  mistakes: [
    {m:"Trusting a view name that contains a time window.", fix:"Read the filter chip. Going Quiet, Stale Deals, Closing This Quarter and Resolved &mdash; Last 30 Days all carry fixed dates that go stale between refreshes."},
    {m:"Creating a company or person because search came back empty on the first attempt.", fix:"Search a second way &mdash; trading name, legal name, domain, the contact's email address &mdash; before you create anything. Duplicates split spend, deals and email history."},
    {m:"Re-filtering a shared saved view to answer a personal question and leaving it that way.", fix:"Put it back when you are done, or ask for a view of your own. Somebody else opens that view expecting the standard filters."},
    {m:"Reading a count from Stale Deals and panicking.", fix:"Check whether Last Activity Date is actually being filled on those deals. For a long time it was blank across the board, which made every open deal look stale."}
  ],
  confirms: [
    "Whether ordinary users can create, rename and delete their own saved views in our version, or whether that is restricted.",
    "Whether a filter applied on top of a shared saved view is personal and temporary, or saved for everyone.",
    "Whether the temporary handover view for reassigning a departed rep's accounts has been deleted now that the reassignment is done.",
    "Whether the per-rep My Accounts views still cover the current team, including any new rep who has taken over an existing book.",
    "The exact global search behaviour: which record types and which fields it matches on, and whether it searches note and task text.",
    "Whether the hardcoded date filters have since been replaced with rolling ones, and who is responsible for refreshing them."
  ],
  quiz: [
    {
      q: "The Going Quiet view is described as 'no order in 90+ days'. What should you check before working it?",
      o: ["Nothing, the view recalculates every night", "The date in the filter chip, because it is hardcoded and goes stale", "That you are logged in as the right rep", "The column widths"],
      c: 1,
      e: "Going Quiet filters on a fixed date that was correct when the view was built and is meant to be refreshed quarterly. If the date is old, the view over-reports - it will list accounts that have ordered since."
    },
    {
      q: "Which field is the ownership field on a company record in our CRM?",
      o: ["Account Owner", "Created By", "Sales Rep", "Assignee"],
      c: 2,
      e: "Sales Rep is the truth everywhere. The older Account Owner column was hidden from views and record pages because it read as Stephen on everything and misled people."
    },
    {
      q: "Which of these views is meant to read zero?",
      o: ["Open Pipeline", "Top Prizes", "HOUSE - Unassigned", "By Stage"],
      c: 2,
      e: "HOUSE - Unassigned lists accounts with no owner and is a hygiene list. So are Open Opps - No Next Action, Data Gaps - no amount, and the Unowned and Overdue case views. Open Pipeline, Top Prizes and By Stage are working views."
    },
    {
      q: "Stale Deals is showing far more deals than you expect, including ones you spoke to this week. What is the most likely cause?",
      o: ["The deals really are stale", "Last Activity Date is not being filled in, so every deal looks quiet", "The view is sorted wrongly", "You are looking at someone else's deals"],
      c: 1,
      e: "Stale Deals reads Last Activity Date and nothing else. When that field is blank the detector flags everything - which is exactly what happened when the views were first built."
    },
    {
      q: "You need to see whether two of our resellers are chasing the same deployment site.",
      o: ["Filter Opportunities by company", "Open the End Customer record and use In Play (Two-Horse)", "Search the end customer's name in Companies", "Check the Accounts by Status kanban"],
      c: 1,
      e: "End Customers are the sites the kit is actually for. Every deal chasing that site rolls up on the one End Customer record, which is the whole point of the two-horse view."
    },
    {
      q: "Which view do Customer Operations start the day on?",
      o: ["Open Pipeline", "All Open (SLA)", "Resolved - Last 30 Days", "Recently Added"],
      c: 1,
      e: "All Open (SLA) is the live case worklist, sorted by due date so the most urgent sits at the top. Unowned and Overdue are then driven to zero."
    },
    {
      q: "What is the safest first move when a search for a company returns nothing?",
      o: ["Create the company", "Search again using the trading name, the legal name or the contact's email domain", "Ask someone to create it for you", "Raise a case"],
      c: 1,
      e: "Search a second and third way before creating anything. Our accounts are recorded under a mix of trading and legal names, and a duplicate splits the spend history, deals and email trail."
    },
    {
      q: "Quotes - Missing Quote Ref shows zero, but you know most proposals have no quote number on them. What should you suspect?",
      o: ["Somebody filled them all in", "The filter may be matching on empty rather than blank, or the other way round", "The view is for cases, not deals", "Quote refs are optional so the view is irrelevant"],
      c: 1,
      e: "Quote references have historically been stored as an empty string rather than nothing at all, so a filter written one way can undercount badly. Cross-check the count against the number of open proposals."
    }
  ],
  flashcards: [
    {q: "Where do you switch saved views?", a: "The view picker at the top-left of any list. Star a view and it moves to the top of the sidebar."},
    {q: "The four views to star on day one", a: "Your My Accounts, Open Pipeline, All Open (SLA) and Going Quiet."},
    {q: "Which views carry hardcoded dates?", a: "Going Quiet, Stale Deals, Closing This Quarter, Resolved - Last 30 Days, and Sales Transactions Last 90 Days."},
    {q: "Which field drives Stale Deals?", a: "Last Activity Date on the opportunity - and only that field."},
    {q: "Which field drives every per-rep view?", a: "Sales Rep (SB, PM, CL, TK, MM, HOUSE), not Account Owner."},
    {q: "Hygiene views that should read zero", a: "HOUSE - Unassigned, Open Opps - No Next Action, Data Gaps - no amount, Unowned cases, Overdue cases."},
    {q: "First step in 'what is happening with this customer?'", a: "Open the company and read Sales Rep, Account Status, Account Tier and Last Order Date before anything else."},
    {q: "Two-horse view", a: "In Play (Two-Horse) on End Customers - every deal chasing the same deployment site, whichever of our resellers is chasing it."}
  ],
  scenarios: [
    {
      scenario: "It is the first week of a new quarter. You open Closing This Quarter and it shows a healthy list of deals, several of which you know closed or died last quarter.",
      q: "What has most likely happened?",
      o: ["The deals reopened", "The view's date range is hardcoded to the previous quarter and has not been refreshed", "The stage field is broken", "Someone changed the sort order"],
      c: 1,
      e: "Closing This Quarter is hardcoded to a specific quarter and has to be refreshed when the quarter turns. Check the filter chip, work from a corrected filter for now, and ask for the saved view to be updated."
    },
    {
      scenario: "A customer rings asking about an order. You have never dealt with them, the rep who owns the account is on the road, and the caller is annoyed.",
      q: "What is the fastest route to a useful answer?",
      o: ["Ask them to email sales@ and hang up", "Search the company, read the fields panel, then open Cases, then Opportunities, then Notes", "Read every email on the record", "Check the Accounts by Status kanban"],
      c: 1,
      e: "Ownership and status first, then what is in flight, then what is broken, then the narrative. Reading every email would not help anyway - the CRM shows subjects and participants, not message text."
    }
  ]
}
