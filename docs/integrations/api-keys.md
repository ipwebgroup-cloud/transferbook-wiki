# API keys & secure setup

::: info Reference release
Source-reviewed v0.7.26. This is an administrator guide, not confirmation of a live provider connection. Installation-specific credentials are never published.
:::

## Who configures what?

Company administrators review integration readiness and permissions. An authorized hosting/platform administrator provisions server secrets. The integration catalog and payment readiness panel do not provide a general-purpose secret vault or browser credential entry.

TransferBook+ operator API authentication uses RS256 bearer tokens plus the selected `X-Company-Id`; the server checks tenant membership and role. A provider API key cannot authenticate an operator. See [Authentication](/developers/authentication.html).

## Setup procedure

1. Confirm the installed release, company, approved capability and sandbox account. Obtain credentials from the provider's official developer console; use separate test and production credentials.
2. Confirm the exact runtime variable names in the installed release. Example names in these guides are configuration identifiers, not secret values.
3. Put server credentials in a restricted deployment environment or supported secret store, accessible only to the authorized service. Preserve existing configuration and permissions during updates. Never store them in Git, public website settings, browser storage, screenshots or support transcripts.
4. Only browser-intended public configuration may use `VITE_` variables; those values are embedded at build time. The Maps browser key must have website and API restrictions. Never put private credentials, JWT signing keys or database passwords there.
5. Apply only the approved provider-specific build or service configuration through the guarded installation process. Do not enable public intake as a side effect. Validate tenant scope, permissions, failure behavior, quotas and audit records in sandbox with synthetic data.
6. Obtain owner approval before live activation. Record the provider, environment, key identifier (not value), scopes, responsible administrator, rotation date and acceptance result.

## Rotation and troubleshooting

Disable the affected capability before replacing compromised credentials. Revoke at the provider, provision replacements in the approved environment, retest and re-enable only after authorization. Do not expose credentials in diagnostic output. A 401/403 may indicate permissions, key restrictions or wrong environment; a 429 indicates a quota or rate limit. Do not bypass these controls. A successful health endpoint does not establish external provider delivery.

Use [Third-party API setup](/integrations/third-party-api-setup.html) and [Security & Privacy](/security-privacy/) for additional requirements.
