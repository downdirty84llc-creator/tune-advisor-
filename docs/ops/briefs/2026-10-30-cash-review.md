# DD84 weekly revenue and cash review — 2026-10-30

Run at **2026-10-30T11:13Z**, Friday. Period: **2026-10-23 → 2026-10-30**, since
the last review. **End time is this file's commit, per T-116 — not an
estimate.**

> **SKELETON COMMITTED BEFORE GATHERING** at **`fa81bc3`** — OL-0050's repair,
> sixteenth application. **This run lost its gathering phase to a worker restart
> at ~11:13Z and was restarted again at ~11:40Z with the skeleton written but
> not committed.** **Two restarts before a single finding, which is the whole
> argument for the repair.**

**Binding constraints:**

- **A-19, Option C (owner, 2026-10-29).** **This is the first cash review that
  may not print a cash figure.** Shape plus the Gmail thread ID instead, and
  **"withheld, A-19" rather than "not available"** where a figure existed and
  was not published. **Revenue is a different category and is reported in
  full**, under A-13.
- **2026-08-07:** the ten invoices are **closed as a line of enquiry** — not
  chased, numbering not raised.
- **2026-08-13:** Shopify is a checkout behind the Manus front door, so **it
  describes the back half of the funnel only.**
- **2026-09-16:** **only DD84 is reported here**, and no figure combines it with
  the Ledger.
- **30-day rule:** the August baseline is **88 days old** and is quoted only as
  a baseline.

**Sources read live:** Shopify Admin (orders, transactions, fees, plan), Gmail.
**Not reached:** Stripe (no MCP server), **PayPal (needs re-authentication)**,
bookipay (no API by design), Square (no connector) — **T-36.**

**The mail sweep was precise, not broad: 34 threads matched against eight named
financial senders and 34 were returned.** The 2026-10-23 review learned that a
broad money-word query matched ~201 and returned 40, silently. **Complete this
time, and stated so because completeness is the thing that cannot be assumed.**

## Revenue closed this period

**Reported in full under A-13.**

| When                     | Amount        | Route                                            | Attributed to a job?       |
| ------------------------ | ------------- | ------------------------------------------------ | -------------------------- |
| **2026-10-23T11:56:43Z** | **$550.00**   | Shopify order **#1001**                          | **Yes** — two line items   |
| **2026-10-24T22:31:55Z** | **$700.00**   | Zelle, memo _"mecanic tune"_, **from a company** | **No — T-92**              |
| **2026-10-29**           | **$400.00**   | Zelle, memo _"Tune"_                             | **No — T-113**             |
| **Charged in period**    | **$1,650.00** |                                                  | **$1,100.00 unattributed** |
| **Received in period**   | **$1,630.31** | $700.00 + $400.00 + **$530.31** payout           | difference is the fee      |

**Order #1001 was placed 17 minutes after the last cash review finished reading
the store.** That review's line _"Shopify orders, all time: 0"_ was true when
written and false within the hour — recorded then as **a badly shaped claim
rather than a bad read**, and it is the reason this review checked the store
live again rather than trusting a week-old count. **Verified this run: still
exactly one order.**

**All three payments are still unread in the mailbox.** The $700.00 notification
has been unread **5.5 days**.

## Job-level margin

**One job in DD84's history has a revenue line traced end to end. It still has
no cost line, so no margin is computed and none is estimated.**

| Order #1001                                          | Amount        | Source                             |
| ---------------------------------------------------- | ------------- | ---------------------------------- |
| Charged                                              | **$550.00**   | Shopify, live                      |
| List price of the two line items                     | **$650.00**   | Shopify, live                      |
| Discount — code `CREDITS100`, all on the tuning line | **−$100.00**  | Shopify, live                      |
| **Sales tax collected, included in the price**       | **−$31.13**   | GA State 4% + county 2%            |
| Processing fee — **3.49% + ~$0.49, effective 3.58%** | **−$19.69**   | `paypal_domestic_card_not_present` |
| **Paid out to Balance 2026-10-29**                   | **$530.31**   | $550.00 − $19.69 ✓                 |
| **Retained by the business**                         | **$499.18**   | 90.76% of gross                    |
| **Settlement time**                                  | **5.89 days** | checkout → cash                    |
| **Cost of delivery**                                 | **UNKNOWN**   | **not estimated**                  |

**Why the cost is unknown, specifically** — three gaps, none of them vague:

1. **HP Tuners credits were bought on 2026-10-24 and the amount has never been
   read** — **T-94.** Credits are the direct input to a remote tune.
2. **A supplier shipment arrived 2026-10-29 and the register holds no purchase
   record for it** — no order, no amount, no date of purchase.
3. **No labour time exists anywhere.** The calendar has been empty on **seven
   consecutive checks**, so nothing records how long any job took.

**The other two payments have no job at all**, so margin is not merely unknown
for them — **there is nothing to margin against.**

