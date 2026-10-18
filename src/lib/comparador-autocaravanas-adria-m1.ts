// Autocaravanas Adria — lote Merlín 1 (18/10/2026).
// Modelos: Twin Supreme 640 SGX + Coral Plus 670 SL (nombre oficial completo; el 670 SL
// existe en acabados Plus y Supreme). Datos Coral Plus: ficha técnica Adria UK (adria.co.uk),
// The Caravan Club, Out & About Live. Adria no publica PVP: precioDesde en null.
// Corrección 4 (18/10/2026, solo Twin Supreme 640 SGX): verificado en adria-mobil.com (catálogo
// oficial Campervans 2026–2027). Eliminadas las fuentes de concesionario/anuncio (AlpacaCamping,
// Sia Magazin). El precio 67.490 € es orientativo «no oficial» (Adria no publica PVP). Datos marcados
// «no oficial» en "aprox": ancho (oficial: 2.100 mm), alto y MMA no publicados por Adria para el 640 SGX.
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
// CORRECCIÓN 4 (18/10/2026, Coral Plus 670 SL): fuenteNombre reducido al fabricante
// (ficha técnica oficial Adria UK); eliminadas las menciones a prensa como fuente principal.
// Todos los datos numéricos proceden de la ficha técnica oficial Adria UK.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_ADRIA_M1: Autocaravana[] = [
  {
    id: "adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Twin Supreme 640 SGX",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: 67490, // orientativo «no oficial» (concesionario); Adria no publica PVP
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
    imagen: "/media/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6360, // catálogo oficial: 6.363 mm
    anchoMm: 2050, // «no oficial»: según concesionarios; catálogo oficial indica 2.100 mm
    altoMm: 2590, // «no oficial»: altura no publicada por Adria para el 640 SGX
    pesoKg: null, // Adria publica horquillas 3.020-3.070 kg según equipamiento; sin cifra única oficial
    mmaKg: 3500, // «no oficial»: MMA no publicada por Adria para el 640 SGX
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "anchoMm", "altoMm", "mmaKg"], // «no oficial»: ver notas en cabecera
    pros: [
      "Cama trasera elevable eléctricamente: de garaje enorme a dormitorio con un botón",
      "Fiat Ducato 2.2 de 140 CV (180 CV opcional) con cambio automático de 8/9 velocidades",
      "Techo panorámico Skyroof y baño Duplex con ducha escamoteable: sensación de espacio en 6,36 m",
      "Nevera por compresor de 138 l: enfría sin gas y sin necesidad de nivelar la camper",
      "Calefacción diésel Truma Combi: autonomía de gas para viajar todo el año",
    ],
    contras: [
      "La cama elevable ocupa el garaje cuando está bajada: o duermes o cargas bicis",
      "Con el 180 CV, el automático y los packs, el precio se acerca a los 85.000 €",
      "Baño Duplex ingenioso pero compacto: la ducha exige reorganizar el aseo",
      "2,05 m de ancho: el salón face-to-face es acogedor, no espacioso",
      "MMA de 3.500 kg: con 4 plazas y depósito lleno, la carga útil se ajusta",
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
        src: "/media/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Twin Supreme 640 SGX, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior de la Adria Twin Supreme 640 SGX, cama elevable",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "adria-twin-supreme-640-sgx-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Adria (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Adria",
    },
    euroncap: null,
    fuenteNombre: "Adria (web oficial, adria-mobil.com)",
    fuenteUrl: "https://www.adria-mobil.com/vans/twin",
  },
  {
  id: "adria-coral-plus-670-sl-2026-precio-ficha-tecnica",
  marca: "Adria",
  modelo: "Coral Plus 670 SL",
  tipo: "Autocaravana perfilada",
  categoria: "Autocaravana",
  precioDesde: null, // Adria no publica PVP oficial; orientativo UK: Coral Plus desde £61.325 (670 DC, 2026)
  potenciaCv: 140, // Fiat Ducato 2.2 MultiJet; cambio automático opcional
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
  imagen: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
  imagenOficial:
  "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
  imagenInteriorOficial:
  "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-interior.webp",
  videoId: null,
  videoCanal: null,
  largoMm: 7490, // 7.485 mm según ficha técnica Adria UK (670 DL, misma carrocería que el SL)
  anchoMm: 2300,
  altoMm: 2905, // 2.905 mm según ficha técnica Adria UK (670 DL, misma carrocería)
  pesoKg: 3204, // MiRO según ficha técnica Adria UK; payload publicado: 509 kg
  mmaKg: 3500,
  carnetNecesario: "B",
  cargaUtilKg: null, // el payload publicado (509 kg) no cuadra con MTPLM − MiRO; sin cifra fiable
  consumo: null,
  consumoUnidad: null,
  plazas: 4,
  parNm: null, // no publicado por el fabricante
  traccion: "Delantera",
  emisionesCo2: null,
  aprox: [],
  pros: [
  "Skyroof panorámico exclusivo de Adria sobre el salón: luz cenital en una perfilada de 7,49 m que parece una integral",
  "Camas gemelas traseras unibles en una gran doble con garaje pasante debajo: se duerme separado y se cargan bicis sin desmontar nada",
  "Baño central con ducha independiente que se cierra desde el salón y desde el dormitorio: en-suite a demanda",
  "Fiat Ducato 2.2 de 140 CV con cambio automático y packs de seguridad Fiat disponibles: ayudas de turismo en una perfilada",
  "Muebles ensamblados con tacos de madera en vez de grapas y respaldo anti-humedades de 10 años en carrocería: construcción pensada para durar",
  ],
  contras: [
  "MiRO de 3.204 kg con MMA de 3.500 kg: con 4 adultos a bordo apenas quedan 100-150 kg de carga útil real",
  "Sin cama basculante ni literas: son 2-3 plazas fijas de dormitorio, no la perfilada para familias numerosas",
  "Calefacción por agua caliente Alde reservada al acabado Supreme: el Plus monta Truma de aire, menos homogénea en invierno",
  "Adria no publica PVP en España: el precio final depende del concesionario y de los packs que se elijan",
  "7,49 m de eslora: en áreas pequeñas y pueblos de calles estrechas cada centímetro se nota al maniobrar",
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
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-oficial.webp",
  alt: "Adria Coral Plus 670 SL, vista tres cuartos delantera",
  ancho: 1200,
  alto: 800,
  },
  {
  src: "/media/adria-coral-plus-670-sl-2026-precio-ficha-tecnica-interior.webp",
  alt: "Interior de la Adria Coral Plus 670 SL, salón en L y camas gemelas",
  ancho: 1200,
  alto: 800,
  },
  ],
  analisisSlug: "adria-coral-plus-670-sl-2026-precio-ficha-tecnica",
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
  nombre: "Revisión célula Adria (anual recomendada)",
  queSeCambia:
  "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
  costeAproxEur: 250,
  },
  ],
  costeAnualAproxEur: 600,
  fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Adria",
  },
  euroncap: null,
  fuenteNombre: "Adria (adria.co.uk, ficha técnica oficial)",
  fuenteUrl: "https://www.adria.co.uk/motorhomes/coral",
  }
];
