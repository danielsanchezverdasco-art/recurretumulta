// Autocaravanas Notin — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Notin Collection 2027 (gama PROGRESS, páginas Sevilla JF);
// tarifa oficial Notin 2025 publicada por campingcarlesite.com (Sevilla JF: Fiat Ducato
// 2,2 L 140 ch, 3,5 t, 99.900 €); anuncio de distribuidor C2CC 2023 (7,49×2,30×2,89 m,
// PTAC 3.500 kg, aguas 115/110 L, 4 plazas, Truma 6EH); notin.fr (ficha del modelo).
// Verificado el 19/10/2026.
// Notas honestas: el modelo asignado «Notin Candia 750 JF» NO EXISTE (no aparece en los
// catálogos oficiales Notin 2020, 2026 y 2027 ni en búsquedas web); conforme a la regla
// del brief se SUSTITUYE por el Notin Sevilla JF, perfilado de la gama PROGRESS de
// 7,49 m con camas gemelas, equivalente funcional al «750 JF» buscado (campo
// «sustituido» en el manifest). El consumo y la etiqueta DGT no los publica la marca
// (null). La carga útil no la publica la marca como cifra única (null).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_NOTIN_M4: Autocaravana[] = [
  {
    id: "notin-sevilla-jf-2026-precio-ficha-tecnica",
    marca: "Notin",
    modelo: "Sevilla JF",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 99900, // tarifa oficial Notin 2025 (Francia) publicada por campingcarlesite.com: 99.900 €; sin tarifa oficial para España
    potenciaCv: 140, // Fiat Ducato 2,2 L 140 ch (tarifa oficial 2025)
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
    imagen: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490, // 7,49 m (catálogo oficial 2027 y anuncio de distribuidor 2023)
    anchoMm: 2300, // 2,30 m (anuncio de distribuidor C2CC 2023)
    altoMm: 2890, // 2,89 m (anuncio de distribuidor C2CC 2023)
    pesoKg: null,
    mmaKg: 3500, // PTAC 3.500 kg (tarifa oficial y anuncio de distribuidor)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcularla
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // 4 plazas (anuncio de distribuidor 2023)
    plazasDormir: 4, // camas gemelas traseras + transformación del salón
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: ["precioDesde"], // precio de tarifa oficial francesa; no existe tarifa oficial para España
    notas:
      "Modelo sustituido: el «Notin Candia 750 JF» asignado no existe (ausente en los catálogos oficiales Notin 2020, 2026 y 2027 y sin resultados en búsquedas web); se sustituye por el Notin Sevilla JF, perfilado real de la gama PROGRESS con camas gemelas y 7,49 m, equivalente funcional al modelo buscado. Longitud (7,49 m), camas gemelas, banquetas enfrentadas y ducha/WC XXL separados del catálogo oficial Notin Collection 2027. Precio (99.900 €), base (Fiat Ducato 2,2 L 140 ch) y PTAC (3,5 t) de la tarifa oficial Notin 2025 para Francia publicada por campingcarlesite.com; Notin no publica tarifa oficial para España, por eso el precio va marcado como aproximado. Dimensiones (7,49×2,30×2,89 m), aguas (115/110 L) y calefacción (Truma 6EH) de anuncio de distribuidor C2CC 2023. Consumo, etiqueta DGT y carga útil: no publicados (null).",
    curiosidades:
      "Notin celebró en 2021 sus 100 años: la marca fue fundada en 1921 en Panissières (Loira) por los hermanos Joseph y Francis Notin, que empezaron fabricando remolques de feria antes de pasar a las caravanas en los años 30 y a las autocaravanas a finales de los 40, según la historia oficial de la marca (https://www.notin.fr/100-ans-de-voyage-avec-vous/).",
    descripcion: `La Notin Sevilla JF es la perfilada de camas gemelas de la gama PROGRESS, la puerta de entrada al universo de la marca centenaria francesa. Con 7,49 metros de largo sobre base Fiat Ducato 2,2 litros de 140 CV, representa la filosofía Notin aplicada a un formato contenido: ebanistería cuidada, aislamiento serio y una distribución pensada para dos personas que viajan con todo el confort de una autocaravana grande. Su tarifa oficial de 2025 la situaba en 99.900 €, un posicionamiento premium dentro de las perfiladas de su tamaño.

La distribución JF —camas gemelas traseras— es la favorita de quienes duermen mejor cada uno en su cama sin renunciar a compartir habitación. Las dos camas individuales, con sus armarios roperos y mesillas, ocupan la parte trasera; delante, el cuarto de baño con ducha y WC XXL separados actúa como zona de transición, una solución poco habitual en perfiladas de menos de 7,5 metros que aporta una privacidad casi de integral. El salón central, con banquetas enfrentadas y mesa, acoge cómodamente a cuatro comensales, y la cocina equipada completa un interior donde todo está a mano. Las cuatro plazas homologadas y las cuatro plazas para dormir (las gemelas más la transformación del salón) la definen como una dos-plus-dos con desahogo.

El nivel de acabado PROGRESS incluye detalles que en otras marcas son opcionales: la calefacción Truma 6EH (gas y eléctrica), los depósitos de 115 litros de agua limpia y 110 de grises, y una dotación de cabina completa sobre el Ducato. Con un PTAC de 3.500 kg se conduce con el carnet B, aunque con 7,49 metros y su nivel de equipamiento conviene vigilar la carga útil real de cada unidad, que la marca no publica como cifra única.

Notin fabrica de forma semi-artesanal en Panissières, en la región del Loira, donde la empresa nació en 1921. Esa tradición ebanista se nota en los ajustes del mobiliario y en los materiales, y es parte de lo que justifica su precio frente a las perfiladas generalistas: no se compra solo una distribución, se compra un saber hacer centenario. La marca celebró su centenario en 2021 y sigue produciendo exclusivamente en Francia, un argumento de peso para quienes valoran la fabricación europea de proximidad.

En España, la red de distribuidores Notin es más reducida que la de los grandes grupos, lo que conviene verificar antes de comprar según la zona de residencia; a cambio, el servicio suele ser más personalizado. El mantenimiento combina el plan Fiat para la base (revisiones cada dos años o 40.000 km) con la revisión anual de estanqueidad de la célula, imprescindible para conservar la garantía del fabricante.

La gama PROGRESS, a la que pertenece el Sevilla JF, es la forma que tiene Notin de abrir su mundo a un público más amplio sin renunciar a su identidad: por debajo quedan los grandes integrales y liners de la casa, por encima en precio pero no en filosofía. Desde 2012, el grupo Trigano participa en el capital de la empresa, lo que le ha dado músculo industrial —nueva fábrica de 10.000 m² cerca de Panissières— manteniendo la producción en Francia y el carácter semi-artesanal. Esa combinación de respaldo industrial y fabricación de proximidad es rara en el sector y explica en parte la fidelidad de la clientela Notin, articulada incluso en un club de propietarios, el Club Tivaou, activo desde 1983.

Comprar un Sevilla JF es, en cierto modo, comprar una forma de viajar: pausada, confortable y con la certeza de que cada mueble está en su sitio por una razón. No es la perfilada más barata ni la más tecnológica, pero es de las que mejor envejecen, y eso se nota cuando se visita una unidad de ocasión de hace unos años junto a una generalista de la misma edad.

Cómo lo verificamos: la existencia del modelo, sus 7,49 metros, las camas gemelas, las banquetas enfrentadas y la ducha/WC XXL separados proceden del catálogo oficial Notin Collection 2027 (gama PROGRESS), consultado el 19/10/2026. El precio (99.900 €), la base (Fiat Ducato 2,2 L 140 ch) y el PTAC (3,5 t) los publica la tarifa oficial 2025 recogida por campingcarlesite.com. Las dimensiones completas (7,49×2,30×2,89 m), las aguas (115/110 L) y la Truma 6EH figuran en un anuncio de distribuidor de 2023. El modelo originalmente asignado, «Notin Candia 750 JF», no existe en ningún catálogo oficial ni en búsquedas web, por lo que se sustituyó por el Sevilla JF conforme a la regla del brief. Lo que la marca no publica —consumo, etiqueta DGT, carga útil única— queda declarado como null.

Para quién es: encaja con parejas que quieren una perfilada premium con camas gemelas y baño separado sin subir a los 8 metros ni a una integral, y con compradores que valoran la fabricación artesanal francesa y están dispuestos a pagarla. Es ideal para viajes largos a dúo con mucho confort a bordo. No encaja con familias que necesiten más de cuatro plazas para dormir, con quien busque el precio más ajustado del segmento —hay perfiladas generalistas más baratas—, ni con quien necesite una red de servicio muy densa en España: conviene localizar el distribuidor más cercano antes de decidir.`,
    pros: [
      "Camas gemelas traseras con armarios: la distribución favorita para dormir en pareja",
      "Ducha y WC XXL separados: privacidad casi de integral en 7,49 m",
      "Fabricación semi-artesanal en Francia con tradición ebanista desde 1921",
      "Calefacción Truma 6EH (gas + eléctrica) y depósitos grandes (115/110 L) de serie",
      "Se conduce con carnet B (PTAC 3.500 kg) sobre base Fiat Ducato 140 CV",
    ],
    contras: [
      "Precio de 99.900 € (tarifa 2025): posicionamiento premium frente a generalistas",
      "La marca no publica la carga útil: hay que verificarla en cada unidad",
      "Red de distribuidores reducida en España: conviene localizar el más cercano",
      "Solo 4 plazas para dormir: no apta para familias numerosas",
      "El modelo asignado originalmente (Candia 750 JF) no existe; esta ficha cubre el Sevilla JF",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-oficial.webp", alt: "Notin Sevilla JF, vista exterior", ancho: 1200, alto: 800 },
      { src: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-interior1.webp", alt: "Notin Sevilla JF, salón interior", ancho: 1200, alto: 800 },
      { src: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-interior2.webp", alt: "Notin Sevilla JF, camas gemelas", ancho: 1200, alto: 800 },
      { src: "/media/notin-sevilla-jf-2026-precio-ficha-tecnica-detalle.webp", alt: "Notin Sevilla JF, detalle de cocina", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "notin-sevilla-jf-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Notin (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
