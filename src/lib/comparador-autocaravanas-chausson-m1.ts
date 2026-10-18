// Autocaravanas Chausson — lote Merlín 1 (18/10/2026).
// Datos verificados: chausson-camping-cars.fr (PDF oficial de la gama Titanium),
// leboncoin.fr (precio de unidad nueva 2026 en Francia, orientativo; en España puede diferir).
// Precio "desde" marcado en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_CHAUSSON_M1: CocheComparador[] = [
  {
    id: "chausson-640-titanium-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "640 Titanium",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 68900,
    potenciaCv: 170,
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
    imagen: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/chausson-640-titanium-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2350,
    altoMm: 2920,
    pesoKg: 2997, // masa en orden de marcha según PDF oficial Chausson (±5 %)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Serie Titanium, la más vendida de Chausson en Europa: valor de reventa muy sólido en el mercado de ocasión",
      "Chasis Ford Transit con carrocería gris de poliéster: estética diferenciada que no pasa desapercibida",
      "Concepto SmartLounge: los asientos de los pasajeros se extraen de los sofás y el salón se hace XL",
      "Cama basculante eléctrica de 160 cm de ancho sobre el maxi-salón: se duerme a lo ancho, no a lo largo",
      "Baño de ancho completo con ducha separada por puerta: el aseo más generoso entre las perfiladas de 7 m",
    ],
    contras: [
      "Marca francesa con red pequeña en España: menos concesionarios que Benimar o Dethleffs para servicio",
      "El precio de referencia (68.900 €) es de Francia: el PVP español lo fija cada importador",
      "La cama basculante central, al bajar, deja el salón sin altura libre: incómoda si se usa cada noche",
      "2,35 m de anchura total: en carreteras secundarias estrechas se conduce con más atención",
      "Equipamiento Titanium muy completo, pero los acabados interiores son funcionales antes que premium",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Chausson 640 Titanium, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/chausson-640-titanium-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Chausson 640 Titanium, SmartLounge",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "chausson-640-titanium-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Chausson (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Chausson",
    },
    euroncap: null,
    fuenteNombre: "Chausson (PDF oficial gama Titanium) + LeBonCoin",
    fuenteUrl:
      "https://www.chausson-camping-cars.fr/wp-content/uploads/chausson_titanium_2020_8pages-UK.pdf",
  },
];
