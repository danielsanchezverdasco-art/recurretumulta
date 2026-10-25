// Campers Chausson — lote eu2 (19/10/2026).
// Datos verificados: fichas de distribuidores oficiales del modelo exacto MJ2026 (múltiples anuncios coincidentes)
// y web oficial de Chausson https://chausson-camping-cars.fr/ (garantía de estanqueidad 7 años).
// Fotos: sin fotos oficiales de prensa del fabricante localizables para este modelo; se deja sin foto.
// NOTA: "Chausson Twist 3 (2026)" no existe como modelo oficial 2026 (el "Twist 03" solo aparece en el catálogo Chausson 2011).
// Se sustituye por el Chausson Twist V594, el fourgon Twist actual de 5,99 m (gama 2026: líneas Start y Exclusive).
import type { CocheComparador } from "../comparador-coches-data.ts";

export const CAMPERS_CHAUSSON: CocheComparador[] = [
  {
    id: "chausson-twist-v594-2026-precio-ficha-tecnica",
    marca: "Chausson",
    modelo: "Twist V594",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: 48990, // PVP oficial Francia: página oficial del modelo V594 (chausson-camping-cars.fr), «a partir de 48 990 €»; sin tarifa oficial para España
    potenciaCv: 120,
    autonomiaKm: null, maleteroL: null, ceroCien: null, velocidadMax: null,
    bateriaKwh: null, cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null, garantiaBateriaKm: null, garantiaBateriaDegradacionPct: null,
    imagen: "",
    imagenOficial: "",
    imagenInteriorOficial: "",
    videoId: null, videoCanal: null,
    largoMm: 5990, anchoMm: 2050, altoMm: 2650,
    pesoKg: null,
    consumo: null, consumoUnidad: null,
    plazas: 4, parNm: null, traccion: "Delantera", emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Formato compacto de 5,99 m: fácil de aparcar y de maniobrar a diario",
      "Cama transversal de 149 × 186 cm siempre hecha, sin montajes",
      "Frigorífico de compresor de 70 L, como el de casa",
      "Calefacción a gas de 4.000 W para viajar todo el año",
      "Garantía de estanqueidad de 7 años de Chausson",
      "Sistema VPS (Van Protection System): aislamiento adaptado a la carrocería del furgón",
      "Se conduce con el carnet B de coche, sin permisos especiales",
    ],
    contras: [
      "Motor base de 120 CV, justo con 3.500 kg a plena carga (existe opción de 140 CV)",
      "Depósito de agua limpia de 85 L: autonomía limitada fuera de áreas",
      "3 plazas para dormir como máximo, no 4",
      "Altura de 2,65 m: atención a parkings cubiertos",
      "Sin tarifa oficial de precios publicada en la web (consultar red de concesionarios)",
    ],
    opiniones: [],
    galeria: [],
    analisisSlug: "chausson-twist-v594-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada: motor según plan Fiat + estanqueidad célula",
      revisiones: [{ nombre: "Revisión anual", queSeCambia: "Aceite y filtros del motor, estanqueidad de la célula, gas y electricidad", costeAproxEur: 350 }],
      costeAnualAproxEur: 350,
      fuente: "Plan oficial Fiat Ducato + recomendaciones Chausson",
    },
    euroncap: null,
    curiosidad: { texto: "Chausson diseña y monta cada camper en Tournon-sur-Rhône (Ardèche, Francia) desde 1980 y garantiza la estanqueidad durante 7 años.", fuenteNombre: "Chausson (web oficial)", fuenteUrl: "https://chausson-camping-cars.fr/" },
    fuenteNombre: "Chausson (web oficial)",
    fuenteUrl: "https://chausson-camping-cars.fr/",
  },
];
