# Brief — `email` (Email & the CRM)

Module covers brief section 6: how email relates to CRM records, what is
captured automatically, what must be added by hand, shared-mailbox behaviour,
and the limitations users must understand.

## Verified facts (source → what it supports)

| Fact | Source |
|---|---|
| The **shared `sales@ioresource.com` mailbox** is the connected account; connected in the Twenty UI via Settings → Accounts → Microsoft OAuth on 2026-07-03 | `docs/mail-sync-enable.md` §Enable steps 4 |
| Message-sync **visibility set to "Subject and metadata"**, not "Share everything". Settings chosen 2026-07-03: contact auto-creation SENT only · non-professional emails INCLUDED · group emails excluded | `docs/mail-sync-enable.md` §Enable steps 4 |
| Users therefore see **subject + participants only, never message bodies or attachments** | `docs/customer-operations-the-way-we-work.html` §3 "What the CRM does automatically" (line ~210) |
| Email attaches itself to the **People and Companies it involves** — there is no separate inbox screen; a sender not in People is stored but "shows nowhere" | `customer-operations-the-way-we-work.html` §"Where the emails are" (line ~523); `sales-the-way-we-work.html` §8 |
| Verified at go-live: 151 participant links across 35 Person records within the first hour | `docs/mail-sync-enable.md` §Verify |
| **Email habits:** formal sales work through sales@ with the rep in cc · sign your own name above the shared signature · **document numbers in the subject line** ("Quotation 25926 — McLernon — Urovo DT66 battery") · add new contacts to People as they appear | `sales-the-way-we-work.html` §8; `customer-operations-the-way-we-work.html` §3 and Appendix B |
| **The Intact join:** Intact owns money and documents, the CRM owns relationships and control, email carries information between them. Quote sent "via sales@, rep cc'd, number in subject; captured to the Opportunity" | `customer-operations-the-way-we-work.html` §1 golden rule and §6 flow step 8 |
| Documents made in Intact: Quotation · Pro Forma · Sales Order · Invoice/Credit | `customer-operations-the-way-we-work.html` §6 |
| **Auto-case creation runs `*/15 6-18 * * 1-5`** — every 15 minutes, working hours, weekdays (`crm-pulse.py --ingest`) | `docs/crm-pulse.md` §"What runs when" cron table |
| Candidate = new **inbound** message whose sender resolves to a **person in the CRM with a company**. Skipped: internal senders, no-reply/automated addresses, **"(Sales Pipe mail)" subjects**, pulse replies, auto-reply subjects. **Unknown senders are not auto-cased** — they surface in the Pulse email for triage | `docs/crm-pulse.md` §"Auto-case creation rules" |
| Case created via REST: status **New**, type Query, priority Normal, `receivedAt` = the email's timestamp, due date next working day, contact + company linked, owner defaulted to Stephen | `docs/crm-pulse.md` §Auto-case creation rules |
| **One case per mail thread** via the Case field `sourceThreadId` — "Never edit that field" | `docs/crm-pulse.md` §Auto-case creation rules |
| **Reply detection:** a reply from `@ioresource.com` on a thread whose auto-created case is still New moves it to **Acknowledged** and stamps `acknowledgedAt` with the real reply time | `docs/crm-pulse.md` §Auto-case creation rules |
| **"(Sales Pipe mail)" routing:** forward to sales@ with `(Sales Pipe mail)` **anywhere in the subject**; matching is tolerant ("sales pipe", "Sales-Pipe"). The engine reads the full body, assembles all open opportunities/cases/companies and decides with a strict JSON schema and a **0.8 confidence gate** | `docs/crm-pulse.md` §'"(Sales Pipe mail)" routing' |
| Possible actions: `update_opportunity` · `resolve_case` · `create_opportunity` · `create_task` — a **"Review: Sales Pipe mail — …" task is the mandatory fallback; the engine never guesses** | same section |
| **Every action writes a Note on the target record** and appears in the next pulse under "Actions taken" | same section |
| Pulse emails are sent with **`Reply-To: sales@ioresource.com`** so the reply fallback lands in the synced mailbox | `docs/crm-pulse.md` §Pulse comments |
| A yellow banner on the Pulse means the newest synced email is stale (>24h weekdays, >72h across weekends) — i.e. sync can and does break | `docs/crm-pulse.md` §Ops Pulse email; `docs/incident-2026-07-16-mailsync.md` (26-hour outage, expired Entra secret) |
| SLA stamping is automatic on status moves; never type the timestamp fields by hand | `case-monitoring-guide.html` §3 and §7 golden rules |

