# Changelog

Version-by-version history of TransferBook+. For customer-oriented summaries see [Release Notes](/release-notes/).

**Snapshot: v0.7.26 · 2026-11-27 (UTC).**

Dates are GitHub release publication dates or, where no separate release entry exists, signed tag dates. The five tag-only entries have limited evidence. CI results are reported by release records, not newly executed tests. Publication does not establish installation, live acceptance or commercial availability. Categories without supporting evidence are omitted.

[Ελληνικά](/el/changelog/)

## v0.7.26 — 2026-11-27

**Source:** published GitHub release record.

- **Added and improved:** Graphical fleet tracking and offline geographic canvas, independent journey legs, persistent flight and ferry identities, timestamped manual observations, arrival advisories, dispatcher-reviewed pickup changes and chauffeur briefs.
- **Security and reliability:** Full-duration conflicts, absence and maintenance checks, concurrent locking, capacity and return chronology, stale evidence protection, tariff review at date/night boundaries, tenant isolation and append-only observations.
- **Validation:** 835 passed, zero failures, one expected skip; five CI workflows, real PostgreSQL migration and HTTP acceptance, Node 24 builds and ASUS regression acceptance passed; release reports migration 025 applied to staging and verified backup.
- **Availability:** Automatic external flight/ferry monitoring, background scheduling, complete quota enforcement, licensed street maps and physical mobile GPS remain outstanding; external providers and public intake disabled.

## v0.7.25 — 2026-11-26

**Source:** published GitHub release record.

- **Added and improved:** Persistent notifications and retries, transactional conversation conversion, subcontractors and leg assignments, supplier settlements, profitability, AADE/myDATA and EDXEIX sandbox records, manual arrival advisories and update preservation.
- **Security and reliability:** Tenant isolation, opt-out and duplicate protection, restricted database permissions and append-only audit; passenger email optional; six languages.
- **Validation:** 826 passed, zero failures, one expected skip; five CI and seven PostgreSQL acceptance workflows passed; migration 024 reported applied to staging with verified backup.
- **Availability:** External providers, automated arrival monitoring, physical GPS, live regulatory submission and customer installations outstanding.

## v0.7.24 — 2026-11-26

**Source:** published GitHub release record.

- **Added and improved:** Opt-in chauffeur GPS, geofences, optional Google map, Places and Geocoding, Routes estimates and return legs; notification, multilingual booking, subcontractor and regulatory sandbox foundations.
- **Security and reliability:** Tenant isolation, revoked sharing leases, restricted external configuration, usage and privacy safeguards, authoritative tariffs.
- **Validation:** 804 passed, zero failures, one expected skip, five CI workflows, PostgreSQL and isolated browser acceptance, ASUS compatibility; no new migrations.
- **Availability:** External activation, physical mobile acceptance, live regulatory submission and customer installations deferred.

## v0.7.23 — 2026-11-26

**Source:** published GitHub release record.

- **Added and improved:** Standalone customer booking gateway, authoritative quotes, phone-only booking, automatic CRM linkage, independent chauffeur journeys, partial cash collection and audited handover.
- **Security and reliability:** Restricted database permissions, transactional persistence, duplicate protection, tenant and chauffeur authorization.
- **Validation:** 723 tests passed, zero failures, five canonical CI workflows and real PostgreSQL commercial lifecycle acceptance passed; signed release verified.
- **Availability:** Public booking and external delivery disabled pending approval.

## v0.7.22 — 2026-11-26

**Source:** published GitHub release record.

- **Improved:** Cash collection, chauffeur custody verification, AI commercial grounding and release validation automation.
- **Security:** Audited cash custody transfers, stronger chauffeur reservation access controls, passenger privacy and AI data minimization.
- **Added:** Reusable commercial API acceptance harness and automated Chromium browser regression testing.
- **Validation:** Release record reports 691 passing local regression tests, zero local failures, 26 deferred database-dependent tests, four successful builds, 14 successful synthetic browser checks and five passing canonical CI workflows.
- **Known limitations:** Six authenticated browser scenarios remain pending.
- **Availability:** Controlled staging installation only. Production activation, external providers and unrestricted public booking remain unauthorized.

## v0.7.21 — 2026-11-26

**Source:** published GitHub release record.

