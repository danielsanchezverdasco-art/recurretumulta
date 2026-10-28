// Ebro (05/10/2026) — versiones reales 2024+ vendidas en España/Europa que
// faltaban: S700 HEV, S700 PHEV y S900 PHEV. Ya existían en otros ficheros
// (NO duplicar): ebro-s700-precio-ficha-tecnica (gasolina, en
// comparador-coches-data.ts), ebro-s800-phev-precio-ficha-tecnica y
// ebro-s400-hibrido-precio-ficha-tecnica (en comparador-coches-nuevos.ts).
// Verificado con km77.com (fichas y tarifas oficiales), periodismodelmotor.com,
// hibridosyelectricos.com, soymotor.com, autonocion.com, hackercar.com,
// pruebatucoche.es, movilidadelectrica.com y ebroauto.com (web oficial).
// El pick-up Ebro anunciado en 2023 sigue sin datos oficiales de venta
// (sin precio ni ficha): no se incluye (prohibido inventar).
// Actualización 21/10/2026 (radar): el urbano eléctrico ya tiene nombre (Q) y
// especificaciones verificadas del Chery Q (París 2026): ficha ebro-q-2027
// incluida con precio europeo aproximado y campos pendientes marcados en aprox.
// Formato CocheComparador idéntico a comparador-coches-data.ts.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_EBRO: CocheComparador[] = [
  {
    id: "ebro-s700-hibrido-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/ebro-s700-hibrido-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/ebro-s700-hibrido-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "hV9GhlQ4jAM",
    videoCanal: "SoyMotor",
    marca: "Ebro",
    modelo: "S700 HEV",
    tipo: "Híbrido",
    categoria: "SUV",
    precioDesde: 31499,
    potenciaCv: 224,
    autonomiaKm: null,
    maleteroL: 369,
    ceroCien: 8.7,
    velocidadMax: 175,
    bateriaKwh: 1.83,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    pros: [
      "224 CV con etiqueta ECO: entra en las ZBE y rinde como un diésel moderno",
      "5,7 l/100 km homologados y unos 900 km de autonomía con el depósito de 51 L",
      "Sin enchufe: electrificación sin cambiar hábitos ni instalar cargador",
      "Doble pantalla curva de 12,3\", Head-Up Display y 24 ADAS de serie",
      "Garantía de 7 años/150.000 km (8 años/160.000 km en la batería), por encima de la media",
    ],
    contras: [
      "Desde 31.499 €: el S700 más caro tras el PHEV, y solo en dos acabados",
      "El cambio DHT tarda en reaccionar a fondo (SoyMotor): no parece un 224 CV",
      "Batería de solo 1,83 kWh: sin las ventajas del enchufe ni la etiqueta Cero",
      "Marca en relanzamiento: el valor de reventa sigue siendo una incógnita",
      "Solo tracción delantera y 175 km/h de punta: justito para viajar cargado",
    ],
    largoMm: 4553,
    anchoMm: 1862,
    altoMm: 1696,
    pesoKg: null,
    consumo: 5.7,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 295,
    traccion: "Delantera",
    emisionesCo2: 129,
    aprox: [],
    imagen: "/media/ebro-s700-hibrido-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 10.5,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 800,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 231,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP declarado 5,7 l/100 km; gasolina 95 aprox 1,85 EUR/l; 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Ebro S700 HEV verde, vista trasera en carretera de montaña",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/ebro-s700-hibrido-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Ebro S700 HEV verde, perfil lateral en estudio",
        "ancho": 2048,
        "alto": 1152
      },
      {
        "src": "/media/ebro-s700-hibrido-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Ebro S700 HEV, puesto de conducción con doble pantalla",
        "ancho": 2048,
        "alto": 1152
      }
    ],
  },
  {
    id: "ebro-s700-phev-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/ebro-s700-phev-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/ebro-s700-phev-2026-precio-ficha-tecnica-interior-oficial.webp",
    videoId: "8z35qRHmXH8",
    videoCanal: "Pruebatucoche",
    marca: "Ebro",
    modelo: "S700 PHEV",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 35840,
    potenciaCv: 279,
    autonomiaKm: 90,
    maleteroL: 369,
    ceroCien: 8.4,
    velocidadMax: 180,
    bateriaKwh: 18.3,
    cargaRapidaKw: 40,
    etiquetaDgt: "Cero",
    pros: [
      "279 CV con etiqueta CERO: ZBE, ORA gratis y hasta 1.200 km combinados",
      "90 km eléctricos (126 en ciudad): la semana entera sin gastar gasolina",
      "Carga rápida DC de 40 kW (30-80 % en 19 min), rara en un PHEV",
      "V2L de 3,3 kW: alimenta herramientas y electrodomésticos en acampadas",
      "5 estrellas Euro NCAP 2025: uno de los SUV más seguros del segmento",
    ],
    contras: [
      "Desde 35.840 €: unos 8.000 € más que el S700 de gasolina equivalente",
      "Con la batería vacía gasta unos 6 l/100 km: hay que cargarlo a diario",
      "1.865 kg de peso: se notan en el consumo y en la agilidad",
      "Marca renacida: la red comercial y de postventa aún está creciendo",
      "Maletero de 369 L: menos generoso que el de algunos rivales",
    ],
    largoMm: 4553,
    anchoMm: 1862,
    altoMm: 1696,
    pesoKg: 1865,
    consumo: 0.8,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 365,
    traccion: "Delantera",
    emisionesCo2: 19,
    aprox: [],
    imagen: "/media/ebro-s700-phev-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 5.2,
      "seguroTercerosAnual": 450,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 173,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "PHEV: el coste real depende del hábito de carga; supuesto 70 % km en eléctrico (15 kWh/100 km) y 30 % en gasolina (6 l/100 km); 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/ebro-s700-phev-2026-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Ebro S700 PHEV gris circulando entre olivares",
        "ancho": 2048,
        "alto": 1152
      },
      {
        "src": "/media/ebro-s700-phev-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Ebro S700 PHEV gris, tres cuartos frontal en estudio",
        "ancho": 2048,
        "alto": 1152
      },
      {
        "src": "/media/ebro-s700-phev-2026-precio-ficha-tecnica-interior-oficial.webp",
        "alt": "Interior del Ebro S700 PHEV con Head-Up Display",
        "ancho": 2048,
        "alto": 1152
      }
    ],
  },
  {
    id: "ebro-s900-phev-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 160000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/ebro-s900-phev-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "xQOcSMD7478",
    videoCanal: "Periodismo del Motor",
    marca: "Ebro",
    modelo: "S900 PHEV",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 53990,
    potenciaCv: 426,
    autonomiaKm: 140,
    maleteroL: 448,
    ceroCien: 5.8,
    velocidadMax: 180,
    bateriaKwh: 34.46,
    cargaRapidaKw: 71,
    etiquetaDgt: "Cero",
    pros: [
      "426 CV y 580 Nm con etiqueta CERO: el Ebro más potente jamás fabricado",
      "140 km eléctricos (177 en ciudad) con batería CATL de 34,46 kWh",
      "7 plazas reales y maletero de 448 a 2.065 L: familiar de verdad",
      "Carga DC de 71 kW (30-80 % en 25 min): a nivel de eléctrico puro",
      "Equipamiento cerrado: pantallas de 10,25\" y 15,6\", sonido Sony de 14 altavoces, masaje y asientos eléctricos",
    ],
    contras: [
      "Desde 53.990 €: entra en territorio de premium alemanes de ocasión",
      "2.308 kg de peso: con la batería baja el consumo sube a 6,9 l/100 km",
      "Versión única (Luxury 4x4): sin alternativas de precio ni equipamiento",
      "Marca nueva en el segmento premium: imagen y reventa por demostrar",
      "Mucho mando depende de la pantalla táctil: pocos botones físicos",
    ],
    largoMm: 4810,
    anchoMm: 1925,
    altoMm: 1741,
    pesoKg: 2308,
    consumo: 1.7,
    consumoUnidad: "l/100 km",
    plazas: 7,
    parNm: 580,
    traccion: "Total",
    emisionesCo2: 40,
    aprox: [],
    imagen: "/media/ebro-s900-phev-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 6.3,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 950,
      "mantenimientoAnual": 500,
      "costeMensualTotal": 200,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "PHEV: el coste real depende del hábito de carga; supuesto 70 % km en eléctrico (20 kWh/100 km) y 30 % en gasolina (6,9 l/100 km con batería baja); 15.000 km/año",
      "estimado": true
    },
    galeria: [
      {
        "src": "",
        "alt": "Ebro S900 PHEV azul circulando por la costa al atardecer",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/ebro-s900-phev-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Ebro S900 PHEV azul, tres cuartos frontal en estudio",
        "ancho": 2048,
        "alto": 1152
      },
      {
        "src": "",
        "alt": "Interior de 7 plazas del Ebro S900 PHEV con techo panorámico",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
];
