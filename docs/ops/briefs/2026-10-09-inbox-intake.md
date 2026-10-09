# DD84 inbox intake — 2026-10-09

Run at 2026-10-09T10:22–10:34Z. **Window: since the last intake, OL-0031 at
2026-10-08T16:04Z.** Queried as `newer_than:1d`, which over-covers back to
10-08T10:20Z; the overlap was deduplicated against the register. Accounts
scanned: **`downdirty84llc@gmail.com`** (Gmail). Not reached: **Superhuman
Mail** (OAuth, non-interactive session), **Stripe**, **bookipay**.

Threads reviewed: **26**. New since the last run: **9**. Actionable: **5**.
No-action: **21**.

> **This is the first scheduled firing ever to land in a session holding the
> repository.** The brief you are reading is the completion proof A-10 and T-23
> have been waiting on since 2026-08-07 — **if this commit lands.** Three
> queries were used rather than one, per T-44, and the multi-query approach is
> what found the GREC reply below.

## Urgent — read first

**1. GREC answered the licensing question, and the answer is a non-answer.**

- **Who** — Cassie B., Information Specialist, Georgia Real Estate Commission,
  404-656-3916.
- **Clock** — Replied **2026-10-08T18:59:42Z**, **unread for ~15 hours**. No
  deadline, but nothing can launch behind it.
- **What happened** — the GREC guidance request that was sitting as an unsent
  draft when yesterday's intake found it (T-42) **was sent three minutes
  later**, at 15:54Z. It is a careful letter: what the Ledger does, what it does
  not do, the $15/$39/$99 tiers, and five numbered questions.
- **The reply, in full** — _"You would need to refer to license law 43-40-18,
  43-40-30, and 520-1-12 all laws regarding Brokerage business and activities.
  We don't have any legal team on staff, and I can't interpret the law."_
- **Why that is a finding and not a result.** Three things:
  1. **None of the five questions was answered.** Not whether a licence is
     required, not whether subscription-only compensation matters.
  2. **Question 5 was the important one and was ignored** — "is there a formal
     advisory opinion or declaratory ruling procedure I should use rather than
     this letter?" **That is the route to a binding answer, and it is still
     unknown.**
  3. **The citations do not match the questions asked.** The letter asked about
     **O.C.G.A. 43-40-1** and **Rule 520-1-.09**. The reply points at
     **43-40-18, 43-40-30 and 520-1-12**. Whether that is a redirection, a
     correction or just a general pointer **is exactly the kind of thing Torque
     must not guess at.**
- **Torque makes no determination here, and will not.** Whether the Ledger needs
  a broker's licence is a legal question. Spec §14: organise the facts and
  deadlines, recommend professional review, make no determination. **No statute
  was read, interpreted or summarised beyond quoting what GREC wrote.**
- **This is the same question T-13 already has approval to answer.** A-06 was
  approved 2026-08-10 to engage counsel, and a **Hawkins Law client portal
  invitation has been sitting unactivated since 2026-10-08T13:39Z**. If that is
  counsel, the licensing question is the first thing to put to them — it is more
  consequential than the document review A-06 was raised for, because it goes to
  whether the product may operate at all.
- **Task** → **T-45**. **No reply drafted**, deliberately: the next message
  either files a formal declaratory-ruling request or goes to a lawyer, and
  neither is drafting work.

**2. A card has been switched off and on at least seven times in two days.**

Debit card ending 5319 (and business card 3086 yesterday): off/on at 18:04,
18:05, 23:32, 23:34 on 10-07; off/on 18:41, 19:00 on 10-08; off/on again at
**00:26 on 10-09**, twice in the same minute.

**This is almost certainly you in the banking app.** It is also precisely the
pattern card-testing fraud produces, and it is now a two-day pattern rather than
a one-off. **One question, and no task until you answer it: was that you?** If
it was not, it is the most urgent item in this brief by a wide margin.

## New leads

