// Benelli TRK 800 — ficha creada el 05/11/2026 para cerrar la URL heredada en 404
// /coches/benelli-trk-800-2026-precio-ficha-tecnica/ (top-10 en Search Console).
// La URL heredada vive bajo /coches/, así que la ficha se sirve con el sistema de
// fichas de coches (como ya ocurre con las autocaravanas), aunque el modelo es una moto.
// Datos verificados: nota de prensa oficial de Benelli (EICMA 2021 y versión de
// producción EICMA 2022) con la ficha técnica oficial: bicilíndrico 754 cc,
// 76,2 CV a 8.500 rpm y un par de 67 Nm a 6.500 rpm, 226 kg en seco, depósito 22 l,
// asiento 834 mm, Marzocchi/Brembo, Euro 5. Fuente: bikereview.com.au
// (transcripción de la nota oficial) y benelli.com.au. Sin tarifa oficial en
// España (no se comercializó en la red española) → precioDesde null, no se inventa.
// Fotos: fotos oficiales de prensa de Benelli distribuidas vía 1000PS
// (motorrad-bilder.at), verificadas visualmente el 05/11/2026 (modelo exacto,
// estudio, sin concesionario ni pegatinas):
// - hero:    https://www.motorrad-bilder.at/thumbs/992x558xfarx272a2c00/slideshows/291/020710/TRK_800_2.jpg
// - oficial: https://www.motorrad-bilder.at/thumbs/992x558xfarx272a2c00/slideshows/291/020710/TRK_800_1.jpg
// - trasera: https://www.motorrad-bilder.at/thumbs/992x558xfarx272a2c00/slideshows/291/020710/TRK_800_4.jpg
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_BENELLI: CocheComparador[] = [
  {
    id: "benelli-trk-800-2026-precio-ficha-tecnica",
    marca: "Benelli",
    modelo: "TRK 800",
    tipo: "Gasolina",
    categoria: "Trail",
    precioDesde: null,
    versiones: [
      {
        nombre: "TRK 800 · sin tarifa oficial en España",
        precio: null,
      },
    ],
    potenciaCv: 76.2,
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
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: 226,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: 67,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Bicilíndrico de 754 cc con 76,2 CV y 67 Nm: el motor de la Leoncino 800 en clave trail",
      "226 kg en seco: más ligera que la superventas TRK 502",
      "Depósito de 22 litros y asiento a 834 mm: pensada para viajar",
      "Horquilla Marzocchi regulable, frenos Brembo y pantalla TFT de 7 pulgadas",
      "La cima de la familia TRK por encima de las 502 y 702",
    ],
    contras: [
      "Sin tarifa oficial en España: no llegó a comercializarse en la red española",
      "Paquete electrónico básico: sin los modos ni ayudas de sus rivales 2026",
      "Homologación Euro 5, anterior a la Euro 5+ vigente",
      "Los 226 kg son en seco: en orden de marcha suma depósito y líquidos",
      "La gama Benelli actual en España apuesta por la TRK 902 Stradale",
    ],
    imagen: "/media/benelli-trk-800-2026-precio-ficha-tecnica-hero.webp",
    imagenOficial: "/media/benelli-trk-800-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    analisisSlug: null,
    opiniones: [],
    costeMensual: null,
    galeria: [
      {
        src: "/media/benelli-trk-800-2026-precio-ficha-tecnica-hero.webp",
        alt: "Benelli TRK 800, tres cuartos delantero (foto de prensa Benelli)",
        ancho: 992,
        alto: 558,
      },
      {
        src: "/media/benelli-trk-800-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Benelli TRK 800, perfil lateral (foto de prensa Benelli)",
        ancho: 992,
        alto: 558,
      },
      {
        src: "/media/benelli-trk-800-2026-precio-ficha-tecnica-trasera.webp",
        alt: "Benelli TRK 800, tres cuartos trasero (foto de prensa Benelli)",
        ancho: 992,
        alto: 558,
      },
    ],
    fuenteNombre: "Benelli (nota de prensa oficial EICMA, vía bikereview.com.au)",
    fuenteUrl: "https://bikereview.com.au/new-model-2022-benelli-trk-800-eicma-2021/",
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Euro NCAP no evalúa motocicletas.",
    },
    planMantenimiento: null,
    confianza: "media",
  },
];
