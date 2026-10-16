# DD84 inbox intake — 2026-10-16

Run at **2026-10-16T10:20–11:02Z**. **Window: since OL-0046, 2026-10-15T10:58Z**
— 24 hours, queried `newer_than:1d` with a sent sweep and a full draft list.
Accounts scanned: **`downdirty84llc@gmail.com`** (inbox, sent, drafts). Not
reached: **PayPal connector, Stripe, bookipay, Square, Superhuman Mail, Canva**.

**Checkout, per `docs/ops/README.md` contract item 0** — tip **`38ad041`**,
`HEAD` equal to `origin/claude/claude-md-docs-cqvhy6`, **no `src/` directory and
no `package.json`.** Both markers absent. The firing prompt again asked for "28
tracked files" against a tree of **43** (T-69).

Threads reviewed: **38**. Actionable: **9**. No-action: **29**.

> ## Read first: the business bank account is overdrawn
>
> **Wells Fargo, 2026-10-15T17:06:44Z, subject _"Your balance is at or below
> zero"_. Still unread.** The message states a **negative available balance** on
> the business account, as of 10/15 at 13:05 Eastern.
>
> **The figure is known to this run and is deliberately not written in this
> repository.** This repository is **public** (CLAUDE.md §5), DD84 is **actively
> applying for SBA 504 financing** (T-58), and a cash position is **not a
> category A-13 covered** — A-13 accepted revenue figures and system identifiers
> on 2026-10-08, and §5 is explicit that a new category needs its own decision.
> **So the number is in the owner's inbox, where he can read it, and a packet
> asks whether it may be recorded here.** → **T-71**, **A-19**
>
> **This is the explanation the register has been missing for a week.** Nine
> separate findings stop being unrelated:

| Finding                                                                | Recorded as          | Now reads as                                                           |
| ---------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------- |
| A bank transfer declined 2026-10-05                                    | T-49, cause unknown  | **A declined transfer on an account heading to zero**                  |
| **Nine days of debit-card toggling**                                   | "no cause asserted"  | **Card control on an overdrawn account**                               |
| Webador invoice **will auto-charge**, amount unknown                   | T-46                 | **An auto-charge against an overdrawn account**                        |
| A Holley abandoned cart, 2026-10-14                                    | "no causal claim"    | **A checkout that may have failed**                                    |
| **DAZN: "Your payment has declined"**, 2026-10-15T18:33:37Z, IMPORTANT | new                  | **A second declined payment, 90 minutes after the zero-balance alert** |
| Three HP Tuners credit orders in three days                            | T-54, amounts unread | **Credit purchases, amounts still unknown**                            |
| A prescreened personal-loan offer, chased twice                        | 10-14, 10-15         | Unchanged as a solicitation — **but the context is no longer neutral** |
| A credit-score-change notice                                           | 10-14                | Material to T-58, **direction still unread**                           |
| **No revenue since 2025-09-12**                                        | `ventures.md`        | **The other side of the same ledger**                                  |

> **No causal chain is asserted beyond what the alerts say.** Each item above is
> still its own fact; what changed is that **a single plain explanation now fits
> all of them**, and for a week this record reported them as nine coincidences
> while explicitly declining to connect them. **That restraint was correct
> without the balance and is no longer the right call with it.**

## Urgent — three things, and the first two are money

**1. The account is overdrawn and two payments have already declined.** The
zero-balance alert is **unread**. **T-71** carries it. **A-19** asks whether the
figure may be written here.

**And it lands 50 minutes before the weekly cash review fires.** That routine
reads payment systems and reports cash position — **it will meet this question
immediately and needs the answer A-19 asks for.** Raising it now is not
housekeeping.

**2. Square offline payments are now ON — by default, with no decision
recorded.** 2026-10-16T10:11:09Z: _"**Offline payments are now turned on**"_,
subtitled _"No connection? No problem"_.

**The deadline resolved itself exactly as T-61 predicted and nobody chose.**
That closes the forecast and opens a worse question: **offline card acceptance
takes payment without a live authorisation**, so declines and chargebacks land
after the customer has gone — **on a business whose own account is overdrawn and
whose last two outbound payments declined.** → T-61 updated, and it now points
at T-71.

