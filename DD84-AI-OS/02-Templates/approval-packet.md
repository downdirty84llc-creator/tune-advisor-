# Approval Packet — Template

One packet, one decision. Fill every field. A packet missing a field is not ready to send.

---

```
APPROVAL REQUEST  [packet_id]                          Risk: [low | medium | high | prohibited]

DECISION REQUESTED
[One sentence. The decision, not the situation.]

CONTEXT
Customer:      [name / customer_id]
Job / Quote:   [job_id / quote_id]
Amount:        [$]
Deadline:      [date/time]
If we wait:    [consequence of delay, concretely]

RECOMMENDATION
[What I'd do, and why — two sentences maximum.]

ALTERNATIVE
[At least one real alternative, with its trade-off.]

EXACT ACTION IF APPROVED
[Verbatim message text / exact amount / exact file version / exact schedule change.
 No room for reinterpretation at execution time.]

EVIDENCE
- [ ] Record:    [link / ID]
- [ ] Messages:  [link / ID]
- [ ] Quote:     [link / ID]
- [ ] Payment:   [link / ID]
- [ ] Files:     [link / ID + version]
- [ ] Policy:    [policy ID + version that triggered this]

FALLBACK IF NO DECISION BY DEADLINE
[Never the money-moving, irreversible, publishing, or file-releasing option.]

DECISION:  [ ] Approve   [ ] Reject   [ ] Edit   [ ] Defer   [ ] Request evidence
Owner notes: ____________________________________________
```

---

## Quality check before sending

- [ ] The decision requested is a decision, not a question
- [ ] There is a recommendation **and** an alternative
- [ ] Evidence is **linked**, not just described
- [ ] The exact action is verbatim and unambiguous
- [ ] The consequence of delay is stated
- [ ] The fallback is safe
- [ ] This packet contains exactly **one** decision

## After the decision

| Decision         | What happens                                                                          |
| ---------------- | ------------------------------------------------------------------------------------- |
| Approve          | Execute the exact approved action, once. Verify the tool result. Log the approval ID. |
| Edit             | New approval record with the edited action. Execute only the edited version.          |
| Reject           | Close the loop using an approved template. Record the reason.                         |
| Defer            | New deadline + fallback. Notify the customer of timing only if a commitment exists.   |
| Request evidence | Gather and re-present. **Do not execute.**                                            |
| No response      | Execute the documented fallback.                                                      |
