#!/usr/bin/env node
/**
 * Enriquecimiento por lotes — tanda 2026-10-05 (cron recurretumulta-enriquecimiento-continuo).
 * - Convierte enlaces internos absolutos (https://recurretumulta.online/...) a relativos con barra final.
 * - Añade sección "Antes de decidir" + 1 FAQ útil a 6 artículos flash de bajadas de precio.
 * - Artículo patinete-multa-modelo (blog-posts-db.ts): el slug promete "modelo gratis" y el
 *   texto lo menciona sin incluirlo; se añade el modelo de alegaciones rellenable + tabla
 *   de sanciones habituales.
 * Solo toca los 7 slugs objetivo; el resto de cada fichero queda byte-idéntico.
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

// Extrae el literal del campo "content" (texto crudo del fichero, con \n como 2 caracteres).
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
  let r = raw.split("href=https://recurretumulta.online/").join("href=/");
  r = r.replace(/href=https:\/\/recurretumulta\.online(?=[\s>])/g, "href=/");
  // barra final en enlaces internos relativos sin ella (no toca #anclas ni href=/ solo)
  r = r.replace(/href=(\/(?:[a-z0-9-]+)(?:\/[a-z0-9-]+)*)(?=[\s>])/g, (m, p) =>
    p.endsWith("/") ? m : `href=${p}/`);
  return r;
}

const ANTES_EV = `## Antes de decidir: compruébalo en 2 minutos

- **Etiqueta DGT:** al ser 100 % eléctrico lleva etiqueta Cero; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.
- **Autonomía real:** la cifra WLTP rara vez es la del día a día; calcúlala para tu uso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.
- **¿Es la mejor compra por ese dinero?** Pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> y compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.`;

const ANTES_QASHQAI = `## Antes de decidir: compruébalo en 2 minutos

- **Etiqueta DGT:** al ser MHEV le corresponde la etiqueta ECO, con acceso a las ZBE; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.
- **¿Es la mejor compra por ese dinero?** Pásalo por la <a href=/mejor-coche-por-presupuesto/>herramienta de mejor coche por presupuesto</a> y compáralo cara a cara en el <a href=/comparador-coches/>comparador de coches</a>.`;

const ANTES_SILENCE = `## Antes de decidir: compruébalo en 2 minutos

- **¿Te cuadra frente a sus rivales?** Compáralo cara a cara en el <a href=/comparador-motos/>comparador de motos</a>: precio, autonomía y potencia.
- **Etiqueta DGT:** al ser eléctrico lleva etiqueta Cero; confírmalo en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.`;

const FLASH = {
  "citroen-e-c3-aircross-baja-precio-octubre-2026": {
    antes: ANTES_EV,
    faq: `### ¿El e-C3 Aircross de 25.690 € sirve para hacer carretera a diario?\nLa versión Autonomía Confort (44 kWh) está pensada para ciudad y trayectos cortos. Si haces carretera a diario, valora la versión de 54 kWh (unos 27.940 €) o calcula tu necesidad real con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.`,
  },
  "silence-s01-plus-baja-precio-octubre-2026": {
    antes: ANTES_SILENCE,
    faq: `### ¿Dónde comparo el S01+ con otros scooters eléctricos?\nEn el <a href=/comparador-motos/>comparador de motos</a>, cara a cara con sus rivales eléctricos por precio, autonomía y potencia.`,
  },
  "opel-frontera-electric-baja-precio-octubre-2026": {
    antes: ANTES_EV,
    faq: `### ¿El Frontera Electric de 25.350 € compensa frente a un gasolina equivalente?\nA igualdad de precio de compra, el eléctrico ahorra en combustible y mantenimiento y lleva etiqueta Cero. Ponlo cara a cara con sus rivales en el <a href=/comparador-coches/>comparador de coches</a> antes de decidir.`,
  },
  "cupra-tavascan-baja-precio-octubre-2026": {
    antes: ANTES_EV,
    faq: `### ¿Qué autonomía real puedo esperar del Tavascan Standard?\nLa cifra oficial es WLTP; la real depende de la velocidad, la temperatura y el uso del climatizador. Calcúlala para tu caso con la <a href=/calculadora-autonomia-real/>calculadora de autonomía real</a>.`,
  },
  "nissan-qashqai-baja-precio-octubre-2026": {
    antes: ANTES_QASHQAI,
    faq: `### ¿El Qashqai MHEV puede entrar en las ZBE?\nSí: con la etiqueta ECO puede circular por las Zonas de Bajas Emisiones. Confírmalo para tu caso en la <a href=/calculadora-etiqueta-dgt/>calculadora de etiqueta DGT</a>.`,
  },
  "kia-ev3-baja-precio-octubre-2026": {
    antes: ANTES_EV,
    faq: `### ¿El EV3 tiene etiqueta Cero?\nSí: es 100 % eléctrico, así que lleva la etiqueta Cero de la DGT, con acceso a las ZBE y bonificaciones de aparcamiento en muchas ciudades.`,
  },
};

// ---------- 1. Flash ----------
{
  const f = `${ROOT}/src/lib/blog-posts-flash-2026.ts`;
  let t = fs.readFileSync(f, "utf8");
  for (const [slug, cfg] of Object.entries(FLASH)) {
    const idx = t.indexOf(`"${slug}"`);
    if (idx < 0) throw new Error("slug no encontrado: " + slug);
    const [a, b] = entryBounds(t, idx);
    let entry = t.slice(a, b);
    let raw = getContentRaw(entry);
    raw = fixLinks(raw);
    const marker = "## Preguntas frecuentes";
    if (!raw.includes(marker)) throw new Error("sin FAQ: " + slug);
    raw = raw.split(marker).join(esc(cfg.antes) + "\\n\\n" + marker);
    if (raw.endsWith("\\n")) raw = raw.replace(/\\n+$/, "");
    raw = raw + "\\n\\n" + esc(cfg.faq);
    entry = setContentRaw(entry, raw);
    t = t.slice(0, a) + entry + t.slice(b);
    console.log("OK flash:", slug);
  }
  fs.writeFileSync(f, t);
}

// ---------- 2. Patinete: modelo prometido + tabla de importes + enlaces ----------
const MODELO = `## Modelo gratis: escrito de alegaciones para recurrir tu multa de patinete

Copia este modelo, rellena lo que va entre corchetes y preséntalo en el registro del ayuntamiento (presencial o sede electrónica) dentro de los 20 días naturales desde que te notificaron la multa. Adapta los motivos a tu caso real: un modelo genérico sin hechos concretos no sirve de nada.

**AL [AYUNTAMIENTO DE ___]**
**Expediente sancionador n.º [___] · Boletín de denuncia n.º [___]**

Don/Doña [nombre y apellidos], con DNI [___], domicilio en [___] y correo electrónico [___], ante ese Ayuntamiento comparece y, como mejor proceda en Derecho, **DICE**:

**Primero.** Que con fecha [___] me fue notificada la denuncia n.º [___] por la presunta infracción consistente en [describir la conducta tal como la redactó el agente], con propuesta de sanción de [___] euros.

**Segundo.** Que, disconforme con dicha denuncia, y al amparo de los artículos 81 y siguientes del texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial, así como de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, formulo las siguientes

**ALEGACIONES**

**Primera.** [Elige las que encajen con tu caso y desarrolla cada una con tus hechos concretos:]

- **Defecto de forma:** la denuncia no identifica al conductor, no describe los hechos con la precisión exigible (lugar, fecha y hora) o no consta la firma del agente denunciante.
- **Error en la norma aplicada:** la ordenanza municipal citada no regula la conducta denunciada o no estaba vigente en la fecha de los hechos.
- **Falta de prueba:** no existe fotografía, medición ni testigo que acredite los hechos más allá del relato del agente.
- **Prescripción:** entre la fecha de la infracción y su notificación han transcurrido más de 3 meses (infracciones leves) o 6 meses (graves), por lo que la infracción ha prescrito.

**Segunda.** Que, por todo lo expuesto, la sanción propuesta no se ajusta a Derecho.

Por todo ello, **SUPLICO** a ese Ayuntamiento que, teniendo por presentado este escrito, lo admita y, previos los trámites oportunos, acuerde dejar sin efecto la denuncia y archivar el expediente sancionador.

En [lugar], a [fecha].

Fdo.: [nombre y apellidos] — DNI [___]

¿No tienes claro si tu caso tiene recorrido? <a href=/#analizador>Analiza tu multa gratis con nuestra IA</a> antes de presentarlo: en minutos sabrás si merece la pena recurrir o si te compensa el pronto pago con el 50 % de descuento.`;

const TABLA_MULTAS_PATINETE = `### Las multas de patinete más comunes y su importe

| Infracción | Sanción |
|---|---|
| Circular por la acera o zonas peatonales | 200 € |
| Usar el móvil con la mano | 200 € y 6 puntos |
| Usar auriculares | 200 € |
| Alcohol o drogas | 500 a 1.000 € |
| Circular sin alumbrado de noche | 200 € |
| No llevar casco donde lo exige la ordenanza | 200 € |
| Llevar pasajero (dos personas) | 100 € |
| Trucar el patinete para superar los 25 km/h | 500 € y retirada del vehículo |`;

{
  const f = `${ROOT}/src/lib/blog-posts-db.ts`;
  let t = fs.readFileSync(f, "utf8");
  const slug = "como-recurrir-multa-de-patinete-electrico-vmp-modelo-gratis";
  const idx = t.indexOf(`"${slug}"`);
  if (idx < 0) throw new Error("slug no encontrado");
  const [a, b] = entryBounds(t, idx);
  let entry = t.slice(a, b);
  let raw = getContentRaw(entry);
  raw = fixLinks(raw);
  const anchor = "y te explicamos cómo recurrir con nuestro modelo gratis.\\n\\n---";
  if (!raw.includes(anchor)) throw new Error("anchor no encontrado en patinete");
  raw = raw.split(anchor).join(
    "y te explicamos cómo recurrir con nuestro modelo gratis.\\n\\n" +
      esc(TABLA_MULTAS_PATINETE) + "\\n\\n---\\n\\n" + esc(MODELO) + "\\n\\n---"
  );
  entry = setContentRaw(entry, raw);
  t = t.slice(0, a) + entry + t.slice(b);
  fs.writeFileSync(f, t);
  console.log("OK patinete:", slug);
}
console.log("Hecho.");
