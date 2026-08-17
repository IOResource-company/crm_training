{
  slug: "people-companies",
  name: "People & Companies",
  track: "all",
  tagline: "Two layers: who we sell to, and who the kit is really for.",
  intro: "<p>We are a trade-only business, so our CRM is built in <strong>two layers</strong>. A <strong>Company</strong> is <em>who we sell to</em> &mdash; the reseller, system integrator, VAR, IT team or software vendor who places the order and pays the invoice. An <strong>End Customer</strong> is <em>who the kit is ultimately for</em> &mdash; Musgrave, Uniphar, Eason. Keeping them apart is what lets us see the whole race when two of our resellers chase the same end customer, without inflating the customer list or double-counting the forecast.</p><p><strong>People</strong> are the contacts at those companies. Each person hangs off one company, and the field that earns its keep is <strong>Decision Role</strong> &mdash; who signs, who champions, who evaluates, who blocks.</p><p>One warning before you touch anything: <strong>our CRM already contains duplicate companies</strong>. Two STL Technology Solutions records. Two Qualcom records. McLernons and McLernon Computers. Touchstore and TouchStore. Every one of those is a customer whose history is now split in half. That is why the first rule of this module is search before you create, every single time.</p>",
  shots: [
    {key:"companies-list", cap:"Companies list with the Sales Rep, Account Status and Account Tier columns visible"},
    {key:"global-search", cap:"Global search open, showing a partial-name query returning several similar company records"},
    {key:"company-record", cap:"A company record: Sales Rep, Account Type, Tier, Status, Office and Account Code in the field panel"},
    {key:"person-record", cap:"A person record with Job Title, the linked Company and Decision Role filled in"},
    {key:"end-customer-record", cap:"An End Customer record with the Opportunities tab open, showing competing resellers' deals rolled up"}
  ],
  howtos: [
    {
      title: "Search before you create - every time",
      when: "Before you add any company or any person, without exception",
      steps: [
        "Search on the <strong>shortest distinctive part</strong> of the name, never the full legal one. Search <em>McLernon</em>, not McLernon Computers Limited.",
        "Try the trading name <em>and</em> the legal name. Our data carries both: <strong>McLernons</strong> and <strong>McLernon Computers</strong> are one business on two records.",
        "Watch case and spacing. <strong>Touchstore</strong> and <strong>TouchStore</strong> both exist. So do two <strong>STL Technology Solutions</strong> records and two <strong>Qualcom</strong> records (Qualcom, never Qualcomm).",
        "If several records match, use the one that <strong>already holds the open opportunities</strong>. If none of them has deals, use the one with a Sales Rep set.",
        "Only when nothing plausible matches do you create the record.",
        "Found a new duplicate? Flag it rather than working around it &mdash; a split account is a split history."
      ],
      shot: {key:"global-search", cap:"Global search returning two similar company records for the same customer"},
      important: "Those duplicate pairs are <strong>real records in the CRM today</strong>, not a hypothetical &mdash; they arrived with the data load and have not been merged yet. Never split one rep's deals across twins &mdash; put everything on the record that already carries the open work.",
      mistake: "Typing the full legal name into search, getting nothing back, and creating a second record for a customer we have traded with for years.",
      confirm: "Whether the known duplicate pairs have been merged yet, and who to report a newly spotted duplicate to."
    },
    {
      title: "Create a company",
      when: "A genuinely new trade account, after you have searched properly",
      steps: [
        "Open <strong>Companies</strong> and add the record. Name it the way we trade with them and the way existing deals name them &mdash; consistency beats legal precision.",
        "Set <strong>Account Type</strong>: Reseller, System Integrator, VAR, IT Team, Software Vendor or End Client.",
        "Set <strong>Sales Rep</strong>. This is the ownership field. If you genuinely do not know, set <strong>HOUSE</strong> &mdash; but HOUSE is a to-do, not a home, and it should not sit there for more than a week.",
        "Set <strong>Account Status</strong> (a brand new logo is <strong>Prospect</strong> until its first order lands) and <strong>Account Tier</strong>.",
        "Set <strong>Office</strong> (IRL or GB) and fill <strong>Domain Name</strong>.",
        "Add the <strong>Account Code</strong> if the account already exists in Intact &mdash; that is the join key between the two systems.",
        "Fill <strong>Verticals</strong>, and where you know them, the platform or tech stack the account runs on and the incumbent competitor. Both shape every quote we ever write for them."
      ],
      shot: {key:"company-record", cap:"A newly created company record with Sales Rep, Type, Tier, Status and Account Code set"},
      important: "A Company is <strong>who we sell to</strong>. If the business you are about to create is the one the equipment is being installed for, stop &mdash; that is an <strong>End Customer</strong>, not a Company.",
      tip: "Filling Account Code at creation saves an archaeology job later. It is how a company record ever gets connected to what they have actually bought."
    },
    {
      title: "Create a person and link them to their company",
      when: "A new contact appears on an email, at a meeting, or on a call",
      steps: [
        "Search <strong>People</strong> first, on surname or email domain.",
        "Add the person with their real <strong>Job Title</strong>, email, phone and LinkedIn profile URL.",
        "Set the <strong>Company</strong> field. A person hangs off exactly one company &mdash; that link is what makes their emails, deals and history appear on the account.",
        "Set <strong>Decision Role</strong>: Economic Buyer, Champion, Technical Evaluator, Approver, Influencer or Blocker. This is what the Decision Makers view runs on.",
        "Leave <strong>LinkedIn Status</strong> blank unless the person is genuinely part of the LinkedIn outreach campaign."
      ],
      shot: {key:"person-record", cap:"Person record showing Decision Role and the linked company"},
      important: "An email from somebody who is not yet in People is stored but <strong>shows nowhere</strong>. Adding a contact takes two clicks and lights up their whole history on the account.",
      mistake: "Setting <strong>LinkedIn Status</strong> on an ordinary contact. That field <em>is</em> the campaign membership selector &mdash; anyone with a value set is pulled into the outreach programme and its daily pulse.",
      confirm: "What we do when a contact moves employer: repoint the existing person record, or create a second one and archive the first."
    },
    {
      title: "Record the End Customer behind a deal",
      when: "The equipment is going somewhere other than the reseller you are quoting",
      steps: [
        "Open <strong>End Customers</strong> and search &mdash; the big ones are already there.",
        "If it is new, create it with <strong>Sector</strong>, <strong>Region</strong> (IRL or GB), <strong>Status</strong>, <strong>Deployment Stage</strong> (Evaluating, Awarded, Rolling out, Live), <strong>Site Count</strong> and the <strong>Incumbent Competitor</strong>.",
        "Set <strong>Reseller of Record</strong> to the company that currently owns the relationship. On the company side this shows as <em>Managed End Customers</em>.",
        "On the deal, set the opportunity's <strong>End Customer</strong> field. That is the link that builds the picture.",
        "Open the End Customer record and look at its <strong>Opportunities</strong> tab &mdash; every deal chasing that site, whoever is chasing it."
      ],
      shot: {key:"end-customer-record", cap:"End Customer record with the Opportunities tab showing deals from more than one reseller"},
      important: "This is the <strong>two-horse race</strong> view. More than one of our resellers often chases the same end customer. Linking every deal to the end customer means you see the whole race on one record instead of finding out at the worst possible moment.",
      mistake: "Creating a large end customer as a Company because they are big and important. That inflates the customer list, distorts the book of business and hides the race.",
      confirm: "Whether an End Customer can carry more than one Reseller of Record, or whether competition is only visible through the linked opportunities."
    },
    {
      title: "Keep contact details and account facts current",
      when: "Anything you learn on a call, in a meeting or from a bounced email",
      steps: [
        "Correct details in place on the record rather than creating a fresh one. A changed email address is an edit, not a new person.",
        "Moved the relationship to a new rep? Change <strong>Sales Rep</strong> on the company. Everything else &mdash; whose pipeline the deals count in, whose pulse email they land in &mdash; follows that one field.",
        "Started trading with a prospect? Move <strong>Account Status</strong> to Active. Gone quiet or lost? Dormant or Lapsed, so they show up on the win-back list.",
        "File what you learned as a <strong>Note</strong> on the company: who has moved job, what platform they have committed to, who really decides.",
        "Update <strong>Decision Role</strong> as you learn it. Being able to name the economic buyer at an account is the difference between a relationship and a contact list."
      ],
      tip: "Notes are for intelligence, not for reciting what the email already says. Write the thing that would take a colleague twenty minutes to work out on their own.",
      confirm: "Whether there is a house rule on naming new company records: the trading name or the full legal name."
    }
  ],
  fields: [
    {k:"Sales Rep (salesRep)", v:"<strong>The real ownership field.</strong> Values: <strong>SB</strong> (Stephen Browne), <strong>PM</strong> (Philip Murphy), <strong>CL</strong> (Conn Loy), <strong>TK</strong> (Tara Keogh), <strong>MM</strong> (Majella Merriman), <strong>MMU</strong> (Marcus Murphy) and <strong>HOUSE</strong> for unassigned. RMC is legacy &mdash; Ross McClure left in July 2026 and his book was reassigned. Every book-of-business split, pipeline roll-up and pulse email is driven by this field alone. <strong>Ignore the built-in Account Owner field</strong> &mdash; it reads as Stephen on nearly everything, which is why it is hidden on our rebuilt views and record pages."},
    {k:"Account Type (accountType)", v:"What kind of trade account this is: <strong>RESELLER</strong>, <strong>SYSTEM_INTEGRATOR</strong>, <strong>VAR</strong>, <strong>IT_TEAM</strong>, <strong>SOFTWARE_VENDOR</strong>, <strong>END_CLIENT</strong>. Software vendor covers platform partners we sell alongside."},
    {k:"Account Tier (accountTier)", v:"<strong>PLATINUM</strong>, <strong>STANDARD</strong> or <strong>PROSPECT</strong> &mdash; how much proactive attention the account gets. Platinum means we go to them, not just answer them."},
    {k:"Account Status (accountStatus)", v:"<strong>ACTIVE</strong>, <strong>DORMANT</strong>, <strong>LAPSED</strong> or <strong>PROSPECT</strong> &mdash; the trading pulse. Dormant and Lapsed feed the Win-Back view; Prospect graduates to Active on the first order."},
    {k:"Account Code (accountCode)", v:"The <strong>Intact A/C code</strong> &mdash; the join key between this record and the ERP. Without it, nothing an account has actually bought can ever be connected to the CRM record."},
    {k:"Office and Verticals", v:"<strong>Office</strong> is IRL or GB. <strong>Verticals</strong> is the sectors they serve, from our six: Retail, Hospitality, Healthcare &amp; Pharmacy, Supply Chain &amp; Logistics, Agriculture &amp; Field, Government &amp; Public Safety."},
    {k:"Decision Role (decisionRole) on a person", v:"<strong>ECONOMIC_BUYER</strong> (signs for the money), <strong>CHAMPION</strong> (sells for us internally), <strong>TECHNICAL_EVALUATOR</strong> (tests the kit), <strong>APPROVER</strong> (rubber-stamps), <strong>INFLUENCER</strong>, <strong>BLOCKER</strong>. Drives the Decision Makers view."},
    {k:"LinkedIn Status (linkedinStatus) on a person", v:"<strong>Campaign field, not a general one.</strong> NOT_STARTED, REQUEST_SENT, CONNECTED, IN_CONVERSATION, REPLIED. Setting it on anybody is what puts them in the LinkedIn outreach campaign and its daily pulse &mdash; leave it blank otherwise."}
  ],
  tips: [
    "Search first, always. Two seconds of searching prevents a duplicate that costs an hour to unpick and splits a customer's history permanently.",
    "<strong>Company = who pays us. End Customer = where the kit lands.</strong> If you can hold those two apart, the rest of the data model follows naturally.",
    "If you cannot name the economic buyer at one of your accounts, that is the gap to close on your next call. Set <strong>Decision Role</strong> on the people you already know and the hole becomes obvious."
  ],
  mistakes: [
    {m:"Using the Account Owner field to work out who owns an account.", fix:"Read <strong>Sales Rep</strong>. Account Owner reads as Stephen on nearly everything and is hidden on our record pages for that reason."},
    {m:"Creating a new company because a search on the full legal name came back empty.", fix:"Search a short distinctive token, try the trading name, and check for case and spacing variants. Assume the record exists until you have properly proved it does not."},
    {m:"Creating the end customer as a Company because they are a big name.", fix:"End users get an <strong>End Customer</strong> record, with Reseller of Record set and each deal linked. That keeps the customer list honest and shows the two-horse race."},
    {m:"Leaving a new account on HOUSE and moving on.", fix:"HOUSE means nobody sees it in their book, so a new customer is effectively invisible. Assign a Sales Rep within the week."}
  ],
  confirms: [
    "Whether the known duplicate company records (2x STL Technology Solutions, 2x Qualcom, McLernons vs McLernon Computers, Touchstore vs TouchStore) have been merged, and the agreed way to report a new one.",
    "Whether SUPPLIER and DISTRIBUTOR are selectable in the Account Type picklist for manual use, or only set automatically when a supplier contact is added from the Pulse.",
    "Whether Account Owner is hidden on every view and record page, or only on the ones rebuilt on 1 July 2026.",
    "Whether a person can be linked to more than one company, for example an upstream platform vendor as well as their employer.",
    "Whether Verticals is still limited to our six sectors, or has been extended.",
    "Whether Twenty's merge tool is available to ordinary users on our version, or duplicates must be resolved by an admin.",
    "The house rule on naming new company records: trading name or full legal name."
  ],
  quiz: [
    {
      q: "In our CRM, what does a Company record represent?",
      o: ["Any business we deal with, including suppliers and end users", "Who we sell to: the reseller, system integrator, VAR, IT team or software vendor", "The business the equipment is installed for", "Only accounts that have placed an order"],
      c: 1,
      e: "We are trade-only. Companies are who we sell to and who pays the invoice. Who the kit is for is an End Customer."
    },
    {
      q: "Which field tells you who really owns an account?",
      o: ["Account Owner", "Sales Rep", "Created By", "Account Tier"],
      c: 1,
      e: "Sales Rep is the single field that decides whose book, whose pipeline and whose pulse email an account belongs to."
    },
    {
      q: "Why is the built-in Account Owner field hidden on our record pages?",
      o: ["It costs extra to license", "It reads as Stephen on nearly everything, so it is misleading", "It was replaced by the Case owner field", "It is only visible to administrators"],
      c: 1,
      e: "It was deliberately hidden during the 1 July 2026 view overhaul so nobody derives ownership from it. Sales Rep is the truth."
    },
    {
      q: "Two of our resellers are both chasing the same supermarket group. Where does the supermarket group live?",
      o: ["As a Company with Account Type set to End Client", "As an End Customer record, with each reseller's deal linked to it", "As a note on each reseller's record", "As two company records, one per reseller"],
      c: 1,
      e: "That is the two-horse race view. One End Customer record, every competing deal rolled up under it."
    },
    {
      q: "Which of these are genuine duplicate records in our CRM today?",
      o: ["Zebra and Zebra Technologies", "STL Technology Solutions twice, Qualcom twice, McLernons vs McLernon Computers, Touchstore vs TouchStore", "There are no duplicates", "Every company created before July 2026"],
      c: 1,
      e: "All four pairs are live. When several records match, use the one already holding the open opportunities and never split a rep's deals across twins."
    },
    {
      q: "What is the Account Code on a company record?",
      o: ["An internal CRM identifier", "The Intact A/C code, which joins the CRM record to the ERP", "The company registration number", "The sales rep's initials"],
      c: 1,
      e: "It is the join key. Without it, what the account has actually bought can never be tied back to the CRM record."
    },
    {
      q: "A contact signs off the budget. What Decision Role do you set?",
      o: ["CHAMPION", "ECONOMIC_BUYER", "TECHNICAL_EVALUATOR", "INFLUENCER"],
      c: 1,
      e: "Economic Buyer is whoever controls the money. Champion sells for us internally; Technical Evaluator tests the kit."
    },
    {
      q: "When should you set LinkedIn Status on a person?",
      o: ["On every contact who has a LinkedIn profile", "Only on contacts who are part of the LinkedIn outreach campaign, because the field is the campaign membership selector", "Whenever you connect with them personally", "Never, it is read-only"],
      c: 1,
      e: "Campaign membership is defined as LinkedIn Status having any value. Set it casually and you enrol somebody in an outreach programme by accident."
    },
    {
      q: "A brand new logo has been created but has not ordered yet. What Account Status?",
      o: ["ACTIVE", "DORMANT", "LAPSED", "PROSPECT"],
      c: 3,
      e: "Prospect until the first order lands, then Active. Dormant and Lapsed are accounts that used to trade and stopped."
    }
  ],
  flashcards: [
    {q: "Company versus End Customer?", a: "Company is who we sell to and who pays us: reseller, SI, VAR, IT team, software vendor. End Customer is who the kit is ultimately for."},
    {q: "The Sales Rep codes?", a: "SB, PM, CL, TK, MM, MMU and HOUSE for unassigned. RMC is legacy from Ross McClure's departure."},
    {q: "Which ownership field do you ignore, and why?", a: "Account Owner. It reads as Stephen on nearly everything, so it is misleading and hidden on our record pages."},
    {q: "The Decision Role values?", a: "Economic Buyer, Champion, Technical Evaluator, Approver, Influencer, Blocker."},
    {q: "The Account Type values?", a: "Reseller, System Integrator, VAR, IT Team, Software Vendor, End Client."},
    {q: "Account Status versus Account Tier?", a: "Status is the trading pulse: Active, Dormant, Lapsed, Prospect. Tier is how much proactive attention we give: Platinum, Standard, Prospect."},
    {q: "What is accountCode?", a: "The Intact A/C code on the company record, the join key between the CRM and the ERP."},
    {q: "Why is the search-first rule so strict here?", a: "Because our CRM already holds duplicate companies, including two STL Technology Solutions, two Qualcom, McLernons versus McLernon Computers and Touchstore versus TouchStore."},
    {q: "What does the two-horse view mean?", a: "One End Customer record with competing resellers' opportunities rolled up under it, so the whole race is visible in one place."}
  ],
  scenarios: [
    {
      scenario: "An enquiry arrives from somebody at McLernon Computers. You search McLernon and get two company records: one with several open opportunities and a Sales Rep set, one nearly empty.",
      q: "What do you do?",
      o: ["Create a third record with the exact legal name so it is finally correct", "Use the record that already holds the open opportunities, and flag the duplicate", "Use the empty one because it is cleaner", "Put the new deal on the empty record and move the old deals across yourself"],
      c: 1,
      e: "Prefer the record already carrying the open work, else the one with a Sales Rep. Never split one rep's deals across twins, and never solve a duplicate by adding a third."
    },
    {
      scenario: "A reseller tells you they are quoting a national pharmacy chain for a multi-site POS rollout, and you know another of our resellers is talking to the same chain.",
      q: "How do you record it?",
      o: ["One opportunity on each reseller, and nothing else", "Create the pharmacy chain as a Company so it appears in the book of business", "Keep the reseller as the Company, make sure the pharmacy chain exists as an End Customer, and link both opportunities to it", "Record it as a note so we do not tip off either reseller"],
      c: 2,
      e: "The resellers stay the Companies because they place the orders. The chain is an End Customer, and linking both deals to it is exactly what produces the two-horse race view."
    }
  ]
}