- **Improved:** AI privacy minimization and local reconstruction of contact details; CRM recognition, conflicting contact detection, passenger lifecycle notifications and company onboarding readiness.
- **Security:** Atomic conversation persistence with rollback protection; human dispatcher takeover, conversation ownership enforcement and protected saved-location selection and private CRM preferences.
- **Removed:** Hardcoded market defaults.
- **Validation:** Release record: 710 tests discovered; 684 passed locally, zero failures, 26 deferred database-dependent tests; four CI workflows, builds and public artifact isolation audits passed. The 99 successful live checks refer to the previous staging baseline, not v0.7.21. Signed tag independently verified.
- **Availability:** Controlled staging installation only; external providers and unrestricted public booking remain disabled. Production activation not authorized.

## v0.7.20 — 2026-11-25

**Source:** published GitHub release record.

- **Added:** Fast customer lookup, returning-passenger recognition, phone-only booking with optional email, cash-first operator workflow, partner commission estimation and passenger-safe booking summaries; messaging channel foundations.
- **Improved:** Company onboarding, AI Copilot continuity, booking status and tariff presentation, and clipboard feedback.
- **Security:** Ambiguous CRM match protection, tenant/channel ownership checks, transactional conversation persistence and reduced disclosure of stored CRM data to external AI.
- **Database:** No migration changes reported.
- **Validation:** 697 tests; 672 passed, zero failures, 25 locally skipped; four CI workflows and builds passed; signed release reported.
- **Availability:** Guarded staging only; commercial activation subject to live acceptance, database verification and external AI privacy validation.

## v0.7.19 — 2026-11-25

**Source:** published GitHub release record.

- **Improved:** Chauffeur journey and amendment safeguards, partial and full cash collection, collecting chauffeur attribution, reconciliation and handover, CRM and repeat bookings, concierge partner reservations, AI operations and onboarding readiness.
- **Fixed:** Update failure detection, installation monitoring timeout recovery and safer retry verification.
- **Validation:** Consolidated regression tests; required CI passed and signed release reported.
- **Database:** No new migrations reported.

## v0.7.18 — 2026-11-25

**Source:** published GitHub release record.

- **Added:** Independent outbound and return assignments, separate chauffeur progress, driver cash confirmation, printable trip vouchers, expanded reporting and company readiness checklist.
- **Improved:** Update Now interface, header update notification, installation monitoring, compact diagnostics, cash handover, dispatch conflict detection, booking and AI Copilot.
- **Validation:** Four CI workflows passed; signed release reported.
- **Database:** No new migrations reported.

## v0.7.17 — 2026-11-25

**Source:** published GitHub release record.

- **Improved:** Dispatch scheduling and crew selection, return calendar visibility, chauffeur dashboard, outstanding cash balances and cash receipt confirmation.
- **Added:** Driver-to-office cash handover and daily cash management summaries.
- **Validation:** Four CI workflows passed; signed release reported.
- **Database:** No new migrations reported.

## v0.7.16 — 2026-11-25

**Source:** published GitHub release record.

- **Fixed:** PostgreSQL parameter typing in partner reservation amendments; preserved authoritative contracted pricing and commission calculations.
- **Validation:** Strengthened commission regression tests; four PR and four canonical-main CI workflows passed; SQL validated against PostgreSQL 16; signed release reported.
- **Database:** No new migrations or permission changes reported.
- **Known limitations:** Focused live partner amendment acceptance was pending at publication.

## v0.7.15 — 2026-11-25

**Source:** published GitHub release record.

- **Improved:** Return and hourly chauffeur amendments, authoritative return discounts, partner pricing and commissions, payment ledger and balances, cash reconciliation, chauffeur dashboard, phone lookup, passenger privacy, Website Studio, conversational handoff and Command Center metrics. Email remains optional.
- **Validation:** TypeScript and eight focused tests passed; four PR and four main CI workflows passed; signed release reported.
- **Database:** No new migrations; existing scoped permissions preserved.
- **Known limitations:** Live commercial acceptance pending at publication; public booking and integrations gated.

## v0.7.14 — 2026-11-25

**Source:** published GitHub release record.

- **Added:** Contracted partner pricing and booking attribution, passenger special requests and internal dispatch notes.
- **Fixed:** Responsive dispatch layout and calendar navigation.
- **Improved:** Server-side Website Studio revisions, conversational handoff and version consistency checks; optional passenger email retained.
- **Security:** Authorized dispatch overrides require audit justification.
- **Database:** No new migrations reported.
- **Validation:** Four canonical CI workflows passed; signed release reported.

