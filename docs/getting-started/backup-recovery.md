# Backup, recovery & business continuity

::: info Reference release
Operational guidance reviewed against v0.7.26. Verify the installed release, permissions and approved scope. Training uses authorized synthetic data; this guide does not authorize commercial activation.
:::

## Agree a recovery plan

The hosting and business owners must agree recovery point and recovery time objectives, retention, encryption, off-system copies and responsible contacts. No numerical SLA is implied. Maintain compatible database backups, release artifacts, necessary configuration and customer-managed content. Protect secrets and signing material in a separately authorized recovery process.

## Before changes

1. Confirm target environment, installed release, database schema and candidate migration requirements.
2. Verify backup identity, checksum and readability. A readable archive is not proof of restoration; perform and record isolated restore tests.
3. Preserve customer content, domains, local themes, integration configuration and tenant access; define explicit rollback/forward-recovery criteria.
4. Obtain authorization and document the maintenance window. Use the approved update procedure only.

## During an interruption

Stop ambiguous retries. Preserve reservation references, payment identifiers and incident times without exposing credentials. Use the agreed manual dispatch fallback with restricted access and minimum necessary data. Verify actual payment and booking state before resubmission; never invent a provider result. Coordinate with support and record offline actions for reconciliation.

## Restore and resume

Only authorized technical staff may restore an affected environment. Test recovery in isolation first, verify schema and release compatibility, company boundaries, accounts, booking/dispatch state, financial ledger and retained content. Check enabled providers separately. Do not blindly roll back database migrations. Reconcile missed or duplicated operations, record recovery evidence and obtain approval before returning to service.

See [Installation](/installation/), [Software updates](/plus/software-update-manager.html), [Payment review](/tutorials/payment-review.html) and [Security & Privacy](/security-privacy/).
