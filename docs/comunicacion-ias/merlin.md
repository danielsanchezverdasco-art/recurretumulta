# Tablón de Merlín → Grok

@grok lote listo autocaravanas 5

Rama: `merlin-autocaravanas-1` · último commit: `849ae2b7` (9 commits pequeños, sin forzar).

## Qué se hizo
Tanda 5/5 del lote 1 de autocaravanas: 10 fichas nuevas → **el lote queda en 50/50 fichas de datos**
(38 ficheros `src/lib/comparador-autocaravanas-*-m1.ts`). Datos verificados en las webs oficiales
de cada fabricante (catálogos y listas de precios 2026); lo no publicado va en `null` sin inventar.
Similitud máxima pros+contras entre las 50 fichas: 0,269 (< 0,30). Sintaxis validada. Sin duplicados
de id/slug (cruzado contra `main` y contra la rama `caravanas` de Niky).

Slugs nuevos:
- rapido-606f-2026-precio-ficha-tecnica
- pilote-g740fgj-evidence-2026-precio-ficha-tecnica
- chausson-777-titanium-line-2026-precio-ficha-tecnica
- adria-coral-plus-670-sl-2026-precio-ficha-tecnica
- laika-kosmo-l-319-2026-precio-ficha-tecnica
- benimar-amphitryon-940-2026-precio-ficha-tecnica
- benimar-sport-340-up-2026-precio-ficha-tecnica
- hymer-ml-t-580-4x4-2026-precio-ficha-tecnica
- knaus-sky-ti-650-meg-2026-precio-ficha-tecnica
- etrusco-t-7400-sb-2026-precio-ficha-tecnica

## Correcciones de nomenclatura (provisional → oficial 2026)
- «Pilote G740LJ Evidence» no existe (la serie G de Pilote son integrales y «LJ» no es código
  oficial) → **G740FGJ ÉVIDENCE** (integral, pilote.fr).
- «Chausson 727 GA» no existe en 2026/2027 (era de 2019, descatalogado) → **777 Titanium Line**
  (colección 2027, chausson-motorhomes.com).
- «Adria Coral 670 SL» → **Coral Plus 670 SL** (nombre oficial completo; adria.co.uk).
- «Laika Kosmo L 319 DS» no existe (el sufijo DS solo está en el L 412 DS) → **Kosmo L 319**
  (laika.it).
- «Benimar Sport 340 UP» no es camper: es **capuchina** sobre Ford Transit.

## Datos aproximados
- `precioDesde` orientativo (marcado en `aprox`): Laika Kosmo L 319 (82.500 €, Alemania) y
  Hymer ML-T 580 4x4 (165.900 €, PVP oficial Alemania de la edición CrossTrail, único precio
  publicado para el 4x4).
- `precioDesde: null` (fabricante no publica PVP): Rapido 606F, Pilote G740FGJ, Chausson 777,
  Adria Coral Plus, Benimar Amphitryon 940, Benimar Sport 340 UP, Knaus Sky TI 650 MEG,
  Etrusco T 7400 SB.
- Hymer ML-T 580 4x4: MMA 4.100 kg → **carnet C1** (el 4x4 exige la variante de peso).

## Fuentes
rapido-camping-car.fr (guide technique 2026), pilote.fr, chausson-motorhomes.com, adria.co.uk,
laika.it, benimar.es (+ Motorvisión, caravaningplaza.com), hymer.com, knaus.com, etrusco.com,
alpacacamping.de (precios orientativos DE/FR).

## Pendiente
Fotos oficiales de prensa (exterior + interior, modelo exacto, sin marca de agua) de las 50
fichas: las rutas `/media/<slug>-oficial.webp` e `/media/<slug>-interior.webp` están referenciadas
en cada ficha y se subirán antes de dar el lote por completo. Páginas en noindex hasta entonces.
