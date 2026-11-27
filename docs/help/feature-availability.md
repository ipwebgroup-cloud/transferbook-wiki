# Feature availability matrix

::: info Reference release
Reference v0.7.26, not a live installation audit or commercial activation approval. Confirm installed version, permissions, configuration and acceptance.
:::

## Interpret the statuses

- **Implemented:** present in release evidence or reviewed source; requires deployment-specific acceptance.
- **Configurable / foundations:** configuration or integration paths exist, not proof of a live connection.
- **Sandbox:** test operation, not official submission.
- **Outstanding / disabled:** live operation is not established.

External providers and public intake remain disabled pending authorization. This matrix covers TransferBook+, not other editions or commercial packages.

## Capabilities and boundaries

| Feature | Status | Boundary / prerequisite |
| --- | --- | --- |
| [Reservations, optional passenger email](/plus/create-reservation.html) | Implemented | Role, tenant, catalog and tariff acceptance |
| [One-way, return, hourly, private tours](/getting-started/first-reservation.html) | Implemented | Validate each offered mode and price |
| [Tariffs and manual quotation](/plus/pricing.html) | Implemented | Verify direction, date, service and surcharges |
| [Fleet, maintenance, driver roster and dispatch](/plus/dispatch-schedule.html) | Implemented | Verify actual availability, capacity and interval conflicts |
| [Staff authentication and RBAC](/plus/staff-administration.html) | Implemented; backend provisioning | Verify actual accounts, membership and driver association; no self-registration asserted |
| [Independent chauffeur journey legs](/plus/chauffeur-workspace.html) | Implemented | Test authenticated role access and milestones |
| [Customer CRM and repeat linkage](/plus/vip-crm.html) | Implemented | Verify matching and tenant privacy |
| [Cash collection, partial payment, physical custody](/plus/cash-management.html) | Implemented | Verify actual receipts and handover separately |
| [Affiliates, subcontractors, supplier settlements](/plus/subcontractors.html) | Implemented | Verify supplier agreements, correct leg and settlement evidence |
| [Website Studio and theme packages](/websites/) | Implemented | Review local draft, package and publication boundaries |
| [Public customer gateway](/plus/customer-booking-gateway.html) | Implemented; intake disabled | Separate channel, abuse, quote and live acceptance approval |
| [Manual flight/ferry observations and advisory review](/plus/arrival-intelligence.html) | Implemented | Verify evidence, dispatcher approval and tariff review |
| [Offline geographical canvas](/integrations/live-tracking.html) | Implemented | Uses operational coordinates; no licensed street map implied |
| [Chauffeur GPS sharing](/integrations/live-tracking.html) | Implemented; physical acceptance pending | Explicit opt-in, on-duty authorization, mobile device testing |
| [Google Maps / Places / Geocoding / Routes](/integrations/maps-arrivals-setup.html) | Configurable; external approval pending | Approved keys, billing, quotas and licensed street-map setup |
| [Automatic flight/ferry monitoring](/integrations/maps-arrivals-setup.html) | Outstanding | External adapters, scheduling and complete quota enforcement outstanding |
| [Notification outbox, history and audited retries](/plus/passenger-notifications.html) | Implemented | Verify recipient, opt-out and state; external delivery is separate |
| [Email, SMS, WhatsApp delivery](/integrations/ai-messaging-setup.html) | Configurable; disabled pending approval | Approved provider, credentials and real delivery acceptance |
| [AI conversation, conversion and human takeover](/integrations/conversational-booking.html) | Implemented foundations; external AI approval pending | Verify extracted details, quote, authorization and duplicate protection |
| [Messenger and Instagram](/integrations/ai-messaging-setup.html) | Webhook foundations; not live-approved | Signature, account/tenant routing and provider acceptance |
| [PayPal, Revolut, Viva, Google Pay via Viva, Skrill](/integrations/payment-api-setup.html) | Adapter paths; disabled pending approval | Provider-specific acceptance; Viva credential mismatch and Skrill refund limitation |
| [AADE/myDATA and EDXEIX](/integrations/regulatory-sandbox.html) | Sandbox only | Live submission blocked; statutory and technical acceptance required |
| [External dispatch, PMS and hospitality adapters](/integrations/external-dispatch.html) | Foundations / verify individually | Catalog presence is not integration proof |
| [Software Update Manager](/plus/software-update-manager.html) | Protected staging workflow | Commercial installation and unattended upgrades not asserted |

## Before activation

See [Release Notes](/release-notes/), [API setup](/integrations/third-party-api-setup.html) and [Go-live acceptance](/getting-started/go-live-checklist.html). Passing CI, a signed tag or documentation does not establish commercial readiness.
