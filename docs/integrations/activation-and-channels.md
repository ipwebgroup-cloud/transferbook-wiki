# Integration readiness and channels

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Before connecting a service

1. Confirm the target release, company and booking channel.
2. Check the integration status and whether the provider has been configured and approved.
3. Use synthetic records in an authorized test environment. Keep public intake and provider transmission disabled until separately accepted.
4. Verify the result in the relevant operator workspace; a successful preview is not evidence of a live connection.

## Interpret availability

A source implementation, a sandbox and a live provider connection are different states. An integration marked **Not configured** must not be used for real customer operations. An enabled booking channel alone does not prove that external payment or messaging is enabled.

## If a service is unavailable

Ask the authorized administrator to confirm the provider configuration and release readiness. Do not bypass disabled controls or use another company's credentials.

See [Markets and locations](/plus/markets-and-locations.html) and [API access](/developers/authentication.html).
