# DD84 inbox intake — 2026-11-03

Run at **2026-11-03T10:21Z**, Tuesday. Window: **since OL-0079,
2026-11-02T10:20Z → 2026-11-03T10:20Z** (24 hours).

> **SKELETON COMMITTED BEFORE GATHERING** at **`c0bc6cb`** — OL-0050's repair,
> nineteenth application.

Accounts scanned: **Gmail**. Not reached: **Superhuman Mail** (needs
re-authentication); **Stripe, bookipay, Square** (no connector — T-36).
**PayPal's connector still needs re-authentication; PayPal's own mail is
readable and is again this run's most useful evidence.**

**T-102 is Accepted Risk**, so the thread list supplies neither dates nor read
state. **Every age and read/unread claim comes from `get_thread` or
`get_message` on that item** — **eleven fetched individually.**

**A-19 is in force.** Shape plus thread ID, never a cash figure. **Revenue and
supplier invoices are reported in full under A-13.** **T-116:** the end time is
this file's commit.

Threads reviewed: **35 of an estimated 35**, non-promotional, plus a 25-thread
narrowed sweep for person-to-person mail. Actionable: **9**. **New leads: zero —
tenth consecutive run**, and **the Reddit prospect has not replied in 4.53
days.**

## Urgent — read first

### 1. The seventh subscription failure landed inside this window, and it falsifies a task this register opened on Friday

**T-119 was opened on 2026-10-30 on the premise that every subscription attempt
lands between 12:02Z and 12:39Z, so every routine fires before the band and the
failure is always reported about 24 hours late.** **The first run able to test
that has falsified it.**

**The seventh attempt failed at 2026-11-03T00:19:33Z — twelve hours outside the
band — and this run saw it the same morning.**

| Attempt | Date           | Time observed       |
| ------- | -------------- | ------------------- |
| 1st–6th | Oct 22 – Nov 1 | **12:02Z – 12:39Z** |
| **7th** | **Nov 3**      | **00:19:33Z**       |

**So the band was a six-point coincidence, not a schedule, and T-119's premise
is wrong.** **The task is closed as No Action with the evidence**, because there
is no defect of the shape it describes — **the attempts vary, and this one
happened to fall where a routine could see it.**

**The pattern behind the pattern is worth naming once.** **This is the second
time in four days that this register built a schedule out of six timestamps and
had the seventh break it** — the first was the card-toggling "60-second windows,
exactly an hour apart," which eleven dated notices then demolished. **Six points
are enough to see a shape and not enough to call it a schedule**, and this
register has now made that mistake twice in a week. **Recorded as a habit to
watch, not as a new task.**

**What is unchanged and getting worse.** **Seven attempts, seven failures,
against the same invoice, whose billing cycle still reads OCT 22 — twelve days
unpaid.** **Next attempt 2026-11-05.** **PayPal is named as the failed primary
method for the fourth notice running.** **Amount withheld under A-19; thread
`1a19ec68d58edba1`.**

**And the rolling-label defect persists exactly as described yesterday**: this
notice's timeline reads Oct 28 · Oct 30 · Nov 1 · **"Nov 3 — 4th payment
attempt."** **It is the seventh. The label is a four-item window.**

### 2. TikTok Shop moved, and it was the owner who moved it

**T-100 has been Awaiting Owner since 2026-10-26 for one missing
proof-of-address document. On 2026-11-02 the documents went in.**

| When                     | What                                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| **2026-11-02T12:28:51Z** | **"We've Received Your Documents"** — _"will review it shortly… expect an update within **48-72 hours**"_ |
| 2026-11-02T12:57:52Z     | The same acknowledgement again                                                                            |
| **2026-11-02T13:03:28Z** | **"You have successfully installed Printify from App & Service Store"**                                   |
| 2026-11-02T13:20:49Z     | The same install confirmation again                                                                       |

**So a decision is due between 2026-11-04T12:28Z and 2026-11-05T12:28Z.**
**T-100 moves from Awaiting Owner to In Verification** — **there is nothing left
for the owner to do and nothing for an agent to do but wait.**

**The Printify install is the more interesting half.** **`ventures.md` records
Printify as DD84's print-on-demand merchandise supplier at $18.77–$64.68.**
**Connecting it to TikTok Shop means this channel is being set up to sell
merchandise, not tuning services** — which is a different proposition from the
storefront, where **the only sale ever made was a $550 service.** **Recorded as
a channel fact, not evaluated**: whether merchandise is the right thing to put
on TikTok is a growth question and **this is Torque's record, not Rev's.**

**Still unread, and both are owner actions reported as such, not as agent
work.**

### 3. A loan application exists that this register has no record of

**2026-11-02T15:39:23Z, flagged important, from a consumer lender's do-not-reply
address:** _"Reprise Financial has important information regarding your **recent
application**. Please click on the link to review the information."_ **The body
contains nothing else — just a link to a third-party document-delivery
platform.** **The link is withheld: it carries an opaque object identifier tied
to one person's application.**

