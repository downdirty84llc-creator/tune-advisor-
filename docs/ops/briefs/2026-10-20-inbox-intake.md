# DD84 inbox intake — 2026-10-20

Run at **2026-10-20T10:20–10:42Z**. Window: since OL-0050, **2026-10-19T10:21Z →
2026-10-20T10:20Z, ~24 hours**. Accounts scanned: **Gmail
`downdirty84llc@gmail.com`**. Not reached: **Superhuman Mail**, **PayPal
connector**, **Stripe**, **bookipay**, **Square**, **Canva**.

**Threads reviewed: 48.** The result estimate was also 48, so **the window is
covered in one page with no pagination gap.** **Actionable: 9. No-action: 39.**

**Checkout, per `docs/ops/README.md` contract item 0** — tip **`3e86c48`**,
`HEAD` equal to `origin/claude/claude-md-docs-cqvhy6`, **no `src/` directory and
no `package.json`.** Both markers absent. **48 tracked files, working tree
clean.**

**This file was committed empty first** (`843b47b`), before the mail sweep — the
third application of OL-0050's repair and the first to the intake. The durable
fix is still **T-69**.

## Urgent — read first

**1. The account is negative again, and the Capital One charge lands tomorrow.**

**Third alert in five days**, thread `1a1543fa2b75e598`, **2026-10-19T13:00:15Z,
unread.** Same subject — _"Your balance is at or below zero"_ — reporting the
available balance **below zero** as of **10/19 at 08:24 Eastern**.

| Date      | As of    | State                |
| --------- | -------- | -------------------- |
| **10-15** | 13:05 ET | **Below zero**       |
| **10-17** | 17:55 ET | **At zero**          |
| **10-19** | 08:24 ET | **Below zero again** |

**All three alerts are still unread.** **No figure is recorded** — **A-19's
third instance in five days**, and the question is still unanswered.

**What makes this urgent rather than merely repetitive: the Capital One AutoPay
is scheduled for tomorrow, 2026-10-21** (T-73), **and its amount has never been
read.** The account went below zero **before** that charge, **while the debit
card was switched on**, and **with no deposit visible to this record.**

**2. The prospect is now unread at ~80 hours.** Thread `1a147a736841eaed`,
confirmed **still `UNREAD`** at 10:34Z. **No follow-up from them, and no reply
from DD84.** The draft written yesterday sits in
`docs/ops/briefs/2026-10-19-inbox-intake.md` awaiting approval. → **T-72**

**3. DAZN declined a third time** — **2026-10-19T16:00:00Z**, _"Your payment has
declined."_ Declines now on **10-15, 10-16 and 10-19**. **A vendor is retrying
charges against an account at or below zero while the owner is asking that same
vendor to cancel and refund** (T-73).

## New leads

**None.** **No enquiry, no quote request and no customer message arrived in 24
hours.** **A real zero for the window** — and the one live prospect, T-72, is
from Saturday and still unanswered.

## Existing customers needing a reply

| Customer                    | Thread             | Age                                  | What they asked                    | Draft ready                                         | Task     |
| --------------------------- | ------------------ | ------------------------------------ | ---------------------------------- | --------------------------------------------------- | -------- |
| **The store enquirer**      | `1a147a736841eaed` | **~80 hours, unread**                | Whether the store is taking orders | **Yes** — written 10-19, **not sent**               | **T-72** |
| **The Challenger customer** | T-64               | **Datalog ~163 → ~187 hours unread** | Nothing new                        | No — nothing can be drafted until the log is opened | **T-64** |
| **The C10 customer**        | T-37               | DD84 spoke last 10-12 — **8 days**   | Nothing new                        | No                                                  | **T-37** |

**No customer mail in the window**, and that was checked rather than inferred:
the 48-thread sweep contains no message from an individual about a vehicle.

## Drafts prepared — NOT SENT

**None new this run.** **Yesterday's draft to the store enquirer still stands
and is still unapproved** — it is in the 2026-10-19 intake, not reproduced here,
and **sending it is Class C.**

