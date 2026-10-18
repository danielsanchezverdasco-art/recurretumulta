// Autocaravanas Weinsberg — lote Merlín 1 (18/10/2026).
// Datos verificados: weinsberg.com (web oficial; la gama CaraTour se denomina ahora CaraBus,
// modelo vigente 2026: CaraBus GREY EDITION [FIRE] 600 MQ). Weinsberg no publica PVP: precioDesde en null.
// Corrección 4 (18/10/2026): sin fuentes no oficiales; carga útil de 241 kg («Maximum payload» publicado
// por Weinsberg con nota al pie) marcada «no oficial» en "aprox" por su definición particular.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_WEINSBERG_M1: Autocaravana[] = [
  {
    id: "weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraBus Grey Edition [FIRE] 600 MQ",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // Weinsberg no publica PVP oficial; remite al configurador/concesionario
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
    imagen: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2580,
    pesoKg: 2750, // modelo base sin equipamiento opcional, con equipamiento básico
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: 241, // "Maximum payload" publicado por Weinsberg (concepto con nota al pie en su ficha)
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por Weinsberg
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["cargaUtilKg"],
    pros: [
      "Edición especial FIRE con equipamiento completo de serie: llantas de aleación, climatizador de cabina, mosquitera y escalón eléctrico sin pagar extras",
      "Con 5,99 m cabe en una plaza de aparcamiento larga: la camper que se usa a diario sin sufrir",
      "Batería de habitáculo de 95 Ah y nevera de 95 l: equilibrio razonable para escapadas de fin de semana",
      "Neumáticos all-season de serie: sale del asfalto sin pasar por el taller a cambiar ruedas",
      "Cama doble trasera de 194 × 152 cm más cama en el grupo de asientos: duermen 3-4 personas en menos de 6 metros",
    ],
    contras: [
      "Sin PVP oficial publicado: Weinsberg remite al configurador y el precio final lo marca cada concesionario",
      "Baño compacto de camper de 5,99 m: la ducha es más un apaño que un cuarto de baño de verdad",
      "Calefacción de 4 kW: suficiente en otoño, justa en pleno invierno de montaña",
      "Carga útil publicada de solo 241 kg: con 4 ocupantes y la edición FIRE equipada hay que mirar la báscula",
      "Depósito de gasóleo ampliable a 90 l solo como opción: de serie la autonomía entre repostajes es menor",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Weinsberg CaraBus Grey Edition [FIRE] 600 MQ, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Weinsberg CaraBus Grey Edition [FIRE] 600 MQ, zona de descanso",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "weinsberg-carabus-grey-edition-fire-600-mq-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat Professional)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 400,
        },
        {
          nombre: "Revisión célula Weinsberg (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 650,
      fuente: "Plan de mantenimiento Fiat Professional Ducato + recomendaciones Weinsberg",
    },
    euroncap: null,
    fuenteNombre: "Weinsberg (web oficial)",
    fuenteUrl: "https://weinsberg.com/en-uk/camper-vans/grey-edition-fire/layout-plans/600-mq/",
  },
];
