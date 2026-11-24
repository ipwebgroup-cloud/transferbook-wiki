# Reservation lifecycle

::: info Reference release
TransferBook+ v0.7.9 source baseline. This is a local review draft, not confirmation of production availability. Use only an authorized environment and verify the installed version and permissions.
:::

## Status reference
| Status | Meaning |
| --- | --- |
| New | Initial record; may require quotation or review |
| Confirmed | Booking accepted for operations |
| Assigned | Driver/vehicle assignment recorded |
| In Transit | Journey in progress |
| Completed | Terminal completed journey |
| Cancelled | Terminal cancelled booking |

## Operator workflow
Open the correct reservation, review its current state and use only the permitted transition shown for your role. Confirm only when required pricing and acceptance conditions are met. Before cancellation, record a meaningful reason. After completion or cancellation, verify the final status rather than reopening the record.

## Expected result and troubleshooting
The system records state transitions and audit history. A quote-pending record cannot be confirmed or dispatched until valid tariff approval. Terminal records cannot be ordinarily edited. If a transition is refused, check its prerequisites; do not force a status change.

Related: [Manual quotations](/plus/manual-quotations), [Dispatch schedule](/plus/dispatch-schedule).
