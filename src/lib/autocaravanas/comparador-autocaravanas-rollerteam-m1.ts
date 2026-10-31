// Autocaravanas Roller Team — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// F9 (19/10/2026): fotos oficiales (1 ext + 2 int) + curiosidades.
// Datos verificados: rollerteammotorhomes.co.uk (web OFICIAL UK de Roller Team; PDF oficial de
// especificaciones Auto-Roller temporada 2026, revisado el 18/10: 7,24/2,35/3,20 m, 2.935 kg,
// 3.500 kg, 6 plazas para dormir, 6 cinturones —5 con automático—, Ford Transit 2.0 TDI 130 CV).
// La gama Auto-Roller es exclusiva del mercado británico (en rollerteam.it no existe).
// Calefacción: 6 kW gas/eléctrica (oficial; la marca "Truma Combi 6E" es de prensa).
// Precio en España no verificado: sin precio oficial publicado (no inventar).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ROLLERTEAM_M1: Autocaravana[] = [
  {
    id: "roller-team-auto-roller-746-2026-precio-ficha-tecnica",
    marca: "Roller Team",
    modelo: "Auto-Roller 746",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: null, // precio en España no verificado; no inventar (gama exclusiva del mercado británico)
    potenciaCv: 130, // Ford Transit 2.0 TDI Euro 6D 130 CV (oficial; opcionales: 165 CV y automático)
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
    imagen: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7240, // PDF oficial Roller Team UK 2026: 7,24 m
    anchoMm: 2350,
    altoMm: 3200,
    pesoKg: 2935, // masa en orden de marcha según PDF oficial Roller Team UK 2026
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil: solo MMA y masa en orden de marcha oficiales
    consumo: null,
    consumoUnidad: null,
    plazas: 6, // 6 cinturones con cambio manual, 5 con automático (oficial)
    plazasDormir: 6, // oficial PDF 2026 («Berths 6»)
    parNm: null,
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["etiquetaDgt"],
    pros: [
      "Capuchina para 6 con salón trasero en U convertible: el estar más grande de su clase",
      "Cama de capuchina de 2,09 x 1,60 m más cama elevable de 1,90 x 1,60 m: 6 plazas para dormir oficiales sin montar el salón",
      "MMA de 3.500 kg con una masa en orden de marcha oficial de solo 2.935 kg: de las capuchinas con más margen de carga del segmento",
      "Cocina central y baño central separan estar y dormir: intimidad con niños",
      "Roller Team (grupo Trigano): buena relación equipamiento/precio en capuchinas familiares",
    ],
    contras: [
      "7,24 m de largo y 3,20 m de alto: la más voluminosa del lote; consumo y peajes lo notan",
      "La capuchina penaliza la aerodinámica: en autopista gasta más que una perfilada",
      "6 cinturones con cambio manual, 5 con automático (oficial): con el automático, una plaza duerme pero no viaja",
      "El salón trasero en U obliga a pasar por la cocina para ir al baño de noche",
      "Gama exclusiva del mercado británico: en España no hay red oficial ni precio publicado",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Roller Team Auto-Roller 746, vista exterior oficial",
        ancho: 1200,
        alto: 675,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Detalle del estante con iluminación LED del Roller Team Auto-Roller 746 (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-oficial-interior2.webp",
        alt: "Comedor y cama de capuchina del Roller Team Auto-Roller 746 (foto oficial)",
        ancho: 1200,
        alto: 650,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-ext.webp",
        alt: "Roller Team Auto-Roller 746, vista lateral con capuchina",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Roller Team Auto-Roller 746, salón trasero en U",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Interior del Roller Team Auto Roller 746",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/roller-team-auto-roller-746-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Detalle del Roller Team Auto Roller 746",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: `La Roller Team Auto-Roller 746 es una rareza en esta tanda por un motivo sencillo: es británica. La gama Auto-Roller se vende exclusivamente en el Reino Unido —en la web italiana de Roller Team ni siquiera existe—, así que esta ficha documenta un modelo que en España solo llegará por importación paralela o mercado de ocasión. Y merece la pena conocerla, porque es la capuchina familiar llevada a su máxima expresión: 7,24 metros de largo, 3,20 de alto y seis plazas para dormir oficiales con seis cinturones de viaje. Pocas autocaravanas del mercado europeo mueven a seis personas con este desahogo.

La distribución es la que define su carácter: salón trasero en U convertible, el estar más grande de su clase, con la cocina y el baño en posición central separando la zona de día de la de noche. Es un planteamiento pensado para familias con niños: los pequeños tienen su territorio atrás, los padres el suyo delante, y el baño en medio evita peregrinaciones nocturnas por toda la célula. Las camas están medidas en el PDF oficial al centímetro: cama de capuchina de 209 × 160 cm, cama elevable de 190 × 160 cm, cama trasera de 216 × 169 cm y cama de dinette de 186 × 126 cm. Seis plazas para dormir sin montar el salón, una cifra que casi ninguna rival europea alcanza en este formato. La cocina, con tres fuegos y horno de gas, y el baño central completan una célula pensada para la vida en familia prolongada.

Con 7,24 × 2,35 × 3,20 m es la más voluminosa del lote, y eso se nota en dos sitios: en el consumo —la chepa de la capuchina y la altura penalizan la aerodinámica en autopista— y en los peajes y parkings, donde cada centímetro cuenta. A cambio, la altura interior es de 2,08 m y la sensación de espacio es la de un apartamento pequeño, con una luminosidad que las capuchinas continentales más estrechas no alcanzan. Es un vehículo para moverse con calma y aparcar con planificación, no para improvisar en pueblos medievales.

La base es el Ford Transit 2.0 TDI Euro 6D de 130 CV con cambio manual, con opción de 165 CV y de cambio automático; aquí hay un detalle oficial que conviene no pasar por alto: con cambio manual hay seis cinturones, pero con el automático la cifra baja a cinco, así que la sexta plaza duerme pero no viaja si se elige el automático. La MMA es de 3.500 kg —basta el carnet B— y la masa en orden de marcha oficial es de solo 2.935 kg, una cifra contenida para una capuchina de este tamaño que deja un margen de carga generoso para seis ocupantes y su equipaje; la marca no publica la carga útil como tal, así que la ficha muestra las dos cifras oficiales sin calcular nada.

El equipamiento de serie británico es completo: panel solar montado de fábrica, calefacción y agua caliente de 6 kW a gas y electricidad, cocina con tres fuegos y horno de gas, frigorífico trivalente con congelador, portabicis para cuatro y claraboya panorámica. Es la dotación de quien compra para usar desde el primer día sin pasar por la lista de opcionales. En precio no hay cifra que dar: al ser una gama exclusiva del mercado británico, no existe tarifa española ni red oficial en España, así que comparar exige moverse en el mercado de importación, con el volante a la derecha como peaje adicional para el comprador continental.

Sus rivales conceptuales son las capuchinas familiares europeas de 7 a 7,4 m para seis, frente a las que la 746 ofrece más espacio interior a cambio de unas dimensiones que en el continente se hacen notar. Es para familias numerosas que necesitan seis plazas reales para dormir, que viajan al Reino Unido o que buscan en el mercado de ocasión británico una capuchina espaciosa a buen precio. No es para quien quiere comprar nueva en España con red oficial detrás ni para quien aparca en campings de parcela pequeña. Cómo lo verificamos: las medidas (7,24 × 2,35 × 3,20 m), las 6 plazas para dormir, los 6 cinturones —5 con automático—, la MMA de 3.500 kg, la masa en orden de marcha de 2.935 kg, el motor Ford Transit 2.0 TDI de 130 CV y las medidas de las camas proceden del PDF oficial de especificaciones Auto-Roller 2026 de rollerteammotorhomes.co.uk, revisado el 18/10/2026; la gama es exclusiva del mercado británico según la propia web oficial, por eso no hay precio español. En definitiva: la capuchina más espaciosa del lote para seis, con equipamiento británico completo de serie, a cambio de comprarla por importación, con el volante a la derecha y unas dimensiones que exigen planificar cada aparcamiento.

Para el comprador español, la vía sensata es el mercado de ocasión británico: unidades de dos o tres años con poco kilometraje y precios sensiblemente inferiores a los de una capuchina continental equivalente. Hay que sumar el coste del traslado, la matriculación y la adaptación de los faros, pero incluso con esos gastos la ecuación suele salir a cuenta. Y una vez matriculada, la mecánica Ford Transit se mantiene en cualquier taller español sin depender de la red británica: el motor, la caja y los frenos son los mismos que montan miles de furgonetas en España.`,
    analisisSlug: "roller-team-auto-roller-746-2026-analisis-opinion",
    curiosidades:
      "Roller Team respalda la célula del Auto-Roller 746 con 10 años de garantía de integridad de la construcción, además de 5 años para el vehículo base y la transformación: una de las coberturas más largas del segmento. Fuente: análisis de Out and About Live, https://www.outandaboutlive.co.uk/reviews/motorhomes/roller-team-auto-roller-746-1",
    planMantenimiento: {
      intervalo:
        "Ford Transit: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Ford)",
      revisiones: [
        {
          nombre: "Revisión Ford Transit (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Roller Team (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Ford Transit + recomendaciones Roller Team",
    },
    euroncap: null,
    notas:
      "La marca no publica la carga útil del modelo: se muestran la MMA (3.500 kg) y la masa en orden de marcha (2.935 kg), ambas oficiales, sin calcular. La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante: dato no oficial · en revisión. Roller Team no publica PVP oficial verificable.",
    fuenteNombre: "Roller Team (web oficial UK, PDF especificaciones 2026)",
    fuenteUrl:
      "https://www.rollerteammotorhomes.co.uk/wp-content/uploads/sites/4/2025/06/auto-roller-tech-spec-tables-2026.pdf",
  },
];
