// Wiesmann — gama real 2024+ vendida/anunciada para Europa.
// Fecha de verificación: 05/10/2026.
// Fuentes: wiesmann.com, insideevs.com, autocar.co.uk, goodwood.com,
// carscoops.com, carenthusiast.com, racecar.com, autogear.pt, electrek.co.
// La marca de nicho tiene UN único modelo real 2024+: el Project Thunderball
// (roadster 100 % eléctrico presentado en abril de 2022, producción limitada
// a 1.000 unidades, precio desde 300.000 €). Los modelos históricos
// (GT MF5, MF4, MF3) son anteriores a 2014 y no entran en la cobertura 2024+.
// El anunciado "MF6" de motor V8 (2020) nunca llegó a producción.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_WIESMANN: CocheComparador[] = [
  {
    id: "wiesmann-project-thunderball-2025-precio-ficha-tecnica",
    marca: "Wiesmann",
    modelo: "Project Thunderball",
    tipo: "Eléctrico",
    categoria: "Cabrio",
    precioDesde: 300000,
    potenciaCv: 680,
    autonomiaKm: 500,
    maleteroL: 180,
    ceroCien: 2.9,
    velocidadMax: null,
    bateriaKwh: 92,
    cargaRapidaKw: 300,
    etiquetaDgt: "Cero",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: 4440,
    anchoMm: 2210,
    altoMm: null,
    pesoKg: 1775,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: 1100,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: ["autonomiaKm", "bateriaKwh", "pesoKg", "maleteroL", "anchoMm"],
    pros: [
      "680 CV y 1.100 Nm en un roadster de ~1.775 kg: 0-100 km/h en 2,9 s",
      "Arquitectura de 800 V con carga ultrarrápida de 300 kW en CC",
      "Autonomía objetivo de 500 km WLTP, de récord entre los roadster eléctricos",
      "Fabricación artesanal en Dülmen: cada coche se co-crea con el cliente",
      "Producción limitada a 1.000 unidades: exclusividad de colección",
    ],
    contras: [
      "Precio desde 300.000 €: territorio de Bentley y Ferrari",
      "Entregas retrasadas: la producción prevista para 2024 sigue sin empezar",
      "Maletero de solo ~180 litros (frunk delantero): practicidad mínima",
      "Marca de nicho con red de servicio muy reducida frente a Porsche o Mercedes",
      "Sin cifras oficiales de consumo, velocidad máxima o prueba Euro NCAP",
    ],
    imagen: "/media/wiesmann-project-thunderball-2025-precio-ficha-tecnica-hero.webp",
    imagenOficial:
      "/media/wiesmann-project-thunderball-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "",
    videoId: "tppTLExVKs8",
    videoCanal: "Electrek",
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 3.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 1150,
      seguroAmpliadoAnual: 4800,
      mantenimientoAnual: 1500,
      costeMensualTotal: 570,
      notas:
        "Estimación para 15.000 km/año con recarga doméstica (0,18 €/kWh) y consumo estimado de 20 kWh/100 km (no publicado por la marca). Seguro acorde a un vehículo de 300.000 €. Estimación aproximada.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/wiesmann-project-thunderball-2025-precio-ficha-tecnica-hero.webp",
        alt: "Wiesmann Project Thunderball, tres cuartos delantero en carretera de montaña al atardecer",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/wiesmann-project-thunderball-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Wiesmann Project Thunderball, vista lateral en calle europea",
        ancho: 1920,
        alto: 1280,
      },
      
    ],
    analisisSlug: "wiesmann-project-thunderball-2025-precio-ficha-tecnica",
  },
];
