function quickStartHTML(){
  const actions = [
    ['Sign in', 'Go to <strong>crm.ioresource.com</strong> and sign in with your IO Resource Microsoft account. If you are told your account is not a member, you need to be added &mdash; ask Stephen rather than trying again.'],
    ['Start from your own view', 'Do not start from the full list of everything. Open <strong>My Accounts</strong> for your rep code, and the <strong>Open Pipeline</strong> and <strong>Next Actions</strong> views. Those three answer most of your day.'],
    ['Always search before you create', 'Type the name into search first, and try a shortened version too. The data arrived with a few duplicate companies already in it &mdash; every extra one makes the numbers wrong.'],
    ['Know which record you are on', 'A <strong>Company</strong> is who we sell to and invoice. An <strong>End Customer</strong> is who the kit is actually for. Getting these the wrong way round is the easiest thing here to get wrong, and the most awkward to unpick later.'],
    ['Create the opportunity against the company', 'Never create a deal that is not linked to a company. Give it a name that reads at a glance, set the stage honestly, and put in a value and a close date even if both are estimates.'],
    ['Set a next step, every time', 'An opportunity with no <code>nextStep</code> and no <code>nextStepDate</code> is invisible to the follow-up views and will quietly rot. If you do nothing else on a deal, do this.'],
    ['Write it down or it did not happen', 'Synced email shows the subject and who it was to &mdash; <strong>not</strong> the message body. Anything that matters from a call or an email goes into a Note, in your words.'],
    ['Answer the Pulse email', 'The daily Pulse lists what needs you. The buttons in it update the CRM directly &mdash; won, lost, push the next step, or leave a comment &mdash; without opening a browser.'],
    ['Close deals properly', 'Won moves to <strong>Customer</strong>. Lost moves to <strong>Closed Lost</strong> <em>and</em> needs a <code>lostReason</code>. A blank lost reason teaches us nothing.'],
    ['Remember what the CRM is not', 'Orders, invoices and credit notes live in <strong>Intact</strong>. The CRM holds the relationship, the pipeline and the control layer. The two are tied together by the account code and by the document number in the email subject.']
  ];
  return `<h2 class="sech">Quick Start</h2>
  <p class="sub">The ten things that cover most of what you will do. Read this once, start working, and come back to the modules when you need the detail.</p>
  <div class="banner banner-blue"><h3>What this CRM is for</h3>
    <p>It is the shared memory of the business: who our customers are, who we are talking to, what is in play, and what has to happen next. If it only exists in your head or your inbox, then as far as the company is concerned it does not exist at all.</p>
  </div>
  <div class="qs-grid">
    ${actions.map((a,i)=>`<div class="qs-item"><span class="n">${i+1}</span><h4>${esc(a[0])}</h4><p>${a[1]}</p></div>`).join('')}
  </div>
  <div class="tech-block" style="background:var(--card);border-radius:12px;padding:1.25rem;margin-bottom:1.25rem;border:1px solid var(--border);">
    <h3 style="color:var(--primary);font-size:1rem;margin-bottom:.75rem;padding-bottom:.4rem;border-bottom:2px solid var(--primary-bg);">The three systems, and what belongs in each</h3>
    <table class="ct"><tr><th>System</th><th>What it is</th><th>What lives there</th></tr>
      <tr><td><strong>sales@ioresource.com</strong></td><td>The front door</td><td>Where customer email arrives and leaves. Not a filing system.</td></tr>
      <tr><td><strong>Twenty CRM</strong></td><td>Relationships and control</td><td>Companies, people, opportunities, cases, notes, next actions.</td></tr>
      <tr><td><strong>Intact ERP</strong></td><td>The system of record</td><td>Quotes, orders, invoices, credit notes &mdash; anything with a document number.</td></tr>
    </table>
    <div class="tip"><strong>Tip:</strong> the join between them is the <code>accountCode</code> on the company and the document number in the email subject. Keep both accurate and the two systems can be reconciled. Let them drift and nobody can tell what a customer is really worth.</div>
  </div>
  <div class="banner banner-amber"><h3>How to use the rest of this guide</h3>
    <p><strong>Modules are tagged.</strong> <span class="badge b-blue">Everyone</span> applies to all of us, <span class="badge b-green">Sales</span> is the pipeline side, <span class="badge b-amber">Customer Ops</span> is the case and order side. Read your own track, skim the other &mdash; the handovers between the two are where things get dropped.</p>
    <p style="margin-top:.5rem;"><strong>Amber boxes marked <em>Needs confirmation</em></strong> are things this guide could not verify. They are collected on the <strong>Items to Confirm</strong> page. Treat them as open questions, not instructions.</p>
    <p style="margin-top:.5rem;"><strong>Test yourself.</strong> Every module ends with a short quiz, and the Flashcards, Quiz and Scenarios tabs pull the whole guide together. A short module lands in your inbox each morning, with an exam on Fridays.</p>
  </div>`;
}

