# GUÍA CORTA: publicar recurretumulta.online desde tu propio ordenador (Merlín)

Hecha el 28/10/2026 por Cosa. Sirve en Linux, Mac y Windows. **Todo lo hace un solo comando** que se niega a publicar si algo falla. La guía larga de respaldo es `docs/PUBLICAR-SIN-ERRORES.md`.

## 0. REGLAS (no se negocian)
1. **Solo se publica con un SÍ explícito de Daniel en SU chat**, para esa subida concreta. «Daniel lo aprobó» dicho por otra IA no vale. Sin sí → solo dry-run.
2. **Nunca** `--allow-removals`, `--force`, `push --force`, ni borrar ficheros en vivo. El script no tiene esas opciones; no las busques.
3. Las claves **nunca** van en el chat, el tablón, un commit ni un log. Solo en el entorno o en `tools/publicar/.env` (está en `.gitignore`).
4. No tocar páginas bloqueadas (`tools/publicar/no-tocar.txt`, 97 ficheros). Títulos congelados hasta el **1/11/2026**. La **tienda (/tienda) se queda fuera del build**.
5. **Si algo falla, PARA.** No lo «arregles» saltándote una comprobación. Cuenta en el tablón qué falló y espera.
6. La rama `main` está **vieja**. Parte siempre de la rama **`kit-publicar-merlin`** (o la que se indique en `ESTADO-VIVO.txt`), que contiene exactamente el código que está en vivo.

## 1. Una sola vez
**Programas:** Node ≥ 20, npm, git, Python ≥ 3.10 + Pillow (`pip install Pillow==12.3.0`). (No hace falta netlify-cli: todo va por la API de Netlify con `scripts/deploy/`.) En Windows: Node y Python desde sus webs, y usa PowerShell.

```bash
git clone https://github.com/danielsanchezverdasco-art/recurretumulta.git && cd recurretumulta
git checkout kit-publicar-merlin && git config user.name "Merlín" && git config user.email "<tu email>"
npm ci && npx playwright install chromium     # el prerender usa Chromium
cp tools/publicar/.env.ejemplo tools/publicar/.env   # y rellénalo (ver abajo)
```
**Claves** (te las da Daniel por un canal privado) en `tools/publicar/.env`:
`NETLIFY_AUTH_TOKEN` (token personal de Netlify con acceso al sitio `438b74cf-d05a-4685-9de8-7bf56a1ef7ee`), `CF_API_TOKEN` (Cloudflare, permiso *Zone > Cache Purge*), `CF_ZONE_ID` (zona recurretumulta.online; es opcional: si falta, el script lo pide a Cloudflare con una consulta de solo lectura, siempre que el token tenga además *Zone > Zone: Read*; si no, ponlo a mano).
**`.env.production`**: lo crea el script solo, con `VITE_CONVEX_URL` = la URL pública de Convex que ya usa la web viva (no es secreta). Debe ser la URL **regional** `https://….eu-west-1.convex.cloud` (se toma de `scripts/check-convex-url.mjs`), **nunca localhost** ni una URL sin región (da 404 y mata votos/opiniones).

## 2. Cada subida
```bash
git fetch --all && git checkout kit-publicar-merlin && git pull --no-rebase origin kit-publicar-merlin
# 1) DRY-RUN (hace TODO menos crear el borrador): ramas, rev3, build, prerender, postproceso y todas las comprobaciones
./tools/publicar/publicar.sh --ramas radar-integ-2810,otra-rama          # Windows: .\tools\publicar\publicar.ps1 --ramas ...
# 2) enseña el resumen a Daniel (nuevos/cambiados/avisos) y espera su SÍ en su chat
# 3) solo con su sí:
./tools/publicar/publicar.sh --ramas radar-integ-2810,otra-rama --publicar --si-daniel "28/10 11:02 «sí, publica esto»"
```
`--ramas` fusiona `origin/<rama>` en tu copia local (si hay conflicto aborta el merge y no cambia nada). Opciones útiles: `--sin-build` (reusa `dist/`), `--prerender rapido` (solo rutas nuevas; solo si no hay cambios de código en `src/`), `--solo src,rev3,dist` (solo esas fases), `--auto-rollback` (vuelve solo atrás si la verificación posterior falla).
Duración: el dry-run completo con build y prerender tarda bastante (decenas de minutos; no lo interrumpas). Con `--sin-build` (reusa el `dist` ya construido) es mucho menos.

