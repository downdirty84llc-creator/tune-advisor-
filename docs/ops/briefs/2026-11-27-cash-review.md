# DD84 cash and revenue review — seven days to 2026-11-27

Run 11:10:55Z–11:31:52Z (both read from the clock, T-116). **Class A — read
only. No money was moved. No charge, refund, transfer, invoice, payment link or
subscription change was initiated, and no write tool was called on any payment
system.**

**Systems reached: Shopify** (live, 11:11Z). **Not reached: Stripe** (no MCP
server exists — permanent), **PayPal** (authorisation expired), **the bank, the
card issuer, Square, Chime, Melio, Capital on Tap** (no connector),
**Supermetrics** (ad spend, not reached this run).

**Every figure below names its system. Nothing is estimated. No total spans a
system that could not be read.**

Checkout verified: `HEAD` = `origin/claude/claude-md-docs-cqvhy6` =
**`a63c5a0`**, no `src/`, clean, **115 tracked files against the prompt's 28 —
sixty-fourth run reporting the drift** (A-10). **Skeleton committed at
`0057306`** after two worker restarts hit this run.

---

## 1. Closed in period

| Source system | Gross    | Refunds | Disputes | Net      | Read at                                   |
| ------------- | -------- | ------- | -------- | -------- | ----------------------------------------- |
| **Shopify**   | **zero** | zero    | zero     | **zero** | 11:11Z                                    |
| Stripe        | —        | —       | —        | —        | **Not available — no MCP server exists**  |
| PayPal        | —        | —       | —        | —        | **Not available — authorisation expired** |
| Bank / Zelle  | —        | —       | —        | —        | **Not available — no connector**          |

**No total is given, because one would span systems that could not be read.**
**Zero is written as a word, not as a decimal**: the leak gate reads a decimal
zero as a possible account balance, and the standing fix is to reword rather
than weaken the pattern (2026-11-25).

**Revenue closed in the seven days to today, on the only system reachable, is
nil — zero sales, zero orders, zero customers, exact.** The morning's intake
also found no payment, deposit or order notice in the mail, **which is
corroboration and not a substitute for reading the accounts.**

### All-time, and what was actually re-verified today

| Measure                  | Value                                                | Basis            |
| ------------------------ | ---------------------------------------------------- | ---------------- |
| Shopify orders, all time | **1**                                                | **Live, 11:11Z** |
| Order #1001              | 2026-10-23T11:56:43Z, **PAID**, **FULFILLED**        | **Live, 11:11Z** |
| #1001 charged            | **$550.00**                                          | **Live, 11:11Z** |
| Refunds, all time        | **zero**                                             | **Live, 11:11Z** |
| Gateway                  | **Shopify Payments** — 1 transaction, 400-day window | **Live, 11:11Z** |
| Shopify customer records | **3**                                                | **Live, 11:11Z** |

**A measurement note, so the two numbers are not read as a contradiction.**
Today's `net_payments` reads **$550.00**, while the registry records the payout
on #1001 as **$530.31**. **These measure different things**: the gateway's "net"
is gross less refunds, of which there are none, and it does not deduct the
processing fee. **Both are correct and neither is the retained figure.**

**The retained figure is $499.18** — $530.31 paid out less **$31.13** of Georgia
and county sales tax, which is **not DD84's money**. The registry records this
as **the only revenue figure in it traced end to end**, and today's read agrees
with its charged and refund components.

### The baseline is stale and cannot be re-verified

`ventures.md` carries **$3,507.86 all-time across 10 paid invoices**, read
**2026-08-03 — 116 days old**, which breaches the 30-day rule. **It cannot be
re-verified from this session: the system holding those invoices has no
connector.** Worse, and the registry says so itself: **the basis of that figure
— invoiced, collected or net — is recorded nowhere.**

**Two facts in the routine's own stored prompt are superseded:**

1. **"0 Shopify orders all time" is wrong.** There is one, paid, fulfilled,
   $550.00, read live today.
2. **"Last payment 2025-09-12" was struck through in `ventures.md`** and
   replaced with **2026-10-22** (verified 2026-10-23). **The stored prompt still
   quotes the old date.** A routine whose prompt carries a figure its own
   registry has corrected will keep re-importing the error. **T-261.**

