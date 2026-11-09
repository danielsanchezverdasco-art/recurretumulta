#!/usr/bin/env node
// scaffold-blog.mjs — Genera y valida el esqueleto de datos de un ARTÍCULO del
// blog con la plantilla Maextro V800 (11/10/2026, orden permanente de Daniel).
//
//   Estructura obligatoria (MANDATOS-PERMANENTES.md §1):
//     H1 (title V800) → H2 nombre del modelo → "Ficha técnica: [Modelo]"
//     (resumen + enlace a la ficha) → explicador de la tecnología clave →
//     "Curiosidades que lo hacen único" → gancho comparativo →
//     "Preguntas frecuentes" (5-6 con schema).
//
//   Paquete obligatorio (§3): 3 fotos reales del modelo (verificadas, no
//   genéricas, no IA salvo recreación marcada), enlace a la ficha técnica
//   (<a href=/coches|motos|patinetes/<id>>), FAQ 5-6 con schema, tablas donde
//   encaje, enlaces internos + fuentes oficiales, CTA al analizador, cero relleno.
//
//   Regla dura (filtro 10): todo blog de coche DEBE tener su ficha
//   /coches|motos|patinetes/<id> creada con datos reales Y enlazada.
//
// CLI
//   node scripts/scaffold-blog.mjs --marca Maextro --modelo S800 \
//       --ficha-href /coches/maextro-s800-... \
//       [--dato-impactante "670 km de autonomía"] [--precio-title "~92.000 €"] \
//       [--out drafts/maextro-s800.blog.json]
//       → escribe el esqueleto JSON con todos los campos obligatorios.
//   node scripts/scaffold-blog.mjs --check drafts/maextro-s800.blog.json
//       → valida el draft: exit 0 = listo para publicar, exit 1 = bloqueado.
//   node scripts/scaffold-blog.mjs --emit-ts drafts/maextro-s800.blog.json
//       → imprime el módulo TS (MaextroBlogData) listo para importar.
//
// Flujo esperado (workflows publicar-blog.sh / WORKFLOW-BLOG):
//   1) generar el scaffold, 2) rellenar TODOS los TODO con datos reales,
//   fuentes oficiales y fotos en disco, 3) --check en verde,
//   4) integrar en los datos del blog, 5) pipeline blindado — nunca se publica
//   con un TODO pendiente ni un error de validación.

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
  const nombreCompleto = `${marca} ${modelo}`;
  const slug = args.slug || slugify(`${nombreCompleto} ${args.sufijoSlug || "precio ficha tecnica"}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    console.error("Error: --slug con formato inválido (minúsculas, números y guiones).");
    process.exit(1);
  }
  const datoImpactante = args["dato-impactante"] || "TODO: dato impactante (ej. 670 km de autonomía)";
  const precioTitle = args["precio-title"] || "TODO: precio del title (ej. ~92.000 €)";

  const draft = {
    __tipo: "MaextroBlogData",
    __plantilla: "Maextro V800 (11/10/2026) — BLOG",
    slug,
    marca,
    modelo,
    nombreCompleto,
    // REGLA DURA: la ficha debe existir con datos reales antes de publicar el blog.
    fichaHref: args["ficha-href"] || T("href de la ficha, ej. /coches/<slug> — DEBE existir"),
    description: T("meta description ≤155 car."),
    intro: T("intro 3-5 líneas: qué es el modelo y por qué importa, cero relleno"),
    imagenHero: T("foto hero /media/<slug>-hero.webp (REAL, del modelo, en disco)"),
    imagenes: [
      T("foto real 1 /media/<slug>-1.webp (REAL, del modelo, en disco)"),
      T("foto real 2 /media/<slug>-2.webp (REAL, del modelo, en disco)"),
      T("foto real 3 /media/<slug>-3.webp (REAL, del modelo, en disco)"),
    ],
    datoImpactante,
    precioTitle,
    enCifras: [
      { etiqueta: "Precio", valor: T("ej. ~92.000 €") },
      { etiqueta: "Potencia", valor: T("ej. 530 CV") },
      { etiqueta: "Autonomía", valor: T("ej. 670 km") },
      { etiqueta: "Carga rápida", valor: T("ej. 12 min (10-80 %)") },
      { etiqueta: "0-100 km/h", valor: T("ej. 4,3 s") },
      { etiqueta: "Etiqueta DGT", valor: T("ej. Cero") },
    ],
    fichaResumen: [
      { campo: "Precio", valor: T("ej. ~92.000 €") },
      { campo: "Potencia", valor: T("ej. 530 CV") },
      { campo: "Autonomía (CLTC/WLTP)", valor: T("ej. 670 km") },
      { campo: "Batería", valor: T("ej. 97 kWh") },
      { campo: "Carga", valor: T("ej. 800 V, 12 min") },
      { campo: "Tracción", valor: T("ej. Total") },
    ],
    tecnologia: {
      titulo: T("ej. Tecnología Huawei: ADS 4.0 y carga en 12 minutos"),
      intro: T("intro del explicador: qué tecnología es y por qué importa"),
      puntos: [
        T("punto 1 con dato real"),
        T("punto 2 con dato real"),
        T("punto 3 con dato real"),
        T("punto 4 con dato real"),
      ],
      imagen: T("foto que ilustra la tecnología (REAL, del modelo, en disco) — opcional si ya está en galería"),
      imagenAlt: T("alt de la foto de tecnología"),
    },
    curiosidades: [
      { titulo: T("curiosidad 1"), texto: T("desarrollo con dato real") },
      { titulo: T("curiosidad 2"), texto: T("desarrollo con dato real") },
      { titulo: T("curiosidad 3"), texto: T("desarrollo con dato real") },
      { titulo: T("curiosidad 4"), texto: T("desarrollo con dato real") },
      { titulo: T("curiosidad 5"), texto: T("desarrollo con dato real") },
    ],
    comparativo: {
      titulo: T("ej. Maextro S800 frente a sus rivales: ¿merece la pena?"),
      texto: T("gancho comparativo: en qué gana y en qué pierde frente a rivales, con datos"),
      rivales: [
        { nombre: T("rival 1"), href: T("/coches/<slug-rival> o vacío si no hay ficha") },
        { nombre: T("rival 2"), href: T("/coches/<slug-rival> o vacío si no hay ficha") },
        { nombre: T("rival 3"), href: T("/coches/<slug-rival> o vacío si no hay ficha") },
      ],
    },
    faqs: [
      { pregunta: T("¿Cuánto cuesta el <modelo>?"), respuesta: T("respuesta útil ≥60 car., puede llevar <a>/<strong>") },
      { pregunta: T("¿Qué autonomía tiene?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Cuánto tarda en cargar?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Se vende en España?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Qué potencia tiene?"), respuesta: T("respuesta útil ≥60 car.") },
      { pregunta: T("¿Qué es <marca>?"), respuesta: T("respuesta útil ≥60 car.") },
    ],
    // Fuentes oficiales: se renderizan en la sección "Fuentes oficiales" (§3).
    fuentes: [
      { titulo: T("título de la fuente oficial 1 (marca, dgt.es, boe.es…)"), url: T("https://…") },
      { titulo: T("título de la fuente oficial 2"), url: T("https://…") },
    ],
  };

  const out = args.out || path.join(REPO, "drafts", `${slug}.blog.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(draft, null, 2) + "\n");
  console.log(`Esqueleto de blog escrito en: ${out}`);
  console.log("Rellena TODOS los TODO: con datos reales, fotos en disco y fuentes, luego: --check <fichero>");
}

