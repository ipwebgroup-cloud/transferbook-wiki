# System Requirements

TransferBook+ is a browser-based transportation operating platform. The requirements below help customers prepare their devices and help technical teams evaluate hosting readiness.

::: warning Compatibility and capacity status
These are planning recommendations, not a certified minimum specification or a guarantee of commercial availability. The application source reviewed for this guide is v0.7.13. Actual support depends on the accepted deployment, enabled features, access permissions and compatibility testing.
:::

## Customer devices and browsers

| Component | Recommended planning baseline |
| --- | --- |
| Desktop operating system | A vendor-supported Windows, macOS or Linux release |
| Mobile operating system | A vendor-supported Android or iOS release |
| Web browser | Current stable Chrome, Edge, Firefox or Safari, as available for the device |
| Office workstation | Modern dual-core or better CPU; 8 GB RAM |
| Dispatcher display | 1920 × 1080 or larger; keyboard and mouse recommended |
| Mobile device | Touchscreen, supported browser and reliable mobile data or Wi-Fi |
| Connectivity | Reliable broadband or mobile data; backup connection recommended for dispatch |
| Browser settings | JavaScript and necessary first-party cookies enabled; HTTPS access |

A native application installation is not required for browser-based access. The browser and device combinations above are candidates for compatibility validation, not a list of certified platforms. Do not assume offline operation, background tracking, push notifications or native-app availability.

## Requirements by role

| Role | Preparation |
| --- | --- |
| Company administrator | Desktop or laptop, authorized account, access to company settings |
| Dispatcher | Desktop or laptop with a sufficiently large display, dependable internet, assigned permissions and configured operating data |
| Chauffeur | Charged mobile device, reliable connectivity and assigned account; location permissions only when an enabled feature requires them |
| Commercial partner | Supported browser and authorized partner access, where available |
| Passenger | Browser-capable device and an enabled public booking channel; no operator account assumed |

Passenger email is not a mandatory requirement for quick bookings. Use a permitted contact method without inventing email addresses. See [phone-only booking](/tutorials/phone-only-booking.html) and [passenger information](/plus/passenger-information.html).

## Network and security

- Access the authorized deployment through HTTPS and keep the operating system and browser updated.
- Use individual accounts and role-based access. Do not share credentials.
- Permit HTTPS access to the approved application and any explicitly enabled third-party service endpoints; do not disable firewalls or certificate verification to resolve connectivity problems.
- Use device screen locking and avoid storing passenger records on unmanaged devices.
- Confirm that system clocks, time zones and browser settings are correct. For interrupted submissions, verify whether the reservation or payment already exists before retrying.
- Use only synthetic passenger information in approved training or staging environments.

See [authentication and tenant access](/developers/authentication.html), [roles and permissions](/developers/permissions.html) and [access and session errors](/help/access-and-session.html).

## Server and hosting requirements

This section is for hosting and technical teams, not ordinary customers. A managed deployment does not require customers to install Node.js or PostgreSQL on their workstations. Dedicated or self-hosted deployment is subject to separate approval, supported release packaging and operational readiness; this guide does not establish a commercial self-hosting offer.

| Component | Proposed evaluation baseline |
| --- | --- |
| Operating system | Supported 64-bit Linux |
| CPU | 4 vCPU |
| RAM | 8 GB |
| Storage | 80 GB SSD/NVMe with capacity monitoring |
| Application runtime | Node.js 24 LTS reference; confirm the exact supported runtime against the release |
| Database | PostgreSQL 16 reference; confirm version and migrations against the release |
| Reverse proxy | Apache or NGINX with TLS termination |
| Service management | Supervised application process with health monitoring |
| Email and external services | Approved credentials and connectivity only for enabled integrations |
| Backups | Automated, protected database and application backups; tested restoration |

The source reviewed uses a React/TypeScript frontend, Node.js/Express API and PostgreSQL client. Hardware estimates are starting points only. No capacity, concurrency, latency or uptime guarantee has been established by this guide.

### Deployment prerequisites

- Release-specific build and migration instructions, validated artifacts and a documented rollback plan.
- Least-privilege service and database accounts; secrets and signing keys protected outside public web content and source control.
- Valid DNS and TLS, a correctly configured reverse proxy, restricted database access, health checks and operational logging.
- Independent production, staging and demo environments; never use staging as an implicit production target.
- Backups with retention and restore tests; monitoring for errors, disk space, database capacity and certificate expiry.
- Separate approval and end-to-end testing for payment providers, notifications, external dispatch, mapping or AI integrations before activation.

## Compatibility and capacity acceptance

Before publishing certified requirements, validate the exact release on the intended devices and browser versions. Test sign-in and session expiry, reservation entry (including optional passenger email), scheduling and dispatch, role restrictions, mobile chauffeur workflows, interrupted network recovery and enabled integrations. Measure resource use and response times under representative peak booking and dispatch workloads, and test backup restoration. Record the tested versions, results and limitations with the relevant release.

For operational readiness, see [Integration readiness and channels](/integrations/activation-and-channels.html) and [Release Notes](/release-notes/).

[Ελληνικά](/el/system-requirements/)
