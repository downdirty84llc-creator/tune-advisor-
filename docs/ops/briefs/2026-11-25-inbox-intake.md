# DD84 inbox intake — 2026-11-25

Run 10:22:50Z–10:44:30Z (both read from the clock, T-116). Window:
`newer_than:1d` (since 2026-11-24 10:21Z), with two named diagnostic widenings.
Accounts scanned: Gmail, the business account. Not reached: Superhuman Mail,
Stripe (no MCP server exists), PayPal, Canva.

Threads reviewed: **39** distinct. **Actionable: 13. Mapped to existing rows
unchanged: 3. No-action: 23.** **New leads: 0.** Drafts enumerated: **52**.
**New drafts created: none** — and §8 gives the reason for each.

A worker restart landed mid-run. The skeleton committed at **`7e4c898`** held
and the checkout came back intact. **No ordinal is claimed for that skeleton —
§7 explains why one cannot be.**

---

## 0. Checkout and the six queries

`HEAD` equalled origin at **`3160285`**, no `src/`, clean, **110 tracked files
against the prompt's 28 — fifty-eighth run reporting the drift** (A-10). After
the skeleton commit the tree is 111.

| #     | Query                                         | Returned                                       |
| ----- | --------------------------------------------- | ---------------------------------------------- |
| 1     | `category:primary newer_than:1d`              | **0 — blind, see T-238**                       |
| 2     | `is:important newer_than:1d`                  | 6 (1 not reachable by query 6)                 |
| 3     | `in:sent newer_than:1d`                       | 1 (the Ram job)                                |
| 4     | `[Superhuman]/AI/Respond` + `/Waiting`        | 25 shown, all pre-existing, **none new**       |
| 5     | `list_drafts`                                 | **52**, paginated to exhaustion (50 + 2)       |
| 6     | `newer_than:1d -in:sent -category:promotions` | **30 — the customer-finding query, per T-238** |
| diag. | `category:personal newer_than:2d`             | 9 (3 not reachable by query 6)                 |
| diag. | `from:notify.wellsfargo.com newer_than:2d`    | 7 (4 outside the 1-day window)                 |

**Query 4's estimate of 65 is not a count** (T-208); 25 were listed and every
one was an already-tracked item. **Query 1 returned zero for the third
consecutive run and that zero still means nothing** — T-238 records why.

Arithmetic: 30 + 1 + 3 + 4 + the T-237 thread checked directly = **39**. 13 +
3 + 23 = 39.

---

## 1. Urgent — read first

### 1. The security notice is still unread, and a third device event has joined it

**T-237 confirmed live: thread `1a20a3a6463daace` still carries `UNREAD`.** It
is 2026-11-23T21:05:28Z, it was due 2026-11-24, and **nobody has looked at it
for two days.**

**And it is no longer alone.** Three device or sign-in notices arrived across
three platforms inside 25 hours, and **all three are unread:**

| Platform           | Thread             | Time (UTC)           | Device reported                |
| ------------------ | ------------------ | -------------------- | ------------------------------ |
| Payment processor  | `1a20a3a6463daace` | 2026-11-23T21:05:28Z | Android, Atlanta, Georgia      |
| Second processor   | `1a20a45a28edef6d` | 2026-11-23           | trusted-device prompt          |
| **Google account** | `1a20d1a256cbfdb1` | 2026-11-24T10:29:05Z | **"a new sign-in on Windows"** |

**No conclusion, in either direction, and the new one cuts both ways.** A
Windows sign-in is entirely ordinary for this business — the calibration
software is Windows-only and the owner was working on a tune at 01:08Z this
morning. **It is also a second device class in 13 hours on an account whose
secret-key values T-171 says stopped being readable on 2026-11-20.**

**What is certain is the shape: three unread notices, none confirmed either
way.** Reading three emails needs no approval and is the cheapest item on the
board.

**Withheld:** the originating IP, and the tokenised links in both the processor
and the Google notice. Each is a live single-click security action, and
publishing one into a world-readable repository would hand it to anyone.
**T-247.**

### 2. A second phishing attempt, and this one is aimed at the storefront

**Thread `1a20e57c11cfe22e`, 2026-11-24T15:51:16Z, UNREAD.** The sender's domain
is a lookalike — Shopify's name with "official-" prefixed to it, which is **not
Shopify's own domain.**

