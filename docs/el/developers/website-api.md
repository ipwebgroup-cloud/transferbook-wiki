# API ιστοσελίδων και προτύπων

::: info
Προσχέδιο βάσει πηγαίου κώδικα · v0.7.9. Επιβεβαιώστε διαθεσιμότητα και δικαιώματα στην εγκεκριμένη έκδοση.
:::

## Επιλεγμένες διαδρομές κώδικα

Όλες οι διαδρομές βρίσκονται κάτω από `/api/v1/website` και απαιτούν τα αντίστοιχα δικαιώματα ιστοσελίδας.

| Μέθοδος και διαδρομή | Δικαίωμα |
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

Η εισαγωγή επικυρώνει πακέτα στον διακομιστή και δημιουργεί προσχέδια. Οι συγκρούσεις έκδοσης απαιτούν ανανέωση της τρέχουσας αναθεώρησης και όχι αντικατάστασή της. Η λειτουργία συμβατότητας δεν παρέχει πλήρη αποθήκευση βιβλιοθήκης προτύπων. Η δημοσίευση απαιτεί έγκριση και ενεργοποίηση διακομιστή. Η παρουσία διαδρομών δεν συνεπάγεται άδεια δημοσίευσης. Η επαναφορά δημιουργεί προσχέδιο και όχι σιωπηρή δημοσίευση.

Δείτε [Template Manager](/el/websites/template-manager.html) και [Έλεγχοι δημοσίευσης](/el/websites/publication-controls.html).