**Drafts in the mail account: 15, unchanged for an eighth consecutive run. Five
are still addressed to likely loan fraud** (T-42). **None was created, edited or
deleted this run.**

## Conflicts found

**1. A third party now says DD84's Melio account already exists — and Melio
itself has started writing as if it does.**

Two messages, ten minutes apart on 2026-10-19:

- **13:07:24Z**, thread `1a1456066392fc38` (**now 2 messages**) — the same
  sender as 10-16, following up: _"With your account already being made, I'd
  like to set aside some time to better understand how you would like to use
  Melio for your business."_ **The name mismatch recorded in T-74 is
  unchanged.**
- **13:17:29Z**, thread `1a15450c6e7bfc86`, from **`info@melio.com`** — _"5
  updates to your account from last quarter"_, describing expenses, bill import,
  weekend payments, more currencies and a referral bonus.

**This substantially strengthens T-74 without settling it.** The second message
comes from **Melio's own domain and addresses DD84 as an account holder** —
materially better evidence than an unsolicited sales message. **But a vendor's
product-update mail can reach a marketing list rather than an account holder**,
and the register must not harden what it has not verified. → **T-74 updated.**
**The payment-channel count in T-36 is now probably seven, and "probably" is
doing real work in that sentence.**

**2. A production-database deadline that is not DD84's to act on.**

**2026-10-20T08:30:05Z**, thread `1a1586e9de9b100b`, **unread and flagged
important**: _"Final notice: new tables in 'public' need grants from October
30."_ **Ten days.**

**The only Supabase project on this account belongs to the Georgia Opportunity
Ledger** — a different business in a different repository (`CLAUDE.md` §0).
**Nothing was touched, no Supabase tool was called, and this is recorded here
because the mail arrived here, not because the work is DD84's.** → **T-80**,
raised with the boundary stated.

## No action, with reason

- **An eight-minute reply, and the contrast is the finding.**
  **2026-10-19T14:48:43Z** the owner sent a **9.74 MB** message to a commercial
  vehicle-body manufacturer's lifecycle support desk; **the reply came at
  14:56:35Z — eight minutes — at 6.75 MB.** **Neither message has a subject
  line, and the contents are unreadable from here** (no download tool). **No
  inference is drawn about what the files were.** What is recorded: **DD84
  answered, and was answered, inside ten minutes on 10-19 — the same day a
  prospect's one-line question passed 60 hours unread, and the twelfth day GDOT
  District 1 waited on a reply that exists in draft** (A-15).
- **Two retirement-plan notices naming a third-party employer** arrived 10-19 at
  18:59Z and 19:02Z. **The employer is not named here and no conclusion is
  drawn.** It is recorded because **this register has been measuring the owner's
  response times against an assumption of full availability that nothing in
  `ventures.md` states** — and whether his capacity belongs in the operating
  record is **his decision, not an agent's.**
- **`dd84-api` failed again** — 2026-10-19T14:48:56Z. **Eight failures on eight
  separate days** since 2026-10-08. **No new dated section on T-33**:
  yesterday's addendum said plainly that a count is not a diagnosis, and adding
  a ninth tally would be the behaviour it criticised. **Step 1 is still Torque's
  and still undone.**
- **A Google security alert for a different Gmail account**,
  2026-10-19T16:44:05Z, for which this mailbox is the **recovery address** — a
  new sign-in on another account. **Not DD84's account, no action, no code
  recorded.** Noted against **T-76**'s pattern: **five access notices across
  five providers in four days.**
- **Cold outreach claiming "$250k in its first 30 days on Amazon"**,
  2026-10-19T13:46:20Z, from a `.info` domain, no subject line. **No link
  opened, no URL recorded.** The fourth unsolicited growth-services pitch this
  month.
- **Three further loan and credit solicitations** (10-19 at 17:40Z and 18:17Z,
  plus a card offer). **Recorded only because the cash context is not neutral.**
- **A Wells Fargo Advisors price alert**, 10-19T14:10:36Z — the brokerage
  relationship noted in OL-0049, no figure, nothing asserted.
