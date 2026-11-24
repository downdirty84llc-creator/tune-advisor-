# DD84 daily command brief — 2026-11-24

Run 10:51:46Z–10:54:44Z. Routine: `/dd84-daily-brief`. Class A — observed,
calculated, reported. Nothing was sent, published, charged or changed.

Checkout verified: `HEAD` = `origin/claude/claude-md-docs-cqvhy6` = `13a4815`,
no `src/`, clean, **109 tracked files against the prompt's 28 — fifty-seventh
run reporting the drift** (A-10).

No skeleton: every input is on the remote in today's intake (`13a4815`,
OL-0122). Twenty-seventh such judgement.

**Today's intake ran at 10:21Z and is not repeated here.** It found the unread
security notice, the blind customer query, the first cost input and two
closures. This brief does the arithmetic.

---

## The one-line version

**Answering every pending approval packet would clear 51 of 208 open rows. The
other 157 are not waiting on a decision — they are waiting on someone to look.**
That is a different problem from the one this brief has described all week, and
it is the more tractable half.

---

## 1. Appointments

**None.** Calendar read live at 10:52Z for 2026-11-24 to 2026-12-02: **zero
events.** Eight days forward, no scheduled work, while two calibration jobs are
in active revision. **Third consecutive brief to report this; the work happens
in a mailbox and appears on no calendar.**

---

## 2. Money moved

| System                                         | Read                  | Result                                                                                 |
| ---------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------- |
| **Shopify**                                    | live, 10:52Z          | **All time 1, EXACT. Since yesterday 0, EXACT.** #1001 is now 32 days old              |
| Stripe                                         | no connector          | Not available. **Mail proves the account is live and reports an unrecognised sign-in** |
| PayPal                                         | authorisation expired | Not available. Mail proves it is live                                                  |
| Bank / Square / Chime / Melio / Capital on Tap | no connector          | Not available                                                                          |

**In: nothing.** **Out:** a tooling-or-credits purchase completed yesterday
(T-239) — **the first observable parts-or-credits cost in this record** — and
**T-202's second scheduled outflow falls today.** **2026-11-26 is a bank holiday
and deposits may be delayed** (T-242). Amounts withheld, A-19 and A-30.

---

## 3. Overdue work

| Measure           | Count   | Share            |
| ----------------- | ------- | ---------------- |
| Open              | 208     | —                |
| **Past due**      | **178** | **86%**          |
| Critical and open | 37      | —                |
| Due today         | 14      | —                |
| **Done**          | **27**  | **+2 yesterday** |

**The past-due share has risen from 80% to 86% in one day** — not because work
was added, but because 2026-11-23's fourteen dated rows rolled over.

---

## 4. The calculation that changes the diagnosis

This brief has reported for four days that roughly 69% of open work waits on a
decision. **That is true by status column and it has been putting the emphasis
in the wrong place.**

| Measure                                               | Count   | Share of 208 open |
| ----------------------------------------------------- | ------- | ----------------- |
| Rows whose Approval column **names a pending packet** | **51**  | 25%               |
| Rows naming **no packet at all**                      | **157** | **75%**           |

**Answering all fourteen packets clears at most 51 rows.** The other 157 have no
decision pending — they are mostly **Awaiting Owner with "A to report"**, which
means the agent has already reported and nobody has looked.

### The Critical tier splits the same way, and more sharply

**37 Critical rows are open. 21 of them name no packet.** Of those 21,
**seventeen say "A to report"**. One says "E to invoice", one "A to verify", one
"fix proposed", one "T-164 first".

**So of the thirty-seven most urgent items on this board, twenty-one are not
blocked on a decision at all.** They are a reading list.

A sample of what is on it, all Critical, all past due, none needing an approval:

| Row       | Days past due | What it needs                                                                |
| --------- | ------------- | ---------------------------------------------------------------------------- |
| **T-52**  | 43            | A credential phish, unread — and the business now pays that platform for ads |
| **T-171** | 5             | The secret-key cutoff **passed on 2026-11-20**                               |
| **T-185** | 8             | **$699 of priced work has never been invoiced**                              |
| **T-143** | 4             | A developer account closes **2026-12-06** for non-use                        |
| **T-229** | due today     | The database pause warning, fired yesterday                                  |
| **T-237** | due today     | **The unread sign-in notice**                                                |

**This is the more tractable half of the backlog**, and saying so is not
softening the number: 178 rows are past due and that is bad. **But fourteen
packets is the visible queue and it is the smaller one.**

---

## 5. Urgent — and it needs nobody's permission

**T-237: a payment processor reports a sign-in from a device it does not
recognise, 2026-11-23T21:05:28Z, and it is unread.**

**No conclusion either way.** An Android phone in Atlanta matches the owner, who
was working that weekend. It is also what an unauthorised sign-in from the same
metro would look like. **Nobody has read it**, and it is the account whose
secret-key values T-171 says stopped being readable on 2026-11-20. **A second
processor sent a trusted-device prompt the same day.**

**Reading an email needs no approval. This is the highest-consequence item on
the board and among the cheapest to resolve.**

