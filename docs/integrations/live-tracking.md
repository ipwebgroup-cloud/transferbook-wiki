# Fleet tracking and telematics

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Illustrated workspace

[![Fleet Tracking / Live Operations: reservation milestones and fleet assignments. The screen explicitly reports that external GPS, flight and AIS providers are fail-closed.](/screenshots/v0.7.11/fleet-tracking.png)](/screenshots/v0.7.11/fleet-tracking.png)

*Select the screenshot to open it at its original size. Use your browser’s Back button to return.*

*Fleet Tracking / Live Operations: reservation milestones and fleet assignments. The screen explicitly reports that external GPS, flight and AIS providers are fail-closed.*

Staging capture, TransferBook+ v0.7.11; English UI. Illustrative test data. This image does not establish production availability. Identifiers masked.

## Availability

Live vehicle tracking requires a configured telematics provider. The baseline distinguishes demonstration data from live positions and does not establish a working production GPS connection.

## Operational procedure

1. Confirm the provider and company connection with an authorized administrator.
2. Check that the displayed data is identified as live rather than simulated before making dispatch decisions.
3. If tracking is unavailable, use verified reservation assignments and direct operational contact under your company's procedures.

Never infer a real driver's location from a demonstration marker or an estimated arrival from an unverified feed. Do not publish driver location screenshots containing personal data.

See [Fleet management](/plus/fleet-management.html) and [Driver and vehicle assignment](/plus/assignments.html).

## v0.7.26 operational tracking

The historical screenshot above is v0.7.11 and does not depict current GPS capability. The v0.7.26 source supports a local geographical canvas and authenticated chauffeur positions. Sharing requires explicit driver opt-in and on-duty authorization; freshness, accuracy and revocation matter. Dispatchers should confirm the correct hub and leg, check the last report and treat stale/missing coordinates as unavailable, not proof of movement. The independent return leg may have a different chauffeur.

Optional licensed Google map and road estimates require their own configuration and acceptance. Physical mobile GPS acceptance and automatic external flight/ferry tracking remain outstanding. See [Maps and arrivals setup](/integrations/maps-arrivals-setup.html) and [Arrival intelligence](/plus/arrival-intelligence.html).
