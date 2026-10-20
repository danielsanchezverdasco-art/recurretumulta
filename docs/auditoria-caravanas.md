# Auditoría total de CARAVANAS — merlin-auditoria-caravanas

**Fecha:** 20/10/2026  **Base:** `origin/merlin-borrador-1` @ d1c4b3f7 (rama que contiene el universo completo de caravanas; `main` no tiene ningún fichero de caravanas). **Rama de auditoría:** `merlin-auditoria-caravanas` (worktree aislado `~/workspace/auditoria-caravanas-wt`).

## Universo auditado
- **72 fichas** en 15 módulos `src/lib/comparador-caravanas-<marca>.ts` (Adria 3, Bailey 5, Bürstner 4, Caravelair 5, Dethleffs 9, Eriba 3, Fendt 6, Hobby 4, Kabe 5, Knaus 3, LMC 5, Sterckeman 5, Swift 5, Tabbert 5, Weinsberg 5). Incluye las 72 fichas de la rama `merlin-caravanas-p0` (noindex P0 — contenido idéntico).
- **27 blogs**: 17 en `src/lib/blog-posts-caravanas-lote1.ts` + 10 en `src/lib/blog-posts-caravanas-lote3.ts` (no existe lote 2 en ninguna rama).
- `App.tsx` de esta rama aún no cablea rutas `/caravanas/<slug>` (solo existen rutas de autocaravanas); el cableado de rutas pertenece al borrador, fuera del checklist de esta auditoría.

## Resumen 3/3 (hero + todas las fotos + precio)

| Métrica | Antes (verificado) | Después |
|---|---|---|
| Hero existente en public/media/ | 72/72 | 72/72 |
| Todas las fotos referenciadas existen | 72/72 | 72/72 |
| Mínimo guía 2 interiores + 1 exterior | 69/72 | **72/72** |
| Precio (precioDesde relleno o null documentado) | 72/72 | 72/72 |
| 3/3 completo | 69/72 | **72/72** |

Nota metodológica: la primera pasada por nombre de fichero daba 62/72 en el mínimo; tras clasificar por rol del campo (`imagenInteriorOficial`), alt-text de galería y verificación visual de los casos ambiguos (5 fichas, fotos vistas una a una), la línea base real era 69/72. Las 3 que faltaban tenían **cero fotos exteriores**. Ninguna ficha usa `precioDesde: null` — las 72 tienen precio numérico con fuente (ver columnas de comentarios de cabecera de cada módulo: Adria/Sterckeman «sin tarifa oficial → aprox de distribuidor»).

## Arreglos aplicados en esta rama

1. **Fendt Bianco Selection 515 SG** — hero y las 5 fotos eran interiores (sin ningún exterior). Añadida `public/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-exterior-oficial.webp` (1200×645, render oficial Fendt vía Obelink, recortado el plano de planta que incluía la imagen; verificado: insignia BIANCO 515) + entrada de galería. **Foto rescatada: 1.**
2. **Sterckeman Sport Edition 496PE** — las 7 fotos eran interiores (el hero es interior, verificado visualmente). Añadida `public/media/sterckeman-sport-edition-496pe-2026-precio-ficha-tecnica-exterior.webp` (1600×1200 webp, foto real del modelo exacto — serigrafía 496PE/Sport Edition — vía euroservice69, sin marca de agua) + entrada de galería. Rechazada una candidata de TruckScout24 por marca de agua. **Foto rescatada: 1.**
3. **Sterckeman Easy 366PE / 460CP** — los hero son exteriores (verificado visualmente), pero 3 alt de galería describían mal la foto (interior descrito como exterior y viceversa). Corregidos 5 alt: 366PE «dormitorio»→vista lateral; «salón con literas al fondo»→cocina y literas; 460CP «salón y cocina»→vista trasera tres cuartos; «dormitorio con cama de 140x195»→salón-comedor; «cocina con nevera»→dormitorio con cama de matrimonio. **Heroes verificados visualmente.**
4. **Blog Bürstner Averso 535 TL** (lote 1) — enlace interno a ficha inexistente `burstner-premio-495-tk` (no existe en ninguna rama). Enlace eliminado, texto conservado.

Precios: **0 añadidos** (los 72 ya traían `precioDesde` numérico con fuente documentada en cabecera de módulo). Imposibles: **0** (los 3 huecos de fotos fueron resolvibles con fotos reales/oficiales del modelo exacto).

## Tabla completa de fichas (72)

