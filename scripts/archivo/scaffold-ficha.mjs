#!/usr/bin/env node
// scaffold-ficha.mjs — Genera y valida el esqueleto de datos de una FICHA
// técnica con la plantilla Maextro V800 (11/10/2026, orden permanente de Daniel).
//
//   Estructura obligatoria (MANDATOS-PERMANENTES.md §1):
//     H1 nombre del modelo → "La nota de Cosa" → "En cifras" → ficha técnica
//     animada → "¿Puede entrar en la ZBE de Madrid?" → "Precio y versiones" →
//     EuroNCAP → Historia del modelo (timeline con foto por hito) →
//     Plan de mantenimiento → Garantía → "Preguntas frecuentes" (5-6 + schema).
//
//   Paquete obligatorio (§2): ficha técnica animada, EuroNCAP verificado
//   (honesto si no hay prueba), mantenimiento verificable con fuente, historia
//   con timeline y fotos, garantía oficial, PRECIO obligatorio (real u
//   orientativo marcado), 3+ fotos reales del modelo, FAQ 5-6 con schema.
//
// CLI
//   node scripts/scaffold-ficha.mjs --marca Maextro --modelo V800 \
//       [--seccion coches] [--dato-clave "523 CV"] [--tipo Electrico] \
//       [--categoria Berlina] [--out drafts/maextro-v800.json]
//       → escribe el esqueleto JSON con todos los campos obligatorios
//         marcados como TODO: para que los rellene el workflow.
//   node scripts/scaffold-ficha.mjs --check drafts/maextro-v800.json
//       → valida el draft: exit 0 = listo para publicar, exit 1 = bloqueado.
//   node scripts/scaffold-ficha.mjs --emit-ts drafts/maextro-v800.json \
//       [--const FICHA_MAEXTRO_V800]
//       → imprime el módulo TS (MaextroFichaData) listo para importar en la página.
//
// Flujo esperado (workflows publicar-ficha.sh / WORKFLOW-FICHA):
//   1) generar el scaffold, 2) rellenar TODOS los TODO con datos reales y
//   fuentes, 3) --check en verde, 4) integrar en los datos de la sección,
//   5) pipeline blindado (tsc -b, prerender, filtros) — nunca se publica con
//   un TODO pendiente ni un error de validación.

import fs from "node:fs";
import path from "node:path";
import {
  REPO, parseArgs, esPlaceholder, esFotoEnDisco, informar,
  validarFaqs, validarFotos, checkDescription, leerJson, emitirTs,
} from "./scaffold-lib.mjs";

const T = (campo) => `TODO: ${campo}`;

