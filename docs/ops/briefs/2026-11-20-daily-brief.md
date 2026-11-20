# DD84 daily command brief — 2026-11-20

Run 10:51:47Z–10:55:21Z. Routine: `/dd84-daily-brief`. Class A — observed,
calculated, reported. Nothing was sent, published, charged or changed.

Checkout verified before work: `HEAD` = `origin/claude/claude-md-docs-cqvhy6` =
`446f494`, no `src/`, working tree clean, **103 tracked files against the
prompt's 28 — fifty-first consecutive run reporting the drift.** Only the
claude.ai Routines UI can fix the prompt (A-10).

No skeleton this run: every input is already on the remote in today's intake
(`446f494`, OL-0116), so a restart would cost the writing and none of the
evidence. Twenty-second such judgement.

**Today's intake ran at 10:21Z and is not repeated here.** It found the 51-draft
backlog, the fourth consecutive vendor-charge failure, the bounced SBA enquiry
and the second county. This brief does the arithmetic on top of it.

---

## The one-line version

**Sixty-eight per cent of this business's open work is not waiting on work. It
is waiting on a decision** — and today the mechanism is visible in a way it has
not been before: fifty-one messages written, none sent.

---

## 1. Appointments

**None.** Google Calendar read live at 10:52Z for 2026-11-20 through 2026-11-28:
zero events of any type.

**Nine days forward, no scheduled work.** This is a real zero — the calendar
answered and was empty — not a connector failure. Yesterday's brief reported the
same over its own eight-day window, so the empty stretch is now confirmed twice
from two different read dates.

---

## 2. Money moved

| System                                         | Read                  | Result                                                                                                      |
| ---------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Shopify                                        | live, 10:53Z          | **`ordersCount` = 1, precision EXACT.** #1001, 2026-10-23, $550, paid and fulfilled. **28 days unchanged.** |
| Stripe                                         | no connector exists   | Not available — permanent gap, not an outage                                                                |
| PayPal                                         | authorisation expired | Not available this run                                                                                      |
| Bank / Square / Chime / Melio / Capital on Tap | no connector          | Not available this run                                                                                      |

**Money in today: none.** The store has taken one order in its entire history
and the count is exact, not a sample.

**Money out is only visible through mail.** Today's intake read a Stripe
failed-payment notice — the fourth consecutive daily failure for one vendor,
2026-11-19T23:28:44Z, thread `1a1f6241c4a4f7a8`. **Amount withheld under A-19**,
because a declined-payment amount is exactly what A-19 Option C excludes and
exactly what A-30 has been holding since 2026-11-13. Withheld, not unavailable.

**Instrument note:** Shopify's `list-orders` tool did not resolve on this run's
connector reconnect, so the count came from a GraphQL query instead — the
documented fallback. **That makes this a real read, not a "not available this
run".** Worth recording because the difference between "the tool was missing"
and "the data was missing" is the difference between a gap and a defect.

---

## 3. Overdue work

| Measure           | Count   | Share   |
| ----------------- | ------- | ------- |
| Open tasks        | 186     | —       |
| **Past due**      | **148** | **80%** |
| Critical and open | 30      | —       |
| **Due today**     | **13**  | —       |

Counted after this run added one row of its own (T-218), so these match the
register in the same commit. It is neither Critical nor past due.

**Reconciling with yesterday:** yesterday's brief said eleven items fell due
today. Thirteen do. The two extra are **T-209 and T-211, both created by today's
own runs** — yesterday's count was right for the register as it then stood.

### Due today — thirteen

T-143 (Critical — a developer account closes 2026-12-06 for non-use), T-206
(Critical — the lead), T-211 (Critical — the fourth vendor failure), T-176,
T-186, T-188, T-190, T-195, T-198, T-199, T-201, T-203, T-209.

### Already past due overnight

**T-171, T-202 and T-205 were all due 2026-11-19 and are now past due.** T-171
matters most and is covered below.

---

## 4. The calculation this brief exists to do

The routine asks which items are blocked on the owner and warns against
re-reporting an owner action as agent work. Here is the whole board split that
way:

