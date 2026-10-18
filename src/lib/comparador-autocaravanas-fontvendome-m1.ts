// Autocaravanas Font Vendôme — lote Merlín 4 (18/10/2026).
// Datos verificados: ficha oficial del fabricante 2026 (PDF)
// (Font Vendôme no publica PVP: precioDesde en null).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_FONTVENDOME_M1: CocheComparador[] = [
  {
    id: "font-vendome-mondea-2026-precio-ficha-tecnica",
    marca: "Font Vendôme",
    modelo: "Mondéa",
    tipo: "Camper / furgón",
    categoria: "Autocaravana",
    precioDesde: null, // Font Vendôme no publica PVP oficial; no inventar
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
    imagen: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/font-vendome-mondea-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990,
    anchoMm: 2050,
    altoMm: 2890,
    pesoKg: null, // masa en orden de marcha publicada: 3.088–3.148 kg
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Ducha separada de verdad con bac de poliéster en un furgón de 5,99 m: casi nadie lo ofrece en este formato",
      "Masa en orden de marcha publicada (3.088–3.148 kg): sabes la carga útil real antes de firmar",
      "Fiat Ducato 2.2 con Traction+: motricidad extra en barro y nieve sin pagar un 4x4",
      "4 plazas de viaje y 4 camas: familia de cuatro sin literas improvisadas",
      "Cabina transformable en espacio de vida: sensación de volumen impropia de un furgón",
    ],
    contras: [
      "Altura de 2,89 m: olvídate de parkings subterráneos y de algunos peajes con límite",
      "Cama alta eléctrica: el acceso nocturno es menos cómodo que una cama fija trasera",
      "Furgón de 2,05 m de ancho: el salón es estrecho frente a una perfilada de 2,3 m",
      "Sin PVP oficial: la negociación depende por completo del concesionario",
      "Techo fijo alto: más consumo y mayor sensibilidad al viento lateral",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 13.5,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 420,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Font Vendôme Mondéa, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Font Vendôme Mondéa, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "font-vendome-mondea-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Font Vendôme (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: "Font Vendôme (ficha oficial 2026 del fabricante)",
    fuenteUrl: "https://docs.campingcar-infos.com/docs/Font-Vendome%20(vans)/FontVendome%202026%20Mondea.pdf",
  },
];
