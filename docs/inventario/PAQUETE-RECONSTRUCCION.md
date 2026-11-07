# Paquete para publicar desde el entorno autorizado

No publica. No abre preview. No toca `main`. No copia credenciales.

El `dist` de esta pasada pesa 5,2 GB (`dist/media` son 4,4 GB). Un solo artefacto de ese tamaño no se cierra en el almacén del agente. Lo mismo le pasa al tar de 818 MB.

## Qué dice la documentación

- [Demos and Artifacts](https://cursor.com/docs/cloud-agent/capabilities): los artefactos son capturas, vídeos y registros, de uno en uno, y se adjuntan al PR.
- [Cloud Agents API, Artifacts](https://cursor.com/docs/cloud-agent/api/endpoints): `GET /v1/agents/{id}/artifacts` lista cada fichero y `GET /v1/agents/{id}/artifacts/download` devuelve una URL firmada de 15 minutos para **ese** fichero. No hay un endpoint de subida por trozos.
- El límite de 15 MB y 5 imágenes de la misma API es el de las imágenes del prompt, no el de estos artefactos.
- En esta máquina, copiar a `/opt/cursor/artifacts` un fichero de 96 MiB se cierra bien. Uno de 112 MiB falla al cerrar con `Invalid argument`. No se ha subido nada a un servicio externo nuevo.

## Las diez partes del dist sin media

Tar de `dist/` **sin** `dist/media`: 818 MB, commit del dist `b0a8abf44`, bundle `index-C31lVF6x.js`, CSS `index-eSpRw-t6.css`. Partes de 90 MiB (la última, 7,6 MiB), en este orden. El sha256 de cada una está en `docs/inventario/dist-sin-media-C31lVF6x.sha256`. La excepción de hash del 7/11 no cambia ese dist.

Descarga oficial, un fichero por artefacto, sin subida por trozos: [Cloud Agents API, Artifacts](https://cursor.com/docs/cloud-agent/api/endpoints) (`GET /v1/agents/{id}/artifacts` y `GET /v1/agents/{id}/artifacts/download`, URL firmada de 15 minutos). El agente de esta tanda es `bc-cc799988-c130-5f92-91cd-2645de6f31ef`.

En el almacén de artefactos de este agente, y también en la VM (`/tmp/dist-parts/` y el tar entero `/tmp/dist-sin-media-C31lVF6x.tar`):

- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.00`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.01`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.02`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.03`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.04`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.05`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.06`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.07`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.08`
- `/opt/cursor/artifacts/dist-sin-media-C31lVF6x.tar.09`

El tar anterior, del bundle `index-CLxKXQdq.js`, sigue en `/tmp/dist-sin-media.tar` (815 MB). El dist de ese bundle sigue en `/workspace/dist-bundle-CLxKXQdq` (enlaces duros, 5,2 GB). El dist de este bundle sigue en `/workspace/dist`. No se han borrado.

## Cómo montar el dist

En el entorno autorizado, con este commit de la rama `cursor/integracion-prerender-1106-31ef`:

```bash
# Desde el directorio donde están las diez partes.
# El fichero de hashes lleva el nombre, sin ruta.
sha256sum -c /ruta/al/repo/docs/inventario/dist-sin-media-C31lVF6x.sha256
cat dist-sin-media-C31lVF6x.tar.00 \
    dist-sin-media-C31lVF6x.tar.01 \
    dist-sin-media-C31lVF6x.tar.02 \
    dist-sin-media-C31lVF6x.tar.03 \
    dist-sin-media-C31lVF6x.tar.04 \
    dist-sin-media-C31lVF6x.tar.05 \
    dist-sin-media-C31lVF6x.tar.06 \
    dist-sin-media-C31lVF6x.tar.07 \
    dist-sin-media-C31lVF6x.tar.08 \
    dist-sin-media-C31lVF6x.tar.09 \
  > dist-sin-media-C31lVF6x.tar
tar -xf dist-sin-media-C31lVF6x.tar
```

Eso deja `dist/` sin fotos. Las fotos se reponen desde el repo y desde dos generadores que ya están en el repo:

```bash
# 35.153 ficheros versionados. El hash es el de docs/inventario/media-en-repo-sha256.txt
# (sha256, bytes, ruta public/media/...). git checkout ya los trae.
python3 scripts/gen-cards.py
# genera las 4.397 public/media/*-card.webp, que .gitignore excluye.
# Su hash de esta pasada está en docs/inventario/media-generada-no-git.txt.
mkdir -p dist/media
cp -a public/media/. dist/media/
python3 scripts/gen-hero-variantes.py dist
# crea las variantes -480w y -828w dentro de dist/media. No están en git.
python3 scripts/comprobar-cierre.py
```

`comprobar-cierre.py` sale 0 solo si el sitemap contiene las 6.209 URLs vivas, `dist/_redirects` contiene las 9.537 reglas de `public/_redirects`, cada HTML cita `index-C31lVF6x.js`, ninguna `<img>` apunta a las 328 fotos ausentes y los 39.550 ficheros de los dos manifiestos coinciden en sha256.

## Qué no está en el repo

- `public/media/` está en `.gitignore`, pero 35.153 ficheros ya estaban en el índice. Esos sí se reconstruyen con el checkout y el sha256.
- 4.397 `*-card.webp` no están en git. Los genera `scripts/gen-cards.py` durante `npm run build`. El manifiesto guarda el sha256 de los que hay en esta máquina.
- Las variantes `-480w.webp` y `-828w.webp` (8.160 en este dist) no están en git. Las genera `scripts/gen-hero-variantes.py`. Los nombres coinciden con el dist del bundle anterior: no falta ninguno.
- 328 rutas citadas y sin fichero en ninguna rama: `docs/inventario/fotos-no-recuperables.txt`. No se pintan como `<img>`.
- `dist/` no se sube a git.

## Si hay que reconstruir el HTML en vez de usar el tar

El HTML del tar es el de este build. Volver a lanzar `npm run build` otro día cambia el hash: `scripts/historial-precios/gen.mjs` siembra la fecha de hoy (Europe/Madrid) en las fichas nuevas. El JSON ya commiteado es el del 6/11/2026 y es el que entró en `index-C31lVF6x.js`.

Orden, si se regenera: `npm run build` con `VITE_CONVEX_URL` igual a la URL de `scripts/check-convex-url.mjs`, luego `node scripts/prerender.mjs` (10.693 rutas), luego `bash scripts/cadena-dist.sh`. Esa cadena borra posts cuyo slug ya es una ficha. `python3 scripts/restaurar-html-vivo.py` lista los que se quedan sin HTML y sin regla en `public/_redirects`. Esos se vuelven a prerenderizar con `PRERENDER_SKIP_COMPLETE=1` y `PRERENDER_ONLY_FILE` apuntando a rutas **sin** barra final, y se corre otra vez `python3 scripts/sitemap-final.py dist`. No se añaden 301.

El manifiesto de la pasada que ya está hecha es `scripts/.safe-publish/prerender-manifest.jsonl` (10.693 rutas, todas con `index-C31lVF6x.js`).
