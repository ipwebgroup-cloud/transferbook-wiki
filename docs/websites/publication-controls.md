# Review, approval and publication

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Purpose
Distinguish visual readiness from operational publication. This guide describes the Template Manager source workflow, not permission to publish a live site.

## Review lifecycle
1. Start with a validated draft assigned to an authorized channel.
2. Review its preview, content, localization, device layout and booking form behavior.
3. Where supported, use **Mark Preview → Submit for Review → Approve Draft**. Record the review note if appropriate.
4. Stop at approval unless publication is separately enabled and authorized. The reference source describes locked Publish and Connect Domain controls.

## What approval does not do
An approved design does not prove public domain routing, SSL, live reservation capture, payment processing or outbound messaging. These need their own acceptance checks. A restored earlier revision is a new draft, not an automatic public rollback.

## Troubleshooting
If publishing is locked, do not bypass the control. Confirm permissions and the approved deployment policy with the responsible administrator. Keep the draft and an export. See [Template Manager](./template-manager.md).

## Restricted hosting and site operations in v0.7.11
**Status: source-reviewed staging release; disabled by default.** This is a separate Website Studio workflow for a configured demonstration destination, not the general Template Manager publication lifecycle above. Availability requires the matching installed release, separately enabled capabilities, the configured company administrator and website-write permission. The standalone design kit does not provide hosting operations.

### Review and prepare a candidate
1. Inspect hosting status and HTTPS through the authorized hosting panel. A successful check does not authorize a write or establish booking availability.
2. Save the selected design. Use **Prepare Website Update** only when authorized and available. Preparation compiles the selected design privately, records its exact fingerprint, rendering warnings and file changes, and creates verified before/after revision snapshots. It does not change public files.
3. Review the candidate visually and inspect warnings. The static renderer supports a limited section and asset set; some editor details may be omitted or rejected. Verify navigation and layouts before requesting approval.

### Update or rollback
4. The owner independently reviews the exact revision and authorizes the specific operation. Confirm only the reviewed operation. Update and rollback require distinct, single-use approvals; a rollback is not an automatic consequence of editing a draft.
5. After an authorized operation, confirm the intended content and trusted HTTPS. If the result is unknown, do not retry or reuse approval. Escalate for inspection of revision fingerprints, transaction records and recovery snapshots before any further action.

No unrestricted production publishing, DNS/SSL changes, database migrations, live booking or payment activation are established by this release. If a control is missing or locked, keep the exported design and consult the authorized administrator. See [release notes](/release-notes/).
