// Monitor diario TEU (MVP). Uso: node scripts/teu-monitor/monitor.ts [AAAAMMDD] [--max N]
// Solo suscriptores MOCK. No imprime DNI ni matrículas de terceros: solo coincidencias con los mocks y recuentos.
import { execFileSync } from "node:child_process";
import { anunciosTraficoDelIndice, parsearAnuncio, cruzar, urlIndiceTEU, type MultaTEU } from "./parser.ts";
import { SUSCRIPTORES_MOCK } from "./mock-suscriptores.ts";

const UA = { "User-Agent": "recurretumulta-teu-monitor/0.1 (+https://recurretumulta.online)" };

async function sumarioOficial(fecha: string) {
  // API oficial de datos abiertos: confirma que hay BOE ese día (el TEU no tiene API propia).
  const r = await fetch(`https://boe.es/datosabiertos/api/boe/sumario/${fecha}`, { headers: { Accept: "application/json", ...UA } });
  return r.status === 200;
}

async function main() {
  const args = process.argv.slice(2);
  const fecha = args.find((a) => /^\d{8}$/.test(a)) ?? new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const max = Number(args[args.indexOf("--max") + 1]) || 20;
  if (!(await sumarioOficial(fecha))) { console.log(`Sin BOE el ${fecha}`); return; }
  const html = await (await fetch(urlIndiceTEU(fecha), { headers: UA })).text();
  const anuncios = anunciosTraficoDelIndice(html);
  const multas: MultaTEU[] = [];
  for (const a of anuncios.slice(0, max)) {
    const pdf = Buffer.from(await (await fetch(a.urlPdf, { headers: UA })).arrayBuffer());
    const texto = execFileSync("pdftotext", ["-layout", "-", "-"], { input: pdf }).toString("utf8");
    multas.push(...parsearAnuncio(a.id, texto));
  }
  const faltan: Record<string, number> = {};
  for (const m of multas) for (const f of m.faltan) faltan[f] = (faltan[f] ?? 0) + 1;
  const hits = cruzar(multas, SUSCRIPTORES_MOCK);
  console.log(JSON.stringify({ fecha, anunciosTrafico: anuncios.length, procesados: Math.min(max, anuncios.length), filas: multas.length, camposQueFaltan: faltan, coincidenciasMock: hits }, null, 2));
}
main().catch((e) => { console.error(e); process.exit(1); });