function slugify(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function generar(args) {
  const marca = args.marca || "TODO_MARCA";
  const modelo = args.modelo || "TODO_MODELO";
  const seccion = args.seccion || "coches";
  const nombreCompleto = `${marca} ${modelo}`;
  const slug = args.slug || slugify(`${nombreCompleto} ${args.sufijoSlug || "precio ficha tecnica"}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    console.error("Error: --slug con formato inválido (minúsculas, números y guiones).");
    process.exit(1);
  }
  const datoClave = args["dato-clave"] || "TODO: dato clave del title (ej. 523 CV)";
  const ano = Number(args.ano) || 2026;

  const draft = {
    __tipo: "MaextroFichaData",
    __plantilla: "Maextro V800 (11/10/2026) — FICHA",
    slug,
    seccion,
    marca,
    modelo,
    nombreCompleto,
    tipo: args.tipo || T("tipo: Eléctrico | Híbrido | Gasolina | Diésel..."),
    categoria: args.categoria || T("categoría: Berlina | SUV | Urbano..."),
    imagenHero: T("foto hero /media/<slug>-hero.webp (REAL, del modelo, en disco)"),
    imagenes: [
      T("foto 1 /media/<slug>-1.webp (REAL, del modelo, en disco)"),
      T("foto 2 /media/<slug>-2.webp (REAL, del modelo, en disco)"),
      T("foto 3 /media/<slug>-3.webp (REAL, del modelo, en disco)"),
    ],
    datoClave,
    ano,
    notaCosa: {
      nota: T("nota 0-10 (número)"),
      texto: T("valoración honesta en 3-6 líneas, cero relleno"),
      pros: [T("punto fuerte 1"), T("punto fuerte 2"), T("punto fuerte 3")],
      contras: [T("punto débil 1"), T("punto débil 2"), T("punto débil 3")],
    },
    enCifras: [
      { etiqueta: "Precio desde", valor: T("ej. 92.000 €") },
      { etiqueta: "Potencia", valor: T("ej. 523 CV") },
      { etiqueta: "Autonomía (WLTP)", valor: T("ej. 670 km") },
      { etiqueta: "Batería", valor: T("ej. 97 kWh") },
      { etiqueta: "Carga rápida (DC)", valor: T("ej. 480 kW") },
      { etiqueta: "0-100 km/h", valor: T("ej. 4,3 s") },
    ],
    specs: [
      { campo: "Precio desde", valor: T("ej. 92.000 €") },
      { campo: "Potencia", valor: T("ej. 523 CV") },
      { campo: "Par máximo", valor: T("ej. 800 Nm") },
      { campo: "Autonomía eléctrica (WLTP)", valor: T("ej. 670 km") },
      { campo: "Batería", valor: T("ej. 97 kWh") },
      { campo: "Carga rápida (DC)", valor: T("ej. 480 kW") },
      { campo: "Maletero", valor: T("ej. 500 L") },
      { campo: "Plazas", valor: T("ej. 5") },
      { campo: "Dimensiones (L×An×Al)", valor: T("ej. 5.480 × 2.000 × 1.536 mm") },
      { campo: "Peso", valor: T("ej. 2.700 kg") },
      { campo: "0-100 km/h", valor: T("ej. 4,3 s") },
      { campo: "Velocidad máxima", valor: T("ej. 230 km/h") },
      { campo: "Tracción", valor: T("ej. Total") },
      { campo: "Etiqueta DGT", valor: T("Cero | ECO | C | B") },
    ],
    etiquetaDgt: T("Cero | ECO | C | B | null"),
    // zbeTexto opcional: si se deja vacío se deriva de la etiqueta DGT.
    zbeTexto: "",
    precio: {
      tipo: T("real | orientativo — OBLIGATORIO; orientativo siempre marcado con ≈"),
      desde: T("número en euros (obligatorio salvo justificación)"),
      texto: T("ej. desde 92.000 € en China"),
      fuente: T("fuente del precio"),
    },
    versiones: [
      { nombre: T("versión 1"), precioEur: T("número"), precioOrientativo: false, texto: T("qué incluye") },
      { nombre: T("versión 2"), precioEur: T("número"), precioOrientativo: false, texto: T("qué incluye") },
    ],
    euroncap: {
      estrellas: T("0-5 o null si no hay prueba — NUNCA inventar"),
      ano: T("año de la prueba o null"),
      url: T("enlace oficial euroncap.com o null"),
    },
    mantenimiento: {
      intervalo: T("ej. 20.000 km o 24 meses (lo que ocurra antes)"),
      revisiones: [
        { nombre: T("ej. Revisión / 20.000 km"), queSeCambia: T("qué se cambia"), costeAproxEur: T("número o null") },
      ],
      costeAnualAproxEur: T("número o null"),
      fuente: T("fuente oficial del plan de mantenimiento"),
    },
    historia: [
      { ano: T("año (número)"), titulo: T("título del hito"), texto: T("qué pasó"), foto: T("/media/<slug>-hito-1.webp (REAL, en disco)"), fotoAlt: T("alt de la foto") },
      { ano: T("año (número)"), titulo: T("título del hito"), texto: T("qué pasó"), foto: T("/media/<slug>-hito-2.webp (REAL, en disco)"), fotoAlt: T("alt de la foto") },
    ],
    garantia: {
      texto: T("ej. 5 años o 150.000 km (lo que ocurra antes)"),
      bateria: T("garantía de batería de tracción, si aplica"),
      fuente: T("fuente oficial"),
    },
    faqs: [
      { pregunta: T("¿Cuánto cuesta el <modelo>?"), respuesta: T("respuesta útil ≥60 car., puede llevar <a>/<strong>") },
      { pregunta: T("¿Qué autonomía tiene?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Cuánto tarda en cargar?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Se vende en España?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Qué potencia tiene?"), respuesta: T("respuesta útil ≥60 car.") },
    ],
    blogSlug: T("slug del artículo del blog que acompaña (paquete obligatorio)"),
    description: T("meta description ≤155 car."),
  };

  const out = args.out || path.join(REPO, "drafts", `${slug}.ficha.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(draft, null, 2) + "\n");
  console.log(`Esqueleto de ficha escrito en: ${out}`);
  console.log("Rellena TODOS los TODO: con datos reales y fuentes, luego: --check <fichero>");
}

function tituloV800(d) {
  // Misma plantilla que tituloFichaMaextro() en tipos.ts.
  const cands = [
    `${d.nombreCompleto}: ${d.datoClave} [Ficha ${d.ano}]`,
    `${d.nombreCompleto}: ${d.datoClave} (${d.ano})`,
    `${d.nombreCompleto} (${d.ano})`,
  ];
  for (const c of cands) if (c.length <= 60) return c;
  return cands[cands.length - 1].slice(0, 60);
}

function validar(draft) {
  const errores = [], avisos = [];
  const req = (v, campo) => { if (esPlaceholder(v)) errores.push(`${campo}: sin rellenar`); };

  req(draft.marca, "marca"); req(draft.modelo, "modelo");
  req(draft.nombreCompleto, "nombreCompleto");
  if (!["coches", "motos", "patinetes"].includes(draft.seccion))
    errores.push(`seccion: debe ser coches|motos|patinetes (es "${draft.seccion}")`);
  req(draft.slug, "slug");
  req(draft.tipo, "tipo"); req(draft.categoria, "categoria");
  req(draft.datoClave, "datoClave");

  // Title V800 generado: ≤60, sin marca web.
  const title = tituloV800(draft);
  if (title.length > 60) errores.push(`title V800: ${title.length} car. > 60 → "${title}"`);
  if (/recurretumulta/i.test(title)) errores.push("title: PROHIBIDO el nombre de la web/marca");
  checkDescription(draft.description, errores);

  // La nota de Cosa
  const n = draft.notaCosa || {};
  if (typeof n.nota !== "number" || n.nota < 0 || n.nota > 10)
    errores.push("notaCosa.nota: debe ser un número 0-10");
  req(n.texto, "notaCosa.texto");
  if (!Array.isArray(n.pros) || n.pros.length < 2 || n.pros.some(esPlaceholder))
    errores.push("notaCosa.pros: mínimo 2 puntos fuertes reales");
  if (!Array.isArray(n.contras) || n.contras.length < 2 || n.contras.some(esPlaceholder))
    errores.push("notaCosa.contras: mínimo 2 puntos débiles reales");

  // En cifras + specs
  if (!Array.isArray(draft.enCifras) || draft.enCifras.length < 4)
    errores.push("enCifras: mínimo 4 cifras");
  (draft.enCifras || []).forEach((c, i) => {
    if (esPlaceholder(c.etiqueta) || esPlaceholder(c.valor)) errores.push(`enCifras[${i}]: sin rellenar`);
  });
  if (!Array.isArray(draft.specs) || draft.specs.length < 8)
    errores.push("specs: mínimo 8 filas de ficha técnica");
  (draft.specs || []).forEach((s, i) => {
    if (esPlaceholder(s.campo) || esPlaceholder(s.valor)) errores.push(`specs[${i}]: sin rellenar`);
  });

  // Fotos: hero + ≥3 reales en disco
  if (esPlaceholder(draft.imagenHero)) errores.push("imagenHero: sin rellenar");
  else if (!esFotoEnDisco(draft.imagenHero)) errores.push(`imagenHero: no existe en disco → ${draft.imagenHero}`);
  if (!Array.isArray(draft.imagenes) || draft.imagenes.length < 3)
    errores.push(`imagenes: mínimo 3 fotos reales (tiene ${(draft.imagenes || []).length})`);
  else validarFotos(draft.imagenes, "imagenes", errores, avisos);

  // Precio obligatorio
  const p = draft.precio || {};
  if (p.tipo !== "real" && p.tipo !== "orientativo")
    errores.push('precio.tipo: debe ser "real" u "orientativo" (orientativo siempre marcado con ≈)');
  if (typeof p.desde !== "number") errores.push("precio.desde: número en euros obligatorio");
  req(p.fuente, "precio.fuente");

  // EuroNCAP honesto
  const e = draft.euroncap || {};
  if (e.estrellas !== null && (typeof e.estrellas !== "number" || e.estrellas < 0 || e.estrellas > 5))
    errores.push("euroncap.estrellas: 0-5 o null (nunca inventar)");
  if (e.estrellas == null && esPlaceholder(e.ano) && esPlaceholder(e.url))
    avisos.push("euroncap: sin prueba — se mostrará «Sin datos EuroNCAP» (correcto, nunca inventar)");

  // Mantenimiento verificable
  const m = draft.mantenimiento || {};
  req(m.intervalo, "mantenimiento.intervalo");
  if (!Array.isArray(m.revisiones) || m.revisiones.length < 1)
    errores.push("mantenimiento.revisiones: mínimo 1 revisión");
  (m.revisiones || []).forEach((r, i) => {
    if (esPlaceholder(r.nombre) || esPlaceholder(r.queSeCambia)) errores.push(`mantenimiento.revisiones[${i}]: sin rellenar`);
  });
  req(m.fuente, "mantenimiento.fuente");

  // Historia con foto por hito
  if (!Array.isArray(draft.historia) || draft.historia.length < 2)
    errores.push("historia: mínimo 2 hitos con foto cada uno");
  (draft.historia || []).forEach((h, i) => {
    if (typeof h.ano !== "number") errores.push(`historia[${i}].ano: año numérico obligatorio`);
    if (esPlaceholder(h.titulo) || esPlaceholder(h.texto)) errores.push(`historia[${i}]: título/texto sin rellenar`);
    if (esPlaceholder(h.foto)) errores.push(`historia[${i}].foto: foto obligatoria en cada hito`);
    else if (!esFotoEnDisco(h.foto)) errores.push(`historia[${i}].foto: no existe en disco → ${h.foto}`);
  });

  // Garantía oficial
  req((draft.garantia || {}).texto, "garantia.texto");

  // FAQ 5-6 con schema
  validarFaqs(draft.faqs, errores, avisos);

  req(draft.blogSlug, "blogSlug (el paquete obligatorio exige artículo de blog)");

  return informar(`FICHA ${draft.nombreCompleto || "?"} (${draft.slug || "?"}) — title: "${title}"`, errores, avisos);
}

// ── CLI ──
const AYUDA_FICHA = `
scaffold-ficha.mjs — esqueleto de FICHA Maextro V800 (MANDATOS-PERMANENTES.md §1-§2)

  Generar:
    node scripts/scaffold-ficha.mjs --marca <marca> --modelo <modelo> [opciones]
      --slug <slug>            Slug URL (defecto: auto desde marca+modelo)
      --seccion <s>            coches|motos|patinetes (defecto: coches)
      --dato-clave <txt>       Dato clave del <title> V800 (ej. "523 CV")
      --tipo <t>               Tipo de vehículo (defecto: Eléctrico)
      --categoria <c>          Categoría (defecto: Berlina)
      --ano <a>                Año de la ficha (defecto: 2026)
      --out <ruta>             Destino del JSON (defecto: drafts/<slug>.ficha.json)

  Validar (exit 0 = listo para publicar, exit 1 = bloqueado):
    node scripts/scaffold-ficha.mjs --check <fichero.json>

  Emitir módulo TS (const "ficha", para src/data/maextro/fichas/<slug>.ts):
    node scripts/scaffold-ficha.mjs --emit-ts <fichero.json> --const ficha > destino.ts

  Esta ayuda:
    node scripts/scaffold-ficha.mjs --help
`.trim();

const args = parseArgs(process.argv);
if (args.help || args.h) {
  console.log(AYUDA_FICHA);
  process.exit(0);
}
if (args.check) process.exit(validar(leerJson(args.check)));
if (args["emit-ts"]) {
  const draft = leerJson(args["emit-ts"]);
  const constName = String(args.const || ("FICHA_" + String(draft.slug || "X").toUpperCase().replace(/[^A-Z0-9]+/g, "_")));
  process.stdout.write(emitirTs(draft, constName));
  process.exit(0);
}
generar(args);