The body asks the owner to "confirm whether you have received any previous
messages or notifications concerning this review" and to "respond directly to
this email". **There is no store name, no order number, no review reference and
no link.** That is the tell: it carries no payload because **the reply is the
payload** — it exists to confirm a live, attentive human behind the address,
after which the real attempt follows.

**Two things make it worse than an ordinary phish.** DD84 has a live storefront,
so a store-review pretext is credible. And **Gmail marked it IMPORTANT and filed
it under personal** — the same misfiling that put the processor's security
notice somewhere nobody reads, except in the opposite direction: this one got
promoted.

**The correct action is to not reply.** T-52 is the first credential phish in
this record and has sat unread for 44 days. **T-243, Critical, no approval
required — because doing nothing is the action.**

### 3. A sales channel went to zero

**Thread `1a2102b9147053cf`, 2026-11-25T00:46:59Z, UNREAD.** Between
**2026-11-24 13:00 and 19:00 EST**, the Google Merchant Center account named for
DD84's second storefront lost **100% of its active items — from 20 to 0.**

The notice's own words: **"The dropped items are currently not available in any
Google products."**

**What I checked and what I could not.** The connected Shopify store
(`shop.downdirty84llc.com`, read live 10:42Z) holds **102 products, all but one
of the first 25 ACTIVE and published.** So **nothing on the connected store's
side obviously explains a drop to zero.** But the Merchant Center account is
named for the _other_ storefront, and **this session has no connector to it** —
the diagnostics page is the only thing that says which feed broke, and it needs
the dashboard. **Not available this run; not estimated.**

**A link I am not asserting.** T-241 recorded a marketplace rejection demanding
business verification on 11-23, and T-231 records a merchant platform already
blocking on the address T-164 says is absent. A verification failure can delist
a feed. **It can also be a coincidence of one day, and adjacent timestamps are
not a mechanism.** Both facts are recorded; the link is not. **T-244,
Critical.**

### 4. The database is paused in fact, not warned

**Thread `1a20d276d1318ecd`, 2026-11-24T10:43:37Z, UNREAD.** T-229 was the
warning. **This is the event.**

- The vendor states the cause plainly: **free-tier projects are paused
  automatically after 7 days of inactivity.**
- **90 days to unpause from the dashboard.** The window opened 2026-11-24, so it
  closes on or about **2027-02-22**.
- After that **the project cannot be restored, but the data stays available for
  download.** That is a materially softer outcome than "lost" and the record
  should say so.
- Preventing a recurrence requires a **paid upgrade** — a spend, and not this
  routine's to make.

**This vindicates a correction the record already made.** OL-0119 struck out the
earlier reason for not opening the project and replaced it with: the pause is
driven by _insufficient_ activity, so abstaining accelerates it rather than
protecting it. **The vendor's own notice now says exactly that.** The corrected
reasoning was right.

**Withheld:** the project and organisation reference strings from the notice
body. **T-245, Critical**, superseding T-229.

---

## 2. The live job moved six times in four days and still has no price

**This is the run's largest customer finding.** Thread `1a1fc4063565f71a` now
holds **19 messages**, and reconstructing it gives the first complete picture of
how DD84 actually delivers a calibration:

| Time (UTC)               | Direction | What moved                       |
| ------------------------ | --------- | -------------------------------- |
| 2026-11-21T03:57:32Z     | out       | **DRAFT 1**                      |
| 2026-11-21T10:51:28Z     | out       | a configuration file             |
| 2026-11-21T18:31:08Z     | out       | a second configuration file      |
| 2026-11-21T18:43:30Z     | in        | datalog — idle                   |
| 2026-11-21T21:59:40Z     | out       | **DRAFT 2**                      |
| 2026-11-21T22:17:28Z     | in        | datalog — idle                   |
| 2026-11-21T22:21:44Z     | out       | **DRAFT 3**                      |
| 2026-11-21T23:02:19Z     | in        | datalog — drive                  |
| 2026-11-23T23:37:22Z     | in        | datalog — drive                  |
| 2026-11-24T00:01:05Z     | out       | **DRAFT 4**                      |
| 2026-11-24T00:30:25Z     | in        | datalog — **wide-open throttle** |
| 2026-11-24T01:31:42Z     | out       | **DRAFT 5**                      |
| **2026-11-25T00:36:31Z** | in        | datalog — **wide-open throttle** |
| **2026-11-25T01:08:23Z** | out       | **DRAFT 6**                      |

