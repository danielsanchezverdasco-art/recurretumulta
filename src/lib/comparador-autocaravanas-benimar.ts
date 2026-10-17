// Autocaravanas Benimar — ficha 1 (lote caravanas 1, 17/10/2026).
// Datos verificados: catálogo oficial Benimar (benimar.es), prensa especializada
// (accamper.com), red oficial de concesionarios. Precio: orientativo en España
// (Benimar no publica PVP oficial; marcado en "aprox").
// Fotos: reales del modelo exacto, verificadas visualmente.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const AUTOCARAVANAS_BENIMAR: CocheComparador[] = [
  {
    id: "benimar-tessoro-463-up-2026-precio-ficha-tecnica",
    marca: "Benimar",
    modelo: "Tessoro 463 UP",
    tipo: "Autocaravana perfilada",
    categoria: "Autocaravana",
    precioDesde: 66000,
    potenciaCv: 130,
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
    imagen:
      "/media/benimar-tessoro-463-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/benimar-tessoro-463-up-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/benimar-tessoro-463-up-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7480,
    anchoMm: 2300,
    altoMm: 2970,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    pros: [
      "La autocaravana más vendida de España en 2024, 2025 y 2026: valor de reventa blindado",
      "5 plazas para dormir y 5 para circular con carnet B (MMA 3.500 kg)",
      "Camas gemelas traseras convertibles en cama doble + cama basculante eléctrica",
      "Versión UP 'lista para viajar': toldo, placa solar y TV incluidos de serie",
      "Fabricada en España por Benimar: red de servicio y recambios en todo el país",
    ],
    contras: [
      "Con 7,48 m de largo no es la más ágil en pueblos y parkings ajustados",
      "El motor base de 130 CV se queda justo con la autocaravana cargada a tope",
      "La quinta plaza para dormir es el salón convertible: menos cómoda que las camas fijas",
      "El precio real con opcionales (Pack Plus, 165 CV, automático) se acerca a los 75.000 €",
      "La carga útil con 5 ocupantes obliga a vigilar el peso si se equipa mucho",
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
        src: "/media/benimar-tessoro-463-up-2026-precio-ficha-tecnica-oficial-2.webp",
        alt: "Benimar Tessoro 463 UP, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-tessoro-463-up-2026-precio-ficha-tecnica-oficial-3.webp",
        alt: "Benimar Tessoro 463 UP, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/benimar-tessoro-463-up-2026-precio-ficha-tecnica-interior-oficial.webp",
        alt: "Cocina de la Benimar Tessoro 463 UP, foto oficial",
        ancho: 1200,
        alto: 1500,
      },
    ],
    analisisSlug: "benimar-tessoro-463-up-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Ford Transit: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Benimar (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Benimar",
    },
    euroncap: null,
    fuenteNombre: "Benimar (catálogo oficial) + accamper.com",
    fuenteUrl: "https://www.benimar.es/wp-content/uploads/Catalogo-BENIMAR-ESPANOL.pdf",
  },
];
