# DD84 inbox intake — 2026-10-22

Run at **2026-10-22T10:20–10:40Z**. Window: **since OL-0055, 2026-10-21T10:20Z →
2026-10-22T10:20Z** (Gmail `after:2026/10/21`, which overlaps the previous run's
tail by about ten hours — **an overlap is deduplicated against the register, a
gap is not**). Accounts scanned: **Gmail (`downdirty84llc`)**. Not reached:
**Superhuman Mail — needs re-authentication**; **Stripe, PayPal, bookipay,
Square — no reachable connector** (T-36).

Threads reviewed: **58** (50 + 8 across two pages; the estimate said 58 and both
pages were pulled, so the list is complete). Actionable: **7**. No-action:
**51**.

**New leads: zero. No customer wrote to DD84 in this window.** Fifty-eight
threads and not one of them is a person asking about a car. That is the finding
this routine exists to surface, and it is the fourth consecutive run to report
it.

## Urgent — read first

**1. The bank, and a reading that changes what the declines mean.**

Two Wells Fargo notices arrived, and together they say something neither says
alone.

| When                     | What it says                                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| **2026-10-21T17:03:51Z** | **"Your balance is at or below zero."** Available balance **negative**, business checking account     |
| **2026-10-22T02:06:35Z** | **The business debit card "remains off, as you requested in online or mobile banking on 10/07/2026"** |

**The figure and the account digits are withheld.** `CLAUDE.md` §5 forbids
payment details here, and **A-19 — may DD84's cash position be recorded in this
public repository? — is still pending.** The shape is recorded; the number is
not. Six days of runs have now withheld it.

**The second notice may partly explain T-71.** T-71 is "the business bank
account is overdrawn; two payments declined". **A card the owner deliberately
switched off on 2026-10-07 would decline every time it was used** — that is the
card working as instructed, not a funding failure. **This is a hypothesis with
two candidate causes and no evidence separating them**, and it is not a finding:

- the declined payments may have been attempted on **the card that is off**, in
  which case turning it on is the fix and the overdraft is a separate problem;
- or they may have been attempted on **the account**, in which case the
  overdraft is the cause and the card is irrelevant.

**Nothing in the mail says which instrument the declines hit.** Resolving it
needs the decline notices read against the card and account — T-71's step 1, now
with a specific question to ask.

**A third decline landed in the window:** a consumer subscription reported
"access is locked — your payment declined" at 2026-10-21T16:00Z. Recorded as
pattern evidence under T-71, not as a business item.

**2. T-82 is due today and had no draft.** The supercharger supplier has now
chased **twice** and the second chase, **2026-10-21T01:06:06Z, is unread after
33.2 hours.** DD84 last wrote **2026-10-05T11:11:48Z — 407.1 hours, 17.0 days
ago.** A draft is prepared below.

## New leads

**None.** No inbound customer enquiry in the window.

| Lead              | Contact | Vehicle / engine | Requested | Source | Urgency | Missing info | Task |
| ----------------- | ------- | ---------------- | --------- | ------ | ------- | ------------ | ---- |
| _(none this run)_ | —       | —                | —         | —      | —       | —            | —    |

**Four consecutive runs with no new lead.** The register already carries the
reason as a question nobody has answered: `ventures.md` records the channel that
produces DD84's customers as `UNKNOWN`, and **both live jobs have an unknown
origin.** An intake routine cannot generate leads; it can only report that the
top of the funnel is empty, which it now has four times.

## Existing customers needing a reply

| Customer                    | Thread             | Age                           | What they asked                               | Draft ready                     | Task     |
| --------------------------- | ------------------ | ----------------------------- | --------------------------------------------- | ------------------------------- | -------- |
| **The Challenger customer** | `1a0e402cdcf75731` | **210.7h / 8.78d unread**     | Nothing — he sent the log he was asked for    | **Yes, in A-20** (unsent 1 day) | **T-64** |
| **The C10 customer**        | `1a1082503004a073` | **229.7h / 9.57d**, DD84 last | Nothing outstanding; waiting on his checklist | **Yes, in A-20** (unsent 1 day) | **T-37** |
| **The Lexus enquirer**      | `1a0a565f802fc60b` | past the proposed 7-day close | A scope answer                                | **Yes, in A-20** (unsent 1 day) | **T-66** |

**Both live jobs now have a price** — T-37 $349, T-64 $350, raised as **A-21**
this morning. **Neither customer has been told it**, and quoting is Class C.
**A-20 and A-21 together are the whole of what these two threads need.**

**Nothing new arrived on either job's thread in the window.** Verified by the
same query with and without the date filter, because an unverified empty result
is not evidence.

