# DD84 inbox intake — 2026-11-02

Run at **2026-11-02T10:21Z**, Monday. Window: **since OL-0076, 2026-10-30T10:20Z
→ 2026-11-02T10:20Z** — **72 hours, covering the weekend.**

> **SKELETON COMMITTED BEFORE GATHERING** at **`cbd153c`** — OL-0050's repair,
> seventeenth application.

Accounts scanned: **Gmail**. Not reached: **Superhuman Mail** (needs
re-authentication); **Stripe, bookipay, Square** (no connector — T-36).
**PayPal's connector still needs re-authentication, but PayPal's own mail is
readable and is the single most important source this run.**

**T-102 is Accepted Risk**, so the thread list supplies neither dates nor read
state. **Every age and read/unread claim comes from `get_thread` or
`get_message` on that item** — **thirteen fetched individually.**

**A-19 is in force.** Shape plus thread ID, never a cash figure. **Revenue and
supplier invoices are reported in full under A-13.**

Threads reviewed: **79 estimated; 50 returned on the first page and the
remainder narrowed by sender.** Actionable: **11**. No-action: the rest. **New
leads: zero — ninth consecutive run, and the Reddit prospect has not replied in
3.53 days.**

## Urgent — read first

### 1. The subscription has failed six times, not four — this register was reading a rolling counter as a running total

**T-119 said this run would be the first to see Friday's attempt, about 70 hours
late. It was, and the answer is worse than the question.**

**Two more failures arrived over the weekend:** **2026-10-30T12:01:09Z** and
**2026-11-01T13:09:14Z**, both naming **PayPal** as the failed primary method,
both for the **same invoice**, whose billing cycle still reads **OCT 22**.
**Next attempt: 2026-11-03 — tomorrow.**

**And comparing the two notices exposes a reading error of this register's
own.** Shopify prints a "Timeline" of **exactly four attempts and renumbers them
every time:**

| Notice dated | Timeline shown                        | Labels the last one |
| ------------ | ------------------------------------- | ------------------- |
| **10-28**    | Oct 22 · Oct 24 · Oct 26 · **Oct 28** | **"4th attempt"**   |
| **10-30**    | Oct 24 · Oct 26 · Oct 28 · **Oct 30** | **"4th attempt"**   |
| **11-01**    | Oct 26 · Oct 28 · Oct 30 · **Nov 1**  | **"4th attempt"**   |

**"4th payment attempt" is a rolling four-item window, not a cumulative count**,
and the 2026-10-29 intake read it as cumulative and reported "the fourth
failure." **Counting the notices themselves settles it: six failure emails since
2026-10-22** — **Oct 22, 24, 26, 28, 30 and Nov 1.**

**Six attempts, six failures, eleven days on one unpaid invoice.** **T-89
corrected.**

**This is the sixth member of the instrument-defect family**, and the second
whose shape is _a field that looks like a count and is not_ — after
`discountedTotalSet` reporting a pre-discount total. **A number beside the word
"attempt" was taken as the number of attempts.**

### 2. PayPal works. So do two cards. The Shopify arrangement specifically is broken

**This overturns T-117, which this register raised as Critical three days ago
under the heading "DD84 has no working payment instrument."** **That is false,
and the evidence is unambiguous.**

| When                     | What                                              | Instrument                                            | Outcome       |
| ------------------------ | ------------------------------------------------- | ----------------------------------------------------- | ------------- |
| **2026-10-24T22:19:31Z** | HP Tuners order — **2 universal credits, $99.98** | A Visa card                                           | **Succeeded** |
| **2026-10-30T18:38:14Z** | HP Tuners order — **2 universal credits, $99.98** | **A different Visa card**                             | **Succeeded** |
| **2026-11-01T04:54:32Z** | **Meta Platforms — $10.58**, line item "Ads"      | **PayPal**, funded from the business checking account | **Succeeded** |
| 10-30 and 11-01          | Shopify subscription                              | **PayPal**                                            | **Failed**    |

**PayPal successfully paid Meta on 2026-11-01 — hours before Shopify reported
that PayPal had failed on the same day.** **The same account, the same day, one
payment through and one refused.**

**So the diagnosis changes, and it narrows usefully.** **It is not that DD84
cannot pay for things** — three instruments demonstrably work. **It is that the
specific billing agreement between Shopify and this PayPal account does not
execute.** That is a different and much more fixable problem: an expired
authorisation, a broken billing mandate, or a Shopify-side agreement, **not a
business that has run out of ways to pay.**

**T-117 is corrected from Critical to a narrower, accurate statement.** **Card
digits are withheld under §5 and no cash figure appears here under A-19 —
supplier invoices and ad spend are costs with sources, which A-13 permits.**

### 3. DD84 is buying advertising, and the registry says it never has

**`ventures.md` records paid advertising as: "Never used. No account, no budget,
no approval."**

**On 2026-11-01 a PayPal receipt shows $10.58 paid to Meta Platforms, Inc., line
item "Ads Qty: 1", transaction dated 2026-10-31.**

