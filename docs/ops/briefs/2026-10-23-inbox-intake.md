# DD84 inbox intake — 2026-10-23

Run at **2026-10-23T10:21–10:55Z**. Window: **since OL-0062, 2026-10-22T10:20Z →
2026-10-23T10:20Z** (Gmail `after:2026/10/22`). Accounts scanned: **Gmail
(`downdirty84llc`)**, **Shopify**. Not reached: **Superhuman Mail** (needs
re-authentication); **Stripe, PayPal, bookipay, Square** (no connector — T-36).

Threads reviewed: **44** — 25 non-promotional and 19 promotional, pulled as two
queries with no continuation token on either, so both lists are complete.
Actionable: **8**. No-action: **36**.

> **The window was split by category this run** (`-category:promotions` then
> `category:promotions`). The 2026-10-22 run did not split it, so **the thread
> counts between the two runs are not comparable.** The split was to keep the
> promotional tail from crowding out the rest; **the promotional half was still
> read, and it contained nothing actionable.**

## Urgent — read first

### 1. DD84 was paid. $450.00, and the memo says "tune"

**2026-10-22T20:46:58Z — a Zelle transfer of $450.00 landed in the business
account. The memo field reads "tune".**

**`ventures.md` records DD84's last payment as 2025-09-12.** That makes this the
**first money in 405 days**, against an all-time total of $3,507.86 across 10
invoices and 3 customers.

| What is known                        | From                                                   |
| ------------------------------------ | ------------------------------------------------------ |
| **$450.00**, received 2026-10-22     | The bank's own notice                                  |
| Memo: **"tune"**                     | The same notice                                        |
| **Not a storefront sale**            | Shopify: **0 orders all-time**, verified live this run |
| **Not an existing Shopify customer** | A name search against the customer list returned empty |

**Withheld under §5:** the payer's name, the account digits, and the
confirmation code. **The amount and the memo are recorded** because A-13 already
accepts DD84's revenue figures in this repository; **the balance is not, because
A-19 is still pending.**

**$450.00 is exactly a catalogue rung.** It is the **Street Tune** price on the
GM, Ford and Dodge/Mopar custom ECU tuning services (`DD84-*-TUNE-STREET`), and
it was the Street rung of the archived Holley product. **That is unlikely to be
coincidence** — but which rung was actually sold is not established, and is not
asserted.

**This bears directly on yesterday's pricing work.** A-21 proposes **$349 for
T-37 and $350 for T-64**, both on the rung below. **A customer has now paid $450
for something described as a tune** — the first market evidence in 13 months of
what DD84's customers will actually pay. **It does not invalidate A-21**, whose
rungs were argued from the published scope of each job, **but it is the
strongest argument yet that the floor is not where the register has been
assuming.**

**The payer appears to be neither live-job customer.** The name on the transfer
does not correspond to either correspondent on threads `1a1082503004a073` (C10)
or `1a0e402cdcf75731` (Challenger). **That is suggestive, not identification** —
a legal name and an email handle are different things, and no payment system is
readable to confirm it.

**If it is a third job, it is the second unrecorded live job this register has
discovered**, after T-64. **Raised as T-88, and it is the highest-value open
question in the register**: money arrived and nobody here knows what for.

### 2. The bank answered yesterday's question in its own words

**2026-10-22T12:45:11Z — "Your card was declined. … Declined as your card is
off."**

**Yesterday's intake raised exactly this as a hypothesis with two candidate
causes and no evidence separating them.** The bank has now separated them. **At
least one decline is caused by a card the owner switched off, not by a shortage
of funds.**

**T-71 reads "The business bank account is overdrawn; two payments declined."
That sentence conflates two different failures** and the conflation has been
driving the task's priority since it was raised. The overdraft is real and
separately evidenced; **the declines are now partly explained by card state.**

**And card state was being actively worked.** A second debit card was toggled
**off and on four times in under twelve hours**:

| Notice time (UTC)    | State       |
| -------------------- | ----------- |
| 2026-10-22T12:57:27Z | off         |
| 2026-10-22T13:09:00Z | **back on** |
| 2026-10-22T13:19:31Z | off         |
| 2026-10-22T13:34:04Z | **back on** |
| 2026-10-22T22:53:09Z | off         |
| 2026-10-22T23:46:48Z | **back on** |
| 2026-10-23T00:09:49Z | off         |
| 2026-10-23T00:28:52Z | **back on** |

International usage was also turned off on that card at 13:22:23Z. **Eight state
changes plus a control change is somebody trying to force a specific payment
through**, which is consistent with item 3. **Card digits withheld; the two
cards are distinguished here only as "the business debit card" and "a second
card".**

