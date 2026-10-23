// Cuenta los arrays de datos reales del repo (coches/motos/patinetes) para
// refrescar los contadores de src/content/seo/titulos.csv.
// Uso: node scripts/contar-datos-seo.mjs > /tmp/conteo-seo.json
// Requiere esbuild resoluble (node_modules del repo).
import { createRequire } from "node:module";
import { writeFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const esbuild = require("esbuild");
const dir = new URL(".", import.meta.url).pathname;
const out = esbuild.buildSync({
  entryPoints: [dir + "conteo-seo-entry.mts"],
  bundle: true,
  platform: "node",
  format: "cjs",
  write: false,
  logLevel: "silent",
}).outputFiles[0].text;
writeFileSync("/tmp/conteo-seo-bundle.cjs", out);
const { execSync } = require("node:child_process");
process.stdout.write(execSync("node /tmp/conteo-seo-bundle.cjs", { encoding: "utf8" }));
