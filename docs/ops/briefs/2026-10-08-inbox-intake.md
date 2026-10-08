# DD84 inbox intake — 2026-10-08

Run at 2026-10-08T15:52–16:04Z. Window: **`newer_than:2d`** (first intake run of
the day, and the first ever — no prior intake entry exists in `OPERATING-LOG.md`
to measure from). Accounts scanned: **`downdirty84llc@gmail.com`** (Gmail). Not
reached: **Superhuman Mail** (OAuth required, non-interactive session),
**Stripe**, **bookipay**.

Threads reviewed: **57 unique** across two queries. Actionable: **10**.
No-action: **47**.

> **Read this before the rest.** The first query of the day,
> `in:inbox newer_than:2d`, returned 25 threads of which **not one was from a
> human**. A second query, `category:primary`, surfaced an **active customer
> tuning job** and a **state-agency permit response**, both of which the first
> pass had buried under marketing. Two days of mail is ~201 threads; the inbox
> holds **22,192 threads, 20,756 unread**. A single-query intake on this mailbox
> will miss real work, reliably. That is now T-44.

## Urgent — read first

**1. GDOT has answered on the shop site, and the answer constrains the build.**

- **Who** — Nakia Nembhard, Civil Engineer 3, GDOT District 1 Traffic
  Operations, cc Hunter Boyle.
- **Clock** — Received **2026-10-06T22:04:31Z**, still **UNREAD after ~42
  hours**. No GDOT deadline was stated, so this is stale rather than late.
- **What it says, quoted** — _"Currently the plan needs a bit more detail to
  give a full in depth review. If the plans of the driveway that is being
  proposed can meet all GDOT requirements we should not have any issues
  permitting. **Due to the median in the state route a right in right out will
  be the only permittable driveway for that property.**"_ A checklist is
  attached: `D1TO Full Permit Review V1.7.pdf`.
- **Why it is urgent, precisely** — this is the gate the owner's own 2026-10-06
  message said was worth waiting for _"before I pay for a survey or civil
  design."_ **That gate has now opened, and the answer is favourable with one
  hard constraint.** Spend is unblocked; the constraint changes the site plan.
- **Right-in/right-out is a material design change, not a detail.** The concept
  submitted on 2026-09-24 put the bay-door and customer side facing SR 72 with a
  24-foot connection at the existing apron. Left turns out of the site are now
  excluded. **What that does to customer access, trailer movements and dyno
  deliveries is the owner's call, not Torque's** — it needs someone who knows
  how vehicles will actually arrive.
- **The checklist PDF has not been read.** No attachment-download tool is loaded
  in this session, so its contents are **unknown and are not guessed**. Reading
  it is step 1 of T-38.
- **Action needed** — acknowledge, work the checklist, decide on the revised
  access layout. **Draft prepared below; approval required before sending.**
- **Task** → **T-38**

**Nothing else is urgent.** No safety concern, no active complaint, no payment
dispute, no deadline inside 24 hours, and no legal or regulatory notice. The
Google Play item below has a 60-day clock, which is not urgent today and is easy
to forget for 59 days.

## New leads

| Lead                | Contact                                     | Vehicle / engine                                                             | Requested                                                                                                                                                              | Source                                      | Urgency                                 | Missing info                                                                                                 | Task     |
| ------------------- | ------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| u/Traveller930      | **Reddit handle only — no email, no phone** | **Unknown.** Context mentions an OBS truck, not confirmed as theirs          | Nothing explicitly. Said _"I will be in touch! Im not far off in NC either, thank you!"_ after DD84 advised buying on condition and checking compression/leakdown      | r/LSSwapTheWorld reply, 2026-10-08T13:15Z   | Low — they said they would make contact | Everything: name, contact, vehicle, engine, transmission, mods, location beyond "NC", service wanted, budget | **T-41** |
| u/CausionWitFlossin | **Reddit handle only**                      | LS swap, engine and harness installed by a third party with _"so much cuts"_ | Nothing explicitly. DD84 diagnosed a dead dash as a main-power-path fault; customer reported back _"it was my starter wires man"_ — **the free diagnosis was correct** | r/LSSwapTheWorld, 2026-10-06 and 2026-10-07 | Low                                     | As above                                                                                                     | **T-41** |

**Neither is a lead yet, and calling them one would be generous.** They are two
people DD84 helped for free in public, one of whom said they would be in touch.
That is the top of a funnel, not a pipeline. They are recorded because DD84 has
**three customers total and has collected nothing since 2025-09-12**, which
makes two warm strangers worth a task.

**The restriction that governs what happens next** — `ventures.md` is explicit
that technical forums generally ban unmarked solicitation: lead with the answer,
disclose the commercial interest, link only when relevant. DD84 has already led
with the answer in both threads, which is the right order. **A direct-message
pitch is Class C and is not drafted here.**

