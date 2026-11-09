#!/usr/bin/env node
// Tanda 6 (2026-10-11): enriquecimiento continuo.
// - 3 estudios-geo (núcleo multas): fallos BLOQUEANTES del validador "sin enlaces
//   internos" (URLs absolutas -> relativas + cross-links + FAQs nuevas + secciones).
// - 3 motos nuevos-m4: CTA -> /#analizador, cross-links /blog/, 1 FAQ útil.
// Idempotente: cada reemplazo exige 1 ocurrencia exacta (o 0 si ya se aplicó).
import fs from "node:fs";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";
// Convierte saltos reales del script al formato \\n literal de los .ts
const E = (s) => s.replaceAll("\n", "\\\\n");

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

const GEO = `${ROOT}/src/lib/blog-posts-estudios-geo.ts`;
const M4 = `${ROOT}/src/lib/blog-posts-nuevos-m4.ts`;

// ── 1. radares-que-mas-multan-espana-2024-mapa-datos ──────────────────────────
apply(GEO, "radares-que-mas-multan-espana-2024-mapa-datos", [
  [
    "<a href=https://recurretumulta.online/guias/radares>Guía completa para recurrir multas de radar<\\/a>",
    "<a href=/guias/radares/>Guía completa para recurrir multas de radar<\\/a>",
  ],
  [
    "<a href=https://recurretumulta.online/>Analiza tu multa de radar gratis con IA<\\/a>",
    "<a href=/#analizador>Analiza tu multa de radar gratis con IA<\\/a>",
  ],
  [
    "Si tu velocidad estaba en el límite del tramo, la medición puede ser recurrible.",
    "Si tu velocidad estaba en el límite del tramo, la medición puede ser recurrible. <a href=/blog/radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas/>Tipos de radares de la DGT y cómo recurrir cada uno</a>.",
  ],
  [
    "<a href=/#analizador>Analiza tu multa de radar gratis con IA<\\/a>\\\\n\\\\n**Denuncias por comunidades autónomas (2024):**",
    E(`<a href=/#analizador>Analiza tu multa de radar gratis con IA<\\/a>

## Cómo saber si uno de estos radares te ha multado

Si un cinemómetro te ha cazado, la notificación llega por **correo certificado** o a tu **Dirección Electrónica Vial (DEV)** si estás dado de alta. También puedes consultar tus sanciones en la **sede electrónica de la DGT** con Cl@ve o certificado digital: <a href=/blog/cuanto-tarda-en-llegar-una-multa-de-radar/>cuánto tarda en llegar una multa de radar</a>. Si la notificación nunca llega y el plazo se agota, la multa puede **prescribir**: <a href=/guias/prescripcion/>guía de prescripción de multas</a>.

**Denuncias por comunidades autónomas (2024):**`),
  ],
  [
    "el 40% se rechaza por defectos técnicos.\"",
    E(`el 40% se rechaza por defectos técnicos.

### ¿Me pueden multar dos radares seguidos en el mismo viaje?

Sí. Cada cinemómetro tramita su **propia denuncia**: si superas el límite en dos puntos de control distintos, son dos multas independientes con dos importes. <a href=/blog/radares-velolaser-dgt-2026-que-son-donde-los-colocan-como-recurrir-multas/>Tipos de radares de la DGT y cómo recurrirlos</a>.")`),
  ],
  ['"readTime": 8,', '"readTime": 9,'],
]);

// ── 2. cuanto-cuesta-multa-espana-pagar-descuento-recurrir ────────────────────
apply(GEO, "cuanto-cuesta-multa-espana-pagar-descuento-recurrir", [
  [
    "<a href=https://recurretumulta.online/>Analiza tu multa gratis con IA<\\/a>",
    "<a href=/#analizador>Analiza tu multa gratis con IA<\\/a>",
  ],
  [
    "| Resultado posible | Multa reducida a la mitad | Anulación total o confirmación |\\\\n\\\\n## Las cuentas claras: 5 multas habituales",
    E(`| Resultado posible | Multa reducida a la mitad | Anulación total o confirmación |

Todo el detalle del descuento en <a href=/blog/pagar-multa-con-descuento-y-recurrir/>cómo pagar una multa con descuento (y qué pasa si quieres recurrir después)</a>.

## Las cuentas claras: 5 multas habituales`),
  ],
  [
    "Una multa de 200 € se convierte en 240 € más gastos. Nunca es la opción más barata.",
    "Una multa de 200 € se convierte en 240 € más gastos. Nunca es la opción más barata. Puedes comprobar el estado de cualquier sanción en el <a href=/multas/>buscador de multas por provincia</a>.",
  ],
  [
    "puede anularla por completo. <a href=/guias/vicios-forma/>Defectos de forma que anulan multas<\\/a>.\"",
    E(`puede anularla por completo. <a href=/guias/vicios-forma/>Defectos de forma que anulan multas</a>.

### ¿Se puede pagar una multa a plazos?

La DGT **no ofrece fraccionamiento**: la multa se paga de una vez, con o sin el descuento del pronto pago. Si la deuda llega a vía ejecutiva, puedes solicitar **aplazamiento o fraccionamiento** a la Agencia Tributaria, pero con intereses y recargos. <a href=/blog/pagar-multa-con-descuento-y-recurrir/>Cómo funciona el pronto pago</a>.")`),
  ],
  ['"readTime": 7,', '"readTime": 8,'],
]);

