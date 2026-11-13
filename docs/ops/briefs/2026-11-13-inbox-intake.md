# DD84 inbox and lead intake — 2026-11-13

**Run 2026-11-13T10:53Z–11:20Z.** Fired 10:27:16Z against a 10:20Z schedule.
**Window: 2026-11-12T10:20Z → 2026-11-13T10:20Z, twenty-four hours.** Class A.
**Nothing was sent, no label applied, no mail state changed, no live system
touched.**

**This run survived a container restart.** The skeleton committed at `57f4338`
before the sweep is why the structure outlived it — twenty-ninth application of
OL-0050, and the first in which the protection was actually needed rather than
merely prudent.

## 0. Checkout — contract item 0

| Check           | Expected by the prompt | Found          | Verdict                                 |
| --------------- | ---------------------- | -------------- | --------------------------------------- |
| `HEAD` = remote | equal                  | `57f4338` both | **Pass**                                |
| `src/` absent   | absent                 | absent         | **Pass**                                |
| `package.json`  | absent                 | absent         | **Pass**                                |
| Tracked files   | **28**                 | **91**         | **Drift — thirty-eighth run reporting** |
| `git status`    | clean                  | clean          | **Pass**                                |

**The file count has never matched since the prompts were written and the
prompts are what is stale, not the tree.** T-85 step 3 carries it. The tell the
prompt actually depends on — `src/` and a wrong pointer — is sound.

## 1. The finding that matters: a tune file arrived, and nobody has answered it

**A customer-supplied HP Tuners calibration file reached the business inbox at
2026-11-13T01:16:02Z.** Thread `1a1d27a193e37041`. Subject: **"90 Chevy 1500
LS2"**. One attachment, named for a post-installation state, about 1.06 MB.

**The message body is five words of phone signature and nothing else.** No
question, no scope, no price asked, no description of a fault.

**What this run did with the file: nothing.** It was not downloaded, not opened,
not described and will never be committed. `CLAUDE.md` §5 forbids tune files in
this repository without qualification, and the prohibition covers a customer's
file at least as strongly as DD84's own. **The sender's name and address are
withheld under A-17.** The thread ID above is the pointer; the inbox holds the
rest.

**Why it is the top item.** A 1990 GM truck with an LS2 swap, a calibration file
already in hand, and a filename that reads as "this is what is in the truck now"
is DD84's exact service — not an adjacent one. **It was unanswered for nine
hours and thirty-seven minutes at the moment of the sweep**, and is unanswered
now.

**What is not known and must not be guessed:** whether this is a paying
customer, a prospect, a second message in a conversation that began off email,
or a file sent to the wrong address. **Nothing in the mail says.** A reply that
assumes any of those is a reply that can be wrong in public.

### Draft — NOT SENT. Class C. Approval required before sending.

> **To:** the 11-13 enquirer, thread `1a1d27a193e37041` **Subject:** Re: 90
> Chevy 1500 LS2
>
> Hi — got the file, thanks for sending it over.
>
> I want to make sure I read it against the right target rather than guessing.
> Four quick things:
>
> 1. What is the truck doing now that you want changed — a drivability
>    complaint, a tune-up after parts, or a fresh calibration from scratch?
> 2. What is the full combination? Cam, heads, injectors, converter, gearing,
>    and anything else that moved from stock.
> 3. Which controller is in it, and is it stock or already unlocked?
> 4. Do you have a datalog from a drive, and is this a remote job or are you
>    looking to bring it somewhere?
>
> Once I know those I will tell you what the work is and what it costs before
> anything starts. If you have already paid for this or it is part of an
> existing job, say so and I will pick up from there instead.
>
> — Mark, Down Dirty 84 LLC

**What the draft deliberately does not do.** It quotes no price, promises no
power figure, names no turnaround, and does not claim the file has been read —
because it has not been. **It also does not assume the sender is new**, because
the record cannot establish that either way.

**T-177 raised.**

## 2. Nothing was sent in the window — verified by the right query this time

**`in:sent` for the window returns zero.** No outbound mail from the business
address between 2026-11-12T10:20Z and the run.

**This was checked the way T-173 says to check it, and then checked again.** A
bare empty result is exactly what a broken query also returns, so the same
mailbox was queried over three days: **thirty-six threads, newest
2026-11-11T14:33:35Z**, a reply to a water utility about a parcel. **The tool is
working; the mailbox is genuinely quiet.**

**So the thirty-two partnership approaches of 2026-11-10 had no follow-up on
2026-11-12, and neither did anything else.**

## 3. The cards: one toggled all day and ended on, a second declined for being off

