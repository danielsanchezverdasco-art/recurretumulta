// Listado central de herramientas gratuitas del sitio.
// Añadir aquí cualquier herramienta nueva para que aparezca automáticamente
// en el desplegable de navegación, el índice /herramientas y el sitemap.
export type Herramienta = {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  categoria: string;
};

export const CATEGORIAS_HERRAMIENTAS = [
  "Multas y normativa",
  "Comparadores",
  "Calculadoras",
  "Cada día",
] as const;

export const HERRAMIENTAS: Herramienta[] = [
  {
    slug: "calculadora-kw-a-cv",
    nombre: "Calculadora kW a CV",
    descripcionCorta: "Convierte la potencia de tu vehículo entre kilovatios y caballos de vapor.",
    categoria: "Calculadoras",
  },
  {
    slug: "calculadora-consumo-camper",
    nombre: "Calculadora de consumo camper",
    descripcionCorta: "Calcula el consumo energético de tu camper en Wh/día y descubre qué batería necesitas (Ah a 12 V, autonomía y AGM vs litio).",
    categoria: "Calculadoras",
  },
  {
    slug: "equivalencia-neumaticos-itv",
    nombre: "Equivalencia de neumáticos e ITV",
    descripcionCorta: "Comprueba equivalencias de medidas de neumáticos y su relación con la ITV.",
    categoria: "Calculadoras",
  },
  {
    slug: "valor-venal-vehiculo",
    nombre: "Valor venal del vehículo",
    descripcionCorta: "Consulta cómo se calcula el valor venal de tu vehículo.",
    categoria: "Calculadoras",
  },
  {
    slug: "calculadora-autonomia-real",
    nombre: "Calculadora de autonomía real",
    descripcionCorta: "Estima la autonomía real de tu eléctrico según WLTP, temperatura, velocidad y climatización.",
    categoria: "Calculadoras",
  },
  {
    slug: "calculadora-etiqueta-dgt",
    nombre: "Calculadora de etiqueta DGT",
    descripcionCorta: "Descubre qué etiqueta ambiental de la DGT le corresponde a tu coche (Cero, ECO, B o C).",
    categoria: "Calculadoras",
  },
  {
    slug: "reportar-carretera",
    nombre: "Reportar carretera en mal estado",
    descripcionCorta: "¿Bache o señal dañada? Manda fotos y ubicación: presentamos la reclamación ante la administración gratis.",
    categoria: "Multas y normativa",
  },
  {
    slug: "buscador-codigo-multa",
    nombre: "Buscador de infracciones por código",
    descripcionCorta: "Escribe el código o artículo de tu multa y descubre el importe, los puntos, la gravedad y la base legal.",
    categoria: "Multas y normativa",
  },
  {
    slug: "senales-trafico",
    nombre: "Diccionario de señales de tráfico",
    descripcionCorta: "Qué significa cada señal, qué debes hacer y qué multa te cae si la ignoras. Buscador con las 43 más buscadas.",
    categoria: "Multas y normativa",
  },
  {
    slug: "mejor-coche-por-presupuesto",
    nombre: "Mejor coche por menos de X €",
    descripcionCorta: "Mete tu presupuesto y elige motor: te recomendamos los coches nuevos que entran en él, con precios PVP verificados.",
    categoria: "Comparadores",
  },
  {
    slug: "comparador-coches",
    nombre: "Comparador de coches",
    descripcionCorta: "Enfrenta dos modelos lado a lado: precio, autonomía, batería, consumo y etiqueta DGT.",
    categoria: "Comparadores",
  },
  {
    slug: "comparador-motos",
    nombre: "Comparador de motos",
    descripcionCorta: "Compara dos motos: precio, potencia, consumo y cilindrada, con pros y contras.",
    categoria: "Comparadores",
  },
  {
    slug: "comparador-patinetes",
    nombre: "Comparador de patinetes eléctricos",
    descripcionCorta: "Enfrenta dos patinetes: precio, potencia, autonomía real, peso y certificado DGT, con búsqueda libre por IA.",
    categoria: "Comparadores",
  },
  {
    slug: "comparador-garantia-bateria",
    nombre: "Garantía de batería: ranking",
    descripcionCorta: "Qué marcas dan más garantía de batería para su coche eléctrico, ordenadas por años y kilómetros.",
    categoria: "Comparadores",
  },
  {
    slug: "rankings",
    nombre: "Rankings de coches",
    descripcionCorta: "Los eléctricos más baratos, los SUV con más autonomía y los mejores híbridos, ordenados con datos reales.",
    categoria: "Comparadores",
  },
  {
    slug: "calendario-lanzamientos-2026-2027",
    nombre: "Calendario de lanzamientos 2026-2027",
    descripcionCorta: "Qué coches llegan a España en 2026 y 2027: fechas previstas, segmentos y modelos confirmados.",
    categoria: "Comparadores",
  },
  {
    slug: "el-dato-del-dia",
    nombre: "El dato del día",
    descripcionCorta: "Cada día, una cifra del motor o de las multas explicada en dos frases, siempre con fuente oficial.",
    categoria: "Cada día",
  },
  {
    slug: "la-pregunta-del-dia",
    nombre: "La pregunta del día",
    descripcionCorta: "Cada día respondemos la duda que más busca la gente sobre coches, multas y normativa.",
    categoria: "Cada día",
  },
  {
    slug: "calculadora-alcoholemia",
    nombre: "Calculadora de alcoholemia",
    descripcionCorta: "Estima tu tasa de alcohol en sangre con la fórmula de Widmark: peso, sexo, bebidas y horas. Orientativa y sin registro.",
    categoria: "Multas y normativa",
  },
  {
    slug: "herramientas/contrato-compraventa-vehiculo",
    nombre: "Contrato de compraventa de vehículo",
    descripcionCorta: "Genera tu contrato de compraventa entre particulares: rellena los datos y descarga el documento en PDF listo para firmar.",
    categoria: "Multas y normativa",
  },
  {
    slug: "herramientas/precio-itv",
    nombre: "Precio de la ITV por comunidad",
    descripcionCorta: "Cuánto cuesta pasar la ITV de tu turismo en 2026 según tu comunidad autónoma, con tabla comparativa.",
    categoria: "Calculadoras",
  },
];
