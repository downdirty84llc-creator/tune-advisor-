# DD84 inbox and lead intake — 2026-11-16

**Run 2026-11-16T10:21Z–10:40Z.** Fired 10:21:20Z against a 10:20Z schedule.
**Window: 2026-11-13T10:20Z → 2026-11-16T10:20Z — seventy-two hours, the longest
this routine has swept**, covering a full weekend. Class A. **Nothing sent, no
label applied, no mail state changed, no live system touched.**

## 0. Checkout — contract item 0

`HEAD` equals `origin/claude/claude-md-docs-cqvhy6` at **`a0d5ed1`** before this
run's skeleton. **No `src/`, no `package.json`, clean status, 93 tracked files
against the prompt's 28 — forty-first run reporting that drift.** T-85 step 3
carries it; the prompts are stale, the tree is correct.

## 1. The tune file has now been read, and still not answered

**T-177 changed state over the weekend, and the change is the finding.**

On 2026-11-13 the message carrying a customer's HP Tuners calibration file was
**unread**. **It is now read.** Thread `1a1d27a193e37041`, re-checked this run:
the unread marker is gone, the thread is still **one message**, and **no reply
exists in the sent mailbox.**

| Fact               | Value                                       |
| ------------------ | ------------------------------------------- |
| Arrived            | **2026-11-13T01:16:02Z**                    |
| Unanswered for     | **3 days, 9 hours and 5 minutes**           |
| Messages in thread | **1** — no follow-up from the sender either |
| Read by the owner  | **Yes, at some point since 2026-11-13**     |

**When it was read cannot be determined** — Gmail records that a label changed,
not when. **What can be said is that it was seen and left.**

**This is no longer "nobody has got to it yet".** A prospect sent DD84 its exact
service, the message was opened, and three days later there is no reply. **The
draft has been sitting in the 11-13 intake since Friday and A-29 — the standing
authority to acknowledge an enquiry — has been pending since Friday too.**

**Nothing here is the owner being slow and this brief will not say it is.** It
is a drafted message that needs one word, and the word has not been given.
**T-177 stays Awaiting Approval behind A-29.**

## 2. Two pieces of infrastructure started failing over the weekend

### A database is scheduled to be switched off — T-187

**2026-11-16T09:37:39Z**, thread `1a1e3b82cde691b0`. A Supabase project named
for DD84's tuning work **has not seen sufficient activity for more than seven
days and is scheduled for automatic pause.** It is **not paused yet**.

**What happens if it pauses:** a confirmation email, then **90 days in which it
can be unpaused from the dashboard**. After 90 days it cannot be unpaused —
**the data can still be downloaded, but the project is gone.** The free plan is
what makes it eligible; a paid plan stops it.

**The project reference and organisation ID are withheld** — they are the host
half of an API endpoint, they are not needed for the owner to act, and he has
the email.

**This run deliberately did not open the project, and the reason is worth
recording.** Inspecting it to find out what it holds **would itself count as
activity and could reset the inactivity clock.** **An observing routine must not
change the thing it is observing**, and that is a Class A boundary this record
had not met before.

**The recommendation is not urgency.** A pause is reversible for ninety days and
costs nothing. **What is needed is to know what is in the project before that
window starts, not to prevent the pause.** Upgrading to a paid plan to avoid it
is **Class E** and is not recommended on these facts.

### Five domains are misconfigured, and one of them is DD84's — T-188

**2026-11-16T08:07:39Z**, thread `1a1e365c3d98a816`. Five misconfigured domains
on one deployment project.

**Four of the five belong to the Georgia Opportunity Ledger**, which the
**2026-09-16 standing decision keeps as a separate business.** They are not
scored here and are not DD84's to fix.

**The fifth is `ledger.downdirty84llc.com`** — a subdomain of **DD84's own
registered domain**, pointing at the other business's project, and broken.
**That one is DD84's**, because the DNS record lives on DD84's domain whatever
it serves. **T-188 raised for that record alone.**

**This is the separation working as intended and showing its seam:** the
businesses are kept apart in the record, and an asset of one is lent to the
other without anything in the registry saying so.

## 3. Money and banking over the weekend

**No payment arrived and no order was placed.** Shopify re-read live at 10:33Z:
**one order all time, #1001 of 2026-10-23, unchanged.**

| What                                                               | When (UTC)          | Thread             | Disposition                      |
| ------------------------------------------------------------------ | ------------------- | ------------------ | -------------------------------- |
| **An account was enrolled for instant transfers**                  | 2026-11-14T13:00:36 | `1a1da2546a29c6fe` | **T-189 — see below**            |
| **The business card remains off** — reminder, off since 2026-11-10 | 2026-11-14T03:06:24 | `1a1d80545bad2c62` | **T-139, T-179** unchanged       |
| **The other card was turned back on**                              | 2026-11-15T17:35:18 | `1a1e0471d6d34567` | **T-180** — toggling continues   |
| **A credit-card statement became available**                       | 2026-11-14T22:37:15 | —                  | **T-183** — see below            |
| **The bank asked the owner to review his connected apps**          | 2026-11-16T05:43:25 | `1a1e2e1bfd6470b2` | **T-190 — converges with T-181** |

