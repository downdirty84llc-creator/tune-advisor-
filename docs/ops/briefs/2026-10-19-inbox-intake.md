# DD84 inbox intake — 2026-10-19

Run at **2026-10-19T10:21–10:45Z**. Window: **2026-10-16T10:58Z →
2026-10-19T10:21Z — 71h23m**, the first intake to cover a weekend. Accounts
scanned: **Gmail `downdirty84llc@gmail.com`**. Not reached: **Superhuman Mail**,
**PayPal connector**, **Stripe**, **bookipay**, **Square**, **Canva**.

**Threads reviewed: 109** across three pages. **Actionable: 17. No-action: 92.**

**Checkout, per `docs/ops/README.md` contract item 0** — tip **`ea1b213`**,
`HEAD` equal to `origin/claude/claude-md-docs-cqvhy6`, **no `src/` directory and
no `package.json`.** Both markers absent. **45 tracked files, working tree
clean.**

## Urgent — read first

**1. A customer asked whether the business is still open, and nobody answered.**
**2026-10-17T02:18:04Z**, thread `1a147a736841eaed`, still **unread after ~56
hours**: _"is this store still taking orders or temporary closed?"_ That is the
whole message. **The question a prospect asks before they give up.** → **T-72**.
A draft is below; **sending is Class C.**

**2. The bank sent a second alert, and the picture has changed.**
**2026-10-17T21:55:25Z**, thread `1a14bdcd406bdaf2`, **unread**: the same _"Your
balance is at or below zero"_ alert, now reporting the available balance **at
zero rather than below it**, as of **10/17 at 17:55 Eastern**. **So the account
is no longer overdrawn** — and **what moved it is unknown.** No bank connector,
no transaction list. **T-71's title says "overdrawn" and is now superseded by
its own dated correction**, on this register's rule that the later detail
controls.

**Neither figure is written here.** Both alerts carry a number; neither is
recorded, and neither set of last-four digits is. **A-19 is still unanswered and
this is now its second instance.**

**3. Two more declined charges, and three dated outflows inside nine days.**

| What                                 | When                     | Amount                                       | Status                                                                    |
| ------------------------------------ | ------------------------ | -------------------------------------------- | ------------------------------------------------------------------------- |
| **Ocoya**, billed through Stripe     | 2026-10-16T12:26:37Z     | **$29.00**                                   | **Declined** — _"We weren't able to charge the credit card you provided"_ |
| **DAZN**                             | 2026-10-16T16:00:00Z     | Not stated                                   | **Declined** — _"Your last payment declined"_                             |
| **Capital One AutoPay**              | **Scheduled 2026-10-21** | **Not stated**                               | Pending — 2 days out                                                      |
| **ChatGPT Business**, DD84 workspace | **Renews 2026-10-24**    | **Not stated** — 1 Premium + 1 Standard seat | Pending — 5 days out                                                      |
| **Webador** annual invoice           | Date unread              | **Not stated**                               | Pending — **T-46**, still unopened                                        |

**This is the first time this record can state a forward outflow calendar, and
it is the one the cash review was supposed to produce.** → **T-73**. **Three of
the five amounts are unknown and none is estimated.**

## New leads

| Lead                                   | Contact                                                              | Vehicle / engine | Requested                                                    | Source                                                                                                                                                         | Urgency                                                  | Missing info                                                                                                                   | Task     |
| -------------------------------------- | -------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- |
| **The store enquirer** — no name given | Thread `1a147a736841eaed`; **the address is not recorded here** (§5) | **Not stated**   | Whether the store is **taking orders or temporarily closed** | **Unknown.** Subject reads _"Follow-up with Downdirty84llc"_, which suggests an automated follow-up from a storefront or marketplace rather than a typed email | **High** — a buying-intent question, unanswered 56 hours | **Everything**: name, vehicle, engine, transmission, modifications, location, which service. **One sentence is all there is.** | **T-72** |

**Not merged with T-65.** That task concerns a Shopify customer account created
2026-10-07 behind a masking alias. **This enquiry arrived by direct email on a
different route and the identities are not verified as the same person.** Spec
§9: merge only on verified identity. **Two routes, two records, until something
proves otherwise** — and the fact that DD84 now has **three unwatched inbound
routes** (this one, the contact form in T-66, the Shopify account in T-65) is
itself the finding.

## Existing customers needing a reply

