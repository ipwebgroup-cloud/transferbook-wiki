# Retry-safe reservation creation

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Idempotency key

For `POST /api/v1/reservations`, supply `Idempotency-Key` with 8–128 characters drawn from letters, digits, period, underscore, colon and hyphen. Generate one unique key per booking intention.

1. Retain the key and unchanged payload when a network response is uncertain.
2. Retry the same intention with the same key and payload; do not create another intention just because the response was lost.
3. When the request is intentionally changed, use a new key only after resolving whether the earlier booking already exists.
4. Store the returned booking reference in the client workflow.

| Response | Interpretation |
|---|---|
| 201 | Created or replayed reservation |
| 201 + `X-Idempotency-Replayed: true` | Existing result replayed |
| 400 | Missing or invalid key, or invalid booking |
| 409 | Key reused with changed payload, or another conflict |
| 503 | Required idempotency schema unavailable |

A 503 with `RESERVATION_IDEMPOTENCY_MIGRATION_REQUIRED` must not trigger unprotected booking creation. Resolve the release configuration with an administrator. The key is tenant-scoped; it is not authentication.

See [Reservation API](/developers/reservation-api.html).
