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
//   path    appended to --base. Twenty's standard object routes are used here;
//           they are UNVERIFIED against our instance, so treat them as a
//           starting point. If a path lands somewhere wrong, fix the page by
//           hand and press Enter — the capture still gets the right filename.
//   view    a saved view to select by its visible name. capture.mjs clicks it
//           by text, which survives UI changes far better than a CSS selector.
//   hide    columns to switch off before capturing, by visible header text.
//           These are the commercial figures. This repo is public.
//   note    what to do that a script cannot do for you.

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
    note: 'Open global search and type a partial name that returns several similar companies — mclern is the honest one.',
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
    view: 'HOUSE — Unassigned',
    note: 'Sales Rep column must be visible so the reader can see it is empty.',
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
    note: 'Opportunities tab open, showing more than one reseller chasing the same site.',
    hide: ['Amount'],
  },

  'opp-kanban': {
    path: '/objects/opportunities',
    view: 'By Stage',
    hide: ['Amount'],
    note: 'All six columns must be in frame: New, Screening, Meeting, Proposal, Customer, Closed Lost.',
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
    view: 'Stale Deals',
    hide: ['Amount'],
    note: 'The filter and sort chips must be readable — this is the shot that proves a hardcoded date is sitting in the filter.',
  },

  'opp-cadence': {
    path: '/objects/opportunities',
    note: 'Outreach Cadence set to Quote follow-up, with Cadence Status alongside.',
  },

  'dq-data-gaps': {
    path: '/objects/opportunities',
    view: 'Data Gaps — no amount',
    note: 'The Amount column is mostly empty here, which is the point — nothing to hide.',
  },

  'dq-stale-deals': {
    path: '/objects/opportunities',
    view: 'Stale Deals',
    hide: ['Amount'],
    note: 'Sorted by last activity date, oldest at the top.',
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
    note: 'Service type, RMA number, Serial number, Opened date and Warranty end date.',
  },

  'task-list': {
    path: '/objects/tasks',
    note: 'Needs a mix: at least one Sales mtg W.. #.. task and one cadence task, with Due date and Assignee columns.',
  },

  'command-centre': {
    note: 'Not a Twenty page. Open the Command Centre dashboard yourself, then press Enter. Crop or hide the value tiles; leave the case and next-action widgets readable.',
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
