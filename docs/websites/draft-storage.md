# Local drafts and recovery

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Purpose
Preserve work before switching company, browser, device or operating mode. Website Studio in this source baseline stores drafts locally, scoped to company and operating mode.

## Save and recover
1. Confirm the correct company context and selected website.
2. Save your draft using the available studio controls and verify the save outcome.
3. Export a portable website package and keep a separate backup.
4. Use History to inspect earlier local snapshots and restore a suitable revision when necessary.
5. Before changing browser or mode, export first. Import into the intended authorized workspace and validate again.

## Expected result
The saved draft remains local to its browser and scope. Local storage is not encryption, server-side backup or cross-device synchronization.

## Troubleshooting
If storage is unavailable, treat saving as unsuccessful and export where possible before closing the page. Earlier unscoped drafts are not automatically migrated across companies. Recover them from their original context using export/import, not by copying storage keys. See [portable packages](./portable-packages.md).

## Autosave and workspace backup in v0.7.10
**Status: source-reviewed staging release.** Autosave and recovery are isolated by company and operating mode, as are saved drafts. Autosave does not replace the main saved workspace.

1. If the recovery banner offers an unsaved draft, check the site and recovery timestamp. Restore only the intended draft, then use Save Draft and verify the outcome.
2. In History, inspect storage usage and validation status. Export a full workspace backup (`.json`) for independent safekeeping, in addition to portable site exports.
3. To restore a workspace backup, use the compatible import workflow in its authorized scope. Review the recovered sites before saving. Cross-company backup restrictions must not be bypassed.
4. If storage quota or corrupted local data causes a warning, preserve any available export before cleanup. Revision history may be pruned when quota is exceeded; do not assume all earlier revisions survive.

Browser recovery is not server backup or cross-device synchronization.

## Changes described in v0.7.12–v0.7.14

v0.7.12 adds authenticated preparation of larger design requests; v0.7.13 integrates Website Studio and Template Manager; v0.7.14 describes server-side draft and revision improvements. These release records supplement the historical local-storage workflows above. Confirm the actual storage mode, save result, revision availability, company scope and recovery method before relying on server persistence. Neither successful draft preparation nor a saved revision authorizes public publication. Keep a portable backup as appropriate.

See [Release Notes](/release-notes/).
