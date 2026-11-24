# Template Manager and channel drafts

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Illustrated workspace

[![Website & Themes without a booking channel: the channel-based manager requires a company-owned booking channel. The independent Website Studio remains accessible. This is the prerequisite screen, not the full Template Manager editor.](/screenshots/v0.7.11/template-manager-prerequisite.png)](/screenshots/v0.7.11/template-manager-prerequisite.png)

*Select the screenshot to open it at its original size. Use your browser’s Back button to return.*

*Website & Themes without a booking channel: the channel-based manager requires a company-owned booking channel. The independent Website Studio remains accessible. This is the prerequisite screen, not the full Template Manager editor.*

Staging capture, TransferBook+ v0.7.11; English UI. Illustrative test data. This image does not establish production availability.

## Purpose and prerequisites
Manage visual themes for customer storefront and embedded booking widget previews. Use an authorized company and booking channel with the applicable website permissions.

## Review a theme
1. Open **Settings → Website & Themes** and select the Theme & Channel Manager.
2. Choose the intended company and booking channel, then import a validated `.tbtheme.json` package.
3. Inspect the **Full Storefront** and **Embed Widget** previews across device sizes and locales.
4. Save a channel draft where persistence is supported. Review the resulting revision before progressing.

## Persistence limits
The reference source includes a full theme-library persistence contract and a compatibility mode using channel revisions. Full library persistence depends on a separately approved schema change. The pinned release record does not establish that this change is active. In compatibility mode, library-only writes can be rejected rather than pretending to save.

## Troubleshooting
If persistence is refused, retain the exported package. Ask an authorized administrator to verify the installed persistence mode; do not repeat writes blindly. A fallback theme is not proof that the selected theme was applied. See [publication controls](./publication-controls.md).
