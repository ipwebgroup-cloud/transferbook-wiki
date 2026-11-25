# Release Notes

## v0.7.14 — published release

The published release describes responsive Schedule & Dispatch improvements, date navigation and calendar presentation, contracted partner pricing and booking attribution, passenger special requests and internal dispatch notes, authorized dispatch overrides with mandatory audit justification, server-side Website Studio draft and revision improvements, and conversational reservation handoff improvements. Passenger email remains optional.

**Release evidence:** canonical commit `bb02dba6eed8c118f86c6a901f569a4da0033067`; the annotated release tag was verified. The release record reports four passing canonical CI workflows, centralized version consistency tests and preservation of historical database migrations; no new migration is required by this release.

**Availability:** published release, not independent evidence of deployment or live acceptance. Public publication and external provider activation remain gated. English-first functional development continues.

## v0.7.13 — published staging release

Integrated commercial modules, commercial analytics, payment provider readiness, enhanced operator administration and booking workflows, public booking gateway and passenger lookup foundations, and Website Studio / Template Manager integration.

**Release evidence:** the release record reports six additional staging database migrations and scoped permissions, and four passing canonical CI workflows. Activation of public booking or external integrations requires separate configuration and acceptance.

## v0.7.12 — published staging release

Authenticated website design preparation supports larger requests through a dedicated protected endpoint while preserving ordinary API limits. Tenant authorization and role checks precede design processing; malformed or oversized requests receive improved handling. Hosting, HTTPS and publishing safeguards and independent design studio compatibility are retained.

**Release evidence:** the release record reports five passing canonical CI acceptance jobs, a signed release tag, PostgreSQL tenant isolation verification and no new database migrations. No automatic public website changes or live booking or payment activation are implied.

## v0.7.11 — controlled staging release (24 November 2026)

The release introduces integrated Website Studio publishing capabilities: hosting management, HTTPS verification, compilation of a selected website design, private revision preparation, verified backups and owner-authorized website updates and rollback. It includes single-use authorization and recovery protections and maintains independent local design studio compatibility.

**Availability:** published software release for guarded staging deployment only. This is not evidence of an active customer website, live booking or payment processing. The release does not include database migrations or production website changes.

## v0.7.10 — controlled staging release (24 November 2026)

Website Studio refinements include improved visual editing and responsive previews, multilingual reference websites (English, Greek, Italian, French, German and Spanish), block and inspector editing, local draft autosave, backup and recovery, tenant-isolated draft storage, portable `.tbsite.json` and `.tbtheme.json` packages and improved navigation between Website Studio and Theme Manager.

**Availability:** published software release for controlled staging deployment only. Public website publication, server-backed website persistence requiring migration 020, live payments and external booking integrations were not activated by this release.

## v0.7.9 — source baseline
Multi-page local-first Website Studio, responsive preview, portable website and theme packages, and tenant/mode-scoped drafts. Database activation and publication are distinct acceptance steps.

## v0.7.8 — historical staging baseline
The release records describe retry-safe reservation creation, optional passenger email, duplicate booking prevention and explicit messaging consent. Staging acceptance does not establish public commercial availability.

## Version policy
These notes record published and historical versions, not the current installed version or commercial availability. Other guides retain their own reference version until reviewed against a newer release. Confirm the actual version and enabled capabilities before applying instructions.