### 3. Shopify billing failed, and the storefront is the catalogue

**2026-10-22T12:35:23Z — "We couldn't process your last bill payment of $39.00
USD for Down Dirty 84 LLC. We'll try again…"**

**Ten minutes before the card-declined notice.** Same morning, same account, and
the decline reason given by the bank was card state. **That is a plausible
common cause and it is flagged as plausible, not established** — the Shopify
notice does not name the instrument it tried.

**Why this is urgent rather than administrative:** the storefront is where the
**entire approved price ladder lives**, and yesterday's pricing of T-37 and T-64
was read out of it. **A store suspended for non-payment takes the catalogue, the
digital products and the payment links with it.** Shopify says it will retry;
**a retry against an instrument that is off will fail again.** Raised as
**T-89**.

### 4. The Colbert site took two near-fatal answers in one day

Two agencies answered on 2026-10-22, and **both answers are discouraging**:

| Source                                | When                 | What it said                                                                                                                              |
| ------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Piedmont Water**                    | 2026-10-22T13:46:38Z | **"As of right now there is no more connection to the water system in the Colbert area."**                                                |
| **Georgia DPH, environmental health** | 2026-10-22T17:56:52Z | **"it might be quite difficult to get everything to fit on the parcel: the shop, parking, and the septic system (and replacement area)"** |

**No public water, and a lot that may not physically fit the use.** The parcel
is recorded at **0.638 acres**.

**GDOT answered two of the three questions A-15 asked**, on 2026-10-22 at
13:16:01Z and 15:00:25Z: driveway width and radii are governed by the
Regulations for Driveway & Encroachment Control Manual, and on a traffic study —
**"I am unable to say as of now based on the information provided. It may not be
needed if all standards and regulations can be achieved."**

**The 2026-10-21 register note said: "Do not engage a surveyor before those
three answers."** Two have arrived and **both point away from the site.** This
is **T-38** and **T-78**, and it is a reason to stop before survey and civil
design money is committed, not after. **No task status was changed on the
owner's own project without him** — recorded, flagged, and left to him.

### 5. Four external messages left this account in eleven seconds

On 2026-10-22, four substantive follow-ups went out to four different recipients
— GDOT, Colbert City Hall, Piedmont Water and Georgia DPH — at **13:40:03Z,
13:40:07Z, 13:40:10Z and 13:40:14Z.**

**This weakens the explanation this register reached yesterday.** T-85 step 1
recorded that a third external message on 2026-10-21 was most plausibly the
owner's own send, on the reasoning that he sends his own mail. **A person does
not compose and send four distinct substantive follow-ups in eleven seconds.**

**It is not resolved and is not being resolved by inference.** A batching tool,
a scheduled automation, or another agent on this account would all produce this
pattern, and the first two are unremarkable. **But "the owner typed them" is no
longer a sufficient account**, and that was yesterday's reading. **T-85 step 1
moves from a wording question to a control question** — and the correction
belongs on the record because it was this register's own conclusion that got too
comfortable.

## New leads

**None.** **Fifth consecutive run with no new enquiry.** A $450 payment arrived,
which is better than a lead — **but nobody new asked about a car.**

| Lead              | Contact | Vehicle / engine | Requested | Source | Urgency | Missing info | Task |
| ----------------- | ------- | ---------------- | --------- | ------ | ------- | ------------ | ---- |
| _(none this run)_ | —       | —                | —         | —      | —       | —            | —    |

## Existing customers needing a reply

| Customer                    | Thread             | Age                        | Draft ready               | Task     |
| --------------------------- | ------------------ | -------------------------- | ------------------------- | -------- |
| **The Challenger customer** | `1a0e402cdcf75731` | **log unread 8.8+ days**   | **Yes — A-20**, unsent 2d | **T-64** |
| **The C10 customer**        | `1a1082503004a073` | **DD84 last spoke 9.6+ d** | **Yes — A-20**, unsent 2d | **T-37** |
| **The Lexus enquirer**      | `1a0a565f802fc60b` | past the proposed close    | **Yes — A-20**, unsent 2d | **T-66** |
| **Whoever sent $450**       | unknown            | paid 2026-10-22            | **No — see below**        | **T-88** |

**Neither priced job's thread moved in this window.**

## Drafts prepared — NOT SENT

**None this run, and the reasons matter more than the count.**

