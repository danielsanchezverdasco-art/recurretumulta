# Fotos con fuente verificada en las 78 páginas bloqueantes (2/11/2026)

Decisión de Daniel (2/11 17:21 Madrid): el validador no se relaja; foto real con fuente o sin imagen. Nada de IA, de marcas de agua ni de `-hunt` sin fuente.

Fuente de las 12 fotos nuevas: Wikimedia Commons (licencia libre, uso editorial/comercial con atribución). Cada fichero se descargó del original de Commons (miniatura 1280 px) y se convirtió a webp q80; autor y licencia se leyeron de la API de Commons (extmetadata). Se guardan en `scripts/fotos-78-commons/` y `scripts/fix-fotos-pendientes-dist.py` las copia a `dist/media/` y pinta la foto con su crédito en la ficha.

| Página (slug) | Fichero | Autor | Licencia | Fuente |
|---|---|---|---|---|
| moto-guzzi-v9-bobber-2024-ficha-tecnica-precio | moto-guzzi-v9-bobber-2024-ficha-tecnica-precio-commons.webp | Corvettec6r | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Moto_Guzzi_V9_Bobber.jpg |
| vespa-gts-310-2025-ficha-tecnica-precio | vespa-gts-310-2025-ficha-tecnica-precio-commons.webp | AVMOTO | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Vespa_GTS_310_2025.jpg |
| ducati-monster-2025-ficha-tecnica-precio | ducati-monster-2025-ficha-tecnica-precio-commons.webp | AnotherLocalAuthor | CC0 | https://commons.wikimedia.org/wiki/File:Monster%2B_937_a.jpg |
| ducati-desertx-2025-ficha-tecnica-precio | ducati-desertx-2025-ficha-tecnica-precio-commons.webp | Artem Lepesin | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Ducati_DesertX_in_Barcelona.jpg |
| bmw-r-1300-gs-2024-ficha-tecnica-precio | bmw-r-1300-gs-2024-ficha-tecnica-precio-commons.webp | Corvettec6r | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:BMW_R1300_GS_Option_719_Tramuntana.jpg |
| suzuki-v-strom-800de-2024-ficha-tecnica-precio | suzuki-v-strom-800de-2024-ficha-tecnica-precio-commons.webp | GIM - Giri in Moto | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Suzuki_V-Strom_800DE_(3).jpg |
| suzuki-burgman-400-2025-ficha-tecnica-precio | suzuki-burgman-400-2025-ficha-tecnica-precio-commons.webp | AVMOTO | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Suzuki_Burgman_400_2025.jpg |
| bimota-tesi-h2-2024-ficha-tecnica-precio | bimota-tesi-h2-2024-ficha-tecnica-precio-commons.webp | Matthb1395 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Bimota_Tesi_H2_(2020).jpg |
| triumph-scrambler-400-x-2025-ficha-tecnica-precio | triumph-scrambler-400-x-2025-ficha-tecnica-precio-commons.webp | Rouv1505 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Triumph-Scrambler-400X.jpg |
| triumph-scrambler-400-x-2024-ficha-tecnica-precio | triumph-scrambler-400-x-2024-ficha-tecnica-precio-commons.webp | Rouv1505 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Triumph-Scrambler-400X.jpg |
| royal-enfield-himalayan-450-2025-ficha-tecnica-precio | royal-enfield-himalayan-450-2025-ficha-tecnica-precio-commons.webp | Rouv1505 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Royal-Enfield-Himalayan-450.jpg |
| bmw-ce-04-2025-ficha-tecnica-precio | bmw-ce-04-2025-ficha-tecnica-precio-commons.webp | Wikisympathisant | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:2024-06_BMW_CE_04.jpg |

## Hallazgos de la búsqueda

- Ramas remotas, tablón y carpetas locales (incl. los 4,5 GB de Merlín): 11 de los 78 slugs tenían un crédito de Commons en `media-creditos.md`, pero **9 de esos 11 ficheros locales NO son la foto de Commons citada** (solo coinciden Ducati Monster y DesertX). Por eso no se reutilizan los ficheros locales con ese crédito: se usa el original de Commons, con su autor y licencia reales. El crédito de `media-creditos.md` para esos 9 es erróneo y no debe citarse.
- Las `-hunt1..3` son de terceros con licencia «desconocida»; no se usan en ninguna de las 12 fichas nuevas. (Ojo: ya están en 1.471 páginas servidas con la fuente en el `alt`; decisión pendiente de Daniel.)
- Salas de prensa oficiales: no se ha tomado ninguna foto; las condiciones de uso editorial de cada marca exigen revisión una a una y no se ha podido confirmar ninguna licencia.

## Resto de páginas

- Páginas con otras fotos propias ya presentes en el repo/vivo (`/media/motos/<slug>-1|-2…`, galerías): se dejan como están (no son placeholder).
- Páginas sin imagen propia: diseño limpio, sin texto «Foto pendiente», sin logo y sin hueco (marcador vacío `data-foto-pendiente`).
- Tarjetas de rival que mostraban el placeholder de otro coche (Maserati Grecale → Porsche Cayenne; Aito M9 → Audi Q3 e-hybrid): se sustituyen por la foto real del mismo modelo (Cayenne `-hero`, Q3 `-foto1`).
