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
  const tag = "[Ficha 2026]";
  if (hero && precio)
    return pick([
      `${nombre}: ${hero} ${precio} ${tag}`,
      `${nombre}: ${hero} ${precio} (2026)`,
      `${nombre}: ${hero} ${precio}`,
      `${nombre}: ${hero} (2026)`,
      `${nombre} (2026)`,
    ]);
  if (hero) return pick([`${nombre}: ${hero} ${tag}`, `${nombre}: ${hero} (2026)`, `${nombre} (2026)`]);
  if (precio) return pick([`${nombre}: ${precio} ${tag}`, `${nombre}: ${precio} (2026)`, `${nombre} (2026)`]);
  return pick([`${nombre}: ficha técnica ${tag}`, `${nombre} (2026)`]);
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
  let hero = "";
  if (cc && m.potenciaCv) hero = `${cc} cc y ${m.potenciaCv} CV`;
  else if (m.potenciaCv) hero = `${m.potenciaCv} CV`;
  else if (m.potenciaKw) hero = `${m.potenciaKw} kW`;
  else if (cc) hero = `${cc} cc`;
  const tag = "[Ficha 2026]";
  if (hero && precio)
    return pick([
      `${nombre}: ${hero} ${precio} ${tag}`,
      `${nombre}: ${hero} ${precio} (2026)`,
      `${nombre}: ${hero} ${precio}`,
      `${nombre}: ${hero} (2026)`,
      `${nombre} (2026)`,
    ]);
  if (hero) return pick([`${nombre}: ${hero} ${tag}`, `${nombre}: ${hero} (2026)`, `${nombre} (2026)`]);
  if (precio) return pick([`${nombre}: ${precio} ${tag}`, `${nombre} (2026)`]);
  return pick([`${nombre}: ficha técnica ${tag}`, `${nombre} (2026)`]);
}

export interface SpecsPatinete {
  autonomiaKm?: number | null;
  potenciaPicoW?: number | null;
  precioEur?: number | null;
}

export function tituloFichaPatinete(nombre: string, p: SpecsPatinete): string {
  const precio = p.precioEur ? `desde ${fmtPrecio(p.precioEur)} €` : "";
  const hero = p.autonomiaKm ? `${p.autonomiaKm} km` : p.potenciaPicoW ? `${p.potenciaPicoW} W` : "";
  const tag = "[Ficha 2026]";
  if (hero && precio)
    return pick([
      `${nombre}: ${hero} ${precio} ${tag}`,
      `${nombre}: ${hero} ${precio} (2026)`,
      `${nombre}: ${hero} ${precio}`,
      `${nombre}: ${hero} (2026)`,
      `${nombre} (2026)`,
    ]);
  if (hero) return pick([`${nombre}: ${hero} ${tag}`, `${nombre}: ${hero} (2026)`, `${nombre} (2026)`]);
  if (precio) return pick([`${nombre}: ${precio} ${tag}`, `${nombre} (2026)`]);
  return pick([`${nombre}: ficha técnica ${tag}`, `${nombre} (2026)`]);
}
