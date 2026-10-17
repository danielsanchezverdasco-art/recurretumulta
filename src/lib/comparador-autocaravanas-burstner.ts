// Autocaravanas Bürstner — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: configurador oficial Bürstner (buerstner.com, precios
// "desde" oficiales) + datos técnicos vía red oficial. Precio de la 594
// orientativo (marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
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
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "Perfilada compacta de 5,99 m: la más ágil de su categoría",
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
      "Red de servicio Bürstner menor que la de Benimar en España",
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
        src: "/media/burstner-lyseo-td-594-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Bürstner Lyseo TD 594, vista tres cuartos",
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
        src: "/media/burstner-lyseo-td-594-2026-interior-oficial-2.webp",
        alt: "Detalle interior de la Bürstner Lyseo TD 594",
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
];
