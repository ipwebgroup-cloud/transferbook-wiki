# Reservation API reference

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Routes in the pinned source

All paths below are relative to `/api/v1` and require operator authentication, company selection and the relevant permission.

| Method and path | Permission |
|---|---|
| `GET /reservations` | `reservations:read` |
| `GET /reservations/:id` | `reservations:read` |
| `POST /reservations` | `reservations:write` |
| `PATCH /reservations/:id` | `reservations:write` |
| `POST /reservations/:id/quote` | `reservations:quote` |
| `POST /reservations/:id/status` | `reservations:write` |
| `POST /reservations/:id/cancel` | `reservations:cancel` |
| `POST /reservations/:id/dispatch` | `reservations:dispatch` |

## Creation prerequisites

The create route requires a structured customer, pickup, drop-off, passenger count and vehicle class, among other validated booking fields. A valid server quote and permitted company resources are required by the operational contract. Passenger email is optional. Do not treat this list as a complete request schema.

Successful creation returns HTTP 201 with the reservation in `data`. Inspect returned state before dispatch. Use [retry protection](/developers/idempotency.html) for every creation intention. Confirm complete payload schemas against the exact approved release before implementing a client.
