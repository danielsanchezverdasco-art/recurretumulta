// 26/10/2026 (rev26 A2): artículos listados en /blog/ cuyo /blog/<slug>/ no se
// prerenderiza (404 en vivo) y que tienen ficha con el mismo slug. Se enlaza la
// ficha. Fuera de blog-redir.generated.ts porque aquí no hay 301 en _redirects.
export const BLOG_SIN_PAGINA: Record<string, string> = {
  "audi-q9-2026-precio-ficha-tecnica": "/coches/audi-q9-2026-precio-ficha-tecnica/",
  "bentley-torcal-first-edition-2026-precio-ficha-tecnica": "/coches/bentley-torcal-first-edition-2026-precio-ficha-tecnica/",
  "bmw-ix7-2027-precio-ficha-tecnica": "/coches/bmw-ix7-2027-precio-ficha-tecnica/",
  "lexus-tz-2026-precio-ficha-tecnica": "/coches/lexus-tz-2026-precio-ficha-tecnica/",
};
