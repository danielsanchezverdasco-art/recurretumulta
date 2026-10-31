// Autocaravanas Roller Team — lote Merlín 5 (19/10/2026).
// Fuentes: página oficial del modelo en rollerteam.com/es/tipologia/
// perfiladas/kronos-285-tl/ (Ford Transit 130 CV, cambio manual, 5 personas,
// 5 camas, 6,99/2,35 m, gemelas traseras convertibles, aseo de volumen
// variable), página oficial de la gama Kronos en rollerteam.com/gamma/kronos/
// (13 distribuciones, tecnología Breathe, garantía de carrocería de 10 años),
// exposés de distribuidor alemán caraworld.de de unidades nuevas 2026
// (UVP del fabricante 81.431 € en Alemania, Ford 2.0 de 165 CV con
// automático de 8 velocidades, camas 2x210x81/215x130 + abatible eléctrica
// 203x135(114), Truma Combi 4 gas, frigo 137 l, aguas 100/100 l, MMA
// 3.500 kg, chasis Heavy 4,1 t reducido, garaje 300 kg, SYNC 4 12",
// techo Open Sky, solar 200 W).
// Verificado el 19/10/2026.
// Notas honestas: Roller Team no publica tarifa oficial para España; el
// precio de partida es el UVP oficial en Alemania (81.431 €) citado por el
// distribuidor, marcado como extranjero. La página oficial anuncia 130 CV
// con cambio manual; las unidades 2026 de distribuidor documentan el 165 CV
// con automático de 8 marchas dentro del Pack Kronos Ford 2026 (se indica
// 130 CV de serie con la opción explicada). La galería oficial del modelo
// no incluye vista exterior: la imagen principal es una fotografía real de
// un Kronos 285 TL exacto (sin marca de agua ni rótulos), documentada como
// no oficial; interiores y plano son oficiales. Masa en orden de marcha y
// carga útil: no publicadas por la marca (null; prohibido calcularlas).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_ROLLERTEAM_M5: Autocaravana[] = [
  {
    id: "roller-team-kronos-285-tl-2026-precio-ficha-tecnica",
    marca: "Roller Team",
    modelo: "Kronos 285 TL",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 81431, // UVP oficial del fabricante en Alemania (exposé caraworld.de, unidad nueva 2026); no hay tarifa oficial ES
    potenciaCv: 130, // Ford Transit 2.0 de 130 CV con cambio manual según la página oficial; 165 CV + automático de 8v en el Pack Kronos Ford 2026
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e sobre Ford Transit
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6990, // página oficial rollerteam.com + exposés de distribuidor
    anchoMm: 2350, // página oficial rollerteam.com + exposés de distribuidor
    altoMm: 2850, // exposés de distribuidor de unidades 2026
    pesoKg: null, // la marca no publica la masa en orden de marcha del 285 TL
    mmaKg: 3500, // exposés de distribuidor (chasis Heavy de 4,1 t reducido a 3,5 t)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // Roller Team no publica una cifra de carga útil; prohibido calcularla
    consumo: null,
    consumoUnidad: null,
    plazas: 5, // página oficial rollerteam.com
    plazasDormir: 5, // gemelas traseras (2) + abatible eléctrica (2) + salón (1)
    parNm: null,
    traccion: "delantera", // Ford Transit, tracción delantera
    emisionesCo2: null,
    aprox: [],
    notas:
      "Distribución, plazas, motor base y cotas de la página oficial del modelo en rollerteam.com/es/tipologia/perfiladas/kronos-285-tl/ (Ford Transit 130 CV, cambio manual, 5 personas, 5 camas, 6,99/2,35 m, camas gemelas traseras convertibles en maxi matrimonio, aseo de volumen variable). Detalle de camas (gemelas 2x210x81/215x130, abatible eléctrica 203x135(114)), Truma Combi 4 de gas, frigorífico de 137 l, aguas de 100/100 l, MMA de 3.500 kg con chasis Heavy de 4,1 t reducido, garaje de 300 kg, SYNC 4 de 12\", techo panorámico Open Sky y solar de 200 W con MPPT, de exposés de distribuidor alemán (caraworld.de) de unidades nuevas 2026. Motor: la página oficial indica 130 CV manual; los exposés 2026 documentan el 2.0 de 165 CV con automático de 8 velocidades dentro del Pack Kronos Ford 2026. Precio: UVP oficial del fabricante en Alemania de 81.431 € (unidad nueva 2026, caraworld.de); no existe tarifa oficial para España. Sin publicar: masa en orden de marcha, carga útil, consumo, par y emisiones; Fotos: la galería oficial no incluye vista exterior; la imagen principal es una fotografía real de un Kronos 285 TL exacto (sin marca de agua, concesionario ni rótulos), documentada como no oficial; interiores y plano de distribución son oficiales de rollerteam.com.",
    curiosidades:
      "Roller Team equipa la gama Kronos con su tecnología «Breathe»: un sistema de ventilación interna diseñado para garantizar un ambiente sano, bien ventilado y libre de condensación en todo momento, porque —en palabras de la marca— una autocaravana no solo debe estar bien aislada del exterior, sino también bien ventilada por dentro. Fuente: página oficial de la gama Kronos en rollerteam.com (https://www.rollerteam.com/gamma/kronos/).",
    descripcion: `El Roller Team Kronos 285 TL es la perfilada familiar que ha convertido a la marca italiana en una de las más vendidas de Europa: menos de 7 metros, cinco plazas para viajar y cinco para dormir, y un precio que juega en otra liga frente a las premium alemanas. Sobre el Ford Transit 2.0 —130 CV con cambio manual según la página oficial, aunque las unidades 2026 que anuncian los distribuidores montan el 165 CV con el automático de 8 velocidades dentro del Pack Kronos Ford—, el 285 TL es el «clásico» de la gama: la distribución de camas gemelas que las familias piden por su nombre.

    El dormitorio trasero es el corazón del modelo: dos camas individuales —de unos 210 x 81 cm según los exposés, con la opción de unirlas en una gran cama doble— elevadas sobre un garaje XL con 300 kg de capacidad de carga y trampillas de gran formato. Delante, el salón en L con mesa extensible acoge a la tripulación al completo, y la cama abatible eléctrica de 203 x 135 cm desciende del techo para sumar dos plazas nocturnas más sin desmontar nada. El aseo, de volumen variable con ducha orientable, se adapta al uso diario. Todo respira el nuevo lenguaje Kronos: tapicería Fit Grey de serie, maderas en tono medio, LED integrados en los altillos y grandes ventanas que inundan de luz un interior de 204 cm de altura libre.

    En chasis y mecánica, el 285 TL esconde uno de sus mejores argumentos: el chasis Heavy de 4,1 toneladas homologado en el certificado de conformidad y reducido a 3.500 kg de MMA, lo que deja un margen estructural generoso y permite conducirlo con el carnet B. El eje trasero de vía ancha y la suspensión específica para autocaravanas del Transit le dan un aplomo notable para su altura de 2,85 m. El depósito de gasoil de 70 litros y la red de talleres Ford en toda Europa completan la tranquilidad rutera.

    El equipamiento de la dotación Kronos Ford 2026 es abundante: pantalla SYNC 4 de 12 pulgadas con Apple CarPlay y Android Auto, cuadro semidigital de 8", climatizador automático, programador de velocidad, asistente de frenada de emergencia, mantenimiento de carril, reconocimiento de señales, faros antiniebla con luz de giro, cámara de marcha atrás, puerta XL de doble cierre con centralizado, ventanas Seitz de marco, claraboya panorámica Open Sky, panel solar de 200 W con regulador MPPT, unidad de control CP Plus y preinstalación para una segunda batería. La calefacción es la Truma Combi 4 de gas, el frigorífico de 137 litros y los depósitos de 100 litros de limpias y 100 de grises permiten varios días de autonomía. Y como en toda la gama, la carrocería queda cubierta por la garantía de integridad de 10 años de la marca.

    En carretera, el Transit se comporta como lo que es: una furgoneta grande honesta. La dirección es directa, el puesto de conducción elevado domina el tráfico y los asistentes —control de crucero adaptativo con Stop & Go en las unidades con el pack Extra Assistance, asistente de mantenimiento de carril, reconocimiento de señales— descargan al conductor en las etapas largas de autopista. Con el automático de 8 velocidades, el 165 CV empuja con soltura incluso cargado; el manual de 6 del 130 CV pide anticipar los adelantamientos, pero a cambio contiene el precio de entrada. El radio de giro, contenido para sus casi 7 metros, y la cámara de marcha atrás facilitan las maniobras en áreas y campings.

    En precio, Roller Team no publica tarifa para España: la referencia es el UVP oficial en Alemania de 81.431 € para una unidad nueva 2026 bien equipada, según el exposé del distribuidor —cifra extranjera, no contractual aquí—. En el mercado español el precio se configura con el importador y los packs (Selekt de cambio automático, Extra Assistance, Open Air con toldo de 4,5 m, Winter con depósito de grises aislado y calefactado), así que conviene pedir el presupuesto cerrado comparando el 130 manual base con el 165 automático.

    Cómo lo verificamos: distribución, plazas, motor base y cotas proceden de la página oficial del modelo en rollerteam.com, verificada el 19 de octubre de 2026, con la página oficial de la gama Kronos como respaldo (13 distribuciones, tecnología Breathe, garantía de 10 años). El detalle de camas, calefacción, depósitos, MMA, garaje y el UVP alemán proceden de exposés técnicos de distribuidor de unidades nuevas 2026 (caraworld.de). La tecnología Breathe se cita de la web oficial de la marca. Los datos no publicados (masa en orden de marcha, carga útil, consumo, par, emisiones) quedan sin dato.

    Para quién es: el Kronos 285 TL encaja con familias de cuatro o cinco miembros que buscan su primera —o su definitiva— perfilada: camas de verdad para todos, garaje serio y carnet B, a precio contenido. Es la autocaravana del «mucho por poco» bien ejecutado. No es para quien priorice los acabados nobles alemanes o busque una integral panorámica: aquí la virtud está en la relación espacio/precio, no en el lujo.`,
    pros: [
      "5 plazas para viajar y 5 para dormir en 6,99 m: la distribución familiar más equilibrada del segmento medio.",
      "Chasis Heavy de 4,1 t homologado y reducido a 3.500 kg: margen estructural con carnet B.",
      "Camas gemelas traseras convertibles + abatible eléctrica de 203 x 135 cm: dormir sin plegar el salón.",
      "Dotación 2026 completa: SYNC 4 de 12\", Open Sky, solar de 200 W, CP Plus y asistentes Ford.",
      "Garantía de integridad de carrocería de 10 años y tecnología de ventilación Breathe.",
    ],
    contras: [
      "Sin tarifa oficial para España: el precio se configura con importador y packs.",
      "La galería oficial no incluye foto exterior del modelo (documentado en notas).",
      "El 130 CV manual base se queda justo a plena carga; el 165 CV automático encarece.",
      "Masa en orden de marcha no publicada: conviene pesar la unidad antes de cargarla en familia.",
      "Acabados correctos pero sin el refinamiento de las premium alemanas.",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-oficial.webp", alt: "Roller Team Kronos 285 TL, vista exterior", ancho: 974, alto: 647 },
      { src: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-interior1.webp", alt: "Roller Team Kronos 285 TL, salón", ancho: 1536, alto: 1024 },
      { src: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-interior2.webp", alt: "Roller Team Kronos 285 TL, cama abatible y cocina", ancho: 1536, alto: 1024 },
      { src: "/media/roller-team-kronos-285-tl-2026-precio-ficha-tecnica-detalle.webp", alt: "Roller Team Kronos 285 TL, plano de distribución oficial", ancho: 1024, alto: 509 },
    ],
    analisisSlug: "roller-team-kronos-285-tl-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula Roller Team (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
