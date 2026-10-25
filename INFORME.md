# Informe del código original de recurretumulta.online (12/10/2026)

## Conclusión principal: el archivo está INCOMPLETO y no se puede compilar
El tar.gz solo trae `package.json`, `tsconfig.json`, `vite.config.ts` y `src/` (752 archivos, 42 MB). Le faltan:
- `index.html` (el punto de entrada de Vite) → `vite build` falla
- `tsconfig.app.json` y `tsconfig.node.json` → `tsc -b` falla (TS6053)
- `scripts/` (copy-media, gen-blog-lite, gen-data-loaders y el **prerender**, que es el que genera el HTML de cada URL)
- `convex/` (el backend: reseñas, newsletter, alertas, auth y referidos; el alias `@/convex` apunta ahí)
- `public/` (media, robots, sitemap, `_redirects`, `_headers`, verificación de Google)
- `netlify.toml` y el lockfile (`package-lock.json`)

Pide al dueño el proyecto entero (ZIP de la carpeta raíz, sin `node_modules`).

## Inventario
- Vite 8, React 19, TS 6, Tailwind 4, react-router 7 (BrowserRouter, unas 60 rutas lazy en `src/App.tsx`), Convex cargado en diferido (`components/providers/convex-lazy.tsx`).
- Variables de entorno usadas en el front: `VITE_CONVEX_URL`, `VITE_ADSENSE_PUBLISHER_ID` y `VITE_ADSENSE_SLOT_{AUTO,HORIZONTAL,RECTANGLE}`. En las dependencias aparecen OpenAI, Resend y Stripe: seguramente se usan en `convex/`, que falta, así que sus claves vivirán en el dashboard de Convex.
- SEO: el hook `src/hooks/use-seo.ts` pone title, description, canonical, OG y JSON-LD en el cliente. El HTML estático lo genera un script de prerender que no viene en el archivo. Los títulos están repartidos por las páginas y por `components/maextro/{BlogMaextro,FichaMaextro}.tsx`.
- Contenido: más de 500 archivos TS en `src/lib` (123 comparador-coches*, 30 historia*, 30 comparador-motos-exp*, blog-posts-*), más los generados `blog-lite.generated.ts` (2,8 MB), `comparador-lite.generated.ts` (0,9 MB), `media-dimensiones.ts` (0,6 MB) y `data-loaders/`.
- Enlaces cruzados: no hay un componente compartido. «Ver ficha completa» solo aparece en los comparadores y en FichasTecnicas, y «Ver análisis» solo en un enlace dentro del texto de un post. Habrá que añadirlo en BlogMaextro y FichaMaextro.

## Build
- `npm install` falla con npm 9 (error `edgesOut`). Con `--legacy-peer-deps` funciona: 503 paquetes.
- `tsc` y `vite build` fallan porque faltan los archivos de arriba.

## Frente a producción
- Sitemap de producción: 5.584 URLs (blog 2.604, coches 1.711, motos 675, patinetes 476, multas 55, comunidades 19, guías 9…).
- El código es reciente: tiene comentarios del 12/10 (moderar-reseñas) y contiene Avatr 12, Supra Final Edition, Navee y Nissan Ariya. No se ha podido hacer una paridad exacta URL a URL porque las listas de slugs y el sitemap salen de los scripts que faltan. Además, los 227 de /workspace/nuevos no se han comprobado uno a uno.

## Velocidad (propuestas, sin aplicar)
- Ya hay `blog-lite` de 2,8 MB y `comparador-lite` de 0,9 MB más los data-loaders: hay que partirlos por página o generar JSON por slug, para que el índice no cargue el catálogo entero.
- AdSense (`components/ads/AdBanner.tsx`): cargarlo solo tras una interacción o con un retraso, y reservar la altura del hueco para evitar CLS.
- `media-dimensiones.ts` (0,6 MB): sacarlo del bundle e incrustar el width/height en el prerender.
- Dependencias pesadas (jspdf, pdfjs-dist, recharts, motion) solo en import() dinámico. `openai`, `stripe`, `resend` y `@napi-rs/canvas` no deben estar en el front.
- Impacto esperado: de 73 a más de 80 en móvil, sobre todo al quitar JS de datos y retrasar AdSense. No está medido.

## Plan de integración (cuando llegue el proyecto completo)
1. Commit del original en `limpio/` (ya hecho con lo que hay).
2. Títulos: un único `src/content/seo-overrides.json` (url → title/meta) desde `/workspace/seo/propuesta-titulos.csv`, leído por use-seo y por el prerender.
3. Componente `<EnlaceCruzado>` en BlogMaextro y FichaMaextro, con un mapa slug-blog ↔ ficha generado y una comprobación en el build de que no hay enlaces rotos.
4. `public/google5e8f48877edb4840.html`.
5. Pipeline de `/workspace/nuevos/tools_cn`: que genere archivos en la nueva estructura de contenido y no HTML suelto.
6. Limpieza o consolidación, con paridad de URLs frente al sitemap y capturas de unas 40 páginas con Playwright.

---
## Actualización 12/10 (v2 completo): fase 1 hecha en limpio/ y verificada (ver VERIFICACION.md, CHANGELOG.md y README.md)
Opinión del código:
- Funciona y tiene optimizaciones reales (GA diferido, fuentes locales, chunks lazy).
- Pero se ha montado a base de parches:
  - 143 scripts sueltos, algunos de envío de emails y de deploy.
  - El contenido son cientos de archivos TS por lotes («exp10», «batch2b»…).
  - El prerender es frágil (timeouts intermitentes).
  - Hay rutas absolutas de la máquina del autor.
  - No había lockfile, `public/` ni `netlify.toml`.
- Riesgos detectados:
  - El código del dueño desborda en horizontal en móvil (barra superior).
  - El bundle de producción apunta a `happy-otter-123.convex.cloud`, que parece un placeholder. Las funciones de Convex (reseñas, newsletter) podrían no funcionar en producción.
  - Unas 3.966 imágenes que referencia el código no existen en producción (salían de la carpeta de migración del autor).
