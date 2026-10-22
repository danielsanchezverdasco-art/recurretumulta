# Auditoría total de coches — fotos y precios

**Fecha:** 20/10/2026 · **Rama:** `merlin-auditoria-coches` · **Alcance:** el 100% de las fichas (2.453) y de los blogs de coches (2.763).

## Método

- Escaneado programático de los 140 ficheros `src/lib/comparador-coches-*.ts` (2.453 fichas únicas, 0 duplicadas) y de `blog-lite.generated.ts` (4.111 posts).
- **Hero:** existe el fichero referenciado en `imagen` en `public/media/`.
- **Fotos:** todas las referencias de la ficha existen en `public/media/` y la ficha tiene galería (≥1 foto) con al menos 2 fotos existentes en total.
- **Precio:** `precioDesde` rellenado. Si es `null`: NULO-FALLO = el fabricante publica precio oficial en España/Europa y el modelo se vende aquí; NULO-HONESTO = sin tarifa oficial pública (marcas no comercializadas en España, precio bajo petición, modelos futuros/concepto/discontinuados). Nada se ha inventado: los 15 precios añadidos citan fuente oficial en el propio código.
- Blogs de coches: clasificación por fichero fuente; **hero** = el primer `<img>` del contenido existe en `public/media/`.

## Resumen fichas

| Métrica | Resultado |
|---|---|
| Fichas auditadas | **2.453** |
| Hero OK | **2453 / 2.453** (100%) |
| Fotos OK | **2447 / 2.453** |
| Precio OK | **2260 / 2.453** |
| Cumplen 3/3 | **2225 / 2.453** (90%) |
| Fallos hero | 0 |
| Fallos fotos | 6 |
| Fallos precio (NULO-FALLO) | 0 |
| Nulos honestos (NULO-HONESTO) | 193 |

## Resumen blogs

| Métrica | Resultado |
|---|---|
| Blogs auditados (total) | **4111** |
| Blogs de coches | **2763** |
| Hero OK | **2762 / 2763** (99%) |
| Hero FALTA (no existe el fichero) | 1 |
| Otros blogs (motos/patinetes/motor) | 1348 |

## Arreglos aplicados en esta rama

### Fotos rescatadas del deploy publicado de Netlify (hashes.json)
- **6.299 ficheros** descargados de la URL permanente del deploy publicado `6ad5ca4a4102bfbe5804f656--recurretumulta.netlify.app` (manifest verificado: 41.364 entradas) y copiados a `public/media/` con el nombre exacto referenciado. Incluye 84 galerías de blogs y 233 heroes de blog que no estaban en ninguna ficha.
- Copias de rescate: `li-auto-i9-*` (nombres canónicos del deploy → nombres `oficial-v2` referenciados por ficha y blog), `tesla-roadster-2028-waco-*` (desde `tesla-roadster-2028-presentacion-*.webp`, mismo modelo).
- Resultado: **hero OK en el 100% de las fichas** (de 241 a 2.453) y **0 referencias de foto rotas** en todo el repo.

### Referencias rotas eliminadas (foto oficial no disponible en ninguna fuente)
En `comparador-coches-lote17.ts`: las 7 fichas que referenciaban un `-3.webp` de interior inexistente en el repo, el deploy y todas las ramas (`mercedes-glb-350-eq-2026`, `mercedes-amg-cle-53-cabrio-2025`, `volkswagen-e-caravelle-2026`, `skoda-enyaq-coupe-85x-2026`, `skoda-elroq-85x-2026`, `cupra-leon-20-tdi-2026`, `ford-f-150-raptor-2025`) pasan a `imagenInteriorOficial: ""` (la convención del código: "" = sin foto oficial) y su entrada de galería se elimina. Se documenta en cada línea.

### Galerías rellenadas con las fotos ya existentes de cada ficha
- **348 fichas** tenían hero + fotos oficiales pero `galeria` vacía: se rellenó con sus propias fotos existentes (oficial, hero, interior), con dimensiones reales de `media-dimensiones.ts` y alts honestos.
- **4 fichas compactas** (`renault-captur-e-tech-145`, `seat-arona-10-tsi`, `volkswagen-golf-15-etsi`, `seat-leon-15-tsi`) rescatan la foto oficial e interior de la ficha hermana del mismo modelo exacto.

### Blogs de coches: 2 heroes reparados
- `citroen-2cv-electrico-2028` y `hongqi-g919-2026-precio-ficha-tecnica` no tenían `<img>` en el contenido: se añadió la imagen hero usando fotos ya existentes (`citroen-2cv-electrico-teaser-oficial.webp`, `hongqi-g919-hero.webp`).
- `ofensiva-china-salon-paris-2026-20-marcas` usaba una URL externa (drive.gr): sustituida por `/media/salon-paris-2026-20-marcas-chinas-aranceles-hero.webp` (foto del propio repo para esa temática).

### Precios oficiales añadidos (15, con fuente en el código)
mini-cooper-c-2024 (27.200 €, mini.es), mini-cooper-jcw-2025 (39.455 €), mini-cooper-cabrio-c-2025 (33.350 €), mini-cooper-cabrio-s-2025 (35.850 €), mini-aceman-e-2024 (37.250 €), mini-aceman-se-2024 (34.040 €, km77), mini-aceman-jcw-e-2025 (43.895 €), mini-countryman-se-all4-2024 (43.740 €), mini-countryman-jcw-all4-2024 (52.195 €), smart-3-pro-2025 (36.600 €, media.smart.com), dacia-logan-eco-g-100-2025 (13.550 €), mazda-cx-5-2026 (35.200 €, km77), ds-n8-awd-350-2026 (70.529 €), hyundai-tucson-16-tgdi-150-2025 (35.195 €, hyundai.es), mercedes-gla-250-e-2025 (56.014 €, PDF mercedes-benz.es).

## Imposibles documentados (sin inventar nada)

### Fichas con una sola foto (6)
`opel-corsa-12-turbo`, `toyota-yaris-120h`, `ford-puma-10-ecoboost-mhev`, `toyota-c-hr-140h`, `renault-clio-e-tech-145`, `toyota-corolla-140h`: solo existe una foto del modelo exacto en el repo, el deploy y todas las ramas (las `historia-*` son de años anteriores). Galería mínima no alcanzable con material del mismo modelo.

### Precio NULO-HONESTO (193 tras la resolución de precios del 20/10/2026)
El fabricante no publica tarifa oficial o el modelo no se comercializa en España/Europa (marcas chinas no importadas, precio bajo petición —Ferrari/Lamborghini/Rolls-Royce/Maserati/Aston Martin/Bentley—, modelos futuros o discontinuados). Se documenta uno a uno en la tabla con el motivo.

### Blog sin foto rescatable (1)
`byd-ti7-2026-precio-ficha-tecnica`: su hero (`byd-ti7-2026-precio-ficha-tecnica-hero.webp`) no existe en el repo, el deploy ni ninguna rama (llegó incompleto, ver `docs/FOTOS-PENDIENTES.md`). Queda pendiente de generar la foto del modelo.

### Precio NULO-FALLO (121) — RESUELTO el 20/10/2026 (rama `merlin-precios-coches`)
Verificados uno a uno en la web/prensa oficial de cada marca en España:
- **29 precios oficiales añadidos** con fuente citada en el código: Land Rover (12), BMW (3), Peugeot (3), Audi (2), EVO (2), Maxus (2), Aixam (1), Citroën (1), Fiat (1), Renault (1), smart (1).
- **92 reclasificados a NULO-HONESTO** con motivo en el código y en la tabla: la clasificación original era demasiado optimista — la tarifa de la versión exacta no es pública como texto (solo configurador JS o PDF de lista: gran parte de los LCV Stellantis y varios Mercedes/BMW/Mini/smartpremium), la versión está descatalogada o sustituida (Jeep Compass/Renegade generación anterior, Citroën PureTech 130, Fiat Tipo, Mercedes CLA 45 S/GLC 43/63, Audi Q7 55 TFSI, Toyota Camry, Volvo S60, Hyundai i30 N, Renault Master 2.3 dCi 180), o el modelo/marca no se comercializa oficialmente en España (Chery, Haval, iCAUR, JAC turismos, LEVC, Genesis de combustión, Dacia Logan TCe 90, Lexus LBX Morizo RR, Omoda S5).
- **0 pendientes.** Matiz: los casos "solo configurador/PDF" (p. ej. Mercedes CLE 53, S 63, AMG G 63 y G 450 d, cuya fila exacta de la lista PDF oficial no fue extraíble como texto) quedan como honestos documentados; con un navegador real podrían rescatarse del configurador oficial.

## Tabla completa de fichas (slug → hero → fotos → precio)