**1. The $450 payment deserves an acknowledgement and did not get a draft.**
Receipting a payment is ordinarily the easiest reply there is. **But DD84 does
not know what this payment is for**, and a thank-you that names the wrong job,
or implies work is complete, is worse than silence. **The owner identifies the
job first (T-88); the acknowledgement is one line after that.** Writing it now
would mean inventing the job it refers to.

**2. The land-project threads were left alone deliberately.** Piedmont Water and
Georgia DPH both asked questions back, and both deserve replies. **But something
is sending into those threads on an eleven-second cadence** (item 5), and
**drafting into a thread that another process is actively working risks a
collision that lands on a state agency.** Named, not drafted.

**3. A-22's supplier draft is still the only draft awaiting approval**, now
joined by **A-20** (three messages) and **A-21** (two prices). **Six messages
and two prices are queued behind the owner.**

## Conflicts found

**1. T-71's own title conflates two failures.** "Overdrawn; two payments
declined" — the bank now attributes at least one decline to card state.
**Recommended controlling source: the bank's decline notice, which names its own
reason.** The overdraft stands on its own evidence. **Nothing was changed in
T-71's status**; the correction is recorded against it.

**2. Yesterday's reading of the third external send is weakened by today's
four-in-eleven-seconds.** Both observations are this register's own.
**Recommended controlling source: neither — the question goes to the owner**,
which is what T-85 step 1 already asks. **It is now more urgent, not less.**

**3. $450 paid versus $349 and $350 proposed.** Both are real: A-21's rungs were
argued from each job's published scope, and the payment is a different
transaction for an unknown job. **No price was changed and A-21 is not
withdrawn.** But the register should stop treating the low rung as the default —
**flagged into T-88 and T-84, not resolved here.**

**4. The checkout test is still stale.** 28 expected, **54 tracked**, no `src/`,
no `package.json`, no application code. Third run reporting it. **T-85 step 3.**

## No action, with reason

| Source                                                                                                           | Why no action                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Stripe security advisory** — outdated Node.js, critical RCE                                                    | **Ledger-side.** The only Node application here is the other venture's. **T-87 family; nothing touched.** |
| **Render security advisory** — industry-wide disclosures                                                         | Generic advisory, Ledger-side infrastructure. Same boundary                                               |
| Capital One "we've received your payment"                                                                        | An outbound payment succeeded. Recorded against **T-83**; no figure, A-19 pending                         |
| Capital One CreditWise ×2                                                                                        | Informational. **No score or figure recorded**                                                            |
| Google sign-in notices — land.com, Best Buy                                                                      | Owner activity, consistent with the land project                                                          |
| Wells Fargo equity price alert                                                                                   | Personal brokerage, not business cash                                                                     |
| CarGurus ×7, NFL ×2, Alibaba ×3                                                                                  | Saved-search and newsletter traffic                                                                       |
| Lindy.ai "Re: Re: Re: Re: Quick chat?"                                                                           | Cold sales outreach, fourth follow-up. **Propose a block rather than a reply**                            |
| Nav, TikTok Shop ×2, Pinterest ×3, Linear changelog                                                              | Vendor and platform marketing                                                                             |
| RockAuto, JEGS, BoostDistrict, Bambu Lab, Micro Center, Elegoo-class retail, TJ Maxx ×2, Dunkin, Olo, NXP, Hertz | Promotional. **All 19 promotional threads were read; none actionable**                                    |

## Proposed labels (not applied)

**Labels remain Class B with no standing approval. None applied.**

`cash/received` (**new — there was no label for money arriving, which says
something**) · `cash/alerts` · `cash/declined` · `cash/card-state` (new) ·
`platform/billing-failed` (new) · `platform/failed-publish` · `compliance/state`
· `land/colbert` (new — four agency threads now) · `partner/reseller` ·
`vendor/promotional` · `personal/family`

## Not checked this run

- **Superhuman Mail** — needs re-authentication. Mail reaching only that client
  is unseen by every run.
- **Stripe, PayPal, bookipay, Square** — no connector. **So the $450 could not
  be reconciled against any payment system**; it is known only from the bank's
  notification mail. **Shopify was reachable and rules out a storefront sale.**
- **Google Calendar** — not re-read this run; the 2026-10-22 run found **no
  events through 2026-10-29** and nothing in this window suggests a booking.
- **Google Drive** — not re-read this run. No Drive notification appeared in the
  window.
- **The 5.6 MB GDOT permit-review checklist**, still unread — no session here
  has an attachment-download tool.
- **The Challenger customer's 2.8 MB datalog**, still unread.
- **Whether the $450 covers T-37, T-64, or a third job.** **Unknown, and unknown
  is not assigned.**
