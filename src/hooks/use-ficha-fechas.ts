// E-E-A-T 17/10/2026: fechas de publicación/actualización de una ficha
// (src/lib/fichas-fechas-eeat/<inicial>.json, generado por scripts/gen-fechas-eeat.mjs).
// Carga solo el trozo de la inicial del id. publicado = null si la fecha real no consta.
import { useEffect, useState } from "react";

type Trozo = Record<string, [string | null, string]>;
const TROZOS = import.meta.glob<{ default: Trozo }>("../lib/fichas-fechas-eeat/*.json");

export interface FechasFicha {
  publicado: string | null;
  actualizado: string | null;
}

export function useFichaFechas(id: string): FechasFicha {
  const [f, setF] = useState<FechasFicha>({ publicado: null, actualizado: null });
  useEffect(() => {
    let vivo = true;
    const load = TROZOS[`../lib/fichas-fechas-eeat/${/^[a-z0-9]/.test(id) ? id[0] : "_"}.json`];
    if (!load) return;
    load()
      .then((m) => {
        const v = m.default[id];
        if (vivo && v) setF({ publicado: v[0], actualizado: v[1] });
      })
      .catch(() => {});
    return () => {
      vivo = false;
    };
  }, [id]);
  return f;
}

/** Fecha de actualización más reciente entre varias fichas (listados de marca). */
export function useUltimaActualizacion(ids: string[]): string | null {
  const [f, setF] = useState<string | null>(null);
  const clave = ids.join(",");
  useEffect(() => {
    let vivo = true;
    const iniciales = [...new Set(ids.map((id) => (/^[a-z0-9]/.test(id) ? id[0] : "_")))];
    Promise.all(iniciales.map((i) => TROZOS[`../lib/fichas-fechas-eeat/${i}.json`]?.().then((m) => m.default) ?? Promise.resolve({} as Trozo)))
      .then((trozos) => {
        let max: string | null = null;
        for (const id of ids) for (const t of trozos) if (t[id] && (!max || t[id][1] > max)) max = t[id][1];
        if (vivo) setF(max);
      })
      .catch(() => {});
    return () => {
      vivo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clave]);
  return f;
}
