// 10/11/2026 (AdSense F-05): URL del artículo de blog de una ficha, o null si
// no hay artículo vivo. El botón «Leer nuestro análisis» enlazaba a la propia
// ficha cuando el post estaba 301ado a ella (2.033 coches y 742 motos en datos)
// o no tenía página (3 huérfanos en BLOG_SIN_PAGINA): hrefDesdeBlog resuelve
// esos slugs a la ficha y el botón se convertía en un autolink engañoso.
// Solo se enlaza si el destino final es un /blog/ vivo; si no, el botón no
// se renderiza (y la FAQ que lo promete tampoco).
import { hrefDesdeBlog } from "./blog-redir.generated";

export function hrefAnalisisBlog(slug: string | null | undefined): string | null {
  if (!slug) return null;
  const href = hrefDesdeBlog(slug);
  return href.startsWith("/blog/") ? href : null;
}
