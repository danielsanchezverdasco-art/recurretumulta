// Autocaravanas Rapido — lote Merlín 1 (18/10/2026).
// Datos verificados: rapido-camping-car.fr (web oficial del fabricante: confirma para el
// V55 la pertenencia a la serie especial OPTIMUM LINE y el sistema patentado
// MODUL'SPACE®); para el 606F: ficha oficial del modelo + guide technique de la colección
// 2026 (perfilada Serie 6F, 6,69 m, PTAC 3,5/3,65 T, carga útil 520 kg, Peugeot Boxer 2,2
// 140 CV, cama basculante eléctrica de techo, Truma Combi 4 diésel). Rapido NO publica
// precios por modelo en su web pública (salvo franjas orientativas genéricas por tipo).
// Los datos técnicos del V55 proceden de fichas de la red de concesionarios franceses de
// unidades 2026 (datos coincidentes), claramente identificados como tales.
// CORRECCIÓN 4 (18/10/2026, V55): verificado en rapido-camping-car.fr — la web oficial solo
// confirma la pertenencia a la serie especial OPTIMUM LINE y el sistema MODUL'SPACE®; NO
// publica ficha técnica del V55. Todos los datos numéricos del V55 marcados «no oficial»
// en "aprox" (fuente: fichas coincidentes de concesionarios FR).
// Precio "desde" no publicado por el fabricante en ningún mercado → null (no inventar).
// Fotos: pendientes de subida; se referencian los nombres y se suben antes de anunciar el lote.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M1: Autocaravana[] = [
  {
    id: "rapido-v55-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "V55 Optimum Line",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica ningún precio oficial; solo existen precios de concesionarios
    potenciaCv: 140, // «no oficial»: según fichas coincidentes de concesionarios FR (aveyroncampingcar.com, cap-passion.fr); la web oficial no publica ficha del V55
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // «no oficial»: según fichas coincidentes de concesionarios FR; la web oficial no publica ficha del V55
    anchoMm: 2050, // «no oficial»: ver nota anterior
    altoMm: 2590, // «no oficial»: ver nota anterior
    pesoKg: null, // no publicado por el fabricante; una ficha de concesionario de unidad 2026 indica 3.040 kg en vacío
    mmaKg: 3500, // «no oficial»: PTAC de 3.500 kg según fichas de concesionarios FR
    carnetNecesario: "B",
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: 4 plazas de circulación según fichas de concesionarios FR
    parNm: null,
    traccion: "Delantera", // «no oficial»: portador Peugeot Boxer (tracción delantera según fichas de concesionarios)
    emisionesCo2: null,
    aprox: ["potenciaCv", "largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "traccion"], // «no oficial»: web oficial sin ficha del V55
    pros: [
      "Menos de 6 m con 3 plazas de dormir y 4 de viaje: formato muy compacto y maniobrable, ideal para uso diario y ciudad",
      "Sistema patentado MODUL'SPACE®: en un van de menos de 6 m consigue ducha y WC separados de verdad, algo único en su categoría",
      "Cama transversal trasera de 195x132 cm con soute modulable debajo (caben 2 bicis) y colchón Bultex",
      "Buenas autonomías de serie: 110 l de agua limpia y 85 l de residuales, por encima de muchos rivales de 6 m",
      "Serie especial OPTIMUM LINE sobre-equipada de serie: multimedia con Apple CarPlay/Android Auto, cámara de marcha atrás, Traction+ y construcción XHP",
    ],
    contras: [
      "El fabricante no publica ningún precio oficial: imposible comparar sin pasar por concesionario y los precios de red varían mucho",
      "La tercera plaza de dormir es una cama auxiliar de dinette estrecha (185x63-97 cm), poco cómoda para un adulto",
      "La cama transversal mide 195 cm de largo: personas altas dormirán justas",
      "El armario MODUL'SPACE hay que moverlo cada vez que se quiere duchar o usar la cama: operativa diaria obligada",
      "Con unos 3.040 kg en vacío según ficha de concesionario, la carga útil real queda en unos 460 kg: con 4 personas, agua llena y equipaje se agota rápido",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 12.6,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 600,
      seguroAmpliadoAnual: 1100,
      mantenimientoAnual: 550,
      costeMensualTotal: 390,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~9 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/rapido-v55-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido V55 Optimum Line, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-v55-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Rapido V55, sistema Modul'Space",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "rapido-v55-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Peugeot)",
      revisiones: [
        {
          nombre: "Revisión Peugeot Boxer (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Peugeot Boxer + recomendaciones Rapido",
    },
    euroncap: null,
    fuenteNombre:
      "Rapido (web oficial: OPTIMUM LINE y MODUL'SPACE®) + fichas de concesionarios FR («no oficial»: la web oficial no publica la ficha técnica del V55)",
    fuenteUrl:
      "https://www.rapido-camping-car.fr/inc/rapido_nouveautes_les-fourgons_camping-car-serie-vans.phtml",
  },
  {
    id: "rapido-606f-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "606F",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica ningún precio por modelo; solo franjas orientativas genéricas por tipo
    potenciaCv: 140,
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C",
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/rapido-606f-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/rapido-606f-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/rapido-606f-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6690,
    anchoMm: 2350, // 2.760 mm con retrovisores abiertos
    altoMm: 2900, // +45 mm con llantas de 16"
    pesoKg: 2980, // masa en orden de marcha según el guide technique oficial 2026
    mmaKg: 3500, // PTAC 3,65 T disponible; versión HEAVY de 4,25 T en opción (exige carnet C1)
    carnetNecesario: "B",
    cargaUtilKg: 520, // cifra oficial publicada por Rapido
    consumo: null,
    consumoUnidad: null,
    plazas: 4,
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Cama de techo eléctrica de serie (150/130x195 cm, somier de láminas y colchón Bultex®): 4 camas en 6,69 m sin robar ni un metro a la zona de día, porque no hay cama fija trasera",
      "Garaje transversal calefactado de 85x217x120 cm con acceso desde el interior y por ambos lados, más vestidor/dressing XXL en la trasera: dos bicis y el equipaje viajan sin tocar el salón",
      "Calefacción Truma Combi 4 diésel con mando CP Plus de serie: tira del depósito de gasóleo, así que el frío no depende de las dos bombonas de propano",
      "ADAS completo de serie en el portador: frenada de emergencia, mantenimiento de carril, detección de somnolencia, Traction+ con control de descenso y neumáticos all season 3PMSF",
      "Salón cara a cara abierto sin estrado, con mesa de pie telescópico eléctrico y techo panorámico Skyview con descongelación: la zona de día de una compacta con sensación de integral",
    ],
    contras: [
      "Sin cama fija: la segunda cama es la transformación del salón (115x208 cm), que hay que montar cada noche si viajan cuatro",
      "Rapido no publica el precio del 606F: la franja orientativa genérica de su web para perfiladas nuevas (75.000–95.000 € TTC) no es el precio de este modelo",
      "Carga útil de 520 kg con 2.980 kg en orden de marcha: con cuatro personas, 120 l de agua y el garaje lleno, el margen se agota rápido",
      "PTAC variable según versión (3,5 o 3,65 T; HEAVY de 4,25 T opcional que ya exige el C1): hay que confirmar el de la unidad concreta antes de firmar",
      "Discrepancia en la propia documentación oficial sobre el frigorífico (la ficha web dice compresión de 174 l, el guide technique 2026 dice absorción de 156 l): conviene confirmarlo con el concesionario",
    ],
    opiniones: [],
    costeMensual: {
      costeEnergia100km: 14.7,
      precioKwh: 0.18,
      precioGasolinaL: 1.6,
      seguroTercerosAnual: 650,
      seguroAmpliadoAnual: 1200,
      mantenimientoAnual: 600,
      costeMensualTotal: 425,
      notas:
        "Estimación con 12.000 km/año, consumo medio ~10,5 l/100 km de gasóleo y seguro a todo riesgo. Coste real muy dependiente del uso.",
      estimado: true,
    },
    galeria: [
      {
        src: "/media/rapido-606f-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido 606F, vista tres cuartos delantera",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-606f-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Rapido 606F, salón cara a cara y cama de techo",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "rapido-606f-2026-precio-ficha-tecnica",
    planMantenimiento: {
      intervalo:
        "Peugeot Boxer 2.2 (Francia; Fiat Ducato en exportación): revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan del fabricante del portador)",
      revisiones: [
        {
          nombre: "Revisión del portador (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente:
        "Plan de mantenimiento Peugeot Boxer / Fiat Ducato + recomendaciones Rapido",
    },
    euroncap: null,
    fuenteNombre:
      "Rapido (ficha oficial del modelo + guide technique colección 2026)",
    fuenteUrl:
      "https://www.rapido-camping-car.fr/reisemobil_teilintegrierte_serie-6f_606f.chtml",
  },
];
