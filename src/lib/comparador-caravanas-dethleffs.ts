// Caravanas Dethleffs — lote-2 G4 (19/10/2026).
// Datos oficiales de dethleffs.com / dethleffs.es (precios en JSON-LD) y pesos
// 2026 del exposé del distribuidor: Nomad 520 ELT (7.480/2.500/2.820 mm,
// 1.680 kg en orden de marcha, MMA 2.000 kg, 3 plazas, 33.499 €) y
// Beduin Scandinavia 690 BQT (9.070/2.500/2.820, 1.855 kg, MMA 2.200 kg
// ampliable a 2.500, doble eje, 4 plazas, 56.190 €). La marca no publica
// la carga útil en su web → cargaUtilKg: null (sin calcular).
// Fotos: reales del modelo exacto, verificadas visualmente (la del Beduin
// 690 BQT interior es oficial de Dethleffs; resto, distribuidores).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_DETHLEFFS: CocheComparador[] = [
  {
    id: "dethleffs-nomad-520-elt-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Nomad 520 ELT",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 33499,
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
      "/media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7480,
    anchoMm: 2500,
    altoMm: 2820,
    pesoKg: 1680,
    mmaKg: 2000,
    carnetNecesario: "B96",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 3,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Precio oficial desde 33.499 €: la Dethleffs de 2,50 m más asequible",
      "Camas individuales de 200x85 y 190x85: se duerme sin molestar a la pareja",
      "2,82 m de altura total: de las más altas y luminosas de su tamaño",
      "MMA de 2.000 kg con 1.680 kg en orden de marcha: 320 kg de margen de carga",
      "Salón convertible: tercera plaza para un invitado ocasional",
    ],
    contras: [
      "Con 2.000 kg de MMA necesitas carnet B96 (o B+E según el coche)",
      "3 plazas justas: no es una familiar para 4",
      "1.680 kg en orden de marcha: exige un coche tractor con buen par motor",
      "7,48 m totales: hay que reservar parcela con antelación en temporada alta",
      "El equipamiento nórdico (suelo radiante, etc.) es opcional y caro",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Dethleffs Nomad 520 ELT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Dethleffs Nomad 520 ELT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-nomad-520-elt-2026-precio-ficha-tecnica.webp",
        alt: "Dethleffs Nomad 520 ELT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug:
      "dethleffs-nomad-520-elt-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad, frenos y neumáticos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad, frenos y neumáticos",
          costeAproxEur: 200,
        },
      ],
      costeAnualAproxEur: 200,
      fuente: "Recomendaciones Dethleffs + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (web oficial, precio y pesos 2026)",
    fuenteUrl: "https://www.dethleffs.com/caravans/nomad/520-elt",
  },
  {
    id: "dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica",
    marca: "Dethleffs",
    modelo: "Beduin Scandinavia 690 BQT",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 56190,
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
      "/media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica.webp",
    imagenOficial:
      "/media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica.webp",
    imagenInteriorOficial:
      "/media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 9070,
    anchoMm: 2500,
    altoMm: 2820,
    pesoKg: 1855,
    mmaKg: 2200,
    carnetNecesario: "B96",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: [],
    pros: [
      "La caravana nórdica de Dethleffs: calefacción por agua caliente y suelo radiante de serie",
      "Cama queen de 185-200x155 cm: la más grande de este lote",
      "Doble eje y 9,07 m: estabilidad y espacio de autocaravana grande",
      "MMA de 2.200 kg ampliable a 2.500 kg: margen para equipamiento de invierno",
      "Aislamiento reforzado para climas fríos: la 4 estaciones de verdad",
    ],
    contras: [
      "Carnet B96 o B+E: con 2.200 kg de MMA el B no basta",
      "56.190 € de partida: la más cara de este lote",
      "1.855 kg en orden de marcha: solo para SUV o pick-up potentes",
      "9,07 m totales: parcelas grandes y maniobras complicadas",
      "En España el equipamiento nórdico se aprovecha solo en invierno o en el norte",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Dethleffs Beduin Scandinavia 690 BQT, vista delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Dethleffs Beduin Scandinavia 690 BQT, vista trasera (prensa)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica.webp",
        alt: "Dethleffs Beduin Scandinavia 690 BQT, vista lateral",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug:
      "dethleffs-beduin-scandinavia-690-bqt-2026-precio-ficha-tecnica-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad, frenos (doble eje), neumáticos y circuito de agua caliente",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad, frenos de los dos ejes, neumáticos y revisión del circuito de agua caliente y suelo radiante",
          costeAproxEur: 300,
        },
      ],
      costeAnualAproxEur: 300,
      fuente: "Recomendaciones Dethleffs + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Dethleffs (web oficial España, precio y pesos 2026)",
    fuenteUrl: "https://www.dethleffs.es/caravanas/beduin-scandinavia/690-bqt",
  },
];
