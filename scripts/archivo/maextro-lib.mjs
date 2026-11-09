// maextro-lib.mjs — utilidades de INTEGRACIÓN de páginas Maextro V800.
// La usan scripts/maextro-registro.mjs y los workflows publicar-ficha.sh /
// publicar-blog.sh. La VALIDACIÓN de contenido vive en --check de los
// scaffolds (scripts/scaffold-ficha.mjs / scaffold-blog.mjs); aquí solo hay:
//
//  - Algoritmos de <title> V800 (ESPEJO de src/components/maextro/tipos.ts:
//    si cambias la plantilla allí, cambia aquí también).
//  - Registro de slugs en src/data/maextro/registro.ts (import perezoso).
//
// Sin dependencias: solo node:fs y node:path.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, "..");
export const REGISTRO_TS = path.join(REPO_ROOT, "src", "data", "maextro", "registro.ts");
export const FICHAS_DIR = path.join(REPO_ROOT, "src", "data", "maextro", "fichas");
export const BLOGS_DIR = path.join(REPO_ROOT, "src", "data", "maextro", "blogs");

// ── Títulos V800 (espejo de src/components/maextro/tipos.ts) ───────────────

export const TITLE_MAX = 60;

export function truncar60(s) {
  if (s.length <= TITLE_MAX) return s;
  const cortado = s.slice(0, TITLE_MAX - 1);
  const ultimoEspacio = cortado.lastIndexOf(" ");
  return (ultimoEspacio > TITLE_MAX - 20 ? cortado.slice(0, ultimoEspacio) : cortado).trimEnd();
}

/** Fichas: "[Modelo]: [dato clave] [Ficha AÑO]" — sin marca, ≤60. */
export function tituloFichaMaextro(nombreCompleto, datoClave, ano) {
  const candidatos = [
    `${nombreCompleto}: ${datoClave} [Ficha ${ano}]`,
    `${nombreCompleto}: ${datoClave} (${ano})`,
    `${nombreCompleto} (${ano})`,
  ];
  for (const c of candidatos) if (c.length <= TITLE_MAX) return c;
  return truncar60(candidatos[candidatos.length - 1]);
}

/** Blogs: "[Modelo]: [dato impactante] por [precio]" — sin marca, ≤60. */
export function tituloBlogMaextro(nombreCompleto, datoImpactante, precioTitle) {
  const candidatos = [
    `${nombreCompleto}: ${datoImpactante} por ${precioTitle}`,
    `${nombreCompleto}: ${datoImpactante}`,
    `${nombreCompleto} por ${precioTitle}`,
  ];
  for (const c of candidatos) if (c.length <= TITLE_MAX) return c;
  return truncar60(candidatos[candidatos.length - 1]);
}

// ── Registro de slugs ─────────────────────────────────────────────────────
// Inserta la entrada lazy en src/data/maextro/registro.ts (idempotente).
// El import() dinámico mete cada página en su propio chunk (rendimiento).

export function registrarEnRegistro(slug, tipo) {
  // tipo: "ficha" | "blog"
  const esFicha = tipo === "ficha";
  const marca = esFicha ? "// __SCAFFOLD_FICHAS__" : "// __SCAFFOLD_BLOGS__";
  const mapa = esFicha ? "FICHAS_MAEXTRO" : "BLOGS_MAEXTRO";
  const subdir = esFicha ? "fichas" : "blogs";
  const nombreConst = esFicha ? "ficha" : "articulo";

  if (!fs.existsSync(REGISTRO_TS)) {
    return { ok: false, mensaje: `no existe ${path.relative(REPO_ROOT, REGISTRO_TS)}` };
  }
  let texto = fs.readFileSync(REGISTRO_TS, "utf8");
  if (!texto.includes(marca)) {
    return { ok: false, mensaje: `registro.ts sin marca ${marca}; no se pudo registrar` };
  }
  if (texto.includes(`"${slug}": () => import(`)) {
    return { ok: true, mensaje: `slug "${slug}" ya estaba registrado en ${mapa}` };
  }
  const entrada = `  "${slug}": () => import("./${subdir}/${slug}.ts").then((m) => m.${nombreConst}),`;
  // Reemplazo anclado a línea completa: el marcador también aparece en
  // comentarios de este fichero y no debe tocarse.
  const reMarca = new RegExp(`^${marca}$`, "m");
  if (!reMarca.test(texto)) {
    return { ok: false, mensaje: `registro.ts sin marca ${marca} en línea propia; no se pudo registrar` };
  }
  texto = texto.replace(reMarca, `${entrada}\n${marca}`);
  fs.writeFileSync(REGISTRO_TS, texto);
  return { ok: true, mensaje: `registrado "${slug}" en ${mapa}` };
}

/** Elimina la entrada del slug del registro (idempotente). */
export function quitarDelRegistro(slug) {
  if (!fs.existsSync(REGISTRO_TS)) return { ok: false, mensaje: "no existe registro.ts" };
  const texto = fs.readFileSync(REGISTRO_TS, "utf8");
  // La entrada es una sola línea: `  "slug": () => import(...).then(...),`
  const re = new RegExp(`^\\s*"${slug}": \\(\\) => import\\(.*\\),\\s*$\\n?`, "m");
  if (!re.test(texto)) return { ok: true, mensaje: `slug "${slug}" no estaba registrado` };
  fs.writeFileSync(REGISTRO_TS, texto.replace(re, ""));
  return { ok: true, mensaje: `eliminado "${slug}" del registro` };
}

/** Lista los slugs registrados. */
export function listarRegistro() {
  if (!fs.existsSync(REGISTRO_TS)) return { fichas: [], blogs: [] };
  const texto = fs.readFileSync(REGISTRO_TS, "utf8");
  const fichas = [...texto.matchAll(/"([^"]+)": \(\) => import\("\.\/fichas\//g)].map((m) => m[1]);
  const blogs = [...texto.matchAll(/"([^"]+)": \(\) => import\("\.\/blogs\//g)].map((m) => m[1]);
  return { fichas, blogs };
}