## Handled with care — an important correction in the source

`docs/mail-sync-enable.md` carries a **verified correction (2026-07-03)**: the
"Subject and metadata" setting is **display-only**. Twenty v2.15 stores full
message bodies in Postgres regardless; the setting controls what workspace
members *see*, not what is stored. Mitigations noted there: age-encrypted
offsite copies, EU hosting, UI exposure limited; DSAR/GDPR requests to be
treated as if email content is held.

**How the module is worded because of this:** it says bodies and attachments are
**not shown / not visible in the CRM**, and never claims "nothing is stored".
The user-facing consequence is identical (you cannot read an email body in the
CRM, so write a Note), but nothing in the published training guide asserts a
storage fact that the repo itself has corrected. Do not "tidy" that wording
into "not synced" or "not stored" in a later edit.

## Could NOT verify (all appear as `confirm` / `confirms` in `email.js`)

- **Calendar sync.** Per the brief, marked as needing confirmation. For the record, the repo *does* show it was enabled (`CALENDAR_PROVIDER_MICROSOFT_ENABLED=true`, calendar visibility Everything, auto-creation on, 5 events synced in the first hour, 2026-07-03) and restored after the 15–16 Jul outage. What is **not** knowable from the repo is whether it is live today, whose calendars it covers, and what a user sees on a record — which is what the `confirms` entry asks. → module `confirms` #1
- Whether any mailbox other than sales@ is connected (no evidence of per-rep mailboxes being connected anywhere in the repo). → module `confirms`
- Whether email can be **sent** from inside the CRM. The OAuth scopes granted include `Mail.Send` (`mail-sync-enable.md`, `entra-sso-setup.md`), but nothing says the feature is used or wanted. Stated only as a question. → module `confirms`
- Exactly what a subject-only thread looks like on a record: whether direction, thread grouping and participants are all visible, and what an attachment renders as. Pure upstream-UI knowledge. → module `confirms`
- Whether attachments are retrievable anywhere from the CRM, and the agreed home for quote PDFs / spec sheets (Ops WoW references "a shared asset library" but does not name it). → module `confirms`
- Whether CRM search can find an email by subject line. → module `confirms`
- Who the default owner is on auto-created cases *today* (docs say "owner defaulted to Stephen", written when he was the only workspace member) and the reassignment convention. → howto 5 `confirm`
- Whether every team member can use (Sales Pipe mail), or whether the review tasks and notes only surface to some people. → howto 3 `confirm`
- Exact name/location of the email section on a record, and whether it shows on Companies as well as People. → howto 1 `confirm`

## Known contradiction in the sources (resolved in favour of the newer one)

`customer-operations-the-way-we-work.html` §3 says "The CRM does **not**
auto-create records from email — triage is a person's judgement, and that's
deliberate." That is v1.1-era text. The same document's own v1.6 header
(12 July 2026) announces "auto-case creation from sales@ mail; (Sales Pipe mail)
routing — §9–11", and `docs/crm-pulse.md` documents the live ingest. The module
teaches the **current** behaviour: auto-casing for known contacts only, with
unknown senders still triaged by a human.

## Deliberately not stated

- No spend, margin or deal values (public repo rule).
- No claim about what is or is not stored in the database (see the correction above).
- Nothing about upstream Twenty's messaging UI beyond what our own docs assert.
