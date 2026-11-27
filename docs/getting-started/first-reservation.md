# First reservation: quote to settlement

::: info Reference release
Operational guidance reviewed against v0.7.26. Verify the installed release, permissions and approved scope. Training uses authorized synthetic data; this guide does not authorize commercial activation.
:::

## Training scenario

Use an authorized synthetic tenant with configured locations, vehicle class, tariff, driver and vehicle. Choose a future pickup time within the test schedule. No real passenger contact, external messages or online charges are required.

1. Create a one-way operator reservation. Select the market, valid pickup/drop-off, service date/time, passenger count, luggage and class. Enter a synthetic name and permitted telephone; leave email blank if not supplied.
2. Review the server quotation. If a valid tariff is unavailable, use manual quotation review. Do not invent a fare, discount or passenger email. Confirm required fields and submit once.
3. Verify the resulting reference, status and price. For an uncertain response, search for the reservation before retrying.
4. Dispatch only after the required quotation and booking checks. Select a suitable available driver and vehicle. Verify the full interval, conflicts, capacity and saved assignment.
5. Sign in with an authorized synthetic chauffeur account. Review and advance only the assigned journey through permitted milestones. Do not use a simulated administrator role as proof of chauffeur access.
6. If testing cash settlement, enter only the synthetic receipt amount. Review remaining balance, collecting driver and separate office handover. No real payment is made.
7. Review final reservation status, CRM linkage, payment ledger and audit evidence. Test notifications using previews or isolated authorized test channels only.

Repeat with an independently assigned return leg, then test hourly or private tour workflows if offered. A completed training scenario is not authorization for real business.

See [Create reservation](/plus/create-reservation.html), [Dispatch](/plus/dispatch-schedule.html), [Cash management](/plus/cash-management.html) and [Customer gateway](/plus/customer-booking-gateway.html).
