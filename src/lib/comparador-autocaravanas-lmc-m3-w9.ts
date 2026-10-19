// Autocaravanas LMC — lote Merlín 3 (19/10/2026).
// Fuentes: prueba en profundidad del LMC Tourer Lift Ford H 664 G en camperstyle.de
// (Stefan Blanz, con la colaboración de LMC; incluye datos técnicos del modelo),
// alpacacamping.de (ficha técnica de la serie Tourer Lift Ford), camprest.com y
// truckscout24 (anuncios de unidades del modelo exacto, solo como contraste).
// Verificado el 19/10/2026.
// Notas honestas: LMC no publica PVP oficial para España (precioDesde=null; la prensa
// alemana cita 83.500 € de partida en Alemania, no oficial ES); la masa en orden de
// marcha varía según fuente (3.035 kg en la prueba de camperstyle, 3.048 kg en
// alpacacamping); motor de serie Ford Transit 2.0 EcoBlue de 130 CV (170 CV y automático
// opcionales); la carga útil no la publica la marca (null, prohibido calcularla).
import type { Autocaravana } from "./autocaravanas-tipos.ts";

export const AUTOCARAVANAS_LMC_M3: Autocaravana[] = [
  {
    id: "lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica",
    marca: "LMC",
    modelo: "Tourer Lift H 664 G",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // LMC no publica PVP oficial para España
    potenciaCv: 130, // Ford Transit 2.0 EcoBlue de serie; 170 CV opcional
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "", // portada de prensa (camperstyle.de): modelo exacto, no oficial
    imagenInteriorOficial: "", // interiores de prensa: modelo exacto, no oficiales
    videoId: null,
    videoCanal: null,
    largoMm: 7060, // prueba camperstyle.de y alpacacamping.de
    anchoMm: 2320,
    altoMm: 2830,
    pesoKg: 3035, // masa en orden de marcha según la prueba de camperstyle (alpacacamping cita 3.048 kg)
    mmaKg: 3500,
    carnetNecesario: "B",
    cargaUtilKg: null, // la marca no publica carga útil; prohibido calcularla
    consumo: null, // la prueba de camperstyle midió 9,6 l/100 km de media (dato de prensa, no oficial)
    consumoUnidad: null,
    plazas: 4,
    plazasDormir: 4, // camas individuales traseras + cama abatible eléctrica sobre el salón
    parNm: null,
    traccion: null, // la marca no declara la tracción en la ficha del modelo
    emisionesCo2: null,
    aprox: [],
    notas:
      "Datos de la prueba en profundidad del LMC Tourer Lift Ford H 664 G publicada en " +
      "camperstyle.de (Stefan Blanz, 2024, con vehículo cedido por LMC) y de la ficha de " +
      "la serie Tourer Lift Ford en alpacacamping.de, contrastados con anuncios de unidades " +
      "del modelo exacto en truckscout24 y camprest.com. Medidas: 706/232/283 cm, altura " +
      "interior 198 cm, distancia entre ejes 395,4 cm; 4 plazas; MMA 3.500 kg; base Ford " +
      "Transit 2.0 EcoBlue de 130 CV de serie (170 CV con cambio manual o automático " +
      "opcionales); camas: abatible delantera 213x110-55, individuales centrales 200x88 y " +
      "traseras 185x88/200x88 según configuración; agua 100 l; grises 90 l; batería 95 Ah; " +
      "calefacción Truma Combi de gas. En null: precioDesde (LMC no publica PVP para España; " +
      "la prensa alemana cita 83.500 € de partida en Alemania), cargaUtilKg, par, tracción " +
      "y emisiones (la marca no los publica). La masa en orden de marcha difiere según " +
      "fuente: 3.035 kg (camperstyle) frente a 3.048 kg (alpacacamping). Fotos: prueba de " +
      "prensa de camperstyle.de sobre la unidad exacta (no oficiales de fábrica), sin " +
      "marcas de agua ni concesionario.",
    curiosidades:
      "El «Lift» del nombre es literal: el Tourer Lift H 664 G lleva una cama abatible " +
      "eléctrica sobre el salón que baja con solo pulsar un botón. LMC presentó esta " +
      "versión sobre Ford Transit en el Caravan Salon de Düsseldorf como «First Edition» " +
      "del año de modelo 2024, con el Transit de 170 CV, cambio automático y un " +
      "equipamiento de serie muy completo para su precio. Fuente: prueba «LMC Tourer Lift " +
      "Ford H 664 G» en camperstyle.de " +
      "(https://camperstyle.de/lmc-tourer-lift-ford-h-664-g-wohnmobil-test-erfahrung-272322/).",
    descripcion: `El LMC Tourer Lift H 664 G es la perfilada familiar con la que la marca
alemana —del grupo Hymer y con 70 años de historia a sus espaldas— se estrenó sobre el
Ford Transit. La letra H indica la base Ford (los Tourer Lift con T son los Fiat), el
664 la longitud aproximada y la G el garaje trasero bajo las camas individuales. Y el
«Lift» no es marketing: es la cama abatible eléctrica sobre el salón, el truco que
convierte una perfilada de 7,06 metros en un cuatro plazas para dormir sin renunciar
al salón ni al garaje. Se presentó en el Caravan Salon de Düsseldorf como First
Edition del año de modelo 2024, con el Transit de 170 caballos y un equipamiento de
serie pensado para que la relación precio-equipamiento fuese su mejor argumento.

En medidas y habitabilidad, el H 664 G es una perfilada de tamaño medio con ideas de
grande. Los 7,06 metros de largo y 2,32 de ancho son el estándar del segmento, pero la
altura interior de 198 cm y la puerta de acceso XXL de 70 cm de ancho —una de las más
generosas que se ven— hacen que entrar y moverse se sienta más desahogado de lo que
dicen las cifras. La distribución es la clásica familiar: salón en L delante con los
asientos giratorios de cabina, cocina en L en el centro con frigorífico de compresor
de 141 litros, baño con ducha separada enfrente y, al fondo, las dos camas individuales
longitudinales sobre el garaje. La cama abatible baja eléctricamente sobre el salón y
deja una superficie de unos 213 x 110 cm en su punto más ancho. Los armarios altos,
los cajones con cierre suave y la iluminación LED indirecta en cocina y dormitorio le
dan un aire moderno sin estridencias, y la prueba de camperstyle destacó lo bien
resueltos que están los detalles cotidianos: la mesa extensible, los enchufes donde
hacen falta y el puesto de conducción del Transit con pantalla Zenec, Apple CarPlay y
Android Auto.

En tecnología y equipamiento, la First Edition salió de fábrica muy completa: el
paquete Tourer (puerta con mosquitera, preinstalación de satélite y solar, aire
acondicionado con refuerzo de techo, claraboya panorámica sobre el salón, ventana
panorámica sobre la cabina, oscurecimiento de cabina e iluminación indirecta),
llantas de aluminio negras de 16 pulgadas, faros bixenón, sensores de aparcamiento,
asistente de carril y de fatiga, y calefacción Truma Combi 6 de gas con depósito de
grises aislado y calefactado para viajar en invierno. La construcción sigue la
filosofía LLT de LMC (Long Life Technologie): 12 años de garantía de estanqueidad,
suelo con espuma XPS y estructura sin madera en zonas sensibles. Es el equipamiento
de una autocaravana pensada para usarse todo el año, no solo en agosto.

En camas y plazas, la dotación es de cuatro plazas de viaje con ISOFIX en la
banqueta y cuatro para dormir: las dos individuales traseras (200 x 88 cm, unibles en
una gran doble con el suplemento central) y la abatible eléctrica delantera. Es el
esquema ideal para una familia de cuatro o para parejas que viajan con invitados, con
la ventaja de que la abatible se recoge en el techo y deja el salón libre durante el
día. Debajo de las camas traseras queda un garaje amplio, accesible por ambos lados,
para bicis y equipo.

En mecánica, la base es el Ford Transit 2.0 EcoBlue, de 130 CV de serie con cambio
manual de 6 marchas y con la opción del 170 CV —manual o automático— que llevaba la
unidad de la prueba y que es la elección sensata para mover 3,5 toneladas con
alegría. La MMA es de 3.500 kilos (carnet B) y la masa en orden de marcha ronda los
3.035 kilos según la prueba de camperstyle, así que la carga útil hay que vigilarla
si se llena la lista de extras. En la prueba, el consumo medio real se quedó en 9,6
litros a los cien, una cifra muy razonable para una 7 metros. Puede remolcar y monta
neumáticos de 16 pulgadas.

En precio y red comercial en España, LMC no publica tarifa oficial para nuestro
mercado y el precio queda en «no publicado». Como referencia —alemana, no oficial
para España—, la prensa especializada cita un precio de partida de 83.500 euros en
Alemania para la First Edition. LMC se vende en España a través de concesionarios
multimarca y de la red del grupo Hymer; conviene pedir oferta cerrada porque el
salto del 130 al 170 CV, el automático y los paquetes cambian bastante la factura
final.

Cómo lo verificamos: prueba en profundidad «LMC Tourer Lift Ford H 664 G» de Stefan
Blanz en camperstyle.de (consultada el 19/10/2026), con datos técnicos medidos y
vehículo cedido por LMC; ficha de la serie Tourer Lift Ford en alpacacamping.de para
contraste de medidas, pesos y depósitos; y anuncios de unidades del modelo exacto en
truckscout24 y camprest.com para confirmar motorizaciones y plazas. Lo no publicado
por la marca (precio en España, carga útil, par, emisiones) queda en null y
declarado en las notas.

Para quién es: para familias de cuatro que buscan una perfilada con camas gemelas y
abatible eléctrica por un precio de partida razonable; para quien valora el Ford
Transit moderno con sus ayudas a la conducción; para el que viaja todo el año y
aprecia la calefacción Truma, el depósito de grises calefactado y los 12 años de
garantía de estanqueidad. No es para quien necesite cinco plazas (no las hay), ni
para conductores que quieran una automática sin pasar por caja: el cambio automático
solo llega con el motor de 170 CV y como opcional.`,
    pros: [
      "Cama abatible eléctrica sobre el salón: 4 plazas para dormir sin perder salón ni garaje",
      "Puerta de acceso XXL de 70 cm y altura interior de 198 cm: sensación de amplitud",
      "First Edition muy equipada (Zenec con CarPlay, bixenón, llantas 16\", asistentes Ford)",
      "12 años de garantía de estanqueidad y construcción LLT pensada para durar",
      "Consumo medio medido de 9,6 l/100 km en prueba real: eficiente para 7 metros",
    ],
    contras: [
      "Sin PVP oficial para España: el precio real solo se conoce en el concesionario",
      "El motor de 130 CV de serie se queda justo; el 170 CV y el automático son opcionales",
      "Masa en orden de marcha de ~3.035 kg: la carga útil exige moderar los extras",
      "La abatible delantera tapa la puerta de acceso cuando está bajada (típico del esquema)",
      "Red de concesionarios LMC más pequeña en España que la de otras marcas del grupo",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-oficial.webp", alt: "LMC Tourer Lift H 664 G, vista lateral exterior", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-interior1.webp", alt: "LMC Tourer Lift H 664 G, salón", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-interior2.webp", alt: "LMC Tourer Lift H 664 G, cocina", ancho: 1600, alto: 1066 },
      { src: "/media/lmc-tourer-lift-h-664-g-2026-precio-ficha-tecnica-detalle.webp", alt: "LMC Tourer Lift H 664 G, cama abatible eléctrica", ancho: 1600, alto: 1066 },
    ],
    analisisSlug: "lmc-tourer-lift-h-664-g-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 380 },
        { nombre: "Revisión célula LMC (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
