// Omoda (04-05/10/2026) — EQUIPO OMODA: gama real 2024+ vendida en España.
// Ya existían omoda-9-shs y omoda-5-ev (en otros ficheros): aquí se añaden los
// 3 que faltaban, todos verificados con medios españoles (km77, soymotor,
// coches.net, actualidadmotor, hibridosyelectricos, capital.es):
// Omoda 5 gasolina (1.6 TGDI), Omoda 5 SHS-H (híbrido) y Omoda 7 SHS (PHEV).
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_OMODA: CocheComparador[] = [
  {
    id: "omoda-5-gasolina-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/omoda-5-gasolina-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Omoda",
    modelo: "5 Gasolina",
    tipo: "Gasolina",
    categoria: "SUV",
    precioDesde: 27900,
    potenciaCv: 147,
    autonomiaKm: null,
    maleteroL: 370,
    ceroCien: 10.1,
    velocidadMax: 195,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    pros: [
      "Desde 27.900 euros, este C-SUV chino fue el que rompió el mercado en España.",
      "El 1.6 TGDI de 147 CV va asociado de serie a un cambio automático 7DCT.",
      "Ofrece siete años de garantía, la mejor cobertura del segmento generalista.",
      "El maletero cubica 370 litros, 1.149 con los asientos abatidos, para cinco plazas reales.",
      "De serie monta doble pantalla de 12,3 pulgadas, Apple CarPlay y Android Auto."
    ],
    contras: [
      "Con distintivo C, queda fuera del acceso libre a las ZBE más estrictas.",
      "Su consumo WLTP de 7,0 litros cada cien kilómetros es alto frente a los híbridos del segmento.",
      "Con 10,1 segundos de 0 a 100, es el menos prestacional de la gama Omoda 5.",
      "Como marca joven en Europa, su valor de reventa aún está por demostrar.",
      "Clima y casi todo se manejan desde la pantalla, sin botones físicos."
    ],
    largoMm: 4373,
    anchoMm: 1824,
    altoMm: 1588,
    pesoKg: 1498,
    consumo: 7.0,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 275,
    traccion: "Delantera",
    emisionesCo2: 159,
    aprox: [],
    imagen: "/media/omoda-5-gasolina-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 12.95,
      "seguroTercerosAnual": 420,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 224,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP declarado (l/100 km); 1.200 km/mes estimados; el coste real depende del uso",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/omoda-5-gasolina-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Omoda 5 gasolina, vista lateral con parrilla paramétrica",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/omoda-5-gasolina-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Omoda 5 gasolina gris grafito, tres cuartos delantero",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Omoda 5 gasolina con doble pantalla de 12,3 pulgadas",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "bTeIYf2XR8c",
    videoCanal: "SoyMotor",
    marca: "Omoda",
    modelo: "5 SHS-H",
    tipo: "Híbrido",
    categoria: "SUV",
    precioDesde: 29400,
    potenciaCv: 224,
    autonomiaKm: 1000,
    maleteroL: null,
    ceroCien: 7.9,
    velocidadMax: 175,
    bateriaKwh: 1.83,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    pros: [
      "Sus 224 CV van con etiqueta ECO, así que entra en las ZBE sin restricciones.",
      "Alcanza los 100 en 7,9 segundos, el híbrido autorrecargable más rápido de su precio.",
      "Gasta 5,3 litros cada cien kilómetros homologados y ronda los 1.000 km de autonomía total.",
      "El motor 1.5 turbo específico para híbrido presume de una eficiencia térmica del 44,5 por ciento.",
      "Parte de 29.400 euros, 23.990 en campaña, y rompe el precio del segmento."
    ],
    contras: [
      "Con solo 1,83 kWh de batería, es un híbrido puro sin modo eléctrico real.",
      "El maletero resulta algo justo para el segmento y la marca no publica la cifra.",
      "En modo Eco la respuesta es perezosa, mientras el Sport dispara el consumo.",
      "La red de servicio de la marca aún está en crecimiento en España.",
      "Los rivales japoneses, Toyota y Honda, conservan mejor valor de reventa."
    ],
    largoMm: 4440,
    anchoMm: null,
    altoMm: null,
    pesoKg: null,
    consumo: 5.3,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 295,
    traccion: "Delantera",
    emisionesCo2: 120,
    aprox: ["autonomiaKm"],
    imagen: "/media/omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 9.81,
      "seguroTercerosAnual": 420,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 186,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "consumo WLTP declarado (l/100 km); 1.200 km/mes estimados; híbrido autorrecargable sin enchufe",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Omoda 5 SHS-H blanco, tres cuartos trasero con firma lumínica",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/omoda-5-shs-h-hibrido-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Omoda 5 SHS-H híbrido, tres cuartos delantero en carretera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Omoda 5 SHS-H con pantallas y flujo de energía híbrida",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "omoda-7-shs-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/omoda-7-shs-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: "mNHJwG2bNC4",
    videoCanal: "SoyMotor",
    marca: "Omoda",
    modelo: "7 SHS",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 42900,
    potenciaCv: 279,
    autonomiaKm: 92,
    maleteroL: 537,
    ceroCien: 8.4,
    velocidadMax: 180,
    bateriaKwh: 18.4,
    cargaRapidaKw: 40,
    etiquetaDgt: "Cero",
    pros: [
      "El sistema entrega 279 CV y 92 km eléctricos WLTP, con etiqueta CERO de la DGT.",
      "Su autonomía total supera los 1.200 km: es el PHEV rutero del segmento D.",
      "En continua admite 40 kW y el V2L entrega 3,3 kW para enchufar aparatos fuera de casa.",
      "El maletero cubica 537 litros, 1.294 abatido, de los más grandes entre los PHEV.",
      "La pantalla central deslizante de 15,6 pulgadas va acompañada de una garantía de ocho años, hasta 160.000 km, para este Omoda 7."
    ],
    contras: [
      "El PVP es de 42.900 euros sin contar la campaña de lanzamiento.",
      "Con 1.945 kg en orden de marcha, el peso se nota en apoyos rápidos.",
      "Es de tracción delantera, sin opción 4x4 frente a rivales que sí la ofrecen.",
      "Su diseño polariza: parrilla pixel y zaga en forma de rayo no gustan a todos.",
      "El consumo en modo híbrido con la batería agotada está pendiente de pruebas."
    ],
    largoMm: 4660,
    anchoMm: 1875,
    altoMm: 1670,
    pesoKg: 1945,
    consumo: 2.3,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: 365,
    traccion: "Delantera",
    emisionesCo2: 53,
    aprox: [],
    imagen: "/media/omoda-7-shs-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 7.0,
      "seguroTercerosAnual": 480,
      "seguroAmpliadoAnual": 850,
      "mantenimientoAnual": 450,
      "costeMensualTotal": 162,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "2,3 l/100 km + 15,2 kWh/100 km WLTP combinados; PHEV: el coste real depende del habito de carga; 1.200 km/mes estimados",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/omoda-7-shs-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Omoda 7 SHS azul, vista lateral con llantas de 20 pulgadas",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/omoda-7-shs-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Omoda 7 SHS, tres cuartos delantero en carretera de montaña",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "",
        "alt": "Interior del Omoda 7 SHS con pantalla deslizante de 15,6 pulgadas",
        "ancho": 1920,
        "alto": 1280
      }
    ],
  },
  {
    id: "omoda-4-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/omoda-4-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/omoda-4-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    marca: "Omoda",
    modelo: "4",
    tipo: "Híbrido",
    categoria: "SUV",
    precioDesde: 22000,
    potenciaCv: 224,
    autonomiaKm: 900,
    maleteroL: 400,
    ceroCien: 7.9,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "ECO",
    pros: [
      "El sistema híbrido entrega 224 CV y anuncia más de 900 km combinados, con distintivo ECO de la DGT para circular por zonas restringidas.",
      "Con 4.420 mm de longitud, este Omoda 4 abre la gama por abajo y apunta directamente al Toyota C-HR como referencia.",
      "Su estética cyber-mecha busca llamar la atención de compradores jóvenes que priorizan la imagen sobre la discreción.",
      "La marca ya ha confirmado una variante totalmente eléctrica de 218 CV que llegará después del híbrido inicial.",
      "El maletero supera los 400 litros y el equipamiento suma 19 ayudas electrónicas a la conducción."
    ],
    contras: [
      "La prensa sitúa su precio en torno a 22.000 euros, pero Omoda todavía no ha publicado una tarifa oficial.",
      "Hoy no se puede comprar ni probar: su desembarco español está programado para la primera mitad de 2027.",
      "Consumo y prestaciones definitivos siguen pendientes de la homologación WLTP correspondiente.",
      "Todavía no existe una prueba Euro NCAP publicada para este modelo.",
      "Al ser una marca joven en España, su red de postventa aún está creciendo."
    ],
    largoMm: 4420,
    anchoMm: 1863,
    altoMm: 1570,
    pesoKg: null,
    consumo: 5.2,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde", "autonomiaKm", "maleteroL", "ceroCien", "consumo", "largoMm", "anchoMm", "altoMm"],
    imagen: "/media/omoda-4-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo aún no lanzado al mercado",
    },
    planMantenimiento: {
      intervalo: "Sin plan publicado para el Omoda 4; orientativo según la garantía de la marca en España: 7 años o 150.000 km",
      revisiones: [
        {
          nombre: "Revisiones según plan de mantenimiento Omoda España",
          queSeCambia: "Inspección + aceite y filtros según motorización (plan específico del Omoda 4 aún no publicado)",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Garantía oficial Omoda España: 7 años o 150.000 km (dato de la marca, no específico del Omoda 4)",
    },
    fuenteNombre: "hibridosyelectricos.com",
    fuenteUrl: "https://www.hibridosyelectricos.com/coches/900-km-52-l-100-km-por-22000-omoda-lanza-su-suv-hibrido-mas-barato-plantar-cara-toyota-c-hr_89849_102.html",
    costeMensual: {
      "costeEnergia100km": 8.32,
      "seguroTercerosAnual": 420,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 206,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.6,
      "notas": "estimación para la versión híbrida (5,2 l/100 km según prensa, pendiente de homologación WLTP) con 15.000 km/año; precio y datos definitivos sin publicar",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/omoda-4-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Omoda 4 en la presentación europea (foto: drive.com.au)",
        "ancho": 1280,
        "alto": 720
      },
      {
        "src": "/media/omoda-4-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Omoda 4, SUV compacto de diseño cyber-mecha (foto: paultan.org)",
        "ancho": 1200,
        "alto": 629
      },
      {
        "src": "/media/omoda-4-2026-precio-ficha-tecnica-interior.webp",
        "alt": "Interior del Omoda 4 con pantalla vertical y volante con logo Omoda (foto: electricvehicleweb.com)",
        "ancho": 1280,
        "alto": 960
      }
    ],
  },
  {
    id: "omoda-s5-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/omoda-s5-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Omoda",
    modelo: "S5",
    tipo: "Gasolina",
    categoria: "Berlina",
    precioDesde: null, // Omoda España no comercializa el S5 (gama ES: 5, 7 y 9); sin tarifa oficial ES
    potenciaCv: 184,
    autonomiaKm: null,
    maleteroL: 570,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    pros: [
      "Es la única berlina de Omoda: mide 4,69 metros y su maletero cubica 570 litros.",
      "El 1.6 TGDI de 184 CV va con cambio 7DCT.",
      "El equipamiento tecnológico viene de serie.",
      "Su diseño fastback resulta deportivo."
    ],
    contras: [
      "No se vende en Europa: solo llega a mercados como México.",
      "No hay precio ni fecha para España.",
      "No se han publicado datos de consumo WLTP.",
      "El formato berlina retrocede ante el empuje de los SUV."
    ],
    largoMm: 4691,
    anchoMm: 1814,
    altoMm: 1493,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    imagen: "/media/omoda-s5-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    costeMensual: {
      "costeEnergia100km": 13.88,
      "seguroTercerosAnual": 420,
      "seguroAmpliadoAnual": 750,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 230,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.85,
      "notas": "estimación proxy: el S5 no se vende en España; se supone un consumo de 7,5 l/100 km para el 1.6 TGDI",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/omoda-s5-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Omoda S5, berlina deportiva en vista de estudio",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "/media/omoda-s5-2026-precio-ficha-tecnica-hero.webp",
        "alt": "Omoda S5 circulando por carretera",
        "ancho": 1200,
        "alto": 800
      },
      {
        "src": "",
        "alt": "Interior del Omoda S5 con pantalla central",
        "ancho": 1200,
        "alto": 800
      }
    ],
  },
  {
    id: "omoda-x-2027-precio-ficha-tecnica",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/omoda-x-2027-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "",
    videoId: null,
    videoCanal: null,
    marca: "Omoda",
    modelo: "X",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: null,
    potenciaCv: null,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null,
    pros: [
      "Es un híbrido enchufable con tracción total confirmada: el primer Omoda con enfoque campero real.",
      "Mide 4,65 metros, con 20 cm de altura libre y 70 cm de vadeo: cotas de casi todoterreno.",
      "La marca también ha anunciado una versión 100 por cien eléctrica.",
      "Incorpora visión nocturna térmica, que detecta riesgos a 90 metros, y asistente de IA conversacional SIAS.",
      "El cockpit combina pantallas de 10,25 y 13,2 pulgadas con botones físicos para clima y modos de conducción."
    ],
    contras: [
      "La marca no ha dado ninguna referencia de precio oficial.",
      "No llegará a España antes de 2027 y la fecha de producción sigue sin anunciarse.",
      "Potencia, batería definitiva, autonomía y consumos están sin confirmar.",
      "No hay prueba Euro NCAP al tratarse de un modelo aún no lanzado."
    ],
    largoMm: 4654,
    anchoMm: 1920,
    altoMm: 1702,
    pesoKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: null,
    parNm: null,
    traccion: "Total",
    emisionesCo2: null,
    aprox: ["largoMm", "anchoMm", "altoMm"],
    imagen: "/media/omoda-x-2027-precio-ficha-tecnica-hero.webp",
    opiniones: [],
    analisisSlug: "omoda-x-2027-suv-chino-vadea-70-cm",
    euroncap: {
      estrellas: null,
      ano: null,
      url: null,
      nota: "Sin datos EuroNCAP: modelo aún no lanzado al mercado",
    },
    planMantenimiento: {
      intervalo: "Sin plan publicado para el OMODA X; orientativo según la garantía de la marca en España: 7 años o 150.000 km",
      revisiones: [
        {
          nombre: "Revisiones según plan de mantenimiento Omoda España",
          queSeCambia: "Inspección + aceite y filtros según motorización (plan específico del OMODA X aún no publicado)",
          costeAproxEur: null,
        },
      ],
      costeAnualAproxEur: null,
      fuente: "Garantía oficial Omoda España: 7 años o 150.000 km, 3 años de asistencia en carretera y 8 años o 160.000 km para componentes de alta tensión (dato de la marca, no específico del OMODA X)",
    },
    fuenteNombre: "autonocion.com",
    fuenteUrl: "https://www.autonocion.com/omoda-x-presentacion-china/",
    galeria: [
      {
        "src": "/media/omoda-x-2027-precio-ficha-tecnica-hero.webp",
        "alt": "OMODA X verde en un bosque, vista tres cuartos delantera (foto: Autonoción)",
        "ancho": 1280,
        "alto": 720
      },
      {
        "src": "/media/omoda-x-2027-precio-ficha-tecnica-oficial.webp",
        "alt": "OMODA X plateado de perfil en ciudad de noche (foto: Autonoción)",
        "ancho": 1280,
        "alto": 720
      },
      {
        "src": "/media/omoda-x-2027-precio-ficha-tecnica-presentacion.webp",
        "alt": "OMODA X en el escenario del Chery International User Summit en Wuhu (foto: Autonoción)",
        "ancho": 1280,
        "alto": 720
      }
    ],
  },
];
