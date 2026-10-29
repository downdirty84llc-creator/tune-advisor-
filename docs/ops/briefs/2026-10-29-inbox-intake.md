# DD84 inbox intake — 2026-10-29

Run at **2026-10-29T10:21–11:12Z**, Thursday. Window: **since OL-0071,
2026-10-28T10:20Z → 2026-10-29T10:20Z** (24 hours).

> **SKELETON COMMITTED BEFORE GATHERING** — OL-0050's repair, twelfth
> application, at `6d0d224`.

Accounts scanned: **Gmail**. Not reached: **Superhuman Mail** (needs
re-authentication); **Stripe, PayPal, bookipay, Square** (no connector — T-36).
**Shopify was read live** and is the controlling source for everything in §1.

**T-102 is Accepted Risk**, so the thread list cannot supply dates or read
state. **Every age and every read/unread claim below comes from `get_thread` on
that specific thread, fetched this run.** Eleven threads were fetched
individually; the remaining seventeen are counted and not aged.

Threads reviewed: **28 of an estimated 28**, non-promotional. Actionable: **7**.
No-action: **21**. **New leads: zero** — eighth consecutive run with no new
enquiry.

## Urgent — read first

### 1. The supercharger supplier answered eight days ago, and nobody read it

**This is the correction that matters most in this run, and it invalidates a
packet that is waiting to be sent.**

For three weeks this register has recorded the supplier thread as _"chased
twice, no reply, goodwill DD84 asked for"_ and has aged it from **DD84's own
chase**. **That framing is false.** The thread, fetched this run:

| When                     | Who          | State      |
| ------------------------ | ------------ | ---------- |
| 2026-09-26T11:19:29Z     | DD84 sent    | —          |
| **2026-10-04T20:33:02Z** | **Supplier** | **UNREAD** |
| 2026-10-05T11:11:48Z     | DD84 chased  | —          |
| **2026-10-21T01:06:06Z** | **Supplier** | **UNREAD** |

**The supplier has replied twice. Both replies are unread — one at 24.57 days,
one at 8.39 days.** And **DD84's chase went out 14.65 hours after the first
unread reply**: the business chased a supplier who had already answered, without
reading the answer.

**What this does to A-22.** A-22 is a **holding reply drafted on the premise of
silence** — it exists to chase a supplier who has not responded. **The premise
is false, and the packet must not be sent as drafted.** Sending a "just
following up" message to someone whose two answers are sitting unread is worse
than sending nothing.

**A-22's packet body is unchanged in `APPROVALS.md`**, because that file's rule
is that an agent edits only **Response** and **Actual result**. **This brief is
the controlling correction**, and **the recommendation is DEFER** — read the
2026-10-21 reply first, then decide what the message should say. **T-105.**

**Nothing in either reply is quoted here**, because neither was opened this run:
`get_thread` at metadata level establishes that the messages exist, their dates
and their read state, and nothing about their contents. **What the supplier
actually said is not known and is not guessed at.**

### 2. The first Shopify payout landed — $530.31, not $550.00

**2026-10-29T09:17:05Z, 0.04 days ago.** _"A transfer of $530.31 was deposited
into your Balance account on October 29, 2026."_ **The first time money has ever
moved out of the storefront and into the business.**

**The store was read live and the whole transaction now reconciles to the cent**
— the first DD84 sale whose economics are fully known:

