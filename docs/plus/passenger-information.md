# Passenger information

::: info Reference release
TransferBook+ v0.7.9 source baseline. This is a local review draft, not confirmation of production availability. Use only an authorized environment and verify the installed version and permissions.
:::

## Required and optional fields
| Field | Requirement |
| --- | --- |
| Guest Full Name | Required |
| Phone | Required |
| Email (Optional) | Optional |
| Flight / Vessel Details | When relevant |
| Tablet Sign Text | When relevant |

## Phone-only booking
1. Enter the guest's real name and contact phone.
2. Leave email empty if it is not supplied. Never enter an invented email.
3. Add flight or ferry details if needed for the pickup. Review the greeting sign text where applicable.
4. Save through the normal [reservation workflow](/plus/create-reservation).

## Expected result and troubleshooting
Missing email alone does not prevent reservation creation. Correct invalid contact information rather than inventing it. Email delivery cannot be assumed for a booking without an email address. Handle passenger data only for authorized operational purposes.

## Illustrated passenger fields

[![Guest Full Name and Phone are required; Email (Optional) may remain empty.](/screenshots/v0.7.11/create-reservation.png)](/screenshots/v0.7.11/create-reservation.png)

*Select the screenshot to open it at its original size. Use your browser’s Back button to return.*

*Guest Full Name and Phone are required; Email (Optional) may remain empty.*

English UI, v0.7.11 staging capture; illustrative data.