## Drafts prepared — NOT SENT

### Draft 1 — the supercharger supplier (T-82)

- **Recipient** the supplier's new-dealer representative, thread
  `1a0dd710e6d59123`
- **Subject** `Re: Magnuson Reseller Inquiry - Down Dirty 84 LLC`
- **Where it lives** **this file only.** No draft was created in the mail
  account.

> Hi [REP],
>
> Thank you for following up, and I apologise for the long gap — that is on me,
> not on anything you sent.
>
> I have the dealer packet: the Dealer Request/Review form, the dealer policy,
> the UPP pricing policy, the W-9 and the buy-in requirements. The hold-up is
> the buy-in commitment rather than the paperwork, and I would rather tell you
> that plainly than keep going quiet on you.
>
> I will come back to you with a decision by **[DATE]**. If it would help in the
> meantime, two things would let me move faster: whether the initial buy-in can
> be staged across more than one order, and how long the current dealer pricing
> is held once the Dealer Request form is submitted.
>
> Thanks for your patience.
>
> Mark Down Dirty 84 LLC

**`[REP]` is a redaction made here, not in the draft to be sent.** The
representative's name is in the thread and the owner knows it; **this run's own
leak scan caught it in the draft body**, and every prior run has withheld this
supplier's rep name while **A-17 — third-party contact details in a public
repository — is still pending.** Restore the real name when sending.

- **What it commits DD84 to** **A decision by a date the owner fills in.**
  Nothing financial — it accepts no buy-in, no order, no dealer terms, and
  concedes no price. It asks two questions whose answers reduce the commitment
  rather than enlarge it.
- **Stage it advances** Partner / reseller — from unanswered to answered,
  without deciding the buy-in.
- **APPROVAL REQUIRED BEFORE SENDING (Class C).** Packet **A-22**.

**Yesterday's run declined to draft this**, on the grounds that "the answer
depends on the buy-in, which is the owner's call". **That was right about the
buy-in and wrong about the silence, and the two are separable.** A holding reply
that commits nothing financial answers the supplier without pre-empting the
owner; seventeen days of silence on a supplier who has chased twice costs the
relationship whether or not the buy-in is ever agreed. The `[DATE]` bracket is
the same device A-20's first draft uses — the only part only the owner can fill.

**No other draft was prepared this run**, and no draft was created in the mail
account by any run. The account's 15 drafts are all the owner's or earlier
runs'; see below.

## Conflicts found

**1. Pinterest contradicts itself about the same upload.** Two notices,
sixty-one minutes apart, about `.csv` uploads:

| When                     | What it claims                                                            |
| ------------------------ | ------------------------------------------------------------------------- |
| **2026-10-21T11:38:49Z** | "Success! Your .csv file was uploaded" — **"0 Pins were created"**        |
| **2026-10-21T12:39:32Z** | "There was an issue" — **"1 rows uploaded successfully, 11 rows failed"** |
| **2026-10-21T04:14:52Z** | A separate Instagram import — **"18 Pins published, 10 didn't publish"**  |

**A notice headed "Success!" that reports zero results is the defect, not the
upload.** Both sources are the same platform and neither can be called
controlling. **Nothing was changed.** Across the three notices **19 of 50
attempted items published**; the rest failed silently from the owner's point of
view, because one of the failures was announced as a success. Raised as
**T-86**. **The marketing consequence is Rev's**, not this routine's, and
nothing was written to `docs/growth/`.

**2. A third external message left the account, and the log says there were
two.** `OL-0059` records the two A-15 replies as **"the first two external
messages this platform has ever sent"**, at 12:10:51Z and 12:11:05Z. A **third**
message went out to the Georgia Real Estate Commission at **12:06:43Z** — four
minutes earlier, in the same span — and **A-15 covers two replies, not three.**

**What this is not.** It is **not** an allegation that an agent sent an
unapproved message. The owner sends his own mail from this account; the log
itself records an earlier GREC message on 2026-10-08 as "one sent", which
**predates A-15 entirely**, so external sends from this address are not new and
the "first ever" phrasing can only mean _first by an agent_. **T-45 already
points at A-06 as the approval covering the GREC question.**

**What it is.** A phrase a future reader will misread. **Flagged, not resolved**
— establishing who pressed send needs the owner, and no agent should settle a
question about its own platform's sending history by inference. Recorded as
**T-85**, with the security check below folded into it.

**3. T-82's row said "16 days silent"; it is 17.0 days.** Recomputed from
`2026-10-05T11:11:48Z`, not carried forward. **The age has been removed from the
title** rather than corrected, because a title with a day count in it is wrong
again tomorrow — the same defect OL-0058 named.

