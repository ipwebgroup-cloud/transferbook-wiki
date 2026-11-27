# Software Update Manager

::: info Reference release
Source-reviewed against TransferBook+ v0.7.26. Verify the installed release, company, permissions and configuration. Use authorized synthetic data for training. Commercial activation is not asserted.
:::

## Review a release

1. In Company Settings open Software Updates / System Updates, if permitted. Use Check for updates and inspect installed and candidate versions.
2. Review [Release Notes](/release-notes/) and [Changelog](/changelog/). A higher version does not prove installation readiness. Inspect Advanced diagnostics if availability or schema compatibility is uncertain.
3. Before any authorized deployment, verify release signature, candidate identity, migration readiness, backup readability, recovery plan and preservation of company data, domains, credentials, provider settings and local themes.
4. The implemented protected staging updater can expose Update Now only when its gates permit. Demo and unapproved installations cannot initiate the protected release. Commercial customer installation and unattended production upgrades are not established by this guide.

## Confirm installation

After explicit approval, submit an update only through the supported guarded process. Do not repeat while an update is requested or active. Confirm the server reports the verified new version; then reload the application. If progress appears stalled, inspect diagnostics and ask the platform administrator to check the receipt and service. Do not infer success from a request, browser timeout or a GitHub tag.

Verify installed version, service, schema, retained configuration and authorized application smoke tests. Use the approved recovery procedure if acceptance fails; never perform an unreviewed migration reversal.

See [Installation & Deployment](/installation/) and [Security & Privacy](/security-privacy/).
