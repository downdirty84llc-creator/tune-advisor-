# DD84 inbox intake — 2026-10-26

Run at **2026-10-26T10:21–10:50Z**, Monday. Window: **since OL-0063,
2026-10-23T10:20Z → 2026-10-26T10:20Z — 72 hours, covering the weekend.** No
routine fires Saturday or Sunday, so **this is the first look at three days of
mail.**

Accounts scanned: **Gmail**, **Shopify**. Not reached: **Superhuman Mail**
(needs re-authentication); **Stripe, PayPal, bookipay, Square** (no connector —
T-36).

Threads reviewed: **67** — 50 + 17 across two pages of the non-promotional
query, continuation exhausted. Actionable: **11**. No-action: **56**.
**Promotional traffic was not separately enumerated this run**; the window is
three days and the money is in the non-promotional half.

> **A worker restart hit this run mid-gather.** The skeleton had been committed
> (`b2cb87c`), so the run resumed instead of dying. **Fourth restart in five
> days; third run saved.**

## Urgent — read first

### 1. The storefront made its first sale in its entire existence

**Shopify order #1001. $550.00. PAID. FULFILLED. Two line items.** Placed
**2026-10-23T11:56:43Z**. Verified live in Shopify this run:
`gid://shopify/Order/7017291448367`, **and `totalCount` is 1** — the store has
never had another order.

The order mail names the first line item: **"Standard Dodge / Mopar PCM Unlock
Service — $300.00 × 1"**, plus a second PCM-unlock-related item that makes up
the balance. **The second item's description was truncated in the notification
and is not reconstructed here.**

**`ventures.md` is wrong and I wrote the wrong figure into it.** On Friday the
cash review re-verified "Shopify orders, all time: **0**" and stamped it
**2026-10-23**. **The order was placed at 11:56:43Z. The verification ran
between 11:13 and 11:40Z.** The figure was true when read and false **about
seventeen minutes later.**

**That is not a reporting error, and it is not a vindication either.** The
30-day rule caught a stale figure and replaced it with a fresh one, and the
fresh one went stale inside the hour. **The lesson is about the shape of the
claim, not the number: "0 orders all time" was being used as a structural fact
about the business — "100% of revenue came from invoiced service work, 0% from
the storefront" — when it was a running total that one customer could change.**
`ventures.md` is corrected in this run. **T-91.**

### 2. A second unattributed payment: $700.00, memo "mecanic tune"

**2026-10-24T22:31:55Z — $700.00 by Zelle.** The memo reads **"mecanic tune"**
(spelling as received). **The payer is a limited liability company**, not a
private individual — identity withheld under §5.

**A business paying for a tune is shop-to-shop work**, which is a catalogue
category DD84 has rungs for. **But $700.00 is not one of them.** The nearest
approved rungs are the **$650 Performance Tune** on the GM/Ford/Mopar services
and **$749** for in-person swap commissioning. **$700 sits between two rungs and
matches neither.** Which service was sold, and whether a price was agreed
off-catalogue, is unknown. **T-92.**

### 3. Three payments in four days, and the business is unrecognisable

| When                 | Amount        | Route   | Attributed to          |
| -------------------- | ------------- | ------- | ---------------------- |
| 2026-10-22T20:46:58Z | **$450.00**   | Zelle   | **Nothing — T-88**     |
| 2026-10-23T11:56:43Z | **$550.00**   | Shopify | **Order #1001 — T-91** |
| 2026-10-24T22:31:55Z | **$700.00**   | Zelle   | **Nothing — T-92**     |
| **Total**            | **$1,700.00** |         |                        |

**$1,700 in four days, against an all-time total of $3,507.86 built over the
business's whole life** — **48% of everything DD84 had ever collected, in four
days**, after 405 days of nothing.

**Two of the three cannot be attributed to a job.** Only the Shopify order
carries a line item. **The register now has more unexplained revenue than
explained.**

### 4. T-89's prediction was confirmed, and the bill failed again

T-89 said on Friday: _"a retry against a stopped card is not a second chance."_

- **2026-10-24T12:11:22Z — Shopify billing failed again. $39.00.**
- **2026-10-24T12:20:23Z — "Your card was declined … Declined as your card is
  off."** Nine minutes later, the same stated reason as 10-22.

**That is the predicted failure, observed.** The instrument is still off, the
retry still hit it, and **the store is now two failed bills deep while holding
$550 of settled revenue.** **T-89 stands and is now evidenced twice.**

**And the toggling continued through the weekend** — card off 2026-10-23T12:41,
back on 14:35. **At least thirteen off/on notices since 2026-10-16.**

### 5. A message went to a customer signed by a name this register does not know

