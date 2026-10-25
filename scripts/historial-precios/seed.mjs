// Siembra src/data/historial-precios.json con el precio ACTUAL de cada ficha.
// - Fichas que ya están en el fichero: no se tocan nunca.
// - Fichas nuevas (con precio): 1 punto = precio de la ficha + fecha del último commit
//   que fijó ese precio (git blame); si aún no está commiteado, la fecha de hoy.
// - Nunca se inventan precios pasados.
// Primera ejecución (17/10/2026): importó además los puntos del antiguo radar de
// precios (src/lib/historico-precios.ts, 03-12/10/2026) que cuadraban con la ficha.
// Uso: node scripts/historial-precios/seed.mjs [--dry]
import { existsSync } from "node:fs";
import { leerFichas, fechasPrecio } from "./fichas.mjs";
import { DATA_FILE, cargar, guardar } from "./datos.mjs";

const dry = process.argv.includes("--dry");
const fichas = leerFichas();
const data = existsSync(DATA_FILE)
  ? cargar()
  : { _leeme: "Historial de precios de las fichas. Instrucciones en docs/HISTORIAL-PRECIOS.md. Un punto por cambio de precio: {fecha AAAA-MM-DD, precio, moneda, fuente}. Nunca inventar precios pasados.", fichas: {} };

const faltan = [...fichas.values()].filter((x) => x.precio != null && !data.fichas[x.slug] && !(data._revisar || {})[x.slug]);
const fechas = fechasPrecio(new Map(faltan.map((x) => [x.slug, x])));
const hoy = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Madrid" }).format(new Date());
for (const x of faltan) {
  const p = { fecha: fechas.get(x.slug) || hoy, precio: x.precio, moneda: "EUR", fuente: "ficha" };
  if (x.aprox) p.aprox = true;
  data.fichas[x.slug] = [p];
}
console.log(`fichas: ${fichas.size} · con precio: ${[...fichas.values()].filter((x) => x.precio != null).length} · añadidas ahora: ${faltan.length} · en el historial: ${Object.keys(data.fichas).length}`);
if (!dry) guardar(data);