**4. The routine's own checkout test is stale.** This run's prompt says to
confirm **"28 tracked files and no `src/`"** and calls the file count "the only
tell" for a container reset that once left the branch pointing at the retired
Ledger tree. **There are 53 tracked files.** None is application code — no
`.ts`, `.tsx`, `.js`, `package.json`, `next.config` or migrations are tracked,
and the tree is 30 files under `docs/ops`, 15 under `.claude` and the root, 4
under `docs/growth`, 2 under `docs/agents` and the two agent specifications.
**The count grew because the platform grew; 28 was true when the test was
written.** A test that false-alarms on every run trains its operator to skip it,
which is exactly how the failure it guards against gets through. **The
substantive checks — `HEAD` equal to origin, no `src/`, no `package.json` —
passed.** Raised as **T-85**'s second step.

## No action, with reason

| Source                                                                                  | Why no action                                                                                                         |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Family / child-account notices ×6**                                                   | **Personal, concerning a minor.** §5 — no details recorded here, now or later                                         |
| CarGurus saved-search digests ×6                                                        | Vehicle-shopping alerts, not business mail                                                                            |
| Holley marketing ×3, incl. a saved cart                                                 | Promotional. **The saved cart is noted** — it may be parts for a job, owner's call                                    |
| Tick Performance marketing                                                              | Supplier newsletter. The supplier relationship itself is already a register item                                      |
| JEGS, Texas Speed, Motion Raceworks/Shop                                                | Parts promotions                                                                                                      |
| Amazon Business, Lowe's, BrandsMart, Elegoo, LensCrafters, McDonald's, Insomnia Cookies | Retail promotions                                                                                                     |
| Alibaba ×2, DSers, TikTok Shop, dotcards                                                | Sourcing and marketplace solicitations                                                                                |
| NXP ×3, SEOWriting, Pinterest ads, Dan Martell, Kalshi, NFL, USCCA                      | Unrelated newsletters and webinars                                                                                    |
| Capital One credit-score notice                                                         | Informational. **No figure recorded** — A-19 pending                                                                  |
| Wells Fargo equity price alert                                                          | Personal brokerage alert, not business cash                                                                           |
| Credible and Upgrade loan solicitations                                                 | Legitimate lenders, unsolicited. **Noted only because the overdraft makes credit solicitations easy to act on badly** |
| Google "data shared with Stripe"                                                        | The paired half of the Stripe sign-in; folded into **T-85**                                                           |

## Proposed labels (not applied)

Unchanged from the standing proposal, plus one. **Labels remain Class B with no
standing approval, so none was applied and none will be until a taxonomy is
approved.**

`cash/alerts` · `cash/declined` · `lead/unqualified` · `partner/reseller` ·
`compliance/state` · `vendor/promotional` · `personal/family` ·
**`platform/failed-publish`** (new — the Pinterest and Vercel notices have no
home and are read as promotional)

**Threads that would be labelled this run:** the reseller thread (4 messages),
the two bank notices, the Stripe pair, the three Pinterest notices, the Vercel
pair, and the six family notices — which are the ones most worth keeping out of
the business view.

## Not checked this run

- **Superhuman Mail** — needs re-authentication; cannot be signed in to from a
  session. **Any mail reaching only that client is unseen by every run.**
- **Stripe, PayPal, bookipay, Square** — unreachable (T-36). **So the billing
  position of both priced jobs stays unknown.** Note that a human signed in to
  Stripe successfully on 2026-10-21, so **the account is live and the gap is the
  connector, not the account.**
- **The 5.6 MB GDOT permit-review checklist**, unread **372.3 hours / 15.5
  days** — no session here has an attachment-download tool. Its contents have
  never been read and nothing claims otherwise.
- **The Challenger customer's 2.8 MB datalog** — an email attachment, not a
  Drive file, which is consistent with it being unread. **Its contents are not
  known to this run.**
- **Google Calendar: no events 2026-10-22 → 2026-10-29.** The calendar was
  reachable and is empty. **Two live jobs, a price on both, and nothing
  scheduled this week.**
- **Google Drive: nothing new.** The three most recent shared files are the
  Challenger customer's videos from 2026-10-02, already T-64. No customer file
  landed in the window.
- **Drafts: still exactly 15, unchanged.** Five to the likely-loan-fraud
  addresses (oldest 19.6 days, none touched), four shop-building and lender
  threads, one legal-plan, five to the account itself (oldest **64.0 days**).
  **T-42 is accurate and nothing has moved.**
