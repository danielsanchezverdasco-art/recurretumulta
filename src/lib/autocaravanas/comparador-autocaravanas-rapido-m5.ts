// Autocaravanas Rapido — lote Merlín 5 (19/10/2026).
// Modelo 666F: perfilado de la Serie 6F 2026, edición 65.º aniversario.
// --- Fuentes y notas del modelo 666F ---
// Fuentes: página oficial del modelo en Rapido España
// (https://www.rapido-autocaravana.es/.../autocaravana_profiles-integraux_serie-6f_666f.chtml)
// con equipamiento completo: chasis Fiat 2.2 de 140 CV, Truma Combi 4 CP Plus, frigorífico
// de compresión de 174 l, camas gemelas de altura regulable con colchón BULTEX, garaje
// transversal calefactado, construcción 100 % poliéster con Styrofoam; artículo de YpoCamp
// sobre los perfilados 2026 (https://blog.ypocamp.fr/achat/quel-camping-car-profile-choisir-en-2026):
// 7,49 x 2,35 x 2,90 m, lits jumeaux con lit pavillon en opción, 4 plazas carte grise,
// soute de doble entrada, edición 65 ans con llantas de aleación, pintura gris, depósito
// de agua calefactado, batería de litio, paneles solares y pantalla multimedia de 9",
// precio indicado de 76.500 € (Francia); anuncio de unidad 2026 65 ans en
// annonces-caravaning.com: 4 plazas, 4 plazas para dormir, sobre Peugeot Boxer 2.2 de
// 140 CV; ficha de distribuidor belga (abcmobile.be): Fiat Ducato 2.2 de 140 CV,
// 7,48 x 2,34 x 2,90 m, 3.120 kg (unidad 2025).
// Verificado el 19/10/2026.
// NOTAS HONESTAS: Rapido no publica tarifa oficial para España: precioDesde queda en
// null. Como referencia extranjera, la prensa francesa (YpoCamp, 01/2026) indica
// 76.500 € para la edición 65 ans en Francia (cifra no oficial, marcada como extranjera).
// La potencia indicada (140 CV) es la de la versión base según la ficha oficial española;
// la edición 65 ans 2026 se ofrece también sobre Peugeot Boxer 2.2 de 140 CV según
// anuncios de distribuidores franceses. El peso en orden de marcha no lo publica la marca
// de forma verificable: queda sin dato (prohibido calcularlo); como referencia, un
// distribuidor belga declara 3.120 kg para una unidad 2025 (no oficial, solo en notas).
// La carga útil no la publica la marca: queda sin dato.
// Fotos: Rapido no publica fotos del 666F en su web oficial. Se usan 2 fotos de prensa
// del dossier 65 ans (Esprit Camping-Car, modelo exacto, sin marcas de agua), 1 render
// oficial de la marca (vía distribuidor británico Oakwell) y 1 foto de una unidad real
// 65 ans en un distribuidor francés (vía YpoCamp), todas del modelo exacto y sin marcas
// de agua ni rótulos.

