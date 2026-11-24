# Authentication and tenant access

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Operator API contract

Protected operator routes are mounted under `/api/v1`. Send a valid bearer access token in `Authorization` and the selected company UUID in `X-Company-Id`. The server verifies membership and permission independently; the company header does not grant access.

The source uses RS256 JWT verification. Use the approved authentication flow for the target environment; never embed operator tokens in a public storefront or widget.

| Response | Meaning |
|---|---|
| 401 | Missing or invalid token |
| 400 | Missing or invalid company selection |
| 403 | Tenant or permission denied |
| 503 | Authorization unavailable |

On a denial, resolve the underlying access issue rather than substituting another company's ID. Use only synthetic data in integration tests.

See [Roles and permissions](/developers/permissions.html).
