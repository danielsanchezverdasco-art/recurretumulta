// Conteo FINAL de títulos >60 simulando la lógica nueva de use-seo.ts desde FUENTE.
// Antes: 2674 (medido en dist/ por el despliegue). Después: simulación.
import { readdirSync, readFileSync } from "fs";

const NEW_SUF = " | RecurreTuMulta";
let over = 0, total = 0;
const overList = [];

// 1) Blog: /blog/{slug} -> title + sufijo (salvo que incluya marca)
const blogFiles = readdirSync("src/lib").filter(f => /^blog-posts-.*\.ts$/.test(f) && !f.includes("generated"));
for (const f of blogFiles) {
  const t = readFileSync("src/lib/" + f, "utf8");
  for (const m of t.matchAll(/"slug": "([^"]+)"[\s\S]{0,400}?"title": "((?:[^"\\]|\\.)*)"/g)) {
    const title = m[2];
    const final = title.includes("RecurreTuMulta") ? title : title + NEW_SUF;
    total++;
    if (final.length > 60) { over++; if (overList.length < 25) overList.push([final.length, "/blog/" + m[1], final]); }
  }
}
// 2) Fichas motos/patinetes: `${nombre}: ficha técnica, precio y autonomía 2026`, sin sufijo
for (const kind of ["motos", "patinetes"]) {
  const files = readdirSync("src/lib").filter(f => new RegExp(`^comparador-${kind}.*\\.ts$`).test(f) && !f.includes("generated"));
  for (const f of files) {
    const t = readFileSync("src/lib/" + f, "utf8");
    for (const m of t.matchAll(/"nombre": "((?:[^"\\]|\\.)*)"/g)) {
      const final = `${m[1]}: ficha técnica, precio y autonomía 2026`;
      total++;
      if (final.length > 60) { over++; overList.push([final.length, `/${kind}/`, final]); }
    }
  }
}
console.log(`páginas analizadas (blog+fichas): ${total} | títulos finales >60 DESPUÉS: ${over}`);
console.log("ANTES (dist medido): 2674");
overList.sort((a,b)=>b[0]-a[0]).forEach(([l,p,t]) => console.log(l, p, "|", t.slice(0,80)));
