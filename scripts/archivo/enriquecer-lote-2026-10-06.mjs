#!/usr/bin/env node
/**
 * Enriquecimiento por lotes — tanda 2026-10-06 (cron recurretumulta-enriquecimiento-continuo).
 * Continúa la tanda 2026-10-05 con los 7 artículos flash de bajadas de precio que faltaban:
 * hyundai-i20, dacia-sandero, toyota-yaris, toyota-corolla, seat-ibiza, leapmotor-t03, leapmotor-c10
 * (blog-posts-flash-2026.ts).
 *
 * Por artículo:
 * - Enlaces internos absolutos (https://recurretumulta.online/...) a relativos con barra final.
 * - Barra final en enlaces internos relativos que no la llevan.
 * - Sección "Antes de decidir: compruébalo en 2 minutos" antes de "Preguntas frecuentes"
 *   (variante de etiqueta DGT según motorización: gasolina C, híbrido ECO, eléctrico Cero).
 * - 1 FAQ nueva útil y sin duplicar (i20: se sustituye la FAQ duplicada de etiqueta DGT).
 * - Enlace oficial dgt.es donde faltaba (i20, sandero).
 * Solo toca los 7 slugs objetivo; el resto del fichero queda byte-idéntico.
 * NO despliega.
 */
import fs from "node:fs";

const ROOT = "/home/hatch/workspace/recurretumulta-v2";