## Existing customers needing a reply

| Customer                                                             | Thread                                                                       | Age                                                                      | What they asked                                                                             | Draft ready                                   | Task     |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------- | -------- |
| **Arman Olgun** ("Bear Bone"), `arman.olgun@gmail.com`, 330-565-0230 | `C10 Terminator X Max - DL Files` — **22 messages**, 2026-10-04 → 2026-10-07 | DD84 sent last, 2026-10-07T13:24Z — **~26 hours**, and correctly waiting | Nothing outstanding from him. **He owes DD84 the checklist**, and said he is on a work trip | **No — deliberately not drafted. See below.** | **T-37** |

**The job, from the thread** — 1960s/70s Chevy C10, **LM7 out of a 2000
Silverado**, Holley **Terminator X Max**, software **V3 build 110**, GM
**12613412** injectors, stock fuel pump and rails, Bosch **4.9 LSU** wideband.
Complaint: large AFR swings. Datalogs and the tune file were supplied after
three format failures. DD84 has **already built a revised tune file** and is
holding it pending a checklist.

**Customer status could not be verified, and §9 forbids merging on anything
less.** Shopify returns **no customer** with that email; Stripe and bookipay
were both unreachable this run. So Arman is recorded as an **active
correspondent whose purchase history is unknown** — not as one of the three
known customers, and not as a new one.

### Two things in this thread that need the owner, not an agent

1. **The O2 diagnosis and the verified hardware do not agree.** On 2026-10-06
   DD84 wrote: _"That Bosch O2 sensor is your limiting factor causing erratic
   AFR readings due to incorrect resistance on the sensor. You will need to use
   an OEM Holley O2 sensor for the Terminator X Max."_ Arman then checked and
   reported: _"I did verify it is the Holley Bosch 4.9 LSU."_ **If the sensor is
   already the Holley part, the stated remedy is already in place and the root
   cause is still open.** Torque is **not** resolving this — it is a technical
   determination about a customer's running engine, and `ventures.md` forbids
   fabricating a diagnosis or guaranteeing a result. **It is flagged, paused,
   and handed to the owner.** See Conflicts.
2. **No payment appears anywhere in 22 messages.** No invoice, no deposit, no
   price, no payment link. Against the catalogue this work sits somewhere
   between _ECU Tune File Review_ ($99/$149/$199) and _Holley EFI Tuning &
   Diagnostics_ ($350/$450/$650). **Whether Arman has paid cannot be checked** —
   Stripe and bookipay are the systems that would know and neither was
   reachable. This is **flagged as unverified, not asserted as unbilled.**

**Why no draft was written for Arman.** The next message in that thread has to
either send the revised tune file or answer the O2 contradiction. Both are
technical determinations about someone's vehicle. Writing a plausible-sounding
one would be the exact failure `ventures.md` calls disqualifying. **The blocker
here is a decision, not a draft.**

## Drafts prepared — NOT SENT

**Both are covered by packet A-15 in `APPROVALS.md`** — one decision, two sends.
(Raised as A-14; renumbered on landing because a sibling session had taken that
number for the A-10 stopgap. See OL-0031.)

Both drafts live **in this file only.** No Gmail draft was created — the routine
prefers the output file, and the mailbox already holds a 14-draft backlog (see
below) that a fifteenth would disappear into. **Say the word and either will be
placed in the account as a real draft with its ID recorded.**

---

### Draft 1 — GDOT driveway concept review

**To** `NNembhard@dot.ga.gov` · **Cc** `HBoyle@dot.ga.gov` · **Reply to message
id** `1a1133f549956cc3` · **Subject** `Re: Driveway Concept Review`

> Good afternoon Nakia,
>
> Thank you — this is exactly what I needed before committing to survey and
> civil design costs, and I appreciate you flagging the median restriction up
> front.
>
> I understand that a right-in / right-out is the only permittable driveway
> configuration for parcel 0059 038 at 0 Highway 72 W, Colbert, given the median
> on SR 72. I will revise the concept on that basis rather than the two-way
> connection shown on the September 24 sheet.
>
> I have the D1TO Full Permit Review checklist and will work the plan set
> against it. Three questions before I engage a surveyor, so that what I submit
> next is complete rather than another partial:
>
> 1. For a right-in / right-out at this frontage, does District 1 have a
>    preferred throat width and radii, or should I design to the standard detail
>    and let the review set it?
> 2. Will a boundary and topographic survey with sight-distance measurements be
>    sufficient for the full review, or does District 1 also expect a traffic
>    statement for a shop of this size?
> 3. The railroad corridor runs behind the site. Does GDOT expect that
>    coordination to be resolved before the driveway permit application, or can
>    the two run in parallel?
>
> I understand none of this constitutes an access permit or final approval.
>
> Thank you, Mark Lester Down Dirty 84 LLC 706-208-7465

