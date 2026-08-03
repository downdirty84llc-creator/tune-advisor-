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

## Before counsel opens this: four documents promise things the product does not do

These are not drafting questions. They are representations to consumers that
the software does not currently honour, and every one of them is cheaper to fix
now than to explain later. A privacy policy is a binding statement; promising a
right that does not exist is a worse position than having no policy, because it
is an affirmative misstatement rather than an omission.

Each needs an owner decision — **build the feature, or change the sentence** —
before counsel signs anything, because the answer changes what they are
reviewing.

### 1. Account deletion — promised, not built

> *Privacy Policy, "Your controls":* "From your account you can … request
> deletion of your account." … "A deletion request removes your profile,
> preferences, saved records and saved searches."

`profiles.deletion_requested_at` exists in the schema and **nothing in the
codebase reads or writes it**. There is no endpoint, no UI, and no job. A
member who follows this instruction finds nothing to click.

### 2. Data export — promised, not built

> *Privacy Policy, "Your controls":* "you can … request an export of your data"

The export system (`/api/v1/exports/*`) produces **opportunity CSVs** — the
paid research product. It is not a subject-access export of the member's own
personal data, which is what this sentence describes and what a regulator would
read it to mean.

### 3. Analytics opt-out — promised twice, not built

> *Privacy Policy:* "manage cookie preferences"
> *Cookie Policy, "Analytics":* "You can opt out from your account without
> losing any functionality."

There is no opt-out. `user_preferences` carries `email_alerts_enabled` and
`marketing_email_enabled` and **no analytics flag**. `track()` in
`src/lib/analytics/events.ts` checks no consent state before writing to
`analytics_events` and forwarding to PostHog. The account page has a card
headed "Cookie preferences" whose only action is a link to the policy itself.

Note this one interacts with the others: the copy says opting out costs no
functionality, which is true and is a good position — it just needs the switch
to exist.

### 4. Refund workflow — described, not built

> *Refund Policy:* "Refunds are approved by a billing manager and every refund
> action is recorded in the audit log."

There is **no refund code anywhere** in `src/app/api/v1/` or
`src/lib/billing/`. A refund today happens in the Stripe dashboard, which means
no billing-manager role check and no `audit_logs` entry. The described control
does not exist.

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