**This is the structural finding of the period, and it is a reversal of the
usual one.** **Revenue is now measured to the cent. Cost is measured at zero
points.** Every prior review reported both as unknown; **this one can state
exactly what came in and still cannot state what any of it cost.**

## Receivables and ageing

**Nothing is invoiced, so nothing is overdue. The largest overdue receivable is
none, and that is a real answer rather than a gap.**

- **Stripe, PayPal and bookipay could not be read** — so an invoice outstanding
  in one of them **would not be visible to this run.** **Receivables therefore
  read "not available this run", never zero.**
- **The two priced-but-unquoted jobs are not receivables.** T-37 and T-64 carry
  proposed prices totalling **$699**, and **A-21 has never been answered, so
  neither was ever quoted.** **Nobody owes DD84 $699** — the packet is the
  blocker, not a debtor.
- **T-64 received a further calibration on 2026-10-29 and is still unpriced**,
  so **the job grew while the quote did not.**

**The inverse exposure is the one worth naming: $1,100.00 arrived this period
that cannot be matched to any job, and $1,550.00 since 2026-10-22.** **That is
not a receivable — it is money in hand with no work recorded against it**, which
cannot be invoiced, margined, acknowledged or recognised against a customer.
**Three sentences from the owner converts all of it into attributable revenue.**

## Expenses committed and upcoming spend

**Four expense events in the period. The register has an amount for none of
them.**

| Expense                        | When                    | Status                                                                                                                           |
| ------------------------------ | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Shopify Basic subscription** | **10-24, 10-26, 10-28** | **Three failed attempts in the period**, a fourth overall. **Amount withheld, A-19** — thread `1a18264480149222`. **Still owed** |
| **Manus — the front door**     | 2026-10-28T09:52:22Z    | **Renewed on a backup card; the primary was refused.** **The amount is not in the receipt and is not estimated** — T-103         |
| **HP Tuners credits**          | 2026-10-24              | **Amount never read** — T-94                                                                                                     |
| **A supplier shipment**        | 2026-10-29              | **Arrived with no purchase record in this register**                                                                             |

**Upcoming, and this review cannot see it.** **The fifth Shopify attempt falls
today.** All four prior attempts landed between **12:02:51Z and 12:38:57Z** —
verified from the three in-period notices. **This review runs at 11:13Z, the
daily brief ran at 10:51Z and the intake at 10:20Z.** **Every routine fires
before the band in which the charge has always been attempted**, so **none of
today's three runs can report the outcome and the absence of a notice means
nothing.** **The next intake, on Monday, will be the first to see it — about 70
hours late.**

### DD84 has no working payment instrument, and that is now demonstrable

**The 2026-10-28 notice named Shopify's primary method as PayPal.** **PayPal
also declined an electronic transfer on 2026-10-20, had a card locked on
2026-10-26, and is the one connector in this session that cannot be
authenticated.**

**And the business debit card is off far more often than this register has
recorded.** Dating every card-off notice in the sweep:

| Date       | Card-off notices                  |
| ---------- | --------------------------------- |
| 2026-10-22 | 12:57:27Z · 13:19:31Z · 22:53:09Z |
| 2026-10-23 | 00:09:49Z · 12:41:20Z             |
| 2026-10-26 | 12:16:32Z · 18:06:50Z             |
| 2026-10-27 | 00:03:00Z · 22:54:33Z · 23:54:47Z |
| 2026-10-29 | 08:52:14Z                         |

**Eleven card-off notices in eight days; eight of them inside this period.** The
register had recorded about four.

**That kills the reading this register carried for two days.** The 2026-10-28
intake concluded from two data points that the toggling was **"a 60-second
window, opened twice, exactly an hour apart … a person does not do that"** and
called it a schedule. **The gaps here are 22 minutes, 9 hours, 36 hours, 6
hours, 1 hour and 29 seconds.** **No schedule produces that.** **Third
correction to T-104, and the first with enough points to settle it: the activity
is frequent and irregular, which is what a person doing it by hand looks like.**
**Purpose is still not asserted.**

**The cash consequence is the point.** **Two charge attempts were declined in
this period for the stated reason that the card was off** — 2026-10-24T12:20:23Z
and 2026-10-29T12:25:24Z, both _"declined as your card is off"_, **amounts
withheld under A-19.** So: **the subscription instrument fails, the card is off
most of the time, and Shopify's own notice advises adding a backup — which
implies none is configured.**

**One link is withdrawn rather than replaced.** Two earlier briefs tied the
Shopify bill failures to the card declines on a nine-minute proximity (12:11:22Z
→ 12:20:23Z on 10-24). **With PayPal named as the primary method and no backup
apparently configured, that link no longer follows** — the card decline is more
likely a separate charge attempt, possibly the owner's own. **Not asserted
either way; the earlier inference is simply removed. T-117.**

## Against the August baseline

**Baseline 2026-08-03, 88 days old, quoted as a baseline only.**

