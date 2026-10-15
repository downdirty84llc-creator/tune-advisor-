# DD84 inbox intake — 2026-10-15

Run at **2026-10-15T10:20–10:58Z**. **Window: since OL-0043, 2026-10-14T10:52Z**
— 24 hours, queried `newer_than:1d` with a sent sweep and a full draft list.
Accounts scanned: **`downdirty84llc@gmail.com`** (inbox, sent, drafts). Not
reached: **PayPal, Stripe, bookipay, Square, Superhuman Mail, Canva**.

**Checkout verified under `docs/ops/README.md` contract item 0** — tip
**`d432b96`**, equal to `origin/claude/claude-md-docs-cqvhy6` after a
fast-forward, **no `src/` directory and no `package.json`.** Both markers
absent. The firing prompt again asked for "28 tracked files" against a tree of
**41** — see T-69.

Threads reviewed: **40**. Actionable: **6**. No-action: **34**.

> ## The state answered, and it answered with a number
>
> **Thread `1a1353df03441a3e`: the Madison County environmental health
> specialist replied twice on 2026-10-14, 14:12:58Z and 14:17:17Z**, with a
> county fee schedule attached. **The second message is still unread.**
>
> He answered **all six** of the owner's questions. The one that changes the
> deal:
>
> > _"**Without public water the property is limited to a maximum design flow of
> > 380 gallons** from table 13.J in our state on-site manual."_
>
> **Piedmont Water said on 2026-09-18 that its system was at capacity and could
> not add service.** If that still holds, **380 gallons per day is the ceiling
> on the whole facility** — restroom, office, light service, dyno.
>
> **Whether 380 gpd is enough is NOT established and is not guessed at here.**
> It depends on table 13.J's per-fixture and per-employee figures, which live in
> a PDF on `dph.georgia.gov` that **this session cannot fetch** (egress policy,
> T-59). **So this is the first quantified constraint on the parcel, not a
> verdict on it.** → **T-70**

## Urgent — read first

**1. The state's answer is a genuine unblock, and it has a deadline-free trap in
it.** Nothing in the DPH reply expires, which is exactly why it will sit. **It
is the critical path for the property**: every other property thread (T-38 GDOT
access, T-53 the purchase proposal, T-56/T-57 the funding questions) is
downstream of whether the site can take water and waste at all.

**2. The Challenger datalog is now ~43 hours unread**, and **A-18 is still
pending and still wrong.** No DD84 message left the mailbox in this window, so
nothing has changed since yesterday's brief except the clock. **Approving A-18
today would still ask a customer for a log he sent on Monday.**

**3. Square's default date was today, and no Square message arrived.** The
2026-09-15 and 2026-10-13 messages both pointed at **~2026-10-15** for offline
payments switching on by default. **No decision is recorded, no Square setting
was read, and nothing in the mailbox says what happened.** Per yesterday's
correction it is also **unestablished whether that account processes payments at
all** — so the honest statement is: **a setting on an account of unknown status
changed by default today, or did not, and this record cannot tell.** → T-61

## What the DPH actually said, fact by fact

Separated into what the agency stated and what remains open.

| #   | Question                                | The specialist's answer                                                                                                                                                                                                                                                   |
| --- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Who reviews, and what is on record?     | His office evaluates sites without public sewer carrying **typical residential-strength waste under 10,000 gpd** — DD84's restroom-only concept fits. **"We do not have any permits or soil evaluations for this property."**                                             |
| 2   | What does a feasibility review need?    | **Five documents**: the **recorded plat**; a **to-scale stamped original level 3 soil survey**; a **business plan describing size and use**; a **floor plan**; a **plumbing plan**.                                                                                       |
| 3   | How is design flow set?                 | **Table 13.J** of the state on-site manual (`https://dph.georgia.gov/media/92616/download`).                                                                                                                                                                              |
| 4   | Site-specific setbacks?                 | _"I don't know if I understand this question… I wouldn't have that info."_ **Unanswered, and the question needs rewording rather than resending.**                                                                                                                        |
| 5   | Well path without public water?         | **"Limited to a maximum design flow of 380 gallons."**                                                                                                                                                                                                                    |
| 6   | Fees, consent, qualified professionals? | **Owner consent is a signature block in the application form.** County **fee schedule attached as a PDF**. Installer and soil-classifier registries on the state site. **"We don't have any info about the lot that would point to adverse conditions for development."** |

**Three things that answer is not.**

- **It is not a clearance.** "No info pointing to adverse conditions" means the
  agency has no file on this lot, which is the same sentence as "no permits or
  soil evaluations." **Absence of a record is not a finding of suitability.**
- **It is not costed.** **The fee schedule PDF was not downloaded** — no
  download tool exists in this session — so **every fee in this process remains
  unknown**, including the level 3 soil survey, which is the expensive item.
