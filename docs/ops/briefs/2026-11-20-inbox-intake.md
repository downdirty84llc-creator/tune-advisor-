# DD84 inbox intake — 2026-11-20

Run 10:21:25Z–10:31:17Z. Window: `newer_than:1d` (since 2026-11-19 10:21Z, the
previous intake). Accounts scanned: Gmail, the business account. Not reached:
Superhuman Mail (authorisation expired), Stripe (no MCP server exists at all),
PayPal (authorisation expired).

Threads reviewed: **52** distinct threads across the three list queries, three
of them then read in full. Drafts enumerated: **51**. Actionable: **17**.
No-action: **35**. New leads: **0**.

Arithmetic, so it can be checked: query 2 returned 3, query 4 returned 20, query
6 returned 30, and one thread appeared in both 2 and 6 — 52 distinct. Of those,
15 of query 4's 20 are actionable, plus one each from queries 2 and 6.

Checkout verified before work: `HEAD` equals origin at `c7cd027`, no `src/`, no
`package.json`, clean, **102 tracked files against the prompt's 28 — fiftieth
consecutive run reporting the drift.** The prompt is stale, the tree is correct,
and only the claude.ai Routines UI can fix the prompt (A-10).

---

## Urgent — read first

**1. The vendor charge has now failed four days running, and tomorrow's outflow
is scheduled.** Thread `1a1f6241c4a4f7a8`, read **2026-11-19T23:28:44Z**, unread
in the inbox. A Stripe failed-payment notice for the vendor Ocoya, whose subject
line says the payment was unsuccessful **again**. T-198 recorded three
consecutive failures (11-16, 11-17, 11-18); this is the fourth. **The amount is
withheld under A-19** — it is a declined-payment amount, and whether such
amounts may be written here is exactly the question A-30 has been holding.
**Clock: the scheduled outflow in T-202 falls 2026-11-21, tomorrow.** Decision
needed today. Approval: A-30, then T-202.

**2. T-171's external cutoff is today, and its register due date has already
passed.** The row was due **2026-11-19** and is now past due; the external fact
is that secret key values stop being displayed **2026-11-20**, which is today.
After today the only remaining path is rotation, which breaks whatever still
uses the old key. **Whether Stripe applies the change at the start or the end of
today was not established, so treat today as already partly gone.** **No tool in
this session can do it — there is no Stripe connector at all.** It takes the
owner, the dashboard and a password manager. **Clock: today, and then never.**
No approval needed; this is the owner's own hands.

**3. The best-qualified lead on record is now 1 day 14 hours unanswered and
falls due today.** T-206, threads `1a1f063dcce9cc9d` and `1a1f064bc8bd2fdc`,
still **starred and unread**. The reply has been drafted since 2026-11-18 and
has not been sent. **Approval: A-29, raised 2026-11-13, now seven days
pending.** Nothing about this is a drafting problem.

---

## New leads

**None.** Query 1 — `category:primary newer_than:1d`, the query this routine
exists to run because it is the one that finds customers — returned **zero
threads**.

That is a real zero from the right query, not a missing connector and not a page
of marketing mistaken for an empty inbox. No human wrote to this business in the
last twenty-four hours.

---

## Existing customers needing a reply

No customer thread changed state this run. Nothing new arrived on any of them.

| Customer row | Thread state                            | Age unanswered   | Draft ready     | Blocked on |
| ------------ | --------------------------------------- | ---------------- | --------------- | ---------- |
| **T-206**    | Starred, unread, two messages           | 1d 14h           | Yes             | **A-29**   |
| **T-177**    | **Read** and not answered               | 7 days           | Yes             | **A-29**   |
| T-95         | Unread                                  | 24 days          | No              | A-29       |
| T-66         | Asked for a range 56 days ago           | 33 days silent   | Revised         | A-28       |
| T-64         | 7th revision sent 10-29, unacknowledged | 37 days past due | Rejected (A-18) | A-21 row 1 |
| T-37         | Priced, nothing delivered to invoice    | 41 days past due | —               | A-21 row 1 |