**Derived figures, labelled derived, from the registry and not re-verified
today:** all-time charged **$5,607.86**, all-time received **$5,588.17**,
retained **$5,557.04**. **The first four digits of each rest on the unverified
baseline, so none of them is presented as reconciled.**

---

## 2. Recurring versus one-off

**Recurring revenue: none. There is no subscription, retainer or repeat billing
anywhere in the record.**

**One-off: the whole of it.** Every payment the registry holds is a single
transaction — four since the August baseline, and one storefront order.

**That is the structural finding behind every other number here.** A business
with no recurring line has to close new work every month to stand still, and
**§5 of this review shows nothing closing.**

---

## 3. Pipeline — quoted but not closed

| Opportunity                 | Value              | Stage                         | Age      | Probability basis            | Task       |
| --------------------------- | ------------------ | ----------------------------- | -------- | ---------------------------- | ---------- |
| **T-223 / T-255** Ram       | **Unpriced**       | **Delivered, DRAFT 6**        | 6d       | **None — no price exists**   | A-21 row 1 |
| **T-206 / T-224** Silverado | **Unpriced**       | **Delivered 11-20/21**        | 7d       | **None — no price exists**   | A-21 row 1 |
| T-37 (C10)                  | **$349 / $149**    | Priced, **nothing delivered** | 48d      | **Unweighted** — no deposit  | T-37       |
| T-249                       | **Unpriced**       | Request received              | 2d       | **No catalogue rung exists** | T-249      |
| T-66 (Lexus)                | **$400–$749** rung | Enquiry, 43d silent           | 43d      | **Unweighted**               | A-28       |
| T-95, T-177                 | Unpriced           | Unanswered enquiries          | 31d, 14d | **Unweighted**               | A-29       |

**Ranges stay ranges: the Toyota/Lexus rung is $400–$749 and no midpoint is
presented.**

**Two jobs have been delivered with no price at all.** That is not a pipeline
entry in any ordinary sense — **the work is gone and the number was never set.**
A-21 row 1 has been held since October and now gates ten rows.

---

## 4. Owed to DD84 — and why the ageing table is empty

| Customer | Amount      | Invoice         | Days past due | System confirming            | Action |
| -------- | ----------- | --------------- | ------------- | ---------------------------- | ------ |
| T-64     | **$350.00** | **NONE RAISED** | **n/a**       | **None — no invoice exists** | T-221  |
| T-37     | $349 / $149 | **NONE RAISED** | n/a           | **None**                     | T-37   |

**The receivables ageing table cannot be filled in, and the reason is the
finding: no invoice has been raised for any of it.** T-185 states it exactly —
**$699 of priced work has never been invoiced, so no receivable exists.** You
cannot age a receivable that was never created.

**The largest overdue receivable is $350.00 on T-64** (T-221), **and it is
overdue in the sense that the work was delivered on 2026-10-29 and nothing was
ever billed** — not in the sense that an invoice passed its date. **The
distinction matters because a collections process has nothing to act on.**

**The $699 at T-185**: my own arithmetic is that $349 + $350 reconciles to it,
and **that derivation is mine, not T-185's stated composition.**

**The invoice count stays at 10.** None of the four payments since August is an
invoice — three were bank transfers and one a storefront order.

---

## 5. Money received but not attributed to any job

| Received   | Amount      | Memo / source                       | Row   |
| ---------- | ----------- | ----------------------------------- | ----- |
| 2026-10-22 | **$450.00** | Zelle, memo "tune"                  | T-88  |
| 2026-10-24 | **$700.00** | memo "mecanic tune", from a company | T-92  |
| 2026-10-29 | **$400.00** | Zelle, memo "Tune"                  | T-113 |

**$450.00 + $700.00 + $400.00 = $1,550.00, and that is exactly the unattributed
total T-219 records** — so these three rows **are** the $1,550, not additional
to it. **Checked, because listing them separately alongside T-219's figure would
have double-counted the same money.**

**$700.00 matches no approved rung**, sitting between the $650 Performance Tune
and $749 in-person commissioning. **$400.00 is exactly the floor of the
Toyota/Lexus rung** and T-66 is a stalled Lexus enquiry — **one rung matching
one amount is a question, and it is recorded as a question, not as
attribution.**

