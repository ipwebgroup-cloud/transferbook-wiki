# WP-WIKI-016 — Screenshot review checklist

Capture authentic application UI only. Do not generate or reconstruct screenshots.

1. Verify the installed version and release evidence of preview.transferbook.app independently of the newest GitHub tag. Never use plus.transferbook.app for this work.
2. Prefer a fresh isolated browser profile and approved synthetic demo-local data, if available on preview. If demo-local mode is disabled, stop; do not bypass access gates. Use authenticated staging only with an explicitly approved synthetic training tenant and read-only views.
3. Capture English UI at readable desktop resolution. Do not submit bookings, trigger assignments, payments, AI requests, messages, updates, or provider integrations for screenshot work.
4. Review the entire image locally: no real passenger or employee names, contact details, account information, session tokens, sensitive identifiers, customer data or confidential commercial information. Do not publish unreviewed captures. If masking is required, use irreversible pixel replacement and review the exported PNG. Synthetic data still requires review.
5. Store approved screenshots under docs/public/screenshots/<verified-version>/; record capture date, actual version, mode, screen, language and review status. Preserve prior screenshots with their original captions. Do not relabel old images as new captures.
6. Update English and Greek captions and alt text together, distinguishing installed staging evidence from source review and commercial availability. Build and review before guarded static publication.
7. Commit only approved images and documentation to a dedicated Wiki branch. No application repository, database or public demo changes.

First capture: Command Center overview (command-center.png). Next: booking form (no submission), dispatch calendar, chauffeur workspace, payments, CRM, Website Studio and update information (never initiate an update). Avoid AI conversations containing private data. 