**What is established:** **a lender says DD84's owner has a recent application
with them, and a decision document is waiting behind a link.** **Nothing in this
register records any loan application, to anyone, ever.**

**What is not established and is not asserted:** whether the application is in
the business's name or the owner's own, what it is for, what amount, or what the
decision is. **The greeting uses a personal name and the sender is a consumer
lender, which points personal — and that is an inference, not a finding.**

**On the email's shape, stated both ways because it matters.** **A one-line body
with a "click to view" link to an unfamiliar domain is the exact pattern
credential phishing uses**, and this inbox already holds an unread
credential-harvesting phish (**T-52, now 24.99 days**). **Against that: the
sender domain matches marketing mail from the same company on 2026-11-01 and
2026-11-02, and the link host is a real document-delivery platform used by
genuine lenders.** **On balance more likely genuine than not — and the safe
action is the same either way: go to the lender through a channel you already
trust rather than through the link.**

**Why it belongs in an operations brief at all.** **Yesterday's opportunity scan
ranked an SBA microloan second and explicitly did not recommend it, on the
grounds that debt against this balance sheet is the riskiest thing on the
list.** **If an application is already live, that assessment was written without
a material fact.** **T-126.**

### 4. PayPal worked a third time in three days, while Shopify failed a seventh

| When                     | Payee            | Amount         | Instrument | Outcome       |
| ------------------------ | ---------------- | -------------- | ---------- | ------------- |
| 2026-11-01T04:54:32Z     | Meta Platforms   | **$10.58**     | **PayPal** | **Succeeded** |
| **2026-11-02T19:08:00Z** | **GitHub, Inc.** | **$10.00**     | **PayPal** | **Succeeded** |
| 2026-11-03T00:19:33Z     | Shopify          | withheld, A-19 | **PayPal** | **Failed**    |

**Three successful PayPal payments in three days against seven consecutive
Shopify failures on the same account.** **T-117's correction is now
triple-confirmed: the instrument is not broken, the Shopify billing agreement
is.** **That is the single most actionable item in this register —
re-authorising one billing agreement, not finding a new way to pay.**

## New leads

**None. Tenth consecutive run.**

| Lead              | Contact | Vehicle | Requested | Source | Task |
| ----------------- | ------- | ------- | --------- | ------ | ---- |
| _(none this run)_ | —       | —       | —         | —      | —    |

**A narrowed sweep excluding every automated sender returned 25 threads and not
one was from a person.** All were marketing: a streaming service, a car-rental
programme, two lenders, an ECU manufacturer's Black Friday sale, a 3D-printer
sale, a performance-parts sale, two semiconductor webinars, a coaching
newsletter, and four food and retail promotions. **Run and empty, not assumed.**

**The Reddit prospect approached on 2026-10-29 has not replied in 4.53 days.**
**Nothing is owed to him and no chase is drafted.**

## Existing customers needing a reply

| Who                               | Age                      | State — verified 2026-11-03                                           | Task                  |
| --------------------------------- | ------------------------ | --------------------------------------------------------------------- | --------------------- |
| **The C10 customer**              | **21.57d**               | DD84 spoke last; **waiting is correct**                               | **T-37**              |
| **The supercharger supplier**     | **13.39d**               | **Two replies, both still unread.** **A-22 would chase him**          | **T-105**             |
| **The Sunday enquirer**           | **8.68d**                | **Unread. A-23 is drafted and needs nothing filled in**               | **T-95**              |
| **The order #1001 customer**      | **7.57d**                | His datalog **still unread**; DD84 was paid out on his job 5 days ago | **T-91**              |
| **The Reddit prospect**           | **4.53d**                | **Outbound, no reply.** Nothing owed                                  | **T-111**             |
| **The $450 / $700 / $400 payers** | **12.4d / 9.5d / 4.41d** | **$1,550.00 received, none acknowledged**                             | **T-88, T-92, T-113** |
| **The Challenger customer**       | —                        | Answered 2026-10-29. Waiting on him — and on **T-110**                | **T-64**              |

## Drafts prepared — NOT SENT

**None. Eleventh consecutive run.**

**No customer wrote in 24 hours, so there is nothing new to answer.** **A-22
still must not be sent as drafted** — the supplier's two replies remain unread
at 13.39 and 29.57 days.

**No approval packet raised.** **Eight are queued**, and every finding here is a
correction, a flag, or a question only the owner can answer.

## Conflicts found

**1. T-119's premise is falsified; the task is closed No Action.** **Controlling
source: the 00:19:33Z notice.** **Six timestamps looked like a midday band and
the seventh was twelve hours away from it.** §1.

**2. Second pattern-from-six-points failure in four days.** The card-toggling
"hourly 60-second schedule" was the first. **Recorded as a habit to watch, not a
task.**

