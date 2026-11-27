# Flight & ferry arrival intelligence

::: info Reference release
Source-reviewed against TransferBook+ v0.7.26. Verify the installed release, company, permissions and configuration. Use authorized synthetic data for training. Commercial activation is not asserted.
:::

## Review the arrival board

1. Select the authorized company and operating hub. Locate the reservation and correct outbound or return leg in Arrival Intelligence.
2. Verify carrier/service number, date, departure and destination against an approved source. Record the transport identity and a manual observation with the time and supporting evidence. Do not invent estimated or actual arrival times.
3. Inspect the reported early, delayed, cancelled or disrupted status. Review the observation history and any generated dispatch advisory. Superseded or expired evidence must not be used to approve a new decision.
4. Approve or reject a proposed pickup adjustment only with dispatch permission. Verify the proposed timing against assignment conflicts, full journey duration, chauffeur availability, vehicle maintenance and tariff date/night boundaries. Where tariff review is required, resolve it before proceeding.
5. Reopen the reservation and relevant schedule. Verify the decision, independent leg timing and chauffeur arrival brief. A completed advisory decision must not be reversed by resubmitting it.

## Availability and fallback

Manual observation and advisory history are persistent. Automated external tracking, background scheduling, complete provider quota enforcement and licensed map activation remain outstanding. A provider configuration entry is not a live feed. Continue approved manual verification if no external provider is available. Do not treat advisory information as a guarantee of transport arrival.

See [Dispatch schedule](/plus/dispatch-schedule.html) and [Maps and arrival API setup](/integrations/maps-arrivals-setup.html).
