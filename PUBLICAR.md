# Cómo publicar (resumen actualizado)

La web YA SE PUEDE publicar desde este repo. El aviso antiguo del README («ahora no se publica desde aquí») está obsoleto.

1. `npm install`
2. Descarga TODAS las imágenes publicadas: `NETLIFY_AUTH_TOKEN=... python3 scripts/bajar-media.py` (unos 1,7 GB). Es obligatorio: el deploy contiene solo lo que hay en `dist`, y si falta una imagen, desaparece de la web. Añade después las nuevas en `public/media/`.
3. Cambios de contenido en `src/`, slugs en `scripts/*-slugs.txt` y rutas en `scripts/routes.json`. Los títulos y descripciones están en `src/content/seo/titulos.csv`.
4. Build: `npm run build`, después el prerender (`node scripts/prerender.mjs`; con `PRERENDER_ONLY` solo las rutas nuevas) y `python3 scripts/postfix-dist.py`.
5. Borrador: crea un deploy borrador vacío con la API de Netlify y súbelo con `NETLIFY_AUTH_TOKEN=... python3 scripts/deploy_api.py <id_del_deploy>`. Antes, comprueba que `dist/media` tiene el mismo número de archivos que la web publicada. Da una URL de prueba; revísala y ejecuta `node scripts/sanity.mjs`.
6. Publicar: restaura ese deploy en Netlify (Deploys > el borrador > «Publish deploy») o usa la API. Después vacía la caché de Cloudflare.
7. Vuelta atrás: en Netlify publica de nuevo el deploy anterior.

NUNCA subas la carpeta `dist` arrastrándola a Netlify: borraría todo lo que no esté en ella (las fotos). NUNCA metas claves en el repo.

## Añadir contenido sin build completo (recomendado)
1. `NETLIFY_AUTH_TOKEN=... python3 scripts/bajar-web.py`: deja en `dist/` una copia exacta de lo publicado e imprime el id del deploy en vivo, que es tu vuelta atrás.
2. Prerender SOLO de las rutas nuevas con `PRERENDER_ONLY` sobre ese `dist`. No hagas `npm run build` salvo que cambie código de `src/`.
3. Comprueba que el número de ficheros de `dist` es el de antes más los nuevos, ni uno menos.
4. Borrador con `deploy_api.py`, revisión y publicar. Si algo falla, vuelve a publicar el deploy del paso 1.
Antes de publicar, consulta siempre en la API de Netlify cuál es el deploy en vivo; no te fíes de ids antiguos.

## Flujo completo de publicación (actualizado 13/10/2026)
0. Comprobar el deploy en vivo (`published_deploy.id`), que será el rollback. Si ha cambiado (p. ej. fotos de la otra IA), rebasar sobre los ficheros en vivo.
1. `npx vite build --outDir /tmp/vbN --emptyOutDir`. NUNCA hagas build directo sobre dist (lo borra).
2. `python3 scripts/patch-dist-monos.py dist /tmp/vbN` (cambia los assets y las referencias en el HTML).
3. Copiar las fotos nuevas a dist/media.
4. `PRERENDER_ONLY_FILE=rutas.txt node scripts/prerender.mjs`. main.tsx no hace el swap offscreen con navigator.webdriver; antes, el prerender duplicaba los H1. Comprueba que el título no quede en "Recurrir multa gratis con IA".
5. `python3 scripts/gen-hubs.py dist && python3 scripts/seo-dist.py dist && node scripts/apply-seo.mjs dist`
6. Verificar: 1 H1 por página, ningún "Algo salió mal", `python3 scripts/scan_titulos.py` con 0 exactos y `python3 scripts/sitecheck.py <url-draft>` (200 + canonical + barra en todo el sitemap).
7. Draft: POST /sites/{SITE}/deploys {"draft":true,"files":{}} y después `python3 ../deploy_api.py <id>` (reanudable). Lighthouse de la home ×3 (mediana ≥ 88).
8. Publicar: POST /sites/{SITE}/deploys/{id}/restore. Purgar Cloudflare (purge_everything) y verificar en vivo.
9. Rollback: restore del id anterior.
