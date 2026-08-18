{
  slug: "email",
  name: "Email & the CRM",
  track: "all",
  tagline: "The CRM knows an email happened, with whom and when. It does not know what it said - that part is your job.",
  intro: "<p>Our shared mailbox, <strong>sales@ioresource.com</strong>, is connected to the CRM. Mail to and from it is matched against the people and companies it involves, so open a contact or an account and you can see the traffic on that relationship without going near Outlook.</p><p>There is one limitation that shapes everything else in this module. The mailbox is synced with visibility set to <strong>Subject and metadata</strong> &mdash; you see the <em>subject</em>, <em>who was on it</em> and <em>when</em>, and nothing more. <strong>Message bodies and attachments are not shown in the CRM.</strong> That is a deliberate data-minimisation choice, and it means the CRM proves a conversation happened but will never tell you what was agreed. Anything that matters from an email body has to be written into a <strong>Note</strong> by a human.</p><p>Alongside the sync there are two automations worth knowing: inbound customer mail to sales@ <strong>creates Cases by itself</strong>, and any email you forward with <strong>(Sales Pipe mail)</strong> in the subject gets read and filed against the right deal or case.</p>",
  shots: [
    {key:"email-thread-record", cap:"A Person or Company record showing the synced email list - capture it so the reader can see that only subject, participants and date are shown, with no message preview"},
    {key:"note-on-record", cap:"A Note on the same record capturing what was agreed in one of those emails - the pairing is the whole point of this module"}
  ],
  howtos: [
    {
      title: "Read a customer's email history on a record",
      when: "Before a call, or when you pick up an account or a thread you have not been part of",
      steps: [
        "Open the <strong>Person</strong> or the <strong>Company</strong>. There is no separate inbox screen in the CRM &mdash; email attaches itself to the records it involves.",
        "You will see a list of messages with <strong>subject, participants and date</strong>. That tells you the rhythm of the relationship: who talks to whom, how often, and when it went quiet.",
        "You will <strong>not</strong> see the message text or any attachment. Do not go looking for a preview &mdash; there is not one.",
        "Use it as an index, not an archive. If you need the actual content, the mailbox is still the mailbox: open the thread in Outlook.",
        "If a sender is not in <strong>People</strong> yet, their mail has nowhere to show. Add them &mdash; name, email, company &mdash; and their history lights up on the account.",
        "If the newest email you can see on any record is days old, suspect the sync rather than the customer. Mail sync has broken before and it is not always obvious; flag it rather than assuming everyone has gone quiet."
      ],
      shot: {key:"email-thread-record", cap:"The synced email list on a person record, showing subject and participants only"},
      tip: "The email list answers <em>have we been talking to them?</em> in about three seconds. That is genuinely useful before a cold-ish call, even without the contents.",
      important: "Only the shared <strong>sales@</strong> mailbox is connected. Anything you send from your own mailbox and do not copy to sales@ is invisible to the CRM entirely.",
      mistake: "Assuming a quiet-looking record means a quiet customer, when really the conversation ran through somebody's personal inbox.",
      confirm: "The exact name and location of the email section on a record in our version, and whether it appears on Companies as well as People."
    },
    {
      title: "Get what matters out of an email and into the CRM",
      when: "Any time an email contains a decision, a commitment, a price, a date or a complaint",
      steps: [
        "Read the email in Outlook as normal.",
        "Ask one question: <em>if this thread vanished, what would a colleague need to know?</em> That is what goes in the CRM.",
        "Write it as a <strong>Note</strong> on the company, the opportunity or the case &mdash; whichever it belongs to. Title it so it reads in a list: <em>Email &mdash; Teresa &mdash; agreed revised pricing, decision by 12th</em>.",
        "Update the fields the views actually read: on a deal that is <code>stage</code>, <code>nextStep</code>, <code>nextStepDate</code>, <code>lastActivityDate</code>, and <code>quoteRef</code> once a quotation exists.",
        "If the email creates work, make a <strong>Task</strong> with a due date. If it is a customer problem, it should be a <strong>Case</strong> with an owner and a next action.",
        "Do not paste the whole email into a note. Summarise: what was asked, what we said, what happens next."
      ],
      shot: {key:"note-on-record", cap:"A note capturing the substance of an email thread on the matching opportunity"},
      tip: "Thirty seconds of summary now saves an hour of forwarding later, and it is the only way the detail survives somebody leaving.",
      important: "This is the single most important habit in this module. Because email bodies are not visible in the CRM, <strong>a Note is the only place the substance of an email can live</strong>.",
      mistake: "Leaving the important detail in the thread on the basis that 'it is in the CRM' - the subject line is in the CRM; the agreement is not."
    },
    {
      title: "Email a lead, an update or a task straight into the CRM",
      when: "Anything belongs in the pipeline - a new enquiry, a quote decision, a stage change, an order, a job for later - and you do not want to open the CRM to put it there",
      steps: [
        "Forward the email to <strong>sales@ioresource.com</strong> and type <strong>one word at the top of your forward: <code>Sales</code></strong>. Nothing else is needed. That is the whole notation.",
        "Say what you want if you already know: <code>Sales lead</code> creates a new opportunity, <code>Sales task</code> creates a task for you, <code>Sales note</code> just files the mail against the record. Leave it as plain <code>Sales</code> and the automation decides for itself.",
        "It goes in the <strong>body</strong>, not the subject, and it must be the first thing in your forward &mdash; above the quoted original. Subject lines are left alone deliberately: customer mail regularly carries words like <em>SALES ORDER</em>, and a subject trigger would hijack it.",
        "The older form still works: <strong>(Sales Pipe mail)</strong> anywhere in the subject, with tolerant matching for <em>sales pipe</em> or <em>Sales-Pipe</em>.",
        "The automation reads the full email, compares it against every open opportunity, case and company, and decides what to do. It only acts when it is confident.",
        "What it can do: <strong>update an opportunity</strong> (advance the stage or the next step), <strong>resolve a case</strong>, or <strong>create a new opportunity</strong> where the mail is genuinely new pipeline.",
        "Anything it cannot match confidently becomes a <strong>review task</strong> titled <em>Review: Sales Pipe mail &mdash; ...</em>. That is the deliberate fallback: the automation never guesses.",
        "Every action it takes writes a <strong>Note</strong> on the record it touched, and appears in the next Pulse email under <em>Actions taken</em>. Nothing happens invisibly.",
        "Check the outcome. If it created a review task, do the filing yourself &mdash; the task is a prompt, not a completed job."
      ],
      tip: "Forwarding a customer's own words is often better than retyping them. The note the automation leaves quotes the mail, which is exactly the context the next person needs.",
      important: "<strong>One word decides whether it is Sales or Ops.</strong> A customer emailing sales@ becomes a <strong>Case</strong> for Customer Operations. A forward from you starting with <strong>Sales</strong> becomes <strong>pipeline</strong> instead, and is deliberately skipped by case creation &mdash; so you cannot spawn a spurious case by filing something.",
      mistake: "Forwarding it and then assuming the job is done. Always glance at the outcome: it may have produced a review task rather than a real update.",
      confirm: "The one-word <code>Sales</code> trigger was agreed on 18 August 2026 and reads the body rather than the subject. Confirm it has shipped in the routing engine before relying on it &mdash; until then the working form is <strong>(Sales Pipe mail)</strong> in the subject. Also still open: whether every member of the team can use it, or whether the review tasks and notes only surface to some people."
    },
    {
      title: "Put the document number in the subject line",
      when: "Every time you send or forward anything carrying a quotation, pro-forma, sales order, invoice or PO number",
      steps: [
        "Write the subject as <strong>document number first, then customer, then what it is</strong>: <em>Quotation 25926 &mdash; McLernon &mdash; Urovo DT66 battery</em>.",
        "Use the number exactly as it appears in <strong>Intact</strong>. That document number is the join between what happens in the CRM and the transaction record in the ERP &mdash; a mistyped number breaks the link for good.",
        "Put the same reference on the opportunity in <code>quoteRef</code> when the quote goes out. The subject line and the field should match.",
        "Send formal sales work through <strong>sales@</strong> with the salesperson in <strong>cc</strong>, and sign your own name above the shared signature so the customer knows who they are dealing with.",
        "Relationship and product conversations can stay in your own mailbox. The moment it becomes a quotation or an operational issue, it moves to sales@."
      ],
      tip: "Reply on the existing thread rather than starting a new one where you can. Threads are how the CRM keeps one case per issue instead of five.",
      important: "Intact owns money and documents; the CRM owns relationships and control. The document number in the subject is the thread that ties the two together &mdash; it is the cheapest piece of discipline we have.",
      mistake: "Subjects like 'Re: quote' or 'pricing' - they carry no reference, so nothing can be tied back to the ERP record."
    },
    {
      title: "Know what the CRM does with inbound sales@ mail on its own",
      when: "Background knowledge - so you understand why cases appear that nobody typed",
      steps: [
        "Every 15 minutes through the working day on weekdays, the CRM scans new inbound mail to sales@.",
        "If the sender is a <strong>known contact</strong> &mdash; a person in the CRM who is linked to a company &mdash; a <strong>Case</strong> is created automatically: status New, type Query, priority Normal, the received time stamped from the email itself, a due date on the next working day, contact and company linked, and an owner assigned.",
        "It creates <strong>one case per email thread</strong>, so a running conversation does not spawn a pile of duplicates.",
        "When anyone replies from an ioresource.com address on a thread whose auto-created case is still New, the case moves to <strong>Acknowledged</strong> and the acknowledgement time is stamped from the real reply. Your SLA clock is being measured off actual behaviour, not paperwork.",
        "Not everything is cased: internal senders, no-reply and automated addresses, out-of-office replies, Pulse replies and (Sales Pipe mail) forwards are all skipped.",
        "<strong>Unknown senders are never auto-cased.</strong> They surface in the Ops Pulse email for a human to triage and, where they are a real customer contact, to add to People.",
        "Because the received time comes from the email, the case's SLA measurement is real &mdash; which is exactly why you should never hand-edit those timestamps."
      ],
      tip: "If somebody keeps emailing us and never appears on the account, they are probably not in People yet. Adding them once fixes it permanently and switches on auto-casing for them.",
      important: "Never edit the hidden field that links a case to its source email thread. It is what stops the same conversation creating a new case every fifteen minutes.",
      confirm: "Who the default owner is on an auto-created case today, and how cases should be reassigned from that default to the right person."
    }
  ],
  fields: [
    {k:"Email subject line", v:"Our main linking mechanism. Document number, then customer, then what it is: <em>Quotation 25926 &mdash; McLernon &mdash; Urovo DT66 battery</em>. It is also all the CRM will ever show you of the message."},
    {k:"Quote Ref (quoteRef)", v:"On the opportunity. The Intact quotation, pro-forma, sales order or PO number, written exactly as it appears in the ERP. Should match what is in the email subject."},
    {k:"Person email address", v:"On the People record. This is what matches synced mail to a contact. A sender who does not exist in People has their mail stored but shown nowhere, and gets no automatic case."},
    {k:"Note title and body", v:"Where the substance of an email has to live, because message bodies are not visible in the CRM. Title as <em>Email &mdash; who &mdash; what was agreed</em>."},
    {k:"Case received time", v:"Stamped automatically from the original email's timestamp on auto-created cases. It is the start of the SLA clock &mdash; never overwrite it by hand."},
    {k:"Case source thread reference", v:"A hidden field linking a case to the email thread that created it. It is what prevents duplicate cases for the same conversation. Never edit it."},
    {k:"Case owner, status, next action, due date", v:"Auto-created cases arrive as New with a default owner. A human still has to claim it, set a real next action and a sensible due date."}
  ],
  tips: [
    "Treat the CRM email list as an <strong>index</strong> and Outlook as the <strong>archive</strong>. The CRM tells you a conversation happened and with whom; only a Note tells you what came of it.",
    "Pulse emails are sent with a reply-to of <strong>sales@</strong>, so replying to one lands back in the synced mailbox. Even so, use the buttons on the Pulse to act &mdash; a reply is a fallback, not a control.",
    "Formal work through sales@, with the rep in cc, and your own name above the shared signature. That one habit is what makes cover, handover and the whole email-to-record link possible."
  ],
  mistakes: [
    {m:"Believing the CRM stores your emails so you do not need to write anything down.", fix:"Subject, participants and date is all you get. Write a Note with what was actually agreed, or it is gone the day somebody leaves."},
    {m:"Sending a quotation from a personal mailbox with no reference in the subject.", fix:"Send it through sales@ with the rep in cc and the Intact document number in the subject, and put the same reference in quoteRef on the deal."},
    {m:"Never adding new contacts to People.", fix:"Two clicks - name, email, company. Until you do, their mail is invisible on the account and no case is created when they write in."},
    {m:"Hand-editing case timestamps to make the SLA numbers look better.", fix:"They are stamped from real events. Editing them corrupts the only honest service measurement we have."}
  ],
  confirms: [
    "Calendar sync: whether it is live today, whose calendars it covers, and where meetings appear on a record. Do not assume it works - confirm with the administrator before teaching anyone to rely on it.",
    "Whether any mailbox other than sales@ is connected - for example individual reps' own Outlook accounts - or whether sales@ is the only one.",
    "Whether email can be sent from inside the CRM in our setup, and whether we want people doing that at all.",
    "Exactly what a subject-only email thread looks like on a record in our version: whether participants, direction and thread grouping are all visible, and what an attachment shows as, if anything.",
    "Whether attachments are retrievable anywhere from the CRM, and the agreed home for quote PDFs and spec sheets.",
    "Whether search inside the CRM can find an email by its subject line, or only by the record it is attached to."
  ],
  quiz: [
    {
      q: "You open a customer record and want to read an email they sent last week. What will the CRM show you?",
      o: ["The full message and any attachments", "The subject, who was on it and when - nothing more", "A summary written by the system", "Nothing at all"],
      c: 1,
      e: "The sales@ mailbox is synced with visibility set to Subject and metadata. You can see that an email happened, with whom and when, but the body and attachments are not shown in the CRM."
    },
    {
      q: "Why does that limitation matter for how you work?",
      o: ["It does not, you can always forward it", "Anything important from an email body must be written into a Note", "It means email is not useful", "It means you should copy everyone on everything"],
      c: 1,
      e: "A Note is the only place the substance of an email can live in the CRM. Without it, the record proves a conversation happened but not what was agreed."
    },
    {
      q: "What does putting '(Sales Pipe mail)' in the subject of a forward to sales@ do?",
      o: ["Nothing, it is just a label", "The automation reads it and updates or creates the right deal or case, or raises a review task if unsure", "It marks the email as urgent", "It sends it to everyone in sales"],
      c: 1,
      e: "The automation matches the mail against open deals and cases. It can update an opportunity, resolve a case or create a new opportunity - and anything it cannot match confidently becomes a review task rather than a guess."
    },
    {
      q: "The (Sales Pipe mail) automation cannot confidently match your forward. What happens?",
      o: ["Nothing happens and the email is dropped", "It creates the closest matching opportunity anyway", "It creates a review task for a human to deal with", "It emails you back for clarification"],
      c: 2,
      e: "A review task is the mandatory fallback - the engine never guesses. Every action it does take also writes a Note on the record and shows up in the next Pulse under Actions taken."
    },
    {
      q: "How often does the CRM check inbound sales@ mail and create Cases?",
      o: ["Once a night", "Every 15 minutes during the working day on weekdays", "Only when someone presses a button", "In real time, always"],
      c: 1,
      e: "The ingest runs every 15 minutes through working hours on weekdays. It creates one case per email thread, so a running conversation does not create duplicates."
    },
    {
      q: "An email arrives at sales@ from someone who is not in People. What happens?",
      o: ["A case is created and a person record is created", "A case is created with no contact", "No case is created - the sender surfaces in the Pulse email for a human to triage", "The email is deleted"],
      c: 2,
      e: "Auto-casing only fires for known contacts who are linked to a company. Unknown senders are triaged by a person, which is also the prompt to add them to People."
    },
    {
      q: "Why do we insist on the Intact document number in the email subject?",
      o: ["It looks professional", "It is how CRM activity and the ERP transaction record are tied together", "The email system requires it", "It speeds up delivery"],
      c: 1,
      e: "Intact owns money and documents; the CRM owns relationships and control. The document number in the subject is the join between the two, so a mistyped or missing number breaks the link."
    },
    {
      q: "Which of these is safe to change by hand on an auto-created case?",
      o: ["The received timestamp", "The link to the source email thread", "The owner, next action and due date", "The acknowledgement timestamp"],
      c: 2,
      e: "Owner, next action and due date are yours to set. The timestamps are stamped from real events and drive the SLA numbers, and the source-thread link is what prevents duplicate cases."
    }
  ],
  flashcards: [
    {q: "Which mailbox is synced into the CRM?", a: "The shared sales@ioresource.com mailbox."},
    {q: "What of an email can you see in the CRM?", a: "Subject, participants and date. Not the body, not attachments."},
    {q: "So where does the content of an important email go?", a: "Into a Note on the company, opportunity or case."},
    {q: "The (Sales Pipe mail) trick", a: "Forward any email to sales@ with (Sales Pipe mail) in the subject and the automation matches it to an open deal or case, or raises a review task."},
    {q: "How often does auto-case creation run?", a: "Every 15 minutes during working hours on weekdays, one case per email thread."},
    {q: "Why must a new contact be added to People?", a: "Mail from someone who is not in People has nowhere to show on the account, and no case is auto-created for them."},
    {q: "Subject line convention", a: "Document number, then customer, then what it is - using the Intact number exactly."},
    {q: "Where does formal sales work go?", a: "Through sales@ with the salesperson in cc, signed with your own name above the shared signature."}
  ],
  scenarios: [
    {
      scenario: "A customer emails sales@ accepting a quote, adds a small spec change, and asks for delivery before month end. You are the rep and you are copied.",
      q: "What is the right handling?",
      o: ["Reply and leave it - the email is in the CRM", "Reply, then write a Note capturing the spec change and the delivery commitment, update the deal, and let the case that was auto-created be owned and worked", "Forward it to yourself for safe keeping", "Create a duplicate opportunity for the changed spec"],
      c: 1,
      e: "The email itself will show only as a subject line. The spec change and the delivery promise have to be written down as a Note, the deal has to move, and the auto-created case needs a real owner and next action."
    },
    {
      scenario: "You are on the road and get a long email on your phone from a reseller describing a new 60-unit opportunity at one of their sites. You have no time to open the CRM.",
      q: "What is the best thirty-second action?",
      o: ["Flag it in Outlook and deal with it tomorrow", "Forward it to sales@ with (Sales Pipe mail) in the subject, then check the outcome later", "Reply asking them to fill in a form", "Do nothing, it will sync automatically"],
      c: 1,
      e: "The forward gets the content in front of the automation, which can create the opportunity or raise a review task. It will not sync usefully on its own - only the subject line would ever be visible."
    }
  ]
}
