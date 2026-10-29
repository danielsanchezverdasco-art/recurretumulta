// Autocaravanas Campérêve — lote Merlín 4 (19/10/2026).
// Fuentes: catálogo oficial Campérêve 2025 (gama Compact, páginas Cap Land 12-13);
// espritcampingcar.com (precio «desde 65.400 €», ficha actualizada el 06/05/2026).
// Verificado el 19/10/2026.
// Notas honestas: el precio es el publicado por la prensa especializada a partir de la
// tarifa del fabricante (no hay PVP oficial ES enlazable en la web de la marca);
// el consumo y la etiqueta DGT no los publica la marca (null). El «51» del modelo
// alude al frigorífico de 51 litros.
// Verificación 19/10/2026 (V4-02): exterior e interior1 sustituidos por fotos
// oficiales de campereve.fr (página del modelo Cap Land); el resto, del catálogo
// oficial 2025.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_CAMPEREVE_M4: Autocaravana[] = [
  {
    id: "campereve-cap-land-51-2026-precio-ficha-tecnica",
    marca: "Campérêve",
    modelo: "Cap Land",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: 65400, // espritcampingcar.com: «desde 65.400 €» (ficha actualizada 06/05/2026, tarifa del fabricante)
    potenciaCv: 136, // Ford Transit Custom 2.0L 136 ch (catálogo oficial Campérêve 2025)
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
    imagen: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5450, // catálogo oficial: 5,45 m
    anchoMm: 2030, // catálogo oficial: 2,03 m (2,14 m con retrovisores)
    altoMm: 2040, // catálogo oficial: 2,04 m
    pesoKg: 2755, // masa en vacío (catálogo oficial)
    mmaKg: 3200, // PTAC 3.200 kg (catálogo oficial)
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: 445, // publicada por la marca en el catálogo oficial 2025
    consumo: null, // no publicado por la marca
    consumoUnidad: null,
    plazas: 4, // catálogo oficial: 4 plazas en circulación
    plazasDormir: 4, // 2 en el techo elevable + 2 en la dinette transformable
    parNm: null,
    traccion: null, // la marca no lo declara en la ficha técnica
    emisionesCo2: null,
    aprox: [],
    notas:
      "Dimensiones (5,45 × 2,03 × 2,04 m), motor (Ford Transit Custom 2.0L 136 ch), PTAC (3.200 kg), carga útil (445 kg), masa en vacío (2.755 kg), aguas (50/50 L), frigorífico (51 L a compresión) y calefacción (Eberspächer 2.200 W a gasoil) del catálogo oficial Campérêve 2025, páginas 12-13. Precio «desde 65.400 €» publicado por espritcampingcar.com (ficha actualizada el 06/05/2026) a partir de la tarifa del fabricante. Consumo y etiqueta DGT: no publicados (null).",
    curiosidades:
      "El Cap Land inauguró en 2019 la segunda puerta lateral corredera: Campérêve añadió una puerta en el lado izquierdo para que la dinette se ventile y se acceda desde ambos lados, sin que el precio apenas se moviera (46.000 € entonces), según fourgonlesite.com (https://www.fourgonlesite.com/fourgon-neuf/campereve-nouveautes-fourgons-2019/).",
    descripcion: `La Campérêve Cap Land es la camper de la gama Compact de la marca francesa, construida sobre el Ford Transit Custom y pensada para quienes quieren un vehículo de 5,45 metros que sirva tanto para el día a día como para escapadas de varios días. Con 2,04 metros de alto y techo elevable de serie, cabe en la mayoría de parkings subterráneos con límite de 2,10 metros cuando el techo está bajado, una ventaja decisiva frente a las campers con techo alto fijo. Es, en esencia, una furgoneta grande por fuera y un pequeño apartamento por dentro.

La distribución aprovecha cada centímetro. En marcha viajan cuatro personas; por la noche, el techo elevable despliega una cama alta de 130 × 205 cm para dos, y la banqueta trasera se transforma —con asistencia eléctrica— en una segunda cama baja de 124 × 193 cm. La cocina, situada en el lateral, equipa fregadero, dos fuegos y el frigorífico de 51 litros a compresión que da nombre al «51» del modelo, una capacidad notable para un vehículo de este tamaño y que funciona sin depender del gas. El aseo con WC de casete y ducha completa la dotación, de modo que la Cap Land no pide nada prestado a las áreas de servicio.

Uno de los rasgos que más la distinguen es el doble acceso lateral: desde 2019 el Cap Land monta dos puertas correderas, una a cada lado, de modo que la dinette respira, se entra y se sale sin molestar al copiloto y la vida a bordo gana una fluidez que las campers de una sola puerta no tienen. La banqueta trasera, además de convertirse en cama con un botón, ofrece asientos con Isofix, un detalle que la hace apta para familias con niños pequeños. Los depósitos de 50 litros de agua limpia y 50 de grises están dimensionados para dos o tres días de autonomía, y la calefacción Eberspächer de 2.200 W alimentada con gasoil garantiza noches confortables sin gastar el gas de la cocina.

La base Ford Transit Custom 2.0L de 136 CV es una de las más apreciadas del segmento camper: dirección precisa, buen aislamiento acústico para ser una furgoneta y una red de servicio Ford amplísima en toda Europa. Con un PTAC de 3.200 kg y una masa en vacío de 2.755 kg, la carga útil oficial es de 445 kg, suficiente para cuatro ocupantes y su equipaje sin apuros, aunque conviene no cargarla como si fuera una autocaravana grande. Se conduce con el carnet B y su anchura de 2,03 metros (2,14 con retrovisores) la hace tan manejable como un turismo grande en ciudad.

En equipamiento, el catálogo contempla el Pack Ready opcional con llantas de 17 pulgadas, ducha exterior, la propia calefacción de gasoil y cristales sobretintados, además de ayudas a la conducción propias de la base Ford. El precio de partida, «desde 65.400 €» según la ficha de espritcampingcar.com actualizada en mayo de 2026 a partir de la tarifa del fabricante, la sitúa en la franja media-alta de las campers sobre Transit Custom, justificada por el techo elevable de serie, la banqueta eléctrica y el doble acceso lateral.

La red comercial de Campérêve en España opera a través de distribuidores, y al pertenecer al grupo Rapido cuenta con respaldo industrial y de repuestos. El mantenimiento de la base Ford sigue el plan del fabricante y la célula, más sencilla que la de una autocaravana integral, requiere la revisión anual habitual de estanqueidad y sistemas.

En el día a día, la Cap Land se comporta como lo que es: una furgoneta grande. La posición de conducción del Transit Custom, con su salpicadero de diseño casi turismil y sus múltiples huecos portaobjetos, hace que el cambio desde un coche familiar sea mínimo, y el Pack Ready opcional —llantas de 17 pulgadas, ducha exterior de agua fría, cristales sobretintados— le da un aire más camper sin comprometer su discreción. Es de esos vehículos que no desentonan aparcados delante de casa ni en el parking de la empresa.

Cómo lo verificamos: todas las cifras técnicas —dimensiones, motor, PTAC, carga útil, aguas, frigorífico y calefacción— proceden del catálogo oficial Campérêve 2025 (páginas 12-13 de la gama Compact), consultado el 19/10/2026. El precio de partida lo publica espritcampingcar.com («desde 65.400 €», ficha actualizada el 06/05/2026). Lo que la marca no publica —consumo, etiqueta DGT— la marca no lo publica.

Para quién es: encaja con parejas activas y familias con uno o dos niños que buscan un único vehículo para todo —trabajo entre semana, escapadas el fin de semana y vacaciones largas—, con quienes valoran aparcar en parkings normales y con los que duermen a menudo fuera de campings gracias a la calefacción diésel. No encaja con quien necesite cuatro camas fijas sin transformar nada cada noche, con quien viaje con mucho material voluminoso (no hay garaje trasero), ni con quien busque el precio más bajo del segmento camper: la Cap Land se paga por su polivalencia y su equipamiento, no por ser la más barata.`,
    pros: [
      "Techo elevable de serie con solo 2,04 m de alto: cabe en parkings de 2,10 m",
      "Doble puerta lateral corredera: acceso y ventilación por ambos lados",
      "Banqueta trasera que se hace cama con asistencia eléctrica e Isofix",
      "Calefacción Eberspächer diésel de 2.200 W: autonomía térmica sin depender del gas",
      "Base Ford Transit Custom 2.0L 136 CV con amplísima red de servicio en Europa",
    ],
    contras: [
      "Las 4 plazas de noche exigen transformar la dinette a diario",
      "Sin garaje trasero: el material voluminoso viaja dentro del habitáculo",
      "Depósitos de 50/50 L justos para más de dos o tres días sin repostar",
      "Precio de partida elevado frente a campers más sencillas sobre la misma base",
      "Con 445 kg de carga útil hay que vigilar el peso con cuatro ocupantes y equipaje",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-oficial.webp", alt: "Campérêve Cap Land, vista exterior (foto oficial Campérêve)", ancho: 1024, alto: 703 },
      { src: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-interior1.webp", alt: "Campérêve Cap Land, salón con techo elevable (foto oficial Campérêve)", ancho: 1280, alto: 883 },
      { src: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-interior2.webp", alt: "Campérêve Cap Land, cama baja (foto oficial Campérêve)", ancho: 1200, alto: 800 },
      { src: "/media/campereve-cap-land-51-2026-precio-ficha-tecnica-detalle.webp", alt: "Campérêve Cap Land, detalle de cocina (foto oficial Campérêve)", ancho: 1200, alto: 800 },
    ],
    analisisSlug: "campereve-cap-land-51-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Ford Transit Custom: revisión según plan Ford (normalmente cada 2 años o 40.000 km)",
      revisiones: [
        { nombre: "Revisión base (Ford Transit Custom)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Campérêve (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, techo elevable", costeAproxEur: 250 },
      ],
    },
  },
];