// ── 3. zbe-espana-2026-ciudades-multan-cuanto-multa ────────────────────────────
apply(GEO, "zbe-espana-2026-ciudades-multan-cuanto-multa", [
  [
    "<a href=https://recurretumulta.online/guias/zbe>Guía completa de multas ZBE<\\/a>",
    "<a href=/guias/zbe/>Guía completa de multas ZBE<\\/a>",
  ],
  [
    "<a href=https://recurretumulta.online/>Analiza tu multa de ZBE gratis con IA<\\/a>",
    "<a href=/#analizador>Analiza tu multa de ZBE gratis con IA<\\/a>",
  ],
  [
    "| Plazo de recurso | 20 días naturales ante el ayuntamiento |\\\\n\\\\n## Madrid y Barcelona: las dos ZBE más estrictas",
    E(`| Plazo de recurso | 20 días naturales ante el ayuntamiento |

El importe y el descuento son los mismos que en <a href=/blog/cuanto-cuesta-multa-espana-pagar-descuento-recurrir/>cualquier multa grave de 200 €</a>.

## Madrid y Barcelona: las dos ZBE más estrictas`),
  ],
  [
    "| **Cero** | Eléctricos | Sin restricciones |\\\\n\\\\n<video src=/media/guia-zbe.mp4",
    E(`| **Cero** | Eléctricos | Sin restricciones |

¿No sabes qué etiqueta lleva tu coche? <a href=/calculadora-etiqueta-dgt>Calcula tu etiqueta DGT</a> en 30 segundos.

<video src=/media/guia-zbe.mp4`),
  ],
  [
    "son motivos habituales. <a href=/guias/zbe/>Guía completa de multas ZBE<\\/a>.\"",
    E(`son motivos habituales. <a href=/guias/zbe/>Guía completa de multas ZBE</a>.

### ¿Me multan si entro en la ZBE solo para aparcar en un parking?

Sí: **acceder ya cuenta** como circulación dentro de la zona, aunque solo vayas a un parking. Solo te libran las **excepciones** de cada ordenanza (residentes, personas con movilidad reducida, vehículos históricos o emergencias).")`),
  ],
  ['"readTime": 8,', '"readTime": 9,'],
]);

// ── 4. royal-enfield-meteor-350-2026-precio ────────────────────────────────────
apply(M4, "royal-enfield-meteor-350-2026-precio", [
  [
    "<a href=https://recurretumulta.online/#analizador>analízala gratis con nuestra IA</a>",
    "<a href=/#analizador>analízala gratis con nuestra IA</a>",
  ],
  [
    "La **Meteor** por comodidad cruiser y precio; la **Classic** por estética vintage.",
    "La **Meteor** por comodidad cruiser y precio; la **Classic** por estética vintage. <a href=/blog/royal-enfield-classic-350-2026-precio/>Royal Enfield Classic 350 2026: precio y ficha</a>.",
  ],
  [
    "Es **la mejor puerta de entrada**: barata, dócil y con estilo.",
    E(`Es **la mejor puerta de entrada**: barata, dócil y con estilo.

### ¿Dónde se fabrica la Royal Enfield Meteor 350?

En **Chennai (India)**, en la factoría principal de Royal Enfield, una de las marcas de motos más antiguas del mundo en producción continua.`),
  ],
  ['"readTime": 6,', '"readTime": 7,'],
]);

// ── 5. suzuki-gsx-r125-2026-precio ────────────────────────────────────────────
apply(M4, "suzuki-gsx-r125-2026-precio", [
  [
    "<a href=https://recurretumulta.online/#analizador>analízala gratis con nuestra IA</a>",
    "<a href=/#analizador>analízala gratis con nuestra IA</a>",
  ],
  [
    "La **Suzuki** por precio y ligereza; la **Yamaha** por tecnología VVA y parte ciclo.",
    "La **Suzuki** por precio y ligereza; la **Yamaha** por tecnología VVA y parte ciclo. <a href=/blog/yamaha-yzf-r125-2026-precio/>Yamaha YZF-R125 2026: precio y ficha</a>.",
  ],
  [
    "Perfecta: **ligera, barata y fiable**, ideal para el A1.",
    E(`Perfecta: **ligera, barata y fiable**, ideal para el A1.

### ¿Con cuántos años puedo conducir una 125?

Con el **carnet A1, desde los 16 años**; con el carnet de coche (B), desde los 18 y con **3 años de antigüedad** del permiso.`),
  ],
  ['"readTime": 6,', '"readTime": 7,'],
]);

// ── 6. keeway-superlight-125v-2025-precio ─────────────────────────────────────
apply(M4, "keeway-superlight-125v-2025-precio", [
  [
    "<a href=https://recurretumulta.online/#analizador>analízala gratis con nuestra IA</a>",
    "<a href=/#analizador>analízala gratis con nuestra IA</a>",
  ],
  [
    "la K-Light 125 (2.490 €) es su hermana mayor.",
    "la <a href=/blog/keeway-k-light-125-2024-ficha-tecnica-precio/>K-Light 125 (2.490 €)</a> es su hermana mayor.",
  ],
  [
    "Sí, con el **carnet B con 3 años** de antigüedad.",
    E(`Sí, con el **carnet B con 3 años** de antigüedad.

### ¿Con cuántos años puedo conducir una 125?

Con el **carnet A1, desde los 16 años**; con el carnet B, desde los 18 y con **3 años de antigüedad** del permiso.`),
  ],
  ['"readTime": 6,', '"readTime": 7,'],
]);

console.log(fails === 0 ? "\nTANDA OK" : `\n⚠ ${fails} incidencias`);
process.exit(fails === 0 ? 0 : 1);
