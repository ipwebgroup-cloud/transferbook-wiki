# Terminology glossary

::: info Reference release
Reference v0.7.26, not a live installation audit or commercial activation approval. Confirm installed version, permissions, configuration and acceptance.
:::

Terms describe their operational meaning in this documentation, not legal or accounting definitions.

| Term | Meaning |
| --- | --- |
| Tenant | The company-scoped data and authorization boundary. |
| Market / operating hub | A configured service area with its own operational settings. |
| Location catalog | Approved pickup and drop-off reference locations. |
| Booking channel | A configured origin of booking traffic; active status is not public intake authorization. |
| Reservation | Stored service request and lifecycle record, not necessarily paid or dispatched. |
| Quotation | Price proposal subject to applicable rules and review. |
| Server-verified tariff | A fare verified by authoritative backend rules; missing verification requires review. |
| Manual quotation | Operator-reviewed price when a verified automatic fare is unavailable. |
| Journey leg | Independent outbound or return transport segment. |
| Dispatch | Authorized allocation of operational resources to a reservation or leg. |
| Dispatch buffer | Configured time margin used in operational planning; not a guarantee of availability. |
| Vehicle class | Service category and capacity/rate reference, distinct from a physical vehicle. |
| Driver roster | Operational driver records; separate from authenticated staff accounts. |
| Membership / RBAC | Company membership and role-based access control that determine permitted operations. |
| GPS sharing lease | Time-limited authorization for explicit chauffeur position sharing. |
| Geofence | A geographic boundary used to evaluate a location relative to a configured area. |
| ETA | Estimated time of arrival, not a confirmed arrival. |
| Arrival observation | Timestamped evidence about a transport service's arrival status. |
| Dispatch advisory | A proposal requiring review before an operational change. |
| CRM | Customer relationship records and repeat-customer linkage. |
| Affiliate | Commercial partner with an agreed referral or commission arrangement. |
| Subcontractor | External transport supplier assigned to provide a service or leg. |
| Supplier payable | Recorded outstanding amount owed to a supplier, subject to reconciliation. |
| Payment authorization | Provider approval or reservation of funds; not necessarily capture or settlement. |
| Cash collection | Recording cash physically received from the passenger. |
| Cash handover | Separate confirmation of physical custody transfer to the office. |
| Reconciliation | Matching recorded financial transactions against verified evidence. |
| PSP | Payment service provider; integration readiness does not mean activation. |
| Webhook | Provider callback to an application endpoint; verify authenticity and duplicate handling. |
| Idempotency | Protection against unintended duplicate effects when a request is retried. |
| Outbox | Persistent queue of notification jobs and their processing state. |
| Opt-out | Recorded restriction on sending a notification to a recipient or channel. |
| Human takeover | Escalation of a conversation to an authorized human operator. |
| Sandbox | Controlled test functionality or environment, not evidence of live service. |
| Fail-closed | An operation remains blocked when its required authorization or readiness is missing. |
| Migration | Versioned database schema or data change requiring release-specific review. |
| Release acceptance | Recorded evidence that a specific release and intended workflow meet agreed checks. |
| RPO / RTO | Agreed recovery point and recovery time objectives, to be tested rather than assumed. |
