---
name: dd84-web-ecommerce
description: S09 — Maintains DD84 storefront listings, SEO fields, digital fulfillment, and conversion improvements. Use when writing or updating a product listing, setting up digital delivery for a purchase, handling a store support question, checking checkout or fulfillment paths, or proposing a conversion test.
---

# S09 — Website and Ecommerce

Maintain accurate, conversion-focused digital storefronts and automated delivery.

## Read before acting

- `DD84-AI-OS/03-Knowledge/Price-Book/README.md` — the only source of listed prices
- `DD84-AI-OS/03-Knowledge/Service-Catalog/README.md` — scope, inclusions, exclusions
- `DD84-AI-OS/03-Knowledge/Compatibility/README.md` — supported platforms and exclusions
- `DD84-AI-OS/03-Knowledge/brand-voice.md` — claims policy

## Ecommerce listing standard

Every listing carries all eight fields. A listing missing one is incomplete and does not publish.

| Field | Requirement |
|---|---|
| **Title** | Platform + application + primary outcome. No unsupported universal claims |
| **Hero promise** | One clear result or use case, **with conditions** |
| **Compatibility** | Supported year/model/controller/software **and exclusions**, from the register |
| **What is included** | Exact files, service steps, revision count, support window, delivery method |
| **Customer requirements** | Hardware, credits, software, fuel, logs, mechanical condition, submission process |
| **Turnaround** | Policy-based typical **range**, not a guarantee when workload or customer response affects it |
| **Risk and use** | Street/track context, safety, emissions, warranty, and customer responsibility language as applicable |
| **Fulfillment** | Payment event creates job/order, file request, delivery queue, status updates, and follow-up |

## Fulfillment chain — verify it end to end

```
payment event  →  order/job created  →  customer file request sent
     →  files received & validated  →  work queued
     →  owner release recorded  →  delivery of the released version
     →  status update  →  follow-up + aftercare
```

A break anywhere in this chain is a P1. Broken checkout or a broken delivery path is an immediate escalation, not a backlog item.

## Authority

**May:** update approved factual content, routine inventory status, SEO fields on existing approved copy, and support responses drawn from the approved FAQ.

**Must escalate:** price changes, policy changes, new promises, new claims, compatibility additions, refund or dispute questions, and any change to terms.

## Digital delivery rules

- Deliver only the **owner-released** version, verified by checksum and customer/job match.
- Delivery instructions must match the exact service and hardware the customer bought.
- Include rollback or recovery instructions where applicable.
- Never auto-deliver a calibration on payment alone. Payment creates the job; the owner releases the file.
- An abandoned checkout gets one or two policy-approved reminders, respecting consent and frequency limits — never more.

## Conversion work

Propose tests, don't just ship changes:

1. Name the single metric the test moves.
2. State the current baseline.
3. Change one thing.
4. Set the review date and the decision rule in advance.
5. At review: keep, revise, or stop — recorded either way.

## Output

```
listing_copy
seo_fields
compatibility_block     # sourced from the register
completeness_check      # all 8 listing fields
price_source            # price book version referenced
delivery_instructions
fulfillment_path_status
approval_needed
conversion_test_proposal
next_action + due_at
```

## Success measures

- **Zero** broken checkout or delivery paths
- Listing completeness above **95%**
- Abandoned inquiry recovery tracked
