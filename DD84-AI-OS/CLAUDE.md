# DD84 AI Business Operating System — Working Notes

This repository is the controlling specification for how AI runs Down Dirty 84 LLC's operations. It is a governance and skill package, not application code.

## Current state

**Stage 0 — Draft only. No tools are connected. No skill has production write access.**

Moving to Stage 1 requires a signed `00-Governance/Approvals/deployment-authorization.md`.

## Non-negotiables when working in this repo

These rules are the point of the whole system. Do not soften them when editing, extending, or advising.

1. **Never widen an authority boundary casually.** Any change to `00-Governance/Policies/action-classes.md`, `00-Governance/Policies/approval-thresholds.md`, or `00-Governance/Policies/permissions-matrix.md` is a Class C change: it needs a version bump, a stated reason, and an owner approval line. Never make an AI skill _more_ permissive as an incidental part of another edit.

2. **The owner-only list is fixed.** Money movement, refunds, contracts, legal/tax advice, calibration release, data deletion, and declaring technical completion stay human. No skill file may grant these, however convenient.

3. **S07 blocks are absolute.** No skill, including S01, may override the Quality/Safety/Risk skill. Only the owner clears a block, in writing, in the job record.

4. **Prices come from the price book only.** If a skill needs a price that isn't there, the answer is an approval packet — never an estimate, never inference from a similar service.

5. **Compatibility claims come from the register only.** "Unknown" is a valid, expected answer that triggers escalation.

6. **The honesty rule.** Never state an action succeeded unless a tool result confirms it. Unverified is reported as unverified.

## Conventions

- **Skill files** live in `.claude/skills/dd84-*/SKILL.md` at the **repository root**, not inside this directory — Claude Code loads skills from there. Frontmatter needs `name` (matching the directory) and a `description` written so it triggers on the real situations the skill handles.
- **Skills cite package files with the `DD84-AI-OS/` prefix**, since they live outside this directory. Files _within_ the package cite each other package-relative. Keep both conventions intact when moving anything.
- **Policies** carry an ID (`GOV-00X`), a version, and an approver. Skills cite the policy version in their audit note.
- **Statuses** come from `03-Knowledge/status-standards.md`. Free-text status is prohibited where an allowed value exists.
- **Every record** needs an owner, a next action, and a next-action due date until it reaches a terminal status.
- **Cross-references** must resolve to a real path from wherever the citing file sits, so a skill can actually open what it cites.
- **Markdown is Prettier-formatted.** CI runs `npm run format:check` over `**/*.{ts,tsx,md,json}`, and `.prettierignore` does not exclude Markdown. Run `npm run format` before committing changes here.

## When adding a skill

1. Keep the scope narrow. Narrow scope, explicit inputs and outputs, measurable success.
2. Add its manifest to `01-Skills/manifests.md` with version, authority, metrics, tests, and rollback.
3. State explicitly what it **may not** do — that section matters more than the capability list.
4. Write its 10 test cases per `15-testing-and-go-live.md` before it gets any write access.
5. New skills start at Stage 0 regardless of how safe they look.

## What is deliberately unfinished

The price book, service catalog, compatibility register, and FAQ are templates with the structure filled in and the content blank. They hold real business decisions that only the owner can make. Do not populate them with plausible-looking placeholder data — an invented price or compatibility claim that survives into production is exactly the failure mode this system exists to prevent.
