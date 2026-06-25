// Static file server for the airpe marketing site (a frontend Vite build in
// ./dist), plus a small form-submission API. The site runs as a Catalyst-managed
// Node AppSail under the BWW project, so the form endpoint (server/forms.js) can
// write to the same datastore as the bww backend and share its global ticket series.
// Catalyst assigns the listen port at runtime via X_ZOHO_CATALYST_LISTEN_PORT.
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { handleFormSubmit } from './server/forms.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

const app = express();
app.use(express.json());

// Form submissions (Contact, Request/Complaint) — registered before the static
// + SPA fallback so the API route always wins.
app.post('/api/forms/submit', handleFormSubmit);

app.use(express.static(distPath));
// SPA fallback: send index.html for any non-asset route (react-router handles it).
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || process.env.PORT || 9000;
app.listen(PORT, () => console.log(`airpe website running on port ${PORT}`));
