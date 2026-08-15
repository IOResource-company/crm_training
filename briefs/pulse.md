# Brief — `pulse.js` (The Pulse Emails)

Sources, in priority order:

- P1 `C:\dev\IOR CRM\docs\pulse-system-overview.html` (12 Aug 2026, most recent and candid)
- P2 `C:\dev\IOR CRM\docs\crm-pulse.md` (engine reference)
- P3 `C:\dev\IOR CRM\scripts\pulse-actions.py` (the button service — authoritative on op codes)
- P4 `C:\dev\IOR CRM\.claude\skills\sales-pipeline-sweep\SKILL.md` (Tuesday sweep)
- P5 `C:\dev\IOR CRM\docs\customer-operations-the-way-we-work.html` (SLA stamping, unowned-case nudge)

## Verified facts

| Fact as written | Source |
|---|---|
| Ops Pulse twice daily, weekdays, ~08:00 and ~18:00 | P2 cron table (`0 7,17 * * 1-5`); P1 §1 card |
| Sales Pulse once daily, weekday mornings ~08:10; Monday's edition adds the data check with a pipeline CSV attachment and per-stage reconciliation | P2 cron table (`10 7 * * 2-5`, `10 7 * * 1 --audit`); P1 §4 |
| UK Expansion Pulse daily 13:00 (early afternoon), Urovo UK channel recruitment; membership decided by `People.linkedinStatus`; daily capped shortlist (7/day), overflow stated not dropped | P1 §1, §5 |
| Ops row buttons: Create case (only if none yet) · Handled — hide · Comment · Open in CRM. Overdue-case row: Resolve · Snooze +3d · Comment · Open case | P2 "Action buttons"; P3 `OP_LABELS` (`cc`,`hd`,`oc`,`rc`,`sn`) |
| Sales deal buttons: Won · Lost · Push +3d/+1m/+3m · Comment · Assign · Open deal; Monday adds Apply; meeting actions get Done/Carry/Answer; sweep rows get Answer | P2; P3 `OP_LABELS` (`ow`,`ol`,`os`,`oc`,`as`,`oa`,`mt`,`mx`,`sw`) |
| **Assign is now built** (op `as`, sets `Company.salesRep`, writes a `[Sales Pulse] … owner assigned` note, confirm page states the size of the move) | P3 lines 87, 711–739, 1022–23. **NB:** P1 §8 (12 Aug) still describes Assign as a *proposal* — the code is newer and wins. |
| Lost forces a reason from the enum: price · lead time · lost to competitor · no budget · no decision · stalled · other, plus optional free text kept as a comment. Won → stage Customer, 100%, closing today. Both set `cadenceStatus=STOPPED` | P2 "Action buttons"; P1 §4.2 |
| Push of ≤5 days counted in working days; longer pushes are calendar days rolled to a weekday | P3 `push_calendar_days` / `next_working_day`, line 684-5 |
| Buttons open a **confirm page** because Outlook/Defender Safe Links pre-fetches every URL; the write happens on the POST | P2 "why it's a confirm page"; P1 §1 callout |
| Links are HMAC-signed and **expire after 21 days** | P2; P1 §1 callout. (TTL is enforced in P3 `_verify` via the `e` claim; the 21-day figure itself comes from P1/P2.) |
| Comments stored as CRM Notes titled `[Ops Pulse]` / `[Sales Pulse] YYYY-MM-DD — <record>`, attached to record + company; both pulses read both prefixes; sticky until Resolved (case) or Won/Lost (deal); newest 3 shown, older collapsed | P2 "Pulse comments" |
| Never comment by replying — mail sync stores only the unquoted top of a reply, so text beside the quoted items is destroyed (cost two meetings' worth of comments) | P2; P1 §4.2 step 2 |
| Commenting on an email item with no case **creates** one | P2 |
| Snooze no longer hides a commented case; pushing a date no longer hides a commented deal — only Resolve/Won/Lost clear them | P2 "Under discussion" |
| Handled — hide is permanent, and also resolves the auto-created case when it is still NEW/ACKNOWLEDGED; deliberately parked (IN_PROGRESS / WAITING_*) cases are left open | P2; P1 §3 |
| Same-issue grouping folds duplicate threads into one card; Resolve acts on the whole group. Auto-replies never count as waiting | P2 "Likely-spam bucket + same-issue grouping", "Auto-replies never count as waiting" |
| Only mail that missed a same-day reply is listed; today's unanswered mail is a quiet count | P2 item 2 |
| AI gist line per row, company name in bold | P2 "Line format & AI gists" |
| AI pipeline read: 2–3 sentence health read, 3–5 deals to touch today, maintain list, ≤3 watch items; rule = value at risk beats volume | P2 "AI pipeline read"; P1 §4.1 |
| Quote-shaped open cases cross-post from Ops into the Sales Pulse as Quote follow-ups; buttons act on the same case; a comment on either side shows on both | P2 intro; P1 §2 |
| Rep editions: every figure narrowed to `Company.salesRep`; subject carries the rep's name; sweep-freshness amber strip on the whole-book edition | P1 §7, §4.1 |
| Actions taken section lists what the automation and button presses did, tagged with who clicked (from the Cloudflare Access identity header) | P2 |
| Tuesday sweep: rep pipeline files from the sales-meetings folder → opportunities; **sheet wins on amount/probability/next step, CRM wins on stage and close date**; never marks Won, never deletes; flagged rows become one review task answered via the pulse's Answer button; 100% rows listed for review | P4 §2, §3 |
| Case SLA stamping is automatic on status move (Acknowledged at / First response at / Resolved at); auto-created cases get `receivedAt` from the email timestamp; our reply moves New → Acknowledged | P5 §3, §9; P2 "Auto-case creation rules" |
| Weekday nudge email lists any Case still New with no owner (live since 1 Jul 2026) | P5 §3 |

## Deliberately NOT written

- All money figures. P1 §4.3 and the pulse editions carry live pipeline values and per-rep book sizes; the repo is public, so widgets and tiles are described qualitatively only.
- Named per-rep gaps (who is and is not receiving an edition today, whose book is unworked). Internal management detail, not training content, and it dates fast.
- Emoji section names and the EUR sign: written out in words to keep the module file plain ASCII.

## Could NOT verify → surfaced as `confirm` / `confirms`

1. **Double press.** No general replay guard was found in `pulse-actions.py`. Some ops are naturally idempotent and say so ("already belongs to…", "a case already exists…", "already in the CRM contacts"), and a REST rejection renders "It may already be done" — but Won / Lost / push / resolve have no explicit second-press behaviour documented. → howto `confirm` on "Press a button safely".
2. **Forwarded pulse.** The service is behind the same Cloudflare Access gate as the CRM, and P1 §7 says a proxy press is allowed and recorded as "acted by X, from Y's pulse" with unknown actors refused — but what a colleague (or anyone outside `@ioresource.com`) actually sees on a forwarded email is not documented. → same howto `confirm`.
3. **Task assignment notification.** Nothing in any source says whether assigning a Task in the CRM raises an in-app or email notification, or whether the Pulse is the only nudge. → module-level `confirms`.
4. **UK Pulse recipients / a second campaign.** P1 §6 says every edition currently goes to Stephen and lists intended changes; whether that has happened is unknown as of writing. → howto `confirm` on the UK Expansion Pulse.
