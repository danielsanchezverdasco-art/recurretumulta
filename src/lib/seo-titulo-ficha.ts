import { fmtMiles } from "@/lib/formato.ts";
// Títulos SEO de fichas de vehículos — fórmula ganadora (metodología CTR 07/10/2026,
// aprobada por Daniel; estándar profesional investigado el 07/10/2026).
//
// Fórmula: [Keyword al inicio] + [número] + [beneficio] + [(año/formato)]
//   - Números en el título: +36% clics (estudio Conductor/WordStream)
//   - Corchetes [Ficha 2026]: +33% vistas (HubSpot/Outbrain)
//   - 40-60 caracteres: rango óptimo (Backlinko, 4M resultados)
//   - Tono positivo, sin preguntas (no mejoran CTR)
// Garantías: siempre ≤60 car. (filtro SEO), siempre con número si hay dato real.
// Sin datos GSC para fichas (tráfico orgánico aún bajo): criterio profesional.

// 18/10/2026: separador de miles siempre («8.299», no «8299»).
const fmtPrecio = (p: number): string => fmtMiles(Math.round(p));

// 23/10/2026 (AdSense punto 6): anti-duplicación de títulos.
// El nombre ya suele traer el dato («Alfa Romeo Giulia Veloce 2.0 Turbo 280 CV»,
// «KTM 690 SMC R», «Nissan Leaf 2026»): si el hero o el año ya están en el nombre,
// no se repiten en el título («…280 CV: 280 CV…», «…2026 (2026)»).
function partesUnicas(nombre: string, partes: string[]): string[] {
  const rx = (s: string) =>
    new RegExp(`\\b${s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")}\\b`, "i");
  return partes.filter((p) => {
    if (rx(p).test(nombre)) return false;
    // El número del nombre suele SER el dato («C3 1.2 Turbo 100» = 100 CV,
    // «RS 125» = 125 cc): no repetirlo como hero («…100: 100 CV…»).
    const num = p.match(/^([\d.,]+)/)?.[1];
    if (num && rx(num).test(nombre)) return false;
    return true;
  });
}
const sinAnioFinal = (nombre: string): string => nombre.replace(/\s*\(?20\d{2}\)?\s*$/, "");

function pick(cands: string[]): string {
  for (const c of cands) if (c.length <= 60) return c;
  return cands[cands.length - 1].slice(0, 60);
}

export interface SpecsCoche {
  tipo?: string | null;
  potenciaCv?: number | null;
  autonomiaKm?: number | null;
  precioDesde?: number | null;
}

export function tituloFichaCoche(nombre: string, c: SpecsCoche): string {
  const precio = c.precioDesde ? `desde ${fmtPrecio(c.precioDesde)} €` : "";
  const esEV = /el[eé]ctrico/i.test(c.tipo ?? "");
  let hero = "";
  if (esEV && c.autonomiaKm) hero = `${c.autonomiaKm} km`;
  else if (c.potenciaCv) hero = `${c.potenciaCv} CV`;
  else if (c.autonomiaKm) hero = `${c.autonomiaKm} km`;
  hero = partesUnicas(nombre, hero ? [hero] : [])[0] ?? "";
  const tag = "[Ficha 2026]";
  const base = sinAnioFinal(nombre);
  if (hero && precio)
    return pick([
      `${nombre}: ${hero} ${precio} ${tag}`,
      `${base}: ${hero} ${precio} (2026)`,
      `${nombre}: ${hero} ${precio}`,
      `${base}: ${hero} (2026)`,
      `${base} (2026)`,
    ]);
  if (hero)
    return pick([
      `${nombre}: ${hero} ${tag}`,
      `${base}: ${hero} (2026)`,
      `${base} (2026)`,
    ]);
  if (precio)
    return pick([
      `${nombre}: ${precio} ${tag}`,
      `${base}: ${precio} (2026)`,
      `${base} (2026)`,
    ]);
  return pick([`${nombre} ${tag}`, `${base} (2026)`]);
}

export interface SpecsMoto {
  potenciaCv?: number | null;
  potenciaKw?: number | null;
  cilindradaCc?: number | null;
  precioDesde?: number | null;
}

export function tituloFichaMoto(nombre: string, m: SpecsMoto): string {
  const precio = m.precioDesde ? `desde ${fmtPrecio(m.precioDesde)} €` : "";
  const cc = m.cilindradaCc ? Math.round(m.cilindradaCc) : null;
  let heroParts: string[] = [];
  if (cc && m.potenciaCv) heroParts = [`${cc} cc`, `${m.potenciaCv} CV`];
  else if (m.potenciaCv) heroParts = [`${m.potenciaCv} CV`];
  else if (m.potenciaKw) heroParts = [`${m.potenciaKw} kW`];
  else if (cc) heroParts = [`${cc} cc`];
  heroParts = partesUnicas(nombre, heroParts);
  const hero = heroParts.join(" y ");
  const tag = "[Ficha 2026]";
  const base = sinAnioFinal(nombre);
  if (hero && precio)
    return pick([
      `${nombre}: ${hero} ${precio} ${tag}`,
      `${base}: ${hero} ${precio} (2026)`,
      `${nombre}: ${hero} ${precio}`,
      `${base}: ${hero} (2026)`,
      `${base} (2026)`,
    ]);
  if (hero)
    return pick([
      `${nombre}: ${hero} ${tag}`,
      `${base}: ${hero} (2026)`,
      `${base} (2026)`,
    ]);
  if (precio)
    return pick([
      `${nombre}: ${precio} ${tag}`,
      `${base} (2026)`,
    ]);
  return pick([`${nombre} ${tag}`, `${base} (2026)`]);
}

export interface SpecsPatinete {
  autonomiaKm?: number | null;
  potenciaPicoW?: number | null;
  precioEur?: number | null;
}

export function tituloFichaPatinete(nombre: string, p: SpecsPatinete): string {
  const precio = p.precioEur ? `desde ${fmtPrecio(p.precioEur)} €` : "";
  const heroBase = p.autonomiaKm ? `${p.autonomiaKm} km` : p.potenciaPicoW ? `${p.potenciaPicoW} W` : "";
  const hero = partesUnicas(nombre, heroBase ? [heroBase] : [])[0] ?? "";
  const tag = "[Ficha 2026]";
  const base = sinAnioFinal(nombre);
  if (hero && precio)
    return pick([
      `${nombre}: ${hero} ${precio} ${tag}`,
      `${base}: ${hero} ${precio} (2026)`,
      `${nombre}: ${hero} ${precio}`,
      `${base}: ${hero} (2026)`,
      `${base} (2026)`,
    ]);
  if (hero)
    return pick([
      `${nombre}: ${hero} ${tag}`,
      `${base}: ${hero} (2026)`,
      `${base} (2026)`,
    ]);
  if (precio)
    return pick([
      `${nombre}: ${precio} ${tag}`,
      `${base} (2026)`,
    ]);
  return pick([`${nombre} ${tag}`, `${base} (2026)`]);
}
