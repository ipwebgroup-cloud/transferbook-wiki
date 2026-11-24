# Unavailable integrations and payment uncertainty

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## Why is an integration not configured?
An adapter in the catalogue does not establish a live connection. Approved provider access, configuration and activation may still be required. A sandbox preview does not transmit a real booking.

## Can a simulated message or GPS point be treated as live?
No. Messaging requires appropriate consent and approved provider activation. Simulated fleet coordinates do not establish vehicle location. Pending consent is not affirmative consent.

## What if a payment is uncertain?
Inspect the existing ledger and supported reconciliation or recovery controls. Do not issue another charge just because a response is missing. Escalate with the sanitized provider and reservation references. Never include card details or credentials.

## Where to get help
Check the integration's readiness and authorization with the responsible administrator. Disabled controls must remain disabled until separately approved.

See [Integration readiness](/integrations/activation-and-channels.html), [Conversational booking](/integrations/conversational-booking.html), [Live tracking](/integrations/live-tracking.html) and [Payment providers](/integrations/payment-providers.html).
