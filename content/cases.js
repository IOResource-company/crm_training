{
  slug: "cases",
  name: "Cases — the Customer Ops Queue",
  track: "ops",
  tagline: "Everything that is not an Opportunity: queries, delivery chases, complaints, returns, credit and technical questions.",
  intro: "<p>A <strong>Case</strong> is the Customer Operations queue. If a customer asks a question, chases a delivery, complains, wants to return something, queries an invoice or has a technical problem, it becomes a Case. Deals in flight are Opportunities; money and documents live in Intact; everything else that needs someone to own it and drive it to done is a Case.</p><p>Every case carries the four non-negotiables: <strong>one named owner, one current status, one next action and one due date</strong>. Nothing else is mandatory, because that is the minimum that makes an item workable — and it is the standard we hold.</p><p>The clever part is that the case measures itself. Moving the status stamps the SLA timestamps for you, and those stamps are what produce the acknowledgement and response numbers in the Ops Pulse email. Keep the status honest and the reporting happens on its own.</p>",
  shots: [
    {key:"case-queue", cap:"Cases → All Open (SLA) view, sorted by due date, with the Subject, Priority, Status, Type, Company, Owner and Due date columns visible"},
    {key:"case-record", cap:"An open Case record showing Status, Priority, Owner, Next action and Due date on the left and the four SLA timestamps (Received at, Acknowledged at, First response at, Resolved at) on the right"}
  ],
  howtos: [
    {
      title: "Pick up a new case and acknowledge it",
      when: "First thing every morning, and every time something lands in the queue during the day",
      steps: [
        "Open <strong>Cases → All Open (SLA)</strong>. It is sorted by due date, so the top row is the most urgent thing you own.",
        "Check the <strong>Unowned cases</strong> view first and claim anything sitting in it — set yourself (or the right colleague) as <strong>Owner</strong>.",
        "Read the case, then reply to the customer from <strong>sales@</strong> with the salesperson in cc. Say that you own it, what you are doing, and when they will hear next.",
        "Move <strong>Status</strong> from New to <strong>Acknowledged</strong>. That single move stamps <em>Acknowledged at</em> for you.",
        "Set a <strong>Next action</strong> and a <strong>Next action date</strong>, and a <strong>Due date</strong> that reflects the SLA for that kind of item.",
        "Set <strong>Priority</strong> honestly: Urgent means drop other work, High means today, Normal means within SLA."
      ],
      shot: {key:"case-queue", cap:"The All Open (SLA) list — point out the due-date sort and the Owner column"},
      tip: "An acknowledgement is not an answer. Tell the customer three things — we own it, what we are doing, when they will hear next — then meet that next-update time.",
      important: "Acknowledge within <strong>1 working hour</strong>. If the priority is <strong>Urgent</strong>, that drops to <strong>15 minutes</strong>.",
      mistake: "Sitting on a case until you have the full answer. The SLA is on the acknowledgement, not the solution."
    },
    {
      title: "Understand where cases come from",
      when: "So you know what will already be waiting for you and what you have to create yourself",
      steps: [
        "<strong>Most cases create themselves.</strong> An automation reads the sales@ mailbox every 15 minutes on weekdays and opens a Case for each new inbound email from a known customer contact.",
        "The auto-created case arrives as <strong>Status: New, Type: Query, Priority: Normal</strong>, with the company and contact linked, <em>Received at</em> set to the real time the email arrived, and a due date on the next working day.",
        "It is deduplicated per mail thread, so a long back-and-forth produces one case, not ten.",
        "<strong>Unknown senders are not auto-cased.</strong> If the sender is not already a Person with a Company in the CRM, no case is created — the email surfaces in the Ops Pulse email instead, and you decide what to do with it.",
        "Internal senders, no-reply addresses, out-of-office auto-replies and anything with <strong>(Sales Pipe mail)</strong> in the subject are skipped deliberately.",
        "If you reply from an @ioresource.com address on a thread whose case is still New, the automation moves it to <strong>Acknowledged</strong> and stamps <em>Acknowledged at</em> with the time you actually replied."
      ],
      tip: "The fastest way to make the automation work for you is to keep adding customer contacts to <strong>People</strong>. A sender the CRM does not recognise never becomes a case on its own.",
      important: "Correct the auto-created case as soon as you open it. It always lands as <em>Query / Normal</em> — if it is really a Complaint, a Delivery chase or an Urgent problem, change <strong>Type</strong> and <strong>Priority</strong> before you do anything else.",
      confirm: "Whether the auto-created case still defaults its owner to Stephen Browne now that there are more workspace members, or whether it now routes to the account's owner."
    },
    {
      title: "Create a case by hand",
      when: "A phone call, a walk-in request, an email from an address the CRM does not know yet, or anything the automation skipped",
      steps: [
        "Search first. If the customer already has an open case on the same issue, add to that one instead of starting a second.",
        "Open <strong>Cases</strong> and click <strong>New Case</strong>.",
        "Write a <strong>Subject</strong> that reads on its own in a list: customer, product and the actual issue — for example <em>Deycom — Posbank Apexa N97 faulty goods on arrival</em>.",
        "Set <strong>Type</strong> (Query, Delivery, Complaint, Return, Credit query or Technical) and <strong>Priority</strong>.",
        "Link the <strong>Company</strong> and the <strong>Contact</strong>. Link the <strong>Opportunity</strong> too if the case relates to a live deal.",
        "Set <strong>Received at</strong> to the moment the customer actually contacted us — not the moment you got round to typing it in.",
        "Set <strong>Owner</strong>, <strong>Next action</strong>, <strong>Next action date</strong> and <strong>Due date</strong> before you close the panel."
      ],
      shot: {key:"case-new", cap:"The New Case panel with Subject, Type, Priority, Company, Contact and Owner filled in"},
      important: "<strong>Received at</strong> is the start of the SLA clock. If you leave it blank, that case can never be measured — it shows as unmeasurable in the pulse and drops out of the acknowledgement and response medians.",
      mistake: "Backdating nothing and putting today's date and time in <strong>Received at</strong> for an email that arrived yesterday. That flatters the numbers and hides a real delay.",
      confirm: "Whether saving a manually created case stamps Received at automatically, or whether it must always be typed in."
    },
    {
      title: "Work the case — and use the right Waiting status",
      when: "Any time a case moves forward, and every time it stops moving because you are waiting on somebody",
      steps: [
        "When you send the first meaningful reply — the real answer, the quote, the tracking number, the diagnosis — move <strong>Status</strong> to <strong>In Progress</strong>. That stamps <em>First response at</em>.",
        "If the ball is with the customer (you asked for a PO, a serial number, a photo, an approval), use <strong>Waiting – Customer</strong>.",
        "If the ball is with a supplier or a courier, use <strong>Waiting – Supplier</strong> and fill in <strong>Supplier dependency</strong> so the watch-list tells you who to chase.",
        "If the ball is with a colleague — Tom for technical, Accounts for a credit query, the warehouse for a pick — use <strong>Waiting – Internal</strong>.",
        "Whichever you use, still set a <strong>Next action</strong> and a <strong>Next action date</strong>. Waiting is not an excuse to stop owning it.",
        "Update the customer at the promised interval even when nothing has changed. Supplier-dependent items get an update every 24–48 hours; complaints get one daily."
      ],
      tip: "The three Waiting statuses exist so you can answer one question at a glance: <em>whose move is it?</em> If you cannot name the person you are waiting on, the case is not Waiting — it is In Progress and it is yours.",
      mistake: "Parking everything in <strong>Waiting – Supplier</strong> because it feels like the case is out of your hands. Waiting – Supplier means a specific vendor or courier owes us a specific reply."
    },
    {
      title: "Escalate, resolve and close",
      when: "Something is blocked, slipping or high risk — or the customer is finally satisfied",
      steps: [
        "To escalate, tick <strong>Escalated</strong> on the case and tell the manager. Escalated is a <em>flag on top of the status</em>, not a status — the case keeps whatever status it is really in.",
        "Escalate early: blocked, at risk of breaching SLA, high value, or a key account unhappy. Do not wait for the due date to pass.",
        "When the issue is genuinely sorted, confirm it with the customer first, then write a plain-English <strong>Resolution note</strong> saying what was done.",
        "Move <strong>Status</strong> to <strong>Resolved</strong>. That stamps <em>Resolved at</em>.",
        "Move to <strong>Closed</strong> once the customer has confirmed they are happy and nothing further is expected.",
        "Check the <strong>Escalated</strong> view daily — every row on it should have a named next action and a due date."
      ],
      shot: {key:"case-record", cap:"A resolved Case record showing the Resolution note and all four SLA timestamps filled in"},
      important: "The case owner stays responsible until the customer is satisfied, even when someone else is doing part of the work. Handing over a task never hands over the case.",
      confirm: "Whether moving a case to Closed stamps anything, and what the intended difference is between Resolved and Closed in day-to-day use."
    }
  ],
  fields: [
    {k:"Subject", v:"The case title. Write it so it reads on its own in a list — customer, product, issue. This is what everyone sees in the queue."},
    {k:"Case type", v:"<strong>Query</strong> · <strong>Delivery</strong> · <strong>Complaint</strong> · <strong>Return</strong> · <strong>Credit query</strong> · <strong>Technical</strong>. Auto-created cases always land as Query — correct it. Note there is no RMA or Warranty type; that work lives in <strong>Aftercare</strong>."},
    {k:"Status", v:"Eight values: New → Acknowledged → In Progress → Waiting – Customer / Waiting – Supplier / Waiting – Internal → Resolved → Closed. Moving this is what stamps the SLA clock, so keep it honest."},
    {k:"Priority", v:"<strong>Urgent</strong> (drop other work, acknowledge in 15 minutes) · <strong>High</strong> (handle today) · <strong>Normal</strong> (within SLA)."},
    {k:"Received at / Acknowledged at / First response at / Resolved at", v:"The SLA clock. <em>Received at</em> is the customer's contact time. The other three are stamped for you by the workflow when the status moves, they are only ever stamped once, and they are never overwritten. Do not type them by hand."},
    {k:"Due date", v:"When this case must be finished by, taken from the SLA for that kind of item. It drives the sort order of the queue and the <strong>Overdue cases</strong> view."},
    {k:"Next action / Next action date", v:"The single next step and when it happens. Every open case has both, always — there are saved views whose whole job is to catch cases missing either."},
    {k:"Supplier dependency", v:"Who we are waiting on when the status is <strong>Waiting – Supplier</strong>. It makes the supplier watch-list usable, so you can chase on a cadence instead of re-reading every case."},
    {k:"Escalated", v:"A flag, not a status. Tick it when an item is blocked, slipping, high value or a key account is at risk. It feeds the <strong>Escalated</strong> view that gets reviewed daily."},
    {k:"Resolution note", v:"One or two plain sentences on what was actually done. This is what makes the monthly look at recurring themes worth anything."},
    {k:"Owner, Company, Contact, Opportunity", v:"Owner is a workspace member — cases carry no salesRep code. Company and Contact link the case to the account and the person. Link the <strong>Opportunity</strong> whenever the case sits behind a live deal."}
  ],
  tips: [
    "Your whole day fits in two views. <strong>Unowned cases</strong> and <strong>Overdue cases</strong> — drive both to zero every morning and the queue is under control.",
    "Updating the status <em>is</em> the update. There is no second admin step and no separate report to fill in — the KPIs are a by-product of working the case properly.",
    "Put the quotation, pro forma or order number in the email subject. It is the fastest, most reliable way anything you send links back to the right record."
  ],
  mistakes: [
    {m:"Typing into the SLA timestamp fields by hand.", fix:"Leave <em>Acknowledged at</em>, <em>First response at</em> and <em>Resolved at</em> alone — the workflow owns them. The only one you ever set yourself is <strong>Received at</strong>, on a case you created manually."},
    {m:"Leaving a case in New because you have not got the answer yet.", fix:"Acknowledge within the hour, move it to <strong>Acknowledged</strong>, and tell the customer when they will next hear from you. The answer follows on its own timeline."},
    {m:"Closing a case with no resolution note.", fix:"Write one line on what was done. Without it, the monthly service review has nothing to spot patterns in and the next person to hit the same fault starts from scratch."},
    {m:"Opening a second case for a customer who replies again on the same issue.", fix:"Search the customer's open cases first and work the existing one. One issue, one case — that is what makes the queue and the pulse counts honest."},
    {m:"Reading a filled-in <em>Resolved at</em> as proof the case is done.", fix:"Judge resolved by <strong>Status</strong>. A reopened case keeps its old <em>Resolved at</em> stamp, so the timestamp on its own can lie."}
  ],
  confirms: [
    "Whether the three Waiting statuses pause the SLA clock, or whether the due date and overdue calculation keep running while we wait on a customer or supplier.",
    "Whether the weekday 08:00 unowned-case nudge email still runs now that the 08:00 and 18:00 Ops Pulse email covers the same ground.",
    "Whether a saved view exists for Waiting – Customer and Waiting – Internal, or only for Waiting – Supplier.",
    "The exact steps to create a Case directly from a Company or Person record, rather than from the Cases list.",
    "Whether the known gap where the Unowned cases dashboard widget also counts Closed cases has been fixed.",
    "Whether Received at has now been backfilled on the six cases imported during the Ross handover — until it is, their acknowledgement and response times cannot be measured."
  ],
  quiz: [
    {
      q: "How quickly must an inbound customer item be acknowledged?",
      o: ["Within 1 working hour, or 15 minutes if it is Urgent", "Within 4 working hours", "Same working day", "Before the end of the week"],
      c: 0,
      e: "The standard acknowledgement SLA is 1 working hour. Urgent items — site down, deadline today, key account at risk — drop that to 15 minutes."
    },
    {
      q: "What stamps the Acknowledged at, First response at and Resolved at timestamps on a case?",
      o: ["You type them in when you have a moment", "Moving the case Status — the workflow stamps them automatically", "The Ops Pulse email at 08:00 and 18:00", "The salesperson when they review the account"],
      c: 1,
      e: "Moving the status is the whole action. Acknowledged stamps Acknowledged at, In Progress stamps First response at, Resolved stamps Resolved at. They are stamped once and never overwritten."
    },
    {
      q: "A customer has been asked for a purchase order number and has not come back. Which status?",
      o: ["Waiting – Supplier", "Waiting – Internal", "Waiting – Customer", "In Progress"],
      c: 2,
      e: "The three Waiting statuses answer one question: whose move is it? The ball is with the customer, so it is Waiting – Customer — with a next action and a date to chase them."
    },
    {
      q: "Which of these is NOT a case type in our CRM?",
      o: ["Credit query", "Warranty / RMA", "Delivery", "Technical"],
      c: 1,
      e: "RMA and warranty work is deliberately not a case type. It lives in the Aftercare object as a slim log, because the separate technical system is the source of truth for the detail."
    },
    {
      q: "Where do most cases come from?",
      o: ["Ops types every one in by hand", "They are auto-created from inbound sales@ mail every 15 minutes on weekdays", "The salesperson creates them from the Opportunity", "They are imported nightly from Intact"],
      c: 1,
      e: "An automation reads the sales@ mailbox every 15 minutes on weekdays and opens one case per mail thread from a known customer contact, with Received at set to the real arrival time."
    },
    {
      q: "An email arrives at sales@ from someone who is not in the CRM as a contact. What happens?",
      o: ["A case is created with no company linked", "A case is created and assigned to the sales rep", "No case is created — the email surfaces in the Ops Pulse email for a person to handle", "The email is deleted as spam"],
      c: 2,
      e: "Only senders that resolve to a Person with a Company are auto-cased. Unknown senders are never guessed at — they appear in the pulse email so a human decides. Adding contacts to People is what switches the automation on for them."
    },
    {
      q: "How do you mark a case as escalated?",
      o: ["Change its Status to Escalated", "Tick the Escalated flag and keep the real status", "Set Priority to Urgent", "Move it to Waiting – Internal"],
      c: 1,
      e: "Escalated is a flag on top of the status, not a status of its own. The case keeps whatever status genuinely describes where it is, and appears on the Escalated view for daily review."
    },
    {
      q: "Why does Received at matter so much?",
      o: ["It sorts the queue", "It is the start of the SLA clock — without it, acknowledgement and response times cannot be measured", "It sets the due date automatically", "It links the case to the Opportunity"],
      c: 1,
      e: "Every SLA measure is a subtraction from Received at. A case with it blank counts as unmeasurable and silently drops out of the medians."
    },
    {
      q: "Which two views should read zero every morning?",
      o: ["Escalated and Waiting – Supplier", "All Open (SLA) and Resolved — Last 30 Days", "Unowned cases and Overdue cases", "Open cases (by status) and the Command Centre"],
      c: 2,
      e: "Unowned cases means somebody has to claim it; Overdue cases means it has to be cleared or escalated. When both read zero, the queue is under control."
    },
    {
      q: "What are the four non-negotiables on every open case?",
      o: ["Owner, status, next action, due date", "Subject, type, priority, company", "Owner, priority, contact, opportunity", "Status, resolution note, due date, escalated flag"],
      c: 0,
      e: "One named owner, one current status, one next action and one due date. Everything else is helpful; those four are the standard."
    }
  ],
  flashcards: [
    {q: "What is a Case?", a: "Anything from a customer that is not already an Opportunity — a query, delivery chase, complaint, return, credit query or technical problem."},
    {q: "The eight case statuses, in order?", a: "New, Acknowledged, In Progress, Waiting – Customer, Waiting – Supplier, Waiting – Internal, Resolved, Closed."},
    {q: "Acknowledgement SLA?", a: "1 working hour. 15 minutes if the priority is Urgent."},
    {q: "First meaningful response SLA?", a: "4 working hours. Moving the case to In Progress stamps First response at."},
    {q: "Standard quote turnaround?", a: "Same day — acknowledged within the hour, quote out that working day."},
    {q: "Which timestamp do you ever type in yourself?", a: "Only Received at, and only on a case you created manually. The other three are stamped by the workflow."},
    {q: "Where do warranty and RMA go?", a: "Aftercare, as a slim log with the RMA reference, date and a one-line summary. The separate technical system holds the detail."},
    {q: "Is Escalated a status?", a: "No — it is a flag on top of whatever the real status is."}
  ],
  scenarios: [
    {
      scenario: "It is 09:10 on a Tuesday. You open the queue and find a case auto-created at 08:20 from a contact at Deycom, sitting as New / Query / Normal. The email says a scanner arrived damaged and the customer is quoting their rights under consumer law.",
      q: "What do you do first?",
      o: [
        "Email Tom to open an RMA and leave the case as it is until he replies",
        "Change Type to Complaint, raise Priority, reply from sales@ to acknowledge and move the status to Acknowledged, then set next action and due date",
        "Move the status straight to In Progress so the response clock is stamped",
        "Create a second case of type Return so both angles are tracked"
      ],
      c: 1,
      e: "Auto-created cases always land as Query / Normal, so the first job is to make the record true — Complaint, higher priority. Then acknowledge inside the hour, which stamps Acknowledged at, and give it a next action and a due date. Involving Tom is the next action, not a substitute for owning it. A complaint has a 2 working day resolve target with daily updates."
    },
    {
      scenario: "You have chased a supplier twice about a lead time for a case that is now three days old. There is still no reply, and the customer has a deadline this week.",
      q: "What is the right handling?",
      o: [
        "Set the status to Resolved since there is nothing more you can do",
        "Leave the case in In Progress and wait for the supplier to come back",
        "Keep it Waiting – Supplier with the supplier named in Supplier dependency, tick Escalated, set a fresh next action and date, and update the customer even though nothing has changed",
        "Close the case and open a new one when the supplier replies"
      ],
      c: 2,
      e: "Waiting – Supplier with the vendor named is what makes the watch-list work. Escalate early — blocked and at risk of missing a customer deadline is exactly the trigger. And the customer still gets an update on the promised interval; supplier-dependent items get one every 24 to 48 hours. Resolved means the customer's issue is actually sorted."
    }
  ]
}
