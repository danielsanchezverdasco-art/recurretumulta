// Genera las páginas estáticas de radares en dist/ (20/10/2026, bug 3 del borrador 2).
//
// PROBLEMA: /radares y /radares/<id>/ solo existían como rutas de cliente de la
// SPA. El pipeline de publicación compila con `npm run build` (sin prerender) y
// completa dist/ con el HTML en vivo (bajar_vivo); como la sección de radares
// nunca ha estado en vivo, no había ningún fichero que servir: cualquier visita
// directa a /radares/<id>/ caía en la 404 y la ficha nueva (RadarPage, con su
// mapa 2D y su Street View 3D) no se veía nunca.
//
// SOLUCIÓN: tras `vite build`, este script escribe en dist/ una página por ruta
// (índice + las 426 fichas) a partir del shell de la SPA (dist/index.html):
//   - <title>, description, canonical y og:title propios de cada radar: main.tsx
//     lee el canonical del HTML servido (__SEO_INICIAL__), así que la SPA monta
//     sabiendo qué página es, igual que con el HTML prerenderizado.
//   - JSON-LD BreadcrumbList idéntico al que genera RadarPage.
//   - Contenido estático dentro de #root (React lo sustituye al montar, como
//     hace con el HTML prerenderizado): en la ficha, la tabla de datos y los
//     DOS iframes exactos de RadarPage (mapa 2D `output=embed` y Street View
//     `output=svembed` con las coordenadas DGT); en el índice, el listado por
//     comunidades con enlace a cada ficha (la navegación «por provincias»).
// Si una ficha ya existe en dist/ con HTML renderizado de verdad (prerender de
// build:full), se respeta y no se sobrescribe.
//
// Uso: node scripts/gen-radares-html.mjs [distDir]   (por defecto "dist")
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, process.argv[2] || "dist");
const DOMAIN = "https://recurretumulta.online";

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const shellPath = join(DIST, "index.html");
if (!existsSync(shellPath)) {
  console.error(`[gen-radares-html] no existe ${shellPath}: ejecuta antes 'vite build'.`);
  process.exit(1);
}
const shell = readFileSync(shellPath, "utf8");
if (!shell.includes('<div id="root"></div>')) {
  console.error("[gen-radares-html] el shell no trae <div id=\"root\"></div>: abortando.");
  process.exit(1);
}

const indicePath = existsSync(join(DIST, "docs/radares/indice.json"))
  ? join(DIST, "docs/radares/indice.json")
  : join(ROOT, "docs/radares/indice.json");
const radares = JSON.parse(readFileSync(indicePath, "utf8"));
if (!Array.isArray(radares) || radares.length === 0) {
  console.error(`[gen-radares-html] índice de radares vacío o inválido: ${indicePath}`);
  process.exit(1);
}

// Mismos formatos que src/pages/RadarPage.tsx (título, descripción, iframes).
const fmtPk = (pk) => (pk == null || String(pk).trim() === "" ? "—" : String(pk).trim());
const limiteTxt = (r) =>
  r.velocidad_limite != null
    ? `${Number(r.velocidad_limite)} km/h`
    : "No publicado por la DGT (rige la señalización)";
const tituloFicha = (r) =>
  `Radar ${r.carretera}, pk ${fmtPk(r.pk)}${r.sentido ? ` (${r.sentido})` : ""} — ${r.municipio}, ${r.comunidad}`;
const descripcionFicha = (r) =>
  `Radar en la ${r.carretera}, pk ${fmtPk(r.pk)}${r.sentido ? ` (${r.sentido})` : ""}, ${r.municipio} (${r.comunidad}). Límite: ${limiteTxt(r)}. Datos oficiales ${r.comunidad === "Cataluña" ? "del SCT" : "de la DGT"}.`;
const mapSrc = (r) => `https://www.google.com/maps?q=${r.lat},${r.lon}&z=15&output=embed`;

// ── P1-2 (auditoría Google): el texto único de cada ficha (docs/radares/
// contenido/<id>.md) también en el HTML estático, no solo pintado en cliente.
// Conversor md→HTML del subconjunto usado en esos .md; se incrusta desde el
// bloque «Cómo lo verificamos» en adelante, sin el título/meta (la página ya
// los trae) y sin los iframes del .md (la ficha ya incluye mapa y Street View).
function mdInline(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}
function textoFichaHtml(id) {
  const p = join(ROOT, "docs", "radares", "contenido", `${id}.md`);
  if (!existsSync(p)) return "";
  const lineas = readFileSync(p, "utf8").split("\n");
  const ini = lineas.findIndex((l) => l.startsWith("> **Cómo lo verificamos"));
  if (ini < 0) return "";
  const out = [];
  let lista = false, cita = [];
  const flushCita = () => {
    if (cita.length) { out.push(`<blockquote><p>${mdInline(cita.join(" "))}</p></blockquote>`); cita = []; }
  };
  const flushLista = () => { if (lista) { out.push("</ul>"); lista = false; } };
  for (const l of lineas.slice(ini)) {
    const t = l.trim();
    if (t.startsWith("<iframe") || t.startsWith("*Mapa:") || t.startsWith("*Vista 3D")) continue;
    if (t.startsWith(">")) { flushLista(); cita.push(t.replace(/^>\s?/, "")); continue; }
    flushCita();
    if (t.startsWith("## ")) { flushLista(); out.push(`<h2>${mdInline(t.slice(3))}</h2>`); }
    else if (t.startsWith("- ")) { if (!lista) { out.push("<ul>"); lista = true; } out.push(`<li>${mdInline(t.slice(2))}</li>`); }
    else if (t === "") { flushLista(); }
    else { flushLista(); out.push(`<p>${mdInline(t)}</p>`); }
  }
  flushCita(); flushLista();
  return out.join("\n      ");
}
const svSrc = (r) =>
  `https://maps.google.com/maps?q=&layer=c&cbll=${r.lat},${r.lon}&cbp=11,0,0,0,0&output=svembed`;
