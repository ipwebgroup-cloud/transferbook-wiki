# Roles and permissions

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Tenant role matrix

The v0.7.9 source defines `company_admin`, `dispatcher`, `driver` and `viewer`. This is a selected summary, not a complete permission list.

| Operation | Admin | Dispatcher | Driver | Viewer |
|---|---|---|---|---|
| Read reservations | Yes | Yes | Scoped | Yes |
| Create reservations | Yes | Yes | No | No |
| Approve manual quote | Yes | No | No | No |
| Dispatch assignment | Yes | Yes | No | No |
| Update chauffeur progress | Yes | Yes | Scoped | No |
| Write website settings | Yes | No | No | No |
| Refund payments | Yes | No | No | No |

These are role-level permissions, not approval to perform a particular action. Resource ownership, assignment, lifecycle and provider gates can impose additional restrictions. Driver access must remain scoped to authorized work.

Do not rely on a simulated UI role or client-supplied identity to authorize a request.
