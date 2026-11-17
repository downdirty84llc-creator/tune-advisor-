# DD84 inbox and lead intake — 2026-11-17

**Run 2026-11-17T10:21Z.** Fired 10:20:59Z against a 10:20Z schedule. **Window:
2026-11-16T10:20Z → 2026-11-17T10:20Z, twenty-four hours.** Class A. **Nothing
sent, no label applied, no mail state changed, no live system touched. No link
in any message was followed.**

**This was not a quiet day.** Six findings, one of them a state change in the
business's cash position and one of them the third independent thing this week
to turn on a question nobody has answered.

## 0. Checkout — contract item 0

`HEAD` equalled `origin/claude/claude-md-docs-cqvhy6` at **`d0a019c`** before
this run's skeleton. **No `src/`, no `package.json`, clean status, 96 tracked
files against the prompt's 28 — forty-fourth run reporting that drift.**

## 1. The account is below zero now, not at zero

**2026-11-16T17:15:40Z**, thread `1a1e55b80d076ef8`, read this run at
**2026-11-17T10:24Z**. A balance alert on the account this register treats as
the business's.

**The figure is withheld under A-19 and the account's digits under §5.** **What
is not withheld is the shape, and the shape changed.**

**On 2026-11-13 this record answered T-136 after seven days of asking: the
2026-11-09 alert read _at_ zero, not below it**, and the brief said plainly that
a zero balance is not an overdraft and a charge-off clock started from it would
be counting from the wrong event.

**The 2026-11-16 alert reads _below_ zero.** **So the answer T-136 got is not
wrong — it has been overtaken.** Zero on 11-09, negative on 11-16. **Seven
days.**

**T-196 raised.** **T-71 — "the account is overdrawn", Critical since 2026-10-16
— is no longer a historical description. It is current.**

**What this run will not do is say why.** No transaction detail is readable from
here: Stripe has no MCP server, PayPal needs re-authentication, no bank
connector exists. **Three things did fail to charge in this window** (§3, §4)
and **a mechanism is not asserted from that.**

## 2. A sales channel rejected DD84's proof of address — and that is the third gate on T-164

**2026-11-16T15:25:28Z**, thread `1a1e4f69c590a063`, with a chaser at
**16:58:59Z**, thread `1a1e54c3d53dec1a`.

**Stated by the platform, quoted exactly:** _"We were unable to verify the
authenticity of your proof of address document. Please resubmit a clear,
original format of your proof of address document without any adjustments.
Edited or modified images, including those with filters, corrections, or quality
improvements, are not allowed."_

**The application is rejected, not pending.** The notice sets out four routes:
review the reason in the seller centre, submit an appeal, request a manual
review, or go through the platform's seller community. **No link was followed
and no action was taken.**

### Why this is the finding of the run

**T-164 has asked since 2026-11-12 what county DD84's business address is in,
because `ventures.md` records no location at all.** It looked like bookkeeping.

**This week it became three gates on three unrelated things:**

| What is blocked                                | How the address blocks it                                               | Task      |
| ---------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| **A $3,001–$25,000 loan at 2% APR**            | First eligibility rule is a business address inside a named county      | **T-191** |
| **Occupation tax standing for that same loan** | Three prior years paid **to the jurisdiction of the physical location** | **T-192** |
| **A sales channel's seller application**       | **Proof of address could not be verified as authentic**                 | **T-197** |

**Three independent systems, in one week, all asking the same question the
register cannot answer.** **This is no longer a documentation gap. It is the
single most expensive unanswered item on the board**, and T-164 was escalated to
Critical yesterday on one of those three.

**What this run does not conclude.** **Why** the document failed verification is
not stated anywhere — the notice describes a category of failure (edited or
modified images) rather than saying that is what happened. **Whether DD84 has a
verifiable business address at all, and whether the document submitted was
simply a poor scan, are different problems with different fixes**, and the mail
does not distinguish them.

**T-197 raised.**

## 3. The card pattern repeated a third time, and T-139 is ten days old

| UTC                 | What                                                          | Thread             |
| ------------------- | ------------------------------------------------------------- | ------------------ |
| 2026-11-16T14:28:19 | **A business card declined — "declined as your card is off"** | `1a1e4c24cb7e3574` |
| 2026-11-16T18:14:19 | **That same card turned off**, request date 2026-11-16        | `1a1e4440e3e43eea` |
| 2026-11-16T23:12:17 | **The other card turned back on**                             | `1a1e54e2c62d8700` |

**Third occurrence of T-139's pattern: 2026-11-12, and now 2026-11-16.** A card
deliberately kept off was presented for a payment and declined.

**One thing follows and one does not.** **It follows that the card was on at
some point on 2026-11-16**, because an off-request was granted that day and the
record had it off since 2026-11-10. **It does not follow that the decline caused
the toggle, or that the toggle caused anything else** — and the mail does not
say.

**Both cards' last-four digits are withheld under §5.** **T-139 was asked on
2026-11-07 and is ten days unanswered.**

## 4. A subscription payment failed, from a vendor the cost base does not record

**2026-11-16T13:28:32Z**, thread `1a1e48b8ca63ff04`. A recurring charge for a
social-media scheduling tool **could not be charged to the card on file**, via
the payment processor.

**The amount is withheld under A-19** — it is a declined-payment amount, which
the rule names explicitly — **and A-30, raised 2026-11-13, asks whether vendor
outflow amounts may be published here at all.** **Withheld, not unavailable: it
was read.**

