// Guarda en src/data/historial-precios.json los cambios de docs/precios/cambios-precio.csv
// (columnas: slug,fecha,precio_anterior,precio_nuevo,moneda,fuente_url).
// Deduplica: volver a ejecutarlo con el mismo CSV no añade nada.
// Uso: node scripts/historial-precios/importar-csv.mjs [ruta.csv] [--dry]
import { leerFichas } from "./fichas.mjs";
import { CSV_FILE, cargar, guardar, leerCsvSiExiste, mezclarCsv } from "./datos.mjs";

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const ruta = args.find((a) => !a.startsWith("--")) || CSV_FILE;
const filas = leerCsvSiExiste(ruta);
if (!filas.length) { console.log(`Sin filas en ${ruta}`); process.exit(0); }
const data = cargar();
const { nuevos, avisos } = mezclarCsv(data, filas, leerFichas());
for (const a of avisos) console.warn("⚠", a);
console.log(`${filas.length} filas leídas · ${nuevos} puntos nuevos o corregidos · ${avisos.length} avisos${dry ? " (simulación, no se guarda)" : ""}`);
if (!dry && nuevos) guardar(data);