**What this commits DD84 to** — nothing financial and no date. It accepts the
right-in/right-out constraint as GDOT's stated position, which is a reading of
their own email rather than a concession. It asks three questions whose answers
determine what a surveyor is paid to produce. **It makes no engineering claim
and proposes no design.**

**APPROVAL REQUIRED BEFORE SENDING (Class C).**

---

### Draft 2 — Georgia SBDC, missed meeting

**To** `djones@georgiasbdc.org` · **Reply to message id** `1a112caffaba4e6d` ·
**Subject** `Re: Meeting Today`

> Hi D. Jones,
>
> My apologies for missing Tuesday's 3:30 slot, and for the slow reply.
>
> I would still value the session. I will book a new time through your Calendly
> link rather than ask you to work around me.
>
> For context so the time is useful: Down Dirty 84 LLC is an automotive
> performance tuning business — ECU and EFI calibration, diagnostics and PCM
> services — and I am working toward an owner-occupied shop with a dyno on a
> parcel in Colbert. I am currently in preliminary access review with GDOT
> District 1 on that site. The areas where I would most value SBDC input are
> financing the building, and what the lenders I am talking to will expect to
> see before they will consider it.
>
> Thank you, Mark Lester Down Dirty 84 LLC 706-208-7465

**What this commits DD84 to** — booking a slot, which the owner does, not the
agent. It discloses the shop plan and the GDOT review in general terms. **It
quotes no figure and asks for no money.**

**APPROVAL REQUIRED BEFORE SENDING (Class C).** The calendar was **not** touched
and no slot was booked — this routine reads the calendar and does not write to
it.

---

## Conflicts found

**1. O2 sensor diagnosis vs. verified hardware — PAUSED, nothing changed.**

| Source                                                      | Says                                                                                                                                    |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| DD84 outbound, 2026-10-06T11:33Z, thread `1a1082503004a073` | The Bosch O2 sensor is the limiting factor "due to incorrect resistance"; an **OEM Holley** sensor is required for the Terminator X Max |
| Customer inbound, 2026-10-07T01:35Z, same thread            | "I did verify it is the **Holley Bosch 4.9 LSU**" — i.e. it appears already to be the Holley part                                       |

**Controlling source: the customer's physical inspection**, because it is a
direct observation of the part and the other is an inference from a datalog.
**That does not make the diagnosis wrong** — a correct Holley part can still be
failed, miswired or contaminated, and the two statements can both be true. It
means the stated remedy no longer follows from the stated cause, and **the
revised tune file should not go out on the old reasoning.** Nothing was changed,
no file was sent, and no replacement diagnosis is offered here.

**2. A third web domain that the venture registry does not contain.**

| Source                                   | Says                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `docs/agents/ventures.md`                | The front door is `dd84tuning.com`, a Manus site; Shopify sits behind it             |
| Google Search Console, 2026-10-07T07:33Z | Indexing problems on **`downdirty84llc.com`** — a domain the registry never mentions |

**Controlling source: the live system.** Search Console does not report on a
site nobody owns. **Nothing was changed** — `ventures.md` is Rev's file and
Torque does not write across records. Recorded as **T-43** for the owner or Rev.

**No pricing conflict was found.** No price was quoted to anyone in this window.

## No action, with reason

47 threads. Grouped, because 47 lines of this would bury the ten that matter.

- **CarGurus saved-search digests ×8** — vehicle listing marketing. No action.
- **Marketing and promotional ×19** — RockAuto, JEGS, Dunkin, Nike, Panera,
  Microcenter, BrandsMart, Hertz, Amazon Business ×2, Alibaba, Pinterest ×2,
  Shopify marketing, Supabase newsletter, Kalshi, OpenAI, NFL ×2. No action.
- **Reprise Financial ×3** — prequalified loan offers plus an email-validation
  code. A lending application in the owner's name is **the owner's private
  business**; Torque notes it exists and does nothing with it. **The code in
  that email is a credential and is not reproduced here.**
- **Wells Fargo alerts ×4** — a stock price alert, an AI-risk newsletter, and
  two threads recording business and personal debit cards being switched off and
  back on four times on 2026-10-07. **Probably the owner in the banking app. It
  is also what card-testing fraud looks like**, so it is named rather than
  dropped. One line, no task: if the owner did not do this, it is urgent.
- **Google account notices ×4** — new Windows sign-in, Google data shared with
  Claude, device welcome, Family Link app install on a child's device. The
  Claude data-sharing notice corresponds to this agent's own access. No action.