- **It is not actionable by DD84 alone.** **Owner consent is in the application
  form, and DD84 does not own the parcel.** The seller must sign before any soil
  work happens, which puts the application behind the realty thread (T-53), not
  beside it.

**Worth recording as a positive precedent:** the owner's 10-13 enquiry closed
with _"Do not initiate a chargeable application, site visit, testing, or other
work; please quote any fee first."_ **He got six substantive answers and a fee
schedule without incurring a charge.** That is cost control doing its job, and
it is the behaviour to repeat on the soil survey.

## Existing customers

| Customer                    | Thread                                          | Age                                                         | What happened                                      | Draft ready                                    | Task     |
| --------------------------- | ----------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | -------- |
| **The Challenger customer** | `1a0e402cdcf75731` — 29 messages, **unchanged** | Log sent 2026-10-13T15:39:45Z — **~43 hours, still unread** | **Nothing.** No reply, no read, no price           | **A-18 exists and is wrong** — reject or amend | **T-64** |
| **The C10 customer**        | `1a1082503004a073` — 29 messages, **unchanged** | DD84 spoke last 2026-10-12T20:39Z — **62 hours**            | **Nothing.** Customer waiting on a second wideband | No — correctly                                 | **T-37** |

**Neither job has been priced. Nothing in this window moved either one.**

## New leads

**None.** No contact-form submission, no Reddit notification, no enquiry of any
kind in 24 hours.

**Stated plainly because the two preceding runs both found leads outside their
window**: this window produced none, and **that is a real zero for the window,
not evidence that none exists.** T-66's open question — how many contact-form
submissions arrived before 2026-09-15 and went unanswered — is unchanged and
still uncounted.

## Conflicts found

**1. Nothing was sent. `in:sent newer_than:1d` returned empty.**

This qualifies yesterday's correction rather than reversing it. OL-0044 recorded
that the week's "nothing leaves this mailbox" finding was wrong, because **five
messages went out on 10-13.** True — and **10-14 produced zero.** So the
accurate statement is: **the mailbox had one active day in six, not that sending
has resumed.** The property work moved because of that one day; the customer and
funding backlog did not.

**2. The card-toggling streak broke, and the card is presumably still off.**

**No Wells Fargo alert arrived in this window.** The last recorded state is
**off, 2026-10-14T10:03:17Z.** After ten toggles in the preceding 25 hours,
**twenty-four hours of silence.** **No cause is asserted for either the toggling
or its stopping**, and **the current state was not read from the bank** — only
inferred from the absence of a newer alert, which is weaker evidence and is
labelled as such.

**One correlation, offered without a causal claim.** A **Holley abandoned-cart
email arrived 2026-10-14T16:45:31Z** — _"Your Cart Still Has Items Waiting"_ —
about six hours after the card went off. **A card that is off would fail a
checkout.** Holley is DD84's primary EFI supplier, so a stalled Holley purchase
is operationally relevant. **Whether the two are connected is unknown**, and
abandoned-cart emails are automated marketing that fire without any payment
attempt at all.

**3. A prescreened credit offer that is NOT the T-67 fraud pattern.**

2026-10-14T19:12:20Z, from a `reprisefinancial.com` address: _"you've got
**preliminary approval** for a personal loan through Reprise Financial… You're
almost there! Give us a call."_

**Deliberately not merged into T-67**, and the distinction matters:

|                | T-67's two messages                                        | This one                                                       |
| -------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| Claims         | An **application DD84 never made** was "reviewed"          | **Preliminary approval** — the language of a prescreened offer |
| Call to action | **A link only**                                            | **A phone call**, to a named company                           |
| Sender         | Two **unrelated** domains, same template, 16 minutes apart | One company, its own domain, footnote markers                  |

**This reads as a legitimate prescreened credit solicitation, not a phish** —
and that is a judgement, not a verification. **No link was opened and no enquiry
made.** It is recorded because **lumping real lender marketing in with fraud
would make T-67 useless**: a fraud task that cries wolf at every lender email is
one the owner stops reading, which is the same defect T-69 just fixed in the
checkout guard.

**4. A credit-score change notice, which matters to the financing work.**
2026-10-14T20:44:54Z, Capital One, flagged IMPORTANT: _"Your credit score has
changed."_ **The direction and the figure were not read** — only the subject.
**It is noted because DD84 is actively pursuing SBA 504 financing** (T-58, T-42)
and a personal credit score is material to a 504 application. **No inference
about the direction is drawn.**

## Drafts prepared — NOT SENT

**None written this run.** The one message this window called for — a reply to
the DPH specialist, rewording question 4 and asking which fee lines apply — **is
a technical and financial determination with a cost attached**, and the owner
has already shown he handles that correspondence better than a draft would.

### The backlog, unchanged for a fifth consecutive run

