# Commercial go-live acceptance

::: info Reference release
Operational guidance reviewed against v0.7.26. Verify the installed release, permissions and approved scope. Training uses authorized synthetic data; this guide does not authorize commercial activation.
:::

## Acceptance record

Record company, approved environment, exact release, review date, business owner, technical owner and scope. Use the checklist as a manual record; marking a box in documentation does not activate a feature.

| Gate | Required evidence |
| --- | --- |
| Installation | Approved release and signature, HTTPS, health, migrations and restore-tested backups |
| Access | Actual administrator, dispatcher, driver and viewer accounts; isolation and denied actions |
| Company data | Approved company, markets, locations, fleet, driver availability, taxes and tariffs |
| Booking | Four supported service modes where sold, phone-only booking, manual quote, duplicate and conflict protection |
| Dispatch | Full-duration checks, vehicle maintenance, independent legs and arrival-advisory review |
| Finance | Cash collection, custody and reconciliation; approved payment provider acceptance only if enabled |
| Public gateway | Domain/channel isolation, verified quotes, abuse prevention and explicit public-intake approval |
| Messaging and AI | Privacy, consent, opt-out, verified delivery, human takeover and provider authorization |
| GPS and regulatory | Physical mobile testing and separately approved live integration; sandbox is not compliance |
| Operations | Staff training, support, incident fallback and owner sign-off |

## Decision

Mark each gate passed, failed or not applicable with evidence and responsible owner. Defer affected workflows until accepted. No blanket commercial go-live claim follows from a signed release, complete onboarding checklist, successful CI or passing documentation checks.

The v0.7.26 release leaves automated external arrivals, background scheduling, complete provider quota enforcement, licensed street-map configuration and physical mobile GPS acceptance outstanding. External providers and public intake remain disabled pending authorization. Live regulatory submissions require separate acceptance. Customer production installation is not asserted.

See [Installation](/installation/), [Backup and recovery](/getting-started/backup-recovery.html) and [Third-party setup](/integrations/third-party-api-setup.html).
