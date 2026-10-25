// Autocaravanas Font Vendôme — lote Merlín 1 (18/10/2026).
// Datos verificados: web oficial font-vendome.fr (página del modelo Mondéa).
// CORRECCIÓN 5 (18/10/2026): fuenteUrl concreta (página del modelo exacto, no la
// portada de la marca); eliminado el bloque `costeMensual`; `analisisSlug` nuevo;
// añadidos `descripcion`, `plazasDormir` y `notas`.
// Font Vendôme no publica PVP («À partir de -» en su web): sin precio oficial publicado.
// FOTO OFICIAL + curiosidad (agente F5, 19/10/2026): 1 ext oficial del folleto del fabricante.
// Medidas oficiales verificadas: 599 x 205 x 289 cm; 4 plazas viaje / 4 couchages.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_FONTVENDOME_M1: Autocaravana[] = [
  {
    id: "font-vendome-mondea-2026-precio-ficha-tecnica",
    marca: "Font Vendôme",
    modelo: "Mondéa",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // la web oficial muestra «À partir de -»: sin precio publicado
    potenciaCv: 140, // 2.2 Multijet 3 de 140 CV (180 CV opcional), manual de 6 velocidades
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
    imagen: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-oficial.webp", // F5 19/10: portada oficial (folleto oficial Font Vendôme 2026)
    imagenOficial:
      "/media/font-vendome-mondea-2026-precio-ficha-tecnica-oficial.webp", // F5 19/10: foto oficial del folleto del fabricante
    imagenInteriorOficial:
      "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // 599 cm según font-vendome.fr
    anchoMm: 2050, // 205 cm según font-vendome.fr
    altoMm: 2890, // 289 cm según font-vendome.fr
    pesoKg: null, // la marca publica la MRO por motorización (3.092 kg con 140 CV / 3.167 kg con 180 CV en la gama 2027; 3.088–3.148 kg en la ficha 2026): sin cifra única
    mmaKg: 3500, // PTAC 3.500 kg según font-vendome.fr
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica la carga útil del modelo exacto
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas homologadas según font-vendome.fr
    plazasDormir: 4, // 4 couchages según font-vendome.fr (cama principal 197 x 132 + cama de dinette 184 x 99)
    parNm: null, // no publicado por el fabricante
    traccion: "Delantera", // «Roues motrices: Avt» según font-vendome.fr
    emisionesCo2: null,
    aprox: [],
    pros: [
      "Ducha separada del WC en un furgón de 5,99 m: el lujo que casi ningún camper de este tamaño ofrece",
      "Cama principal de 197 x 132 cm accesible por ambos lados: se duerme sin trepar por encima de la pareja",
      "Nevera de compresor de 150 l: enfría de verdad en verano, sin depender del gas ni de nivelar el vehículo",
      "Calefacción diésel Truma D4 con kit de altitud: autonomía térmica sin bombonas y sin miedo a los 2.000 m",
      "Ancho de 2,05 m: se aparca y se circula casi como un turismo grande",
    ],
    contras: [
      "Sin precio publicado en la web oficial: hay que pedir presupuesto al distribuidor",
      "Masa en orden de marcha de 3.092 kg (140 CV): quedan unos 400 kg de carga útil, hay que vigilar el equipamiento",
      "La cuarta plaza de noche es la dinette transformada: montarla cada noche cansa en viajes largos a cuatro",
      "El baño, aunque separado, es compacto: la ducha es funcional, no espaciosa",
      "Red de distribución pequeña fuera de Francia: menos puntos de venta y servicio que las grandes marcas",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Font Vendôme Mondéa, vista exterior oficial del folleto 2026",
        ancho: 1050,
        alto: 465,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-ext.webp",
        alt: "Font Vendôme Mondéa, vista lateral del camper",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Font Vendôme Mondéa, salón y cama",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Cama de techo del Font Vendome Mondéa",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/font-vendome-mondea-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Cama del Font Vendome Mondéa",
        ancho: 1200,
        alto: 800,
      },
    ],
    curiosidades: "El propio folleto oficial 2026 del Mondéa lo vende con su rareza: «salle de bain avec douche séparée», un baño con ducha separada del WC en un furgón de 5,99 m, algo que casi ningún camper de su tamaño ofrece. Fuente: folleto oficial Font Vendôme Mondéa 2026, https://docs.campingcar-infos.com/docs/Font-Vendome%20(vans)/FontVendome%202026%20Mondea.pdf", // F5 19/10: curiosidad real con fuente
    analisisSlug: "font-vendome-mondea-2026-precio-ficha-tecnica-analisis-opinion",
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
          nombre: "Revisión célula Font Vendôme (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones del fabricante",
    },
    euroncap: null,
    fuenteNombre: "Font Vendôme (web oficial, ficha del Mondéa)",
    fuenteUrl: "https://www.font-vendome.fr/van/mondea/",
    notas:
      "Font Vendôme no publica PVP («À partir de -» en su web). Masa en orden de marcha por motorización (3.092 kg con 140 CV / 3.167 kg con 180 CV en la gama 2027; 3.088–3.148 kg en la ficha 2026): sin cifra única. 4 plazas de viaje y 4 para dormir según la web oficial. Precio: se deja sin dato porque Groupe Pilote no publica tarifas/PVP en abierto en sus webs oficiales (Pilote, Bavaria, Le Voyageur, Mooveo, Font Vendôme): los precios se facilitan a través de su red de concesionarios; sin PVP oficial verificable.",
    descripcion:
      "El Font Vendôme Mondéa es un camper francés de 5,99 metros que se ha ganado su fama con una sola idea: meter una ducha separada del WC en un furgón compacto. Parece un detalle menor hasta que has vivido una semana en un camper donde ducharse significa plegar el lavabo, mover la cortina y mojarlo todo; entonces entiendes por qué el Mondéa tiene legión de seguidores entre quienes viajan en pareja y no quieren renunciar a la higiene de casa. Font Vendôme es un carrocero artesanal francés con décadas transformando furgones, y el Mondéa es su best-seller: un Fiat Ducato camperizado con criterio, sin efectismos, pensado para durar. Cómo lo verificamos: hemos trabajado directamente sobre la página oficial del modelo en font-vendome.fr, que publica medidas, plazas, motorizaciones, masas por versión y equipamiento. Lo que la marca no publica —el precio, que en su web aparece literalmente como «À partir de -»— lo dejamos sin dato en vez de inventarlo. Qué es y gama: el Mondéa es un camper —furgón gran volumen con techo alto— sobre base Fiat Ducato, en la franja de los 6 metros que se conduce con el carnet B y se aparca casi como un turismo grande. Dentro de la gama Font Vendôme convive con los Bel-Air, los Duo y la serie Forty, pero el Mondéa es el equilibrado: ni el más barato ni el más equipado, el que concentra lo esencial bien resuelto. Su distribución es la clásica de camper para dos con capacidad para cuatro: cama transversal trasera, salón central con dinette, cocina lateral y baño al fondo con la famosa ducha separada. Medidas y habitabilidad: mide 599 cm de largo, 205 cm de ancho y 289 cm de alto, y está homologado para 4 plazas de viaje y 4 para dormir. La cama principal mide 197 x 132 cm y, detalle importante, es accesible por ambos lados: no hay que trepar por encima de la pareja para salir a media noche, algo que en campers de 6 metros no siempre ocurre. La tercera y cuarta plaza de noche salen de transformar la dinette en una cama de 184 x 99 cm, solución honesta para uso ocasional pero cansada si se monta cada noche durante tres semanas. El baño es la estrella: ducha separada del WC en un furgón de menos de 6 metros es una rareza que casi ningún rival ofrece; la ducha no es espaciosa, pero es una ducha de verdad, con su mampara y su plato, no un apaño. La MMA es de 3.500 kg con una masa en orden de marcha de 3.092 kg en la versión de 140 CV —3.167 kg con el motor de 180 CV—, lo que deja unos 400 kg de carga útil: suficiente para dos con equipaje, pero hay que vigilar lo que se carga si se viaja a cuatro con todo el arsenal. Mecánica y conducción: el Fiat Ducato 2.2 Multijet 3 de 140 CV con cambio manual de 6 velocidades —180 CV en opción— es la mecánica de referencia del segmento: probada, con repuestos en cualquier parte y un consumo contenido para lo que mueve. La tracción es delantera y el comportamiento, el de un furgón bien tarado: noble en carretera, ágil en ciudad para su tamaño y sin los balanceos de una perfilada alta. Con 5,99 metros entra en plazas de aparcamiento grandes y en la mayoría de áreas de autocaravanas sin maniobras heroicas. Equipamiento y vida a bordo: el Mondéa viene pensado para la vida real. La nevera de compresor de 150 litros enfría de verdad en agosto sin depender del gas ni de nivelar el vehículo, la calefacción diésel Truma D4 con kit de altitud permite pernoctar a 2.000 metros sin bombonas ni miedo al mal de altura del quemador, y los depósitos de 100 litros de agua limpia y 100 de grises dan autonomía para varios días. El sistema Traction+ ayuda en salidas embarradas y el pack multimedia con pantalla Zenec resuelve el entretenimiento y la navegación. No es un camper de lujo: los materiales son honestos y el diseño, funcional antes que espectacular. Precio y rivales: Font Vendôme no publica precio —ni siquiera un «desde»—, así que la única vía es pedir presupuesto al distribuidor; como referencia de segmento, los campers franceses de 6 metros bien equipados se mueven en la franja media del mercado. Sus rivales son el Adria Twin, el Bürstner Campeo o el Sunlight Cliff: frente a ellos, el Mondéa juega la carta de la ducha separada y la construcción artesanal francesa. Para quién es y veredicto: es el camper para la pareja que viaja mucho y quiere ducharse como en casa sin subir a una perfilada. No es para quien necesite cuatro plazas de noche a diario —la dinette transformable cansa—, ni para quien busque la red de servicio más densa: fuera de Francia los distribuidores son pocos. Pero si el plan es viajar a dos, con autonomía, por carreteras secundarias y durmiendo donde apetezca, el Mondéa es de los campers de 6 metros más redondos que se pueden comprar: compacto por fuera, civilizado por dentro y con esa ducha que, una vez probada, se echa de menos en todos los demás.",
  },
];
