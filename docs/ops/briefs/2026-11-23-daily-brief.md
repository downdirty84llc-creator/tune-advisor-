# DD84 daily command brief — 2026-11-23

Run 10:51:03Z–10:55:10Z. Routine: `/dd84-daily-brief`. Class A — observed,
calculated, reported. Nothing was sent, published, charged or changed.

Checkout verified before work: `HEAD` = `origin/claude/claude-md-docs-cqvhy6` =
`45a78e1`, no `src/`, clean, **106 tracked files against the prompt's 28 —
fifty-fourth consecutive run reporting the drift** (A-10).

No skeleton: every input is already on the remote in today's intake (`45a78e1`,
OL-0119). Twenty-fifth such judgement.

**Today's intake ran at 10:21Z and is not repeated here.** It found the two
delivered jobs, the Supabase pause warning and the seven vendor failures. This
brief does the arithmetic on top.

---

## The one-line version

**The bottleneck moved.** For a week this brief reported that nothing left the
business. Over the weekend the owner delivered two tuning jobs. **The problem is
now one step further along: three jobs have had work delivered, one of them has
an approved price, and none has been invoiced.**

---

## 1. Appointments

**None.** Google Calendar read live at 10:51Z for 2026-11-23 through 2026-12-01:
**zero events of any type.**

**Nine days forward with no scheduled work — and that is now a stranger result
than it was last week**, because two calibration jobs are in active revision.
The work is happening in a mailbox and appears nowhere on a calendar.

---

## 2. Money moved

| System                                         | Read                  | Result                                                                                              |
| ---------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| **Shopify**                                    | live, 10:51Z          | **All time: 1 order, EXACT. Since Friday: 0, EXACT.** #1001 remains the only order, now 31 days old |
| Stripe                                         | no connector exists   | Not available — permanent gap. Mail proves the account is live                                      |
| PayPal                                         | authorisation expired | Not available. Mail proves it processed a payment on 11-21                                          |
| Bank / Square / Chime / Melio / Capital on Tap | no connector          | Not available this run                                                                              |

**Money in since Friday: none.** **Money out: one payment completed** — the
storefront platform's monthly bill, settled 2026-11-21 (T-230). **Amount
withheld, A-30.**

**Three delivered calibrations and one storefront order is the whole revenue
surface.** The order is 31 days old and the calibrations are unbilled.

---

## 3. Overdue work

| Measure           | Count   | Share   |
| ----------------- | ------- | ------- |
| Open tasks        | 201     | —       |
| **Past due**      | **161** | **80%** |
| Critical and open | 36      | —       |
| **Due today**     | **18**  | —       |

**Eighteen due today**, including T-225 and T-226 — both created this morning,
both Critical, and **neither needs an approval.**

---

## 4. The decision split, and the one packet that doubled

| Waiting on a decision | 139    | **69% of open work** |
| --------------------- | ------ | -------------------- |
| Awaiting Owner        | 126    |                      |
| Awaiting Approval     | 6      |                      |
| Blocked               | 7      |                      |
| **Agent-actionable**  | **62** | **31%**              |

- **114 of the 161 past-due rows are waiting on a decision.**
- **33 of the 36 Critical open rows are waiting on a decision.**

### A-21 took on three more rows over one weekend

Counted from the register as committed on Friday (`ba3dfc5`) against today, so
both columns are derived rather than remembered:

| Packet     | Rows gated Friday | Today | Change |
| ---------- | ----------------- | ----- | ------ |
| **A-21**   | 5                 | **8** | **+3** |
| A-25       | 8                 | **9** | +1     |
| A-30       | 4                 | 6     | +2     |
| A-31       | 2                 | 3     | +1     |
| A-32       | 1                 | 2     | +1     |
| A-28, A-27 | 3                 | 3     | —      |
| **A-29**   | 4                 | **3** | **−1** |

**A-21 row 1 is a single pricing decision held since October over two jobs. It
now gates eight rows, three of which are jobs where the calibration is already
in the customer's hands.** Nothing else on this board has that ratio of
consequence to effort: **one answer converts delivered work into invoiceable
work.**

**A-25 is still the largest block at nine rows**, on one question about whose
account the business's is.

**A-29 is the only packet that shrank, and not because it was decided** — T-206
moved off it when the owner answered that customer himself. **A packet getting
smaller because the work went around it is not progress on the packet.**

---

## 5. Customer risk — the shape changed completely

| Row               | State                                                          | Priced?                 | Invoiced? |
| ----------------- | -------------------------------------------------------------- | ----------------------- | --------- |
| **T-64**          | Delivered, 7 revisions, unacknowledged since 10-29             | **$350, A-21 approved** | **No**    |
| **T-206 / T-224** | **Delivered 11-20 and 11-21**, customer sending datalogs       | **No** — A-21 row 1     | **No**    |
| **T-223**         | **Delivered 11-21**, a 2016 Ram Stage 2, third party reviewing | **No** — A-21 row 1     | **No**    |
| T-37              | **Priced, nothing delivered**                                  | $349 / $149             | No        |
| T-66              | Asked for a range 59 days ago, never got one                   | No                      | —         |
| T-177, T-95       | Unanswered enquiries                                           | No                      | —         |

