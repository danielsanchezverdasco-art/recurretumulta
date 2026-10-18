// Caravanas Fendt — lote 4 (18/10/2026).
// Fendt Bianco Selection 515 SG 2026.
// Datos verificados: Fendt-Caravan (web oficial: 751 cm, 232 cm, 4 plazas,
// camas individuales, línea Selection, Truma S 3004/S 5004, Slim-Tower).
// Pesos y precio orientativos de la red de distribuidores: marcados en
// "aprox" (dato no oficial · en revisión).
// Fotos: oficiales de prensa Fendt-Caravan (gama Bianco; la foto de camas
// individuales corresponde a la distribución de camas separadas de la 515).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_FENDT: CocheComparador[] = [
  {
    id: "fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica",
    marca: "Fendt",
    modelo: "Bianco Selection 515 SG",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 32000,
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
      "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial-2.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7510,
    anchoMm: 2320,
    altoMm: 2570,
    pesoKg: 1420,
    mmaKg: 1700,
    carnetNecesario: "B",
    cargaUtilKg: 280,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "altoMm", "pesoKg", "cargaUtilKg"],
    pros: [
      "Camas individuales: el dormitorio más cómodo y demandado del segmento",
      "7,51 m con 4 plazas reales: salón convertible + camas fijas",
      "Línea Selection: la Fendt más equilibrada en precio-equipamiento",
      "Nevera Slim-Tower y cocina de 3 fuegos con fregadero de acero",
      "1.700 kg de MMA: carnet B con un SUV medio",
    ],
    contras: [
      "Precio orientativo (~32.000 €): Fendt no publica PVP por modelo en España",
      "Las camas individuales restan salón frente a una cama francesa",
      "7,51 m exigen experiencia remolcando",
      "El equipamiento Activ (Truma Combi) se paga aparte",
      "Peso en vacío contenido pero carga útil justa si se equipa mucho",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 160,
      seguroAmpliadoAnual: 320,
      mantenimientoAnual: 200,
      costeMensualTotal: 130,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Camas individuales de la Fendt Bianco Selection 515 SG, foto oficial",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Cocina de la Fendt Bianco Selection 515 SG, foto oficial",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Salón de la Fendt Bianco Selection 515 SG, foto oficial",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "fendt-bianco-selection-515-sg-2026-precio-ficha-tecnica",
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
      fuente: "Recomendaciones Fendt-Caravan + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Fendt-Caravan (web oficial)",
    fuenteUrl: "https://www.fendt-caravan.com/en/bianco.html",
  },
];
