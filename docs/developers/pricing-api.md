# Pricing and tariff API

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Source-level interface

| Method and path (under `/api/v1`) | Permission |
|---|---|
| `GET /tariffs` | `tariffs:read` |
| `GET /tariffs/:id` | `tariffs:read` |
| `POST /tariffs` | `tariffs:write` |
| `PATCH /tariffs/:id` | `tariffs:write` |
| `POST /tariffs/:id/status` | `tariffs:write` |
| `POST /pricing/quote` | `reservations:read` |

## Client responsibilities

Request an authoritative quote for the selected itinerary and configuration. Requote when quote-relevant inputs change. Do not replace the returned tariff with a locally invented amount. A result requiring manual quotation is not a zero-cost booking.

The create route can reject stale or manipulated quotations with HTTP 409 `STALE_OR_MANIPULATED_QUOTE`. Refresh the quote and have the operator verify it before retrying an intentionally changed booking intention.

See [Pricing](/plus/pricing.html) and [Manual quotations](/plus/manual-quotations.html).