---

## The finding of this run: the drafts were written, they were never sent

Query 5 of this routine's six is `list_drafts`. Run to exhaustion — two pages,
the second returning no continuation token — **the account holds 51 unsent
drafts.**

| When created                        | Count  | What they are                                                                                                                                 |
| ----------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **2026-11-16, 16:49:37Z–16:53:11Z** | **33** | Enquiries to performance-industry suppliers, dyno vendors and tuning firms — **thirty-three messages written inside four minutes, none sent** |
| 2026-11-19 08:29:19Z                | 1      | One more supplier enquiry, written about two hours before yesterday's intake ran                                                              |
| 2026-10-02 / 09-30                  | 5      | **Addressed to the counterparties T-42 called likely loan fraud**                                                                             |
| 2026-09-04 / 08-19                  | 5      | Self-addressed notes, the oldest 93 days old                                                                                                  |
| Various 09-25 → 10-26               | 7      | A property agent, a carport supplier, a buildings supplier, a lender, a legal-plans service, a performance shop                               |

**T-42 recorded fifteen unsent drafts on 2026-10-10. It is Awaiting Owner, 41
days past due, and its approval column reads "none yet". The backlog has more
than tripled in that time.**

### Why this changes the reading of the last week

This record has reported for several days that nothing is leaving the business —
yesterday's brief measured it precisely at nine days since any commercial
outbound. The natural inference was that no work was being done.

**That inference was wrong, and the draft list is the proof.** Thirty-three
supplier enquiries were composed on 2026-11-16 in four minutes. The business is
not failing to write. **It is failing at the send step, and only at the send
step.**

That matters because it changes what the open approval is for. A-29 reads as a
small permission — may an inbound enquiry be acknowledged. Against 51 written
and unsent messages, it is the bottleneck itself, and the two drafted customer
replies behind it are the smallest part of what is stuck.

### My own defect, which is why this went unseen

**The last four intake briefs contain no draft-backlog section.** Query 5 is in
the routine's own table of six and the briefs for 11-16, 11-17, 11-18 and 11-19
do not report it. In that gap the backlog went from fifteen to fifty-one
unmeasured, and a draft created at 08:29Z on 2026-11-19 was not picked up by the
intake that ran at 10:20Z the same morning.

The routine's own text warns about exactly this: T-42 is cited in the spec as
"fourteen unsent drafts the routine had never asked for". It asked, once, in
October, and then stopped asking. Logged as **T-216**.

---

## Drafts prepared — NOT SENT

**No new draft was written this run, and none should have been.** Nothing new
arrived to reply to: query 1 returned zero and no customer thread moved.

**No draft was created in the mail account either.** The routine permits it.
With 51 unsent drafts already sitting in that folder, adding a fifty-second
would make the backlog worse and would bury the two replies that matter. The two
standing drafts — T-206 and T-177, written 2026-11-18 and 2026-11-13 — live in
their briefs and are unchanged.

**Both remain APPROVAL REQUIRED BEFORE SENDING (Class C), under A-29.**

---

## Conflicts found — paused, not resolved

**1. Two prospective sites, in two different counties.**

DD84's own outbound names a **"30x50 Dyno Facility in Jefferson, GA"** — thread
`1a0a6326f2f63525`, sent 2026-09-15T17:51:58Z. Jefferson is in **Jackson
County**. The register tracks a Colbert site — **Madison County** — across T-38,
T-53, T-57, T-70 and T-90, with the parcel already on the record.

**Jefferson appears nowhere in `docs/ops/TASK-REGISTER.md` and nowhere in
`docs/agents/ventures.md`.**

