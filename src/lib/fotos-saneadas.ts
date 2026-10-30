// 31/10/2026 — Regla «no se publica ninguna foto placeholder». Quita de las fichas las fotos que no existen o
// son la imagen «Foto real próximamente» y promueve otra foto real DEL MISMO modelo (interior oficial o galería).
// Si no queda ninguna, la ficha queda sin foto: la plantilla muestra el hueco, el postproceso la marca noindex
// y la saca del sitemap (scripts/postfix-foto-pendiente.py). Nunca se usa foto de otro modelo ni de IA.
import { FOTOS_MALAS_TXT } from "./fotos-malas.generated.ts";

const MALAS = new Set(FOTOS_MALAS_TXT.split("\n"));
// Galería: también se quita todo item con src vacío (era <img src=""> en la ficha).
const malaG = (g: unknown): boolean => { const s = srcDe(g); return !s || MALAS.has(s); };
export const fotoMala = (p?: string | null): boolean => !!p && MALAS.has(p);
const srcDe = (g: unknown): string => (typeof g === "string" ? g : (g as { src?: string } | null)?.src ?? "");

/** Devuelve la misma ficha con fotos saneadas. `campos`: nombres de portada y galería en cada tipo. */
export function sanearCoche<T extends { imagen?: any; imagenOficial?: any; imagenInteriorOficial?: any; galeria?: any[] }>(e: T): T {
  const algunaMala = fotoMala(e.imagen) || fotoMala(e.imagenOficial) || fotoMala(e.imagenInteriorOficial) ||
    (e.galeria ?? []).some(malaG);
  if (!algunaMala) return e;
  const r: any = { ...e };
  if (fotoMala(r.imagenOficial)) r.imagenOficial = undefined;
  if (fotoMala(r.imagen)) r.imagen = "";
  if (fotoMala(r.imagenInteriorOficial)) r.imagenInteriorOficial = undefined;
  r.galeria = (e.galeria ?? []).filter((g) => !malaG(g));
  if (!r.imagenOficial && !r.imagen) {
    const interior = r.imagenInteriorOficial as string | undefined;
    if (interior) { r.imagen = interior; r.imagenInteriorOficial = undefined; }
    else if (r.galeria.length) { r.imagen = srcDe(r.galeria[0]); r.galeria = r.galeria.slice(1); }
  }
  return r as T;
}

export function sanearMoto<T extends { imagen?: any; galeria?: any[] }>(e: T): T {
  if (!fotoMala(e.imagen) && !(e.galeria ?? []).some(malaG)) return e;
  const r: any = { ...e };
  r.galeria = (e.galeria ?? []).filter((g) => !malaG(g));
  if (fotoMala(r.imagen)) {
    if (r.galeria.length) { r.imagen = srcDe(r.galeria[0]); r.galeria = r.galeria.slice(1); } else r.imagen = null;
  }
  return r as T;
}

export function sanearPatinete<T extends { foto?: any; fotoPendiente?: boolean; galeria?: any[] }>(e: T): T {
  if (!fotoMala(e.foto) && !(e.galeria ?? []).some(malaG)) return e;
  const r: any = { ...e };
  r.galeria = (e.galeria ?? []).filter((g) => !malaG(g));
  if (fotoMala(r.foto)) {
    if (r.galeria.length) { r.foto = srcDe(r.galeria[0]); r.galeria = r.galeria.slice(1); }
    else { r.foto = ""; r.fotoPendiente = true; }
  }
  return r as T;
}

const IMG_SRC = /<img\b[^>]*?\bsrc=("[^"]*"|'[^']*'|[^\s>]+)[^>]*>/gi;
const cache = new WeakMap<object, any>();
/** Quita de un artículo las <img> cuya foto no existe o es el placeholder (y su <figure> si queda vacía), para que la
 *  portada del artículo (= primera imagen) sea siempre una foto real. */
export function limpiarFotosHtml(html: string): string {
  if (!html || !html.includes("/media/")) return html;
  const esMala = (tag: string) => {
    const m = tag.match(/\bsrc=("[^"]*"|'[^']*'|[^\s>]+)/i);
    return !!m && fotoMala(m[1].replace(/^["']|["']$/g, "").replace(/\\"/g, ""));
  };
  let out = html.replace(/<figure\b[^>]*>\s*(<img\b[^>]*>)\s*(?:<figcaption[\s\S]*?<\/figcaption>\s*)?<\/figure>/gi, (all, img) => (esMala(img) ? "" : all));
  out = out.replace(IMG_SRC, (tag) => (esMala(tag) ? "" : tag));
  return out;
}
export function sanearPostBlog<T extends { content?: string }>(p: T | null | undefined): T | null {
  if (!p) return null;
  const hit = cache.get(p as object);
  if (hit) return hit;
  const c = limpiarFotosHtml((p as any).content ?? "");
  const r = c === (p as any).content ? p : ({ ...p, content: c } as T);
  cache.set(p as object, r);
  return r;
}
