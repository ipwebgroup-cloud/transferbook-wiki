# Create a reservation

::: info Reference release
TransferBook+ v0.7.9 source baseline. This is a local review draft, not confirmation of production availability. Use only an authorized environment and verify the installed version and permissions.
:::

## Illustrated workspace

[![Direct operator reservation form: select the service, route, date, passengers and vehicle class. Guest name and telephone are required; email is optional. The displayed fare is an example.](/screenshots/v0.7.11/create-reservation.png)](/screenshots/v0.7.11/create-reservation.png)

*Select the screenshot to open it at its original size. Use your browser’s Back button to return.*

*Direct operator reservation form: select the service, route, date, passengers and vehicle class. Guest name and telephone are required; email is optional. The displayed fare is an example.*

Staging capture, TransferBook+ v0.7.11; English UI. Illustrative test data. This image does not establish production availability.

## Before you start
Use an authorized operator account with reservation creation permission. An active operating hub and vehicle class must exist.

## Procedure
1. Open the operator's new reservation form and select the operating hub and service type.
2. Select the pickup and drop-off from the catalogue. If entering a custom location, explicitly confirm it with **Use custom address**. For normal transfers, pickup and drop-off cannot be identical.
3. Enter the date, time, passenger count and luggage. Select a suitable vehicle class. For return service, enter a return date that is not earlier than the outbound date.
4. Enter **Guest Full Name** and **Phone**. **Email (Optional)** can remain blank. Add flight/vessel details and sign text if applicable.
5. Review the quotation and any configured extras. In authenticated mode, wait for the server to verify the current quotation.
6. Submit once. Review the resulting booking reference and status before starting another request.

## Expected result
The form prepares a confirmed booking when pricing permits, or a new booking awaiting a manual quotation. An unverified quote or invalid route blocks submission.

## Troubleshooting
If the response is uncertain, check Reservations before creating another attempt. For a quote-pending booking, use [Manual quotations](/plus/manual-quotations). For contact fields see [Passenger information](/plus/passenger-information).
