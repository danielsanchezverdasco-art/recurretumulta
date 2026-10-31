// Autocaravanas Mobilvetta — lote Merlín 4 (19/10/2026).
// Fuentes: ficha oficial Mobilvetta (PDF Mobilvetta_Krosser_86_it), anuncio de truckscout24.de,
// camperlife.it. Verificado el 19/10/2026.
// Notas honestas: Mobilvetta publica su PVP en el Listino oficial de Italia 2026 (el Krosser P86
// parte de 92.220 €, «aprox»; sin tarifa para España). La marca no publica
// carga útil (cargaUtilKg: null). Fotos: ninguna oficial disponible (mobilvetta.it no indexa
// galería del P86); 4 fotos de concesionarios verificadas como Krosser P86 exacto; la portada
// se recortó para eliminar el portaplacas del concesionario.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_MOBILVETTA_M4: Autocaravana[] = [
  {
    id: "mobilvetta-krosser-p86-2026-precio-ficha-tecnica",
    marca: "Mobilvetta",
    modelo: "Krosser P86",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: 92220, // Listino oficial Mobilvetta Italia 2026, IVA incl.
    potenciaCv: 140, // 2.2 MultiJet 140 CV (ficha oficial; dealers ofrecen 180 CV)
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel
    garantiaBateriaAnos: null,
    garantiaBateriaKm: null,
    garantiaBateriaDegradacionPct: null,
    imagen: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7450, // ficha oficial mobilvetta.it
    anchoMm: 2350, // ficha oficial mobilvetta.it
    altoMm: 3050, // ficha oficial mobilvetta.it (altura interior 208 cm)
    pesoKg: null, // la ficha oficial no declara MRO
    mmaKg: 3500, // ficha oficial mobilvetta.it (dealers ofrecen versión 4.400 kg)
    carnetNecesario: "B", // MMA 3.500 kg
    cargaUtilKg: null, // la marca no publica carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 homologados (ficha oficial)
    plazasDormir: 4, // 3-4 camas: traseras + abatible (ficha oficial)
    parNm: null,
    traccion: null,
    emisionesCo2: null,
    aprox: ["precioDesde"],
    notas:
      "Largo 7.450 mm, ancho 2.350 mm, alto 3.050/2.080 mm, motor 2.2 MultiJet 140 CV, 4 homologados, 3-4 plazas de cama (traseras 213×80–200×81 cm + abatible 190×128 cm), frigorífico de compresor 174 l, Truma Combi gas 6 kW, doble suelo técnico: ficha oficial https://mobilvetta.it/wp-content/uploads/2024/07/Mobilvetta_Krosser_86_it.pdf. Versiones de 180 CV con cambio automático y MMA de 4.400 kg ofrecidas por distribuidores: anuncio de truckscout24.de. Fotos: 4 de concesionarios verificadas como Krosser P86 exacto (insignia P86 visible); mobilvetta.it no publica galería oficial del modelo; la portada se recortó para eliminar el portaplacas del concesionario. Precio: PVP de Italia del Listino oficial Mobilvetta Italia 2026 (precios recomendados, IVA 22% incl., válido desde 01/09/2025), Krosser P86 = 92.220 €; no hay tarifa oficial para España.",
    curiosidades:
      "Gracias a su sistema constructivo iTech 4.0, Mobilvetta ofrece en la gama Krosser 10 años de garantía contra infiltraciones de agua, una de las coberturas más largas del segmento (fuente: https://camperlife.it/notizie/semintegrale-mobilvetta-krosser-p90-il-test-valle-daosta.html).",
    descripcion: `La Mobilvetta Krosser P86 es la perfilada con la que la marca italiana —otra de las joyas del grupo Trigano— se presenta en el segmento familiar de los 7,45 metros. Mobilvetta lleva desde los años sesenta construyendo autocaravanas en la Toscana y su seña de identidad histórica es el diseño: líneas cuidadas, interiores con personalidad y una estética que se reconoce a primera vista. La gama Krosser traslada esa herencia a un formato racional y habitable, y el P86 es su propuesta con camas gemelas traseras, la distribución favorita de las parejas que viajan con espacio.

    Las cifras oficiales son claras: 7.450 mm de largo, 2.350 mm de ancho y 3.050 mm de alto, con 2.080 mm de altura interior. Es una perfilada grande, y los 3.050 mm de altura exterior la sitúan entre las más altas de su clase, algo que se traduce en volumen interior y en presencia en carretera. La distribución P86 combina salón delantero con asientos giratorios, cocina central bien equipada, baño y dormitorio trasero con camas gemelas de 213×80 y 200×81 cm. Las camas separadas son la gran ventaja para dos personas: cada uno tiene su espacio, se entra y se sale sin molestar al otro y el hueco central queda como pasillo o como zona de vestidor. Sobre el salón, la cama abatible de 190×128 cm permite alojar a una o dos personas más, de modo que la ficha oficial habla de 3-4 plazas para dormir y 4 homologadas para viajar.

    El equipamiento de la célula apunta alto: frigorífico de compresor de 174 litros —más eficaz que los de absorción con calor, algo que se agradece en veranos mediterráneos—, calefacción Truma Combi de gas de 6 kW y doble suelo técnico. El doble suelo no es un detalle menor: además de permitir el paso de instalaciones protegidas del frío, aporta almacenamiento accesible desde el interior y mejora el aislamiento térmico del conjunto. Es la base constructiva que permite a Mobilvetta presumir de aptitud invernal sin complejos.

    Y aquí entra el dato diferencial de la marca: el sistema constructivo iTech 4.0, con el que Mobilvetta ofrece 10 años de garantía contra infiltraciones de agua en la gama Krosser. En un sector donde la estanqueidad es la madre de todas las batallas —una infiltración no detectada puede arruinar una célula— una garantía de una década es una declaración de confianza en el propio producto y un argumento de valor de reventa: una autocaravana con la estanqueidad garantizada por escrito hasta 2036 se vende mejor que una sin ella.

    En mecánica, la ficha oficial declara el 2.2 MultiJet de 140 CV con MMA de 3.500 kg, lo que la mantiene en el carnet B. Pero el mercado ofrece más: distribuidores anuncian versiones del P86 con 180 CV, cambio automático y MMA de 4.400 kg. Esa variante cambia dos cosas importantes: el carnet necesario (C1) y el comportamiento con la célula cargada, porque 40 CV extra se notan en una perfilada de 7,45 metros. Conviene decidir antes de comprar qué homologación se quiere, porque condiciona el permiso y la carga útil.

    En precio, Mobilvetta no publica tarifa oficial para España: el precio aplicado es el del Listino oficial de Italia 2026 (92.220 €) y no hay cifra oficial española de partida. El precio real lo fija cada distribuidor según motorización, cambio, packs y promociones. La marca cuenta con red de concesionarios en España, donde se puede solicitar presupuesto cerrado; es recomendable pedirlo por escrito con el detalle de extras, porque en este segmento las diferencias entre una unidad básica y una equipada pueden ser de cinco cifras.

    En el día a día, el P86 se comporta como lo que es: una gran perfilada rutera. El puesto de conducción del Ducato es conocido y ergonómico, con todos los mandos a mano y una posición de conducción alta que domina la carretera. Los 2.080 mm de altura interior permiten moverse sin agacharse y el baño, con ducha separada según distribución, está dimensionado para un uso real y no testimonial. Son detalles que solo se aprecian viviendo a bordo, pero que marcan la diferencia entre una autocaravana para fines de semana y una para viajar de verdad.

    Cómo lo verificamos: dimensiones, motor, plazas, camas con sus medidas, frigorífico de 174 l, Truma Combi gas de 6 kW y doble suelo técnico proceden de la ficha oficial en PDF de mobilvetta.it; las versiones de 180 CV con automático y MMA de 4.400 kg, de anuncios de distribuidores en truckscout24.de; y la garantía de 10 años contra infiltraciones del sistema iTech 4.0, de camperlife.it. Todo verificado el 19/10/2026. Las fotos proceden de concesionarios y se verificaron visualmente como Krosser P86 exacto (insignia P86 visible en la portada); la web oficial no publica galería del modelo y la portada se recortó para eliminar el portaplacas del concesionario.

    Para quién es: para parejas que quieren camas gemelas traseras de verdad en una perfilada con diseño italiano y una garantía de estanqueidad de 10 años que pocos rivales igualan. También para quien valore el frigorífico de compresor y el doble suelo técnico para viajar todo el año. Para quién no es: para quien busque el precio más bajo —el posicionamiento de Mobilvetta no es el de acceso—, para familias de cinco (son 4+4 como máximo) y para quien solo tenga carnet B y mire la versión de 180 CV/4.400 kg: esa exige el C1.`,
    pros: [
      "10 años de garantía contra infiltraciones de agua (sistema iTech 4.0): de las mejores coberturas del segmento",
      "Camas gemelas traseras (213×80 y 200×81 cm): la distribución más cómoda para dos personas",
      "Frigorífico de compresor de 174 l: rinde mejor con calor que los de absorción",
      "Doble suelo técnico: instalaciones protegidas, más aislamiento y almacenaje interior",
      "Versiones de 180 CV con automático disponibles en red de distribuidores para quien quiera más músculo",
    ],
    contras: [
      "Sin PVP oficial para España: la referencia es el Listino oficial de Italia (92.220 €)",
      "3.050 mm de alto y 7,45 m de largo: volumen generoso que se paga en consumo y maniobrabilidad",
      "La versión de 180 CV con MMA de 4.400 kg exige carnet C1",
      "La marca no publica la carga útil de la versión base",
      "Sin galería oficial de la marca: la documentación visual depende de concesionarios",
    ],
    opiniones: [],
    galeria: [
      { src: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-oficial.webp", alt: "Mobilvetta Krosser P86, vista exterior", ancho: 1600, alto: 791 },
      { src: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-interior1.webp", alt: "Mobilvetta Krosser P86, salón", ancho: 728, alto: 546 },
      { src: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-interior2.webp", alt: "Mobilvetta Krosser P86, interior", ancho: 798, alto: 466 },
      { src: "/media/mobilvetta-krosser-p86-2026-precio-ficha-tecnica-detalle.webp", alt: "Mobilvetta Krosser P86, detalle del salón", ancho: 798, alto: 466 },
    ],
    analisisSlug: "mobilvetta-krosser-p86-2026-analisis-opinion",
    planMantenimiento: {
      intervalo: "Base Fiat Ducato: revisión cada 2 años o 40.000 km (según plan del fabricante)",
      revisiones: [
        { nombre: "Revisión base (Fiat Ducato)", queSeCambia: "Aceite + filtros + inspección general", costeAproxEur: 350 },
        { nombre: "Revisión célula Mobilvetta (anual recomendada)", queSeCambia: "Estanqueidad, gas, electricidad, humedades", costeAproxEur: 250 },
      ],
    },
  },
];
