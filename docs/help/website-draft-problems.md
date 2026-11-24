# Missing drafts and package errors

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## My website draft disappeared
Verify the browser, profile, company and operating mode used when saving. Local drafts are scoped; previous unscoped drafts are not automatically transferred. Do not clear browser storage while recovery is pending.

## The package cannot be imported
Check whether you selected a compatible `.tbsite.json` or `.tbtheme.json`. A checksum mismatch, incompatible schema or unsafe content can block import. Re-export from the original workspace instead of editing the checksum manually.

## Why is the Publish control locked?
A valid draft or approval is not sufficient proof of public publishing authorization. Check the configured publication gate and required permissions with an administrator. A template library may also have limited persistence in compatibility mode.

## Recovery checklist
Keep the original export, note the installed release, record the validation error without confidential content, and recover from the original browser context if available. Do not copy storage keys across companies.

See [Local drafts and recovery](/websites/draft-storage.html) and [Template Manager](/websites/template-manager.html).

## Recovery and hosting in newer staging releases
In v0.7.10, inspect the autosave recovery banner and use a full workspace backup where available. Restore in the correct company and operating mode, then explicitly save and verify. See [Local drafts and recovery](/websites/draft-storage.html).

In v0.7.11, a missing hosting panel or locked update control may reflect the default-off restricted demo capability, company scope or permissions. A prepared revision does not mean the public site changed. If an authorized update or rollback has an uncertain outcome, do not retry: ask the owner to inspect exact revision fingerprints and recovery records. See [Publication controls](/websites/publication-controls.html).
