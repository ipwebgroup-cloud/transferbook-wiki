# AI, email & messaging API setup

Source-reviewed v0.7.26. The following identifiers occur in server adapter code. They are not a complete activation contract or confirmation of real delivery.

| Service | Server-side configuration identifiers |
| --- | --- |
| Gemini | `GEMINI_API_KEY` |
| Resend | `RESEND_API_KEY`, `RESEND_FROM` or `SMTP_FROM` |
| SendGrid | `SENDGRID_API_KEY`, `SMTP_FROM` |
| HTTP email relay | `SMTP_HTTP_RELAY_URL`, optional `SMTP_PASS`, `SMTP_HOST`, sender configuration |
| Twilio SMS | `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` or `TWILIO_PHONE_NUMBER` |
| WhatsApp delivery | `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_ACCESS_TOKEN` |
| Meta inbound webhook | `META_WEBHOOK_VERIFY_TOKEN`, `META_APP_SECRET` |

## Setup and acceptance

1. Obtain the AI key from Google AI Studio or an approved Gemini project; review permitted model use, privacy and spending. Keep it server-only. Test synthetic conversations and human takeover; do not send unnecessary passenger contact data or permit unauthorized actions.
2. For email use one approved provider and verify sender/domain, delivery and bounce handling. Configure the sender address explicitly. A bare SMTP host is not native SMTP delivery in this adapter; an approved HTTP relay is required for the relay path.
3. For SMS obtain an approved Twilio sender and account credentials. Test recipient consent, opt-out and delivery failures. For WhatsApp use an approved Meta Business account, sender phone ID and access token, with approved message templates as applicable.
4. For inbound Meta events the source mounts GET verification and signed POST at `/api/v1/webhooks/messaging/:channel` (channel: whatsapp, meta_messenger or instagram). Register only after the actual public callback is approved and accessible. Verify HMAC signature over raw request body, account-to-tenant mapping, accepted event envelope and duplicate protection. Do not disable signature checks.
5. Persistent delivery history and retries exist, but real provider acceptance is separate. Confirm that opt-out is respected, retries do not duplicate deliveries, and failures never appear as sent. No automatic public intake or provider delivery is authorized by this guide.

Catalog credential labels may differ from actual adapter variables; use installed runtime code and approved deployment instructions, not conceptual names from the integration catalog. Do not use unofficial WhatsApp Web automation.