| Line                                          | Amount          | Source                            |
| --------------------------------------------- | --------------- | --------------------------------- |
| Customer paid (order #1001)                   | **$550.00**     | Shopify, live                     |
| — of which **included** GA + county sales tax | **−$31.13**     | Shopify tax lines, live           |
| Processing fee                                | **−$19.69**     | Shopify transaction fee, live     |
| **Paid out to Balance**                       | **$530.31**     | **$550.00 − $19.69**, and the ✓   |
| **Retained by the business**                  | **$499.18**     | $530.31 − $31.13 of tax collected |
| **Checkout → cash**                           | **5.89 days**   | 10-23T11:56:43Z → 10-29T09:17:05Z |
| Processing rate actually charged              | **3.58% gross** | $19.69 ÷ $550.00                  |

**The register carries $550.00. The business keeps $499.18.** That is **$50.82,
or 9.24%, of overstatement** on the only storefront sale there is — and it has
been quoted as $550.00 in `ventures.md` and in six briefs. **Corrected in the
registry this run.**

**On the fee.** The rate name Shopify records is
**`paypal_domestic_card_not_present` at 3.49%**. 3.49% of $550.00 is $19.195,
and the charge was $19.69, **leaving $0.495 — consistent with a fixed
per-transaction component of about $0.49**, which is arithmetic from two live
figures and is labelled as such. **A standard 2.9% + $0.30 card rate would have
cost $16.25**, so this order paid **$3.44 more**. Trivial once; **it is a
per-order structural cost and this is the first time the register has had the
number at all.**

**Shopify Payments itself could not be read** — `shopifyPaymentsAccount`
returned _"Access denied … required access: `read_shopify_payments`"_. **So the
payout record was not read from the payments side; it is the notification plus
the order arithmetic, and those two agree exactly.** Named, not papered over.

### 3. The Shopify bill failed a fourth time — and the instrument is PayPal, not a card

**2026-10-28T12:02:51Z, 0.93 days ago. Amount withheld under A-19** — it is a
declined-payment amount; **thread `1a18264480149222` holds it.** **Shopify's own
notice carries the full timeline and names the method for the first time:**

| Attempt  | Date             | Shopify's wording                                |
| -------- | ---------------- | ------------------------------------------------ |
| 1st      | Oct 22, 2026     | —                                                |
| 2nd      | Oct 24, 2026     | —                                                |
| 3rd      | Oct 26, 2026     | —                                                |
| **4th**  | **Oct 28, 2026** | **"Primary payment method PayPal … failed"**     |
| **Next** | **Oct 30, 2026** | **Tomorrow — the day of the weekly cash review** |

**This corrects two standing claims of this register's own.**

**First, T-89 and yesterday's daily brief both asked the owner to "put a working
instrument on Shopify" and listed the fix as "a card change". It is not a
card.** Three runs speculated about whether each attempt hit the stopped debit
card; **Shopify says the primary method is PayPal**, and PayPal is already the
subject of a declined electronic transfer on 10-20 and a locked card on 10-26,
and is **the one connector in this session that needs re-authentication.** The
Shopify billing failures and the PayPal problems are **one instrument, not
two.**

**Second, yesterday's intake proposed "a single cause behind five failures" — a
card schedule explaining three Shopify bills among others. That is now falsified
on the Shopify leg.** A card being off cannot fail a PayPal charge. **The
hypothesis was testable, it has been tested, and it is wrong about the Shopify
bills.** T-104 is narrowed accordingly.

**The store is not flagged for closure right now** — `criticalUserMessage` is
empty, read live, plan **Basic** — and **the failing bill is that plan's monthly
subscription**, which is the cheapest recurring commitment this business has. But
**Shopify's notice itself says to add a backup "so your store stays open if this
happens again"**, and **the store holding DD84's only settled storefront revenue
cannot collect its own monthly subscription, on the fifth attempt, tomorrow.**

### 4. The Challenger customer's datalog is no longer unread

**Fetched this run: the thread's last message — 2026-10-13T15:39:45Z, 15.78 days
old — carries no `UNREAD` label.**

**For two weeks this register has reported it as unread, and made "open the two
datalogs" the first priority of the 2026-10-27 brief.** That claim is **false as
of today.** The 10-28 intake could not verify it and said so; **today it could,
and the answer is the opposite of what was carried.**

**What changed is not knowable from here** — either the owner read it in the
last day or two, which fits a week of him working the inbox directly, or an
earlier observation was wrong. **No version is asserted.** What is established:
**it is read, and it is still unanswered after 15.78 days.** **Read is not
answered**, and the distinction is the whole of T-64: the customer sent the log
he was asked for, the log has now been looked at, and **no reply has gone
back.**

## New leads

**None. Eighth consecutive run.** No customer wrote to DD84 in this window.

| Lead              | Contact | Vehicle | Requested | Source | Task |
| ----------------- | ------- | ------- | --------- | ------ | ---- |
| _(none this run)_ | —       | —       | —         | —      | —    |

## Existing customers needing a reply

**Every row below was fetched individually this run. No age and no read state is
carried forward.**

| Customer                      | Thread             | Age        | State — verified 2026-10-29                                               | Task      |
| ----------------------------- | ------------------ | ---------- | ------------------------------------------------------------------------- | --------- |
| **The supercharger supplier** | `1a0dd710e6d59123` | **8.39d**  | **REPLIED 10-21 and the reply is UNREAD.** An earlier reply unread 24.57d | **T-105** |
| **The Challenger customer**   | `1a0e402cdcf75731` | **15.78d** | **Log now READ — and still unanswered.** Correction, see §4               | **T-64**  |
| **The Sunday enquirer**       | `1a174388c7b0c461` | **3.68d**  | **UNREAD.** A-23 is drafted and needs nothing filled in                   | **T-95**  |
| **The order #1001 customer**  | `1a177d7b095ee674` | **2.57d**  | His confirming datalog is **UNREAD**                                      | **T-91**  |
| **The C10 customer**          | `1a1082503004a073` | **16.57d** | **DD84 spoke last** (10-12, SENT). **Waiting is correct** — register ✓    | **T-37**  |
| **The $450 payer**            | unknown            | **7.43d**  | Unattributed, unacknowledged                                              | **T-88**  |
| **The $700 payer**            | unknown            | **5.43d**  | Unattributed, unacknowledged                                              | **T-92**  |

**Three unread messages are sitting from people who are owed an answer** — a
supplier at 8.39 days, an enquirer at 3.68 and a paying customer at 2.57 — and
**the two oldest things here (16.57d and 15.78d) are both correctly stated as
not waiting on a read.**

## Drafts prepared — NOT SENT

**None this run, and one existing draft is now withdrawn from recommendation.**

**Nothing new arrived that wants a reply** — no customer mail at all in the
window. The eighth such run.

**A-22 should not be sent as drafted** (§1). **No replacement is drafted**,
because a replacement would have to respond to a message nobody has read:
drafting a reply to unread correspondence is how the chase in §1 happened in the
first place. **The sequence is read, then draft** — and the reading is the
owner's, since no session here can open the thread's contents on his behalf.

**No new approval packet is opened this run.** Every finding above is either a
correction to the record (Class A, done here) or a decision only the owner can
make with facts now in hand. **Seven packets are already queued**; an eighth
that proposes no action I could execute would be noise, and yesterday's brief
established that the queue — not the diagnosis — is the constraint.

### The owner answered two packets while this brief was being written

**This section was drafted saying nine packets were pending. Seven are.**
OL-0073, from a sibling session, landed on the remote before this run's push and
**disposed of two — the first owner decisions since A-15 on 2026-10-21:**

- **A-19 — APPROVED, Option C.** The **shape** of a cash position may be
  recorded and **the figure may not**, with the Gmail thread ID so the owner is
  one click from the number. **Written into `CLAUDE.md` §5 and into both routine
  command files, including this one**, which had carried no cash rule at all
  despite being the routine that meets the bank alerts.
- **A-20 — DEFERRED, "price the jobs first."** Nothing sent; the three drafts
  stand.

**The deferral makes this run's smallest finding its most expensive one.**
A-20's three sends now wait on **A-21**, which is the gate — and **this brief
found that A-21's central number has only ever transacted at $250**, after a
$100 code (§2, T-107). **A-21 was raised without that fact and is now the single
packet standing between DD84 and three silent counterparties.** **T-107 is one
sentence and it is in front of all of it.**

**Yesterday's brief said the register asks for decisions through a channel the
owner is not reading.** Two answers in a day is the counter-evidence, and it is
recorded as such. **It was said once; it is not repeated, and it is now partly
wrong.**

## Conflicts found

**1. The supplier thread was aged from the wrong message for three weeks.**
Every prior run aged it from **DD84's 2026-10-05 chase** (23.96 days today),
which is why it read as escalating silence. **The supplier's 2026-10-21 reply is
the thread's last message. Controlling source: `get_thread`.** **The error was
structural, not arithmetic** — the age was computed correctly from a message
that was not the latest one, and **the list payload that would have shown the
newer message is exactly what T-102 took away.**

**2. "Unread" survived two weeks without re-verification and was wrong.** See
§4. **Controlling source: the thread's own `labelIds`.** The 10-27 and 10-28
briefs both labelled it "not re-verified" and were right to; **a labelled
carry-forward is honest, and it is still a claim waiting to be wrong.**

**3. Yesterday's five-failures-one-cause hypothesis is falsified on the Shopify
leg.** See §3. **Controlling source: Shopify's own billing notice.** **Recorded
as a hypothesis that earned its keep by being falsifiable in a day.**

**4. Today's card window was 29 seconds, and not on the hour.** On at
**08:51:45Z**, off at **08:52:14Z**. Yesterday's two windows were 60 and 61
seconds, an hour apart. **Three windows in 34 hours, widths 60s, 61s, 29s, and
today's does not continue the hourly spacing.** Yesterday's conclusion — _"a
60-second window, opened twice, exactly an hour apart … a person does not do
that"_ — **was drawn from two points and the third does not fit it.** A varying
width points, if anything, **toward a deliberate act each time rather than a
fixed-width script.** **What survives: the card is opened and shut again inside
a minute, repeatedly, and that is still nobody's idea of ordinary cash
management. What does not: that it is hourly, fixed-width, or necessarily
automated.** T-104 reworded.

**5. Shopify's own fields disagree about the discount, and a future run will
read the wrong one.** On the Mopar line, `discountAllocations` reports **$100.00
allocated** while `discountedTotalSet` still reports **$350.00**. **Controlling
source: `discountAllocations`, corroborated independently by the tax
allocation** — that line's tax is $14.15, which is 6% inclusive of **$250.00**,
not of $350.00. **Written down because `discountedTotalSet` is the obvious field
to read and it is the one that is wrong here.**

**6. FULFILLED on order #1001 was set by automation, 2 and 3 seconds after
checkout.** Two fulfillments, **11:56:45Z and 11:56:46Z**, against an order
created at **11:56:43Z**. **The actual delivery was the owner emailing a
corrected calibration file on 2026-10-26** — three days later. **T-91's original
position that "FULFILLED is a flag, not evidence" is now verified from the live
store with timestamps**, and it generalises: **every service SKU in this store
will mark itself delivered at checkout.** **T-108.**

**7. A-19 Option C arrived mid-run and this brief has a figure on the edge of
it.** The new rule — written into this routine's own command file today —
forbids **"no balance, no overdraft amount, no declined-payment amount, no
account-level figure"**, while **revenue figures stay reportable in full under
A-13.**

~~**The Shopify bill's amount is a vendor list price, not an account-level
figure, so it is published here.**~~ **Struck the same day it was written.**

**That reading was wrong and the figure has been removed from this brief.** It
rested on reading the rule's four items as examples of the fourth — "any
account-level figure" — when **the rule names "a declined-payment amount"
separately**, which makes the list broader than an account-level test, not
narrower. **A failed bill payment's amount is the second item on that list,
whoever is being paid.**

**The rule's own stated reason settles it rather than merely permitting it.**
A-19 exists because **"a negative balance describes a distressed"** business
while DD84 pursues SBA 504 financing. **A subscription that has failed four
times in eight days reads as distress to exactly that reader — and it is the
amount that does the work.** "A bill payment failed" is neutral; **the 2026-10-27
brief's own sentence — that the store cannot collect its subscription fee from
its owner, with the figure named — is the distress signal, and it needed the
number to land.** The figure was doing the damage the rule was written to stop.

**The figure is not repeated here even to illustrate the point**, which is why
that sentence is described rather than quoted.

**What is corrected, and what is not.** **This brief and OL-0074 are this run's
own output and are fixed now.** **Ten earlier files carry the same figure — six
briefs, the register, the approvals file and the append-only log** — and
**editing those is editing the historical record, which A-16 established is an
approval packet and not an agent's judgement.** **Raised as A-24; nothing
historical is touched.**

**And the removal is partial by construction, which is worth saying plainly
rather than implying the figure is gone.** **This repository is public and git
retains every version**, so the amount remains readable in commit `24cf441` and
in every commit before it. **Striking it changes what the record says now, not
what it has already published.**

**Nothing else here is near the line.** The Wells Fargo statement's contents
were **not read at all**, so it is reported as needing a login rather than as
**"withheld, A-19"**, which the rule reserves for a figure that _was_ read.

**8. The checkout test is still stale** — 28 expected, **64 tracked**, no
`src/`, no `package.json`, `HEAD` equal to origin at `6d0d224`. **Twelfth run
reporting it. T-85 step 3.**

## No action, with reason

| Source                                                                             | Why no action                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Wells Fargo monthly statement, 0.71d, unread**                                   | **Not actionable by an agent, and it is the document four open tasks are waiting for.** It would settle **T-73**'s three dated outflows with unknown amounts and **T-71**'s overdraft framing. **It needs a secure login no session here has. Account digits withheld — §5.** Folded into **T-83**, no new row |
| **Shopify "Fall '26 Edition just dropped"**                                        | Marketing from the platform                                                                                                                                                                                                                                                                                    |
| **Google Play receipt for the Manus renewal**                                      | **2026-10-28T09:52:22Z — re-fetched and confirmed outside this window** (it opens at 10:20Z). Already **T-103**; **not re-reported as new**                                                                                                                                                                    |
| **Capital One: credit score, and card offers**                                     | **Personal credit marketing. No figure recorded** — credit scores are not business cash and A-19 is pending                                                                                                                                                                                                    |
| **A child-account screen-time notice**                                             | **Personal, concerning a minor. §5 — no detail recorded**                                                                                                                                                                                                                                                      |
| Wells Fargo equity price alert                                                     | Personal brokerage, not business cash                                                                                                                                                                                                                                                                          |
| Microsoft proxy-vote notice                                                        | Personal shareholding                                                                                                                                                                                                                                                                                          |
| CarGurus ×7, Alibaba ×2, Olo, NFL, Kalshi, ideabrowser, Resend, Google Play Points | Newsletters and saved-search traffic                                                                                                                                                                                                                                                                           |

## Proposed labels (not applied)

**Still Class B with no standing approval. None applied.**

`vendor/replied-unread` **(new — the failure in §1 is not "no reply", it is "a
reply nobody opened", and no existing label distinguishes them)** ·
`cash/payout` **(new — money arriving from the storefront is a different event
from a bank transfer and the register has never had one before)** ·
`tax/collected` **(new — see T-106)** · `platform/billing-failed` ·
`cash/card-state` · `infra/front-door` · `order/storefront` · `lead/new` ·
`compliance/state` · `vendor/promotional` · `personal/family`

## Not checked this run

- **Dates and read state for 17 of the 28 threads** — the list payload omits
  both (T-102) and only the eleven that mattered were fetched. **Not
  estimated.**
- **The contents of either supplier reply** — metadata establishes that they
  exist, when they arrived and that they are unread. **What they say is not
  known and is not guessed.**
- **The Shopify payout from the payments side** — `read_shopify_payments` scope
  denied. **The notification and the order arithmetic agree to the cent; that is
  two sources, not three.**
- **Whether $31.13 of collected sales tax has ever been registered for or
  remitted** — nothing in this record addresses it either way. **T-106. Not
  asserted in either direction.**
- **The Manus subscription amount** — still not in the receipt. **Not
  estimated.** T-103.
- **Whether `CREDITS100` is routine or a one-off** — **not knowable from the
  order.** T-107.
- **Superhuman Mail, Stripe, PayPal, bookipay, Square** — unreachable, so
  **neither Zelle payment is reconciled**, the Manus charge cannot be seen from
  the paying side, and **the PayPal account now known to be Shopify's primary
  billing method cannot be inspected at all.**
- **Google Calendar and Drive** — not re-read by this routine; no notification
  suggested a change. **The 2026-10-28 position was an empty diary through
  2026-11-04.**