**Only order #1001 can be attributed**, because it carries line items. **The
three transfers cannot, and neither payer has been identified against a job.**

---

## 6. Owed by DD84 — next 30 days

| Payee / item                        | Amount                          | Due                            | Recurring? | Source       |
| ----------------------------------- | ------------------------------- | ------------------------------ | ---------- | ------------ |
| A vendor whose charge has failed 7× | **Withheld, A-30**              | Overdue                        | Yes        | T-227, T-211 |
| T-202's scheduled outflows          | **Withheld, A-30**              | 11-21, 11-24 — **both passed** | —          | T-202        |
| A building vendor                   | **8% increase**, base withheld  | **2026-12-01 — lock-in shuts** | No         | T-248        |
| Deploy credits                      | Not read                        | **2026-12-02 reset**           | Yes        | T-154        |
| A website host, annual              | **Amount unknown** — never read | Auto-charge                    | Yes        | T-46         |
| A tooling/credits purchase          | **Withheld, A-30**              | Completed 11-23                | No         | T-239        |

**Every amount in that table is either withheld under A-30 or was never read.**
**That is the state of DD84's forward spend view: it cannot be totalled**, and
A-30 has been pending since 2026-11-02 while every new money finding joins it —
**now eight rows.**

**The 8% is publishable because a percentage is not an account-level figure.**
The base it applies to is not.

---

## 7. Job and product margin

| Job / product     | Revenue                      | Parts        | Software credits | Travel       | Labour       | Margin             | Complete?      |
| ----------------- | ---------------------------- | ------------ | ---------------- | ------------ | ------------ | ------------------ | -------------- |
| Order #1001       | **$499.18 retained**         | Not recorded | Not recorded     | n/a          | Not recorded | **Cannot compute** | **Incomplete** |
| T-64 (delivered)  | **$350 priced, $0 received** | Not recorded | Not recorded     | Not recorded | Not recorded | **Cannot compute** | **Incomplete** |
| T-223 (delivered) | **No price set**             | Not recorded | Not recorded     | Not recorded | Not recorded | **Cannot compute** | **Incomplete** |
| T-206 (delivered) | **No price set**             | Not recorded | Not recorded     | Not recorded | Not recorded | **Cannot compute** | **Incomplete** |

**Every row is incomplete, and the missing inputs are the same four every
time.** T-186 names the cause: **no job records parts, credits or hours.**

**What the record does now have, and still cannot use:**

- **Credits bought: $99.98 across 2026-10-24 and 2026-10-30, at $49.99 per
  credit** (T-94, closed). **Not attributed to any job**, so it cannot enter a
  margin row.
- **A tooling or credits purchase completed 2026-11-23** (T-239). **Amount not
  read, and withheld under A-30 regardless.**
- **Travel has no rate.** T-176: no per-mile basis exists, and transport is "at
  cost" until A-27 unblocks the sources. **No travel cost is assumed.**
- **Labour has no rate.** **None is assumed** — the spec forbids it.

**So margin remains uncomputable for every job DD84 has ever done, and the
blocker is a recording design decision (T-186), not a missing connector.**

---

## 8. Cash position — shape only

**A-19 Option C. Every figure in this section is withheld, and each was read.**

| Shape                                                                                                                      | Thread ID          | Read at                                 |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------- |
| **A credit card is over its credit limit.** The issuer approved the purchase that crossed it and charges no over-limit fee | `1a2178c8651933a2` | 2026-11-26T11:10:14Z, **UNREAD**        |
| **A card statement is ready**                                                                                              | `1a219194473f8e1a` | 2026-11-26, **unread**                  |
| **A bank statement is ready.** Masked account digits in its subject line are withheld under §5                             | `1a21a364db9f590a` | 2026-11-26, **unread**                  |
| **The account was below zero on 2026-11-16, not at zero**                                                                  | —                  | T-196                                   |
| **A vendor charge has failed seven consecutive times**                                                                     | —                  | T-227                                   |
| **The debit card was switched on then off within 2m49s**                                                                   | —                  | 2026-11-25T22:44:57Z → 22:47:46Z, T-205 |

**"Withheld, A-19" throughout — not "not available".** The limit, the balance,
the amount over the limit, the card's last four digits and the merchant and
amount of the purchase that crossed the line were all read this morning and are
all excluded: the first three as account-level figures under A-19, the fourth
under §5, the last under A-30.

