# Monthly Review

---

## Agenda

| Area | What is reviewed | Output |
|---|---|---|
| **Price book and margin floor** | Actual margin by service vs. the floor | Approved price changes, or explicit no-change |
| **Service profitability** | Contribution margin and cycle time by service type | Which services to push, reprice, or retire |
| **Vendor performance** | Landed cost, on-time rate, compatibility/return rate | Approved vendor list changes |
| **Acquisition quality** | Source quality, referral partner performance, cost per acquired job | Where next month's marketing effort goes |
| **Knowledge health** | SOP freshness, knowledge gaps, recurring error analysis | S12 change proposals |
| **Access and security** | Credential/access review, permission changes, **backup restoration test** | Revoked or narrowed access |
| **Owner time** | Owner hours by category, and the automation percentage | The next thing to take off the owner's plate |
| **Improvement release** | One controlled change, with a measured expected benefit | Deployed with rollback proven |

---

## The automation percentage

Track the actual figure against the target model:

| Operating area | Target automation |
|---|---|
| Lead intake | 95% |
| Quoting | 90% |
| Scheduling | 90% |
| Customer communication | 90% |
| Marketing | 85% |
| Ecommerce | 90% |
| Finance operations | 85% |
| Management | 95% |

Measure it as: *actions completed without owner involvement / total actions in that area.* A number that is high because volume is low is not progress — report volume alongside it.

---

## Backup restoration test

Not a checkbox. Each month, actually restore from backup into a scratch location and confirm:

- [ ] Customer records restore intact, with relationships
- [ ] Job files restore with correct versions and release status
- [ ] Financial records reconcile to the same totals
- [ ] The audit log is complete and unaltered
- [ ] Time to restore is recorded

An untested backup is not a backup.

---

## One controlled improvement release

Per month, exactly one significant change ships, with:

- The measured problem it addresses
- The expected benefit, quantified
- How success will be measured, decided in advance
- A proven rollback
- A recurrence check date

Shipping five changes at once makes it impossible to tell which one worked, or which one broke something.
