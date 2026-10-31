// Datos SEO de las 19 Comunidades Autónomas + Ceuta y Melilla
// para páginas programáticas de /comunidades/{ccaa}
// Intención de búsqueda AUTONÓMICA (no canibaliza /multas/{provincia})

export type Comunidad = {
  slug: string;
  nombre: string;
  organismo: "DGT" | "SCT" | "ERT" | "PF";
  organismoNombre: string;
  organismoWeb: string;
  provincias: string[];
  capital: string;
  foto: string;
  descripcion: string;
  particularidades: string[];
  zbe: string[];
  keywords: string[];
  faq: { pregunta: string; respuesta: string }[];
};

const FUENTE_RADARES =
  "fichero abierto «Radares fijos DGT» del Punto de Acceso Nacional de Tráfico (publicación del 18/12/2025)";

type ViaN = [string, number];

function listaVias(vias: ViaN[]): string {
  return vias.map(([v, n]) => `${v} (${n})`).join(", ");
}

function radares(lugar: string, n: number, vias: ViaN[], prov?: string): string {
  const reparto = prov ? ` Por provincias, destacan ${prov}.` : "";
  return `El ${FUENTE_RADARES} registra ${n} radares fijos en ${lugar}; las vías con más son ${listaVias(vias)}.${reparto}`;
}

function radaresVia(lugar: string, vias: ViaN[]): string {
  return `Radares fijos por vía en ${lugar} según el mismo fichero: ${listaVias(vias)}.`;
}

function unir(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}

type Organismo = Comunidad["organismo"];

const ART_RECURSO =
  "El recurso de reposición es potestativo, se presenta en el plazo de un mes desde el día siguiente a la notificación de la resolución sancionadora y lo resuelve el mismo órgano que la dictó (artículo 96.2 del Real Decreto Legislativo 6/2015).";

function respuestaOrganismo(c: Omit<Comunidad, "faq">): { pregunta: string; respuesta: string } {
  const n = c.nombre;
  switch (c.organismo) {
    case "SCT":
      return {
        pregunta: `¿A quién recurro una multa de tráfico en ${n}, a la DGT o al Servei Català de Trànsit?`,
        respuesta:
          "Al Servei Català de Trànsit, que instruye y resuelve los expedientes; los Mossos d'Esquadra denuncian las infracciones. El recurso de reposición se presenta ante la Dirección del Servei Català de Trànsit en el plazo de un mes desde el día siguiente a la notificación, y solo cabe en el procedimiento ordinario: si se pagó con la reducción del 50 %, queda la vía contencioso-administrativa. Fuente: transit.gencat.cat, consulta del 31/10/2026.",
      };
    case "ERT":
      return {
        pregunta: `¿Dónde presento el recurso de una multa de tráfico en ${n}?`,
        respuesta:
          "La Dirección de Tráfico del Departamento de Seguridad del Gobierno Vasco ejerce la potestad sancionadora (Decreto 318/2024, artículo 17), a través de las Oficinas Territoriales de Tráfico de Álava, Bizkaia y Gipuzkoa y del CATIT. Las alegaciones y los recursos se tramitan en euskadi.eus. " +
          ART_RECURSO,
      };
    case "PF":
      return {
        pregunta: `¿Dónde presento el recurso de una multa de tráfico en ${n}?`,
        respuesta:
          "Desde el 1 de julio de 2026 la tramitación, la resolución y el cobro corresponden al Gobierno de Navarra, de modo que las alegaciones y los recursos se dirigen a la Administración foral y no a la DGT. Hay 20 días naturales desde la notificación para alegar y se presentan por Mi Carpeta Ciudadana o de forma presencial; el pago se hace en navarra.es/es/trafico (fuente: Gobierno de Navarra, 30/06/2026).",
      };
    default:
      return {
        pregunta: `¿Dónde presento el recurso de una multa de la DGT en ${n}?`,
        respuesta: `La resolución sancionadora indica el órgano competente. ${ART_RECURSO} La DGT permite también tramitarlo por vía electrónica en sede.dgt.gob.es.`,
      };
  }
}

