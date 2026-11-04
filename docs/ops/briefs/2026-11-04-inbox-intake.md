# DD84 inbox intake — 2026-11-04

Run at **2026-11-04T10:21Z**, Wednesday. Window: **since OL-0082,
2026-11-03T10:20Z → 2026-11-04T10:20Z** (24 hours).

> **SKELETON COMMITTED BEFORE GATHERING** at **`361e0b1`** — OL-0050's repair,
> **twentieth application.** Seven worker restarts have hit this session; two of
> them landed mid-run with work uncommitted, which is why that file existed
> before anything had been read.

**Checkout, contract item 0:** tip `3aa7f1c`, `HEAD` equal to origin, no `src/`,
no `package.json`, clean. **74 tracked files, not the 28 the prompt expects** —
**twenty-second run reporting it, T-85 step 3.**

**A-19 is in force.** Shape plus thread ID, never a cash figure — and the leak
gate refused this register's commits three times in two days over one
subscription amount, so the gate runs as its own step. **Revenue and supplier
invoices are reported in full under A-13.** **T-116:** the end time is this
file's commit, not an estimate.

**T-102 is Accepted Risk**, so the thread list supplies neither dates nor read
state. **Every age and read/unread claim below comes from `get_thread` or
`get_message` on that item** — **thirteen fetched individually.**

Accounts scanned: **Gmail**. Not reached: **Superhuman Mail, PayPal, Canva**
(all three need re-authentication); **Stripe, bookipay, Square** (no connector —
T-36).

Threads in the window: **55 estimated, 50 returned on one page**, plus three
targeted sweeps. Material: **13**. **New leads: zero — eleventh consecutive
run.**

## What this run was watching for, and what it found

| What                                                      | When                                      | Whose date    | Found this run                                                |
| --------------------------------------------------------- | ----------------------------------------- | ------------- | ------------------------------------------------------------- |
| **TikTok Shop's decision on the resubmitted application** | **2026-11-04T12:28Z → 2026-11-05T12:28Z** | **TikTok's**  | **No** — nothing from TikTok since 2026-11-02                 |
| **The eighth Shopify subscription attempt**               | **2026-11-05**                            | **Shopify's** | **No** — the last billing-failure notice is still the seventh |

Yesterday's daily brief called the TikTok decision **"the most consequential
thing happening this week"** and **deliberately kept it out of the top three**
on the grounds that **"TikTok's decision needs nothing from anybody for 48
hours."** That window opens at 12:28Z today, **after this run's cut-off**, so
silence here is the expected result and not a new fact. **Both watch items are
still pending and neither has moved.**

## Urgent — read first

### 1. A deadline nobody in this register chose expires tonight

**The bank sent an at-or-below-zero alert at 2026-11-03T15:36:55Z, still
unread.** **Amount withheld under A-19; account digits withheld; thread
`1a1a20e6e98409e5`.** The balance it reports is a snapshot as of **11/03 10:16
a.m. Eastern Time**.

**What makes it worth the top of this brief is not the balance — it is a
sentence in the body.** The notice states that under **Extra Day Grace Period**,
overdraft fees can be avoided **if the available balance is positive as of 11:59
p.m. Eastern Time on the next business day.** The alert is dated Tuesday
2026-11-03, so the next business day is **today, Wednesday 2026-11-04 — expiring
2026-11-04T23:59 ET, which is 2026-11-05T04:59Z.**

**Stated precisely, because the temptation is to overstate it.** The notice
describes a mechanism. **It does not confirm that the business is enrolled in
that mechanism, and it does not confirm that any overdraft fee is actually
pending.** What is confirmed is the balance shape, the snapshot time, and the
mechanism's wording. **So this is a real outside-set deadline on a conditional
consequence**, not a confirmed fee with a clock on it.

**One further thing in the same message, recorded because it changes the
category.** The footer carries the statutory line that **"this communication is
an attempt to collect a debt and that any information obtained will be used for
that purpose."** **A balance alert that is also a debt-collection notice is a
different kind of document from the balance alerts this register has logged
before**, and it is the reason this row is opened as its own task rather than
folded into T-71. — **T-129, new**

### 2. A second dated outflow, on a different account, nine days out

