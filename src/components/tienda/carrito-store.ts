// Carrito en localStorage, sin dependencias (ligero: se usa en la cabecera de todas las páginas).
export type LineaCarrito = { slug: string; cantidad: number };
const KEY = "rtm-carrito";
export function leerCarrito(): LineaCarrito[] {
  try { const v = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; }
}
export function guardarCarrito(l: LineaCarrito[]) {
  try { localStorage.setItem(KEY, JSON.stringify(l)); window.dispatchEvent(new Event("rtm-carrito")); } catch { /* sin storage */ }
}
export function anadirAlCarrito(slug: string) {
  const l = leerCarrito(); const x = l.find((i) => i.slug === slug);
  if (x) x.cantidad += 1; else l.push({ slug, cantidad: 1 });
  guardarCarrito(l);
}