**Still unestablished, and it matters more now than yesterday:** whether that
Square account has ever processed a payment. **A setting is on; the account's
status is unknown.** Reading the dashboard is still one look nobody has taken.

**3. Money did move — outward, through a channel this record calls unreadable.**
2026-10-15T22:13:42Z, PayPal: _"You paid **$17.00 USD** to Meta Platforms,
Inc."_ with a transaction date and order ID.

**That is the first outbound payment this record has ever captured**, and it
arrived by **email**, not by connector. **The PayPal connector has needed
re-authentication since 2026-10-09 and PayPal's notification mail works
perfectly.** T-36 records "no readable path to DD84's own revenue figures" —
**for outbound transactions there is a partial path nobody has used**, and this
run found it by accident. Recorded under T-36.

## Existing customers

| Customer                    | Thread                                          | Age                                                      | What happened | Draft ready                        | Task     |
| --------------------------- | ----------------------------------------------- | -------------------------------------------------------- | ------------- | ---------------------------------- | -------- |
| **The Challenger customer** | `1a0e402cdcf75731` — 29 messages, **unchanged** | Log sent 2026-10-13T15:39Z — **~67 hours, still unread** | **Nothing**   | **A-18 exists and is still wrong** | **T-64** |
| **The C10 customer**        | `1a1082503004a073` — 29 messages, **unchanged** | DD84 spoke last 2026-10-12T20:39Z — **~86 hours**        | **Nothing**   | No — correctly                     | **T-37** |

**Neither job priced.** Against an overdrawn account, **two
delivered-but-unbilled jobs are no longer a tidiness problem.** That connection
is drawn once and not laboured.

## New leads

**None.** No contact-form submission, no Reddit notification, no enquiry.
**Second consecutive run with a real zero for the window** — T-66's uncounted
backlog of earlier form submissions is unchanged.

## Conflicts found

**1. The owner answered the state, and answered it well.** 2026-10-15T20:08:02Z
— the one message sent in 24 hours:

> _"Thank you for clarifying the requirements. The shop would have **one toilet
> and one handwashing sink only, with an estimated maximum of 10 people total
> per day**. The employee/customer…"_

**That supplies exactly what table 13.J needs** — fixture count and occupancy —
**and asks the agency to do the computation rather than guessing at it.** T-70's
central question has moved from DD84's side to the reviewer's.

**Torque is not computing the design flow and will not.** The table is behind
blocked egress, the figure decides a property purchase, and **the agency has now
been given the inputs and is the right party to produce it.** What this record
can say: **one toilet, one sink and ten people a day is a small sanitary load,
and whether it fits 380 gpd is the agency's finding to state.** No estimate.

**2. Google Business Profile wants business details confirmed.**
2026-10-16T05:16:00Z, _"Action Required: … confirm your business details"_,
unread. **Relevant to T-47** — two Google Business Profiles for one business —
because confirming details on the wrong one of two entrenches the duplicate.
**Which profile this concerns was not established.**

**3. The card was toggled twice more.** On **2026-10-15T16:48:34Z**, off
**2026-10-16T08:50:34Z**, on **2026-10-16T10:00:52Z** — **currently on.** Day
nine. **The sequence now has a plain reading it did not have yesterday** (T-71),
and the card's digits remain unrecorded.

**4. An OpenAI account was granted access to the Google account.**
2026-10-15T19:53:33Z, Google "Security alert": _"You allowed OpenAI access to
some of your Google Account data."_ **Thirteen minutes after an OpenAI marketing
email arrived**, which makes this almost certainly the owner's own signup.
**Recorded, not flagged as a threat** — but it is the **tenth** account or
security notice in ten days, and T-52's step 4 (which accounts exist, who
administers them) is still open.

## Drafts prepared — NOT SENT

**None written this run.** The overdraft needs a decision about money, not a
message; Square needs a dashboard read; the state thread is the owner's and he
is handling it better than a draft would.

### The backlog, unchanged for a sixth consecutive run