**The routine's instruction is to flag a conflict with the approved record
rather than resolve it, so it is flagged.** **What is established:** a payment
to Meta for an advertising line item, from the business PayPal account, funded
from the business checking account. **What is not established and is not
asserted:** whether a campaign is running, what it is promoting, what the budget
is, or whether this is a test, a threshold charge or the first of many — **Meta
bills on spend thresholds, so $10.58 is consistent with either a trial or the
leading edge of something larger.**

**Why it matters beyond the amount.** **Four paying jobs this month arrived
through a channel `ventures.md` records as `UNKNOWN`**, and on 2026-10-29 the
owner opened **Reddit** as the first identified channel. **This is the second
channel to appear in four days, and the first that costs money.** **The registry
is updated to say paid advertising is no longer unused, with the date and the
evidence, and nothing is claimed about results. T-120.**

### 4. T-94 is closed — DD84 has its first verified cost input, and a cost-to-revenue ratio

**T-94 has asked since 2026-10-24 what the HP Tuners credits cost. Both
purchases are now read in full.**

| Order             | Date       | Item                    | Amount      |
| ----------------- | ---------- | ----------------------- | ----------- |
| First             | 2026-10-24 | **2 universal credits** | **$99.98**  |
| Second            | 2026-10-30 | **2 universal credits** | **$99.98**  |
| **Total, 7 days** |            | **4 credits**           | **$199.96** |

**A universal credit costs $49.99.** **That is the first direct cost input this
record has ever held**, and it ends a run of five reviews reporting that no cost
was knowable.

**What it supports, stated carefully.** **$199.96 against $2,100.00 charged in
the same period is 9.5%** — **a period cost-to-revenue ratio, not a job
margin.** **How many credits order #1001 consumed is not known and is not
guessed**, so **#1001's margin is still not computed.** **But the direction of
travel has changed: the cost side has its first real number.**

**The purchase pattern is worth one line.** **$700.00 arrived on 10-24 and
credits were bought twelve minutes later; $400.00 arrived on 10-29 and credits
were bought the next day.** **Money in, inputs bought — which is how a tuning
business is supposed to work, and the first time this record has been able to
see it happen.**

**Both invoices carry the business's full postal address and telephone number.**
**Withheld under §5**, along with the HP Tuners serial number and all three card
digit-sets. **Noted because TikTok's outstanding requirement (T-100) is exactly
a proof-of-address document — the owner has several in his inbox, and this
register must not be the place that holds one.**

## New leads

**None. Ninth consecutive run.** **The Reddit prospect approached on 2026-10-29
has not replied in 3.53 days**, and **no inbound customer mail arrived in 72
hours.**

| Lead              | Contact | Vehicle | Requested | Source | Task |
| ----------------- | ------- | ------- | --------- | ------ | ---- |
| _(none this run)_ | —       | —       | —         | —      | —    |

**A targeted search for person-to-person mail across the window returned nothing
from any customer or prospect.** **Not an estimate — the query was run and came
back empty of human correspondence.**

## Existing customers needing a reply

| Who                               | Age                       | State — verified 2026-11-02                                                      | Task                  |
| --------------------------------- | ------------------------- | -------------------------------------------------------------------------------- | --------------------- |
| **The supercharger supplier**     | **12.39d**                | **Two replies, both still unread** (older: **28.57d**). **A-22 would chase him** | **T-105**             |
| **The C10 customer**              | **20.57d**                | DD84 spoke last; **waiting is correct**                                          | **T-37**              |
| **The Sunday enquirer**           | **7.68d**                 | **Unread. A-23 is drafted and needs nothing filled in**                          | **T-95**              |
| **The order #1001 customer**      | **6.57d**                 | His datalog **still unread**; DD84 was **paid out** on his job 4 days ago        | **T-91**              |
| **The Challenger customer**       | **3.84d**                 | **Answered 10-29.** Waiting on him to flash and log — and on **T-110**           | **T-64**              |
| **The Reddit prospect**           | **3.53d**                 | **Outbound, no reply.** Nothing is owed yet                                      | **T-111**             |
| **The $450 / $700 / $400 payers** | **11.4d / 8.49d / 3.41d** | **$1,550.00 received, none acknowledged**                                        | **T-88, T-92, T-113** |

## Drafts prepared — NOT SENT

**None. Tenth consecutive run.**

**Nothing arrived that wants a reply.** No customer wrote in 72 hours. **The
Reddit prospect has had 3.53 days with an outbound message that already asks for
everything needed** — a chase at this age would be pushing, not following up.

**A-22 still must not be sent as drafted** — the supplier replied twice and
neither reply has been opened in 12 and 28 days.

**No approval packet raised.** **Eight are queued**, and every finding here is a
correction, a flag, or a question only the owner can answer.

## Conflicts found

**1. Shopify's "4th payment attempt" is a rolling label and was read as a
count.** **Controlling source: the notices themselves, counted.** Six since
2026-10-22. **T-89 corrected; §1.**

