{
  slug: "mcp-access",
  name: "CRM in Claude",
  track: "all",
  tagline: "Ask the CRM questions in plain English",
  intro: "<p>As well as using the CRM in a browser, it can be connected to Claude so you can ask it things in plain English: <em>what is happening with this customer</em>, <em>show me my open opportunities</em>, <em>log this call as a note</em>. It reads and writes the real CRM, not a copy.</p><p>This module is the <strong>what and the why</strong>. The setup steps are deliberately not published here &mdash; access is granted per person by the administrator, and the instructions come with the key.</p>",
  howtos: [
    {
      title: "Ask for access",
      when: "You want to use the CRM from Claude rather than only in a browser.",
      steps: [
        "Ask <strong>Stephen</strong>. Access is issued per person &mdash; there is no self-service, and there is no shared team login for this.",
        "You will be given your own credential and the setup instructions to go with it.",
        "Set it up on your own machine only, following those instructions."
      ],
      important: "What you are given is personal to you and is never shared, forwarded or pasted into a document, a chat message or a shared folder. Treat it exactly like a password.",
      tip: "It works through <strong>Claude Code</strong>. The connector screens in the Claude desktop and web apps sign in a different way and will not take this kind of credential.",
      confirm: "Can Claude Cowork connect to our CRM, or is Claude Code the only route? Worth testing before telling the team it works in Cowork."
    },
    {
      title: "Use it safely",
      when: "Every time you use the CRM through Claude.",
      steps: [
        "Start with <strong>questions</strong>, not changes. Ask it to show you what it found and check that against the browser.",
        "Name the record you mean. <em>Update the next step on the C&amp;L handheld opportunity</em> beats <em>update that deal</em>.",
        "Before any change that touches more than one record, ask it to list exactly what it is about to do &mdash; then confirm."
      ],
      important: "Your access covers the <strong>whole workspace</strong>, read and write. It is not narrowed to your own accounts, so a careless bulk instruction is a real mess to undo.",
      mistake: "Letting it run a large tidy-up unsupervised because the first few answers looked right."
    },
    {
      title: "Tell someone if it goes wrong",
      when: "Your credential may have been seen by anyone else, or you are leaving the role.",
      steps: [
        "Tell Stephen straight away so it can be withdrawn and replaced.",
        "Do not wait to see whether anything bad actually happened."
      ],
      tip: "Nobody minds a false alarm. Access is issued individually precisely so one person's can be withdrawn without disturbing anyone else."
    }
  ],
  fields: [
    {k: "Who can have it", v: "Anyone who needs it, issued individually by the administrator."},
    {k: "What it covers", v: "The whole workspace, read <em>and</em> write &mdash; not just your own accounts."},
    {k: "Where it works", v: "Claude Code. Not the Claude desktop or web connector screens."},
    {k: "How to get it", v: "Ask Stephen. Setup instructions come with the credential."},
    {k: "How to treat it", v: "Like a password. Personal, never shared, reported immediately if exposed."}
  ],
  tips: [
    "<strong>Ask before you act.</strong> Get in the habit of having Claude show you what it found before asking it to change anything.",
    "<strong>It is the real CRM.</strong> Anything it changes is changed for everyone, immediately. There is no draft mode."
  ],
  mistakes: [
    {m: "Passing your access to a colleague who needs it too", fix: "Send them to Stephen for their own. Individual access is what allows one person to be withdrawn cleanly when they move on."},
    {m: "Assuming it can only touch what you can see in the CRM screens", fix: "It cannot be assumed. Access covers the whole workspace, so only ask for it if you would be trusted with all of it."},
    {m: "Running a bulk update on trust", fix: "Ask for the list of records and the exact change first, then confirm. Undoing a wrong bulk edit is far more work than reading a list."}
  ],
  confirms: [
    "How often should personal access be reviewed or renewed, and who owns that review?",
    "Is there an audit trail tying a change made this way back to the person who made it?",
    "The email sync is set to show subject and participants only. Does access of this kind nonetheless expose message content? This changes how sensitive it is, and the repo notes the setting may be display-only.",
    "Should the onboarding steps live in the CRM operations runbook so this is not tribal knowledge?"
  ],
  quiz: [
    {q: "How do you get CRM access inside Claude?", o: ["Set it up yourself from the CRM settings", "Ask Stephen - it is issued per person", "Use a shared team login", "It is switched on for everyone by default"], c: 1, e: "It is issued individually by the administrator, with the setup instructions supplied alongside it. There is no self-service and no shared login."},
    {q: "What does this access cover?", o: ["Only the accounts you own", "Only what you can see in the CRM screens", "The whole workspace, read and write", "Read-only access to everything"], c: 2, e: "The whole workspace, both read and write. It is not narrowed by your role in the interface, which is why it is only given to people trusted with all of it."},
    {q: "A colleague asks you to send them your access so they can try it. What do you do?", o: ["Send it - they work here too", "Send it but ask them not to share it further", "Point them at Stephen for their own", "Set it up on their machine using yours"], c: 2, e: "Individual access is the whole point: it lets one person be withdrawn without re-issuing everyone else's."},
    {q: "Which Claude app can connect to our CRM?", o: ["The web app at claude.ai", "The Claude desktop app", "Claude Code", "All of them"], c: 2, e: "Claude Code. The connector screens in the desktop and web apps authenticate differently and will not accept this kind of credential."},
    {q: "You have just been set up. What is a sensible first request?", o: ["A bulk tidy-up of your accounts", "A read-only question, checked against the browser", "Closing your stale opportunities", "Deleting a duplicate company"], c: 1, e: "Ask something read-only and confirm the answer matches what you see in the CRM. Be sure it is pointed at the right place before letting it write anything."},
    {q: "You think someone else may have seen your credential. What do you do?", o: ["Watch for anything odd and report it if it happens", "Tell Stephen straight away", "Change your CRM password", "Nothing, it is probably fine"], c: 1, e: "Report it immediately so it can be withdrawn and replaced. Nobody minds a false alarm; waiting for evidence is the expensive option."},
    {q: "Claude offers to update the next step on twenty-three opportunities at once. What is the right move?", o: ["Let it run - that is the point of connecting it", "Ask it to list the records and the exact change, then confirm", "Refuse and do them all by hand", "Run it and check the Sales Pulse tomorrow"], c: 1, e: "It has full write access, so a wrong bulk change is a real mess. Read the list first, then let it proceed."}
  ],
  flashcards: [
    {q: "How is CRM-in-Claude access granted?", a: "Individually by the administrator. Ask Stephen - no self-service, no shared login."},
    {q: "What does the access cover?", a: "The whole workspace, read and write - not just your own accounts."},
    {q: "Which Claude app works with it?", a: "Claude Code. Not the desktop or web connector screens."},
    {q: "A colleague wants to use yours. What do you say?", a: "No - send them to Stephen for their own, so access can be withdrawn individually."},
    {q: "You suspect your access has been exposed. First action?", a: "Tell Stephen immediately so it can be withdrawn and replaced. Do not wait for evidence."},
    {q: "Safe habit when using it?", a: "Read-only questions first; for anything that writes, get the list of records and the exact change and confirm."}
  ],
  scenarios: [
    {
      scenario: "A new colleague starts and asks for the same CRM-in-Claude setup you have. Yours works fine and you still have the details to hand.",
      q: "What is the right thing to do?",
      o: [
        "Send them yours - it already works, so there is nothing to debug",
        "Point them at Stephen so they are set up in their own name",
        "Let them use your machine when they need CRM data",
        "Tell them to stick to the browser"
      ],
      c: 1,
      e: "Access is issued per person on purpose. Sharing yours means their activity looks like yours, and neither of you can be withdrawn independently later."
    },
    {
      scenario: "You ask Claude to tidy up your accounts. It reports back that it is ready to change the next step on twenty-three opportunities.",
      q: "What do you do?",
      o: [
        "Let it run - that is what you asked for",
        "Ask it to list the twenty-three and the exact change, then confirm",
        "Cancel and do all twenty-three by hand",
        "Let it run and check tomorrow's Sales Pulse to see what happened"
      ],
      c: 1,
      e: "Ask to see the list and the change before it writes. Twenty-three wrong edits take far longer to unpick than one list takes to read."
    }
  ]
}