| Lead               | Contact            | Vehicle / engine                            | Requested                                                                                                                                            | Source                              | Urgency | Missing info                                                                                      | Task     |
| ------------------ | ------------------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------- | -------- |
| **u/thatguy-\_-0** | Reddit handle only | **2000 GMC Sierra**, planned **street 6.0** | Nothing explicitly. Replied _"Thank you I appreciate that. My truck is 2000. But I'm not sure if it's possible I'm located at Riyadh, Saudi Arabia"_ | r/LSSwapTheWorld, 2026-10-08T18:41Z | Low     | Name, contact, transmission, current mods, budget, whether the truck is in Saudi Arabia or the US | **T-41** |

**The interesting part is the objection, not the lead.** They raised a
geographic doubt — _"I'm not sure if it's possible"_ — about a business whose
catalogue is **mostly remote**: tune file review, remote tune readiness review,
shop-to-shop support. **If a prospect in Riyadh assumes DD84 cannot help them,
that is a positioning problem, not a logistics one**, and it is the third lead
candidate in three days from the same subreddit.

**Folded into T-41 rather than given its own task.** Three handles, one
decision: whether and how DD84 follows up in that subreddit at all.

## Existing customers needing a reply

**None.** The C10 job (**T-37**) has had **no new message** since
2026-10-07T13:24Z. The customer is on a work trip and owes DD84 a checklist;
DD84 sent last. **Waiting remains correct and no follow-up is due yet.**

The blocker there is unchanged and is yours: given that the sensor was verified
as the Holley Bosch 4.9 LSU, does the revised tune file still go out as built?

## Drafts prepared — NOT SENT

**None this run.** That is a deliberate result, not an empty section:

- **GREC** — the next step is a formal filing or a lawyer, not an email.
- **The C10 job** — needs your technical determination first.
- **Webador** — an automatic charge needs a decision about money, not a reply.

**A-15 from yesterday is still pending and unanswered**: the GDOT reply and the
Georgia SBDC reschedule, both written in full in
`docs/ops/briefs/2026-10-08-inbox-intake.md`. **The GDOT engineer has now been
waiting since 2026-10-06T22:04Z — three days.**

## Conflicts found

**1. A rule landed overnight that yesterday's intake had already broken.**

