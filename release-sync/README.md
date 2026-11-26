# Release synchronization (WP-WIKI-015)

The canonical application repository is private. Run these tools on Dell with Node.js 24 and the existing authorized GitHub CLI login. No cross-repository secret is configured. Do not paste credentials into the terminal transcript.

- `npm run release:test`: offline tests.
- `npm run release:validate`: offline bilingual inventory validation.
- `npm run release:check`: read-only discovery of new stable-semver tags and published release records, verifying new annotated tags through GitHub. Exit 0 means synchronized; 2 means review required; 1 means error. The baseline pins the 23 previously documented tag object IDs, not independent verification of every historical signature.
- For new releases, an editor with approved access reviews canonical release descriptions, prepares the bilingual JSON below (ascending versions), and verifies that the selected text is suitable for the public Wiki. A published non-draft, non-prerelease record and verified annotated tag are required to apply. Tag-only new versions remain blocked for manual review.
- `npm run release:apply -- C:\path\to\review.json`: rechecks canonical evidence, prepares the four local Markdown files and ledger. It never commits, pushes, changes application code, or deploys. Review `git diff`, run the tests, validate and build, then use a dedicated Wiki branch and the existing guarded publication process.

Review JSON format (illustrative only; not actual release evidence):

```json
[
  {
    "version": "v0.7.22",
    "tagSha": "REPLACE_WITH_VERIFIED_TAG_OBJECT_SHA",
    "commit": "REPLACE_WITH_VERIFIED_COMMIT_SHA",
    "date": "YYYY-MM-DD",
    "categories": [
      {"kind": "Improved", "en": "Reviewed English description.", "el": "Ελεγμένη ελληνική περιγραφή."},
      {"kind": "Availability", "en": "Reviewed deployment scope.", "el": "Ελεγμένο πεδίο εγκατάστασης."}
    ],
    "summary": {"en": "Reviewed customer summary.", "el": "Ελεγμένη σύνοψη πελάτη."}
  }
]
```

Allowed categories: Added, Changed, Improved, Fixed, Security, Deprecated, Removed, Database, Validation, Availability, Known limitations. Availability is mandatory. Review text is single-line and excludes raw HTML/Vue delimiters. No automatic translation or direct copying of private release descriptions. Do not assert deployment or live acceptance based on a signed tag or CI. Review files may contain private information; keep them outside the repository. Scheduling and any unattended authentication require separate setup and testing. Never use `npm audit fix --force` as part of this workflow.
