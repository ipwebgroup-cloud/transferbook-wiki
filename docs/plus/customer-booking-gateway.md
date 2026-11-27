# Customer booking gateway

::: info Reference release
Source-reviewed against TransferBook+ v0.7.26. Verify the installed release, company, permissions and configuration. Use authorized synthetic data for training. Commercial activation is not asserted.
:::

## Activation boundary

The separate guest gateway is implemented with independent public catalog, quote, request and lookup gates. Public intake remains disabled pending authorization. The storefront must never embed operator tokens or have unrestricted database access.

## Approved customer journey

1. Confirm the company's approved publication channel and catalog. Only published locations, services and vehicle options should be offered.
2. The customer selects a route, date/time, passengers, luggage and service details. Validate the applicable service and capacity. The server returns a verified positive tariff or a manual quotation requirement; do not invent a zero fare.
3. Provide the passenger's name and telephone; email is optional. Do not fabricate an address for phone-only bookings.
4. Review the current quote and submit once using the approved customer gateway. The server checks signed quotation context and duplicate/concurrent submission protections. An expired or changed quote requires fresh review.
5. Review the returned booking reference and status. A request is not a completed payment or automatic dispatch authorization. The operator checks pending quotes, CRM matching and the resulting reservation before confirmation/dispatch.

## Acceptance before publication

Verify tenant and channel isolation, restricted database access, abuse protection, quote tampering rejection, duplicate submissions, safe CRM linkage, optional email, passenger-safe lookup and disabled-feature behavior. Use isolated synthetic data and separate authorization for payment and notification providers. Do not publish until the approved live acceptance and commercial activation gates are met.

See [Create a reservation](/plus/create-reservation.html), [Passenger information](/plus/passenger-information.html) and [API setup](/integrations/third-party-api-setup.html).