**3. Shopify's rolling attempt label persists** — this notice calls the seventh
attempt the "4th". **Counted from the notices: seven.** T-89 unchanged.

**4. A loan application exists that this register has never recorded**, and
**yesterday's scan assessed DD84's appetite for debt without knowing it.
T-126.**

**5. The venture registry records social accounts as `UNKNOWN`, and a Pinterest
notification names DD84's own board.** The subject reads **"Down Dirty 84 |
Remote ECU Tuning & Holley EFI, made the cut."** **That a board of that exact
name exists is strong evidence of a DD84 Pinterest account** — **but a
recommendation email is not proof of ownership, so it is flagged rather than
written into the registry as fact. T-128.**

**6. The other venture's infrastructure is degrading on free tiers, in two
places.** **Vercel: the team has used 75% of its free Fluid Active CPU
allowance, and "if you exceed the included free usage, your projects will be
automatically paused."** **Supabase has already paused `dd84-ai-tuning`.**
**Three Vercel domains are already misconfigured (T-115).** **Nothing was
opened. T-127.**

**7. The checkout test is still stale** — 28 expected, **72 tracked**, no
`src/`, no `package.json`, `HEAD` equal to origin at `f54201d` when this run
started. **Twentieth run reporting it. T-85 step 3.**

## No action, with reason

| Source                                                                                | Why no action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Four access events on one Monday, and they hang together**                          | **Stripe "unrecognized device" 14:28:25Z — an Android phone, Atlanta, 9:28 local; Vercel "new sign-in" 20:15:04Z, Atlanta; a Supabase OAuth approval; and the Plaid grant of 10-30.** **All four are consistent with the owner working through his own platforms on a Monday morning** — the same morning he filed the TikTok documents. **IP addresses and the Stripe dispute link are withheld.** **No task: each has an innocent explanation and together they have one explanation.** **The one access-shaped item in this inbox with no innocent explanation is still T-52, the unread Meta phish** |
| **Two GitHub CI failures on `downdirty84-ai-tuning`**                                 | A pull request titled **"Windows calibration studio — Repair checkout readiness and profile confirmation integrity"** failed twice. **A DD84 product under active development that this register knows nothing about.** Folded into **T-101** and **T-122**; **nothing opened**                                                                                                                                                                                                                                                                                                                          |
| **TikTok's rejection notices, a third time**                                          | The same proof-of-address pair re-sent, **and now overtaken by the documents actually being submitted.** §2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **A privacy notice from a bank and one from a lender**                                | Annual disclosures. **No figures, no action**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Two notices about minors' devices**                                                 | **Personal. §5 — no names, devices or apps recorded**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **A consumer-lending cluster** — two from one lender, one rate-shopping mail          | **The owner's personal finance.** **Recorded only as the context for T-126**; no figures, no detail                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **A website-platform update mail**                                                    | **Noted only because the register does not know what this platform hosts** — the front door is Manus by the 2026-08-13 decision. **No task; one line so a future run recognises the sender**                                                                                                                                                                                                                                                                                                                                                                                                             |
| CarGurus ×6, Alibaba ×3, NFL ×2, a forum digest, and ~15 retail and vendor promotions | Newsletters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Proposed labels (not applied)

**Still Class B with no standing approval. None applied.**

`channel/tiktok` **(new — a decision is due within 72 hours and nothing
distinguishes it from vendor mail)** · `finance/application` **(new — T-126)** ·
`infra/free-tier` **(new — T-127)** · `access/signin` **(new — four events in
one day and no way to group them)** · `platform/billing-failed` ·
`cash/card-state` · `cost/inputs` · `spend/advertising` · `lead/outbound` ·
`compliance/state` · `vendor/promotional` · `personal/family`

## Not checked this run

- **Whether the eighth subscription attempt on 2026-11-05 succeeds.** **The band
  theory is dead, so no prediction is made about when it will be visible.**
- **What the Reprise Financial decision says.** **Behind a link this register
  will not follow and would not be able to reach.** **T-126 — the owner reads it
  through a channel he trusts.**
- **Whether the Pinterest board is DD84's.** **A recommendation email is not
  proof of ownership. T-128.**
- **The Vercel usage detail and the Supabase project** — **nothing opened**, per
  the standing treatment of the other venture's infrastructure.
- **The `downdirty84-ai-tuning` CI failures** — **not opened.** T-101.
- **Both supplier replies** — still unopened by anyone, including this run.
- **Dates and read state for the threads not individually fetched** — the list
  payload omits both (T-102); **eleven were fetched.** **Not estimated.**
- **Superhuman Mail, Stripe, bookipay, Square** — unreachable. **The three Zelle
  payments remain unreconciled against any payment system.**
- **Google Calendar and Drive** — not re-read by this routine. **The 2026-11-02
  position was an empty diary through 2026-11-10.**
