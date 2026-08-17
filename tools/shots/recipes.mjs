// Navigation hints, one per screenshot key.
//
// The shot LIST is not here — capture.mjs reads it out of the assembled guide,
// so a key added to content/<slug>.js turns up in the capture plan on its own
// and the caption you are shown is the real caption the guide will print.
// This file only says "where do I point the browser for this key".
//
// Fields, all optional:
//   source  'crm'   a page inside crm.ioresource.com (default)
//           'email' comes out of a Pulse email, not the CRM — assist only
//           'login' the sign-in gates, captured during --login
//   path    appended to --base. Checked against our instance on 17 Aug 2026:
//           /objects/companies, /objects/people, /objects/opportunities,
//           /objects/cases, /objects/tasks, /objects/notes, /objects/dashboards,
//           /objects/actions and /objects/salesActions all resolve. Individual
//           records are /object/<type>/<uuid>. The routes marked UNCONFIRMED
//           below were not reachable from the sidebar without expanding a group,
//           so treat those as a guess: if a path lands somewhere wrong, fix the
//           page by hand and press Enter — the capture still gets the right
//           filename and size either way.
//   view    a saved view to select by its visible name. capture.mjs clicks it
//           by text, which survives UI changes far better than a CSS selector.
//   hide    columns to switch off before capturing, by visible header text.
//           These are the commercial figures. This repo is public.
//   note    what to do that a script cannot do for you.
//
// READ THIS BEFORE YOUR FIRST RUN — checked live on 17 Aug 2026:
//
// 1. The default views carry money. Companies opens on "All Companies" with an
//    IOR Annual Spend column and a summed total in the footer. Opportunities
//    opens on "Open Pipeline" with an Amount column and a Weighted Value sort
//    chip. Neither can be captured as-is for a public repo. Switch the column
//    off — do not rely on the frame edge.
// 2. The CRM is dark-themed and the guide is light. Screenshots will read as
//    dark panels on a light page. That is honest, just expect it.
// 3. View names in the picker are truncated in the UI, and ours are prefixed
//    more than the guide's prose suggests: the stale-deals view shows as
//    "Sales — Stale d…", and there is a separate "Stale / No Activi…". The
//    names below are the fragments actually seen, which is what capture.mjs
//    matches on.
// 4. Opportunities views seen: All Opportunities, Sales — Pipelin…,
//    Sales — Stale d…, Open Pipeline, Closing This Qu…, Quotes Needing…,
//    Open Opps — N…, Stale / No Activi…, Quotes — Missi…, Next Actions,
//    Sales — Quote f…  Companies views seen: All Companies, Customers (by …,
//    Data Quality …, Customers, Book of Busines…, MM — My Acco…,
//    RMC — To Reas…, HOUSE — Unas…, Going Quiet (90…, Prospects, Win-Back (Dor…