**Two different cards appear in the window, and the alerts distinguish them by
last-four digits. Both sets of digits are withheld.**

### Card A — the insufficient-funds card from 2026-11-10

Nine notices across threads `1a1cfeb16bf3083f` and `1a1cfeb9356aed59`, all on
2026-11-12:

| UTC      | State                        |
| -------- | ---------------------------- |
| 13:20:51 | on                           |
| 13:21:23 | off                          |
| 13:34:54 | on                           |
| 13:35:23 | off                          |
| 13:35:23 | off — **identical second**   |
| 13:35:25 | on                           |
| 19:22:40 | on                           |
| 20:09:15 | off                          |
| 22:28:04 | **on — last state attested** |

**This is the same card T-175 recorded as turned off on 2026-11-11T12:35:48Z**,
confirmed by matching the withheld digits against thread `1a1ca9b7b46e4d2c`.
**So the 11-11 turn-off was reversed the next day, and the card is on.**

**The count of real events is not readable and this run will not invent one.**
Two of the nine notices are stamped the same second with the same content, which
is the duplication defect T-169 named when sixteen alerts described one event.
**What can be asserted: at least three on/off cycles, and a final state of on.**
**What cannot: whether the 13:34–13:35 flurry is three toggles in thirty-one
seconds or re-deliveries of the 13:20:51 and 13:21:23 pair.**

### Card B — a different card, declined for being off

**2026-11-12T13:30:56Z**, thread `1a1cff4504a6617b`: a business debit card
transaction **"declined as your card is off."** No amount, no merchant. **Amount
withheld under A-19 — and in this case none was published to withhold; the alert
carries no figure.**

**This is T-139's pattern, repeating.** T-139 has asked since 2026-11-07 why
cards deliberately kept off keep being presented for payment. **Six days later,
unanswered, it happened again.**

### What this run refuses to conclude

The sequence reads: card A off at 13:21:23 · card B declined at 13:30:56 · card
A back on at 13:34:54. **Nine minutes and thirty-three seconds, then three
minutes and fifty-eight seconds.** **A mechanism is not asserted.** Juggling two
cards against one payment, an unrelated coincidence, and a retry on the wrong
card are all consistent with those three timestamps, and the mail does not
choose between them.

**T-179 and T-180 raised. T-153 is clarified without being answered:** the two
declines on record now have _different_ reasons on _different_ cards — one for
no money, one for being off. **That is a distinction the register did not have
yesterday.**

## 4. A GitHub App is asking the owner for more access

**2026-11-13T04:00:54Z**, thread `1a1d310ca392deff`. The GitHub App **Claude**,
already installed on the owner's account, **is requesting updated permissions.**
The notice names the installation — **ID withheld**, not unavailable — and a
settings URL to accept or ignore, and states that ignoring it leaves current
permissions in place.

**This is an owner decision and no agent may touch it.** Changing account
permissions is Class G under the operations specification, and no routine here
has authority over it whatever the request says.

**Why it deserves a row rather than a mention.** This repository is **public by
A-13**. The same account also holds the Georgia Opportunity Ledger repository,
which is a _separate business_ by the 2026-09-16 standing decision. **A
permission grant is not scoped to the repository that prompted it.** The notice
does not say which permissions are being asked for — **that is visible only on
the settings page, which no tool in this session can reach** (T-98: the
allowed-hosts list is empty).

**T-178 raised. The recommendation is to read the diff of permissions on the
settings page before accepting**, and the brief cannot read it for him.

## 5. The business Google account signed in to three third parties in 29 minutes

**2026-11-12, between 12:44:36Z and 13:13:43Z.** Three "you shared some Google
Account data" notices: threads `1a1cfc9e273ae569`, `1a1cfe380e493fd0`,
`1a1cfe48b69d5572`.

**The three services are withheld.** A-13 covers what was exposed on 2026-10-08
and does not reach these, and at least one is not a business matter.
**"Withheld" is the honest word — the names were read and not published, which
is different from not being available.**

**The operational point stands without them.** **One Google account — the
business one — is the single identity behind** Gmail, Calendar, Drive, the
Shopify login and the GitHub account. **Every third party it signs in to is
another place a compromise of that one account can start.** T-170 already
records eight new-device sign-ins in nine days. **T-181 raised** — not to police
what the owner signs in to, but to ask whether the business identity is the
right one to do it with.

## 6. Everything else in the window

