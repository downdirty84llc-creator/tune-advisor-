# Legal review packet

**This is not legal advice, and nothing here clears the review.** It was
prepared by an engineer, not a lawyer, to make an attorney's time cheaper: the
documents in `src/lib/legal/documents.ts` are compared against what the code
actually does, so counsel reviews an accurate description rather than
discovering the mismatches themselves at an hourly rate.

Every `requiresReview: true` flag stays true until counsel says otherwise.
Setting one to `false` is the sign-off, and only the owner acting on counsel's
advice should do it.

---

## Before counsel opens this: the four promise-vs-product gaps are now closed

This section recorded four places where the documents described behaviour the
software did not have. All four have since been built rather than reworded, so
counsel is now reviewing an accurate description — which was the point of
settling them first. Each is kept below with what was built, because the
implementation is what counsel is signing off, not the promise.

The remaining questions for counsel are further down and are ordinary drafting
and jurisdiction questions.

### 1. Account deletion — ~~promised, not built~~ **now built**

> *Privacy Policy, "Your controls":* "From your account you can … request
> deletion of your account." … "A deletion request removes your profile,
> preferences, saved records and saved searches."

**Resolved.** `POST /api/v1/account/deletion` records the request and closes
the account immediately; `DELETE` withdraws it. The control is on the account
page behind a typed `DELETE` confirmation.

Access ends at once — `effective_access_rank` returns 0 for any account that is
not active — but the data survives a **30-day grace window**, after which the
daily `prune` job purges it. That ordering is deliberate: deletion is
irreversible, so a mistake or a compromised session should not destroy an
account outright.

The purge is a single `auth.users` delete. The cascade takes the profile,
preferences, saved records, saved searches, alert preferences, notifications
and the subscription cache; `audit_logs`, `billing_events`, `analytics_events`,
`support_tickets` and `correction_requests` are `on delete set null`, so they
survive **de-identified**. The append-only audit trail is not rewritten by
someone closing their account, and the retention promise holds without a
hand-maintained list of tables that would rot the first time one was added.

Two guard details worth counsel knowing: a **suspended** account cannot use
this route, so closing and reopening cannot be used to escape a suspension; and
migration `…002400` widens the profile-privilege trigger by exactly two
transitions on the caller's own row rather than by letting members set their own
status.

### 2. Data export — ~~promised, not built~~ **now built**

> *Privacy Policy, "Your controls":* "you can … request an export of your data"

**Resolved.** `GET /api/v1/account/data-export` returns the member's own
record as a JSON download: profile, preferences, subscription summary, saved
records and notes, saved searches, alert preferences, notifications, support
tickets and correction requests. Distinct from `/api/v1/exports/opportunities`,
which remains the paid research product.

Everything is read through the **session-bound** client, so row-level security
decides what is in the file — the endpoint cannot over-share even if a query is
wrong. It is delivered inline rather than through the export-job pipeline,
because storing a second copy of somebody's personal data in a bucket to hand
them their own record is worse on both privacy and latency.

### 3. Analytics opt-out — ~~promised twice, not built~~ **now built**

> *Privacy Policy:* "manage cookie preferences"
> *Cookie Policy, "Analytics":* "You can opt out from your account without
> losing any functionality."

**Resolved.** `user_preferences.analytics_enabled` (migration `…002300`,
default `true`) is the flag; the control is on `/account/preferences`; and
`track()` checks it before writing to `analytics_events` or forwarding to
PostHog. The account page card now links to the control rather than to the
policy describing it.

The consent lookup **fails closed** — the opposite of the rate limiter. If the
preference cannot be read, the event is dropped, because recording a member
whose consent cannot be confirmed is precisely what the policy forbids. It is
memoised for thirty seconds so a page of events costs one read rather than
several, and so an opt-out takes effect in seconds rather than at the end of a
session.

Counsel should still confirm the *wording*, and note the default is opt-out
rather than opt-in — appropriate for first-party product analytics under US
law, but not under an opt-in consent regime if members in such jurisdictions
are ever in scope.

### 4. Refund workflow — ~~described, not built~~ **now built**

> *Refund Policy:* "Refunds are approved by a billing manager and every refund
> action is recorded in the audit log."

**Resolved.** `POST /api/v1/admin/refunds` issues the refund through Stripe
and writes the `billing.refunded` entry via `log_admin_action`, so both halves
of the sentence are now true.

Access is a **role** check — billing manager or super administrator. A Premium
member has rank 30 and cannot reach it; a billing manager has no paid plan and
can. The audit entry is written *after* Stripe confirms, so the trail can never
claim a refund that did not happen; if the entry itself fails the response says
`audited: false` rather than reporting clean.

Refunds still require a note explaining the approval, which is stored on both
the Stripe refund metadata and the audit entry.

---

