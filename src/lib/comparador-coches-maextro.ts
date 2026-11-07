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
    pros: ["Al prescindir del generador de gasolina, el paquete NMC de 94,4 kWh rinde aquí 670 km bajo ciclo CLTC", "En corriente continua llega a 480 kW gracias a su plataforma de 800 V, con el salto del 10 al 80 % cifrado en unos 12 minutos", "Los dos ejes empujan a la vez repartiendo 530 CV y 673 Nm, y despacha el sprint hasta los cien por hora en solo 4,3 segundos pese a su tamaño", "El cerebro ADS 4.0 de Huawei se apoya en LiDAR y gira las ruedas posteriores hasta 16 grados para maniobrar una carrocería enorme", "Pensado para viajar atrás como en un Mercedes-Maybach, combina bóveda de cielo estrellado con un equipo de sonido de 43 altavoces"],
    contras: ["Comprarlo desde España implica importación paralela: Maextro no lo comercializa aquí, carece de homologación europea y no dispone de concesionarios propios", "La tarifa china arranca en 708.000 yuanes, unos 92.040 euros convertidos, antes de sumar transporte, aranceles y trámites de importación", "Mover 2.604 kilos repartidos en 5,48 metros complica garajes estrechos, calles viejas y cualquier aparcamiento urbano español", "Quien lo importe no encontrará una cobertura oficial europea publicada por HIMA o JAC a la que agarrarse si algo falla", "Su historial es cortísimo: JAC y Huawei estrenan marca con este buque insignia y nadie sabe aún cómo envejecerán su batería, su electrónica y su reventa", "Al renunciar al extensor de su hermano EREV, un viaje largo depende por completo de localizar cargadores capaces de aprovechar sus 480 kW"],
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
    pros: ["Cuando se agotan los 311 km WLTP en eléctrico no toca cazar un enchufe: entra el generador 1.5T, alimenta los motores desde la batería de 65 kWh y estira el recorrido total hasta 1.333 km combinados", "Pese a semejante batería, parar a cargar dura poquísimo: admite 390 kW en continua y su sistema 6C completa el salto del 10 al 80 % en 10,5 minutos", "Empuja como berlina deportiva disfrazada de limusina: 530 CV, 673 Nm y tracción a las cuatro ruedas para firmar 4,9 segundos hasta 100 km/h y 200 km/h de velocidad punta", "Maniobrar sus 5.480 mm engaña menos de lo previsto, porque el tren trasero gira hasta 16 grados, permite avanzar en diagonal al estilo cangrejo y el ADS 4.0 de Huawei lee el entorno apoyado en LiDAR", "Su diana son el Mercedes-Maybach Clase S y el BMW i7, y lo ataca desde atrás: se ofrece para cinco ocupantes o en variante de cuatro butacas ejecutivas independientes, pensada para viajar con chófer"],
    contras: ["Huawei y JAC lo comercializan únicamente en su mercado doméstico, así que en España no hay concesionario HIMA que lo matricule, lo revise o se haga cargo de una avería", "Los 92.040 € de esta ficha salen de convertir 708.000 yuanes, no de una tarifa para nuestro país: sumar transporte, aranceles y homologación individual encarecería mucho traer una unidad", "Sumar batería grande, motores en ambos ejes y un gasolina con su depósito lo plantan en 2.770 kg repartidos en dos metros de anchura: entrar en un garaje comunitario estrecho se convierte en negociación diaria", "Al trabajar el extensor desaparece el silencio absoluto del eléctrico puro y aparece un gasto de 6,39 l/100 km, además de aceite, filtros y bujías que mantener como en cualquier térmico", "Estrena marca, plataforma y generador a la vez: nadie puede acreditar todavía cómo envejecen ese 1.5T ni el conjunto eléctrico tras años de uso, ni qué valor conservará de segunda mano fuera de China"],
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
