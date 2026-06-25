import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // In dev, Vite serves the frontend; proxy the form API to the Node server (npm start) so
  // POST /api/forms/submit works locally. Run `npm start` alongside `npm run dev`.
  server: {
    proxy: {
      "/api": "http://localhost:9000",
    },
  },
});
