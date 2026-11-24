# Independent design workstation

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Purpose
Use the standalone Theme Studio kit to design and exchange packages without requiring access to operational data. This workflow is for the design workstation, not the documentation workstation.

## Prerequisites and workflow
1. Use an approved portable kit prepared from the matching application source. The reference guide documents `npm run export:theme-studio-kit` on the engineering workstation.
2. On the design workstation use the kit's `START_THEME_STUDIO.ps1` and open its loopback address `http://127.0.0.1:4310`. Follow the kit's own version-specific installation instructions.
3. Duplicate an existing style, adjust tokens, layout, localized text and approved assets, then inspect contrast and device previews.
4. Use **Save Local Draft** and export `.tbtheme.json`; for multi-page Website Studio work export `.tbsite.json` as applicable.
5. Transfer only the validated design package to the intended operator for review and import. Do not transfer credentials or customer data.

## Expected result and troubleshooting
The independent kit needs no application database or operator login. It does not deploy the product. If a package is incompatible, confirm the kit version with engineering and re-export; never bypass validation. See [portable packages](./portable-packages.md).
