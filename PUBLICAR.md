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
