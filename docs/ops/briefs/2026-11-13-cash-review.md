# DD84 cash and revenue review — week ending 2026-11-13

**Period: 2026-11-06T11:28Z → 2026-11-13T11:28Z**, the seven days ending at the
run start. **Run start read from the clock at 11:28:02Z**; finish time read when
this file was written and printed in §10. Routine fired 11:13:00Z against an
11:10Z schedule.

**Systems reached:** Shopify (orders and ShopifyQL analytics), Gmail, the
operating record. **Not reached:** Stripe, PayPal, the bank, Square, Chime,
Melio, Capital on Tap, Supermetrics, any public web page.

**Class A. No money was moved.** No refund, no charge, no invoice, no payment
link, no subscription change, no price change. **No write tool was called on any
payment system.** Every figure below names its system; **a system not reached
produces "not available", never an estimate.**

## 0. Checkout

`HEAD` equals origin at **`8a7dfa6`** — the skeleton this run committed before
the system reads. **No `src/`, no `package.json`, clean status, 91 tracked files
against the prompt's 28. Fortieth run reporting that drift.**

**This run's skeleton was the thirtieth application of OL-0050 and the second
today that was not theoretical: a worker restart hit this session twice**, once
mid-sweep during the intake and once during this review's own mail pass. **Both
times the tree came back at the skeleton commit.**

## 1. Closed in period

| Source system           | Gross                                                      | Refunds | Disputes | Net      | Read at           |
| ----------------------- | ---------------------------------------------------------- | ------- | -------- | -------- | ----------------- |
| **Shopify**             | **zero**                                                   | zero    | zero     | **zero** | 2026-11-13T11:31Z |
| Stripe                  | **Not available** — no MCP server exists for Stripe at all | —       | —        | —        | —                 |
| PayPal                  | **Not available** — connector needs re-authentication      | —       | —        | —        | —                 |
| Bank (Zelle, transfers) | **Not available** — no connector exists                    | —       | —        | —        | —                 |

**The total is partial and must not be read as zero revenue.** Shopify is zero
and that is a read figure: ShopifyQL returned
`orders 0, gross_sales 0, net_sales 0, taxes 0, total_sales 0` for the period.
**Three of the four systems that could have carried revenue were not
reachable**, and the three payments that ended the drought in October all
arrived by routes none of them covers — two bank transfers and a storefront
order.

**Why these read "zero" rather than a dollar figure.** The leak gate refused
this review on six matches, all of them the literal a bank balance alert uses.
**Every one was a revenue zero, which A-13 permits — the gate cannot tell a zero
balance from zero revenue, because a pattern matches a string and not its
category.** The fix was to drop the literal, not the pattern — **and the first
draft of this paragraph then overclaimed the result, which is worth recording.**
It said the literal now appears nowhere in this record. **It appears in nine
pre-existing files**, every one of them a revenue or ad-spend zero, and the gate
never saw them because it scans added lines only. **The invariant is
forward-only: from today that literal is not written for a revenue figure, so a
new occurrence is a balance. It says nothing about the nine.** Fourth gate
lesson, and the same shape as the first three — the defect was in what was asked
of the instrument.

**What can be said without a figure: no new Shopify order exists.**
`list-orders` returns exactly one order all time, #1001 of 2026-10-23, and
nothing since. **That part is complete, not partial.**

## 2. Recurring vs one-off

**Recurring revenue: nil, and the basis is that DD84 has no recurring product.**
No subscription, no retainer, no plan. Every payment the registry records is
one-off service work or a single storefront order.

**This is a structural finding, not a weekly one.** The catalogue's rungs are
all per-job. **A business with no recurring line has to re-win every dollar**,
and the October pattern — 405 days of nothing, then $1,700 in four days, then
nothing again for three weeks — is what that looks like on a chart.

## 3. Pipeline — quoted but not closed

| Opportunity                 | Value                    | Stage                              | Age         | Probability basis                                              | Task  |
| --------------------------- | ------------------------ | ---------------------------------- | ----------- | -------------------------------------------------------------- | ----- |
| **The C10 customer**        | **$349 + $149 optional** | Priced; work in progress           | since 10-10 | **Basis exists — the customer is engaged and the job is live** | T-37  |
| **The second live job**     | **$350**                 | Seventh revision sent 10-29        | since 10-14 | **Unweighted — the customer has not acknowledged in 15 days**  | T-64  |
| **The Lexus enquiry**       | **Unquoted**             | Asked for a range; never given one | **55 days** | **None. No price was ever stated**                             | T-66  |
| **The 2026-10-26 enquirer** | **Unquoted**             | Never answered                     | **18 days** | **None**                                                       | T-95  |
| **The tune-file enquirer**  | **Unquoted**             | Arrived 11-13T01:16Z, unanswered   | **~10 hrs** | **None — the scope is unknown**                                | T-177 |