function faqComun(c: Omit<Comunidad, "faq">): Comunidad["faq"] {
  const n = c.nombre;
  const zbeResp =
    c.zbe.length > 0
      ? `La multa por entrar en una ZBE la impone el ayuntamiento que la gestiona, y los recursos se dirigen a él. En el Punto de Acceso Nacional de la DGT, a 31/10/2026, constan en ${n}: ${unir(c.zbe)}. Antes de pagar conviene comprobar la etiqueta ambiental del vehículo en el registro de la DGT, la señalización de la zona y el horario que fija la ordenanza municipal.`
      : `La multa por entrar en una ZBE la impone el ayuntamiento que la gestiona, y los recursos se dirigen a él. A 31/10/2026 ningún municipio de ${n} figura en el conjunto de ZBE del Punto de Acceso Nacional de la DGT; eso no significa que no exista una zona, así que conviene consultar la ordenanza del ayuntamiento. Antes de pagar se comprueban la etiqueta ambiental en el registro de la DGT, la señalización y el horario.`;
  const extra: Comunidad["faq"] =
    c.organismo === "SCT" || c.organismo === "ERT" || c.organismo === "PF"
      ? [
          {
            pregunta: `¿Quién puede denunciarme en las carreteras de ${n}?`,
            respuesta:
              "Según la DGT, pueden multar la propia DGT, los ayuntamientos y las comunidades con competencia en tráfico: Cataluña a través del Servei Català de Trànsit, el País Vasco a través de su Dirección de Tráfico y Navarra. En Navarra, la Guardia Civil conserva la facultad de denunciar y sus denuncias se tramitan en la plataforma foral.",
          },
        ]
      : [];
  return [
    respuestaOrganismo(c),
    ...extra,
    {
      pregunta: `¿Cómo recurro una multa de zona de bajas emisiones en ${n}?`,
      respuesta: zbeResp,
    },
    {
      pregunta: `¿Las multas del ayuntamiento se recurren igual que las de tráfico en ${n}?`,
      respuesta:
        "Depende de quién sancione. Las de las carreteras interurbanas las resuelve la DGT o el organismo autonómico competente; las de las calles las sanciona el ayuntamiento, que es también el órgano ante el que se recurre. La notificación indica el órgano y el plazo de cada caso.",
    },
    {
      pregunta: "¿Cuánto tiempo tengo para recurrir una multa de tráfico?",
      respuesta:
        "Hay 20 días naturales desde el día siguiente a la notificación para pagar con el 50 % de reducción o presentar alegaciones (artículos 94 y 95 del Real Decreto Legislativo 6/2015). Contra la resolución sancionadora cabe el recurso de reposición en un mes o acudir a la vía contencioso-administrativa.",
    },
    {
      pregunta: "¿Puedo recurrir una multa si ya la he pagado?",
      respuesta:
        "Depende de cómo se pagó. El pago con la reducción del 50 % dentro de los 20 días pone fin al procedimiento, supone renunciar a presentar alegaciones y deja abierta solo la vía contencioso-administrativa, con plazo desde el día siguiente al pago (artículo 94). En los demás casos, la notificación indica los recursos que caben.",
    },
    {
      pregunta: "¿Qué pasa si no pago ni recurro la multa?",
      respuesta:
        "Si no se paga ni se alega, la denuncia actúa como resolución y la sanción se puede ejecutar a los 30 días (artículo 95.4). Cuando la sanción es firme hay 15 días naturales para pagar; después se reclama por la vía de apremio con las normas de recaudación tributaria (artículo 110). Los recargos de la Ley General Tributaria son del 5 %, del 10 % o del 20 % según el momento del pago (artículo 28).",
    },
    {
      pregunta: "¿Cuándo prescribe una multa de tráfico?",
      respuesta:
        "Las infracciones leves prescriben a los 3 meses y las graves y muy graves a los 6 meses (artículo 112 del Real Decreto Legislativo 6/2015). Si pasa un año desde que se inicia el procedimiento sin resolución sancionadora, la ley prevé la caducidad.",
    },
  ];
}