## Document inventory

There are **ten** documents, not twelve. `README.md`, `CLAUDE.md`,
`MILESTONES.md` and `RUNBOOK.md` all said twelve; that is corrected in the same
change as this file. Counsel should be quoted for ten.

Only **seven** carry `requiresReview: true`. The three editorial documents are
marked as not requiring it, on the reasoning that they describe internal
process rather than creating obligations — which is itself a question worth
putting to counsel, since published standards can be read as representations.

| # | Slug | Title | Flagged for review |
| --- | --- | --- | --- |
| 1 | `terms` | Terms of Service | yes |
| 2 | `privacy` | Privacy Policy | yes |
| 3 | `subscription-terms` | Subscription Terms | yes |
| 4 | `refunds` | Refund and Cancellation Policy | yes |
| 5 | `editorial-standards` | Editorial Standards | **no** |
| 6 | `corrections` | Corrections Policy | **no** |
| 7 | `data-sources` | Data Source Policy | **no** |
| 8 | `cookies` | Cookie Policy | yes |
| 9 | `copyright` | Copyright Policy | yes |
| 10 | `disclaimers` | Disclaimers | yes |

---

## What was verified as accurate

Offered so counsel can spend their time on the drafting rather than on
confirming the engineering. Each of these was checked against the code:

- **Three-day past-due grace.** Subscription Terms describe access continuing
  "while the card is retried and for three days afterwards". This matches
  `public.past_due_grace_period()` (`interval '3 days'`) and the TypeScript in
  `src/lib/billing/subscription.ts`.
- **Downgrades defer to period end.** `change-plan` sets the proration
  behaviour by direction and does not apply a downgrade mid-period.
- **A suspended account can still appeal.** The `support_tickets_insert` policy
  admits an insert from a non-active account when `category = 'account'`, which
  is what the Terms describe.
- **Card data is never received.** Checkout and the customer portal are hosted
  by Stripe; no card number reaches this application or its database.
- **Automation requires a terms review.** The Data Source Policy claims this is
  "enforced by a database constraint, not by policy alone". It is —
  `sources.automation_requires_review` in migration `…000600`.
- **The audit log cannot be rewritten.** `audit_logs` has no update or delete
  policy for any role, including super administrators.

---

## Questions for counsel

Grouped so they can be answered in one pass.

**Jurisdiction and consumer law**

1. The service is Georgia-focused but sold online to anyone. Which state
   privacy regimes are assumed to apply, and does the Privacy Policy need
   CCPA/CPRA-specific disclosures and a "Do Not Sell or Share" position?
2. Automatic renewal: are the pre-checkout disclosures and cancellation path
   sufficient under applicable automatic-renewal laws? Cancellation is
   self-service through the Stripe portal, which is the strong position, but
   the disclosure wording has not been reviewed.
3. Is the liability cap (twelve months of fees) enforceable as drafted, and
   does it need a conspicuousness treatment — capitals, separate acceptance —
   rather than sitting as ordinary body text?

**The product's core risk**

4. The Disclaimers are the load-bearing document: the product reports on
   property and funding without being a broker, lender or adviser. Are the
   real-estate and funding disclaimers sufficient to avoid an
   unlicensed-brokerage or loan-brokering characterisation in Georgia?
5. Scores are presented as a ranking, explicitly "not predictions of outcome".
   Is that framing adequate, given members pay for the scoring?
6. Tax and sheriff sale coverage mentions redemption periods and encumbered
   title. Does this need stronger, more prominent warning given the potential
   loss?

**Content and sources**

7. The compilation is claimed as proprietary while underlying facts are not.
   Is the intellectual-property section adequate for a database of public
   facts?
8. Copyright: does the takedown section need formal DMCA safe-harbour
   structure — a registered agent, the statutory elements, a counter-notice
   procedure — or is the informal process defensible given we publish our own
   compilation rather than host user uploads?
9. Redistribution is confirmed per source before publication. Is per-source
   terms review plus attribution a sufficient posture?

**Operational**

10. Should the three editorial documents (5–7 above) also be reviewed, given
    published standards may be read as representations?
11. What retention periods should replace the current general statement that
    billing records are kept "where we are required to keep them"?
12. Is a data processing agreement or subprocessor list required, given
    Supabase, Stripe, the email provider, Sentry and PostHog all process member
    data?

---

## Suggested order

1. **Owner decides** on the four gaps above — build or reword. Counsel cannot
   usefully review a document whose factual basis is about to change.
2. Counsel reviews all ten, answering the questions above.
3. Corrections applied to `src/lib/legal/documents.ts`.
4. `requiresReview` flipped to `false` per document as each is signed off, and
   the date and reviewer recorded.
5. The launch checklist item in `RUNBOOK.md` is ticked only when all ten are
   cleared.
