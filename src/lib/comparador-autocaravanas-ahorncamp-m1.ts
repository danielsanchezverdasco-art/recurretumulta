// Autocaravanas Ahorn Camp — lote Merlín 1 (18/10/2026).
// Datos verificados: lista oficial de precios Ahorn Camp Model Year 2026 (agosto 2025, ahorn-camp.de).
// NOTA DE NOMENCLATURA: el «Canada AE» 2026 no existe (fue una capuchina de la generación 2021-2025,
// descatalogada); la gama oficial 2026 es la nueva serie T (perfiladas) sobre Renault Master,
// y la ficha corresponde al T 690. Ahorn Camp es marca alemana (Speyer), no canadiense.
// Precios "desde" orientativos para España marcados en "aprox".
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_AHORNCAMP_M1: CocheComparador[] = [
  {
    id: "ahorncamp-t-690-2026-precio-ficha-tecnica",
    marca: "Ahorn Camp",
    modelo: "T 690",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 61900,
    potenciaCv: 130, // 170 CV opcional con cambio automático de 9 velocidades
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
    imagen: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990,
    anchoMm: 2320,
    altoMm: 2850,
    pesoKg: null, // masa en orden de marcha no publicada en la lista oficial
    mmaKg: 3500, // versión de 4.000 kg disponible
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "PVP oficial de 61.900 €: la perfilada de 7 m con precio de fábrica más bajo del lote",
      "Nueva generación sobre Renault Master de 4.ª generación con 2.0 Blue dCi: chasis moderno de 2026",
      "Opción de 170 CV con cambio automático de 9 marchas: hay versión potente sin cambiar de marca",
      "Marca alemana con lista de precios pública: transparencia poco habitual en el sector",
      "Hasta 4 (5) plazas y 2 (4) camas en 6,99 m: formato familiar sin saltar a la integral",
    ],
    contras: [
      "Masa en orden de marcha no publicada en la lista oficial: la carga útil real es una incógnita",
      "Motor base de 130 CV: el menos potente para una perfilada de 7 m; el de 170 CV se paga aparte",
      "Gama totalmente nueva (2026): sin historial de fiabilidad ni opiniones de propietarios todavía",
      "Red de distribución pequeña fuera de Alemania: en España casi no hay concesionarios",
      "Acabados de acceso para ajustar el precio: no esperes el refinamiento de las alemanas premium",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.7,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 425,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Ahorn Camp T 690, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Ahorn Camp T 690, salón y dormitorio",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "ahorncamp-t-690-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Renault Master: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Renault)",
      revisiones: [
        {
          nombre: "Revisión Renault Master (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Ahorn Camp (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Renault Master + recomendaciones Ahorn Camp",
    },
    euroncap: null,
    fuenteNombre: "Ahorn Camp (lista oficial de precios MY2026)",
    fuenteUrl:
      "https://ahorn-camp.de/wp-content/uploads/2025/10/AhornCamp_PriceList_SemiIntegrated_ModelYear_2026-1.pdf",
  },
];
