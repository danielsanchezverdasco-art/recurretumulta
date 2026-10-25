// Campers Campérêve — lote eu2 (19/10/2026).
// Datos verificados: página oficial del modelo en campereve.fr
// (https://www.campereve.fr/fourgon_gamme-magellan_magellan-643-air-saphir.phtml).
// Fotos: oficiales de prensa del modelo exacto (verificadas visualmente).
// NOTA TÉCNICA: el tipo CocheComparador no incluye los campos mmaKg,
// carnetNecesario ni cargaUtilKg; el carnet B se indica en los pros y en el blog.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CAMPERS_CAMPEREVE: CocheComparador[] = [
  {
    id: "campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica",
    marca: "Campérêve",
    modelo: "Magellan 643 Air Saphir",
    tipo: "Diésel",
    categoria: "Camper",
    precioDesde: null,
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
    imagen: "/media/campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica.webp",
    imagenOficial: "/media/campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial: "/media/campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2760,
    pesoKg: 3145,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Techo elevable en la versión Air: 2+2 plazas de noche en solo 5,99 m de largo",
      "Ducha y WC separados en un furgón compacto, con armario patentado Modul'Space",
      "Base Fiat Ducato o Peugeot Boxer 2.2 de 140 CV Euro 6e, con cambio automático disponible",
      "Nevera por compresor de 149 L y Truma Combi 4 diésel: confort en cualquier estación",
      "Se conduce con el carnet B (MMA de 3,5 t): es el modelo estrella de la gama Campérêve",
    ],
    contras: [
      "La altura sube a 2,76 m con el techo elevable: atención a las barreras de 2,5 m",
      "Solo 355 kg de carga útil en la ficha oficial: viajar ligero es obligatorio",
      "El depósito de agua limpia puede limitarse a 10 L en marcha para no perder carga útil",
      "Tarifa oficial no publicada en la web: el precio hay que consultarlo en la red",
      "Sin prueba EuroNCAP específica del modelo camperizado",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica-2.webp",
        alt: "Campérêve Magellan 643 Air Saphir, furgón camper de 5,99 m en vista exterior",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica-interior.webp",
        alt: "Campérêve Magellan 643 Air Saphir, salón y cocina del interior camper",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Campérêve Magellan 643 Air Saphir, zona de descanso y armario Modul'Space",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "campereve-magellan-643-air-saphir-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada: motor según plan Fiat/Peugeot + control de estanqueidad de la célula",
      revisiones: [
        {
          nombre: "Revisión anual",
          queSeCambia: "Aceite y filtros del motor, estanqueidad de la célula, gas y electricidad",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Plan oficial Fiat Ducato / Peugeot Boxer + recomendaciones Campérêve",
    },
    euroncap: null,
    curiosidad: {
      texto: "El Magellan 643 es el modelo estrella de la gama Campérêve y desde la primavera de 2026 existe la versión 643 Air: el techo elevable suma dos plazas de noche y la ficha oficial pasa a 2+2 couchages.",
      fuenteNombre: "Campérêve (web oficial)",
      fuenteUrl: "https://www.campereve.fr/fourgon_gamme-magellan_magellan-643-air-saphir.phtml",
    },
    fuenteUrl: "https://www.campereve.fr/fourgon_gamme-magellan_magellan-643-air-saphir.phtml",
  },
];
