// Autocaravanas Eura Mobil — lote Merlín 2 (19/10/2026).
// Modelo verificado como real en la página oficial de la gama Activa One
// (euramobil.de) y en anuncios de unidades nuevas 2025/2026.
// Datos de la página oficial del modelo + ficha técnica de gama publicada
// por el concesionario Alpacacamping. Precio: la marca no publica tarifa;
// precioDesde con el precio de entrada aproximado publicado por el
// concesionario en Alemania, marcado en `aprox`. Sin portada+3 no entra:
// 4 fotos webp de un Activa One 650 HS real (incluida una oficial de la
// marca), inspeccionadas visualmente una a una.
// Curiosidad con fuente en `curiosidades`. noindex lo gestiona Grok al integrar.
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_EURAMOBIL_M2: Autocaravana[] = [
  {
    id: "euramobil-activa-one-650-hs-2026-precio-ficha-tecnica",
    marca: "Eura Mobil",
    modelo: "Activa One 650 HS",
    tipo: "capuchina",
    categoria: "Autocaravana",
    precioDesde: 80500, // precio de entrada aprox. publicado por el concesionario Alpacacamping (Alemania); la marca no publica tarifa
    potenciaCv: 140, // Fiat Ducato 2.2 Multijet de 140 CV (103 kW), de serie
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
    imagen:
      "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-ext.webp",
    imagenOficial:
      "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-ext.webp",
    imagenInteriorOficial:
      "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 6500, // página oficial de la gama Activa One (6,50 m)
    anchoMm: 2320, // página oficial de la gama Activa One (2,32 m)
    altoMm: 3150, // página oficial de la gama Activa One (3,15 m)
    pesoKg: null, // la masa en orden de marcha varía según equipamiento (anuncios 2026: 2.950–3.074 kg)
    mmaKg: 3500, // 3.500 kg de serie; con refuerzo opcional hasta 4.250/4.400 kg
    carnetNecesario: "B", // 3.500 kg de MMA: se conduce con el carnet B
    cargaUtilKg: null, // la marca no publica la carga útil de esta versión
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas de viaje con cinturón
    plazasDormir: 4, // cama capuchina + salón trasero convertible en cama
    parNm: 350, // Fiat Ducato 2.2 Multijet 140: 350 Nm (dato oficial Fiat)
    traccion: "Delantera", // Fiat Ducato, tracción delantera
    emisionesCo2: null,
    aprox: [
      "Precio de entrada publicado por el concesionario Alpacacamping (Alemania): aprox. 80.500 €",
    ],
    notas:
      "Eura Mobil no publica tarifa oficial: el precio final lo fija cada concesionario. Como referencia, el concesionario Alpacacamping (Alemania) publica un precio de entrada aproximado de 80.500 € para el Activa One 650 HS; las unidades nuevas del modelo 2026 anunciadas en Alemania se mueven entre 85.000 y 100.000 € según equipamiento. Medidas (6,50 x 2,32 x 3,15 m), motor Fiat Ducato 2.2 de 140 CV, 4 plazas de viaje y 4 para dormir, y equipamiento de serie proceden de la página oficial de la gama Activa One en euramobil.de. La MMA de serie es 3.500 kg (carnet B), con refuerzo opcional hasta 4.250/4.400 kg según anuncios de unidades nuevas 2026. Las fotos corresponden a un Activa One 650 HS real, incluida una imagen oficial de la marca, verificadas visualmente una a una.",
    descripcion: `El Eura Mobil Activa One 650 HS es la capuchina familiar de la marca de Sprendlingen —propiedad del grupo Trigano— y una de las pocas alcobas del mercado que se toma en serio el invierno: doble suelo de 37 cm calefactado y aislado en toda su longitud, capuchina calefactada y aislada, depósitos de agua dentro del doble suelo calefactado y construcción certificada según la norma EN 1646 de resistencia invernal. Con 6,50 metros de largo, 2,32 de ancho y 3,15 de alto, es una capuchina de formato contenido que ofrece cuatro plazas para dormir sin salir del carnet B.

La distribución 650 HS combina la cama capuchina delantera —grande, calefactada, con dos ventanas, suelo abatible y red de seguridad— con un salón trasero en U (la «Hecksitzgruppe» que da nombre a las siglas HS) convertible en cama. Son cuatro plazas de viaje con cinturón y cuatro para dormir, pensadas para parejas o familias pequeñas que quieren una cama siempre hecha arriba y un salón amplio abajo sin tener que desmontar la dinette cada noche. Un detalle honesto de la ficha oficial: las versiones HS (650 HS y 570 HS) no llevan Isofix en la dinette, a diferencia del resto de la gama; si viajan niños pequeños con silla, conviene saberlo antes de firmar.

La construcción es el argumento diferencial de Eura Mobil frente a las capuchinas de gran serie. Las paredes son de PRV sin madera, aisladas en toda su longitud, con techo y paredes de fibra de vidrio que protegen toda la carrocería del granizo; la unión suelo-pared se resuelve sin puentes térmicos y el suelo es una placa ligera de fibra de vidrio con refuerzos de perfiles de aluminio. La marca respalda el conjunto con diez años de garantía de estanqueidad de la carrocería y tres años para la construcción del mobiliario, cifras que pocas marcas generalistas igualan. La norma EN 1646 que cumple la gama exige, entre otras cosas, que un vehículo enfriado a 15 grados bajo cero alcance los 20 grados en el interior en un máximo de dos horas: dicho de otro modo, esta capuchina está pensada para esquiar en enero, no solo para la playa en agosto.

La base es el Fiat Ducato 2.2 Multijet de 140 CV (103 kW) con 350 Nm de par, el motor que Eura Mobil monta de serie en toda la gama Activa One, con cambio manual o automático y chasis rebajado CCS de vía ancha. El equipamiento de serie es completo para su precio: ESP con Traction+ y control de descenso, ABS+ASR, airbags de conductor y acompañante, control de crucero, climatización manual, llantas de 16 pulgadas y kit antipinchazos Fix and Go. En la célula, calefacción Truma Combi, frigorífico de 142 litros, cocina de tres fuegos con encendido eléctrico, ventanas Seitz aisladas a ras de pared exterior con mosquitera, batería de gel de 80 Ah y central eléctrica accesible bajo el asiento del acompañante. Los depósitos —150 litros de aguas limpias y 150 de grises en el 650 HS— van aislados y calefactados dentro del doble suelo, y el agua en posición de conducción se limita a 25 litros. El baño es de tamaño medio con cabina de ducha integrada, WC de cassette con gran depósito sobre ruedas y lavabo con grifería de cartuchos cerámicos.

Con 3.500 kg de MMA de serie, el 650 HS se conduce con el carnet B y entra en la inmensa mayoría de las áreas, aunque con cuatro ocupantes y el depósito lleno conviene vigilar la carga útil real: Eura Mobil ofrece el refuerzo de MMA hasta 4.250 o 4.400 kg para quien necesite margen, con el correspondiente cambio de carnet. Los 6,50 metros lo hacen manejable en carretera secundaria y pueblos, y la distancia entre ejes de 3,80 metros le da un aplomo correcto en autopista sin llegar a la agilidad de una perfilada corta.

Del precio en España no hay cifra oficial: Eura Mobil no publica tarifa y cada concesionario fija la suya. Como referencia de posicionamiento, el precio de entrada aproximado publicado en Alemania ronda los 80.500 euros, y las unidades nuevas del modelo 2026 anunciadas allí se mueven entre 85.000 y 100.000 euros según paquetes —Travel Pack, automático, toldo, portabicicletas—. Sus rivales naturales en el mercado español son las capuchinas familiares de Dethleffs, Bürstner y Sunlight en el entorno de los 6,50 metros: el Activa One se defiende con el doble suelo calefactado de 37 cm de serie, la garantía de estanqueidad de diez años y una calidad de construcción por encima de la media del segmento.

Verificación de fuentes: medidas (6,50 x 2,32 x 3,15 m, batalla de 3,80 m), motor Fiat Ducato 2.2 de 140 CV, plazas (4 de viaje / 4 para dormir), doble suelo de 37 cm, capuchina calefactada, norma EN 1646, frigorífico de 142 l, depósitos de 150/150 l y equipamiento de serie proceden de la página oficial de la gama Activa One en euramobil.de, contrastados con la ficha técnica de gama publicada por el concesionario Alpacacamping. El precio de entrada aproximado (80.500 €) lo publica Alpacacamping en Alemania; Eura Mobil no publica tarifa oficial. La masa en orden de marcha y la carga útil de esta versión no están publicadas: quedan sin dato y no se calculan. Las fotos corresponden a un Activa One 650 HS real, incluida una imagen oficial de la marca, verificadas visualmente una a una.

Perfil de comprador: el Activa One 650 HS encaja con familias pequeñas o parejas que buscan una capuchina para usar todo el año —incluido el invierno—, valoran el doble suelo calefactado y la cama capuchina siempre disponible, y prefieren la solidez constructiva alemana con diez años de garantía de estanqueidad. No encaja con quien necesite Isofix en las plazas traseras (las versiones HS no lo llevan), con quien busque una capuchina de más de 7 metros con camas fijas traseras ni con quien necesite un PVP cerrado de fábrica. Balance: la capuchina invernal más honesta de su franja de precio, con construcción por encima de la media, lastrada por la opacidad de precios habitual en la marca y la ausencia de Isofix en esta distribución.`,
    pros: [
      "Capuchina pensada para el invierno: doble suelo calefactado de 37 cm y norma EN 1646",
      "Cama capuchina calefactada + salón trasero en U convertible: 4 plazas para dormir sin desmontar nada",
      "Construcción sin madera con paredes de PRV, carrocería protegida del granizo y 10 años de garantía de estanqueidad",
      "Fiat Ducato 2.2 de 140 CV con 350 Nm y equipamiento de seguridad completo de serie (ESP, Traction+, airbags)",
      "3.500 kg de MMA: se conduce con el carnet B",
    ],
    contras: [
      "Las versiones HS no llevan Isofix en la dinette: mal punto si viajan niños con silla",
      "Sin tarifa oficial: cada concesionario fija su precio y el de entrada (~80.500 €) es solo una referencia alemana",
      "La marca no publica la masa en orden de marcha ni la carga útil de esta versión",
      "6,50 m con cuatro ocupantes: la carga útil real hay que vigilarla de cerca",
      "El cambio automático y los paquetes de equipamiento suben el precio sensiblemente",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-ext.webp",
        alt: "Eura Mobil Activa One 650 HS, vista delantera tres cuartos",
        ancho: 1400,
        alto: 1050,
      },
      {
        src: "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-ext-2.webp",
        alt: "Eura Mobil Activa One 650 HS, vista lateral tres cuartos",
        ancho: 1500,
        alto: 1125,
      },
      {
        src: "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Eura Mobil Activa One 650 HS, cocina y cama capuchina",
        ancho: 1400,
        alto: 933,
      },
      {
        src: "/media/euramobil-activa-one-650-hs-2026-precio-ficha-tecnica-interior-2.webp",
        alt: "Salón trasero en U del Eura Mobil Activa One 650 HS",
        ancho: 1500,
        alto: 1125,
      },
    ],
    analisisSlug: "euramobil-activa-one-650-hs-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Fiat Ducato 2.2: revisión cada 2 años o 48.000 km (lo que ocurra antes, según plan Fiat)",
      revisiones: [
        {
          nombre: "Revisión Fiat Ducato (2 años / 48.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Eura Mobil (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Fiat Ducato + recomendaciones Eura Mobil",
    },
    euroncap: null,
    curiosidades:
      "La gama Activa One cumple la norma EN 1646 de resistencia invernal: un vehículo enfriado a 15 grados bajo cero debe alcanzar los 20 grados en el interior en un máximo de dos horas, algo que Eura Mobil consigue con el doble suelo calefactado de 37 cm y la capuchina calefactada y aislada. Además, la marca da 10 años de garantía de estanqueidad de la carrocería. Fuente: página oficial de la gama Activa One (https://www.euramobil.de/fr/camping-cars/activa-one/).",
    fuenteNombre:
      "Eura Mobil — página oficial de la gama Activa One + ficha técnica de gama (Alpacacamping)",
    fuenteUrl: "https://www.euramobil.de/fr/camping-cars/activa-one/",
  },
];