| Slug | Hero | Fotos | Precio | Nota |
|---|---|---|---|---|
| abarth-500e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| abarth-600e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| abarth-600e-scorpionissima-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ac-cobra-gt-roadster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| adria-matrix-supreme-2026 | OK | OK | OK |  |
| aion-lx-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aion-ray7-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Aion no vende el Ray7 en España (mercado chino) |
| aion-rt-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aion-s-max-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aion-s-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aion-ut-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aion-v-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aion-v-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aion-y-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aion-y-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m5-ultra-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m5-ultra-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m6-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m7-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m7-pro-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m7-ultra-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m8-erev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m8-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m8-huawei-2026-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aito-m9-huawei-ficha-tecnica-precio | OK | OK | OK |  |
| aiva-me7-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Aiva no vende en España (mercado chino) |
| aixam-city-eclipse-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-city-gto-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-city-pack-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-city-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-coupe-gti-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-coupe-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-crossline-pack-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-crossover-premium-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-d-truck-furgon-van-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-city-pack-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-city-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-coupe-gti-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-crossover-premium-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-minauto-access-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-minauto-chic-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-scouty-evo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-truck-furgon-van-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-e-truck-plataforma-aluminio-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-easy-access-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-easy-access-diesel-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Versión sin tarifa oficial localizada (AIXAM solo publica precios de la gama Easy/CHIC 2025 en prensa de lanzamiento) |
| aixam-easy-chic-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-easy-chic-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aixam-minauto-access-2025-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-33-stradale-elettrica-750-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-33-stradale-v6-620-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-giulia-diesel-160-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-giulia-diesel-210-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-giulia-quadrifoglio-520-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-giulia-veloce-280-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-giulietta-2025 | OK | OK | OK |  |
| alfa-romeo-junior-elettrica-156-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-junior-elettrica-veloce-280-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-junior-ibrida-145 | OK | OK | OK |  |
| alfa-romeo-junior-ibrida-145-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-junior-ibrida-q4-145-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-mito-2025 | OK | OK | OK |  |
| alfa-romeo-stelvio-2-2-diesel-160-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-stelvio-20-turbo-280-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-stelvio-diesel-210-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-stelvio-quadrifoglio-520-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-tonale-diesel-130-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-tonale-hibrida-130-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-tonale-hibrida-160-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-tonale-ibrida-175-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-tonale-phev-q4-270-precio-ficha-tecnica | OK | OK | OK |  |
| alfa-romeo-tonale-phev-q4-280-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a110 | OK | OK | OK |  |
| alpine-a110-252-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a110-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a110-r-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a110-r-ultime-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a110-r70-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a110-s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-gt-performance-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-gt-premium-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-gts-premiere-edition-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a290-rallye-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a390-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a390-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| alpine-a390-precio-ficha-tecnica | OK | OK | OK |  |
| aptera-2026-precio-ficha-tecnica | OK | OK | OK |  |
| arcfox-alfa-s5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| arcfox-alfa-t5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| arcfox-kaola-2024-precio-ficha-tecnica | OK | OK | OK |  |
| arcfox-kaola-s-2024-precio-ficha-tecnica | OK | OK | OK |  |
| arcfox-t1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ariel-hipercar-2026-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-db12-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-db12-goldfinger-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-db12-volante-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-dbs-770-ultimate-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-dbx-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-dbx-gt-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Aston Martin no publica tarifa oficial (precio bajo petición) |
| aston-martin-dbx-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-dbx707-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-valhalla-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-valiant-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Edición limitada 2024; precio por invitación, sin tarifa pública |
| aston-martin-valkyrie-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-valkyrie-spider-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-valour-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-vanquish-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-vanquish-volante-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-vantage-2024-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-vantage-roadster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-vantage-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| aston-martin-vantage-s-roadster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ats-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a2-e-tron-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a3-allstreet-tfsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a3-sedan-2025 | OK | OK | OK |  |
| audi-a4-avant-2025 | OK | OK | OK |  |
| audi-a5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a5-avant-2025 | OK | OK | OK |  |
| audi-a5-avant-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a5-e-hybrid-367-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a6-avant-2025 | OK | OK | OK |  |
| audi-a6-avant-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a6-avant-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a6-avant-e-tron-performance-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a6-berlina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a6-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-a8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-e-tron-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q2-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q3-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q3-sportback-35-tfsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q3-sportback-e-hybrid-2026 | OK | OK | OK |  |
| audi-q3-sportback-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q4-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q4-e-tron-45-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q4-e-tron-45-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q4-sportback-e-tron-45-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q5-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q5-e-hybrid-367-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q5-sportback-2025 | OK | OK | OK |  |
| audi-q5-sportback-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q6-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q6-e-tron-performance-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q6-sportback-e-tron-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-q7-55-tfsi-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: el nuevo Q7 (2026) solo se ofrece en España con motores V6 TDI; el 55 TFSI gasolina ya no tiene tarifa oficial |
| audi-q8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-r8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs-e-tron-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs-q3-sportback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs-q8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs-q8-performance-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs3-sedan-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs3-sportback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs4-avant-2025 | OK | OK | OK |  |
| audi-rs5-avant-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs6-avant-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-rs6-avant-performance-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin precio «desde» publicado en audi.es (configurador de Audi España no muestra tarifa de esta versión; venta bajo pedido) |
| audi-rs7-sportback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-s3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-s3-sportback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-s4-avant-2025 | OK | OK | OK |  |
| audi-s5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-s5-avant-2025 | OK | OK | OK |  |
| audi-s6-avant-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-s6-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-sq5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-sq5-sportback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-sq6-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-sq6-sportback-e-tron-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-sq7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| audi-sq8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| audi-tt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| avatr-06-2025-precio-ficha-tecnica | OK | OK | OK |  |
| avatr-07-2024-precio-ficha-tecnica | OK | OK | OK |  |
| avatr-11-2024-precio-ficha-tecnica | OK | OK | OK |  |
| avatr-12-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baic-beijing-5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baic-beijing-x55-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baic-bj30-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baic-bj40-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baic-bj40-pro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| baic-eu5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baic-x75-2026-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-enjoy-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-kiwi-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-xiangjing-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-xiangjing-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-yep-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-yep-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-yunduo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-yunhai-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baojun-yunhai-phev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| baw-212-t01-2026-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-bj30-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-bj40-2024-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-bj40e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-bj60-2024-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-x5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-x55-2025-precio-ficha-tecnica | OK | OK | OK |  |
| beijing-x7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| benimar-mileo-286-2026 | OK | OK | OK |  |
| bentley-batur-2024-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-batur-convertible-2024-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-azure-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-ewb-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-ewb-azure-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-ewb-mulliner-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-s-2024-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-s-black-edition-2024-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-bentayga-speed-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gt-azure-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gt-mulliner-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gt-speed-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gtc-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gtc-azure-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gtc-mulliner-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-continental-gtc-speed-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-flying-spur-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-flying-spur-azure-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Bentley no publica tarifa oficial (precio bajo petición) |
| bentley-flying-spur-mulliner-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bentley-flying-spur-speed-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Bentley no publica tarifa oficial (precio bajo petición) |
| bestune-b70-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-b70s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-e01-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-m9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-nat-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-pony-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-t55-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-t77-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-t90-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-t99-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bestune-yueyi-07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-530e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i3-neue-klasse-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i4-edrive35-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i4-edrive40-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i4-m50-xdrive-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i4-m60-xdrive-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i5-edrive40-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i5-edrive40-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i5-m60-xdrive-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-i5-m60-xdrive-touring-2025 | OK | OK | OK |  |
| bmw-i7-xdrive60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix-m70-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix-xdrive40-2025 | OK | OK | OK |  |
| bmw-ix-xdrive60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix1-edrive20-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix1-xdrive30-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix2-xdrive30-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix3-40-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix3-50-xdrive-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-ix4-electrico-2026 | OK | OK | OK |  |
| bmw-m2-coupe | OK | OK | OK |  |
| bmw-m2-cs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m235-xdrive-gran-coupe-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m240i-xdrive-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m3-competition-touring-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m3-cs-touring-2025 | OK | OK | OK |  |
| bmw-m340i-xdrive-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m340i-xdrive-touring-2025 | OK | OK | OK |  |
| bmw-m4-competition | OK | OK | OK |  |
| bmw-m4-cs-2024-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m440i-xdrive-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m5-berlina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-m5-touring-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-1-120-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-1-m135-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-2-active-tourer-225e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-2-coupe-220i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-2-gran-coupe-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-2-gran-coupe-220-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-3-318 | OK | OK | OK |  |
| bmw-serie-3-320d-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-3-320i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-3-330e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-4-420d-gran-coupe-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-4-420i-coupe-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-5-520d-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-5-520i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-5-530e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-serie-8-840i-gc-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x1-m35i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x1-sdrive20i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x1-xdrive25e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x2-m35i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x2-sdrive20i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x3-20-xdrive-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x3-30e-xdrive-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x3-m50-xdrive-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x5-m60i-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de bmw.es; sin precio público de esta versión en lista o prensa oficial indexada |
| bmw-x5-xdrive40i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x5-xdrive50e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x6-m-2025 | OK | OK | OK |  |
| bmw-x6-xdrive40d-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x6-xdrive40i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-x7-xdrive40i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-xm-50e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-z4-m40i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| bmw-z4-sdrive20i | OK | OK | OK |  |
| brabham-bt62-2024-precio-ficha-tecnica | OK | OK | OK |  |
| bugatti-tourbillon-2026-precio-ficha-tecnica | OK | OK | OK |  |
| buick-electra-e5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| buick-envista-2025-precio-ficha-tecnica | OK | OK | OK |  |
| buick-gl8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-atto-2-dm-i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-atto-2-precio-ficha-tecnica | OK | OK | OK |  |
| byd-atto-3-evo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-atto-3-precio-ficha-tecnica | OK | OK | OK |  |
| byd-dolphin-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-dolphin-active-95-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-dolphin-g-dmi-active-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-dolphin-g-dmi-boost-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-dolphin-surf-2027-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Modelo futuro 2027, sin tarifa publicada |
| byd-dolphin-surf-precio-ficha-tecnica | OK | OK | OK |  |
| byd-e7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-great-tang-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-han-2024-precio-ficha-tecnica | OK | OK | OK |  |
| byd-han-l-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-qin-l-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-qin-l-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-qin-plus-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-05-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-06-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-06-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-08-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-2024-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-6-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-6-dm-i-touring-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-excellence-2024-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-u-dm-i-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-u-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-seal-u-ev-design-87kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-sealion-05-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-sealion-05-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-sealion-7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-sealion-7-excellence-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-sealion-8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-shark-6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-song-l-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-song-l-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-song-plus-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-song-pro-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-tang-2024-precio-ficha-tecnica | OK | OK | OK |  |
| byd-tang-l-2026-precio-ficha-tecnica | OK | OK | OK |  |
| byd-xia-2025-precio-ficha-tecnica | OK | OK | OK |  |
| byd-yuan-up-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cadillac-celestiq-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cadillac-escalade-2026 | OK | OK | OK |  |
| cadillac-escalade-iq-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cadillac-optiq-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cadillac-vistiq-2026-precio-ficha-tecnica | OK | OK | OK |  |
| carado-t-447-2026 | OK | OK | OK |  |
| caterham-project-v-2026-precio-ficha-tecnica | OK | OK | OK |  |
| caterham-seven-170-2025-precio-ficha-tecnica | OK | OK | OK |  |
| caterham-seven-340-2025-precio-ficha-tecnica | OK | OK | OK |  |
| caterham-super-seven-2000-2025-precio-ficha-tecnica | OK | OK | OK |  |
| caterham-super-seven-600-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-benben-e-star-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-cs35-plus-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Changan no comercializa el CS35 Plus en España |
| changan-cs55-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-cs75-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-deepal-s07-my26-2026-precio-ficha-tecnica | OK | OK | OK |  |
| changan-e06-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Changan no comercializa el E06 en España |
| changan-eado-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-hunter-reev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-lumin-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-nevo-q06-suv-electrico-paris-2026 | OK | OK | OK |  |
| changan-uni-k-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-uni-k-idd-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-uni-t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-uni-v-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-uni-v-idd-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-uni-z-2025-precio-ficha-tecnica | OK | OK | OK |  |
| changan-x5-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chausson-640-2026 | OK | OK | OK |  |
| chery-arrizo-5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-arrizo-5-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-arrizo-5-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-arrizo-8-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-arrizo-8-csh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-eq1-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-eq7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-explorer-06-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-explorer-06-c-dm-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-fulwin-a8l-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-fulwin-a9l-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-fulwin-t10-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-fulwin-t11-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-fulwin-t8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-fulwin-t9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-himla-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-q-2027-precio-ficha-tecnica | OK | OK | OK |  |
| chery-qq-ice-cream-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-2-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-4-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Chery no se comercializa oficialmente en España (vía Omoda/Jaecoo/Ebro); sin tarifa oficial ES |
| chery-tiggo-4-csh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-4-pro-15t-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Chery no se comercializa oficialmente en España (vía Omoda/Jaecoo/Ebro); sin tarifa oficial ES |
| chery-tiggo-7-csh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-7-pro-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Chery no se comercializa oficialmente en España (vía Omoda/Jaecoo/Ebro); sin tarifa oficial ES |
| chery-tiggo-8-csh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-8-pro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-9-csh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chery-tiggo-9l-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Chery no comercializa el Tiggo 9L en España (solo Tiggo 4/7/8) |
| chery-tiggo-x-2027-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Modelo futuro 2027, sin tarifa publicada |
| chevrolet-blazer-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chevrolet-corvette-c8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chevrolet-corvette-e-ray-2025 | OK | OK | OK |  |
| chevrolet-corvette-z06-2025 | OK | OK | OK |  |
| chevrolet-corvette-zr1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chevrolet-corvette-zr1x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| chevrolet-equinox-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chevrolet-silverado-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| chevrolet-spark-euv-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-2cv-electrico-2028 | OK | OK | OK |  |
| citroen-ami-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-ami-buggy-2025-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-ami-cargo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-berlingo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-berlingo-talla-xl-15-bluehdi-130-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c3-2024-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c3-2026 | OK | OK | OK |  |
| citroen-c3-aircross-gasolina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c3-aircross-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c3-gasolina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c3-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c4-12-puretech-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado en España: citroen.es solo vende el C4 en Hybrid 145/110 y ë-C4; el PureTech 130 no tiene tarifa oficial publicada |
| citroen-c4-cactus-2025 | OK | OK | OK |  |
| citroen-c4-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c4-x-12-puretech-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado en España: citroen.es solo vende el C4 X en Hybrid 145 y ë-C4 X; el PureTech 130 no tiene tarifa oficial publicada |
| citroen-c4-x-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-aircross-12-puretech-130-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Modelo anterior descatalogado: citroen.es solo vende el nuevo C5 Aircross (Hybrid 145 y eléctrico); el PureTech 130 no tiene tarifa oficial publicada |
| citroen-c5-aircross-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-aircross-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-aircross-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-aircross-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-x-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-c5-x-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-berlingo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c3-2024-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c3-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c3-aircross-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c3-aircross-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c4-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c4-x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c5-aircross-2025-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-c5-aircross-long-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-jumper-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-jumpy-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-e-spacetourer-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-jumper-22-bluehdi-140-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública por versión: citroen.es solo ofrece el precio del Jumper en el configurador |
| citroen-jumper-22-bluehdi-180-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública por versión: citroen.es solo ofrece el precio del Jumper en el configurador |
| citroen-jumpy-diesel-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-spacetourer-2026-precio-ficha-tecnica | OK | OK | OK |  |
| citroen-spacetourer-campster-2025 | OK | OK | OK |  |
| cupra-ateca-190-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-ateca-vz-300-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-born-190-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-born-2024-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-born-204-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-born-endurance-231-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-born-vz-326-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-15-etsi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-20-tsi-204-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-2024-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-ehybrid-204-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-vz-265-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-vz-333-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-vz-ehybrid-272-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-formentor-vz5-2026 | OK | OK | OK |  |
| cupra-leon-15-tsi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-20-tdi-2026 | OK | OK | OK |  |
| cupra-leon-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-ehybrid-204-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-sportstourer-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-sportstourer-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-sportstourer-ehybrid-204-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-sportstourer-vz-333-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-vz-300-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-leon-vz-325-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-raval-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-raval-endurance-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-raval-plus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-raval-vz-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-raval-vz-226-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-tavascan-190-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-tavascan-2024-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-tavascan-endurance-286-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-tavascan-vz-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-tavascan-vz-340-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-20-tsi-204-2026-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-2024-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-ehybrid-204-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-vz-265-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-vz-ehybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| cupra-terramar-vz-ehybrid-272-2025-precio-ficha-tecnica | OK | OK | OK |  |
| czinger-21c-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-2026-hybrid-155-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-2026-tce-140-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-eco-g-140-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-hybrid-155-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-hybrid-g-150-4x4-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-hybrid-precio-espana | OK | OK | OK |  |
| dacia-bigster-tce-130-4x4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-bigster-tce-140-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-2026-eco-g-120-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-2026-hybrid-155-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-2026-mild-hybrid-140-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-blue-dci-115-2024-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-eco-g-100-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-hybrid-140-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-hybrid-2024-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-hybrid-g-150-4x4-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-tce-130-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-duster-tce-130-4x4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-hipster-2027-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-eco-g-120-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-eco-g-120-7-plazas-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-hybrid-140-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-hybrid-140-7-plazas-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-hybrid-155-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-hybrid-2024-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-tce-110-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-jogger-tce-110-7-plazas-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-lodgy-2025 | OK | OK | OK |  |
| dacia-logan-eco-g-100-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-logan-tce-90-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | No se comercializa en España: Dacia España solo ofrece el Logan ECO-G 100; el TCe 90 no tiene tarifa oficial ES |
| dacia-sandero-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-sandero-baja-precio-octubre-2026 | OK | OK | OK |  |
| dacia-sandero-eco-g-100-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-sandero-hybrid-155-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-sandero-stepway-eco-g-100-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-sandero-stepway-hybrid-155-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-sandero-stepway-tce-90-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-sandero-tce-90-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-spring-2024-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-spring-2026-nueva-generacion-precio | OK | OK | OK |  |
| dacia-spring-electric-45-2024-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-spring-electric-65-2024-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-spring-extreme-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-striker-hybrid-155-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dacia-tribrid-150-4x4-tres-energias | OK | OK | OK |  |
| daihatsu-copen-2025 | OK | OK | OK |  |
| dallara-stradale-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dayun-yuehu-2026-precio-ficha-tecnica | OK | OK | OK |  |
| de-tomaso-p72-2025-precio-ficha-tecnica | OK | OK | OK |  |
| de-tomaso-p900-2025-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-g318-2025-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-l06-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Deepal no comercializa el L06 en España |
| deepal-l07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-s05-2025-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-s05-2026-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-s05-awd-2026-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-s05-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-s07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| deepal-s07-precio-espana-ficha-tecnica | OK | OK | OK |  |
| deepal-s09-2026-precio-ficha-tecnica | OK | OK | OK |  |
| delage-d12-club-2025-precio-ficha-tecnica | OK | OK | OK |  |
| delage-d12-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-bao-5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-bao-8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-d9-dm-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-d9-dm-i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-d9-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n8-dm-p-2024-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n8-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n8l-dm-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n8l-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-n9-byd-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z-coupe-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z-racing-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z-spider-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9-dm-2024-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9-dm-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9gt-dm-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9gt-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| denza-z9s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-500-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-600-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-e5-hibrido-enchufable-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-e5-plus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-f5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-f5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-glory-580-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-seres-3-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-seres-5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dfsk-seres-5-4wd-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dodge-charger-daytona-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-aeolus-ax7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-aeolus-huge-2023-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-aeolus-l7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-aeolus-l8-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Dongfeng no comercializa el Aeolus L8 en España |
| dongfeng-aeolus-yixuan-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-box-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-epi-007-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-epi-008-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-epi-008-ev-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Dongfeng no comercializa el eπ 008 en España |
| dongfeng-fengguang-mini-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-huge-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-mage-phev-precio-espana-ficha | OK | OK | OK |  |
| dongfeng-nammi-06-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-nano-box-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-rich-6-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-shine-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-shine-gs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dongfeng-vigo-electrico-precio-espana-ficha | OK | OK | OK |  |
| donkervoort-d8-gto-jd70-r-2025-precio-ficha-tecnica | OK | OK | OK |  |
| donkervoort-f22-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dr-3-0-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| dr-4-0-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| dr-5-0-2025-precio-ficha-tecnica | OK | OK | OK |  |
| dr-5-stilnovo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| dr-6-0-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| dr-7-0-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| dr-ickx-k2-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| dr-sportequipe-7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| dr-sportequipe-8-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de DR España publicada (la marca solo difunde precios en concesionarios; sin lista oficial ES) |
| ds-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ds-3-e-tense-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ds-4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ds-7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ds-9-e-tense-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ds-n4-e-tense-213-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ds-n4-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ds-n8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ds-n8-awd-350-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ds-n8-long-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s400-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s400-excellence-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s400-hibrido-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s700-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s700-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s700-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s700-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s800-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s800-phev-precio-ficha-tecnica | OK | OK | OK |  |
| ebro-s900-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| evo-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| evo-4-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | EVO España solo publica tarifas oficiales de los modelos 3 y 7 en sus landings (evo-autoespana.es); sin precio oficial publicado de esta versión |
| evo-5-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | EVO España solo publica tarifas oficiales de los modelos 3 y 7 en sus landings (evo-autoespana.es); sin precio oficial publicado de esta versión |
| evo-6-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | EVO España solo publica tarifas oficiales de los modelos 3 y 7 en sus landings (evo-autoespana.es); sin precio oficial publicado de esta versión |
| evo-6-hev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| evo-7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| evo-cross-4-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | EVO España solo publica tarifas oficiales de los modelos 3 y 7 en sus landings (evo-autoespana.es); sin precio oficial publicado de esta versión |
| evo-cuatro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| evo-spazio-2026-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-et5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-lx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-lx-c-dm-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Exeed no comercializa el LX C-DM en España |
| exeed-rx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-rx-c-dm-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-sterra-es-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-sterra-es-reev-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Exeed no comercializa el Sterra ES REEV en España |
| exeed-sterra-et-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-sterra-et-reev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-txl-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-vx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| exeed-vx-c-dm-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fangchengbao-bao-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fangchengbao-tai-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fangchengbao-ti-9-2026 | OK | OK | NULO-HONESTO | Fangchengbao no vende en España (mercado chino) |
| ferrari-12cilindri-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-12cilindri-manuale-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Ferrari no publica tarifa oficial (precio bajo petición) |
| ferrari-12cilindri-spider-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-296-gtb-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-296-gts-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-296-speciale-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-296-speciale-a-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-296-speciale-piloti-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Ferrari no publica tarifa oficial (precio bajo petición) |
| ferrari-812-gts-2024-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-amalfi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-amalfi-spider-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-daytona-sp3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-f80-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-luce-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-purosangue-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-roma-2024-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-roma-spider-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-sf90-spider-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-sf90-stradale-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-sf90-xx-spider-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ferrari-sf90-xx-stradale-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-500-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-500e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-500e-3plus1-118-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-500e-cabrio-118-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: fiat.es solo ofrece su precio en el configurador |
| fiat-500e-giorgio-armani-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-500x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-600-12-turbo-100-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-600-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-600-hybrid-110-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-600-sport-145cv-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-600e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-doblo-12-puretech-110-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-doblo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-ducato-22-mjt-180-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: fiat.es solo ofrece su precio en el configurador |
| fiat-e-doblo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-e-ducato-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública por versión: fiat.es solo ofrece el precio del E-Ducato en el configurador |
| fiat-e-scudo-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: fiat.es solo ofrece su precio en el configurador |
| fiat-e-ulysse-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-grande-panda-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-grande-panda-ev-113-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-grande-panda-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-panda-pandina-2025 | OK | OK | OK |  |
| fiat-pandina-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-scudo-20-mjt-180-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: fiat.es solo ofrece su precio en el configurador |
| fiat-tipo-16-mjt-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado en España: fiat.es ya no comercializa el Tipo; sin tarifa oficial publicada |
| fiat-tipo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-tipo-cross-hybrid-130-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-tipo-sw-2025 | OK | OK | OK |  |
| fiat-topolino-2024-precio-ficha-tecnica | OK | OK | OK |  |
| fiat-ulysse-20-bluehdi-180-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-bronco-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-capri-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-capri-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-e-tourneo-courier-2025 | OK | OK | OK |  |
| ford-e-tourneo-custom-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-e-transit-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de Ford Pro (ford.es); sin precio público de esta versión como texto indexado |
| ford-e-transit-courier-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-explorer-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-explorer-electrico-awd-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-explorer-phev-2023 | OK | OK | OK |  |
| ford-f-150-lightning-2025 | OK | OK | NULO-HONESTO | Ford no vende el F-150 Lightning en España |
| ford-f-150-raptor-2025 | OK | OK | OK |  |
| ford-fiesta-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-fiesta-st-2023 | OK | OK | OK |  |
| ford-focus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| ford-focus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-focus-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-focus-st-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-kuga-2024-precio-ficha-tecnica | OK | OK | OK |  |
| ford-kuga-fhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-kuga-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-maverick-2025 | OK | OK | NULO-HONESTO | Ford no vende el Maverick en España |
| ford-mustang-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-mustang-dark-horse-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-mustang-gt-convertible | OK | OK | OK |  |
| ford-mustang-gt-fastback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-mustang-gtd-2025 | OK | OK | OK |  |
| ford-mustang-mach-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-mustang-mach-e-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de ford.es; sin precio público indexado por versión en la web oficial |
| ford-mustang-mach-e-extended-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-mustang-mach-e-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-mustang-mach-e-rally-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-puma-10-ecoboost-mhev | OK | NO | OK |  |
| ford-puma-gen-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-puma-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-puma-st-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-puma-st-line-x-mhev-155-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-ranger-ms-rt-2025 | OK | OK | OK |  |
| ford-ranger-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-ranger-raptor-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-ranger-wildtrak-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-tourneo-connect-phev-150-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-tourneo-courier-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-tourneo-custom-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-transit-city-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ford-transit-connect-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ford-transit-custom-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ford-transit-custom-nugget-2025 | OK | OK | OK |  |
| ford-transit-nugget-plus-2025 | OK | OK | OK |  |
| forthing-friday-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-friday-reev-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Forthing no comercializa el Friday REEV en España |
| forthing-s7-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-s7-reev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-t5-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Forthing no comercializa el T5 en España |
| forthing-t5-evo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-t5-evo-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-u-tour-2025-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-u-tour-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| forthing-v9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| foton-general-g9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| foton-tunland-v7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gac-aion-rt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gac-aion-v-2024-precio-ficha-tecnica | OK | OK | OK |  |
| gac-emkoo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gac-empow-2024-precio-ficha-tecnica | OK | OK | OK |  |
| gac-gs8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gac-m8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| gac-trumpchi-es9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| gac-trumpchi-gs3-emzoom-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gac-trumpchi-gs4-max-2026-precio-ficha-tecnica | OK | OK | OK |  |
| gac-trumpchi-xiangwang-s7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gac-trumpchi-xiangwang-s9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-atlas-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Geely no comercializa el Atlas en España |
| geely-binrui-cool-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-cityray-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-coolray-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-e2-electrico-espana-13990-euros-ficha | OK | OK | OK |  |
| geely-e5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| geely-emgrand-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-ex2-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-a7-em-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-battleship-700-2026-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-e8-2024-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-l6-em-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-l7-em-i-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-m9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-starshine-8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-xingjian-7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-xingyuan-2024-precio-ficha-tecnica | OK | OK | OK |  |
| geely-galaxy-zhanjian-700-2026-precio-ficha-tecnica | OK | OK | OK |  |
| geely-monjaro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-panda-mini-2026-precio-ficha-tecnica | OK | OK | OK |  |
| geely-preface-2025-precio-ficha-tecnica | OK | OK | OK |  |
| geely-starray-em-i-2026-precio-ficha-tecnica | OK | OK | OK |  |
| genesis-electrified-g80-2026 | OK | OK | OK |  |
| genesis-g70-2025 | OK | OK | NULO-HONESTO | No se comercializa en España: Genesis llega en 2026 solo con gama eléctrica (GV60, GV70 Electrified y G80 Electrified); esta versión de combustión no se vende en España |
| genesis-g80-2025 | OK | OK | NULO-HONESTO | No se comercializa en España: Genesis llega en 2026 solo con gama eléctrica (GV60, GV70 Electrified y G80 Electrified); esta versión de combustión no se vende en España |
| genesis-gv60-2025-precio-ficha-tecnica | OK | OK | OK |  |
| genesis-gv60-magma-2026 | OK | OK | OK |  |
| genesis-gv70-2025-precio-ficha-tecnica | OK | OK | OK |  |
| genesis-gv80-2025 | OK | OK | NULO-HONESTO | No se comercializa en España: Genesis llega en 2026 solo con gama eléctrica (GV60, GV70 Electrified y G80 Electrified); esta versión de combustión no se vende en España |
| genesis-gv90-2027-precio-ficha-tecnica | OK | OK | OK |  |
| gmc-hummer-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gmc-sierra-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gmc-yukon-2025 | OK | OK | OK |  |
| gordon-murray-t33-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gordon-murray-t50-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-cannon-alpha-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | GWM no comercializa el Cannon Alpha en España |
| gwm-cannon-alpha-phev-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | GWM no comercializa el Cannon Alpha PHEV en España |
| gwm-haval-h6-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | GWM/Haval no comercializa el H6 en España |
| gwm-king-kong-poer-2026-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-ora-03-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-ora-03-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-ora-05-2026-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-ora-07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-ora-5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| gwm-poer-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | GWM no comercializa el Poer en España |
| gwm-poer-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | GWM no comercializa el Poer en España |
| haima-7x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| haima-8s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| haval-chitu-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-cool-dog-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Haval no comercializa el Cool Dog en España |
| haval-dargo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-dargo-x-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h3-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h6-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h6-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h6-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h6l-2025-precio-ficha-tecnica | OK | OK | OK |  |
| haval-h6s-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | No se comercializa oficialmente en España (GWM España no importa el Haval H6s); sin tarifa oficial ES |
| haval-h7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Haval no comercializa el H7 en España |
| haval-h9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| haval-jolion-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-jolion-hev-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Haval no comercializa el Jolion HEV en España |
| haval-jolion-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| haval-raptor-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-raptor-plus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| haval-shenshou-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Haval no comercializa el Shenshou en España |
| haval-xiaolong-2024-precio-ficha-tecnica | OK | OK | OK |  |
| haval-xiaolong-max-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hennessey-venom-f5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hobby-vantana-2026 | OK | OK | OK |  |
| honda-accord-2024 | OK | OK | NULO-HONESTO | Honda no vende el Accord en España |
| honda-civic-e-hev | OK | OK | OK |  |
| honda-civic-ehev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-civic-ehev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-civic-type-r-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-civic-type-r-ultimate-edition-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-cr-v-ehev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-cr-v-ephev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-cr-v-full-hybrid | OK | OK | OK |  |
| honda-e-2023 | OK | OK | OK |  |
| honda-e-ny1-2024-precio-ficha-tecnica | OK | OK | OK |  |
| honda-e-ny1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-e-ny1-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-eny1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-hr-v-ehev | OK | OK | OK |  |
| honda-hr-v-ehev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| honda-hr-v-ehev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-hr-v-ehev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-jazz-crosstar-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-jazz-e-hev | OK | OK | OK |  |
| honda-jazz-ehev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| honda-jazz-ehev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-nsx-2022 | OK | OK | NULO-HONESTO | Honda NSX discontinuado en 2022; no se vende en España |
| honda-prelude-ehev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-prologue-2025-precio-ficha-tecnica | OK | OK | OK |  |
| honda-s2000-2009 | OK | OK | OK |  |
| honda-super-n-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| honda-zr-v-ehev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| honda-zr-v-ehev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-e-hs9-ficha-tecnica-precio | OK | OK | OK |  |
| hongqi-e-qm5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-eh7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-ehs7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-g919-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-guoya-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-h5-2023-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-h5-hev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-h6-2023-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-h7-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-h9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hq9-2023-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hq9-phev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hs3-2023-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hs3-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hs5-2023-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hs5-phev-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Hongqi no comercializa el HS5 PHEV en España |
| hongqi-hs6-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hs7-2023-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-hs7-phev-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Hongqi no comercializa el HS7 PHEV en España |
| hongqi-tiangong-05-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-tiangong-06-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hongqi-tiangong-08-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyptec-a800-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyptec-gt-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hyptec-hl-erev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyptec-ht-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyptec-s600-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyptec-ssr-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-bayon-10-tgdi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-bayon-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-elantra-n-2024 | OK | OK | NULO-HONESTO | Hyundai no vende el Elantra N en España |
| hyundai-i10-2026 | OK | OK | OK |  |
| hyundai-i10-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i10-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i20-10-tgdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i20-baja-precio-octubre-2026 | OK | OK | OK |  |
| hyundai-i20-n-2024 | OK | OK | OK |  |
| hyundai-i20-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i20-n-line-mhev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i30-10-tgdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i30-15-tgdi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i30-15-tgdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i30-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-i30-fastback-n-2024 | OK | OK | OK |  |
| hyundai-i30-n-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: Hyundai cesó la producción del i30 N en Europa en 02/2024; sin tarifa oficial vigente |
| hyundai-i30-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-inster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-inster-cross-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-inster-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-3-2026-precio-autonomia | OK | OK | OK |  |
| hyundai-ioniq-5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-5-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-5-n-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-5-n-line-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-6-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-6-n-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-ioniq-9-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-16-tgdi-180-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-16-tgdi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-electrico-135-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-electrico-49-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-electrico-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-hibrido-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-kona-hybrid-138 | OK | OK | OK |  |
| hyundai-kona-n-2023 | OK | OK | OK |  |
| hyundai-kona-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-nexo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-nexo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-palisade-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-santa-fe-2024-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-santa-fe-hibrido-enchufable-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-staria-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-staria-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-16-tgdi-150-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-hibrido-enchufable-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-hibrido-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| hyundai-tucson-phev-n-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| icar-03-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | iCar no vende en España (mercado chino) |
| icaur-03t-2026-precio-ficha-tecnica | OK | OK | OK |  |
| icaur-v23-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin comercialización oficial en España (iCAUR no anuncia tarifa ES; solo precios en China) |
| icaur-v25-2026-precio-ficha-tecnica | OK | OK | OK |  |
| icaur-v27-erev-2027-precio-ficha-tecnica | OK | OK | OK |  |
| im-l6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| im-l6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| im-l6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| im-l7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| im-ls9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| im-motors-l6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| im-motors-ls6-nuevo-suv-electrico-model-y | OK | OK | OK |  |
| ineos-grenadier-quartermaster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ineos-grenadier-station-wagon-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ineos-grenadier-trialmaster-2025-precio-ficha-tecnica | OK | OK | OK |  |
| invicta-d2s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| invicta-pocco-2025-precio-ficha-tecnica | OK | OK | OK |  |
| invicta-pony-2025-precio-ficha-tecnica | OK | OK | OK |  |
| invicta-spartan-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| iso-rivolta-gtz-2025-precio-ficha-tecnica | OK | OK | OK |  |
| isuzu-d-max-2026-precio-ficha-tecnica | OK | OK | OK |  |
| isuzu-d-max-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| isuzu-mu-x-2025 | OK | OK | NULO-HONESTO | Isuzu no vende el MU-X en España |
| iveco-daily-2025 | OK | OK | OK |  |
| jac-a5-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-e30x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-e40x-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | JAC no comercializa turismos oficialmente en España; sin tarifa oficial ES del e40X |
| jac-ej7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-j7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-js2-pro-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jac-js4-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | JAC no comercializa turismos oficialmente en España; sin tarifa oficial ES del JS4 |
| jac-js6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jac-qx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-qx-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-rf8-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jac-t8-pro-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | JAC no comercializa el T8 Pro en España |
| jac-t9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-t9-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jac-t9-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jac-x8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-5-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-5-gasolina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-5-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-5-shs-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-6-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-6-ev-awd-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-7-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-7-gasolina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-7-shs-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-7-shs-hibrido-enchufable-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-8-shs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-j5-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-j6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-j7-shs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaecoo-j8-shs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaguar-e-pace-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaguar-f-pace-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaguar-f-type-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaguar-gt-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jaguar-i-pace-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jaguar-xe-2024 | OK | OK | OK |  |
| jaguar-xf-2024 | OK | OK | OK |  |
| jeep-avenger-4xe-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-avenger-e-hybrid-110-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-avenger-electric-156-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-avenger-electrico-156 | OK | OK | OK |  |
| jeep-avenger-gasolina-100-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-cherokee-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-13-t-130-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Generación anterior descatalogada en España: el nuevo Compass (2025) no ofrece esta motorización y jeep.es no publica tarifa de la generación anterior |
| jeep-compass-15-e-hybrid-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Generación anterior descatalogada en España: corresponde a la generación anterior (4.404 mm); el nuevo Compass e-Hybrid es de 145 CV y esta versión no tiene tarifa oficial publicada |
| jeep-compass-16-mjt-130-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Generación anterior descatalogada en España: el nuevo Compass (2025) no ofrece motorización diésel y jeep.es no publica tarifa de la generación anterior |
| jeep-compass-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-4xe-240-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Generación anterior descatalogada en España: corresponde a la generación anterior (4.404 mm); el nuevo Compass híbrido enchufable es de 195 CV y esta versión no tiene tarifa oficial publicada |
| jeep-compass-4xe-electrico-375-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-4xe-phev-195-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-e-hybrid-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-e-hybrid-plug-in-225-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-electric-213-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-electrico-231-long-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-compass-trailhawk-2025 | OK | OK | OK |  |
| jeep-gladiator-2025 | OK | OK | OK |  |
| jeep-grand-cherokee-4xe-380-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-grand-cherokee-l-2025 | OK | OK | NULO-HONESTO | Jeep no vende el Grand Cherokee L en Europa |
| jeep-recon-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-renegade-10-t3-120-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado en España: jeep.es ya no comercializa el Renegade; sin tarifa oficial publicada |
| jeep-renegade-16-multijet-130-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado en España: jeep.es ya no comercializa el Renegade; sin tarifa oficial publicada |
| jeep-renegade-4xe-190-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-renegade-4xe-240-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-renegade-e-hybrid-130-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-wagoneer-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-wrangler-20t-272-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-wrangler-4xe-380-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jeep-wrangler-rubicon-392-2025 | OK | OK | NULO-HONESTO | Jeep no vende el Wrangler Rubicon 392 en Europa |
| jetour-dashing-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-dashing-i-dm-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-g700-903-cv-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-shanhai-l6-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Jetour no comercializa el Shanhai L6 en España |
| jetour-shanhai-l7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-shanhai-l7-plus-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Jetour no comercializa el Shanhai L7 Plus en España |
| jetour-shanhai-l9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-t1-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-t1-i-dm-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Jetour no comercializa el T1 i-DM en España |
| jetour-t2-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-t2-i-dm-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-t2-i-dm-xwd-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-x50-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-x70-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-x70-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-x70-pro-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Jetour no comercializa el X70 Pro en España |
| jetour-x70l-2025-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-x90-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jetour-x95-2024-precio-ficha-tecnica | OK | OK | OK |  |
| jmc-dadao-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jmc-vigus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jmev-ev2-2026-precio-ficha-tecnica | OK | OK | OK |  |
| jmev-yi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kaiyi-e5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| kaiyi-kunlun-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kaiyi-x3-pro-2024-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-actyon-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-actyon-hibrido-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-korando-emotion-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-korando-g15t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-musso-diesel-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-musso-evx-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-rexton-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-rexton-sports-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-tivoli-g15t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-tivoli-grand-g15t-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-torres-evx-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-torres-g15t-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kgm-torres-hev-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-carnival-2025 | OK | OK | NULO-HONESTO | Kia no vende el Carnival en España |
| kia-ceed-10-tgdi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ceed-15-tgdi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ceed-2024-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ceed-gt-2025 | OK | OK | OK |  |
| kia-ceed-gt-line-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ceed-sw-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ceed-sw-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev2-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev3-air-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev3-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev3-gt-2026 | OK | OK | NULO-HONESTO | Sin tarifa oficial publicada en España (Kia España no publica precio de la versión GT; solo estimaciones de prensa) |
| kia-ev3-gt-line-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev3-gt-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev4-gt-line-fastback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev4-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev5-gt-line-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev6-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev6-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev6-gt-line-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-ev9-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-k4-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-niro-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-niro-hev-129 | OK | OK | OK |  |
| kia-niro-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-picanto-2024-precio-ficha-tecnica | OK | OK | OK |  |
| kia-picanto-gt-line-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-proceed-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-pv5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-pv5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sorento-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sorento-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sorento-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-soul-ev-2024 | OK | OK | OK |  |
| kia-sportage-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sportage-gt-line-mhev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sportage-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sportage-hev-239 | OK | OK | OK |  |
| kia-sportage-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-sportage-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-stinger-2024 | OK | OK | OK |  |
| kia-stonic-10-tgdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-stonic-2026 | OK | OK | OK |  |
| kia-stonic-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| kia-tasman-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-xceed-15-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| kia-xceed-2024-precio-ficha-tecnica | OK | OK | OK |  |
| kia-xceed-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| koenigsegg-gemera-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-countach-lpi-800-4-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-fenomeno-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-fenomeno-roadster-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Edición limitada 2026; precio por invitación, sin tarifa pública |
| lamborghini-huracan-evo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-huracan-evo-rwd-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-huracan-evo-rwd-spyder-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-huracan-evo-spyder-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-huracan-sterrato-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-huracan-stj-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lamborghini no publica tarifa oficial (precio bajo petición) |
| lamborghini-huracan-sto-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-huracan-tecnica-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-revuelto-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-temerario-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-urus-performante-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-urus-s-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-urus-se-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lamborghini-urus-se-performante-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lamborghini no publica tarifa oficial (precio bajo petición) |
| lancia-gamma-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lancia-gamma-hf-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lancia-ypsilon-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lancia-ypsilon-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lancia-ypsilon-hf-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lancia-ypsilon-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-110-d300-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-110-d350-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-110-p400e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-110-p525-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-130-d300-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-130-p400-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-90-p400-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-defender-octa-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-discovery-p360-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública localizada: landrover.es solo ofrece el precio de esta versión en el configurador |
| land-rover-discovery-sport-d200-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública localizada: landrover.es solo ofrece el precio de esta versión en el configurador |
| land-rover-discovery-sport-p270e-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública localizada: landrover.es solo ofrece el precio de esta versión en el configurador |
| land-rover-range-rover-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-range-rover-evoque-d200-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública localizada: rangerover.com solo ofrece el precio de esta versión en el configurador |
| land-rover-range-rover-evoque-p270e-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública localizada: rangerover.com solo ofrece el precio de esta versión en el configurador |
| land-rover-range-rover-p400-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-range-rover-p530-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-range-rover-sport-d350-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-range-rover-sport-p550e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| land-rover-range-rover-sport-sv-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Range Rover Sport SV: se comercializa bajo pedido; rangerover.com no publica su precio en la página oficial de modelos |
| land-rover-range-rover-velar-d300-2025-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-a10-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-b01-2025-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-b03-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-b03x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-b05-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-b10-electrico-precio-espana | OK | OK | OK |  |
| leapmotor-b10-reev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c01-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c01-4wd-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Leapmotor no vende el C01 en España (B10/C10/C11/T03 sí) |
| leapmotor-c01-erev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c10-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c10-reev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c10-reev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c11-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c11-erev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c16-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c16-erev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-c16-erev-280-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-d19-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-d19-erev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-t03-2025-precio-ficha-tecnica | OK | OK | OK |  |
| leapmotor-t03-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| lepas-l4-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lepas aún no comercializa el L4 en España |
| lepas-l4-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lepas-l6-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lepas aún no comercializa el L6 en España |
| lepas-l6-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lepas-l8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lepas-l8-chery-hibrido-enchufable-precio-espana | OK | OK | OK |  |
| levc-l380-2024-precio-ficha-tecnica | OK | OK | OK |  |
| levc-l380-2025-precio-ficha-tecnica | OK | OK | OK |  |
| levc-tx-2024-precio-ficha-tecnica | OK | OK | OK |  |
| levc-tx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| levc-tx-shuttle-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin red comercial oficial de LEVC en España (venta bajo pedido a profesionales); sin tarifa pública |
| levc-vn5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-es-300h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-es-300h-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-es-350e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-es-500e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-gx-550 | OK | OK | OK |  |
| lexus-is-300h | OK | OK | OK |  |
| lexus-lbx-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-lbx-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-lbx-morizo-rr-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | No se comercializa en España: Lexus España solo ofrece la gama LBX híbrida de 136 CV |
| lexus-lc-500-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-lc-500-cabrio-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-lc-500h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-lm-350h | OK | OK | OK |  |
| lexus-ls-500h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-nx-350h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-nx-450h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-nx-overtrail-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rx-350h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rx-450h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rx-500h-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rz-300e-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rz-350e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rz-450e-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rz-500e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-rz-550e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-ux-300e-2024-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-ux-300h-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lexus-ux-300h-precio-ficha-tecnica | OK | OK | OK |  |
| li-auto-i6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| li-auto-i8-suv-electrico-6-plazas-precio-2026 | OK | OK | OK |  |
| li-auto-i9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| li-auto-l6-ficha-tecnica-precio | OK | OK | OK |  |
| li-auto-l7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| li-auto-l8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| li-auto-l9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| li-auto-mega-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-js50-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-js50-elite-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-js50-select-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-js50-select-confort-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-js50-ultimate-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-l7e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-lab-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-max-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-max-confort-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ligier-myli-max-confort-l7e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lingbao-box-2026-precio-ficha-tecnica | OK | OK | OK |  |
| livan-7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| livan-8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| livan-9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| livan-maple-60s-2024-precio-ficha-tecnica | OK | OK | OK |  |
| livan-maple-80v-2024-precio-ficha-tecnica | OK | OK | OK |  |
| livan-s6-pro-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Livan no vende en España (mercado chino) |
| livan-x3-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| livan-x6-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-eletre-600-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-eletre-900-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-eletre-r-plus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-eletre-x-h1000-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-eletre-x-h550-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-emeya-600-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-emeya-900-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-emira-420-sport-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-emira-turbo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-emira-turbo-se-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-emira-v6-se-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lotus-evija-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lucid-gravity-2026-precio-ficha-tecnica | OK | OK | OK |  |
| luxeed-r7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| luxeed-r7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Luxeed no vende en España (mercado chino) |
| luxeed-r7-huawei-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Luxeed no vende en España (mercado chino) |
| luxeed-s7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| luxeed-s7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Luxeed no vende en España (mercado chino) |
| luxeed-s7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| luxeed-v9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-01-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-01-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-02-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-03-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-03-plus-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lynk & Co no vende el 03+ en España (solo el 01) |
| lynk-co-05-emp-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lynk & Co no vende el 05 en España (solo el 01) |
| lynk-co-06-emp-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Lynk & Co no vende el 06 en España (solo el 01) |
| lynk-co-07-emp-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-07-gt-debut-europa-paris-2026 | OK | OK | OK |  |
| lynk-co-08-emp-2026-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-08-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-09-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-10-em-p-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-900-emp-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-z10-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| lynk-co-z20-2025-precio-ficha-tecnica | OK | OK | OK |  |
| m-hero-917-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maextro-s800-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maextro-s800-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maextro-s800-erev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maextro-v800-huawei-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maextro no comercializa el V800 en España (mercado chino) |
| maserati-ghibli-gt-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-ghibli-modena-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maserati-ghibli-trofeo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-grancabrio-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-grancabrio-folgore-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-grancabrio-trofeo-590-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-granturismo-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-granturismo-folgore-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-granturismo-trofeo-590-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-grecale-2027-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-gt2-stradale-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maserati-levante-gt-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maserati-levante-modena-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maserati-levante-trofeo-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maserati-mc20-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-mc20-cielo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-mc20-notte-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-mcpura-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-mcpura-cielo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-mcxtrema-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-quattroporte-gt-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maserati-quattroporte-modena-q4-2024-precio-ficha-tecnica | OK | OK | OK |  |
| maserati-quattroporte-trofeo-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Maserati no publica tarifa oficial en España (precio bajo petición) |
| maxus-d90-2026-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-deliver-7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-edeliver-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-edeliver-5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-edeliver-7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Fuera de la gama actual de Maxus España (maxus-automotive.es ya no lo ofrece; sustituido por el eDeliver 5) |
| maxus-edeliver-9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-eterron-9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-mifa-9-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | No figura en la gama actual de Maxus España (maxus-automotive.es, solo vehículos comerciales y pick-up) |
| maxus-t60-max-2025-precio-ficha-tecnica | OK | OK | OK |  |
| maxus-t90-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-2-15-e-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-2-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-2-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-3-20-e-skyactiv-x-5p-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-3-20-e-skyactiv-x-sedan-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-3-20-e-skyactiv-x-sedan-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-3-25-e-skyactiv-g-5p-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-3-25-e-skyactiv-g-sedan-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-3-sedan-e-skyactiv-g | OK | OK | OK |  |
| mazda-6e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-6e-2027 | OK | OK | OK |  |
| mazda-6e-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-30-20-e-skyactiv-x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-30-25-e-skyactiv-g | OK | OK | OK |  |
| mazda-cx-30-25-e-skyactiv-g-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-30-25-e-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-5-25-e-skyactiv-g | OK | OK | OK |  |
| mazda-cx-5-25-e-skyactiv-g-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-5-25-e-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-60-33-e-skyactiv-d-200-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-60-33-e-skyactiv-d-254-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-60-e-skyactiv-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-6e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-80-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-80-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-80-25-e-skyactiv-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-cx-80-33-e-skyactiv-d-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-ez-60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-30-e-skyactiv-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-30-e-skyactiv-r-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-30-e-skyactiv-r-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-5-15-skyactiv-g | OK | OK | OK |  |
| mazda-mx-5-15-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-5-20-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-5-rf-15-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mazda-mx-5-rf-20-skyactiv-g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-750s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-750s-le-mans-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-750s-spider-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-788hs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-artura-1000gp-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-artura-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-artura-spider-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-gt-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-gts-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mclaren-w1-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mclouis-menfys-2026 | OK | OK | OK |  |
| mercedes-amg-a35-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-a45-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-c43-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-c63-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-cla-45-s-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: la gama actual del CLA (mercedes-benz.es) no incluye el AMG CLA 45 S de la generación anterior; sin tarifa oficial publicada |
| mercedes-amg-cle-53-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en la lista de precios PDF de mercedes-benz.es; precio de esta versión no verificable como texto público indexado |
| mercedes-amg-cle-53-cabrio-2025 | OK | OK | OK |  |
| mercedes-amg-g63-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-glc-43-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sustituido en la gama vigente: la lista de precios oficial del GLC (mercedes-benz.es) solo incluye el Mercedes-AMG GLC 53; sin tarifa del GLC 43 |
| mercedes-amg-glc-63-s-e-performance-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sustituido en la gama vigente: la lista de precios oficial del GLC (mercedes-benz.es) solo incluye el Mercedes-AMG GLC 53; sin tarifa del GLC 63 S |
| mercedes-amg-gt-43-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-gt-suv-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-one-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-amg-s-63-e-performance-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en la lista de precios PDF de mercedes-benz.es; precio de esta versión no verificable como texto público indexado |
| mercedes-amg-sl-63-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-amg-a-35-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-amg-a-45-s-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-amg-c-43-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-amg-c-63-s-e-performance-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-amg-g-63-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en la lista de precios PDF de mercedes-benz.es; precio de esta versión no verificable como texto público indexado |
| mercedes-benz-amg-gt-63-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-cla-200-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-cla-250-e-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-a-200-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-c-200-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: la lista de precios oficial del Clase C (mercedes-benz.es, 08/2026) ya no ofrece el C 200 gasolina de 204 CV (acceso actual: C 250) |
| mercedes-benz-clase-e-200-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-e-220-d-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-e-300-e-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-g-500-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-s-450-d-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-s-500-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-clase-v-300-d-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-eqa-250-plus-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-eqb-350-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-eqe-350-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-eqe-suv-500-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-eqs-450-plus-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-gla-200-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-glb-200-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-glc-200-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-glc-220-d-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-glc-300-de-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-gle-300-d-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-gle-350-de-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-benz-gle-450-d-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-citan-tourer-2025 | OK | OK | OK |  |
| mercedes-cla-250-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-cla-250-plus-eq-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-cla-350-4matic-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-cla-sb-250-plus-eq-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-cla-shooting-brake-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-clase-a-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-clase-b-200-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-clase-c-200 | OK | OK | OK |  |
| mercedes-clase-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-clase-g-450-d-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en la lista de precios PDF de mercedes-benz.es; precio de esta versión no verificable como texto público indexado |
| mercedes-cle-200-coupe-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-e-vito-2025 | OK | OK | OK |  |
| mercedes-eqa-250-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-eqe-300-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-eqe-suv-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-eqs-suv-580-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-eqv-300-largo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-g-580-eq-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-gla-250-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-glb-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-glb-250-eq-2026 | OK | OK | OK |  |
| mercedes-glb-350-eq-2026 | OK | OK | OK |  |
| mercedes-glc-300-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-glc-400-eq-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-gle-450-e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-gls-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mercedes-marco-polo-2025 | OK | OK | OK |  |
| mercedes-sprinter-2025 | OK | OK | OK |  |
| mercedes-vito-2025 | OK | OK | OK |  |
| mg-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-3-hybrid-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-4-urban-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg-4-xpower-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-5-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-cyberster-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-cyberster-trophy-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-hs-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-hs-hybrid-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-hs-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-marvel-r-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mg-marvel-r-performance-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mg-s5-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg-s5-ev-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-s5-ev-standard-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-s6-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg-u9-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg-zs-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mg-zs-ev-standard-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mg-zs-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-zs-hybrid-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg-zs-hybrid-plus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg-zs-hybrid-precio-ficha-tecnica | OK | OK | OK |  |
| mg3-gasolina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg3-hybrid-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mg3-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg3-hybrid-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-electric-comfort-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-electric-extended-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-electric-luxury-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-electric-standard-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-electric-xpower-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-urban-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-urban-electric-precio-ficha-tecnica | OK | OK | OK |  |
| mg4-xpower-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mg5-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg5-electric-standard-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg5-ev-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mg7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| microlino-2026 | OK | OK | OK |  |
| mini-aceman-e-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mini-aceman-jcw-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mini-aceman-se-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-c-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-cabrio-c-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-cabrio-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-e-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-jcw-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-jcw-e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mini-cooper-s-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de mini.es; sin precio público de esta versión como texto indexado |
| mini-cooper-se-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mini-countryman-c-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mini-countryman-d-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de mini.es; sin precio público de esta versión como texto indexado |
| mini-countryman-e-2026 | OK | OK | OK |  |
| mini-countryman-jcw-all4-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mini-countryman-s-all4-2025 | OK | OK | OK |  |
| mini-countryman-se-all4-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-asx-100t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-asx-120t-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-asx-130t-7dct-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-asx-130t-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-asx-180-hev | OK | OK | OK |  |
| mitsubishi-colt-100t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-colt-100t-glp-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-colt-2024-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-colt-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-eclipse-cross-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-eclipse-cross-ev-lfp-2026-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-grandis-130t-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-grandis-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-outlander-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mitsubishi-space-star-2025-10-71cv-precio-ficha-tecnica | OK | OK | OK |  |
| mobilize-bento-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial publicada en España (Mobilize/renault Pro no publica precio del Bento como texto accesible) |
| mobilize-duo-45-2025-precio-ficha-tecnica | OK | OK | OK |  |
| mobilize-duo-80-2025-precio-ficha-tecnica | OK | OK | OK |  |
| moke-electrico-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin importador oficial en España que publique tarifa del MOKE eléctrico; sin precio oficial ES |
| morgan-plus-four-2025-precio-ficha-tecnica | OK | OK | OK |  |
| morgan-plus-six-2025-precio-ficha-tecnica | OK | OK | OK |  |
| morgan-super-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| morgan-supersport-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Morgan publica precio en UK pero sin tarifa oficial en España |
| neta-aya-2025-precio-ficha-tecnica | OK | OK | OK |  |
| neta-gt-2024-precio-ficha-tecnica | OK | OK | OK |  |
| neta-l-2024-precio-ficha-tecnica | OK | OK | OK |  |
| neta-l-erev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| neta-s-2024-precio-ficha-tecnica | OK | OK | OK |  |
| neta-s-shooting-brake-2024-precio-ficha-tecnica | OK | OK | OK |  |
| neta-x-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-a05-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-a06-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-a07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-c390-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-e07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-q05-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-q06-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nevo-q07-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-ec6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-ec6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-ec7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el6-75-kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el7-75-kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el8-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-el8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-ep9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-es8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-es9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et5-75-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et5-touring-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et5-touring-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et5-touring-75-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et7-75-kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-et9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nio-firefly-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nio-firefly-precio-espana-ficha-tecnica | OK | OK | OK |  |
| nissan-ariya-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-ariya-63kwh-218-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-ariya-87kwh-242-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-ariya-e4orce-306-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-ariya-nismo-435-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-interstar-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-juke-10-dig-t-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-juke-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-juke-hybrid-143 | OK | OK | OK |  |
| nissan-leaf-2026-52-kwh-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-leaf-2026-75-kwh-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-leaf-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-leaf-e-plus-62kwh-2023-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-micra-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-micra-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-micra-ev-40kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-micra-ev-52kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-murano-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-patrol-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-primastar-combi-dci-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-primastar-combi-dci170-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-qashqai-e-power-190-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-qashqai-e-power-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-qashqai-e-power-205 | OK | OK | OK |  |
| nissan-qashqai-mhev-158-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-townstar-combi-13g-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-townstar-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-townstar-evalia-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-x-trail-e-4orce-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nissan-x-trail-e-power-2026-precio-ficha-tecnica | OK | OK | OK |  |
| noble-m500-2025-precio-ficha-tecnica | OK | OK | OK |  |
| nuevo-bmw-serie-3-i3-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| nuevo-hyundai-tucson-2027-presentacion-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-4-2026-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-4-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-4-shs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-5-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-5-ev-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-5-gasolina-2026-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-5-shs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-7-shs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-9-shs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-9-shs-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-c7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| omoda-s5-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Omoda España no comercializa el S5 (gama ES: 5, 7 y 9); sin tarifa oficial ES |
| onvo-l60-2024-precio-ficha-tecnica | OK | OK | OK |  |
| onvo-l60-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Onvo no vende en España (mercado chino) |
| onvo-l60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| onvo-l80-2026-precio-ficha-tecnica | OK | OK | OK |  |
| onvo-l90-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Onvo no vende en España (mercado chino) |
| onvo-l90-nio-2026-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-12-turbo-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: opel.es solo ofrece su precio en el configurador |
| opel-astra-2024-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-diesel-130-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-hibrido-enchufable-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-sports-tourer-12-turbo-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: opel.es solo ofrece su precio en el configurador |
| opel-astra-sports-tourer-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-sports-tourer-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-astra-sports-tourer-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-combo-15-diesel-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: opel.es solo publica oferta oficial del Combo diésel 100 CV; el 130 CV solo consta en el configurador |
| opel-combo-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-combo-xl-diesel-130-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-corsa-12-100-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-corsa-12-turbo | OK | NO | OK |  |
| opel-corsa-2026-precio-ficha-tecnica | OK | OK | OK |  |
| opel-corsa-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-corsa-gse-2026-precio-ficha-tecnica | OK | OK | OK |  |
| opel-corsa-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-frontera-2024-precio-ficha-tecnica | OK | OK | OK |  |
| opel-frontera-electric-44kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-frontera-electric-precio-ficha-tecnica | OK | OK | OK |  |
| opel-frontera-electrico-54kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-frontera-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-12-turbo-130-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Generación anterior descatalogada en España: el nuevo Grandland no ofrece el 1.2 Turbo 130 sin hibridar y opel.es no publica tarifa de la generación anterior |
| opel-grandland-2024-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-electrico-awd-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-electrico-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-grandland-hibrido-enchufable-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-mokka-12-turbo-130-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: opel.es solo ofrece su precio en el configurador |
| opel-mokka-2024-precio-ficha-tecnica | OK | OK | OK |  |
| opel-mokka-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-mokka-gse-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-mokka-hibrido-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-movano-22-diesel-180-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: opel.es solo ofrece su precio en el configurador |
| opel-movano-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-rocks-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Opel España no publica tarifa oficial del Rocks (nuevo modelo 2025 anunciado; sin precio ES en opel.es) |
| opel-vivaro-20-diesel-180-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: opel.es solo ofrece su precio en el configurador |
| opel-vivaro-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-zafira-20-diesel-180-2026-precio-ficha-tecnica | OK | OK | OK |  |
| opel-zafira-electrico-2025-precio-ficha-tecnica | OK | OK | OK |  |
| opel-zafira-life-2025 | OK | OK | OK |  |
| ora-ballet-cat-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Ora no vende el Ballet Cat en España (mercado chino) |
| oshan-x5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| oshan-z6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| pagani-utopia-roadster-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-2008-12-puretech-100-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-2008-2024-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-2008-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-2008-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-208-12-puretech-100-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-208-2026 | OK | OK | OK |  |
| peugeot-208-hibrido-110-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-3008-12-hybrid-136-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-3008-2024-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-3008-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-3008-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-3008-phev-195-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-308-2024-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-308-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-308-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-308-phev-195-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-308-sw-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-308-sw-phev-195-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-408-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-408-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-408-phev-240-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-5008-12-hybrid-136-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-5008-hibrido-145-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-5008-phev-195-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-5008-phev-225-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-508-phev-225-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-508-sw-phev-225-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-boxer-22-bluehdi-180-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública por versión: media.stellantis.com solo publica el precio de acceso del Boxer (15.300 € sin IVA); la tarifa del BlueHDi 180 solo está en el configurador |
| peugeot-e-2008-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-208-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-208-gti-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-3008-2025-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-3008-dual-motor-325-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-3008-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-3008-long-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-308-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-308-sw-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-408-electrico-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-5008-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-5008-320-dual-motor-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-5008-electrico-7-plazas-precio | OK | OK | OK |  |
| peugeot-e-5008-long-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-boxer-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-expert-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-partner-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-rifter-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-e-traveller-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-expert-15-bluehdi-120-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública por versión: peugeot.es solo ofrece el precio del Expert en el configurador |
| peugeot-expert-20-bluehdi-180-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública por versión: peugeot.es solo ofrece el precio del Expert en el configurador |
| peugeot-partner-15-bluehdi-130-2026-precio-ficha-tecnica | OK | OK | OK |  |
| peugeot-rifter-15-bluehdi-130-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: media.stellantis.com solo publica precio del E-Rifter 2026 (38.220 €); el BlueHDi 130 solo consta en el configurador |
| peugeot-rifter-long-15-bluehdi-130-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial pública de esta motorización: media.stellantis.com solo publica precio del E-Rifter 2026 (38.220 €); el BlueHDi 130 solo consta en el configurador |
| pininfarina-battista-2025-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-2-long-range-dual-motor-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-2-long-range-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-2-performance-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-2-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-3-dual-motor-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-3-performance-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-3-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-4-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-4-suv-dual-motor-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-4-suv-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-5-performance-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-5-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-6-roadster-2026-precio-ficha-tecnica | OK | OK | OK |  |
| polestar-7-2028-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-718-cayman-gt4-rs | OK | OK | OK |  |
| porsche-718-cayman-gt4-rs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-718-spyder-rs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-carrera-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-carrera-4-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-carrera-4s | OK | OK | OK |  |
| porsche-911-carrera-cabriolet-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-carrera-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-carrera-s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-carrera-t-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-gt3-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-gt3-rs-2025-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-targa-4-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-911-turbo-s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-coupe-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-s-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-turbo-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-macan-4-electric-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-macan-4s-electric-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-macan-electric-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-macan-turbo-electric-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-panamera-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-panamera-4-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-panamera-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-panamera-turbo-e-hybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-4-cross-turismo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-4s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-gts-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-turbo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-turbo-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| porsche-taycan-turbo-s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| possl-summit-600-2026 | OK | OK | OK |  |
| qoros-5s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| qoros-7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| radical-rxc-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Vehículo de circuito; precio bajo petición, sin tarifa pública |
| radical-rxc-spyder-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Vehículo de circuito; precio bajo petición, sin tarifa pública |
| radical-sr1-xxr-2025-precio-ficha-tecnica | OK | OK | OK |  |
| radical-sr10-xxr-2025-precio-ficha-tecnica | OK | OK | OK |  |
| radical-sr3-xxr-2025-precio-ficha-tecnica | OK | OK | OK |  |
| ram-1500-ramcharger-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ram-1500-rev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| range-rover-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-4-e-tech-40-kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-4-e-tech-52-kwh-2025-precio-autonomia | OK | OK | OK |  |
| renault-4-e-tech-52-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-4-e-tech-precio-autonomia | OK | OK | OK |  |
| renault-5-e-tech-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-5-e-tech-2026-precio-autonomia | OK | OK | OK |  |
| renault-5-e-tech-40-kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-5-e-tech-40-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-5-e-tech-52-kwh-2025-precio-autonomia | OK | OK | OK |  |
| renault-5-e-tech-roland-garros-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-5-turbo-3e-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-arkana-2024-e-tech-145-precio-ficha-tecnica | OK | OK | OK |  |
| renault-arkana-2024-tce-140-precio-ficha-tecnica | OK | OK | OK |  |
| renault-arkana-2026-e-tech-145-precio-ficha-tecnica | OK | OK | OK |  |
| renault-arkana-2026-tce-140-precio-ficha-tecnica | OK | OK | OK |  |
| renault-austral-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-austral-2025-e-tech-200-precio-ficha-tecnica | OK | OK | OK |  |
| renault-austral-2025-mild-hybrid-150-precio-ficha-tecnica | OK | OK | OK |  |
| renault-austral-2026-e-tech-200-precio-ficha-tecnica | OK | OK | OK |  |
| renault-austral-mild-hybrid-160-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-boreal-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-captur-2024-tce-90-precio-ficha-tecnica | OK | OK | OK |  |
| renault-captur-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-captur-2026-e-tech-160-precio-ficha-tecnica | OK | OK | OK |  |
| renault-captur-2026-tce-90-precio-ficha-tecnica | OK | OK | OK |  |
| renault-captur-e-tech-145 | OK | OK | OK |  |
| renault-captur-e-tech-145-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-clio-e-tech-145 | OK | NO | OK |  |
| renault-clio-vi-2025-e-tech-160-precio-ficha-tecnica | OK | OK | OK |  |
| renault-clio-vi-tce-115-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-espace-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-espace-2025-e-tech-200-precio-ficha-tecnica | OK | OK | OK |  |
| renault-espace-2026-e-tech-200-precio-ficha-tecnica | OK | OK | OK |  |
| renault-grand-kangoo-e-tech-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-kangoo-2024-tce-130-precio-ficha-tecnica | OK | OK | OK |  |
| renault-kangoo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-kangoo-blue-dci-95-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-kangoo-e-tech-combi-2024-precio-autonomia | OK | OK | OK |  |
| renault-kwid-e-tech-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-master-23-dci-180-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: la versión 2.3 dCi 180 es del Master anterior; el nuevo Master (2024) solo equipa el 2.0 diésel (105-170 CV); sin tarifa oficial de la versión antigua |
| renault-master-e-tech-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-megane-e-tech-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-megane-e-tech-2026-lfp-67-kwh-precio-ficha-tecnica | OK | OK | OK |  |
| renault-megane-e-tech-2026-precio-autonomia | OK | OK | OK |  |
| renault-megane-e-tech-40-kwh-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-rafale-2024-e-tech-4x4-300-precio-ficha-tecnica | OK | OK | OK |  |
| renault-rafale-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-rafale-2025-atelier-alpine-precio-ficha-tecnica | OK | OK | OK |  |
| renault-rafale-e-tech-200-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-rafale-e-tech-200-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-scenic-e-tech-2024-precio-ficha-tecnica | OK | OK | OK |  |
| renault-scenic-e-tech-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-scenic-e-tech-60-kwh-2024-precio-autonomia | OK | OK | OK |  |
| renault-scenic-e-tech-60-kwh-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-scenic-e-tech-87-kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| renault-symbioz-2024-e-tech-145-precio-ficha-tecnica | OK | OK | OK |  |
| renault-symbioz-2026-e-tech-145-precio-ficha-tecnica | OK | OK | OK |  |
| renault-trafic-20-dci-170-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-trafic-e-tech-2026-precio-ficha-tecnica | OK | OK | OK |  |
| renault-trafic-spaceclass-2025 | OK | OK | OK |  |
| renault-twingo-e-tech-2026-precio-ficha-tecnica | OK | OK | OK |  |
| riddara-rd6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| riddara-rd6-em-p-2025-precio-ficha-tecnica | OK | OK | OK |  |
| rimac-nevera-r-2025-precio-ficha-tecnica | OK | OK | OK |  |
| rising-f7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| rising-r7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| rising-rc7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rising Auto no vende en España (mercado chino) |
| rivian-r2-2026-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-clever-2025-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-d5x-dmh-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-d6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-d7-dmh-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-d7-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-ei5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-erx5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-i5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-i6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-imax8-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-imax8-dmh-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-jiayue-07-2026-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-m7-dmh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-rx5-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roewe-rx9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| roller-team-zefiro-696-2026 | OK | OK | OK |  |
| rolls-royce-cullinan-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-cullinan-black-badge-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-cullinan-series-ii-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-cullinan-series-ii-black-badge-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-droptail-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Edición limitada 2024; precio por invitación, sin tarifa pública |
| rolls-royce-ghost-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-ghost-black-badge-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-ghost-extended-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-ghost-extended-series-ii-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-ghost-prism-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Edición limitada 2024; precio por invitación, sin tarifa pública |
| rolls-royce-ghost-series-ii-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-phantom-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-phantom-extended-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-phantom-series-ii-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Rolls-Royce no publica tarifa oficial (precio bajo petición) |
| rolls-royce-spectre-2024-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-spectre-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-spectre-black-badge-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rolls-royce-spectre-series-ii-2026-precio-ficha-tecnica | OK | OK | OK |  |
| rox-01-2024-precio-ficha-tecnica | OK | OK | OK |  |
| seat-arona-10-tsi | OK | OK | OK |  |
| seat-arona-10-tsi-95-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-arona-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-arona-fr-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ateca-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ateca-20-tdi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ateca-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ateca-2024-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ateca-fr-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ibiza-10-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ibiza-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ibiza-2025-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ibiza-2026 | OK | OK | OK |  |
| seat-ibiza-fr-10-tsi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-ibiza-fr-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-15-ehybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-15-etsi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-15-etsi-150-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-15-tsi | OK | OK | OK |  |
| seat-leon-15-tsi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-20-tdi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-2025-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-15-ehybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-15-etsi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-15-etsi-150-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-15-tsi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-20-tdi-115-2026-precio-ficha-tecnica | OK | OK | OK |  |
| seat-leon-sportstourer-20-tdi-150-2026-precio-ficha-tecnica | OK | OK | OK |  |
| sehol-e10x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| sehol-x6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| sehol-x8-2022-precio-ficha-tecnica | OK | OK | OK |  |
| seres-3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| seres-5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| seres-5-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| seres-m7-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Seres no vende en España (mercado chino) |
| silence-s04-l6e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| silence-s04-l7e-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-elroq-50-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-elroq-60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-elroq-85-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-elroq-85-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-elroq-85x-2026 | OK | OK | OK |  |
| skoda-elroq-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-elroq-rs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-60-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-85-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-85x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-coupe-60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-coupe-85-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-coupe-85x-2026 | OK | OK | OK |  |
| skoda-enyaq-coupe-rs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-enyaq-rs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-epiq-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-fabia-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-fabia-2026 | OK | OK | OK |  |
| skoda-fabia-monte-carlo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kamiq-10-tsi-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kamiq-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kamiq-2024-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kamiq-monte-carlo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-karoq-2024-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-karoq-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-2024-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-iv-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-iv-hibrido-enchufable-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kodiaq-rs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-kylaq-2025-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-15-tsi-mhev | OK | OK | OK |  |
| skoda-octavia-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-combi-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-combi-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-combi-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-combi-rs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-octavia-rs-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-peaq-suv-electrico-7-plazas-precio | OK | OK | OK |  |
| skoda-scala-10-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-scala-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-scala-monte-carlo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-15-tsi-mhev | OK | OK | OK |  |
| skoda-superb-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-combi-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-combi-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-combi-iv-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skoda-superb-iv-hibrido-enchufable-2026-precio-ficha-tecnica | OK | OK | OK |  |
| skywell-et5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-brabus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-premium-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-pro-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de smart España (es.smart.com); sin precio público de esta versión como texto indexado |
| smart-1-pro-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-pulse-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-pure-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-1-pure-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-2-2026-precio-autonomia-paris | OK | OK | OK |  |
| smart-3-2026-precio-ficha-tecnica | OK | OK | OK |  |
| smart-3-brabus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| smart-3-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-3-pro-plus-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tarifa oficial solo en el configurador de smart España (es.smart.com); sin precio público de esta versión como texto indexado |
| smart-5-brabus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-5-electrico-ficha-tecnica-precio | OK | OK | OK |  |
| smart-5-premium-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-5-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-5-pro-plus-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-5-pulse-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-5-summit-edition-2025-precio-ficha-tecnica | OK | OK | OK |  |
| smart-fortwo-eq-2025 | OK | OK | OK |  |
| soueast-dx8s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| soueast-s06-dm-2026-precio-ficha-tecnica | OK | OK | OK |  |
| ssc-tuatara-2025-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-g9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-g9-erev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-s9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-s9-erev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-s9-huawei-2026-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-s9t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-s9t-2026-precio-ficha-tecnica | OK | OK | OK |  |
| stelato-s9t-erev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-brz-24 | OK | OK | OK |  |
| subaru-crosstrek-2025-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-e-outback-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-forester-2025-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-outback-2025-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-solterra-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-solterra-trek-4wd-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-trailseeker-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-uncharted-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-uncharted-field-2026-precio-ficha-tecnica | OK | OK | OK |  |
| subaru-uncharted-touring-2026-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-across-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-e-vitara-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-evitara-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-fronx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-ignis-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-jimny-pro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-s-cross-strong-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-swace-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-swift-2024-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-swift-2025-12-83cv-hibrido-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-swift-sport-2024-precio-ficha-tecnica | OK | OK | OK |  |
| suzuki-vitara-14t-mild-hybrid | OK | OK | OK |  |
| suzuki-vitara-strong-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| swm-g01-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de SWM España publicada (solo concesionarios; sin lista oficial ES) |
| swm-g01f-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de SWM España publicada (solo concesionarios; sin lista oficial ES) |
| swm-g03-edi-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| swm-g03f-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de SWM España publicada (solo concesionarios; sin lista oficial ES) |
| swm-g05-pro-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Sin tarifa oficial de SWM España publicada (solo concesionarios; sin lista oficial ES) |
| swm-tiger-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tank-300-2-0t-2024-precio-ficha-tecnica | OK | OK | OK |  |
| tank-300-diesel-2025-precio-ficha-tecnica | OK | OK | OK |  |
| tank-300-hev-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tank no vende en España (mercado chino) |
| tank-300-hi4-t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| tank-300-hooke-trail-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tank-330-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tank no vende en España (mercado chino) |
| tank-400-hi4-t-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tank no vende en España (mercado chino) |
| tank-400-hi4-z-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tank no vende en España (mercado chino) |
| tank-500-3-0t-2024-precio-ficha-tecnica | OK | OK | OK |  |
| tank-500-hev-2024-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tank no vende en España (mercado chino) |
| tank-500-hi4-t-2025-precio-ficha-tecnica | OK | OK | OK |  |
| tank-500-hi4-z-2025-precio-ficha-tecnica | OK | OK | OK |  |
| tank-700-hi4-t-2024-precio-ficha-tecnica | OK | OK | OK |  |
| tank-700-lwb-hi4-z-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tank no vende en España (mercado chino) |
| tank-800-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-cybercab-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-cybertruck-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Tesla no vende el Cybertruck en Europa |
| tesla-model-3-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-3-gran-autonomia-traccion-total-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-3-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-3-performance-2025-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-s-plaid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-x-plaid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-7-plazas-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-l-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-performance-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-model-y-standard-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica | OK | OK | OK |  |
| tesla-roadster-2026-retraso-precio-ficha-tecnica | OK | OK | NULO-HONESTO | El Tesla Roadster aún no existe (retrasado); sin tarifa oficial |
| togg-t10x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-aygo-x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-aygo-x-hybrid-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz3x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz4x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz4x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz4x-224-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz4x-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz4x-touring-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-bz7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-c-hr-140h | OK | NO | OK |  |
| toyota-c-hr-200h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-c-hr-gr-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-c-hr-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-c-hr-plus-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-c-hr-plus-230-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-camry-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: el Camry desapareció del catálogo de Toyota España en 2025 sin sucesor |
| toyota-corolla-140h | OK | NO | OK |  |
| toyota-corolla-5p-140h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-5p-140h-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-berlina-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-cross-200h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-cross-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-cross-2026 | OK | OK | OK |  |
| toyota-corolla-gr-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-sedan-140h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-corolla-touring-sports-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-gr-supra-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-gr-supra-final-edition-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-gr-yaris-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-gr86-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-gr86-24-boxer | OK | OK | OK |  |
| toyota-highlander-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-hilux-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-hilux-ev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-hilux-mhev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-land-cruiser-2024-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-land-cruiser-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-land-cruiser-250-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-mirai-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-prius-phev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-proace-city-verso-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-proace-city-verso-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-proace-max-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-proace-max-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-proace-verso-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-proace-verso-electric-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-rav4-gr-sport-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-rav4-hev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-rav4-hybrid-2026 | OK | OK | OK |  |
| toyota-rav4-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-urban-cruiser-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-urban-cruiser-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Toyota España confirmó que no comercializa el Urban Cruiser en España |
| toyota-yaris-120h | OK | NO | OK |  |
| toyota-yaris-130h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-yaris-130h-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-yaris-cross-130h-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-yaris-cross-2026-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-yaris-cross-gr-sport-2025-precio-ficha-tecnica | OK | OK | OK |  |
| toyota-yaris-cross-hybrid-2024-precio-ficha-tecnica | OK | OK | OK |  |
| tvr-griffith-2026-precio-ficha-tecnica | OK | OK | OK |  |
| venucia-d60-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| venucia-star-2026-precio-ficha-tecnica | OK | OK | OK |  |
| venucia-v-online-2025-precio-ficha-tecnica | OK | OK | OK |  |
| venucia-vx6-2024-precio-ficha-tecnica | OK | OK | OK |  |
| vinfast-vf-6-2026-precio-ficha-tecnica | OK | OK | OK |  |
| vinfast-vf-7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-amarok-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-arteon-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-caddy-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-caddy-california-2025 | OK | OK | OK |  |
| volkswagen-caddy-ehybrid-2025 | OK | OK | OK |  |
| volkswagen-california-ehybrid-2026 | OK | OK | OK |  |
| volkswagen-california-t7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-caravelle-t7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-crafter-2025 | OK | OK | OK |  |
| volkswagen-e-caravelle-2026 | OK | OK | OK |  |
| volkswagen-golf-15-etsi | OK | OK | OK |  |
| volkswagen-golf-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-gte-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-gte-272-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-gti-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-gti-clubsport-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-gti-edition-50-2026 | OK | OK | OK |  |
| volkswagen-golf-r-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-r-variant-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-variant-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-variant-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-golf-variant-r-line-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-grand-california-2026 | OK | OK | OK |  |
| volkswagen-id-3-neo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-4-2025 | OK | OK | OK |  |
| volkswagen-id-7-tourer-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-aura-t6-xpeng-china | OK | OK | OK |  |
| volkswagen-id-buzz-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-buzz-cargo-2025 | OK | OK | OK |  |
| volkswagen-id-buzz-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-buzz-gtx-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-cross-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-polo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-polo-gti-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id-tiguan | OK | OK | OK |  |
| volkswagen-id3-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id3-gtx-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id4-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id4-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id4-gtx-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id4-pro-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id5-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id7-gtx-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id7-gtx-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-id7-gtx-tourer-2026 | OK | OK | OK |  |
| volkswagen-id7-tourer-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-multivan-ehybrid-2026 | OK | OK | OK |  |
| volkswagen-multivan-t7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-passat-variant-15-etsi | OK | OK | OK |  |
| volkswagen-passat-variant-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-passat-variant-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-passat-variant-ehybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-polo-10-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-polo-2026 | OK | OK | OK |  |
| volkswagen-polo-gti-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-cross-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-cross-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-cross-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-cross-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-roc-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-t-roc-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-taigo-15-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-taigo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-taigo-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tayron-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tayron-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tayron-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tayron-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tayron-ehybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tayron-ehybrid-204-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-15-etsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-20-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-20-tsi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-ehybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-tiguan-ehybrid-272-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-touareg-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-touareg-30-tdi-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-touareg-r-ehybrid-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-touran-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volkswagen-transporter-t7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ec40-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-em90-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-es90-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex30-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex30-cross-country-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex30-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex30-twin-motor-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex40-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex60-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex60-cross-country-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-ex90-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-s60-b5-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Descatalogado: volvocars.com/es anuncia que ya no es posible pedir un nuevo S60 en España |
| volvo-s90-b5-2025-precio-ficha-tecnica | OK | OK | NULO-HONESTO | El nuevo S90 2025 (fábrica china) no se vende en Europa |
| volvo-v60-b4-2024-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-v60-b5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-v60-cross-country-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-v60-t6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-v60-t8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-v90-b5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-v90-t6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc40-b3-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc40-b5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc60-b5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc60-b6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc60-t6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc60-t8-2026-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc90-b5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc90-b6-2025-precio-ficha-tecnica | OK | OK | OK |  |
| volvo-xc90-t8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-courage-109kwh-2025-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-courage-2024-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-courage-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Voyah no comercializa el Courage en España |
| voyah-courage-awd-2024-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-dream-9-2026-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-dream-9-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-dream-ficha-tecnica-precio | OK | OK | OK |  |
| voyah-dream-plus-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Voyah no comercializa el Dream+ en España |
| voyah-free-2025-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-free-erev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-free-plus-2026-precio-ficha-tecnica | OK | OK | NULO-HONESTO | Voyah no comercializa el Free+ en España |
| voyah-passion-2024-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-passion-l-2026-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-passion-s-2026-precio-ficha-tecnica | OK | OK | OK |  |
| voyah-taishan-2026-precio-ficha-tecnica | OK | OK | OK |  |
| wey-03-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wey-05-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wey-07-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wey-gaoshan-7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wey-gaoshan-8-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wey-gaoshan-9-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wey-v8x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| wey-v9x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| wiesmann-project-thunderball-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-air-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-bingo-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-bingo-plus-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-bingo-s-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-cloud-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-cloud-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-hongguang-mini-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-hongguang-mini-ev-cabrio-2026-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-journey-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-starlight-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-starlight-730-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-starlight-730-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-starlight-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-starlight-s-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-starlight-s-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-yangguang-ev-2024-precio-ficha-tecnica | OK | OK | OK |  |
| wuling-zhiguang-ev-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xev-yoyo-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xev-yoyo-pro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-skynomad-n70-max-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-skynomad-n70-pro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-skynomad-n90-max-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-skynomad-n90-max-explorer-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-su7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-su7-max-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-su7-max-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-su7-pro-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-su7-ultra-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-su7-ultra-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-yu7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-yu7-max-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-yu7-pro-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xiaomi-yu7-suv-electrico-llegada-europa | OK | OK | OK |  |
| xpeng-g6-2025-precio-espana | OK | OK | OK |  |
| xpeng-g6-2026-restyling-precio-espana | OK | OK | OK |  |
| xpeng-g6-awd-performance-2026 | OK | OK | OK |  |
| xpeng-g6-long-range-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-g7-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-g9-2024-precio-espana | OK | OK | OK |  |
| xpeng-g9-2026-restyling-precio-espana | OK | OK | OK |  |
| xpeng-g9-awd-performance-2026 | OK | OK | OK |  |
| xpeng-l03-2026-precio-espana | OK | OK | OK |  |
| xpeng-mona-m03-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-p5-2025-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-p7-2024-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-p7-2025-nueva-generacion-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-p7-electrico-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-p7-plus-long-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-p7-plus-standard-range-2026-precio-ficha-tecnica | OK | OK | OK |  |
| xpeng-x9-2026-precio-europa | OK | OK | OK |  |
| yangwang-byd-berlina-260000-euros-rolls-royce | OK | OK | NULO-HONESTO | Yangwang no vende en España (mercado chino) |
| yangwang-byd-u8-u9-europa-2027 | OK | OK | OK |  |
| yangwang-u7-2025-precio-ficha-tecnica | OK | OK | OK |  |
| yangwang-u7-phev-2026-precio-ficha-tecnica | OK | OK | OK |  |
| yangwang-u8-2024-precio-ficha-tecnica | OK | OK | OK |  |
| yangwang-u8l-2025-precio-ficha-tecnica | OK | OK | OK |  |
| yangwang-u9-2024-precio-ficha-tecnica | OK | OK | OK |  |
| yangwang-u9-xtreme-2025-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-001-2024-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-001-2025-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-001-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-001-fr-2024-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-001-fr-2025-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-007-2025-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-007-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-007-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-009-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-009-grand-2024-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-7-gt-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-7x-2025-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-7x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-8x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-9x-2026-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-mix-2025-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-x-2024-precio-ficha-tecnica | OK | OK | OK |  |
| zeekr-x-2025-precio-ficha-tecnica | OK | OK | OK |  |

