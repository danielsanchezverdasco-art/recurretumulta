# Revisión estricta de la rama `completar-fichas`, lote 1

Fecha: 17/10/2026. Revisión en un clon aparte (`/workspace/review/rtm`), mirando como lo haría Google. No he publicado nada, no he tocado `main` ni Netlify y no he cambiado nada de la rama.
Diferencia revisada: `origin/main...origin/completar-fichas` (base `8c90b5b`, 9 commits, último `55d1e3c`).

## 1. Alcance del diff
- **26 archivos tocados, todos `src/lib/comparador-coches-*.ts`**, con 1.629 líneas añadidas y 660 quitadas. No toca App.tsx, rutas, componentes, `.env`, `_redirects` ni ningún archivo fuera de los datos. **No hay bloqueos de alcance.**
- **Fichas cambiadas de verdad: 90, no 98.** Las 90 están en `docs/paginas-a-completar.txt`.
  - `hyundai-elantra-n-2024` (y `tucson-phev-2026` con ese nombre) aparecen en los commits pero no cambian. Se cambian sin anunciarlo `bmw-x1-m35i-2025`, `bmw-ix-xdrive40-2025`, `bmw-x6-m-2025` y `hyundai-tucson-hibrido-enchufable-2026`.
  - Hay 3 slugs con 301 a otra ficha (`cupra-terramar-vz-ehybrid-272-2025…`, `hyundai-i10-2026-precio…` y `toyota-urban-cruiser-2025…`). Lo editado en ellos no se ve en la web. **Es un fallo de nuestra lista** y hay que quitarlos de `paginas-a-completar.txt`.
- **No hay ni una foto nueva**: el diff no trae ningún archivo de media. Tampoco hay **texto nuevo**: no cambian pros, contras, opiniones ni análisis. Solo se añaden cifras, `fuenteUrl`/`fuenteNombre`, `euroncap` y `planMantenimiento`.

## 2. Build
- `gen-data-loaders`: OK (0 slugs huérfanos). `tsc -b`: **OK (0 errores)**. `vite build` (config aparte, sin `copyPublicDir`, salida a `/workspace/review/dist-review`): **OK en 2,5 s**. No he usado `build:full`.

## 3. Comprobaciones
- **Campos clave** (precio, CV, par, 0-100, vel. máx., medidas, peso, maletero, plazas, etiqueta, consumo y autonomía/batería según el tipo): **51 de 90 completas**, 18 con 1 vacío, 10 con 2 y 11 con 3 o más. El que más falta es el peso (23), luego el maletero (15). En las fichas no se ve ningún «—»: los campos vacíos son `null`.
- **Fuentes**: las 90 tienen `fuenteUrl`. **25 no valen**: portadas genéricas, anuncios de ocasión, PDF de concesionario, páginas de búsqueda, Scribd, exportadores chinos, otra versión o año, o noticias de «no se vende en España».
- **20 fuentes comprobadas con WebFetch** (2 no cargaron: coches.net bloquea y tufichatecnica dio 502). Coinciden bien X6 M, León VZ 325 (salvo medidas y peso), BMW i3, Sealion 05 EV, Prius y Dacia (salvo el par). No coinciden o tienen datos inventados o calculados: Xia, Seal 05 DM-i, Han L, Ioniq 3, Ioniq 6, ID. Tiguan, Tayron, Raval Plus/VZ, RAV4 e i30.
- **Datos calculados (prohibido)**: E 220 d (autonomía 1.400 km = depósito × consumo), bZ7 (consumo = batería / autonomía) y Xia (CV del motor térmico + CV del eléctrico sumados).
- **Aproximados**: 27 fichas usan `aprox`, sobre todo para precios chinos convertidos. Bien. Pero hay cifras con «≈» o «desde, con ayudas» en la fuente que se meten como exactas (Tayron 0-100, ID. Tiguan precio, Raval VZ autonomía).
- **Euro NCAP**: 31 fichas ponen estrellas sin URL de euroncap.com. Proace Max «5★» es casi seguro un error.
- **Fotos**: todos los archivos existen y son webp, sin duplicados exactos entre modelos (md5). Pero ninguna ficha cumple «portada + ≥3 de galería reales y nuevas»: tienen 2-4 fotos únicas y la galería incluye la imagen `-hero` hecha con IA.
- **Portadas (`imagenOficial`) revisadas a ojo: las 90 en miniatura y 13 ampliadas.** 26 portadas no son el modelo o son de otra generación: las 18 Cupra (render IA, no son León/Formentor/Terramar/Raval), iX3, GLA 250 e, Tiguan (2.ª gen.), X3 (G01), Kona (1.ª gen.), i30 (1.ª gen. 2007), Han L (es el Han antiguo) y Tayron (dudosa). Otras 4 tienen mala calidad.
- **Texto ≥800 palabras propias**: la rama añade **0 palabras**. En la página en vivo, contando todo el `<main>` (tablas y plantilla incluidas), salen 518–924 palabras, y solo 10 de 90 llegan a 800. Como referencia, el Supra da 712 con la misma medida. **Ninguna cumple.**