| Pending         | What                                     | Waiting                                       |
| --------------- | ---------------------------------------- | --------------------------------------------- |
| **A-15**        | GDOT District 1 reply, written in full   | **9 days**                                    |
| **A-15**        | Georgia SBDC reschedule, written in full | **9 days**                                    |
| **T-58 / T-42** | Georgia CDC (SBA 504) draft              | **16 days unsent**                            |
| **A-18**        | The Challenger chase                     | **Superseded. Should be rejected, not sent.** |
| **T-53**        | Realty follow-up draft                   | **Moot** — the agent replied 10-13            |

**Gmail drafts total: 15.** Not one added, sent or deleted since 2026-10-12.
**Five of the fifteen are still addressed to likely loan fraud** (T-42, T-67)
and should be **deleted**.

## No action, with reason

34 threads, grouped.

- **CarGurus ×5, NFL, JEGS, Texas Speed, Alibaba-class vendor mail, Amazon
  Business ×2, Pinterest ×3, TJ Maxx, JD Sports, Hertz, Klarna, Kalshi,
  TeamViewer, NXP, Lindy, dotcards, a coaching solicitation, a bank survey, a
  physiotherapy promotion** — marketing and newsletters. **JEGS and Texas Speed
  are on-topic for DD84's trade and are still promotions, not actions.**
- **Holley abandoned cart** — counted once as a finding above.
- **Chime credit-building promotion** — Chime marketing. Relevant only in that
  it is a fifth payment channel still absent from the registry (T-55).
- **Google Play terms-of-service update**, effective 2026-11-05 — **noted
  against T-40**, the Google Play developer account at risk of closure. No
  action in this window.
- **One personal family-account notice.** Not business. **Deliberately not
  described here** — it concerns a minor, and §5's rule on personal detail in a
  public repository applies with more force, not less, because no approval
  covers this category at all.

## Proposed labels (not applied)

**No label applied; no thread moved, archived, trashed or reported.** Class B,
no taxonomy approval.

| Thread                 | Proposed                  | Why                                                           |
| ---------------------- | ------------------------- | ------------------------------------------------------------- |
| The DPH reply          | `[Superhuman]/AI/Respond` | **Unread second message; the critical path for the property** |
| The Challenger datalog | `[Superhuman]/AI/Respond` | **Unread for 43 hours on a live job**                         |
| The Reprise offer      | `[Superhuman]/Finance`    | A real solicitation to decide on, not a threat to report      |
| The Capital One notice | `[Superhuman]/Finance`    | Material to the 504 application                               |

## Not checked this run

| Source                                     | Reason                                                                                                                                                                                                    |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Table 13.J of the state on-site manual** | **A PDF on `dph.georgia.gov`; egress is blocked** (T-59). **So whether 380 gpd supports the proposed facility is unknown** — the central question this run opened.                                        |
| **The county fee schedule PDF**            | **Attached to the DPH reply and not downloaded** — no download tool. **Every fee in the septic process is unknown.**                                                                                      |
| **The realty agent's 5.6 MB attachment**   | Not downloaded. Unread since 2026-10-13T23:11Z (T-53).                                                                                                                                                    |
| **The Challenger datalog**                 | 2.8 MB, not downloaded. **The car's state is still unknown.**                                                                                                                                             |
| **Piedmont Water's current position**      | The "at capacity" statement is from **2026-09-18**, four weeks old, and the owner's 10-13 request for a written update has **not been answered**. **The 380 gpd ceiling depends on it still being true.** |
| **PayPal, Stripe, bookipay, Square**       | Re-auth required / no server / no API / no connector. **Both live jobs' billing status still unknown.**                                                                                                   |
| **Square's actual setting**                | No connector. **What happened today is unknown.**                                                                                                                                                         |
| **The bank**                               | No connector. The card's current state is **inferred from silence**, not read.                                                                                                                            |
| **Reddit**                                 | No notifications this window and reddit.com is egress-blocked. **Whether T-60's verification was done is still unknown, ~4 days from the deadline.**                                                      |
| **Mail older than 24 hours**               | Out of window. **~20,700 unread remain unassessed.**                                                                                                                                                      |

---

**Class A held.** Nothing sent, forwarded or replied to. No label applied, no
thread moved, archived, trashed or reported. **No draft created, edited, sent or
deleted — the count is unchanged at 15.** No link in any solicitation opened. No
calendar write, no customer contacted, no price quoted, no payment action, no
Square or bank action. **No scheduled task created, changed or fired** — see
T-69. `docs/growth/` untouched. **No customer name, email address or phone
number written to this repository**: the DPH specialist and his colleague are
identified by role and agency, the customers and counterparties by Gmail thread
ID, and **the owner's own phone number, which appears in his signature on that
thread, was read and deliberately left out.**
