// Autocaravanas McLouis — ficha 1 (lote caravanas 2A, 17/10/2026).
// Datos verificados: ficha técnica oficial McLouis (mclouis.com), red de
// concesionarios. Precio: orientativo en España (McLouis no publica PVP oficial
// por modelo; marcado en "aprox").
// NOTA: el Menfys 3 S-Line es una furgoneta camper (van) sobre Fiat Ducato,
// no una perfilada: se documenta el modelo real bajo el slug asignado.
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_MCLOUIS: CocheComparador[] = [
  {
    id: "mclouis-menfys-3-s-line-2026-precio-ficha-tecnica",
    marca: "McLouis",
    modelo: "Menfys 3 S-Line",
    tipo: "Furgoneta camper",
    categoria: "Autocaravana",
    precioDesde: 55490,
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
      "/media/mclouis-menfys-3-s-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/mclouis-menfys-3-s-line-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/mclouis-menfys-3-s-line-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5995,
    anchoMm: 2050,
    altoMm: 2650,
    pesoKg: 3500,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "5,99 m de largo: la camper que cabe en una plaza de parking estándar",
      "4 plazas homologadas y 4 camas: duerme a 4 sin tienda ni avances",
      "Calefacción diésel de 4 kW de serie: autonomía invernal sin depender del gas",
      "Nevera de compresor de 84 L: enfría igual incluso con calor extremo",
      "Fiat Ducato 2.2 de 140 CV: consumo contenido y la red de talleres más amplia",
    ],
    contras: [
      "Cama trasera de 186x144/184x133 cm: justa para dos adultos altos",
      "Cocina de 2 fuegos con poco encimera: cocinar dentro es básico",
      "Baño de camper: ducha de pie sin espacio para secarse con comodidad",
      "Con 4 ocupantes y equipaje, la carga útil de los 3.500 kg se queda corta",
      "Acabado S-Line correcto pero sin el refinamiento de una perfilada",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 11.9,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 550,
      seguroAmpliadoAnual: 1000,
      mantenimientoAnual: 500,
      costeMensualTotal: 360,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/mclouis-menfys-3-s-line-2026-precio-ficha-tecnica-oficial-4.webp",
        alt: "McLouis Menfys 3 S-Line, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-menfys-3-s-line-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Interior del McLouis Menfys 3 S-Line, zona de descanso",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/mclouis-menfys-3-s-line-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Cama trasera del McLouis Menfys 3 S-Line, foto oficial",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "mclouis-menfys-3-s-line-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula McLouis (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 150,
        },
      ],
      costeAnualAproxEur: 500,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones McLouis",
    },
    euroncap: null,
    fuenteNombre: "McLouis (ficha técnica oficial)",
    fuenteUrl:
      "https://www.mclouis.com/francia/wp-content/uploads/sites/3/2024/06/Menfys-3-Maxi-S-LINE.pdf",
  },
];