**2. T-117's "no working payment instrument" is false.** **Controlling source:
three successful payments in the window, one of them by the very instrument
Shopify reports as failing.** **Corrected, not deleted** — the underlying
problem is real but is specific to the Shopify billing agreement. **§2.**

**3. `ventures.md` says paid advertising has never been used; a Meta Ads payment
says otherwise.** **Controlling source: the PayPal receipt.** **Flagged and the
registry updated with the date and evidence; nothing claimed about results.
T-120.**

**4. T-118 said no expense in the period had a known amount. That is now partly
false** — **$199.96 of HP Tuners credits and $10.58 of ad spend are known**,
against the Manus renewal and the supplier shipment, which remain unknown.
**Corrected rather than left standing.**

**5. A second bank account exists that this register has never recorded.** A
statement for an account whose digits differ from the one the register knows
arrived **2026-10-31T19:46:16Z**, and **a Wells Fargo Advisors statement and a
trade confirmation** arrived alongside it. **Digits withheld under §5; no figure
under A-19.** **The register has assumed one business account throughout.
T-121.**

**6. The third DD84 repository has infrastructure, and it is being switched
off.** **Supabase sent "your project `dd84-ai-tuning` is going to be paused" and
then "has been paused."** **T-101 flagged that repository on 2026-10-27 and
nothing was opened then; nothing was opened now either.** **A paused free-tier
project is routine inactivity, not an incident** — recorded because **the
register did not know this venture had a database at all. T-122.**

**7. The checkout test is still stale** — 28 expected, **69 tracked**, no
`src/`, no `package.json`, `HEAD` equal to origin at `4fbfbe7` when this run
started. **Seventeenth run reporting it. T-85 step 3.**

## No action, with reason

| Source                                                                                                       | Why no action                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Shopify: "You've qualified for faster payouts"**                                                           | **Materially good news** — #1001 took **5.89 days** from checkout to cash. **Enabling it changes a live payment setting, which is Class F.** The owner's call |
| **Google Business Profile ×2** — confirm business details, and holiday hours                                 | **A live customer-facing listing.** Class F; an agent does not confirm a business's own details                                                               |
| **The owner cancelled a subscription and asked for a refund**                                                | 2026-10-30, outbound, and the provider confirmed cancellation. **Owner action, recorded not re-reported as agent work.** Cash discipline                      |
| **TikTok: the same rejection pair, a second time**                                                           | Identical wording to 2026-10-29, sent again. **T-100 unchanged, no new task.** Still a proof-of-address document, still the owner's                           |
| **Four more statements** — a card statement, an advisors statement, a trade confirmation, a Chime statement  | **None openable from here.** Folded into **T-83**. **No figures recorded**                                                                                    |
| **A notice about a minor's device**                                                                          | **Personal. §5 — no names, devices or apps recorded**                                                                                                         |
| CarGurus ×10, Alibaba ×8, NFL ×3, Panera ×2, Pinterest, Nike, Lowe's, TeamViewer, Printify, OpenAI, a lender | Newsletters, personal and vendor mail                                                                                                                         |

## Proposed labels (not applied)

**Still Class B with no standing approval. None applied.**

`cost/inputs` **(new — HP Tuners credits are the first real cost line and
nothing distinguishes a supplier invoice from a newsletter today)** ·
`spend/advertising` **(new — T-120)** · `platform/billing-failed` ·
`infra/paused` **(new — T-122)** · `cash/zelle-unattributed` · `cash/card-state`
· `lead/outbound` · `channel/reddit` · `access/third-party` · `compliance/state`
· `vendor/promotional` · `personal/family`

## Not checked this run

- **How many credits order #1001 consumed.** **The unit cost is known; the
  consumption is not, so no job margin is computed.** **Not estimated.**
- **What the Meta ad spend is promoting, its budget, or whether a campaign is
  live.** **Not in the receipt. T-120.**
- **The second bank account's balance or purpose** — **withheld under A-19 as to
  figures, and the statement itself cannot be opened from here.**
- **Both supplier replies** — still unopened by anyone, including this run,
  which established only that they exist and are unread.
- **The Supabase project, the third repository, and the Vercel domains** —
  **nothing was opened**, per the standing treatment of the other venture and of
  infrastructure this register has not been asked to touch.
- **Whether tomorrow's seventh subscription attempt succeeds** — **2026-11-03,
  in the 12:02–12:39Z band that every routine still runs before.** **T-119 is
  unresolved and the lag is structural, not accidental.**
- **Dates and read state for the threads not individually fetched** — the list
  payload omits both (T-102); **thirteen were fetched.** **Not estimated.**
- **Superhuman Mail, Stripe, bookipay, Square** — unreachable. **The three Zelle
  payments remain unreconciled against any payment system.**
- **Google Calendar and Drive** — not re-read by this routine. **The 2026-10-30
  position was an empty diary through 2026-11-07.**