The Colbert financing thread is titled "final corrected … Colbert scope" and the
Jefferson thread predates it by about two months, which **suggests** Colbert
superseded it. **Supersession was not established and nothing was changed.** The
two sources are DD84's own September correspondence and the register's Colbert
rows; the controlling one should be whichever the owner is actually pursuing,
and only he knows that.

**This bears directly on T-191** — a 2% $25,000 local loan whose eligibility
turns on county — **and on T-164**, which says no location is on record. T-164
is right about `ventures.md` and the mailbox now shows why that gap is
expensive: there are two candidate answers, not none. Logged as **T-213**.

**2. T-198 says the vendor charge has failed three days running. It is four.**
T-198's title was accurate when written. It is left intact; **T-211** carries
the fourth failure with its thread ID and read time.

**3. T-42 says fifteen unsent drafts. The measured count is 51.** T-42's title
was true on 2026-10-10 and is left intact rather than rewritten; **T-210**
carries the new measurement with its date.

---

## Escalation: the SBA 504 enquiry was never delivered

Thread `1a0a6326f2f63525`. Sent **2026-09-15T17:51:58Z** to a lender. A
delivery-failure notice arrived **2026-09-15T17:52:03Z — five seconds later.**
There is no redelivery in the thread.

`CLAUDE.md` describes DD84 as pursuing SBA 504 financing. **One thread is not
the whole pursuit, and this run did not establish whether other SBA outreach
exists** — that is the next check, not a conclusion. What is established is that
this enquiry bounced in September and the bounce sat unactioned for 66 days.

**It is part of a pattern worth naming.** The 2026-11-10 outreach burst also
contained a delivery failure, found in yesterday's read. **Bounces are arriving
and nothing is noticing them**, which means a message can be composed, "sent",
and silently never delivered — the most expensive possible failure mode for a
business whose problem is already that nothing goes out. Logged as **T-212**.

---

## What query 4 surfaced: a standing backlog the window hides

Query 4 carries **no time window** — the routine lists it without one, and that
is deliberate: it asks what has already been triaged as needing a reply,
regardless of age. It returned **about 65 threads, of which 20 were sampled.**

Fifteen of the twenty are actionable and **twelve map onto existing register
rows** — the supercharger supplier (T-82, T-105), the Lexus enquiry (T-66), the
Challenger job (T-64), the credits thread (T-186), the legal review (T-13), the
Colbert zoning and due-diligence threads (T-38, T-53), the financing thread
(T-191), the SBA thread (T-212, T-213) and the two fraud-suspected threads
(T-215).

**Three do not map onto anything.** An equipment quote for a high-capacity unit,
a commercial dyno-shop ventilation quote, and a two-post lift and compressor
package quote — all outbound from DD84, all sitting in Respond/Waiting, and none
of them, nor any of their identifying terms, appears anywhere in
`TASK-REGISTER.md` or `ventures.md`.

**T-90 records that "a Colbert building quote sits outside the register, amount
unread."** That is now understated: there are at least four such threads, not
one. Logged as **T-217**.

**One thread-ID discrepancy, noted and not resolved.** Query 4 returned a
single-message thread titled "2018 RT Challenger log" (`1a0e75796744dd11`),
while the register records the Challenger job on `1a0e402cdcf75731` with 28
messages. Two different threads share the subject. Whether the single-message
one is a forward, a re-send, or the unacknowledged 7th revision T-64 describes
**was not established** — one read next run settles it, and guessing would put a
wrong fact in a customer record.

---

## Also found

- **Printify removed product variants.** Thread `1a1f83cf3247452f`,
  **2026-11-20T09:15:04Z**, unread and flagged important — about an hour before
  this run. A print-on-demand supplier removed variants of a product. Whether
  DD84's storefront still lists them was **not verified** — that is the site
  monitor's read, not this one's. Logged as **T-214**.
- **The counterparty T-42 called likely loan fraud is active again.** Two
  inbound messages titled "Down Dirty 84 LLC Store" sit in the Respond/Waiting
  label, and **two of the 51 drafts are addressed to it**, dated 2026-09-30 and
  2026-10-02. Nothing was sent, nothing was replied to, and nothing should be.
  Logged as **T-215**.
