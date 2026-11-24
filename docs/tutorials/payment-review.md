# Review a payment without charging again

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## Training scenario
An operator must review a reservation with an uncertain payment outcome. Use synthetic records and do not initiate real charges or refunds.

## Steps
1. Find the reservation by reference. Check its tariff and distinguish that amount from actual receipts.
2. Open Payments & Billing. Inspect the Payment & Refund Ledger for the relevant reservation and existing references.
3. Check Provider reconciliation for uncertain transactions. Use only the supported inspection or recovery controls available to your authorized role.
4. If a receipt is confirmed independently, reconcile it according to approved policy. Do not record money as collected based solely on a pending provider response.
5. Escalate unresolved outcomes with the reservation reference, provider reference, time and redacted error. Do not submit a second charge to test the first.

## Expected result
A documented payment status or a clearly identified exception, not an assumed settlement.

See [Payments and reconciliation](/plus/payments-and-reconciliation.html) and [Payment provider readiness](/integrations/payment-providers.html).
