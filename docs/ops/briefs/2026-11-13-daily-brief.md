# DD84 daily command brief — 2026-11-13

**Run 2026-11-13T11:35Z.** Routine fired 10:50:38Z against a 10:50Z schedule.
Class A. **Nothing sent, nothing published, nothing charged, no live system
changed.**

**No skeleton committed for this brief, and the reason is recorded rather than
assumed.** The expensive work — the mail sweep — is already committed at
`0f14495` as the 11-13 intake. What a restart would destroy here is the
composition of a file whose every input is already on the remote. **That is
minutes, not an hour, so OL-0050's test says no.** The intake, which faced a
24-hour sweep, got one — and needed it.

## 0. Checkout

`HEAD` equals `origin/claude/claude-md-docs-cqvhy6` at **`0f14495`**. **No
`src/`, no `package.json`, clean status, 91 tracked files against the 28 the
prompt expects.** **Thirty-ninth run reporting that drift.** T-85 step 3 carries
it; the prompts are stale, the tree is correct, and the tell the prompt actually
depends on is sound.

## 1. Appointments — none

**Google Calendar returned no events for 2026-11-12 → 2026-11-20.** Not "none
readable" — the calendar answered and it is empty. **Nothing is booked in the
next week.**

## 2. Money moved — nothing readable, and one card refused a payment

| System                                         | Reached | What it says                                                             |
| ---------------------------------------------- | ------- | ------------------------------------------------------------------------ |
| **Shopify**                                    | **Yes** | **One order, unchanged.** #1001, 2026-10-23, $550.00, paid and fulfilled |
| **Stripe**                                     | **No**  | **No MCP server exists.** Not unreachable — absent                       |
| **PayPal**                                     | **No**  | Needs re-authentication                                                  |
| **Bank, Square, Chime, Melio, Capital on Tap** | **No**  | **No connector exists for any.** Mail alerts are the only window         |

**So "money moved" cannot be answered from a payment system today, and will not
be estimated.** What the mail shows: **a business debit card was presented for a
payment on 2026-11-12 and declined because the card is off.** **The alert
carries no amount** — nothing was withheld there, because there was nothing to
withhold.

**All-time revenue on the verified baseline is $3,507.86 across ten invoices and
three customers, last payment 2025-09-12.** That figure is from August and is
**stale by the 30-day rule**; the weekly cash review scheduled for 11:10Z today
is the run that re-verifies it, and this brief does not pre-empt it.

## 3. What happened since yesterday

**Full detail in `docs/ops/briefs/2026-11-13-inbox-intake.md`, OL-0104.** Four
things, in order of consequence:

1. **A customer sent a tune file with no message** — 2026-11-13T01:16:02Z.
   DD84's exact service, arriving unprompted, **still unanswered.** T-177,
   Critical.
2. **A card deliberately kept off was used for a payment and declined** —
   T-139's question repeating six days after it was asked. T-179.
3. **The card that declined for no money on 11-10 is back on** after at least
   three toggles on 11-12. T-180. **T-175's finding is reversed, not wrong.**
4. **A GitHub App asked the owner for more account access.** T-178. **Class G —
   no agent may touch it**, and the page that says which permissions are wanted
   is unreachable from here.

**Nothing was sent by the business in the window**, verified with the query
T-173 taught and then tested against three days.

## 4. Customer risk — this is the brief's real finding

**Five customer-facing items are waiting, and four of them are waiting on an
approval decision rather than on work.**

| Who                                   | State                                                                                             | Waiting on                          | Age               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------- |
| **T-66 — a real Lexus enquiry**       | **Asked for a price range and never got one**                                                     | **A-28 draft 3, pending**           | **range 55 days** |
| **T-95 — an enquirer**                | **Never answered**                                                                                | **A-23, pending since 2026-10-26**  | **18 days**       |
| **T-37 — the C10 customer, live job** | AFR fault; priced, nothing delivered to invoice                                                   | **A-21 row 1 held; A-28 draft 2**   | since 2026-10-10  |
| **T-64 — a second live job**          | **Seventh revision sent 10-29, unacknowledged.** A-18 was **REJECTED** by the owner on 2026-11-09 | **A-28 draft 1**                    | since 2026-10-14  |
| **T-177 — the tune file**             | **New today, unanswered**                                                                         | **Nothing yet — A-29 raised below** | **~10 hours**     |

**Two separate approval packets are pending on the same single question.** A-23
asks to reply to one enquirer. A-26 asks to reply to two, **and its first row
was overtaken when the owner answered that person himself on 2026-11-10** —
recorded in T-162, and it is the owner's action, not the agent's. **So A-23 and
A-26 now reduce to the same live question: may DD84 answer the person who wrote
in on 2026-10-26?** **Eighteen days, two packets, one unanswered person.**

**T-177 makes that structure untenable rather than merely untidy.** A third
enquirer now needs a third packet, and the next one will need a fourth. **A-29
below proposes the standing authority instead.**

**One thing this brief will not do is call the owner slow.** **A-18 was
rejected, deliberately, on the record** — that is a decision, not a delay, and
re-reporting it as agent-blocked work would be a lie about who is holding what.

## 5. Overdue work

**182 tasks. 151 open. 121 of those past due. Twenty-four Critical and open** —
one more than yesterday, and the new one is T-177.

**The five oldest Criticals, and what each is actually blocked on:**

