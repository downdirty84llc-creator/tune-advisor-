# DD84 daily command brief — 2026-11-19

Run 10:51:17Z–10:57:38Z. Routine: `/dd84-daily-brief`. Class A — observed,
calculated, drafted. Nothing was sent, published, charged or changed.

Checkout verified before work: `HEAD` = `origin/claude/claude-md-docs-cqvhy6` =
`eba64fb`, no `src/`, working tree clean, **101 tracked files**. The routine
prompt still expects 28. That is the forty-ninth consecutive run reporting the
drift; the prompt is stale, the tree is correct, and only the claude.ai Routines
UI can fix the prompt (A-10).

No skeleton commit this run — the twentieth time that judgement has been made,
and for the same reason: every input this brief rests on is already on the
remote in today's intake (`eba64fb`), so a worker restart would destroy the
writing and none of the evidence.

---

## The one-line version

**Today is the last day T-171 can be done at all.** Everything else in this
brief can slip a day. That one cannot.

---

## 1. Appointments

**None.** Google Calendar read live at 10:52Z for 2026-11-19 through 2026-11-26:
zero events of any type on the business calendar.

This is a real zero, not an unreachable connector — the calendar answered and
had nothing in it. Eight days forward, no scheduled work, no customer
appointment, no bench time.

---

## 2. Money moved

| System                                         | Read                    | Result                                                                                                   |
| ---------------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| Shopify                                        | live, 10:52Z            | **One order, all time.** #1001, 2026-10-23, $550, paid and fulfilled. Unchanged for 27 days.             |
| Stripe                                         | **no connector exists** | Not available this run — there is no Stripe MCP server at all, so this is a permanent gap, not an outage |
| PayPal                                         | needs re-authorisation  | Not available this run                                                                                   |
| Bank / Square / Chime / Melio / Capital on Tap | no connector            | Not available this run                                                                                   |

**Money that moved today: none observed, and most of the surface cannot be
observed at all.** Shopify is the only payment system this session can read, and
it shows one order in the business's entire history. Everything the register
knows about outflows, declines and the account position came from mail, not from
a payment system — which is why T-202, T-205 and T-183 are all still open.

Amounts on those three are **withheld under A-19** (Option C). The figures exist
and are readable; the thread IDs that hold them are in the intake briefs that
raised each one. "Withheld" — not "not available".

---

## 3. What actually left the business — the finding that changed today

Yesterday's and today's intake both reported `in:sent` empty for the day. That
was correct for a one-day window. A twenty-one-day window, read at 10:53Z, shows
the shape:

| Last outbound                                      | When                 | Age at 10:53Z |
| -------------------------------------------------- | -------------------- | ------------- |
| To any outside party                               | 2026-11-13 16:41:57Z | **5d 18h**    |
| To a performance-industry counterparty or customer | 2026-11-10 17:54:55Z | **8d 17h**    |

The 11-13 message went to a utility's customer-service address — a household
account matter, not business development. The **only** item carrying a `SENT`
label since then is thread `1a1e4f56c01bcd39`, 2026-11-16 15:24:29Z: a message
the account sent **to itself**. One message, no outside recipient.

So the accurate statement is not "nothing was sent today". It is:

> **The business has not contacted a commercial counterparty in eight days and
> seventeen hours, and the last thing it sent went to its own inbox.**

That is a sharpening of the intake's finding, not a correction of it — the
one-day window answered the question it was asked. It is in this brief because
the eight-day figure is what makes A-29 urgent, and the one-day figure is not.
Logged as **T-209**.

---

## 4. Overdue work

| Measure           | Count   | Share   |
| ----------------- | ------- | ------- |
| Open tasks        | 177     | —       |
| **Past due**      | **145** | **82%** |
| Critical and open | 29      | —       |
| Due **today**     | 3       | —       |
| Due **tomorrow**  | 11      | —       |

Counted after this run's own two rows (T-208, T-209) were added, so these match
the register in the same commit. Neither new row is Critical or past due; the
register stood at 175 open when the run started.

Fourteen items fall within forty-eight hours, on top of 145 already past. The
backlog is not drifting — it is being added to faster than it is answered, and
today's three are the sharp end of it.

### Due today

| Task      | Pri      | What it is                                                                   | Why today matters                                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **T-171** | Critical | Stripe hides all secret key values from 2026-11-20; a second key in two days | **Irreversible.** After today the values cannot be read at all — only rotated, which breaks whatever still uses them |
| **T-202** | Critical | Two outflows scheduled 11-21 and 11-24 against a below-zero account          | The first is **two days out**; a decision after Friday is a decision not taken                                       |
| **T-205** | High     | Two live decline reasons — no funds 11-17, card off 11-12/16/17              | Both causes are still live; a third vendor failure is already recorded (T-198)                                       |

### Due tomorrow — eleven

T-143 (Critical — Google Play closes the developer account 2026-12-06 for
non-use), T-206 (Critical — the new lead), T-176, T-186, T-188, T-190, T-195,
T-198, T-199, T-201, T-203.

---

## 5. Customer risk

Two qualified enquiries are now sitting unanswered, and they are waiting on the
same unanswered question.

