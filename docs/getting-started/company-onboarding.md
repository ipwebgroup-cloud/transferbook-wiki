# Company onboarding

::: info Reference release
Operational guidance reviewed against v0.7.26. Verify the installed release, permissions and approved scope. Training uses authorized synthetic data; this guide does not authorize commercial activation.
:::

## Prepare the tenant

Confirm the approved installed release, authorized administrator and support owner. Open Company Settings and review the company onboarding checklist. The v0.7.26 source checks eight required configuration areas:

| Area | Checklist criterion | Verify independently |
| --- | --- | --- |
| Company identity | Trading name, legal entity, tax/VAT identifier | Accuracy with authorized company records |
| Markets | At least one active market | Correct time zone and actual service coverage |
| Locations | At least two non-disabled locations | Valid route endpoints in each intended market |
| Fleet | At least one class and non-archived vehicle | Capacity, availability, maintenance |
| Chauffeurs | At least one non-archived driver | Duty, account association and actual access |
| Pricing | Positive route/hourly rate or class multiplier | Valid quote for each sold service |
| Channels | At least one active booking channel | Domain, publication and independent intake gates |
| Settlement | Currency, time zone and buffer of at least 15 minutes | Actual payment and dispatch acceptance |

A complete configuration checklist is not operational acceptance. The location check is a count, not route coverage; class multiplier fallback does not guarantee a valid fare; a channel label does not enable public intake. The driver count does not prove a linked login. Demo readiness is not commercial readiness.

Recommended areas include hourly and seasonal rates, tours, partners, templates, branding and operator users. Expanded checklist items depend on supplied data. If operator count is unavailable, the source may infer team readiness from company identity; verify actual accounts independently.

## Order of setup

Complete identity, markets, locations, fleet, drivers, tariffs and channels; confirm settlement policy and authorize individual accounts. Review optional services only if sold. Use synthetic records to test [first reservation](/getting-started/first-reservation.html), then follow the [go-live checklist](/getting-started/go-live-checklist.html). Keep external providers and public intake disabled unless separately approved.

See [Company settings](/plus/company-and-language-settings.html), [Staff administration](/plus/staff-administration.html) and [API setup](/integrations/third-party-api-setup.html).