- **Merry Market is live in Google Merchant Center** — a store-ratings prompt
  arrived addressed to "Merry Market by DD84". This reinforces **T-201**, which
  already records that it has a live site as well as a processor account. No new
  row.
- **The supercharger supplier thread is still in the Respond/Waiting label**
  (T-82, T-105, A-22). A-22's premise is recorded as false and the
  recommendation remains DEFER rather than answer.
- **A legal-review enquiry to a law firm sits in Respond/Waiting**, which means
  DD84 spoke and is waiting. **T-13 is marked Blocked and 85 days past due.**
  The thread's date was not read this run, so no status was changed — but T-13's
  status and that thread disagree, and one read next run settles it.

---

## No action, with reason

- **Georgia Opportunity Ledger weekly source digest** — the other venture's
  platform emailing its own digest. Read across, never written across; nothing
  here becomes a DD84 record and nothing found here becomes a Ledger one.
- **A card issuer's referral-bonus promotion, a hotel loyalty programme, a
  credit-monitoring summary** — marketing. No figures, no action.
- **Two stock-price alerts from a bank's notification channel** — personal
  investing alerts, not account figures. Nothing withheld because nothing
  account-level was present.
- **Alibaba sourcing digests (3), TikTok Shop promotions (1), Amazon Business,
  Cloudflare feedback request, Dropbox, Lindy, Kalshi, an NFL newsletter, five
  CarGurus saved-search digests, a Freelancer project digest, a review-platform
  trust-badge offer** — marketing. No action.
- **Five Google Family Link app-install notices** — personal, two children's
  devices. Not business material and not recorded further.
- **An affiliate solicitation offering to drive orders for 5% of each** — an
  unsolicited commission proposal from a free mail account, no company, no
  verifiable trading history. No action, no reply.
- **An unsolicited one-word enquiry ("Shoe?") and one message with no subject**
  — no action.

---

## Proposed labels (not applied)

Labels remain Class B with no standing taxonomy approved, so these are proposed
only and **nothing was applied, moved, archived or marked read**:

- `DD84/Lead/Qualified` → the two lead threads behind A-29.
- `DD84/Money/Declined` → the Stripe failed-payment notice.
- `DD84/Bounced` → the SBA thread and the 11-10 delivery failure. **This one is
  the recommendation to act on**: a label that makes undelivered mail visible is
  worth more than the rest combined, given T-212.
- `DD84/Fraud-suspected` → the T-42 counterparty threads.

---

## Not checked this run

- **Stripe** — no MCP server exists. Permanent gap, not an outage. The
  failed-payment notice was read from mail, not from Stripe.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Shopify and Calendar** — not re-read this run; yesterday's daily brief read
  both live, nine hours before this run, and nothing in today's mail suggests
  either moved.
- **Google Drive** — not searched. No thread this run referenced an attachment.
- **Attachments** — none downloaded, opened or described, including the two on
  T-206.
- **Mail state** — nothing read, starred, labelled, archived or marked. Every
  thread above was observed from list results or metadata reads and left exactly
  as found; the three full reads were metadata-only.
- **Supabase** — deliberately not opened; reading it counts as activity against
  its own pause clock.
- **The customer count could not be re-verified.** `ventures.md` records three
  distinct customers with a verification date of **2026-08-03 — 109 days old**,
  well past the 30-day re-check rule. Shopify shows one order all time and
  Stripe is unreachable, so the figure cannot be confirmed or corrected from
  here. It is quoted nowhere in this brief for that reason.
- **The remaining ~45 threads in the Respond/Waiting backlog** beyond the 20
  sampled. A full pass over that label is its own piece of work, not a side
  effect of a daily intake, and claiming to have reviewed 65 threads after
  looking at 20 is the failure this routine's own contract names.