---

## 6. Customer risk

| Row                           | State                                   | Priced?     | Invoiced? |
| ----------------------------- | --------------------------------------- | ----------- | --------- |
| **T-223** (Ram)               | Live, customer wrote, **owner replied** | **No**      | **No**    |
| **T-206 / T-224** (Silverado) | Live, **owner replied**                 | **No**      | **No**    |
| T-64                          | Delivered, 7 revisions                  | **$350**    | **No**    |
| T-37                          | **Priced, nothing delivered**           | $349 / $149 | No        |
| T-66, T-177, T-95             | Unanswered enquiries                    | No          | —         |

**Both live jobs are being answered promptly. Neither is priced.** A-21 row 1.

### A correction to yesterday's arithmetic

Yesterday this brief said one delivered job had an approved price and none was
invoiced. **T-185 records $699 of priced work never invoiced, is Critical, and
is eight days past due — and this brief did not cite it.**

**$349 + $350 = $699, which matches T-37's and T-64's prices exactly. That
arithmetic is mine, not T-185's stated composition**, and it reconciles with
T-221's separate finding that $350 is the largest single uninvoiced receivable.

**The uninvoiced position is therefore worse than yesterday's brief implied**:
**$699 of priced work with no invoice**, plus two delivered jobs with no price
at all.

---

## 7. One missing fact, ten rows

**T-164 — no location on record — is now the root of ten open rows:**

T-100 (a proof of address rejected as unverifiable), T-106 (sales tax collected
with no registration on record), T-161 (which county, held), **T-164**, T-191
(the $25k loan at 2%), T-197 (a third proof-of-address rejection), T-213 (a
second county in DD84's own outbound), T-231 (a merchant platform blocking),
T-234 (the SBA loan's county gate), and **T-241 from yesterday — a fourth
platform rejecting verification.**

**Four separate platforms have now rejected DD84's address or demanded
verification.** T-213 reduced the question to **one of two counties the owner
has himself written to.** It needs a decision about which site he is pursuing,
not research.

---

## 8. Approvals pending — fourteen

| Packet                             | Decision                                                 | Rows gated |
| ---------------------------------- | -------------------------------------------------------- | ---------- |
| **A-25**                           | Whose account is the business's?                         | **9**      |
| **A-21**                           | Pricing — **row 1 held since October**                   | **8**      |
| **A-30**                           | May vendor and lender outflow amounts be published here? | **8**      |
| A-28, A-29, A-27, A-31             | —                                                        | 3 each     |
| A-32                               | Personal outflows                                        | 2          |
| A-07, A-10, A-17, A-22, A-23, A-24 | —                                                        | —          |

**A-30 rose from 6 to 8** — every new money finding lands behind it. **A-22
should be closed rather than answered; A-10 cannot be answered from here.**
**Twelve are decidable today.**

---

## 9. Top three priorities

### 1. T-237 — read the sign-in notice

Five minutes, no approval, highest consequence on the board. If it was the
owner's own phone, the item closes. If it was not, everything else on this brief
is secondary.

### 2. The twenty-one Critical rows that need looking at, not deciding

Start with the four carrying dates that have passed or are passing: **T-171**
(cutoff gone), **T-229** (pause warning), **T-143** (account closes 2026-12-06),
**T-185** ($699 uninvoiced). **None needs a packet.**

### 3. A-21 row 1 and A-25 — seventeen rows between them

A-21 row 1 turns delivered work into invoiceable work on three jobs. A-25
unblocks nine. **These are the two packets worth answering before the other
twelve.**

---

## 10. Decisions the owner needs

1. **Read T-237.** Not a decision — but it comes first.
2. **A-21 row 1** — pricing, 8 rows, three delivered jobs.
3. **A-25** — 9 rows.
4. **Which county** — ten rows, four platform rejections, one of two answers.
5. **A-30** — 8 rows, and rising weekly.
6. **A-31** (52 drafts), **A-32** (personal outflows).
7. **T-11 and T-13** — Critical, ~3 months blocked, **both already approved.**

---

## 11. Is this a quiet day?

**No.** An unread security notice, an outflow due today, fourteen rows due, a
bank holiday in two days.

**The trading is quiet** — no appointments in eight days, one order in 32 days,
nothing inbound — **and that is unchanged rather than new.** What changed today
is the diagnosis in §4: most of this backlog is not waiting on the owner's
judgement. It is waiting on his attention, which is a cheaper thing to spend.

---

## 12. Not checked this run

- **Stripe** — no connector. **Whether yesterday's sign-in was legitimate cannot
  be established from here**; it needs the dashboard.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Gmail** — not re-read; today's intake read it at 10:21Z and is cited.
- **Supabase** — no tool called. OL-0119 corrects the reason this record used to
  give for that.
- **The customer count** — `ventures.md` records three, verified 2026-08-03,
  **113 days old**, not re-verifiable, and **probably an undercount** since
  T-223's customer is absent from the registry. Not quoted.
- **`category:primary`** — **established yesterday as matching nothing.** Query
  6 is the customer-finding query until the command file changes (T-238).