**2026-10-24T00:13:46Z**, sent from the Shopify store to the order #1001
customer:

> _"This is [a first name] with Down Dirty 84 LLC. Please confirm whether the
> PCM unlock and tuning service listed on order #1001 has been completed and you
> have received the service."_

**That first name appears nowhere in this register, nowhere in `ventures.md`,
and is not the owner's.** The name is withheld here.

**This is a customer-facing communication from a person the operating record has
never heard of.** It may be entirely legitimate — a nickname, a family member, a
helper, a contractor. **But it is the third signal in four days that
communications leave this business from places this register cannot see**, after
the third external send (T-85 step 1) and the four-messages-in-eleven-seconds
burst. **T-93**, and it escalates T-85 rather than duplicating it.

## New leads

**One — the first in five runs.**

| Lead                  | Contact                                | Vehicle / engine | Requested                                                        | Source            | Urgency | Missing info                                                                                  | Task     |
| --------------------- | -------------------------------------- | ---------------- | ---------------------------------------------------------------- | ----------------- | ------- | --------------------------------------------------------------------------------------------- | -------- |
| **A Sunday enquirer** | Withheld §5. Thread `1a174388c7b0c461` | **missing**      | **missing** — the message only asks whether this is the business | **Unknown — ask** | Normal  | **Everything.** Name, vehicle, engine, transmission, modifications, location, service, source | **T-95** |

**2026-10-25T17:57:58Z**, one line: **"Is this downdirtyllc?"** with _"Happy
Sunday?"_ in the body. **Unread.**

**It is barely a lead and it is a real human being asking whether the business
exists.** `ventures.md` records the channel producing DD84's customers as
`UNKNOWN`, and **three jobs this month arrived through it unseen.** **This one
can be asked directly**, which makes it worth more than its length suggests.
**Draft below.**

## Existing customers needing a reply

| Customer                     | Thread             | State                                                                                   | Task           |
| ---------------------------- | ------------------ | --------------------------------------------------------------------------------------- | -------------- |
| **The order #1001 customer** | Shopify order      | **Paid and fulfilled.** Already asked to confirm delivery — **by someone unidentified** | **T-91, T-93** |
| **The Challenger customer**  | `1a0e402cdcf75731` | **Log still unread since 2026-10-13 — 12.8 days**                                       | **T-64**       |
| **The C10 customer**         | `1a1082503004a073` | DD84 spoke last 2026-10-12 — **13.6 days**                                              | **T-37**       |
| **The Lexus enquirer**       | `1a0a565f802fc60b` | Past the proposed close                                                                 | **T-66**       |
| **The $450 payer**           | unknown            | **Paid 2026-10-22. Still no acknowledgement**                                           | **T-88**       |
| **The $700 payer**           | unknown            | **Paid 2026-10-24. Still no acknowledgement**                                           | **T-92**       |

**Both priced jobs went backwards over the weekend.** A-20's drafts and A-21's
prices are now **four days unanswered** while **$1,700 arrived from elsewhere.**

## Drafts prepared — NOT SENT

### Draft 1 — the Sunday enquirer (T-95)

- **Recipient** thread `1a174388c7b0c461`. Address withheld here.
- **Subject** `Re: Is this downdirtyllc?`
- **Where it lives** **this file only.** No draft was created in the mail
  account.

> Hi,
>
> Yes — you have the right place. This is Down Dirty 84 LLC: remote ECU and EFI
> calibration, diagnostics and PCM services.
>
> Happy to help. So I can tell you whether it's something we support and what it
> would involve, could you send me:
>
> - Year, make and model
> - Engine, and transmission
> - ECU or controller, and the tuning software you're using if any
> - Modifications — cam, intake, exhaust, injectors, fuel system, power adder
> - What the car is doing, or what you want it to do
> - Roughly where you're located
>
> One more thing, if you don't mind: how did you come across us? It genuinely
> helps me know which channels are working.
>
> Once I have that I'll tell you straight whether it's a fit, and what the right
> service and price would be.
>
> Mark Down Dirty 84 LLC

- **What it commits DD84 to** **An assessment of fit, and a price once the
  vehicle is known. No price, no turnaround and no promise of a result.** It
  claims no capability beyond what `ventures.md` lists.
- **Why the source question is in it** — the enquiry channel is recorded as
  `UNKNOWN` and **three paying jobs this month came through it unseen.** This is
  the first enquirer who can simply be asked.
- **APPROVAL REQUIRED BEFORE SENDING (Class C).** Packet **A-23**.

**No draft for either unattributed payer**, for the same reason as Friday:
**DD84 does not know what either payment bought**, and a receipt that names the
wrong job or implies completed work is worse than silence. **T-88 and T-92 step
1 are one sentence each from the owner.**

