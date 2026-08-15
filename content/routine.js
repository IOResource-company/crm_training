{
  slug: "routine",
  name: "Recommended Daily Routine",
  track: "all",
  tagline: "Two routines, side by side - a salesperson's day and a Customer Operations day - plus the weekly rhythm they both sit inside.",
  intro: "<p>The CRM only works if it is fed as you go. Five minutes a day beats an hour on Friday, because a deal you update walking out of the meeting is accurate and a deal you update three days later is a guess.</p><p>This module gives <strong>two</strong> routines, because the guide serves two audiences. Sales runs on opportunities, next steps and the Sales Pulse. Customer Operations runs on the shared sales@ inbox, the case queue and the twice-daily Ops Pulse. Read your own routine, then skim the other one so you know what your colleagues are working from.</p><p>The two meet in one place: the four non-negotiables. Every live thing in the CRM has <strong>one owner, one status, one next action and one date</strong>. If that is true, the dashboards, the forecast and the Monday meeting all take care of themselves.</p>",
  shots: [
    {key:"command-centre", cap:"Command Centre dashboard as it looks first thing in the morning - capture with the value tiles cropped or blurred, leaving the case and next-action widgets readable."}
  ],
  howtos: [
    {
      title: "A salesperson's day",
      when: "Every working day - about five minutes at each end, and seconds at a time in between",
      steps: [
        "<strong>Start of day.</strong> Open your <strong>Sales Pulse</strong> first. It already lists your next steps due and overdue, oldest first, plus the three to five deals the AI read says are worth touching today.",
        "<strong>Start of day.</strong> Check your outstanding <strong>Tasks</strong>, including any actions carried over from the weekly sales meeting - they appear in the pulse under meeting actions with Done, Carry and Answer buttons.",
        "<strong>Start of day.</strong> Open <strong>Opportunities - Open Pipeline</strong> for anything the pulse could not show, and glance at new enquiries that came in overnight.",
        "<strong>During the day.</strong> The moment an interaction happens, update the record. Walking out of a meeting: thirty seconds on the phone to move the <strong>stage</strong> and write the <strong>next step</strong> and its <strong>date</strong>.",
        "<strong>During the day.</strong> A conversation that could become an order becomes an <strong>Opportunity the same day</strong>, even a one-liner. If it is not in the CRM it does not exist at the weekly review.",
        "<strong>During the day.</strong> A new contact goes into <strong>People</strong> as they appear, linked to their company - otherwise their emails are stored but show nowhere.",
        "<strong>During the day.</strong> Fill the <strong>amount</strong> as soon as you know it. A rough estimate now beats a precise blank forever.",
        "<strong>End of day.</strong> Every deal you touched is at an honest stage, with a next step and a date. Any deal that died today is <strong>Closed Lost</strong> with a reason.",
        "<strong>End of day.</strong> Meeting notes and call summaries are written up as <strong>Notes</strong> on the company or the deal, and to-dos as <strong>Tasks</strong> with a due date.",
        "<strong>End of day.</strong> Nothing you promised a customer is missing a follow-up. If the follow-up is months out, set the date months out rather than leaving it to nag."
      ],
      shot: {key:"sales-pulse-email", cap:"The Sales Pulse next-steps-due section as a salesperson would see it first thing - crop or blur the amount column."},
      important: "<strong>Amount, stage, next step, date.</strong> If every open deal has those four, everything else in the sales process works. If any is missing, the deal is not really in the active pipeline.",
      tip: "Update as you go, not on Fridays. Batching it up at the end of the week is how deals rot - and it is also how the pipeline sweep and the forecast end up arguing with each other.",
      mistake: "Keeping the next action in your head or your own inbox. Cover, handover and the weekly review all depend on the record."
    },
    {
      title: "A Customer Operations day",
      when: "Every working day, over the cover hours - the inbox is watched continuously, at minimum every 30 to 60 minutes",
      steps: [
        "<strong>Start of day, about ten minutes.</strong> Open the morning <strong>Ops Pulse</strong>. It hands you the board: emails awaiting a reply, overdue cases, and what came in since the evening edition.",
        "<strong>Start of day.</strong> Drive <strong>Unowned cases</strong> and <strong>Overdue cases</strong> to zero. Claim anything unowned - whoever opens an item owns it.",
        "<strong>Start of day.</strong> Acknowledge every new item within <strong>1 working hour</strong>, or <strong>15 minutes</strong> if it is urgent. An acknowledgement is not an answer: say that we own it, what we are doing, and when they will hear next.",
        "<strong>Start of day.</strong> Scan the shared inbox <strong>Junk folder</strong> once a day for misrouted enquiries and orders before anything is deleted.",
        "<strong>During the day.</strong> Give every new request a <strong>first meaningful response within 4 working hours</strong>. Moving the case status is the update - the SLA timestamps are stamped for you.",
        "<strong>During the day.</strong> Work the <strong>Waiting</strong> statuses. Waiting - Customer, Waiting - Supplier and Waiting - Internal are parking spaces with a chase attached, not places to hide an item.",
        "<strong>During the day.</strong> Chase supplier and courier dependencies rather than waiting for them, and update the customer at the promised interval even when nothing has changed yet.",
        "<strong>During the day.</strong> Every quotation, pro forma or order number goes in the <strong>email subject line</strong> - that is what links the mail to the right record.",
        "<strong>Midday.</strong> Sweep the inbox and the open cases and re-prioritise. Escalate anything blocked or slipping early rather than at the deadline.",
        "<strong>End of day.</strong> Read the evening <strong>Ops Pulse</strong>. Nothing is left unowned, every open item has a next action and a due date, and anything urgent or at risk has been escalated."
      ],
      shot: {key:"ops-pulse-email", cap:"The evening Ops Pulse showing the three tiles - crop or blur customer email addresses."},
      important: "<strong>The case owner stays responsible until the customer is satisfied</strong>, even when someone else is doing part of the work. Handing over a task never hands over the case.",
      tip: "The target is both Ops Pulse tiles reading zero twice a day. That is what world class looks like for a small team - not a wall of dashboards.",
      mistake: "Marking a case Resolved to make a tile read zero when the customer has not actually been sorted. The status drives the SLA stamps, so a dishonest status makes the KPIs lie."
    },
    {
      title: "The weekly rhythm",
      when: "The fixed points in the week that both routines hang off",
      steps: [
        "<strong>Monday.</strong> The Sales Pulse carries the <strong>data-quality audit</strong>: a line-by-line pipeline file attached, a per-stage reconciliation, and AI timing proposals you can apply in one tap. Use it to clear deals with no amount, no next step or a stale date.",
        "<strong>Monday.</strong> Run the pipeline review from the CRM live - the stage board first for shape, then the deals closing this period line by line, then the stale list. For each deal: what has changed, what is the next step, what do you need.",
        "<strong>Tuesday.</strong> The <strong>pipeline sweep</strong> runs. The reps' spreadsheets from the sales-meetings folder are swept into opportunities. The <strong>sheet wins</strong> on amount, probability and next step; the <strong>CRM wins</strong> on stage and close date. Rows the sweep will not write without a human decision become a review task, and you answer them from the Sales Pulse.",
        "<strong>Weekly sales meeting.</strong> The minutes are ingested and become <strong>Tasks</strong> in the CRM, grouped by owner, and they appear in the Sales Pulse as meeting actions with Done, Carry and Answer buttons. An action carried repeatedly is flagged.",
        "<strong>Weekly, Customer Operations.</strong> Clear or escalate everything past its due date, work down Waiting - Supplier so every item has a fresh chase, and scan recently resolved cases for recurring themes.",
        "<strong>Friday.</strong> The <strong>weekly mail digest</strong> is produced from the sales@ mailbox and filed as a document in the Weekly Summaries folder - orders received, orders placed with suppliers, deliveries confirmed. It is read-only and never writes to the CRM.",
        "<strong>Monthly.</strong> Work the Going Quiet and Win-Back account lists, and drive the data-gap views to zero."
      ],
      important: "The Tuesday sweep never marks a deal <strong>Won</strong> and never deletes anything. If a quote vanishes from a rep's sheet it may be closed out as lost with a sweep marker - so if a deal really was won, close it as won yourself rather than letting it disappear from the sheet.",
      tip: "If the sweep stops running, the Sales Pulse shows an amber freshness strip so you know the values are drifting from the reps' sheets. Do not quote a pipeline figure while that strip is showing.",
      confirm: "The exact day and time the weekly sales meeting runs now, and who is responsible for getting the minutes ingested each week."
    },
    {
      title: "Catch up after a day out of the office",
      when: "First thing after a day on the road, a day off, or coming back from holiday",
      steps: [
        "Start from the <strong>most recent</strong> pulse, not the oldest unread one - it already reflects the current state, and old button links expire after 21 days.",
        "Clear anything showing as overdue first, then anything with no next step.",
        "Check the <strong>Under discussion</strong> section - those are items the team has commented on, and the comments tell you what was agreed while you were away.",
        "Sales: run through your open deals and re-date honestly. A slipped date is fine; a wrong date is not.",
        "Operations: check that nothing sat unowned or unacknowledged while you were out, and that your named backup did not leave anything parked.",
        "Write up anything that happened away from the desk as <strong>Notes</strong> on the relevant records before you do anything else."
      ],
      tip: "Do not try to read every pulse you missed. One current pulse plus the overdue views will always beat working backwards through a week of email.",
      mistake: "Working from a week-old pulse. The list is stale and the buttons may have expired."
    }
  ],
  fields: [
    {k:"Amount", v:"Your best estimate of the deal value to us, excluding VAT. Update it when the quote firms up. A rough figure now beats a precise blank forever - but never invent one."},
    {k:"Stage", v:"A fact about the deal, not a feeling: New, Screening, Meeting, Proposal, then Customer (won) or Closed Lost. Move it when the thing has actually happened."},
    {k:"Next step", v:'One concrete action, written so a colleague could do it - not just "follow up". Write the next one as soon as the last is done.'},
    {k:"Next step date", v:"When that action falls due. For a long-cycle deal, set it months out - that is a real cadence, not a missed deadline."},
    {k:"Sales Rep (company)", v:"The account owner. One name, always filled. Unassigned is a to-do, not a home - and it is the field that decides whose Sales Pulse the deal appears in."},
    {k:"Case Status", v:"New, Acknowledged, In Progress, Waiting - Customer, Waiting - Supplier, Waiting - Internal, Resolved, Closed. Moving it is the update, and it stamps the SLA timestamps for you."},
    {k:"Case Owner", v:"One named person, from first contact until the customer is satisfied. Target for the unowned view is zero, every morning."},
    {k:"Case Next action and Due date", v:"Every open case carries both, before you move on to the next one. They are what the overdue view and the Ops Pulse read."}
  ],
  tips: [
    "The whole sales discipline in four words: <strong>amount, stage, next step, date</strong>. The whole operations discipline in four: <strong>owner, status, next action, due date</strong>.",
    "Formal work goes through <strong>sales@</strong> with the salesperson copied, and the document number goes in the subject line. That one habit is what links email to the right CRM record.",
    "Do the update at the moment, not after the event. Thirty seconds in the car park is worth more than an hour on Friday afternoon."
  ],
  mistakes: [
    {m:"Batching all CRM updates into Friday afternoon.", fix:"Update as you go. A deal updated on the day is accurate; a deal updated on Friday is a reconstruction, and half of it will be wrong."},
    {m:"Leaving an item with no next action or due date because it is 'obviously' with someone else.", fix:"Set the next action and the date anyway, and use the right Waiting status. An item with no date is invisible to every view and every pulse."},
    {m:"Reading the pulse and then doing the work in the CRM without pressing the buttons.", fix:"Press the button. It writes the same change and it clears the row, so the item does not come back tomorrow."},
    {m:"Ending the day with a case still unowned or still at status New.", fix:"Claim it and acknowledge it. A weekday nudge email lists any case still New with no owner - the aim is that it never arrives."}
  ],
  confirms: [
    "The current agreed cover hours for the sales@ inbox and who the named backup is for each person.",
    "Whether the daily ten-minute Customer Operations huddle is still running, and at what time.",
    "Whether assigning a Task to a colleague notifies them in the CRM or by email, or whether the Pulse is the only nudge they get."
  ],
  quiz: [
    {
      q: "What are the four things every open opportunity must have?",
      o: ["Owner, priority, tier and vertical", "Amount, stage, next step and next step date", "Quote ref, contact, competitor and lead source", "Close date, probability, forecast category and weighted value"],
      c: 1,
      e: "Amount, stage, next step and date. With those four in place the pipeline is readable and the forecast is possible; without them the deal is not really in the active pipeline."
    },
    {
      q: "How quickly should a new inbound customer item be acknowledged?",
      o: ["Within 1 working hour, or 15 minutes if it is urgent", "By the end of the day", "Within 4 working hours", "Within one working day"],
      c: 0,
      e: "Acknowledge within 1 working hour, 15 minutes for an urgent operational problem. The first meaningful response follows within 4 working hours."
    },
    {
      q: "What is the target for the first meaningful response on a case?",
      o: ["1 working hour", "4 working hours", "Same day", "2 working days"],
      c: 1,
      e: "Acknowledgement within 1 working hour, first meaningful response within 4 working hours. Both are measured from the case timestamps, which are stamped automatically."
    },
    {
      q: "In the Tuesday pipeline sweep, which side wins on stage and close date?",
      o: ["The rep's spreadsheet", "The CRM", "Whichever is more recent", "Neither - both are flagged"],
      c: 1,
      e: "The CRM wins on stage and close date; the sheet wins on amount, probability and next step. That way the sweep never silently moves a deal's stage or invents a close date."
    },
    {
      q: "What happens to the actions agreed at the weekly sales meeting?",
      o: ["They stay in the minutes document", "They become Tasks in the CRM and appear in the Sales Pulse", "They are emailed round as a list", "They become new opportunities"],
      c: 1,
      e: "The minutes are ingested into the CRM as Tasks grouped by owner, and they render in the Sales Pulse with Done, Carry and Answer buttons."
    },
    {
      q: "You take a phone call that could turn into an order. When should the opportunity be created?",
      o: ["The same day", "At the weekly review", "Once a formal quote has been issued", "Only if the value is above a threshold"],
      c: 0,
      e: "Same day, even as a one-liner. If it is not in the CRM it does not exist at the review - and a rough amount can be refined later."
    },
    {
      q: "Which two views should a Customer Operations day start and end on?",
      o: ["Top Prizes and Open Pipeline", "Unowned cases and Overdue cases", "Going Quiet and Win-Back", "Kill the Zebra and Data Gaps"],
      c: 1,
      e: "Drive Unowned cases and Overdue cases to zero at the start of the day, and check both again at the end. The Ops Pulse gives you the same picture in email form."
    },
    {
      q: "What is produced on Friday from the sales@ mailbox?",
      o: ["A weekly mail digest document filed in the Weekly Summaries folder", "A bulk update to every opportunity", "A pipeline sweep of the reps' spreadsheets", "The data-quality audit"],
      c: 0,
      e: "The Friday weekly mail digest summarises orders received, supplier orders and deliveries into a document. It is read-only - it never writes to the CRM. The audit is Monday's and the sweep is Tuesday's."
    },
    {
      q: "A deal will genuinely not close until next year. What is the right thing to do?",
      o: ["Leave the next-step date in the past so it keeps appearing", "Close it as lost and recreate it later", "Set the next-step date months out to its real cadence", "Remove the next step altogether"],
      c: 2,
      e: "A long-cycle deal is not overdue, it is mis-dated. Push the date out to the real touch cadence - the pulse gives you plus-one-month and plus-three-month buttons for exactly this."
    },
    {
      q: "You are back after two days out and there are four unread pulse emails.",
      o: ["Work through them oldest first", "Work from the most recent one plus the overdue views", "Ignore them all and start fresh", "Forward them to a colleague to action"],
      c: 1,
      e: "The newest pulse already reflects the current state, and older button links go stale - they expire after 21 days. Work from today's edition and the overdue views."
    }
  ],
  flashcards: [
    {q:"The sales discipline in four words?", a:"Amount, stage, next step, date - on every open deal."},
    {q:"The operations discipline in four words?", a:"One owner, one status, one next action, one due date - on every open item."},
    {q:"Acknowledge and first-response SLAs?", a:"Acknowledge within 1 working hour, 15 minutes if urgent. First meaningful response within 4 working hours."},
    {q:"What does a salesperson do walking out of a meeting?", a:"Thirty seconds on the phone: move the stage, write the next step and set its date."},
    {q:"What runs on Monday, Tuesday and Friday?", a:"Monday - the data-quality audit in the Sales Pulse plus the pipeline review. Tuesday - the pipeline sweep from the reps' sheets. Friday - the weekly mail digest document."},
    {q:"Who wins in the Tuesday sweep?", a:"The sheet wins on amount, probability and next step. The CRM wins on stage and close date."},
    {q:"What must be true at the end of a Customer Operations day?", a:"Nothing unowned, every open item has a next action and a due date, and anything at risk has been escalated."},
    {q:"Where do call notes and meeting summaries go?", a:"Notes on the company or the deal. To-dos go in as Tasks with a due date. Your head is not a storage location."}
  ],
  scenarios: [
    {
      scenario: "It is 4:45pm. You have had three customer calls today, none of which you have written up, and you have a deal that moved from a quote to a verbal yes.",
      q: "What is the right end-of-day move?",
      o: ["Write it all up on Friday when you have a clear hour", "Update the deal's stage, next step and date now, and add the call notes as Notes", "Email yourself a reminder", "Just update the deal - the calls were routine"],
      c: 1,
      e: "End of day means opportunities are current and notes are written up. Friday batching is how deals rot, and a routine call today is the context somebody needs next month."
    },
    {
      scenario: "A customer emails at 9:10am asking for a delivery date. The answer depends on a supplier who will not reply until tomorrow.",
      q: "What does the Customer Operations routine say to do?",
      o: ["Wait for the supplier, then reply with the full answer", "Acknowledge within the hour saying we own it and when they will hear, set the case to Waiting - Supplier with a next action and date, and chase the supplier", "Forward the email to the salesperson", "Mark the case Resolved and reopen it when the supplier replies"],
      c: 1,
      e: "An acknowledgement is not an answer. Tell them we have it, what we are doing and when they will hear next - then park it honestly at Waiting - Supplier with a chase, and meet the update time you promised."
    }
  ]
}