- **Fidelity, Chime ×2** — retirement and savings marketing. No action.
- **Supabase "Confirm your email address"**, 15:38Z, sent to
  `downdirty84llc+signupprobe@gmail.com` — a deliberate signup probe using a
  plus-alias, created **14 minutes before this run**. Whoever is testing a
  signup flow is doing it right. **Not actioned**; flagged only because an
  unexpected confirmation mail to a probe alias would otherwise look alarming.
- **Reddit ×1 remaining** — thread already counted under leads.

## Proposed labels (not applied)

**No label was applied, no thread was moved, archived or trashed.** Class B, and
no standing taxonomy approval exists.

**The good news: a taxonomy already exists and does not need inventing.** The
mailbox carries `[Superhuman]/AI/` labels — `Respond` (35), `Waiting` (30),
`Pitch` (91), `Meeting` (4), `Social` (142), `Marketing` (1,627), `News` (85) —
plus a user label **`DD84 Dyno Facility Outreach`** (13 messages) that is
directly on point for the GDOT work.

| Thread                         | Proposed label                                                                                                         | Why                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| GDOT `Driveway Concept Review` | `DD84 Dyno Facility Outreach` — **it already carries `[Superhuman]/AI/Waiting`**, which is now wrong; GDOT has replied | Puts it with the 13 messages of the same project |
| Arman — `C10 Terminator X Max` | `[Superhuman]/AI/Waiting`                                                                                              | DD84 is correctly waiting on the customer        |
| Georgia SBDC `Meeting Today`   | `[Superhuman]/AI/Respond`                                                                                              | A reply is owed                                  |
| Google Play `[Action Needed]`  | `[Superhuman]/AI/Respond`                                                                                              | 60-day clock                                     |

**The one worth deciding first:** the GDOT thread is labelled `Waiting` and is
not waiting any more. A label that is stale is worse than no label, because it
is trusted.

## Not checked this run

| Source                     | Reason                                                                                                                                                                                                                              |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Superhuman Mail**        | OAuth required; this session is non-interactive and cannot run the flow. **If any account linked there is not also in this Gmail, its mail was not read at all this run** — and that is unknown, not none.                          |
| **Stripe**                 | No Stripe MCP server in this session. Customer-identity and payment checks degraded to unknown.                                                                                                                                     |
| **bookipay**               | No API access by design. Every historic DD84 payment went through it, so **"has Arman paid?" is unanswerable from here.**                                                                                                           |
| **Google Drive**           | Not searched. The thread attachments (`D1TO Full Permit Review V1.7.pdf`, Arman's datalogs and tune file) arrived as mail attachments, and no attachment-download tool is loaded in this session. **Contents unread, not guessed.** |
| Google Calendar            | Read earlier today for the daily brief: zero events today and tomorrow. **No slot was offered in any draft**, so nothing depended on a deeper read.                                                                                 |
| Shopify                    | Read. **No customer record** for `arman.olgun@gmail.com`. 0 orders all time, so this tells us little.                                                                                                                               |
| Mail older than 2 days     | Out of window by design. **With 20,756 unread in the inbox, the backlog beyond this window is entirely unassessed.**                                                                                                                |
| Spam folder (248 messages) | Not examined. A misfiled customer enquiry would be invisible to this run.                                                                                                                                                           |

## Also found — the drafts backlog

Not a thread, so it is not in the counts, but it is the largest single thing
this run turned up after GDOT.

**`mcp__Gmail__list_drafts` reports 14 unsent drafts.** Prepared work that never
left the building:

- **`grecmail@grec.state.ga.us`** — Georgia Real Estate Commission, created
  **2026-10-08T15:30:55Z**, about 25 seconds before the daily brief read the
  mailbox. Today's, and unsent.
- **`TChristopher@gacdc.com`** cc `Loans@gacdc.com` — Georgia CDC, an SBA 504
  lender. 2026-09-29, **9 days unsent.**
- **`ericw@keensbuildings.com`** — a steel-building supplier, 2026-09-29. On
  point for the 36 × 50 shop.
- **`clientservice@legalplans.com`** — 2026-09-25.
- **Five drafts to free-mail addresses** — `lenderbright006@gmail.com` ×2,
  `legendgrowth6@gmail.com`, `ewhere261@gmail.com`,
  `ayubagoodness377@gmail.com`. **These have the shape of advance-fee loan
  fraud**: lender-sounding names on consumer Gmail accounts. Torque has not read
  their contents and makes no accusation — but a business actively seeking
  building finance is precisely the target, and **five unsent replies to them is
  worth two minutes of the owner's attention before any of them goes out.**
- Five self-addressed drafts, 2026-08-19 and 2026-09-04. Probably notes.

→ **T-42.** **No draft was sent, edited, deleted or read in full.**

---

**Class A held throughout.** Nothing was sent, forwarded or replied to. No label
applied, no thread moved or archived, no calendar event created or changed, no
customer record merged, no price quoted, no date promised, no payment action of
any kind.