| Customer                    | Thread | Age                                                           | What they asked                                      | Draft ready                                           | Task     |
| --------------------------- | ------ | ------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------- | -------- |
| **The Challenger customer** | T-64   | **Datalog sent 2026-10-13T15:39:45Z — now ~139 hours unread** | Nothing new. He is waiting on the file being opened. | **No** — nothing can be drafted until the log is read | **T-64** |
| **The C10 customer**        | T-37   | **DD84 spoke last 2026-10-12 — ~7 days**                      | Nothing new                                          | **No**                                                | **T-37** |

**Neither live job moved, and that was checked deliberately rather than inferred
from the window.** A targeted four-day sweep on vehicle and tuning terms
(`challenger OR camaro OR silverado OR c10 OR datalog OR tune OR dyno OR ecu OR pcm OR hptuners`)
returned **eleven threads, every one of them a vehicle-listing alert or a
parts-supplier promotion. No customer mail, no new tuning enquiry.** **A real
zero for the window.**

## Drafts prepared — NOT SENT

### Draft 1 — reply to the store enquirer (T-72)

**Recipient:** the sender of thread `1a147a736841eaed` · **Subject:**
`Re: Follow-up with Downdirty84llc` **Where it lives:** **this file only.** No
draft was created in the mail account.

> Thanks for reaching out — Down Dirty 84 is open and taking work.
>
> So I can point you at the right thing rather than guess: are you after a
> tuning or calibration service for a specific vehicle, or one of the digital
> products?
>
> If it's a vehicle, the details I need are the year, make and model, the engine
> and transmission, any modifications already done, and roughly where you are.
> If it's a digital product, just tell me which one and I'll confirm it's ready
> to download.
>
> Either way I'll come back to you with exactly what's involved and what it
> costs.
>
> Mark Down Dirty 84 LLC

**What it commits DD84 to:** that the business is operating and will reply with
scope and price. **It quotes no price, promises no turnaround, and names no
date** — there is nothing in the catalogue that can be priced from one sentence,
and the calendar is empty, so any turnaround would be invented.

**APPROVAL REQUIRED BEFORE SENDING (Class C).**

**And read the conflict below before approving it** — the line _"open and taking
work"_ is the one claim in the draft that no system here can confirm.

## Conflicts found

**1. "Taking orders" cannot be verified from any reachable system, and the draft
asserts it.**

- **`docs/agents/ventures.md`** describes a live storefront: **50 active
  products, $19.99–$650**, with Stripe products live.
- **Shopify, read 2026-10-19T10:38Z: `0` orders, `totalCount: 0`** — all-time,
  confirmed on Friday across a 365-day window as well.
- **Judge.me, 2026-10-16T12:17:33Z: _"We see you've published a new theme for
  Down Dirty 84 LLC"_** — **the storefront's theme changed three days ago** and
  the review widgets were not carried over to it.
- **`/dd84-site-monitor` has never run.** No page, form, product or payment link
  has been checked.

**Recommended controlling source: none of them.** The honest position is that
**nobody knows whether a stranger can complete a purchase on dd84tuning.com
today**, and a theme published three days ago is the most likely moment for that
to have broken. **Nothing was changed.** → **T-75** for the theme, and **the
site monitor is the cheapest way to close this**, before the draft goes out
asserting the store works.

**2. A third party says DD84 signed up for Melio; the message does not hold
together.** **2026-10-16T15:41:35Z**, thread `1a1456066392fc38`: _"I noticed you
recently signed up for Melio"_, offering a call. **The sender address is at
`xero.com`, the signature says a different first name from the address, and the
booking link carries a third variant.** Melio is a real bill-pay provider and
does power Xero's US bill pay, so this may be ordinary sloppy sales templating —
**but a name mismatch inside a message about a payment account is not something
to resolve by clicking the link in it.** **No link was opened and no URL is
recorded here.** → **T-74**. **Whether a Melio account exists is a question for
the owner's own records**, and it bears directly on **T-36**: the channel count
may be **seven**, not six.

## No action, with reason

- **Four account-access notices inside four hours on 10-16** — a DSers password
  reset (11:50Z), two GitHub device-verification codes (14:50Z, 14:51Z), and an
  OpenAI sign-in reported from **Chicago** (10:58Z). **Each is individually
  ordinary and the cluster is not.** → **T-76**. **No code is recorded here.**
- **Render, `dd84-api`, "Exited with status 1"** ×3 — 10-16T13:57:28Z,
  10-17T14:19:54Z, 10-18T14:24:56Z. **Already T-33**; recorded there as a dated
  addendum. **The service has now failed on four separate days and `ventures.md`
  still does not mention it.**
- **PayPal: $17.00 USD paid to Meta Platforms, Inc.**, 10-17, order ID captured
  in thread `1a14c9016e13ace7`. **An outflow captured by email because the
  connector cannot be read** — the T-36 pattern again.
