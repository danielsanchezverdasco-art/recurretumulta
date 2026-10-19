// Genera los datos estáticos de la audiencia (18/10/2026):
//   src/lib/audiencia/nombres-<tipo>.generated.json = {slug: [nombre, img|null]}
//     nombre legible para la página «Favoritos del mes» (solo fichas con ruta real).
//   src/lib/audiencia/rivales/<tipo>-<letra>.generated.json = {slug: [rivalSlug, rivalNombre, rivalPrecio, rivalImg, precioPropio]}
//     rival natural para el «Duelo»: mismo tipo y segmento, precio cercano (±35 %),
//      otra marca si es posible. Sin precio o sin rival razonable → sin duelo.
// Los votos y visitas NO están aquí: viven en Convex y se leen en cliente.
// Uso: node scripts/audiencia/gen.mjs (se ejecuta en `npm run build`).
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const LIB = join(ROOT, "src", "lib");
const OUT = join(LIB, "audiencia");
const TMP = join(ROOT, "node_modules", ".cache", "audiencia-gen.mjs");

const entry = `
export { COCHES_COMPARADOR } from "${join(LIB, "comparador-coches-data.ts")}";
export { MOTOS_COMPARADOR } from "${join(LIB, "comparador-motos-data.ts")}";
export { PATINETES_COMPARADOR } from "${join(LIB, "comparador-patinetes-data.ts")}";
`;
mkdirSync(dirname(TMP), { recursive: true });
await build({
  stdin: { contents: entry, resolveDir: ROOT, loader: "ts" },
  bundle: true, platform: "node", format: "esm", outfile: TMP, logLevel: "error",
  alias: { "@": join(ROOT, "src") },
  // Los .json importados en datos se resuelven por esbuild; los assets no se usan.
  loader: { ".webp": "empty", ".png": "empty", ".jpg": "empty", ".svg": "empty", ".css": "empty" },
});
const mod = await import(pathToFileURL(TMP).href + `?t=${Date.now()}`);
rmSync(TMP, { force: true });

const slugs = (f) => new Set(readFileSync(join(ROOT, "scripts", f), "utf8").split("\n").map((s) => s.trim()).filter(Boolean));
const NOINDEX = new Set(JSON.parse(readFileSync(join(LIB, "noindex.generated.json"), "utf8")));

const limpia = (s) => String(s ?? "").replace(/:+$/, "").replace(/\s+/g, " ").trim();
const precioOk = (p) => (typeof p === "number" && p > 0 ? p : null);

function generar(tipo, items, rutas, f) {
  const vistos = new Set();
  const lista = [];
  for (const it of items) {
    if (!it?.id || vistos.has(it.id) || !rutas.has(it.id)) continue;
    vistos.add(it.id);
    lista.push({ id: it.id, ...f(it) });
  }
  const n = {};
  for (const x of lista) n[x.id] = [x.nombre, x.precio, x.img];
  const r = {};
  const elegibles = lista.filter((x) => x.precio != null && !NOINDEX.has(`/${tipo}/${x.id}/`));
  for (const x of lista) {
    if (x.precio == null) continue;
    let mejor = null;
    let mejorScore = Infinity;
    for (const y of elegibles) {
      if (y.id === x.id || y.seg !== x.seg) continue;
      if (y.nombre.toLowerCase() === x.nombre.toLowerCase()) continue; // otra versión del mismo modelo
      const ratio = Math.abs(Math.log(y.precio / x.precio));
      if (ratio > Math.log(1.35)) continue;
      let score = ratio;
      if (y.marca === x.marca) score += 0.5; // mejor un rival de otra marca
      if (x.sub != null && y.sub != null && x.sub !== y.sub) score += 0.15; // p. ej. eléctrico vs. gasolina
      if (score < mejorScore) { mejorScore = score; mejor = y; }
    }
    if (mejor) r[x.id] = mejor.id;
  }
  // Nombres (solo para «Favoritos del mes», carga diferida en esa página).
  const nombres = {};
  for (const x of lista) nombres[x.id] = [x.nombre, x.img];
  mkdirSync(join(OUT, "rivales"), { recursive: true });
  writeFileSync(join(OUT, `nombres-${tipo}.generated.json`), JSON.stringify(nombres));
  // Rivales partidos por primera letra: cada ficha descarga solo ~unos KB.
  const porLetra = {};
  for (const [a, b] of Object.entries(r)) {
    const l = /^[a-z]/.test(a[0]) ? a[0] : "0";
    (porLetra[l] ??= {})[a] = [b, n[b][0], n[b][1], n[b][2], n[a][1]];
  }
  for (const l of "abcdefghijklmnopqrstuvwxyz0") {
    writeFileSync(join(OUT, "rivales", `${tipo}-${l}.generated.json`), JSON.stringify(porLetra[l] ?? {}));
  }
  console.log(`OK audiencia/${tipo}: ${lista.length} fichas, ${Object.keys(r).length} con rival`);
}

generar("coches", mod.COCHES_COMPARADOR, slugs("coches-slugs.txt"), (c) => ({
  nombre: limpia(`${c.marca} ${c.modelo}`), marca: c.marca, precio: precioOk(c.precioDesde),
  img: c.imagenOficial || c.imagen || null, seg: c.categoria || "?", sub: c.tipo ?? null,
}));
// Motos: segmento = categoría + tramo de carnet (cilindrada/potencia) para no enfrentar una 125 con una 1000.
const tramoMoto = (m) => {
  const cc = m.cilindradaCc ?? null; const cv = m.potenciaCv ?? null;
  if (cc != null && cc <= 125) return "A1"; if (cv != null && cv <= 15) return "A1";
  if (cv != null && cv <= 47.6) return "A2"; if (cc != null && cc <= 500) return "A2";
  return "A";
};
generar("motos", mod.MOTOS_COMPARADOR, slugs("motos-slugs.txt"), (m) => ({
  nombre: limpia(`${m.marca} ${m.modelo}`), marca: m.marca, precio: precioOk(m.precioDesde),
  img: m.imagen || null, seg: `${m.categoria || "?"}|${tramoMoto(m)}`, sub: null,
}));
// Patinetes: sin categoría en los datos; segmento = certificado DGT (sí/no).
generar("patinetes", mod.PATINETES_COMPARADOR, slugs("patinetes-slugs.txt"), (p) => ({
  nombre: limpia(`${p.marca} ${p.modelo}`), marca: p.marca, precio: precioOk(p.precioEur),
  img: p.fotoPendiente ? null : p.foto || null, seg: p.certificadoDgt ? "dgt" : "nodgt", sub: null,
}));
