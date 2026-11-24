# Review a quotation

::: info Reference release
TransferBook+ v0.7.9 source baseline. This is a local review draft, not confirmation of production availability. Use only an authorized environment and verify the installed version and permissions.
:::

## Illustrated workspace

[![Tariff & Pricing Engine: fixed-price routes, seasonal rules, night surcharge and return incentives. All visible rates are illustrative staging settings, not standard commercial prices.](/screenshots/v0.7.11/tariff-pricing.png)](/screenshots/v0.7.11/tariff-pricing.png)

*Select the screenshot to open it at its original size. Use your browser’s Back button to return.*

*Tariff & Pricing Engine: fixed-price routes, seasonal rules, night surcharge and return incentives. All visible rates are illustrative staging settings, not standard commercial prices.*

Staging capture, TransferBook+ v0.7.11; English UI. Illustrative test data. This image does not establish production availability.

## Purpose
Review the price before confirming a booking. The source includes server-authoritative quotation and integer-cent calculation.

## Procedure
1. Confirm route, vehicle class, service type and time/date for each leg.
2. Review applicable configured charges: route tariff, vehicle multiplier, seasonal/night/holiday adjustment, return discount, extras and tax.
3. Check the itemized breakdown and final EUR amount. A return journey can have different adjustments on each leg.
4. If the server has not verified the current input, wait for the updated quotation; do not reuse an earlier quote.
5. If the route requires a custom quotation, follow [Manual quotations](/plus/manual-quotations).

## Expected result and troubleshooting
The amount reflects the configured tariff and current booking details. No tariff is invented for an unconfigured journey. A zero placeholder in a pending quotation does not indicate a free ride. Do not assume payment collection merely because a price is displayed.
