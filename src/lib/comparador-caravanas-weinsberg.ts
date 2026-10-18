// Caravanas Weinsberg — ficha 1 (lote caravanas 2A, 17/10/2026).
// Datos verificados: red de concesionarios Weinsberg/Knaus Tabbert
// (caravana.de, caraworld), prensa especializada. Precio: orientativo en Europa
// (Weinsberg no publica PVP oficial por modelo en España; marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_WEINSBERG: CocheComparador[] = [
  {
    id: "weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica",
    marca: "Weinsberg",
    modelo: "CaraOne 550 QDK",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 27570,
    potenciaCv: null,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen:
      "/media/weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7590,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1700,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "5 plazas homologadas: cama transversal delantera + literas + comedor convertible",
      "Literas de 1,87x0,76 m: la distribución familiar por excelencia",
      "1.700 kg de MMA con un solo eje: la remolca cualquier SUV o berlina media",
      "Precio orientativo ~27.570 €: de las 5 plazas más baratas del mercado",
      "Grupo Knaus Tabbert: construcción sólida y buena reventa en Europa",
    ],
    contras: [
      "7,59 m con un solo eje: sensible al viento lateral remolcando",
      "Cama transversal de 2,08x1,39 m: uno de los dos duerme contra la pared",
      "Acabados básicos: se nota que es gama de entrada",
      "Baño con WC y lavabo, pero sin ducha separada",
      "Con 5 ocupantes, el agua y la carga útil van al límite",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 150,
      seguroAmpliadoAnual: 300,
      mantenimientoAnual: 200,
      costeMensualTotal: 120,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Weinsberg CaraOne 550 QDK, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica-oficial-4.webp",
        alt: "Weinsberg CaraOne 550 QDK, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Weinsberg CaraOne 550 QDK, cama transversal delantera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "weinsberg-caraone-550-qdk-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo: "Revisión anual recomendada (estanqueidad + gas + frenos)",
      revisiones: [
        {
          nombre: "Revisión anual de la célula",
          queSeCambia:
            "Estanqueidad, instalación de gas, frenos, neumáticos y humedades",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Weinsberg/Knaus Tabbert + red de concesionarios",
    },
    euroncap: null,
    fuenteNombre: "Weinsberg (Knaus Tabbert) + red de concesionarios",
    fuenteUrl:
      "https://www.caravana.de/wohnwagen/weinsberg/caraone/weinsberg-caraone-550-qdk-8c046f",
  }
];