**Capital on Tap wrote at 2026-11-04T07:30:55Z, unread**, to say a scheduled
payment **will be drafted by the bank on 2026-11-09.** **Amount withheld under
A-19; bank-account digits withheld; thread `1a1a577d2d280752`.**

**Why the amount is withheld, said plainly, because the last time this register
reasoned about the boundary it got it wrong.** A-19 names "a balance, an
overdraft amount, a declined-payment amount or **any account-level figure**." A
scheduled auto-draft against a business credit card discloses that card's
position, so **it is an account-level figure on the broad reading.** **The
narrow reading — "this is a vendor's payment amount, not an account balance" —
is the exact reading that put a forbidden figure into two files on 2026-10-30
and produced A-24.** **Withheld on the broad reading, and the reasoning recorded
so the next run does not relitigate it.**

**The link that must not be drawn.** These two notices arrived sixteen hours
apart and it would be easy to write that the account is at or below zero and a
draft is coming against it. **They name different accounts — the digit-sets do
not match.** **So this register does not know whether the 2026-11-09 draft will
clear**, and says so rather than implying it will fail. — **T-130, new**

### 3. The authoritative October record was published yesterday and this register cannot open it

**Shopify issued October 2026 Balance statements at 2026-11-03T13:08:29Z,
unread, thread `1a1a1868a56bd3ca`.**

**This run tried to read it and was refused.** A live `shopifyPaymentsAccount`
query returned: _"Access denied for shopifyPaymentsAccount field. Required
access: the `read_shopify_payments` or the `read_shopify_payments_accounts`
access scope."_ **That is the fourth time this scope has been confirmed denied,
and it is confirmed against the live API this run rather than carried forward.**

**Why that matters more than a routine statement notice.** The register carries
**three payers, $1,550.00 between them, none attributed and none acknowledged**
— and an all-time revenue figure stated three ways whose August baseline **rests
on a basis recorded nowhere**, so that **only order #1001's $499.18 has ever
been traced to the cent.** **A month-end statement is the document class that
settles exactly this.**

**What is not claimed:** that this statement contains those three payments.
**They were not Shopify orders** — the store holds one order, #1001 — so the
statement may well not reach them. **What is claimed is narrower and still
useful: an authoritative October record now exists, it is one click for the
owner, and no agent in this register can open it.** — **T-131, new**

## Actionable items

| #   | Item                                                                              | Shape                                                    | Thread                                 | Task               |
| --- | --------------------------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------- | ------------------ |
| 1   | **Bank at-or-below-zero alert with a grace-period deadline expiring tonight**     | **Figure withheld, A-19.** Also a debt-collection notice | `1a1a20e6e98409e5`                     | **T-129**          |
| 2   | **Scheduled card auto-draft, 2026-11-09, different account**                      | **Figure withheld, A-19**                                | `1a1a577d2d280752`                     | **T-130**          |
| 3   | **October Shopify Balance statements published; scope-denied to this register**   | Statement exists, unopened                               | `1a1a1868a56bd3ca`                     | **T-131**          |
| 4   | **Two card-state notices, 62 minutes apart**                                      | Card on, then off. Digits withheld                       | `1a1a17fa8c73aa50`, `1a1a1b8217c52cf0` | **T-104**          |
| 5   | **A lender contradicted itself about an application, in 2h38m**                   | Promotional mail, both unread                            | `1a1a2977c8cfbdc8`, `1a1a328fba788a66` | **T-126**          |
| 6   | **Unsent drafts to loan recipients, one institutional and four free-mail**        | Oldest 2026-09-29, never sent                            | —                                      | **T-135**          |
| 7   | **A phishing message whose Date header this register cannot parse**               | `internalDate` returned as `0`                           | `1a1a24a7ff5d2ce8`                     | **T-133**          |
| 8   | **A second phish, card-brand display name over an unrelated domain**              | ~16 third-party names in Bcc, withheld                   | `1a1a2691364d5b63`                     | **T-52** adjacent  |
| 9   | **An unread account sign-in notice the previous run missed**                      | Outside this window, inside the last one                 | `1a19de6b7e7f9225`                     | **T-134**          |
| 10  | **Vendor firmware release for an automotive MCU security engine**                 | Unread, unactioned, package names withheld               | `1a1a1fc92d8fc0db`                     | **T-132** adjacent |
| 11  | **Three connectors changed their tool parameter names mid-session**               | Gmail, Calendar, Shopify                                 | —                                      | **T-132**          |
| 12  | **The business Pinterest account is named and its feed has no automotive signal** | Growth-side; not Torque's to act on                      | `1a1a452665a5ab3d`                     | **T-128**          |
| 13  | **Georgia SBDC monthly guide with a training offer**                              | Legitimate state small-business body                     | `1a1a27cffeabf229`                     | Scan input         |

