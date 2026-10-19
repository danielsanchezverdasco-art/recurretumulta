// Carga perezosa del historial de precios de una ficha (un trozo JSON por inicial).
// Lo comparten el bloque HistorialPrecios y la respuesta rápida GEO.
import { useEffect, useState } from "react";

export interface PuntoGen {
  f: string; // fecha AAAA-MM-DD
  p: number; // precio
  m?: string; // moneda (por defecto EUR)
  s?: string; // fuente (por defecto: la propia ficha)
  a?: 1; // precio aproximado
}
type Trozo = Record<string, PuntoGen[]>;

const TROZOS = import.meta.glob<{ default: Trozo }>("./historial-precios-gen/*.json");

export async function cargarHistorial(slug: string): Promise<PuntoGen[] | null> {
  const ini = /^[a-z0-9]/.test(slug) ? slug[0] : "_";
  const load = TROZOS[`./historial-precios-gen/${ini}.json`];
  if (!load) return null;
  const mod = await load();
  return mod.default[slug] ?? null;
}

/** undefined = cargando; null = sin historial. */
export function useHistorialPrecios(slug: string): PuntoGen[] | null | undefined {
  const [estado, setEstado] = useState<{ slug: string; puntos: PuntoGen[] | null } | null>(null);
  useEffect(() => {
    let vivo = true;
    cargarHistorial(slug).then(
      (p) => vivo && setEstado({ slug, puntos: p }),
      () => vivo && setEstado({ slug, puntos: null }),
    );
    return () => {
      vivo = false;
    };
  }, [slug]);
  return estado && estado.slug === slug ? estado.puntos : undefined;
}
