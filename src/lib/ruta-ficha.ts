// 18/10/2026 (rediseño fichas): ¿es una ficha de modelo? (/coches|motos|patinetes|autocaravanas/<slug>/)
// En las fichas, «Relacionados» va dentro del artículo y WhatsApp vive en la barra inferior.
// 19/10/2026 (router 5/6): añadida la familia autocaravanas a la detección de fichas.
export function esRutaFicha(pathname: string): boolean {
  return /^\/(coches|motos|patinetes|autocaravanas)\/(?!marca\/)[^/]+\/?$/.test(pathname);
}