- **Judge.me sent a dropshipping-coupon promotion**, 10-19T15:45:03Z — **not the
  theme-widget notice from 10-16**, and it changes nothing about **T-75**.
- **Vehicle-listing alerts ×7, retail and food promotions ×15, 3D-printing and
  laser vendor mail ×5, an NFL digest, a prediction-market recap, a truck-forum
  weekly brief, a Home Depot Pro bulk-supplies mailer, a TikTok Shop pitch, an
  Amazon Business gift guide, a YouTube TV winback, a Shop app cart reminder,
  two LensCrafters mailers, a restaurant order confirmation** — and **several
  Google Family Link notices concerning minors, which are not business material
  and are neither named nor described.**

## Proposed labels (not applied)

`cash/alerts` · `cash/outflow-scheduled` · `lead/unqualified` ·
`security/account-access` · `ops/render` · `ledger/infrastructure` ·
`vendor/subscription` · `no-action/promotional`

**Still Class B and still unauthorised** — proposed for the fifth consecutive
run.

## Not checked this run

| Source                                                                                                                                                                | Reason                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The bank**                                                                                                                                                          | **No connector.** **Three alerts in five days are the entire evidence base.** No transaction list, no pending items, no overdraft terms, and **nothing explains how the account went below zero, to zero, and below again.**                                          |
| **Reddit**                                                                                                                                                            | **Egress-blocked** (T-59). **A targeted three-day sweep of `from:reddit.com` returned nothing**, so no suspension or restoration notice arrived — **which is weak evidence and not a resolution. T-60's deadline passed yesterday and its outcome is still unknown.** |
| **Stripe · PayPal connector · bookipay · Square · Chime**                                                                                                             | No server / re-auth required / no API / no connectors. **Square's offline-payment setting is still on and its account status still unestablished** (T-61).                                                                                                            |
| **Superhuman Mail**                                                                                                                                                   | Needs authorisation. **A second mailbox no run has ever scanned.**                                                                                                                                                                                                    |
| **The two large attachments in the 10-19 vendor exchange; the two PayPal Mastercard documents; the Webador invoice; T-53's attachment; Table 13.J; the fee schedule** | **No download tool**, and egress is blocked for the state PDFs.                                                                                                                                                                                                       |
| **Google Drive**                                                                                                                                                      | Not read this run — no thread in the window referenced a Drive attachment.                                                                                                                                                                                            |
| **GitHub**                                                                                                                                                            | Not re-read since 2026-10-15.                                                                                                                                                                                                                                         |
| **Mail older than the window**                                                                                                                                        | **~20,700 unread remain unassessed.**                                                                                                                                                                                                                                 |

**Card-toggle check, done properly:** a targeted sweep of
`from:notify.wellsfargo.com` over three days returned six threads, **and every
one's `messageCount` matched the messages returned**, so nothing was silently
truncated. **No toggle alert since 2026-10-17T16:37:38Z — the card has been ON
for roughly 90 hours**, after thirty-two toggles in the nine days before that.

---

**Class A held.** Nothing sent, forwarded or replied to. **No draft created,
edited, sent or deleted.** No label applied, no thread moved, archived, trashed
or reported. **No link in any solicitation opened.** No calendar write —
**calendar read 10:36Z for 10-20 and 10-21: zero events, the sixteenth
consecutive empty day.** **Shopify read 10:37Z: 0 orders.** No charge, refund,
invoice, payout or fulfilment action. **No bank, card, Square or payment action
of any kind.** **No `mcp__Supabase__*` tool was called** and nothing belonging
to the Georgia Opportunity Ledger was read or written. No scheduled task
created, changed or fired. `docs/growth/` untouched.

**§5 held.** **No balance figure from any of the three alerts, neither set of
last-four digits, no verification code.** **No customer name, email address or
phone number** — the enquirer is a thread ID, customers are task IDs. **The
third-party employer named in the retirement notices is not written here.**
**The vendor support contact's name, direct line and address are not recorded**
— the correspondence is described by its shape and timing only. **No minor is
named or described.** **No solicitation URL is recorded.**
