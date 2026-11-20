# DD84 cash and revenue review — week ending 2026-11-20

**Period: 2026-11-13T11:13Z → 2026-11-20T11:13Z**, the seven days ending at the
run start. Routine fired 11:12:52Z against an 11:10Z schedule. **Run start read
from the clock at 11:13:14Z.** **A worker restart interrupted this run mid-read;
the checkout was re-verified at 11:31:19Z and found intact at `f6bcc16`.**
**Finish time read from the clock at 11:35:59Z.**

**Systems reached:** Shopify (GraphQL), Gmail, the operating record. **Not
reached:** Stripe, PayPal, the bank, Square, Chime, Melio, Capital on Tap,
Supermetrics, any public web page.

**Class A. No money was moved.** No charge, refund, transfer, invoice, payment
link, subscription change or price change. **No write tool was called on any
payment system.** Every figure below names its system; a system not reached
produces "not available", never an estimate.

## 0. Checkout

`HEAD` equals origin at **`f6bcc16`**, no `src/`, no `package.json`, clean,
**104 tracked files against the prompt's 28 — fifty-second run reporting the
drift.** Skeleton committed at `8d36ebf` before the analysis: **twenty-third
application of OL-0050, and not theoretical** — the restart landed between two
reads, and eight reads were what a second one would have destroyed.

---

## The week in one line

**Nothing came in.** The reachable systems return a read zero, the unreachable
ones return nothing, and **22 days have now passed since the last known
payment.** Every confirmed money movement this week went outward, and **not one
of them was a business transaction that succeeded.**

---

## 1. Revenue closed in period

| Source system           | Gross                                                      | Refunds | Disputes | Net      | Read at |
| ----------------------- | ---------------------------------------------------------- | ------- | -------- | -------- | ------- |
| **Shopify**             | **zero**                                                   | zero    | zero     | **zero** | 11:14Z  |
| Stripe                  | **Not available** — no MCP server exists for Stripe at all | —       | —        | —        | —       |
| PayPal                  | **Not available** — connector needs re-authentication      | —       | —        | —        | —       |
| Bank (Zelle, transfers) | **Not available** — no connector exists                    | —       | —        | —        | —       |

**Shopify's zero is a read figure, not an assumption:**
`ordersCount(query: "created_at:>=2026-11-13 created_at:<=2026-11-20")` returned
**count 0, precision EXACT**. All-time in the same call: **1, EXACT.**

**The total is partial and must not be read as "zero revenue".** Three of the
four systems that could carry revenue were not reachable. What can be said is
narrower and still useful: **no revenue reached the one system this session can
read, and no evidence of revenue reached the mailbox either.**

**The mail sweep is the second independent check.**
`(zelle OR "payment received" OR "you received" OR deposited OR payout) newer_than:8d`
— about 52 threads estimated, **20 reviewed, and not one was a payment
received.** The only money-adjacent results were a Zelle _enrolment_
confirmation, a bank marketing offer and a processor's terms update. **Two
independent reads, both negative, is materially stronger than one.**

**Last known money in: 2026-10-29 — 22 days before this run.**

---

## 2. Comparison against the recorded baseline

The routine's prompt supplies a baseline. **Two of its figures the registry has
already struck through, and two cannot be re-verified from here at all.**

| Prompt's baseline           | State today                                                                                                                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| All-time **$3,507.86**      | Still the recorded figure, **verified 2026-08-03 — 109 days old.** Breaches the 30-day rule and is **not re-verifiable**: the system it was read from is unreachable, and its basis (invoiced, collected or net) is recorded nowhere |
| **10** paid invoices        | **Unchanged, and correctly so** — none of the four recent payments was an invoice. Two were bank transfers and one a storefront order                                                                                                |
| **3** customers             | Verified 2026-08-03, 109 days old, **not re-verifiable**                                                                                                                                                                             |
| Last payment **2025-09-12** | **Already superseded in `ventures.md`** → **2026-10-22**, verified 2026-10-23                                                                                                                                                        |
| **0** Shopify orders        | **Already superseded** → **1**, verified 2026-10-29. **Re-verified live this run: still 1, EXACT**                                                                                                                                   |

**Only one baseline figure was re-verifiable this week, and it has not moved.**
The registry's derived all-time totals — **$5,607.86 charged / $5,588.17
received / $5,557.04 retained** — are reproduced as the registry labels them:
**derived, and resting on an unverified baseline.** They are not re-derived here
and must not be presented as reconciled.

---

## 3. Revenue pending and quotes outstanding

| Row      | What it is                                              | Priced                                      | State                                             |
| -------- | ------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------- |
| **T-64** | A live tuning job, 7th revision sent 10-29              | **$350** (A-21 approved)                    | Delivered, unacknowledged, 37 days past due       |
| **T-37** | The C10 customer, AFR fault                             | **$349 / $149**                             | **Nothing delivered to invoice.** A-21 row 1 held |
| T-66     | A real Lexus enquiry                                    | **No range ever given**, asked 56 days ago  | 33 days silent, A-28                              |
| T-206    | A fully specified GM tune lead                          | **Unpriced** — rung deliberately not picked | Starred, unread, A-29                             |
| T-177    | A tune-file enquiry                                     | Unpriced                                    | Read, unanswered, A-29                            |
| T-107    | A $100 credit code sold the $350 Mopar rung at **$250** | —                                           | A-21 assumes $350; the conflict is unresolved     |

