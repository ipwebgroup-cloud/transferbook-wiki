# Payment gateway API setup

Source-reviewed v0.7.26. No live PSP activation is confirmed. Cash and corporate invoice recording are not online payment authorization.

| Adapter | Credential identifiers found in adapter source |
| --- | --- |
| PayPal | `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_WEBHOOK_ID` |
| Revolut | `REVOLUT_API_KEY`, `REVOLUT_WEBHOOK_SECRET` |
| Viva | `VIVA_MERCHANT_ID`, `VIVA_API_KEY` |
| Google Pay via Viva | Viva credentials plus `GOOGLE_PAY_MERCHANT_ID` |
| Skrill | `SKRILL_MERCHANT_EMAIL`, `SKRILL_SECRET_WORD`; optional `SKRILL_API_URL` |

Important: the Viva readiness text refers to client ID/client secret and merchant source code, while the inspected adapter uses merchant ID/API key. This mismatch requires engineering and provider verification before activation; do not substitute one credential format for another. These names alone do not constitute a complete setup.

## Merchant onboarding

1. Open a verified merchant account in the provider's official business portal. Confirm EUR settlement, permitted markets, fees, sandbox and required API scopes.
2. Provision test credentials on the server through the authorized administrator. Do not enter secret values into the tenant readiness panel.
3. Review the adapter's actual checkout endpoint/environment, return URLs, callback signature and provider documentation. The source mounts payment callbacks at `/api/v1/webhooks/payments/:provider`. PayPal has a separate `PAYPAL_WEBHOOK_ENVIRONMENT` setting in signature verification; it is not proof that all checkout endpoints are sandbox-safe. Do not run real provider calls until endpoint isolation is independently verified.
4. Verify tenant enablement, amount/currency, signed callbacks, duplicate events, cancellation, recovery and refund support with approved test transactions. PayPal and Revolut have verification paths; do not assume all listed providers have equivalent callback, capture or refund coverage. Skrill refund is explicitly unsupported by the inspected refund adapter.
5. Reconcile against provider records before marking a booking paid. Never charge again merely because a previous request timed out. Obtain written authorization before production activation.

See [Payment provider readiness](/integrations/payment-providers.html) and [Webhook events](/developers/webhook-events.html).
