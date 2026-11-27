# Third-party API setup & readiness

Source-reviewed v0.7.26. External providers remain disabled pending authorization and configuration. Implemented adapter code is not proof of successful external acceptance.

| Capability | Status in release evidence | Setup guide |
| --- | --- | --- |
| Gemini AI | Server-side key path; external acceptance required | [AI & messaging](/integrations/ai-messaging-setup.html) |
| Google Maps, Places, Geocoding, Routes | Optional configuration paths, disabled by default | [Maps & arrivals](/integrations/maps-arrivals-setup.html) |
| Email, SMS and WhatsApp | Notification adapter paths; external delivery not approved | [AI & messaging](/integrations/ai-messaging-setup.html) |
| Messenger, Instagram | Signed inbound webhook foundations; account/tenant routing acceptance required | [AI & messaging](/integrations/ai-messaging-setup.html) |
| PayPal, Revolut, Viva, Google Pay, Skrill | Adapter paths and readiness checks; not live-approved | [Payments setup](/integrations/payment-api-setup.html) |
| Flight/ferry monitoring | Persistent manual observations and provider-independent infrastructure; automatic monitoring outstanding | [Maps & arrivals](/integrations/maps-arrivals-setup.html) |
| AADE/myDATA, EDXEIX | Persistent sandbox records only; live submissions outstanding | No live credential setup approved |
| PMS, external dispatch, hospitality, other catalog entries | Capability designs or adapter foundations; verify individual implementation | [External dispatch](/integrations/external-dispatch.html) |

## Standard acceptance

Use the provider's official business or developer portal, obtain approved scopes and sandbox credentials, then have the authorized administrator provision them as described in [API keys](/integrations/api-keys.html). Confirm account ownership, data-processing terms, webhook signature and replay protection, idempotency, tenant mapping, failure handling and cost limits. Verify real sandbox evidence and record authorization before moving to production. Never use another company's account to resolve a missing connection.

Do not infer readiness from a catalog entry, synthetic preview or payment-method label. Provider-specific pricing, permissions and onboarding requirements must be checked with the provider before activation.