| Waiting on a decision | 126    | **68% of open work** |
| --------------------- | ------ | -------------------- |
| Awaiting Owner        | 112    |                      |
| Awaiting Approval     | 7      |                      |
| Blocked               | 7      |                      |
| **Agent-actionable**  | **60** | **32%**              |
| Planned               | 34     |                      |
| In Verification       | 20     |                      |
| In Progress           | 4      |                      |
| Backlog               | 2      |                      |

And the same split applied to the parts that hurt:

- **28 of the 30 Critical open items are waiting on a decision.** Two are not.
- **103 of the 148 past-due items are waiting on a decision.**

**This is the single most useful number on the board and it has not been stated
before.** A register with 148 past-due rows reads like an execution failure. It
is not one. **Four fifths of what is late is late because nobody has answered a
question, and no amount of agent work moves any of it.**

### The five longest-waiting

| Task | Waiting | Priority | State             | What it needs                                                                         |
| ---- | ------- | -------- | ----------------- | ------------------------------------------------------------------------------------- |
| T-11 | 92 days | Critical | Blocked           | A-05 is **approved**; execution needs the Stripe dashboard                            |
| T-13 | 85 days | Critical | Blocked           | A-06 is **approved**; a law firm was contacted and the thread sits in Respond/Waiting |
| T-14 | 78 days | High     | Awaiting Approval | A-07, pending since September                                                         |
| T-49 | 42 days | High     | Awaiting Owner    | A declined bank transfer from 2026-10-05, still unread                                |
| T-42 | 41 days | High     | Awaiting Owner    | Fifteen unsent drafts — **now 51; A-31 raised today**                                 |

**T-11 and T-13 are the uncomfortable pair.** Both are Critical, both have been
blocked for roughly three months, and **both have approval already granted**
(A-05 and A-06, both recorded Approved). They are not waiting for a decision at
all — they are waiting for someone to do the approved thing. That is a different
failure from the other 124 in the decision bucket and should not be counted with
them.

**A third row has approval and has not moved either: T-64**, Critical, carrying
"A-21 approved". It sits in an agent status rather than a blocked one, which is
why the status column alone does not surface it.

### The 68% is slightly understated

The split above goes by the status column. **Two rows carry agent statuses while
their dependency column names a packet that is still pending** — T-37 (A-21 row
1 held) and T-64 (A-28) — so in substance **128 of 186 open rows, 69%, are
decision-blocked.**

A third, T-152, names A-26 but records that reference as moot and was answered
by the owner directly, so it is not counted. **The status column and the
dependency column disagree on exactly two rows, and both are live customer
jobs** — which is the worst place for that disagreement to hide.

---

## 5. Customer risk

| Task      | State                                   | Age unanswered   | Blocked on |
| --------- | --------------------------------------- | ---------------- | ---------- |
| **T-206** | **Starred, unread. Due today.**         | **1d 14h**       | **A-29**   |
| **T-177** | **Read** and not answered               | 7 days           | **A-29**   |
| T-95      | Unread                                  | 24 days          | A-29       |
| T-66      | Asked for a range 56 days ago           | 33 days silent   | A-28       |
| T-64      | 7th revision sent 10-29, unacknowledged | 37 days past due | A-21 row 1 |
| T-37      | Priced, nothing delivered to invoice    | 41 days past due | A-21 row 1 |

**Six customer rows, and every one of them is held by a decision rather than by
work** — though only four say so in the status column. **T-64 and T-37 read as
In Verification and In Progress**, which looks like work in flight; their
dependency columns name A-21 row 1 and A-28, both still pending. Two of the six
have finished drafts sitting ready.

**Nothing new arrived today.** Query 1 of the intake — `category:primary`, the
query that finds humans — returned zero. No customer wrote to this business in
the last twenty-four hours, and **nothing has left it in three days**; the last
message to any outside party was 2026-11-13 and the last to a
performance-industry counterparty was 2026-11-10, **ten days ago today.**

---

## 6. Approvals pending — thirteen

