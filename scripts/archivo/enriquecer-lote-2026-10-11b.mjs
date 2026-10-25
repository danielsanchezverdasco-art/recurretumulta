#!/usr/bin/env node
// Tanda 6b (2026-10-11): corrige los pares que no emparejaron en la 6a
// (los anclas <a> en disco llevan DOBLE backslash <\\/a> y comillas escapadas \").
// Construcción programática de escapes: cero ambigüedad.
import fs from "node:fs";

const BS = String.fromCharCode(92); // "\"
const NL = BS + BS + "n";           // secuencia de salto en disco: \\n
const CLOSE = "<" + BS + BS + "/a>";      // cierre de enlace en disco: <\\/a>
const QE = BS + '"';                 // comilla escapada en disco: \"
// Convierte texto con saltos reales y </a> planos al formato del .ts
const E = (s) => s.split("\n").join(NL).split("</a>").join(CLOSE);

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
const GEO = `${ROOT}/src/lib/blog-posts-estudios-geo.ts`;

let fails = 0;
function apply(file, slug, pairs) {
  let t = fs.readFileSync(file, "utf8");
  const i0 = t.indexOf(`"slug": "${slug}"`);
  if (i0 < 0) { console.log(`SKIP slug no encontrado: ${slug}`); fails++; return; }
  const i1 = t.indexOf('"slug": "', i0 + 10);
  const end = i1 < 0 ? t.length : i1;
  let seg = t.slice(i0, end);
  for (const [oldS, newS] of pairs) {
    const n = seg.split(oldS).length - 1;
    if (n === 0) { console.log(`  ya aplicado (0): ${slug} :: ${oldS.slice(0, 60)}…`); continue; }
    if (n !== 1) { console.log(`  ⚠ ${n} ocurrencias: ${slug} :: ${oldS.slice(0, 60)}…`); fails++; continue; }
    seg = seg.replace(oldS, newS);
    console.log(`  OK: ${slug} :: ${oldS.slice(0, 60)}…`);
  }
  t = t.slice(0, i0) + seg + t.slice(end);
  fs.writeFileSync(file, t);
}

// ── 1. radares-que-mas-multan-espana-2024-mapa-datos ──────────────────────────
apply(GEO, "radares-que-mas-multan-espana-2024-mapa-datos", [
  [
    "<a href=https://recurretumulta.online/guias/radares>Guía completa para recurrir multas de radar" + CLOSE,
    "<a href=/guias/radares/>Guía completa para recurrir multas de radar" + CLOSE,
  ],
  [
    "<a href=https://recurretumulta.online/>Analiza tu multa de radar gratis con IA" + CLOSE,
    "<a href=/#analizador>Analiza tu multa de radar gratis con IA" + CLOSE,
  ],
  [
    "<a href=/#analizador>Analiza tu multa de radar gratis con IA" + CLOSE + NL + NL + "**Denuncias por comunidades autónomas (2024):**",
    E(`<a href=/#analizador>Analiza tu multa de radar gratis con IA</a>

## Cómo saber si uno de estos radares te ha multado

Si un cinemómetro te ha cazado, la notificación llega por **correo certificado** o a tu **Dirección Electrónica Vial (DEV)** si estás dado de alta. También puedes consultar tus sanciones en la **sede electrónica de la DGT** con Cl@ve o certificado digital: <a href=/blog/cuanto-tarda-en-llegar-una-multa-de-radar/>cuánto tarda en llegar una multa de radar</a>. Si la notificación nunca llega y el plazo se agota, la multa puede **prescribir**: <a href=/guias/prescripcion/>guía de prescripción de multas</a>.

**Denuncias por comunidades autónomas (2024):**`),
  ],
  [
    "el 40% se rechaza por defectos técnicos." + QE + NL + NL + "*Fuente de datos: informe anual de AEA elaborado con los datos de la <a href=https://www.dgt.es>DGT</a>.*",
    E(`el 40% se rechaza por defectos técnicos.

### ¿Me pueden multar dos radares seguidos en el mismo viaje?

Sí. Cada cinemómetro tramita su **propia denuncia**: si superas el límite en dos puntos de control distintos, son dos multas independientes con dos importes. <a href=/blog/radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas/>Tipos de radares de la DGT y cómo recurrirlos</a>.

*Fuente de datos: informe anual de AEA elaborado con los datos de la <a href=https://www.dgt.es>DGT</a>.*`),
  ],
]);

// ── 2. cuanto-cuesta-multa-espana-pagar-descuento-recurrir ────────────────────
apply(GEO, "cuanto-cuesta-multa-espana-pagar-descuento-recurrir", [
  [
    "<a href=https://recurretumulta.online/>Analiza tu multa gratis con IA" + CLOSE,
    "<a href=/#analizador>Analiza tu multa gratis con IA" + CLOSE,
  ],
  [
    "puede anularla por completo. <a href=/guias/vicios-forma/>Defectos de forma que anulan multas" + CLOSE + "." + QE,
    E(`puede anularla por completo. <a href=/guias/vicios-forma/>Defectos de forma que anulan multas</a>.

### ¿Se puede pagar una multa a plazos?

La DGT **no ofrece fraccionamiento**: la multa se paga de una vez, con o sin el descuento del pronto pago. Si la deuda llega a vía ejecutiva, puedes solicitar **aplazamiento o fraccionamiento** a la Agencia Tributaria, pero con intereses y recargos. <a href=/blog/pagar-multa-con-descuento-y-recurrir/>Cómo funciona el pronto pago</a>.`) + QE,
  ],
]);

// ── 3. zbe-espana-2026-ciudades-multan-cuanto-multa ────────────────────────────
apply(GEO, "zbe-espana-2026-ciudades-multan-cuanto-multa", [
  [
    "<a href=https://recurretumulta.online/guias/zbe>Guía completa de multas ZBE" + CLOSE,
    "<a href=/guias/zbe/>Guía completa de multas ZBE" + CLOSE,
  ],
  [
    "<a href=https://recurretumulta.online/>Analiza tu multa de ZBE gratis con IA" + CLOSE,
    "<a href=/#analizador>Analiza tu multa de ZBE gratis con IA" + CLOSE,
  ],
  [
    "son motivos habituales. <a href=/guias/zbe/>Guía completa de multas ZBE" + CLOSE + "." + QE,
    E(`son motivos habituales. <a href=/guias/zbe/>Guía completa de multas ZBE</a>.

### ¿Me multan si entro en la ZBE solo para aparcar en un parking?

Sí: **acceder ya cuenta** como circulación dentro de la zona, aunque solo vayas a un parking. Solo te libran las **excepciones** de cada ordenanza (residentes, personas con movilidad reducida, vehículos históricos o emergencias).`) + QE,
  ],
]);

console.log(fails === 0 ? "\nTANDA 6b OK" : `\n⚠ ${fails} incidencias`);
process.exit(fails === 0 ? 0 : 1);
