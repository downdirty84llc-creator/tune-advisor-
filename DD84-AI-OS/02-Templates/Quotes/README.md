# Quote Template

**Used by:** S03 Quote Builder. Prices come from `03-Knowledge/Price-Book/` only.

---

```
QUOTE  {quote_id}  v{version}                         Expires: {expiration_date}

CUSTOMER          {name}                              {customer_id}
VEHICLE           {year} {make} {model} — {engine} / {transmission}     {vehicle_id}

WHAT WE'RE DOING
{scope, from the service catalog — plain language, specific}

WHAT YOU GET
- {deliverable}
- {revision count} revisions included
- {support window} support
- Delivered by {delivery method}

WHAT'S NOT INCLUDED
- {exclusion}

WHAT WE NEED FROM YOU
- {prerequisite} — needed by {date}

PRICING
  {package_name}                             ${amount}
  {add_on}                                   ${amount}
  Travel ({distance} mi @ {rate})            ${amount}
  Tax                                        ${amount}
  ─────────────────────────────────────────────────────
  Total                                      ${total}

  Deposit due to book                        ${deposit}

TURNAROUND
Typically {range} once we have your files. Depends on {conditions}.
This is a range, not a guarantee.

IMPORTANT
Actual results depend on hardware condition, environment, fuel, and test data.
{risk / legality / use-context language for this service}

NEXT STEP
{one payment path}   →   {one booking path}

Questions? Reply to this message.
```

---

## Rules

- **Never** send with a placeholder unfilled.
- Travel shows the math: distance, rate, fee. Never a guessed number.
- Expiration always has a stated consequence. Expired → refresh task, never silent honoring.
- Turnaround is a range with conditions. No guarantees on power, timeline, or outcome.
- One payment path, one booking path. Two of either kills conversion.
- Below margin floor, custom scope, discount beyond policy, or unverified compatibility → this becomes an **approval packet**, not a send.

## Good–better–best

Where the catalog supports tiers, present the **best-fit option first**, not the cheapest and not the most expensive. Then the alternatives, with the actual difference between them stated in one line each.

## Version control

A changed quote is a **new version**, not an edit. The prior version moves to `Superseded`. Quotes already sent under a prior price book version are honored to their stated expiration.
