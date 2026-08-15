{
  slug: "getting-started",
  name: "Getting Started",
  track: "all",
  tagline: "What our CRM is for, how to get into it, and what belongs in it.",
  intro: "<p>The CRM at <strong>crm.ioresource.com</strong> is where IO Resource keeps its relationships and its control layer &mdash; every trade account, every contact at that account, every live deal, every open case, and the history behind them. It exists so the detail lives in one shared place instead of in seven heads, five notebooks and a hundred inbox threads. It is our own Twenty instance, on our own server, customised to how we actually trade.</p><p><strong>Three tools, one system, each in its own lane.</strong> <strong>sales@ioresource.com</strong> is the front door and the transport &mdash; where customers reach us and how documents travel. It is not a store of record. <strong>Twenty CRM</strong> owns relationships and control &mdash; accounts, contacts, pipeline, cases, and the owner / status / next action / due date on everything live. <strong>Intact ERP</strong> is the system of record for money and documents &mdash; quotations, pro formas, sales orders, invoices, pricing, stock and real margin.</p><p>The quotation, pro forma or order number is the join key that ties all three together, which is why it goes in the email subject line every time. And the golden rule: nothing important lives only in an inbox. Every email either becomes a record in the CRM or its transaction lives in Intact &mdash; that is what makes cover, handover and Monday's pipeline review possible.</p>",
  shots: [
    {key:"crm-login", cap:"The two login gates in order: the Cloudflare Access screen, then the Twenty sign-in page at crm.ioresource.com"},
    {key:"crm-nav", cap:"The left sidebar showing the Workspace group (Companies, People, Opportunities, End Customers, Cases) with favourite views pinned above it"}
  ],
  howtos: [
    {
      title: "Log in for the first time",
      when: "Your first login, or on a new device or browser",
      steps: [
        "Go to <strong>crm.ioresource.com</strong>.",
        "<strong>Gate one &mdash; Cloudflare Access.</strong> This sits in front of the CRM and only lets through identities ending in <code>@ioresource.com</code>. Depending on how your account is set up you are either signed straight through, or asked for a <strong>one-time PIN</strong> emailed to your IOR mailbox.",
        "<strong>Gate two &mdash; the Twenty sign-in page.</strong> Sign in with your Microsoft (@ioresource.com) account, or with the email and password you set when you accepted your invite.",
        "If what you land in shows sample records about Google, Pets and Rockets, you are in a stray <strong>demo workspace</strong>, not ours. Open the workspace menu at the top-left of the sidebar and switch to <strong>IOResource</strong>.",
        "Sanity check: the sidebar should read Companies, People, Opportunities, End Customers, Cases. That is our workspace."
      ],
      shot: {key:"crm-login", cap:"The Cloudflare Access challenge, then the Twenty sign-in page"},
      important: "There are <strong>two independent gates</strong> and you must satisfy both. A message about being <em>restricted to members of the account</em>, or a screen offering only <em>Sign in with Cloudflare</em>, is the Cloudflare layer &mdash; not a CRM fault and not something a password will fix.",
      mistake: "Trying passwords over and over at the first screen. Read which gate you are actually at before you troubleshoot.",
      confirm: "The exact label of the Microsoft sign-in button on our Twenty login page, and whether the stray demo workspace still appears on a first login today."
    },
    {
      title: "Get access, or get a colleague access",
      when: "You are new, or someone on the team cannot get in at all",
      steps: [
        "You need a live <strong>@ioresource.com</strong> Microsoft 365 mailbox first. It receives the Cloudflare one-time PIN and it is your identity in the CRM. No mailbox, no access &mdash; that part is IT, not the CRM.",
        "Membership of our workspace is <strong>invite only</strong>. An admin opens <strong>Settings &rarr; Members</strong>, chooses <strong>Invite by link</strong> and copies the link.",
        "The link has to be sent to you by hand. The CRM's own outbound email is not configured, so invitation emails do not send themselves &mdash; if you are waiting on one, it is never coming.",
        "Open the link, pass the Cloudflare gate, then sign in with Microsoft or set a password."
      ],
      tip: "Having a rep code (SB, PM, CL, TK, MM, MMU) does <strong>not</strong> mean you have a CRM seat. Ownership codes exist for people who are not CRM users, so accounts can be owned by someone who never logs in.",
      confirm: "Who currently holds admin rights in the CRM to invite members and change settings."
    },
    {
      title: "Find your way around",
      when: "Every day - this is the shape of the whole system",
      steps: [
        "The left sidebar is the navigation. Under <strong>Workspace</strong>: <strong>Companies</strong> (who we sell to), <strong>People</strong> (contacts at those companies), <strong>Opportunities</strong> (live deals and quotes), <strong>End Customers</strong> (who the kit is ultimately for), <strong>Cases</strong> (queries, delivery chases, complaints).",
        "Under <strong>Records</strong> sits the supporting catalogue and history: <strong>Brands</strong>, <strong>Products</strong>, <strong>Sales Transactions</strong> and <strong>Aftercare</strong>.",
        "Click an object to get its <strong>list</strong>. Every row is a record; click a row to open it.",
        "The dropdown at the top-left of a list switches <strong>views</strong> &mdash; the same records, filtered and sorted to answer one question. <em>Going Quiet</em>, <em>Open Pipeline</em> and <em>All Open (SLA)</em> are views, not separate data.",
        "Open a view you will use daily and click the <strong>star</strong> beside its name. Favourites pin to the top of the sidebar and become your real navigation."
      ],
      shot: {key:"crm-nav", cap:"Sidebar with the Workspace and Records groups, and the view dropdown open on a list"},
      tip: "You almost never need the full unfiltered list. Open the view that answers today's question and work it to zero.",
      important: "Views are shared, not personal. Changing a view's filters changes it for everyone &mdash; if you want a different cut, save a new view rather than reworking a standard one."
    },
    {
      title: "Read a record before you pick up the phone",
      when: "Somebody asks what is happening with a customer",
      steps: [
        "Open <strong>Companies</strong> and click the account. The left panel is the field list &mdash; ownership, type, tier, status, office, account code. The right side is the activity.",
        "Work across the tabs: <strong>Timeline</strong> (what happened, newest first), <strong>Opportunities</strong> (open and closed deals), <strong>Cases</strong>, <strong>Notes</strong> and <strong>Files</strong>.",
        "Email from the synced <strong>sales@</strong> mailbox attaches itself to the contact and company it involves, so thread history appears here without anyone filing it &mdash; provided the sender exists as a Person record.",
        "A person record works the same way: their details on the left, their emails, deals and notes on the right.",
        "Two minutes here answers <em>what is going on with this customer</em> better than ten minutes of searching your own inbox."
      ],
      shot: {key:"company-record", cap:"A company record showing the field panel on the left and the Timeline tab on the right"},
      important: "An email from somebody who is <strong>not yet in People</strong> is stored but shows nowhere. If a customer's history looks thin, check their contacts exist before you conclude the account is quiet.",
      confirm: "Whether individual staff mailboxes are synced as well as sales@, or only the shared mailbox feeds the timelines."
    },
    {
      title: "Decide where a piece of information belongs",
      when: "Any time you are about to save something somewhere",
      steps: [
        "Is it a <strong>relationship fact</strong> &mdash; who they are, who decides, what platform they run, who owns the account, what is open? That is the <strong>CRM</strong>.",
        "Is it a <strong>priced document or a money fact</strong> &mdash; quotation, pro forma, sales order, invoice, stock, real margin? That is <strong>Intact</strong>. Do not retype those numbers into the CRM as though they were the truth.",
        "Is it a <strong>customer message</strong>? It travels through <strong>sales@</strong> with the document number in the subject, and lands against the record.",
        "Is it a query, chase or complaint? A <strong>Case</strong> &mdash; owner, status, next action, due date.",
        "Is it a to-do? A <strong>Task</strong> with a due date, linked to the account, deal or case.",
        "Is it what you learned in a meeting or on a call? A <strong>Note</strong> on the company or the deal."
      ],
      mistake: "Keeping the important detail in your personal inbox because it is quicker today. It is only quicker until you are on holiday, on a plane, or gone.",
      tip: "The deal is deliberate: Customer Operations carries the admin so sales can be on the road. In return sales keeps the CRM honest. Five minutes a day, not Friday-afternoon homework."
    }
  ],
  fields: [
    {k:"Sales Rep (salesRep)", v:"The real owner of an account &mdash; <strong>SB, PM, CL, TK, MM, MMU</strong> or <strong>HOUSE</strong>. Every list, every pulse email and the whole book-of-business split runs off this one field."},
    {k:"Account Owner", v:"<strong>Ignore it.</strong> The built-in Twenty field reads as Stephen on nearly everything and is misleading, so it is hidden on our rebuilt views and record pages. Sales Rep is ownership."},
    {k:"Account Status", v:"Active, Dormant, Lapsed or Prospect &mdash; the trading pulse of the account. Dormant and Lapsed are the win-back list."},
    {k:"Next step / Next step date (Opportunity)", v:"One concrete action and the day it is due. An open deal without these is effectively invisible at Monday's review."},
    {k:"Owner / Status / Next action / Due date (Case)", v:"The four fields that make the Customer Operations queue work. Nothing sits unowned; overdue stands out."},
    {k:"Account Code", v:"The <strong>Intact A/C code</strong> on the company record &mdash; the join key between what you see here and what the ERP holds."},
    {k:"Notes and Tasks", v:"Notes hold meeting and call intelligence on the company, deal or case. Tasks hold your to-dos, with a due date. <em>It is in my head</em> is not a storage location."},
    {k:"Favourites (the star)", v:"Star a view and it pins to the top of the sidebar. Two minutes of setup you get back every single day."}
  ],
  tips: [
    "Put the document number in the subject line of every quotation, pro forma and order email &mdash; <em>Quotation 25926 &mdash; McLernon &mdash; Urovo DT66 battery</em>. That single habit is the cheapest and most reliable link between the inbox, the CRM and Intact.",
    "Star four views on day one: your <strong>My Accounts</strong> on Companies, <strong>Open Pipeline</strong> on Opportunities, <strong>All Open (SLA)</strong> on Cases and <strong>Going Quiet</strong>. That is your daily navigation sorted.",
    "Update as you go, not on Fridays. Thirty seconds in the car park beats an hour of Friday homework, and the record is right at the moment a colleague needs it."
  ],
  mistakes: [
    {m:"Treating the CRM as the place to record prices, margins and invoice values.", fix:"Intact owns money and documents. The CRM carries a best-estimate deal <strong>amount</strong> and the quote reference so the pipeline reads &mdash; not a second set of financial books."},
    {m:"Leaving customer detail in a personal inbox.", fix:"Formal sales work goes through <strong>sales@</strong> with you in cc. Relationship and product chat can stay personal; the moment it is a quotation or an operational issue, it moves to the shared inbox."},
    {m:"Working from the full unfiltered list, getting overwhelmed, and going back to spreadsheets.", fix:"Open the <strong>view</strong> that answers today's question. The lists are built so you never need to scroll the whole book."},
    {m:"Assuming a blank field means nothing has happened.", fix:"Some accounts were loaded as data-gap shells and some contacts were never added, so email had nowhere to land. Check the Timeline and Notes, then fill the gap rather than working around it."}
  ],
  confirms: [
    "Whether all staff now sign in with Microsoft SSO, or some still use an email and password on the Twenty login page.",
    "Whether the stray Twenty demo workspace still exists, so a new user may still land in it on first login.",
    "Which login methods the Cloudflare Access gate offers staff today: one-time PIN by email, Microsoft Entra, or both.",
    "Whether individual staff mailboxes are synced as well as sales@, or only the shared mailbox feeds record timelines.",
    "Who holds CRM admin rights to invite new members and change settings.",
    "Whether the IOR Command Centre dashboard has been built and is visible to everyone, or is still an outstanding manual build.",
    "Whether every user can create and edit shared views, or only admins."
  ],
  quiz: [
    {
      q: "Which system is the system of record for quotations, invoices and real margin?",
      o: ["Twenty CRM", "Intact ERP", "The sales@ mailbox", "The weekly pipeline spreadsheet"],
      c: 1,
      e: "Intact owns money and documents. The CRM owns relationships and control; the mailbox carries information between them."
    },
    {
      q: "What sits in front of the CRM login page?",
      o: ["Nothing, it is open to the internet", "Cloudflare Access, which only admits identities ending in @ioresource.com", "A VPN you must install", "Intact single sign-on"],
      c: 1,
      e: "There are two gates: Cloudflare Access first, then Twenty's own sign-in. A restricted-to-members message is the Cloudflare layer, not the CRM."
    },
    {
      q: "What is the join key that ties the mailbox, the CRM and Intact together?",
      o: ["The customer's company name", "The quotation, pro forma or order number in the email subject", "The account tier", "The sales rep code"],
      c: 1,
      e: "The document number in the subject line is how an email links itself to the right record. It is the cheapest integration we have."
    },
    {
      q: "Which of these belongs in the CRM rather than in Intact?",
      o: ["The invoice value of last month's order", "The stock level of a POS terminal", "Who the economic buyer is at the account", "The real margin on a shipped order"],
      c: 2,
      e: "Relationship facts live in the CRM. Money and document facts live in Intact."
    },
    {
      q: "You log in and see sample records about Google, Pets and Rockets. What has happened?",
      o: ["The CRM has been reset", "You are in a stray demo workspace; switch to IOResource from the workspace menu at the top-left", "Somebody imported test data into our workspace", "Your account has no permissions yet"],
      c: 1,
      e: "A stray Twenty demo workspace has appeared on first login before. Our workspace has Companies, People, Opportunities, End Customers and Cases in the sidebar."
    },
    {
      q: "Which sidebar entry holds the businesses the equipment is ultimately for?",
      o: ["Companies", "People", "End Customers", "Sales Transactions"],
      c: 2,
      e: "Companies are who we sell to. End Customers are who the kit is for, so competing resellers' deals can roll up under one of them."
    },
    {
      q: "Why does an invitation email to the CRM never arrive?",
      o: ["It is caught by the spam filter", "The CRM's own outbound email is not configured, so the invite link must be copied and sent by hand", "Cloudflare blocks all mail from the CRM", "The mailbox is unlicensed"],
      c: 1,
      e: "Admins use Settings, Members, Invite by link, then send the link themselves. Waiting for an automatic invitation is waiting forever."
    },
    {
      q: "What is the quickest way to make the CRM usable day to day?",
      o: ["Memorise the record IDs", "Star the views you use and work from favourites at the top of the sidebar", "Export everything to Excel each morning", "Keep the full Companies list open all day"],
      c: 1,
      e: "Views answer one question each. Starring them turns the sidebar into your daily to-do list."
    }
  ],
  flashcards: [
    {q: "Three tools, three lanes?", a: "sales@ is the front door and transport. Twenty CRM owns relationships and control. Intact ERP is the system of record for money and documents."},
    {q: "Where do you log in, and what are the two gates?", a: "crm.ioresource.com. Gate one is Cloudflare Access (@ioresource.com only, often a one-time PIN by email); gate two is the Twenty sign-in page."},
    {q: "What is the join key between the inbox, the CRM and Intact?", a: "The quotation, pro forma or order number, put in the email subject line."},
    {q: "The five main objects in the Workspace group?", a: "Companies, People, Opportunities, End Customers and Cases."},
    {q: "The golden rule about the inbox?", a: "Nothing important lives only in the inbox. Every email either becomes a CRM record or its transaction lives in Intact."},
    {q: "What does starring a view do?", a: "Pins it to the top of the sidebar as a favourite, which becomes your daily navigation."},
    {q: "Which ownership field do you trust on a company?", a: "Sales Rep. The built-in Account Owner field is misleading and is hidden on our record pages."}
  ],
  scenarios: [
    {
      scenario: "A customer rings you about an order you know nothing about. You have two minutes before you have to answer.",
      q: "Where do you look first?",
      o: ["Search your own Outlook for their name", "Open the company record in the CRM and read the Timeline, Opportunities and Cases tabs", "Ring Customer Operations and ask them to explain", "Open Intact and scan recent invoices"],
      c: 1,
      e: "The company record is the one place the relationship is assembled: synced sales@ email, open deals, open cases and notes. Intact will tell you what was invoiced, but not what is going on."
    },
    {
      scenario: "You have agreed a price on the phone and Customer Operations will produce the quotation in Intact.",
      q: "What goes into the CRM?",
      o: ["The full priced quotation, line by line", "Nothing, because Intact has the document", "The opportunity with a best-estimate amount, a stage, a next step, a date and the quote reference", "A note in a folder in your own inbox"],
      c: 2,
      e: "Intact owns the priced document. The CRM carries the deal so it can be forecast and chased, with the quote reference as the link back to Intact."
    }
  ]
}
