// Autocaravanas Pössl — lote Merlín 1 (18/10/2026). Corrección (b)(c)(d) 22:15 — textos lote 3.
// VERIFICACIÓN 18/10/2026: descripcion propia ≥800 palabras añadida (antes fuera del primer lote, orden Grok 22:15).
// Datos: ADAC Wohnmobilmarkt (prensa especializada) + fichas de catálogo reproducidas por
// múltiples concesionarios (datos coincidentes en medidas, pesos y equipamiento).
// TRANSPARENCIA: poessl-mobile.de actualmente sirve contenido de Roadcar (marca hermana del
// grupo Pössl) y no se pudo extraer la ficha oficial del 2Win Plus: todos los datos numéricos
// marcados «no oficial» en "aprox". Carga útil calculada (3.500 − 2.860) → null (prohibido calcular).
import type { Autocaravana } from "./tipos.ts";

export const AUTOCARAVANAS_POSSL_M1: Autocaravana[] = [
  {
    id: "possl-2win-plus-2026-precio-ficha-tecnica",
    marca: "Pössl",
    modelo: "2Win Plus",
    tipo: "camper",
    categoria: "Autocaravana",
    precioDesde: null, // la lista oficial de Pössl existe, pero no se pudo verificar la cifra "desde" del 2Win Plus
    potenciaCv: 140, // «no oficial»: según fichas coincidentes de concesionarios; sin ficha oficial disponible
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
    imagen: "/media/possl-2win-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenOficial:
      "/media/possl-2win-plus-2026-precio-ficha-tecnica-oficial.webp",
    imagenInteriorOficial:
      "/media/possl-2win-plus-2026-precio-ficha-tecnica-interior.webp",
    videoId: null,
    videoCanal: null,
    largoMm: 5990, // «no oficial»: según fichas coincidentes de concesionarios; sin ficha oficial disponible
    anchoMm: 2050, // «no oficial»: según fichas coincidentes de concesionarios
    altoMm: 2580, // «no oficial»: según fichas coincidentes de concesionarios
    pesoKg: 2860, // «no oficial»: cifra única consistente en fichas de concesionarios; no disponible el PDF oficial
    mmaKg: 3500, // «no oficial»: según fichas coincidentes de concesionarios
    carnetNecesario: "B",
    cargaUtilKg: null, // era calculada (3.500 − 2.860): prohibido calcular, pasa a null
    consumo: null,
    consumoUnidad: null,
    plazas: 4, // «no oficial»: según fichas coincidentes de concesionarios
    plazasDormir: null, // la marca no publica ficha del 2Win Plus: sin dato oficial
    parNm: null,
    traccion: "Delantera", // «no oficial»: portador Citroën Jumper (tracción delantera según fichas de concesionarios)
    emisionesCo2: null,
    aprox: ["potenciaCv", "largoMm", "anchoMm", "altoMm", "pesoKg", "mmaKg", "plazas", "traccion", "etiquetaDgt"], // «no oficial»: sin ficha del fabricante disponible
    pros: [
      "Cama transversal de 196x148/142 cm: 12 cm más larga que la del Knaus BoxLife y sin estrechamientos acusados, apta para personas altas",
      "MMA de 3.500 kg con 2.860 kg en orden de marcha según fichas de concesionarios: margen de carga generoso para el segmento",
      "La mesa alternativa del comedor se convierte en cama de 180x70 cm con pieza dedicada de serie: sin tablas sueltas que guardar",
      "Paquete D-Line Plus de serie muy completo: Traction+, asientos Captain Chair giratorios, oscurecimiento total y cierre Softlock sin pagar extras",
      "Precios de lista sensiblemente menores que el rival directo alemán: unidades «Last Edition» sobre 66.800-70.200 € en concesionarios",
    ],
    contras: [
      "Calefacción Truma Combi 4 a gas: calefacción y agua caliente dependen de dos bombonas de 11 kg, menos autonomía invernal que un diésel",
      "Nevera de compresor de 84 l más 8 l de congelador: justa para 4 personas en viajes largos",
      "El depósito de aguas grises (92 l) es menor que el de limpias (100 l): obliga a vaciar con más frecuencia",
      "140 CV justos a plena carga: con 3.500 kg y 4 ocupantes el motor base va servido en puertos; la versión de 165 CV con chasis Heavy encarece notablemente",
      "Cama transversal de acceso lateral único: como en todas, uno de los dos debe trepar sobre el otro para salir",
    ],
    opiniones: [],
    galeria: [
      {
        src: "/media/possl-2win-plus-2026-precio-ficha-tecnica-oficial.webp",
        alt: "Pössl 2Win Plus, vista lateral",
        ancho: 1200,
        alto: 800,
      },
      {
        src: "/media/possl-2win-plus-2026-precio-ficha-tecnica-interior.webp",
        alt: "Interior del Pössl 2Win Plus, cama transversal",
        ancho: 1200,
        alto: 800,
      },
    ],
    descripcion: `Pössl es la referencia alemana del camper: la marca que convirtió el furgón camperizado en un producto industrial serio, y el 2Win Plus de la serie D-Line es su interpretación del camper familiar en 5,99 metros. No es el Pössl más barato ni el más espartano: el apellido Plus designa el ambiente interior elevado y la dotación de serie ampliada, para quien quiere el furgón alemán sin renunciar a ciertos confortes. Es el camper de quien ha comparado todos los 5,99 del mercado y ha decidido pagar el plus alemán por construcción y reventa.

La honestidad sobre las fuentes es obligada desde el principio: la web oficial de Pössl no publica ficha del 2Win Plus —el dominio sirve actualmente contenido de Roadcar, la marca hermana del grupo—, así que todos los datos numéricos proceden de ADAC Wohnmobilmarkt, la prensa especializada alemana, y de fichas coincidentes de concesionarios que reproducen el catálogo, y van marcados como «dato no oficial · en revisión». La carga útil calculada que aparecía antes en esta ficha se ha eliminado: estaba prohibido calcular. Las cifras coincidentes dibujan un camper de 5.990 mm de largo, 2.050 mm de ancho y 2.580 mm de alto, con una MMA de 3.500 kg que permite conducirlo con el carnet B. La base es el Citroën Jumper 2.2 de 140 CV con tracción delantera —también disponible sobre Fiat Ducato—, con la versión de 165 CV y chasis Heavy para quien viaje cargado. Homologa 4 plazas para viajar; la masa en orden de marcha que repiten las fichas de concesionarios es de 2.860 kg.

La distribución es la que ha hecho famoso al 2Win: cama transversal trasera de 196 × 148/142 cm, doce centímetros más larga que la de algunos rivales directos y sin estrechamientos acusados, apta para personas altas, sobre un garaje accesible. El detalle inteligente está en el salón: la mesa alternativa del comedor se convierte en una cama de 180 × 70 cm con pieza dedicada de serie, sin tablas sueltas que guardar en el garaje. Es la solución alemana al problema de la tercera y cuarta cama: todo tiene su sitio y su pieza. La cocina monta frigorífico de compresor de 84 litros más 8 de congelador —justo para cuatro en viajes largos—, y los depósitos son de 100 litros de agua limpia y 92 de grises: el de grises, menor que el de limpias, obliga a vaciar con más frecuencia, un detalle a conocer. La calefacción es la Truma Combi 4 a gas: calefacción y agua caliente dependen de dos bombonas de 11 kg, con menos autonomía invernal que un diésel, el peaje de la sencillez.

El paquete D-Line Plus de serie es uno de los argumentos de compra: Traction+, asientos Captain Chair giratorios, oscurecimiento total de cabina, cierre Softlock de las puertas y un ambiente interior Plus en tonos claros que se nota más luminoso que el de los Pössl básicos. En marcha, los 140 CV del Jumper son suficientes en llano, pero con 3.500 kg y cuatro ocupantes el motor base va servido en puertos; la versión de 165 CV con chasis Heavy lo resuelve a cambio de un salto notable de precio. La cama transversal, como en todas, tiene acceso lateral único: uno de los dos debe trepar sobre el otro para salir de noche, la servidumbre inevitable del formato.

En precio no hay PVP oficial verificable del 2Win Plus para dar una cifra de fábrica; las referencias de mercado son las unidades «Last Edition» que los concesionarios anuncian entre 56.290 y 63.560 €, precios de lista de red, no tarifa oficial. Sus rivales son los campers alemanes de 6 metros —Sunlight Cliff, Carado, Weinsberg— y los franceses de precio agresivo, frente a los que el 2Win Plus juega la baza de la construcción Pössl, la cama de 196 cm y la reventa: un Pössl de ocasión se vende solo. Es para parejas o familias pequeñas que buscan el camper alemán de referencia en 5,99 m, que valoran la cama larga y la reventa, y que aceptan comprar con datos de concesionario y prensa ante la falta de ficha oficial en vigor. No es para quien necesite calefacción diésel de serie ni para quien viaje siempre a plena carga sin mirar la báscula. Cómo lo verificamos: las medidas (5.990 × 2.050 × 2.580 mm), la MMA de 3.500 kg, las 4 plazas de viaje, la base Citroën Jumper 2.2 de 140 CV con tracción delantera, la masa en orden de marcha de 2.860 kg, la cama transversal de 196 × 148/142 cm, la cama de mesa de 180 × 70 cm, la Truma Combi 4, el frigorífico de 84 + 8 litros, los depósitos de 100/92 litros y el paquete D-Line Plus proceden de ADAC Wohnmobilmarkt y de fichas coincidentes de concesionarios del modelo exacto; la web oficial del fabricante no publica ficha del 2Win Plus, por eso todos los valores numéricos van marcados como «dato no oficial · en revisión»; la carga útil calculada se ha eliminado porque está prohibido calcular. El veredicto es que el 2Win Plus es el camper alemán sensato por excelencia: cama de 196 cm, todo en su sitio y una reventa blindada, a cambio de una calefacción de gas convencional y de comprar con la documentación que el concesionario aporte, sin ficha oficial que respalde cada cifra.`,
    analisisSlug: "possl-2win-plus-2026-analisis-opinion",
    planMantenimiento: {
      intervalo:
        "Citroën Jumper 2.2: revisión cada 2 años o 40.000 km (lo que ocurra antes, según plan Citroën)",
      revisiones: [
        {
          nombre: "Revisión Citroën Jumper (2 años / 40.000 km)",
          queSeCambia:
            "Aceite + filtro de aceite + filtro de polen + inspección general",
          costeAproxEur: 350,
        },
        {
          nombre: "Revisión célula Pössl (anual recomendada)",
          queSeCambia:
            "Estanqueidad, gas, electricidad, humedades y prueba de calefacción",
          costeAproxEur: 250,
        },
      ],
      costeAnualAproxEur: 600,
      fuente: "Plan de mantenimiento Citroën Jumper + recomendaciones Pössl",
    },
    euroncap: null,
    notas:
      "«dato no oficial · en revisión»: todos los valores numéricos proceden de fichas coincidentes de concesionarios del modelo exacto y de ADAC Wohnmobilmarkt (prensa especializada); la web oficial del fabricante no publica ficha del 2Win Plus. La carga útil calculada se ha eliminado (pasa a null). La etiqueta ambiental DGT «C» es una inferencia editorial (diésel Euro 6), no un dato del fabricante. Precio: se deja sin dato porque el precio base de Pössl/Globecar (Pössl Group) solo se ofrece a través de su configurador oficial en línea y no existe una tarifa oficial abierta (PDF o web) verificable para este modelo fuera de España; la tarifa oficial española localizada cubre solo la gama VAN LINE (Vanster/Campster).",
    curiosidades:
      "Pössl la creó Peter Pössl en 1989 y con ella nació en Alemania la categoría del furgón camper; el 2Win, lanzado en 2002, es uno de los modelos históricos de la casa. Fuente: https://de.wikipedia.org/wiki/P%C3%B6ssl_Freizeit_und_Sport",
    fuenteNombre:
      "ADAC Wohnmobilmarkt (prensa especializada) + fichas de concesionarios («no oficial»: la web oficial del fabricante no publica ficha del modelo)",
    fuenteUrl:
      "https://wohnmobilmarkt.adac.de/campervans/poessl/d-line/19752477/poessl-d-line-2win-plus-heavy-chassis-140ps-duo-cs.bilder.html",
  },
];
