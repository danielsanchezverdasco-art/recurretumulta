// Autocaravanas Ahorn Camp — lote Merlín 1 (18/10/2026), corrección b/c/d (22:15).
// Fuente: lista oficial de precios Ahorn Camp Model Year 2026 (PDF verificado en
// ahorn-camp.de el 18/10/2026). Correcciones: eliminado costeMensual; precio 61.900 €
// en «aprox» con nota «precio de tarifa en Alemania»; añadidos descripcion, notas y
// plazasDormir; analisisSlug actualizado a -analisis-opinion. Ahorn Camp es marca
// alemana (Speyer); la gama 2026 es la nueva serie T sobre Renault Master.
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_AHORNCAMP_M1: Autocaravana[] = [
  {
    id: "ahorncamp-t-690-2026-precio-ficha-tecnica",
    marca: "Ahorn Camp",
    modelo: "T 690",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 61900, // PVP recomendado incl. IVA alemán (19 %), lista oficial MY2026
    potenciaCv: 130, // 2.0 Blue dCi de 130 CV; 170 CV opcional (+1.990 €)
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
    imagen: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // lista oficial: 6,99 m
    anchoMm: 2320, // lista oficial: 2,32 m
    altoMm: 2850, // lista oficial: 2,85 m
    pesoKg: null, // masa en orden de marcha no publicada en la lista oficial
    mmaKg: 3500, // lista oficial: 3.500 / 4.000 kg (ampliación a 4.000 kg: +690 €)
    carnetNecesario: "B",
    cargaUtilKg: null, // no publicada
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // lista oficial: hasta 4 (5)
    plazasDormir: 4, // lista oficial: 2 (4) camas
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera",
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Precio de tarifa en Alemania (PVP recomendado con IVA alemán del 19 %, lista oficial MY2026 de agosto de 2025); puede diferir en España. Resto de datos, de la misma lista oficial.",
    descripcion: `La Ahorn Camp T 690 es una autocaravana perfilada de 6,99 metros que pertenece a la nueva serie T de la marca alemana Ahorn Camp, presentada para el año modelo 2026. Es un lanzamiento importante porque supone el salto generacional de la marca: la gama 2026 abandona las bases anteriores y se construye sobre la cuarta generación del Renault Master, con el motor 2.0 Blue dCi. La T 690 es la perfilada grande de la serie, pensada para parejas o familias pequeñas que buscan una autocaravana de casi 7 metros a un precio de tarifa muy contenido, con la transparencia poco habitual de una lista de precios pública y detallada.

Los datos oficiales son claros porque vienen de la lista de precios del fabricante para el año modelo 2026, un documento público que Ahorn Camp actualiza cada temporada. La T 690 mide 6,99 m de largo, 2,32 m de ancho y 2,85 m de alto, con una MMA de 3.500 kg ampliable a 4.000 kg con un sobrecoste de 690 euros. Homologa hasta 4 plazas para viajar —5 con el asiento adicional opcional— y de 2 a 4 camas, lo que la sitúa como una perfilada familiar sin saltar al formato integral, más caro y más alto. El motor de serie es el 2.0 Blue dCi de 130 CV con cambio manual; quien quiera más músculo puede optar al mismo motor en versión de 170 CV con cambio automático de 9 velocidades por 1.990 euros más. La lista oficial detalla incluso el peso y el precio de cada pack, una transparencia que en este sector se agradece: el pack chasis Renault (climatizador, faros LED, control de crucero, sensores de presión) cuesta 1.900 euros, el pack multimedia con pantalla de 10 pulgadas y cámara trasera 990 euros, y el pack invierno con calefacción Truma Combi 6E 1.190 euros.

Con el carnet B se puede conducir la versión de 3.500 kg, que es la estándar. La ampliación a 4.000 kg, además de costar 690 euros, puede exigir carnet C1 según la legislación del país de matriculación, así que conviene hacer ese cálculo antes de pedirla: en España, con el B solo se puede llevar hasta 3.500 kg. La masa en orden de marcha no la publica la marca en la lista de precios, de modo que la carga útil real es una incógnita hasta que el concesionario pese la unidad configurada; es el punto débil informativo de esta ficha y hay que decirlo con claridad.

En la vida a bordo, la T 690 apuesta por lo esencial bien resuelto: salón delantero con asientos giratorios, cocina funcional, baño con ducha y dormitorio trasero con camas que permiten la configuración de hasta 4 plazas de noche. Al ser una gama completamente nueva para 2026, no hay todavía historial de fiabilidad ni opiniones de propietarios que consultar, algo que los compradores más cautos valorarán frente a marcas con décadas de modelos equivalentes en circulación. A cambio, se viaja sobre la última generación del Renault Master, con sus ayudas a la conducción modernas —alerta de fatiga, frenada de emergencia, aviso de cambio de carril en el pack de asistencia— y un puesto de conducción más refinado que el de las generaciones anteriores.

El precio es su gran argumento comercial: 61.900 euros de PVP recomendado en Alemania con el IVA alemán del 19 % incluido, lo que la convierte en una de las perfiladas de 7 metros con precio de fábrica más bajo del mercado europeo. Ojo, es «precio de tarifa en Alemania»: en España el PVP puede diferir por impuestos, transporte y la política de cada importador, y la cifra no incluye los 2.450 euros de gastos de entrega, inspección y documentación que la propia lista oficial añade. Aun así, la referencia es útil para comparar: sus rivales naturales —Dethleffs Trend, Weinsberg CaraCore o las perfiladas de entrada de Benimar— parten de tarifas superiores en sus mercados de origen. La red de distribución de Ahorn Camp fuera de Alemania es pequeña, y en España apenas hay concesionarios, así que el servicio postventa exigirá planificar las revisiones con antelación.

Cómo lo verificamos: todos los datos de esta ficha proceden de la lista oficial de precios Ahorn Camp para el año modelo 2026 (documento PDF «Model Year 2026 · Semi-Integrated Motorhomes on Renault Master Chassis», estado agosto de 2025), descargada de ahorn-camp.de y verificada el 18 de octubre de 2026. La marca no publica la masa en orden de marcha en ese documento, así que no ofrecemos cifra de carga útil. Los acabados y la calidad de los materiales solo podrán juzgarse cuando haya unidades en circulación y opiniones de propietarios.

Para quién es: la Ahorn Camp T 690 es para quien busca una perfilada de 7 metros nueva a precio ajustado, valora la transparencia de una tarifa pública y no le importa estrenar una gama sin historial a cambio de viajar sobre la última generación del Renault Master. No es para quien necesite una red de servicio densa en España ni para quien busque acabados premium. El veredicto es que es la opción racional del segmento por precio y equipamiento configurable, con la incógnita lógica de una gama recién nacida y una red comercial corta fuera de Alemania.`,
    curiosidades: "Las camas gemelas traseras (199 × 80 cm y 207 × 80 cm) pueden unirse para formar una gran cama doble, y Ahorn Camp ofrece 7 años de garantía de estanqueidad en la célula. Fuente: página oficial del modelo T 690 Eclipse (https://ahorn-camp.de/ahorn-reisemobile/t-690-eclipse/).",
    pros: [
      "PVP oficial de 61.900 €: la perfilada de 7 m con precio de fábrica más bajo del lote",
      "Nueva generación sobre Renault Master de 4.ª generación con 2.0 Blue dCi: chasis moderno de 2026",
      "Opción de 170 CV con cambio automático de 9 marchas: hay versión potente sin cambiar de marca",
      "Marca alemana con lista de precios pública: transparencia poco habitual en el sector",
      "Hasta 4 (5) plazas y 2 (4) camas en 6,99 m: formato familiar sin saltar a la integral",
    ],
    contras: [
      "Masa en orden de marcha no publicada en la lista oficial: la carga útil real es una incógnita",
      "Motor base de 130 CV: el menos potente para una perfilada de 7 m; el de 170 CV se paga aparte",
      "Gama totalmente nueva (2026): sin historial de fiabilidad ni opiniones de propietarios todavía",
      "Red de distribución pequeña fuera de Alemania: en España casi no hay concesionarios",
      "Acabados de acceso para ajustar el precio: no esperes el refinamiento de las alemanas premium",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Ahorn Camp T 690 Eclipse, vista tres cuartos delantera (foto oficial)",
        ancho: 1200,
        alto: 675,
      },
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial-ext2.webp",
        alt: "Ahorn Camp T 690 Eclipse, vista delantera (foto oficial)",
        ancho: 1200,
        alto: 591,
      },
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-oficial-interior.webp",
        alt: "Dormitorio del Ahorn Camp T 690 con camas gemelas traseras (foto oficial)",
        ancho: 1200,
        alto: 801,
      },
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-ext.webp",
        alt: "Ahorn Camp T 690, vista tres cuartos delantera (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/ahorncamp-t-690-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Ahorn Camp T 690, salón y dormitorio (foto oficial)",
        ancho: 1200,
        alto: 800,
      },
    ],
    analisisSlug: "ahorncamp-t-690-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Renault Master: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Renault)",
      revisiones: [
        {
          nombre: "Revisión Renault Master (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de aire + filtro de gasóleo + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Ahorn Camp (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Renault Master + recomendaciones Ahorn Camp",
    },
    euroncap: null,
    fuenteNombre: "Ahorn Camp (lista oficial de precios MY2026)",
    fuenteUrl:
      "https://ahorn-camp.de/wp-content/uploads/2025/10/AhornCamp_PriceList_SemiIntegrated_ModelYear_2026-1.pdf",
  },
];
