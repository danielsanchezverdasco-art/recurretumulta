// Autocaravanas Itineo — lote Merlín 4 (18/10/2026).
// Datos verificados: catálogo oficial Itineo 2026 (PDF) y web oficial itineo.com
// (grupo Rapido; el fabricante no publica MMA por modelo ni PVP: precioDesde en null).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ITINEO_M1: Autocaravana[] = [
  {
    id: "itineo-pf600-2026-precio-ficha-tecnica",
    marca: "Itineo",
    modelo: "PF600",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Itineo no publica PVP oficial; no inventar
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
    imagen: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/itineo-pf600-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2320,
    altoMm: 2880,
    pesoKg: null,
    mmaKg: null, // MMA por modelo no publicada por Itineo; confirmar en ficha del concesionario
    carnetNecesario: null,
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null, // no publicada por el fabricante
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Menos de 6 metros de eslora con cama francesa trasera de 136×196 cm: cabe en parkings y se duerme como en casa",
      "Lit pavillon eléctrico opcional: una segunda cama que desaparece en el techo durante el día",
      "Gama Cozi de Itineo: de las relaciones equipamiento/precio más ajustadas del grupo Rapido",
      "Base Peugeot Boxer 2.2 BlueHDi de 140 CV: mecánica extendida y barata de mantener",
      "Formato compacto ideal para escapadas de fin de semana sin pagar una célula grande",
    ],
    contras: [
      "La cama francesa de 136×196 es estrecha para dos adultos de complexión grande",
      "El lit pavillon es opción de pago: de serie son 2 plazas de cama, no 4",
      "Cocina y baño compactos: el formato de menos de 6 m se nota en los días de lluvia",
      "Sin PVP oficial publicado: comparar ofertas entre concesionarios lleva trabajo",
      "MMA no publicada por el fabricante: conviene confirmarla en la ficha del concesionario antes de comprar",
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
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Itineo PF600, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/itineo-pf600-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Itineo PF600, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "itineo-pf600-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Peugeot)",
      revisiones: [
        {
          nombre: "Revisión Peugeot Boxer (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Itineo (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Peugeot Boxer + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Itineo (catálogo oficial 2026) — grupo Rapido",
    fuenteUrl: "https://www.itineo.com/",
  },
];