**The instant-transfer enrolment matters more than it looks — T-189.** **Three
of the four payments that ended DD84's 405-day drought in October arrived by
instant transfer and none of them is attributed to a job** (T-88, T-92, T-113).
**An account was enrolled for that rail on 2026-11-14.** **The alert names a
mobile number and an account ending, and both are withheld** under §5 — **but
the account ending it names is not one this record has seen before**, which goes
straight to **A-25's question of whose account the register has been treating as
the business's.** **A-25 has been pending since 2026-11-06 and now has a third
account identifier in play.**

**T-183's lender is now identified in kind, though not resolved.** The
2026-11-09 outflow went to a **consumer credit card issued under a payment
brand**, and its statement became available on 2026-11-14. **Whether it is a
DD84 expense is still not established** — that is still A-25 and A-30. **Amounts
remain withheld, A-19 and A-30.**

**No balance alert, no decline and no fee notice arrived in the window.** **That
is "no alert", not "no fee".**

## 4. Everything else

| Item                                                      | When (UTC)          | Disposition                                                                                                                                                      |
| --------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **One message sent by the business in 72 hours**          | 2026-11-13T16:41:57 | A follow-up on a land-and-utility matter, asking a water utility for a municipal contact. **Thread `1a1353c9bb6d1ea0`.** Not a customer thread                   |
| **A personal commitment on the owner's Thursday morning** | 2026-11-19          | **Shape only — no name, no detail, no thread ID.** Recorded because **2026-11-19 is the day before the Stripe key deadline (T-171)** and the morning is not free |
| **Payment-platform terms update**                         | 2026-11-15T21:42:29 | No action needed, per the notice itself                                                                                                                          |
| **Vendor, retail, recruitment and newsletter mail**       | throughout          | **~190 threads over three days.** No business action in any                                                                                                      |

**No enquiry arrived in the window.** **No customer replied.** **No complaint,
no safety report, no deadline, no invoice, no quote request.**

## 5. Carried-in questions

| Question                                                     | Answer this run                                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Was the tune file answered?**                              | **No — and it has been read.** §1. **T-177 escalates on evidence, not on age alone**       |
| **Did the Cadillac enquirer reply?**                         | **No.** Six days silent since the owner's 2026-11-10 reply. **T-182**                      |
| **Was the 2026-10-26 enquirer answered?**                    | **No. Twenty-one days.** A-23 and A-26 both still pending; A-29 would retire both          |
| **Did the owner act on the app permission request (T-178)?** | **Not visible from here.** No confirmation mail arrived either way — **unknown, not "no"** |
| **Were the two live jobs invoiced (T-185)?**                 | **No.** Nothing in the sent mailbox, nothing in the store                                  |
| **Any new credit alerts (T-169)?**                           | **None.** The thread is still sixteen                                                      |

## 6. Drafts prepared — NOT SENT

**None new.** **The only draft outstanding is the 2026-11-13 reply to the
tune-file enquirer**, written in `docs/ops/briefs/2026-11-13-inbox-intake.md` §1
and unchanged. **It still quotes no price, promises no power figure, names no
turnaround and does not claim the file has been read.** **Sending is Class C and
A-29 is the packet.**

**No message was drafted for anything in §2 or §3** — none of it is a customer
matter, and the actions they call for are the owner's own, inside systems no
routine here may touch.

## 7. Withheld

- **Both cards' last-four digits**, and **the account ending and mobile number**
  in the instant-transfer enrolment.
- **The Supabase project reference and organisation ID.**
- **The tune-file enquirer's name and address**; the Cadillac enquirer's.
- **The Shopify customer's name** on order #1001.
- **A personal legal matter in its entirety** — no name, no detail, no thread
  ID. **Only the fact that the owner's Thursday morning is committed.**
- **All outflow amounts**, pending A-30.

**Withheld, not unavailable, in every case above: each was read.**

## 8. Not checked this run

| Source                                         | State                                                             |
| ---------------------------------------------- | ----------------------------------------------------------------- |
| **Stripe**                                     | **No MCP server exists.** Absent, not unreachable                 |
| **PayPal**                                     | Needs re-authentication                                           |
| **Bank, Square, Chime, Melio, Capital on Tap** | **No connector exists for any.** Mail alerts are the only window  |
| **The Supabase project**                       | **Deliberately not opened** — reading it would be activity (§2)   |
| **Any public web page**                        | **T-98.** A-27 pending                                            |
| **Google Calendar**                            | **Reached. No events 2026-11-16 → 2026-11-23. Zero appointments** |
