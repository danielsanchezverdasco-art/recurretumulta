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
      "",
    videoId: "d6FGjIQJEZ8",
    videoCanal: "MotorWatt",
    marca: "Maextro",
    modelo: "S800 Eléctrico",
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
      "Sin generador de gasolina, la batería NMC de 94,4 kWh rinde 670 km CLTC",
      "La plataforma de 800 V admite 480 kW y recarga del 10 al 80 % en alrededor de 12 minutos",
      "530 CV y 673 Nm en los dos ejes dejan el sprint a 100 km/h en 4,3 s",
      "El ADS 4.0 de Huawei gira las ruedas traseras hasta 16 grados para maniobrar",
      "Detrás se viaja como en un Maybach: cielo estrellado y 43 altavoces",],
    contras: [
      "Desde España solo cabe la importación paralela: sin concesionarios ni homologación europea",
      "La tarifa china, 708.000 yuanes, equivale a unos 92.040 € antes de transporte y aranceles",
      "Mover 2.604 kg en 5,48 m complica cualquier aparcamiento urbano español",
      "Quien la importe no encontrará cobertura oficial europea publicada por HIMA o JAC",
      "El historial es cortísimo: nadie sabe aún cómo envejecerán batería, electrónica y reventa",
      "Sin extensor, un viaje largo depende de cargadores capaces de dar 480 kW",],
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
        "15.000 km/año; 0,18 €/kWh; todo riesgo. El S800 no se vende en España: cifras orientativas para un uso equivalente.",
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
    modelo: "S800 EREV",
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
      "Agotados los 311 km WLTP eléctricos, el generador 1.5T estira el total a 1.333 km",
      "La batería de 65 kWh admite 390 kW en continua y sube del 10 al 80 % en diez minutos y medio",
      "530 CV, 673 Nm y tracción total: 4,9 s hasta 100 km/h con una punta de 200 km/h",
      "El eje trasero gira hasta 16 grados y permite avanzar en diagonal, estilo cangrejo",
      "Se ofrece con cinco plazas o con cuatro butacas ejecutivas para viajar con chófer",],
    contras: [
      "Huawei y JAC solo la venden en su mercado: en España no hay concesionario HIMA",
      "Los 92.040 € salen de convertir 708.000 yuanes, no de una tarifa española",
      "Batería, dos motores y gasolina con depósito la plantan en 2.770 kg y 2,00 m de ancho",
      "Con el extensor trabajando, el silencio del eléctrico puro desaparece y el gasto sube a 6,39 l/100 km",
      "Marca, plataforma y generador son nuevos: sin datos de envejecimiento ni reventa fuera de China",],
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
        "15.000 km/año y coste energético mixto electricidad+gasolina. El S800 no se vende en España: cifras orientativas para un uso equivalente.",
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
