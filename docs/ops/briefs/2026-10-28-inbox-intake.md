# DD84 inbox intake — 2026-10-28

Run at **2026-10-28T10:21–10:45Z**, Wednesday. Window: **since OL-0069,
2026-10-27T10:20Z → 2026-10-28T10:20Z** (24 hours).

Accounts scanned: **Gmail**. Not reached: **Superhuman Mail** (needs
re-authentication); **Stripe, PayPal, bookipay, Square** (no connector — T-36).

Threads reviewed: **28 of an estimated 28**, non-promotional. Actionable: **5**.
No-action: **23**. **New leads: zero** — no customer wrote to DD84 in this
window.

## Urgent — read first

### 1. The website's front door renewed on a backup card

**2026-10-28T09:52:22Z, 0.5 hours ago, unread.** A Google Play receipt:
**"Backup payment method used on Oct 28, 2026 for Manus AI"** — _"Your
subscription … has renewed. **We weren't able to use the [primary card]
associated with your** [subscription]"_. **Card digits withheld under §5.**

**Why this is the first item and not an administrative note.** The standing
owner decision of **2026-08-13** is that **`dd84tuning.com` is a Manus site and
is the front door**, with Shopify a checkout behind it. **So a Manus
subscription is not a software expense — it is the thing the funnel arrives
through.**

**The primary card failed and a backup absorbed it this cycle.** **If the backup
fails next cycle, the front door is what lapses.** **The amount is not in the
receipt and is not estimated. T-103.**

**This is the fifth distinct payment instrument to fail or be locked in two
weeks** — the business debit card (declined twice, "card is off"), a second
debit card (toggled constantly), a PayPal-branded card (locked 10-26), a PayPal
electronic transfer (declined by the bank 10-20), and now **this card refused
for a renewal.** **T-71's "two payments declined" has been wrong for a week in
the same direction.**

### 2. The card toggling is programmatic, and that changes what it means

Four notices arrived in 61 minutes:

| When                     | Card state                 |
| ------------------------ | -------------------------- |
| **2026-10-27T22:53:33Z** | **on**                     |
| **2026-10-27T22:54:33Z** | **off** — 60 seconds later |
| **2026-10-27T23:53:46Z** | **on**                     |
| **2026-10-27T23:54:47Z** | **off** — 61 seconds later |

**That is a 60-second window, opened twice, exactly an hour apart, with 13
seconds of drift.** **A person does not do that.** Two one-minute windows an
hour apart to the second is a schedule, not a decision.

**What is established:** the toggling is **automated or scripted**, not manual
cash management. **The hourly regularity and the 60-second width are the
evidence.**

**What is not, and is not asserted:** _why._ A 60-second window in which a card
works is **consistent with letting one specific charge through while blocking
everything else** — but **nothing in the mail says what the window was for**,
and **intent is not read off a notification log.** It is equally consistent with
a tool misbehaving.

**Why it matters either way.** For two weeks this register has reported the
toggling as erratic and implied a human was doing it — **"someone controlling
which charges land", OL-0065.** **If a schedule is doing it, then every payment
that failed outside those windows failed for a mechanical reason**, including
**three Shopify bills at 48-hour intervals** and quite possibly the Manus
renewal above. **That is a single cause behind five separate failures, and it is
testable.** **T-104**, cross-referenced to T-71.

## New leads

**None.** Seventh consecutive run with no new enquiry.

| Lead              | Contact | Vehicle | Requested | Source | Task |
| ----------------- | ------- | ------- | --------- | ------ | ---- |
| _(none this run)_ | —       | —       | —         | —      | —    |

## Existing customers needing a reply

**Read state could not be re-verified this run — see Conflicts. Ages are
computed from stored timestamps; read/unread is carried forward and labelled.**

| Customer                     | Thread             | Age        | State                                                          | Task     |
| ---------------------------- | ------------------ | ---------- | -------------------------------------------------------------- | -------- |
| **The order #1001 customer** | `1a177d7b095ee674` | **1.57d**  | His datalog was unread at 14.3h yesterday. **Not re-verified** | **T-91** |
| **The Challenger customer**  | `1a0e402cdcf75731` | **14.78d** | Log unread. **Not re-verified**                                | **T-64** |
| **The C10 customer**         | `1a1082503004a073` | **15.57d** | DD84 spoke last; waiting is correct                            | **T-37** |
| **The Sunday enquirer**      | `1a174388c7b0c461` | **2.68d**  | **Draft ready in A-23, unsent**                                | **T-95** |
| **The $450 payer**           | unknown            | **6.5d**   | Unattributed, unacknowledged                                   | **T-88** |
| **The $700 payer**           | unknown            | **3.5d**   | Unattributed, unacknowledged                                   | **T-92** |
| The supercharger supplier    | `1a0dd710e6d59123` | **22.96d** | Chased twice                                                   | **T-82** |

