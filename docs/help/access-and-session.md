# Access, permissions and session errors

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## I cannot sign in or access a module
Confirm the correct authorized environment, company and account. If the session expired, use the normal sign-in flow. A demo role selection does not grant real permissions.

## What do API errors mean?
| Code | What to check |
|---|---|
| 401 | Missing or invalid authentication; restore the authorized session. |
| 400 | Required company selection or invalid request inputs. |
| 403 | Tenant access or permission denied; contact the authorized administrator. |
| 503 | Required service or authorization unavailable; do not bypass the gate. |

These are common categories, not a complete error reference. Inspect the actual error code. Avoid repeated writes while the outcome is uncertain.

## Support information
Provide the installed release, module, time, company context as permitted and sanitized error. Never share passwords, tokens, session cookies or credentials.

See [Authentication](/developers/authentication.html) and [Permissions](/developers/permissions.html).
