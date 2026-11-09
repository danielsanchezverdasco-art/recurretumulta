// Proyección de títulos finales tras el cambio de sufijo (SOLO LECTURA de dist).
// Simula la lógica nueva de use-seo.ts sin tocar dist/.
import { readdirSync, readFileSync } from "fs";

const OLD_SUF = " | RecurreTuMulta.online";
const NEW_SUF = " | RecurreTuMulta";

function newTitle(urlPath, oldTitle) {
  const noBrand =
    urlPath === "/multas" ||
    urlPath.startsWith("/multas/") ||
    urlPath.startsWith("/coches/") ||
    urlPath.startsWith("/motos/") ||
    urlPath.startsWith("/patinetes/");
  let t = oldTitle;
  if (noBrand && t.endsWith(OLD_SUF)) t = t.slice(0, -OLD_SUF.length);
  else if (t.endsWith(OLD_SUF)) t = t.slice(0, -OLD_SUF.length) + NEW_SUF;
  return t;
}

const files = [];
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = d + "/" + e.name;
    if (e.isDirectory()) walk(p);
    else if (e.name === "index.html" && !p.includes("/assets/")) files.push(p);
  }
})("dist");

let before = 0, after = 0;
const stillOver = [];
for (const f of files) {
  const h = readFileSync(f, "utf8");
  const m = h.match(/<title>([^<]*)<\/title>/);
  const t = m ? m[1] : "";
  let urlPath = f.replace(/^dist/, "").replace(/\/index\.html$/, "") || "/";
  if (t.length > 60) before++;
  const nt = newTitle(urlPath, t);
  if (nt.length > 60) { after++; if (stillOver.length < 60) stillOver.push([nt.length, urlPath, nt]); }
}
console.log("total:", files.length, "| >60 ANTES:", before, "| >60 DESPUÉS (proyección):", after);
console.log("--- siguen >60 (muestra) ---");
stillOver.sort((a, b) => b[0] - a[0]).slice(0, 40).forEach(([l, p, t]) => console.log(l, p, "|", t.slice(0, 90)));
