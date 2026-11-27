# Passenger notifications & delivery history

::: info Reference release
Source-reviewed against TransferBook+ v0.7.26. Verify the installed release, company, permissions and configuration. Use authorized synthetic data for training. Commercial activation is not asserted.
:::

## Prepare a notification

1. Open the approved Notifications workspace and select the reservation, relevant lifecycle event and channel. Verify the booking status and intended recipient.
2. Respect consent, opt-out and channel availability. A phone-only booking must not generate an invented email address. Choose an authorized available channel or keep the message unsent.
3. Review the passenger-safe message preview. Do not expose internal notes, supplier costs, other customers or unnecessary personal data.
4. Dispatch only when the provider and company are explicitly authorized; a preview or clipboard copy is not delivery.

## Monitor and retry

Review Notification Delivery Outbox and the failed filter. Inspect delivery attempts and error before deciding to retry. The persistent audited retry operation requires notification-write permission. Verify opt-out again; never bypass it or repeat a message already delivered. Queued, failed and disabled/unconfigured are not sent. Reconcile against provider evidence where available.

Use synthetic recipients and isolated tests until external delivery is approved. Automatic external delivery remains disabled pending configuration and authorization.

See [AI and messaging API setup](/integrations/ai-messaging-setup.html) and [Conversational booking](/integrations/conversational-booking.html).