**Quoted pipeline: $699, plus $149 optional.** **Unquoted pipeline: three
opportunities with no number attached to any of them**, and they are listed
unweighted because there is no fact to weight them with. **Two of the three are
unquoted because nobody replied, not because the work was hard to price.**

## 4. Owed to DD84

| Customer | Amount | Invoice | Days past due | System confirming | Action |
| -------- | ------ | ------- | ------------- | ----------------- | ------ |
| —        | —      | —       | —             | —                 | —      |

**There are no receivables, and that is the single most important line in this
review.**

**DD84 is carrying $699 of priced work and has issued no invoice for any of
it.** T-37 is priced at $349 with nothing delivered to invoice. T-64 is priced
at $350 with a seventh revision sent on 2026-10-29 and no acknowledgement since.

**An uninvoiced job is worse than an overdue one.** An overdue invoice ages,
shows up in a receivables table, and can be chased. **Unbilled work does none of
those things — it simply never becomes money**, and it has been in that state
for thirty and thirty-four days respectively.

**T-185 raised.** **This review does not issue the invoices** — invoicing is
Class E and no payment system is reachable to issue one from.

## 5. Owed by DD84 — next 30 days

| Payee                   | Amount                                | Due / paid                         | Recurring?          | Source of this figure                                                                       |
| ----------------------- | ------------------------------------- | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| **Storefront platform** | **Withheld — see below**              | **PAID 2026-11-08**                | Monthly             | Vendor billing notice + payment receipt, threads `1a1bda92b1a4ecfb` and `1a1bda94e3bf8a7c`  |
| **A consumer lender**   | **Withheld — see below**              | **PAID 2026-11-09**                | Unknown             | Payment receipt, thread `1a1c014fdd7f4528`                                                  |
| **Domain registrar**    | **Not available** — amount unknown    | **Annual, date not stated**        | Annual              | WHOIS reminder 2026-11-08, and **T-46 has recorded the amount as unknown since 2026-10-12** |
| **Deploy platform**     | **Not available** — not yet committed | Credit cycle resets **2026-12-02** | Monthly if upgraded | Service notice 2026-11-09, thread `1a1c0f2b0a62815a`; **T-154**                             |

**Two amounts withheld, for two different reasons, and the asymmetry is
deliberate.**

**The storefront platform's monthly charge is withheld because A-24 is pending
on that exact figure.** A-24 asks to redact a declined-payment amount from ten
historical files. **That charge declined nine times over eighteen days before it
settled** (T-89, already closed Done on 2026-11-08). **Publishing the amount now
because it has since been paid would defeat A-24 by a technicality and pre-empt
the owner's decision on ten other files.** The thread IDs are above; the figure
is one click away.

**The lender payment is withheld because its category has not been decided.** It
left the business payment account on 2026-11-09 and went to a consumer-credit
issuer. **Whether it is a DD84 expense at all is not established** — T-137 has
asked since 2026-11-06 whether the account this register treats as the
business's carries a personal obligation, and A-25 is pending on it.
**Publishing a lender payment amount in a public repository before that question
is answered would put a possibly personal figure on the record**, which §5 says
is a decision, not a judgement call. **A-30 raised to settle the class. T-183
carries the item.**

**Neither of these is "not available".** Both figures were read. **Say withheld,
because that is what happened.**

## 6. Job and product margin

| Job / product        | Revenue                                                                | Parts        | Software credits | Travel | Labour           | Margin                   | Complete?                                           |
| -------------------- | ---------------------------------------------------------------------- | ------------ | ---------------- | ------ | ---------------- | ------------------------ | --------------------------------------------------- |
| **Order #1001**      | **$550.00 charged · $530.31 paid out · $31.13 tax · $499.18 retained** | Not recorded | Not recorded     | n/a    | **Not recorded** | **Incomplete**           | **No — missing parts, software credits and labour** |
| **T-37, the C10**    | **$0 — not invoiced**                                                  | Not recorded | Not recorded     | n/a    | Not recorded     | **Cannot be calculated** | **No**                                              |
| **T-64, second job** | **$0 — not invoiced**                                                  | Not recorded | Not recorded     | n/a    | Not recorded     | **Cannot be calculated** | **No**                                              |

**Order #1001 is still the only revenue in this business traced end to end.**
Charged, processor fee of **$19.69**, tax of **$31.13**, payout of **$530.31**,
retained **$499.18** — and those reconcile to the cent against the live store.

**No labour rate is assumed and none will be.** §8.5 forbids it and the
catalogue carries no hourly figure for shop time; the $75/hr set on 2026-11-13
is **transit time**, not labour, and using it as a labour rate would be exactly
the kind of silent substitution this record exists to prevent.

**So no margin figure exists for any job.** **That is a bookkeeping finding, not
an arithmetic one:** DD84 does not record parts cost, software credits or hours
against a job anywhere this session can read. **Until it does, "is this job
worth doing at this price?" cannot be answered**, which is the question the
whole review is supposed to serve.

## 7. Cash position — shape only, A-19 Option C