### On item 4 — the card notices, and the pattern this register must not claim again

| When                     | What                    |
| ------------------------ | ----------------------- |
| **2026-11-03T13:00:58Z** | Card turned back **on** |
| **2026-11-03T14:02:38Z** | Card turned **off**     |

**The gap is 61 minutes 40 seconds.** **T-104's original theory was "60-second
windows, exactly an hour apart," and eleven dated notices demolished it** — the
real gaps ran 22 minutes, 9 hours, 36 hours, 6 hours, 1 hour, 29 seconds.
**These are the thirteenth and fourteenth notices, and one near-hourly gap does
not revive a theory eleven points falsified.** **Recorded as two timestamps, not
as a schedule.**

**The adjacency this run is declining to make causal.** In Eastern Time the
sequence reads: card on 8:00 a.m., card off 9:02 a.m., balance snapshot 10:16
a.m., alert sent 10:36 a.m. **It is tempting to write that the card was switched
off because of the balance.** **This register has twice built a causal story out
of adjacent timestamps and been wrong both times** — the card-toggling schedule
and T-119's midday billing band. **So: four timestamps, in order, and no
mechanism asserted.**

### On item 5 — T-126 gains evidence and still has no answer

**Two mails from the same lender, both unread, both promotional, 2 hours 38
minutes apart:**

| When                     | What it says                                                               |
| ------------------------ | -------------------------------------------------------------------------- |
| **2026-11-03T18:04:40Z** | **No offer could be matched** at this time; a partner is suggested instead |
| **2026-11-03T20:42:41Z** | **A preliminary approval is waiting**, from an application "a while" ago   |

**These contradict each other.** **Neither is evidence of a live application** —
lenders' "since you applied" language routinely means a lead form, and a sender
that says both things in one evening is not a reliable narrator about either.

**What does move T-126 is item 6.** The draft folder holds **an unsent message
dated 2026-09-29 addressed to a Georgia certified development corporation's
loans team**, which is the SBA 504 channel, **and four unsent messages to
free-mail accounts using lender-style display names.** **Addresses withheld
under §5.**

**Two separate findings there, and they should not be merged.** The
institutional draft means **the owner was composing to a real 504 lender five
weeks ago and never sent it** — directly relevant to T-126 and to the
opportunity scan that ranked an SBA microloan second while explicitly not
recommending it. **The four free-mail drafts match the advance-fee loan-fraud
pattern**, which is worth the owner's eye. **Nothing is alleged about any
recipient**; the pattern is reported and the judgement is the owner's. —
**T-135, new**

### On item 7 — the first instrument defect in this family that an outsider controls

**The phishing message at thread `1a1a24a7ff5d2ce8` returned
`"date": "2026.11.03-11.22.03"` and `"internalDate": "0"`.** Every other message
fetched this run returned a proper RFC 3339 date and a real `internalDate`.

**The sender supplied a Date header the API did not parse, and the ordering key
came back as zero.** The subject is additionally padded with whitespace and a
long opaque token — ordinary filter evasion — but the date is the part that
matters here: **this register timestamps and orders everything it reports, and a
sender can hand it a message with no usable timestamp.**

**That makes seven members of the instrument-defect family** — silent Gmail
truncation, a window too narrow for a quiet thread, an age carried forward,
T-102's missing dates and labels, the task-ID recount undercount,
`discountedTotalSet` reporting a pre-discount total, Shopify's rolling four-item
attempt window — **and the first where the defect is attacker-supplied rather
than accidental.** — **T-133, new**

### On item 9 — what the previous run missed

**An account sign-in notice is dated 2026-11-02T20:15:04Z, which falls inside
the 2026-11-03 intake's window, not this one.** That run reported **"35 of an
estimated 35"** threads reviewed. **It did not report this item.**