**No draft to the order #1001 customer** — **the store has already written to
them**, and a second message from a different quarter about the same order would
be worse than none. **T-93 settles who speaks first.**

## Conflicts found

**1. `ventures.md` said 0 Shopify orders; there is one.** Both were true, 17
minutes apart. **Controlling source: Shopify, read live.** Corrected this run,
with the timing recorded so the correction is not mistaken for a sloppy read.

**2. "100% of revenue came from invoiced service work. 0% from the
storefront."** That sentence is in `ventures.md` and is **now false** — $550 of
$1,700 this week came through checkout. **Corrected.** The underlying claim it
was making — that self-serve digital products are not the revenue model — **is
still supported**: order #1001 is a _service_, bought through checkout, not a
digital download. **The correction is to the figure, not the strategy.**

**3. $700.00 matches no approved rung.** The ladder has $650 and $749 either
side. **Nothing was changed** — whether a price was agreed off-catalogue is the
owner's to say. **T-92.**

**4. The checkout test is still stale** — 28 expected, **57 tracked**, no
`src/`, no `package.json`, no application code. **Fifth run reporting it. T-85
step 3.**

## No action, with reason

| Source                                                                                       | Why no action                                                                                                                                        |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **~8 child-account app-install notices**                                                     | **Personal, concerning minors. §5 — no names, devices or app names recorded, now or ever**                                                           |
| **GitHub device-verification request**, 2026-10-23T18:28Z                                    | **A sign-in needed verification from an unrecognised device.** Folded into **T-85 step 2** alongside the Stripe sign-in — same question, same owner  |
| **GitHub: Ledger PR #7, "Require October 2026 Node security patches"**                       | **Ledger-side, and it answers the Stripe advisory**: someone has opened a PR to patch it. **T-87 family. Nothing touched**                           |
| Stripe + Render security advisories (repeats)                                                | Ledger-side infrastructure. Same boundary                                                                                                            |
| **Shopify: identity verified, new sign-in, taxes-included toggled on then off** (2026-10-23) | **Owner activity, named in the notices, around the first sale.** Recorded as context for T-91, not as a fault                                        |
| **Legal-counsel outreach for the Ledger** ×2, 2026-10-23T12:01Z                              | **Ledger business, in DD84's mailbox.** Relevant to T-45 / A-06. **Named recipients withheld** (A-17 pending). **Nothing written to `docs/growth/`** |
| **Pinterest: "You're a Verified Merchant"**                                                  | Growth. **Rev's, not this routine's**                                                                                                                |
| Fidelity retirement statement, IHOP order                                                    | Personal                                                                                                                                             |
| CarGurus ×16, Alibaba ×3, NFL ×2, Speedway, Kalshi, creditbooster, NXP                       | Newsletters and saved-search traffic                                                                                                                 |
| Wells Fargo equity price alerts ×2                                                           | Personal brokerage, not business cash                                                                                                                |
| **PayPal-branded card locked**, 2026-10-26T10:05Z                                            | **Another instrument locked, this morning.** Pattern evidence under **T-71**; no figure recorded                                                     |

## Proposed labels (not applied)

**Still Class B with no standing approval. None applied.**

`cash/received` · `cash/declined` · `cash/card-state` · **`order/storefront`
(new — there was no label for a Shopify order because there had never been
one)** · `platform/billing-failed` · `lead/new` · `compliance/state` ·
`land/colbert` · `partner/reseller` · `vendor/promotional` · `personal/family`

## Not checked this run

- **Superhuman Mail** — needs re-authentication.
- **Stripe, PayPal, bookipay, Square** — no connector. **So neither Zelle
  payment could be reconciled**, and both rest on bank notification mail.
  **Shopify was reachable and settled order #1001 directly.**
- **The second line item on order #1001** — truncated in the notification, **not
  reconstructed and not guessed.** The order total is read from Shopify; the
  split is not.
- **The HP Tuners purchase amount** — order #2021394 for "Universal Credits",
  received and completed 2026-10-24T22:19Z. **Amount not in the notification and
  not estimated. T-94** — it bears on margin, because unknown tuning-credit
  balances are part of why no job can be margined.
- **Google Search Console**, 2026-10-25T21:34Z: **new indexing failures on the
  business site, "duplicate without user-selected canonical."** Not diagnosed
  this run. **T-96.**
- **Google Calendar and Google Drive** — not re-read; no notification in the
  window suggested a change.
- **Whether either Zelle payment covers T-37, T-64, or neither.** Unknown, and
  **unknown is not assigned.**
