# Brief — getting-started

Module: `content/getting-started.js` · slug `getting-started` · track `all`

## Verified facts and where they came from

| Fact used in the module | Source |
|---|---|
| CRM lives at `crm.ioresource.com`, self-hosted Twenty on Hetzner, Cloudflare-proxied | `IOR CRM/STATUS.md` — "🟢 LIVE" + "Key facts to remember"; `.claude/skills/ior-crm-ops/SKILL.md` header |
| Two independent login gates: Cloudflare Access, then Twenty's own sign-in | `ior-crm-ops/SKILL.md` — "Can't log in — Cloudflare Access (the #1 gotcha)" |
| Cloudflare Access allows only identities ending `@ioresource.com`; one-time PIN by email is a built-in login method | `docs/go-live-hardening.md` §1 (Access app table + note 2); `ior-crm-ops/SKILL.md` |
| Microsoft/Entra SSO works and lands in the real workspace; app had to be multitenant | `STATUS.md` update 2026-06-23 ("Microsoft login — RESOLVED"); `docs/entra-sso-setup.md` step 1 |
| Email + password login also works | `STATUS.md` 2026-06-23 — "Working now: email login → real workspace" |
| Stray Twenty demo workspace (Google/Pets/Rockets) seen on first login; switch via top-left workspace menu | `STATUS.md` 2026-06-23 — "Workspace confusion resolved" |
| Membership is invite-only; Twenty's outbound email is not configured so invite links must be sent by hand; user needs a live `@ioresource.com` M365 mailbox | `ior-crm-ops/SKILL.md` — "Inviting a user" |
| Sidebar objects: Companies, People, Opportunities, End Customers, Cases (Workspace); Brands, Products, Sales Transactions, Aftercare (Records) | `docs/crm-user-guide.html` scenes 1–4 sidebar markup |
| Record layout: field panel left; tabs Timeline / Opportunities / Cases / Notes / Files | `docs/crm-user-guide.html` scene 1 |
| Views are the working surface; star them and favourites pin to the top of the sidebar | `docs/crm-user-guide.html` §6 "Two minutes of setup each"; `sales-the-way-we-work.html` §10 |
| Three-tool model: sales@ = front door/transport (not a store of record); Twenty CRM = relationships + control; Intact ERP = system of record for money and documents | `docs/customer-operations-the-way-we-work.html` §2 cards + principle "One source of truth per fact" (line 143) |
| The join key across all three is the quotation / pro forma / order number in the email subject | same, §2 "The join key" callout; §3 habit 3 |
| Golden rule: nothing important lives only in the inbox | same, §2 "The golden rule" callout |
| sales@ mailbox is synced into the CRM; email attaches itself to contact + company; a sender who is not in People is stored but shows nowhere | `sales-the-way-we-work.html` §8; mail/calendar sync enabled 2026-07-03 per `docs/mail-sync-enable.md` |
| `salesRep` is the ownership field; built-in `accountOwner` is misleading and hidden | `STATUS.md` 2026-07-01 ("misleading accountOwner hidden everywhere"); `docs/pulse-system-overview.html` §7 |
| Rep codes SB / PM / CL / TK / MM / MMU / HOUSE (RMC legacy); reps are not all CRM users | `scripts/sales-reps.json` `_comment` — "Codes match the CRM salesRep enum exactly"; `STATUS.md` 2026-06-19 Phase 1 |
| Case fields owner / status / next action / due date; overdue is visible | `docs/crm-user-guide.html` scene 4; `data-model.md` Phase 5 Case |
| `accountCode` = Intact A/C code, the join key to sales data | `docs/data-model.md` Phase 1 Companies |
| Some accounts loaded as data-gap shells | `STATUS.md` — "~8 accounts have only data-gap shells … flagged for backfill" |
| Five-minutes-a-day discipline; update as you go, not Fridays; the Monday review runs off the CRM | `sales-the-way-we-work.html` §1, §3, §11 |
| IOR Command Centre dashboard is a manual UI build (API is read-only for dashboards on v2.15) | `STATUS.md` 2026-07-01; `crm-user-guide.html` §6 |

## Could NOT verify — carried into the module as `confirm` / `confirms`

Per-how-to (`confirm`):
- Exact label of the Microsoft sign-in button on our Twenty login page, and whether the stray demo workspace still appears on a first login today.
- Who currently holds CRM admin rights to invite members and change settings.
- Whether individual staff mailboxes are synced as well as `sales@`, or only the shared mailbox feeds record timelines.

Module-level (`confirms`):
- Whether all staff now sign in with Microsoft SSO or some still use email + password.
- Whether the stray demo workspace still exists.
- Which login methods the Cloudflare Access gate offers staff today (one-time PIN, Entra, or both) — the repo records both being possible at different dates.
- Whether individual mailboxes are synced (repeated at module level because it changes what a new user should expect to see).
- Who holds admin rights.
- Whether the IOR Command Centre dashboard has actually been built and shared.
- Whether ordinary users can create/edit shared views, or only admins.

## Deliberately excluded

- All spend, margin and deal-value figures (repo is public). `exports/customers-review-2026-06-21.csv` contains per-account spend and margin — not used.
- Server IP, container names, `.env` variables, Cloudflare Zero Trust configuration detail — infra, not user-facing, and partly sensitive.
- Generic upstream Twenty behaviour (keyboard shortcuts, command menu, record merge) — not evidenced anywhere in the IOR repo, so it is either omitted or raised as a `confirm`.
