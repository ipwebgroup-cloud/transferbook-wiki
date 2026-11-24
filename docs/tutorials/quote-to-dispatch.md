# From manual quote to dispatch

::: info
Source-reviewed training draft · TransferBook+ v0.7.9. Verify installed release, permissions and configuration. Use authorized synthetic training data; no live activation is implied.
:::

## Training scenario
An authorized operator receives a journey request for which no configured tariff exists. Train with a synthetic request; an authorized company administrator must approve the tariff.

## Steps
1. Select catalogue locations or explicitly confirm a typed location with **Use custom address**. Review the quotation result.
2. If the form permits a pending quotation, create the request and find its reference. Check for **Quote Pending** rather than treating the zero placeholder as a final price.
3. As company administrator, open **Manual Quotation Required** and enter an authorized positive EUR amount and optional note. Approval leaves the reservation New.
4. Review the accepted tariff and follow the normal confirmation workflow. Only then attempt dispatch.
5. Inspect the schedule and capacity, select compatible resources and verify the saved assignment.

## Stop conditions
Do not confirm or dispatch while a quote is pending. Do not use a fabricated price or override missing authorization.

See [Manual quotations](/plus/manual-quotations.html) and [Assignments](/plus/assignments.html).
