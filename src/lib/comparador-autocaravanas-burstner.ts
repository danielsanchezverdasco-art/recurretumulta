// Autocaravanas Bürstner — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: configurador oficial Bürstner (buerstner.com, precios
// "desde" oficiales) + datos técnicos vía red oficial. Precio de la 594
// orientativo (marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente. Hero e interior
// principal de prensa oficial Bürstner; la tres cuartos delantera y el detalle
// del salón son de concesionario (no prensa oficial).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_BURSTNER: CocheComparador[] = [
  {
    id: "burstner-lyseo-td-594-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Lyseo TD 594",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 85000,
    potenciaCv: 140,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen:
      "/media/burstner-lyseo-td-594-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/burstner-lyseo-td-594-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/burstner-lyseo-td-594-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2300,
    altoMm: 2950,
    pesoKg: 3009,
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 491,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "Perfilada compacta de 5,99 m: manejable en ciudad y en áreas pequeñas",
      "Cama abatible eléctrica + dinette convertible: 4 plazas sin camas fijas",
      "Doble suelo funcional Thermo-Floor con almacenaje accesible desde dentro",
      "Techo de GRP resistente al granizo y gran equipamiento de serie",
      "Fiat Ducato con opción de 180 CV y cambio automático",
    ],
    contras: [
      "Sin camas fijas: hay que montar la cama cada noche",
      "Precio orientativo alto para una perfilada de 6 metros",
      "Con 3.009 kg en vacío, la carga útil con 4 ocupantes es justa",
      "El baño es compacto, como en todas las perfiladas cortas",
      "Conviene confirmar taller oficial cercano: la red es más reducida que la de las marcas generalistas",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 600,
      costeMensualTotal: 450,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/burstner-lyseo-td-594-2026-2.webp",
        alt: "Bürstner Lyseo TD 594 en concesionario, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/burstner-lyseo-td-594-2026-interior-oficial.webp",
        alt: "Interior de la Bürstner Lyseo TD 594",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/burstner-lyseo-td-594-2026-interior-2.webp",
        alt: "Salón de la Bürstner Lyseo TD 594",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "burstner-lyseo-td-594-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km según plan Fiat Professional",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 380,
        },
        {
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 620,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Bürstner",
    },
    euroncap: null,
    fuenteNombre: "Bürstner (configurador oficial)",
    fuenteUrl: "https://www.buerstner.com/es/es/vista-general-modelos-configurador",
  },
  {
    id: "burstner-nexxo-van-t-569-2026-precio-ficha-tecnica",
    marca: "Bürstner",
    modelo: "Nexxo Van T 569",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 61980,
    potenciaCv: 140,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen:
      "/media/burstner-nexxo-van-t-569-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/burstner-nexxo-van-t-569-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/burstner-nexxo-van-t-569-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2200,
    altoMm: 2820,
    pesoKg: 2752,
    consumo: null,
    consumoUnidad: null,
    plazas: 3,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "5,99 m de perfilada compacta: la más manejable de Bürstner, ideal como primera autocaravana",
      "Precio base oficial de 61.980 €: de las perfiladas nuevas más asequibles del mercado",
      "Camas gemelas longitudinales de 200 x 132 cm: se duerme de verdad en 6 metros",
      "MMA de 3.500 kg y motor 2.2 de 140 CV: carnet B y mecánica probada",
      "Ancho de solo 2,20 m: entra y maniobra donde otras perfiladas no caben",
    ],
    contras: [
      "El nombre 'Van' engaña: es una perfilada, NO una camper",
      "Solo 2-3 plazas: el salón no da para una familia de 4",
      "El baño y la cocina son compactos: hay que asumir su tamaño",
      "El precio base alemán no incluye extras ni transporte a España",
      "Carga útil justa si se viaja a 3 con equipamiento completo",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 550,
      costeMensualTotal: 440,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/burstner-nexxo-van-t-569-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Bürstner Nexxo Van T 569, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/burstner-nexxo-van-t-569-2026-interior-oficial.webp",
        alt: "Interior del Bürstner Nexxo Van T 569, salón y cocina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/burstner-nexxo-van-t-569-2026-interior-oficial-2.webp",
        alt: "Cabina y cocina del Bürstner Nexxo Van T 569",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "burstner-nexxo-van-t-569-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Base Stellantis 2.2: revisión cada 2 años o 48.000 km según plan del fabricante",
      revisiones: [
        {
          nombre: "Revisión base (Fiat/Citroën)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Bürstner (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 550,
      fuente: "Plan de mantenimiento Stellantis + recomendaciones Bürstner",
    },
    euroncap: null,
    fuenteNombre: "Bürstner (precio base oficial vía prensa especializada)",
    fuenteUrl:
      "https://www.mobile.de/magazin/artikel/die-guenstigsten-wohnmobile",
  },
];
