# Cash collection & office handover

::: info Reference release
Source-reviewed against TransferBook+ v0.7.26. Verify the installed release, company, permissions and configuration. Use authorized synthetic data for training. Commercial activation is not asserted.
:::

## Collect money during a journey

1. Confirm the authorized chauffeur, reservation and independent leg. Review the server-verified balance before accepting cash.
2. Enter only the amount physically received, either a partial payment or the remaining balance. Confirm once and inspect the resulting receipt and updated balance. Do not record cash before receipt or create another entry after an uncertain response.
3. The collection receipt records the collecting chauffeur and awaits physical office handover. Passenger settlement and office custody are different events.

## Close the cash ledger

1. In the approved payment workspace, inspect the cash receipts, original collecting chauffeur and prior handovers.
2. Count the physical cash and match the full receipt amount. Confirm handover only after actual transfer to the office. If the physical amount differs, investigate; do not make a false confirmation.
3. A different custody holder requires authorized company_admin review and a documented custody-transfer reason. The backend rejects mismatched or duplicate handovers outside the supported rules.
4. Verify the handover record and reconcile against receipts, payment and refund history. A dashboard aggregate is not an authoritative cash ledger.

Use authorized synthetic records for acceptance. Do not equate a payment authorization, invoice, checkout link or outstanding-value indicator with money received. For an unresolved payment or conflicting amount, stop and investigate before retrying.

See [Payments and reconciliation](/plus/payments-and-reconciliation.html) and [Chauffeur workspace](/plus/chauffeur-workspace.html).
