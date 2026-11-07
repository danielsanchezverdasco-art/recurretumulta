// Comprobación compartida por prerender.mjs y prerender-resume.mjs.
// Una ruta solo está hecha si el HTML es de ESA ruta y apunta al bundle de ESTE build.
// Un HTML viejo (canonical correcto, pero assets/index-*.js que ya no existe) no cuenta.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export function expectedCanonical(base, route) {
  const b = String(base || "https://recurretumulta.online").replace(/\/+$/, "");
  if (route === "/") return `${b}/`;
  const r = `/${String(route).replace(/^\/+|\/+$/g, "")}`;
  return `${b}${r}/`;
}

export function getCanonical(html) {
  const tag = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i);
  if (!tag) return null;
  const href = tag[0].match(/\bhref=["']([^"']+)["']/i);
  return href ? href[1] : null;
}

export function getTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1] : null;
}

export function assetRefs(html) {
  const out = [];
  const seen = new Set();
  const re = /(?:src|href)=["'](\/assets\/[^"']+\.(?:js|css))["']/g;
  let m;
  while ((m = re.exec(html))) {
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      out.push(m[1]);
    }
  }
  return out;
}

export function readEntryAssets(distDir) {
  const shellPath = join(distDir, "index.html");
  let refs = [];
  if (existsSync(shellPath)) refs = assetRefs(readFileSync(shellPath, "utf8"));
  if (refs.length === 0) {
    const assets = join(distDir, "assets");
    if (existsSync(assets)) {
      const js = readdirSync(assets).filter((f) => /^index-.*\.js$/.test(f)).sort();
      const css = readdirSync(assets).filter((f) => /^index-.*\.css$/.test(f)).sort();
      refs = [...js.slice(0, 1).map((f) => `/assets/${f}`), ...css.slice(0, 1).map((f) => `/assets/${f}`)];
    }
  }
  return refs;
}

export function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}

/**
 * @returns {{ok:boolean, reasons:string[], canonical:string|null, sha256:string, bytes:number, assets:string[]}}
 */
export function evaluateHtml({ html, route, canonicalBase, distDir, shellTitle, entryAssets }) {
  const reasons = [];
  const text = html || "";
  if (text.length <= 2000) reasons.push("corto");
  if (!text.includes("</html>")) reasons.push("sin_cierre");
  const canonical = getCanonical(text);
  const expected = expectedCanonical(canonicalBase, route);
  const title = getTitle(text);
  const canonicalAjena =
    !!canonical &&
    canonical.startsWith(`${String(canonicalBase || "https://recurretumulta.online").replace(/\/+$/, "")}/`) &&
    !!title &&
    !!shellTitle &&
    title !== shellTitle;
  // La ruta tiene que haber pintado SU página. Algunos posts declaran a propósito
  // la canonical de su ficha: eso no es el shell, y no se puede exigir que coincida.
  if (canonical !== expected && !canonicalAjena) reasons.push("canonical");
  if (text.includes("data-pageloader")) reasons.push("pageloader");
  if (text.includes("data-editorial-cargando")) reasons.push("editorial_cargando");
  if (text.includes("Algo salió mal")) reasons.push("error_boundary");
  if (text.includes("Radar no encontrado")) reasons.push("radar_no_encontrado");
  const assets = assetRefs(text);
  const missing = assets.filter((rel) => !existsSync(join(distDir, rel.replace(/^\//, ""))));
  if (missing.length) reasons.push(`bundle_ausente:${missing.join(",")}`);
  const entryJs = (entryAssets || []).filter((a) => a.endsWith(".js"));
  if (entryJs.length && !entryJs.some((a) => assets.includes(a))) reasons.push("bundle_no_es_el_del_build");
  if (route !== "/" && shellTitle) {
    const title = getTitle(text);
    if (title && title === shellTitle) reasons.push("shell_title");
  }
  return {
    ok: reasons.length === 0,
    reasons,
    canonical,
    sha256: sha256(text),
    bytes: text.length,
    assets,
  };
}