| Pending         | What                                     | Waiting                    |
| --------------- | ---------------------------------------- | -------------------------- |
| **A-15**        | GDOT District 1 reply, written in full   | **10 days**                |
| **A-15**        | Georgia SBDC reschedule, written in full | **10 days**                |
| **T-58 / T-42** | Georgia CDC (SBA 504) draft              | **17 days unsent**         |
| **A-18**        | The Challenger chase                     | **Superseded. Reject it.** |
| **T-53**        | Realty follow-up draft                   | **Moot** since 10-13       |

**Gmail drafts: 15.** Not one added, sent or deleted since 2026-10-12. **Five
are addressed to likely loan fraud** (T-42, T-67) and **should be deleted — and
the overdraft makes that more pressing, not less**, because a business short of
cash is the exact target those messages are written for.

## No action, with reason

29 threads, grouped.

- **CarGurus ×6, NFL, JEGS, Matco Tools, Microcenter, Amazon Business ×2, Nike
  ×2, JD Sports, TJ Maxx, Dunkin, Shopify marketing, OpenAI marketing, a
  concealed-carry newsletter** — marketing and newsletters. **JEGS and Matco are
  on-topic for the trade and are still promotions.**
- **The Reprise prescreened offer, chased a second time** (2026-10-15T19:52Z).
  Still assessed as a **real solicitation rather than the T-67 fraud pattern** —
  one company, own domain, footnote markers. **No link opened.** Its relevance
  has changed with T-71, which is why it appears in the table above rather than
  only here.
- **One personal family-account notice.** Not business, **concerns a minor, and
  deliberately not described** — no approval covers that category.

## Proposed labels (not applied)

**No label applied; no thread moved, archived, trashed or reported.** Class B,
no taxonomy approval.

| Thread                                      | Proposed                          | Why                                                       |
| ------------------------------------------- | --------------------------------- | --------------------------------------------------------- |
| The zero-balance alert                      | **`[Superhuman]/Finance` + flag** | **The most consequential unread message in the mailbox**  |
| The DAZN decline                            | `[Superhuman]/Finance`            | Second decline in 90 minutes                              |
| Square "offline payments are now turned on" | `[Superhuman]/Finance`            | A live payment setting changed                            |
| The Google Business Profile request         | `[Superhuman]/AI/Respond`         | T-47; confirming the wrong profile entrenches a duplicate |

## Not checked this run

| Source                                                              | Reason                                                                                                                                                                        |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The bank**                                                        | **No connector.** The balance is known only from one alert email; **no transaction list, no pending items, no overdraft-fee schedule was read.** How it got there is unknown. |
| **PayPal connector**                                                | Re-authentication required since 2026-10-09. **Its notification mail does work** — see T-36.                                                                                  |
| **Stripe, bookipay**                                                | No server / no API. **Both live jobs' billing status still unknown.**                                                                                                         |
| **Square**                                                          | No connector. **Offline payments are on; whether the account has ever taken a payment is still unestablished.**                                                               |
| **Table 13.J; the county fee schedule**                             | Blocked egress and no download tool. **Now the agency's to compute**, with DD84's inputs supplied.                                                                            |
| **The Challenger datalog; the realty attachment**                   | 2.8 MB and 5.6 MB, neither downloadable.                                                                                                                                      |
| **Which Google Business Profile** the confirmation request concerns | Not established (T-47).                                                                                                                                                       |
| **Reddit**                                                          | Egress-blocked. **T-60's verification status unknown, ~3 days from the deadline.**                                                                                            |
| **Mail older than 24 hours**                                        | Out of window. **~20,700 unread remain unassessed.**                                                                                                                          |

---

**Class A held.** Nothing sent, forwarded or replied to. No label applied, no
thread moved, archived, trashed or reported. **No draft created, edited, sent or
deleted — 15, unchanged.** No link in any solicitation opened. No calendar
write, no customer contacted, no price quoted, **no payment, bank, card or
Square action.** No scheduled task created, changed or fired (T-69).
`docs/growth/` untouched. **§5 held, and it cost something this run:** **the
bank balance, the account's last four digits and the card's last four digits
were all read and none is written here**, the figure being withheld pending
**A-19** rather than published on a judgement call. **No customer name, email or
phone written**; the DPH specialist is a role, customers are thread IDs, **and
the personal family notice concerning a minor is neither named nor described.**
