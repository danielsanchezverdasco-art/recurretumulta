// Caravanas Hobby — lote 4 (18/10/2026).
// Hobby OnTour 390 SF 2026.
// Datos verificados: Hobby (prensa oficial: 2,20 m de ancho, 1.200 kg,
// desde 21.100 €, tapicería Nero Sol 2026, paquete HOBBYKOMPLETT) +
// anuncios de distribuidores oficiales del modelo 2026 (5.800 mm,
// MMA hasta 1.350 kg, 21.980 € nueva).
// Fotos: reales del modelo exacto en concesionario (verificadas visualmente);
// NO son de prensa oficial (origen: anuncios de distribuidores).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const CARAVANAS_HOBBY: CocheComparador[] = [
  {
    id: "hobby-ontour-390-sf-2026-precio-ficha-tecnica",
    marca: "Hobby",
    modelo: "OnTour 390 SF",
    tipo: "Caravana",
    categoria: "Caravana",
    precioDesde: 21980,
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
      "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial-3.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5800,
    anchoMm: 2200,
    altoMm: 2575,
    pesoKg: 1200,
    mmaKg: 1350,
    carnetNecesario: "B",
    cargaUtilKg: 150,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde", "altoMm", "cargaUtilKg"],
    pros: [
      "La más vendida para empezar: nº 1 en la encuesta promobil 2026 de su clase",
      "Solo 5,80 m y 1.200 kg: la remolca casi cualquier coche con carnet B",
      "Precio de acceso a Hobby nueva: desde ~21.980 € con todo incluido",
      "Paquete HOBBYKOMPLETT de serie: estabilizador, toldo, HOBBYCONNECT",
      "2,20 m de ancho: cabe en plazas y caminos donde las grandes no entran",
    ],
    contras: [
      "Carga útil justa (150 kg): hay que vigilar el peso con 4 personas",
      "Compacta por dentro: baño y cocina de tamaño contenido",
      "Las 3.ª y 4.ª plazas salen del salón convertible",
      "Sin mover de serie: maniobrarla a mano en cuesta cuesta",
      "El avance se presupuesta aparte",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 0,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 140,
      seguroAmpliadoAnual: 280,
      mantenimientoAnual: 180,
      costeMensualTotal: 120,
      notas:
        "Estimación: seguro de caravana + revisión anual de estanqueidad y gas. Sin motor propio.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Hobby OnTour 390 SF 2026 en concesionario, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Interior de la Hobby OnTour 390 SF, cocina y cama",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/hobby-ontour-390-sf-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Hobby OnTour 390 SF 2026 en campa, vista trasera",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "hobby-ontour-390-sf-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Revisión anual recomendada: estanqueidad, gas, electricidad y frenos",
      revisiones: [
        {
          nombre: "Revisión anual de la caravana",
          queSeCambia:
            "Estanqueidad, instalación de gas, electricidad y estado de frenos y neumáticos",
          costeAproxEur: 180,
        },
      ],
      costeAnualAproxEur: 180,
      fuente: "Recomendaciones Hobby + red de distribuidores",
    },
    euroncap: null,
    fuenteNombre: "Hobby (prensa oficial) + red de distribuidores oficiales",
    fuenteUrl:
      "https://mediaportal.hobby-caravan.de/en/press-release/all-hobby-innovations-for-the-2025-caravan-and-motorhome-season-at-a-glance/",
  },
];
