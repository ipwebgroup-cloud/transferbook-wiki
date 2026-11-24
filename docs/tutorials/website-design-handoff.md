# Transfer a website design safely

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## Training scenario
A designer prepares a website draft on a separate workstation for an authorized operator to review. Use approved imagery and synthetic content only.

## Steps
1. In Website Studio, select the correct site and review page routes, sections, menus and localized content.
2. Preview desktop, tablet, mobile and narrow mobile. Inspect booking controls, text wrapping, image placement and navigation.
3. Save locally and export a `.tbsite.json` blueprint. For the visual theme alone, export `.tbtheme.json`. Keep the original file as a backup.
4. Transfer the package through an approved method and import into the intended workspace. Inspect validation results; do not bypass checksum or schema errors.
5. Review the imported draft and its scope. Keep it unpublished until separately authorized.

## Expected result
A validated, portable draft. Browser-local storage is not cross-device synchronization; importing does not activate a domain or live booking.

See [Portable packages](/websites/portable-packages.html) and [Publication controls](/websites/publication-controls.html).
