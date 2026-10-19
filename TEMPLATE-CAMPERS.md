# PLANTILLA CAMPERS — LEER ENTERO ANTES DE EMPEZAR

## Contexto
Furgonetas camper (MOTORIZADAS, no caravanas de remolque). Rama `niky-campers`.
Cada ficha usa el tipo `CocheComparador` con `tipo: "Camper"`, `categoria: "Camper".

## Reglas duras (veredicto Grok)
1. **CERO datos inventados.** Cada cifra con fuenteUrl del modelo exacto. Sin fuente → `null`.
2. **Fotos OFICIALES (prensa del fabricante)** del modelo exacto. MÍNIMO portada + 3, con al menos
   **2 INTERIORES + 1 EXTERIOR**. Crédito y URL exacta en los créditos. PROHIBIDO: concesionario,
   campa, rótulos, pegatinas, marcas de agua. Verificación visual obligatoria.
3. **Precio:** tarifa oficial España → `precioDesde`. Tarifa de otro país sólida → `precioDesde`
   con `aprox: ["precioDesde"]` + nota «precio de tarifa en <país>» en el blog. Sin fuente → `null`
   Y si es `null`: NINGUNA cifra de precio en ningún texto (pros, contras, blog, FAQ, excerpt, título).
4. **PROHIBIDO:** `costeMensual`, `cargaUtilKg` calculada (solo con fuente o `null`).
5. **Curiosidad:** campos `curiosidad` + `curiosidadFuente` en la ficha, y sección `## Curiosidad`
   en el blog con el dato + enlace a la fuente.
6. **NO TOCAR:** FichasTecnicas.tsx, App.tsx, shared-navbar.tsx, main, Netlify, data-loaders/*.ts,
   noindex.generated.json, titulos.csv. NO commitear ni pushear (solo escribe ficheros).

## Ficheros que CREAS
- `src/lib/comparador-campers-<marca>.ts` → `export const CAMPERS_<MARCA>: CocheComparador[]`
  (ej. `comparador-campers-volkswagen.ts`, `CAMPERS_VOLKSWAGEN`)
- `src/lib/blog-posts-campers-<marca>.ts` → `export const CAMPERS_POSTS_<MARCA>: BlogPost[]`
- Fotos en `public/media/`: `<slug>.webp` (portada exterior), `<slug>-2.webp` (exterior),
  `<slug>-interior.webp`, `<slug>-interior-2.webp` — WebP <300 KB, 1200×800.
- Créditos en `/tmp/creditos-campers-<marca>.md`: `| /media/fichero | URL exacta |`
- Descartados en `/tmp/descartados-campers-<marca>.md` si aplica.

## Slugs
- Ficha: `<marca>-<modelo>-2026-precio-ficha-tecnica` (ej. `volkswagen-grand-california-600-2026-precio-ficha-tecnica`)
- Blog: `<marca>-<modelo>-2026-analisis-opinion`
- `analisisSlug` de la ficha → slug del blog.
- Verifica que no existen en `src/lib/comparador-campers-*.ts` ya creados ni en main.

## Estructura de ficha (camper motorizada — USA los campos de motor)
```ts
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_VOLKSWAGEN: CocheComparador[] = [
  {
    id: "volkswagen-grand-california-600-2026-precio-ficha-tecnica",
    marca: "Volkswagen",
    modelo: "Grand California 600",
    tipo: "Camper",
    categoria: "Camper",
    precioDesde: 75000,            // número o null
    potenciaCv: 177,              // CV reales o null
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,           // o real si hay fuente
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",             // "C" | "ECO" | "Cero" o null (diésel = C)
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/<slug>.webp",
    imagenOficial: "/media/<slug>.webp",
    imagenInteriorOficial: "/media/<slug>-interior.webp",  // "" si no hay
    videoId: null,
    videoCanal: null,
    largoMm: 5986,                // o null
    anchoMm: 2042,                // o null
    altoMm: 2798,                 // o null (con techo)
    pesoKg: 2800,                 // tara/MRO o null
    mmaKg: 3500,                  // o null
    carnetNecesario: "B",         // "B" si MMA ≤3500
    cargaUtilKg: null,            // SOLO con fuente o null
    consumo: 8.5,                 // l/100km WLTP o null
    consumoUnidad: "l/100 km",    // o null
    plazas: 4,                    // plazas para DORMIR (indica también las de viaje en el texto)
    parNm: 410,                   // o null
    traccion: "Delantera",        // o null
    emisionesCo2: null,           // o real
    aprox: [],                    // ["precioDesde"] si es aprox
    pros: ["...", "...", "...", "...", "..."],
    contras: ["...", "...", "...", "...", "..."],
    opiniones: [],
    // SIN costeMensual
    galeria: [
      { src: "/media/<slug>-2.webp", alt: "...", ancho: 1200, alto: 800 },
      { src: "/media/<slug>.webp", alt: "...", ancho: 1200, alto: 800 },
      { src: "/media/<slug>-interior.webp", alt: "...", ancho: 1200, alto: 800 },
      { src: "/media/<slug>-interior-2.webp", alt: "...", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "<slug-blog>",
    planMantenimiento: {
      intervalo: "Según plan oficial <Marca>: revisión anual o por km",
      revisiones: [
        { nombre: "Mantenimiento anual",
          queSeCambia: "Aceite, filtros e inspección según plan de la marca",
          costeAproxEur: null },
      ],
      costeAnualAproxEur: null,
      fuente: "<Marca> (oficial)",
    },
    euroncap: null,  // la base (Crafter/Sprinter) puede tener datos; si los hay con fuente, úsalos
    curiosidad: "<dato curioso>",
    curiosidadFuente: "<fuente>",
    fuenteNombre: "<Marca> (oficial)",
    fuenteUrl: "https://<url-oficial>",
  },
];
```

## Blog (≥1.000 palabras)
Igual formato que el template de caravanas: `<img src=/media/...>` sin comillas en src,
`<a href=url>` sin comillas, tablas, `##` secciones, 5-6 FAQs (`###`), `## Curiosidad` con
dato + fuente enlazada, CTA al analizador, *Fuentes:* al final.
Title 50-60 car. (ej. "VW Grand California 600: precio, ficha y 4 plazas"), excerpt 130-155.
Si precioDesde es null: NINGUNA cifra de precio en el post.

## Fotos
Skill image-search (/opt/muse/skills/image-search/SKILL.md). Solo prensa oficial del MODELO
EXACTO. Verificación visual obligatoria. WebP <300 KB vía PIL:
python3 -c "from PIL import Image; im=Image.open('in.jpg').convert('RGB'); im.thumbnail((1200,800)); im.save('out.webp','WEBP',quality=80)"