| Task     | Due        | Overdue  | Blocked on                                                                    |
| -------- | ---------- | -------- | ----------------------------------------------------------------------------- |
| **T-11** | 2026-08-20 | **+85d** | **A tool, not the owner.** A-05 was approved; **no Stripe MCP server exists** |
| **T-13** | 2026-08-27 | **+78d** | **Money and a decision.** A-06 approved; legal review is a paid engagement    |
| **T-52** | 2026-10-12 | **+32d** | **The owner.** A credential phish, unread                                     |
| **T-64** | 2026-10-14 | **+30d** | **A-28.** Seventh revision unacknowledged by the customer                     |
| **T-71** | 2026-10-16 | **+28d** | **The owner.** The account is overdrawn; figures withheld under A-19 Option C |

**The distinction in that last column is the point.** **T-11 and T-13 have been
approved for eleven and eleven-and-a-half weeks and are still not done** — not
because anyone is sitting on them, but because approval was never the binding
constraint. **Reporting them as "awaiting owner" would be wrong**, and the
register has them correctly as Blocked.

**Eleven rows are due today**, including T-177, T-179, T-175 and T-173.

## 6. Approvals pending — ten, and what each actually needs

| Packet   | Needs                                                                 | Consequence of continued silence                                                                                       |
| -------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **A-07** | A decision                                                            | —                                                                                                                      |
| **A-10** | **The claude.ai Routines UI** — no tool in a session can reach it     | **Four routines fire, report success, and commit nothing.** This session is the only reason any of today's work exists |
| **A-17** | A decision on third-party contact details in a public repository      | Every brief withholds names it could publish; **29 days**                                                              |
| **A-22** | **DEFER — its premise is false**, and the packet says so              | Should be closed, not answered                                                                                         |
| **A-23** | **May DD84 reply to one enquirer?**                                   | **18 days. Collapses into A-26**                                                                                       |
| **A-24** | Redact a declined-payment figure from ten historical files            | A figure stays published that A-19 would now exclude                                                                   |
| **A-25** | **Whose account is the one this register reports as the business's?** | **T-71, T-136, T-137, T-151, T-169 and T-175 all turn on it**                                                          |
| **A-26** | **Row 1 is moot** (the owner answered). Row 2 is A-23 again           | Same eighteen days                                                                                                     |
| **A-27** | Five hosts, so primary sources can be read                            | **T-98: no public page is reachable.** T-176 blocked behind it                                                         |
| **A-28** | Three customer follow-ups revised to the facts; closes A-20           | **T-37, T-64 and T-66 all wait on it**                                                                                 |

**A-25 is the quiet one that unblocks the most.** Six tasks — including today's
two card findings — rest on knowing whose account the register has been
reporting as the business's.

## 7. New packet — A-29

**Raised in `docs/ops/APPROVALS.md` this run.** **Decision requested: standing
authority to answer inbound enquiries as they arrive, within a fixed scope,
instead of one approval packet per person.** **It does not ask to quote prices,
promise dates, or commit DD84 to anything** — those stay Class C and E, one
decision at a time. It asks only for permission to say "we got your message,
here is what I need to know."

## 8. Top three priorities

**1. Answer the tune file.** T-177. A 1990 GM truck with an LS2 swap, a
calibration already in hand, and a sender who wants something. **The draft is
written and needs one word to send.** Everything else on this list is older and
less likely to turn into money.

**2. Decide whether DD84 answers people who write to it.** Not A-23 alone —
**the policy.** Three unanswered enquirers, two packets pending on one of them,
eighteen days on the oldest, and the pattern guarantees a fourth packet next
week. **A-29 is the one decision that retires that whole class.**

**3. Say why cards deliberately kept off are still being presented for
payment.** T-139 asked on 2026-11-07. **It happened again on 2026-11-12.** This
costs real money in declines and possibly fees, the amounts are not readable
from here, and **six days of silence on a repeating cash fault is the
longest-running unexamined money problem on the board that is not already
blocked on a missing tool.**

## 9. Decisions the owner needs

| Decision                                                    | Packet    | Why today                                                                    |
| ----------------------------------------------------------- | --------- | ---------------------------------------------------------------------------- |
| **May DD84 reply to inbound enquiries as a standing rule?** | **A-29**  | **T-177 makes it the third packet of the same shape**                        |
| **May DD84 reply to the 2026-10-26 enquirer?**              | A-23/A-26 | **18 days.** Answer A-29 and this one goes with it                           |
| **Whose account is the business's?**                        | A-25      | **Six tasks, two of them raised today, turn on it**                          |
| **Why are cards kept off being used for payments?**         | T-139     | **Asked 11-07, repeated 11-12, still unanswered**                            |
| **Accept or ignore the GitHub App's permission request?**   | T-178     | **Class G.** No agent may decide it; the detail is only on the settings page |
| **Fix A-10 in the Routines UI**                             | A-10      | **The four routines still commit nothing on their own**                      |

## 10. A quiet day this was not

**Yesterday's brief could fairly say the day was quiet. Today's cannot.** A new
prospect in the core service, a repeat of an unanswered cash fault, a reversal
of yesterday's card finding, and an account-permission request — **four real
events in twenty-four hours, against a week where the running complaint was that
nothing arrived.**

**What did not happen is also real: no payment, no booking, no invoice, no
customer reply, and nothing sent.**
