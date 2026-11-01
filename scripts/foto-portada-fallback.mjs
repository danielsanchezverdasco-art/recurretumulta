// 01/11/2026 — foto de portada de TARJETA cuando el post no trae <img> propia (o su foto es placeholder/404).
// Antes la tarjeta caía al LOGO de RecurreTuMulta (o al og-recurretumulta-online.png) en vez de una foto.
// Aquí solo se elige una foto REAL con fuente: un fichero public/media/<slug>-*.webp que figure en
// public/media-creditos.md (fuente + autor + licencia) y no esté en fotos-malas (placeholder / 404).
// Sin foto con fuente => "" (la tarjeta no pinta recuadro: regla de Daniel «sin foto no hay recuadro»; NUNCA logo, NUNCA IA).
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const MEDIA = join(RAIZ, "public", "media");
let _cred = null, _malas = null, _ficheros = null;
function creditos() {
  if (_cred) return _cred;
  _cred = new Map();
  const p = join(RAIZ, "public", "media-creditos.md");
  if (!existsSync(p)) return _cred;
  for (const l of readFileSync(p, "utf8").split("\n")) {
    const m = l.match(/^\|\s*(\/media\/[^\s|]+)\s*\|\s*([^|]*)\|\s*([^|]*)\|\s*([^|]*)\|/);
    if (m) _cred.set(m[1], { fuente: m[2].trim(), autor: m[3].trim(), licencia: m[4].trim() });
  }
  return _cred;
}
export function fotosMalas() {
  if (_malas) return _malas;
  const t = readFileSync(join(RAIZ, "src", "lib", "fotos-malas.generated.ts"), "utf8");
  const m = t.match(/FOTOS_MALAS_TXT = "((?:[^"\\]|\\.)*)";/);
  _malas = new Set(m ? JSON.parse('"' + m[1] + '"').split("\n") : []);
  return _malas;
}
function ficheros() { return (_ficheros ??= readdirSync(MEDIA)); }
const VARIANTE = /-(480w|828w|1200w|card)\.webp$/;
const PREF = (f) => (/-hunt1\.webp$|-1\.webp$/.test(f) ? 0 : /-oficial\.webp$/.test(f) ? 1 : /-hero\.webp$/.test(f) ? 2 : 3);
// slug del post = id de la ficha (convención de los radar/ficha). Devuelve { src, alt } o null.
export function fotoRealPorSlug(slug, titulo) {
  const c = creditos(), malas = fotosMalas();
  const cand = ficheros()
    .filter((f) => f.startsWith(slug + "-") && f.endsWith(".webp") && !VARIANTE.test(f) && !f.slice(slug.length + 1).includes("/"))
    .filter((f) => /^-?(hunt\d+|oficial|hero|interior|\d+)\.webp$/.test(f.slice(slug.length)) )
    .filter((f) => c.has("/media/" + f) && !malas.has("/media/" + f))
    .sort((a, b) => PREF(a) - PREF(b) || a.localeCompare(b));
  if (!cand.length) return null;
  const src = "/media/" + cand[0], cr = c.get(src);
  const modelo = (titulo || slug).split(":")[0].trim();
  return { src, alt: `${modelo} (foto: ${cr.autor || "ver créditos"})` };
}
// ¿la foto del post es utilizable como portada? (no placeholder / no 404 conocido)
export function fotoValida(src) { return !!src && !fotosMalas().has(src); }