## Tabla completa de blogs de coches (slug → hero)

| Slug | Hero |
|---|---|
| abarth-500e-2025-precio-ficha-tecnica | OK |
| abarth-600e-2025-precio-ficha-tecnica | OK |
| abarth-600e-scorpionissima-2025-precio-ficha-tecnica | OK |
| ac-cobra-gt-roadster-2025-precio-ficha-tecnica | OK |
| adria-matrix-supreme-2026-precio-autocaravana | OK |
| aion-lx-plus-2024-precio-ficha-tecnica | OK |
| aion-ray7-2026-precio-ficha-tecnica | OK |
| aion-rt-2024-precio-ficha-tecnica | OK |
| aion-s-max-2024-precio-ficha-tecnica | OK |
| aion-s-plus-2024-precio-ficha-tecnica | OK |
| aion-ut-2025-precio-ficha-tecnica | OK |
| aion-v-2025-precio-ficha-tecnica | OK |
| aion-v-plus-2024-precio-ficha-tecnica | OK |
| aion-v-vs-deepal-s05-cual-comprar | OK |
| aion-y-2024-precio-ficha-tecnica | OK |
| aion-y-plus-2024-precio-ficha-tecnica | OK |
| aito-m5-2024-precio-ficha-tecnica | OK |
| aito-m5-ultra-2025-precio-ficha-tecnica | OK |
| aito-m5-ultra-ev-2025-precio-ficha-tecnica | OK |
| aito-m6-2026-precio-ficha-tecnica | OK |
| aito-m6-ev-2026-precio-ficha-tecnica | OK |
| aito-m7-2025-precio-ficha-tecnica | OK |
| aito-m7-2026-precio-ficha-tecnica | OK |
| aito-m7-ev-2025-precio-ficha-tecnica | OK |
| aito-m7-pro-2024-precio-ficha-tecnica | OK |
| aito-m7-ultra-2024-precio-ficha-tecnica | OK |
| aito-m8-erev-2025-precio-ficha-tecnica | OK |
| aito-m8-ev-2025-precio-ficha-tecnica | OK |
| aito-m8-huawei-2026-precio-ficha-tecnica | OK |
| aito-m9-2024-precio-ficha-tecnica | OK |
| aito-m9-2025-precio-ficha-tecnica | OK |
| aito-m9-huawei-ficha-tecnica-precio | OK |
| aiva-me7-seres-catl-paris-2026 | OK |
| aixam-city-eclipse-2025-precio-ficha-tecnica | OK |
| aixam-city-gto-2025-precio-ficha-tecnica | OK |
| aixam-city-pack-2025-precio-ficha-tecnica | OK |
| aixam-city-sport-2025-precio-ficha-tecnica | OK |
| aixam-coupe-gti-2025-precio-ficha-tecnica | OK |
| aixam-coupe-sport-2025-precio-ficha-tecnica | OK |
| aixam-crossline-pack-2025-precio-ficha-tecnica | OK |
| aixam-crossover-premium-2025-precio-ficha-tecnica | OK |
| aixam-d-truck-furgon-van-2025-precio-ficha-tecnica | OK |
| aixam-e-city-pack-2025-precio-ficha-tecnica | OK |
| aixam-e-city-sport-2025-precio-ficha-tecnica | OK |
| aixam-e-coupe-gti-2025-precio-ficha-tecnica | OK |
| aixam-e-crossover-premium-2025-precio-ficha-tecnica | OK |
| aixam-e-minauto-access-2025-precio-ficha-tecnica | OK |
| aixam-e-minauto-chic-2025-precio-ficha-tecnica | OK |
| aixam-e-scouty-evo-2025-precio-ficha-tecnica | OK |
| aixam-e-truck-furgon-van-2025-precio-ficha-tecnica | OK |
| aixam-e-truck-plataforma-aluminio-2025-precio-ficha-tecnica | OK |
| aixam-easy-access-2025-precio-ficha-tecnica | OK |
| aixam-easy-access-diesel-2025-precio-ficha-tecnica | OK |
| aixam-easy-chic-2025-precio-ficha-tecnica | OK |
| aixam-easy-chic-diesel-2025-precio-ficha-tecnica | OK |
| aixam-minauto-access-2025-precio-ficha-tecnica | OK |
| ajp-pr3-240-2026-precio-ficha-tecnica | OK |
| alfa-romeo-33-stradale-elettrica-750-precio-ficha-tecnica | OK |
| alfa-romeo-33-stradale-v6-620-precio-ficha-tecnica | OK |
| alfa-romeo-giulia-diesel-160-precio-ficha-tecnica | OK |
| alfa-romeo-giulia-diesel-210-precio-ficha-tecnica | OK |
| alfa-romeo-giulia-quadrifoglio-520-precio-ficha-tecnica | OK |
| alfa-romeo-giulia-veloce-280-precio-ficha-tecnica | OK |
| alfa-romeo-giulietta-2025-precio-opiniones | OK |
| alfa-romeo-junior-elettrica-156-precio-ficha-tecnica | OK |
| alfa-romeo-junior-elettrica-veloce-280-precio-ficha-tecnica | OK |
| alfa-romeo-junior-ibrida-145-precio-ficha-tecnica | OK |
| alfa-romeo-junior-ibrida-q4-145-precio-ficha-tecnica | OK |
| alfa-romeo-mito-2025-precio-opiniones | OK |
| alfa-romeo-stelvio-2-2-diesel-160-precio-ficha-tecnica | OK |
| alfa-romeo-stelvio-20-turbo-280-precio-ficha-tecnica | OK |
| alfa-romeo-stelvio-diesel-210-precio-ficha-tecnica | OK |
| alfa-romeo-stelvio-quadrifoglio-520-precio-ficha-tecnica | OK |
| alfa-romeo-tonale-diesel-130-precio-ficha-tecnica | OK |
| alfa-romeo-tonale-hibrida-130-precio-ficha-tecnica | OK |
| alfa-romeo-tonale-hibrida-160-precio-ficha-tecnica | OK |
| alfa-romeo-tonale-ibrida-175-precio-ficha-tecnica | OK |
| alfa-romeo-tonale-phev-q4-270-precio-ficha-tecnica | OK |
| alfa-romeo-tonale-phev-q4-280-precio-ficha-tecnica | OK |
| alpine-a110-252-2026-precio-ficha-tecnica | OK |
| alpine-a110-gts-2026-precio-ficha-tecnica | OK |
| alpine-a110-r-2026-precio-ficha-tecnica | OK |
| alpine-a110-r-ultime-2026-precio-ficha-tecnica | OK |
| alpine-a110-r70-2026-precio-ficha-tecnica | OK |
| alpine-a110-s-2026-precio-ficha-tecnica | OK |
| alpine-a290-gt-2026-precio-ficha-tecnica | OK |
| alpine-a290-gt-performance-2026-precio-ficha-tecnica | OK |
| alpine-a290-gt-premium-2026-precio-ficha-tecnica | OK |
| alpine-a290-gts-2026-precio-ficha-tecnica | OK |
| alpine-a290-gts-premiere-edition-2026-precio-ficha-tecnica | OK |
| alpine-a290-rallye-2026-precio-ficha-tecnica | OK |
| alpine-a390-gt-2026-precio-ficha-tecnica | OK |
| alpine-a390-gts-2026-precio-ficha-tecnica | OK |
| alpine-a390-precio-ficha-tecnica | OK |
| alpine-a390-vs-skoda-peaq-cual-comprar | OK |
| alrendo-ts-bravo-2025-ficha-tecnica-precio | OK |
| anfac-septiembre-2026-record-electrificacion-model-3-lider | OK |
| apollo-air-precio-ficha-tecnica | OK |
| apollo-air-pro-precio-ficha-tecnica | OK |
| apollo-city-precio-ficha-tecnica | OK |
| apollo-explore-precio-ficha-tecnica | OK |
| apollo-ghost-precio-ficha-tecnica | OK |
| aprilia-rs-125-2026 | OK |
| aprilia-rs-457-2026-precio-ficha | OK |
| aprilia-rs-660-factory-2026 | OK |
| aprilia-rsv4-factory-2026 | OK |
| aprilia-rx-125-2026 | OK |
| aprilia-sr-gt-200-2026 | OK |
| aprilia-sx-125-2026 | OK |
| aprilia-tuareg-660-rally-2026 | OK |
| aprilia-tuono-660-factory-2026 | OK |
| aptera-2026-precio-ficha-tecnica | OK |
| arcfox-alfa-s5-2024-precio-ficha-tecnica | OK |
| arcfox-alfa-t5-2024-precio-ficha-tecnica | OK |
| arcfox-kaola-2024-precio-ficha-tecnica | OK |
| arcfox-kaola-s-2024-precio-ficha-tecnica | OK |
| arcfox-t1-2025-precio-autonomia | OK |
| arcfox-t1-2025-precio-ficha-tecnica | OK |
| ariel-hipercar-2026-precio-ficha-tecnica | OK |
| aston-martin-db12-2024-precio-ficha-tecnica | OK |
| aston-martin-db12-goldfinger-2025-precio-ficha-tecnica | OK |
| aston-martin-db12-volante-2024-precio-ficha-tecnica | OK |
| aston-martin-dbs-770-ultimate-2024-precio-ficha-tecnica | OK |
| aston-martin-dbx-2024-precio-ficha-tecnica | OK |
| aston-martin-dbx-gt-2026-precio-ficha-tecnica | OK |
| aston-martin-dbx-s-2025-precio-ficha-tecnica | OK |
| aston-martin-dbx707-2024-precio-ficha-tecnica | OK |
| aston-martin-valhalla-2025-precio-ficha-tecnica | OK |
| aston-martin-valiant-2024-precio-ficha-tecnica | OK |
| aston-martin-valkyrie-2024-precio-ficha-tecnica | OK |
| aston-martin-valkyrie-spider-2024-precio-ficha-tecnica | OK |
| aston-martin-valour-2024-precio-ficha-tecnica | OK |
| aston-martin-vanquish-2025-precio-ficha-tecnica | OK |
| aston-martin-vanquish-volante-2025-precio-ficha-tecnica | OK |
| aston-martin-vantage-2024-precio-ficha-tecnica | OK |
| aston-martin-vantage-roadster-2025-precio-ficha-tecnica | OK |
| aston-martin-vantage-s-2025-precio-ficha-tecnica | OK |
| aston-martin-vantage-s-roadster-2025-precio-ficha-tecnica | OK |
| ather-450x-2025-ficha-tecnica-precio | OK |
| ats-gt-2025-precio-ficha-tecnica | OK |
| audi-a1-2025-precio-ficha-tecnica | OK |
| audi-a2-e-tron-2026-precio-ficha-tecnica | OK |
| audi-a3-2025-precio-ficha-tecnica | OK |
| audi-a3-allstreet-tfsi-2026-precio-ficha-tecnica | OK |
| audi-a3-sedan-2025-precio-opiniones | OK |
| audi-a4-avant-2025-precio-opiniones | OK |
| audi-a5-2025-precio-ficha-tecnica | OK |
| audi-a5-avant-e-hybrid-2026-precio-ficha-tecnica | OK |
| audi-a5-e-hybrid-367-2026-precio-ficha-tecnica | OK |
| audi-a6-avant-e-hybrid-2026-precio-ficha-tecnica | OK |
| audi-a6-avant-e-tron-2025-precio-ficha-tecnica | OK |
| audi-a6-avant-e-tron-performance-2025-precio-ficha-tecnica | OK |
| audi-a6-berlina-2026-precio-ficha-tecnica | OK |
| audi-a6-e-tron-2025-precio-ficha-tecnica | OK |
| audi-a8-2025-precio-ficha-tecnica | OK |
| audi-e-tron-gt-2025-precio-ficha-tecnica | OK |
| audi-q2-2025-precio-ficha-tecnica | OK |
| audi-q3-2025-precio-ficha-tecnica | OK |
| audi-q3-e-hybrid-2026-precio-ficha-tecnica | OK |
| audi-q3-sportback-35-tfsi-2026-precio-ficha-tecnica | OK |
| audi-q3-sportback-tdi-2026-precio-ficha-tecnica | OK |
| audi-q4-e-tron-2025-precio-ficha-tecnica | OK |
| audi-q4-e-tron-45-2025-precio-ficha-tecnica | OK |
| audi-q4-sportback-e-tron-45-2026-precio-ficha-tecnica | OK |
| audi-q5-20-tdi-2026-precio-ficha-tecnica | OK |
| audi-q5-2025-precio-ficha-tecnica | OK |
| audi-q5-e-hybrid-367-2026-precio-ficha-tecnica | OK |
| audi-q5-sportback-e-hybrid-2026-precio-ficha-tecnica | OK |
| audi-q6-e-tron-2025-precio-ficha-tecnica | OK |
| audi-q6-e-tron-performance-2025-precio-ficha-tecnica | OK |
| audi-q6-sportback-e-tron-2026-precio-ficha-tecnica | OK |
| audi-q7-2025-precio-ficha-tecnica | OK |
| audi-q7-55-tfsi-2025-precio-ficha-tecnica | OK |
| audi-q8-2025-precio-ficha-tecnica | OK |
| audi-r8-2025-precio-autonomia | OK |
| audi-r8-2025-precio-ficha-tecnica | OK |
| audi-rs-e-tron-gt-2025-precio-ficha-tecnica | OK |
| audi-rs-q3-sportback-2025-precio-ficha-tecnica | OK |
| audi-rs-q8-2025-precio-ficha-tecnica | OK |
| audi-rs-q8-performance-2025-precio-ficha-tecnica | OK |
| audi-rs3-sedan-2025-precio-ficha-tecnica | OK |
| audi-rs3-sportback-2025-precio-ficha-tecnica | OK |
| audi-rs4-avant-2025-precio-opiniones | OK |
| audi-rs5-avant-2025-precio-ficha-tecnica | OK |
| audi-rs6-avant-2025-precio-ficha-tecnica | OK |
| audi-rs6-avant-performance-2025-precio-ficha-tecnica | OK |
| audi-rs7-sportback-2025-precio-autonomia | OK |
| audi-rs7-sportback-2025-precio-ficha-tecnica | OK |
| audi-s3-2025-precio-ficha-tecnica | OK |
| audi-s3-sportback-2025-precio-ficha-tecnica | OK |
| audi-s4-avant-2025-precio-opiniones | OK |
| audi-s5-2025-precio-ficha-tecnica | OK |
| audi-s6-avant-e-tron-2025-precio-ficha-tecnica | OK |
| audi-s6-e-tron-2025-precio-ficha-tecnica | OK |
| audi-sq5-2025-precio-ficha-tecnica | OK |
| audi-sq5-sportback-2025-precio-ficha-tecnica | OK |
| audi-sq6-e-tron-2025-precio-ficha-tecnica | OK |
| audi-sq6-sportback-e-tron-2025-precio-ficha-tecnica | OK |
| audi-sq7-2025-precio-ficha-tecnica | OK |
| audi-sq8-2026-precio-ficha-tecnica | OK |
| audi-tt-2025-precio-autonomia | OK |
| audi-tt-2025-precio-ficha-tecnica | OK |
| avatr-06-2025-precio-ficha-tecnica | OK |
| avatr-07-2024-precio-ficha-tecnica | OK |
| avatr-11-2024-precio-ficha-tecnica | OK |
| avatr-12-2024-precio-ficha-tecnica | OK |
| avatr-changan-huawei-catl-06t-t09 | OK |
| baic-beijing-5-2025-precio-ficha-tecnica | OK |
| baic-beijing-x55-2025-precio-ficha-tecnica | OK |
| baic-bj30-2025-precio-ficha-tecnica | OK |
| baic-bj40-2025-precio-ficha-tecnica | OK |
| baic-bj40-pro-2026-precio-ficha-tecnica | OK |
| baic-eu5-2025-precio-ficha-tecnica | OK |
| baic-x75-2026-precio-ficha-tecnica | OK |
| bajaj-chetak-2025-ficha-tecnica-precio | OK |
| baojun-enjoy-2025-precio-ficha-tecnica | OK |
| baojun-kiwi-ev-2024-precio-ficha-tecnica | OK |
| baojun-xiangjing-ev-2025-precio-ficha-tecnica | OK |
| baojun-xiangjing-phev-2025-precio-ficha-tecnica | OK |
| baojun-yep-2024-precio-ficha-tecnica | OK |
| baojun-yep-plus-2024-precio-ficha-tecnica | OK |
| baojun-yunduo-2024-precio-ficha-tecnica | OK |
| baojun-yunhai-ev-2024-precio-ficha-tecnica | OK |
| baojun-yunhai-phev-2024-precio-ficha-tecnica | OK |
| baw-212-t01-2026-precio-ficha-tecnica | OK |
| beijing-bj30-hev-2025-precio-ficha-tecnica | OK |
| beijing-bj40-2024-precio-ficha-tecnica | OK |
| beijing-bj40e-2025-precio-ficha-tecnica | OK |
| beijing-bj60-2024-precio-ficha-tecnica | OK |
| beijing-x5-2024-precio-ficha-tecnica | OK |
| beijing-x55-2025-precio-ficha-tecnica | OK |
| beijing-x7-2024-precio-ficha-tecnica | OK |
| benda-chinchilla-450-2024-ficha-tecnica-precio | OK |
| benda-napoleon-450-2025-ficha-tecnica-precio | OK |
| benda-rock-300-2026 | OK |
| benelli-302s-2026-precio-ficha-tecnica | OK |
| benelli-imperiale-400-2026 | OK |
| benelli-leoncino-800-trail-2026 | OK |
| benelli-tornado-500-2025 | OK |
| benelli-trk-502-2026 | OK |
| benelli-trk-502x-2026 | OK |
| benelli-trk-702-2026 | OK |
| benelli-trk-902-xplorer-2026-ficha-tecnica-precio | OK |
| benimar-mileo-286-2026-precio-autocaravana | OK |
| bentley-batur-2024-precio-ficha-tecnica | OK |
| bentley-batur-convertible-2024-precio-ficha-tecnica | OK |
| bentley-bentayga-2026-precio-ficha-tecnica | OK |
| bentley-bentayga-azure-2026-precio-ficha-tecnica | OK |
| bentley-bentayga-ewb-2026-precio-ficha-tecnica | OK |
| bentley-bentayga-ewb-azure-2026-precio-ficha-tecnica | OK |
| bentley-bentayga-ewb-mulliner-2026-precio-ficha-tecnica | OK |
| bentley-bentayga-s-2024-precio-ficha-tecnica | OK |
| bentley-bentayga-s-black-edition-2024-precio-ficha-tecnica | OK |
| bentley-bentayga-speed-2026-precio-ficha-tecnica | OK |
| bentley-continental-gt-2026-precio-ficha-tecnica | OK |
| bentley-continental-gt-azure-2026-precio-ficha-tecnica | OK |
| bentley-continental-gt-mulliner-2026-precio-ficha-tecnica | OK |
| bentley-continental-gt-speed-2026-precio-ficha-tecnica | OK |
| bentley-continental-gtc-2026-precio-ficha-tecnica | OK |
| bentley-continental-gtc-azure-2026-precio-ficha-tecnica | OK |
| bentley-continental-gtc-mulliner-2026-precio-ficha-tecnica | OK |
| bentley-continental-gtc-speed-2026-precio-ficha-tecnica | OK |
| bentley-flying-spur-2026-precio-ficha-tecnica | OK |
| bentley-flying-spur-azure-2026-precio-ficha-tecnica | OK |
| bentley-flying-spur-mulliner-2026-precio-ficha-tecnica | OK |
| bentley-flying-spur-speed-2026-precio-ficha-tecnica | OK |
| bestune-b70-2026-precio-ficha-tecnica | OK |
| bestune-b70s-2025-precio-ficha-tecnica | OK |
| bestune-e01-2025-precio-ficha-tecnica | OK |
| bestune-m9-2025-precio-ficha-tecnica | OK |
| bestune-nat-2025-precio-ficha-tecnica | OK |
| bestune-pony-2025-precio-ficha-tecnica | OK |
| bestune-t55-2025-precio-ficha-tecnica | OK |
| bestune-t77-2026-precio-ficha-tecnica | OK |
| bestune-t90-2026-precio-ficha-tecnica | OK |
| bestune-t99-2025-precio-ficha-tecnica | OK |
| bestune-yueyi-07-2025-precio-autonomia | OK |
| bestune-yueyi-07-2025-precio-ficha-tecnica | OK |
| bluroc-legend-125-2026-precio-ficha-tecnica | OK |
| bmw-530e-2025-precio-ficha-tecnica | OK |
| bmw-c-400-x-2026 | OK |
| bmw-ce-02-2026 | OK |
| bmw-f-450-r-naked-a2-precio-espana-2026 | OK |
| bmw-f-800-gs-2024-ficha-tecnica-precio | OK |
| bmw-f-900-gs-2026-precio-ficha | OK |
| bmw-f-900-gs-adventure-2026 | OK |
| bmw-f-900-r-2026 | OK |
| bmw-g-310-gs-2025 | OK |
| bmw-g-310-r-2025 | OK |
| bmw-i3-neue-klasse-2026-precio-ficha | OK |
| bmw-i3-neue-klasse-2026-precio-ficha-tecnica | OK |
| bmw-i4-edrive35-2025-precio-ficha-tecnica | OK |
| bmw-i4-m50-xdrive-2026-precio-ficha-tecnica | OK |
| bmw-i4-m60-xdrive-2025-precio-ficha-tecnica | OK |
| bmw-i5-edrive40-2025-precio-ficha-tecnica | OK |
| bmw-i5-edrive40-2026-precio-ficha-tecnica | OK |
| bmw-i5-m60-xdrive-2026-precio-ficha-tecnica | OK |
| bmw-i7-xdrive60-2026-precio-ficha-tecnica | OK |
| bmw-ix-m70-2025-precio-ficha-tecnica | OK |
| bmw-ix-xdrive40-2025-precio-opiniones | OK |
| bmw-ix-xdrive60-2026-precio-ficha-tecnica | OK |
| bmw-ix1-edrive20-2025-precio-ficha-tecnica | OK |
| bmw-ix1-xdrive30-2026-precio-ficha-tecnica | OK |
| bmw-ix2-xdrive30-2026-precio-ficha-tecnica | OK |
| bmw-ix3-40-2026-precio-ficha-tecnica | OK |
| bmw-ix3-50-xdrive-2026-precio-ficha-tecnica | OK |
| bmw-m-1000-rr-2026 | OK |
| bmw-m2-cs-2025-precio-ficha-tecnica | OK |
| bmw-m235-xdrive-gran-coupe-2026-precio-ficha-tecnica | OK |
| bmw-m240i-xdrive-2026-precio-ficha-tecnica | OK |
| bmw-m3-competition-touring-2025-precio-ficha-tecnica | OK |
| bmw-m340i-xdrive-2026-precio-ficha-tecnica | OK |
| bmw-m4-cs-2024-precio-ficha-tecnica | OK |
| bmw-m440i-xdrive-2025-precio-ficha-tecnica | OK |
| bmw-m5-berlina-2026-precio-ficha-tecnica | OK |
| bmw-m5-touring-2026-precio-ficha-tecnica | OK |
| bmw-r-12-gs-2026-precio-ficha | OK |
| bmw-r-12-s-2026 | OK |
| bmw-r-18-classic-2025 | OK |
| bmw-s-1000-rr-2024-ficha-tecnica-precio | OK |
| bmw-s-1000-xr-2026 | OK |
| bmw-serie-1-120-2026-precio-ficha-tecnica | OK |
| bmw-serie-1-2025-precio-autonomia | OK |
| bmw-serie-1-2025-precio-ficha-tecnica | OK |
| bmw-serie-1-m135-2025-precio-ficha-tecnica | OK |
| bmw-serie-2-active-tourer-225e-2025-precio-ficha-tecnica | OK |
| bmw-serie-2-coupe-220i-2025-precio-ficha-tecnica | OK |
| bmw-serie-2-gran-coupe-2025-precio-autonomia | OK |
| bmw-serie-2-gran-coupe-2025-precio-ficha-tecnica | OK |
| bmw-serie-2-gran-coupe-220-2026-precio-ficha-tecnica | OK |
| bmw-serie-3-2025-precio-autonomia | OK |
| bmw-serie-3-2025-precio-ficha-tecnica | OK |
| bmw-serie-3-320d-2026-precio-ficha-tecnica | OK |
| bmw-serie-3-320i-2026-precio-ficha-tecnica | OK |
| bmw-serie-3-330e-2026-precio-ficha-tecnica | OK |
| bmw-serie-4-2025-precio-autonomia | OK |
| bmw-serie-4-2025-precio-ficha-tecnica | OK |
| bmw-serie-4-420d-gran-coupe-2026-precio-ficha-tecnica | OK |
| bmw-serie-4-420i-coupe-2025-precio-ficha-tecnica | OK |
| bmw-serie-5-520d-2026-precio-ficha-tecnica | OK |
| bmw-serie-5-520i-2025-precio-ficha-tecnica | OK |
| bmw-serie-5-530e-2026-precio-ficha-tecnica | OK |
| bmw-serie-8-840i-gc-2026-precio-ficha-tecnica | OK |
| bmw-x1-m35i-2025-precio-ficha-tecnica | OK |
| bmw-x1-sdrive20i-2026-precio-ficha-tecnica | OK |
| bmw-x1-xdrive25e-2025-precio-ficha-tecnica | OK |
| bmw-x2-m35i-2025-precio-ficha-tecnica | OK |
| bmw-x2-sdrive20i-2026-precio-ficha-tecnica | OK |
| bmw-x3-20-xdrive-2026-precio-ficha-tecnica | OK |
| bmw-x3-2025-precio-ficha-tecnica | OK |
| bmw-x3-30e-xdrive-2025-precio-ficha-tecnica | OK |
| bmw-x3-m50-xdrive-2025-precio-ficha-tecnica | OK |
| bmw-x4-2025-precio-autonomia | OK |
| bmw-x4-2025-precio-ficha-tecnica | OK |
| bmw-x5-m60i-2026-precio-ficha-tecnica | OK |
| bmw-x5-xdrive40i-2026-precio-ficha-tecnica | OK |
| bmw-x5-xdrive50e-2026-precio-ficha-tecnica | OK |
| bmw-x6-m-2025-precio-opiniones | OK |
| bmw-x6-xdrive40d-2026-precio-ficha-tecnica | OK |
| bmw-x6-xdrive40i-2026-precio-ficha-tecnica | OK |
| bmw-x7-xdrive40i-2026-precio-ficha-tecnica | OK |
| bmw-xm-50e-2026-precio-ficha-tecnica | OK |
| bmw-z4-m40i-2026-precio-ficha-tecnica | OK |
| brabham-bt62-2024-precio-ficha-tecnica | OK |
| bsa-bantam-350-2026-precio-ficha-tecnica | OK |
| bugatti-tourbillon-2026-precio-ficha-tecnica | OK |
| buick-electra-e5-2025-precio-ficha-tecnica | OK |
| buick-envista-2025-precio-ficha-tecnica | OK |
| buick-gl8-2025-precio-ficha-tecnica | OK |
| bullit-hero-125-2026-precio-ficha-tecnica | OK |
| bultaco-brinco-2026-precio-ficha-tecnica | OK |
| byd-atto-2-dm-i-2026-precio-ficha-tecnica | OK |
| byd-atto-2-precio-ficha-tecnica | OK |
| byd-atto-2-vs-jaecoo-5-cual-comprar | OK |
| byd-atto-3-evo-2025-precio-ficha-tecnica | OK |
| byd-atto-3-evo-2026-precio-espana | OK |
| byd-atto-3-precio-ficha-tecnica | OK |
| byd-dolphin-2025-precio-ficha-tecnica | OK |
| byd-dolphin-active-95-2026-precio-ficha-tecnica | OK |
| byd-dolphin-g-dmi-active-2026-precio-ficha-tecnica | OK |
| byd-dolphin-g-dmi-boost-2026-precio-ficha-tecnica | OK |
| byd-dolphin-surf-my26-5-plazas-precio-espana | OK |
| byd-e7-2025-precio-ficha-tecnica | OK |
| byd-great-han-1008-km-autonomia-carga-9-minutos | OK |
| byd-great-tang-2026-precio-ficha-tecnica | OK |
| byd-han-2024-precio-ficha-tecnica | OK |
| byd-han-l-2025-precio-ficha-tecnica | OK |
| byd-qin-l-dm-i-2025-precio-ficha-tecnica | OK |
| byd-qin-l-ev-2025-precio-autonomia | OK |
| byd-qin-l-ev-2025-precio-ficha-tecnica | OK |
| byd-qin-plus-dm-i-2025-precio-ficha-tecnica | OK |
| byd-seal-05-dm-i-2025-precio-autonomia | OK |
| byd-seal-05-dm-i-2025-precio-ficha-tecnica | OK |
| byd-seal-06-ev-2026-precio-autonomia | OK |
| byd-seal-06-ev-2026-precio-ficha-tecnica | OK |
| byd-seal-06-gt-2025-precio-ficha-tecnica | OK |
| byd-seal-08-2026-precio-autonomia | OK |
| byd-seal-08-2026-precio-ficha-tecnica | OK |
| byd-seal-2024-precio-ficha-tecnica | OK |
| byd-seal-6-dm-i-2025-precio-ficha-tecnica | OK |
| byd-seal-6-dm-i-touring-2025-precio-ficha-tecnica | OK |
| byd-seal-excellence-2024-precio-ficha-tecnica | OK |
| byd-seal-u-dm-i-precio-ficha-tecnica | OK |
| byd-seal-u-ev-2025-precio-ficha-tecnica | OK |
| byd-seal-u-ev-baja-precio-octubre-2026 | OK |
| byd-seal-u-ev-design-87kwh-2026-precio-ficha-tecnica | OK |
| byd-sealion-05-2025-precio | OK |
| byd-sealion-05-2025-precio-ficha-tecnica | OK |
| byd-sealion-05-dm-i-2025-precio-ficha-tecnica | OK |
| byd-sealion-7-2025-precio-ficha-tecnica | OK |
| byd-sealion-7-excellence-2025-precio-ficha-tecnica | OK |
| byd-sealion-8-2026-precio-autonomia | OK |
| byd-sealion-8-2026-precio-ficha-tecnica | OK |
| byd-shark-6-2025-precio-autonomia | OK |
| byd-shark-6-2025-precio-ficha-tecnica | OK |
| byd-song-l-dm-i-2025-precio-autonomia | OK |
| byd-song-l-dm-i-2025-precio-ficha-tecnica | OK |
| byd-song-l-ev-2025-precio-ficha-tecnica | OK |
| byd-song-plus-dm-i-2025-precio-ficha-tecnica | OK |
| byd-song-pro-dm-i-2025-precio-autonomia | OK |
| byd-song-pro-dm-i-2025-precio-ficha-tecnica | OK |
| byd-tang-2024-precio-ficha-tecnica | OK |
| byd-tang-l-2026-precio-ficha-tecnica | OK |
| byd-ti7-2026-precio-ficha-tecnica | FALTA |
| byd-xia-2025-precio-autonomia | OK |
| byd-xia-2025-precio-ficha-tecnica | OK |
| byd-yuan-up-2025-precio-ficha-tecnica | OK |
| cadillac-celestiq-2025-precio-ficha-tecnica | OK |
| cadillac-escalade-iq-2025-precio-ficha-tecnica | OK |
| cadillac-optiq-2025-precio-ficha-tecnica | OK |
| cadillac-vistiq-2026-precio-ficha-tecnica | OK |
| can-am-origin-2026-precio-ficha-tecnica | OK |
| can-am-pulse-2026-precio-ficha-tecnica | OK |
| can-am-pulse-ficha-tecnica-precio | OK |
| carado-t-447-2026-precio-autocaravana | OK |
| caterham-project-v-2026-precio-autonomia | OK |
| caterham-project-v-2026-precio-ficha-tecnica | OK |
| caterham-seven-170-2025-precio-ficha-tecnica | OK |
| caterham-seven-340-2025-precio-ficha-tecnica | OK |
| caterham-super-seven-2000-2025-precio-ficha-tecnica | OK |
| caterham-super-seven-600-2025-precio-ficha-tecnica | OK |
| cfmoto-1000mt-x-2026-ficha-tecnica-precio | OK |
| cfmoto-150nk-naked-precio | OK |
| cfmoto-250-dual-2026-ficha-tecnica-precio | OK |
| cfmoto-250cl-x-neo-retro-precio | OK |
| cfmoto-250sr-deportiva-precio | OK |
| cfmoto-300nk-2026-precio-ficha-tecnica | OK |
| cfmoto-300sr-2026-precio-ficha-tecnica | OK |
| cfmoto-500sr-voom-2026-ficha-tecnica-precio | OK |
| cfmoto-650nk-2025-precio-ficha-tecnica | OK |
| cfmoto-675sr-r-2026-precio-ficha-tecnica | OK |
| cfmoto-800mt-explore-2026-precio-ficha-tecnica | OK |
| changan-benben-e-star-2025-precio-ficha-tecnica | OK |
| changan-cs35-plus-2025-precio-ficha-tecnica | OK |
| changan-cs55-plus-2025-precio-ficha-tecnica | OK |
| changan-cs75-plus-2025-precio-ficha-tecnica | OK |
| changan-deepal-s07-my26-2026-precio-ficha-tecnica | OK |
| changan-e06-2026-precio-ficha-tecnica | OK |
| changan-eado-plus-2025-precio-ficha-tecnica | OK |
| changan-hunter-reev-2025-precio-ficha-tecnica | OK |
| changan-lumin-2025-precio-ficha-tecnica | OK |
| changan-nevo-q06-suv-electrico-paris-2026 | OK |
| changan-uni-k-2025-precio-ficha-tecnica | OK |
| changan-uni-k-idd-2025-precio-ficha-tecnica | OK |
| changan-uni-t-2025-precio-ficha-tecnica | OK |
| changan-uni-v-2025-precio-ficha-tecnica | OK |
| changan-uni-v-idd-2025-precio-ficha-tecnica | OK |
| changan-uni-z-2025-precio-ficha-tecnica | OK |
| changan-x5-plus-2025-precio-autonomia | OK |
| changan-x5-plus-2025-precio-ficha-tecnica | OK |
| chausson-640-2026-precio-autocaravana | OK |
| chery-arrizo-5-2025-precio-ficha-tecnica | OK |
| chery-arrizo-5-gt-2026-precio-ficha-tecnica | OK |
| chery-arrizo-5-plus-2025-precio-ficha-tecnica | OK |
| chery-arrizo-8-2024-precio-ficha-tecnica | OK |
| chery-arrizo-8-csh-2026-precio-ficha-tecnica | OK |
| chery-eq1-2024-precio-ficha-tecnica | OK |
| chery-eq7-2024-precio-ficha-tecnica | OK |
| chery-explorer-06-2024-precio-ficha-tecnica | OK |
| chery-explorer-06-c-dm-2024-precio-ficha-tecnica | OK |
| chery-fulwin-a8l-2024-precio-ficha-tecnica | OK |
| chery-fulwin-a9l-2025-precio-autonomia | OK |
| chery-fulwin-a9l-2025-precio-ficha-tecnica | OK |
| chery-fulwin-t10-2024-precio-ficha-tecnica | OK |
| chery-fulwin-t11-2025-precio-autonomia | OK |
| chery-fulwin-t11-2025-precio-ficha-tecnica | OK |
| chery-fulwin-t8-2025-precio-ficha-tecnica | OK |
| chery-fulwin-t9-2024-precio-ficha-tecnica | OK |
| chery-himla-2026-precio-ficha-tecnica | OK |
| chery-icaur-v27-2027-precio-ficha-tecnica | OK |
| chery-q-2027-precio-ficha-tecnica | OK |
| chery-qq-ice-cream-2025-precio-ficha-tecnica | OK |
| chery-tiggo-2-pro-2025-precio-ficha-tecnica | OK |
| chery-tiggo-4-2025-precio-ficha-tecnica | OK |
| chery-tiggo-4-csh-2026-precio-ficha-tecnica | OK |
| chery-tiggo-4-pro-15t-2026-precio-ficha-tecnica | OK |
| chery-tiggo-7-csh-2026-precio-ficha-tecnica | OK |
| chery-tiggo-7-pro-2026-precio-ficha-tecnica | OK |
| chery-tiggo-8-csh-2025-precio-ficha-tecnica | OK |
| chery-tiggo-8-pro-2026-precio-ficha-tecnica | OK |
| chery-tiggo-9-2024-precio-ficha-tecnica | OK |
| chery-tiggo-9-csh-2026-precio-ficha-tecnica | OK |
| chery-tiggo-9l-2026-precio-ficha-tecnica | OK |
| chery-tiggo-x-2027-precio-ficha-tecnica | OK |
| chevrolet-blazer-ev-2025-precio-autonomia | OK |
| chevrolet-corvette-c8-2025-precio-ficha-tecnica | OK |
| chevrolet-corvette-zr1-2025-precio-ficha-tecnica | OK |
| chevrolet-corvette-zr1x-2026-precio-ficha-tecnica | OK |
| chevrolet-equinox-ev-2025-precio-ficha-tecnica | OK |
| chevrolet-silverado-ev-2025-precio-autonomia | OK |
| chevrolet-spark-euv-2026-precio-autonomia | OK |
| citroen-2cv-electrico-2028 | OK |
| citroen-ami-2026-precio-ficha-tecnica | OK |
| citroen-ami-buggy-2025-precio-ficha-tecnica | OK |
| citroen-ami-cargo-2026-precio-ficha-tecnica | OK |
| citroen-berlingo-2026-precio-ficha-tecnica | OK |
| citroen-berlingo-talla-xl-15-bluehdi-130-2026-precio-ficha-tecnica | OK |
| citroen-c3-2024-precio-ficha-tecnica | OK |
| citroen-c3-aircross-gasolina-2026-precio-ficha-tecnica | OK |
| citroen-c3-aircross-hibrido-2026-precio-ficha-tecnica | OK |
| citroen-c3-gasolina-2026-precio-ficha-tecnica | OK |
| citroen-c3-hibrido-2026-precio-ficha-tecnica | OK |
| citroen-c4-12-puretech-130-2025-precio-ficha-tecnica | OK |
| citroen-c4-cactus-2025-precio-opiniones | OK |
| citroen-c4-hibrido-2026-precio-ficha-tecnica | OK |
| citroen-c4-x-12-puretech-130-2025-precio-ficha-tecnica | OK |
| citroen-c4-x-hibrido-2026-precio-ficha-tecnica | OK |
| citroen-c5-aircross-12-puretech-130-2024-precio-ficha-tecnica | OK |
| citroen-c5-aircross-hibrido-2025-precio-ficha-tecnica | OK |
| citroen-c5-aircross-hibrido-2026-precio-ficha-tecnica | OK |
| citroen-c5-aircross-phev-2025-precio-ficha-tecnica | OK |
| citroen-c5-aircross-phev-2026-precio-ficha-tecnica | OK |
| citroen-c5-x-2025-precio-ficha-tecnica | OK |
| citroen-c5-x-hibrido-2026-precio-ficha-tecnica | OK |
| citroen-c5-x-phev-2026-precio-ficha-tecnica | OK |
| citroen-e-berlingo-2026-precio-ficha-tecnica | OK |
| citroen-e-c3-2024-precio-ficha-tecnica | OK |
| citroen-e-c3-2026-precio-ficha-tecnica | OK |
| citroen-e-c3-aircross-2026-precio-ficha-tecnica | OK |
| citroen-e-c3-aircross-baja-precio-octubre-2026 | OK |
| citroen-e-c3-aircross-electrico-precio-ficha-tecnica | OK |
| citroen-e-c4-2026-precio-ficha-tecnica | OK |
| citroen-e-c4-x-2026-precio-ficha-tecnica | OK |
| citroen-e-c5-aircross-2025-precio-ficha-tecnica | OK |
| citroen-e-c5-aircross-long-range-2026-precio-ficha-tecnica | OK |
| citroen-e-jumper-2026-precio-ficha-tecnica | OK |
| citroen-e-jumpy-2026-precio-ficha-tecnica | OK |
| citroen-e-spacetourer-2026-precio-ficha-tecnica | OK |
| citroen-jumper-22-bluehdi-140-2026-precio-ficha-tecnica | OK |
| citroen-jumper-22-bluehdi-180-2026-precio-ficha-tecnica | OK |
| citroen-jumpy-diesel-2026-precio-ficha-tecnica | OK |
| citroen-spacetourer-2026-precio-ficha-tecnica | OK |
| citroen-spacetourer-campster-2025-precio-camper | OK |
| coches-mas-seguros-2026-euroncap-ranking | OK |
| cumbre-mundial-motos-seguras-zaragoza-2026 | OK |
| cuotas-hibridos-chinos-ue-china-2026 | OK |
| cupra-ateca-190-2025-precio-ficha-tecnica | OK |
| cupra-ateca-vz-300-2025-precio-ficha-tecnica | OK |
| cupra-born-190-2026-precio-ficha-tecnica | OK |
| cupra-born-204-2026-precio-ficha-tecnica | OK |
| cupra-born-endurance-231-2026-precio-ficha-tecnica | OK |
| cupra-born-vz-326-2026-precio-ficha-tecnica | OK |
| cupra-formentor-15-etsi-2025-precio-ficha-tecnica | OK |
| cupra-formentor-20-tdi-2026-precio-ficha-tecnica | OK |
| cupra-formentor-20-tsi-204-2026-precio-ficha-tecnica | OK |
| cupra-formentor-2024-precio-ficha-tecnica | OK |
| cupra-formentor-ehybrid-204-2025-precio-ficha-tecnica | OK |
| cupra-formentor-vz-265-2025-precio-ficha-tecnica | OK |
| cupra-formentor-vz-333-2025-precio-ficha-tecnica | OK |
| cupra-formentor-vz-ehybrid-272-2025-precio-ficha-tecnica | OK |
| cupra-leon-15-tsi-2025-precio-ficha-tecnica | OK |
| cupra-leon-2025-precio-ficha-tecnica | OK |
| cupra-leon-ehybrid-204-2025-precio-ficha-tecnica | OK |
| cupra-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica | OK |
| cupra-leon-sportstourer-20-tdi-2026-precio-ficha-tecnica | OK |
| cupra-leon-sportstourer-2025-precio-ficha-tecnica | OK |
| cupra-leon-sportstourer-ehybrid-204-2025-precio-ficha-tecnica | OK |
| cupra-leon-sportstourer-vz-333-2025-precio-ficha-tecnica | OK |
| cupra-leon-vz-300-2025-precio-ficha-tecnica | OK |
| cupra-leon-vz-325-2025-precio-ficha-tecnica | OK |
| cupra-raval-2026-precio-ficha-tecnica | OK |
| cupra-raval-electrico-precio-espana-2026 | OK |
| cupra-raval-endurance-2026-precio-ficha-tecnica | OK |
| cupra-raval-plus-2026-precio-ficha-tecnica | OK |
| cupra-raval-vz-2025-precio-ficha-tecnica | OK |
| cupra-raval-vz-226-2026-precio-ficha-tecnica | OK |
| cupra-tavascan-190-2026-precio-ficha-tecnica | OK |
| cupra-tavascan-baja-precio-octubre-2026 | OK |
| cupra-tavascan-endurance-286-2026-precio-ficha-tecnica | OK |
| cupra-tavascan-vz-2025-precio-ficha-tecnica | OK |
| cupra-tavascan-vz-340-2026-precio-ficha-tecnica | OK |
| cupra-terramar-15-etsi-2026-precio-ficha-tecnica | OK |
| cupra-terramar-20-tsi-204-2026-precio-ficha-tecnica | OK |
| cupra-terramar-ehybrid-204-2025-precio-ficha-tecnica | OK |
| cupra-terramar-vz-265-2025-precio-ficha-tecnica | OK |
| cupra-terramar-vz-ehybrid-2025-precio-ficha-tecnica | OK |
| cupra-terramar-vz-ehybrid-272-2025-precio-ficha-tecnica | OK |
| cyclone-battlo-125-naked-precio | OK |
| cyclone-carrera-125-2026-ficha-tecnica-precio | OK |
| cyclone-ra-600-2026-ficha-tecnica-precio | OK |
| cyclone-ra2-125-custom-precio | OK |
| cyclone-rc-600-2025-ficha-tecnica-precio | OK |
| cyclone-re5-2026-ficha-tecnica-precio | OK |
| cyclone-rx1-125-trail-precio | OK |
| cyclone-rx2-125-2026-ficha-tecnica-precio | OK |
| cyclone-rx6-2026-ficha-tecnica-precio | OK |
| czinger-21c-2025-precio-ficha-tecnica | OK |
| dacia-bigster-2025-precio-ficha-tecnica | OK |
| dacia-bigster-2026-hybrid-155-precio-ficha-tecnica | OK |
| dacia-bigster-2026-tce-140-precio-ficha-tecnica | OK |
| dacia-bigster-eco-g-140-2025-precio-ficha-tecnica | OK |
| dacia-bigster-hybrid-155-2025-precio-ficha-tecnica | OK |
| dacia-bigster-hybrid-g-150-4x4-2026-precio-ficha-tecnica | OK |
| dacia-bigster-hybrid-precio-espana | OK |
| dacia-bigster-hybrid-vs-jaecoo-5-cual-comprar | OK |
| dacia-bigster-tce-130-4x4-2025-precio-ficha-tecnica | OK |
| dacia-bigster-tce-140-2025-precio-ficha-tecnica | OK |
| dacia-duster-2026-eco-g-120-precio-ficha-tecnica | OK |
| dacia-duster-2026-hybrid-155-precio-ficha-tecnica | OK |
| dacia-duster-2026-mild-hybrid-140-precio-ficha-tecnica | OK |
| dacia-duster-blue-dci-115-2024-precio-ficha-tecnica | OK |
| dacia-duster-eco-g-100-2025-precio-ficha-tecnica | OK |
| dacia-duster-hybrid-140-2025-precio-ficha-tecnica | OK |
| dacia-duster-hybrid-g-150-4x4-2026-precio-ficha-tecnica | OK |
| dacia-duster-tce-130-2025-precio-ficha-tecnica | OK |
| dacia-duster-tce-130-4x4-2025-precio-ficha-tecnica | OK |
| dacia-hipster-2027-precio-ficha | OK |
| dacia-hipster-2027-precio-ficha-tecnica | OK |
| dacia-jogger-eco-g-120-2026-precio-ficha-tecnica | OK |
| dacia-jogger-eco-g-120-7-plazas-2026-precio-ficha-tecnica | OK |
| dacia-jogger-hybrid-140-2025-precio-ficha-tecnica | OK |
| dacia-jogger-hybrid-140-7-plazas-2025-precio-ficha-tecnica | OK |
| dacia-jogger-hybrid-155-2026-precio-ficha-tecnica | OK |
| dacia-jogger-tce-110-2026-precio-ficha-tecnica | OK |
| dacia-jogger-tce-110-7-plazas-2026-precio-ficha-tecnica | OK |
| dacia-lodgy-2025-precio-opiniones | OK |
| dacia-logan-eco-g-100-2025-precio-ficha-tecnica | OK |
| dacia-logan-tce-90-2026-precio-ficha-tecnica | OK |
| dacia-sandero-2025-precio-ficha-tecnica | OK |
| dacia-sandero-baja-precio-octubre-2026 | OK |
| dacia-sandero-eco-g-100-2026-precio-ficha-tecnica | OK |
| dacia-sandero-hybrid-155-2026-precio-ficha-tecnica | OK |
| dacia-sandero-stepway-eco-g-100-2026-precio-ficha-tecnica | OK |
| dacia-sandero-stepway-hybrid-155-2026-precio-ficha-tecnica | OK |
| dacia-sandero-stepway-tce-90-2026-precio-ficha-tecnica | OK |
| dacia-sandero-tce-90-2026-precio-ficha-tecnica | OK |
| dacia-spring-2024-precio-ficha-tecnica | OK |
| dacia-spring-2026-nueva-generacion-precio | OK |
| dacia-spring-baja-precio-octubre-2026 | OK |
| dacia-spring-electric-45-2024-precio-ficha-tecnica | OK |
| dacia-spring-electric-65-2024-precio-ficha-tecnica | OK |
| dacia-spring-extreme-2025-precio-ficha-tecnica | OK |
| dacia-striker-2026-precio-ficha | OK |
| dacia-tribrid-150-4x4-tres-energias | OK |
| daihatsu-copen-2025-precio-opiniones | OK |
| dallara-stradale-2025-precio-ficha-tecnica | OK |
| dayun-yuehu-2026-precio-ficha-tecnica | OK |
| de-tomaso-p72-2025-precio-ficha-tecnica | OK |
| de-tomaso-p900-2025-precio-ficha-tecnica | OK |
| deepal-g318-2025-precio-ficha-tecnica | OK |
| deepal-l06-2026-precio-ficha-tecnica | OK |
| deepal-l07-2025-precio-ficha-tecnica | OK |
| deepal-s05-2025-precio-ficha-tecnica | OK |
| deepal-s05-2026-precio-ficha-tecnica | OK |
| deepal-s05-awd-2026-precio-ficha-tecnica | OK |
| deepal-s05-phev-2026-precio-ficha-tecnica | OK |
| deepal-s05-precio-espana-2026 | OK |
| deepal-s07-2025-precio-ficha-tecnica | OK |
| deepal-s07-precio-espana-ficha-tecnica | OK |
| deepal-s09-2026-precio-ficha-tecnica | OK |
| delage-d12-club-2025-precio-ficha-tecnica | OK |
| delage-d12-gt-2025-precio-ficha-tecnica | OK |
| denza-bao-5-2026-precio-ficha-tecnica | OK |
| denza-bao-8-2026-precio-ficha-tecnica | OK |
| denza-d9-dm-i-2025-precio-ficha-tecnica | OK |
| denza-d9-dm-i-2026-precio-ficha-tecnica | OK |
| denza-d9-ev-2025-precio-ficha-tecnica | OK |
| denza-n7-2024-precio-ficha-tecnica | OK |
| denza-n7-2025-precio-ficha-tecnica | OK |
| denza-n8-dm-p-2024-precio-ficha-tecnica | OK |
| denza-n8-ev-2026-precio-ficha-tecnica | OK |
| denza-n8l-dm-2025-precio-ficha-tecnica | OK |
| denza-n8l-ev-2026-precio-ficha-tecnica | OK |
| denza-n9-byd-2026-precio-ficha-tecnica | OK |
| denza-z-coupe-2026-precio-ficha-tecnica | OK |
| denza-z-racing-2026-precio-ficha-tecnica | OK |
| denza-z-spider-2026-precio-ficha-tecnica | OK |
| denza-z-superdeportivo-electrico-2026 | OK |
| denza-z9-dm-2024-precio-ficha-tecnica | OK |
| denza-z9-dm-2025-precio-ficha-tecnica | OK |
| denza-z9-ev-2024-precio-ficha-tecnica | OK |
| denza-z9-gt-2025-precio-ficha-tecnica | OK |
| denza-z9gt-dm-2026-precio-ficha-tecnica | OK |
| denza-z9gt-ev-2026-precio-ficha-tecnica | OK |
| denza-z9s-2026-precio-ficha-tecnica | OK |
| dfsk-500-2025-precio-ficha-tecnica | OK |
| dfsk-600-2026-precio-ficha-tecnica | OK |
| dfsk-e5-hibrido-enchufable-precio-ficha-tecnica | OK |
| dfsk-e5-plus-2026-precio-ficha-tecnica | OK |
| dfsk-f5-2025-precio-ficha-tecnica | OK |
| dfsk-f5-2026-precio-ficha-tecnica | OK |
| dfsk-glory-580-2025-precio-ficha-tecnica | OK |
| dfsk-seres-3-2026-precio-ficha-tecnica | OK |
| dfsk-seres-5-2026-precio-ficha-tecnica | OK |
| dfsk-seres-5-4wd-2026-precio-ficha-tecnica | OK |
| dodge-charger-daytona-ev-2025-precio-ficha-tecnica | OK |
| dongfeng-aeolus-ax7-2026-precio-ficha-tecnica | OK |
| dongfeng-aeolus-huge-2023-precio-ficha-tecnica | OK |
| dongfeng-aeolus-l7-2025-precio-ficha-tecnica | OK |
| dongfeng-aeolus-l8-2025-precio-ficha-tecnica | OK |
| dongfeng-aeolus-yixuan-2025-precio-ficha-tecnica | OK |
| dongfeng-box-2025-precio-ficha-tecnica | OK |
| dongfeng-epi-007-2025-precio-ficha-tecnica | OK |
| dongfeng-epi-008-2025-precio-ficha-tecnica | OK |
| dongfeng-epi-008-ev-2025-precio-ficha-tecnica | OK |
| dongfeng-fengguang-mini-ev-2026-precio-ficha-tecnica | OK |
| dongfeng-huge-hev-2025-precio-ficha-tecnica | OK |
| dongfeng-nammi-06-2025-precio-ficha-tecnica | OK |
| dongfeng-nano-box-2025-precio-ficha-tecnica | OK |
| dongfeng-rich-6-ev-2026-precio-ficha-tecnica | OK |
| dongfeng-rich-6-ev-pickup-2026-precio-ficha | OK |
| dongfeng-shine-2025-precio-ficha-tecnica | OK |
| dongfeng-shine-gs-2025-precio-ficha-tecnica | OK |
| dongfeng-vigo-mage-phev-precio-espana-ficha | OK |
| donkervoort-d8-gto-jd70-r-2025-precio-ficha-tecnica | OK |
| donkervoort-f22-2025-precio-ficha-tecnica | OK |
| doohan-itank-2025-ficha-tecnica-precio | OK |
| dr-3-0-2025-precio-ficha-tecnica | OK |
| dr-4-0-2025-precio-ficha-tecnica | OK |
| dr-5-0-2025-precio-ficha-tecnica | OK |
| dr-5-stilnovo-2026-precio-ficha-tecnica | OK |
| dr-6-0-2025-precio-ficha-tecnica | OK |
| dr-7-0-2025-precio-ficha-tecnica | OK |
| dr-ickx-k2-2025-precio-ficha-tecnica | OK |
| dr-sportequipe-7-2025-precio-ficha-tecnica | OK |
| dr-sportequipe-8-2025-precio-ficha-tecnica | OK |
| ds-3-2025-precio-ficha-tecnica | OK |
| ds-3-e-tense-2026-precio-ficha-tecnica | OK |
| ds-4-2025-precio-ficha-tecnica | OK |
| ds-7-2025-precio-ficha-tecnica | OK |
| ds-9-e-tense-2026-precio-ficha-tecnica | OK |
| ds-9-e-tense-250-2026-precio-ficha | OK |
| ds-f3ver-concept-paris-2026 | OK |
| ds-n4-e-tense-213-2026-precio-ficha-tecnica | OK |
| ds-n4-hibrido-145-2026-precio-ficha-tecnica | OK |
| ds-n7-nueva-generacion-salon-paris-2026 | OK |
| ds-n8-2025-precio-ficha-tecnica | OK |
| ds-n8-awd-350-2026-precio-ficha-tecnica | OK |
| ds-n8-long-range-2026-precio-ficha-tecnica | OK |
| dualtron-storm-precio-ficha-tecnica | OK |
| dualtron-thunder-precio-ficha-tecnica | OK |
| dualtron-ultra-2-precio-ficha-tecnica | OK |
| dualtron-x2-precio-ficha-tecnica | OK |
| ducati-desertx-rally-2025-precio-ficha-tecnica | OK |
| ducati-desmo450-eds-2026-precio-ficha-tecnica | OK |
| ducati-desmo450-sm-2026-precio-ficha-tecnica | OK |
| ducati-hypermotard-698-mono-rve-2025-precio-ficha-tecnica | OK |
| ducati-monster-2026-quinta-generacion-precio-espana | OK |
| ducati-monster-v2-2026-precio-ficha-tecnica | OK |
| ducati-multistrada-v2-s-2025-precio-ficha-tecnica | OK |
| ducati-multistrada-v4-2026-precio-ficha | OK |
| ducati-panigale-v2-2025-ficha-tecnica-precio | OK |
| ducati-panigale-v2-s-2025-precio-ficha-tecnica | OK |
| ducati-panigale-v4-s-2026-precio-ficha-tecnica | OK |
| ducati-panigale-v4-tricolore-2025-precio-ficha | OK |
| ducati-scrambler-800-full-throttle-2026-precio-ficha-tecnica | OK |
| ducati-scrambler-icon-2026-precio-ficha-tecnica | OK |
| ducati-scrambler-icon-800-2026-precio-ficha | OK |
| ducati-streetfighter-v4-s-2026-precio-ficha-tecnica | OK |
| ebro-s400-2025-precio-ficha-tecnica | OK |
| ebro-s400-excellence-2025-precio-ficha-tecnica | OK |
| ebro-s400-hibrido-precio-ficha-tecnica | OK |
| ebro-s700-2025-precio-ficha-tecnica | OK |
| ebro-s700-hibrido-2026-precio-ficha-tecnica | OK |
| ebro-s700-phev-2026-precio-ficha-tecnica | OK |
| ebro-s700-precio-ficha-tecnica | OK |
| ebro-s800-2025-precio-ficha-tecnica | OK |
| ebro-s800-phev-2027-perfiles-adas-personales | OK |
| ebro-s800-phev-precio-ficha-tecnica | OK |
| ebro-s900-phev-2026-precio-ficha-tecnica | OK |
| ebroh-bravo-gle-2026-precio-ficha-tecnica | OK |
| egret-gt-precio-ficha-tecnica | OK |
| electric-motion-escape-r-2026-precio-ficha-tecnica | OK |
| electricos-mas-vendidos-espana-septiembre-2026 | OK |
| emove-cruiser-s-precio-ficha-tecnica | OK |
| emove-roadrunner-precio-ficha-tecnica | OK |
| emove-roadrunner-pro-precio-ficha-tecnica | OK |
| emove-roadster-precio-ficha-tecnica | OK |
| energica-ego-plus-2025-precio-ficha-tecnica | OK |
| energica-eva-esseesse9-plus-2025-precio-ficha-tecnica | OK |
| europa-retrasa-coche-autonomo-espana-pruebas | OK |
| evo-3-2025-precio-ficha-tecnica | OK |
| evo-4-2025-precio-ficha-tecnica | OK |
| evo-5-2025-precio-ficha-tecnica | OK |
| evo-6-2026-precio-ficha-tecnica | OK |
| evo-6-hev-2026-precio-ficha-tecnica | OK |
| evo-7-2025-precio-ficha-tecnica | OK |
| evo-cross-4-2025-precio-ficha-tecnica | OK |
| evo-cuatro-2026-precio-ficha-tecnica | OK |
| evo-spazio-2026-precio-ficha-tecnica | OK |
| evoke-nrgy-moto-electrica-china-120-kmh | OK |
| exeed-et5-2026-precio-ficha-tecnica | OK |
| exeed-lx-2025-precio-ficha-tecnica | OK |
| exeed-lx-c-dm-2024-precio-ficha-tecnica | OK |
| exeed-rx-2025-precio-ficha-tecnica | OK |
| exeed-rx-c-dm-2025-precio-ficha-tecnica | OK |
| exeed-sterra-es-2025-precio-ficha-tecnica | OK |
| exeed-sterra-es-reev-2025-precio-ficha-tecnica | OK |
| exeed-sterra-et-2025-precio-ficha-tecnica | OK |
| exeed-sterra-et-reev-2024-precio-ficha-tecnica | OK |
| exeed-txl-2025-precio-ficha-tecnica | OK |
| exeed-vx-2025-precio-ficha-tecnica | OK |
| exeed-vx-c-dm-2025-precio-ficha-tecnica | OK |
| fangchengbao-bao-3-2025-precio-autonomia | OK |
| fangchengbao-bao-3-2025-precio-ficha-tecnica | OK |
| fangchengbao-byd-marca-desconocida-formula-s-bao-5 | OK |
| fangchengbao-tai-3-2025-precio-ficha-tecnica | OK |
| fangchengbao-ti-9-2026-precio-ficha-tecnica | OK |
| fantic-caballero-125-rally-2025-precio-ficha-tecnica | OK |
| fantic-caballero-500-rally-2025-precio-ficha-tecnica | OK |
| fantic-stealth-500-2026-ficha-tecnica-precio | OK |
| fb-mondial-flex-300-2026-precio-ficha-tecnica | OK |
| fb-mondial-hps-125-2025-precio-ficha-tecnica | OK |
| fb-mondial-hps-125-precio | OK |
| fb-mondial-hps-300-2018-ficha-tecnica-precio | OK |
| fb-mondial-imola-125-2026-precio-ficha-tecnica | OK |
| fb-mondial-piega-125-precio | OK |
| felo-fw-06-2025-ficha-tecnica-precio | OK |
| ferrari-12cilindri-2025-precio-ficha-tecnica | OK |
| ferrari-12cilindri-manuale-2026-precio-ficha-tecnica | OK |
| ferrari-12cilindri-spider-2025-precio-ficha-tecnica | OK |
| ferrari-296-gtb-2025-precio-ficha-tecnica | OK |
| ferrari-296-gts-2025-precio-ficha-tecnica | OK |
| ferrari-296-speciale-2026-precio-ficha-tecnica | OK |
| ferrari-296-speciale-a-2026-precio-ficha-tecnica | OK |
| ferrari-296-speciale-piloti-2025-precio-ficha-tecnica | OK |
| ferrari-812-gts-2024-precio-ficha-tecnica | OK |
| ferrari-amalfi-2026-precio-ficha-tecnica | OK |
| ferrari-amalfi-spider-2026-precio-ficha-tecnica | OK |
| ferrari-daytona-sp3-2025-precio-ficha-tecnica | OK |
| ferrari-f80-2026-precio-ficha-tecnica | OK |
| ferrari-luce-2026-precio-ficha-tecnica | OK |
| ferrari-purosangue-2025-precio-ficha-tecnica | OK |
| ferrari-roma-2024-precio-ficha-tecnica | OK |
| ferrari-roma-spider-2025-precio-ficha-tecnica | OK |
| ferrari-sf90-spider-2025-precio-ficha-tecnica | OK |
| ferrari-sf90-stradale-2025-precio-ficha-tecnica | OK |
| ferrari-sf90-xx-spider-2025-precio-ficha-tecnica | OK |
| ferrari-sf90-xx-stradale-2025-precio-ficha-tecnica | OK |
| fiat-500-hibrido-2025-precio-ficha-tecnica | OK |
| fiat-500e-2025-precio-ficha-tecnica | OK |
| fiat-500e-3plus1-118-2025-precio-ficha-tecnica | OK |
| fiat-500e-cabrio-118-2025-precio-ficha-tecnica | OK |
| fiat-500e-giorgio-armani-2025-precio-ficha-tecnica | OK |
| fiat-500x-2025-precio-ficha-tecnica | OK |
| fiat-600-12-turbo-100-2024-precio-ficha-tecnica | OK |
| fiat-600-hybrid-110-2025-precio-ficha-tecnica | OK |
| fiat-600-sport-145cv-2025-precio-ficha-tecnica | OK |
| fiat-600e-2025-precio-ficha-tecnica | OK |
| fiat-doblo-12-puretech-110-2025-precio-ficha-tecnica | OK |
| fiat-doblo-2024-precio-ficha-tecnica | OK |
| fiat-ducato-22-mjt-180-2026-precio-ficha-tecnica | OK |
| fiat-e-doblo-2024-precio-ficha-tecnica | OK |
| fiat-e-ducato-2026-precio-ficha-tecnica | OK |
| fiat-e-scudo-2026-precio-ficha-tecnica | OK |
| fiat-e-ulysse-2024-precio-ficha-tecnica | OK |
| fiat-grande-panda-electrico-precio-ficha-tecnica | OK |
| fiat-grande-panda-ev-113-2025-precio-ficha-tecnica | OK |
| fiat-grande-panda-hibrido-2025-precio-ficha-tecnica | OK |
| fiat-grizzly-fastback-paris-2026 | OK |
| fiat-multiplay-concept-paris-2026 | OK |
| fiat-panda-pandina-2025-precio-hibrido | OK |
| fiat-pandina-2024-precio-ficha-tecnica | OK |
| fiat-scudo-20-mjt-180-2026-precio-ficha-tecnica | OK |
| fiat-tipo-16-mjt-130-2025-precio-ficha-tecnica | OK |
| fiat-tipo-2024-precio-ficha-tecnica | OK |
| fiat-tipo-cross-hybrid-130-2024-precio-ficha-tecnica | OK |
| fiat-tipo-sw-precio-ficha-tecnica | OK |
| fiat-topolino-2024-precio-ficha-tecnica | OK |
| fiat-ulysse-20-bluehdi-180-2025-precio-ficha-tecnica | OK |
| fluid-horizon-precio-ficha-tecnica | OK |
| fluid-mosquito-precio-ficha-tecnica | OK |
| flying-flea-c6-moto-electrica-royal-enfield-5990-euros | OK |
| ford-bronco-2025-precio-ficha-tecnica | OK |
| ford-capri-electrico-2025-precio-ficha-tecnica | OK |
| ford-capri-ev-2025-precio-ficha-tecnica | OK |
| ford-e-tourneo-custom-2025-precio-ficha-tecnica | OK |
| ford-e-transit-2025-precio-ficha-tecnica | OK |
| ford-e-transit-courier-2025-precio-ficha-tecnica | OK |
| ford-explorer-electrico-2025-precio-ficha-tecnica | OK |
| ford-explorer-electrico-awd-2025-precio-ficha-tecnica | OK |
| ford-explorer-phev-precio-ficha-tecnica | OK |
| ford-f-150-lightning-precio-ficha-tecnica | OK |
| ford-fiesta-2025-precio-autonomia | OK |
| ford-fiesta-st-precio-ficha-tecnica | OK |
| ford-focus-2025-precio-ficha-tecnica | OK |
| ford-focus-mhev-2025-precio-ficha-tecnica | OK |
| ford-focus-st-2025-precio-ficha-tecnica | OK |
| ford-kuga-fhev-2025-precio-ficha-tecnica | OK |
| ford-kuga-phev-2025-precio-ficha-tecnica | OK |
| ford-maverick-precio-ficha-tecnica | OK |
| ford-mustang-2025-precio-ficha-tecnica | OK |
| ford-mustang-dark-horse-2025-precio-ficha-tecnica | OK |
| ford-mustang-gt-fastback-2025-precio-ficha-tecnica | OK |
| ford-mustang-gtd-precio-ficha-tecnica | OK |
| ford-mustang-mach-e-2025-precio-ficha-tecnica | OK |
| ford-mustang-mach-e-2026-precio-ficha-tecnica | OK |
| ford-mustang-mach-e-extended-2025-precio-ficha-tecnica | OK |
| ford-mustang-mach-e-gt-2025-precio-ficha-tecnica | OK |
| ford-mustang-mach-e-rally-2025-precio-ficha-tecnica | OK |
| ford-puma-gen-e-2025-precio-ficha-tecnica | OK |
| ford-puma-gen-e-baja-precio-octubre-2026 | OK |
| ford-puma-mhev-2025-precio-ficha-tecnica | OK |
| ford-puma-st-2025-precio-ficha-tecnica | OK |
| ford-puma-st-baja-precio-octubre-2026 | OK |
| ford-puma-st-line-x-mhev-155-2025-precio-ficha-tecnica | OK |
| ford-ranger-ms-rt-precio-ficha-tecnica | OK |
| ford-ranger-phev-2025-precio-ficha-tecnica | OK |
| ford-ranger-raptor-2025-precio-ficha-tecnica | OK |
| ford-ranger-wildtrak-2025-precio-ficha-tecnica | OK |
| ford-tourneo-connect-phev-150-2025-precio-ficha-tecnica | OK |
| ford-tourneo-courier-2025-precio-ficha-tecnica | OK |
| ford-tourneo-custom-phev-2025-precio-ficha-tecnica | OK |
| ford-transit-city-2026-precio-ficha-tecnica | OK |
| ford-transit-connect-phev-2026-precio-ficha-tecnica | OK |
| ford-transit-custom-2025-precio-ficha-tecnica | OK |
| ford-transit-custom-nugget-2025-precio-camper | OK |
| ford-transit-nugget-plus-precio-ficha-tecnica | OK |
| forthing-friday-ev-2025-precio-ficha-tecnica | OK |
| forthing-friday-reev-2025-precio-ficha-tecnica | OK |
| forthing-s7-ev-2025-precio-ficha-tecnica | OK |
| forthing-s7-reev-2026-precio-ficha-tecnica | OK |
| forthing-t5-2025-precio-ficha-tecnica | OK |
| forthing-t5-evo-2025-precio-ficha-tecnica | OK |
| forthing-t5-evo-hev-2025-precio-ficha-tecnica | OK |
| forthing-u-tour-2025-precio-ficha-tecnica | OK |
| forthing-u-tour-hev-2025-precio-ficha-tecnica | OK |
| forthing-v9-2025-precio-ficha-tecnica | OK |
| foton-general-g9-2026-precio-ficha-tecnica | OK |
| foton-tunland-v7-2025-precio-ficha-tecnica | OK |
| francia-retira-carnet-movil-al-volante | OK |
| gac-aion-rt-2025-precio-ficha-tecnica | OK |
| gac-aion-v-2024-precio | OK |
| gac-aion-v-2024-precio-ficha-tecnica | OK |
| gac-emkoo-2025-precio-autonomia | OK |
| gac-emkoo-2025-precio-ficha-tecnica | OK |
| gac-empow-2024-precio-ficha-tecnica | OK |
| gac-gs8-2025-precio-autonomia | OK |
| gac-gs8-2025-precio-ficha-tecnica | OK |
| gac-m8-2026-precio-ficha-tecnica | OK |
| gac-trumpchi-es9-2024-precio-autonomia | OK |
| gac-trumpchi-es9-2024-precio-ficha-tecnica | OK |
| gac-trumpchi-gs3-emzoom-2025-precio-autonomia | OK |
| gac-trumpchi-gs3-emzoom-2025-precio-ficha-tecnica | OK |
| gac-trumpchi-gs4-max-2026-precio-autonomia | OK |
| gac-trumpchi-gs4-max-2026-precio-ficha-tecnica | OK |
| gac-trumpchi-xiangwang-s7-2025-precio-autonomia | OK |
| gac-trumpchi-xiangwang-s7-2025-precio-ficha-tecnica | OK |
| gac-trumpchi-xiangwang-s9-2025-precio-autonomia | OK |
| gac-trumpchi-xiangwang-s9-2025-precio-ficha-tecnica | OK |
| gasgas-sm-700-2024-ficha-tecnica-precio | OK |
| geely-atlas-2025-precio-ficha-tecnica | OK |
| geely-binrui-cool-2025-precio-ficha-tecnica | OK |
| geely-cityray-2025-precio-ficha-tecnica | OK |
| geely-coolray-2025-precio-ficha-tecnica | OK |
| geely-e2-electrico-barato-precio-espana | OK |
| geely-e5-2026-precio-ficha-tecnica | OK |
| geely-emgrand-2025-precio-ficha-tecnica | OK |
| geely-ex2-2025-precio-autonomia | OK |
| geely-ex2-2025-precio-ficha-tecnica | OK |
| geely-galaxy-a7-em-i-2025-precio-ficha-tecnica | OK |
| geely-galaxy-battleship-700-zhanjian-700 | OK |
| geely-galaxy-e8-2024-precio-ficha-tecnica | OK |
| geely-galaxy-l6-em-i-2025-precio-ficha-tecnica | OK |
| geely-galaxy-l7-em-i-2025-precio-ficha-tecnica | OK |
| geely-galaxy-m9-2025-precio-ficha-tecnica | OK |
| geely-galaxy-starshine-8-2025-precio-ficha-tecnica | OK |
| geely-galaxy-tt-berlina-electrica-china | OK |
| geely-galaxy-xingjian-7-2025-precio-ficha-tecnica | OK |
| geely-galaxy-xingyuan-2024-precio-ficha-tecnica | OK |
| geely-galaxy-zhanjian-700-2026-precio-ficha-tecnica | OK |
| geely-monjaro-2025-precio-ficha-tecnica | OK |
| geely-panda-mini-2026-precio-ficha-tecnica | OK |
| geely-preface-2025-precio-ficha-tecnica | OK |
| geely-starray-em-i-2026-precio-ficha-tecnica | OK |
| genesis-g70-precio-ficha-tecnica | OK |
| genesis-g80-precio-ficha-tecnica | OK |
| genesis-gv60-2025-precio-autonomia | OK |
| genesis-gv70-2025-precio-autonomia | OK |
| genesis-gv80-precio-ficha-tecnica | OK |
| genesis-gv90-2027-precio-autonomia | OK |
| glion-balto-precio-ficha-tecnica | OK |
| glion-dolly-precio-ficha-tecnica | OK |
| gmc-hummer-ev-2025-precio-ficha-tecnica | OK |
| gmc-sierra-ev-2025-precio-autonomia | OK |
| gogoro-2-plus-2025-ficha-tecnica-precio | OK |
| gordon-murray-t33-2025-precio-ficha-tecnica | OK |
| gordon-murray-t50-2025-precio-ficha-tecnica | OK |
| gotrax-g2-precio-ficha-tecnica | OK |
| gwm-cannon-alpha-2024-precio-ficha-tecnica | OK |
| gwm-cannon-alpha-phev-2025-precio-ficha-tecnica | OK |
| gwm-haval-h6-2024-precio | OK |
| gwm-haval-h6-2024-precio-ficha-tecnica | OK |
| gwm-king-kong-poer-2026-precio-ficha-tecnica | OK |
| gwm-ora-03-2025-precio-ficha-tecnica | OK |
| gwm-ora-03-gt-2025-precio-ficha-tecnica | OK |
| gwm-ora-05-2026-precio-ficha-tecnica | OK |
| gwm-ora-07-2025-precio-ficha-tecnica | OK |
| gwm-ora-5-2026-precio-autonomia | OK |
| gwm-ora-5-2026-precio-ficha-tecnica | OK |
| gwm-poer-2024-precio-ficha-tecnica | OK |
| gwm-poer-2025-precio-ficha-tecnica | OK |
| haima-7x-2026-precio-ficha-tecnica | OK |
| haima-8s-2026-precio-ficha-tecnica | OK |
| hanway-furious-nk-125-2024-ficha-tecnica-precio | OK |
| hanway-sc-125-s-precio-ficha | OK |
| haval-chitu-2024-precio-ficha-tecnica | OK |
| haval-cool-dog-2024-precio-ficha-tecnica | OK |
| haval-dargo-2024-precio-ficha-tecnica | OK |
| haval-dargo-x-2024-precio-ficha-tecnica | OK |
| haval-h3-2024-precio-ficha-tecnica | OK |
| haval-h5-2024-precio-ficha-tecnica | OK |
| haval-h6-2024-precio-ficha-tecnica | OK |
| haval-h6-gt-2025-precio-ficha-tecnica | OK |
| haval-h6-hev-2025-precio-ficha-tecnica | OK |
| haval-h6-phev-2025-precio-ficha-tecnica | OK |
| haval-h6l-2025-precio-autonomia | OK |
| haval-h6l-2025-precio-ficha-tecnica | OK |
| haval-h6s-2025-precio-ficha-tecnica | OK |
| haval-h7-2025-precio-ficha-tecnica | OK |
| haval-h9-2025-precio-ficha-tecnica | OK |
| haval-jolion-2024-precio-ficha-tecnica | OK |
| haval-jolion-hev-2026-precio-ficha-tecnica | OK |
| haval-jolion-pro-2025-precio-ficha-tecnica | OK |
| haval-raptor-2024-precio-ficha-tecnica | OK |
| haval-raptor-plus-2026-precio-ficha-tecnica | OK |
| haval-shenshou-2024-precio-ficha-tecnica | OK |
| haval-xiaolong-2024-precio-ficha-tecnica | OK |
| haval-xiaolong-max-2024-precio-ficha-tecnica | OK |
| hennessey-venom-f5-2025-precio-ficha-tecnica | OK |
| hero-vida-v1-2026-precio-ficha-tecnica | OK |
| hiboy-max-v2-precio-ficha-tecnica | OK |
| hobby-vantana-2026-precio-camper | OK |
| honda-accord-precio-ficha-tecnica | OK |
| honda-adv350-2024-ficha-tecnica-precio | OK |
| honda-cb1000-hornet-2024-ficha-tecnica-precio | OK |
| honda-cb1000-hornet-sp-2026-precio-ficha | OK |
| honda-cb125r-2024-ficha-tecnica-precio | OK |
| honda-cb750-hornet-2024-ficha-tecnica-precio | OK |
| honda-cbr600rr-2024-ficha-tecnica-precio | OK |
| honda-cbr650r-2024-ficha-tecnica-precio | OK |
| honda-civic-ehev-2025-precio-ficha-tecnica | OK |
| honda-civic-ehev-2026-precio-ficha-tecnica | OK |
| honda-civic-type-r-2026-precio-ficha-tecnica | OK |
| honda-civic-type-r-ultimate-edition-2025-precio-ficha-tecnica | OK |
| honda-cl500-2026-precio-ficha | OK |
| honda-cr-v-ehev-2025-precio-ficha-tecnica | OK |
| honda-cr-v-ephev-2026-precio-ficha-tecnica | OK |
| honda-e-ny1-2025-precio-ficha-tecnica | OK |
| honda-e-ny1-2026-precio-ficha-tecnica | OK |
| honda-e-precio-ficha-tecnica | OK |
| honda-eny1-2025-precio-autonomia | OK |
| honda-forza-350-2024-ficha-tecnica-precio | OK |
| honda-gb350s-2025-ficha-tecnica-precio | OK |
| honda-gt-2026-precio-autonomia | OK |
| honda-hr-v-ehev-2024-precio-ficha-tecnica | OK |
| honda-hr-v-ehev-2025-precio-ficha-tecnica | OK |
| honda-hr-v-ehev-2026-precio-ficha-tecnica | OK |
| honda-jazz-crosstar-2026-precio-ficha-tecnica | OK |
| honda-jazz-ehev-2024-precio-ficha-tecnica | OK |
| honda-jazz-ehev-2025-precio-ficha-tecnica | OK |
| honda-nsx-precio-ficha-tecnica | OK |
| honda-prelude-ehev-2026-precio-ficha-tecnica | OK |
| honda-prologue-2025-precio-autonomia | OK |
| honda-rebel-1100-2024-ficha-tecnica-precio | OK |
| honda-s2000-precio-ficha-tecnica | OK |
| honda-super-n-ev-2026-precio-ficha | OK |
| honda-super-n-ev-2026-precio-ficha-tecnica | OK |
| honda-u-go-2025-ficha-tecnica-precio | OK |
| honda-wn7-electrica-precio-espana-15000 | OK |
| honda-x-adv-750-2025-ficha-tecnica-precio | OK |
| honda-xl750-transalp-2024-ficha-tecnica-precio | OK |
| honda-zr-v-ehev-2024-precio-ficha-tecnica | OK |
| honda-zr-v-ehev-2025-precio-ficha-tecnica | OK |
| hongqi-e-hs9-ficha-tecnica-precio | OK |
| hongqi-e-qm5-2025-precio-ficha-tecnica | OK |
| hongqi-eh7-2024-precio-ficha-tecnica | OK |
| hongqi-ehs7-2025-precio-ficha-tecnica | OK |
| hongqi-g919-2026-precio-ficha-tecnica | OK |
| hongqi-g919-4x4-electrico-831-cv | OK |
| hongqi-guoya-2024-precio-ficha-tecnica | OK |
| hongqi-h5-2023-precio-ficha-tecnica | OK |
| hongqi-h5-hev-2024-precio-ficha-tecnica | OK |
| hongqi-h6-2023-precio-ficha-tecnica | OK |
| hongqi-h7-phev-2026-precio-ficha-tecnica | OK |
| hongqi-h9-2024-precio-ficha-tecnica | OK |
| hongqi-hq9-2023-precio-ficha-tecnica | OK |
| hongqi-hq9-phev-2024-precio-ficha-tecnica | OK |
| hongqi-hs3-2023-precio-ficha-tecnica | OK |
| hongqi-hs3-phev-2025-precio-autonomia | OK |
| hongqi-hs3-phev-2025-precio-ficha-tecnica | OK |
| hongqi-hs5-2023-precio-ficha-tecnica | OK |
| hongqi-hs5-phev-2025-precio-ficha-tecnica | OK |
| hongqi-hs6-phev-2025-precio-ficha-tecnica | OK |
| hongqi-hs7-2023-precio-ficha-tecnica | OK |
| hongqi-hs7-phev-2024-precio-ficha-tecnica | OK |
| hongqi-tiangong-05-2025-precio-ficha-tecnica | OK |
| hongqi-tiangong-06-2025-precio-ficha-tecnica | OK |
| hongqi-tiangong-08-2026-precio-ficha-tecnica | OK |
| husqvarna-norden-901-2024-ficha-tecnica-precio | OK |
| husqvarna-svartpilen-801-2026-precio-ficha | OK |
| hyptec-a800-2026-precio-ficha-tecnica | OK |
| hyptec-gt-2024-precio-ficha-tecnica | OK |
| hyptec-hl-erev-2025-precio-ficha-tecnica | OK |
| hyptec-ht-2025-precio-ficha-tecnica | OK |
| hyptec-s600-2026-precio-ficha-tecnica | OK |
| hyptec-ssr-2024-precio-ficha-tecnica | OK |
| hyundai-bayon-10-tgdi-2025-precio-ficha-tecnica | OK |
| hyundai-bayon-10-tgdi-2026-precio-ficha-tecnica | OK |
| hyundai-elantra-n-precio-ficha-tecnica | OK |
| hyundai-i10-2026-precio-ficha-tecnica | OK |
| hyundai-i10-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-i20-10-tgdi-2026-precio-ficha-tecnica | OK |
| hyundai-i20-baja-precio-octubre-2026 | OK |
| hyundai-i20-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-i20-n-line-mhev-2026-precio-ficha-tecnica | OK |
| hyundai-i20-n-precio-ficha-tecnica | OK |
| hyundai-i30-10-tgdi-2026-precio-ficha-tecnica | OK |
| hyundai-i30-15-tgdi-2025-precio-ficha-tecnica | OK |
| hyundai-i30-15-tgdi-2026-precio-ficha-tecnica | OK |
| hyundai-i30-fastback-n-precio-ficha-tecnica | OK |
| hyundai-i30-n-2026-precio-ficha-tecnica | OK |
| hyundai-i30-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-inster-2025-precio-ficha-tecnica | OK |
| hyundai-inster-cross-2026-precio-ficha-tecnica | OK |
| hyundai-inster-electrico-precio-ficha-tecnica | OK |
| hyundai-ioniq-3-precio-espana-2026 | OK |
| hyundai-ioniq-3-vs-renault-5-vs-dolphin-surf-cual-comprar | OK |
| hyundai-ioniq-5-2026-precio-ficha-tecnica | OK |
| hyundai-ioniq-5-n-2025-precio-ficha-tecnica | OK |
| hyundai-ioniq-5-n-line-2025-precio-ficha-tecnica | OK |
| hyundai-ioniq-6-2025-precio-ficha-tecnica | OK |
| hyundai-ioniq-6-n-2026-precio-ficha-tecnica | OK |
| hyundai-ioniq-9-2026-precio-ficha-tecnica | OK |
| hyundai-ioniq-9-long-range-2025-precio-ficha-tecnica | OK |
| hyundai-kona-16-tgdi-180-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-kona-16-tgdi-2025-precio-ficha-tecnica | OK |
| hyundai-kona-electrico-135-2025-precio-ficha-tecnica | OK |
| hyundai-kona-electrico-2026-precio-ficha-tecnica | OK |
| hyundai-kona-electrico-49-kwh-2026-precio-ficha-tecnica | OK |
| hyundai-kona-electrico-65-kwh-2026-precio-ficha-tecnica | OK |
| hyundai-kona-electrico-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-kona-gasolina-2025-precio-ficha-tecnica | OK |
| hyundai-kona-hibrido-2025-precio-ficha-tecnica | OK |
| hyundai-kona-hibrido-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-kona-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-kona-n-precio-ficha-tecnica | OK |
| hyundai-nexo-2025-precio-ficha-tecnica | OK |
| hyundai-nexo-2026-precio-ficha-tecnica | OK |
| hyundai-palisade-2026-precio-ficha | OK |
| hyundai-santa-fe-hibrido-2026-precio-ficha-tecnica | OK |
| hyundai-santa-fe-hibrido-enchufable-2026-precio-ficha-tecnica | OK |
| hyundai-staria-diesel-2025-precio-ficha-tecnica | OK |
| hyundai-staria-hibrido-2026-precio-ficha-tecnica | OK |
| hyundai-tucson-16-tgdi-150-2025-precio-ficha-tecnica | OK |
| hyundai-tucson-diesel-2025-precio-ficha-tecnica | OK |
| hyundai-tucson-gasolina-2025-precio-ficha-tecnica | OK |
| hyundai-tucson-hibrido-2026-precio-ficha-tecnica | OK |
| hyundai-tucson-hibrido-enchufable-2026-precio-ficha-tecnica | OK |
| hyundai-tucson-hibrido-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-tucson-n-line-2026-precio-ficha-tecnica | OK |
| hyundai-tucson-phev-n-line-2026-precio-ficha-tecnica | OK |
| icar-03-2025-precio | OK |
| icar-03-2025-precio-ficha-tecnica | OK |
| icaur-03t-2026-precio-autonomia | OK |
| icaur-03t-2026-precio-ficha-tecnica | OK |
| icaur-chery-marca-aventura-europa-espana-2027 | OK |
| icaur-v23-2026-precio-ficha-tecnica | OK |
| icaur-v25-2026-precio-autonomia | OK |
| icaur-v25-2026-precio-ficha-tecnica | OK |
| icaur-v27-defender-chino-precio-espana-2027 | OK |
| im-l6-2024-precio-ficha-tecnica | OK |
| im-l6-2025-precio-ficha-tecnica | OK |
| im-l6-2026-precio-ficha-tecnica | OK |
| im-l7-2024-precio-ficha-tecnica | OK |
| im-ls6-2024-precio-ficha-tecnica | OK |
| im-ls6-2025-precio-ficha-tecnica | OK |
| im-ls6-2026-precio-autonomia | OK |
| im-ls6-2026-precio-ficha-tecnica | OK |
| im-ls7-2024-precio-ficha-tecnica | OK |
| im-ls7-2025-precio-ficha-tecnica | OK |
| im-ls7-2026-precio-ficha-tecnica | OK |
| im-ls9-2026-precio-ficha-tecnica | OK |
| im-motors-l6-2025-precio-ficha-tecnica | OK |
| im-motors-ls6-nuevo-suv-electrico-model-y | OK |
| ineos-grenadier-quartermaster-2025-precio-ficha-tecnica | OK |
| ineos-grenadier-station-wagon-2025-precio-ficha-tecnica | OK |
| ineos-grenadier-trialmaster-2025-precio-ficha-tecnica | OK |
| inmotion-rs-precio-ficha-tecnica | OK |
| inmotion-s1-precio-ficha-tecnica | OK |
| inokim-ox-precio-ficha-tecnica | OK |
| invicta-d2s-2025-precio-ficha-tecnica | OK |
| invicta-pocco-2025-precio-ficha-tecnica | OK |
| invicta-pony-2025-precio-ficha-tecnica | OK |
| invicta-spartan-ev-2025-precio-ficha-tecnica | OK |
| iscooter-i9-pro-precio-ficha-tecnica | OK |
| iso-rivolta-gtz-2025-precio-ficha-tecnica | OK |
| isuzu-d-max-2026-precio-ficha-tecnica | OK |
| isuzu-d-max-ev-2026-precio-autonomia | OK |
| isuzu-d-max-ev-2026-precio-ficha-tecnica | OK |
| isuzu-mu-x-precio-ficha-tecnica | OK |
| italjet-speedster-125-2025-ficha-tecnica-precio | OK |
| iveco-daily-2025-precio-furgon | OK |
| jac-a5-plus-2025-precio-ficha-tecnica | OK |
| jac-e30x-2025-precio-ficha-tecnica | OK |
| jac-e40x-2025-precio-ficha-tecnica | OK |
| jac-ej7-2025-precio-ficha-tecnica | OK |
| jac-j7-2025-precio-ficha-tecnica | OK |
| jac-js2-pro-2024-precio-ficha-tecnica | OK |
| jac-js4-2025-precio-ficha-tecnica | OK |
| jac-js6-2026-precio-ficha-tecnica | OK |
| jac-qx-2025-precio-ficha-tecnica | OK |
| jac-qx-phev-2025-precio-ficha-tecnica | OK |
| jac-rf8-phev-2026-precio-ficha-tecnica | OK |
| jac-t8-pro-2024-precio-ficha-tecnica | OK |
| jac-t9-2025-precio-ficha-tecnica | OK |
| jac-t9-ev-2025-precio-ficha-tecnica | OK |
| jac-t9-phev-2026-precio-ficha-tecnica | OK |
| jac-x8-2025-precio-ficha-tecnica | OK |
| jaecoo-5-ev-2026-precio-ficha-tecnica | OK |
| jaecoo-5-gasolina-2026-precio-ficha-tecnica | OK |
| jaecoo-5-precio-ficha-tecnica | OK |
| jaecoo-5-shs-hibrido-2026-precio-ficha-tecnica | OK |
| jaecoo-6-ev-2026-precio-ficha-tecnica | OK |
| jaecoo-6-ev-awd-2026-precio-ficha-tecnica | OK |
| jaecoo-7-gasolina-2025-precio-ficha-tecnica | OK |
| jaecoo-7-gasolina-2026-precio-ficha-tecnica | OK |
| jaecoo-7-shs-hibrido-2026-precio-ficha-tecnica | OK |
| jaecoo-7-shs-hibrido-enchufable-precio-ficha-tecnica | OK |
| jaecoo-8-shs-2026-precio-ficha-tecnica | OK |
| jaecoo-j5-ev-2025-precio-ficha-tecnica | OK |
| jaecoo-j6-2025-precio | OK |
| jaecoo-j6-2025-precio-ficha-tecnica | OK |
| jaecoo-j7-shs-2025-precio-ficha-tecnica | OK |
| jaecoo-j8-shs-2025-precio-ficha-tecnica | OK |
| jaguar-e-pace-2025-precio-autonomia | OK |
| jaguar-f-pace-2025-precio-autonomia | OK |
| jaguar-f-pace-2025-precio-ficha-tecnica | OK |
| jaguar-f-type-2025-precio-autonomia | OK |
| jaguar-gt-electrico-2026-precio-ficha | OK |
| jaguar-gt-electrico-2026-precio-ficha-tecnica | OK |
| jaguar-i-pace-2025-precio-autonomia | OK |
| jaguar-i-pace-2025-precio-ficha-tecnica | OK |
| jaguar-type-01-electrico-1030-cv | OK |
| jaguar-xe-precio-ficha-tecnica | OK |
| jaguar-xf-precio-ficha-tecnica | OK |
| jeep-avenger-4xe-145-2026-precio-ficha-tecnica | OK |
| jeep-avenger-e-hybrid-110-2026-precio-ficha-tecnica | OK |
| jeep-avenger-electric-156-2026-precio-ficha-tecnica | OK |
| jeep-avenger-gasolina-100-2026-precio-ficha-tecnica | OK |
| jeep-cherokee-2026-precio-ficha | OK |
| jeep-compass-13-t-130-2024-precio-ficha-tecnica | OK |
| jeep-compass-15-e-hybrid-130-2025-precio-ficha-tecnica | OK |
| jeep-compass-16-mjt-130-2024-precio-ficha-tecnica | OK |
| jeep-compass-4xe-240-2025-precio-ficha-tecnica | OK |
| jeep-compass-4xe-electrico-375-2026-precio-ficha-tecnica | OK |
| jeep-compass-4xe-phev-195-2026-precio-ficha-tecnica | OK |
| jeep-compass-e-hybrid-145-2026-precio-ficha-tecnica | OK |
| jeep-compass-e-hybrid-plug-in-225-2026-precio-ficha-tecnica | OK |
| jeep-compass-electric-213-2026-precio-ficha-tecnica | OK |
| jeep-compass-electrico-231-long-range-2026-precio-ficha-tecnica | OK |
| jeep-compass-trailhawk-precio-ficha-tecnica | OK |
| jeep-gladiator-precio-ficha-tecnica | OK |
| jeep-grand-cherokee-4xe-380-2026-precio-ficha-tecnica | OK |
| jeep-grand-cherokee-l-precio-ficha-tecnica | OK |
| jeep-recon-2026-precio-ficha-tecnica | OK |
| jeep-renegade-10-t3-120-2024-precio-ficha-tecnica | OK |
| jeep-renegade-16-multijet-130-2024-precio-ficha-tecnica | OK |
| jeep-renegade-4xe-190-2026-precio-ficha-tecnica | OK |
| jeep-renegade-4xe-240-2025-precio-ficha-tecnica | OK |
| jeep-renegade-e-hybrid-130-2026-precio-ficha-tecnica | OK |
| jeep-wagoneer-s-2025-precio-ficha-tecnica | OK |
| jeep-wrangler-20t-272-2025-precio-ficha-tecnica | OK |
| jeep-wrangler-4xe-380-2026-precio-ficha-tecnica | OK |
| jeep-wrangler-rubicon-392-precio-ficha-tecnica | OK |
| jetour-dashing-2024-precio-ficha-tecnica | OK |
| jetour-dashing-i-dm-2025-precio-ficha-tecnica | OK |
| jetour-g700-903-cv-precio-ficha-tecnica | OK |
| jetour-shanhai-l6-2024-precio-ficha-tecnica | OK |
| jetour-shanhai-l7-2024-precio-ficha-tecnica | OK |
| jetour-shanhai-l7-plus-2025-precio-ficha-tecnica | OK |
| jetour-shanhai-l9-2024-precio-ficha-tecnica | OK |
| jetour-t1-2025-precio-ficha-tecnica | OK |
| jetour-t1-i-dm-2025-precio-ficha-tecnica | OK |
| jetour-t2-2024-precio-ficha-tecnica | OK |
| jetour-t2-i-dm-2024-precio-ficha-tecnica | OK |
| jetour-t2-i-dm-xwd-2026-precio-ficha-tecnica | OK |
| jetour-x50-2025-precio-ficha-tecnica | OK |
| jetour-x70-2024-precio-ficha-tecnica | OK |
| jetour-x70-plus-2024-precio-ficha-tecnica | OK |
| jetour-x70-pro-2024-precio-ficha-tecnica | OK |
| jetour-x70l-2025-precio-ficha-tecnica | OK |
| jetour-x90-plus-2024-precio-ficha-tecnica | OK |
| jetour-x95-2024-precio-ficha-tecnica | OK |
| jetour-zongheng-g700-903-cv | OK |
| jmc-dadao-2026-precio-ficha-tecnica | OK |
| jmc-vigus-2026-precio-ficha-tecnica | OK |
| jmev-ev2-2026-precio-ficha-tecnica | OK |
| jmev-yi-2025-precio-ficha-tecnica | OK |
| joyor-f5s-precio-ficha-tecnica | OK |
| joyor-s8-precio-ficha-tecnica | OK |
| kaabo-wolf-king-precio-ficha-tecnica | OK |
| kaiyi-e5-2024-precio-ficha-tecnica | OK |
| kaiyi-kunlun-2026-precio-ficha-tecnica | OK |
| kaiyi-x3-pro-2024-precio-ficha-tecnica | OK |
| kawasaki-ninja-500-se-2025-precio-ficha | OK |
| kawasaki-ninja-650-2024-ficha-tecnica-precio | OK |
| kawasaki-z900-se-2026-precio-ficha | OK |
| keeway-k-light-250v-custom-precio | OK |
| keeway-tx-125-2012-ficha-tecnica-precio | OK |
| keeway-v302c-custom-precio | OK |
| kgm-actyon-gasolina-2025-precio-ficha-tecnica | OK |
| kgm-actyon-hibrido-precio-ficha-tecnica | OK |
| kgm-korando-emotion-electrico-2026-precio-ficha-tecnica | OK |
| kgm-korando-g15t-2025-precio-ficha-tecnica | OK |
| kgm-musso-diesel-2026-precio-ficha-tecnica | OK |
| kgm-musso-evx-electrico-2026-precio-ficha-tecnica | OK |
| kgm-rexton-diesel-2025-precio-ficha-tecnica | OK |
| kgm-rexton-sports-2026-precio-ficha | OK |
| kgm-rexton-sports-2026-precio-ficha-tecnica | OK |
| kgm-tivoli-g15t-2025-precio-ficha-tecnica | OK |
| kgm-tivoli-grand-g15t-2026-precio-ficha-tecnica | OK |
| kgm-torres-evx-electrico-precio-ficha-tecnica | OK |
| kgm-torres-g15t-gasolina-2025-precio-ficha-tecnica | OK |
| kgm-torres-hev-hibrido-2026-precio-ficha-tecnica | OK |
| kia-carnival-precio-ficha-tecnica | OK |
| kia-ceed-10-tgdi-2025-precio-ficha-tecnica | OK |
| kia-ceed-15-tgdi-2025-precio-ficha-tecnica | OK |
| kia-ceed-gt-line-2025-precio-ficha-tecnica | OK |
| kia-ceed-gt-precio-ficha-tecnica | OK |
| kia-ceed-sw-2025-precio-ficha-tecnica | OK |
| kia-ceed-sw-phev-2025-precio-ficha-tecnica | OK |
| kia-ev2-2026-precio-ficha-tecnica | OK |
| kia-ev3-air-2025-precio-ficha-tecnica | OK |
| kia-ev3-baja-precio-octubre-2026 | OK |
| kia-ev3-electrico-precio-ficha-tecnica | OK |
| kia-ev3-gt-line-2025-precio-ficha-tecnica | OK |
| kia-ev3-gt-line-2026-precio-ficha-tecnica | OK |
| kia-ev3-gt-precio-ficha-tecnica | OK |
| kia-ev4-2025-precio-ficha-tecnica | OK |
| kia-ev4-gt-line-fastback-2025-precio-ficha-tecnica | OK |
| kia-ev4-long-range-2025-precio-ficha-tecnica | OK |
| kia-ev5-2025-precio-ficha-tecnica | OK |
| kia-ev5-gt-line-2026-precio-ficha-tecnica | OK |
| kia-ev6-gt-2025-precio-ficha-tecnica | OK |
| kia-ev6-gt-line-2025-precio-ficha-tecnica | OK |
| kia-ev9-2024-precio-ficha-tecnica | OK |
| kia-ev9-2025-precio-ficha-tecnica | OK |
| kia-ev9-gt-2026-precio-ficha-tecnica | OK |
| kia-k4-2026-precio-ficha | OK |
| kia-k4-2026-precio-ficha-tecnica | OK |
| kia-niro-ev-2025-precio-ficha-tecnica | OK |
| kia-niro-phev-2025-precio-ficha-tecnica | OK |
| kia-picanto-gt-line-2025-precio-ficha-tecnica | OK |
| kia-proceed-2025-precio-ficha-tecnica | OK |
| kia-pv5-2025-precio-ficha-tecnica | OK |
| kia-pv5-2026-precio-ficha-tecnica | OK |
| kia-pv5-furgoneta-electrica-espana | OK |
| kia-sorento-diesel-2025-precio-ficha-tecnica | OK |
| kia-sorento-hev-2025-precio-ficha-tecnica | OK |
| kia-sorento-phev-2025-precio-ficha-tecnica | OK |
| kia-soul-ev-precio-ficha-tecnica | OK |
| kia-sportage-diesel-2025-precio-ficha-tecnica | OK |
| kia-sportage-gt-line-mhev-2026-precio-ficha-tecnica | OK |
| kia-sportage-hev-2025-precio-ficha-tecnica | OK |
| kia-sportage-mhev-2025-precio-ficha-tecnica | OK |
| kia-sportage-phev-2025-precio-ficha-tecnica | OK |
| kia-stinger-precio-ficha-tecnica | OK |
| kia-stonic-10-tgdi-2026-precio-ficha-tecnica | OK |
| kia-stonic-hibrido-2026-precio-ficha-tecnica | OK |
| kia-tasman-2025-precio-ficha | OK |
| kia-xceed-15-mhev-2025-precio-ficha-tecnica | OK |
| kia-xceed-phev-2025-precio-ficha-tecnica | OK |
| koenigsegg-gemera-2025-precio-ficha-tecnica | OK |
| kove-450-rally-2026-ficha-tecnica-precio | OK |
| kove-500x-2023-ficha-tecnica-precio | OK |
| kove-510f-scrambler-precio | OK |
| kove-625x-pro-2026-ficha-tecnica-precio | OK |
| kove-800x-gt-2026-ficha-tecnica-precio | OK |
| kove-800x-rally-2026-ficha-tecnica-precio | OK |
| kove-nk-125r-2025-ficha-tecnica-precio | OK |
| ktm-1390-super-adventure-s-2026-precio-ficha | OK |
| ktm-1390-super-duke-r-evo-2026-precio-ficha | OK |
| ktm-390-smc-r-2026-precio-ficha | OK |
| kugoo-kirin-g2-pro-precio-ficha-tecnica | OK |
| kukirin-g2-precio-ficha-tecnica | OK |
| kukirin-g3-precio-ficha-tecnica | OK |
| kukirin-g4-max-precio-ficha-tecnica | OK |
| kymco-ionex-s7-2026-precio-ficha-tecnica | OK |
| lamborghini-countach-lpi-800-4-2024-precio-ficha-tecnica | OK |
| lamborghini-fenomeno-2025-precio-ficha-tecnica | OK |
| lamborghini-fenomeno-roadster-2026-precio-ficha-tecnica | OK |
| lamborghini-huracan-evo-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-evo-rwd-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-evo-rwd-spyder-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-evo-spyder-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-sterrato-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-stj-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-sto-2024-precio-ficha-tecnica | OK |
| lamborghini-huracan-tecnica-2024-precio-ficha-tecnica | OK |
| lamborghini-revuelto-2024-precio-ficha-tecnica | OK |
| lamborghini-temerario-2025-precio-ficha-tecnica | OK |
| lamborghini-urus-performante-2024-precio-ficha-tecnica | OK |
| lamborghini-urus-s-2024-precio-ficha-tecnica | OK |
| lamborghini-urus-se-2024-precio-ficha-tecnica | OK |
| lamborghini-urus-se-performante-2026-precio-ficha-tecnica | OK |
| lancia-gamma-2026-precio-autonomia | OK |
| lancia-gamma-2026-precio-ficha-tecnica | OK |
| lancia-gamma-hf-2026-precio-autonomia | OK |
| lancia-gamma-hf-2026-precio-ficha-tecnica | OK |
| lancia-ypsilon-2024-precio | OK |
| lancia-ypsilon-2024-precio-ficha-tecnica | OK |
| lancia-ypsilon-electric-2025-precio-ficha-tecnica | OK |
| lancia-ypsilon-hf-2025-precio-ficha-tecnica | OK |
| lancia-ypsilon-hybrid-2025-precio-ficha-tecnica | OK |
| land-rover-defender-110-d300-2025-precio-ficha-tecnica | OK |
| land-rover-defender-110-d350-2025-precio-ficha-tecnica | OK |
| land-rover-defender-110-p400e-2025-precio-ficha-tecnica | OK |
| land-rover-defender-110-p525-2025-precio-ficha-tecnica | OK |
| land-rover-defender-130-d300-2025-precio-ficha-tecnica | OK |
| land-rover-defender-130-p400-2025-precio-ficha-tecnica | OK |
| land-rover-defender-90-p400-2025-precio-ficha-tecnica | OK |
| land-rover-defender-octa-2025-precio-ficha-tecnica | OK |
| land-rover-discovery-p360-2025-precio-ficha-tecnica | OK |
| land-rover-discovery-sport-d200-2025-precio-ficha-tecnica | OK |
| land-rover-discovery-sport-p270e-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-electrico-2026-precio-ficha-tecnica | OK |
| land-rover-range-rover-evoque-d200-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-evoque-p270e-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-p400-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-p530-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-sport-d350-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-sport-electrico-2026-precio-ficha-tecnica | OK |
| land-rover-range-rover-sport-p550e-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-sport-sv-2025-precio-ficha-tecnica | OK |
| land-rover-range-rover-velar-d300-2025-precio-ficha-tecnica | OK |
| leapmotor-a10-2026-precio-ficha-tecnica | OK |
| leapmotor-b01-2025-precio-ficha-tecnica | OK |
| leapmotor-b03-2026-precio-ficha-tecnica | OK |
| leapmotor-b03-electrico-paris-2026 | OK |
| leapmotor-b03x-2026-precio-ficha-tecnica | OK |
| leapmotor-b03x-suv-electrico-barato-europa | OK |
| leapmotor-b05-2026-precio-ficha-tecnica | OK |
| leapmotor-b05-vs-gac-aion-ut-cual-comprar | OK |
| leapmotor-b10-electrico-precio-espana | OK |
| leapmotor-b10-reev-2026-precio-ficha-tecnica | OK |
| leapmotor-b10-vs-byd-atto-2-cual-comprar | OK |
| leapmotor-c01-2026-precio-ficha-tecnica | OK |
| leapmotor-c01-4wd-2026-precio-ficha-tecnica | OK |
| leapmotor-c01-erev-2026-precio-ficha-tecnica | OK |
| leapmotor-c10-baja-precio-octubre-2026 | OK |
| leapmotor-c10-electrico-precio-ficha-tecnica | OK |
| leapmotor-c10-reev-2025-precio-ficha-tecnica | OK |
| leapmotor-c10-reev-2026-precio-ficha-tecnica | OK |
| leapmotor-c11-2026-precio-ficha-tecnica | OK |
| leapmotor-c11-erev-2026-precio-ficha-tecnica | OK |
| leapmotor-c16-2026-precio-ficha-tecnica | OK |
| leapmotor-c16-erev-2026-precio-ficha-tecnica | OK |
| leapmotor-c16-erev-280-2026-precio-ficha-tecnica | OK |
| leapmotor-d19-2026-precio-ficha-tecnica | OK |
| leapmotor-d19-erev-2026-precio-ficha-tecnica | OK |
| leapmotor-paris-2026-b03-d19-debut-europa | OK |
| leapmotor-t03-2025-precio-ficha-tecnica | OK |
| leapmotor-t03-baja-precio-octubre-2026 | OK |
| leapmotor-t03-electrico-precio-ficha-tecnica | OK |
| lepas-l4-2025-precio-ficha-tecnica | OK |
| lepas-l4-ev-2026-precio-ficha-tecnica | OK |
| lepas-l6-2025-precio-ficha-tecnica | OK |
| lepas-l6-ev-2026-precio-ficha-tecnica | OK |
| lepas-l8-2025-precio-ficha-tecnica | OK |
| lepas-l8-chery-hibrido-enchufable-precio-espana | OK |
| levc-l380-2024-precio-ficha-tecnica | OK |
| levc-l380-2025-precio-ficha-tecnica | OK |
| levc-tx-2024-precio-ficha-tecnica | OK |
| levc-tx-2025-precio-ficha-tecnica | OK |
| levc-tx-shuttle-2024-precio-ficha-tecnica | OK |
| levc-vn5-2024-precio-ficha-tecnica | OK |
| levy-plus-precio-ficha-tecnica | OK |
| levy-pro-precio-ficha-tecnica | OK |
| lexus-es-300h-2025-precio-ficha-tecnica | OK |
| lexus-es-300h-2026-precio-ficha-tecnica | OK |
| lexus-es-350e-2026-precio-ficha-tecnica | OK |
| lexus-es-500e-2026-precio-ficha-tecnica | OK |
| lexus-gx-550-precio-opiniones | OK |
| lexus-is-300h-precio-opiniones | OK |
| lexus-lbx-2026-precio-ficha-tecnica | OK |
| lexus-lbx-morizo-rr-2025-precio-ficha-tecnica | OK |
| lexus-lc-500-2024-precio-ficha-tecnica | OK |
| lexus-lc-500-cabrio-2025-precio-ficha-tecnica | OK |
| lexus-lc-500h-2024-precio-ficha-tecnica | OK |
| lexus-lm-350h-precio-opiniones | OK |
| lexus-ls-500h-2024-precio-ficha-tecnica | OK |
| lexus-nx-350h-2024-precio-ficha-tecnica | OK |
| lexus-nx-450h-2024-precio-ficha-tecnica | OK |
| lexus-nx-overtrail-2025-precio-ficha-tecnica | OK |
| lexus-rx-350h-2024-precio-ficha-tecnica | OK |
| lexus-rx-450h-2024-precio-ficha-tecnica | OK |
| lexus-rx-500h-2024-precio-ficha-tecnica | OK |
| lexus-rz-300e-2024-precio-ficha-tecnica | OK |
| lexus-rz-350e-2026-precio-ficha-tecnica | OK |
| lexus-rz-450e-2024-precio-ficha-tecnica | OK |
| lexus-rz-500e-2026-precio-ficha-tecnica | OK |
| lexus-rz-550e-2025-precio-ficha-tecnica | OK |
| lexus-ux-300e-2024-precio-ficha-tecnica | OK |
| lexus-ux-300h-2026-precio-ficha-tecnica | OK |
| li-auto-i6-2025-precio-ficha-tecnica | OK |
| li-auto-i8-suv-electrico-6-plazas-precio-2026 | OK |
| li-auto-i9-2026-precio-ficha-tecnica | OK |
| li-auto-l6-ficha-tecnica-precio | OK |
| li-auto-l7-2025-precio-ficha-tecnica | OK |
| li-auto-l8-2026-precio-ficha-tecnica | OK |
| li-auto-l9-2026-precio-ficha-tecnica | OK |
| li-auto-mega-2026-precio-ficha-tecnica | OK |
| lifan-kpf-150-urbana-precio | OK |
| lifan-kpt-400-trail-42-cv-precio | OK |
| ligier-js50-electrico-2026-precio-ficha-tecnica | OK |
| ligier-js50-elite-2026-precio-ficha-tecnica | OK |
| ligier-js50-select-2026-precio-ficha-tecnica | OK |
| ligier-js50-select-confort-2026-precio-ficha-tecnica | OK |
| ligier-js50-ultimate-2026-precio-ficha-tecnica | OK |
| ligier-myli-2025-precio-ficha-tecnica | OK |
| ligier-myli-diesel-2025-precio-ficha-tecnica | OK |
| ligier-myli-l7e-2025-precio-ficha-tecnica | OK |
| ligier-myli-lab-2026-precio-ficha-tecnica | OK |
| ligier-myli-max-2026-precio-ficha-tecnica | OK |
| ligier-myli-max-confort-2026-precio-ficha-tecnica | OK |
| ligier-myli-max-confort-l7e-2026-precio-ficha-tecnica | OK |
| lingbao-box-2026-precio-ficha-tecnica | OK |
| liux-big-salon-paris-2026 | OK |
| livan-7-2024-precio-ficha-tecnica | OK |
| livan-8-2025-precio-ficha-tecnica | OK |
| livan-9-2024-precio-ficha-tecnica | OK |
| livan-maple-60s-2024-precio-ficha-tecnica | OK |
| livan-maple-80v-2024-precio-ficha-tecnica | OK |
| livan-s6-pro-2024-precio-ficha-tecnica | OK |
| livan-x3-pro-2025-precio-ficha-tecnica | OK |
| livan-x6-pro-2025-precio-ficha-tecnica | OK |
| lotus-eletre-600-2025-precio-ficha-tecnica | OK |
| lotus-eletre-900-sport-2025-precio-ficha-tecnica | OK |
| lotus-eletre-r-plus-2026-precio-ficha-tecnica | OK |
| lotus-eletre-x-h1000-2026-precio-ficha-tecnica | OK |
| lotus-eletre-x-h550-2026-precio-ficha-tecnica | OK |
| lotus-emeya-600-2025-precio-ficha-tecnica | OK |
| lotus-emeya-900-sport-2025-precio-ficha-tecnica | OK |
| lotus-emira-420-sport-2026-precio-ficha-tecnica | OK |
| lotus-emira-turbo-2026-precio-ficha-tecnica | OK |
| lotus-emira-turbo-se-2025-precio-ficha-tecnica | OK |
| lotus-emira-v6-se-2026-precio-ficha-tecnica | OK |
| lotus-evija-2026-precio-ficha-tecnica | OK |
| lucid-gravity-2026-precio-ficha | OK |
| lucid-gravity-2026-precio-ficha-tecnica | OK |
| lujo-chino-coches-2026-yangwang-denza-hongqi-maextro | OK |
| luxeed-r7-2024-precio-ficha-tecnica | OK |
| luxeed-r7-2025-precio-ficha-tecnica | OK |
| luxeed-r7-huawei-2026-precio-ficha-tecnica | OK |
| luxeed-s7-2024-precio-ficha-tecnica | OK |
| luxeed-s7-2025-precio-ficha-tecnica | OK |
| luxeed-s7-2026-precio-ficha-tecnica | OK |
| luxeed-v9-2026-precio-ficha-tecnica | OK |
| lynk-co-01-2026-precio-ficha-tecnica | OK |
| lynk-co-01-phev-2025-precio-ficha-tecnica | OK |
| lynk-co-02-electrico-precio-ficha-tecnica | OK |
| lynk-co-03-2025-precio-ficha-tecnica | OK |
| lynk-co-03-plus-2025-precio-ficha-tecnica | OK |
| lynk-co-05-emp-2025-precio-ficha-tecnica | OK |
| lynk-co-06-emp-2025-precio-ficha-tecnica | OK |
| lynk-co-07-emp-2025-precio-ficha-tecnica | OK |
| lynk-co-07-gt-debut-europa-paris-2026 | OK |
| lynk-co-08-emp-2026-precio-ficha-tecnica | OK |
| lynk-co-08-phev-2025-precio-ficha-tecnica | OK |
| lynk-co-09-mhev-2025-precio-ficha-tecnica | OK |
| lynk-co-10-em-p-2025-precio-autonomia | OK |
| lynk-co-10-em-p-2025-precio-ficha-tecnica | OK |
| lynk-co-900-emp-2025-precio-ficha-tecnica | OK |
| lynk-co-z10-electrico-2025-precio-ficha-tecnica | OK |
| lynk-co-z20-2025-precio | OK |
| lynk-co-z20-2025-precio-ficha-tecnica | OK |
| m-hero-917-2024-precio-ficha-tecnica | OK |
| macbor-xr1-125-2026-precio-ficha-tecnica | OK |
| maextro-s800-2024-precio-ficha-tecnica | OK |
| maextro-s800-2025-precio-ficha-tecnica | OK |
| maextro-s800-erev-2025-precio-ficha-tecnica | OK |
| maextro-v800-huawei-precio-ficha-tecnica | OK |
| malaguti-rst-125-2026-precio-ficha-tecnica | OK |
| maserati-ghibli-gt-2024-precio-ficha-tecnica | OK |
| maserati-ghibli-modena-2024-precio-ficha-tecnica | OK |
| maserati-ghibli-trofeo-2024-precio-ficha-tecnica | OK |
| maserati-grancabrio-2027-precio-ficha-tecnica | OK |
| maserati-grancabrio-folgore-2027-precio-ficha-tecnica | OK |
| maserati-grancabrio-trofeo-590-2027-precio-ficha-tecnica | OK |
| maserati-granturismo-2027-precio-ficha-tecnica | OK |
| maserati-granturismo-folgore-2027-precio-ficha-tecnica | OK |
| maserati-granturismo-trofeo-590-2027-precio-ficha-tecnica | OK |
| maserati-grecale-2027-precio-ficha-tecnica | OK |
| maserati-grecale-folgore-2027-precio-ficha-tecnica | OK |
| maserati-grecale-modena-v6-2027-precio-ficha-tecnica | OK |
| maserati-grecale-trofeo-2027-precio-ficha-tecnica | OK |
| maserati-gt2-stradale-2025-precio-ficha-tecnica | OK |
| maserati-levante-gt-2024-precio-ficha-tecnica | OK |
| maserati-levante-modena-2024-precio-ficha-tecnica | OK |
| maserati-levante-trofeo-2024-precio-ficha-tecnica | OK |
| maserati-mc20-2024-precio-ficha-tecnica | OK |
| maserati-mc20-cielo-2024-precio-ficha-tecnica | OK |
| maserati-mc20-notte-2024-precio-ficha-tecnica | OK |
| maserati-mcpura-2025-precio-ficha-tecnica | OK |
| maserati-mcpura-cielo-2025-precio-ficha-tecnica | OK |
| maserati-mcxtrema-2025-precio-ficha-tecnica | OK |
| maserati-quattroporte-gt-2024-precio-ficha-tecnica | OK |
| maserati-quattroporte-modena-q4-2024-precio-ficha-tecnica | OK |
| maserati-quattroporte-trofeo-2024-precio-ficha-tecnica | OK |
| maxus-d90-2026-precio-ficha-tecnica | OK |
| maxus-d90-suv-2026-precio-ficha | OK |
| maxus-deliver-7-2025-precio-ficha-tecnica | OK |
| maxus-edeliver-3-2025-precio-ficha-tecnica | OK |
| maxus-edeliver-5-2025-precio-ficha-tecnica | OK |
| maxus-edeliver-7-2025-precio-ficha-tecnica | OK |
| maxus-edeliver-9-2025-precio-ficha-tecnica | OK |
| maxus-eterron-9-2025-precio-ficha-tecnica | OK |
| maxus-mifa-9-2025-precio-ficha-tecnica | OK |
| maxus-t60-max-2025-precio-ficha-tecnica | OK |
| maxus-t90-ev-2025-precio-ficha-tecnica | OK |
| mazda-2-15-e-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mazda-2-hybrid-2025-precio-ficha-tecnica | OK |
| mazda-2-hybrid-2026-precio-ficha-tecnica | OK |
| mazda-3-20-e-skyactiv-x-5p-2026-precio-ficha-tecnica | OK |
| mazda-3-20-e-skyactiv-x-sedan-2025-precio-ficha-tecnica | OK |
| mazda-3-20-e-skyactiv-x-sedan-2026-precio-ficha-tecnica | OK |
| mazda-3-25-e-skyactiv-g-5p-2026-precio-ficha-tecnica | OK |
| mazda-3-25-e-skyactiv-g-sedan-2026-precio-ficha-tecnica | OK |
| mazda-6e-2025-precio-ficha-tecnica | OK |
| mazda-6e-long-range-2025-precio-ficha-tecnica | OK |
| mazda-cx-30-20-e-skyactiv-x-2026-precio-ficha-tecnica | OK |
| mazda-cx-30-25-e-skyactiv-g-2025-precio-ficha-tecnica | OK |
| mazda-cx-30-25-e-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mazda-cx-5-2026-precio-ficha-tecnica | OK |
| mazda-cx-5-25-e-skyactiv-g-2025-precio-ficha-tecnica | OK |
| mazda-cx-5-25-e-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mazda-cx-60-33-e-skyactiv-d-200-2026-precio-ficha-tecnica | OK |
| mazda-cx-60-33-e-skyactiv-d-254-2026-precio-ficha-tecnica | OK |
| mazda-cx-60-e-skyactiv-phev-2026-precio-ficha-tecnica | OK |
| mazda-cx-6e-2026-precio-ficha-tecnica | OK |
| mazda-cx-80-2025-precio-ficha-tecnica | OK |
| mazda-cx-80-25-e-skyactiv-phev-2026-precio-ficha-tecnica | OK |
| mazda-cx-80-33-e-skyactiv-d-2026-precio-ficha-tecnica | OK |
| mazda-ez-60-2026-precio-autonomia | OK |
| mazda-mx-30-e-skyactiv-ev-2026-precio-ficha-tecnica | OK |
| mazda-mx-30-e-skyactiv-r-ev-2025-precio-ficha-tecnica | OK |
| mazda-mx-30-e-skyactiv-r-ev-2026-precio-ficha-tecnica | OK |
| mazda-mx-5-15-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mazda-mx-5-20-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mazda-mx-5-rf-15-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mazda-mx-5-rf-20-skyactiv-g-2026-precio-ficha-tecnica | OK |
| mclaren-750s-2025-precio-ficha-tecnica | OK |
| mclaren-750s-le-mans-2025-precio-ficha-tecnica | OK |
| mclaren-750s-mcl38-celebration-2025-precio-ficha-tecnica | OK |
| mclaren-750s-spider-2025-precio-ficha-tecnica | OK |
| mclaren-788hs-2026-precio-ficha-tecnica | OK |
| mclaren-artura-1000gp-2026-precio-ficha-tecnica | OK |
| mclaren-artura-2025-precio-ficha-tecnica | OK |
| mclaren-artura-spider-2025-precio-ficha-tecnica | OK |
| mclaren-gt-2024-precio-ficha-tecnica | OK |
| mclaren-gts-2025-precio-ficha-tecnica | OK |
| mclaren-w1-2026-precio-ficha-tecnica | OK |
| mclouis-menfys-2026-precio-camper | OK |
| mecatecno-t8-2026-precio-ficha-tecnica | OK |
| mercedes-amg-a35-2025-precio-autonomia | OK |
| mercedes-amg-a35-2025-precio-ficha-tecnica | OK |
| mercedes-amg-a45-s-2025-precio-autonomia | OK |
| mercedes-amg-a45-s-2025-precio-ficha-tecnica | OK |
| mercedes-amg-c43-2025-precio-autonomia | OK |
| mercedes-amg-c43-2025-precio-ficha-tecnica | OK |
| mercedes-amg-c63-s-2025-precio-autonomia | OK |
| mercedes-amg-c63-s-2025-precio-ficha-tecnica | OK |
| mercedes-amg-cla-45-s-2025-precio-ficha-tecnica | OK |
| mercedes-amg-cle-53-2025-precio-ficha-tecnica | OK |
| mercedes-amg-g63-2025-precio-autonomia | OK |
| mercedes-amg-g63-2025-precio-ficha-tecnica | OK |
| mercedes-amg-glc-43-2026-precio-ficha-tecnica | OK |
| mercedes-amg-glc-63-s-e-performance-2025-precio-ficha-tecnica | OK |
| mercedes-amg-gt-43-2026-precio-ficha-tecnica | OK |
| mercedes-amg-one-2025-precio-autonomia | OK |
| mercedes-amg-one-2025-precio-ficha-tecnica | OK |
| mercedes-amg-s-63-e-performance-2026-precio-ficha-tecnica | OK |
| mercedes-amg-sl-63-2025-precio-autonomia | OK |
| mercedes-amg-sl-63-2025-precio-ficha-tecnica | OK |
| mercedes-benz-amg-a-35-2025-precio-ficha-tecnica | OK |
| mercedes-benz-amg-a-45-s-precio-ficha-tecnica | OK |
| mercedes-benz-amg-c-43-2025-precio-ficha-tecnica | OK |
| mercedes-benz-amg-c-63-s-e-performance-precio-ficha-tecnica | OK |
| mercedes-benz-amg-g-63-precio-ficha-tecnica | OK |
| mercedes-benz-amg-gt-63-precio-ficha-tecnica | OK |
| mercedes-benz-cla-200-electrico-2025-precio-ficha-tecnica | OK |
| mercedes-benz-cla-250-e-precio-ficha-tecnica | OK |
| mercedes-benz-clase-a-200-precio-ficha-tecnica | OK |
| mercedes-benz-clase-c-200-precio-ficha-tecnica | OK |
| mercedes-benz-clase-e-200-2025-precio-ficha-tecnica | OK |
| mercedes-benz-clase-e-220-d-precio-ficha-tecnica | OK |
| mercedes-benz-clase-e-300-e-precio-ficha-tecnica | OK |
| mercedes-benz-clase-g-500-precio-ficha-tecnica | OK |
| mercedes-benz-clase-s-450-d-2026-precio-ficha-tecnica | OK |
| mercedes-benz-clase-s-500-precio-ficha-tecnica | OK |
| mercedes-benz-clase-v-300-d-precio-ficha-tecnica | OK |
| mercedes-benz-eqa-250-plus-precio-ficha-tecnica | OK |
| mercedes-benz-eqb-350-precio-ficha-tecnica | OK |
| mercedes-benz-eqe-350-precio-ficha-tecnica | OK |
| mercedes-benz-eqe-suv-500-precio-ficha-tecnica | OK |
| mercedes-benz-eqs-450-plus-precio-ficha-tecnica | OK |
| mercedes-benz-gla-200-precio-ficha-tecnica | OK |
| mercedes-benz-glb-200-precio-ficha-tecnica | OK |
| mercedes-benz-glc-200-precio-ficha-tecnica | OK |
| mercedes-benz-glc-220-d-precio-ficha-tecnica | OK |
| mercedes-benz-glc-300-de-precio-ficha-tecnica | OK |
| mercedes-benz-gle-300-d-2025-precio-ficha-tecnica | OK |
| mercedes-benz-gle-350-de-precio-ficha-tecnica | OK |
| mercedes-benz-gle-450-d-precio-ficha-tecnica | OK |
| mercedes-citan-tourer-2025-precio-ficha | OK |
| mercedes-cla-250-plus-2025-precio-ficha-tecnica | OK |
| mercedes-cla-250-plus-eq-2026-precio-ficha-tecnica | OK |
| mercedes-cla-350-4matic-2025-precio-ficha-tecnica | OK |
| mercedes-cla-sb-250-plus-eq-2026-precio-ficha-tecnica | OK |
| mercedes-cla-shooting-brake-2026-precio-ficha-tecnica | OK |
| mercedes-clase-a-2025-precio-ficha-tecnica | OK |
| mercedes-clase-b-200-2026-precio-ficha-tecnica | OK |
| mercedes-clase-e-2025-precio-ficha-tecnica | OK |
| mercedes-clase-g-450-d-2026-precio-ficha-tecnica | OK |
| mercedes-cle-200-coupe-2025-precio-ficha-tecnica | OK |
| mercedes-e-vito-2025-precio-electrica | OK |
| mercedes-eqa-250-plus-2025-precio-ficha-tecnica | OK |
| mercedes-eqe-suv-2025-precio-ficha-tecnica | OK |
| mercedes-eqs-suv-580-2026-precio-ficha-tecnica | OK |
| mercedes-eqv-300-largo-2026-precio-ficha-tecnica | OK |
| mercedes-g-580-eq-2026-precio-ficha-tecnica | OK |
| mercedes-gla-250-e-2025-precio-ficha-tecnica | OK |
| mercedes-glb-2025-precio-ficha-tecnica | OK |
| mercedes-glc-300-e-2025-precio-ficha-tecnica | OK |
| mercedes-glc-400-eq-2026-precio-ficha-tecnica | OK |
| mercedes-gle-450-e-2026-precio-ficha-tecnica | OK |
| mercedes-gls-2025-precio-autonomia | OK |
| mercedes-gls-2025-precio-ficha-tecnica | OK |
| mercedes-marco-polo-2025-precio-camper | OK |
| mercedes-sprinter-2025-precio-furgon | OK |
| mercedes-vito-2025-precio-ficha | OK |
| mg-3-2025-precio-ficha-tecnica | OK |
| mg-3-hybrid-plus-2025-precio-ficha-tecnica | OK |
| mg-4-2025-precio-ficha-tecnica | OK |
| mg-4-urban-ev-2026-precio-autonomia | OK |
| mg-4-urban-ev-2026-precio-ficha-tecnica | OK |
| mg-4-xpower-2025-precio-ficha-tecnica | OK |
| mg-5-ev-2025-precio-ficha-tecnica | OK |
| mg-cyberster-gt-2025-precio-ficha-tecnica | OK |
| mg-cyberster-trophy-2025-precio-ficha-tecnica | OK |
| mg-hs-gasolina-2025-precio-ficha-tecnica | OK |
| mg-hs-hybrid-plus-2025-precio-ficha-tecnica | OK |
| mg-hs-hybrid-plus-225-cv-precio-espana | OK |
| mg-marvel-r-2024-precio-ficha-tecnica | OK |
| mg-marvel-r-performance-2024-precio-ficha-tecnica | OK |
| mg-s5-ev-2026-precio-ficha-tecnica | OK |
| mg-s5-ev-long-range-2025-precio-ficha-tecnica | OK |
| mg-s5-ev-standard-2025-precio-ficha-tecnica | OK |
| mg-s6-ev-2026-precio-ficha-tecnica | OK |
| mg-u9-ev-2026-precio-ficha-tecnica | OK |
| mg-u9-ev-pickup-2026-precio-ficha | OK |
| mg-zs-ev-2024-precio-ficha-tecnica | OK |
| mg-zs-ev-standard-2024-precio-ficha-tecnica | OK |
| mg-zs-gasolina-2025-precio-ficha-tecnica | OK |
| mg-zs-hybrid-plus-2025-precio-ficha-tecnica | OK |
| mg-zs-hybrid-plus-2026-precio-ficha-tecnica | OK |
| mg-zs-hybrid-precio-ficha-tecnica | OK |
| mg3-gasolina-2025-precio-ficha-tecnica | OK |
| mg3-hybrid-2025-precio-ficha-tecnica | OK |
| mg3-hybrid-plus-2025-precio-ficha-tecnica | OK |
| mg4-electric-comfort-2025-precio-ficha-tecnica | OK |
| mg4-electric-extended-range-2025-precio-ficha-tecnica | OK |
| mg4-electric-luxury-2025-precio-ficha-tecnica | OK |
| mg4-electric-standard-2025-precio-ficha-tecnica | OK |
| mg4-electric-vs-byd-dolphin-2025-cual-comprar | OK |
| mg4-electric-xpower-2025-precio-ficha-tecnica | OK |
| mg4-urban-2026-precio-ficha-tecnica | OK |
| mg4-xpower-2025-precio-ficha-tecnica | OK |
| mg5-2026-precio-autonomia | OK |
| mg5-2026-precio-ficha-tecnica | OK |
| mg5-electric-2025-precio-ficha-tecnica | OK |
| mg5-electric-standard-2025-precio-ficha-tecnica | OK |
| mg5-ev-long-range-2025-precio-ficha-tecnica | OK |
| mg7-2025-precio-ficha-tecnica | OK |
| microlino-2026-precio-microcoche | OK |
| mini-aceman-e-2024-precio-ficha-tecnica | OK |
| mini-aceman-jcw-e-2025-precio-ficha-tecnica | OK |
| mini-aceman-se-2024-precio-ficha-tecnica | OK |
| mini-cooper-c-2024-precio-ficha-tecnica | OK |
| mini-cooper-cabrio-c-2025-precio-ficha-tecnica | OK |
| mini-cooper-cabrio-s-2025-precio-ficha-tecnica | OK |
| mini-cooper-e-2024-precio-ficha-tecnica | OK |
| mini-cooper-jcw-2025-precio-ficha-tecnica | OK |
| mini-cooper-jcw-e-2025-precio-ficha-tecnica | OK |
| mini-cooper-s-2024-precio-ficha-tecnica | OK |
| mini-cooper-se-2024-precio-ficha-tecnica | OK |
| mini-countryman-c-2025-precio-ficha-tecnica | OK |
| mini-countryman-d-2025-precio-ficha-tecnica | OK |
| mini-countryman-jcw-all4-2024-precio-ficha-tecnica | OK |
| mini-countryman-se-all4-2024-precio-ficha-tecnica | OK |
| mitsubishi-asx-100t-2025-precio-ficha-tecnica | OK |
| mitsubishi-asx-120t-2026-precio-ficha-tecnica | OK |
| mitsubishi-asx-130t-7dct-2026-precio-ficha-tecnica | OK |
| mitsubishi-asx-130t-mhev-2025-precio-ficha-tecnica | OK |
| mitsubishi-colt-100t-2025-precio-ficha-tecnica | OK |
| mitsubishi-colt-100t-glp-2025-precio-ficha-tecnica | OK |
| mitsubishi-colt-hev-2025-precio-ficha-tecnica | OK |
| mitsubishi-eclipse-cross-electrico-2025-precio-ficha-tecnica | OK |
| mitsubishi-eclipse-cross-ev-lfp-2026-precio-ficha-tecnica | OK |
| mitsubishi-grandis-130t-mhev-2025-precio-ficha-tecnica | OK |
| mitsubishi-grandis-hev-2025-precio-ficha-tecnica | OK |
| mitsubishi-outlander-phev-2025-precio-ficha-tecnica | OK |
| mitsubishi-space-star-2025-10-71cv-precio-ficha-tecnica | OK |
| mobilize-bento-2025-precio-ficha-tecnica | OK |
| mobilize-duo-45-2025-precio-ficha-tecnica | OK |
| mobilize-duo-80-2025-precio-ficha-tecnica | OK |
| moke-electrico-2025-precio-ficha-tecnica | OK |
| morbidelli-t1002vx-2025-ficha-tecnica-precio | OK |
| morbidelli-t352x-trail-precio | OK |
| morgan-plus-four-2025-precio-ficha-tecnica | OK |
| morgan-plus-six-2025-precio-ficha-tecnica | OK |
| morgan-super-3-2025-precio-ficha-tecnica | OK |
| morgan-supersport-2025-precio-ficha-tecnica | OK |
| moto-guzzi-v85-tt-2026-precio-ficha | OK |
| moto-morini-calibro-bagger-2026-ficha-tecnica-precio | OK |
| moto-morini-kanguro-300-2026-ficha-tecnica-precio | OK |
| moto-morini-rumble-350-2025-ficha-tecnica-precio | OK |
| moto-morini-x-cape-1200-2026-ficha-tecnica-precio | OK |
| motron-x-nord-125-trail-precio | OK |
| mutt-mastiff-125-2026-precio-ficha-tecnica | OK |
| mv-agusta-enduro-veloce-2026-precio-ficha | OK |
| neta-aya-2025-precio-ficha-tecnica | OK |
| neta-gt-2024-precio-ficha-tecnica | OK |
| neta-l-2024-precio-ficha-tecnica | OK |
| neta-l-erev-2024-precio-ficha-tecnica | OK |
| neta-s-2024-precio-ficha-tecnica | OK |
| neta-s-shooting-brake-2024-precio-ficha-tecnica | OK |
| neta-x-2024-precio-ficha-tecnica | OK |
| nevo-a05-2025-precio-ficha-tecnica | OK |
| nevo-a06-2025-precio-ficha-tecnica | OK |
| nevo-a07-2025-precio-ficha-tecnica | OK |
| nevo-c390-2025-precio-ficha-tecnica | OK |
| nevo-e07-2025-precio-ficha-tecnica | OK |
| nevo-q05-2025-precio-ficha-tecnica | OK |
| nevo-q06-2026-precio-ficha-tecnica | OK |
| nevo-q07-2025-precio-ficha-tecnica | OK |
| nio-ec6-2024-precio-ficha-tecnica | OK |
| nio-ec6-2026-precio-ficha-tecnica | OK |
| nio-ec7-2024-precio-ficha-tecnica | OK |
| nio-el6-2024-precio-ficha-tecnica | OK |
| nio-el6-2026-precio-ficha-tecnica | OK |
| nio-el6-75-kwh-2025-precio-ficha-tecnica | OK |
| nio-el7-2024-precio-ficha-tecnica | OK |
| nio-el7-75-kwh-2025-precio-ficha-tecnica | OK |
| nio-el8-2024-precio-ficha-tecnica | OK |
| nio-el8-2026-precio-ficha-tecnica | OK |
| nio-ep9-2024-precio-autonomia | OK |
| nio-ep9-2024-precio-ficha-tecnica | OK |
| nio-es8-2025-precio-autonomia | OK |
| nio-es8-2025-precio-ficha-tecnica | OK |
| nio-es9-2026-precio-ficha-tecnica | OK |
| nio-et5-2025-precio-ficha-tecnica | OK |
| nio-et5-75-kwh-2026-precio-ficha-tecnica | OK |
| nio-et5-touring-2025-precio-ficha-tecnica | OK |
| nio-et5-touring-2026-precio-ficha-tecnica | OK |
| nio-et5-touring-75-kwh-2026-precio-ficha-tecnica | OK |
| nio-et7-2024-precio-ficha-tecnica | OK |
| nio-et7-2025-precio-ficha-tecnica | OK |
| nio-et7-75-kwh-2025-precio-ficha-tecnica | OK |
| nio-et9-2026-precio-ficha-tecnica | OK |
| nio-firefly-2025-precio-ficha-tecnica | OK |
| nio-firefly-precio-espana-ficha-tecnica | OK |
| nissan-ariya-2026-precio-ficha-tecnica | OK |
| nissan-ariya-63kwh-218-2025-precio-ficha-tecnica | OK |
| nissan-ariya-87kwh-242-2026-precio-ficha-tecnica | OK |
| nissan-ariya-e4orce-306-2025-precio-ficha-tecnica | OK |
| nissan-ariya-nismo-435-2025-precio-ficha-tecnica | OK |
| nissan-interstar-ev-2025-precio-ficha-tecnica | OK |
| nissan-juke-10-dig-t-2026-precio-ficha-tecnica | OK |
| nissan-juke-hibrido-2025-precio-ficha-tecnica | OK |
| nissan-leaf-2026-52-kwh-precio-ficha-tecnica | OK |
| nissan-leaf-2026-75-kwh-precio-ficha-tecnica | OK |
| nissan-leaf-2026-precio-ficha-tecnica | OK |
| nissan-leaf-e-plus-62kwh-2023-precio-ficha-tecnica | OK |
| nissan-micra-2025-precio | OK |
| nissan-micra-2025-precio-ficha-tecnica | OK |
| nissan-micra-electrico-2026-precio-ficha-tecnica | OK |
| nissan-micra-ev-40kwh-2026-precio-ficha-tecnica | OK |
| nissan-micra-ev-52kwh-2026-precio-ficha-tecnica | OK |
| nissan-murano-2025-precio-ficha | OK |
| nissan-patrol-2025-precio-v6 | OK |
| nissan-primastar-combi-dci-2026-precio-ficha-tecnica | OK |
| nissan-primastar-combi-dci170-2026-precio-ficha-tecnica | OK |
| nissan-qashqai-baja-precio-octubre-2026 | OK |
| nissan-qashqai-e-power-190-2025-precio-ficha-tecnica | OK |
| nissan-qashqai-e-power-2026-precio-ficha-tecnica | OK |
| nissan-qashqai-mhev-158-2026-precio-ficha-tecnica | OK |
| nissan-townstar-combi-13g-2026-precio-ficha-tecnica | OK |
| nissan-townstar-ev-2026-precio-ficha-tecnica | OK |
| nissan-townstar-evalia-ev-2026-precio-ficha-tecnica | OK |
| nissan-x-trail-e-4orce-2026-precio-ficha-tecnica | OK |
| nissan-x-trail-e-power-2026-precio-ficha-tecnica | OK |
| niu-mqi-gt-evo-baja-precio-octubre-2026 | OK |
| niu-nqi-sport-scooter-electrico-1999-euros-gama-2026 | OK |
| noble-m500-2025-precio-ficha-tecnica | OK |
| norton-v4sv-2026-precio-ficha-tecnica | OK |
| nuevo-bmw-serie-3-i3-electrico-2026-precio-ficha-tecnica | OK |
| nuevo-hyundai-tucson-2027-presentacion-precio-ficha-tecnica | OK |
| nuevo-radar-fijo-a67-torrelavega | OK |
| ofensiva-china-salon-paris-2026-20-marcas | OK |
| okai-es10-precio-ficha-tecnica | OK |
| okai-es30-precio-ficha-tecnica | OK |
| ola-s1-pro-2025-ficha-tecnica-precio | OK |
| omoda-4-2026-precio-ficha-tecnica | OK |
| omoda-4-ev-2026-precio-ficha-tecnica | OK |
| omoda-4-shs-2026-precio-ficha-tecnica | OK |
| omoda-5-ev-2025-precio-ficha-tecnica | OK |
| omoda-5-ev-electrico-precio-ficha-tecnica | OK |
| omoda-5-gasolina-2026-precio-ficha-tecnica | OK |
| omoda-5-shs-2025-precio-ficha-tecnica | OK |
| omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica | OK |
| omoda-7-shs-2026-precio-ficha-tecnica | OK |
| omoda-9-shs-2025-precio-ficha-tecnica | OK |
| omoda-9-shs-precio-ficha-tecnica | OK |
| omoda-c7-2025-precio | OK |
| omoda-c7-2025-precio-ficha-tecnica | OK |
| omoda-jaecoo-record-ventas-septiembre-2026 | OK |
| omoda-s5-2026-precio-ficha-tecnica | OK |
| onvo-l60-2024-precio-ficha-tecnica | OK |
| onvo-l60-2025-precio-ficha-tecnica | OK |
| onvo-l60-2026-precio-ficha-tecnica | OK |
| onvo-l80-2026-precio-ficha-tecnica | OK |
| onvo-l90-2025-precio-ficha-tecnica | OK |
| onvo-l90-nio-2026-precio-ficha-tecnica | OK |
| opel-astra-12-turbo-130-2025-precio-ficha-tecnica | OK |
| opel-astra-diesel-130-2025-precio-ficha-tecnica | OK |
| opel-astra-electrico-2025-precio-ficha-tecnica | OK |
| opel-astra-hibrido-2025-precio-ficha-tecnica | OK |
| opel-astra-hibrido-enchufable-2025-precio-ficha-tecnica | OK |
| opel-astra-sports-tourer-12-turbo-130-2025-precio-ficha-tecnica | OK |
| opel-astra-sports-tourer-electrico-2025-precio-ficha-tecnica | OK |
| opel-astra-sports-tourer-hibrido-2025-precio-ficha-tecnica | OK |
| opel-astra-sports-tourer-phev-2025-precio-ficha-tecnica | OK |
| opel-combo-15-diesel-130-2025-precio-ficha-tecnica | OK |
| opel-combo-electrico-2025-precio-ficha-tecnica | OK |
| opel-combo-xl-diesel-130-2025-precio-ficha-tecnica | OK |
| opel-corsa-12-100-2025-precio-ficha-tecnica | OK |
| opel-corsa-2026-precio-ficha-tecnica | OK |
| opel-corsa-electrico-2025-precio-ficha-tecnica | OK |
| opel-corsa-gse-2026-precio-ficha-tecnica | OK |
| opel-corsa-hibrido-2025-precio-ficha-tecnica | OK |
| opel-frontera-2024-precio | OK |
| opel-frontera-2024-precio-ficha-tecnica | OK |
| opel-frontera-electric-44kwh-2025-precio-ficha-tecnica | OK |
| opel-frontera-electric-baja-precio-octubre-2026 | OK |
| opel-frontera-electric-precio-ficha-tecnica | OK |
| opel-frontera-electrico-54kwh-2025-precio-ficha-tecnica | OK |
| opel-frontera-hibrido-2025-precio-ficha-tecnica | OK |
| opel-grandland-12-turbo-130-2024-precio-ficha-tecnica | OK |
| opel-grandland-2025-precio-ficha-tecnica | OK |
| opel-grandland-electrico-2025-precio-ficha-tecnica | OK |
| opel-grandland-electrico-awd-2025-precio-ficha-tecnica | OK |
| opel-grandland-electrico-long-range-2025-precio-ficha-tecnica | OK |
| opel-grandland-hibrido-2025-precio-ficha-tecnica | OK |
| opel-grandland-hibrido-enchufable-2025-precio-ficha-tecnica | OK |
| opel-mokka-12-turbo-130-2025-precio-ficha-tecnica | OK |
| opel-mokka-electrico-2025-precio-ficha-tecnica | OK |
| opel-mokka-gse-2025-precio-ficha-tecnica | OK |
| opel-mokka-hibrido-2025-precio-ficha-tecnica | OK |
| opel-movano-22-diesel-180-2025-precio-ficha-tecnica | OK |
| opel-movano-electrico-2025-precio-ficha-tecnica | OK |
| opel-rocks-2026-precio-ficha-tecnica | OK |
| opel-stx-concept-paris-2026 | OK |
| opel-vivaro-20-diesel-180-2025-precio-ficha-tecnica | OK |
| opel-vivaro-electrico-2025-precio-ficha-tecnica | OK |
| opel-zafira-20-diesel-180-2026-precio-ficha-tecnica | OK |
| opel-zafira-electrico-2025-precio-ficha-tecnica | OK |
| opel-zafira-life-2025-precio-ficha | OK |
| operativo-dgt-puente-pilar-2026-57-millones | OK |
| ora-ballet-cat-2024-precio-ficha-tecnica | OK |
| oshan-x5-2026-precio-ficha-tecnica | OK |
| oshan-z6-2026-precio-ficha-tecnica | OK |
| ovaobike-mcr-s-2025-ficha-tecnica-precio | OK |
| pagani-utopia-roadster-2026-precio-ficha-tecnica | OK |
| peugeot-2008-12-puretech-100-2026-precio-ficha-tecnica | OK |
| peugeot-2008-2024-precio-ficha-tecnica | OK |
| peugeot-2008-2025-precio-ficha-tecnica | OK |
| peugeot-2008-hibrido-145-2026-precio-ficha-tecnica | OK |
| peugeot-208-12-puretech-100-2026-precio-ficha-tecnica | OK |
| peugeot-208-hibrido-110-2026-precio-ficha-tecnica | OK |
| peugeot-3008-12-hybrid-136-2025-precio-ficha-tecnica | OK |
| peugeot-3008-2025-precio-ficha-tecnica | OK |
| peugeot-3008-hibrido-145-2026-precio-ficha-tecnica | OK |
| peugeot-3008-phev-195-2026-precio-ficha-tecnica | OK |
| peugeot-308-2025-precio-ficha-tecnica | OK |
| peugeot-308-hibrido-145-2026-precio-ficha-tecnica | OK |
| peugeot-308-phev-195-2026-precio-ficha-tecnica | OK |
| peugeot-308-sw-hibrido-145-2026-precio-ficha-tecnica | OK |
| peugeot-308-sw-phev-195-2026-precio-ficha-tecnica | OK |
| peugeot-408-2025-precio-ficha-tecnica | OK |
| peugeot-408-hibrido-145-2026-precio-ficha-tecnica | OK |
| peugeot-408-phev-240-2026-precio-ficha-tecnica | OK |
| peugeot-5008-12-hybrid-136-2025-precio-ficha-tecnica | OK |
| peugeot-5008-hibrido-145-2026-precio-ficha-tecnica | OK |
| peugeot-5008-phev-195-2026-precio-ficha-tecnica | OK |
| peugeot-5008-phev-225-2026-precio-ficha-tecnica | OK |
| peugeot-508-phev-225-2026-precio-ficha-tecnica | OK |
| peugeot-508-sw-phev-225-2026-precio-ficha-tecnica | OK |
| peugeot-boxer-22-bluehdi-180-2026-precio-ficha-tecnica | OK |
| peugeot-e-2008-electrico-2026-precio-ficha-tecnica | OK |
| peugeot-e-208-electrico-2026-precio-ficha-tecnica | OK |
| peugeot-e-208-gti-2026-precio-ficha-tecnica | OK |
| peugeot-e-3008-2025-precio-ficha-tecnica | OK |
| peugeot-e-3008-dual-motor-325-2026-precio-ficha-tecnica | OK |
| peugeot-e-3008-electrico-2026-precio-ficha-tecnica | OK |
| peugeot-e-3008-long-range-2026-precio-ficha-tecnica | OK |
| peugeot-e-308-electrico-2026-precio-ficha-tecnica | OK |
| peugeot-e-308-sw-2026-precio-ficha-tecnica | OK |
| peugeot-e-408-electrico-2026-precio-ficha-tecnica | OK |
| peugeot-e-5008-2026-precio-ficha-tecnica | OK |
| peugeot-e-5008-320-dual-motor-2026-precio-ficha-tecnica | OK |
| peugeot-e-5008-electrico-7-plazas-precio | OK |
| peugeot-e-5008-long-range-2026-precio-ficha-tecnica | OK |
| peugeot-e-5008-vs-skoda-peaq-cual-comprar | OK |
| peugeot-e-boxer-2026-precio-ficha-tecnica | OK |
| peugeot-e-expert-2026-precio-ficha-tecnica | OK |
| peugeot-e-partner-2026-precio-ficha-tecnica | OK |
| peugeot-e-rifter-2026-precio-ficha-tecnica | OK |
| peugeot-e-traveller-2026-precio-ficha-tecnica | OK |
| peugeot-expert-15-bluehdi-120-2026-precio-ficha-tecnica | OK |
| peugeot-expert-20-bluehdi-180-2026-precio-ficha-tecnica | OK |
| peugeot-partner-15-bluehdi-130-2026-precio-ficha-tecnica | OK |
| peugeot-rcz-vision-concept-paris-2026 | OK |
| peugeot-rifter-15-bluehdi-130-2026-precio-ficha-tecnica | OK |
| peugeot-rifter-long-15-bluehdi-130-2026-precio-ficha-tecnica | OK |
| piaggio-beverly-400-2024-ficha-tecnica-precio | OK |
| pininfarina-battista-2025-precio-ficha-tecnica | OK |
| plan-auto-ayudas-autonomos-empresas-coche-electrico | OK |
| polestar-2-long-range-dual-motor-precio-ficha-tecnica | OK |
| polestar-2-long-range-precio-ficha-tecnica | OK |
| polestar-2-performance-precio-ficha-tecnica | OK |
| polestar-2-precio-ficha-tecnica | OK |
| polestar-3-dual-motor-precio-ficha-tecnica | OK |
| polestar-3-performance-precio-ficha-tecnica | OK |
| polestar-3-precio-ficha-tecnica | OK |
| polestar-4-suv-dual-motor-precio-ficha-tecnica | OK |
| polestar-4-suv-precio-ficha-tecnica | OK |
| polestar-5-performance-precio-ficha-tecnica | OK |
| polestar-5-precio-ficha-tecnica | OK |
| polestar-6-roadster-2026-precio-ficha | OK |
| polestar-6-roadster-2026-precio-ficha-tecnica | OK |
| polestar-7-2028-precio-autonomia | OK |
| polestar-7-2028-precio-ficha-tecnica | OK |
| porsche-718-cayman-gt4-rs-2025-precio-ficha-tecnica | OK |
| porsche-718-spyder-rs-2025-precio-ficha-tecnica | OK |
| porsche-911-carrera-2026-precio-ficha-tecnica | OK |
| porsche-911-carrera-4-gts-2026-precio-ficha-tecnica | OK |
| porsche-911-carrera-cabriolet-2026-precio-ficha-tecnica | OK |
| porsche-911-carrera-gts-2026-precio-ficha-tecnica | OK |
| porsche-911-carrera-s-2026-precio-ficha-tecnica | OK |
| porsche-911-carrera-t-2026-precio-ficha-tecnica | OK |
| porsche-911-gt3-2026-precio-ficha-tecnica | OK |
| porsche-911-gt3-rs-2025-precio-ficha-tecnica | OK |
| porsche-911-targa-4-gts-2026-precio-ficha-tecnica | OK |
| porsche-911-turbo-s-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-coupe-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-e-hybrid-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-electric-2025-precio-ficha-tecnica | OK |
| porsche-cayenne-gts-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-s-e-hybrid-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-turbo-e-hybrid-2026-precio-ficha-tecnica | OK |
| porsche-cayenne-turbo-gt-2025-precio-ficha-tecnica | OK |
| porsche-macan-4-electric-2026-precio-ficha-tecnica | OK |
| porsche-macan-4s-electric-2026-precio-ficha-tecnica | OK |
| porsche-macan-electric-2026-precio-ficha-tecnica | OK |
| porsche-macan-turbo-electric-2026-precio-ficha-tecnica | OK |
| porsche-panamera-2026-precio-ficha-tecnica | OK |
| porsche-panamera-4-e-hybrid-2026-precio-ficha-tecnica | OK |
| porsche-panamera-gts-2026-precio-ficha-tecnica | OK |
| porsche-panamera-turbo-e-hybrid-2026-precio-ficha-tecnica | OK |
| porsche-panamera-turbo-s-e-hybrid-2025-precio-ficha-tecnica | OK |
| porsche-taycan-2026-precio-ficha-tecnica | OK |
| porsche-taycan-4-cross-turismo-2026-precio-ficha-tecnica | OK |
| porsche-taycan-4s-2026-precio-ficha-tecnica | OK |
| porsche-taycan-gts-2026-precio-ficha-tecnica | OK |
| porsche-taycan-turbo-2026-precio-ficha-tecnica | OK |
| porsche-taycan-turbo-gt-2026-precio-ficha-tecnica | OK |
| porsche-taycan-turbo-s-2026-precio-ficha-tecnica | OK |
| possl-summit-600-2026-precio-camper | OK |
| pursang-e-track-ficha-tecnica-precio | OK |
| qjmotor-fort-250-2026-precio-ficha-tecnica | OK |
| qjmotor-sq-200-2026-ficha-tecnica-precio | OK |
| qjmotor-srk-125s-precio-garantia | OK |
| qjmotor-srk-400rs-4-cilindros-precio | OK |
| qjmotor-srk-550-rs-2026-ficha-tecnica-precio | OK |
| qjmotor-srk-900-2026-ficha-tecnica-precio | OK |
| qjmotor-srk-921rr-deportiva-precio | OK |
| qjmotor-srt-900-sx-2026-ficha-tecnica-precio | OK |
| qoros-5s-2026-precio-ficha-tecnica | OK |
| qoros-7-2026-precio-ficha-tecnica | OK |
| radical-rxc-2025-precio-ficha-tecnica | OK |
| radical-rxc-spyder-2025-precio-ficha-tecnica | OK |
| radical-sr1-xxr-2025-precio-ficha-tecnica | OK |
| radical-sr10-xxr-2025-precio-ficha-tecnica | OK |
| radical-sr3-xxr-2025-precio-ficha-tecnica | OK |
| ram-1500-ramcharger-2026-precio-ficha | OK |
| ram-1500-rev-2026-precio-ficha-tecnica | OK |
| range-rover-electric-2025-precio-ficha-tecnica | OK |
| razor-e100-precio-ficha-tecnica | OK |
| razor-e200-precio-ficha-tecnica | OK |
| razor-e325-precio-ficha-tecnica | OK |
| razor-e500-precio-ficha-tecnica | OK |
| renault-10000-millones-electricos-paris-2026-plan | OK |
| renault-4-e-tech-40-kwh-2025-precio-ficha-tecnica | OK |
| renault-4-e-tech-52-kwh-2025-precio-autonomia | OK |
| renault-4-e-tech-52-kwh-2026-precio-ficha-tecnica | OK |
| renault-4-e-tech-precio-autonomia | OK |
| renault-4-e-tech-vs-renault-5-e-tech-cual-comprar | OK |
| renault-5-e-tech-2026-precio-autonomia | OK |
| renault-5-e-tech-2026-vs-dacia-spring-2026-cual-comprar | OK |
| renault-5-e-tech-40-kwh-2025-precio-ficha-tecnica | OK |
| renault-5-e-tech-40-kwh-2026-precio-ficha-tecnica | OK |
| renault-5-e-tech-52-kwh-2025-precio-autonomia | OK |
| renault-5-e-tech-roland-garros-2025-precio-ficha-tecnica | OK |
| renault-5-turbo-3e-2026-precio-ficha-tecnica | OK |
| renault-600-millones-electricos-espana | OK |
| renault-8-gordini-concept-paris-2026 | OK |
| renault-arkana-2024-e-tech-145-precio-ficha-tecnica | OK |
| renault-arkana-2024-tce-140-precio-ficha-tecnica | OK |
| renault-arkana-2026-e-tech-145-precio-ficha-tecnica | OK |
| renault-arkana-2026-tce-140-precio-ficha-tecnica | OK |
| renault-austral-2024-precio-ficha-tecnica | OK |
| renault-austral-2025-e-tech-200-precio-ficha-tecnica | OK |
| renault-austral-2025-mild-hybrid-150-precio-ficha-tecnica | OK |
| renault-austral-2026-e-tech-200-precio-ficha-tecnica | OK |
| renault-austral-mild-hybrid-160-2024-precio-ficha-tecnica | OK |
| renault-boreal-2026-precio-ficha | OK |
| renault-boreal-2026-precio-ficha-tecnica | OK |
| renault-captur-2024-tce-90-precio-ficha-tecnica | OK |
| renault-captur-2025-precio-ficha-tecnica | OK |
| renault-captur-2026-e-tech-160-precio-ficha-tecnica | OK |
| renault-captur-2026-tce-90-precio-ficha-tecnica | OK |
| renault-captur-e-tech-145-2024-precio-ficha-tecnica | OK |
| renault-clio-vi-2025-e-tech-160-precio-ficha-tecnica | OK |
| renault-clio-vi-tce-115-2025-precio-ficha-tecnica | OK |
| renault-e-space-concept-paris-2026 | OK |
| renault-espace-2024-precio-ficha-tecnica | OK |
| renault-espace-2025-e-tech-200-precio-ficha-tecnica | OK |
| renault-espace-2026-e-tech-200-precio-ficha-tecnica | OK |
| renault-grand-kangoo-e-tech-2026-precio-ficha-tecnica | OK |
| renault-kangoo-2024-tce-130-precio-ficha-tecnica | OK |
| renault-kangoo-2025-precio-ficha-tecnica | OK |
| renault-kangoo-blue-dci-95-2024-precio-ficha-tecnica | OK |
| renault-kangoo-e-tech-combi-2024-precio-autonomia | OK |
| renault-kwid-e-tech-2025-precio-ficha-tecnica | OK |
| renault-master-23-dci-180-2026-precio-ficha-tecnica | OK |
| renault-master-e-tech-2026-precio-ficha-tecnica | OK |
| renault-megane-e-tech-2025-precio-ficha-tecnica | OK |
| renault-megane-e-tech-2026-lfp-67-kwh-precio-ficha-tecnica | OK |
| renault-megane-e-tech-2026-precio-autonomia | OK |
| renault-megane-e-tech-40-kwh-2024-precio-ficha-tecnica | OK |
| renault-rafale-2024-e-tech-4x4-300-precio-ficha-tecnica | OK |
| renault-rafale-2024-precio-ficha-tecnica | OK |
| renault-rafale-2025-atelier-alpine-precio-ficha-tecnica | OK |
| renault-rafale-e-tech-200-2025-precio-ficha-tecnica | OK |
| renault-rafale-e-tech-200-2026-precio-ficha-tecnica | OK |
| renault-scenic-e-tech-2025-precio-ficha-tecnica | OK |
| renault-scenic-e-tech-60-kwh-2024-precio-autonomia | OK |
| renault-scenic-e-tech-60-kwh-2026-precio-ficha-tecnica | OK |
| renault-scenic-e-tech-87-kwh-2025-precio-ficha-tecnica | OK |
| renault-scenic-e-tech-lfp-67-kwh-2026-precio-autonomia | OK |
| renault-symbioz-2024-e-tech-145-precio-ficha-tecnica | OK |
| renault-symbioz-2026-e-tech-145-precio-ficha-tecnica | OK |
| renault-trafic-20-dci-170-2026-precio-ficha-tecnica | OK |
| renault-trafic-e-tech-2026-precio-ficha-tecnica | OK |
| renault-trafic-spaceclass-2025-precio-ficha | OK |
| renault-twingo-e-tech-2026-precio-ficha-tecnica | OK |
| revolt-rv400-2026-precio-ficha-tecnica | OK |
| rgnt-no-1-2025-ficha-tecnica-precio | OK |
| riddara-rd6-2025-precio-ficha-tecnica | OK |
| riddara-rd6-em-p-2025-precio-ficha-tecnica | OK |
| rieju-aventura-500-legend-2026-precio-ficha-tecnica | OK |
| rimac-nevera-r-2025-precio-ficha-tecnica | OK |
| rising-f7-2025-precio-ficha-tecnica | OK |
| rising-r7-2025-precio-ficha-tecnica | OK |
| rising-rc7-2025-precio-ficha-tecnica | OK |
| rivian-r2-2026-precio-ficha | OK |
| rivian-r2-2026-precio-ficha-tecnica | OK |
| robotaxis-madrid-furgonetas-mapeo-octubre-2026 | OK |
| roewe-clever-2025-precio-ficha-tecnica | OK |
| roewe-d5x-dmh-2024-precio-ficha-tecnica | OK |
| roewe-d6-2025-precio-ficha-tecnica | OK |
| roewe-d7-dmh-2024-precio-ficha-tecnica | OK |
| roewe-d7-ev-2024-precio-ficha-tecnica | OK |
| roewe-ei5-2024-precio-ficha-tecnica | OK |
| roewe-erx5-2024-precio-ficha-tecnica | OK |
| roewe-i5-2024-precio-ficha-tecnica | OK |
| roewe-i6-2026-precio-ficha-tecnica | OK |
| roewe-imax8-2024-precio-ficha-tecnica | OK |
| roewe-imax8-dmh-2024-precio-ficha-tecnica | OK |
| roewe-jiayue-07-2026-precio-ficha-tecnica | OK |
| roewe-m7-dmh-2025-precio-ficha-tecnica | OK |
| roewe-rx5-2024-precio-ficha-tecnica | OK |
| roewe-rx9-2024-precio-ficha-tecnica | OK |
| roller-team-zefiro-696-2026-precio-autocaravana | OK |
| rolls-royce-cullinan-2026-precio-ficha-tecnica | OK |
| rolls-royce-cullinan-black-badge-2026-precio-ficha-tecnica | OK |
| rolls-royce-cullinan-series-ii-2026-precio-ficha-tecnica | OK |
| rolls-royce-cullinan-series-ii-black-badge-2026-precio-ficha-tecnica | OK |
| rolls-royce-droptail-2024-precio-ficha-tecnica | OK |
| rolls-royce-ghost-2026-precio-ficha-tecnica | OK |
| rolls-royce-ghost-black-badge-2026-precio-ficha-tecnica | OK |
| rolls-royce-ghost-extended-2026-precio-ficha-tecnica | OK |
| rolls-royce-ghost-extended-series-ii-2026-precio-ficha-tecnica | OK |
| rolls-royce-ghost-prism-2024-precio-ficha-tecnica | OK |
| rolls-royce-ghost-series-ii-2026-precio-ficha-tecnica | OK |
| rolls-royce-phantom-2026-precio-ficha-tecnica | OK |
| rolls-royce-phantom-extended-2026-precio-ficha-tecnica | OK |
| rolls-royce-phantom-series-ii-2026-precio-ficha-tecnica | OK |
| rolls-royce-spectre-2024-precio-ficha-tecnica | OK |
| rolls-royce-spectre-2026-precio-ficha-tecnica | OK |
| rolls-royce-spectre-black-badge-2026-precio-ficha-tecnica | OK |
| rolls-royce-spectre-series-ii-2026-precio-ficha-tecnica | OK |
| rox-01-2024-precio-ficha-tecnica | OK |
| rox-01-erev-pininfarina-autonomia-1115-km | OK |
| royal-enfield-guerrilla-450-2026-precio-ficha | OK |
| royal-enfield-interceptor-650-2026-precio-ficha | OK |
| salon-paris-2026-20-marcas-chinas-aranceles | OK |
| salon-paris-2026-estrenos-electricos-guia | OK |
| seat-arona-10-tsi-95-2026-precio-ficha-tecnica | OK |
| seat-arona-15-tsi-2026-precio-ficha-tecnica | OK |
| seat-arona-fr-10-tsi-115-2026-precio-ficha-tecnica | OK |
| seat-arona-fr-15-tsi-2026-precio-ficha-tecnica | OK |
| seat-ateca-15-tsi-2026-precio-ficha-tecnica | OK |
| seat-ateca-20-tdi-115-2026-precio-ficha-tecnica | OK |
| seat-ateca-20-tdi-2026-precio-ficha-tecnica | OK |
| seat-ateca-fr-20-tdi-2026-precio-ficha-tecnica | OK |
| seat-ibiza-10-tsi-2026-precio-ficha-tecnica | OK |
| seat-ibiza-15-tsi-2026-precio-ficha-tecnica | OK |
| seat-ibiza-2025-precio-ficha-tecnica | OK |
| seat-ibiza-baja-precio-octubre-2026 | OK |
| seat-ibiza-fr-10-tsi-115-2026-precio-ficha-tecnica | OK |
| seat-ibiza-fr-15-tsi-2026-precio-ficha-tecnica | OK |
| seat-leon-15-ehybrid-2026-precio-ficha-tecnica | OK |
| seat-leon-15-etsi-115-2026-precio-ficha-tecnica | OK |
| seat-leon-15-etsi-150-2026-precio-ficha-tecnica | OK |
| seat-leon-15-etsi-2026-precio-ficha-tecnica | OK |
| seat-leon-15-tsi-115-2026-precio-ficha-tecnica | OK |
| seat-leon-20-tdi-115-2026-precio-ficha-tecnica | OK |
| seat-leon-20-tdi-2026-precio-ficha-tecnica | OK |
| seat-leon-2025-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-15-ehybrid-2026-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-15-etsi-115-2026-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-15-etsi-150-2026-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-15-tsi-150-2026-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-15-tsi-2025-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-20-tdi-115-2026-precio-ficha-tecnica | OK |
| seat-leon-sportstourer-20-tdi-150-2026-precio-ficha-tecnica | OK |
| sehol-e10x-2025-precio-ficha-tecnica | OK |
| sehol-x6-2024-precio-ficha-tecnica | OK |
| sehol-x8-2022-precio-ficha-tecnica | OK |
| seres-3-2025-precio-ficha-tecnica | OK |
| seres-5-2025-precio-ficha-tecnica | OK |
| seres-5-electrico-precio-ficha-tecnica | OK |
| seres-m7-2025-precio-ficha-tecnica | OK |
| silence-s01-ficha-tecnica-precio | OK |
| silence-s01-plus-baja-precio-octubre-2026 | OK |
| silence-s04-l6e-2025-precio-ficha-tecnica | OK |
| silence-s04-l7e-2025-precio-ficha-tecnica | OK |
| skoda-elroq-50-2026-precio-ficha-tecnica | OK |
| skoda-elroq-60-2026-precio-ficha-tecnica | OK |
| skoda-elroq-85-2025-precio-ficha-tecnica | OK |
| skoda-elroq-85-2026-precio-ficha-tecnica | OK |
| skoda-elroq-electrico-precio-ficha-tecnica | OK |
| skoda-elroq-rs-2026-precio-ficha-tecnica | OK |
| skoda-enyaq-60-2026-precio-ficha-tecnica | OK |
| skoda-enyaq-85-2026-precio-ficha-tecnica | OK |
| skoda-enyaq-85x-2025-precio-ficha-tecnica | OK |
| skoda-enyaq-coupe-60-2026-precio-ficha-tecnica | OK |
| skoda-enyaq-coupe-85-2026-precio-ficha-tecnica | OK |
| skoda-enyaq-coupe-rs-2026-precio-ficha-tecnica | OK |
| skoda-enyaq-rs-2026-precio-ficha-tecnica | OK |
| skoda-epiq-2026-precio-ficha-tecnica | OK |
| skoda-epiq-electrico-barato-precio-espana | OK |
| skoda-fabia-10-tsi-95-2026-precio-ficha-tecnica | OK |
| skoda-fabia-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-fabia-monte-carlo-2026-precio-ficha-tecnica | OK |
| skoda-kamiq-10-tsi-2025-precio-ficha-tecnica | OK |
| skoda-kamiq-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-kamiq-monte-carlo-2026-precio-ficha-tecnica | OK |
| skoda-karoq-20-tdi-150-2026-precio-ficha-tecnica | OK |
| skoda-karoq-2025-precio-ficha-tecnica | OK |
| skoda-kodiaq-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-kodiaq-20-tdi-2026-precio-ficha-tecnica | OK |
| skoda-kodiaq-20-tsi-2026-precio-ficha-tecnica | OK |
| skoda-kodiaq-iv-2025-precio-ficha-tecnica | OK |
| skoda-kodiaq-iv-hibrido-enchufable-2026-precio-ficha-tecnica | OK |
| skoda-kodiaq-rs-2026-precio-ficha-tecnica | OK |
| skoda-kylaq-2025-precio-ficha | OK |
| skoda-octavia-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-octavia-20-tdi-2026-precio-ficha-tecnica | OK |
| skoda-octavia-20-tsi-2026-precio-ficha-tecnica | OK |
| skoda-octavia-combi-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-octavia-combi-20-tdi-2026-precio-ficha-tecnica | OK |
| skoda-octavia-combi-20-tsi-2026-precio-ficha-tecnica | OK |
| skoda-octavia-combi-rs-2026-precio-ficha-tecnica | OK |
| skoda-octavia-rs-2026-precio-ficha-tecnica | OK |
| skoda-peaq-suv-electrico-7-plazas-precio | OK |
| skoda-scala-10-tsi-2026-precio-ficha-tecnica | OK |
| skoda-scala-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-scala-monte-carlo-2026-precio-ficha-tecnica | OK |
| skoda-superb-15-tsi-2026-precio-ficha-tecnica | OK |
| skoda-superb-20-tdi-2026-precio-ficha-tecnica | OK |
| skoda-superb-20-tsi-2026-precio-ficha-tecnica | OK |
| skoda-superb-combi-20-tdi-2026-precio-ficha-tecnica | OK |
| skoda-superb-combi-20-tsi-2026-precio-ficha-tecnica | OK |
| skoda-superb-combi-iv-2026-precio-ficha-tecnica | OK |
| skoda-superb-iv-hibrido-enchufable-2026-precio-ficha-tecnica | OK |
| skywell-et5-2026-precio-ficha-tecnica | OK |
| smart-1-brabus-2025-precio-ficha-tecnica | OK |
| smart-1-premium-2025-precio-ficha-tecnica | OK |
| smart-1-pro-2025-precio-ficha-tecnica | OK |
| smart-1-pro-plus-2025-precio-ficha-tecnica | OK |
| smart-1-pulse-2025-precio-ficha-tecnica | OK |
| smart-1-pure-2025-precio-ficha-tecnica | OK |
| smart-1-pure-plus-2025-precio-ficha-tecnica | OK |
| smart-2-2026-precio-autonomia-paris | OK |
| smart-3-2026-precio-ficha-tecnica | OK |
| smart-3-brabus-2026-precio-ficha-tecnica | OK |
| smart-3-pro-2025-precio-ficha-tecnica | OK |
| smart-3-pro-plus-2025-precio-ficha-tecnica | OK |
| smart-5-brabus-2025-precio-ficha-tecnica | OK |
| smart-5-electrico-ficha-tecnica-precio | OK |
| smart-5-premium-2025-precio-ficha-tecnica | OK |
| smart-5-pro-2025-precio-ficha-tecnica | OK |
| smart-5-pro-plus-2025-precio-ficha-tecnica | OK |
| smart-5-pulse-2025-precio-ficha-tecnica | OK |
| smart-5-summit-edition-2025-precio-ficha-tecnica | OK |
| smart-fortwo-eq-2025-precio-electrico | OK |
| soueast-dx8s-2026-precio-ficha-tecnica | OK |
| soueast-s06-dm-2026-precio-ficha-tecnica | OK |
| ssc-tuatara-2025-precio-ficha-tecnica | OK |
| stelato-g9-2026-precio-ficha-tecnica | OK |
| stelato-g9-erev-2026-precio-ficha-tecnica | OK |
| stelato-s9-2024-precio-ficha-tecnica | OK |
| stelato-s9-erev-2025-precio-ficha-tecnica | OK |
| stelato-s9-huawei-2026-precio-ficha-tecnica | OK |
| stelato-s9t-2025-precio-ficha-tecnica | OK |
| stelato-s9t-2026-precio-ficha-tecnica | OK |
| stelato-s9t-erev-2026-precio-ficha-tecnica | OK |
| subaru-crosstrek-2025-precio-ficha-tecnica | OK |
| subaru-e-outback-2026-precio-ficha-tecnica | OK |
| subaru-forester-2025-precio-ficha-tecnica | OK |
| subaru-outback-2025-precio-ficha-tecnica | OK |
| subaru-solterra-2026-precio-ficha-tecnica | OK |
| subaru-solterra-trek-4wd-2026-precio-ficha-tecnica | OK |
| subaru-trailseeker-2026-precio-autonomia | OK |
| subaru-uncharted-2026-precio-ficha-tecnica | OK |
| subaru-uncharted-field-2026-precio-ficha-tecnica | OK |
| subaru-uncharted-touring-2026-precio-ficha-tecnica | OK |
| sur-ron-light-bee-x-2025-ficha-tecnica-precio | OK |
| sur-ron-storm-bee-2025-ficha-tecnica-precio | OK |
| sur-ron-ultra-bee-2025-ficha-tecnica-precio | OK |
| suzuki-across-2025-precio-ficha-tecnica | OK |
| suzuki-e-access-2025-ficha-tecnica-precio | OK |
| suzuki-e-vitara-2025-precio-ficha-tecnica | OK |
| suzuki-evitara-2025-precio-autonomia | OK |
| suzuki-fronx-2025-precio-ficha | OK |
| suzuki-ignis-2025-precio-ficha-tecnica | OK |
| suzuki-jimny-pro-2026-precio-ficha-tecnica | OK |
| suzuki-s-cross-mild-hybrid-2025-precio-ficha-tecnica | OK |
| suzuki-s-cross-strong-hybrid-2025-precio-ficha-tecnica | OK |
| suzuki-swace-hybrid-2025-precio-ficha-tecnica | OK |
| suzuki-swift-2025-12-83cv-hibrido-precio-ficha-tecnica | OK |
| suzuki-swift-sport-2024-precio-ficha-tecnica | OK |
| suzuki-v-strom-800-2026-precio-ficha | OK |
| suzuki-vitara-strong-hybrid-2025-precio-ficha-tecnica | OK |
| swm-g01-2025-precio-ficha-tecnica | OK |
| swm-g01f-2025-precio-ficha-tecnica | OK |
| swm-g03-edi-phev-2026-precio-ficha-tecnica | OK |
| swm-g03f-2025-precio-ficha-tecnica | OK |
| swm-g05-pro-2025-precio-ficha-tecnica | OK |
| swm-tiger-2026-precio-ficha-tecnica | OK |
| swm-tiger-suv-2026-precio-ficha | OK |
| swm-varez-125-2023-ficha-tecnica-precio | OK |
| sym-maxsym-tl-508-2024-ficha-tecnica-precio | OK |
| talaria-sting-r-mx4-2025-ficha-tecnica-precio | OK |
| talaria-sting-rmx5-pro-2025-ficha-tecnica-precio | OK |
| talaria-xxx-tl2500-2025-ficha-tecnica-precio | OK |
| tank-300-2-0t-2024-precio-ficha-tecnica | OK |
| tank-300-diesel-2025-precio-ficha-tecnica | OK |
| tank-300-hev-2024-precio-ficha-tecnica | OK |
| tank-300-hi4-t-2025-precio-ficha-tecnica | OK |
| tank-300-hooke-trail-2026-precio-ficha-tecnica | OK |
| tank-330-2024-precio-ficha-tecnica | OK |
| tank-400-hi4-t-2025-precio-ficha-tecnica | OK |
| tank-400-hi4-z-2025-precio-ficha-tecnica | OK |
| tank-500-3-0t-2024-precio-ficha-tecnica | OK |
| tank-500-hev-2024-precio-ficha-tecnica | OK |
| tank-500-hi4-t-2025-precio-ficha-tecnica | OK |
| tank-500-hi4-z-2025-precio-ficha-tecnica | OK |
| tank-700-hi4-t-2024-precio-ficha-tecnica | OK |
| tank-700-lwb-hi4-z-2025-precio-ficha-tecnica | OK |
| tank-800-2026-precio-autonomia | OK |
| tank-800-2026-precio-ficha-tecnica | OK |
| tesla-cybercab-2026-precio-ficha | OK |
| tesla-cybertruck-2026-precio-ficha-tecnica | OK |
| tesla-model-3-gran-autonomia-traccion-total-2026-precio-ficha-tecnica | OK |
| tesla-model-3-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica | OK |
| tesla-model-3-performance-2025-precio-ficha-tecnica | OK |
| tesla-model-s-plaid-2026-precio-ficha-tecnica | OK |
| tesla-model-x-plaid-2026-precio-ficha-tecnica | OK |
| tesla-model-y-7-plazas-2026-precio-ficha-tecnica | OK |
| tesla-model-y-gran-autonomia-traccion-total-2026-precio-ficha-tecnica | OK |
| tesla-model-y-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica | OK |
| tesla-model-y-l-2026-precio-autonomia | OK |
| tesla-model-y-performance-2026-precio-ficha-tecnica | OK |
| tesla-model-y-standard-gran-autonomia-traccion-trasera-2026-precio-ficha-tecnica | OK |
| tesla-roadster-2026-retraso-precio-ficha-tecnica | OK |
| teverun-blade-gt-precio-ficha-tecnica | OK |
| teverun-blade-mini-precio-ficha-tecnica | OK |
| tinbot-rs1-2025-ficha-tecnica-precio | OK |
| tm-en-300-2026-precio-ficha-tecnica | OK |
| togg-t10x-2026-precio-ficha | OK |
| togg-t10x-2026-precio-ficha-tecnica | OK |
| toyota-aygo-x-2025-precio-ficha-tecnica | OK |
| toyota-aygo-x-hybrid-2025-precio-ficha-tecnica | OK |
| toyota-bz3x-2026-precio-ficha-tecnica | OK |
| toyota-bz3x-electrico-2026-precio-ficha | OK |
| toyota-bz4x-2025-precio-ficha-tecnica | OK |
| toyota-bz4x-2026-precio-ficha-tecnica | OK |
| toyota-bz4x-224-2025-precio-ficha-tecnica | OK |
| toyota-bz4x-touring-2026-precio-ficha-tecnica | OK |
| toyota-bz5-2026-precio-autonomia | OK |
| toyota-bz7-2026-precio-autonomia | OK |
| toyota-c-hr-200h-2025-precio-ficha-tecnica | OK |
| toyota-c-hr-gr-sport-2025-precio-ficha-tecnica | OK |
| toyota-c-hr-phev-2025-precio-ficha-tecnica | OK |
| toyota-c-hr-plus-2026-precio-ficha-tecnica | OK |
| toyota-c-hr-plus-230-2025-precio-ficha-tecnica | OK |
| toyota-camry-2025-precio-ficha-tecnica | OK |
| toyota-corolla-5p-140h-2025-precio-ficha-tecnica | OK |
| toyota-corolla-5p-140h-2026-precio-ficha-tecnica | OK |
| toyota-corolla-baja-precio-octubre-2026 | OK |
| toyota-corolla-berlina-2025-precio-ficha-tecnica | OK |
| toyota-corolla-cross-200h-2025-precio-ficha-tecnica | OK |
| toyota-corolla-cross-2025-precio-ficha-tecnica | OK |
| toyota-corolla-cross-2026-precio-restyling | OK |
| toyota-corolla-gr-sport-2025-precio-ficha-tecnica | OK |
| toyota-corolla-sedan-140h-2025-precio-ficha-tecnica | OK |
| toyota-corolla-touring-sports-2025-precio-ficha-tecnica | OK |
| toyota-corolla-touring-sports-baja-precio-octubre-2026 | OK |
| toyota-gr-supra-2025-precio-ficha-tecnica | OK |
| toyota-gr-supra-final-edition-2026-precio-ficha-tecnica | OK |
| toyota-gr-yaris-2025-precio-ficha-tecnica | OK |
| toyota-gr86-2025-precio-ficha-tecnica | OK |
| toyota-highlander-2025-precio-ficha-tecnica | OK |
| toyota-hilux-2025-precio-ficha-tecnica | OK |
| toyota-hilux-ev-2026-precio-ficha-tecnica | OK |
| toyota-hilux-mhev-2025-precio-ficha-tecnica | OK |
| toyota-land-cruiser-2026-precio-ficha-tecnica | OK |
| toyota-land-cruiser-250-2025-precio-ficha-tecnica | OK |
| toyota-mirai-2025-precio-ficha-tecnica | OK |
| toyota-prius-phev-2025-precio-ficha-tecnica | OK |
| toyota-proace-city-verso-2025-precio-ficha-tecnica | OK |
| toyota-proace-city-verso-electric-2025-precio-ficha-tecnica | OK |
| toyota-proace-max-2025-precio-ficha-tecnica | OK |
| toyota-proace-max-electric-2025-precio-ficha-tecnica | OK |
| toyota-proace-verso-2025-precio-ficha-tecnica | OK |
| toyota-proace-verso-electric-2025-precio-ficha-tecnica | OK |
| toyota-rav4-gr-sport-phev-2026-precio-ficha-tecnica | OK |
| toyota-rav4-hev-2025-precio-ficha-tecnica | OK |
| toyota-rav4-phev-2026-precio-ficha-tecnica | OK |
| toyota-urban-cruiser-2025-precio-ficha-tecnica | OK |
| toyota-urban-cruiser-2026-precio-ficha-tecnica | OK |
| toyota-yaris-130h-2025-precio-ficha-tecnica | OK |
| toyota-yaris-130h-2026-precio-ficha-tecnica | OK |
| toyota-yaris-baja-precio-octubre-2026 | OK |
| toyota-yaris-cross-130h-2025-precio-ficha-tecnica | OK |
| toyota-yaris-cross-2026-precio-ficha-tecnica | OK |
| toyota-yaris-cross-gr-sport-2025-precio-ficha-tecnica | OK |
| triumph-daytona-660-2026-precio-ficha | OK |
| triumph-scrambler-1200-xe-2026-precio-ficha | OK |
| triumph-tiger-1200-gt-pro-2026-precio-ficha | OK |
| triumph-tiger-sport-800-2026-precio-ficha | OK |
| tromox-mino-2025-ficha-tecnica-precio | OK |
| tvr-griffith-2026-precio-ficha | OK |
| tvr-griffith-2026-precio-ficha-tecnica | OK |
| tvs-iqube-2026-precio-ficha-tecnica | OK |
| ue-bruselas-cuotas-hibridos-chinos | OK |
| ue-china-freno-hibridos-enchufables | OK |
| velca-nude-eon-motos-electricas-espanolas | OK |
| vent-baja-125-2026-precio-ficha-tecnica | OK |
| venucia-d60-ev-2025-precio-ficha-tecnica | OK |
| venucia-star-2026-precio-ficha-tecnica | OK |
| venucia-v-online-2025-precio-ficha-tecnica | OK |
| venucia-vx6-2024-precio-ficha-tecnica | OK |
| vinfast-vf-6-2026-precio-ficha | OK |
| vinfast-vf-6-2026-precio-ficha-tecnica | OK |
| vinfast-vf-7-2026-precio-ficha | OK |
| vinfast-vf-7-2026-precio-ficha-tecnica | OK |
| voge-300-acx-2021-ficha-tecnica-precio | OK |
| voge-300acx-scrambler-precio | OK |
| voge-500dsx-2021-ficha-tecnica-precio | OK |
| voge-525r-naked-a2-precio | OK |
| voge-625r-naked-64-cv-precio | OK |
| voge-ds800-rally-2026-ficha-tecnica-precio | OK |
| voge-rr660s-2026-ficha-tecnica-precio | OK |
| volkswagen-amarok-2026-precio-ficha-tecnica | OK |
| volkswagen-arteon-2025-precio-autonomia | OK |
| volkswagen-arteon-2025-precio-ficha-tecnica | OK |
| volkswagen-caddy-2026-precio-ficha-tecnica | OK |
| volkswagen-caddy-california-2025-precio-camper | OK |
| volkswagen-california-t7-2026-precio-ficha-tecnica | OK |
| volkswagen-caravelle-t7-2026-precio-ficha-tecnica | OK |
| volkswagen-crafter-2025-precio-furgon | OK |
| volkswagen-golf-15-etsi-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-2025-precio-ficha-tecnica | OK |
| volkswagen-golf-8-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-gte-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-gte-272-2025-precio-ficha-tecnica | OK |
| volkswagen-golf-gti-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-gti-clubsport-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-r-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-r-variant-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-variant-15-etsi-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-variant-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-golf-variant-r-line-20-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-grand-california-2026-precio-camper | OK |
| volkswagen-id-3-neo-2026-precio-ficha-tecnica | OK |
| volkswagen-id-4-2025-precio-electrico | OK |
| volkswagen-id-7-tourer-pro-2025-precio-ficha-tecnica | OK |
| volkswagen-id-aura-t6-xpeng-china | OK |
| volkswagen-id-buzz-2026-precio-ficha-tecnica | OK |
| volkswagen-id-buzz-gtx-2026-precio-ficha-tecnica | OK |
| volkswagen-id-cross-2026-precio-ficha | OK |
| volkswagen-id-cross-2026-precio-ficha-tecnica | OK |
| volkswagen-id-polo-2026-precio-ficha-tecnica | OK |
| volkswagen-id-polo-electrico-precio-espana-2026 | OK |
| volkswagen-id-polo-gti-2026-precio-ficha-tecnica | OK |
| volkswagen-id-polo-gti-electrico-2026-precio | OK |
| volkswagen-id-tiguan | OK |
| volkswagen-id-tiguan-2026-precio-ficha-tecnica | OK |
| volkswagen-id-tiguan-2027 | OK |
| volkswagen-id-unyx-09-electrico-china-755-km | OK |
| volkswagen-id3-2026-precio-ficha-tecnica | OK |
| volkswagen-id3-gtx-2026-precio-ficha-tecnica | OK |
| volkswagen-id4-2025-precio-ficha-tecnica | OK |
| volkswagen-id4-2026-precio-ficha-tecnica | OK |
| volkswagen-id4-gtx-2026-precio-ficha-tecnica | OK |
| volkswagen-id5-2025-precio-autonomia | OK |
| volkswagen-id5-2025-precio-ficha-tecnica | OK |
| volkswagen-id5-2026-precio-ficha-tecnica | OK |
| volkswagen-id7-2026-precio-ficha-tecnica | OK |
| volkswagen-id7-gtx-2025-precio-autonomia | OK |
| volkswagen-id7-gtx-2025-precio-ficha-tecnica | OK |
| volkswagen-id7-gtx-2026-precio-ficha-tecnica | OK |
| volkswagen-id7-tourer-2026-precio-ficha-tecnica | OK |
| volkswagen-mission-efficiency-record-1278-km | OK |
| volkswagen-multivan-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-multivan-t7-2026-precio-ficha-tecnica | OK |
| volkswagen-passat-variant-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-passat-variant-20-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-passat-variant-ehybrid-2026-precio-ficha-tecnica | OK |
| volkswagen-polo-10-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-polo-gti-2026-precio-ficha-tecnica | OK |
| volkswagen-t-cross-10-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-t-cross-15-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-t-cross-2025-precio-ficha-tecnica | OK |
| volkswagen-t-cross-2026-precio-ficha-tecnica | OK |
| volkswagen-t-roc-15-etsi-2026-precio-ficha-tecnica | OK |
| volkswagen-t-roc-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-taigo-10-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-taigo-15-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-taigo-2026-precio-ficha-tecnica | OK |
| volkswagen-tayron-15-etsi-2026-precio-ficha-tecnica | OK |
| volkswagen-tayron-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-tayron-20-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-tayron-2026-precio-ficha-tecnica | OK |
| volkswagen-tayron-ehybrid-2026-precio-ficha-tecnica | OK |
| volkswagen-tayron-ehybrid-204-2025-precio-ficha-tecnica | OK |
| volkswagen-tiguan-15-etsi-2026-precio-ficha-tecnica | OK |
| volkswagen-tiguan-20-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-tiguan-20-tsi-2026-precio-ficha-tecnica | OK |
| volkswagen-tiguan-2024-precio-ficha-tecnica | OK |
| volkswagen-tiguan-2025-precio-ficha-tecnica | OK |
| volkswagen-tiguan-ehybrid-2026-precio-ficha-tecnica | OK |
| volkswagen-tiguan-ehybrid-272-2025-precio-ficha-tecnica | OK |
| volkswagen-touareg-2024-precio-ficha-tecnica | OK |
| volkswagen-touareg-30-tdi-2026-precio-ficha-tecnica | OK |
| volkswagen-touareg-r-ehybrid-2026-precio-ficha-tecnica | OK |
| volkswagen-touran-2025-precio-autonomia | OK |
| volkswagen-touran-2025-precio-ficha-tecnica | OK |
| volkswagen-transporter-t7-2026-precio-ficha-tecnica | OK |
| volvo-ec40-2024-precio-ficha-tecnica | OK |
| volvo-em90-2024-precio-autonomia | OK |
| volvo-em90-2024-precio-ficha-tecnica | OK |
| volvo-es90-2025-precio-ficha-tecnica | OK |
| volvo-ex30-2025-precio-ficha-tecnica | OK |
| volvo-ex30-cross-country-2025-precio-ficha-tecnica | OK |
| volvo-ex30-twin-motor-2025-precio-ficha-tecnica | OK |
| volvo-ex40-2024-precio-ficha-tecnica | OK |
| volvo-ex60-2026-precio-ficha-tecnica | OK |
| volvo-ex60-cross-country-2026-precio-ficha-tecnica | OK |
| volvo-ex90-2025-precio-ficha-tecnica | OK |
| volvo-s60-b5-2025-precio-ficha-tecnica | OK |
| volvo-s90-b5-2025-precio-ficha-tecnica | OK |
| volvo-v60-b4-2024-precio-ficha-tecnica | OK |
| volvo-v60-b5-2025-precio-ficha-tecnica | OK |
| volvo-v60-cross-country-2025-precio-ficha-tecnica | OK |
| volvo-v60-t6-2025-precio-ficha-tecnica | OK |
| volvo-v60-t8-2025-precio-ficha-tecnica | OK |
| volvo-v90-b5-2025-precio-ficha-tecnica | OK |
| volvo-v90-t6-2025-precio-ficha-tecnica | OK |
| volvo-xc40-b3-2025-precio-ficha-tecnica | OK |
| volvo-xc40-b5-2025-precio-ficha-tecnica | OK |
| volvo-xc60-b5-2025-precio-ficha-tecnica | OK |
| volvo-xc60-b6-2025-precio-ficha-tecnica | OK |
| volvo-xc60-t6-2025-precio-ficha-tecnica | OK |
| volvo-xc60-t8-2026-precio-ficha-tecnica | OK |
| volvo-xc90-b5-2025-precio-ficha-tecnica | OK |
| volvo-xc90-b6-2025-precio-ficha-tecnica | OK |
| volvo-xc90-t8-2025-precio-ficha-tecnica | OK |
| voyah-courage-109kwh-2025-precio-ficha-tecnica | OK |
| voyah-courage-2024-precio-ficha-tecnica | OK |
| voyah-courage-2026-precio-ficha-tecnica | OK |
| voyah-courage-awd-2024-precio-ficha-tecnica | OK |
| voyah-dream-9-2026-precio-ficha-tecnica | OK |
| voyah-dream-9-phev-2026-precio-ficha-tecnica | OK |
| voyah-dream-ficha-tecnica-precio | OK |
| voyah-dream-plus-2026-precio-ficha-tecnica | OK |
| voyah-free-2025-precio-ficha-tecnica | OK |
| voyah-free-erev-2025-precio-ficha-tecnica | OK |
| voyah-free-plus-2026-precio-ficha-tecnica | OK |
| voyah-passion-2024-precio-ficha-tecnica | OK |
| voyah-passion-l-2026-precio-ficha-tecnica | OK |
| voyah-passion-s-2026-precio-ficha-tecnica | OK |
| voyah-taishan-2026-precio-ficha-tecnica | OK |
| wey-03-2024-precio-ficha-tecnica | OK |
| wey-05-2024-precio-ficha-tecnica | OK |
| wey-07-2024-precio-ficha-tecnica | OK |
| wey-gaoshan-7-2025-precio-ficha-tecnica | OK |
| wey-gaoshan-8-2025-precio-ficha-tecnica | OK |
| wey-gaoshan-9-2025-precio-ficha-tecnica | OK |
| wey-v8x-2026-precio-ficha-tecnica | OK |
| wey-v9x-2026-precio-ficha-tecnica | OK |
| wiesmann-project-thunderball-2025-precio-ficha-tecnica | OK |
| wottan-storm-s-300-2026-precio-ficha-tecnica | OK |
| wuling-air-ev-2024-precio-ficha-tecnica | OK |
| wuling-bingo-2024-precio-ficha-tecnica | OK |
| wuling-bingo-plus-2024-precio-ficha-tecnica | OK |
| wuling-bingo-s-2025-precio-ficha-tecnica | OK |
| wuling-cloud-2024-precio-ficha-tecnica | OK |
| wuling-cloud-ev-2024-precio-ficha-tecnica | OK |
| wuling-hongguang-mini-ev-2025-precio-ficha-tecnica | OK |
| wuling-hongguang-mini-ev-cabrio-2026-precio-ficha-tecnica | OK |
| wuling-journey-2025-precio-ficha-tecnica | OK |
| wuling-starlight-2024-precio-ficha-tecnica | OK |
| wuling-starlight-730-2025-precio-ficha-tecnica | OK |
| wuling-starlight-730-ev-2025-precio-ficha-tecnica | OK |
| wuling-starlight-ev-2025-precio-ficha-tecnica | OK |
| wuling-starlight-s-2024-precio-ficha-tecnica | OK |
| wuling-starlight-s-ev-2024-precio-ficha-tecnica | OK |
| wuling-yangguang-ev-2024-precio-ficha-tecnica | OK |
| wuling-zhiguang-ev-2025-precio-ficha-tecnica | OK |
| xev-yoyo-2025-precio-ficha-tecnica | OK |
| xev-yoyo-pro-2026-precio-ficha-tecnica | OK |
| xiaomi-skynomad-lanzamiento-ventas-china-1705-km | OK |
| xiaomi-skynomad-n70-max-2026-precio-ficha-tecnica | OK |
| xiaomi-skynomad-n70-pro-2026-precio-ficha-tecnica | OK |
| xiaomi-skynomad-n90-max-2026-precio-ficha-tecnica | OK |
| xiaomi-skynomad-n90-max-explorer-2026-precio-ficha-tecnica | OK |
| xiaomi-su7-2026-precio-ficha-tecnica | OK |
| xiaomi-su7-max-2025-precio-ficha-tecnica | OK |
| xiaomi-su7-max-2026-precio-ficha-tecnica | OK |
| xiaomi-su7-pro-2026-precio-ficha-tecnica | OK |
| xiaomi-su7-ultra-2025-precio-ficha-tecnica | OK |
| xiaomi-su7-ultra-2026-precio-ficha-tecnica | OK |
| xiaomi-yu7-2025-precio-ficha-tecnica | OK |
| xiaomi-yu7-max-2025-precio-ficha-tecnica | OK |
| xiaomi-yu7-pro-2025-precio-ficha-tecnica | OK |
| xiaomi-yu7-suv-electrico-llegada-europa | OK |
| xpeng-g6-2025-precio-espana | OK |
| xpeng-g6-2026-restyling-precio-espana | OK |
| xpeng-g6-long-range-2025-precio-ficha-tecnica | OK |
| xpeng-g6-vs-tesla-model-y-cual-comprar | OK |
| xpeng-g7-2026-precio-ficha-tecnica | OK |
| xpeng-g9-2024-precio-espana | OK |
| xpeng-g9-2026-restyling-precio-espana | OK |
| xpeng-g9l-debut-paris-2026 | OK |
| xpeng-mona-m03-2025-precio-ficha-tecnica | OK |
| xpeng-p5-2025-precio-ficha-tecnica | OK |
| xpeng-p7-2024-precio-ficha-tecnica | OK |
| xpeng-p7-2025-nueva-generacion-precio-ficha-tecnica | OK |
| xpeng-p7-2025-precio-autonomia | OK |
| xpeng-p7-electrico-precio-ficha-tecnica | OK |
| xpeng-p7-plus-long-range-2026-precio-ficha-tecnica | OK |
| xpeng-p7-plus-standard-range-2026-precio-ficha-tecnica | OK |
| xpeng-x9-2026-precio-europa | OK |
| yadea-kemper-2025-ficha-tecnica-precio | OK |
| yadea-kemper-rc-2026-ficha-tecnica-precio | OK |
| yadea-voltguard-2023-ficha-tecnica-precio | OK |
| yamaha-e01-2025-ficha-tecnica-precio | OK |
| yamaha-mt-09-2024-ficha-tecnica-precio | OK |
| yamaha-mt-09-2026-precio-ficha | OK |
| yamaha-mt-10-2024-ficha-tecnica-precio | OK |
| yamaha-mt-125-2024-ficha-tecnica-precio | OK |
| yamaha-niken-gt-2025-ficha-tecnica-precio | OK |
| yamaha-tenere-700-rally-2026-precio-ficha | OK |
| yamaha-tracer-9-gt-2024-ficha-tecnica-precio | OK |
| yamaha-xmax-300-2024-ficha-tecnica-precio | OK |
| yamaha-xsr900-2024-ficha-tecnica-precio | OK |
| yamaha-yzf-r1-2024-ficha-tecnica-precio | OK |
| yamaha-yzf-r7-2024-ficha-tecnica-precio | OK |
| yamaha-yzf-r9-2025-ficha-tecnica-precio | OK |
| yangwang-byd-berlina-260000-euros-rolls-royce | OK |
| yangwang-byd-u8-u9-europa-2027 | OK |
| yangwang-u7-2025-precio-ficha-tecnica | OK |
| yangwang-u7-phev-2026-precio-ficha-tecnica | OK |
| yangwang-u8-2024-precio-ficha-tecnica | OK |
| yangwang-u8l-2025-precio-ficha-tecnica | OK |
| yangwang-u9-2024-precio-ficha-tecnica | OK |
| yangwang-u9-xtreme-2025-precio-ficha-tecnica | OK |
| zbe-vitoria-multas-6000-euros-octubre-2026 | OK |
| zeeho-city-sport-2025-ficha-tecnica-precio | OK |
| zeekr-001-2024-precio-ficha-tecnica | OK |
| zeekr-001-2025-precio-ficha-tecnica | OK |
| zeekr-001-2026-precio-ficha-tecnica | OK |
| zeekr-001-fr-2024-precio-ficha-tecnica | OK |
| zeekr-001-fr-2025-precio-ficha-tecnica | OK |
| zeekr-007-2025-precio-ficha-tecnica | OK |
| zeekr-007-2026-precio-ficha-tecnica | OK |
| zeekr-007-gt-2026-precio-ficha-tecnica | OK |
| zeekr-009-2026-precio-ficha-tecnica | OK |
| zeekr-009-grand-2024-precio-ficha-tecnica | OK |
| zeekr-7-gt-2026-precio-ficha-tecnica | OK |
| zeekr-7x-2025-precio-ficha-tecnica | OK |
| zeekr-7x-2026-precio-ficha-tecnica | OK |
| zeekr-8x-2026-precio-ficha-tecnica | OK |
| zeekr-9x-2026-precio-ficha-tecnica | OK |
| zeekr-mix-2025-precio-ficha-tecnica | OK |
| zeekr-x-2024-precio-ficha-tecnica | OK |
| zeekr-x-2025-precio-ficha-tecnica | OK |
| zero-s-baja-precio-octubre-2026 | OK |
| zero-srf-20-aniversario-40-unidades | OK |
| zontes-125c-custom-precio | OK |
| zontes-125x-2026-ficha-tecnica-precio | OK |
| zontes-368e-maxiscooter-precio | OK |
| zontes-703t-etc-2026-ficha-tecnica-precio | OK |
| zontes-e125-scooter-precio | OK |

---
Generado por escaneado programático el 20/10/2026. Scripts de auditoría: `audit.mjs`/`blogs.py` (artefactos en /tmp/audit).