| # | Ficha | Hero | Fotos | Int | Ext | Precio (€) | 3/3 |
|---|---|---|---|---|---|---|---|
| 1 | adria-aviva-522-pt-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 23500 | ✅ |
| 2 | adria-action-361-lh-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 23000 | ✅ |
| 3 | adria-altea-542-pk-2026-precio-ficha-tecnica | ✅ | 3 | 2 | 1 | 23000 | ✅ |
| 4 | bailey-phoenix-black-420-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 29669 | ✅ |
| 5 | bailey-phoenix-black-644-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 32636 | ✅ |
| 6 | bailey-pegasus-black-brindisi-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 37383 | ✅ |
| 7 | bailey-pegasus-black-messina-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 40942 | ✅ |
| 8 | bailey-unicorn-deluxe-cabrera-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 39637 | ✅ |
| 9 | burstner-premio-life-480-ts-2026-precio-ficha-tecnica | ✅ | 5 | 3 | 2 | 22000 | ✅ |
| 10 | burstner-averso-535-tl-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 32600 | ✅ |
| 11 | burstner-premio-plus-510-tk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 29360 | ✅ |
| 12 | burstner-premio-life-415-tk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 20070 | ✅ |
| 13 | caravelair-alba-366-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 15990 | ✅ |
| 14 | caravelair-alba-400-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 17490 | ✅ |
| 15 | caravelair-alba-460-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 19490 | ✅ |
| 16 | caravelair-sport-line-410-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 21990 | ✅ |
| 17 | caravelair-sport-line-476-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 24490 | ✅ |
| 18 | dethleffs-camper-560-fmk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 36790 | ✅ |
| 19 | dethleffs-beduin-scandinavia-550-bet-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 43199 | ✅ |
| 20 | dethleffs-nomad-560-fmk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 34199 | ✅ |
| 21 | dethleffs-cgo-495-qsk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 23999 | ✅ |
| 22 | dethleffs-cjoy-480-qlk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 21999 | ✅ |
| 23 | dethleffs-cjoy-420-qsh-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 18999 | ✅ |
| 24 | dethleffs-cjoy-460-le-2026-precio-ficha-tecnica | ✅ | 4 | 3 | 1 | 20999 | ✅ |
| 25 | dethleffs-nomad-520-elt-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 33499 | ✅ |
| 26 | dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 56190 | ✅ |
| 27 | eriba-touring-542-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 21290 | ✅ |
| 28 | eriba-touring-530-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 29370 | ✅ |
| 29 | eriba-feeling-425-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 28390 | ✅ |
| 30 | fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 32500 | ✅ |
| 31 | fendt-bianco-activ-560-skm-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 36090 | ✅ |
| 32 | fendt-bianco-activ-465-sge-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 30870 | ✅ |
| 33 | fendt-tendenza-560-sfdw-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 44470 | ✅ |
| 34 | fendt-diamant-650-gdw-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 59370 | ✅ |
| 35 | fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica | ✅ | 6 | 5 | 1 | 32000 | ✅ |
| 36 | hobby-de-luxe-540-ul-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 34500 | ✅ |
| 37 | hobby-excellent-540-wlu-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 30900 | ✅ |
| 38 | hobby-prestige-560-ul-2026-precio-ficha-tecnica | ✅ | 6 | 4 | 2 | 32000 | ✅ |
| 39 | hobby-ontour-390-sf-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 21980 | ✅ |
| 40 | kabe-ametist-560-gle-2026-precio-ficha-tecnica | ✅ | 6 | 4 | 2 | 53550 | ✅ |
| 41 | kabe-royal-560-gle-2026-precio-ficha-tecnica | ✅ | 6 | 4 | 2 | 64000 | ✅ |
| 42 | kabe-royal-600-cxl-2026-precio-ficha-tecnica | ✅ | 6 | 4 | 2 | 76050 | ✅ |
| 43 | kabe-imperial-630-tdl-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 87050 | ✅ |
| 44 | kabe-imperial-780-tdl-2026-precio-ficha-tecnica | ✅ | 5 | 3 | 2 | 104350 | ✅ |
| 45 | knaus-sport-500-qdk-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 31000 | ✅ |
| 46 | knaus-sport-450-fu-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 25000 | ✅ |
| 47 | knaus-suedwind-500-fu-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 34000 | ✅ |
| 48 | lmc-sassino-430-d-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 18300 | ✅ |
| 49 | lmc-sassino-470-k-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 20400 | ✅ |
| 50 | lmc-style-450-d-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 22900 | ✅ |
| 51 | lmc-style-lift-500-k-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 26800 | ✅ |
| 52 | lmc-videro-580-d-2026-precio-ficha-tecnica | ✅ | 6 | 4 | 2 | 37900 | ✅ |
| 53 | sterckeman-open-edition-540cp-2026-precio-ficha-tecnica | ✅ | 5 | 3 | 2 | 29990 | ✅ |
| 54 | sterckeman-easy-460cp-2026-precio-ficha-tecnica | ✅ | 6 | 5 | 1 | 19490 | ✅ |
| 55 | sterckeman-sport-edition-455cp-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 22990 | ✅ |
| 56 | sterckeman-easy-366pe-2026-precio-ficha-tecnica | ✅ | 6 | 5 | 1 | 15990 | ✅ |
| 57 | sterckeman-sport-edition-496pe-2026-precio-ficha-tecnica | ✅ | 7 | 4 | 3 | 24990 | ✅ |
| 58 | swift-sprite-alpine-4-db-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 25510 | ✅ |
| 59 | swift-sprite-major-4-eb-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 28109 | ✅ |
| 60 | swift-challenger-390-2026-precio-ficha-tecnica | ✅ | 5 | 3 | 2 | 29901 | ✅ |
| 61 | swift-challenger-580-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 35717 | ✅ |
| 62 | swift-elegance-grande-860-2026-precio-ficha-tecnica | ✅ | 5 | 3 | 2 | 57222 | ✅ |
| 63 | tabbert-pantiga-490-e-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 34900 | ✅ |
| 64 | tabbert-cazadora-460-e-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 27365 | ✅ |
| 65 | tabbert-senara-550-dmk-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 28990 | ✅ |
| 66 | tabbert-da-vinci-495-he-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 39220 | ✅ |
| 67 | tabbert-senara-490-td-2026-precio-ficha-tecnica | ✅ | 5 | 2 | 3 | 29490 | ✅ |
| 68 | weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica | ✅ | 6 | 3 | 3 | 27570 | ✅ |
| 69 | weinsberg-caraone-390-qd-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 16650 | ✅ |
| 70 | weinsberg-caraone-400-lk-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 16790 | ✅ |
| 71 | weinsberg-caraone-450-fu-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 20290 | ✅ |
| 72 | weinsberg-caraone-480-eu-2026-precio-ficha-tecnica | ✅ | 4 | 2 | 2 | 21450 | ✅ |