const BASE: Omit<Comunidad, "faq">[] = [
  {
    slug: "andalucia",
    nombre: "Andalucía",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["sevilla", "malaga", "cordoba", "granada", "cadiz", "huelva", "jaen", "almeria"],
    capital: "Sevilla",
    foto: "/media/file_z7yQQQfi3BZBv84NP4DxRwbb.webp",
    descripcion: `${"Andalucía agrupa ocho provincias (Almería, Cádiz, Córdoba, Granada, Huelva, Jaén, Málaga y Sevilla) y tiene su capital en Sevilla. Sus carreteras interurbanas las sanciona la DGT; las vías urbanas, cada ayuntamiento."} ${radares("Andalucía", 148, [["A-7", 13], ["A-4", 12], ["A-92", 10], ["A-45", 7], ["SE-30", 6]], "Sevilla (30), Málaga (28) y Cádiz (20)")}`,
    particularidades: ["En el Punto de Acceso Nacional de la DGT constan como ZBE Sevilla (Cartuja), Málaga, Granada, Torremolinos, Dos Hermanas y Motril. Sevilla tiene dos zonas de bajas emisiones en la Isla de la Cartuja, Cartuja Norte y Cartuja Sur, aprobadas por la Resolución 8441 de 30/09/2022 y publicadas en el BOP de Sevilla núm. 245 de 22/10/2022. El régimen general rige de lunes a viernes no festivos, de 7:00 a 19:00 (fuente: Ayuntamiento de Sevilla).", radaresVia("Andalucía", [["A-7", 13], ["A-4", 12], ["A-92", 10], ["A-45", 7], ["SE-30", 6]])],
    zbe: ["Sevilla (Isla de la Cartuja)", "Málaga", "Granada", "Torremolinos", "Dos Hermanas", "Motril"],
    keywords: ["multas de tráfico en Andalucía", "cómo recurrir una multa en Andalucía", "recurso multa DGT Andalucía", "multa velocidad A-4 recurso", "zona bajas emisiones Sevilla multa", "dónde recurrir multa Andalucía 2026"],
  },
  {
    slug: "aragon",
    nombre: "Aragón",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["zaragoza", "teruel", "huesca"],
    capital: "Zaragoza",
    foto: "/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp",
    descripcion: `${"Aragón reúne tres provincias (Huesca, Teruel y Zaragoza), con capital en Zaragoza. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("Aragón", 57, [["N-330", 9], ["A-2", 6], ["A-68", 6], ["N-240", 4], ["N-232", 4]], "Zaragoza (27), Huesca (21) y Teruel (9)")}`,
    particularidades: [radaresVia("Aragón", [["N-330", 9], ["A-2", 6], ["A-68", 6], ["N-240", 4], ["N-232", 4]])],
    zbe: [],
    keywords: ["multas de tráfico en Aragón", "cómo recurrir una multa en Aragón", "recurso multa DGT Aragón", "multa radar A-2 Zaragoza recurso", "zona bajas emisiones Zaragoza multa"],
  },
  {
    slug: "asturias",
    nombre: "Asturias",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["oviedo"],
    capital: "Oviedo",
    foto: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp",
    descripcion: `${"Asturias es una comunidad uniprovincial con capital en Oviedo. La autopista AP-66 (Campomanes-León), llamada del Huerna, mide 77,8 km, de ellos 17,4 en túnel; la explota Aucalsa y su concesión, con peaje, llega hasta 2050 (Ministerio de Transportes)."} ${radares("Asturias", 22, [["A-8", 10], ["A-66", 4], ["N-632", 2], ["A-64", 2]], undefined)}`,
    particularidades: ["A 29/10/2026, el Principado y la Junta de Castilla y León han acordado acudir a los tribunales para anular el real decreto del año 2000 que prorrogó esa concesión (El Comercio).", "Oviedo consta como ZBE en el Punto de Acceso Nacional de la DGT.", radaresVia("Asturias", [["A-8", 10], ["A-66", 4], ["N-632", 2], ["A-64", 2]])],
    zbe: ["Oviedo"],
    keywords: ["multas de tráfico en Asturias", "cómo recurrir una multa en Asturias", "recurso multa DGT Asturias", "multa AP-66 radar recurso"],
  },
  {
    slug: "baleares",
    nombre: "Islas Baleares",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["palma-mallorca"],
    capital: "Palma",
    foto: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp",
    descripcion: `${"Illes Balears es una comunidad uniprovincial con capital en Palma. Las multas de sus carreteras interurbanas las sanciona la DGT; las de las calles, cada ayuntamiento."} ${radares("Baleares", 29, [["Me-1", 4], ["Ma-1", 3], ["EI-700", 3], ["Ma-13", 3]], undefined)}`,
    particularidades: ["La ZBE de Palma consta en el Punto de Acceso Nacional de la DGT: su ordenanza se publicó en el BOIB núm. 167 de 21/12/2024 y la restricción rige todos los días a todas horas (artículo 7 y anexo 2).", radaresVia("Baleares", [["Me-1", 4], ["Ma-1", 3], ["EI-700", 3], ["Ma-13", 3]])],
    zbe: ["Palma"],
    keywords: ["multas de tráfico en Baleares", "cómo recurrir una multa en Mallorca", "recurso multa DGT Baleares", "zona bajas emisiones Palma multa"],
  },
  {
    slug: "canarias",
    nombre: "Canarias",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["las-palmas", "santa-cruz-tenerife"],
    capital: "Las Palmas de Gran Canaria / Santa Cruz de Tenerife",
    foto: "/media/carta-multa-radar-buzon-cuerpo.webp",
    descripcion: `${"Canarias tiene dos provincias, Las Palmas y Santa Cruz de Tenerife, con redes viarias en islas distintas. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("Canarias", 17, [["GC-1", 5], ["TF-13", 2], ["TF-1", 2], ["FV-2", 2], ["GC-3", 2]], "Las Palmas (11) y Santa Cruz de Tenerife (6)")}`,
    particularidades: [radaresVia("Canarias", [["GC-1", 5], ["TF-13", 2], ["TF-1", 2], ["FV-2", 2], ["GC-3", 2]])],
    zbe: [],
    keywords: ["multas de tráfico en Canarias", "cómo recurrir una multa en Canarias", "recurso multa DGT Canarias", "multa TF-1 radar recurso"],
  },
  {
    slug: "cantabria",
    nombre: "Cantabria",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["santander"],
    capital: "Santander",
    foto: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp",
    descripcion: `${"Cantabria es una comunidad uniprovincial con capital en Santander. Las multas de sus carreteras interurbanas las sanciona la DGT y las de las calles, cada ayuntamiento."} ${radares("Cantabria", 10, [["A-67", 4], ["A-8", 4], ["S-10", 2]], undefined)}`,
    particularidades: [radaresVia("Cantabria", [["A-67", 4], ["A-8", 4], ["S-10", 2]])],
    zbe: [],
    keywords: ["multas de tráfico en Cantabria", "cómo recurrir una multa en Cantabria", "recurso multa DGT Cantabria", "multa A-8 radar recurso"],
  },
  {
    slug: "castilla-la-mancha",
    nombre: "Castilla-La Mancha",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["toledo", "ciudad-real", "cuenca", "guadalajara", "albacete"],
    capital: "Toledo",
    foto: "/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp",
    descripcion: `${"Castilla-La Mancha reúne cinco provincias (Albacete, Ciudad Real, Cuenca, Guadalajara y Toledo), con capital en Toledo. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("Castilla-La Mancha", 64, [["A-4", 8], ["N-320", 7], ["N-401", 4], ["A-42", 4], ["A-2", 4]], "Toledo (19), Ciudad Real (13) y Guadalajara (13)")}`,
    particularidades: [radaresVia("Castilla-La Mancha", [["A-4", 8], ["N-320", 7], ["N-401", 4], ["A-42", 4], ["A-2", 4]])],
    zbe: [],
    keywords: ["multas de tráfico en Castilla-La Mancha", "cómo recurrir una multa en Castilla-La Mancha", "recurso multa DGT Castilla-La Mancha", "multa radar A-4 recurso"],
  },
  {
    slug: "castilla-y-leon",
    nombre: "Castilla y León",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["valladolid", "burgos", "leon", "salamanca", "zamora", "palencia", "avila", "segovia", "soria"],
    capital: "Valladolid",
    foto: "/media/carta-multa-radar-buzon-cuerpo.webp",
    descripcion: `${"Castilla y León es la comunidad más extensa de España por superficie y reúne nueve provincias: Ávila, Burgos, León, Palencia, Salamanca, Segovia, Soria, Valladolid y Zamora. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("Castilla y León", 86, [["A-6", 10], ["A-62", 9], ["A-1", 5], ["AP-6", 4], ["N-122", 4]], "Burgos (16), León (14) y Valladolid (10)")}`,
    particularidades: ["En el Punto de Acceso Nacional de la DGT constan como ZBE Valladolid, Salamanca y Ávila.", radaresVia("Castilla y León", [["A-6", 10], ["A-62", 9], ["A-1", 5], ["AP-6", 4], ["N-122", 4]])],
    zbe: ["Valladolid", "Salamanca", "Ávila"],
    keywords: ["multas de tráfico en Castilla y León", "cómo recurrir una multa en Castilla y León", "recurso multa DGT Castilla y León", "multa radar A-6 recurso"],
  },
  {
    slug: "cataluna",
    nombre: "Cataluña",
    organismo: "SCT",
    organismoNombre: "Servei Català de Trànsit",
    organismoWeb: "https://transit.gencat.cat",
    provincias: ["barcelona", "lleida", "tarragona", "girona"],
    capital: "Barcelona",
    foto: "/media/barcelona-calle-trafico-cuerpo.webp",
    descripcion: "Cataluña tiene competencia propia en tráfico: el Servei Català de Trànsit instruye y resuelve los expedientes sancionadores por infracciones de tráfico y los Mossos d'Esquadra denuncian en sus carreteras. Por eso los recursos se presentan ante el Servei Català de Trànsit y no ante la DGT.",
    particularidades: ["El fichero «Radars fixos de Catalunya» del Servei Català de Trànsit, consultado el 31/10/2026, recoge emplazamientos de radar en las vías catalanas; las que más figuran son la A-2 (20), la C-31 (13) y la N-340 (13).", "En el Punto de Acceso Nacional de la DGT constan como ZBE las Rondas de Barcelona, Viladecans, Sant Joan Despí, Gavà, Granollers, El Prat de Llobregat, Cerdanyola del Vallès, Sant Boi de Llobregat, Sant Cugat del Vallès, Sabadell, Lleida, Reus y Manlleu."],
    zbe: ["Barcelona (Rondas)", "Viladecans", "Sant Joan Despí", "Gavà", "Granollers", "El Prat de Llobregat", "Cerdanyola del Vallès", "Sant Boi de Llobregat", "Sant Cugat del Vallès", "Sabadell", "Lleida", "Reus", "Manlleu"],
    keywords: ["multas de tráfico en Cataluña", "cómo recurrir una multa en Cataluña", "recurso Servei Català de Trànsit", "multa Mossos Esquadra recurrir", "ZBE Barcelona multa recurso", "dónde recurrir multa Cataluña 2026"],
  },
  {
    slug: "extremadura",
    nombre: "Extremadura",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["badajoz", "caceres"],
    capital: "Mérida",
    foto: "/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp",
    descripcion: `${"Extremadura tiene dos provincias, Badajoz y Cáceres, y su capital es Mérida. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("Extremadura", 20, [["A-5", 5], ["A-66", 3], ["N-432", 2]], "Badajoz (11) y Cáceres (9)")}`,
    particularidades: [radaresVia("Extremadura", [["A-5", 5], ["A-66", 3], ["N-432", 2]])],
    zbe: [],
    keywords: ["multas de tráfico en Extremadura", "cómo recurrir una multa en Extremadura", "recurso multa DGT Extremadura", "multa radar A-5 recurso"],
  },
  {
    slug: "galicia",
    nombre: "Galicia",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["a-coruna", "santiago-compostela", "vigo", "pontevedra", "lugo", "ourense"],
    capital: "Santiago de Compostela",
    foto: "/media/file_leMADIEj9caf7aKJnih1DhqD.webp",
    descripcion: `${"Galicia reúne cuatro provincias (A Coruña, Lugo, Ourense y Pontevedra), con capital en Santiago de Compostela. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("Galicia", 68, [["A-52", 8], ["A-6", 7], ["A-55", 6], ["N-550", 5], ["AG-11", 4]], "A Coruña (22), Pontevedra (19) y Ourense (14)")}`,
    particularidades: ["En el Punto de Acceso Nacional de la DGT constan como ZBE A Coruña y Pontevedra.", radaresVia("Galicia", [["A-52", 8], ["A-6", 7], ["A-55", 6], ["N-550", 5], ["AG-11", 4]])],
    zbe: ["A Coruña", "Pontevedra"],
    keywords: ["multas de tráfico en Galicia", "cómo recurrir una multa en Galicia", "recurso multa DGT Galicia", "multa radar AP-9 recurso", "zona bajas emisiones Vigo multa"],
  },
  {
    slug: "madrid",
    nombre: "Comunidad de Madrid",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["madrid"],
    capital: "Madrid",
    foto: "/media/file_sG1QGXHmBmVNNxxkWkdoekLf.webp",
    descripcion: `${"La Comunidad de Madrid es uniprovincial. En el municipio de Madrid, el Ayuntamiento tramita las multas de las calles; en las carreteras interurbanas, como la A-1, la A-2 o la A-6, sanciona la DGT."} ${radares("la Comunidad de Madrid", 39, [["M-40", 4], ["A-3", 3], ["A-1", 3], ["M-505", 2], ["M-404", 2]], undefined)}`,
    particularidades: ["Además de Madrid, constan como ZBE en el Punto de Acceso Nacional de la DGT Fuenlabrada, Las Rozas de Madrid y Alcalá de Henares.", radaresVia("la Comunidad de Madrid", [["M-40", 4], ["A-3", 3], ["A-1", 3], ["M-505", 2], ["M-404", 2]])],
    zbe: ["Madrid", "Fuenlabrada", "Las Rozas de Madrid", "Alcalá de Henares"],
    keywords: ["multas de tráfico en la Comunidad de Madrid", "cómo recurrir una multa en Madrid", "recurso multa M-30 radar tramo", "multa Madrid ZBE recurrir", "multa SER Madrid recurso", "dónde recurrir multa Comunidad de Madrid 2026"],
  },
  {
    slug: "murcia",
    nombre: "Región de Murcia",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["murcia"],
    capital: "Murcia",
    foto: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp",
    descripcion: `${"La Región de Murcia es uniprovincial, con capital en Murcia. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("la Región de Murcia", 14, [["A-30", 5], ["RM-11", 2]], undefined)}`,
    particularidades: ["En el Punto de Acceso Nacional de la DGT constan como ZBE Cartagena y Molina de Segura.", radaresVia("la Región de Murcia", [["A-30", 5], ["RM-11", 2]])],
    zbe: ["Cartagena", "Molina de Segura"],
    keywords: ["multas de tráfico en Murcia", "cómo recurrir una multa en Murcia", "recurso multa DGT Murcia", "multa radar A-7 Murcia recurso"],
  },
  {
    slug: "navarra",
    nombre: "Comunidad Foral de Navarra",
    organismo: "PF",
    organismoNombre: "Policía Foral de Navarra",
    organismoWeb: "https://www.navarra.es",
    provincias: ["pamplona"],
    capital: "Pamplona",
    foto: "/media/carta-multa-radar-buzon-cuerpo.webp",
    descripcion: `${"Navarra tiene competencia propia en tráfico: desde el 1 de julio de 2026 el Gobierno de Navarra gestiona, tramita, resuelve y recauda las multas de tráfico, y los recursos ya no se presentan ante la DGT. La Policía Foral, la Guardia Civil de Tráfico y las policías locales registran sus denuncias en la plataforma del Gobierno foral (Gobierno de Navarra, 30/06/2026)."} ${radares("Navarra", 7, [["N-121-A", 3], ["A-15", 1], ["AP-68", 1], ["N-113", 1], ["A-1", 1]], undefined)}`,
    particularidades: ["Para pagar con el 50 % de reducción hay 20 días naturales desde la notificación; las alegaciones también tienen 20 días naturales desde el día siguiente a la notificación y se presentan por Mi Carpeta Ciudadana en navarra.es o de forma presencial.", "La ZBE de Pamplona consta en el Punto de Acceso Nacional de la DGT como ZBE del Ensanche; su ordenanza se publicó en el Boletín Oficial de Navarra núm. 257 de 29/12/2025.", radaresVia("Navarra", [["N-121-A", 3], ["A-15", 1], ["AP-68", 1], ["N-113", 1], ["A-1", 1]])],
    zbe: ["Pamplona (Ensanche)"],
    keywords: ["multas de tráfico en Navarra", "cómo recurrir una multa en Navarra", "recurso Policía Foral multa", "multa Gobierno de Navarra recurrir", "dónde recurrir multa Navarra 2026"],
  },
  {
    slug: "pais-vasco",
    nombre: "País Vasco",
    organismo: "ERT",
    organismoNombre: "Ertzaintza / Gobierno Vasco",
    organismoWeb: "https://www.euskadi.eus",
    provincias: ["bilbao", "san-sebastian", "vitoria"],
    capital: "Vitoria-Gasteiz",
    foto: "/media/pilar-radares.webp",
    descripcion: "El País Vasco tiene competencia propia en tráfico: la Dirección de Tráfico del Gobierno Vasco ejerce la potestad sancionadora (Decreto 318/2024) y la Ertzaintza es el cuerpo que denuncia en sus vías interurbanas. Álava, Bizkaia y Gipuzkoa son sus tres provincias.",
    particularidades: ["La instrucción y la resolución de los expedientes corresponden a las Oficinas Territoriales de Tráfico de Álava, Bizkaia y Gipuzkoa, según el lugar de la infracción, o al Centro Automatizado de Tramitación de Infracciones de Tráfico (CATIT); los trámites se hacen en euskadi.eus.", "En el Punto de Acceso Nacional de la DGT constan como ZBE Bilbao, Donostia-San Sebastián y Vitoria-Gasteiz."],
    zbe: ["Bilbao", "Donostia-San Sebastián", "Vitoria-Gasteiz"],
    keywords: ["multas de tráfico en el País Vasco", "cómo recurrir una multa en Euskadi", "recurso Ertzaintza multa", "multa Gobierno Vasco recurrir", "dónde recurrir multa País Vasco 2026"],
  },
  {
    slug: "la-rioja",
    nombre: "La Rioja",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["logrono"],
    capital: "Logroño",
    foto: "/media/cuanto-tarda-en-llegar-una-multa-de-radar.webp",
    descripcion: `${"La Rioja es uniprovincial, con capital en Logroño. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("La Rioja", 13, [["AP-68", 4], ["N-232", 3], ["A-12", 2]], undefined)}`,
    particularidades: [radaresVia("La Rioja", [["AP-68", 4], ["N-232", 3], ["A-12", 2]])],
    zbe: [],
    keywords: ["multas de tráfico en La Rioja", "cómo recurrir una multa en La Rioja", "recurso multa DGT La Rioja", "multa radar AP-68 recurso"],
  },
  {
    slug: "comunidad-valenciana",
    nombre: "Comunitat Valenciana",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["valencia", "alicante", "castellon"],
    capital: "Valencia",
    foto: "/media/file_Chq0vdQj5Bt009N6mRa3YgE3.webp",
    descripcion: `${"La Comunitat Valenciana reúne tres provincias (Alicante, Castellón y Valencia), con capital en Valencia. La DGT sanciona en sus carreteras interurbanas y los ayuntamientos en sus calles."} ${radares("la Comunitat Valenciana", 79, [["N-332", 15], ["A-7", 10], ["A-70", 6], ["N-340", 6], ["AP-7", 4]], "Alicante (32), Valencia (31) y Castellón (16)")}`,
    particularidades: ["En el Punto de Acceso Nacional de la DGT constan como ZBE Castellón y Benidorm.", radaresVia("la Comunitat Valenciana", [["N-332", 15], ["A-7", 10], ["A-70", 6], ["N-340", 6], ["AP-7", 4]])],
    zbe: ["Castellón", "Benidorm"],
    keywords: ["multas de tráfico en la Comunidad Valenciana", "cómo recurrir una multa en Valencia", "recurso multa DGT Comunidad Valenciana", "multa radar AP-7 recurso", "zona bajas emisiones Valencia multa"],
  },
  {
    slug: "ceuta",
    nombre: "Ceuta",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["ceuta"],
    capital: "Ceuta",
    foto: "/media/blog-indice-guias-multas.webp",
    descripcion: "Ceuta es una ciudad autónoma en el norte de África. Las multas de sus calles las sanciona la propia administración local y las de tráfico de competencia estatal, la DGT.",
    particularidades: ["Los trámites presenciales de la DGT se piden con cita previa en la sede electrónica sede.dgt.gob.es.", "Las sanciones municipales se recurren ante la administración que las impuso: según la DGT, cada organismo gestiona sus propios expedientes."],
    zbe: [],
    keywords: ["multas de tráfico en Ceuta", "cómo recurrir una multa en Ceuta", "recurso multa Ceuta"],
  },
  {
    slug: "melilla",
    nombre: "Melilla",
    organismo: "DGT",
    organismoNombre: "Dirección General de Tráfico (DGT)",
    organismoWeb: "https://sede.dgt.gob.es",
    provincias: ["melilla"],
    capital: "Melilla",
    foto: "/media/blog-indice-guias-multas.webp",
    descripcion: "Melilla es una ciudad autónoma en el norte de África. Las multas de sus calles las sanciona la propia administración local y las de tráfico de competencia estatal, la DGT.",
    particularidades: ["Los trámites presenciales de la DGT se piden con cita previa en la sede electrónica sede.dgt.gob.es.", "Las sanciones municipales se recurren ante la administración que las impuso: según la DGT, cada organismo gestiona sus propios expedientes."],
    zbe: [],
    keywords: ["multas de tráfico en Melilla", "cómo recurrir una multa en Melilla", "recurso multa Melilla"],
  },
];

export const COMUNIDADES: Comunidad[] = BASE.map((c) => ({ ...c, faq: faqComun(c) }));

export function getComunidadBySlug(slug: string): Comunidad | undefined {
  return COMUNIDADES.find((c) => c.slug === slug);
}
