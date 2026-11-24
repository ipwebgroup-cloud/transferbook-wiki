# Payment webhook events

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Provider callbacks

The source mounts `POST /api/v1/webhooks/payments/:provider`. This provider callback is distinct from the bearer-authenticated operator API. It verifies provider signatures against the original raw request body and requires an external event identifier.

| Response | Interpretation |
|---|---|
| 400 | Missing raw body or event ID |
| 401 | Invalid webhook signature |
| 503 | Webhook secret not configured |
| 200 | Accepted event or duplicate event acknowledgement |
| 500 | Processing failed |

The handler records events using the provider event ID and a payload digest. A duplicate acknowledgement is not a second payment. Inspect the reconciliation ledger and processed status before interpreting an accepted callback as a financial outcome.

Use provider-specific verified signing documentation and approved test fixtures. Never log webhook secrets or real card data, and do not attempt to bypass verification.

See [Payment providers](/integrations/payment-providers.html).
