# Google Maps, routing & arrival APIs

Source-reviewed v0.7.26. Default: disabled. The local geographic canvas remains available independently of licensed street maps.

## Google Cloud setup

1. Create a dedicated Google Cloud project, attach approved billing, and create separate keys for the following functions. Restrict each to the necessary APIs and environment.
2. Enable Maps JavaScript API and create a map ID for the optional browser map. Restrict its browser key to exact approved HTTPS website origins. Set the following build-time variables only after approval:

| Variable | Purpose |
| --- | --- |
| `VITE_ENABLE_GOOGLE_FLEET_MAP` | Optional map switch (default false) |
| `VITE_GOOGLE_MAPS_BROWSER_KEY` | Website- and API-restricted browser key |
| `VITE_GOOGLE_MAPS_MAP_ID` | Approved map ID |

3. For operator location lookup, enable Places API (New) and Geocoding API. Configure server-only `TBPLUS_GOOGLE_LOCATION_SERVER_KEY` restricted to those APIs and server IP; `TBPLUS_ENABLE_GOOGLE_LOCATION_LOOKUP` remains false until approval. The initial reference lookup is Greece-only; it does not automatically persist provider addresses or override tariffs.
4. For road estimates, enable Routes API and use a separate IP- and API-restricted `TBPLUS_GOOGLE_ROUTES_SERVER_KEY`. Keep `TBPLUS_ENABLE_GOOGLE_ROUTES` false until accepted. Estimates are not guaranteed arrival times or prices. Pickup GPS freshness and authorization are checked; outbound and return legs are independent.
5. Configure cloud quotas and billing alerts (alerts are not hard spending caps). Test CSP, attribution, EEA terms, privacy disclosure, permission revocation, provider failure, GPS freshness and local fallback. Application request limits are not a replacement for cloud quota enforcement.

## Arrival intelligence

v0.7.26 supports persistent transport identities, timestamped manual observations, advisory review and chauffeur briefs. Automated external flight/ferry monitoring, background polling, complete provider quota enforcement and licensed map activation remain outstanding. No approved flight/ferry API key names or live setup procedure are asserted. Review provider coverage, rights, freshness and costs before a future implementation. Arrival estimates must not automatically alter pickups or tariffs.

Official source-linked references: [Maps API key security](https://developers.google.com/maps/api-security-best-practices), [Places autocomplete](https://developers.google.com/maps/documentation/places/web-service/place-autocomplete), [Geocoding](https://developers.google.com/maps/documentation/geocoding/guides-v3/requests-geocoding), [Routes](https://developers.google.com/maps/documentation/routes/compute_route_directions).
