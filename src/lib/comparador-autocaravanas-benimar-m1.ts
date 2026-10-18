// Autocaravanas Benimar — lote Merlín 1 (18/10/2026).
// Modelos: Mileo 243 + Amphitryon 940 (integral, ficha técnica oficial vía Motorvisión)
// + Sport 340 UP (capuchina sobre Ford Transit, no camper; alpacacamping.de + caravaningplaza.com).
// Benimar no publica PVP: precioDesde en null. Fotos: pendientes de subida; se referencian
// los nombres y se suben antes de anunciar el lote.
// Corrección 4 (18/10/2026, solo Mileo 243): benimar.es no publica ficha oficial del 243
// (temporada 2026; en el catálogo 2027 no aparece). Eliminada la fuente Dinmore Leisure
// (concesionario UK). Dimensiones, MMA y plazas, de hoja de concesionario UK, quedan marcadas
// «no oficial» en "aprox". Nota: la hoja UK indica MMA 3.650 kg y distribución de cama
// transversal + basculante (no camas gemelas); la ficha mantiene los valores de gama ES.
// CORRECCIÓN 4 (18/10/2026, Amphitryon 940 y Sport 340 UP): eliminadas las fuentes de
// concesionario/anuncio (Motorvisión, AlpacaCamping, Caravaning Plaza) de fuenteNombre y
// fuenteUrl (sustituidas por la web oficial del fabricante); la masa del Sport 340 UP, solo
// disponible en fichas de concesionario, queda marcada «no oficial» en "aprox".
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_BENIMAR_M1: Autocaravana[] = [
  {
    id: "benimar-mileo-243-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Mileo 243",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Benimar no publica PVP oficial; no inventar
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
    imagen: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/benimar-mileo-243-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // «no oficial»: sin ficha oficial del 243; 6,99 m según hoja de concesionario UK
    anchoMm: 2300, // «no oficial»: hoja de concesionario UK (gama ES 2027: 2,32 m)
    altoMm: 2890,
    pesoKg: null, // masa en orden de marcha no publicada por Benimar para esta versión
    mmaKg: 3500, // «no oficial»: 3.500 kg a nivel de gama; la hoja UK del 243 indica 3.650 kg
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas según hoja de concesionario UK
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "mmaKg", "plazas"], // «no oficial»: ver nota en cabecera
    pros: [
      "La marca que más autocaravanas vende en España, fabricada en Benicarló: recambios y servicio sin esperas",
      "Gama Mileo sobre Fiat Ducato (la Tessoro va sobre Ford): eliges chasis según tu mecánico de confianza",
      "Construcción ISB sin madera en paredes y techo: adiós a las humedades estructurales",
      "Puerta de acceso LUXE extra ancha con ventana y mosquitera: entrar y salir es un placer",
      "Packs Plus, Winter y Northautokapp: la configuras para esquiar o para el sur sin cambiar de modelo",
    ],
    contras: [
      "Sin PVP oficial publicado: cada concesionario da su precio y negociar lleva tiempo",
      "El dormitorio trasero con cama basculante delantera obliga a hacer y deshacer camas a diario",
      "Deportivos de 140 CV: suficiente en llano, perezoso en puertos con la célula cargada",
      "Casi 7 metros de eslora: en áreas de autocaravanas pequeñas toca aparcar 'a lo largo'",
      "Los opcionales que de verdad se usan (toldo, placa solar, TV) vienen en packs de pago",
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
        src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Benimar Mileo 243, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-mileo-243-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Benimar Mileo 243, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "benimar-mileo-243-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Benimar",
    },
    euroncap: null,
    fuenteNombre: "Benimar (web oficial, gama Mileo)",
    fuenteUrl: "https://www.benimar.es/en/low-profile-motorhomes/",
  },
  {
  id: "benimar-amphitryon-940-2026-precio-ficha-tecnica",
  marca: "Benimar",
  modelo: "Amphitryon 940",
  tipo: "integral",
  categoria: "Autocaravana",
  precioDesde: null, // Benimar no publica PVP oficial; no inventar
  potenciaCv: 140, // Fiat Ducato 2.2; 180 CV opcional
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
  imagen: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-oficial.webp",
  imagenOficial:
  "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-oficial.webp",
  imagenInteriorOficial:
  "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-interior.webp",
  videoId: null,
  videoCanal: null,
  largoMm: 6990,
  anchoMm: 2370,
  altoMm: 2950,
  pesoKg: 3085, // masa en orden de marcha ±5% según ficha técnica oficial
  mmaKg: 3500,
  carnetNecesario: "B",
  cargaUtilKg: 415, // calculada: 3.500 − 3.085 (MMA menos masa en orden de marcha)
  consumo: null,
  consumoUnidad: null,
  plazas: 5,
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera",
  emisionesCo2: null,
  aprox: [],
  pros: [
  "Integral de 6,99 m con 5 plazas reales para viajar y dormir: la clase A familiar más compacta del mercado español",
  "Triple sistema de camas: transversal trasera regulable en altura + basculante eléctrica de techo + basculante de cabina",
  "Calefacción a gasóleo de 4.000 W: calientas con el depósito del motor y viajas en invierno sin depender de las botellas de gas",
  "Garaje con altura regulable de 67 a 120 cm y doble portón XL: de las bicis a una moto pequeña sin renunciar a la cama",
  "Fabricada en Benicarló con célula de poliéster ISB sin madera en paredes y techo: integral española con servicio postventa cercano",
  ],
  contras: [
  "Masa en orden de marcha de 3.085 kg: con 5 ocupantes solo quedan 415 kg de carga útil teórica, menos en la práctica",
  "Motor base de 140 CV para 3,5 toneladas: en puertos con la célula cargada se agradece el 180 CV opcional",
  "Cama de cabina de 140×190 cm: justa para dos adultos altos, y la basculante de techo es de una sola plaza",
  "Sin PVP oficial publicado: cada concesionario fija su precio y las ofertas varían miles de euros entre provincias",
  "2,95 m de alto y 2,37 m de ancho: peajes más caros y más sensibilidad al viento lateral que una perfilada equivalente",
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
  src: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-oficial.webp",
  alt: "Benimar Amphitryon 940, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/benimar-amphitryon-940-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior de la Benimar Amphitryon 940, salón y dormitorio trasero",
  ancho: 1200,
  alto: 800,
  },
  ],
  analisisSlug: "benimar-amphitryon-940-2026-precio-ficha-tecnica",
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
  nombre: "Revisión célula Benimar (anual recomendada)",
  queSeCambia:
  "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
  costeAproxEur: 250,
  },
  ],
  costeAnualAproxEur: 600,
  fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Benimar",
  },
  euroncap: null,
  fuenteNombre: "Benimar (ficha técnica oficial)",
  fuenteUrl: "https://www.benimar.es",
  },
  {
  id: "benimar-sport-340-up-2026-precio-ficha-tecnica",
  marca: "Benimar",
  modelo: "Sport 340 UP",
  tipo: "capuchina",
  categoria: "Autocaravana",
  precioDesde: null, // Benimar no publica PVP oficial; no inventar
  potenciaCv: 130, // base; 160/165 CV y cambio automático de 9 velocidades opcionales
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
  imagen: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-oficial.webp",
  imagenOficial:
  "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-oficial.webp",
  imagenInteriorOficial:
  "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-interior.webp",
  videoId: null,
  videoCanal: null,
  largoMm: 6760,
  anchoMm: 2300,
  altoMm: 3080,
  pesoKg: 2900, // «no oficial»: aprox. según alpacacamping.de (concesionario); Benimar no publica cifra única oficial
  mmaKg: 3500,
  carnetNecesario: "B",
  cargaUtilKg: null, // sin cifras oficiales de masa no se puede calcular con fiabilidad
  consumo: null,
  consumoUnidad: null,
  plazas: 5,
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera",
  emisionesCo2: null,
  aprox: ["pesoKg"], // «no oficial»: masa según ficha de concesionario, no publicada por Benimar
  pros: [
  "Capuchina de 6,76 m para 5 personas: formato familiar que aparca y maniobra casi como una perfilada grande",
  "Cama capuchina de 155×210 cm, de las más grandes del segmento: duermen dos adultos de verdad sobre la cabina",
  "Calefacción a gasóleo de 4.000 W: invierno sin depender de botellas de gas, usando el depósito del Transit",
  "ISOFIX de serie en el comedor y garaje modulable: pensada para familias con niños pequeños",
  "Ford Transit con cambio automático de 9 velocidades disponible: la capuchina sin palanca para quien viene del turismo",
  ],
  contras: [
  "3,08 m de altura con la capuchina: más consumo y peor comportamiento con viento lateral que las perfiladas equivalentes",
  "La cama trasera regulable en altura obliga a elegir: o garaje grande o cama baja, no hay término medio por la noche",
  "Motor base de 130 CV: suficiente en llano, justo con 5 ocupantes y la célula cargada en puertos",
  "Nevera de 150 l para 5 personas: en verano y viajes largos se queda corta sin nevera auxiliar",
  "Sin PVP oficial publicado: negociar con el concesionario es obligatorio y los precios varían mucho",
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
  src: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-oficial.webp",
  alt: "Benimar Sport 340 UP, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/benimar-sport-340-up-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior de la Benimar Sport 340 UP, salón y capuchina",
  ancho: 1200,
  alto: 800,
  },
  ],
  analisisSlug: "benimar-sport-340-up-2026-precio-ficha-tecnica",
  planMantenimiento: {
  intervalo:
  "Ford Transit 2.0: revisión cada 2 años o 40.000 km (lo que ocurra antes; intervalo Ford no verificado en web oficial para esta versión — consultar el manual)",
  revisiones: [
  {
  nombre: "Revisión Ford Transit (2 años / 40.000 km)",
  queSeCambia:
  "Aceite + filtro de aceite + filtro de polen + inspección general",
  costeAproxEur: 380,
  },
  {
  nombre: "Revisión célula Benimar (anual recomendada)",
  queSeCambia:
  "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
  costeAproxEur: 250,
  },
  ],
  costeAnualAproxEur: 630,
  fuente:
  "Intervalo Ford Transit (pendiente de verificación en web oficial) + recomendaciones Benimar",
  },
  euroncap: null,
  fuenteNombre: "Benimar (web oficial)",
  fuenteUrl: "https://www.benimar.es",
  }
];