const svExterno = (r) =>
  `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${r.lat},${r.lon}`;

function pagina({ title, description, canonical, jsonLd, contenido }) {
  let html = shell;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  // El shell crudo de vite NO trae canonical (lo inyecta apply-seo en el
  // postproceso sobre las páginas prerenderizadas): si no hay etiqueta que
  // sustituir, se inserta antes de </head>. Ídem description y og:title.
  if (/<link rel="canonical"[^>]*>/.test(html)) {
    html = html.replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${esc(canonical)}"/>`
    );
  } else {
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${esc(canonical)}"/>\n</head>`
    );
  }
  if (/<meta name="description"[^>]*>/.test(html)) {
    html = html.replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${esc(description)}" />`
    );
  } else {
    html = html.replace(
      "</head>",
      `<meta name="description" content="${esc(description)}" />\n</head>`
    );
  }
  if (/<meta property="og:title"[^>]*>/.test(html)) {
    html = html.replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${esc(title)}" />`
    );
  } else {
    html = html.replace(
      "</head>",
      `<meta property="og:title" content="${esc(title)}" />\n</head>`
    );
  }
  if (jsonLd) {
    const ld = `<script type="application/ld+json" data-seo-id="radares">${JSON.stringify(jsonLd).replace(/<\//g, "<\\/")}</script>`;
    html = html.replace("</head>", `${ld}\n</head>`);
  }
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><!-- gen-radares-html -->${contenido}</div>`
  );
  return html;
}

function escribir(ruta, html) {
  const dest = join(DIST, ruta, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
  return dest;
}

// ¿Ya hay una ficha prerenderizada de verdad? (build:full) → no tocarla.
// Las páginas generadas por este script llevan su marca y SÍ se regeneran.
function esPrerenderReal(ruta) {
  const f = join(DIST, ruta, "index.html");
  if (!existsSync(f)) return false;
  const h = readFileSync(f, "utf8");
  if (h.includes("gen-radares-html") || h.includes('data-seo-id="radares"')) return false;
  return h.includes("output=embed") && h.length > shell.length;
}

// ── Índice /radares/: listado por comunidades («provincias») con enlace a cada ficha.
const ancla = (c) =>
  "c-" + c.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-");
const porComunidad = new Map();
for (const r of radares) {
  if (!porComunidad.has(r.comunidad)) porComunidad.set(r.comunidad, []);
  porComunidad.get(r.comunidad).push(r);
}
const comunidades = [...porComunidad.entries()].sort((a, b) =>
  a[0].localeCompare(b[0], "es")
);
const contenidoIndice = `
<div style="max-width:72rem;margin:0 auto;padding:2rem 1rem;font-family:system-ui,sans-serif">
  <nav aria-label="Migas de pan" style="font-size:.8rem;color:#64748b">
    <a href="/">Inicio</a> / <span>Radares</span>
  </nav>
  <h1>Radares de tráfico en España por comunidad autónoma</h1>
  <p>El mapa de radares fijos en España (DGT y Servei Català de Trànsit), agrupado por comunidad autónoma:
  carretera, punto kilométrico, sentido, tipo de radar y límite de velocidad.
  Datos oficiales verificados: la ausencia de un radar en esta lista no
  significa que no exista. En total, ${radares.length} radares en
  ${comunidades.length} comunidades.</p>
  ${comunidades
    .map(([comunidad, items]) => {
      const ordenados = [...items].sort((a, b) =>
        `${a.carretera} ${a.pk ?? ""}`.localeCompare(`${b.carretera} ${b.pk ?? ""}`, "es")
      );
      return `<section id="${ancla(comunidad)}">
    <h2>Radares en ${esc(comunidad)} (${ordenados.length})</h2>
    <ul>
      ${ordenados
        .map(
          (r) =>
            `<li><a href="/radares/${esc(r.id_unico)}/">Radar ${esc(r.carretera)} pk ${esc(fmtPk(r.pk))} — ${esc(r.municipio ?? "")} · ${esc(limiteTxt(r))}</a></li>`
        )
        .join("\n      ")}
    </ul>
  </section>`;
    })
    .join("\n  ")}