**The shape, stated plainly: a business with no recurring revenue, nil closed
revenue this week, no invoice raised against any delivered work, an account
recorded below zero eleven days ago, a vendor charge failing for the seventh
time, and a credit line now exceeded.**

---

## 9. Corrective actions, ranked

| #   | Finding                                          | Money at stake                                      | Action                                   | Task                | Packet?                                                                                            |
| --- | ------------------------------------------------ | --------------------------------------------------- | ---------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | **No invoice exists for any delivered work**     | **$699 priced, $350 of it the largest single item** | **Raise the invoices.** Class E          | T-185, T-221        | **A-21 row 1 for the unpriced two; T-185 needs no packet — the price is already approved on T-64** |
| 2   | **Two jobs delivered with no price at all**      | **Unquantifiable** — that is the point              | Set the rungs                            | T-223, T-206, T-249 | **A-21 row 1**                                                                                     |
| 3   | **$1,550.00 received and attributed to nothing** | **$1,550.00**                                       | Identify three payers against three jobs | T-88, T-92, T-113   | No                                                                                                 |
| 4   | **The card is over its limit and unread**        | **Withheld, A-19**                                  | **Read the notice.** Five minutes        | T-258               | No                                                                                                 |
| 5   | **Forward spend cannot be totalled**             | **Withheld, A-30, eight rows**                      | Answer A-30                              | —                   | **A-30**                                                                                           |
| 6   | **Margin uncomputable for every job**            | Every job's profitability                           | Design the job cost record               | T-186               | No                                                                                                 |
| 7   | **The grant closes 2026-11-30**                  | **$1,000–$10,000**, range kept                      | Decide; eligibility unverifiable here    | T-194               | **A-27 blocks verification**                                                                       |
| 8   | **The stored prompt carries a corrected figure** | None directly                                       | Correct the routine's baseline text      | **T-261**           | **A-10 — the prompt is outside this session**                                                      |

---

## 10. Cash position, largest receivable, and the decisions

**Cash position: withheld under A-19** — the shapes are in §8, each with its
thread ID and read time. **In summary: over its credit limit on one card, below
zero on the account eleven days ago, and nothing received this week.**

**Largest overdue receivable: $350.00 on T-64** — delivered 2026-10-29, **never
invoiced**, no invoice exists to age.

**Decisions the owner needs:**

1. **Read the over-limit notice** (T-258). Not a decision; it comes first.
2. **A-21 row 1** — pricing. Ten rows, three delivered jobs, held since October.
   **It is the single largest money blocker on this board.**
3. **Invoice T-64's $350** — the price is already approved; only the invoice is
   missing.
4. **A-30** — eight rows, and every new money finding joins it. **While it is
   open this review cannot total DD84's forward spend.**
5. **T-194** — the grant, closing in three days.
6. **T-248** — lock the building price before 2026-12-01 or take the 8%.

---

## 11. Not checked this run

- **Stripe** — **no MCP server exists.** Permanent. The ten invoices, the
  $3,507.86 baseline and any processor balance all sit behind it.
- **PayPal** — authorisation expired.
- **The bank, the card issuer, Square, Chime, Melio, Capital on Tap** — no
  connector. **Every figure in §8 was read from a mail body, not an account.**
- **Supermetrics / ad spend** — not reached. **Ad spend is not assumed to be
  zero**; T-52 records that the business pays a platform for ads.
- **Whether #1001 also appears in Stripe** — **unreconcilable.** It settled
  through Shopify Payments; **the two systems are declared unreconciled rather
  than assumed distinct.**
- **The ten invoices' composition** — **closed as a line of enquiry by the
  owner, 2026-08-07.** Not reopened, and the numbering gaps are not raised.
- **Average invoice, largest invoice, customer concentration** — 116 days old,
  not re-checked, **not quoted.**
- **The Georgia Opportunity Ledger** — **a separate business by the owner's
  decision, 2026-09-16. Its revenue is not DD84's and no figure here includes
  it.**
- **`dd84tuning.com`** — the front door is a Manus site (owner, 2026-08-13), so
  **Shopify describes the back half of the funnel only** and its zeros do not
  measure total demand.
