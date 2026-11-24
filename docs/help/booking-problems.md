# Booking form and submission problems

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## The form will not submit
Check the active operating hub, vehicle class, passenger and luggage capacity, valid pickup date/time, guest name and phone. Email is optional. Select a catalogue location or confirm typed text with **Use custom address**. Normal transfers cannot have identical endpoints.

## The quotation is not verified
Wait for the current server quotation. If route, class, time or other quote inputs changed, review the new result before submission. If no configured tariff exists, use the manual quote workflow.

## The response was lost
Search Reservations for the existing booking and reference before starting a new booking. API clients must preserve the same request key and unchanged payload for a retry of the same intention. Do not treat a timeout as proof of failure.

## Escalate when
A valid request repeatedly fails, required configuration is missing, or the booking outcome remains uncertain. Record the redacted error and installed release for support.

See [Create a reservation](/plus/create-reservation.html) and [Retry-safe creation](/developers/idempotency.html).