## v0.7.13 — 2026-11-25

**Source:** published GitHub release record.

- **Added:** Commercial analytics, payment provider readiness, public booking gateway and passenger lookup foundations, integrated Website Studio and Template Manager.
- **Improved:** Operator administration and booking workflows.
- **Database:** Six additional staging migrations and scoped permissions reported.
- **Validation:** Four CI workflows passed; staging only.

## v0.7.12 — 2026-11-24

**Source:** published GitHub release record.

- **Improved:** Authenticated preparation of larger website design requests, validation of malformed or oversized requests; ordinary API limits preserved.
- **Security:** Tenant and role checks before design processing; hosting, HTTPS and publication safeguards retained.
- **Validation:** Five CI acceptance jobs, PostgreSQL tenant isolation and signed tag reported; no automatic public publication.
- **Database:** No new migrations reported.

## v0.7.11 — 2026-11-24

**Source:** published GitHub release record.

- **Added:** Integrated website hosting management, HTTPS verification, compilation, private revision preparation, backups and owner-approved updates/rollback.
- **Security:** Single-use authorization and recovery protection.
- **Validation:** Canonical acceptance checks and signed tag reported; staging scope.
- **Database:** No new migrations reported.

## v0.7.10 — 2026-11-24

**Source:** published GitHub release record.

- **Improved:** Visual editor, responsive previews, multilingual reference websites, inspector controls, local draft autosave/recovery and Theme Manager navigation.
- **Added:** Portable .tbsite.json and .tbtheme.json packages and tenant-isolated draft/recovery storage.
- **Known limitations:** Migration 020 remained inactive at this release; server-backed persistence and live integrations not activated.
- **Validation:** Application, standalone design studio and PostgreSQL 16 acceptance workflows passed; signed tag reported.

## v0.7.9 — 2026-11-23

**Source:** published GitHub release record.

- **Added:** Multi-page Website Studio, visual editing, responsive previews, reusable sections, multi-brand blueprints and portable website/theme packages.
- **Improved:** Company-scoped local drafts and Template Manager security/compatibility.
- **Known limitations:** Staging only; migration 020 inactive, no live payments, public publishing or external booking activation.

## v0.7.8 — 2026-11-23

**Source:** verified signed tag (no separate release entry).

- **Validation:** Signed annotation identifies an approved WP156–WP159 staging release; detailed release entry unavailable.

## v0.7.7 — 2026-11-23

**Source:** published GitHub release record.

- **Improved:** Multilingual four-mode booking, storefront/widget, conversational booking, VIP customer features and holiday pricing.
- **Fixed:** Operator login and session recovery; optional email preserved.
- **Validation:** CI including PostgreSQL integration tests; staging evaluation only.

## v0.7.6 — 2026-11-23

**Source:** verified signed tag (no separate release entry).

- **Changed:** Signed annotation identifies commercial beta sandbox and WP150C correction; precise scope not specified.

## v0.7.5 — 2026-11-22

**Source:** verified signed tag (no separate release entry).

- **Fixed:** Node 24 staging lockfile repair.

## v0.7.4 — 2026-11-22

**Source:** verified signed tag (no separate release entry).

- **Changed:** Optional passenger email and WP148R migration fix in CI-approved staging release.

## v0.7.3 — 2026-11-22

**Source:** verified signed tag (no separate release entry).

- **Changed:** Four-mode CI-approved staging release; detailed scope not specified by tag.

## v0.7.2 — 2026-11-22

**Source:** published GitHub release record.

- **Improved:** Role safeguards, server-authoritative pricing, payment state and chauffeur data protection.
- **Database:** No migrations or production activation authorized.

## v0.7.1 — 2026-11-22

**Source:** published GitHub release record.

- **Fixed:** Asset digest parity and clearer distinction between asset verification and static directory failures; fail-closed checks retained.
- **Validation:** CI-verified staging candidate; no SQL migration or production authorization.

## v0.7.0 — 2026-11-21

**Source:** published GitHub release record.

- **Added:** System Update Manager.
- **Improved:** Staging schema compatibility and release reliability.
- **Validation:** CI-verified staging candidate; no SQL migrations or production authorization.

## v0.6.0 — 2026-11-18

**Source:** published GitHub release record.

- **Fixed:** Authentication and React hook ordering for blank screen after login.
- **Availability:** Staging candidate subject to protected deployment, validation, database backup and rollback safeguards.