**Three jobs have had work delivered. One has an approved price. None has been
invoiced. The invoice count has stood at 10 since August.**

**T-37 is the mirror image**: priced at $349 and $149, with nothing delivered to
invoice. **So the business has delivered what it has not priced, and priced what
it has not delivered.**

### Two things due today that need nobody's permission

**T-226 — a customer has been waiting 36 hours.** The last message on the Ram
job arrived 2026-11-21T23:02:19Z and is unread, **after the owner had written in
that same thread that he would follow up.** Reading it costs nothing and no
approval covers reading.

**T-225 — a model year disagrees with a delivered calibration.** The register
records a 2014; the delivered file naming says 15. **A filename is not
authoritative and neither is a register row, so nothing is concluded — but the
model year selects the calibration base, and this is one check before the next
revision.**

---

## 6. Approvals pending — fourteen

| Packet                             | Decision                                                 | Rows gated |
| ---------------------------------- | -------------------------------------------------------- | ---------- |
| **A-25**                           | Whose account is the business's?                         | **9**      |
| **A-21**                           | Pricing — **row 1 still held**                           | **8**      |
| **A-30**                           | May vendor and lender outflow amounts be published here? | 6          |
| A-28                               | Three follow-ups revised to the facts                    | 3          |
| **A-29**                           | Standing authority to acknowledge an enquiry             | 3          |
| A-27                               | Allow five hosts so sources can be validated             | 3          |
| **A-31**                           | **What happens to the 52 unsent drafts**                 | 3          |
| A-32                               | May personal, non-business outflows be recorded here?    | 2          |
| A-07, A-10, A-17, A-22, A-23, A-24 | —                                                        | —          |

**A-29 dropped from four rows to three** — see §4: it shrank because the owner
answered that customer himself, not because the packet was decided. **A-22
should be closed rather than answered**, its premise being recorded false, and
**A-10 cannot be answered from here at all.** That leaves twelve a person could
actually decide today.

---

## 7. Top three priorities for today

### 1. A-21 row 1 — one decision, eight rows, three delivered jobs

Held since October over two jobs. It now gates three jobs where the calibration
is already with the customer. **Until it is answered, work that is finished
cannot be billed**, and the register will keep accumulating
delivered-and-unpriced rows at the rate the owner tunes.

The catalogue has rungs for both platforms. **Picking one is Class E and is not
this routine's to do** — which is exactly why the packet exists.

### 2. T-226 and T-225 — due today, no approval required

A customer promised a follow-up and waiting 36 hours, and a model-year conflict
on a calibration that has already shipped. **Both are reads, not decisions.**
They are first because they are the only Critical items today that nothing is
blocking.

### 3. The dated money and infrastructure items

**T-202's second scheduled outflow falls tomorrow, 2026-11-24**, against an
account the record describes as below zero, with **a vendor charge that has now
failed seven consecutive times** (T-227). **T-229** — the Supabase project
`dd84-ai-tuning` will be paused for inactivity, with 90 days to unpause after it
and no pause date given.

---

## 8. Decisions the owner needs

1. **A-21 row 1** — the pricing decision. Eight rows, three delivered jobs.
2. **A-25** — nine rows, the largest block.
3. **A-30 / T-202** — which outflow stands, before tomorrow.
4. **A-31** — the 52 unsent drafts.
5. **A-32** — whether personal outflows are recorded here.
6. **T-11 and T-13** — still Critical, still ~3 months blocked, **both already
   approved.** These need doing, not deciding.

---

## 9. Is this a quiet day?

**No — and for the first time in this record, not because of what is stuck.**

Two calibrations were delivered over the weekend, a customer is mid-revision on
each, eighteen rows fall due today, an outflow lands tomorrow and an
infrastructure deadline has opened. **That is a working business with a billing
problem, which is a materially better problem than the one this brief described
last week.**

**What is quiet is the trading surface**: no appointments in nine days, one
storefront order in 31 days, nothing inbound. **Both halves are true and the
second does not cancel the first.** The accurate summary is that **DD84 is
producing work and not converting it**, and that is a sentence this brief could
not have written on Friday.

---

## 10. Not checked this run

- **Stripe** — no MCP server exists. Permanent gap.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Gmail** — not re-read; today's intake read it at 10:21Z, thirty minutes
  before this run, and its findings are cited rather than re-derived.
- **Supabase** — **no tool called.** The pause notice was read from mail.
  OL-0119 corrects the reason this record previously gave for not opening it:
  the pause is driven by _insufficient_ activity, so abstaining accelerates it
  rather than protecting it.
- **The customer count** — `ventures.md` records three, verified 2026-08-03,
  **112 days old.** Not re-verifiable: Stripe and the bank are unreachable. **It
  is also now probably wrong in the other direction** — T-223's customer appears
  nowhere in the registry, so the count may understate. Not quoted above.
- **Attachments** — none downloaded, opened or described.
