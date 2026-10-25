// Extrae de src/lib/comparador-{coches,motos,patinetes}-*.ts el precio actual de
// cada ficha (mismo criterio que scripts/gen-data-loaders.mjs: primer fichero que
// define el id, en orden alfabético). Lo usan seed.mjs y check.mjs.
// Para una sección nueva (p. ej. caravanas) basta con añadirla a SECCIONES.
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const LIB = join(ROOT, "src", "lib");

export const SECCIONES = [
  { categoria: "coches", re: /^comparador-coches-.*\.ts$/, excl: "comparador-coches-data.ts", campos: ["precioDesde"] },
  { categoria: "motos", re: /^comparador-motos-.*\.ts$/, excl: "comparador-motos-data.ts", campos: ["precioDesde", "precioEur"] },
  { categoria: "patinetes", re: /^comparador-patinetes-.*\.ts$/, excl: "comparador-patinetes-data.ts", campos: ["precioEur", "precioDesde"] },
  { categoria: "caravanas", re: /^comparador-caravanas-.*\.ts$/, excl: "comparador-caravanas-data.ts", campos: ["precioDesde", "precioEur"] },
];

/** @returns {Map<string, {slug, categoria, precio, aprox, file, line}>} */
export function leerFichas() {
  const out = new Map();
  const ficheros = readdirSync(LIB).sort();
  for (const s of SECCIONES) {
    for (const f of ficheros.filter((x) => s.re.test(x) && x !== s.excl)) {
      const text = readFileSync(join(LIB, f), "utf-8");
      const re = /\bid:\s*"([^"]+)"/g;
      const ids = [];
      let m;
      while ((m = re.exec(text)) !== null) ids.push({ slug: m[1], idx: m.index });
      for (let i = 0; i < ids.length; i++) {
        const { slug, idx } = ids[i];
        if (out.has(slug)) continue;
        const end = i + 1 < ids.length ? ids[i + 1].idx : text.length;
        const block = text.slice(idx, end);
        let precio = null, off = -1;
        for (const c of s.campos) {
          const pm = new RegExp(`["']?${c}["']?\\s*:\\s*(null|[0-9][0-9_.]*)`).exec(block);
          if (pm) { precio = pm[1] === "null" ? null : Number(pm[1].replace(/_/g, "")); off = pm.index; break; }
        }
        if (off < 0) continue; // no es una ficha (objeto anidado con id)
        const am = /["']?aprox["']?\s*:\s*\[([^\]]*)\]/.exec(block);
        const aprox = !!am && /precio(Desde|Eur)/.test(am[1]);
        const line = text.slice(0, idx + off).split("\n").length;
        out.set(slug, { slug, categoria: s.categoria, precio, aprox, file: `src/lib/${f}`, line });
      }
    }
  }
  return out;
}

/** Fecha (yyyy-mm-dd, Europe/Madrid) del último commit que fijó cada línea de precio (git blame). */
export function fechasPrecio(fichas) {
  const porFichero = new Map();
  for (const x of fichas.values()) {
    if (!porFichero.has(x.file)) porFichero.set(x.file, []);
    porFichero.get(x.file).push(x);
  }
  const res = new Map();
  const fmt = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Madrid" });
  for (const [file, lista] of porFichero) {
    let porc;
    try {
      porc = execFileSync("git", ["blame", "--line-porcelain", "--", file], { cwd: ROOT, maxBuffer: 1 << 30 }).toString();
    } catch { continue; }
    const tiempos = []; // índice 1-based de línea → epoch
    let cur = null, n = 0;
    const commitT = new Map();
    for (const l of porc.split("\n")) {
      if (/^[0-9a-f]{40} /.test(l)) { cur = l.slice(0, 40); continue; }
      if (l.startsWith("committer-time ")) commitT.set(cur, Number(l.slice(15)));
      else if (l.startsWith("\t")) { n++; tiempos[n] = cur; }
    }
    for (const x of lista) {
      const c = tiempos[x.line];
      const t = c && !/^0+$/.test(c) ? commitT.get(c) : null;
      res.set(x.slug, t ? fmt.format(new Date(t * 1000)) : null);
    }
  }
  return res;
}