**Pipeline that could be invoiced today: $350 (T-64), and $498 on T-37 once
something is delivered.** Everything else is unpriced because **A-21 row 1 has
been held since October on exactly that question.**

---

## 4. Receivables ageing, and the largest overdue receivable

| Age         | Row      | Amount      | Invoiced?                         |
| ----------- | -------- | ----------- | --------------------------------- |
| **37 days** | **T-64** | **$350**    | **No**                            |
| 41 days     | T-37     | $349 / $149 | No — nothing delivered to invoice |

**The largest overdue receivable is $350 on T-64: an approved price, work
delivered through seven revisions, unacknowledged since 2026-10-29, and never
invoiced.**

**That last clause is the finding.** The receivable exists in this register and
in no billing system. **The invoice count has stood at 10 since August**, so
this amount has never been issued, never aged in a payments system, and would
appear in no receivables report anywhere but here. **A receivable nobody has
billed is not a receivable; it is unbilled work that looks like one.** Logged as
**T-221**.

---

## 5. Deposits received

**None in period, from any reachable system.** No deposit, retainer or part
payment appears in Shopify or in the mailbox.

**Three historical payments remain unattributed to any job** — **$450** (T-88),
**$700** (T-92) and **$400** (T-113), **$1,550 of the $2,100 collected in late
October.** None moved this week. T-92's payer is a company; T-113's amount
matches the floor of the Toyota/Lexus rung and T-66 is a stalled Lexus enquiry,
**which is one rung matching one amount and stays recorded as a question, not as
attribution.**

---

## 6. Expenses committed and upcoming spend

| Item                                                  | Shape                                                                                                                                              | Amount                                                       |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **A vendor subscription failed four times this week** | Ocoya, via the payment processor. Notices `1a1e48b8ca63ff04` (first), `1a1eb69a4fe93459`, `1a1efeb04a1164a6`, `1a1f6241c4a4f7a8` (11-19 23:28:44Z) | **Withheld, A-19**                                           |
| **Three card declines**                               | `1a1cff4504a6617b`, `1a1e4c24cb7e3574`, `1a1eae2a6e59b2b7`. Two live reasons on record: no funds, and the card switched off (T-205)                | **Withheld, A-19**                                           |
| **Two outflows scheduled**                            | **2026-11-21 (tomorrow) and 2026-11-24** against an account the record describes as below zero (T-202)                                             | **Withheld, A-19 / A-30**                                    |
| A domain-host annual invoice                          | Webador, auto-charging; **amount unknown since 2026-10-12** (T-46)                                                                                 | **Unknown — a gap, not a withholding**                       |
| An outflow to a consumer lender                       | Left the business account 2026-11-09 (T-183)                                                                                                       | **Withheld, A-19 / A-30**                                    |
| **A personal, non-business purchase**                 | Confirmed paid **2026-11-17** for an appointment on 11-18. Thread `1a1e9fd447d1f1c8`, unread                                                       | **Withheld — no approval covers this category. A-32 raised** |

**T-198 records seven payees known.** This review can still name only the ones
that happened to fail, because **a failure generates a notice and a success does
not.** The cost base is visible exactly where it breaks.

### One read changed its own classification

A thread titled **"Your appointment receipt"** looked like a customer booking —
and would have been this week's only revenue event, against a calendar showing
zero appointments for nine days. **Reading it showed a personal, non-business
purchase: money out, not revenue.**

**Taking the subject line at face value would have put fictional revenue into a
cash review**, which is the single worst error this routine can make. It is
recorded here because the near miss is the useful part.

Its amount, vendor and service are **withheld**. A-19 covers cash positions and
A-30 covers vendor and lender outflows; **personal discretionary spending is a
third category that no decision reaches**, and this repository is public. Per
`CLAUDE.md`, a new category of sensitive material is an approval packet and not
a judgement call — **A-32**.

**Why it belongs in a cash review at all:** the business/personal boundary is
itself an open question here. **T-137 asks whether the account this register
calls the business's carries a personal obligation, and A-25 has held that since
2026-11-06.** A confirmed personal outflow inside the review week is direct
evidence on that question, so the shape is reported and the detail is not.

### New this period: a payment rail was enrolled

**A Zelle enrolment confirmation arrived 2026-11-14T13:00:36Z and is still
unread** — thread `1a1da2546a29c6fe`, from the bank's alert channel.

**Zelle is the rail that carried $1,550 of unattributed money in late October**
(T-88, T-92, T-113). Whether this is a first enrolment, a re-enrolment, or an
enrolment of a _different_ account **is not established, and matters**: if it is
a different account, the October attribution question changes shape. **No
mechanism is asserted and no connection to the October transfers is claimed.**
Logged as **T-219**, dependent on A-25.

---

## 7. Job-level margin

**Not computable, and that is a recorded defect rather than a missing read.**

