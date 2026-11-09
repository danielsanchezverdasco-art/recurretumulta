#!/usr/bin/env node
// Tanda 6c (2026-10-11): las 2 inserciones restantes con anclas de bytes exactos.
import fs from "node:fs";

const BS = String.fromCharCode(92);
const NL2 = BS + BS + "n";   // \\n en disco (convención dominante)
const NL1 = BS + "n";        // \n en disco (zona fuente del art. radares)
const CLOSE = "<" + BS + BS + "/a>";
const QE = BS + '"';
const E = (s) => s.split("\n").join(NL2).split("</a>").join(CLOSE);

const GEO = "/home/hatch/workspace/recurretumulta-v2/src/lib/blog-posts-estudios-geo.ts";
let fails = 0;

function apply(slug, pairs) {
  let t = fs.readFileSync(GEO, "utf8");
  const i0 = t.indexOf(`"slug": "${slug}"`);
  if (i0 < 0) { console.log(`SKIP ${slug}`); fails++; return; }
  const i1 = t.indexOf('"slug": "', i0 + 10);
  const end = i1 < 0 ? t.length : i1;
  let seg = t.slice(i0, end);
  for (const [oldS, newS] of pairs) {
    const n = seg.split(oldS).length - 1;
    if (n === 0) { console.log(`  ya aplicado (0): ${slug} :: ${oldS.slice(0, 50)}…`); continue; }
    if (n !== 1) { console.log(`  ⚠ ${n} ocurrencias: ${slug}`); fails++; continue; }
    seg = seg.replace(oldS, newS);
    console.log(`  OK: ${slug} :: ${oldS.slice(0, 50)}…`);
  }
  fs.writeFileSync(GEO, t.slice(0, i0) + seg + t.slice(end));
}

apply("radares-que-mas-multan-espana-2024-mapa-datos", [
  [
    "antes de pagar: detectamos si la medición o el procedimiento tienen defectos." + NL2 + NL2 + "**Denuncias por comunidades autónomas (2024):**",
    E(`antes de pagar: detectamos si la medición o el procedimiento tienen defectos.

## Cómo saber si uno de estos radares te ha multado

Si un cinemómetro te ha cazado, la notificación llega por **correo certificado** o a tu **Dirección Electrónica Vial (DEV)** si estás dado de alta. También puedes consultar tus sanciones en la **sede electrónica de la DGT** con Cl@ve o certificado digital: <a href=/blog/cuanto-tarda-en-llegar-una-multa-de-radar/>cuánto tarda en llegar una multa de radar</a>. Si la notificación nunca llega y el plazo se agota, la multa puede **prescribir**: <a href=/guias/prescripcion/>guía de prescripción de multas</a>.

**Denuncias por comunidades autónomas (2024):**`),
  ],
  [
    "el 40% se rechaza por defectos técnicos." + QE + NL1 + NL1 + "*Fuente de datos: informe anual de AEA elaborado con los datos de la <a href=https://www.dgt.es>DGT</a>.*",
    E(`el 40% se rechaza por defectos técnicos.

### ¿Me pueden multar dos radares seguidos en el mismo viaje?

Sí. Cada cinemómetro tramita su **propia denuncia**: si superas el límite en dos puntos de control distintos, son dos multas independientes con dos importes. <a href=/blog/radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas/>Tipos de radares de la DGT y cómo recurrirlos</a>.

*Fuente de datos: informe anual de AEA elaborado con los datos de la <a href=https://www.dgt.es>DGT</a>.*`),
  ],
]);

console.log(fails === 0 ? "\nTANDA 6c OK" : `\n⚠ ${fails} incidencias`);
process.exit(fails === 0 ? 0 : 1);
