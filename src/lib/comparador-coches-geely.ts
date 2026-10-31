// Geely (05/10/2026) — gama real 2024+ vendida en España/Europa.
// Verificado con geelyauto.es (oficial), capital.es, ant-co.in (Europa Press),
// autohebdosport.com, autonocion.com, forococheselectricos.com,
// hibridosyelectricos.com, soymotor.com, carnovo.com y es.wikipedia.org.
// Formato CocheComparador idéntico a comparador-coches-data.ts.
// El E2 (geely-e2-electrico-espana-13990-euros-ficha) ya existe en
// comparador-coches-nuevos.ts: NO se duplica aquí.
// Notas de nomenclatura: en España el SUV eléctrico se vende como "Geely E5"
// (EX5 en otros mercados, Galaxy E5 en China); el Starray EM-i es el
// Galaxy Starship 7 chino. Geome (Geometry) no se vende en Europa.
import type { CocheComparador } from "./comparador-coches-data.ts";

export const COCHES_GEELY: CocheComparador[] = [
  {
    id: "geely-e5-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/geely-e5-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/geely-e5-2026-precio-ficha-tecnica-interior.webp",
    videoId: "IKBvbkV2h_Y",
    videoCanal: "pruebatucoche",
    marca: "Geely",
    modelo: "E5",
    tipo: "Eléctrico",
    categoria: "SUV",
    precioDesde: 37490,
    potenciaCv: 218,
    autonomiaKm: 475, // 430 km en el Pro (60,2 kWh); 475 km en Pro+/Max+ (68,4 kWh)
    maleteroL: null,
    ceroCien: 6.9, // 6,9-7,6 s según versión (Europa Press)
    velocidadMax: 175,
    bateriaKwh: 60.2, // versión Pro; 68,4 kWh en Pro+/Max+
    cargaRapidaKw: 110,
    etiquetaDgt: "Cero",
    pros: [
      "Hasta 475 km WLTP (430 km en la versión de acceso) con batería LFP de gran durabilidad",
      "Desde 37.490 € (25.485 € con campañas y Plan Auto+): el C-SUV eléctrico más asequible de su tamaño",
      "Carga rápida del 30 al 80 % en 20 minutos y consumo de solo 16,7 kWh/100 km",
      "Garantía de 8 años o 200.000 km para coche y batería, con 5 estrellas Euro NCAP",
      "Pantalla de 15,4\", techo panorámico y un interior amplísimo con cajones bajo los asientos",
    ],
    contras: [
      "La versión de acceso (Pro) se queda en 430 km: la de 475 km exige el Pro+ (39.990 €)",
      "218 CV con tacto confortable: no busca emociones al volante",
      "Sin maletero delantero (el E5 renovado chino sí lo trae) ni cifra de maletero destacada",
      "Marca recién llegada: red de unos 20 concesionarios en expansión (objetivo: 50 este año)",
      "La renovación china (800 V, 333 CV, propulsión trasera) aún no tiene fecha para Europa",
    ],
    largoMm: 4615,
    anchoMm: 1901,
    altoMm: 1670,
    pesoKg: null,
    consumo: 16.7,
    consumoUnidad: "kWh/100 km",
    plazas: 5,
    parNm: 320,
    traccion: "Delantera",
    emisionesCo2: 0,
    aprox: ["autonomiaKm", "ceroCien"],
    imagen: "/media/geely-e5-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "en la prueba realizada con la versión MAX+, el modelo ha permitido más de 300 kilómetros en carretera con un consumo combinado de 17 kWh",
        "usuario": "redacción (prueba, vía Europa Press)",
        "fuente": "ant-co.in",
        "url": "https://ant-co.in/news/asi-se-conduce-el-geely-e5-el-suv-electrico-de-218-cv-y-hasta-475-km-de-autonomia-20260926a512396dc8a6f.html"
      },
      {
        "texto": "una calidad de interiores elevada, a la que se suma un amplísimo espacio interior que incluye cajones bajo los asientos traseros",
        "usuario": "redacción (toma de contacto)",
        "fuente": "autohebdosport.com",
        "url": "https://autohebdosport.com/coches/noticias/geely-duena-de-volvo-y-lotus-aterriza-en-espana-con-dos-suv"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 3.0,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1050,
      "mantenimientoAnual": 400,
      "costeMensualTotal": 158,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.6,
      "notas": "estimación con 15.000 km/año y recarga doméstica a 0,18 €/kWh; sin ayudas ni campañas; autonomía y consumo varían según versión (430/475 km WLTP)",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/geely-e5-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Geely E5, SUV eléctrico, vista tres cuartos delantera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/geely-e5-2026-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Geely E5, vista tres cuartos trasera con piloto LED horizontal",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/geely-e5-2026-precio-ficha-tecnica-interior.webp",
        "alt": "Interior del Geely E5, pantalla táctil de 15,4 pulgadas",
        "ancho": 1920,
        "alto": 1280
      }
    ],
    fuenteNombre: "geelyauto.es",
    fuenteUrl: "https://www.geelyauto.es/",
  },
  {
    id: "geely-starray-em-i-2026-precio-ficha-tecnica",
    garantiaBateriaAnos: 8,
    garantiaBateriaKm: 200000,
    garantiaBateriaDegradacionPct: null,
    imagenOficial: "/media/geely-starray-em-i-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/geely-starray-em-i-2026-precio-ficha-tecnica-interior.webp",
    videoId: "7A1VFwVS1eE",
    videoCanal: "Loading Cars",
    marca: "Geely",
    modelo: "Starray EM-i",
    tipo: "Híbrido enchufable",
    categoria: "SUV",
    precioDesde: 30490,
    potenciaCv: 262,
    autonomiaKm: 136, // eléctrica WLTP con batería de 29,8 kWh (83 km con la de 18,4 kWh); 1.055 km totales
    maleteroL: 528,
    ceroCien: 8.0, // 8,0-8,2 s según batería
    velocidadMax: 170,
    bateriaKwh: 18.4, // versión Pro; 29,8 kWh en Pro+/Max+
    cargaRapidaKw: 30, // 30-80 % en 16 min (oficial); potencia pico en kW sin publicar
    etiquetaDgt: "Cero",
    pros: [
      "Hasta 136 km eléctricos y 1.055 km totales: el PHEV con más autonomía de su segmento",
      "Desde 33.490 € (26.215 € con promociones): precio de generalista con equipo premium",
      "Carga rápida del 30 al 80 % en 16 minutos, insólita en un híbrido enchufable",
      "Maletero de 528 L (2.065 L abatido) y 5 estrellas Euro NCAP: el familiar redondo",
      "Motor térmico de Horse Powertrain, la filial de Geely y Renault con sede en España",
    ],
    contras: [
      "Si no lo cargas, el consumo se dispara (5,5-7,3 l/100 km en autovía según pruebas)",
      "Cambio de una sola relación tipo CVT: en aceleraciones fuertes se nota el patinamiento",
      "Solo tracción delantera y 170 km/h de velocidad máxima",
      "La batería pequeña (18,4 kWh) da 83 km eléctricos: la de 136 km exige el Pro+ (35.990 €)",
      "Marca nueva en España: el valor de reventa está aún por demostrar",
    ],
    largoMm: 4740,
    anchoMm: 1905,
    altoMm: 1685,
    pesoKg: 1805,
    consumo: null,
    consumoUnidad: "l/100 km",
    plazas: 5,
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: 54,
    aprox: ["autonomiaKm", "ceroCien", "pesoKg"],
    imagen: "/media/geely-starray-em-i-2026-precio-ficha-tecnica-hero.webp",
    opiniones: [
      {
        "texto": "expectativas superadas y mucha calidad interior",
        "usuario": "redacción (primera prueba en España)",
        "fuente": "soymotor.com",
        "url": "https://soymotor.com/coches/geely/primera-prueba-geely-starray-em-i"
      },
      {
        "texto": "carga más rápido de lo que dice la ficha oficial",
        "usuario": "SDA Dan Autos (prueba en YouTube)",
        "fuente": "youtube.com",
        "url": "https://www.youtube.com/watch?v=LLlXk1y1r3c"
      }
    ],
    costeMensual: {
      "costeEnergia100km": 3.8,
      "seguroTercerosAnual": 550,
      "seguroAmpliadoAnual": 1000,
      "mantenimientoAnual": 500,
      "costeMensualTotal": 172,
      "precioKwh": 0.18,
      "precioGasolinaL": 1.6,
      "notas": "estimación con 15.000 km/año y carga habitual en casa; consumo WLTP ponderado 2,4 l/100 km; sin cargar, el consumo real sube notablemente",
      "estimado": true
    },
    galeria: [
      {
        "src": "/media/geely-starray-em-i-2026-precio-ficha-tecnica-oficial.webp",
        "alt": "Geely Starray EM-i, SUV híbrido enchufable, vista lateral",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/geely-starray-em-i-2026-precio-ficha-tecnica-oficial-2.webp",
        "alt": "Geely Starray EM-i, vista tres cuartos trasera",
        "ancho": 1920,
        "alto": 1280
      },
      {
        "src": "/media/geely-starray-em-i-2026-precio-ficha-tecnica-interior.webp",
        "alt": "Interior del Geely Starray EM-i, pantalla HD de 15,4 pulgadas",
        "ancho": 1920,
        "alto": 1280
      }
    ],
    fuenteNombre: "geelyauto.es",
    fuenteUrl: "https://www.geelyauto.es/",
  },
];
