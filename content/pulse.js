{
  slug: "pulse",
  name: "The Pulse Emails",
  track: "all",
  tagline: "The automated daily emails that hand you your work - and let you act on the CRM without opening it.",
  intro: "<p>Most of what the CRM asks you to do each day arrives by email. Our CRM sends automated <strong>Pulse</strong> emails that read the live data, work out what is waiting, and send you a short list. Every row carries <strong>one-tap buttons</strong> that write straight back into the CRM. If you read one CRM thing each morning, read your pulse.</p><p>There are three editions. The <strong>Ops Pulse</strong> runs twice a day on weekdays (morning and evening) and asks: are we replying to and closing off every customer request? The <strong>Sales Pulse</strong> runs on weekday mornings and asks: who do we touch today to win business? The <strong>UK Expansion Pulse</strong> goes out in the early afternoon and works the named-contact list for the Urovo UK channel-recruitment campaign.</p><p>The pulse is not a report you skim. It is a to-do list you clear. A section that is always ignored gets deleted, and a section you act on keeps the CRM honest with no extra admin - pressing the button <em>is</em> the CRM update.</p>",
  shots: [
    {key:"ops-pulse-email", cap:"The Ops Pulse email - top tiles plus the first two or three awaiting-reply rows with their buttons visible. Crop or blur any customer email addresses."},
    {key:"sales-pulse-email", cap:"The Sales Pulse email - a deal row showing the Won / Lost / Push / Comment buttons. Value and amount columns must be cropped or blurred."},
    {key:"pulse-confirm-page", cap:"A pulse confirmation page after clicking a button, showing the Confirm button that actually applies the change."}
  ],
  howtos: [
    {
      title: "Work the Ops Pulse",
      when: "Twice every weekday - the morning edition when you sit down, the evening edition to see what is still on the board",
      steps: [
        "Read the <strong>three tiles</strong> first: customer emails awaiting a reply, overdue cases, and new requests in since the last pulse. World class for a small team is those tiles reading zero twice a day.",
        "Work the <strong>awaiting reply</strong> list oldest first. Only mail that has already missed a same-day reply is listed - today's unanswered mail is worked from the inbox and shown as a quiet count.",
        "Each row leads with the <strong>company in bold</strong> and carries a short robot line saying what the thread is actually about, because a subject line full of quote numbers tells you nothing.",
        "Use the buttons on the row rather than opening the CRM: <strong>Create case</strong> (only shown when the thread has no case yet), <strong>Handled - hide</strong>, <strong>Comment</strong>, <strong>Open in CRM</strong>.",
        "On an overdue case row the buttons are <strong>Resolve</strong>, <strong>Snooze +3d</strong>, <strong>Comment</strong> and <strong>Open case</strong>.",
        "Check the <strong>Actions taken</strong> section at the bottom - that is everything the automation did since the last pulse, including who pressed which button."
      ],
      shot: {key:"ops-pulse-email", cap:"The Ops Pulse email - top tiles plus the first two or three awaiting-reply rows with their buttons visible. Crop or blur any customer email addresses."},
      important: "<strong>Handled means handled.</strong> Pressing <em>Handled - hide</em> suppresses that thread permanently and also resolves its auto-created case when the case is still New or Acknowledged. A case you have deliberately parked at In Progress or one of the Waiting statuses is left open.",
      tip: "Duplicate threads about the same problem are folded into one card, and Resolve then acts on every case in the group. Out-of-office auto-replies never count as waiting, so you are never told you are late replying to a machine.",
      mistake: "Clearing something in the CRM and then leaving the same row unpressed in the pulse, so it comes back tomorrow."
    },
    {
      title: "Work the Sales Pulse",
      when: "Weekday mornings, before the first coffee - it should be short enough to clear in one sitting",
      steps: [
        "Read the three tiles: open pipeline value, next steps due, and deals gone quiet for 14 days or more. If you get a rep edition, those are <strong>your</strong> numbers and the subject line says so.",
        "Read the <strong>AI pipeline read</strong>: a short health read plus the three to five deals most worth touching <em>today</em>, each with a concrete action, a maintain list, and a couple of watch items. The rule it is given is that value at risk beats volume.",
        "Work <strong>Next steps due or overdue</strong>, oldest first. Each row shows the deal, company, stage, the next step and its date.",
        "Act on the row: <strong>Won</strong>, <strong>Lost</strong>, <strong>Push next step</strong> (+3d, +1m or +3m), <strong>Comment</strong>, <strong>Assign</strong> to a rep, or <strong>Open deal</strong>.",
        "Check <strong>Under discussion</strong> - deals you have commented on that nothing else is showing today. They stay, with their comments, until Won or Lost.",
        "Check <strong>Meeting actions</strong> (the weekly sales meeting register, grouped by owner) and <strong>Quote follow-ups</strong> (quote-shaped cases crossed over from Ops, because chasing a quote is a sales touch).",
        "Finish on <strong>Movement and hygiene</strong>: what was created, won and lost since yesterday, and the counts of deals with no next step, no amount, or gone quiet."
      ],
      shot: {key:"sales-pulse-email", cap:"The Sales Pulse email - a deal row showing the Won / Lost / Push / Comment buttons. Value and amount columns must be cropped or blurred."},
      important: "<strong>Lost forces a reason.</strong> The confirm page will not let you mark a deal lost without picking from the list - price, lead time, lost to competitor, no budget, no decision, stalled, other - with optional free text kept as a comment. Both Won and Lost also stop any follow-up cadence on the deal.",
      tip: "A long-cycle deal is <strong>not overdue, it is mis-dated</strong>. That is exactly what <em>+1m</em> and <em>+3m</em> are for - push a 2028 framework refresh out to its real cadence instead of being nagged every three days.",
      mistake: "Pushing the date over and over on a deal that actually died on the phone. Press Lost and give the reason - that is the cheapest market research we will ever get."
    },
    {
      title: "Press a button safely - the confirm page",
      when: "The first time you use any pulse button, and any time you think a button did not work",
      steps: [
        "Click the button in the email. A <strong>confirmation page</strong> opens in the browser. Nothing has changed yet.",
        "Read what the page says it is about to do - it spells out the record and every field that will change.",
        "Press <strong>Confirm</strong>. Only now is the change written to the CRM.",
        "You land on a short result page saying what happened. The action also appears in the next pulse under <em>Actions taken</em>, tagged with who clicked."
      ],
      shot: {key:"pulse-confirm-page", cap:"A pulse confirmation page after clicking a button, showing the Confirm button that actually applies the change."},
      important: "The two-step is <strong>deliberate</strong>. Outlook Safe Links pre-fetches every URL in an email, so a one-tap Resolve that acted on the click alone would resolve itself before you ever saw the email. Opening a page instead of acting instantly is the feature, not a fault.",
      tip: "Every link is signed and <strong>expires after 21 days</strong>. Work from today's pulse - if you dig out a three-week-old one, the buttons will tell you the link has expired and you will have to do it in the CRM.",
      mistake: "Clicking a button, seeing a page instead of a confirmation, assuming it is broken and closing the tab - so nothing was ever written.",
      confirm: "What happens if the same pulse button is pressed twice, and what a colleague sees if a pulse email is forwarded to them and they press a button on it."
    },
    {
      title: "Leave a comment that sticks",
      when: "After the daily ops meeting, or any time you want the rest of the team to know what was said about an item",
      steps: [
        "Find the item in the pulse and press <strong>Comment</strong> (called <em>Answer</em> on meeting actions and pipeline-sweep rows).",
        "Type what was said on the confirm page and press Save.",
        "The comment is stored in the CRM as a <strong>Note</strong> titled like <em>[Ops Pulse] date - record</em> or <em>[Sales Pulse] date - record</em>, attached to the record and its company.",
        "It then renders under that item on <strong>every</strong> pulse until the item is closed - resolved for a case, Won or Lost for a deal.",
        "The newest three comments show under the item; older ones collapse into a link back to the record."
      ],
      important: "<strong>Never type a comment into a reply to the pulse.</strong> Mail sync stores only the unquoted top of a reply, so anything you write down beside the quoted items is deleted before the engine ever sees it. That has already cost us two full meetings' worth of comments.",
      tip: "Commenting on an email item that has no case yet <strong>creates</strong> one, so there is always something closable. And Snooze no longer hides a commented case, nor does pushing a date hide a commented deal - only Resolve, Won or Lost clear them.",
      mistake: "Writing the update in a personal inbox or a notebook instead of the pulse, so it is invisible at the next meeting."
    },
    {
      title: "Work the UK Expansion Pulse",
      when: "Early afternoon on the days you are running the Urovo UK channel-recruitment campaign",
      steps: [
        "Open the pulse when it lands in the early afternoon. It is a nudge, not a report - it shows a small capped shortlist of contacts a day, most senior first, and says out loud when there is overflow rather than dropping it quietly.",
        "A person is in the campaign because their <strong>LinkedIn status</strong> field is set - that one field decides membership.",
        "Move each contact one step with the row buttons: set the LinkedIn URL, mark <strong>connected</strong>, log a <strong>message sent</strong>, mark <strong>replied</strong>, set a <strong>next step</strong>, or add a <strong>campaign comment</strong>.",
        "Use the quick-guide links in the footer for message templates, adding a contact, and fixing a connection status."
      ],
      tip: "Nothing about the shape is UK-specific. A campaign pulse is a flagged list of people, a funnel field, a daily capped shortlist, one-tap buttons that move the funnel, and a comment trail - so a second campaign is configuration rather than new code.",
      confirm: "Who besides the campaign owner should be receiving the UK Expansion Pulse now, and whether a second campaign has been set up from the same template."
    }
  ],
  fields: [
    {k:"Stage and Probability", v:"Written by <strong>Won</strong> (stage Customer, 100 per cent, closing today) and <strong>Lost</strong> (Closed Lost). Both also stop the follow-up cadence engine so a closed deal stops generating steps."},
    {k:"Lost Reason", v:"<strong>Required</strong> by the Lost confirm page - price, lead time, lost to competitor, no budget, no decision, stalled, other. Free text you add is kept as a comment, because the list cannot carry the story."},
    {k:"Next step date", v:"Written by <strong>Push +3d / +1m / +3m</strong>. A push of five days or fewer is counted in working days; anything longer is calendar days rolled forward to a weekday."},
    {k:"Close date, Probability, Forecast category", v:"Set together, in one tap, by the <strong>Apply</strong> button on Monday's AI timing proposals. The confirm page spells out every field before it changes."},
    {k:"Sales Rep (on the company)", v:"Written by <strong>Assign</strong>. This is the single field that decides whose pipeline a deal belongs to and whose inbox it lands in. The confirm page states the size of the move before you press it, and it writes a note on the company so the history survives the next reassignment."},
    {k:"Case Status", v:"Written by <strong>Resolve</strong>, by <strong>Snooze +3d</strong>, and indirectly by <strong>Handled - hide</strong>. It is also stamped automatically: an inbound customer email becomes a case at status New, and our first reply moves it to Acknowledged."},
    {k:"Received at, Acknowledged at, First response at, Resolved at", v:"Stamped for you - <em>Received at</em> from the email's own timestamp when the case is auto-created, the rest as the status moves. <strong>Never type them by hand.</strong> They are what produce the SLA medians in the Ops Pulse."},
    {k:"Note titled [Ops Pulse] or [Sales Pulse]", v:"Written by <strong>Comment</strong>. The title prefix is load-bearing - it is how the pulse reads comments back. Both pulses read both prefixes, so a comment on a quote-shaped case shows on both sides."}
  ],
  tips: [
    "The pulse is the only thing that changes CRM data by email. <strong>A reply does not.</strong> Replying is a fallback that files free text as a note - the buttons are the real mechanism.",
    "If your edition arrives with forty rows, the answer is not a longer email - it is that forty deals are mis-dated. Use <strong>+1m</strong> and <strong>+3m</strong> to say so.",
    "Two other automations run alongside the pulses: <strong>SLA stamping</strong> happens the moment you move a case's status, and a <strong>weekday nudge email</strong> lists any case still at status New with no owner. The goal is that the nudge email never arrives."
  ],
  mistakes: [
    {m:"Typing the update into a reply to the pulse, beside the quoted items.", fix:"Use the <strong>Comment</strong> button. Anything written beside the quoted history is stripped by mail sync and is gone before the engine sees it."},
    {m:"Treating the confirmation page as an error and closing it.", fix:"Press <strong>Confirm</strong>. The page exists so that Outlook's link pre-fetching cannot press your buttons for you - nothing is written until you confirm."},
    {m:"Pushing a dead deal's next-step date instead of closing it.", fix:"Press <strong>Lost</strong> and pick a reason. Before the button existed, not one of our closed-out quotes had ever been marked lost, because quotes die on the phone rather than by email."},
    {m:"Working from an old pulse you dug out of the archive.", fix:"Work from today's. Links are signed and <strong>expire after 21 days</strong>, and the list itself is already out of date."}
  ],
  confirms: [
    "What happens if a pulse button is pressed twice - whether the second press is a harmless no-op or re-applies the change.",
    "What happens if a pulse email is forwarded to someone outside the team and they press a button.",
    "Whether assigning a Task to someone in the CRM also triggers an in-app or email notification, or whether the Pulse is the only nudge they ever get."
  ],
  quiz: [
    {
      q: "How often does the Ops Pulse arrive?",
      o: ["Once a week, on Monday", "Twice a day on weekdays - morning and evening", "Once a day, in the early afternoon", "Only when there is an overdue case"],
      c: 1,
      e: "The Ops Pulse runs twice every weekday, in the morning and again in the evening. The evening edition shows what is still on the board to clear first thing tomorrow."
    },
    {
      q: "Why does a pulse button open a confirmation page instead of acting immediately?",
      o: ["Because the CRM is slow to respond", "To let you change your mind about the wording", "Because Outlook Safe Links pre-fetches URLs in email and would otherwise press the button for you", "Because every action needs a manager to approve it"],
      c: 2,
      e: "Microsoft Safe Links pre-fetches every URL in an email. A button that acted on the click alone would fire before you ever opened the email, so the write only happens when you press Confirm."
    },
    {
      q: "Which pulse button will not let you finish without picking a reason?",
      o: ["Won", "Lost", "Snooze +3d", "Handled - hide"],
      c: 1,
      e: "The Lost confirm page requires a reason from the list: price, lead time, lost to competitor, no budget, no decision, stalled or other. Free text is optional and is kept as a comment."
    },
    {
      q: "Where does a comment left through a pulse actually end up?",
      o: ["In a spreadsheet the automation keeps", "Only in the next pulse email", "As a CRM Note titled [Ops Pulse] or [Sales Pulse], attached to the record and its company", "As a reply in the sales@ mailbox"],
      c: 2,
      e: "Comments are stored as CRM Notes with an [Ops Pulse] or [Sales Pulse] title prefix. The prefix is how the pulse reads them back and re-renders them under the item."
    },
    {
      q: "How long does a comment keep appearing under its item in the pulse?",
      o: ["24 hours", "Until the next pulse is sent", "Until the item is resolved, won or lost", "Until someone deletes it"],
      c: 2,
      e: "Comments are sticky. A case comment renders until the case is resolved; a deal comment until the deal is Won or Lost. Snoozing a case or pushing a deal's date no longer hides it."
    },
    {
      q: "Which of these is NOT a button on an Ops Pulse row?",
      o: ["Create case", "Handled - hide", "Snooze +3d", "Mark deal Won"],
      c: 3,
      e: "Won and Lost are Sales Pulse deal buttons. Ops rows carry Create case, Handled - hide, Comment, Open in CRM, and on overdue cases Resolve and Snooze +3d."
    },
    {
      q: "Which edition of the Sales Pulse carries the data-quality audit and a pipeline attachment?",
      o: ["Monday's", "Wednesday's", "Friday's", "Every edition"],
      c: 0,
      e: "Monday's Sales Pulse adds the weekly data check: a line-by-line pipeline file attached, a per-stage reconciliation, and AI timing proposals with a one-tap Apply."
    },
    {
      q: "In the Tuesday pipeline sweep, which source wins on a deal's amount and probability?",
      o: ["The CRM always wins", "The rep's pipeline spreadsheet wins", "Whichever was edited most recently", "Neither - the row is flagged for review"],
      c: 1,
      e: "The sheet wins on amount, probability and next step. The CRM wins on stage and close date, so the sweep never invents a speculative date or silently moves a deal's stage."
    },
    {
      q: "How long do the buttons in a pulse email keep working?",
      o: ["Forever", "Until the next pulse is sent", "21 days", "One working day"],
      c: 2,
      e: "Every button link is signed and expires after 21 days. Work from today's pulse rather than an archived one."
    },
    {
      q: "What does pressing Handled - hide on an awaiting-reply row do?",
      o: ["Hides the thread until the customer mails again", "Hides it permanently and resolves its auto-created case if that case is still New or Acknowledged", "Deletes the email from the mailbox", "Assigns the thread to a colleague"],
      c: 1,
      e: "Handled means handled - the thread is suppressed permanently. A deliberately parked case at In Progress or a Waiting status is left open, and a genuinely new request from the same sender still arrives as fresh mail."
    }
  ],
  flashcards: [
    {q:"The three pulses and their timings?", a:"Ops Pulse - twice a day on weekdays, morning and evening. Sales Pulse - weekday mornings, with Monday's edition carrying the data audit. UK Expansion Pulse - early afternoon, for the Urovo UK campaign."},
    {q:"Why does a button open a page instead of acting?", a:"Outlook Safe Links pre-fetches every URL in email. The write happens only when you press Confirm, so pre-fetching cannot act on your behalf."},
    {q:"How long do pulse button links last?", a:"21 days, then they expire and you have to make the change in the CRM."},
    {q:"How do you leave a note through a pulse?", a:"The Comment button - never a reply. Mail sync strips anything written beside the quoted items."},
    {q:"What does Lost require?", a:"A reason from the list: price, lead time, lost to competitor, no budget, no decision, stalled or other. Won and Lost both stop the follow-up cadence."},
    {q:"Which field does Assign write, and why does it matter?", a:"Sales Rep on the company - the single field that decides whose pipeline a deal is in and whose pulse it lands in."},
    {q:"Which source wins in the Tuesday pipeline sweep?", a:"The rep's sheet wins on amount, probability and next step. The CRM wins on stage and close date."},
    {q:"Which two automations run alongside the pulses?", a:"Automatic case SLA stamping when a status moves, and a weekday nudge email listing any case still New with no owner."}
  ],
  scenarios: [
    {
      scenario: "A customer rings to say they have gone with a competitor on a quote you sent last month. The deal is sitting in your Sales Pulse under next steps due.",
      q: "What do you do?",
      o: ["Push the next step out three months so it stops appearing", "Press Lost on the pulse row, pick lost to competitor, and add the detail as free text", "Reply to the pulse email explaining what happened", "Leave it - it will fall off the list eventually"],
      c: 1,
      e: "Lost with a reason takes ten seconds and is worth gold. Pushing the date leaves a zombie in the pipeline; replying to the pulse loses the text; and nothing ever falls off by itself."
    },
    {
      scenario: "At the daily ops meeting the team agrees that a customer's delivery chase is blocked on the supplier until Thursday. The case is showing as overdue in the Ops Pulse.",
      q: "What is the right way to record that?",
      o: ["Press Resolve so the tile reads zero", "Press Snooze +3d and press Comment to record what was agreed", "Email the team a summary", "Do nothing until Thursday"],
      c: 1,
      e: "Snooze pushes the nag out, and the comment stays under the item on every pulse until the case is resolved - so nobody re-asks. Resolving a case that is not actually resolved makes the tile lie."
    }
  ]
}