**Six calibration revisions in four days. Two of them in the last 24 hours. The
job has reached full-load validation. It has no price and no invoice.**

Three further facts the thread establishes:

- **A third party is in the loop.** The customer relays each revision onward and
  returns the datalogs. **So two people's time is being consumed per revision**,
  and DD84 is answering within the hour at 01:08 in the morning.
- **Compare T-64**: 7 revisions, delivered, **priced at $350 with A-21
  approved**, still uninvoiced. This job is at 6 revisions in four days against
  T-64's much longer run. **If T-64's rung is the comparable, this job is
  already past it in effort and has no rung at all.**
- **The owner answers promptly and never prices.** That is now the single most
  repeated finding in this record.

**A-21 row 1 is the whole blocker, it has been held since October, and it is the
one decision that converts six revisions of finished work into an invoice.**
**Picking a rung is Class E and is not this routine's to do.** T-223 updated.

**No attachment was downloaded, opened or described** — not the calibration
files, not the datalogs. Their filenames are withheld.

---

## 3. New leads

**None.** And the statement is backed by the query that actually finds humans:
`category:personal` over two days returns nine threads and **not one is a new
enquiry.** They are the Ram job, two identity-document scans, a vendor's credits
thread, the phishing attempt, three marketing mails and a vendor win-back.

**But §6 found a customer request that was never captured**, which is a
different failure from a missed lead and arguably worse.

---

## 4. Two scanned identity documents are sitting in the inbox

**Threads `1a20d26499a13de4` and `1a20d25980f15895`, both 2026-11-24T10:42Z.**
Two scanned **government identity documents** arrived at the business address
from a personal Gmail account. Both have been read.

**Everything identifying is withheld**: the licence number, the date of birth,
the document number, the images. **None was downloaded.**

**On whose they are — not established, and I will not merge on a guess.** The
sending account's display name and address local part match the owner's own
name, which makes "the owner sending himself his own documents" the natural
reading, and the natural _purpose_ the four pending verification demands (T-164,
T-197, T-231, T-241). **Spec §9 says merge only on verified identity, and a
display name is not verification.** So the record says what it saw.

**The exposure is real regardless of whose they are, and it is not the
attachments.** The documents arrived from a scanning app that **put the OCR'd
document text into the subject line.** A licence number and a date of birth are
therefore **visible in every inbox list view, every search result and every
notification preview**, without anyone opening anything.

**This is a category A-13 does not reach.** A-13 accepted revenue figures and
system identifiers as of 2026-10-08; it says nothing about government identity
documents, and §5 forbids customer contact and payment details outright. **Per
CLAUDE.md, a new category of sensitive material is an approval packet, not a
judgement call.** Every available remedy — deleting, archiving, moving the
documents to secure storage, or asking the sender to resend by another channel —
**is Class B or C and outside this routine.** **A-33 raised. T-246, Critical.**

---

## 5. Money

- **The debit card is off again.** Thread `1a2100696b614584`,
  **2026-11-25T00:06:36Z**, UNREAD. **Per T-184 I checked for the matching event
  rather than reporting half a pair: there is no later "turned on".** Over the
  two-day window the sequence is **on → off (11-23) → off (11-25)**, which is
  two "off" notices with no "on" between them. That may be two cards or a
  duplicate notice. **Not established, and not guessed.** T-205 and T-184 stand.
- **No bank notice of T-202's second outflow**, which fell 2026-11-24. The full
  two-day sweep of the bank's alert address returns three card events and four
  personal stock alerts and **nothing about the account**. **That is an absence
  of notice, not evidence the outflow did not happen.**
- **2026-11-26 is a bank holiday** and T-242 stands unchanged.
- **A building vendor announced an 8% price increase effective 2026-12-01**,
  thread `1a210cb19bb24468`, 2026-11-25T03:34:44Z, UNREAD. It offers to **lock
  the current price if an order form is requested before that date**, and warns
  of "probably another shortly after". Two attachments — a futures chart and an
  internal memo — **not downloaded.** This is a **second** steel-building vendor
  in the record; the register's existing building contact is a different firm.
  **A dated, six-day decision that lands squarely on the facility programme
  T-164 gates.** Vendor name and contact withheld (A-17). **T-248.**