**The item itself is low-severity.** The sign-in is from **Atlanta, Georgia, on
mobile Chrome / Android** — consistent with the owner's own phone and the
business's own state. **IP address and the notification's tokenised links
withheld.** **This register cannot confirm whose device it was**, and the notice
is unread; confirming it is one click.

**The miss is the finding, not the sign-in.** A run that reports a complete
thread count and drops a security notification has an accuracy problem in its
own reporting, and this brief records it against itself rather than leaving it
implicit. — **T-134, new**

### On item 11 — three connectors changed their parameter names under this run

| Tool                          | Was                   | Now                                   |
| ----------------------------- | --------------------- | ------------------------------------- |
| `Gmail.search_threads`        | `max_results`         | `pageSize`                            |
| `Gmail.get_message`           | `format`              | `messageFormat`                       |
| `Google_Calendar.list_events` | `timeMin` / `timeMax` | `startTime` / `endTime`               |
| `Shopify.graphql_query`       | —                     | `currentBulkOperation` now deprecated |

**Four call signatures, three connectors, one run.** Each failed on the first
attempt and succeeded on the corrected retry, so **no section of this brief is
degraded by it** — but **the invocations recorded in earlier briefs are no
longer all valid**, and a routine that fires unattended against the old names
will fail its gathering step rather than degrade gracefully. **This is the
operational risk worth the row.** — **T-132, new**

### On item 12 — the Pinterest account, and the boundary

**The account's display name is "Down Dirty 84 | Remote ECU Tuning & Holley
EFI"**, confirmed from the message envelope at 2026-11-04T02:10:25Z. **Its
recommendation feed contains no automotive content at all** — the surfaced items
are fitness, food and haircut material, which is what a feed looks like when an
account has no meaningful activity to learn from.

**That is an operational observation and it stops there.** **What to do about a
dormant social account is Rev's question, and `docs/growth/` is Rev's record.**
T-128 already exists for the registry inconsistency. **Nothing is written across
the two records.**

## New leads

**Zero. Eleventh consecutive run with no inbound customer enquiry.**

**The live store was read this run: one order, #1001, PAID and FULFILLED.** No
new orders. **No customer wrote, and no waiting customer replied** — the
person-to-person sweep returned eight threads and every one was a vendor or
platform sender.

## Drafts prepared — NOT SENT

**None. This run drafted nothing, because nothing in the window needs a customer
reply.**

**The standing draft backlog is unchanged at 15, newest dated 2026-10-26.** None
was created in this window. **Three customer sends remain gated behind A-21, and
A-23 remains the one packet of the eight with nothing wrong with it.** Sending
is Class C and this routine has never sent and must not start.

## Money and platform notices

**Nothing came in. Two dated outflow facts arrived and both are knowable.**

| Direction | Amount             | When / due               | Status                                                             |
| --------- | ------------------ | ------------------------ | ------------------------------------------------------------------ |
| —         | **withheld, A-19** | **2026-11-03T15:36:55Z** | **Bank at-or-below-zero alert.** Thread `1a1a20e6e98409e5` — T-129 |
| **OUT**   | **withheld, A-19** | **due 2026-11-09**       | **Scheduled card auto-draft**, different account — T-130           |
| IN        | —                  | —                        | **Nothing in. Last inbound was $400.00 on 2026-10-29**             |

**No eighth Shopify subscription attempt in this window.** The latest
billing-failure notice is still the seventh, thread `1a19ec68d58edba1`,
**2026-11-03T00:19:33Z**, and **the invoice has now been unpaid since 2026-10-22
— thirteen days.** **The eighth attempt is still expected 2026-11-05.**

**One incidental fact worth recording from the statement notice**, because the
register has carried "Stripe: no MCP server" as a bare gap: the notice states
Shopify partners with **Stripe Payments Company** for money transmission with
**funds held at Fifth Third Bank N.A.** **That does not create Stripe access and
nothing is read from it** — it names where the store's money sits, which the
register did not previously record.

## Appointments

**None. The calendar is empty through 2026-11-12. Read live this run.** **Tenth
consecutive empty check.**

## Carried forward, unchanged

- **T-110** — the power revision whose thread carries the owner's own
  instruction not to add power until the oil-pressure issue was confirmed clear,
  with no clearance in the thread. **Nothing new arrived. Nothing is alleged
  about the car. One sentence closes it.** **Fifth brief running.**