function tituloV800(d) {
  // Misma plantilla que tituloBlogMaextro() en tipos.ts.
  // FIX BUG 1 (11/10/2026): si precioTitle es placeholder/TODO, NO generar
  // título con precio — un draft sin precio no debe publicar un title con
  // el texto del TODO pegado.
  const cands = esPlaceholder(d.precioTitle)
    ? [`${d.nombreCompleto}: ${d.datoImpactante}`]
    : [
        `${d.nombreCompleto}: ${d.datoImpactante} por ${d.precioTitle}`,
        `${d.nombreCompleto}: ${d.datoImpactante}`,
        `${d.nombreCompleto} por ${d.precioTitle}`,
      ];
  for (const c of cands) if (c.length <= 60) return c;
  return cands[cands.length - 1].slice(0, 60);
}

function validar(draft) {
  const errores = [], avisos = [];
  const req = (v, campo) => { if (esPlaceholder(v)) errores.push(`${campo}: sin rellenar`); };

  req(draft.marca, "marca"); req(draft.modelo, "modelo");
  req(draft.nombreCompleto, "nombreCompleto"); req(draft.slug, "slug");
  req(draft.intro, "intro");
  // FIX BUG 1 (11/10/2026): bloquear drafts sin precio real.
  req(draft.precioTitle, "precioTitle");

  // Title V800 generado: ≤60, sin marca web.
  const title = tituloV800(draft);
  if (title.length > 60) errores.push(`title V800: ${title.length} car. > 60 → "${title}"`);
  if (/recurretumulta/i.test(title)) errores.push("title: PROHIBIDO el nombre de la web/marca");
  checkDescription(draft.description, errores);

  // REGLA DURA: enlace a la ficha
  const fh = String(draft.fichaHref || "");
  if (esPlaceholder(fh)) errores.push("fichaHref: OBLIGATORIO — el blog de un coche exige su ficha creada y enlazada");
  else if (!/^\/(coches|motos|patinetes)\/[a-z0-9-]+$/.test(fh))
    errores.push(`fichaHref: formato inválido (esperado /coches|motos|patinetes/<slug>): ${fh}`);

  // En cifras + ficha resumen
  if (!Array.isArray(draft.enCifras) || draft.enCifras.length < 4)
    errores.push("enCifras: mínimo 4 cifras");
  (draft.enCifras || []).forEach((c, i) => {
    if (esPlaceholder(c.etiqueta) || esPlaceholder(c.valor)) errores.push(`enCifras[${i}]: sin rellenar`);
  });
  if (!Array.isArray(draft.fichaResumen) || draft.fichaResumen.length < 4)
    errores.push("fichaResumen: mínimo 4 filas («Ficha técnica: [Modelo]»)");
  (draft.fichaResumen || []).forEach((s, i) => {
    if (esPlaceholder(s.campo) || esPlaceholder(s.valor)) errores.push(`fichaResumen[${i}]: sin rellenar`);
  });

  // 3 fotos reales del modelo en disco
  if (esPlaceholder(draft.imagenHero)) errores.push("imagenHero: sin rellenar");
  else if (!esFotoEnDisco(draft.imagenHero)) errores.push(`imagenHero: no existe en disco → ${draft.imagenHero}`);
  if (!Array.isArray(draft.imagenes) || draft.imagenes.length < 3)
    errores.push(`imagenes: mínimo 3 fotos REALES del modelo (tiene ${(draft.imagenes || []).length})`);
  else validarFotos(draft.imagenes, "imagenes", errores, avisos);

  // Explicador de tecnología
  const t = draft.tecnologia || {};
  req(t.titulo, "tecnologia.titulo"); req(t.intro, "tecnologia.intro");
  if (!Array.isArray(t.puntos) || t.puntos.length < 4 || t.puntos.some(esPlaceholder))
    errores.push("tecnologia.puntos: mínimo 4 puntos con datos reales");

  // Curiosidades: 5+
  if (!Array.isArray(draft.curiosidades) || draft.curiosidades.length < 5)
    errores.push(`curiosidades: mínimo 5 (tiene ${(draft.curiosidades || []).length})`);
  (draft.curiosidades || []).forEach((c, i) => {
    if (esPlaceholder(c.titulo) || esPlaceholder(c.texto)) errores.push(`curiosidades[${i}]: sin rellenar`);
  });

  // Gancho comparativo
  const cmp = draft.comparativo || {};
  req(cmp.titulo, "comparativo.titulo"); req(cmp.texto, "comparativo.texto");
  if (!Array.isArray(cmp.rivales) || cmp.rivales.length < 2 || cmp.rivales.some((r) => esPlaceholder(r.nombre)))
    errores.push("comparativo.rivales: mínimo 2 rivales con nombre");

  // FAQ 5-6 con schema
  validarFaqs(draft.faqs, errores, avisos);

  // Fuentes oficiales (§3): mínimo 1 real, con URL válida
  if (!Array.isArray(draft.fuentes) || draft.fuentes.length < 1)
    errores.push("fuentes: mínimo 1 fuente oficial real ({titulo, url})");
  (draft.fuentes || []).forEach((f, i) => {
    if (esPlaceholder(f.titulo) || esPlaceholder(f.url)) {
      errores.push(`fuentes[${i}]: título o url sin rellenar`);
    } else if (!/^https?:\/\//.test(String(f.url).trim())) {
      errores.push(`fuentes[${i}].url: debe ser una URL http(s) válida`);
    }
  });

  return informar(`BLOG ${draft.nombreCompleto || "?"} (${draft.slug || "?"}) — title: "${title}"`, errores, avisos);
}

