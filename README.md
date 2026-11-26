# TransferBook+ Wiki

Official bilingual documentation for the TransferBook+ transportation operating platform.

Includes operator manuals, website design guides, integration and developer references, tutorials, troubleshooting and release notes in English and Greek. Guides distinguish source-reviewed, staging and commercially available functionality. Screenshots illustrate staging workflows; visible sample prices are not commercial offers.

## Local build

With Node.js and npm installed:

```sh
npm ci
npm run docs:dev
npm run docs:build
```

The static output is in `docs/.vitepress/dist/`.

## Release synchronization

See [the release synchronization runbook](release-sync/README.md). Use `npm run release:validate` and `npm run release:test` before publication. Read-only discovery requires authorized GitHub CLI access to the private canonical application repository.

Copyright TransferBook+. All rights reserved. Public repository access does not grant an open-source license.
