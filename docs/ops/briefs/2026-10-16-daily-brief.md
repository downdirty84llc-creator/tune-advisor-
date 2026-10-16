# DD84 daily command brief — 2026-10-16

Run at **2026-10-16T10:51–11:08Z**. Connectors reached: **Google Calendar**,
**Gmail**, **Shopify**. Not reached: **the bank**, **Stripe**, **PayPal
connector**, **bookipay**, **Square**, **Chime**, **Render**, **Zoho**,
**GitHub** (read at 10-15; not re-read this run), **Superhuman Mail**,
**Canva**.

**Checkout, per `docs/ops/README.md` contract item 0** — tip **`ff03e2c`**,
`HEAD` equal to `origin/claude/claude-md-docs-cqvhy6`, **no `src/` directory and
no `package.json`.** Both markers absent. **44 tracked files, working tree
clean.**

## I got yesterday's card finding wrong

**Yesterday's brief said "no Wells Fargo alert arrived in this window" and that
"the card-toggling streak broke."** **Both were false.** A targeted sweep of
`from:notify.wellsfargo.com newer_than:2d` this morning returns **nine
threads**, and the alerts never stopped:

| Date      | Toggles                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------- |
| **10-13** | off 18:48 · on 18:57 · off 19:00 · on 23:22 · off 23:24                                                  |
| **10-14** | on 00:00 · off 00:31 · on 08:46 · off 10:03 · **on 13:05 · off 13:06 · on 16:05 · off 16:35 · on 21:57** |
| **10-15** | off 13:10 · on 16:48                                                                                     |
| **10-16** | off 08:50 · **on 10:00:52Z — currently ON**                                                              |

**Eighteen toggle events in 63 hours, and five of them (bolded) fell inside
yesterday's window and were missed.**

**The cause is a tool behaviour I was warned about and did not account for.**
The Gmail search tool states plainly that results are **previews showing only
the ~5 oldest messages of each thread, with newer messages omitted and no
truncation marker.** Wells Fargo collapses these alerts into two long-running
threads. My `in:inbox newer_than:1d` query matched those threads, showed me
their oldest five messages, and **silently withheld the rest.**

**So yesterday's brief inferred a state from a silence that did not exist** —
and then, correctly by its own lights, labelled that inference as weak evidence.
**The label was right and the premise was fabricated by a query.** This is the
second time in this session a too-narrow query has produced a confident false
negative; the first was a redaction test that matched full names and missed a
bare first name. **Same defect class, different surface.**

**What stands:** the toggling is real, continuous and now nine days old, and
**T-71's reading of it — card control on an overdrawn account — is unaffected.**
**What is withdrawn:** the claim that it stopped, and any inference drawn from
its stopping.

## Top three today

1. **Read the bank alert.** It has been **unread for 18 hours** and reports a
   negative balance. **Every remedy is Class E and yours alone** — **T-71**
2. **Answer A-19 — the cash review fires at 11:10 UTC, in about two minutes.**
   Its entire job is to report a cash position; without a decision it must
   either withhold the one figure it has or publish it on an agent's judgement.
   **It will withhold.** — **A-19**
3. **Price T-37 and T-64.** Two completed jobs, never invoiced, **$198–$1,300
   against the catalogue if both are chargeable** — and **the range stays a
   range** because neither tier was ever decided. **The only near-term cash this
   record can identify.**

**Everything else in this register is subordinate to those three today**, and
that is a change from yesterday, when the top three were all "open a document."

## Appointments

**None scheduled.** Calendar `downdirty84llc@gmail.com` read at
**2026-10-16T10:53Z** for **2026-10-16 and 2026-10-17**. **Zero events — a real
empty read.** **Twelfth consecutive day.** Reported as a count; the consequence
was drawn on 10-14 and has not changed.

## Money moved since the last brief