## 4. Tabla
Veredicto: **OK** = publicable · **arreglable** = datos casi bien, falta texto, fotos o 1-2 campos · **rechazar** = datos mal, fuente que no vale, portada de otro modelo, ≥3 vacíos o URL con redirección.

| slug | veredicto | problemas |
|---|---|---|
| hyundai-ioniq-3-2026-precio-autonomia | rechazar | precio 29.995 € frente a 39.390 € en España (solo N Line); autonomía 497 km frente a 496/456 km; consumo 14,1 no está en la fuente; 2 fotos únicas, ninguna nueva; 924 palabras en la página, 0 de texto nuevo |
| bmw-serie-3-320d-2026-precio-ficha-tecnica | rechazar | fuenteUrl km77 genérica (listado Touring, no 320d berlina); 3 fotos únicas, ninguna nueva; 763 palabras en la página, 0 de texto nuevo |
| bmw-ix3-40-2026-precio-ficha-tecnica | rechazar | fuenteUrl = portada genérica press.bmwgroup.com; portada = render genérico, no es el iX3 Neue Klasse; 3 fotos únicas, ninguna nueva; 709 palabras en la página, 0 de texto nuevo |
| byd-tang-l-2026-precio-ficha-tecnica | rechazar | vacíos: maleteroL; fuenteUrl = web de exportador (auto-in-china); 2 fotos únicas, ninguna nueva; 895 palabras en la página, 0 de texto nuevo |
| cupra-raval-2026-precio-ficha-tecnica | rechazar | par 267 Nm, 0-100 11 s y 160 km/h no están en la fuente citada (factsheet solo da datos del VZ); portada NO es el modelo (render IA genérico «estilo Cupra»); 4 fotos únicas, ninguna nueva; 766 palabras en la página, 0 de texto nuevo |
| cupra-leon-15-tsi-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 704 palabras en la página, 0 de texto nuevo |
| cupra-leon-ehybrid-204-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 702 palabras en la página, 0 de texto nuevo |
| cupra-leon-vz-300-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 688 palabras en la página, 0 de texto nuevo |
| cupra-leon-vz-325-2025-precio-ficha-tecnica | rechazar | vacíos: pesoKg; su propia fuente da 4.398×1.444 mm y 1.432 kg; la ficha tiene 4.368×1.467 y peso vacío; portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 687 palabras en la página, 0 de texto nuevo |
| cupra-leon-sportstourer-ehybrid-204-2025-precio-ficha-tecnica | rechazar | fuenteUrl km77 genérica de gama; portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 702 palabras en la página, 0 de texto nuevo |
| cupra-leon-sportstourer-vz-333-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 695 palabras en la página, 0 de texto nuevo |
| cupra-formentor-15-etsi-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 669 palabras en la página, 0 de texto nuevo |
| cupra-formentor-ehybrid-204-2025-precio-ficha-tecnica | rechazar | fuenteUrl = PDF anónimo en storage.googleapis (flipcar); portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 688 palabras en la página, 0 de texto nuevo |
| cupra-formentor-vz-ehybrid-272-2025-precio-ficha-tecnica | rechazar | fuenteUrl = anuncio de coche de ocasión (movento); portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 703 palabras en la página, 0 de texto nuevo |
| cupra-formentor-vz-265-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 679 palabras en la página, 0 de texto nuevo |
| cupra-formentor-vz-333-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 688 palabras en la página, 0 de texto nuevo |
| cupra-terramar-ehybrid-204-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 700 palabras en la página, 0 de texto nuevo |
| cupra-terramar-vz-ehybrid-272-2025-precio-ficha-tecnica | rechazar | URL con 301 a /coches/cupra-terramar-vz-ehybrid-2025-precio-ficha-tecnica/: el cambio no se ve, editar la ficha canónica; fuenteUrl = página genérica cupra.com; portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 672 palabras en la página, 0 de texto nuevo |
| cupra-terramar-vz-265-2025-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 2 fotos únicas, ninguna nueva; 683 palabras en la página, 0 de texto nuevo |
| cupra-raval-plus-2026-precio-ficha-tecnica | rechazar | autonomía 328 km no cuadra con su fuente (≈300 km); portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 671 palabras en la página, 0 de texto nuevo |
| cupra-raval-endurance-2026-precio-ficha-tecnica | rechazar | portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 688 palabras en la página, 0 de texto nuevo |
| cupra-raval-vz-226-2026-precio-ficha-tecnica | rechazar | autonomía 387 km frente a «alrededor de 400 km» de la fuente, sin marcar como aproximada; portada NO es el modelo (render IA genérico «estilo Cupra»); 3 fotos únicas, ninguna nueva; 680 palabras en la página, 0 de texto nuevo |
| dacia-sandero-hybrid-155-2026-precio-ficha-tecnica | arreglable | vacíos: pesoKg; par 170 Nm no está en la fuente citada; 3 fotos únicas, ninguna nueva; 789 palabras en la página, 0 de texto nuevo |
| dacia-sandero-stepway-hybrid-155-2026-precio-ficha-tecnica | arreglable | vacíos: pesoKg; par 170 Nm no está en la fuente citada; 3 fotos únicas, ninguna nueva; 807 palabras en la página, 0 de texto nuevo |
| toyota-rav4-gr-sport-phev-2026-precio-ficha-tecnica | arreglable | vacíos: pesoKg, consumo; par 227 Nm (parece solo del motor térmico), 5,8 s y 180 km/h no están en la fuente; 2 fotos únicas, ninguna nueva; 671 palabras en la página, 0 de texto nuevo |
| volkswagen-golf-variant-r-line-20-tsi-2026-precio-ficha-tecnica | arreglable | vacíos: altoMm; 2 fotos únicas, ninguna nueva; 781 palabras en la página, 0 de texto nuevo |
| volkswagen-t-cross-15-tsi-2026-precio-ficha-tecnica | rechazar | fuenteUrl = anuncio de ocasión (movento); Euro NCAP 3★ 2025 sin URL oficial, verificar; 2 fotos únicas, ninguna nueva; 757 palabras en la página, 0 de texto nuevo |
| volkswagen-tayron-20-tsi-2026-precio-ficha-tecnica | rechazar | vacíos: pesoKg; fuente = noticia 02/2025 de motores (precio de la fuente 50.770 €, ficha 53.380 €); 0-100 «menos de 7,5 s» guardado como 7,5 exacto; portada dudosa (parece un render IA); 2 fotos únicas, ninguna nueva; 762 palabras en la página, 0 de texto nuevo |
| byd-sealion-05-2025-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 630 palabras en la página, 0 de texto nuevo |
| volkswagen-tiguan-15-etsi-2026-precio-ficha-tecnica | rechazar | portada = Tiguan 2.ª generación (antiguo); 2 fotos únicas, ninguna nueva; 666 palabras en la página, 0 de texto nuevo |
| volkswagen-golf-gti-clubsport-2026-precio-ficha-tecnica | arreglable | 2 fotos únicas, ninguna nueva; 688 palabras en la página, 0 de texto nuevo |
| bmw-x3-2025-precio-ficha-tecnica | rechazar | portada = X3 G01 (generación anterior); 2 fotos únicas, ninguna nueva; 685 palabras en la página, 0 de texto nuevo |
| bmw-m440i-xdrive-2025-precio-ficha-tecnica | arreglable | 2 fotos únicas, ninguna nueva; 624 palabras en la página, 0 de texto nuevo |
| bmw-serie-3-320i-2026-precio-ficha-tecnica | arreglable | 2 fotos únicas, ninguna nueva; 631 palabras en la página, 0 de texto nuevo |
| mercedes-gla-250-e-2025-precio-ficha-tecnica | rechazar | vacíos: precioDesde; portada = render genérico, no es el GLA; 2 fotos únicas, ninguna nueva; 663 palabras en la página, 0 de texto nuevo |
| mercedes-gle-450-e-2026-precio-ficha-tecnica | arreglable | vacíos: parNm, anchoMm; 2 fotos únicas, ninguna nueva; 623 palabras en la página, 0 de texto nuevo |
| hyundai-tucson-hibrido-enchufable-2026-precio-ficha-tecnica | rechazar | fuenteUrl = comparador auto-data vacío (compare?carId1=…); 3 fotos únicas, ninguna nueva; 762 palabras en la página, 0 de texto nuevo |
| hyundai-staria-hibrido-2026-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 716 palabras en la página, 0 de texto nuevo |
| hyundai-kona-gasolina-2025-precio-ficha-tecnica | rechazar | vacíos: pesoKg; portada = Kona 1.ª generación; 3 fotos únicas, ninguna nueva; 736 palabras en la página, 0 de texto nuevo |
| hyundai-i30-10-tgdi-2026-precio-ficha-tecnica | rechazar | alto 1.455 frente a 1.465 mm; CO2 123 g/km incoherente con 5,9 l/100 km (≈134); CO2 no está en la fuente; portada = i30 1.ª generación (2007-2011); 3 fotos únicas, ninguna nueva; 713 palabras en la página, 0 de texto nuevo |
| hyundai-ioniq-6-2025-precio-ficha-tecnica | rechazar | vacíos: pesoKg; potencia 151 CV (modelo antiguo) mezclada con datos del restyling de 170 CV (8,3 s, 521 km, 13,4 kWh); 3 fotos únicas, ninguna nueva; 644 palabras en la página, 0 de texto nuevo |
| hyundai-kona-hibrido-2025-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 715 palabras en la página, 0 de texto nuevo |
| hyundai-staria-diesel-2025-precio-ficha-tecnica | rechazar | vacíos: pesoKg, maleteroL; fuenteUrl = PDF de concesionario; 3 fotos únicas, ninguna nueva; 637 palabras en la página, 0 de texto nuevo |
| hyundai-tucson-16-tgdi-150-2025-precio-ficha-tecnica | arreglable | vacíos: precioDesde, pesoKg; 3 fotos únicas, ninguna nueva; 665 palabras en la página, 0 de texto nuevo |
| byd-seal-06-ev-2026-precio-ficha-tecnica | arreglable | vacíos: parNm; 3 fotos únicas, ninguna nueva; 816 palabras en la página, 0 de texto nuevo |
| byd-seal-08-2026-precio-ficha-tecnica | rechazar | vacíos: velocidadMax, maleteroL, bateriaKwh; 3 fotos únicas, ninguna nueva; 807 palabras en la página, 0 de texto nuevo |
| byd-song-l-dm-i-2025-precio-ficha-tecnica | arreglable | vacíos: maleteroL; 3 fotos únicas, ninguna nueva; 834 palabras en la página, 0 de texto nuevo |
| byd-seal-05-dm-i-2025-precio-ficha-tecnica | rechazar | precio 28.000 € frente a 79.800 yuanes (≈9.600 €) de la fuente; 0-100 8,3 s frente a 7,9 s; maletero 522 l frente a 508 l; 3 fotos únicas, ninguna nueva; 806 palabras en la página, 0 de texto nuevo |
| byd-qin-l-ev-2025-precio-ficha-tecnica | arreglable | vacíos: ceroCien; 3 fotos únicas, ninguna nueva; 814 palabras en la página, 0 de texto nuevo |
| byd-sealion-8-2026-precio-ficha-tecnica | rechazar | fuente = mercado australiano; 3 fotos únicas, ninguna nueva; 794 palabras en la página, 0 de texto nuevo |
| byd-xia-2025-precio-ficha-tecnica | rechazar | vacíos: pesoKg; 428 CV = 156 + 272 CV sumados (CALCULADO, no es la potencia del sistema); consumo 0,93 no está en la fuente (0,8/2,1); peso vacío aunque la fuente da 2.470/2.650 kg; 3 fotos únicas, ninguna nueva; 770 palabras en la página, 0 de texto nuevo |
| volkswagen-arteon-2025-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 746 palabras en la página, 0 de texto nuevo |
| volkswagen-touran-2025-precio-ficha-tecnica | arreglable | portada con marca de agua/logo de terceros; 3 fotos únicas, ninguna nueva; 717 palabras en la página, 0 de texto nuevo |
| bmw-serie-1-2025-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 741 palabras en la página, 0 de texto nuevo |
| bmw-serie-2-gran-coupe-2025-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 753 palabras en la página, 0 de texto nuevo |
| bmw-serie-3-2025-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 723 palabras en la página, 0 de texto nuevo |
| mercedes-amg-one-2025-precio-ficha-tecnica | rechazar | vacíos: parNm, maleteroL, bateriaKwh; 3 fotos únicas, ninguna nueva; 782 palabras en la página, 0 de texto nuevo |
| toyota-bz7-2026-precio-ficha-tecnica | rechazar | vacíos: parNm, ceroCien, pesoKg, maleteroL; fuente = noticia de China; consumo 12,4 kWh = batería/autonomía (CALCULADO); 3 fotos únicas, ninguna nueva; 773 palabras en la página, 0 de texto nuevo |
| hyundai-palisade-2026-precio-ficha-tecnica | rechazar | vacíos: pesoKg, maleteroL; fuente = prueba de mercado australiano; 3 fotos únicas, ninguna nueva; 747 palabras en la página, 0 de texto nuevo |
| volkswagen-caddy-california-2025 | arreglable | vacíos: ceroCien, maleteroL; Euro NCAP 4★ 2025 sin URL oficial, verificar; 3 fotos únicas, ninguna nueva; 795 palabras en la página, 0 de texto nuevo |
| volkswagen-grand-california-2026 | rechazar | vacíos: ceroCien, maleteroL, consumo; fuenteUrl = documento de Scribd; pesoKg 3.500 = MMA, no peso en vacío; 3 fotos únicas, ninguna nueva; 779 palabras en la página, 0 de texto nuevo |
| mercedes-marco-polo-2025 | arreglable | 3 fotos únicas, ninguna nueva; 758 palabras en la página, 0 de texto nuevo |
| mercedes-vito-2025 | rechazar | vacíos: ceroCien, velocidadMax, pesoKg, maleteroL; 3 fotos únicas, ninguna nueva; 757 palabras en la página, 0 de texto nuevo |
| mercedes-citan-tourer-2025 | arreglable | 3 fotos únicas, ninguna nueva; 753 palabras en la página, 0 de texto nuevo |
| mercedes-sprinter-2025 | rechazar | vacíos: ceroCien, maleteroL; pesoKg 3.500 = MMA, no peso en vacío; portada con bandas negras y recortada; 3 fotos únicas, ninguna nueva; 733 palabras en la página, 0 de texto nuevo |
| volkswagen-crafter-2025 | rechazar | vacíos: ceroCien, maleteroL, consumo; fuenteUrl = página de resultados de búsqueda (truckscout24); pesoKg 3.500 = MMA, no peso en vacío; 3 fotos únicas, ninguna nueva; 757 palabras en la página, 0 de texto nuevo |
| toyota-corolla-cross-2026 | arreglable | vacíos: parNm, pesoKg; 3 fotos únicas, ninguna nueva; 834 palabras en la página, 0 de texto nuevo |
| byd-han-l-2025-precio-ficha-tecnica | rechazar | vacíos: maleteroL; vel. máx. 270 km/h frente a 305 km/h de la fuente; 860 Nm no aparece en la fuente; portada = BYD Han antiguo (lleva el logo «BYD HAN»), no es el Han L; 3 fotos únicas, ninguna nueva; 698 palabras en la página, 0 de texto nuevo |
| bmw-i3-neue-klasse-2026-precio-ficha-tecnica | arreglable | vacíos: pesoKg; 3 fotos únicas, ninguna nueva; 635 palabras en la página, 0 de texto nuevo |
| toyota-bz3x-2026-precio-ficha-tecnica | rechazar | vacíos: parNm, ceroCien, pesoKg, maleteroL; fuente = noticia de ventas en China; 3 fotos únicas, ninguna nueva; 639 palabras en la página, 0 de texto nuevo |
| byd-song-plus-dm-i-2025-precio-ficha-tecnica | rechazar | fuenteUrl = web de exportador (gzdcars); 3 fotos únicas, ninguna nueva; 791 palabras en la página, 0 de texto nuevo |
| byd-qin-plus-dm-i-2025-precio-ficha-tecnica | rechazar | fuenteUrl = web de exportador; 3 fotos únicas, ninguna nueva; 776 palabras en la página, 0 de texto nuevo |
| mercedes-benz-clase-e-220-d-precio-ficha-tecnica | rechazar | autonomía 1.400 km en un diésel = depósito × consumo (CALCULADO, prohibido); 3 fotos únicas, ninguna nueva; 781 palabras en la página, 0 de texto nuevo |
| mercedes-benz-gla-200-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 753 palabras en la página, 0 de texto nuevo |
| mercedes-benz-glb-200-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 734 palabras en la página, 0 de texto nuevo |
| mercedes-benz-glc-200-precio-ficha-tecnica | arreglable | 3 fotos únicas, ninguna nueva; 743 palabras en la página, 0 de texto nuevo |
| byd-sealion-05-dm-i-2025-precio-ficha-tecnica | rechazar | vacíos: parNm, velocidadMax, pesoKg, etiquetaDgt; sin etiqueta DGT; 5 campos aproximados; 3 fotos únicas, ninguna nueva; 729 palabras en la página, 0 de texto nuevo |
| hyundai-i10-2026-precio-ficha-tecnica | rechazar | URL con 301 a /coches/hyundai-i10-2026/: el cambio no se ve, editar la ficha canónica; vacíos: pesoKg; 3 fotos únicas, ninguna nueva; 888 palabras en la página, 0 de texto nuevo |
| hyundai-tucson-n-line-2026-precio-ficha-tecnica | rechazar | fuenteUrl = PDF de concesionario (driveris); 3 fotos únicas, ninguna nueva; 594 palabras en la página, 0 de texto nuevo |
| hyundai-i20-n-line-2026-precio-ficha-tecnica | rechazar | vacíos: pesoKg; fuenteUrl = anuncio de concesionario (gjautomotive); portada con los bordes estirados; 3 fotos únicas, ninguna nueva; 625 palabras en la página, 0 de texto nuevo |
| hyundai-i30-n-2026-precio-ficha-tecnica | rechazar | vacíos: precioDesde, pesoKg, consumo; fuenteUrl = ficha del i30 N 2020 (otra versión/año); 3 fotos únicas, ninguna nueva; 637 palabras en la página, 0 de texto nuevo |
| toyota-corolla-5p-140h-2026-precio-ficha-tecnica | arreglable | vacíos: anchoMm, altoMm; portada mala (coche diminuto con el fondo desenfocado); 2 fotos únicas, ninguna nueva; 650 palabras en la página, 0 de texto nuevo |
| bmw-x1-m35i-2025-precio-ficha-tecnica | arreglable | 2 fotos únicas, ninguna nueva; 749 palabras en la página, 0 de texto nuevo |
| bmw-serie-5-520i-2025-precio-ficha-tecnica | arreglable | 2 fotos únicas, ninguna nueva; 710 palabras en la página, 0 de texto nuevo |
| bmw-ix-xdrive40-2025 | arreglable | 2 fotos únicas, ninguna nueva; 537 palabras en la página, 0 de texto nuevo |
| bmw-x6-m-2025 | arreglable | 2 fotos únicas, ninguna nueva; 557 palabras en la página, 0 de texto nuevo |
| toyota-urban-cruiser-2025-precio-ficha-tecnica | rechazar | URL con 301 a /coches/toyota-urban-cruiser-2026-precio-ficha-tecnica/: el cambio no se ve, editar la ficha canónica; vacíos: pesoKg; fuente = noticia «no llegará a España» (precio 31.990 € es de Alemania); autonomía 344 km no aparece en la fuente; 3 fotos únicas, ninguna nueva; 679 palabras en la página, 0 de texto nuevo |
| toyota-proace-max-2025-precio-ficha-tecnica | arreglable | vacíos: ceroCien, maleteroL; Euro NCAP «5★ 2025» sin URL (Euro NCAP no da estrellas a furgones) → probablemente erróneo; 3 fotos únicas, ninguna nueva; 742 palabras en la página, 0 de texto nuevo |
| toyota-prius-phev-2025-precio-ficha-tecnica | rechazar | vacíos: precioDesde, parNm, pesoKg; fuente = noticia «Toyota no lo vende en España»; sin precio ES; 3 fotos únicas, ninguna nueva; 652 palabras en la página, 0 de texto nuevo |
| volkswagen-id-tiguan | rechazar | vacíos: parNm, ceroCien, velocidadMax, anchoMm, altoMm, pesoKg; fuente = noticia; el precio 32.400 € incluye financiación + ayudas y no va marcado; 3 fotos únicas, ninguna nueva; 788 palabras en la página, 0 de texto nuevo |

