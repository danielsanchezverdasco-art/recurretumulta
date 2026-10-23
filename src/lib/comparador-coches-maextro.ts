// MAEXTRO — gama real 2024+ (2 fichas nuevas).
// Fecha de verificación: 05/10/2026.
// Maextro es la marca de ultra-lujo de Huawei + JAC (alianza HIMA).
// La marca tiene UN único modelo a la venta, el S800 (lanzado el 30/05/2025 en China),
// en dos versiones de motorización reales y distintas: BEV (eléctrico puro) y EREV
// (extensor de autonomía con motor 1.5T). Los SUV y MPV anunciados para 2026 aún no
// existen (solo plan anunciado por 36Kr/CnEVPost, noviembre 2025): PROHIBIDO inventar.
// La ficha "maextro-v800-huawei-precio-ficha-tecnica" ya existente NO es un modelo
// real de Maextro (describe un supuesto monovolumen "V800" de 6 plazas que no existe);
// no se duplica ni se toca aquí.
// Precios: solo se venden en China, en yuanes. Convertidos con ≈0,13 €/CNY.
// Fuentes: cnevpost.com (lanzamiento 30/05/2025, ventas, precios por versión),
// en.wikipedia.org/wiki/Maextro_S800 (tabla de especificaciones BEV/EREV),
// evkx.net (datos de batería 97 kWh y consumo BEV), en.engear.tv, just-auto.com,
// ev.motorwatt.com (review en vídeo del BEV).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_MAEXTRO: CocheComparador[] = [
  {
    id: "maextro-s800-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial:
      "/media/maextro-s800-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/maextro-s800-2025-precio-ficha-tecnica-interior.webp",
    videoId: "d6FGjIQJEZ8",
    videoCanal: "MotorWatt",
    marca: "Maextro",
    modelo: "S800",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 92040,
    potenciaCv: 530,
    autonomiaKm: 670,
    maleteroL: null,
    ceroCien: 4.3,
    velocidadMax: 210,
    bateriaKwh: 94.364,
    cargaRapidaKw: 480,
    etiquetaDgt: "Cero",
    pros: [
      "Autonomía de 670 km CLTC con batería NMC de 94,4 kWh",
      "Carga ultrarrápida 800 V: del 10 al 80 % en unos 12 minutos",
      "530 CV y tracción total: 0-100 km/h en 4,3 segundos",
      "Huawei ADS 4.0 con LiDAR y dirección trasera de 16 grados",
      "Interior de ultra-lujo: techo de cielo estrellado y 43 altavoces",
    ],
    contras: [
      "Solo se vende en China: no hay red oficial ni homologación en Europa",
      "Precio de partida de ~92.000 € al cambio (708.000 yuanes)",
      "2.604 kg de peso y 5,48 m de largo: poco práctico en ciudad",
      "Sin garantía oficial publicada para el mercado europeo",
      "Marca nueva sin historial de fiabilidad a largo plazo",
    ],
    largoMm: 5480,
    anchoMm: 2000,
    altoMm: 1536,
    pesoKg: 2604,
    consumo: 14.5,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 673,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["precio", "autonomiaKm", "consumo", "cargaRapidaKw"],
    imagen: "/media/maextro-s800-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 2.61,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 750,
      seguroAmpliadoAnual: 1600,
      mantenimientoAnual: 400,
      costeMensualTotal: 199,
      notas:
        "Estimación con 15.000 km/año, recarga doméstica a 0,18 €/kWh y todo riesgo. El S800 no se vende en España: cifras orientativas para un uso equivalente.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/maextro-s800-2025-precio-ficha-tecnica-hero.webp",
        alt: "Maextro S800 eléctrico, tres cuartos delantero en carretera costera",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/maextro-s800-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Maextro S800 eléctrico, vista lateral en calle europea",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/maextro-s800-2025-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Maextro S800 con techo de cielo estrellado y asientos ejecutivos",
        ancho: 1920,
        alto: 1280,
      },
    ],
    analisisSlug: "maextro-s800-2025-precio-ficha-tecnica",
  },
  {
    id: "maextro-s800-erev-2025-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial:
      "/media/maextro-s800-erev-2025-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/maextro-s800-erev-2025-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    marca: "Maextro",
    modelo: "S800",
    tipo: "Híbrido de autonomía extendida",
    categoria: "Berlina",
    precioDesde: 92040,
    potenciaCv: 530,
    autonomiaKm: 311,
    maleteroL: null,
    ceroCien: 4.9,
    velocidadMax: 200,
    bateriaKwh: 65,
    cargaRapidaKw: 390,
    etiquetaDgt: "Cero",
    pros: [
      "Autonomía combinada de 1.333 km: 311 km WLTP eléctricos + extensor 1.5T",
      "Carga 6C: del 10 al 80 % en solo 10,5 minutos",
      "Versión de tres motores con 852 CV (de 0-100 en 4,7 s)",
      "Huawei ADS 4.0 con LiDAR y dirección trasera de 16 grados con modo cangrejo",
      "Configuraciones de 4 y 5 plazas con nivel de limusina ejecutiva",
    ],
    contras: [
      "Solo se vende en China: no hay red oficial ni homologación en Europa",
      "Precio de partida de ~92.000 € al cambio (708.000 yuanes)",
      "2.770 kg de peso: el EREV más pesado de su segmento",
      "El extensor de gasolina resta pureza al concepto eléctrico",
      "Marca nueva sin historial de fiabilidad a largo plazo",
    ],
    largoMm: 5480,
    anchoMm: 2000,
    altoMm: 1542,
    pesoKg: 2770,
    consumo: 6.39,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 673,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["precio", "consumo", "cargaRapidaKw"],
    imagen: "/media/maextro-s800-erev-2025-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 4.2,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 750,
      seguroAmpliadoAnual: 1600,
      mantenimientoAnual: 450,
      costeMensualTotal: 223,
      notas:
        "Estimación con 15.000 km/año y coste energético mixto electricidad+gasolina. El S800 no se vende en España: cifras orientativas para un uso equivalente.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/maextro-s800-erev-2025-precio-ficha-tecnica-hero.webp",
        alt: "Maextro S800 EREV negro, tres cuartos delantero en carretera de montaña",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/maextro-s800-erev-2025-precio-ficha-tecnica-oficial.webp",
        alt: "Maextro S800 EREV negro, vista lateral en calle europea",
        ancho: 1920,
        alto: 1280,
      },
      {
        src: "/media/maextro-s800-erev-2025-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Maextro S800 con salpicadero de triple pantalla y cielo estrellado",
        ancho: 1920,
        alto: 1280,
      },
    ],
    analisisSlug: "maextro-s800-erev-2025-precio-ficha-tecnica",
  },
];
