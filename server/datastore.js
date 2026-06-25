// Catalyst Datastore access for the marketing-site form backend (ESM).
//
// This AppSail is deployed under the BWW Catalyst project (id 48856000000302001), so the SDK
// — initialized here in admin/headless scope (no Catalyst user session) — reads/writes the
// SAME datastore as the bww auth backend. That's deliberate: it lets us reuse bww's existing
// `TicketSequence` table so website tickets share ONE continuous, global "BWW-###" series with
// the app's support tickets. Logic mirrors bww/backend/functions/api/Models/datastore.catalyst.js.
import catalyst from 'zcatalyst-sdk-node';

const esc = (v) => String(v).replace(/'/g, "''");

// Initialize the SDK in admin scope from the incoming request, so the datastore is reachable
// without a logged-in Catalyst user (the marketing forms are public/anonymous).
export function initContext(req) {
  return catalyst.initialize(req, { scope: 'admin' });
}

// --- Sequential ticket numbering (shared with bww) ---
// Catalyst has no native auto-increment, so numbers are allocated with optimistic concurrency:
// read the current highest `seq`, then INSERT the next value into the `TicketSequence` table
// whose `seq` column carries a UNIQUE constraint. If a concurrent request (from this app OR the
// bww backend) grabbed the same number first, the insert fails the uniqueness check and we retry
// with a freshly read max. Correct under cross-app contention; never reuses a number.
const TABLE_TICKET_SEQ = 'TicketSequence';
export async function nextTicketNumber(app) {
  for (let attempt = 0; attempt < 25; attempt++) {
    const res = await app
      .zcql()
      .executeZCQLQuery(`SELECT seq FROM ${TABLE_TICKET_SEQ} ORDER BY seq DESC LIMIT 1`);
    const last = res.length ? Number(res[0][TABLE_TICKET_SEQ].seq) : 0;
    const next = (Number.isFinite(last) ? last : 0) + 1;
    try {
      await app.datastore().table(TABLE_TICKET_SEQ).insertRow({ seq: next });
      return next;
    } catch (err) {
      // Almost certainly a UNIQUE violation: another request claimed `next` first. Re-read the
      // max and try again. Any other error resurfaces once attempts run out.
      continue;
    }
  }
  throw new Error('Could not allocate a ticket number after multiple attempts');
}

// Human-facing reference: continuous, zero-padded — "BWW-001", … "BWW-999", "BWW-1000", and up.
const TICKET_PREFIX = 'BWW-';
export async function nextTicketId(app) {
  const n = await nextTicketNumber(app);
  return `${TICKET_PREFIX}${String(n).padStart(3, '0')}`;
}

export async function insertRow(app, tableName, data) {
  return app.datastore().table(tableName).insertRow(data);
}

export { esc };
