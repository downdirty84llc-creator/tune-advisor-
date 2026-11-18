# DD84 inbox and lead intake — 2026-11-18

**Run 2026-11-18T10:21Z.** Fired 10:20:37Z against a 10:20Z schedule. **Window:
2026-11-17T10:20Z → 2026-11-18T10:20Z, twenty-four hours.** Class A. **Nothing
sent, no label applied, no mail state changed, no live system touched, no link
followed.**

## 0. Checkout — contract item 0

`HEAD` equalled origin at **`9e906fd`** before this run's skeleton. **No `src/`,
no `package.json`, clean status, 98 tracked files against the prompt's 28 —
forty-sixth run reporting that drift.**

## 1. The balance moved back toward zero, and a card still declined for no money

**Two facts from the same day that pull in opposite directions, and both are
recorded rather than reconciled.**

| UTC                 | What                                                                                    | Thread             |
| ------------------- | --------------------------------------------------------------------------------------- | ------------------ |
| 2026-11-17T15:20:15 | **A balance alert — still below zero, but much closer to it** than the 2026-11-16 alert | `1a1ea183106fea8d` |
| 2026-11-17T19:01:23 | **A card declined for insufficient funds** — not for being off                          | `1a1eae2a6e59b2b7` |

**The three-day shape, with every figure withheld under A-19:** **at zero on
2026-11-09 · well below zero on 2026-11-16 · barely below zero on 2026-11-17.**
**So money came in, or a charge reversed, between Monday and Tuesday** — and
**four hours later a card was still refused for want of funds.**

**No mechanism is asserted.** A deposit that landed and a pending charge that
had not cleared would produce exactly this pair, and so would several other
sequences. **The mail does not choose between them, and no transaction detail is
readable from here.**

**This is T-153's decline reason recurring** — insufficient funds, as on
2026-11-10, and distinct from T-139's "card is off" reason which recurred on
2026-11-12, 11-16 and 11-17. **Two different failure modes, both live. T-205
raised.**

**The card toggling continues and tightened.** The business card was **turned
back on at 2026-11-17T14:49:20Z and turned off again at 14:52:20Z** — **three
minutes.** Threads `1a1e9fbe41ea115b` and `1a1e9fe97bd8eb1c`. **Digits withheld.
T-139 is eleven days unanswered.**

## 2. Two outflows are already scheduled against that account

| Date           | What                                                                        | Thread             | New payee?                     |
| -------------- | --------------------------------------------------------------------------- | ------------------ | ------------------------------ |
| **2026-11-21** | **An automatic card payment is scheduled**                                  | `1a1ea3b6c1d4b57b` | **Yes — not in the cost base** |
| **2026-11-24** | **A business software subscription renews** — 1 premium and 1 standard seat | `1a1e91f458757a38` | **Yes — not in the cost base** |

**Three days and six days out, against an account that has read below zero for
two days running.** **Amounts withheld under A-19 and A-30** — the automatic
payment's amount does not appear in the notice at all, and the subscription's is
withheld as a vendor outflow pending A-30.

**This is the third and fourth payee to surface this week that Friday's cash
review did not list.** It listed four. **T-198 found a fifth on 11-16, that same
charge failed a second time on 11-17, and these are a sixth and seventh.** **The
cash review's own caveat — that it could describe a subset without knowing how
large a subset — is now measured: it knew four of at least seven.**

**T-202 raised.** **This is the first forward-looking cash finding the record
has carried: not what failed, but what is about to be attempted.**

## 3. A tax exemption certificate was approved — the first evidence on an old question

**2026-11-17T10:50:14Z**, thread `1a1e920fbc5060f9`. A tax-engine provider
confirms that **a submitted exemption certificate has been approved.**

**T-106 has asked since late October whether DD84 has registered for or remits
the tax it collects** — the registry records that **every catalogue price is
tax-inclusive and that $31.13 of order #1001 was sales tax**, with nothing
anywhere saying the tax was registered or remitted.

**This is the first document in the record that shows tax registration activity
at all, and it is deliberately not treated as an answer.** **An approved
exemption certificate is about not paying tax on purchases. Remitting tax
collected on sales is a different obligation.** **They are adjacent, not the
same**, and this run will not let the one stand in for the other.

**T-203 raised — as a prompt to answer T-106 properly, not as T-106's answer.**

## 4. A personal financial notice, recorded as a shape and nothing more

**2026-11-17**, a transaction notification arrived for **a personal retirement
savings plan**. **No amount, no plan, no account detail, no provider and no
thread ID is published here.**