import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_RAPIDO_M5: Autocaravana[] = [
  {
    id: "rapido-666f-2026-precio-ficha-tecnica",
    marca: "Rapido",
    modelo: "666F",
    tipo: "perfilada",
    categoria: "Autocaravana",
    precioDesde: null, // Rapido no publica tarifa oficial para España
    potenciaCv: 140, // Fiat 2.2 de 140 CV (versión base según ficha oficial española); la edición 65 ans 2026 también se ofrece sobre Peugeot Boxer 2.2 de 140 CV
    autonomiaKm: null,
    maleteroL: null,
    ceroCien: null,
    velocidadMax: null,
    bateriaKwh: null,
    cargaRapidaKw: null,
    etiquetaDgt: "C", // diésel Euro 6e
    garantiaBateriaAnos: null,
    garantiaBateriaDegradacionPct: null,
    garantiaBateriaKm: null,
    imagen: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial: "/media/rapido-666f-2026-precio-ficha-tecnica-interior1.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 7490, // 7,49 m según YpoCamp y caravanmarket.com
    anchoMm: 2350, // 2,35 m según YpoCamp
    altoMm: 2900, // 2,90 m según YpoCamp y abcmobile.be
    pesoKg: null, // la marca no publica el peso en orden de marcha de forma verificable
    mmaKg: 3500, // PTAC 3.500 kg según anuncios de unidades 2026
    carnetNecesario: "B", // mmaKg <= 3500
    cargaUtilKg: null, // la marca no publica la carga útil
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // 4 plazas según anuncio de unidad 2026 (annonces-caravaning.com) y YpoCamp
    plazasDormir: 4, // lits jumeaux + lit de pavillon de 2 plazas en opción
    parNm: null,
    traccion: "delantera", // Fiat Ducato / Peugeot Boxer (tracción delantera)
    emisionesCo2: null,
    aprox: [],
    notas:
      "Perfilado de la Serie 6F 2026 en edición 65.º aniversario, sobre Fiat 2.2 de 140 CV según la ficha oficial española (la edición 65 ans también se ofrece sobre Peugeot Boxer 2.2 de 140 CV según distribuidores franceses): 7,49 x 2,35 x 2,90 m, 4 plazas, lits jumeaux de altura regulable con colchón BULTEX, lit de pavillon de 2 plazas en opción, garaje transversal calefactado de doble acceso, calefacción Truma Combi 4 con CP Plus (Alde en opción), frigorífico de compresión de 174 l y construcción 100 % poliéster con aislamiento Styrofoam. La edición 65 ans añade llantas de aleación, pintura gris Iron Grey, depósito de agua calefactado, batería de litio y paneles solares. Sin tarifa oficial en España: la prensa francesa indica 76.500 € para la edición 65 ans en Francia (cifra no oficial). sin tarifa oficial abierta verificable.",
    curiosidades:
      "Para su 65.º aniversario (2026), Rapido vistió al 666F de gala: la edición 65 ans suma de serie llantas de aleación, pintura gris Iron Grey, depósito de agua calefactado, batería de litio y paneles solares —un trabajo de autonomía pensado para durar—, además de freno de estacionamiento eléctrico y pantalla multimedia de 9 pulgadas. Fuente: YpoCamp, «Quel camping-car profilé choisir en 2026 ?» (https://blog.ypocamp.fr/achat/quel-camping-car-profile-choisir-en-2026).",
    descripcion: `Hay marcas que celebran los aniversarios con un logo conmemorativo en el lateral, y luego está Rapido: para sus 65 años ha vestido de gala al 666F, uno de sus perfilados más equilibrados, y lo ha cargado de equipamiento hasta convertirlo en una serie especial con identidad propia. El resultado es un perfilado de 7,49 metros con camas gemelas, estética Iron Grey y una dotación de autonomía —batería de litio, panel solar, depósito de agua calefactado— que lo deja prácticamente listo para viajar desde el primer día.

    La Serie 6F tiene un argumento técnico que conviene conocer antes de mirar el equipamiento: su vía trasera ensanchada sobre chasis Fiat. No sale en las fotos, pero se siente en los primeros cien kilómetros de autopista en forma de una estabilidad y un aplomo en curva superiores a los de un perfilado convencional. Sumado a la construcción 100 % poliéster antichoque —techo, paredes y bajos—, la estructura del suelo en poliuretano y el aislamiento Styrofoam, el 666F transmite esa solidez bien construida que caracteriza a la marca de Mayenne. Con 7,49 x 2,35 x 2,90 metros y 3.500 kg de MMA, se conduce con el carnet B, aunque sus dimensiones piden respeto al aparcar: no es un vehículo para improvisar en ciudad.

    La noche se resuelve con camas gemelas traseras de altura regulable, montadas sobre somier de marco de aluminio con láminas activas y colchón BULTEX de espuma de alta resiliencia: cada uno duerme en su cama y se levanta sin pasar por encima del otro, el formato que más parejas eligen cuando prueban las tres distribuciones. Bajo las camas, el garaje transversal calefactado con acceso por ambos lados admite bicicletas y equipamiento voluminoso. De día, el salón transforma las plazas de marcha en asientos face-to-face sin escalón intermedio, con mesa plegable y hueco para una TV de 32 pulgadas; la cocina de líneas depuradas trabaja con placa de acero inoxidable de dos fuegos, fregadero con tapa de cristal y un frigorífico de compresión de 174 litros que rinde de verdad en verano. El cuarto de baño, con columna de ducha revestida y claraboya con tendedero, cumple con nota. Y con el lit de pavillon en opción, dos plazas más descienden sobre el salón: cuatro personas duermen a bordo sin desmontar las gemelas.

    La edición 65 ans merece capítulo propio porque cambia la ecuación del equipamiento. Sobre la ya completa dotación de serie —Truma Combi 4 con mandos CP Plus, techo panorámico SKYVIEW con desempañado eléctrico, doble acristalamiento con oscurecedores y mosquiteras, puerta XL de 600 mm con cierre de dos puntos, ambientes PALATINA o AURORA con tapicerías TEP acolchadas—, la serie aniversario añade llantas de aleación de 16 pulgadas, pintura metalizada Iron Grey con decoración específica, depósito de agua calefactado, batería de litio de 100 Ah, panel solar de 150 W, freno de estacionamiento eléctrico, pantalla multimedia Pioneer de 9 pulgadas con Apple CarPlay y Android Auto, y cámara de marcha atrás con pantalla integrada. Es, en la práctica, la lista de opciones que casi todo comprador acabaría marcando, incluida de fábrica y con un acabado estético diferenciado.

    En la parte mecánica, la ficha oficial española declara el chasis Fiat 2.2 de 140 CV con un paquete de seguridad muy completo: frenada de emergencia avanzada, mantenimiento de carril, detección de somnolencia, reconocimiento de señales, control de crucero con limitador y Traction+ con control de descenso en pendientes. Los anuncios de distribuidores franceses de la edición 65 ans 2026 la ofrecen también sobre Peugeot Boxer 2.2 de 140 CV, una diversificación de chasis que Rapido ha extendido a varias series esta temporada. Tracción delantera en ambos casos y una mecánica probada con red de talleres en toda Europa.

    Sobre el precio, la honestidad obliga: Rapido no publica tarifa oficial para España y cada concesionario configura y presupuesta la unidad. Como referencia extranjera, la prensa francesa situaba el 666F en edición 65 ans en 76.500 € en Francia a principios de 2026 —cifra no oficial, válida solo como orientación—. La recomendación para el comprador español es comparar presupuestos con idéntico nivel de equipamiento, porque la edición aniversario ya trae de serie buena parte de lo opcional y las diferencias entre distribuidores pueden ser importantes.

    Cómo lo verificamos: el equipamiento completo, el chasis, la calefacción, el frigorífico, las camas BULTEX y la construcción en poliéster proceden de la ficha oficial del modelo en rapido-autocaravana.es; las cotas (7,49 x 2,35 x 2,90), las plazas, el pavillon en opción, la soute de doble acceso, la dotación de la edición 65 ans y el precio de referencia francés, del artículo de YpoCamp; las 4 plazas y el chasis Peugeot Boxer en la edición 65 ans 2026, del anuncio de una unidad nueva en annonces-caravaning.com; las cotas 7,48 x 2,34 x 2,90 y la referencia de peso de 3.120 kg para una unidad 2025, de la ficha del distribuidor belga abcmobile.be. Todo verificado el 19/10/2026. Quedan sin dato el precio oficial español, el peso en orden de marcha, la carga útil, el par, el consumo y las emisiones, no publicados por la marca. La marca no publica fotos del 666F en su web oficial: las imágenes son del dossier de prensa 65 ans (modelo exacto, sin marcas de agua), un render oficial y una unidad real 65 ans en un distribuidor francés.

    El veredicto: el 666F es para parejas que buscan gemelas en un perfilado grande, sólido y con carácter, con cuatro plazas, carnet B y una edición aniversario que evita la tiranía de la lista de opciones. La vía ensanchada y la construcción en poliéster lo recomiendan a quien hace muchos kilómetros al año. No es para quien priorice la compacidad —7,49 metros se notan—, para quien necesite cinco o seis plazas ni para quien quiera un precio cerrado en catálogo: aquí se negocia con el concesionario.`,
    pros: [
      "Camas gemelas de altura regulable con colchón BULTEX y garaje transversal calefactado debajo",
      "Edición 65 ans con sobrequipamiento de serie: litio, solar 150 W, agua calefactada, multimedia 9\"",
      "Vía trasera ensanchada de la Serie 6F: estabilidad y aplomo superiores en carretera",
      "Construcción 100 % poliéster con Styrofoam y techo SKYVIEW, un escalón por encima de la media",
      "Cuatro plazas para dormir (gemelas + pavillon en opción) con carnet B",
    ],
    contras: [
      "Rapido no publica tarifa en España: precio a negociar con cada distribuidor",
      "7,49 metros de largo: nada ágil en ciudad y exige experiencia al maniobrar",
      "El lit de pavillon es opcional: de serie, las plazas nocturnas son dos",
      "La motorización base de 140 CV puede quedarse justa con carga completa en puertos",
      "Peso y carga útil no publicados por la marca: imposible verificar la carga real disponible",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Rapido 666F, vista exterior edición 65 ans",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-interior1.webp",
        alt: "Rapido 666F, vista exterior de estudio",
        ancho: 800,
        alto: 476,
      },
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-interior2.webp",
        alt: "Rapido 666F, cuarto de baño",
        ancho: 518,
        alto: 800,
      },
      {
        src: "/media/rapido-666f-2026-precio-ficha-tecnica-detalle.webp",
        alt: "Rapido 666F, vista exterior en concesionario",
        ancho: 425,
        alto: 567,
      },
    ],
    analisisSlug: "rapido-666f-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Base Fiat Ducato / Peugeot Boxer: revisión cada 2 años o 40.000 km (lo que antes ocurra, según plan del fabricante)",
      revisiones: [
        {
          nombre: "Revisión base (Fiat Ducato / Peugeot Boxer)",
          queSeCambia: "Aceite + filtros + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Rapido (anual recomendada)",
          queSeCambia: "Estanqueidad, gas, electricidad, humedades",
          costeAproxEur: 250,
        },
      ],
    },
  },
];
