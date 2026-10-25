// Tarifas de la ITV 2026 por comunidad autónoma (turismos).
// Precios FINALES en caja: IVA + tasa de Tráfico (4,18 € en 2026) incluidos.
// Fuentes verificadas en hidden_files/fuentes-itv-2026.md (FACUA sep-2026, BOA, BOPA,
// DOCV, Autohero, itvcitaprevia). Sin dato verificado -> null ("consultar").

export const ANO_TARIFAS_ITV = 2026;
export const TASA_TRAFICO_2026 = 4.18;

export type TarifaITVTerritorio = {
  id: string;
  nombre: string;
  /** Precio final gasolina; null = sin dato verificado. */
  gasolina: number | null;
  /** Precio final diésel; null = sin dato verificado. */
  diesel: number | null;
  /** Rango [min, max] cuando la tarifa varía (p. ej. por cilindrada). */
  rangoGasolina?: [number, number];
  rangoDiesel?: [number, number];
  nota?: string;
  fuente: string;
};

export const PRECIOS_ITV_2026: TarifaITVTerritorio[] = [
  {
    id: "andalucia",
    nombre: "Andalucía",
    gasolina: 33.28,
    diesel: 38.39,
    rangoGasolina: [33.28, 43.52],
    rangoDiesel: [38.39, 48.62],
    nota: "La tarifa varía por cilindrada: gasolina de 33,28 € (<1.600 cc) a 43,52 €; diésel de 38,39 € a 48,62 €.",
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "aragon",
    nombre: "Aragón",
    gasolina: 49.56,
    diesel: 60.76,
    fuente: "BOA ORDEN PEJ/1853/2025",
  },
  {
    id: "asturias",
    nombre: "Asturias",
    gasolina: 45.32,
    diesel: 45.32,
    fuente: "BOPA (ITVASA) 2026",
  },
  {
    id: "baleares-mallorca",
    nombre: "Islas Baleares (Mallorca)",
    gasolina: 21.19,
    diesel: 35.1,
    nota: "Las tarifas en Baleares dependen de cada consell insular.",
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "baleares-menorca",
    nombre: "Islas Baleares (Menorca)",
    gasolina: 35.1,
    diesel: 35.1,
    nota: "Las tarifas en Baleares dependen de cada consell insular.",
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "canarias",
    nombre: "Canarias",
    gasolina: 42.07,
    diesel: 51.44,
    nota: "En Canarias se aplica el IGIC (7 %) en lugar del IVA.",
    fuente: "Autohero, comparativa ago-2026",
  },
  {
    id: "cantabria",
    nombre: "Cantabria",
    gasolina: 55.25,
    diesel: 61.98,
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "castilla-la-mancha",
    nombre: "Castilla-La Mancha",
    gasolina: 44.5,
    diesel: 57.23,
    fuente: "itvcitaprevia.es, ene-2026",
  },
  {
    id: "castilla-leon",
    nombre: "Castilla y León",
    gasolina: 51.18,
    diesel: 60.51,
    fuente: "Resolución DG Industria 12-dic-2025",
  },
  {
    id: "cataluna",
    nombre: "Cataluña",
    gasolina: 40.6,
    diesel: 45.59,
    fuente: "barcelonaurbana.com / Autohero 2026",
  },
  {
    id: "valenciana",
    nombre: "Comunidad Valenciana",
    gasolina: 41.47,
    diesel: 56.15,
    fuente: "DOCV vía itvcitaprevia.es",
  },
  {
    id: "extremadura-publicas",
    nombre: "Extremadura (estaciones públicas)",
    gasolina: 33.43,
    diesel: 33.43,
    nota: "En estaciones privadas la tarifa es de 46,66 €.",
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "extremadura-privadas",
    nombre: "Extremadura (estaciones privadas)",
    gasolina: 46.66,
    diesel: 46.66,
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "galicia",
    nombre: "Galicia",
    gasolina: 43.76,
    diesel: 52.3,
    fuente: "itvcitaprevia.es, ene-2026",
  },
  {
    id: "la-rioja",
    nombre: "La Rioja",
    gasolina: 41.8,
    diesel: 47.61,
    nota: "Tarifas máximas fijadas por el Gobierno de La Rioja; la estación puede cobrar menos.",
    fuente: "Gobierno de La Rioja vía itvcitaprevia.es",
  },
  {
    id: "madrid",
    nombre: "Comunidad de Madrid",
    gasolina: 42.01,
    diesel: 51.04,
    nota: "Precio medio: en Madrid las tarifas están liberalizadas y varían según la estación. Compara antes de pedir cita.",
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "murcia",
    nombre: "Región de Murcia",
    gasolina: 42.18,
    diesel: 54.01,
    nota: "Precio medio: en Murcia las tarifas están liberalizadas y varían según la estación.",
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "navarra",
    nombre: "Navarra",
    gasolina: 49.53,
    diesel: 54.75,
    fuente: "itvcitaprevia.es, ene-2026",
  },
  {
    id: "pais-vasco",
    nombre: "País Vasco (Euskadi)",
    gasolina: 59.46,
    diesel: 61.92,
    fuente: "FACUA, estudio sep-2026",
  },
  {
    id: "ceuta",
    nombre: "Ceuta",
    gasolina: null,
    diesel: null,
    nota: "Sin dato oficial verificado para 2026: consulta la tarifa en tu estación.",
    fuente: "",
  },
  {
    id: "melilla",
    nombre: "Melilla",
    gasolina: null,
    diesel: null,
    nota: "Sin dato oficial verificado para 2026: consulta la tarifa en tu estación.",
    fuente: "",
  },
];

export function formatoEuros(n: number): string {
  return n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}