- **Nothing came in.** No order, no customer payment, no deposit.

**Every amount above is withheld under A-19 or A-30 as applicable. The 8% and
the "20 to 0" are not cash figures and are published in full.**

---

## 6. A returning customer's request that no row has ever carried

**The "Credits" thread was read this run** — three days after the 11-23 intake
named it a gap and the 11-24 intake named it again, saying it "deserves a read
in the next run". **It did, and it was worth it.**

Thread `19d7e991a1648bbe`, latest message 2026-11-23T16:32:03Z. What it
contains:

1. **A returning customer** with a specific vehicle already carrying a DD84
   exhaust-character tune, **asking for a different variant of it.**
2. **The vendor has declined to build it** — "We have not made this type of mod"
   — and **handed the work back**: "You could create a gun shot tune. We could
   then merge it into their preferred base tune."
3. **Nothing in the register mentions this customer, this vehicle or this
   request.** Searched the register for every term in the thread: no row.

**Three things follow, and none of them is mine to settle.**

- **It is not in the approved catalogue.** `ventures.md` prices Toyota/Lexus
  custom ECU tuning as a range; it has no rung for a bespoke exhaust-character
  variant. **Quoting one is Class E.** A-21 again.
- **It converts a pass-through cost into DD84 labour.** The vendor's credits
  model is the only cost input this record has ever had (T-107). A job the
  vendor won't build is **DD84's hours**, unpriced and unmeasured — which is
  exactly the hole T-186 describes.
- **It deserves a compliance read before a commercial one.** An exhaust-report
  tune raises noise-ordinance and durability questions that are the owner's to
  weigh. **It is not an emissions-equipment defeat and I am not implying it is**
  — but "the vendor declined to build this" is a fact worth sitting with.

**No draft was written, for a concrete reason: the customer's address is not in
this thread.** The thread runs between DD84 and the vendor; the customer is
described, never copied. **There is no recipient to draft to.** Withheld: both
vehicle identification numbers in the thread, and the customer-supplied
reference link, which was not followed. **T-249.**

---

## 7. Corrections — two, and both are to this record's own recent claims

### T-240's premise is false

The 11-24 intake wrote that the vendor whose charge has failed seven times "is
following up personally — from a named person at the vendor rather than a
billing robot", and that "the relationship, not just the payment, is now at
stake."

**I read the body this run. It is not a payment follow-up at all.** It is a
win-back note from the vendor's chief operating officer that opens by saying he
saw DD84 **recently unsubscribed** and asks what was lacking.

**So T-240 is struck.** The vendor is not chasing money in person; it is asking
why DD84 left.

**And the correction carries a new fact worth more than the one it replaces:
DD84 appears to have left that vendor.** Whether "unsubscribed" means the
service was cancelled or only the mailing list was left **is not established** —
and it matters, because **a charge failing seven times against a service the
business has already quit is a different thing from a collections risk.** T-227
should be re-read in that light. **T-251.**

### "The first observable credits cost" was not the first

The 11-24 intake called a tooling purchase "**the first observable parts-or-
credits purchase anywhere in this record**".

**That is wrong. T-94 is closed Done and its title records two credit purchases
with amounts, on 2026-10-24 and 2026-10-30, at a stated per-credit price** — a
month earlier.

**The narrower claim that survives is T-186's**: credits are bought and
recorded, but **no credit cost is attributed to any job**, so margin still
cannot be computed. That was the point worth making and the run overstated it.
**T-252.**

### The skeleton ordinals in this record are two counters wearing one name

**This one was caught before it was published rather than after.** This run was
about to write "twenty-eighth application of OL-0050" for its skeleton commit,
from memory. Checking first showed two things:

- **The ordinal was already taken.** An earlier log entry reads "`ba318f7` —
  OL-0050's repair, twenty-eighth application".
- **The ordinals do not form one sequence.** The highest in the record is
  **"thirty-fourth"**; the most recent, yesterday's intake, says
  **"twenty-sixth"**. A monotonic count cannot contain both.

