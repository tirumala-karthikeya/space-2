// forms.js — POST /api/forms/submit handler for the marketing-site forms (Contact, Request/
// Complaint, Early Access). Mirrors the bww support-ticket flow: allocate a global sequential
// "BWW-###" ticket, persist the submission, then best-effort email an acknowledgement to the
// user and a copy to the support team. Returns { status, ticket_id } to the frontend.
import { initContext, nextTicketId, insertRow } from './datastore.js';
import { sendMail, renderTicketEmail } from './email.js';

// We reuse bww's existing support-ticket table rather than a separate one, so all tickets share
// ONE table and ONE global "BWW-###" series. KYC rows carry kyc_*/name_mismatch categories;
// website rows carry brainwave_* categories — so the source is always distinguishable.
const SUBMISSIONS_TABLE = 'supportRequests';
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || process.env.MAIL_FROM || '';

// Allowed form types → server-side category (NEVER trusted from the body, so every ticket
// carries a reliable source for triage) and the user-facing ack wording.
const FORMS = {
  contact_form: {
    category: 'brainwave_contact',
    ackIntro: 'Thanks for getting in touch. Our team will review your message and get back to you shortly.',
  },
  complaint_form: {
    category: 'brainwave_complaint',
    ackIntro: 'Thanks for reaching out. Our team reviews every request and will follow up with clear next steps.',
  },
  early_access: {
    category: 'brainwave_early_access',
    ackIntro: "Thanks for your interest — you're on the early-access list. We'll notify you as soon as it's available.",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Pull the common fields out of each form's distinct shape into one normalized record.
function normalize(formType, data) {
  const d = data || {};
  if (formType === 'contact_form') {
    return {
      name: `${d.firstName || ''} ${d.lastName || ''}`.trim(),
      email: String(d.email || '').trim(),
      phone: String(d.mobile || '').trim(),
      purpose: String(d.purpose || '').trim(),
      message: String(d.address || '').trim(),
    };
  }
  if (formType === 'complaint_form') {
    return {
      name: String(d.userName || '').trim(),
      email: String(d.email || '').trim(),
      phone: String(d.phone || '').trim(),
      purpose: String(d.complaintPurpose || '').trim(),
      message: String(d.complaintDetails || '').trim(),
    };
  }
  // early_access
  return {
    name: String(d.name || '').trim(),
    email: String(d.email || '').trim(),
    phone: String(d.mobile || '').trim(),
    purpose: '',
    message: '',
  };
}

// Best-effort acknowledgement to the user — never throws (a mail failure must not fail the
// submission the user already made).
async function emailAck(to, ticketId, ackIntro) {
  if (!to) return;
  try {
    await sendMail(
      renderTicketEmail({
        to,
        subject: `Your BrainWave reference ${ticketId}`,
        heading: "We've received your request",
        intro: ackIntro,
        ticketId,
        note: `Please keep this reference for your records. We'll reply to ${to}.`,
      }),
    );
  } catch (err) {
    console.error('[forms] ack email failed:', err && err.message ? err.message : err);
  }
}

// Best-effort plain copy to the support team.
async function emailTeam(ticketId, formType, rec) {
  if (!SUPPORT_EMAIL) return;
  try {
    await sendMail({
      to: SUPPORT_EMAIL,
      subject: `Website ${formType} — ${ticketId} (${rec.email || 'no email'})`,
      text:
        `Ticket: ${ticketId}\nForm: ${formType}\nName: ${rec.name}\nEmail: ${rec.email}\n` +
        `Phone: ${rec.phone}\nPurpose: ${rec.purpose}\n\nMessage:\n${rec.message}`,
    });
  } catch (err) {
    console.error('[forms] team email failed:', err && err.message ? err.message : err);
  }
}

export async function handleFormSubmit(req, res) {
  try {
    const { formType, data } = req.body || {};
    const config = FORMS[formType];
    if (!config) {
      return res.status(400).json({ status: 'error', message: 'Unknown form type.' });
    }

    const rec = normalize(formType, data);
    if (!rec.name) {
      return res.status(400).json({ status: 'error', message: 'Name is required.' });
    }
    if (!EMAIL_RE.test(rec.email)) {
      return res.status(400).json({ status: 'error', message: 'A valid email is required.' });
    }

    const app = initContext(req);
    const ticketId = await nextTicketId(app);

    // Columns must all exist on supportRequests (Catalyst rejects unknown columns). We map
    // onto bww's existing schema: `type` = formType, `reason` = the form's purpose/category
    // dropdown, `message` = the free-text field. No user_id — these are anonymous public forms.
    await insertRow(app, SUBMISSIONS_TABLE, {
      type: formType,
      category: config.category,
      ticket_id: ticketId,
      name: rec.name,
      email: rec.email,
      phone: rec.phone,
      reason: rec.purpose,
      message: rec.message,
      status: 'open',
      created_at: new Date().toISOString(),
    });

    // Both best-effort; failures are logged inside, never thrown.
    await Promise.all([emailAck(rec.email, ticketId, config.ackIntro), emailTeam(ticketId, formType, rec)]);

    return res.json({ status: 'success', ticket_id: ticketId });
  } catch (err) {
    console.error('[forms] submit failed:', err && err.message ? err.message : err);
    return res.status(500).json({ status: 'error', message: 'Could not submit your request. Please try again.' });
  }
}
