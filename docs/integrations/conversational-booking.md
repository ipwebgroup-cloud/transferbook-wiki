# Conversational booking and consent

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Sandbox workflow

The source supports WhatsApp, Meta Messenger and Instagram simulations, in English, Greek, Italian, French, German and Spanish. This is not evidence of an active external messaging account.

1. In an authorized sandbox, select the channel and language.
2. Provide a synthetic booking message, contact information and the actual consent state.
3. Review extracted locations, passenger count, service mode and validation issues.
4. If the result is ready for handoff, use **Handoff to Booking Form** and verify the prefilled fields before submitting an authorized booking.

## Consent and escalation

`pending_consent` is the default when consent is absent. `opted_in_transactional` represents explicit transactional consent; `opted_out` blocks automated quoting. Escalate uncertain requests for human review. Do not assume marketing consent.

Passenger email remains optional. A sandbox reply or persisted conversation does not prove external delivery.

See [Create a reservation](/plus/create-reservation.html).

## Changes described in v0.7.14

The release describes improvements to conversational reservation handoff. In an authorized test environment, verify extracted details and consent state, review the handoff, and confirm the booking only through the approved workflow. Do not infer live channel activation or message delivery. Passenger email remains optional.

See [Release Notes](/release-notes/).

## AI Copilot and persistent conversion — v0.7.26

Review the extracted service, date/time, route, passenger count, capacity, contact and quote context in the approved conversation workspace. Use the human takeover path if information is uncertain or the passenger requests escalation. Do not let AI invent tariffs, contacts or availability. Verify CRM matching and independently confirm ambiguous customers. Use phone-only booking where appropriate without fabricated email.

The persistent conversion requires AI management and reservation-write authorization and has transactional duplicate/concurrency protection. Review the resulting reservation reference and status before trying again. An AI draft or handoff is not a confirmed booking. Real messaging and external AI acceptance require separate approval. See [Notifications](/plus/passenger-notifications.html) and [AI and messaging setup](/integrations/ai-messaging-setup.html).
