# Punto 3 — Fotos reales con crédito (27/10/2026)

Criterio: modelo y año exactos, sin IA, solo prensa/web oficial del fabricante o Wikimedia Commons con licencia. webp < 300 KB.

## Hechas
| Página | Fichero | Fuente | Crédito / licencia | Peso |
|---|---|---|---|---|
| Ficha + blog Forthing Friday REEV 2025 (hero, era PLACEHOLDER) | public/media/forthing-friday-reev-2025-precio-ficha-tecnica-hero.webp (1600x952) | https://commons.wikimedia.org/wiki/File:Forthing_5_REEV_IMG_5921.jpg (Esslingen, 03/04/2026) | Alexander Migl, CC BY-SA 4.0 | 196 KB |
| Blog Challenger 380 (sin imagen: usaba og/hero genéricos) | public/media/challenger-380-2026-foto-challenger-salon.webp (1080x600) | https://www.challenger-camping-cars.fr/modele/380/ → 380-GRAPHITE-GD-INT-1080-600-crop.jpg (gama 2026 Graphite Edition) | © Challenger, web oficial | 45 KB |
| Blog Chausson Twist V594 (sin imagen) | public/media/chausson-v594-2026-foto-chausson-salon.webp (1080x600) | https://www.chausson-camping-cars.fr/modele/v594/ → V594-SPORT-SALON-V2-1080-600-crop.jpg (galería V594 2026) | © Chausson, web oficial | 45 KB |
| Blog Pössl Trenta 640 | (commit a4370d5c6) possl-trenta-640-2026-oficial-ext.webp, ya es la 1.ª imagen del blog → hero/og | autozeitung.de 17/01/2026, pie «Foto: Pössl» | Prensa Pössl | — |

Friday REEV = Forthing 5 REEV en Europa: lo confirman Wikipedia (Forthing T5 Evo, «Also called») y el anuncio luxauto.lu «Forthing Friday REEV … Découvrez le Forthing 5 REEV». Misma generación a la venta desde oct. 2025.

Cambios de código: la hero del blog es la primera `<img>` del contenido (src/pages/blog/[slug].tsx l.477), así que se antepone `<img>` + línea de crédito al contenido (en las dos copias de cada blog). En el blog Forthing se quitaron las `<img>` de `-oficial` y `-interior`, que eran PLACEHOLDER con alt falso («verde, vista lateral», «pantalla 14,6»), y se corrigió el alt de la hero. media-dimensiones.ts actualizado. Nuevo scripts/deploy/fotos-hotfix/fotos-hotfix-map-cosa-2710.json: la hero se mapea a sí misma para que fotos_hotfix.py no la vuelva a pisar con el aviso (map-3 no se toca: «nunca borres entradas»). Créditos añadidos en public/media-creditos.md.

## No hechas (sin foto válida) — prueba
- **Challenger 287 2026**: https://www.challenger-camping-cars.fr/modele/287/ solo publica fotos de equipamiento genéricas (isofix, matelas, fenêtre, toit panoramique…) y planos; la página de gama profiles-graphite-ultimate no tiene foto «287» (sí 240/260/270/317/318/328/380). Commons: 0 resultados («Challenger 287»). Blog sigue sin imagen propia.
- **Westfalia Amundsen 2026**: Commons solo tiene File:Westfalia Amundsen Fiat Ducato (1) ACC Berlin 2017.JPG (2017, otra generación). Las fotos actuales westfalia-amundsen-2026-oficial-*.webp vienen del catálogo 2022 (camperonline.it; docs/fotos-rv-residual-creditos.md l.32-34): no son 2026. La web de Westfalia 2026 (convención de mayo de 2026) solo muestra Columbus Liner, Nansen y Sven Hedin. No se sustituye ni se borra; queda para decisión.
- **Forthing Friday REEV interior y lateral**: no hay foto de interior del REEV en Commons; la web oficial dfm-forthing.com/friday-rhd-reev/ tiene un certificado caducado y una redirección anti-bot en bucle (no se forzó). Se quitaron del blog; los ficheros -oficial/-interior siguen como PLACEHOLDER (map-3), sin enlazar desde el blog.
- **Chausson V594 ficha**: sus fotos actuales son del concesionario Ulrich (no son de prensa); no se tocaron en este punto (el encargo era el blog).
