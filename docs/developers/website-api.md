# Website and theme API

::: info
Source-reviewed draft · v0.7.9 reference. Confirm availability and permissions against the approved target release.
:::

## Selected source routes

All paths are under `/api/v1/website` and require the indicated website permissions.

| Method and path | Permission |
|---|---|
| `GET /themes` | `website:read` |
| `POST /themes/import` | `website:write` |
| `PUT /themes/:themeKey` | `website:write` |
| `DELETE /themes/:themeKey` | `website:write` |
| `GET /channels/:channelId/resolved-theme` | `website:read` |
| `GET /revisions` | `website:read` |
| `POST /revisions` | `website:write` |
| `POST /revisions/:id/transition` | `website:write` |
| `POST /revisions/:id/publish` | `website:write` |
| `POST /revisions/:id/rollback` | `website:write` |

Import validates packages on the server and creates drafts. Version conflicts require refreshing the current revision rather than overwriting it. Compatibility mode does not provide full theme-library persistence. Publication requires both approval and server activation; source routes do not imply permission to publish. Rollback creates a draft revision rather than silently publishing it.

See [Template Manager](/websites/template-manager.html) and [Publication controls](/websites/publication-controls.html).
