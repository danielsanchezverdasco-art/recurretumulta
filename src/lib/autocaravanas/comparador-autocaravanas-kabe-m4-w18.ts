// Autocaravanas Kabe — lote Merlín 4 (19/10/2026).
// Fuentes: kabe.se (web oficial: gama Travel Master Imperial i880 LGB/LQB, 8.822 mm,
// 4 plazas fijas, 5.500 kg, precio desde 257.400 € en la web belga), ficha de distribuidor
// caraworld.de (8.820 × 2.330 × 3.070 mm, Alde Compact 3030, agua 150 l, grises 90 l,
// batería 130 Ah, 5 plazas con cinturón) y jyvascaravan.fi (equipamiento: AGS II Pro,
// Mercedes-Benz). Verificado el 19/10/2026.
// Notas honestas: la potencia del motor no la publica Kabe de forma accesible (potenciaCv:
// null); la carga útil no la declara la marca como cifra única (cargaUtilKg: null); consumo,
// etiqueta DGT y tracción no publicados (null). El precio es la tarifa oficial de kabe.se
// para Bélgica; en España la marca no publica PVP.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_KABE_M4: Autocaravana[] = [
  {
    id: "kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica",
    marca: "Kabe",
    modelo: "Travel Master Imperial i880 LGB",
    tipo: "integral",
    categoria: "Autocaravana",
    precioDesde: 257400, // tarifa oficial kabe.se (web belga): «Prijs vanaf € 257.400»; ES no publicado
    potenciaCv: null, // la marca no publica la potencia de forma accesible
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
    imagen: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 8822, // kabe.se: 8.822 mm
    anchoMm: 2330, // ficha de distribuidor: 233 cm
    altoMm: 3070, // ficha de distribuidor: 307 cm
    pesoKg: null, // no publicado por la marca
    mmaKg: 5500, // kabe.se: «Fra 5500 kg»
    carnetNecesario: "C1", // mmaKg entre 3500 y 7500
    cargaUtilKg: null, // la marca no publica una carga útil única; prohibido calcular MMA-MRO
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 5, // ficha de distribuidor: 5 plazas con cinturón
    plazasDormir: 4, // kabe.se: 4 plazas fijas + cama abatible doble sobre el salón
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: ["precioDesde"], // tarifa oficial belga (kabe.se); en España la marca no publica PVP
    notas:
      "Modelo i880 LGB (LGB = camas individuales longitudinales traseras; existe la variante LQB con cama queen). Largo 8.822 mm, 4 plazas fijas, MMA desde 5.500 kg y precio desde 257.400 € de la web oficial kabe.se (tarifa belga; en España no hay PVP publicado). Ancho 2.330 mm, alto 3.070 mm, 5 plazas con cinturón, Alde Compact 3030, agua 150 l, grises 90 l y batería de 130 Ah de la ficha de distribuidor caraworld.de. Base Mercedes-Benz (visible en la foto oficial de Kabe; la gama Travel Master Imperial se anuncia sobre Mercedes). Potencia, masa, carga útil, consumo, etiqueta DGT y tracción: no publicados (null).",
    curiosidades:
      "El Travel Master Imperial equipa de serie el sistema AGS II Pro: un suelo radiante con regulación automática que reparte el calor de la caldera Alde por toda la célula, una solución pensada para el invierno escandinavo (equipamiento documentado en el anuncio de jyvascaravan.fi, https://www.jyvascaravan.fi/ajoneuvot/kabe-travel-master-imperial-i-910-t-mercedes-benz).",
    descripcion: `El Kabe Travel Master Imperial i880 LGB es la interpretación sueca del liner europeo: un integral de 8,82 metros construido por Kabe, el fabricante de Tenhult que lleva desde 1957 haciendo caravanas y autocaravanas pensadas para el invierno escandinavo. La variante LGB monta dos camas individuales longitudinales en la parte trasera —la configuración favorita de las parejas que no quieren molestarse al moverse por la noche—, con el aseo y la ducha separados en la zona media y una cama abatible doble sobre el salón para completar las plazas de noche.

Las cifras oficiales de kabe.se son claras: 8.822 mm de longitud total, cuatro plazas fijas para dormir y una MMA que parte de 5.500 kg, lo que sitúa al vehículo en el territorio del carnet C1. La ficha de distribuidor añade el resto del retrato robot: 2,33 metros de ancho, 3,07 metros de alto, cinco plazas con cinturón de seguridad, calefacción central Alde Compact 3030, depósito de agua limpia de 150 litros, grises de 90 litros y batería de célula de 130 Ah. La base es Mercedes-Benz —la estrella se aprecia en la calandra de la foto oficial de Kabe—, en línea con el posicionamiento premium de la gama Travel Master Imperial.

Donde Kabe realmente se distingue es en la construcción para el frío. La carrocería usa el aislamiento Ecoprim de 36 mm en suelo, techo y paredes, y la calefacción hidrónica Alde se combina con el sistema AGS II Pro: un suelo radiante con regulación automática que distribuye el calor por toda la célula. No es un opcional de campamento invernal, es la filosofía de serie de la marca: un Kabe se compra, entre otras cosas, para viajar en enero por Noruega sin pensar en si los depósitos se helarán. El interior sigue la misma lógica de confort serio: cocina con encimera híbrida (inducción más dos fuegos de gas) y horno empotrado, cajones con cierre suave, iluminación LED indirecta bajo los altillos, tapicerías en dos colecciones de cuero y cuatro de tela, y un salón con sofá extensible pensado para las tardes largas del norte.

El precio de partida oficial es de 257.400 euros según la web belga de Kabe —la marca no publica tarifa para España, así que esa es la referencia del fabricante más cercana y honesta disponible—. A partir de ahí, cada unidad se configura con packs y tapicerías que mueven la cifra final de forma sensible. La red de distribuidores Kabe en Europa cubre la venta y el servicio; en España la presencia es limitada y conviene localizar el servicio oficial más cercano antes de comprar. El mantenimiento de la base Mercedes sigue el plan del fabricante (revisiones cada dos años o 40.000 km) y la célula sueca pide su revisión anual de estanqueidad, gas y electricidad, con especial atención a los circuitos del suelo radiante.

Cómo lo verificamos: la longitud (8.822 mm), las cuatro plazas fijas, la MMA desde 5.500 kg, las dos distribuciones LGB y LQB y el precio desde 257.400 € proceden de la web oficial kabe.se (versiones sueca, noruega, belga e inglesa). El ancho (2,33 m), el alto (3,07 m), las cinco plazas con cinturón, la Alde Compact 3030, los 150 litros de agua, los 90 de grises y la batería de 130 Ah, de la ficha técnica de distribuidor publicada en caraworld.de para el Travel Master Imperial i880 LGB. La base Mercedes, de la fotografía oficial de Kabe y del equipamiento documentado en el anuncio de jyvascaravan.fi para la gama. Todo verificado el 19/10/2026. La marca no publica la potencia del motor de forma accesible, ni la masa en orden de marcha, ni una carga útil única, ni el consumo, ni la etiqueta DGT: todo queda sin dato y explicado en las notas.

Para quién es: encaja con viajeros que priorizan el invierno por encima de todo —esquiar en los Alpes o recorrer Escandinavia en febrero sin mirar el termómetro— y que quieren un liner con camas gemelas traseras, baño separado y construcción nórdica de verdad. También con quien valora la discreción sueca frente al brillo de los liners centroeuropeos: aquí el lujo es térmico y estructural, no cromado. No encaja con quien solo tenga el carnet B, con quien busque dormir a seis personas —son cuatro plazas fijas más la abatible—, ni con quien necesite una red de servicio densa en España: Kabe se compra sabiendo dónde está el taller oficial más cercano. Y quien compare con un integral alemán de 8,8 metros deberá asumir que el sobreprecio sueco se paga en aislamiento, calefacción y metros de garantía contra el frío, no en caballos. Un último apunte práctico: la soute trasera y los cofres exteriores calefactados permiten llevar el equipo de esquí sin que ocupe la zona de día, y el sistema SmartD de control remoto deja supervisar depósitos y batería desde el móvil antes de salir de la estación.`,
    pros: [
      "Aislamiento Ecoprim de 36 mm y Alde hidrónica: el referente para viajar en invierno",
      "Suelo radiante AGS II Pro de serie: calor homogéneo por toda la célula",
      "Camas gemelas longitudinales traseras + aseo y ducha separados en la zona media",
      "Base Mercedes-Benz y 5.500 kg de MMA: plataforma solvente para 8,82 metros",
      "Cocina híbrida (inducción + gas) con horno y cajones de cierre suave",
    ],
    contras: [
      "Exige carnet C1 (MMA 5.500 kg): fuera del alcance del conductor con solo el B",
      "Precio de partida de 257.400 €: en la franja más alta del segmento",
      "La marca no publica la potencia del motor de forma accesible",
      "Red de servicio limitada en España frente a las marcas centroeuropeas",
      "8,82 m de eslora: peajes, áreas y maniobras penalizan en cada viaje",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-oficial.webp", alt: "Kabe Travel Master Imperial i880 LGB, vista exterior", ancho: 1200, alto: 630 },
      { src: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-interior1.webp", alt: "Kabe Travel Master Imperial i880 LGB, interior", ancho: 1600, alto: 1200 },
      { src: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-interior2.webp", alt: "Kabe Travel Master Imperial i880 LGB, interior", ancho: 1312, alto: 486 },
      { src: "/media/kabe-travel-master-imperial-i880-lgb-2026-precio-ficha-tecnica-detalle.webp", alt: "Kabe Travel Master Imperial i880 LGB, detalle", ancho: 1312, alto: 486 },
    ],
    analisisSlug: "kabe-travel-master-imperial-i880-lgb-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Mercedes: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Mercedes)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 450 },
        { nombre: "Revisión célula Kabe (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades, suelo radiante", costeAproxEur: 300 },
      ],
    },
  },
];
