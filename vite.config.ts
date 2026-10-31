import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import analisisShards from "./scripts/vite/analisis-shards.ts";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), tailwindcss(), analisisShards()],
  resolve: {
    alias: [
      // 13/10/2026 (indexación): <Link>/<NavLink> con barra final (src/lib/router-barra.tsx).
      { find: /^react-router-dom$/, replacement: path.resolve(import.meta.dirname, "./src/lib/router-barra.tsx") },
      { find: "@/convex", replacement: path.resolve(import.meta.dirname, "./convex") },
      { find: "@", replacement: path.resolve(import.meta.dirname, "./src") },
    ],
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    // 05/10/2026 (rendimiento): sin el mapa __vite__mapDeps de Vite (1MB de
    // comas por los ~5000 imports dinámicos). Los chunks se cargan bajo
    // demanda con import() nativo; el preload agresivo no compensa.
    modulePreload: false,
  },
});
