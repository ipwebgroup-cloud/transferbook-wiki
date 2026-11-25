# Installation & Deployment

This guide explains how to prepare an authorized TransferBook+ environment, onboard a transportation business and manage releases safely. It complements [System Requirements](/system-requirements/).

::: warning Availability and responsibility
This is a deployment-readiness guide, not a downloadable installer, a promise of self-hosting availability or a service-level agreement. Obtain the approved release, deployment instructions, access arrangements and support terms from the provider before activation. Features are subject to release acceptance, company permissions and integration readiness.
:::

## Choose the deployment arrangement

| Arrangement | Customer responsibilities | Hosting responsibilities |
| --- | --- | --- |
| Managed hosting, where offered | Provide business configuration, authorized users and acceptance feedback | Provision and maintain the agreed environment, backups, monitoring and release process |
| Dedicated hosting, subject to approval | Agree capacity, access, security responsibilities and support scope | Validate the release-specific infrastructure and operational procedures |
| Self-managed deployment, if explicitly supported | Assign qualified technical staff and accept agreed maintenance responsibilities | Supply only the approved release package and documented support scope |

Browser users do not install a local application runtime or database. Do not attempt to install a demonstration build or an arbitrary source snapshot as a production system.

## Managed onboarding

1. Confirm the company, approved environment, installed release, authorized administrator and support contact.
2. Configure operating markets, time zones, languages, pickup and drop-off locations, fleet and driver records.
3. Review vehicle classes, rates, taxes, currency, tariffs, booking modes and operational policies with the company.
4. Assign individual accounts and least-privilege roles; review which staff can see or modify reservations, dispatch and financial information.
5. Enable only the approved booking channels and integrations. Keep unapproved providers disabled.
6. Validate representative reservations, quotations, assignments and payment review using synthetic data in an approved test environment.
7. Obtain operational sign-off before accepting real bookings. Agree support, maintenance and incident reporting arrangements.

See [markets and locations](/plus/markets-and-locations.html), [company settings](/plus/company-and-language-settings.html), [fleet management](/plus/fleet-management.html), [pricing](/plus/pricing.html) and [roles and permissions](/developers/permissions.html).

## Dedicated hosting readiness

For authorized infrastructure teams only:

- Confirm the supported runtime and database versions, capacity plan, release artifacts and integrity verification procedure.
- Prepare separate service and database identities with minimum privileges; store secrets outside publicly served files and source control.
- Configure approved DNS, HTTPS, reverse proxy, supervised services, restricted database access and monitoring.
- Isolate production, staging and demonstration data and credentials. Never treat a demonstration endpoint as an authorized deployment target.
- Review the release-specific database migration plan and confirm backups and recovery compatibility before changing schemas.
- Document the maintenance window, affected users, support owner, rollback conditions and acceptance procedure.

The [hosting requirements](/system-requirements/#server-and-hosting-requirements) are planning baselines, not guaranteed capacity limits. Internal hostnames, paths, credentials and live deployment commands are intentionally excluded from public documentation.

## Release and update lifecycle

| Stage | Required evidence |
| --- | --- |
| Prepare | Approved version and source revision, integrity checks, release notes and change scope |
| Validate | Build and tests pass; staging acceptance uses synthetic records |
| Protect | Verified backup, recovery plan, maintenance arrangements and migration review |
| Activate | Authorized release procedure for the intended environment |
| Accept | Health, access, reservation, dispatch and integration checks pass |
| Close | Record the deployed version, acceptance results, outstanding limitations and recovery reference |

Use the [Release Notes](/release-notes/) to review documented changes. The release-specific procedure takes precedence over this overview. Do not assume that every update is reversible: a schema or data change may require a separate restoration or forward-recovery procedure.

## Backup and disaster recovery

Agree backup frequency, retention, encryption, off-system storage, restore access and recovery objectives before launch. Actual recovery point and recovery time objectives must be established by the service agreement and tested; no numerical guarantees are implied here.

A recovery plan should cover the database, required configuration, release artifacts and user-managed content. Keep protected secrets in a separately controlled recovery process. Test restoration into an isolated environment, verify tenant boundaries and record the result. Retain the last known-good compatible release and define who can authorize rollback.

If an incident interrupts a reservation or payment, verify its authoritative status before resubmitting. Avoid duplicate bookings or charges. Follow [retry-safe reservation creation](/developers/idempotency.html) and [payment review](/tutorials/payment-review.html).

## Go-live acceptance checklist

- Confirm the intended environment and approved application release.
- Verify HTTPS, login, logout, session expiry and role boundaries.
- Verify booking and quotation flows, including a quick booking without passenger email.
- Check pricing, operating locations, vehicle classes, driver and vehicle assignment, and dispatch scheduling.
- Test approved notifications, payment providers, external dispatch and public channels only where enabled.
- Confirm monitoring, backup restoration evidence, support ownership and operational fallback arrangements.
- Document unresolved defects and hold activation of any workflow that has not passed its acceptance criteria.

For training, see [Tutorials](/tutorials/). For operational problems, see [Help Centre](/help/) and [Integration readiness and channels](/integrations/activation-and-channels.html).

[Ελληνικά](/el/installation/)
