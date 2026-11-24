# Responsive device previews

::: info Reference release — source-reviewed draft
TransferBook+ v0.7.9 source baseline. Availability depends on installed release, permissions and configuration. Live publication is not established by this guide.
:::

## Purpose
Inspect a draft across the four Website Studio viewport modes. No public website or live booking is created by this check.

| Mode | Reference width |
|---|---|
| Desktop | 100% of canvas |
| Tablet | 768 px |
| Mobile | 390 px |
| Narrow Mobile | 320 px |

## Review checklist
1. Open the selected page in Desktop and inspect the header, content and footer.
2. Switch through Tablet, Mobile and Narrow Mobile.
3. Check text wrapping, button visibility, navigation and horizontal overflow.
4. Check booking panels and image splits: mobile layouts should stack instead of retaining desktop columns.
5. Inspect any device-specific visibility rules. Ensure essential information is not hidden accidentally.

## Expected result and troubleshooting
The renderer adapts to the selected preview container. If a label is clipped, revise spacing, content or the block variant and recheck. A simulated viewport is not a substitute for testing on physical devices. The passenger email field in preview remains optional. See [pages and sections](./pages-and-sections.md).