| System       | In                     | Out                                                   | Notes                                                                                                         |
| ------------ | ---------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Shopify**  | **$0 — 0 orders**      | n/a                                                   | Read **2026-10-16T10:53Z**. `totalCount: 0`. **A real zero.**                                                 |
| **The bank** | Not available this run | **A negative available balance as of 10-15 13:05 ET** | **No connector.** One alert email is the whole evidence base. **The figure is withheld pending A-19** (T-71). |
| **PayPal**   | Not available this run | **One outbound payment, 10-15**                       | **Connector needs re-auth; its mail works.** A merchant, amount, date and order ID were captured — T-36.      |
| **Stripe**   | Not available this run | Not available this run                                | No MCP server.                                                                                                |
| **bookipay** | Not available this run | Not available this run                                | No API, by design.                                                                                            |
| **Square**   | Not available this run | Not available this run                                | No connector. **Offline payments switched on by default 10-16T10:11Z** (T-61).                                |
| **Chime**    | Not available this run | Not available this run                                | No connector.                                                                                                 |

**The shape of this table is the finding.** Shopify's zero is the only figure
that means zero. **The one direction money is demonstrably moving is out**, and
the only transaction this record has ever captured came by **email**, not
connector.

**Two declines on the evening of 10-15** — a subscription service at 18:33Z and,
earlier in the month, the transfer in T-49. **An auto-charge of unknown amount
is still pending** (T-46).

**One new account surfaced and is recorded without inference.** Two of the nine
Wells Fargo threads are **Wells Fargo Advisors price alerts** on a listed
security (10-14 and 10-15). **So a brokerage relationship exists on this
mailbox**, and `ventures.md` has never mentioned it. **Nothing is asserted about
what it holds, whether it is a business or personal account, or whether it bears
on cash** — no connector, and a price alert says nothing about a balance. **It
is listed because an unrecorded financial account is exactly what this week has
been about.**

## Needs a decision from you

**Eight packets PENDING.** One is new and time-critical; one should be refused.

| Packet                 | Decision                                                            | Waiting          | Consequence of waiting                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A-19**               | **May DD84's cash position be recorded in this public repository?** | **Raised today** | **The cash review fires in minutes and cannot state a position.** Deferring leaves Option C in force by an agent's choice rather than your decision. |
| **A-18**               | The Challenger chase                                                | 3 days           | **Still the one packet whose correct answer is no.** It asks a customer for a log he sent on Monday.                                                 |
| **A-15**               | GDOT District 1 and the Georgia SBDC                                | **10 days**      | Two agencies waiting on replies **already written**.                                                                                                 |
| **A-17**               | 12 third-party people's contact details here                        | 7 days           | Published every day this is open.                                                                                                                    |
| **A-10**               | Recreate the four scheduled tasks with a repository                 | **69 days**      | T-69 is its symptom; **this run is the thirteenth to fail the prompt's own file-count check.**                                                       |
| **A-07 / A-05 / A-06** | Virus scanning · Stripe products · legal review                     | **71 days each** | Ledger-side. **A-05 means no Ledger revenue is collectable.**                                                                                        |

**And one sentence, not a packet: T-69.** The four scheduled-task prompts demand
"28 tracked files" against **44**. **This session can make the edit the moment
you say so.**

## Overdue — 35, and the split has changed character

**35 open tasks past due, up from 29.** The arithmetic is the same as
yesterday's — **dates arriving, not work appearing** — and that observation
stands without repeating it.

**What has changed is the top of the list.** Ten of this week's twenty-five are
now **cash items or their consequences**: T-71 (today), T-49 (7d), T-46 (4d),
T-54, T-55, T-61, T-36, T-37, T-64, T-58. **A fortnight ago this register's
overdue list was engineering debt and unread attachments. It is now mostly
money.**

### The genuinely stale ten, unchanged

T-19 (71d), T-23 (69d), T-06 (69d), T-26 (64d), T-25 (64d), T-24 (64d), T-11
(57d, **blocked on A-05**), T-13 (50d, **blocked on A-06**), T-15 (43d), T-14
(43d, **blocked on A-07**). **Three are waiting correctly on packets pending 71
days; none produces DD84 revenue.**

### This week's, of which 24 of 35 are yours

