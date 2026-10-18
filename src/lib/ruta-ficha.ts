// 18/10/2026 (rediseño fichas): ¿es una ficha de modelo? (/coches|motos|patinetes/<slug>/)
// En las fichas, «Relacionados» va dentro del artículo y WhatsApp vive en la barra inferior.
export function esRutaFicha(pathname: string): boolean {
  return /^\/(coches|motos|patinetes|caravanas)\/(?!marca\/)[^/]+\/?$/.test(pathname);
}