**It is recorded at all for one reason: a record whose job is to surface risk
should not silently drop the one signal that a business under cash pressure may
be drawing on personal savings.** **It is withheld in detail because A-13 covers
what was exposed on 2026-10-08 and does not reach personal finance**, and T-159
already records that personal mail arrives in this inbox.

**No connection to §1 is asserted.** It fell on the same day the business
account read below zero. **Same day is not the same cause**, and this run does
not have, and will not guess, the link.

**T-204 raised, Awaiting Owner, with the question being whether this category
belongs in the record at all** — which is a decision, not a judgement call.

## 5. Everything else

| Item                                                             | When (UTC)          | Disposition                                                                   |
| ---------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------- |
| **The same vendor charge failed a second time**                  | 2026-11-17T21:28:51 | **T-198 enriched.** The notice's own subject says "again". Amount withheld    |
| **A sign-in to a government identity service from a new device** | 2026-11-17T15:10:02 | **T-181** — the identity pattern, now from a public-sector service            |
| **Search-console traffic monitoring for the third brand's site** | 2026-11-18T10:20:46 | **T-201** — confirms the 11-16 verification. No new fact                      |
| **The tuning software vendor updated its privacy policy**        | 2026-11-17T19:47:21 | No action. Noted because it is DD84's core tool vendor                        |
| **The other business's backup workflow is still failing**        | 2026-11-18T09:24:37 | **Separate business** (2026-09-16). The thread is now 42 messages. Not DD84's |
| **A personal appointment occupies this afternoon**               | 2026-11-18          | **Shape only.** See the note below                                            |
| **Vendor, retail, recruitment and newsletter mail**              | throughout          | **~40 threads.** No business action in any                                    |

**One inference available and declined.** The personal appointment's
confirmation names a street address in a particular Georgia city. **T-164 — the
question of which county DD84's business address is in, now gating three systems
— is not answered by where its owner gets his hair cut.** **The two are
unrelated and treating a personal appointment as evidence of a business address
would be precisely the sourceless assertion T-161 was raised for.** **It is
recorded that the temptation existed and was refused.**

## 6. Carried-in questions

| Question                                              | Answer this run                                                                                    |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Was the tune file answered?**                       | **No. Five days, nine hours.** **`in:sent` for the window returns zero — nothing at all was sent** |
| **Did the database pause (T-187)?**                   | **Still not.** No confirmation. The ninety-day clock has not started                               |
| **Was the rejected seller application resubmitted?**  | **No evidence either way.** No platform mail arrived. **Unknown, not no**                          |
| **Has DD84's location been stated (T-164)?**          | **No.** Still three gates                                                                          |
| **Did the owner act on the app permissions (T-178)?** | **Still unknown rather than no**                                                                   |
| **Were the two live jobs invoiced (T-185)?**          | **No.** Nothing sent, nothing in the store                                                         |
| **Any enquiry, order or customer reply?**             | **None.** Shopify re-read live at 10:28Z: **one order all time, unchanged**                        |

## 7. Drafts prepared — NOT SENT

**None new.** **The only outstanding draft is still the 2026-11-13 reply to the
tune-file enquirer**, unchanged, in `docs/ops/briefs/2026-11-13-inbox-intake.md`
§1. **A-29 is the packet. Sending is Class C.**

**Nothing in §1 to §5 is a customer matter**, and every action they call for is
the owner's own inside a bank, a tax account, a seller centre or a personal plan
— **systems no routine here may touch.**

## 8. Withheld

- **All three balance figures**, and the account's last four digits.
- **Both cards' last-four digits.**
- **Two scheduled outflow amounts**, and **the twice-failed subscription
  amount** — declined-payment amounts under A-19, with A-30 pending on the
  class.
- **A personal retirement-plan notice in full** — no amount, provider, plan,
  account or thread ID.
- **A personal appointment's address, time and nature** — only that the
  afternoon is committed.
- **The Shopify customer's name.**

**Withheld, not unavailable: every item above was read.**

## 9. Not checked this run

| Source                                                   | State                                                                                                                                   |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Stripe**                                               | **No MCP server exists.** The failed charges were read in mail only                                                                     |
| **PayPal**                                               | Needs re-authentication                                                                                                                 |
| **Bank, Square, Chime, Melio, Capital on Tap**           | **No connector exists for any.** §1's alerts are the only window                                                                        |
| **The database scheduled to pause**                      | **Deliberately not opened** — reading it would count as activity                                                                        |
| **The seller centre, the tax account, the repositories** | **Not opened.** Observing routines do not sign in                                                                                       |
| **Any public web page**                                  | **T-98.** A-27 pending                                                                                                                  |
| **Google Calendar**                                      | **Not re-read** — read 2026-11-17, no events to 2026-11-24. **And the calendar did not know about this afternoon's appointment either** |