**T-71** (today, **the one that matters**), **T-49** (7d), **T-48** (6d, A-16
verification), **T-42** (6d — **delete the five fraud drafts**), **T-39 / T-38**
(6d — **both clear on A-15**), **T-37** (6d — **a price**), **T-33** (6d, agent
work), **T-52** (4d) with **T-67** (1d), **T-50 / T-46** (4d — two unread
attachments, **one of which auto-charges**), **T-63 / T-53 / T-51** (3d),
**T-64** (2d — **a price, and a customer's log unread for 68 hours**), **T-59 /
T-58 / T-55 / T-54** (2d), **T-69 / T-66 / T-61 / T-44 / T-36** (1d).

## Customer risk

| Who                                | Age                                      | Risk                                                                                                                                                                                              | Next action                         |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| **The Challenger customer** (T-64) | Log sent Monday — **~68 hours unread**   | **Two risks now, and the second is new.** He broke eleven days of silence with exactly what was asked for and nobody opened it. **And the job was never invoiced, against an overdrawn account.** | Read it. Reject A-18. **Price it.** |
| **The C10 customer** (T-37)        | DD84 spoke last Monday — **~86 hours**   | Not a response risk. **A billing risk, and it is no longer administrative.**                                                                                                                      | **Price it.**                       |
| **The Lexus enquirer** (T-66)      | Answered 23 days late, **silent 8 days** | Probably lost. The live risk is the unread contact form.                                                                                                                                          | Count the other submissions.        |
| **GDOT District 1** (T-38)         | **10 days**                              | A state agency waiting on a written, unsent reply.                                                                                                                                                | **A-15.**                           |
| **Georgia SBDC** (T-39)            | **10 days**                              | An adviser who chased once.                                                                                                                                                                       | **A-15.**                           |
| **Five Reddit handles** (T-41)     | 4–9 days                                 | Uncontacted by design.                                                                                                                                                                            | **T-60 first**, ~3 days left.       |

**Risks that could not be checked** — unpaid invoices, failed or disputed
customer payments, and whether any customer has been charged since 2025-09-12.
**Unchecked for the seventh consecutive run** — and **that gap is now part of
the cash problem rather than a reporting inconvenience**: the business cannot
tell whether it is owed money.

## Watching

**Square offline payments are on and the account's status is unknown.** Offline
acceptance takes cards without live authorisation; **a reversal lands on an
account that is already negative.** One dashboard read settles whether that
account has ever processed a payment (T-61).

**Nothing was sent in 24 hours** — the one message in the preceding window went
to the state reviewer and was the right one. **Four written messages remain
unsent, 10 to 17 days.**

## Not checked this run

| Source                                            | Reason                                                                                                                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The bank**                                      | **No connector.** Balance known only from one alert; **no transaction list, pending items, overdraft terms or fee schedule was read.** How it went negative is unknown. |
| **Wells Fargo Advisors**                          | No connector. **A brokerage relationship exists; nothing about it is known.**                                                                                           |
| **PayPal connector**                              | Re-auth required since 2026-10-09. **Its mail works** (T-36).                                                                                                           |
| **Stripe, bookipay**                              | No server / no API. **Both live jobs' billing status unknown.**                                                                                                         |
| **Square**                                        | No connector. **Offline payments on; account status unestablished.**                                                                                                    |
| **GitHub**                                        | **Not re-read this run** — read 2026-10-15 (three stale PRs, no run since 10-08). **Reported as not checked rather than carried forward as current.**                   |
| **Chime, Render, Zoho, Vercel**                   | No connectors.                                                                                                                                                          |
| **Table 13.J; the fee schedule; two attachments** | Blocked egress and no download tool.                                                                                                                                    |
| **Reddit**                                        | Egress-blocked. **T-60 status unknown, ~3 days out.**                                                                                                                   |
| **Mail older than 1 hour**                        | Covered by the 10:20Z intake. **~20,700 unread remain unassessed** — and this morning's correction shows that figure is not the only thing hidden by a windowed query.  |

---

**Class A held.** Nothing sent, replied to or forwarded. **Calendar read only.**
No label applied, no mail state changed. No charge, refund, invoice, payout or
fulfilment action. **No bank, card, Square or payment action of any kind.** No
GitHub write. No scheduled task created, changed or fired (T-69). No task marked
Done on inference. `docs/growth/` untouched. **The bank balance, the account's
last four digits and the card's last four digits were read and none is written
here** — the figure withheld pending **A-19**. **No customer name, email or
phone written.**
