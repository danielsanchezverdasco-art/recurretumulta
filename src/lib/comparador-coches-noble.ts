// Noble — gama real 2024+ (1 ficha: el M500 es el único modelo en producción).
// Fecha de verificación: 05/10/2026.
// Fuentes: noblecars.com, Wikipedia (Noble M500), Autocar, Top Gear, carbuzz.com.
// El Noble M600 (2011–2018, versiones Coupé / CarbonSport / Speedster) NO se incluye:
// su producción terminó en 2018, por lo que no es un modelo real 2024+.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_NOBLE: CocheComparador[] = [
  {
    id: "noble-m500-2025-precio-ficha-tecnica",
    marca: "Noble",
    modelo: "M500",
    tipo: "Gasolina",
    categoria: "Deportivo",
    precioDesde: 178100,
    potenciaCv: 550,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: 3.6,
    velocidadMax: 278,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: 1350,
    consumo: null,
    consumoUnidad: null,
    plazas: 2,
    parNm: 807,
    traccion: "Trasera",
    emisionesCo2: null,
    aprox: ["precioDesde", "pesoKg"],
    pros: [
      "550 CV con V6 biturbo Ford y solo 1.350 kg: más de 400 CV por tonelada",
      "Cambio manual Graziano de 6 marchas y chasis sin ABS ni ESP: conducción analógica pura",
      "0-100 km/h en 3,6 s y 278 km/h de punta, al nivel de un McLaren por bastante menos",
      "Interior minimalista con tres pantallas y asientos Recaro Podium",
      "Producción artesanal limitada a unas 50 unidades al año en Leicester",
    ],
    contras: [
      "Aprox. 178.100 € según precio oficial del fabricante (150.000 GBP), sin venta oficial en España",
      "Sin ABS, sin airbags y sin ESP: no apto para conductores poco experimentados",
      "No se vende oficialmente en España: sin red de servicio ni homologación europea",
      "Habitabilidad espartana y maletero delantero limitado",
      "Consumo no homologado y marca minúscula: garantía y repuestos inciertos",
    ],
    imagen: "/media/noble-m500-2025-precio-ficha-tecnica-hero.webp",
    imagenOficial: "/media/noble-m500-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/noble-m500-2025-precio-ficha-tecnica-interior.webp",
    analisisSlug: "noble-m500-2025-precio-ficha-tecnica",
    videoId: "5awrSW8WcNI",
    videoCanal: "Top Gear",
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 19.75,
      precioKwh: 0.18,
      precioGasolinaL: 1.58,
      seguroTercerosAnual: 800,
      seguroAmpliadoAnual: 2200,
      mantenimientoAnual: 2500,
      costeMensualTotal: 689,
      notas:
        "Estimación con 15.000 km/año y consumo estimado de 12,5 l/100 km (sin cifra oficial WLTP). Seguro a todo riesgo y mantenimiento estimados para un superdeportivo artesanal de producción muy limitada.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/noble-m500-2025-precio-ficha-tecnica-hero.webp",
        alt: "Noble M500 amarillo, tres cuartos delantero en carretera de montaña al atardecer",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/noble-m500-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Noble M500 amarillo, vista lateral de perfil en ciudad europea",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/noble-m500-2025-precio-ficha-tecnica-interior.webp",
        alt: "Interior minimalista del Noble M500 con pantalla digital y palanca de cambio manual",
        ancho: 1920,
        alto: 1280,
      },
    ],
  },
];
