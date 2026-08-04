# Price Book

**Version:** 0.1.0 — **NOT YET APPROVED**
**Owner:** Owner only. No skill may change this file.

> **Blocking item.** Until this file contains real approved prices, S03 cannot issue any quote autonomously. Every quote becomes an approval packet. Finalizing this is step 2 of the immediate implementation sequence.

---

## How skills use this file

- S03 selects packages and add-ons **only** from this file. Nothing is priced from memory or inference.
- S09 publishes listing prices **only** from this file.
- S10 checks collected revenue against these figures when reconciling.
- A price not in this file does not exist. The correct response to a missing price is an approval packet, not an estimate.

---

## Structure to fill in

### Core service packages

| Package ID | Service | Scope summary | Price | Revision count | Support window | Margin floor % |
| ---------- | ------- | ------------- | ----- | -------------- | -------------- | -------------- |
|            |         |               |       |                |                |                |

### Add-ons

| Add-on ID | Description | Price | Applies to packages | Notes |
| --------- | ----------- | ----- | ------------------- | ----- |
|           |             |       |                     |       |

### Diagnostics

| Service ID | Description | Price / rate | Included time | Overage rate |
| ---------- | ----------- | ------------ | ------------- | ------------ |
|            |             |              |               |              |

### Remote service

| Service ID | Platform / controller scope | Price | Required hardware | Required customer files |
| ---------- | --------------------------- | ----- | ----------------- | ----------------------- |
|            |                             |       |                   |                         |

### Travel and mobile

| Item                        | Value |
| --------------------------- | ----- |
| Travel radius (no fee)      |       |
| Internal cost rate per mile |       |
| Customer travel fee formula |       |
| Minimum mobile call-out     |       |
| Travel buffer between jobs  |       |
| Out-of-radius policy        |       |

### Deposits and terms

| Item                       | Value                                          |
| -------------------------- | ---------------------------------------------- |
| Standard deposit %         |                                                |
| Deposit required above     |                                                |
| Quote expiration window    |                                                |
| Reschedule notice required |                                                |
| Cancellation policy        |                                                |
| Refund policy              | Owner approval on every refund — no exceptions |

### Active promotions

| Promo ID | Offer | Max discount | Stacking allowed | Start | End | Approved by |
| -------- | ----- | ------------ | ---------------- | ----- | --- | ----------- |
|          |       |              |                  |       |     |             |

---

## Change control

Price book changes are Class C. Each change records: previous value, new value, effective date, reason, owner approval, and a version bump. Quotes already sent under a prior version are honored to their stated expiration.