export const RECIPES = {
  'crm-login': {
    source: 'login',
    note: 'Captured during --login, at the Cloudflare Access gate before you sign in.',
  },

  'crm-nav': {
    path: '/objects/companies',
    note: 'Star two or three views first so the favourites appear pinned above the Workspace group.',
  },

  'global-search': {
    path: '/objects/companies',
    note: 'Search mclern. It really does return two company records — McLernons and McLernon Computers (McLernon\'s Ireland) — which is the whole point of the shot. Close or scroll the underlying list first so the IOR Annual Spend column is not behind the panel.',
  },

  'views-sidebar': {
    path: '/objects/companies',
    note: 'Expand the view picker so the per-rep My Accounts views are visible, with one starred.',
  },

  'companies-list': {
    path: '/objects/companies',
    note: 'Show the Sales Rep, Account Status and Account Tier columns.',
  },

  'company-record': {
    path: '/objects/companies',
    note: 'Open a company with real timeline activity, and switch the right pane to Timeline.',
  },

  'company-account-code': {
    path: '/objects/companies',
    note: 'Same record, scrolled so the Account code field is on screen.',
  },

  'house-unassigned': {
    path: '/objects/companies',
    view: 'HOUSE — Unas',
    note: 'BLOCKED as at 17 Aug 2026: the view exists but returns 0 records, so there is nothing to photograph. Its filter is "Sales Rep Is [reps]", which cannot match a blank rep - see the mistakes module. Capture this once the filter is fixed and it lists real unowned accounts. Switch off IOR Annual Spend first.',
  },

  'dq-no-account-code': {
    path: '/objects/companies',
    note: 'A company whose Account code is genuinely blank. Do not blank one out for the photo.',
  },

  'person-record': {
    path: '/objects/people',
    note: 'Pick someone with Job Title, Company and Decision Role all filled in.',
  },

  'email-thread-record': {
    path: '/objects/people',
    note: 'The synced email list. Frame it so it is obvious only subject, participants and date are shown — that is the whole point of the shot.',
  },

  'note-on-record': {
    path: '/objects/companies',
    note: 'Notes section open, ideally including one titled [Sales Pulse]. Used by five modules, so it is the highest-value capture on the list.',
  },

  'end-customer-record': {
    path: '/objects/endCustomers',
    note: 'UNCONFIRMED route — End Customers sits inside a collapsible "End Customers & Projects" sidebar group, so the object name was not visible. Expand that group and navigate by hand if this 404s. Opportunities tab open, showing more than one reseller chasing the same site.',
    hide: ['Amount'],
  },

  'opp-kanban': {
    path: '/objects/opportunities',
    hide: ['Amount', 'Weighted Value'],
    note: 'UNCONFIRMED: no view called "By Stage" appeared in the picker. The kanban may be a view-type toggle rather than a saved view — switch the Opportunities view to Kanban yourself. All six columns must be in frame: New, Screening, Meeting, Proposal, Customer, Closed Lost.',
  },

  'opp-record': {
    path: '/objects/opportunities',
    hide: ['Amount'],
    note: 'Side panel showing Stage, Amount, Close Date, Probability, Next Step, Next Step Date, Quote Ref and the linked Company. Pick a deal with nothing commercial on screen.',
  },

  'opp-new': {
    path: '/objects/companies',
    note: 'Open the new-opportunity panel FROM a company record, so the Company field is already populated — that is the habit being taught.',
  },

  'opp-next-step': {
    path: '/objects/opportunities',
    hide: ['Amount'],
    note: 'Next Step and Next Step Date mid-edit, with Last Activity Date visible.',
  },

  'opp-lost-reason': {
    path: '/objects/opportunities',
    note: 'Lost Reason picklist open with all seven options showing.',
  },

  'opp-filters': {
    path: '/objects/opportunities',
    view: 'Sales — Stale',
    hide: ['Amount', 'Weighted Value'],
    note: 'The filter and sort chips must be readable — this is the shot about what a view is really filtering on. Note the default Open Pipeline view filters on Stage and Lost Reason with no date in it, so it cannot rot; the stale-deals view is the one to check.',
  },

  'opp-cadence': {
    path: '/objects/opportunities',
    note: 'Outreach Cadence set to Quote follow-up, with Cadence Status alongside.',
  },

  'dq-data-gaps': {
    path: '/objects/opportunities',
    note: 'UNCONFIRMED: no view called "Data Gaps — no amount" appeared in the picker. The nearest candidates seen were "Open Opps — N…" and "Quotes — Missi…". Pick whichever actually shows the gap and tell me which, so the guide can be corrected.',
  },

  'dq-stale-deals': {
    path: '/objects/opportunities',
    view: 'Sales — Stale',
    hide: ['Amount', 'Weighted Value'],
    note: 'Sorted by last activity date, oldest at the top. Do not confuse it with the separate "Stale / No Activi…" view.',
  },

  'forecast-categories': {
    path: '/objects/opportunities',
    hide: ['Amount', 'Weighted', 'Weighted value'],
    note: 'Forecast category, Probability and Close date readable; amount and weighted value must not be.',
  },

  'case-queue': {
    path: '/objects/cases',
    view: 'All Open (SLA)',
    note: 'Subject, Priority, Status, Type, Company, Owner and Due date columns visible, sorted by due date.',
  },

  'case-record': {
    path: '/objects/cases',
    note: 'Both halves in frame: Status/Priority/Owner/Next action/Due date on the left, the four SLA timestamps on the right.',
  },

  'case-new': {
    path: '/objects/cases',
    note: 'New Case panel with Subject, Type, Priority, Company, Contact and Owner filled in.',
  },

  'aftercare-record': {
    path: '/objects/aftercares',
    note: 'UNCONFIRMED route — not visible in the sidebar top level; likely inside one of the collapsible groups. Service type, RMA number, Serial number, Opened date and Warranty end date.',
  },

  'task-list': {
    path: '/objects/tasks',
    note: 'Needs a mix: at least one Sales mtg W.. #.. task and one cadence task, with Due date and Assignee columns.',
  },

  'command-centre': {
    path: '/object/dashboard/8517ad5f-ff01-4c52-aec3-22e705c11f7d',
    note: 'It IS a CRM page — the IOR Command Centre dashboard, pinned in the sidebar. Hide or crop the value tiles; leave the case and next-action widgets readable.',
  },

  'sales-pulse-email': {
    source: 'email',
    note: 'From the Sales Pulse email. Frame a deal row so the Won / Lost / Push / Comment buttons are the subject. Value and amount columns must be out of frame.',
  },

  'ops-pulse-email': {
    source: 'email',
    note: 'From the Ops Pulse email. Top tiles plus the first two or three awaiting-reply rows with their buttons. Customer email addresses out of frame.',
  },

  'pulse-confirm-page': {
    source: 'email',
    note: 'Click a button in a Pulse email to reach the confirmation page, then capture it showing the Confirm button that actually applies the change.',
  },
};
