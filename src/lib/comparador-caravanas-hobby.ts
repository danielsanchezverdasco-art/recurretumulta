// Caravanas Hobby — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: red oficial Hobby (datos técnicos del modelo 2026)
// + precio de lista de distribuidor oficial. Precio orientativo
// (marcado en "aprox"). Las caravanas no llevan etiqueta DGT.
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_HOBBY: CocheComparador[] = [
  {
    id: "hobby-de-luxe-540-ul-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "De Luxe 540 UL",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 34500,
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
      "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-oficial-2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7300,
    anchoMm: 2300,
    altoMm: 2640,
    pesoKg: 1263,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "La caravana más vendida de Europa: red de servicio y repuestos imbatible",
      "Camas individuales traseras + salón convertible: 4 plazas sin literas",
      "1.800 kg de MMA con un solo eje: remolcable con carnet B y coche medio",
      "Altura interior de 1,95 m y gran sensación de espacio",
      "Garantía de estanqueidad de 5 años",
    ],
    contras: [
      "Con 7,30 m totales exige experiencia remolcando y plaza de parking",
      "El precio orientativo (~34.500 €) es alto frente a la competencia",
      "Con 1.263 kg en vacío, la carga útil con 4 ocupantes es justa",
      "Sin mover eléctrico, maniobrar 7,3 m a mano es duro",
      "El avance no viene de serie: hay que presupuestarlo aparte",
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
        src: "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Hobby De Luxe 540 UL, imagen oficial",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Hobby De Luxe 540 UL, vista lateral real",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-de-luxe-540-ul-2026-precio-ficha-tecnica-oficial-4.webp",
        alt: "Hobby De Luxe 540 UL, vista tres cuartos",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hobby-de-luxe-540-ul-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad y frenos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad y estado de frenos y neumáticos",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Hobby + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Hobby (red oficial)",
    fuenteUrl: "https://www.hobby-caravan.de/ch_de/wohnwagen/de-luxe/540-ul/",
  },
];