| Packet                             | Decision                                                          | Open since | Open tasks gated                          |
| ---------------------------------- | ----------------------------------------------------------------- | ---------- | ----------------------------------------- |
| **A-25**                           | Whose account is the one this register reports as the business's? | —          | **7**                                     |
| **A-29**                           | Standing authority to acknowledge an inbound enquiry              | 2026-11-13 | **3** — and both finished customer drafts |
| **A-31**                           | **What happens to the 51 unsent drafts** (raised today)           | 2026-11-20 | 2 + closes T-42                           |
| A-21                               | Price on two delivered jobs (row 1 held)                          | —          | 4                                         |
| A-28                               | Three follow-ups revised to the facts                             | —          | 3                                         |
| A-27                               | Allow five hosts so primary sources can be validated              | —          | 3                                         |
| A-30                               | May vendor and lender outflow amounts be published here?          | 2026-11-13 | 3                                         |
| A-07, A-10, A-17, A-22, A-23, A-24 | —                                                                 | —          | —                                         |

**A-22 should be closed rather than answered** — its premise is recorded as
false. **A-10 cannot be answered from here at all**; it needs the Routines UI.
**That leaves eleven that a person could actually decide today.**

---

## 7. Top three priorities for today

### 1. T-171 — today is the last day, and it may already be gone

Secret key values stop being displayed **2026-11-20**. The register row was due
yesterday and is already past due. **Whether the cutoff lands at the start or
the end of today was not established, so treat today as partly spent.** After
it, the only path is rotation, which breaks whatever still uses the old key.

**No tool in this session can do this** — there is no Stripe connector. Owner,
dashboard, password manager. Five minutes of work against a deadline that does
not come back.

### 2. A-29 and A-31 together — one sitting, and the send step unblocks

They are the same problem at two scales. **A-29** releases two finished customer
replies, one to the best-qualified lead this record has carried, which falls due
today. **A-31** releases thirty-four written supplier enquiries and disposes of
five that should never be sent. **Neither needs any work done first — both are
waiting only to be read and answered.**

Against ten days of commercial silence, this is the whole bottleneck in two
decisions.

### 3. T-202 and T-211 — the outflow is tomorrow

A vendor charge has now failed four consecutive days (11-16 through 11-19) and
**the scheduled outflow in T-202 falls 2026-11-21.** A decision taken after
tomorrow is a decision the calendar took. A-30 governs whether the amounts can
even be written down here, which is why these rows keep reporting shapes rather
than numbers.

---

## 8. Decisions the owner needs

1. **T-171** — today, or record the loss.
2. **A-29** — three rows and two finished drafts.
3. **A-31** — the 51 drafts; recommendation is in the packet.
4. **T-202 / A-30** — which scheduled outflow stands, before tomorrow.
5. **A-25** — still the largest single block at seven rows.
6. **T-11 and T-13** — both Critical, both ~3 months blocked, **both already
   approved.** These need doing, not deciding.

---

## 9. Is this a quiet day?

**No, and it would be wrong to say so.** Yesterday's brief called the day
"partly quiet" and distinguished quiet from still. Today does not qualify for
either half.

Thirteen items fall due. A deadline expires. A vendor charge has failed four
days running with an outflow scheduled tomorrow. A qualified lead goes
unanswered for a second day with the reply already written.

**What is quiet is the trading, and that is a result rather than an absence**:
no appointments in nine days, one order in the store's history, nothing inbound
and nothing outbound. Reporting that plainly is the point. **But the day itself
is not quiet, and a brief that opened with "a quiet day" would be describing the
calendar instead of the business.**

---

## 10. Not checked this run

- **Stripe** — no MCP server exists. Permanent gap.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Gmail** — not re-read; today's intake read it at 10:21Z, thirty minutes
  before this run, and its findings are cited rather than re-derived.
- **Supabase** — deliberately not opened; a read counts as activity against its
  own pause clock.
- **The customer count** — `ventures.md` records three, verified 2026-08-03,
  **109 days old and past the 30-day re-check rule.** Shopify shows one order
  and Stripe is unreachable, so it can be neither confirmed nor corrected. Not
  quoted anywhere above for that reason.
- **The ~45 unsampled threads** in the Respond/Waiting backlog, per today's
  intake.
