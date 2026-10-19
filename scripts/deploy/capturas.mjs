// Paso 5b. Capturas móvil + escritorio con Playwright y registro de errores JS.
// Uso: node scripts/deploy/capturas.mjs <URL_BASE> <carpeta_salida> [/ruta1 /ruta2 ...]
// Requiere: npm ci (playwright va en package.json) y `npx playwright install chromium` la primera vez.
import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
const [B, OUT, ...extra] = process.argv.slice(2);
if (!B || !OUT) { console.error("Uso: node capturas.mjs <URL_BASE> <carpeta> [rutas]"); process.exit(2); }
mkdirSync(OUT, { recursive: true });
const RUTAS = extra.length ? extra : ["/", "/coches/", "/multas/madrid/", "/fichas-tecnicas/"];
const b = await chromium.launch();
let errores = 0;
for (const [modo, opts] of [["movil", devices["iPhone 13"]], ["escritorio", { viewport: { width: 1280, height: 1000 } }]]) {
  const ctx = await b.newContext(opts); const pg = await ctx.newPage();
  pg.on("pageerror", (e) => { errores++; console.log("ERROR JS", modo, pg.url(), e.message.slice(0, 200)); });
  for (const r of RUTAS) {
    const resp = await pg.goto(B.replace(/\/$/, "") + r, { waitUntil: "networkidle", timeout: 60000 }).catch((e) => null);
    await pg.waitForTimeout(2000);
    const h1 = await pg.evaluate(() => document.querySelectorAll("h1").length);
    const rotas = await pg.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src));
    const name = (r.replace(/\//g, "_").replace(/^_|_$/g, "") || "home") + "-" + modo + ".png";
    await pg.screenshot({ path: `${OUT}/${name}`, fullPage: false });
    console.log(modo, r, "http", resp?.status(), "h1", h1, "imgs rotas", rotas.length, "->", name);
    if (!resp || resp.status() !== 200 || h1 !== 1 || rotas.length) errores++;
  }
  await ctx.close();
}
await b.close();
console.log(errores ? `FALLOS: ${errores}` : "CAPTURAS OK, 0 errores JS");
process.exit(errores ? 1 : 0);
