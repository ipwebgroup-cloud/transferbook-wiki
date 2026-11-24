# Design system, languages and SEO

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Purpose
Manage a website's visual identity independently from page content. Use approved assets and an authorized draft.

## Design and content
1. In Design, review palette, typography, spacing, corner radii and button treatment.
2. Select approved local imagery. Avoid arbitrary HTML, scripts or external asset URLs in packages.
3. Use the block inspector to edit plain-text localized content. The platform supports English, Greek, Italian, French, German and Spanish (`en`, `el`, `it`, `fr`, `de`, `es`).
4. In Page & SEO, review localized page metadata. Confirm that it accurately describes the page without unsupported business claims.
5. Check contrast diagnostics and inspect text, links and buttons in each preview. Normal text should meet at least 4.5:1 contrast for WCAG AA unless an applicable exception applies.

## Expected result
The design system can be swapped independently of the page tree and localized content. A metadata or contrast check does not guarantee search indexing or full accessibility compliance.

## Troubleshooting
If an asset or locale is rejected, use supported formats and approved registry items. See [portable packages](./portable-packages.md).

## Language coverage in v0.7.10
**Status: source-reviewed staging release.** The inspector's **6 Lang** coverage audit reports translated, missing and fallback fields by locale. Coverage is not a translation quality certificate.

1. Inspect coverage for each of the six supported locales.
2. Select a locale and use the English reference hints to review its text. Where offered, fill missing values from English without replacing existing translations.
3. Translate any copied English text and review the wording manually. Check page metadata, section text, buttons, navigation and mobile drawer in the selected locale.
4. Save and export the reviewed draft. A missing translation or fallback must not be advertised as completed localization merely because a field displays text.