| Baseline                                  | Now                                                                                                                                                                                         | Re-verified?                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **Last payment 2025-09-12**               | **2026-10-29**                                                                                                                                                                              | **Yes** — mail, this run       |
| **0 Shopify orders**                      | **1** — #1001, PAID, FULFILLED                                                                                                                                                              | **Yes** — store, live this run |
| **Paid invoices: 10**                     | **Still 10.** **None of the four recent payments is an invoice** — two Zelle, one storefront order, one Zelle                                                                               | By construction                |
| **Distinct customers: 3**                 | **Not re-verified.** Whether the storefront customer and the three payers are among the three **cannot be established here** — names are withheld under §5 and matching them is the owner's | **No. Not estimated**          |
| **All-time revenue $3,507.86**            | **Not re-verifiable** — the systems holding it are unreachable                                                                                                                              | **No**                         |
| Average invoice · largest · concentration | **Not re-checked. Must not be quoted as current**                                                                                                                                           | **No**                         |

**Derived, and labelled derived: $5,607.86 charged · $5,588.17 received ·
$5,557.04 retained**, being the August baseline plus $2,100.00 charged since
2026-10-22, less the fee and the tax collected. **All three rest on a baseline
whose basis — invoiced, collected or net — is recorded nowhere**, so **only
#1001's $499.18 has actually been traced.**

**The drought ended after 405 days and the record should say so plainly: four
payments in eight days, after fourteen months of nothing.**

## Corrective actions each finding implies

| Finding                                                   | Action implied                                                                                                                           | Task                   |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| **$1,100.00 this period, $1,550.00 total, unattributed**  | **Three sentences from the owner.** Until then no margin, no acknowledgement, no customer record                                         | T-113, T-92, T-88      |
| **Cost side entirely unmeasured**                         | **Read the HP Tuners charge and the supplier invoice**, and **put jobs in the diary** — without hours, margin stays uncomputable forever | **T-118**, T-94        |
| **No working payment instrument**                         | **Fix PayPal or change Shopify's method, and decide what the debit card is for**                                                         | **T-117**, T-89, T-104 |
| **Fifth subscription attempt invisible to every routine** | **Move a routine after 12:40Z**, or accept a ~70-hour reporting lag                                                                      | **T-119**              |
| **$699 of proposed pricing is not a receivable**          | **Answer A-21.** It is the gate on three customer sends since A-20's deferral                                                            | A-21, T-111            |
| **Tax is collected and its destination is unrecorded**    | **$31.13 sat inside #1001's price.** Whether DD84 is registered to remit it is not addressed anywhere                                    | **T-106**              |

## Not available this run

- **Stripe, PayPal, bookipay, Square** — no connector, no API, or
  re-authentication needed. **So no invoice, receivable or refund held in any of
  them is visible**, and the August all-time figure cannot be re-verified.
- **Shopify Payments** — scope `read_shopify_payments` denied, so **the payout
  was reconciled from the notification plus the order arithmetic**, which agree
  to the cent. **Two sources, not three.**
- **The bank and Chime statements** — threads `1a18388dc9e617cb` (10-28) and
  `1a18ab6ea53c85d9` (10-30), **both unread and neither openable by any session
  here**; they need a secure login. **Reported as unreadable, not as withheld,
  because their contents were never seen.**
- **Every expense amount in the period.** Three were never read; one is
  **withheld, A-19.**
- **Whether the fifth subscription attempt succeeded** — **it had not happened
  when this review ran.**

## Cash position, largest overdue receivable, and the decision needed

**Cash position — withheld, A-19.** **The last recorded shape is _overdrawn_
(T-71, 2026-10-16), and it has not been re-verified since.** **$1,630.31 has
arrived in the period**, so **the shape may no longer hold and this review does
not claim it does.** **The two documents that would settle it arrived in the
last 48 hours and neither can be opened from here** — threads `1a18388dc9e617cb`
and `1a18ab6ea53c85d9`.

**Largest overdue receivable: none. Nothing has been invoiced.** **The real
exposure is its mirror image — $1,550.00 received against no recorded work.**

**The decision the owner needs, and it is one sentence each:**

1. **What did the $400.00, the $700.00 and the $450.00 buy?** **$1,550.00
   becomes attributable revenue, three customers get acknowledged, and margin
   becomes possible for the first time.**
2. **What is the business debit card for?** **Eleven card-off notices in eight
   days and two declines because of it.** **If the card is deliberately kept
   off, Shopify and Manus need an instrument that is not it.**
3. **Answer A-21.** **$699 of proposed pricing is not a receivable because
   nothing was ever quoted**, and it now gates three customer sends.

**A quiet cash week would be a real result. This was not one.** **$1,650.00
charged, $1,630.31 received, a first storefront payout banked and the longest
drought in the business's history ended.** **The problem is no longer getting
money in. It is that two thirds of what came in cannot be matched to a job, and
nothing that went out has a number against it.**