| Item                                                           | When (UTC)             | Thread             | Disposition                                                      |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ---------------------------------------------------------------- |
| **Tune file, 90 Chevy 1500 LS2**                               | 2026-11-13T01:16:02    | `1a1d27a193e37041` | **T-177 — §1**                                                   |
| **GitHub App permissions request**                             | 2026-11-13T04:00:54    | `1a1d310ca392deff` | **T-178 — §4**                                                   |
| **Card B declined for being off**                              | 2026-11-12T13:30:56    | `1a1cff4504a6617b` | **T-179 — §3**                                                   |
| **Card A toggled, ended on**                                   | 2026-11-12 all day     | two threads, §3    | **T-180 — §3**                                                   |
| **Three third-party sign-ins**                                 | 2026-11-12 12:44–13:13 | three threads, §5  | **T-181 — §5**                                                   |
| **Unsolicited mail, no content**                               | 2026-11-13T01:24:00    | `1a1d28158d8ce313` | Four words, no ask, no signature. **Not a lead.** No action      |
| **TikTok Shop support ticket reported resolved**               | 2026-11-12T13:31:50    | `1a1cff52448a84b6` | Closes an open support thread. Ticket number withheld. No action |
| **Georgia Ledger weekly digest — six published opportunities** | 2026-11-12T14:20:02    | `1a1d02144e6bfea5` | **Separate business** (2026-09-16). Noted, not scored here       |
| **Deployment bot comment on a Ledger pull request**            | 2026-11-12T12:39:57    | —                  | **Other repository.** Not DD84's. No action                      |
| **Brokerage, retail, vendor and newsletter mail**              | throughout             | —                  | **~55 threads.** No business action in any                       |

**Nothing in the window was a customer payment, an invoice, a quote request with
a price attached, a complaint, a safety report, or a deadline.**

## 7. Carried-in questions — three answered, two still open

| Question carried in                                           | Answer this run                                                                                                                            |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Did the 2026-11-10 Cadillac enquirer reply?**               | **No.** Thread `1a1c2da539737cb0`: enquiry 11-10T00:27:18Z, owner's reply 11-10T10:32:19Z, **silent since — three days.** **T-182 raised** |
| **Did any of the ~29 silent partnership approaches reply?**   | **No.** Nothing inbound from any of them, and nothing outbound either                                                                      |
| **Did more credit alerts arrive (T-169)?**                    | **No seventeenth alert.** The thread is still sixteen                                                                                      |
| **Was the 2026-10-25 enquirer ever answered — now 19 days?**  | **Still no.** Unchanged, and unanswered is now the longest-standing silence on the books                                                   |
| **Did an overdraft fee land (nine days, eight processings)?** | **No fee alert in the window.** Not "no fee" — no alert                                                                                    |

## 8. What was read, and what was not

| Source                                         | Reached | What it said                                                                                                        |
| ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| **Gmail inbox**                                | **Yes** | ~68 threads across two pages, every one triaged; eight opened in full                                               |
| **Gmail sent**                                 | **Yes** | **Zero in window**, verified against a three-day query returning 36                                                 |
| **Gmail drafts**                               | **Yes** | **17 outstanding**, newest 2026-11-10T12:41Z. **None created in the window**                                        |
| **Shopify**                                    | **Yes** | **One order, unchanged** — #1001, 2026-10-23, $550.00, paid and fulfilled. **No new order.** Customer name withheld |
| **Google Calendar**                            | **Yes** | **No events returned** for 2026-11-12 → 2026-11-20. **Zero appointments**                                           |
| **Stripe**                                     | **No**  | **No MCP server exists.** Not "nothing to report" — not readable at all                                             |
| **PayPal**                                     | **No**  | **Needs re-authentication.** Unreadable this run                                                                    |
| **Bank, Square, Chime, Melio, Capital on Tap** | **No**  | **No connector exists for any.** Mail notices are the only window                                                   |
| **Any public web page**                        | **No**  | **T-98 — the allowed-hosts list is empty.** A-27 asks for five hosts                                                |

**Run condition worth recording: the connector set disconnected and reconnected
twice during this run**, and the Shopify read had to be retried after a worker
restart discarded it. **Every figure above comes from a call that returned in
this session**; nothing was carried over from a previous run's reading.

## 9. Withheld this run

- **Both cards' last-four digits**, in nine state notices and one decline.
- **The names of three third-party services** the business account signed in to.
- **The tune file itself** — not downloaded, not described, never to be
  committed.
- **The 11-13 enquirer's name and email address**, and the Cadillac enquirer's.
- **The Shopify customer's name** on order #1001.
- **A support ticket number.**
- **No cash figure appears anywhere in this brief**, because none was readable
  and none was published to withhold. **That is A-19 holding by luck rather than
  by exercise this run, and the distinction is worth stating.**
