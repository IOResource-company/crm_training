{
  slug: "activities",
  name: "Tasks, Notes & Follow-Ups",
  track: "all",
  tagline: "If it is not on the record it did not happen - and every open deal needs a live next step.",
  intro: "<p>There are three places activity lives in our CRM. <strong>Notes</strong> hold what was said. <strong>Tasks</strong> hold what has to be done, by when and by whom. And on an opportunity, <strong>Next Step</strong> and <strong>Next Step Date</strong> hold the one thing that happens next. Everything else &mdash; emails, cases, the daily Pulse, the follow-up cadences &mdash; hangs off those three.</p><p>A lot of tasks arrive on their own. The follow-up <strong>cadence engine</strong> lays out timed chase tasks for cold prospects and quiet quotes, and the <strong>weekly sales meeting</strong> turns its action register into tasks that carry forward until they are done. Knowing which tasks the machine wrote and which are yours saves a lot of confusion.</p><p>The golden rule sits above all of it: <strong>every open opportunity has a current next step and a date.</strong> Not a vague intention &mdash; one concrete action with a name on it and a day it will happen.</p>",
  shots: [
    {key:"task-list", cap:"The Tasks list showing a mix of hand-written tasks and automated ones - include at least one titled 'Sales mtg W.. #.. - ...' and one cadence task, with the Due date and Assignee columns visible"},
    {key:"note-on-record", cap:"A Company or Opportunity record with its Notes section open, showing two or three notes including one titled '[Sales Pulse] <date> - <record>'"}
  ],
  howtos: [
    {
      title: "Record a call, a meeting or a visit",
      when: "You have just come off a call, out of a customer meeting, or finished a demo or site visit",
      steps: [
        "Open the record it belongs to. Relationship conversation &rarr; the <strong>Company</strong>. Anything about a specific deal &rarr; the <strong>Opportunity</strong>. A service problem &rarr; the <strong>Case</strong>.",
        "Add a <strong>Note</strong>. Start the title with what it was, then who, then the subject: <em>Call &mdash; Rory Carroll &mdash; Apexa CX-1500 monthly batch</em>. That is what makes a list of notes readable six months later.",
        "In the body write what they actually said, what we committed to, and anything commercial &mdash; price expectations, the incumbent, timing, who else is involved. Write it for the colleague who covers you next week, not for yourself.",
        "If the conversation changed the deal, go to the opportunity and update <code>stage</code>, <code>nextStep</code>, <code>nextStepDate</code> and <code>lastActivityDate</code>. The note is the story; those fields are what the views and the forecast actually read.",
        "Anything that has to be <em>done</em> becomes a <strong>Task</strong> with a due date. A line buried in a note is not an action anybody will pick up.",
        "New contact in the room? Add them to <strong>People</strong> against the company while you remember. Their email history only lights up once they exist as a person."
      ],
      shot: {key:"note-on-record", cap:"Adding a note to an opportunity, with the title field visible so the naming pattern is clear"},
      tip: "Sixty seconds in the car park beats a perfect write-up on Friday that never gets written. Rough and same-day wins.",
      important: "We have no separate <em>log a call</em> object. Calls, meetings, site visits and supplier conversations are all <strong>Notes</strong> &mdash; the title is the only thing that tells them apart, so always lead the title with the type.",
      mistake: "Writing the note but leaving the deal untouched, so the pipeline still shows a next step that happened a fortnight ago.",
      confirm: "The exact control for adding a Note from a record page in our version, and whether one Note can be attached to several records from the UI the way our automations do it through the API."
    },
    {
      title: "Create a task or a follow-up",
      when: "Something has to be done, on a date, by a person",
      steps: [
        "Create the task <strong>from the record it belongs to</strong> &mdash; the company, deal or case &mdash; so it links itself and shows up on that record.",
        "Title it as the action, plainly: <em>Send revised quote to Teresa &mdash; Trojan DT50S</em>. Not <em>Trojan</em>. Not <em>follow up</em>.",
        "Give it a <strong>due date</strong>. Our automations set task due times to 09:00 Irish on the due date, so a task dated today is due this morning.",
        "Assign it. <strong>Not everyone holds a CRM seat today</strong> &mdash; our automations assign tasks for Conn, Tara, Majella and Marcus to their proxy (Stephen) and put the real owner's name on the <strong>first line of the task body</strong>. Do the same by hand so nothing is lost when seats change.",
        "Use the body for context and links &mdash; the quote number, what was promised, what good looks like.",
        "Mark it done when it is genuinely done. If it slipped, move the due date rather than leaving it sitting red; a permanently overdue list stops being read."
      ],
      shot: {key:"task-list", cap:"The Tasks list sorted by due date, with overdue items at the top"},
      tip: "One task, one action. <em>Chase the CBE rollout</em> is three tasks pretending to be one, and it will sit there for a month.",
      important: "A task is not a substitute for the deal's <code>nextStep</code>. The pipeline views, the Sales Pulse and the Monday review all read <strong>Next Step</strong> and <strong>Next Step Date</strong> on the opportunity &mdash; a task alone will not keep a deal off the hygiene lists.",
      mistake: "Assigning a task to someone who has no CRM seat, so nobody ever sees it.",
      confirm: "Which task statuses our version offers in the UI (our automations write TODO and DONE), and exactly who holds a CRM seat today."
    },
    {
      title: "Put a prospect or a quiet quote on a follow-up cadence",
      when: "A cold Urovo prospect worth a proper sequence, or a quote that has gone quiet",
      steps: [
        "Open the <strong>Person</strong> (a cold prospect) or the <strong>Opportunity</strong> (a quiet quote).",
        "Set the <strong>Outreach Cadence</strong> field. <em>Urovo cold outreach</em> &mdash; 6 touches over about 3 weeks, on People. <em>Quote follow-up</em> &mdash; 4 touches over 2 weeks, on Opportunities or People.",
        "That is the whole job. On the next weekday run the engine creates <strong>one Task per touch</strong> with a real due date, links it to the record, and stamps <strong>Cadence Status = Active</strong>.",
        "<strong>Urovo cold outreach</strong> runs: LinkedIn connect (day 0) &rarr; email (day 2) &rarr; call (day 6) &rarr; email (day 10) &rarr; call (day 16) &rarr; break-up email (day 21).",
        "<strong>Quote follow-up</strong> runs: email (day 0) &rarr; call (day 3) &rarr; email (day 7) &rarr; break-up email (day 14).",
        "Each task carries a paste-in template. Merge tokens are filled where we know them; any leftover <code>{{...}}</code> means finish that line by hand before sending. Email templates carry our identity and opt-out footer; call steps carry a screening reminder.",
        "Send every touch yourself from Outlook, then tick the task off &mdash; or use the buttons on the Sales Pulse: <strong>Logged</strong>, <strong>Snooze +3d</strong>, <strong>Replied &mdash; stop</strong>, <strong>Stop</strong>.",
        "It stops itself when the prospect replies, when the opportunity advances a stage or is won or lost, when the steps run out, or when you clear the field. To stop it by hand set <strong>Cadence Status = Stopped</strong>."
      ],
      tip: "Opt-out is one field. Set <strong>Do Not Contact</strong> on the Person (or the Company) and record <strong>Opted Out At</strong> &mdash; the engine will never generate or surface a step for them again. Do it the moment anyone asks.",
      important: "The cadence engine <strong>never emails a prospect</strong>. It only ever creates Tasks, and you send each touch from your own mailbox. That is deliberate: it keeps outreach personal and protects our sending domain.",
      mistake: "Leaving a cadence running on a deal that was actually closed over the phone, so the CRM keeps generating chase steps for a dead quote.",
      confirm: "Whether the Outreach Cadence and Cadence Status fields are on the Person and Opportunity record layouts for everyone, or only reachable through the field list."
    },
    {
      title: "See what you owe today",
      when: "First thing, every working morning",
      steps: [
        "Start with the <strong>Sales Pulse</strong> email. It lists next steps due and overdue, the outreach steps due today, and quote follow-ups &mdash; each line with one-tap buttons, so most of the morning can be cleared from the email itself.",
        "In the CRM, open <strong>Tasks</strong> and work anything due or overdue.",
        "Then the <strong>Next Actions</strong> view on Opportunities &mdash; open deals sorted by next-step date, with overdue and undated on top.",
        "Then <strong>Open Opps &mdash; No Next Action</strong>. That view should be empty. Anything in it is a deal nobody is driving.",
        "Customer Operations work the case side: <strong>All Open (SLA)</strong>, <strong>Overdue</strong> and <strong>Unowned</strong>, all of which should read zero by the end of the morning.",
        "Anything you cannot do today gets a <strong>new date</strong>, not silence. Push it (+3d, +1m or +3m from the Pulse) or edit the date on the record."
      ],
      tip: "A long-cycle deal is not overdue, it is mis-dated. Pushing a genuine 2027 rollout out by three months is good hygiene, not avoidance &mdash; leaving it nagging every day is what makes people stop reading the list.",
      mistake: "Treating the Pulse as a newsletter. It is a worklist with buttons; a reply to it does not change anything in the CRM.",
      confirm: "Which colleagues currently receive the Sales Pulse and the Ops Pulse - the recipient list is configured outside the CRM."
    },
    {
      title: "Find recent activity on a customer",
      when: "Before a call, or when you pick up somebody else's account",
      steps: [
        "Open the <strong>Company</strong> and read in this order: the fields panel (Sales Rep, Account Status, Last Order Date) &rarr; Notes &rarr; Tasks &rarr; linked Opportunities and Cases &rarr; the email list.",
        "Notes titled <strong>[Ops Pulse]</strong> or <strong>[Sales Pulse] &lt;date&gt; &mdash; &lt;record&gt;</strong> are comments people typed into the daily Pulse emails. They are real history, often the most recent word on an account &mdash; read them.",
        "Tasks titled <strong>Sales mtg W28 #7 &mdash; ...</strong> come from the weekly sales meeting action register. The number is that action's permanent id; if it was not finished it is carried into the next week keeping the same number, with a <em>Carried to W29</em> line added.",
        "The email list gives you <strong>subjects, participants and dates only</strong> &mdash; not the message text. If something important was said in an email, it should already be in a Note. If it is not, put it there.",
        "Then open the live <strong>Opportunity</strong> for the deal-level story: Stage, Next Step, Next Step Date, Last Activity Date and any notes attached to the deal itself.",
        "For a service history, open the <strong>Cases</strong> on the account and read the resolution notes."
      ],
      shot: {key:"note-on-record", cap:"A company record showing Pulse-titled notes alongside hand-written call notes"},
      tip: "If an action has been carried three weeks running, that is the escalation signal: kill it or commit to a date. Do not carry it a fourth time.",
      confirm: "The exact names and order of the sections or tabs on a Company record page in our version, and whether Notes and Tasks appear on the record or only in the global lists."
    }
  ],
  fields: [
    {k:"Task title", v:"The action, in plain imperative English, specific enough to act on without opening it: <em>Send revised quote to Teresa &mdash; Trojan DT50S</em>."},
    {k:"Task due date", v:"The day it will genuinely be done. Automated tasks are set to 09:00 Irish time on their due date, so today's task is due this morning."},
    {k:"Task assignee", v:"The CRM user who will do it. Where the real owner has no CRM seat, tasks are assigned to their proxy and the real owner's name goes on the <strong>first line of the task body</strong>."},
    {k:"Task body", v:"Context: the quote number, what was promised, what good looks like. On automated tasks it also holds the paste-in template and the carry-forward history."},
    {k:"Note title", v:"Type, then who, then subject &mdash; <em>Meeting &mdash; Dominic Feeney &mdash; Urovo handheld requirement</em>. Pulse comments carry a fixed <strong>[Ops Pulse]</strong> or <strong>[Sales Pulse]</strong> prefix that must never be edited."},
    {k:"Note body", v:"What was said, what we committed to, the commercial context. Everything that only exists in an email body belongs here, because email bodies are not readable in the CRM."},
    {k:"Outreach Cadence", v:"On a Person or Opportunity: <em>Urovo cold outreach</em> or <em>Quote follow-up</em>. Setting it is what enrols the record and generates the task series."},
    {k:"Cadence Status", v:"Active while the sequence runs; Replied or Stopped ends it and deletes the remaining planned tasks. Set it to Stopped by hand to halt a cadence immediately."}
  ],
  tips: [
    "<strong>The golden rule:</strong> every open opportunity has a current next step and a next-step date. If you do only one thing in the CRM this week, make that true for your deals.",
    "Write Pulse comments with the <strong>Comment</strong> button on the item, not by replying beside the quoted lines of the email. Only what you type at the very top of a reply survives &mdash; comments written down among the quoted items have been lost more than once.",
    "A Pulse comment stays visible beside its item until the case is <strong>Resolved</strong> or the deal is <strong>Won or Lost</strong>. Snoozing or re-dating no longer hides it &mdash; so if you want it off the list, finish the thing."
  ],
  mistakes: [
    {m:"Keeping it in your head, your notebook or your sent items.", fix:"Notes and Tasks are how cover, handover and the Monday review work. If you were out tomorrow, could a colleague run your account from the record alone? That is the test."},
    {m:"Editing or renaming a note whose title starts with [Ops Pulse] or [Sales Pulse].", fix:"That prefix is load-bearing &mdash; the Pulse reads those notes back by their title. Leave the title alone and add a new note if you want to say more."},
    {m:"Recording everything, including every one-line acknowledgement.", fix:"Record decisions, commitments, commercial facts, competitor intelligence and anything a colleague would need. Routine traffic is already on the record as an email &mdash; you do not need to narrate it."},
    {m:"Ticking a cadence task done without sending the touch, to clear the list.", fix:"Snooze it (+3d) or stop the cadence honestly. A cadence marked complete that never happened is worse than no cadence at all."}
  ],
  confirms: [
    "Whether team members without a CRM seat can see tasks assigned to them anywhere, and what the plan is for giving Conn, Tara, Majella and Marcus their own seats.",
    "Whether the weekly sales-meeting minutes ingest runs to a schedule or is run by hand each week, and who owns running it.",
    "Whether Notes in our version support file attachments, and where a quote PDF or spec sheet should be stored if not.",
    "Whether the CRM sends any task reminder or notification of its own, or whether the daily Pulse email is the only nudge.",
    "The exact wording of the Outreach Cadence options as they appear in the picker on a record."
  ],
  quiz: [
    {
      q: "What does the sales cadence engine actually do when you set Outreach Cadence on a person?",
      o: ["It emails the prospect automatically on a schedule", "It creates a series of Tasks with due dates for you to action", "It moves the opportunity through the stages", "It adds the person to a mailing list"],
      c: 1,
      e: "The engine is an internal nudge only. It creates one Task per touch with a real due date and never emails a prospect - you send every touch yourself from Outlook."
    },
    {
      q: "A task is titled 'Sales mtg W28 #7 - Chase Urovo on DT50S lead times'. Where did it come from?",
      o: ["A colleague typed it in", "The weekly sales meeting action register, ingested automatically", "The cadence engine", "The Ops Pulse auto-case creation"],
      c: 1,
      e: "Weekly sales-meeting minutes are turned into Tasks automatically. The W-number is the meeting week and the #number is that action's permanent id, kept for its whole life even when it is carried forward."
    },
    {
      q: "An action from the sales meeting was not done. What happens to it?",
      o: ["It is deleted and has to be re-raised", "It is renumbered and re-created", "It is carried forward keeping its original number, with a 'Carried to' line and a new due date", "It closes automatically after a week"],
      c: 2,
      e: "Carry-forward never renumbers. W28 #7 stays W28 #7 for life, gaining a 'Carried to W29' line and a new due date. Three carries is the escalation signal - kill it or commit a date."
    },
    {
      q: "Where are comments typed into the daily Pulse emails stored?",
      o: ["In the Pulse system only", "As a Note on the record, titled with an [Ops Pulse] or [Sales Pulse] prefix", "As a Task assigned to Stephen", "In the case resolution note"],
      c: 1,
      e: "Every Pulse comment becomes a CRM Note titled '[Ops Pulse] ...' or '[Sales Pulse] <date> - <record>', attached to the record and its company. The title prefix is how the Pulse reads them back, so it must not be edited."
    },
    {
      q: "You had a long call that changed nothing about the deal's stage. What is the minimum you should do?",
      o: ["Nothing - no change means no record", "Add a Note and update Last Activity Date and the next step on the deal", "Move the stage forward so it does not look stale", "Create a task for yourself to write it up later"],
      c: 1,
      e: "Write the Note, stamp the activity and set the next action. Never move a stage you have not earned, and never leave the deal looking untouched when you spoke to them today."
    },
    {
      q: "A cadence is running on an opportunity and the customer rings to say they are going elsewhere. What should happen?",
      o: ["Delete the remaining tasks one by one", "Close the deal as Closed Lost with a lost reason - the cadence stops itself", "Leave it running in case they come back", "Set the tasks to done"],
      c: 1,
      e: "Closing the deal is the honest action, and the engine auto-stops a cadence when the opportunity is won or lost. Deleting tasks by hand treats the symptom and leaves the pipeline wrong."
    },
    {
      q: "Which of these is NOT something a Note is for?",
      o: ["A meeting write-up", "A commitment we made on price or lead time", "A dated action somebody has to complete", "Competitor intelligence picked up on a call"],
      c: 2,
      e: "A dated action is a Task. Actions buried inside notes do not appear on anyone's worklist and do not get done."
    },
    {
      q: "Why does a task for Conn or Majella often show as assigned to Stephen?",
      o: ["Stephen approves all tasks", "They do not hold a CRM seat today, so tasks go to their proxy with the real owner named in the task body", "It is a bug", "Their tasks are private"],
      c: 1,
      e: "Only some of the team hold CRM seats. Automations assign to the proxy and put the real owner's name verbatim on the first line of the body - do the same when you create tasks by hand."
    }
  ],
  flashcards: [
    {q: "The golden rule for open deals", a: "Every open opportunity has a current next step and a next-step date."},
    {q: "Urovo cold outreach cadence", a: "6 touches over about 3 weeks: LinkedIn, email, call, email, call, break-up email."},
    {q: "Quote follow-up cadence", a: "4 touches over 2 weeks: email, call, email, break-up email."},
    {q: "Does the cadence engine email prospects?", a: "Never. It only creates Tasks; you send every touch yourself from Outlook."},
    {q: "How do you stop a cadence immediately?", a: "Set Cadence Status = Stopped, or hit Stop / Replied on the Sales Pulse. Winning or losing the deal also stops it."},
    {q: "Note title prefix you must never edit", a: "[Ops Pulse] or [Sales Pulse] - the Pulse reads those notes back by title."},
    {q: "Someone asks never to be contacted again", a: "Set Do Not Contact on the Person or Company and record Opted Out At. No cadence step will ever be generated or shown for them."},
    {q: "Note vs Task", a: "A Note is what was said. A Task is what has to be done, by when, by whom."}
  ],
  scenarios: [
    {
      scenario: "You come out of a site visit at a reseller. They confirmed a 40-unit refresh for the autumn, asked for revised pricing by Friday, and mentioned their incumbent is quoting aggressively.",
      q: "What is the right set of CRM actions before you drive away?",
      o: ["Write one long note on the company covering everything", "Note on the opportunity, update stage / next step / next-step date / last activity, create a dated task for the revised pricing, and record the competitor on the deal", "Create a task to write it all up on Friday", "Email yourself a summary so it syncs into the CRM"],
      c: 1,
      e: "The note carries the story, the fields carry the state the views read, and the pricing commitment is a dated task. The competitor detail belongs on the deal so it counts on the displacement scoreboard. Emailing yourself achieves none of this - email bodies are not readable in the CRM."
    },
    {
      scenario: "A quote you sent three weeks ago has gone silent. The customer has not replied to two emails.",
      q: "What is the best use of the CRM here?",
      o: ["Set Outreach Cadence = Quote follow-up on the opportunity and work the tasks it generates", "Close it as Closed Lost now", "Leave the next-step date in the past so it stays visible", "Set a reminder in Outlook instead"],
      c: 0,
      e: "Quote follow-up lays out four dated touches over two weeks, ending in a break-up email, and stops itself the moment they reply or the deal moves. Leaving a date in the past just adds noise; closing it lost before the sequence has run is premature."
    }
  ]
}
