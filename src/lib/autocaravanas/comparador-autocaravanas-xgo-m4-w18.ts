// Autocaravanas XGO — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial XGO 2021-2022 (gama X-Van: datos técnicos X-Van 102/104/105),
// xgomove.it (gama XVAN 2025/2026), camperlife.it y annuncici.it (prensa y mercado).
// Verificado el 19/10/2026.
// Notas honestas: XGO no publica tarifa oficial para España (precioDesde: null); la carga
// útil no la declara la marca como cifra única (cargaUtilKg: null); consumo, etiqueta DGT y
// tracción no figuran en la documentación oficial (null). Motor base 120 CV (140/160 opcionales).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_XGO_M4: Autocaravana[] = [
  {
    id: "xgo-x-van-102-2026-precio-ficha-tecnica",
    marca: "XGO",
    modelo: "X-Van 102",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // XGO no publica PVP oficial para España; null = «no publicado»
    potenciaCv: 120, // 88 kW, Fiat Ducato 2.2 de serie (catálogo oficial XGO); 140/160 CV opcionales
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: null, // no publicada por la marca
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5998, // catálogo oficial XGO 2021-2022
    anchoMm: 2050, // catálogo oficial XGO 2021-2022
    altoMm: 2650, // catálogo oficial XGO 2021-2022
    pesoKg: null, // no publicado por la marca
    mmaKg: 3300, // catálogo oficial XGO; 3.500 kg opcional
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcular MMA-MRO
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // catálogo oficial XGO
    plazasDormir: 4, // 3 + 1 componible (catálogo oficial XGO)
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (5.998 × 2.050 × 2.650 mm), MMA (3.300 kg, 3.500 opcional), 4 plazas, 3+1 camas, cama doble trasera de 1.440 × 1.900 mm, agua 20+70 l, grises 90 l, Truma Combi C4, nevera de compresor de 70 l y 2 fuegos del catálogo oficial XGO 2021-2022 (gama X-Van). Motor base Fiat Ducato 2.2 de 120 CV (140 y 160 CV opcionales). referencia de mercado: 61.000 € edición Cobra nueva en annuncici.it (no oficial). sin tarifa oficial vigente verificable para este modelo.",
    curiosidades:
      "El catálogo oficial de XGO destaca las soluciones de cama modulares del X-Van: según la necesidad, se reconfiguran como camas individuales, literas o nido, todas con somieres de lamas regulables (catálogo oficial XGO 2021-2022, https://book-a-camper.de/wp-content/uploads/2023/05/Xvan-105-XGO-Katalog-2021-2022-Web.pdf).",
    descripcion: `El XGO X-Van 102 es el camper compacto de la marca italiana XGO, un furgón camperizado sobre Fiat Ducato que resume la filosofía de la casa: diseño funcional y una relación calidad-precio que la propia marca define como sorprendente. Con 5,99 metros de longitud, entra en la categoría de los campers de menos de 6 metros, el formato más demandado por quienes quieren un vehículo ágil para el día a día y capaz para las escapadas.

La ficha técnica oficial lo describe con precisión: 5.998 mm de largo, 2.050 mm de ancho y 2.650 mm de alto exterior, con una altura interior de 1.890 mm. El motor de serie es el Fiat Ducato 2.2 de 88 kW (120 CV), con la posibilidad de optar por las versiones de 140 y 160 CV. La masa máxima autorizada es de 3.300 kg, ampliable a 3.500 kg como opción, de modo que se conduce con el carnet B en todos los casos. Homologa cuatro plazas de viaje y tres plazas de noche más una componible, un esquema pensado para parejas que ocasionalmente viajan con un tercer ocupante o con un niño.

La distribución gira en torno a una cama doble trasera de 1.440 × 1.900 mm, una medida generosa para un camper de menos de 6 metros, bajo la cual el portón trasero de gran apertura facilita el acceso a la zona de carga. El catálogo oficial dedica un apartado específico a las soluciones de cama modulares: los somieres de lamas regulables permiten reconfigurar el descanso como camas individuales, como literas o como nido según la necesidad del momento. La cocina, con muebles amplios de serie, incluye una nevera de compresor de 70 litros con doble apertura —accesible tanto desde el interior como desde el exterior— y dos fuegos. La calefacción y el agua caliente corren a cargo de una Truma Combi C4, y el equipamiento de serie contempla oscurecedores deslizantes con mosquitera integrada, claraboyas de 700 × 500 mm en la zona de día y de 400 × 400 mm en la zona de noche (con el paquete Van), escalón eléctrico y mosquitera en la puerta trasera.

Los depósitos declaran 20 + 70 litros de agua limpia y 90 litros de grises, cifras coherentes con la autonomía de un camper de este tamaño para dos personas durante varios días. El gas se aloja en un compartimento para dos bombonas (2 × 7 kg en el 102). Entre los opcionales del catálogo figuran el horno, el soporte de televisión, la baca con escalera, la batería auxiliar, el portabicicletas y la alarma, lo que permite configurar el vehículo desde una base espartana hasta un camper bien equipado sin saltar de modelo.

XGO organiza su gama actual en tres familias —XVan, XCamp y Dynamic— y el X-Van 102 convive con sus hermanos 104 (6,36 m) y 105. La marca, de vuelta al mercado italiano tras años de ausencia con una propuesta de siete modelos desde 38.999 euros según la prensa especializada, apuesta por un posicionamiento de precio agresivo frente a los grandes grupos. En España la marca no publica tarifa oficial, así que no ofrecemos precio de partida: como referencia de mercado, una unidad nueva en edición limitada Cobra se anunciaba en Italia por 61.000 euros, una cifra orientativa y no un PVP del fabricante. La red de talleres autorizados (in)service de XGO cubre Europa para garantía y mantenimiento; la base Fiat Ducato sigue el plan de mantenimiento del fabricante (revisiones cada dos años o 48.000 km según uso).

Cómo lo verificamos: las dimensiones, la MMA (3.300 kg, 3.500 opcional), las plazas (4), las camas (3 + 1), la cama doble de 1.440 × 1.900 mm, los depósitos (20+70 l y 90 l), la Truma Combi C4, la nevera de 70 litros y los dos fuegos proceden del catálogo oficial XGO 2021-2022 para la gama X-Van, que incluye la tabla técnica completa del X-Van 102 junto a los 104 y 105. La existencia actual del modelo en la gama XVAN 2025/2026 se confirmó en xgomove.it, y la prensa especializada (camperlife.it) documenta su presencia en el Salone del Camper. Todo verificado el 19/10/2026. Lo que la marca no publica —precio oficial en España, masa en orden de marcha, carga útil única, consumo, etiqueta DGT y tracción— la marca no lo publica y se explica en las notas.

Para quién es: encaja con parejas que buscan su primer camper o un segundo vehículo de ocio ágil, fácil de aparcar y de conducir a diario, con una cama doble trasera de verdad y no un salón que haya que montar cada noche. También con quien valora la sencillez mecánica del Ducato y una red de servicio extendida. No encaja con familias de cuatro que necesiten cuatro camas sin componer nada cada noche —la cuarta plaza es componible y resta salón—, ni con quien busque ducha separada: el baño del 102 es funcional pero compacto, como corresponde a un furgón de menos de 6 metros. Y quien espere el acabado premium de las marcas alemanas de gama alta deberá ajustar expectativas: el X-Van juega en la liga de la relación calidad-precio, no en la del lujo.`,
    pros: [
      "Menos de 6 metros: ágil en ciudad, fácil de aparcar y de conducir a diario",
      "Cama doble trasera fija de 1.440 × 1.900 mm: no hay que montar la cama cada noche",
      "Camas modulares con somieres de lamas regulables: individual, litera o nido",
      "Truma Combi C4 de serie y nevera de compresor de 70 l con doble apertura",
      "MMA de 3.300 kg (3.500 opcional): carnet B y margen de carga razonable",
    ],
    contras: [
      "La cuarta cama es componible y anula el salón: pensado para 2-3 ocupantes reales",
      "Baño compacto de furgón: sin ducha separada amplia",
      "Motor base de 120 CV justo si se viaja cargado o por montaña (140/160 CV opcionales)",
      "La marca no publica tarifa oficial en España ni masa en orden de marcha",
      "Acabados funcionales, no premium: su baza es el precio, no el lujo",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-oficial.webp", alt: "XGO X-Van 102, vista exterior", ancho: 830, alto: 467 },
      { src: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-interior1.webp", alt: "XGO X-Van 102, interior", ancho: 1000, alto: 667 },
      { src: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-interior2.webp", alt: "XGO X-Van 102, interior", ancho: 1000, alto: 667 },
      { src: "/media/xgo-x-van-102-2026-precio-ficha-tecnica-detalle.webp", alt: "XGO X-Van 102, vista exterior", ancho: 1920, alto: 1080 },
    ],
    analisisSlug: "xgo-x-van-102-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 48.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 300 },
        { nombre: "Revisión célula XGO (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 220 },
      ],
    },
  },
];