## Blogs de caravanas (27)

| # | Slug | Módulo | Fotos | 3/3 |
|---|---|---|---|---|
| 1 | hobby-de-luxe-540-ul-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 3 | ✅ |
| 2 | knaus-sport-500-qdk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 3 | ✅ |
| 3 | adria-aviva-522-pt-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 3 | ✅ |
| 4 | adria-action-361-lh-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 3 | ✅ |
| 5 | burstner-premio-life-480-ts-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 3 | ✅ |
| 6 | dethleffs-camper-560-fmk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 7 | hobby-excellent-540-wlu-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 8 | fendt-bianco-activ-550-sd-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 9 | eriba-touring-542-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 10 | knaus-sport-450-fu-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 11 | hobby-prestige-560-ul-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 12 | weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 13 | dethleffs-beduin-scandinavia-550-bet-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 14 | dethleffs-nomad-560-fmk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 15 | burstner-averso-535-tl-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 16 | eriba-touring-530-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 17 | dethleffs-cgo-495-qsk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote1.ts | 2 | ✅ |
| 18 | weinsberg-caraone-390-qd-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 19 | weinsberg-caraone-400-lk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 20 | weinsberg-caraone-450-fu-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 21 | weinsberg-caraone-480-eu-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 22 | dethleffs-cjoy-480-qlk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 23 | dethleffs-cjoy-420-qsh-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 24 | dethleffs-cjoy-460-le-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 25 | burstner-premio-plus-510-tk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 26 | burstner-premio-life-415-tk-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |
| 27 | eriba-feeling-425-2026-precio-ficha-tecnica | blog-posts-caravanas-lote3.ts | 3 | ✅ |

## Notas
- Todas las fotos son del modelo exacto (oficiales del fabricante o reales de distribuidor); nada generado por IA. Las fotos de distribuidor se marcan en el alt.
- El hero de Fendt Bianco Selection 515 SG es interior (foto oficial con familia) — se mantiene por ser el hero editorial elegido; el exterior añadido abre la galería.
- `merlin-caravanas-p0` (noindex) tiene los mismos 15 módulos + 2 lotes de blogs idénticos a esta rama (diff vacío); no hay fotos adicionales en otras ramas para estas fichas (búsqueda exhaustiva en las 77 ramas).
