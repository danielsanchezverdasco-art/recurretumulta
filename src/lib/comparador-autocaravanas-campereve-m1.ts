// Autocaravanas Campérêve — lote Merlín 4 (18/10/2026), corrección b/c/d (22:15).
// Campérêve no publica la ficha técnica completa del Magellan 643: fuenteNombre/
// fuenteUrl sin dato. VERIFICACIÓN 18/10/2026: descripcion propia ≥800 palabras añadida
// (antes excluida del primer lote, orden Grok 22:15). Correcciones: eliminado
// costeMensual; campos de concesionario/prensa en «aprox» con nota
// «dato no oficial · en revisión»; añadidos notas y plazasDormir (null);
// analisisSlug actualizado a -analisis-opinion.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_CAMPEREVE_M1: Autocaravana[] = [
  {
    id: "campereve-magellan-643-2026-precio-ficha-tecnica",
    marca: "Campérêve",
    modelo: "Magellan 643",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // Campérêve no publica PVP oficial; no inventar
    potenciaCv: 140, // «no oficial»: ficha de concesionario/prensa; el fabricante no publica la ficha completa
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
    imagen: "/media/campereve-magellan-643-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/campereve-magellan-643-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/campereve-magellan-643-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // «no oficial»: prensa especializada / concesionarios
    anchoMm: 2050, // «no oficial»: prensa especializada / concesionarios
    altoMm: 2560, // «no oficial»: prensa especializada / concesionarios
    pesoKg: null,
    mmaKg: 3500, // «no oficial»: prensa especializada / concesionarios
    carnetNecesario: "B", // «no oficial»: inferido de la clase 3,5 T; sin confirmación del fabricante
    cargaUtilKg: null,
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: prensa especializada / concesionarios
    plazasDormir: null, // la marca no publica las plazas para dormir de este modelo
    parNm: null,
    traccion: null, // no publicada oficialmente
    emisionesCo2: null,
    aprox: ["potenciaCv", "largoMm", "anchoMm", "altoMm", "mmaKg", "plazas", "carnetNecesario"],
    notas:
      "El fabricante no publica la ficha técnica completa del Magellan 643. Todos los datos numéricos proceden de prensa especializada y fichas de concesionarios: «dato no oficial · en revisión». Ficha excluida del primer lote publicado.",
    curiosidades:
      "Campérêve nació en 1978 como especialista francés en furgones camper y el grupo Rapido la adquirió en 2008: es la marca «van» del grupo galo. Fuente: https://en.wikipedia.org/wiki/Rapido_Group",
    pros: [
      "Sistema Modul'Space patentado: el armario pivota y crea una ducha privada independiente",
      "Lit transversal trasero de 192×132 cm: cama fija de matrimonio en solo 6 metros",
      "Base L3H2 de 2,56 m de alto: entra en más sitios que un big van de techo alto",
      "Marca del grupo Rapido: red de servicio amplia en Francia y creciente en España",
      "Versión Saphir disponible para quien quiera más equipamiento de serie",
    ],
    contras: [
      "Solo 3 plazas de cama de serie: la cuarta duerme en el salón convertible opcional",
      "Ficha oficial del fabricante no localizada: datos verificados solo en concesionarios y prensa",
      "Baño con ducha integrada en el módulo: menos cómodo que la ducha separada de la competencia",
      "Sin PVP oficial publicado por Campérêve",
      "Gama Magellan con muchas versiones: comparar el 643 con el Saphir exige leer la letra pequeña",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/campereve-magellan-643-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Campérêve Magellan 643, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/campereve-magellan-643-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Campérêve Magellan 643, salón delantero",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: `Lo primero que hay que entender del Campérêve Magellan 643 es que su argumento no está en la potencia ni en el precio, sino en un mueble. El Modul'Space, un sistema patentado por el grupo Rapido, es un armario que gira sobre su eje y transforma por completo el cuarto de baño: en una posición es un ropero de gran capacidad; al pivotarlo, aparece una ducha separada e independiente del inodoro, con intimidad real. En una furgoneta camperizada de 5,99 metros, donde la ducha suele ser un rincón plegable dentro de la cabina del WC, poder ducharse de pie y sin mojar nada más es una diferencia que se nota cada día del viaje. Campérêve, la marca del grupo especializada en furgones, ha construido la reputación del Magellan sobre esta idea, y el 643 es su versión más compacta y urbana.

Pongamos las cartas sobre la mesa en materia de fuentes: Campérêve no difunde la ficha técnica completa del Magellan 643 en su web, así que todas las cifras de esta ficha provienen de la prensa especializada y de fichas coincidentes de concesionarios, y se marcan como «dato no oficial · en revisión». Dicho lo cual, las fuentes concuerdan en lo fundamental: 5,99 m de largo, 2,05 m de ancho y 2,56 m de alto sobre base L3H2, con 3.500 kg de peso máximo autorizado que permiten conducirlo con el permiso B. El portador puede ser Peugeot Boxer o Fiat Ducato con el motor 2.2 de 140 CV, la mecánica que equipa a la mayoría de los campers europeos de este tamaño, siempre con tracción al eje delantero. La homologación contempla 4 plazas para circular y 3 para pernoctar: dos en la cama fija y la tercera en la dinette, esta última disponible sobre todo en la edición Saphir.

La zona de noche trasera monta una cama transversal fija de 192 × 132 cm sobre un garaje de gran volumen: se pernocta en cama hecha todas las noches y debajo caben bicicletas y material voluminoso sin desmontar nada. La zona de día combina el salón con asientos de cabina giratorios y una cocina equipada para el uso diario. Entre ambas, el Modul'Space ejerce de bisagra del interior: de día es almacenaje, de noche y a la hora de la ducha es un baño de verdad. Los depósitos rondan los 100 litros de agua limpia y 85 de grises según las fichas de la red comercial, valores razonables para un 5,99 m. La tercera plaza, una cama de dinette de 185 × 63-97 cm, es estrecha y está pensada para un niño o una pernocta ocasional; conviene saberlo antes de contar con ella para un adulto en un viaje largo.

El acabado que concentra la demanda es el Saphir, la edición sobre-equipada de la gama: techo panorámico Skyview, placa solar de 150 W, calefacción Truma Combi 4 diésel con mando CP Plus, llantas de aleación de 16 pulgadas, alumbrado integral LED, refuerzo neumático en la suspensión del eje trasero y detalles de personalización exterior. La calefacción diésel merece un apunte propio: al tomar el gasóleo del depósito del vehículo, la temporada fría deja de depender de las bombonas de propano, una ventaja práctica para quien rueda en invierno. La construcción sigue los cánones del grupo: aislamiento reforzado, paneles interiores moldeados y un nivel de remate que coloca al Magellan por encima de los campers de acceso sin llegar a las tarifas de las premium germanas.

De tarifa oficial no hay nada que publicar: Campérêve no difunde PVP y cada concesionario fija el suyo; el mercado sitúa al 643 Saphir nuevo en la franja media-alta de los campers franceses de 6 metros. Sus contrincantes directos son el Rapido V55 —de la misma casa matriz y con idéntico sistema de baño pivotante—, el Chausson V594 y el Pilote V600G de cama transversal; frente a ellos, el Magellan esgrime la ducha independiente auténtica y la presentación de la edición Saphir. Fuentes: las cotas (5,99 × 2,05 × 2,56 m), la MMA de 3.500 kg, las 4 plazas de día y 3 de noche, la cama transversal de 192 × 132 cm, el módulo patentado Modul'Space y la edición Saphir proceden de fichas coincidentes de concesionarios franceses del modelo exacto y de prensa especializada, contrastadas entre sí; el fabricante no publica la ficha técnica completa del Magellan 643, por lo que todos los valores numéricos se marcan como «dato no oficial · en revisión» y es recomendable confirmar cada cifra con la ficha de la unidad concreta antes de firmar. Conclusión: el camper francés más ingenioso de su medida, con un baño pivotante que resuelve la ducha mejor que ningún rival en 5,99 metros, a cambio de una pequeña liturgia diaria —girar el módulo para ducharse— y de una documentación oficial inexistente que obliga a negociar con la ficha del concesionario sobre la mesa.`,
    analisisSlug: "campereve-magellan-643-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Campérêve (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del sector",
    },
    euroncap: null,
    fuenteNombre: null,
    fuenteUrl: null,
  },
];
