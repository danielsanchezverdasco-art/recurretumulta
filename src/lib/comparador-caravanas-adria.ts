// Caravanas Adria — lote 4 (18/10/2026).
// Adria Altea 542 PK 2026.
// Datos verificados: representante oficial Adria (MMA 1.500 kg,
// 7.434 mm, 6 plazas, 23.000 € + IVA) + catálogo oficial Adria
// (carrocería 6.120 mm, 2.296 mm, 6+1 plazas). Peso en vacío y carga útil
// orientativos: marcados en "aprox" (dato no oficial · en revisión).
// Fotos: 1 real del modelo en concesionario + 2 oficiales de prensa Adria
// (gama Altea); las oficiales se marcan como tales.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_ADRIA: CocheComparador[] = [
  {
    id: "adria-altea-542-pk-2026-precio-ficha-tecnica",
    marca: "Adria",
    modelo: "Altea 542 PK",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 23000,
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
      "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial-2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7434,
    anchoMm: 2296,
    altoMm: 2580,
    pesoKg: 1180,
    mmaKg: 1500,
    carnetNecesario: "B",
    cargaUtilKg: 320,
    consumo: null,
    consumoUnidad: null,
    plazas: 6,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg", "cargaUtilKg"],
    pros: [
      "6 plazas reales por ~23.000 €: imbatible en espacio por euro",
      "Chasis AL-KO con opción a 1.500/1.700 kg: ligera y estable",
      "Diseño Altea de nueva generación: luminosa y moderna",
      "Cocina completa con horno y nevera de 140 l",
      "Baño con ducha separada en una 6 plazas de este precio",
    ],
    contras: [
      "Precio sin IVA (23.000 € + IVA): confirmar total en concesionario",
      "Peso en vacío orientativo: la carga útil real depende del equipamiento",
      "7,43 m exigen experiencia remolcando",
      "Las literas son justas para adolescentes altos",
      "El avance se presupuesta aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 150,
      seguroAmpliadoAnual: 300,
      mantenimientoAnual: 200,
      costeMensualTotal: 125,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Interior oficial de la gama Adria Altea, salón familiar",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Interior oficial de la gama Adria Altea",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/adria-altea-542-pk-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Adria Altea en concesionario, vista trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "adria-altea-542-pk-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Adria + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Adria (representante oficial) + catálogo oficial Adria",
    fuenteUrl:
      "https://www.kemperiai365.lt/en/camper-vans-for-purchase/adria-altea-542-pk/",
  },
];
