# Payment provider readiness

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Distinguish recording from charging

The payment workspace lists cash, corporate invoice, PayPal Checkout, Revolut Pay, Viva Wallet, Google Pay and Skrill. A listed option is not proof that a payment gateway can charge a customer.

1. Confirm the provider is approved for the company and environment.
2. Inspect the reservation, amount and existing payment ledger before initiating any approved payment action.
3. For an uncertain checkout, reconcile the existing transaction instead of creating another charge. Use provider-specific recovery only where supported.
4. Verify the final transaction status and reference against the provider's verified records.

Never enter card numbers into receipt notes. Do not equate a generated invoice, checkout link or sandbox event with collected money. Refunds require permission and a reason.

See [Payments and reconciliation](/plus/payments-and-reconciliation.html) and [Webhook events](/developers/webhook-events.html).
