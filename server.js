// Static file server for the Shriv marketing site (a frontend Vite build in
// ./dist). This contains NO backend/API logic — it only serves the built static
// assets with an SPA fallback, so the site can run as a Catalyst-managed Node
// AppSail instead of a Docker/nginx image.
// Catalyst assigns the listen port at runtime via X_ZOHO_CATALYST_LISTEN_PORT.
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');

const app = express();
app.use(express.static(distPath));
// SPA fallback: send index.html for any non-asset route (react-router handles it).
app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Shriv website running on port ${PORT}`));