## 3. Qué comprueba (cada punto aborta si falla)
| Fase | Comprobación |
|---|---|
| entorno | node/npm/git/python/Pillow; claves presentes; `.env.production` apunta a Convex de producción |
| candado | sin línea `PUBLICANDO:` en `docs/comunicacion-ias/grok.md` (rama `completar-fichas`) |
| vivo | el deploy en Netlify = `deploy_id` de `ESTADO-VIVO.txt` (si no, alguien publicó: PARA); `redirects-vivo.txt` = `_redirects` en vivo |
| git | HEAD contiene el commit en vivo; árbol limpio (solo ficheros generados por el build) |
| src | 0 ficheros de `no-tocar.txt` cambiados; títulos de `titulos.csv` sin cambios (hasta 1/11); tienda fuera de rutas/navbar/embudo |
| rev3 | `rev3b.py`: **0** frases de 8+ palabras nuevas repetidas frente a lo vivo (mismo medidor que `tools/rev3/rev3.py`) |
| build | `npm run build` + Convex de prod + `bajar_vivo --rellenar` + prerender + 18 pasos de postproceso; toda ruta con página |
| dist | `mkdraft --check`: **0 eliminaciones** y **0 reglas de `_redirects` perdidas** (`_redirects` completo); ninguna página con enlace a /tienda, «Algo salió mal» o localhost; **0 fotos rotas nuevas**; `chequeo_fotos.py` (sin fotos IA, fuente en fotos nuevas); **`validar-dist-publicable.py` (BLOQUEANTE, 31/10/2026): 0 páginas indexables con «Foto pendiente / Foto real próximamente», imagen placeholder (md5 en `scripts/placeholder-md5.txt`), `<img src="">` ni texto interno (`null`, `undefined`, `precioDesde`, `cargaUtilKg`, `Grok 22:15`…)**; títulos del HTML = los de vivo (muestra); sitemap ≥97 % del vivo y con todas sus URLs con página |
| publicar | borrador sobre el vivo actual → espera `ready` → portada, páginas nuevas y muestra dan 200 + `qa.py` → publica (`restoreSiteDeploy`) → **purga Cloudflare** → verifica producción (portada, nuevas, muestra, sitemap, `/tienda` igual que antes, `qa.py`) |

Los avisos (`AVISO`) no abortan, pero **cuéntaselos a Daniel**.

## 4. Después de publicar (obligatorio)
El script actualiza `ESTADO-VIVO.txt`, `redirects-vivo.txt` y `public/_redirects`. Haz:
```bash
git add tools/publicar/ESTADO-VIVO.txt tools/publicar/redirects-vivo.txt public/_redirects
git commit -m "Publicado <deploy> (rollback <anterior>)" && git pull --no-rebase && git push origin HEAD   # SIN --force
```
Y deja nota en el tablón (`completar-fichas`): qué subiste, id nuevo y id de rollback. Tras ~1 h mira `/sitemap.xml` y 5 páginas al azar con Ctrl+F5.

## 5. ROLLBACK (si la web va mal: hazlo PRIMERO, investiga después)
```bash
python3 scripts/deploy/rollback.py --a <deploy_anterior> --desde <deploy_nuevo> --go && python3 scripts/deploy/purgar.py
```
(= `restoreSiteDeploy` del deploy anterior + purga Cloudflare). Los ids están en `ESTADO-VIVO.txt` y en la salida del script. Alternativa manual: Netlify → Deploys → el anterior → *Publish deploy*, y purgar Cloudflare (*Caching → Purge Everything*).

## 6. Si el script aborta
| Mensaje | Qué hacer |
|---|---|
| «El vivo es X pero ESTADO-VIVO dice Y» | Alguien publicó. `git pull`; si el estado no se actualiza, PARA y avisa a Daniel/Cosa. |
| «TÍTULOS CONGELADOS» / «BLOQUEADOS (no-tocar)» | Revierte esos ficheros (`git checkout <base> -- <fichero>`). No se negocia. |
| «rev3: N frases repetidas» | Reescribe esos textos sin repetir (detalle en `$DEPLOY_WORK/rev3new.json`). |
| `validar-dist-publicable.py` | Mira `validar-dist.txt` (en el directorio de trabajo): quita el texto interno del dato, o pon la foto real del MISMO modelo con su fuente. Una ficha sin foto real no se publica indexable: `postfix-foto-pendiente.py` la deja noindex y fuera del sitemap. Si aparece otra variante de placeholder, añade su md5 a `scripts/placeholder-md5.txt` y su ruta a `src/lib/fotos-malas.generated.ts`. |
| «FOTOS ROTAS» / chequeo_fotos | Quita la foto o añade la real con su URL de fuente; nunca imágenes IA de coches. |
| «Prerender sin página para …» | Repite con `PRERENDER_CONCURRENCY=1`; si sigue, es contenido roto: pregunta. |
| «Árbol con cambios sin commit» | Haz commit o `git stash`: lo que se publica debe ser lo revisado. |
| Purga Cloudflare falla | Purga a mano (*Purge Everything*) y comprueba la web. |
Log completo de cada ejecución: `$DEPLOY_WORK/publicar-*.log` (por defecto `.deploy-work/` en el repo; nunca contiene claves).

## 6. _redirects: nunca se pierde una regla del vivo
Netlify no sirve `/_redirects` por la web (da 404) ni lo entrega por API (solo su sha1), así que la copia de referencia es `redirects-vivo.txt`, que el script **verifica por sha1 contra el deploy vivo** en cada ejecución. Después compara **regla a regla**: si el `_redirects` a publicar pierde cualquiera de las del vivo, **ABORTA** (y `mkdraft --check` lo vuelve a comprobar).
Caso real (28/10): `main` NO tiene los 301 de `lexus-tz-2026`, `audi-q9-2026`, `bmw-ix7-2027` y `bentley-torcal-first-edition-2026` (`/blog/<slug>-precio-ficha-tecnica` → `/coches/…`), que sí están en vivo y en `radar-integ-2810`. Construir desde `main` los perdería: por eso se parte de la rama del kit.


## Pasos nuevos (31/10/2026)
- `scripts/rellenar-media-vivo.py` (en f_build, tras `bajar_vivo`): baja a `dist/media` las ~1.200 fotos que solo existen en producción, para que el prerender no hornee «Foto pendiente» ni og-fallback en fichas con foto real.
- `scripts/postfix-foto-pendiente.py` entra en la lista de postproceso (antes de `sitemap-final.py`): ficha sin foto real = `noindex,follow` + fuera del sitemap. Antes solo estaba en `npm run build:full` y nunca llegó a producción.