| Source                                                                               | Says                                                                                                                                                              |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLAUDE.md` §5, added 2026-10-08 under A-13 (commit `8f0a6c3`)                       | "**Never add customer names, email addresses, phone numbers or payment details.** … customer identity is not [accepted], and the decision does not extend to it." |
| `docs/ops/TASK-REGISTER.md` T-37 and the 2026-10-08 intake brief, written 2026-10-08 | Carry the C10 customer's **full name, personal email address and mobile number**                                                                                  |

**Controlling source: CLAUDE.md.** It is the owner's standing rule and it is
newer. **Nothing in the repository was secret, and that is the point** — this is
a public repository by decision, so a customer's mobile number in it is
world-readable.

**Honest about the sequence:** the rule did not exist when yesterday's intake
ran, so this is not a violation of an instruction in force at the time. It is
still an exposure now, and the rule explicitly contemplates it — "A-13 covers
what was exposed on 2026-10-08, not whatever gets added later."

**What was done about it this run**, and what was not:

- **Redacted** from `TASK-REGISTER.md` and from the 2026-10-08 intake brief. The
  register is edit-in-place by design and a brief is a dated output, so cleaning
  both is within their own write modes. The customer is now **"the C10
  customer"**, with the Gmail thread ID as the stable pointer. **Identity lives
  in Gmail, which is where it belongs.**
- **NOT touched: `OPERATING-LOG.md` and `APPROVALS.md`.** The log is
  **append-only** and an approval packet is **edited only in its Response
  block** — both hard rules in CLAUDE.md §5 and `docs/ops/README.md`. Redacting
  them would require breaking one rule to satisfy another, and **that is the
  owner's call, not an agent's.** Raised as **A-16**.
- **Stated plainly, because it is the part that matters: redaction does not
  unpublish anything.** The name, email and number remain in the git history of
  a public repository at commits `dbd6c21` through `cb35580`. Removing them
  needs a history rewrite, which CLAUDE.md forbids on this branch and which this
  environment's proxy refuses anyway. **This is the same trap A-13's Option 2
  analysis already identified**, arriving from the other direction.
- **Today's intake adds no customer identity at all** — handles and thread IDs
  only.

→ **T-48**, and **A-16** for the two files an agent should not quietly edit.

**2. A fourth web property, possibly explaining the third.**

| Source                        | Says                                                                      |
| ----------------------------- | ------------------------------------------------------------------------- |
| `ventures.md`                 | Front door `dd84tuning.com` (Manus); Shopify at `shop.downdirty84llc.com` |
| Search Console, 10-07 (T-43)  | Indexing errors on **`downdirty84llc.com`**                               |
| Webador invoice, 10-09T04:16Z | An **annual hosting invoice** for Down Dirty 84 LLC                       |

**Hypothesis, labelled as one: Webador hosts `downdirty84llc.com`.** That would
explain T-43. **It is not established** — the invoice PDF is unread and names no
domain in its body. Do not record it as fact.

**3. Two Google Business Profiles with nearly the same name.**

Two separate September performance reports arrived 33 minutes apart: **"DOWN
DIRTY 84 LLC — 4 people viewed"** and **"Down Dirty 84 llc — 40 people
viewed"**. Different view counts, so **different listings, not one email
twice.**

A duplicate local listing splits search presence and reviews between two
records. **These are also the first real audience numbers this record has ever
carried for DD84** — and 40 views a month is a small number that at least comes
from a live system. The marketing substance is Rev's; **nothing was written to
`docs/growth/` or `ventures.md`.** → **T-47**

## No action, with reason

21 threads, grouped.

- **CarGurus ×4, NFL, Amazon Business, Linear changelog, OpenAI workspace
  rename** — marketing and product notices. No action.
- **Reprise Financial ×2** — further loan-offer mail, one marked important. The
  owner's private lending application; noted, not actioned, **no code or
  credential reproduced.**
- **Wells Fargo ×6** — the card toggles, counted once under Urgent above rather
  than six times here.
- **Family Link / Kahoot** — a child's device. Personal, not business.
- **Supabase signup-probe confirmation** — the `+signupprobe` alias again,
  unchanged from yesterday. Someone is testing a signup flow correctly.
- **Render `dd84-api` deploy-failed, GitHub CI failure** — **both already
  tracked (T-33, T-34) and neither has recurred.** The Render thread has since
  been read by someone. **No new alert since 10-08T15:21Z**, which is consistent
  with the service having stabilised and is **not** evidence that it has.
- **Hawkins Law portal invitation** — still unactivated, 21 hours on. Not
  re-tasked; it is now named in T-45 as the likely route for the licensing
  question.

## Proposed labels (not applied)

**No label applied, no thread moved, archived or trashed.** Class B, no taxonomy
approval exists. Unchanged from yesterday, plus:

| Thread          | Proposed label            | Why                                     |
| --------------- | ------------------------- | --------------------------------------- |
| GREC licensing  | `[Superhuman]/AI/Respond` | A decision is owed, even if not a reply |
| Webador invoice | `[Superhuman]/AI/Respond` | Automatic charge pending                |

**Still outstanding from yesterday:** the GDOT thread is labelled
`[Superhuman]/AI/Waiting` and has not been waiting since 10-06.

## Not checked this run

| Source                     | Reason                                                                                                                        |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Superhuman Mail**        | OAuth required; non-interactive session. Any account linked only there was **not read at all** — unknown, not none.           |
| **Stripe / bookipay**      | No Stripe server in this session; bookipay has no API. **T-36 unchanged.** No payment or customer-history check was possible. |
| **Webador invoice PDF**    | **Unread** — no attachment-download tool in this session. **The charge amount is unknown and is not estimated.**              |
| **GDOT checklist PDF**     | Still unread, same reason. T-38 step 1.                                                                                       |
| Google Drive               | Not searched; no thread referenced a Drive file this window.                                                                  |
| Google Calendar            | Not read this run. No draft offered a time, so nothing depended on it.                                                        |
| Mail older than the window | Out of scope by design. **~20,700 unread remain in the inbox**, entirely unassessed.                                          |
| Spam folder                | Not examined. A misfiled enquiry would be invisible.                                                                          |