**The finding is not the failure, it is the vendor.** **Friday's cash review
could not state DD84's weekly cost base**, and listed four payees it had found.
**This is a fifth, and it was not among them.** **So the cost base is not merely
unpublished — it is not fully known**, and each week's review has been
describing a subset without being able to say how large a subset.

**T-198 raised.**

## 5. Three systems surfaced that the venture registry does not record

| System                                                      | Evidence                                                                                                                                         | Task      |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| **A third DD84 code repository, named for AI tuning**       | A failed continuous-integration run on a pull request concerning **fuel-unit ambiguity and legacy calibration provenance**, 2026-11-16T14:36:39Z | **T-199** |
| **A DD84 web application with sign-in-link authentication** | A sign-in link addressed to the owner, 2026-11-16T14:14:16Z. **The token is withheld in full and the link was not followed**                     | **T-200** |
| **A live website for a third DD84-named brand**             | A search-console verification notice for it, 2026-11-16T23:12:41Z                                                                                | **T-201** |

**None of the three appears in `docs/agents/ventures.md`.**

**The third one is the one that matters.** **T-151 records a third payment
processor account under that same brand name, paying into the account A-25 asks
about** — and A-25 has been pending since 2026-11-06. **That brand now has a
processor account and a live site**, and the register still cannot say whose
account its money lands in.

**The first one is a safety-adjacent note worth stating carefully.** A failing
check on a pull request about **ambiguous fuel units and calibration
provenance** is, on its face, a guardrail doing its job — **the run's own
summary says a safety-guardrail step succeeded.** **No claim is made here about
whether the calibration work behind it is sound**, because this record has not
seen it and would not publish it if it had (§5 of `CLAUDE.md`).

## 6. Carried-in questions

| Question                                                     | Answer this run                                                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Was the tune file answered?**                              | **No. Four days, nine hours.** Nothing in the sent mailbox. **T-177, read and left since 2026-11-16**        |
| **Did the database pause (T-187)?**                          | **Not yet.** No confirmation arrived. **Still scheduled, not paused** — the ninety-day clock has not started |
| **Did the owner act on the app permission request (T-178)?** | **Still unknown rather than no.** No confirmation either way                                                 |
| **Has DD84's location been stated anywhere?**                | **No — and it now gates three things.** §2                                                                   |
| **Were the two live jobs invoiced (T-185)?**                 | **No.** Nothing sent, nothing in the store                                                                   |
| **Any new enquiry, order or customer reply?**                | **None.** Shopify re-read live at 10:26Z: **one order all time, unchanged**                                  |
| **What did the owner send in 24 hours?**                     | **One message, to his own address**, with a large attachment. **No customer message was sent**               |

## 7. Deadlines now on the board

| Date           | What                                                                   | Source                      |
| -------------- | ---------------------------------------------------------------------- | --------------------------- |
| **2026-11-19** | **The owner's morning is committed** — shape only, recorded 2026-11-16 | Personal; withheld in full  |
| **2026-11-20** | **Secret API key values are hidden from view** — T-171, Critical       | Platform notice, 2026-11-11 |
| **2026-11-24** | **Review workspace administrators**                                    | Platform notice, 2026-11-16 |
| **2026-11-30** | **A $1,000–$10,000 grant closes** — T-194, unverifiable from here      | Scan, 2026-11-16            |
| **2026-12-02** | Deploy credits reset — T-154                                           | Platform notice, 2026-11-09 |

**Four of the five fall inside the next eight days**, and **T-171 is the one
with an irreversible edge: after it, a value that was readable stops being
readable.**

## 8. Drafts prepared — NOT SENT

**None new.** **The only outstanding draft is still the 2026-11-13 reply to the
tune-file enquirer**, in `docs/ops/briefs/2026-11-13-inbox-intake.md` §1,
unchanged. **A-29 is the packet. Sending is Class C.**

**Nothing was drafted for §1 through §5.** None of it is a customer matter, and
**every action they call for is the owner's own, inside systems no routine here
may touch** — a bank, a seller centre, a code repository, an account's
permissions.

## 9. Withheld

- **The balance figure** and **the account's last four digits** (A-19, §5).
- **Both cards' last-four digits.**
- **The failed subscription amount** — a declined-payment amount (A-19), and
  **A-30 is pending on the class.**
- **A one-time sign-in token**, in full. **The link was not followed.**
- **A six-digit verification code.**
- **Two third-party services the business identity signed in to**, bringing
  **T-181 to eight grants in the period rather than six.**
- **The Shopify customer's name** on order #1001.
- **A personal legal matter in full** — no name, no detail, no thread ID; **only
  that the owner's Thursday morning is committed.**

**Withheld, not unavailable. Every item above was read.**

## 10. Not checked this run

| Source                                                       | State                                                                   |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **Stripe**                                                   | **No MCP server exists.** The failed charge in §4 was read in mail only |
| **PayPal**                                                   | Needs re-authentication                                                 |
| **Bank, Square, Chime, Melio, Capital on Tap**               | **No connector exists for any.** §1's alert is the only window          |
| **The database scheduled to pause**                          | **Deliberately not opened** — reading it would count as activity        |
| **The seller centre, the repositories, the web application** | **Not opened.** Observing routines do not sign in                       |
| **Any public web page**                                      | **T-98.** A-27 pending                                                  |
| **Google Calendar**                                          | **Not re-read this run** — read 2026-11-16, no events to 2026-11-23     |
