# External dispatch adapters

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Preview boundary

The source describes webhook, iCabbi, Autocab and Karhoo adapters as sandbox contracts. Their payload previews are tenant-scoped and report `transmitted: false`. Do not treat these previews as provider acknowledgements.

## Review a proposed handoff

1. Confirm the correct company and reservation in the authorized test environment.
2. Review the provider's preview and any warnings, including the booking reference, journey details and idempotency information.
3. Resolve missing configuration and obtain provider acceptance before enabling any transmission.
4. Continue using the internal dispatch workflow until live integration has been separately verified.

If the adapter is **Not configured**, do not enter real customer data into a sandbox to test connectivity.

See [Dispatch schedule](/plus/dispatch-schedule.html).