- **DAZN refund chase — the owner is driving it himself.** He sent **two
  messages** in this window (10-16T17:54:15Z and 10-17T12:57:38Z), asking for
  full cancellation and a refund of **$49.99** charged 2026-09-16, and
  escalating to a supervisor when the first reply declined. **DD84's only
  inbound money claim in the window, and no agent action is needed.** Folded
  into **T-73**.
- **PayPal Cashback World Mastercard statement ready** (10-17T02:19:36Z) and **a
  PayPal Mastercard digital letter** (10-16T23:16:41Z) — **two unread financial
  documents**; neither opened, neither summarised.
- **Google Business Profile: "add WhatsApp to your Business Profile"**
  (10-16T18:17:09Z) — relates to **T-47**; same caution as Friday, confirming
  details on the wrong one of two profiles entrenches the duplicate.
- **Fidelity Investments marketing** (10-16T19:40:11Z) and **two Wells Fargo
  Advisors price alerts** (10-15, 10-16) — **a second and third financial
  institution on this mailbox that `ventures.md` has never carried.** Named,
  with **nothing asserted about holdings, balances, or whether either is a
  business account.**
- **A loan solicitation from a consumer-lending marketplace** (10-16T17:44:42Z)
  and **two small-business card offers** (10-16, 10-17). **Recorded only because
  the cash context is no longer neutral.** No link opened.
- **A TestFlight invitation** to test an advertising-tracker app, sent twice
  (10-17T17:28:59Z, 17:48:06Z). The inviting company name reads like a keyword
  list. **Not installed, not opened.**
- **Vehicle-listing alerts** ×15, **retail and food promotions** ×~45,
  **3D-printing and laser vendor onboarding** ×8 (three separate vendors in one
  weekend), **NFL and prediction-market newsletters** ×4, **a Dropbox dormancy
  notice**, **a Zapier offer**, **a TikTok Shop pitch**, **an Amazon Business
  tax-deadline pitch**, **a Matco survey**, **a Lindy product update**, **a
  Stripe Treasury promotion**.
- **Third-party and personal mail** — a repair-shop follow-up addressed to
  someone who is not the account holder, two restaurant order confirmations, and
  **several Google Family Link notices concerning minors. Not business material;
  none is named or described.**

## Proposed labels (not applied)

`cash/alerts` · `cash/outflow-scheduled` · `lead/unqualified` ·
`security/account-access` · `ops/render` · `vendor/subscription` ·
`no-action/promotional`

**Still Class B and still unauthorised** — proposed for the fourth consecutive
run.

## Not checked this run

| Source                                                                                                                      | Reason                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **The bank**                                                                                                                | **No connector.** Two alerts, 51 hours apart, are the entire evidence base. **How the account reached zero from below it is unknown.** |
| **Stripe**                                                                                                                  | **No MCP server.** Ironically a Stripe _failure_ notice was readable in mail while the account itself is not.                          |
| **PayPal connector**                                                                                                        | Re-auth required since 2026-10-09. **Its mail works.**                                                                                 |
| **bookipay, Square, Chime**                                                                                                 | No API / no connectors. **Square's offline-payment setting is still on and its account status still unestablished** (T-61).            |
| **Superhuman Mail**                                                                                                         | Needs authorisation. **A second mailbox has never been scanned by any run.**                                                           |
| **Google Drive**                                                                                                            | Not read this run. No new attachment was referenced by any thread in the window.                                                       |
| **The two unread PayPal Mastercard documents; the Webador invoice; T-53's realty attachment; Table 13.J; the fee schedule** | **No download tool, and egress is blocked for the state PDFs** (T-59).                                                                 |
| **Mail older than the window**                                                                                              | **~20,700 unread remain unassessed.**                                                                                                  |

---

**Class A held.** Nothing sent, forwarded or replied to. **No draft created,
edited or deleted in the mail account** — drafts stand at **15**, unchanged for
a seventh run, **five of them still addressed to likely loan fraud** (T-42). No
label applied, no thread moved, archived, trashed or reported. No calendar
write. No charge, refund, invoice, payout or fulfilment action. **No bank, card,
Square or payment action of any kind.** No scheduled task created, changed or
fired. `docs/growth/` untouched.

**§5 held.** **Neither balance figure, neither set of last-four digits, no
verification code and no one-time password is written here.** **No customer
name, email address or phone number** — the enquirer is a thread ID, customers
are task IDs, the state officials are roles. **No minor is named or described.**
**No solicitation URL is recorded.**