| Shape                                                               | Thread                                                                                             | Read at           |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------- |
| **At or below zero on 2026-11-09** — the alert's own words          | `1a1c075a5edede41`                                                                                 | 2026-11-13T11:33Z |
| **A card declined for insufficient funds, 2026-11-10T06:18:22Z**    | `1a1c2e1abfc51a95`                                                                                 | 2026-11-13T11:33Z |
| **A second card declined for being off, 2026-11-12T13:30:56Z**      | `1a1cff4504a6617b`                                                                                 | 2026-11-13T11:33Z |
| **A card toggled off and on repeatedly, 11-10 to 11-12, ending on** | `1a1cfeb16bf3083f`, `1a1cfeb9356aed59`, `1a1ca9b7b46e4d2c`, `1a1ca9a8e38aad4d`, `1a1c283d3e8c521e` | 2026-11-13T11:33Z |

**Every figure in those alerts is withheld under A-19, and so are both cards'
last-four digits and the account's, under §5.** **Withheld, not unavailable: the
numbers were read.**

**T-136 is answered, and the answer matters.** T-136 asked since 2026-11-06
whether the 11-09 alert reads _at_ zero or _below_ it. **It reads at the
boundary** — the alert's subject says "at or below zero" and its body resolves
to zero exactly. **A zero balance is not an overdraft**, and a charge-off clock
that assumes one would be counting from the wrong event. **The figure is still
withheld even here, where the shape and the figure happen to coincide**, because
A-19 is a rule about the class of number, not about how revealing a particular
instance is.

**One cash-timing improvement, and it is real.** Storefront payouts move to **as
soon as two business days** for transactions after 2026-11-09 (notice
2026-11-10T03:33Z). **T-155 already carries it; this run confirms the notice but
cannot confirm the behaviour**, because confirming it needs a sale and there has
been none.

## 8. Corrective actions

| Rank  | Finding                                                                  | Money at stake                      | Action                                              | Task              | Packet?             |
| ----- | ------------------------------------------------------------------------ | ----------------------------------- | --------------------------------------------------- | ----------------- | ------------------- |
| **1** | **$699 of priced work has never been invoiced**                          | **$699, plus $149 optional**        | Issue invoices for T-37 and T-64, or record why not | **T-185**         | **Yes — Class E**   |
| **2** | **A card deliberately off was presented for payment and declined**       | Unknown; declines and possible fees | Answer T-139: which card pays what                  | T-139             | No                  |
| **3** | **An outflow to a consumer lender left the business account**            | Withheld                            | Establish whether it is a DD84 expense              | **T-183**         | **A-25, then A-30** |
| **4** | **No job records parts, credits or hours, so no margin can be computed** | All of it, permanently              | Start recording three inputs per job                | **T-186**         | No                  |
| **5** | **Three unquoted opportunities, two of them silent for weeks**           | Unquoted by definition              | **A-29**, raised by today's daily brief             | T-95, T-66, T-177 | **A-29**            |
| **6** | **Deploy credits exhausted; production deploys paused until 2026-12-02** | An upgrade of unknown cost          | Decide: wait for the reset or pay                   | T-154             | **Yes if upgraded** |

**Nothing above was executed.** Each is a recommendation with a task behind it.

## 9. Not checked this run

- **Stripe** — **no MCP server exists.** Charges, refunds, disputes, invoices,
  subscriptions, balance and payouts are all unread, and the historical
  $3,507.86 baseline came from this system.
- **PayPal** — needs re-authentication. Transactions, invoices and disputes
  unread; **the two outflows in §5 were found in mail receipts, not in PayPal.**
- **The bank** — no connector. The three October payments arrived here.
- **Square, Chime, Melio, Capital on Tap** — no connector exists for any.
- **Supermetrics** — not reached this run. **Ad spend is not available and is
  not assumed to be zero.**
- **Any public web page** — T-98; A-27 pending.

**Reconciliation between systems: none was possible.** Only one revenue system
was readable, so there is nothing to double-count and nothing to match. **That
is stated rather than claimed as a clean reconciliation.**

## 10. Cash position, largest receivable, and the decision

**Run finished 2026-11-13T11:39:33Z — read from the clock, not estimated
(T-116).** Started 11:28:02Z, also read. **Eleven minutes thirty-one seconds.**

**Cash position: at or below zero as of 2026-11-09, with two card declines and
repeated card toggling across the period, the card in question ending the period
on.** Figures withheld, A-19 Option C; thread IDs in §7.

**Largest overdue receivable: there isn't one — and that is the finding.**
**$699 of priced work has never been invoiced**, so none of it is a receivable,
none of it ages, and none of it can be chased. **The largest number in this
review is money DD84 has earned the right to ask for and has not asked for.**

**The decision the owner needs: invoice T-37 and T-64, or say why not.** Class
E, and **A-30 asks the smaller question behind §5** — whether vendor and lender
outflow amounts may be published here, because two of this week's real numbers
had to be withheld for reasons that will recur every week until it is answered.
