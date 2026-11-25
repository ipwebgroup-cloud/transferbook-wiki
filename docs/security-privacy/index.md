# Security, Privacy & GDPR

TransferBook+ processes information used to arrange and operate transportation services. This guide explains security practices and privacy readiness for transportation companies, authorized staff and hosting teams.

::: warning Scope and evidence
This is operational guidance, not a privacy notice, data processing agreement, security certification or guarantee of GDPR compliance. Existing Wiki API and role descriptions use the v0.7.9 source-reviewed reference. Confirm controls in the exact approved release and deployment before relying on them. The recommendations below are not assertions that all controls are implemented.
:::

## Accounts and company boundaries

The reference documentation describes RS256 bearer-token verification, independent membership and permission checks, and roles for company administrators, dispatchers, drivers and viewers. A selected company identifier is not itself authorization. Driver access must be restricted to authorized assignments. See [authentication and tenant access](/developers/authentication.html) and [roles and permissions](/developers/permissions.html).

- Assign individual accounts and the minimum permissions needed. Remove access promptly when staff leave or responsibilities change.
- Use strong unique credentials, device locking and current browsers. Confirm session expiry, logout and account recovery on the accepted release. Require stronger authentication where supported and appropriate to risk.
- Keep operator credentials and tokens out of public booking pages, screenshots and support tickets.
- Test server-side company isolation, including direct API requests and cross-company object access, rather than relying on hidden interface elements.

## Passenger, driver and payment information

| Information | Handling practice |
| --- | --- |
| Passenger name, phone and optional email | Collect only what the booking or a justified purpose requires; never invent an email address |
| Pickup, destination, flight or vessel details | Share only with staff and partners who need them for the service |
| Driver identity, assignments and location | Restrict access; disclose purposes and assess whether monitoring is necessary and proportionate |
| VIP notes and booking history | Avoid unnecessary sensitive information, unrestricted free-text notes and unjustified profiling |
| Payment amount and reference | Use approved payment workflows; never enter card numbers or security codes into notes |

See [passenger information](/plus/passenger-information.html), [payments and reconciliation](/plus/payments-and-reconciliation.html) and [payment provider readiness](/integrations/payment-providers.html). A provider listed in the interface is not evidence of live activation or PCI DSS certification. Confirm the provider's approved payment flow and the applicable compliance responsibilities.

Messaging and AI channels require separate approval, data-flow review and appropriate permissions. Transactional consent or a sandbox consent state is not marketing permission or proof of a GDPR lawful basis. Use only synthetic records in training and unapproved test environments. See [conversational booking and consent](/integrations/conversational-booking.html).

## GDPR responsibilities

Where the GDPR applies, identify the controller, any joint controllers and processors for each processing purpose. A transportation company that determines why and how it uses passenger data will generally act as controller for that processing. A hosting or software provider processing on its behalf may act as processor; actual roles depend on the facts and agreements.

Before launch:

- Document processing purposes, categories, recipients and a lawful basis for each purpose. Assess special-category information separately if it is necessary.
- Provide appropriate privacy information and establish arrangements for exercising individual rights.
- Agree processor terms under Article 28 where applicable, including subprocessors, security and assistance obligations. Review international transfers under Chapter V.
- Maintain required processing records and determine whether a data protection officer or impact assessment is required, particularly for high-risk processing such as systematic location monitoring.
- Review marketing, tracking and messaging under applicable privacy and electronic communications rules; operational consent settings do not replace this assessment.

## Retention and individual rights

Establish retention periods by purpose and applicable obligations, including financial records, operational logs, backups and support records. Delete or appropriately anonymize data when no longer justified, subject to lawful retention requirements. Do not assume a delete button permanently removes information from all systems or backups.

Provide a verified channel for access, rectification, erasure, restriction, portability, objection and other applicable rights. Requests are subject to the relevant conditions and exceptions. Under Article 12, controllers generally respond within one month; an extension of up to two further months may apply when justified, with notice within the initial month. Verify identity proportionately and protect other people's information.

Confirm the available export, correction, deletion and retention controls; use an approved administrative process where automation is not validated.

## Audit, hosting and incident response

Security acceptance should cover:

- HTTPS configuration, patching, secret storage and database access restrictions.
- Appropriate encryption and backup protections, restoration testing and documented recovery objectives.
- Audit evidence for important actions, restricted log access, redaction of secrets and defined retention.
- Monitoring, vulnerability remediation, tenant isolation tests and authorization checks.
- A documented incident contact, containment plan, evidence preservation and escalation process.

If a suspected breach occurs, report it promptly through the agreed secure channel, preserve relevant evidence and avoid distributing passenger records unnecessarily. Processors must inform the controller without undue delay after becoming aware of a personal data breach. Where notification is required, the controller must notify the competent supervisory authority without undue delay and, where feasible, within 72 hours of awareness. High-risk breaches generally also require communication to affected individuals without undue delay, subject to Article 34 exceptions.

See [Installation & Deployment](/installation/) for operational readiness and recovery planning.

## Before commercial activation

Record the release tested, approved controls, responsible parties, unresolved risks and agreed privacy terms. Verify access isolation, audit coverage, retention and rights-handling procedures, provider agreements, incident contacts and recovery evidence. Do not market untested controls or describe the platform as certified or GDPR compliant solely on the basis of this guide.

## Official references

- [Regulation (EU) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/) — particularly Articles 5–6, 12–22, 28, 30, 32–35 and Chapter V.
- [EDPB: Data controller or data processor](https://www.edpb.europa.eu/sme/learn-the-basics/data-controller-or-data-processor_en)
- [EDPB: Secure personal data](https://www.edpb.europa.eu/sme/be-compliant/secure-personal-data_en)
- [EDPB: Respect individuals’ rights](https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en)
- [EDPB: Data breaches](https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_en)

[Ελληνικά](/el/security-privacy/)
