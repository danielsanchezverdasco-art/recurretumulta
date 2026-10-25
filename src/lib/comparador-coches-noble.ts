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
    precioDesde: 212000,
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
      "Precio elevado: unas 212.000 € al cambio de las £180.000 británicas",
      "Sin ABS, sin airbags y sin ESP: no apto para conductores poco experimentados",
      "No se vende oficialmente en España: sin red de servicio ni homologación europea",
      "Habitabilidad espartana y maletero delantero limitado",
      "Consumo no homologado y marca minúscula: garantía y repuestos inciertos",
    ],
    imagen: "",
    imagenOficial: "/media/noble-m500-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
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
      { src: "/media/noble-m500-2025-precio-ficha-tecnica-hunt1.webp", alt: "M500 (foto: evo Magazine, licencia desconocida)", ancho: 1260, alto: 710 },
      { src: "/media/noble-m500-2025-precio-ficha-tecnica-hunt2.webp", alt: "M500 (foto: Autocar (reveal de producción 2022), licencia desconocida)", ancho: 900, alto: 596 },
      { src: "/media/noble-m500-2025-precio-ficha-tecnica-hunt3.webp", alt: "M500 (foto: Autocar (reveal de producción 2022), licencia desconocida)", ancho: 900, alto: 596 },
    ],
  },
];
