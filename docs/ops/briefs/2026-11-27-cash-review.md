# DD84 cash and revenue review — seven days to 2026-11-27

**SKELETON — committed mid-run. Two worker restarts have already hit this run,
and the live payment reads below are the expensive part. The full review
replaces this file in the same run.**

Run started 11:10:55Z. Routine `/dd84-cash-review`. **Class A — read only. No
money was moved, no charge, refund, transfer, invoice, payment link or
subscription change was initiated, and no write tool was called on any payment
system.**

Checkout verified: `HEAD` = `origin/claude/claude-md-docs-cqvhy6` =
**`a63c5a0`**, no `src/`, clean, **115 tracked files against the prompt's 28 —
sixty-fourth run reporting the drift** (A-10).

## Systems reached, and not

| System                                                  | Status                               |
| ------------------------------------------------------- | ------------------------------------ |
| **Shopify**                                             | **Reached. Read live 11:11Z**        |
| Stripe                                                  | **No MCP server exists** — permanent |
| PayPal                                                  | Authorisation expired                |
| Bank, card issuer, Square, Chime, Melio, Capital on Tap | **No connector**                     |
| Supermetrics (ad spend)                                 | Not reached this run                 |

**Every figure below names its system. Nothing is estimated. No total spans a
system that could not be read.**

## Live reads taken before this commit

**Shopify, read 11:11Z — all time, not a seven-day window:**

| Measure          | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Orders, all time | **1**                                                                                    |
| Order #1001      | 2026-10-23T11:56:43Z, **PAID**, **FULFILLED**                                            |
| Value            | **$550.00 USD**                                                                          |
| Refunds on it    | **None**                                                                                 |
| Customer records | **3**                                                                                    |
| Gateway          | **Shopify Payments** — gross $550, net $550, refunded $0, 1 transaction (400-day window) |

**Shopify, seven days to today: zero sales, zero orders, zero customers —
exact.** So **revenue closed in the period, on the only system reachable, is
nil**, and the single lifetime order is **35 days old**.

## Baseline deltas the full review will set out

`ventures.md` carries **$3,507.86 all-time across 10 paid invoices**, verified
**2026-08-03 — 116 days old and stale by the 30-day rule.** It cannot be
re-verified: the system holding those invoices has no connector.

**Two baseline facts are already superseded in the registry or by today's
read:**

1. **"0 Shopify orders all time" is wrong** — there is one, paid and fulfilled,
   $550.00.
2. **"Last payment 2025-09-12" was already struck through in `ventures.md`** and
   replaced with **2026-10-22** (verified 2026-10-23). The routine's own prompt
   still quotes the stale date.

## What the full review will carry

- Pipeline, receivables ageing and the largest overdue receivable.
- Owed by DD84 over 30 days, including the dated items at T-248 (2026-12-01) and
  T-154 (2026-12-02).
- Job margin, which remains **incomplete** for every job — T-186.
- **Cash position as shape only, never a figure** (A-19 Option C), including the
  over-limit card found by this morning's intake (T-258).
- Corrective actions, ranked, each naming its task and whether it needs a
  packet.
