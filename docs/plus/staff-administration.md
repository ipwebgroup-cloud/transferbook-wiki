# Staff accounts and administration

::: info Reference release
Source-reviewed against TransferBook+ v0.7.26. Verify the installed release, company, permissions and configuration. Use authorized synthetic data for training. Commercial activation is not asserted.
:::

## Before creating a login

A driver roster record and an authenticated staff account are different things. Do not assume that creating a driver in the fleet directory creates credentials. Staff provisioning is a privileged backend operation, not a public registration process.

## Authorized onboarding

1. Confirm the person's identity, employment or contractual relationship, company and required duties. Record approval by the responsible administrator.
2. Ask the platform administrator to create the account and active company membership with the minimum required role. The inspected backend includes `scripts/provision-operator-user.mjs`, which accepts email, full name, company UUID and role, obtains an initial password from the protected process environment and stores a scrypt hash. This is a technical administrator tool, not an operator screen.
3. Supported roles in that provisioning tool are company_admin, dispatcher, driver and viewer. Do not grant platform administration through this tool. Verify any driver-to-account association separately; provisioning membership alone does not establish that association.
4. Deliver unique credentials securely. Use a strong password; never publish credentials, share accounts or reuse test passwords. Passenger email is optional, but the inspected staff login uses email and password.
5. Confirm sign-in, correct company, permitted screens and denied actions using the new user's actual role. For a chauffeur, verify access only to authorized assignments. Do not use administrator simulation as evidence of driver permissions.

## Changes and offboarding

The provisioning script updates credentials and reactivates existing accounts/memberships when the normalized email already exists. Treat rerunning it as a sensitive account change, not harmless duplication. Require authorization and verify existing memberships before a reset. For departures, have the authorized backend administrator revoke membership, sessions and any sharing authorization; verify subsequent access is denied. Do not delete operational history to remove access.

Public driver/staff/partner applications, if introduced, must be reviewed before backend provisioning. No automatic account activation or general self-service staff administration interface is asserted for this release.

See [Authentication](/developers/authentication.html), [Roles and permissions](/developers/permissions.html) and [Drivers and rosters](/plus/drivers-and-rosters.html).
