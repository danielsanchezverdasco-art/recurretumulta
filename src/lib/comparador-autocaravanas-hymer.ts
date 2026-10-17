// Autocaravanas Hymer — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: hymer.com/es (datos técnicos y precio oficiales para España).
// Fotos: reales del modelo exacto (foto de prensa oficial Hymer), verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_HYMER: CocheComparador[] = [
  {
    id: "hymer-b-mc-i-580-2026-precio-ficha-tecnica",
    marca: "Hymer",
    modelo: "B-Class ModernComfort I 580",
    tipo: "Autocaravana integral",
    categoria: "Autocaravana",
    precioDesde: 138990,
    potenciaCv: 150,
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
      "/media/hymer-b-mc-i-580-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hymer-b-mc-i-580-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hymer-b-mc-i-580-2026-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2290,
    altoMm: 2980,
    pesoKg: 3094,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Integral sobre Mercedes-Benz Sprinter 315 CDI: la base más prestigiosa del segmento",
      "Precio oficial publicado para España: 138.990 €, sin sorpresas",
      "Chasis SLC galardonado: ligereza y estabilidad superiores",
      "Camas gemelas traseras + abatible + central: hasta 5 plazas en 6,99 m",
      "Hymer mantiene el mejor valor de reventa del caravaning europeo",
    ],
    contras: [
      "138.990 € la sitúan en el segmento premium: el doble que una perfilada generalista",
      "Con 3.094 kg en orden de marcha, la carga útil hasta 3.500 kg es justa con 5 ocupantes",
      "El motor de 150 CV es correcto pero el salto a 170 CV se paga aparte",
      "Mantenimiento Mercedes más caro que el de las bases Fiat/Ford",
      "6,99 m de integral imponen respeto al aparcar en ciudad",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 15,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 800,
      seguroAmpliadoAnual: 1500,
      mantenimientoAnual: 750,
      costeMensualTotal: 520,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~11 l/100 km de gasóleo y seguro a todo riesgo.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hymer-b-mc-i-580-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Hymer B-Class ModernComfort I 580, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-b-mc-i-580-2026-interior-oficial.webp",
        alt: "Interior oficial de la Hymer B-Class ModernComfort I 580",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hymer-b-mc-i-580-2026-interior-oficial-2.webp",
        alt: "Salón de la Hymer B-Class ModernComfort I 580",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hymer-b-mc-i-580-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Mercedes-Benz Sprinter: servicio según indicador ASSYST (aprox. cada 2 años o 40.000 km)",
      revisiones: [
        {
          nombre: "Servicio Sprinter (ASSYST)",
          queSeCambia:
            "Aceite + filtros + inspección según indicador del vehículo",
          costeAproxEur: 500,
        },
        {
          nombre: "Revisión célula Hymer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 300,
        },
      ],
      costeAnualAproxEur: 750,
      fuente: "Plan de mantenimiento Mercedes-Benz + recomendaciones Hymer",
    },
    euroncap: null,
    fuenteNombre: "Hymer (datos técnicos y precio oficiales)",
    fuenteUrl:
      "https://www.hymer.com/es/es/autocaravanas/hymer-b-klasse-moderncomfort-i",
  },
];
