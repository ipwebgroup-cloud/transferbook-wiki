# Import and export design packages

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Choose the right package
- `.tbsite.json`: multi-page website blueprint, including its page structure and design system.
- `.tbtheme.json`: portable visual theme; the reference theme contract is v2.

## Safe transfer workflow
1. Export from the relevant studio. Keep the original exported file unchanged as a recovery copy.
2. Transfer the file to the authorized destination by an approved local method.
3. Import into Website Studio for a website draft or use Template Manager for a theme package. Website Studio can also upgrade a compatible theme into a multi-page draft.
4. Inspect validation results, preview pages and devices, then save the draft where supported.

## Expected result
Imports are treated as drafts. Checksums detect accidental corruption, not authenticity. They do not authorize publication or guarantee a trusted origin.

## Troubleshooting
Do not override integrity errors blindly. Re-export from the originating workspace and check compatibility. Website blueprints over 2 MB, unsafe routes, unapproved assets, raw scripts and incompatible schemas are rejected by the reference validator. See [publication controls](./publication-controls.md).

## Import choices in v0.7.10
**Status: source-reviewed staging release.** Website Studio distinguishes website blueprints, theme packages and full workspace JSON backups.

When importing a theme, choose whether to apply theme tokens to the current site or import a new multi-page site. Review the target before proceeding; applying tokens changes the intended site's design, whereas a new site is a separate draft. Validate the package, inspect the result in each relevant locale and device, then save. Keep a pre-change export.

Use a full workspace backup only for the appropriate recovery workflow, not as a substitute for a portable design handoff. Company and operating-mode boundaries remain in force.
