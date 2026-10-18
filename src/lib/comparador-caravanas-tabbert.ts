// Caravanas Tabbert — lote 4 (18/10/2026). Primera ficha de la marca.
// Tabbert Senara 490 TD 2026.
// Datos verificados: anuncios de distribuidores oficiales Tabbert del modelo
// 2026 (7.330/2.320/2.600 mm, 1.333 kg en vacío, MMA 1.700 kg —ampliable a
// 1.800 kg—, 4 plazas: cama francesa 200x138 + salón trasero convertible,
// 29.490 € matriculada / UPE 34.891 €) + Tabbert (web oficial, marca).
// Fotos: reales del modelo exacto en concesionario (verificadas visualmente);
// NO son de prensa oficial (origen: anuncios de distribuidores).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_TABBERT: CocheComparador[] = [
  {
    id: "tabbert-senara-490-td-2026-precio-ficha-tecnica",
    marca: "Tabbert",
    modelo: "Senara 490 TD",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 29490,
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
      "/media/tabbert-senara-490-td-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/tabbert-senara-490-td-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    largoMm: 7330,
    anchoMm: 2320,
    altoMm: 2600,
    pesoKg: 1333,
    mmaKg: 1700,
    carnetNecesario: "B",
    cargaUtilKg: 367,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "Diseño premium Tabbert por ~29.500 €: la entrada al lujo alemán",
      "Cama francesa de 200x138 cm + salón trasero convertible: 4 plazas cómodas",
      "1.333 kg en vacío con aumento a 1.800 kg: gran carga útil disponible",
      "Truma S 3005, ATC de serie y 45 l de agua limpia",
      "Altura interior de 1,96 m: se está de pie con holgura",
    ],
    contras: [
      "Precio de unidad matriculada con paquetes; la UPE es 34.891 €",
      "7,33 m exigen experiencia remolcando",
      "El salón trasero hay que montarlo cada noche",
      "Sin depósito de grises fijo de serie (enrollable en opción)",
      "Tabbert es premium: los repuestos y extras cuestan más",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 160,
      seguroAmpliadoAnual: 320,
      mantenimientoAnual: 220,
      costeMensualTotal: 135,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/tabbert-senara-490-td-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Tabbert Senara 490 TD en concesionario, vista trasera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/tabbert-senara-490-td-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Tabbert Senara 490 TD en campa, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/tabbert-senara-490-td-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Tabbert Senara 490 TD, vista delantera tres cuartos",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "tabbert-senara-490-td-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad y frenos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad y estado de frenos y neumáticos",
          costeAproxEur: 220,
        },
      ],
      costeAnualAproxEur: 220,
      fuente: "Recomendaciones Tabbert + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Tabbert (web oficial) + red de distribuidores oficiales",
    fuenteUrl: "https://www.tabbert.com/en/",
  },
];
