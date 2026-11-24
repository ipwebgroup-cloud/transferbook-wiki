# Driver and vehicle assignment

::: info Reference release
TransferBook+ v0.7.9 source baseline. This is a local review draft, not confirmation of production availability. Use only an authorized environment and verify the installed version and permissions.
:::

## Before you assign
Use an authorized dispatch role and an eligible reservation. Pending manual quotations must be resolved first.

## Procedure
1. Inspect the booking's pickup time, region, passengers and luggage.
2. Choose an available driver and a compatible vehicle using the available assignment controls.
3. Review conflict warnings: driver off duty, mismatched region, insufficient capacity or overlapping work including the configured dispatch buffer.
4. Resolve conflicts before saving. Only an explicitly authorized override may proceed where the application permits it; the reason and action should be auditable.
5. Verify the recorded assignment and reservation status.

## Troubleshooting
Check working hours, region, schedule and vehicle capacity if the assignment is refused. The fleet map may be simulated or unavailable without a live provider; never treat simulated coordinates as live location.

Related: [Dispatch schedule](/plus/dispatch-schedule).
