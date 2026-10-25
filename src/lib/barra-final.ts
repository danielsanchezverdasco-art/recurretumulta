// 13/10/2026 (indexación): toda URL interna con barra final, igual que la canónica
// (Netlify redirige /x -> /x/ con 301). "/x?a=1#h" -> "/x/?a=1#h". No toca "/", ficheros ni externas.
export function conBarra(href: string): string {
  if (!href || href[0] !== "/" || href.startsWith("//")) return href;
  const m = href.match(/^([^?#]*)([?#].*)?$/);
  if (!m) return href;
  const [, ruta, resto = ""] = m;
  if (ruta === "/" || ruta.endsWith("/") || /\.[a-z0-9]{2,5}$/i.test(ruta)) return href;
  return `${ruta}/${resto}`;
}