// ── CLI ──
const AYUDA_BLOG = `
scaffold-blog.mjs — esqueleto de ARTÍCULO Maextro V800 (MANDATOS-PERMANENTES.md §1, §3)

  Generar:
    node scripts/scaffold-blog.mjs --marca <marca> --modelo <modelo> [opciones]
      --slug <slug>            Slug URL (defecto: auto desde marca+modelo)
      --ficha-href <href>      /coches|motos|patinetes/<slug> (OBLIGATORIO, filtro 10)
      --dato-impactante <txt>  Dato impactante del <title> (ej. "670 km de autonomía")
      --precio-title <txt>      Precio del <title> (ej. "~92.000 €")
      --out <ruta>             Destino del JSON (defecto: drafts/<slug>.blog.json)

  Validar (exit 0 = listo para publicar, exit 1 = bloqueado):
    node scripts/scaffold-blog.mjs --check <fichero.json>

  Emitir módulo TS (const "articulo", para src/data/maextro/blogs/<slug>.ts):
    node scripts/scaffold-blog.mjs --emit-ts <fichero.json> --const articulo > destino.ts

  Esta ayuda:
    node scripts/scaffold-blog.mjs --help
`.trim();

const args = parseArgs(process.argv);
if (args.help || args.h) {
  console.log(AYUDA_BLOG);
  process.exit(0);
}
if (args.check) process.exit(validar(leerJson(args.check)));
if (args["emit-ts"]) {
  const draft = leerJson(args["emit-ts"]);
  const constName = String(args.const || ("BLOG_" + String(draft.slug || "X").toUpperCase().replace(/[^A-Z0-9]+/g, "_")));
  process.stdout.write(emitirTs(draft, constName));
  process.exit(0);
}
generar(args);