**T-186: no job record carries parts, credits or hours**, so no job's cost is
known and no margin can be derived for any of them. T-186 **falls due today**.

**Unknown is not zero.** The gross price on T-64 is $350 and its margin is
**unknown**, not 100%. The $100 credit code on T-107 is the only cost input
anywhere in the record, and it contradicts the price A-21 assumes.

---

## 8. Corrective actions each finding implies

| Finding                                                | Action implied                                   | Whose                               |
| ------------------------------------------------------ | ------------------------------------------------ | ----------------------------------- |
| Four vendor failures, two outflows due 11-21 and 11-24 | **Decide which outflow stands, before tomorrow** | Owner — A-30, T-202                 |
| $350 delivered, approved, never invoiced               | **Issue the invoice**                            | Owner — Class E/F, no tool here can |
| No job carries parts, credits or hours                 | Design the minimum job record                    | Agent — T-186, due today            |
| Zelle enrolled 11-14, unread                           | Read it; establish which account                 | Owner — A-25, T-219                 |
| Personal outflow in the review week                    | Decide the category                              | Owner — A-32                        |
| A-21 row 1 held since October                          | Pricing decision releases four rows              | Owner                               |
| Webador amount unknown since 10-12                     | One read of the invoice                          | Owner — T-46                        |

---

## 9. Cash position

**No balance was read this run, and none could be: there is no bank connector.**
That is a gap, not a withholding, and the distinction matters.

**The most recent shape on the record is "below zero", from the 2026-11-17
intake**, with the figure withheld under A-19 at the time and the thread ID in
that brief. **Supporting that shape this week, from reads made in this run:** a
business subscription failed four consecutive times, a card was declined three
times, and one of the two recorded decline reasons is insufficient funds.

**Nothing in this run contradicts "below zero" and nothing in it re-measures.**
Stating it as a current figure would be fabrication; stating it as unknown would
discard four failures and three declines that were actually read.

---

## 10. Decisions the owner needs

1. **A-30, then T-202** — which of the two scheduled outflows stands. **The
   first falls tomorrow.**
2. **A-32** — may personal, non-business outflows be recorded here, and in what
   form? Raised today by this review.
3. **A-25** — whose account is the business's. **It now gates eight rows**,
   T-219 among them.
4. **A-21 row 1** — the pricing decision. It is why four customer rows carry no
   number.
5. **Invoice the $350.** It is approved, delivered and 37 days old, and no tool
   in this session can issue it.

---

## 11. An instrument defect found in this run's own output

**The skeleton committed at `8d36ebf` carried the failed subscription's amount.
That breaches A-19** — a declined-payment amount is excluded from every file
including the log. **The wording was corrected in this file, and the amount is
not restated here**: a correction note that reproduces the figure in order to
explain it has leaked it twice.

**The leak gate did not catch it.** The gate carries 22 pattern classes, caught
the owner's own mail address this week and caught a bare profession noun twice,
and **passed a declined-payment amount without comment.** So the rule the owner
wrote most recently is the one rule the control does not enforce — **every run
has been relying on judgement where it believed it had a check.**

**And the figure is already on the record in three places** — one in the
operating log and two in the register — **which is not a new leak: it is exactly
what A-24 has been pending on since 2026-11-02.** T-109 records that a
declined-payment figure sits in ten files predating A-19, and A-24 is the packet
to redact them. **So the gate gap and A-24's pendency are one problem seen from
two ends:** the control will not stop the figure going in, and the historical
copies have not come out, so a run can re-add it and nothing objects. **This run
nearly did.**

**Narrowing or extending the gate is a change to the control that guards a
public repository, and this is the second gate finding in two days** (the
property-noun class needs narrowing, recorded in OL-0116). **Both are recorded
for one deliberate pass, with the synthetic-fixture self-test re-run afterwards
— not patched while holding a brief.** Logged as **T-220**.

The skeleton is left in history as committed. **It is the evidence that the
check was missing, and rewriting it would destroy exactly that.**

---

## 12. Not reached this run

- **Stripe** — no MCP server exists. **Mail proves the account is live**: four
  failed-payment notices and two platform notices arrived from it this week. The
  account is active and unreadable at the same time, which is T-171's problem in
  a different form.
- **PayPal** — authorisation expired. A terms-update mail arrived from it this
  week, so that account is live too.
- **The bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Supermetrics and any public web page** — `allowed_hosts` is empty (T-98,
  A-27).
- **`dd84tuning.com` analytics** — the Manus site is the front door and its
  analytics remain the most valuable unknown in the registry. Shopify describes
  the back half of the funnel only (owner decision, 2026-08-13).
- **The Georgia Opportunity Ledger** — a separate business. Its revenue is not
  DD84's and the two are never combined (owner decision, 2026-09-16).
- **The ten invoices** — closed as a line of enquiry (owner decision,
  2026-08-07). Not reopened, and the numbering gaps are not raised.
- **Attachments** — none downloaded or opened.
- **Mail state** — nothing read, starred, labelled or marked. Every thread above
  was observed from list results or metadata, and the two full reads were
  metadata and snippet only.