| Task      | What it is                                                                                                  | State                                                 | Age                     |
| --------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------- |
| **T-206** | A fully specified GM tune lead — vehicle, engine, transmission, cam spec and the customer's own stated goal | **Starred and still unread.** Reply drafted, not sent | since 2026-11-18 20:40Z |
| **T-177** | The tune-file enquiry — **read** and not answered                                                           | Reply drafted, not sent                               | since 2026-11-13        |
| **T-95**  | The first inbound enquiry in five runs, unqualified                                                         | Unread                                                | since 2026-10-27        |
| **T-66**  | A real Lexus enquiry; asked for a range 55 days ago and never got one                                       | Awaiting owner (A-28)                                 | 32 days silent          |
| **T-64**  | A live job, priced $350; 7th revision sent 10-29, unacknowledged                                            | In verification                                       | 36 days past due        |
| **T-37**  | The C10 customer — AFR fault; priced $349/$149, nothing delivered to invoice                                | In progress                                           | 40 days past due        |

**T-206 is the best-qualified enquiry this record has ever carried**, and it is
the one most likely to be lost: a customer who writes twice in forty-three
seconds with the camshaft spec photographed is a customer who is shopping, and
who will read silence as an answer. It falls due tomorrow.

The two drafted replies are not blocked on drafting. They are blocked on A-29.

---

## 6. Approvals pending — twelve

| Packet                             | Decision                                                          | Open since | Tasks gated                      |
| ---------------------------------- | ----------------------------------------------------------------- | ---------- | -------------------------------- |
| **A-29**                           | Standing authority to acknowledge an inbound enquiry              | 2026-11-13 | **3** — T-177, T-95, T-206       |
| **A-25**                           | Whose account is the one this register reports as the business's? | —          | **7** — the largest single block |
| **A-21**                           | Price on two delivered jobs (row 1 still held)                    | —          | 4                                |
| **A-28**                           | Three follow-ups revised to the facts                             | —          | 3                                |
| **A-27**                           | Allow five hosts so primary sources can be validated              | —          | 3                                |
| **A-30**                           | May vendor and lender outflow amounts be published here?          | 2026-11-19 | 3                                |
| A-07, A-10, A-17, A-22, A-23, A-24 | —                                                                 | —          | —                                |

A-29 and A-25 between them gate ten open tasks. Neither needs work from this
session; both need one answer.

---

## 7. Top three priorities for today

### 1. T-171 — read the Stripe secret key values today, or lose them

No tool in this session can do it: there is no Stripe connector. It takes the
owner, the Stripe dashboard, and a password manager. After today the values stop
being displayed and the only remaining path is rotation, which breaks every
integration still using the old key. **This is the only item on this brief with
a hard, external, irreversible deadline that expires today.**

### 2. A-29 — answer it, and three tasks move at once

Six days pending. It now holds back two drafted replies to two qualified leads,
one of which arrived yesterday and is the strongest the business has had. The
packet asks for standing authority to acknowledge — not to quote, not to price,
not to commit. Pricing stays where it is, behind A-21 row 1.

The cost of the delay is measurable and is in section 3: eight days seventeen
hours of commercial silence.

### 3. T-202 — decide the two scheduled outflows before Friday

The first falls 11-21, two days out, against an account the record describes as
below zero. A vendor charge has now failed three days running (T-198, 11-16,
11-17, 11-18). Friday's cash review is tomorrow-plus-one; a decision made after
it is a decision the calendar made.

---

## 8. Decisions the owner needs

1. **A-29** — approve, narrow or reject. Three tasks and two leads turn on it.
2. **T-171** — today, or accept the loss on the record.
3. **T-202 / A-30** — which of the two scheduled outflows stands.
4. **A-25** — seven tasks have been waiting on one question about account
   ownership. It is the largest single block in the register.

---

## 9. Is this a quiet day?

Partly, and the distinction matters.

**Genuinely quiet:** no appointments, no orders, no money observed moving, no
customer wrote in today. Nothing happened, and nothing was supposed to.

**Not quiet — still:** two qualified customers are waiting, a deadline expires
today, two payments are scheduled against an account that may not carry them,
and the last thing the business sent went to its own inbox. That is not an
absence of events. It is an absence of action on events that already happened.

A brief that called today "quiet" and stopped would be describing the first half
and hiding the second.

---

## 10. Instrument note

Gmail's `resultCountEstimate` returned **201** for a query whose actual result
set in the window was about fifteen threads. It is an estimate of corpus
matches, not a count of results, and it must never be reported as one. This run
used observed rows only. Logged as **T-208**, alongside T-173 (an inbox query
counting sends) and T-184 (a reading that caught a card off and missed the on
sixty-one seconds earlier).

---

## 11. Not checked this run

- **Stripe** — no MCP server exists. Permanent gap.
- **PayPal** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Supabase** — deliberately not opened. Reading the project counts as activity
  against its own pause clock (recorded Class A boundary).
- **Attachments** — none downloaded, opened or described, including the two on
  T-206.
- **Mail state** — nothing read, starred, labelled or marked. T-206 was observed
  from the thread list and left exactly as it was found.