## 5. Resumen
- **Pasan (OK): 0 de 90.** Ninguna cumple las reglas: ninguna trae texto propio nuevo ni fotos nuevas, y las dos cosas eran obligatorias.
- **Arreglables: 34.** Los datos están bien o casi (0-2 vacíos y fuente válida). Solo les falta el texto de ≥800 palabras y las 3 fotos reales nuevas, y a veces 1-2 campos.
- **Rechazar: 56.** Motivos (una ficha puede tener varios): fuente que no vale (25), portada de otro modelo o generación (26), datos que contradicen la fuente o calculados (~16), ≥3 campos vacíos (11), URL con 301 (3).
- **Para sacar de noindex hoy: ninguna.** Como mejora parcial, se podrían aceptar las cifras de las 34 «arreglables», que son correctas y no empeoran nada, pero sin quitar el noindex.

## 6. Reglas para la otra IA (pásaselas tal cual)
1. **Una ficha no está «completa» sin TEXTO NUEVO**: mínimo 800 palabras propias en esa ficha (análisis, para quién es, pros y contras razonados, rivales con enlace, mantenimiento, Euro NCAP). Rellenar cifras no basta.
2. **Fotos obligatorias en el mismo commit**: portada + ≥3 de galería (exterior, interior, detalle) en webp, con nombre nuevo `/media/<slug>-<n>.webp`, subidas con `git add -f public/media/...`. Nunca un render IA ni la imagen `-hero`. Si la portada actual no es ese modelo, esa generación y ese año, cámbiala, y en el commit di de dónde sale cada foto.
3. **Mira la portada actual antes de nada**: las 18 Cupra, Han L, i30, Kona, Tiguan, X3, iX3 y GLA tienen la foto de otro coche o de otra generación.
4. **`fuenteUrl` = página de ESE modelo y versión** (web o prensa oficial de la marca, km77 o auto-data de esa versión exacta, coches.net de esa versión). Prohibido: portadas genéricas, anuncios de ocasión o de concesionario, PDF anónimos, Scribd, páginas de búsqueda, comparadores vacíos, exportadores, otro año o versión, y webs de otros países si hay dato en España.
5. **Toda cifra tiene que estar en la `fuenteUrl`** (o en una segunda fuente citada en `notas`). Si no está, `null`, o el dato de la versión anterior con el campo en `aprox`.
6. **Nunca calcular**: ni autonomía = depósito × consumo, ni consumo = batería / autonomía, ni sumar CV del motor térmico y del eléctrico. `pesoKg` es el peso en orden de marcha, nunca la MMA (3.500 kg).
7. **Precio**: el de tarifa en España sin ayudas ni financiación. Si solo hay precio de China u otro país, va convertido y en `aprox`. Si la fuente dice «menos de», «alrededor de» o «desde, con ayudas», el campo va en `aprox`.
8. **Euro NCAP**: estrellas solo con la URL de euroncap.com de ese modelo. Las furgonetas no tienen estrellas. Si no lo encuentras, `estrellas: null`.
9. **Antes de editar un slug**, comprueba que su URL responde 200 y no hace 301. Si redirige, edita la ficha de destino. Yo quito esos 3 slugs de la lista.
10. **En cada commit**, pon la lista exacta de slugs que cambian, sin anunciar ninguno que no cambie y sin cambiar ninguno sin anunciarlo, y por cada ficha qué campos son oficiales y cuáles aproximados.
11. **Lotes de 20-30 fichas completas** (texto + fotos + datos) mejor que 90 a medias.
