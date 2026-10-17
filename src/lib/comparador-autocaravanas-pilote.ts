// Autocaravanas Pilote — ficha 1 (lote caravanas 2C, 17/10/2026).
// Datos verificados: catálogo oficial Pilote 2027 (denominación P690GJ para
// esta perfilada de camas gemelas; P696GJ es el nombre del año-modelo
// anterior en el mercado de ocasión), red de distribuidores oficiales.
// Precio orientativo (Pilote no publica PVP oficial por modelo para España;
// marcado en "aprox").
// Fotos: reales del modelo exacto (Pilote Pacific P690GJ 2026), verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_PILOTE: CocheComparador[] = [
  {
    id: "pilote-p-696-gj-2026-precio-ficha-tecnica",
    marca: "Pilote",
    modelo: "P 696 GJ",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 75000,
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
    imagen: "/media/pilote-p-696-gj-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/pilote-p-696-gj-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/pilote-p-696-gj-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2320,
    altoMm: 2940,
    pesoKg: 2950,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "Camas gemelas traseras + cama abatible + salón convertible: hasta 5 plazas en 6,99 m",
      "Fiat Ducato 2.2 MultiJet de 140 CV: base probada con la red de talleres más amplia",
      "MMA de 3.500 kg: se conduce con carnet B",
      "La gama Pacific es la perfilada familiar de referencia de Pilote en Europa",
      "Salón para 5 comensales y 4 plazas homologadas en circulación",
    ],
    contras: [
      "La denominación oficial actual es P690GJ: el nombre P696GJ es del año-modelo anterior",
      "Precio orientativo desde ~75.000 €: las Pacific se mueven entre 70.000 y 80.000 € según equipamiento",
      "140 CV es la mecánica estándar: a plena carga con 5 ocupantes se nota",
      "El acabado Expression, el más vistoso, encarece la tarifa",
      "6,99 m de perfilada exigen sitio para aparcar y pernoctar",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 700,
      seguroAmpliadoAnual: 1300,
      mantenimientoAnual: 600,
      costeMensualTotal: 480,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/pilote-p-696-gj-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Pilote P 696 GJ Pacific, vista lateral tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/pilote-p-696-gj-2026-interior-oficial.webp",
        alt: "Salón oficial del Pilote P 696 GJ Pacific",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/pilote-p-696-gj-2026-interior-oficial-2.webp",
        alt: "Dormitorio con camas gemelas del Pilote P 696 GJ Pacific",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "pilote-p-696-gj-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km según plan del fabricante",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Pilote (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Professional + recomendaciones Pilote",
    },
    euroncap: null,
    fuenteNombre: "Pilote (catálogo oficial 2027)",
    fuenteUrl:
      "https://www.pilote.fr/app/uploads/2026/10/ES_Catalogue_Pilote_autocaravanas.pdf",
  },
];
