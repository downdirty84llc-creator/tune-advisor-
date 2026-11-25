# DD84 inbox intake — 2026-11-25

**SKELETON — committed mid-run under OL-0050 so a worker restart cannot destroy
it. The full intake replaces this file in the same run.**

Run started 10:22:50Z. Window: `newer_than:1d` (since 2026-11-24 10:21Z).
Accounts scanned: Gmail, the business account. Not reached: Superhuman Mail,
Stripe (no MCP server exists), PayPal, Canva.

## 0. Checkout

`HEAD` equals origin at **`3160285`**, no `src/`, clean, **110 tracked files
against the prompt's 28 — fifty-eighth run reporting the drift** (A-10).

## The findings, in the order they matter

1. **A live calibration job moved six revisions in four days, two of them in the
   last 24 hours, and still has no price.** The Ram thread now holds 19
   messages: DRAFT 1 through DRAFT 6, the last sent 2026-11-25T01:08:23Z against
   a wide-open-throttle datalog the customer returned at 00:36:31Z. **A-21 row 1
   is the only thing between this and an invoice.**
2. **T-237's security notice is still unread.** Confirmed live: thread
   `1a20a3a6463daace` still carries `UNREAD`. It was due 2026-11-24. **It is now
   the second day nobody has looked at an unrecognised sign-in on a payment
   processor.**
3. **A second phishing attempt arrived, and it is aimed at the storefront.** A
   sender using a lookalike domain — "official-" prefixed to Shopify's name,
   which is not Shopify's own domain — asks the owner to reply confirming what
   notices he has received. **Gmail marked it IMPORTANT and filed it as
   personal.** Unread. No link, no store name, no order number: it is reply-bait
   to confirm a live target.
4. **Merry Market's Google Shopping surface went to zero.** Free listings fell
   **100%, from 20 active items to 0**, between 2026-11-24 13:00 and 19:00 EST.
   "The dropped items are currently not available in any Google products."
5. **The Supabase project is now actually paused**, not warned. The cause is
   stated by the vendor: automatic pause of free-tier projects **after 7 days of
   inactivity**. **90 days to unpause**, then no restore but data stays
   downloadable. T-229 was the warning; this is the event.
6. **Two scanned government identity documents are sitting in the business
   inbox**, and their OCR'd text — a licence number and a date of birth among it
   — **is in the Gmail subject lines**, so it shows in every list view and
   search result. Identifiers withheld. This is a category A-13 does not reach.
7. **A steel-building vendor announced an 8% price increase effective
   2026-12-01** with a lock-in window before that date, and warns of another
   after. Six days out, and it lands on the facility programme T-164 gates.
8. **The "Credits" thread was read at last** — three days after this record
   named it a gap. It carries **a returning customer asking for a tune variant
   the vendor has declined to build and handed back to DD84.** Not in the
   register until now.
9. **A correction.** Yesterday's intake called the tooling purchase "the first
   observable parts-or-credits purchase anywhere in this record". **T-94 already
   recorded two credit purchases with amounts in October.** The claim was wrong;
   what survives is T-186's narrower point.

Remaining sections — new leads, the full draft position, no-action records,
proposed labels and what was not checked — are in the full intake.
