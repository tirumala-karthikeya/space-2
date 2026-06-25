// email.js — transactional email via ZeptoMail's HTTP API (official `zeptomail` SDK), ESM port
// of bww/backend/Services/emailService.js. Uses the HTTP API rather than SMTP (SMTP auth was
// returning 535). The API token is the same key as the SMTP password, prefixed "Zoho-enczapikey ".
import { SendMailClient } from 'zeptomail';

const API_URL = process.env.ZEPTO_API_URL || 'https://api.zeptomail.com/v1.1/email';
// Accept a full token (ZEPTO_TOKEN = "Zoho-enczapikey <key>") or build it from the raw key.
const TOKEN =
  process.env.ZEPTO_TOKEN ||
  (process.env.ZEPTO_PASS ? `Zoho-enczapikey ${process.env.ZEPTO_PASS}` : '');

// Parse MAIL_FROM ("Name <addr>" or "addr") into { address, name }.
function parseFrom(raw) {
  const s = raw || 'BrainWave <noreply@brainwaveworld.com>';
  const m = /<([^>]+)>/.exec(s);
  if (m) {
    const name = s.slice(0, s.indexOf('<')).trim().replace(/^["']|["']$/g, '');
    return { address: m[1].trim(), name: name || 'BrainWave' };
  }
  return { address: s.trim(), name: 'BrainWave' };
}

const FROM = parseFrom(process.env.MAIL_FROM);

let client = null;
function getClient() {
  if (!TOKEN) {
    const e = new Error('ZeptoMail not configured (ZEPTO_TOKEN or ZEPTO_PASS missing)');
    e.status = 500;
    throw e;
  }
  if (!client) client = new SendMailClient({ url: API_URL, token: TOKEN });
  return client;
}

export async function sendMail({ to, subject, html, text }) {
  return getClient().sendMail({
    from: { address: FROM.address, name: FROM.name },
    to: [{ email_address: { address: to } }],
    subject,
    htmlbody: html,
    ...(text ? { textbody: text } : {}),
  });
}

// Brand logo for transactional emails — absolute, publicly reachable URL. Override via MAIL_LOGO_URL.
const MAIL_LOGO_URL =
  process.env.MAIL_LOGO_URL ||
  'https://brainwave-kyc-integrated-images-development.zohostratus.com/brainwave-logo.png';

// Branded "we received your request" acknowledgement, sent to the USER. Shows a ticket reference.
// Returns { to, subject, html, text } ready for sendMail(). Mirrors bww's renderTicketEmail.
export function renderTicketEmail({ to, subject, heading, intro, ticketId, note }) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:30px 0;">
  <tr><td align="center">
    <table role="presentation" width="440" cellspacing="0" cellpadding="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;">
      <tr><td style="padding-bottom:24px;">
        <img src="${MAIL_LOGO_URL}" alt="BrainWave World Inc." width="200" style="display:block;border:0;outline:none;text-decoration:none;height:auto;max-width:200px;" />
      </td></tr>
      <tr><td style="font-size:22px;font-weight:700;color:#111827;padding-bottom:10px;">${heading}</td></tr>
      <tr><td style="font-size:15px;line-height:24px;color:#374151;padding-bottom:20px;">${intro}</td></tr>
      <tr><td align="center" style="padding-bottom:18px;">
        <div style="display:inline-block;background:#eef2ff;border-radius:8px;padding:14px 28px;font-size:20px;font-weight:700;color:#1e3a8a;letter-spacing:3px;">${ticketId}</div>
      </td></tr>
      ${note ? `<tr><td style="font-size:14px;line-height:24px;color:#6b7280;padding-bottom:22px;">${note}</td></tr>` : ''}
      <tr><td style="font-size:14px;line-height:24px;color:#6b7280;">Thanks,<br>The BrainWave World Team</td></tr>
    </table>
    <p style="color:#9ca3af;font-size:12px;margin-top:16px;">© BrainWave World Inc.</p>
  </td></tr>
</table>
</body>
</html>`;
  const text = `${intro}\n\nTicket reference: ${ticketId}\n${note || ''}\n\nThanks,\nThe BrainWave World Team`;
  return { to, subject, html, text };
}

export { MAIL_LOGO_URL };