</div>`;

const jsonLdIndice = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${DOMAIN}/radares#pagina`,
      name: "Mapa de radares de tráfico por comunidad autónoma",
      description:
        "Índice de radares fijos en España (DGT y SCT), agrupados por comunidad autónoma: carretera, punto kilométrico, sentido, tipo y límite de velocidad de cada radar.",
      url: `${DOMAIN}/radares`,
      inLanguage: "es-ES",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: "Radares", item: `${DOMAIN}/radares/` },
      ],
    },
  ],
};

let escritas = 0;
let respetadas = 0;
if (esPrerenderReal("radares")) {
  respetadas++;
} else {
  escribir(
    "radares",
    pagina({
      title: "Radares de tráfico en España por comunidad autónoma",
      description:
        "Mapa de radares fijos en España (DGT y SCT) agrupados por comunidad autónoma: carretera, punto kilométrico, sentido, tipo y límite de velocidad de cada radar, con datos oficiales verificados.",
      canonical: `${DOMAIN}/radares/`,
      jsonLd: jsonLdIndice,
      contenido: contenidoIndice,
    })
  );
  escritas++;
}

// ── Fichas /radares/<id>/: datos + mapa 2D + Street View 3D (iframes de RadarPage).
for (const r of radares) {
  const ruta = join("radares", r.id_unico);
  if (esPrerenderReal(ruta)) {
    respetadas++;
    continue;
  }
  const titulo = tituloFicha(r);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${DOMAIN}/` },
          { "@type": "ListItem", position: 2, name: "Radares", item: `${DOMAIN}/radares/` },
          { "@type": "ListItem", position: 3, name: r.comunidad },
          {
            "@type": "ListItem",
            position: 4,
            name: `Radar ${r.carretera} pk ${fmtPk(r.pk)}`,
            item: `${DOMAIN}/radares/${r.id_unico}/`,
          },
        ],
      },
    ],
  };
  const conCoords = typeof r.lat === "number" && typeof r.lon === "number";
  const contenido = `
<div style="background:#f8fafc;color:#0f172a;font-family:system-ui,sans-serif;min-height:100vh">
  <main style="max-width:48rem;margin:0 auto;padding:2rem 1rem">
    <nav aria-label="Migas de pan" style="font-size:.8rem;color:#64748b">
      <a href="/">Inicio</a> / <a href="/radares/">Radares</a> /
      <span>${esc(r.comunidad)}</span> / <span>Radar ${esc(r.carretera)} pk ${esc(fmtPk(r.pk))}</span>
    </nav>
    <article>
      <h1>${esc(titulo)}</h1>
      <dl>
        <div><dt>Carretera</dt><dd>${esc(r.carretera)}</dd></div>
        <div><dt>Punto kilométrico</dt><dd>${esc(fmtPk(r.pk))}</dd></div>
        <div><dt>Sentido</dt><dd>${esc(r.sentido ?? (r.comunidad === "Cataluña" ? "No publicado por el SCT" : "—"))}</dd></div>
        <div><dt>Tipo de radar</dt><dd>${esc(r.tipo ?? "Radar")}</dd></div>
        <div><dt>Límite de velocidad</dt><dd>${esc(limiteTxt(r))}</dd></div>
        <div><dt>Municipio</dt><dd>${esc(r.municipio ?? "—")}</dd></div>
        <div><dt>Comunidad</dt><dd>${esc(r.comunidad)}</dd></div>
      </dl>
      ${
        conCoords
          ? `<section aria-label="Mapa de ubicación del radar">
        <h2>Mapa de ubicación</h2>
        <iframe title="Mapa: radar ${esc(r.id_unico)}" src="${mapSrc(r)}" width="100%" height="380" style="border:0" loading="lazy" allowfullscreen></iframe>
        <p style="font-size:.75rem;color:#64748b">Ubicación aproximada según las coordenadas oficiales (WGS84): ${r.lat}, ${r.lon}.</p>
      </section>
      <section aria-label="Vista Street View del entorno del radar">
        <h2>Street View 3D</h2>
        <iframe title="Street View: radar ${esc(r.id_unico)}" src="${svSrc(r)}" width="100%" height="380" style="border:0" loading="lazy" allowfullscreen></iframe>
        <p><a href="${svExterno(r)}" target="_blank" rel="noopener noreferrer">Ver en Google Street View</a></p>
      </section>`
          : `<p>La DGT no publica coordenadas para este radar; consulta la señalización de la vía.</p>`
      }
      ${textoFichaHtml(r.id_unico)}
    </article>
  </main>
</div>`;
  escribir(
    ruta,
    pagina({
      title: titulo,
      description: descripcionFicha(r),
      canonical: `${DOMAIN}/radares/${r.id_unico}/`,
      jsonLd,
      contenido,
    })
  );
  escritas++;
}

console.log(
  `[gen-radares-html] ${escritas} páginas escritas (${radares.length} radares + índice), ${respetadas} prerenderizadas respetadas.`
);