function entryBounds(t, slugIdx) {
  const start = t.lastIndexOf("{", slugIdx);
  let depth = 0, inStr = false, q = "", esc = false;
  for (let k = start; k < t.length; k++) {
    const c = t[k];
    if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === q) inStr = false; }
    else {
      if (c === '"' || c === "'") { inStr = true; q = c; }
      else if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) return [start, k + 1]; }
    }
  }
  throw new Error("entry no cerrada");
}
function getContentRaw(entry) {
  const m = entry.match(/"content":\s*"/);
  if (!m) throw new Error("sin content");
  let i = m.index + m[0].length, esc = false;
  for (; i < entry.length; i++) {
    const c = entry[i];
    if (esc) esc = false;
    else if (c === "\\") esc = true;
    else if (c === '"') break;
  }
  return entry.slice(m.index + m[0].length, i);
}
function setContentRaw(entry, newRaw) {
  const m = entry.match(/"content":\s*"/);
  let i = m.index + m[0].length, esc = false;
  for (; i < entry.length; i++) {
    const c = entry[i];
    if (esc) esc = false;
    else if (c === "\\") esc = true;
    else if (c === '"') break;
  }
  return entry.slice(0, m.index + m[0].length) + newRaw + entry.slice(i);
}

// Convierte \n reales a secuencias literales \n para el fichero TS.
const esc = (s) => s.replace(/\n/g, "\\n");

function fixLinks(raw) {
  let r = raw.split("href=https://www.recurretumulta.online/").join("href=/");
  r = r.split("href=https://recurretumulta.online/").join("href=/");
  r = r.replace(/href=https:\/\/recurretumulta\.online(?=[\s>])/g, "href=/");
  // barra final en enlaces internos relativos sin ella (no toca #anclas ni href=/ solo)
  r = r.replace(/href=(\/(?:[a-z0-9-]+)(?:\/[a-z0-9-]+)*)(?=[\s>])/g, (m, p) =>
    p.endsWith("/") ? m : `href=${p}/`);
  return r;
}

const DGT_BULLET = `- **Fuente oficial:** <a href=https://www.dgt.es/nuestros-servicios/tu-vehiculo/tus-vehiculos/distintivo-ambiental/>distintivo ambiental de la DGT</a> para tu matrícula.`;

const ANTES_GASOLINA = (dgt) => `## Antes de decidir: compruébalo en 2 minutos

- **Etiqueta DGT:** al ser gasolina lleva etiqueta C, con limitaciones en las ZBE más estrictas; confírmalo para tu matrícula en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.${dgt ? "\n" + DGT_BULLET : ""}
- **¿Es la mejor compra por ese dinero?** Pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> y compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.`;

const ANTES_HIBRIDO = `## Antes de decidir: compruébalo en 2 minutos

- **Etiqueta DGT:** al ser híbrido lleva etiqueta ECO, con acceso a las ZBE; confírmalo para tu matrícula en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.
- **¿Es la mejor compra por ese dinero?** Pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> y compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.`;

const ANTES_EV = `## Antes de decidir: compruébalo en 2 minutos

- **Etiqueta DGT:** al ser 100 % eléctrico lleva etiqueta Cero; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.
- **Autonomía real:** la cifra WLTP rara vez es la del día a día; calcúlala para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.
- **¿Es la mejor compra por ese dinero?** Pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> y compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.`;

// FAQ antigua duplicada del i20 (en crudo del fichero: \n como 2 caracteres;
// tras fixLinks, el enlace lleva barra final). A sustituir por la de garantía.
const I20_DUP_OLD = "### ¿Qué etiqueta DGT lleva el Hyundai i20 más barato?\\nLa versión 1.2 MPI lleva **etiqueta C**. Si buscas la ECO, Hyundai la ofrece con hibridación en otros modelos. <a href=/calculadora-etiqueta-dgt/>Calcula aquí la etiqueta DGT de cualquier coche</a>.";

const CFG = {
  "hyundai-i20-baja-precio-octubre-2026": {
    antes: ANTES_GASOLINA(true),
    // sustituye la FAQ duplicada en vez de añadir
    replaceFaq: [I20_DUP_OLD, `### ¿Qué garantía tiene el Hyundai i20 nuevo?
Hyundai ofrece **5 años de garantía sin límite de kilómetros** en Europa, una de las más amplias entre los utilitarios. Se mantiene siempre que pases las revisiones en un servicio oficial de la marca.`],
  },
  "dacia-sandero-baja-precio-octubre-2026": {
    antes: ANTES_GASOLINA(true),
    faq: `### ¿Qué garantía ofrece Dacia en el Sandero?
Tres años o 100.000 km, lo que antes se cumpla. Es la garantía estándar de Dacia en Europa, ampliable con extensiones en el concesionario.`,
  },
  "toyota-yaris-baja-precio-octubre-2026": {
    antes: ANTES_HIBRIDO,
    faq: `### ¿Qué garantía tiene el Toyota Yaris 2026?
El programa Toyota Relax extiende la cobertura hasta **10 años o 200.000 km** si pasas las revisiones en un taller oficial Toyota: una de las garantías más largas del mercado.`,
  },
  "toyota-corolla-baja-precio-octubre-2026": {
    antes: ANTES_HIBRIDO,
    faq: `### ¿Qué incluye el Toyota Easy Plus del Corolla?
Cuatro años de garantía y mantenimiento incluidos en la cuota, desde **150 €/mes**. Es la fórmula de financiación con la que Toyota lanza la gama MY27 del Corolla.`,
  },
  "seat-ibiza-baja-precio-octubre-2026": {
    antes: ANTES_GASOLINA(false),
    faq: `### ¿El Ibiza de 80 CV sirve para viajar por autopista?
El 1.0 MPI de 80 CV va bien en ciudad y carretera tranquila, pero se queda justo en autopista con el coche cargado. Si haces muchos kilómetros por autovía, compensa subir al 1.0 TSI de 115 CV.`,
  },
  "leapmotor-t03-baja-precio-octubre-2026": {
    antes: ANTES_EV,
    faq: `### ¿El Leapmotor T03 vale para viajar por autopista?
No es su terreno: con 265 km de autonomía WLTP y 95 CV es un coche de ciudad y alrededores. Para viajes largos por autopista necesitarás planificar paradas de carga y conviene mirar un eléctrico de mayor autonomía.`,
  },
  "leapmotor-c10-baja-precio-octubre-2026": {
    antes: ANTES_EV,
    faq: `### ¿Merece la pena esperar al C10 MY27?
Depende de la prisa: el MY27 llegará con carga rápida de 120 kW y más asistentes, pero Leapmotor aún no ha comunicado precios ni fecha para España. Si necesitas coche ya, la tarifa actual (desde 37.765 €) es la mejor que ha tenido el C10.`,
  },
};

const f = `${ROOT}/src/lib/blog-posts-flash-2026.ts`;
let t = fs.readFileSync(f, "utf8");
for (const [slug, cfg] of Object.entries(CFG)) {
  const idx = t.indexOf(`"${slug}"`);
  if (idx < 0) throw new Error("slug no encontrado: " + slug);
  const [a, b] = entryBounds(t, idx);
  let entry = t.slice(a, b);
  let raw = getContentRaw(entry);
  raw = fixLinks(raw);

  if (raw.includes("## Antes de decidir")) throw new Error("Antes ya existe: " + slug);

  if (cfg.replaceFaq) {
    const [oldF, newF] = cfg.replaceFaq;
    if (!raw.includes(oldF)) throw new Error("FAQ duplicada no encontrada: " + slug);
    raw = raw.split(oldF).join(esc(newF));
  }

  const marker = "## Preguntas frecuentes";
  if (!raw.includes(marker)) throw new Error("sin FAQ: " + slug);
  raw = raw.split(marker).join(esc(cfg.antes) + "\\n\\n" + marker);

  if (cfg.faq) {
    if (raw.endsWith("\\n")) raw = raw.replace(/\\n+$/, "");
    raw = raw + "\\n\\n" + esc(cfg.faq);
  }

  if (/href=https:\/\/(www\.)?recurretumulta\.online/.test(raw))
    throw new Error("quedan enlaces absolutos: " + slug);

  entry = setContentRaw(entry, raw);
  t = t.slice(0, a) + entry + t.slice(b);
  console.log("OK:", slug);
}
fs.writeFileSync(f, t);
console.log("Hecho.");