## Drafts prepared — NOT SENT

**None this run.**

**Nothing new arrived that wants a reply.** The five messages already drafted
and waiting — A-20 (three), A-22 (one), A-23 (one) — **cover every person on the
list above who can be written to.** The two who cannot are **the $450 and $700
payers, because nobody knows what either payment bought**; that is unchanged
from 10-23 and remains two sentences from the owner.

**A seventh day with no new draft is not idleness** — it is the drafts queue
being full and the gate being shut.

## Conflicts found

**1. T-102 step 1 — the defect persists, and it is not transient.**

**`THREAD_VIEW_METADATA_ONLY` again returned no `date` and no `labelIds`**, for
all 28 entries, on the run the task scheduled to test it. **Yesterday's
observation was not a one-off.** `get_thread` returned both correctly for all
five threads fetched.

**The conclusion T-102 asked for:** **the intake's ageing must come from
`get_thread` from now on**, and **the routine costs more per run** — five
individual fetches today to age five threads, where one list call used to do it.
**T-102 moves from In Progress to a standing constraint**, and every brief from
here states which threads were actually fetched.

**2. For two weeks this register implied a person was toggling the card.** The
hourly 60-second windows say otherwise. **Controlling source: the timestamps.**
**OL-0065's phrasing — "consistent with someone controlling which charges land"
— was hedged correctly on intent but assumed a human agent.** **Corrected: the
mechanism is a schedule; the purpose is still unknown.**

**3. The checkout test is still stale** — 28 expected, **62 tracked**, no
`src/`, no `package.json`. **Tenth run reporting it. T-85 step 3.**

## No action, with reason

| Source                                                            | Why no action                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Square: terms-of-service update**                               | Administrative. **Noted only because the register lists Square as having no connector, and it is clearly an active account**                                                                                                                         |
| **A child-account notice**                                        | **Personal, concerning a minor. §5 — no detail recorded**                                                                                                                                                                                            |
| **Cold outreach replying into a nine-day-old thread**             | An Amazon-scaling solicitation sent as a reply into an existing thread, which is how it reached the non-promotional sweep. **Address withheld — §5, and A-17 is pending.** Same shape as the five T-42 flags as likely fraud. **No reply, no draft** |
| Wells Fargo equity price alert                                    | Personal brokerage, not business cash                                                                                                                                                                                                                |
| D&B, Nav, Upgrade — credit and funding marketing                  | **Noted as a class only**: solicitations keep arriving while five instruments are failing, and **acting on one badly is the risk T-42 exists for**                                                                                                   |
| Alibaba ×3, CarGurus ×7, NFL, Kalshi, NXP, ideabrowser, Lehigh    | Newsletters and saved-search traffic                                                                                                                                                                                                                 |
| An auction house, with the business address in to, cc **and** bcc | Marketing. **The triple-addressing is a sender-side defect, not a finding about DD84**                                                                                                                                                               |

## Proposed labels (not applied)

**Still Class B with no standing approval. None applied.**

`cash/card-state` · **`infra/front-door` (new — a Manus subscription failing is
not the same class of event as a software receipt, and nothing distinguishes
them today)** · `cash/declined` · `platform/billing-failed` · `order/storefront`
· `site/form-test` · `lead/new` · `channel/application` · `compliance/state` ·
`land/colbert` · `vendor/promotional` · `personal/family`

## Not checked this run

- **Read state for all 28 threads** — the list payload omitted it. **Five
  threads were fetched individually; the rest were not aged and are not
  estimated.**
- **The Manus subscription amount** — not in the receipt. **Not estimated.**
  T-103.
- **What the 60-second card windows were for** — **not knowable from mail.**
  T-104 names the test that would settle it.
- **Whether the Shopify bill failed a fourth time** — no billing notice in this
  window. **Absence of a notice is not evidence the charge succeeded**; the
  three known failures were 48 hours apart and the next would be due today.
- **Superhuman Mail, Stripe, PayPal, bookipay, Square** — unreachable, so
  **neither Zelle payment is reconciled and the Manus charge cannot be seen from
  the paying side.**
- **Google Calendar and Drive** — not re-read; no notification suggested a
  change. **The 2026-10-27 position was an empty diary through 2026-11-03.**