- **T-52** — the credential phish, unread since 2026-10-09, now **26 days**
  (yesterday's brief had it at 25.01). **Mail state is the owner's; this
  register may not touch it.** **A second phish arrived in this window**, which
  is the argument for clearing the first.
- **T-60** — the platform account flag, **still the only expired outside-set
  deadline in the register**, 16 days past.
- **T-89** — the subscription billing agreement. **Seven failures, thirteen days
  unpaid, eighth attempt 2026-11-05.** **T-117's diagnosis stands: one broken
  billing agreement, not a payment instrument problem.**
- **T-100** — TikTok's decision. **Nothing from TikTok since 2026-11-02.** Still
  In Verification and still needs nothing from anybody.
- **A-21** — three prices for one class of work, $350 published / $250 sold /
  $300 quoted. **T-64 still unpriced.** Three sends wait behind it.
- **A-23** — now **9.7 days**. One reply, nothing to fill in.
- **The three unattributed payers** — $450, $700, $400, **$1,550.00 between
  them**, none acknowledged. **Item 3 above is the first new thing to bear on
  them in a week.**

## Not reached this run

| System                                | Why                                                 |
| ------------------------------------- | --------------------------------------------------- |
| **Superhuman Mail, PayPal, Canva**    | **All three need re-authentication**                |
| **Stripe**                            | No MCP server — T-36                                |
| **bookipay**                          | No API                                              |
| **Square**                            | No connector                                        |
| **Shopify Balance / payments detail** | **`read_shopify_payments` denied — confirmed live** |

**No account-level figure appears anywhere in this file, under A-19.** Where a
figure existed and was declined, this brief says **"withheld, A-19"** and not
"not available" — **the figure was available and this run declined to publish
it.**

## What this run did not do

- **Did not open, label, read, trash or reply to any message.** Mail state is
  the owner's.
- **Did not claim a TikTok decision or an eighth billing attempt.** Neither has
  happened; silence is reported as silence.
- **Did not assert that the bank alert and the 2026-11-09 draft concern the same
  account.** They do not match, and the convenient story is the wrong one.
- **Did not link the card notices to the balance snapshot.** Four timestamps, no
  mechanism.
- **Did not treat a self-contradicting lender's marketing mail as an answer to
  T-126.**
- **Did not publish:** the balance figure, the scheduled draft figure, three
  account digit-sets, the owner's personal name, an IP address, the
  notification's tokenised links, the firmware package filenames and download
  URL, the phish subject's opaque token, or **the roughly sixteen third-party
  personal names stuffed into one phishing message's Bcc field.**
- **On that last one:** those names are not DD84 customers, so A-13's customer
  rule does not literally reach them — **and §5 says a new category of sensitive
  material needs its own decision rather than a judgement call.** **Publishing
  sixteen unrelated people's names harvested from a phish into a public
  repository would be a fresh exposure of third parties.** **Withheld, and
  recorded as a §5 judgement in the shape A-19 was made in: publish the finding,
  withhold the material, say which.**
- **Did not write into `docs/growth/`.** The Pinterest observation is
  operational; the decision is Rev's.
- **Did not open** the Vercel dashboard, the other repository, or the paused
  Supabase project.

## The honest shape of this run

**A quiet window with one real deadline in it.** No enquiry, no order, no
customer reply, no appointment — and a bank notice whose grace-period clause
expires tonight, which is the first outside-set deadline this register has
carried that falls on the day of the run reporting it.

**Seven new rows is a cost, and it should be said.** The register held **52 rows
Awaiting Owner out of 128** before this run and now holds **56 out of 135**.
**Four of the seven new rows are the business — T-129, T-130, T-131, T-135 — and
three are this platform auditing itself: T-132, T-133, T-134.** **A register
that spends three of seven new rows on its own accuracy is either unusually
honest or insufficiently busy, and on a day with no inbound work it is probably
both.**

**The overdue count moved the way it moved yesterday and for the same reason.**
**85 of 113 open rows are past due, up from 81 of 106** — and **all four of the
increase are rows whose agent-proposed dates fell on 2026-11-03: T-108, T-112,
T-116 and T-118. None is new work.** **All fourteen Critical rows remain
overdue, the newest by five days and the oldest by seventy-six, and exactly two
of the fourteen carry a date set outside this register.**
