// Fichas técnicas Polestar (04/10/2026) — equipo POLESTAR.
// Modelos REALES de la gama 2024+ vendidos en Europa/España: 2, 3, 4 SUV y 5.
// El Polestar 4 coupé ya existe en comparador-coches-nuevos.ts (id "polestar-4-precio-ficha-tecnica").
// Polestar 6 (roadster) y Polestar 7 (SUV compacto, 2028) NO están a la venta en 2026: no se incluyen.
// Datos verificados el 04/10/2026: polestar.com/es (oficial), km77.com, coches.net,
// autonocion.com, actualidadmotor.com, quecochemecompro.com. Dato no verificado → null.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_POLESTAR: CocheComparador[] = [
  {
    id: "polestar-2-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-2-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 41900, // en oferta en España (08/2026); tarifa sin oferta desde ~46.990 €
    potenciaCv: 272,
    autonomiaKm: 554, // Standard Range Single Motor (WLTP); Long Range llega a 659 km
    maleteroL: 446,
    ceroCien: 6.4,
    velocidadMax: 205,
    bateriaKwh: 70,
    cargaRapidaKw: 180, // 10-80 % en 25 min
    etiquetaDgt: "Cero",
    pros: [
      "554 km WLTP con la batería de 70 kWh: de las mejores autonomías de su segmento",
      "Desde 41.900 € en oferta: el Polestar más asequible y el más probado de la gama",
      "Tracción trasera y chasis afinado: el más divertido de conducir de su clase",
      "Android Automotive con Google integrado: el mejor sistema multimedia del segmento",
      "Carga rápida de 180 kW (10-80 % en 25 min) y maletero de 446 L",
    ],
    contras: [
      "El Tesla Model 3 sigue siendo más barato y carga más rápido",
      "Diseño casi sin cambios desde 2020: se nota la edad frente a rivales nuevos",
      "La segunda generación llega en 2027: es el modelo saliente de la gama",
      "Red comercial mínima en España (venta online; Spaces solo en Madrid y Barcelona)",
      "Plazas traseras justas para adultos altos por la caída del techo",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: 1944,
    consumo: 14.9,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/fichas_tecnicas/polestar/2/berlina/5-puertas/stand_range_single_motor_rwd_70kwh_prime_272cv_electrico/114160/846784920250321/",
    costeMensual: {
      "costeEnergia100km": 2.7,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 125,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 14,9 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Polestar 2, berlina eléctrica, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-precio-ficha-tecnica-oficial-3.webp",
        "alt": "Polestar 2, vista lateral",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-precio-ficha-tecnica-interior-oficial-2.webp",
        "alt": "Interior del Polestar 2, salpicadero con pantalla vertical",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-3-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-3-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-3-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "z70J32S30SU",
    videoCanal: "The Polestar Vlog",
    marca: "Polestar",
    modelo: "3",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 69900, // Rear Motor 333 CV (MY2026, arquitectura 800 V)
    potenciaCv: 333,
    autonomiaKm: 604, // Rear Motor (WLTP); el Dual Motor 544 CV llega a 635 km
    maleteroL: 484,
    ceroCien: 6.5,
    velocidadMax: 210,
    bateriaKwh: 92, // CATL (MY2026); 106 kWh en Dual Motor y Performance
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: [
      "Arquitectura de 800 V y 350 kW: del 10 al 80 % en 22 min, de lo más rápido del mercado",
      "604 km WLTP desde 81.900 €: el SUV eléctrico premium con más autonomía por euro",
      "Motor trasero síncrono de desarrollo propio (333 CV), con tacto más deportivo",
      "Diferencial trasero mecánico y frenos Brembo de serie",
      "Android Automotive, techo de cristal y equipo Bowers & Wilkins de 25 altavoces",
    ],
    contras: [
      "Unos 2.500 kg de peso: los consumos reales superan los 20 kWh/100 km",
      "Maletero de 484 L: justo para un SUV de 4,90 m",
      "81.900 € de acceso, sin packs ni extras: el precio duele",
      "Red comercial y de servicio muy limitada en España",
      "Interior casi sin botones físicos: todo pasa por la pantalla de 14,5\"",
    ],
    largoMm: 4900,
    anchoMm: 1968,
    altoMm: 1614,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-3-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "actualidadmotor.com",
    fuenteUrl: "https://www.actualidadmotor.com/polestar-3-my2026-salto-a-800-v-mas-potencia-y-carga-ultrarrapida/",
    costeMensual: {
      "costeEnergia100km": 3.4,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 159,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~19 kWh/100 km a 0,18 €/kWh (sin dato WLTP publicado para la base MY2026); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-3-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Polestar 3, SUV eléctrico grande, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-precio-ficha-tecnica-oficial-3.webp",
        "alt": "Polestar 3, vista lateral",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-precio-ficha-tecnica-interior-oficial-2.webp",
        "alt": "Interior del Polestar 3, pantalla vertical de 14,5 pulgadas",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-4-suv-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-4-suv-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-4-suv-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null,
    videoCanal: null,
    marca: "Polestar",
    modelo: "4 SUV",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 54390, // según polestar.com/es (10/2026); pedidos ya abiertos
    potenciaCv: null, // versión base Rear Motor: potencia sin confirmar oficialmente
    autonomiaKm: 630, // Rear Motor (WLTP), según polestar.com/es
    maleteroL: 530, // 655 L hasta el techo; 1.665 L con asientos abatidos
    ceroCien: null, // 3,9 s corresponde al Dual Motor (400 kW), no a la base
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: 200, // arquitectura 400 V
    etiquetaDgt: "Cero",
    pros: [
      "630 km WLTP desde 54.390 €: el SUV eléctrico premium con mejor binomio autonomía/precio",
      "Maletero de 530 L ampliable a 1.665 L: por fin un Polestar 4 práctico de verdad",
      "Luneta trasera de cristal (el coupé no la tiene) más retrovisor digital",
      "Carga rápida de 200 kW y barras de techo para 100 kg extra",
      "Google y Gemini integrados, techo panorámico electrocrómico y Harman Kardon de 1.400 W",
    ],
    contras: [
      "Presentado en octubre de 2026: aún sin pruebas independientes",
      "Potencia, batería y medidas de la versión base sin confirmar oficialmente",
      "Es un Polestar 4 coupé con techo más alto: no es un SUV puro",
      "Red comercial mínima en España (venta online y Spaces)",
      "El Dual Motor de 400 kW se irá muy por encima de los 60.000 €",
    ],
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: null,
    parNm: null,
    traccion: "Trasera", // versión base Rear Motor
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-4-suv-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "polestar.com",
    fuenteUrl: "https://www.polestar.com/es/polestar-4-models/polestar-4-suv/",
    costeMensual: {
      "costeEnergia100km": 3.2,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 144,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~18 kWh/100 km a 0,18 €/kWh (oficial solo para el Dual Motor: 19,0-21,6); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-4-suv-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Polestar 4 SUV, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-4-suv-precio-ficha-tecnica-oficial-3.webp",
        "alt": "Polestar 4 SUV, vista trasera con luneta de cristal",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-4-suv-precio-ficha-tecnica-interior-oficial-2.webp",
        "alt": "Interior del Polestar 4 SUV, iluminación ambiental",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-5-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-5-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-5-precio-ficha-tecnica-interior-oficial.webp",
    videoId: null, // sin review española con canal verificado a 04/10/2026
    videoCanal: null,
    marca: "Polestar",
    modelo: "5",
    tipo: "Eléctrico",
    categoria: "Berlina", // GT de 4 puertas
    precioDesde: 121900, // Dual Motor Launch Edition (polestar.com/es)
    potenciaCv: 748, // Dual Motor (550 kW); Performance: 884 CV (650 kW)
    autonomiaKm: 678, // Dual Motor (WLTP), según polestar.com/es
    maleteroL: 427, // 365 L trasero + 62 L delantero
    ceroCien: 3.9, // Dual Motor; Performance: 3,2 s
    velocidadMax: 250,
    bateriaKwh: 112, // bruta; 106 kWh útiles
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: [
      "Hasta 884 CV y 1.015 Nm: el Polestar más potente de la historia",
      "800 V y 350 kW: del 10 al 80 % en 22 minutos",
      "678 km WLTP en el Dual Motor: más autonomía que un Porsche Taycan",
      "Chasis de aluminio propio y motor trasero de desarrollo interno con Recaro",
      "Diseño del concept Precept casi sin cambios: un GT escandinavo único",
    ],
    contras: [
      "Desde 121.900 € (145.300 € el Performance): territorio Porsche Taycan",
      "2.503 kg: el peso se nota pese a la potencia",
      "Solo 4 plazas reales y 427 L de maletero: es un GT, no un familiar",
      "Marca con imagen aún por construir frente a Porsche o Audi",
      "Primer año de producción: fiabilidad por demostrar",
    ],
    largoMm: 5090,
    anchoMm: null, // 2,06 m con retrovisores; anchura de carrocería sin verificar
    altoMm: 1420,
    pesoKg: 2503,
    consumo: 20.9,
    consumoUnidad: "kWh/100 km",
    plazas: 4,
    parNm: 812, // Dual Motor
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["consumo"], // dato de prueba independiente, no WLTP oficial
    imagen: "/media/polestar-5-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "polestar.com",
    fuenteUrl: "https://www.polestar.com/es/polestar-5/",
    costeMensual: {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 700,
      "seguroAmpliadoAnual": 1400,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 202,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo ~20,9 kWh/100 km a 0,18 €/kWh (dato de prueba); seguro y mantenimiento estimados por segmento superdeportivo eléctrico",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-5-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Polestar 5, GT eléctrico de 4 puertas, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-5-precio-ficha-tecnica-oficial-3.webp",
        "alt": "Polestar 5, vista lateral, silueta de gran turismo",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-5-precio-ficha-tecnica-interior-oficial-2.webp",
        "alt": "Interior del Polestar 5, asientos Recaro",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-2-long-range-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-long-range-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-2-long-range-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2 Long Range",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 50140, // Long Range Single Motor (km77, 2026)
    potenciaCv: 299,
    autonomiaKm: 659, // WLTP
    maleteroL: 446,
    ceroCien: 6.2,
    velocidadMax: 205,
    bateriaKwh: 82, // 79 kWh útiles
    cargaRapidaKw: 205, // 10-80 % en 28 min
    etiquetaDgt: "Cero",
    pros: [
      "659 km WLTP: la mayor autonomía de un Polestar 2",
      "299 CV traseros y 490 Nm: equilibrio perfecto entre eficiencia y diversión",
      "Carga de 205 kW (10-80 % en 28 min), de lo mejor del segmento",
      "Android Automotive con Google: el mejor multimedia de su clase",
      "Desde 50.140 €: el eléctrico premium con más km por euro",
    ],
    contras: [
      "8.000 € más que el Standard Range por 105 km extra",
      "El Tesla Model 3 Gran Autonomía cuesta menos",
      "Diseño sin cambios desde 2020",
      "La segunda generación llega en 2027",
      "Red comercial mínima en España",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: 2084,
    consumo: 14.8,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 490,
    traccion: "Trasera",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-long-range-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "coches.net",
    fuenteUrl: "https://www.coches.net/fichas_tecnicas/polestar/2/berlina/5-puertas/long_range_single_motor_rwd_82kwh_prime_299cv_electrico/114161/846785120250311/",
    costeMensual: {
      "costeEnergia100km": 2.7,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 250,
      "costeMensualTotal": 126,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 14,8 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-long-range-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 2 Long Range, berlina eléctrica, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-long-range-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 2 Long Range",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-long-range-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 2 Long Range en carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-2-long-range-dual-motor-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2 Long Range Dual Motor",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 53940, // km77, 2026
    potenciaCv: 421,
    autonomiaKm: 596, // WLTP
    maleteroL: 446,
    ceroCien: 4.5,
    velocidadMax: 205,
    bateriaKwh: 82,
    cargaRapidaKw: 205,
    etiquetaDgt: "Cero",
    pros: [
      "421 CV y 4,5 s de 0-100: el Polestar 2 más equilibrado en prestaciones",
      "Tracción total para todo el año sin renunciar a 596 km WLTP",
      "Carga de 205 kW y chasis afinado por ingenieros de Volvo",
      "Android Automotive con Google integrado",
      "Más barato que un BMW i4 o un Tesla Model 3 Performance equivalente",
    ],
    contras: [
      "El Performance de 476 CV cuesta solo 10.000 € más",
      "Consumo de 15,9 kWh/100 km: el más tragón de la gama 2",
      "Diseño que acusa los años frente a rivales nuevos",
      "Relevo generacional en 2027: depreciación a la vista",
      "Red comercial mínima en España",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: null,
    consumo: 15.9,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/polestar/2/2024/estandar?amp=1",
    costeMensual: {
      "costeEnergia100km": 2.9,
      "seguroTercerosAnual": 500,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 139,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 15,9 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 2 Long Range Dual Motor, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 2 Long Range Dual Motor",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-long-range-dual-motor-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 2 Long Range Dual Motor en una carretera de curvas",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-2-performance-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-2-performance-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-2-performance-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "gZ5szegzEOA",
    videoCanal: "carwow España (JF Calero)",
    marca: "Polestar",
    modelo: "2 Performance",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 63650, // Long Range Dual Motor Performance Pack (km77, 2026)
    potenciaCv: 476,
    autonomiaKm: 568, // WLTP
    maleteroL: 446,
    ceroCien: 4.2,
    velocidadMax: 205,
    bateriaKwh: 82,
    cargaRapidaKw: 205,
    etiquetaDgt: "Cero",
    pros: [
      "476 CV y amortiguadores Öhlins ajustables: el Polestar 2 definitivo",
      "0-100 en 4,2 s manteniendo 568 km de autonomía WLTP",
      "Frenos Brembo y llantas forjadas de 20\" de serie",
      "Eléctrico deportivo con tacto de coche de carreras",
      "Carga de 205 kW: 10-80 % en 28 minutos",
    ],
    contras: [
      "63.650 €: territorio BMW i4 M50 y Tesla Model 3 Performance",
      "Suspensión Öhlins firme: incómoda en ciudad",
      "Consumo de 16,8 kWh/100 km",
      "La segunda generación llega en 2027",
      "Solo para apasionados: el Dual Motor normal ya va sobrado",
    ],
    largoMm: 4606,
    anchoMm: 1859,
    altoMm: 1479,
    pesoKg: null,
    consumo: 16.8,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-2-performance-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "km77.com",
    fuenteUrl: "https://www.km77.com/coches/polestar/2/2024/estandar?amp=1",
    costeMensual: {
      "costeEnergia100km": 3.0,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 154,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo WLTP 16,8 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium deportivo",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-2-performance-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 2 Performance, berlina eléctrica deportiva, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-performance-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 2 Performance",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-2-performance-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 2 Performance en circuito",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-3-dual-motor-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-3-dual-motor-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-3-dual-motor-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "Sbw04eT8-8Y",
    videoCanal: "SoyMotor",
    marca: "Polestar",
    modelo: "3 Dual Motor",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 91900, // MY2026 (quecochemecompro.com)
    potenciaCv: 544,
    autonomiaKm: 635, // WLTP
    maleteroL: 484,
    ceroCien: 4.7,
    velocidadMax: 210,
    bateriaKwh: 106, // CATL
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: [
      "544 CV, 800 V y 350 kW: el SUV eléctrico que carga en 22 minutos",
      "635 km WLTP: más autonomía que el Rear Motor pese a la tracción total",
      "Motor trasero de desarrollo propio con reparto deportivo",
      "Diferencial trasero mecánico y suspensión neumática de serie",
      "Bowers & Wilkins de 25 altavoces y Android Automotive",
    ],
    contras: [
      "91.900 € de acceso: 10.000 € más que el Rear Motor",
      "Unas 2,6 toneladas: el consumo real supera los 20 kWh/100 km",
      "Maletero de 484 l, justo para 4,90 m",
      "Red comercial mínima en España",
      "Casi sin botones físicos: todo por la pantalla de 14,5\"",
    ],
    largoMm: 4900,
    anchoMm: 1968,
    altoMm: 1614,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-3-dual-motor-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "quecochemecompro.com",
    fuenteUrl: "https://www.quecochemecompro.com/precios/polestar-3/",
    costeMensual: {
      "costeEnergia100km": 3.3,
      "seguroTercerosAnual": 600,
      "seguroAmpliadoAnual": 1150,
      "mantenimientoAnual": 350,
      "costeMensualTotal": 166,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~18,5 kWh/100 km a 0,18 €/kWh (sin dato WLTP publicado para el Dual Motor MY2026); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-3-dual-motor-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 3 Dual Motor, SUV eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-dual-motor-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 3 Dual Motor",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-dual-motor-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 3 Dual Motor en una carretera de montaña",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-3-performance-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-3-performance-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-3-performance-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "Sbw04eT8-8Y",
    videoCanal: "SoyMotor",
    marca: "Polestar",
    modelo: "3 Performance",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 110300, // MY2026 (quecochemecompro.com)
    potenciaCv: 680,
    autonomiaKm: 593, // WLTP
    maleteroL: 484,
    ceroCien: 3.9,
    velocidadMax: 210,
    bateriaKwh: 106, // CATL
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: [
      "680 CV y 3,9 s de 0-100: el SUV eléctrico sueco más rápido",
      "800 V y 350 kW: 10-80 % en 22 minutos",
      "593 km WLTP pese a la potencia: eficiencia notable",
      "Chasis con diferencial trasero y frenos Brembo",
      "Interior de diseño escandinavo con Bowers & Wilkins",
    ],
    contras: [
      "110.300 €: territorio Porsche Cayenne eléctrico",
      "El Dual Motor de 544 CV ya es rapidísimo por 18.000 € menos",
      "Consumo real por encima de 22 kWh/100 km si se le pisa",
      "2,7 toneladas: se notan en curva",
      "Red comercial mínima en España",
    ],
    largoMm: 4900,
    anchoMm: 1968,
    altoMm: 1614,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-3-performance-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "quecochemecompro.com",
    fuenteUrl: "https://www.quecochemecompro.com/precios/polestar-3/",
    costeMensual: {
      "costeEnergia100km": 3.6,
      "seguroTercerosAnual": 650,
      "seguroAmpliadoAnual": 1250,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 182,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~20 kWh/100 km a 0,18 €/kWh (sin dato WLTP publicado para el Performance MY2026); seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-3-performance-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 3 Performance, SUV eléctrico deportivo, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-performance-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 3 Performance",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-3-performance-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 3 Performance en carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-4-suv-dual-motor-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "0xc14rGySkM",
    videoCanal: "Motorpasión",
    marca: "Polestar",
    modelo: "4 SUV Dual Motor",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 58600, // Dual Motor (autonomiacocheselectricos.es, 2026)
    potenciaCv: 544,
    autonomiaKm: 600, // WLTP
    maleteroL: 530,
    ceroCien: 3.9,
    velocidadMax: null,
    bateriaKwh: 100,
    cargaRapidaKw: 200, // arquitectura 400 V
    etiquetaDgt: "Cero",
    pros: [
      "544 CV, 686 Nm y 3,9 s: el Polestar 4 SUV más rápido",
      "600 km WLTP pese a la tracción total",
      "Maletero de 530-1.665 l con luneta trasera de cristal",
      "Carga de 200 kW y 22 kW en alterna",
      "Performance Pack disponible desde 66.900 € (ZF, Brembo, 22\")",
    ],
    contras: [
      "Recién lanzado: sin pruebas independientes de la versión Dual",
      "4.200 € más que el Rear Motor por 30 km menos de autonomía",
      "400 V, no 800: carga más lenta que los nuevos 3 y 5",
      "Red comercial mínima en España",
      "El retrovisor digital exige acostumbrarse",
    ],
    largoMm: null,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: null,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 686,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: [],
    imagen: "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "autonocion.com",
    fuenteUrl: "https://www.autonocion.com/motornocion/polestar-4-suv-llega-a-espana-electricos-premium/",
    costeMensual: {
      "costeEnergia100km": 3.4,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 300,
      "costeMensualTotal": 155,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo estimado ~19 kWh/100 km a 0,18 €/kWh; seguro y mantenimiento estimados por segmento premium",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 4 SUV Dual Motor, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 4 SUV Dual Motor",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-4-suv-dual-motor-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 4 SUV Dual Motor en carretera",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "polestar-5-performance-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: 70,
    imagenOficial: "/media/polestar-5-performance-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/polestar-5-performance-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "7bQrfaUAq3A",
    videoCanal: "AutoEV",
    marca: "Polestar",
    modelo: "5 Performance",
    tipo: "Eléctrico",
    categoria: "Berlina",
    precioDesde: 145300, // Performance Launch Edition (polestar.com/es)
    potenciaCv: 884,
    autonomiaKm: 565, // WLTP
    maleteroL: 427,
    ceroCien: 3.2,
    velocidadMax: 250,
    bateriaKwh: 112, // 106 kWh útiles
    cargaRapidaKw: 350, // 800 V; 10-80 % en 22 min
    etiquetaDgt: "Cero",
    pros: [
      "884 CV y 1.015 Nm: el coche de producción más potente de Polestar",
      "0-100 en 3,2 s: cifras de superdeportivo en un GT de 4 puertas",
      "800 V y 350 kW: 10-80 % en 22 minutos",
      "Chasis de aluminio propio y suspensión adaptativa",
      "Asientos Recaro y frenos de altas prestaciones",
    ],
    contras: [
      "145.300 €: 23.400 € más que el Dual Motor por 113 km menos de autonomía",
      "565 km WLTP frente a 678 km del Dual Motor",
      "2.503 kg: el peso limita la agilidad en tramo",
      "Solo 4 plazas y 427 l de maletero",
      "Primer año de producción: fiabilidad por demostrar",
    ],
    largoMm: 5090,
    anchoMm: null,
    altoMm: 1420,
    pesoKg: 2503,
    consumo: 20.9,
    consumoUnidad: "kWh/100 km",
    plazas: 4,
    parNm: 1015,
    traccion: "Total",
    emisionesCo2: 0,
    aprox: ["consumo"], // dato de prueba independiente, no WLTP oficial
    imagen: "/media/polestar-5-performance-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    fuenteNombre: "polestar.com",
    fuenteUrl: "https://www.polestar.com/es/polestar-5/",
    costeMensual: {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 750,
      "seguroAmpliadoAnual": 1500,
      "mantenimientoAnual": 500,
      "costeMensualTotal": 215,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "15000 km/año; consumo ~20,9 kWh/100 km a 0,18 €/kWh (dato de prueba); seguro y mantenimiento estimados por segmento superdeportivo eléctrico",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/polestar-5-performance-precio-ficha-tecnica-oficial.webp",
        "alt": "Polestar 5 Performance, GT eléctrico, tres cuartos delantero",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-5-performance-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Polestar 5 Performance con asientos Recaro",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/polestar-5-performance-precio-ficha-tecnica-hero.webp",
        "alt": "Polestar 5 Performance en una carretera de costa",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
];