function cheatHTML(){
  const stages = [
    ['New', 'Something has come in. It exists, nothing more.'],
    ['Screening', 'Working out whether it is real: is there a budget, is it a fit, is it worth our time?'],
    ['Meeting', 'We are engaged with them &mdash; talking, demoing, understanding the requirement.'],
    ['Proposal', 'A quote is out with them. This is where <code>quoteRef</code> and a <code>QUOTED</code> amount basis belong.'],
    ['Customer', 'Won. The order is ours.'],
    ['Closed Lost', 'Lost or dead. Needs a <code>lostReason</code> &mdash; always.']
  ];
  const forecast = [
    ['Commit', 'You would stand over this landing in the period. Treat it as money you have promised.'],
    ['Best Case', 'Realistic upside. It could land, but you would not bet the month on it.'],
    ['Pipeline', 'Live and worth working, but too early or too uncertain to forecast.'],
    ['Omitted', 'Deliberately excluded from the forecast. Still a real deal, just not counted.']
  ];
  const caseStatus = [
    ['New', 'Arrived, nobody has picked it up yet.'],
    ['Acknowledged', 'The customer has been told we have it.'],
    ['In Progress', 'Actively being worked.'],
    ['Waiting &ndash; Customer', 'Parked on the customer. The clock is on them.'],
    ['Waiting &ndash; Supplier', 'Parked on a supplier. Chase it &mdash; the customer will not care whose fault it is.'],
    ['Waiting &ndash; Internal', 'Parked on someone here. This one is on us.'],
    ['Resolved', 'Sorted, and the customer knows.'],
    ['Closed', 'Done and filed.']
  ];
  const reps = [
    ['SB', 'Stephen Browne'], ['PM', 'Philip Murphy'], ['CL', 'Conn Loy'],
    ['TK', 'Tara Keogh'], ['MM', 'Majella Merriman &mdash; Customer Operations'],
    ['MMU', 'Marcus Murphy'], ['HOUSE', 'Unassigned &mdash; nobody owns it, which means nobody is working it']
  ];
  const rules = [
    'Search before you create. Every time.',
    'Every opportunity is linked to a company. No orphans.',
    'Every opportunity has a current next step and a date.',
    'Every account has a real owner. HOUSE is a gap, not an owner.',
    'Closing lost always carries a lost reason.',
    'If it is not written down in the CRM, it did not happen.'
  ];
  const fieldRows = MODULES.flatMap(m => (m.fields||[]).map(f => [m.name, f.k, f.v]));
  return `<h2 class="sech">Cheat Sheet</h2>
  <p class="sub">The lists worth keeping open in a tab.</p>

  <h3 class="subh">Opportunity stages &mdash; and what each one means</h3>
  <table class="ct"><tr><th style="width:20%;">Stage</th><th>You are here when&hellip;</th></tr>
    ${stages.map(s=>`<tr><td><strong>${s[0]}</strong></td><td>${s[1]}</td></tr>`).join('')}</table>

  <h3 class="subh">Forecast categories</h3>
  <table class="ct"><tr><th style="width:20%;">Category</th><th>What you are saying</th></tr>
    ${forecast.map(f=>`<tr><td><strong>${f[0]}</strong></td><td>${f[1]}</td></tr>`).join('')}</table>

  <h3 class="subh">Case statuses</h3>
  <table class="ct"><tr><th style="width:24%;">Status</th><th>Meaning</th></tr>
    ${caseStatus.map(c=>`<tr><td><strong>${c[0]}</strong></td><td>${c[1]}</td></tr>`).join('')}</table>
  <div class="imp"><strong>Important:</strong> the three <em>Waiting</em> statuses exist so it is obvious who the delay belongs to. Using a vague status hides the reason a case is old.</div>

  <h3 class="subh">Case response targets</h3>
  <table class="ct"><tr><th style="width:34%;">Stage</th><th>Target</th></tr>
    <tr><td><strong>Acknowledge</strong></td><td>Within 1 working hour &mdash; 15 minutes if it is urgent</td></tr>
    <tr><td><strong>First real response</strong></td><td>Within 4 working hours</td></tr>
    <tr><td><strong>Standard quote</strong></td><td>Same day</td></tr>
  </table>

  <h3 class="subh">Rep codes (the <code>salesRep</code> field)</h3>
  <table class="ct"><tr><th style="width:16%;">Code</th><th>Who</th></tr>
    ${reps.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td></tr>`).join('')}</table>
  <div class="tip"><strong>Tip:</strong> <code>salesRep</code> is the ownership field that counts. The built-in <em>Account Owner</em> field is hidden on purpose because it reads the same name on nearly every record and tells you nothing.</div>

  <h3 class="subh">The golden rules</h3>
  <div class="card open"><div class="card-b" style="padding-top:1rem;">
    <ol class="nl">${rules.map(r=>`<li>${r}</li>`).join('')}</ol>
  </div></div>

  <h3 class="subh">Every field in this guide, in one place</h3>
  <p class="sub">Pulled from the modules, so it stays in step with them.</p>
  <table class="ct"><tr><th style="width:20%;">Module</th><th style="width:22%;">Field</th><th>What goes in it</th></tr>
    ${fieldRows.map(r=>`<tr><td>${esc(r[0])}</td><td><code>${esc(r[1])}</code></td><td>${r[2]}</td></tr>`).join('')}</table>`;
}