**Two counters have been interleaved under one phrase for weeks** — skeleton
commits and judgements not to skeleton — and neither is now derivable. **An
ordinal nobody can recompute is a number without a source, which §5 calls a
defect.** So this run records the skeleton and omits the count.

**This belongs to the same family as T-208**, where a result-count estimate was
read as a count, and T-173, T-184, T-216 and T-238: **the instrument reported
something it was not measuring.** **T-253.**

---

## 8. Drafts prepared — NOT SENT

**No new draft was created, in this file or in the mail account.** Four
candidates were considered and each has a reason:

| Candidate                     | Why no draft                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------ |
| The Ram job                   | The owner is answering in the thread himself, hourly. Nothing to add           |
| The returning customer (§6)   | **No recipient address exists in the thread**                                  |
| The building vendor's lock-in | Requesting an order form to fix a price is a **financial commitment, Class F** |
| **The phishing attempt**      | **Replying is the attack.** The correct action is silence                      |

**The backlog is 52**, paginated to exhaustion. **The newest draft is still
2026-11-21T16:52:10Z — nothing created or cleared in four days.** **A-31 remains
unanswered.** T-228 stands.

The standing drafts for T-177 and T-95 remain **APPROVAL REQUIRED BEFORE SENDING
(Class C)** under A-29.

---

## 9. Conflicts found — paused, not resolved

- **A catalogue conflict (§6).** A returning customer wants a service with no
  rung in `ventures.md`, and the vendor who supplies the base has declined to
  build it. **Named, not priced.**
- **T-225's model-year conflict is unchanged** — the register says 2014, the
  delivered calibration's naming says 15. Nothing in today's mail bears on it.
  **Still open, still due.**
- **The routine's own query 1 still points at nothing** (T-238). The fix is
  proposed and not applied, because changing what an unattended routine does is
  the owner's call.

---

## 10. No action, with reason

- **Six vehicle-listing digests, two sourcing digests, two freelance digests,
  two professional-network notices, two sports newsletters, a prediction-market
  notice, a business-rewards mail and an idea newsletter** — marketing. No
  action.
- **Four stock-price alerts and a retail receipt** — personal, not business.
  **No business account figures present**, so nothing is withheld here.
- **An infrastructure security notice** about two image-processing libraries
  (`1a20fdb3db8e280f`) — a platform-wide advisory, not DD84-specific, and the
  record holds no DD84 service on that platform. **Noted, no row.**
- **A third-party access change on an ads platform becomes default-on
  2026-12-09** (`1a210049d6dcfdbc`) — this one **does** get a row, because
  default-on third-party data access is a settings decision with a date and the
  business pays that platform. Class G. **T-250.**

---

## 11. Proposed labels (not applied)

Labels remain Class B with no approved taxonomy. **Nothing was applied, moved,
archived or marked read.**

- **`DD84/Security`** → the three unread device notices **and the phishing
  attempt**. **This is the one to act on.** Three security notices scattered
  across the updates and personal tabs is how two days passed without anyone
  reading them.
- **`DD84/Identity`** → the two document scans. A label is the wrong tool for
  these; **A-33 is.** Proposed only so they are not lost in the meantime.
- `DD84/Job/Active` → the Ram thread.
- `DD84/Money/Dated` → the 8% increase and the ads-platform change, both with
  December dates.

---

## 12. Not checked this run

- **Stripe** — no MCP server exists. **The security notice was read from mail,
  not from the account.** Whether the sign-in was legitimate **cannot be
  established from here at all**; it needs the dashboard.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector. The card notice
  and the bank holiday were read from mail.
- **The second storefront's Merchant Center account** — **no connector.** The
  connected Shopify store was read live and is not the one that dropped. §1.3.
- **Supabase** — **no tool called.** The pause was read from mail. This remains
  deliberate and OL-0119 gives the corrected reason, which §1.4 now confirms
  from the vendor's own words.
- **Google Calendar** — not re-read this run; the daily brief reads it at
  10:51Z.
- **Attachments** — **none downloaded, opened or described.** That covers the
  calibration files, the datalogs, the two identity documents, the futures chart
  and the vendor memo.
- **Mail state** — nothing read, starred, labelled or marked. **All three
  security notices and the phishing attempt were left unread**, which is why
  they are §1 and not closed items.
