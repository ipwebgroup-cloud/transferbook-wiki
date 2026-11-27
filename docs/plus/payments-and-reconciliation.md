# Payments and reconciliation

::: info Reference release
TransferBook+ v0.7.9 source-reviewed draft. Availability depends on the installed release, permissions and configuration; no commercial activation is asserted.
:::

Inspect the payment and refund ledger and understand the distinction between recording money received and initiating a provider transaction.

## Before you begin

Use an approved workspace, confirm your company and role, and use synthetic records for training.

## Workflow

1. Open Payments & Billing and select the relevant reservation. Review the existing ledger and outstanding amount before recording anything.
2. For an authorized received payment, review Rail / Provider, Payment Kind (full, deposit, partial or balance), Amount (EUR) and Receipt / Reference Note. Never enter card numbers. Record only an actual, evidenced receipt.
3. If a provider transaction is uncertain, review Provider reconciliation and the available recovery or inspection controls rather than starting another charge. Refund requests require an authorized role and an audit reason.

## Verification and troubleshooting

Provider options are not proof of enabled live checkout. Do not charge or refund real funds during training. A reservation tariff is not collected revenue; an uncertain payment must be reconciled before retrying.

## Related guides

- [Operator Manual](/plus/)
- [Reservations](/plus/reservations)
- [Dispatch schedule](/plus/dispatch-schedule)

## v0.7.26 commercial finance

Partial cash collection and physical office handover have distinct records. Verify the receipt, original collecting chauffeur and actual cash before confirming custody; use the [Cash management guide](/plus/cash-management.html). Review supplier settlements separately using [Subcontractors](/plus/subcontractors.html). The Command Center Collected / Authorized figure includes authorizations and its Outstanding indicator is not an exact post-partial-payment balance; reconcile with individual records. External PSP activation remains separate from recording money. See [Payment gateway setup](/integrations/payment-api-setup.html).
