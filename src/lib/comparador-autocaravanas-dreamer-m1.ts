// Autocaravanas Dreamer — lote Merlín 1 (18/10/2026).
// Datos verificados: catálogo oficial Dreamer Colección 2026 (contenido del fabricante)
// + dreamer-van.fr (portadores Fiat Ducato / Peugeot Boxer, fabricación en Mayenne).
// CORRECCIÓN 4 (18/10/2026): motor de serie de 120 CV según prensa especializada (el catálogo
// oficial no pudo descargarse directamente) → marcado «no oficial» en "aprox". Resto de datos
// del catálogo oficial Dreamer Colección 2026 + dreamer-van.fr.
// NOTA DE NOMBRE: el nombre comercial oficial es "D55 UP" (gama Fun); se mantiene el
// identificador del lote 1. Motor de serie Peugeot Boxer 2.2 120 CV según prensa
// especializada; el catálogo oficial no pudo descargarse directamente (fallo de red) y se
// consultó su extracto. Precio "desde" no publicado por el fabricante → null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_DREAMER_M1: Autocaravana[] = [
  {
    id: "dreamer-d55-fun-up-2026-precio-ficha-tecnica",
    marca: "Dreamer",
    modelo: "D55 UP",
    tipo: "Camper (furgoneta camper)",
    categoria: "Autocaravana",
    precioDesde: null, // el fabricante no publica precios; solo existen tarifas de concesionarios
    potenciaCv: 120, // «no oficial»: según prensa especializada; el catálogo oficial no pudo descargarse directamente
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
    imagen: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2720, // con techo elevable, según el catálogo oficial 2026
    pesoKg: null, // el fabricante no publica cifra única oficial; un concesionario indica 2.940 kg PVOM para la versión automática, a título orientativo
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["potenciaCv"], // «no oficial»: potencia según prensa especializada
    pros: [
      "Cuatro plazas de adulto reales en menos de 6 m: cama transversal trasera (1950x1320) más lit de pavillon de 2000x1300 en el techo elevable, combinación rara en un furgón de 5,99 m",
      "Baño Modul'Space con armario pivotante que se guarda en la ducha: ducha separada del WC en un formato casi único",
      "Nevera de compresión de 149 l (12 V): muy por encima de los 84 l habituales del segmento",
      "Calefacción a gasoil utilizable en marcha más pack de invierno opcional con suelo radiante eléctrico: apta para uso todo el año",
      "Gama Fun accesible del grupo Rapido con 14 implantaciones; ediciones 20.º aniversario y packs como el Essential con batería de litio de 150 Ah y 150 W solar",
    ],
    contras: [
      "Altura de 2,72 m con el techo elevable: más ruido aerodinámico y peor comportamiento con viento; el kit de aislamiento del techo es opcional",
      "Carga útil ajustada: 2.940 kg de PVOM en versión automática dejan solo unos 560 kg, que se consumen rápido con packs, litio y solar",
      "La cama trasera de 1950x1320 es estrecha para dos adultos corpulentos",
      "El cambio automático de 8 velocidades solo existe con Fiat Ducato (con sobrecoste): la base Peugeot Boxer es manual",
      "Sin precio oficial publicado: la tarifa depende totalmente del concesionario y los packs encarecen rápido la factura",
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
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Dreamer D55 UP, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dreamer-d55-fun-up-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Dreamer D55 UP, cama transversal y techo elevable",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "dreamer-d55-fun-up-2026-precio-ficha-tecnica",
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
          nombre: "Revisión célula Dreamer (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Peugeot Boxer + recomendaciones Dreamer",
    },
    euroncap: null,
    fuenteNombre: "Dreamer (catálogo oficial 2026 + dreamer-van.fr)",
    fuenteUrl: "https://www.dreamer-van.fr/",
  },
];
