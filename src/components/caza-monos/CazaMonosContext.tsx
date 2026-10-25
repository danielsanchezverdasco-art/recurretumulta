// Caza de monos — contexto global (05/10/2026).
// Guarda en localStorage el array de IDs de monos cazados. Sin registros ni cuentas.
// Clave: "cosa-monos-encontrados".
//
// IDs:
// - Aleatorios: "r:<ruta>:<token>" (token generado en scripts/gen-caza-monos.mjs, no adivinable).
// - Fijos: "f:<nombre>:<token>" vía fijoId(nombre).
//
// El estado se inicializa VACÍO y se hidrata en useEffect: así el primer render
// del cliente coincide con el HTML prerenderizado (sin mismatch de hidratación).
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { TOKENS_FIJOS, TOTAL_MONOS_ALEATORIOS, TOTAL_MONOS_FIJOS } from "./placements.generated";

// ScoreReporter (ranking Convex): lazy, solo se monta si hay ≥1 mono cazado.
// Sin esto, convex/react entraba en el chunk inicial vía este provider.
const ScoreReporter = lazy(() => import("./ScoreReporter.tsx"));

export const TEMPORADA_ACTUAL = 1; // Temporada 1: octubre 2026
export const MONOS_OBJETIVO = 350; // meta de la Temporada 1 (ampliada de 250 a 350 el 13/10/2026)
export const MONOS_TOTAL_COLOCADOS = TOTAL_MONOS_ALEATORIOS + TOTAL_MONOS_FIJOS; // 350: 333 aleatorios + 1 legendario (cuenta igual) + 16 fijos
const STORAGE_KEY = "cosa-monos-encontrados";
const UUID_KEY = "cosa-cazador-id"; // spec de Daniel 05/10/2026
const APODO_KEY = "cosa-cazador-apodo"; // spec de Daniel 05/10/2026
// Claves antiguas (migración silenciosa una sola vez).
const UUID_KEY_VIEJA = "caza-monos-uuid";
const APODO_KEY_VIEJA = "caza-monos-apodo";

/** ID único de un mono fijo fácil. */
export function fijoId(nombre: string): string {
  const token = TOKENS_FIJOS[nombre];
  if (!token) throw new Error(`Mono fijo desconocido: ${nombre}`);
  return `f:${nombre}:${token}`;
}

/** ID único de un mono aleatorio de una ruta. */
export function rutaId(ruta: string, token: string): string {
  return `r:${ruta}:${token}`;
}

/** ID único del mono legendario dorado (1 por temporada). */
export function legendarioId(ruta: string, token: string): string {
  return `l:${ruta}:${token}`;
}

interface CazaMonosContextValue {
  encontrados: string[];
  total: number;
  objetivo: number;
  yaEncontrado: (id: string) => boolean;
  cazar: (id: string) => void;
  uuid: string;
  apodo: string;
  setApodo: (a: string) => void;
}

const CazaMonosContext = createContext<CazaMonosContextValue | null>(null);

function leerStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function leerStorageStr(key: string, fallbackKey?: string): string {
  try {
    const v = localStorage.getItem(key);
    if (v) return v;
    // Migración silenciosa desde la clave antigua (una sola vez).
    if (fallbackKey) {
      const vieja = localStorage.getItem(fallbackKey);
      if (vieja) {
        localStorage.setItem(key, vieja);
        return vieja;
      }
    }
    return "";
  } catch {
    return "";
  }
}

function obtenerOCrearUuid(): string {
  try {
    let u = localStorage.getItem(UUID_KEY) ?? localStorage.getItem(UUID_KEY_VIEJA);
    if (!u) {
      u = (typeof crypto !== "undefined" && "randomUUID" in crypto)
        ? crypto.randomUUID()
        : `m-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    }
    localStorage.setItem(UUID_KEY, u);
    return u;
  } catch {
    return `m-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

export function CazaMonosProvider({ children }: { children: ReactNode }) {
  const [encontrados, setEncontrados] = useState<string[]>([]);
  const [uuid] = useState<string>(obtenerOCrearUuid);
  const [apodo, setApodoState] = useState<string>(() => leerStorageStr(APODO_KEY, APODO_KEY_VIEJA));
  // NOTA (07/10/2026, PageSpeed): la sincronización con el ranking Convex vive
  // en <ScoreReporter/> (lazy). Este provider ya no importa convex/react.

  // Hidratación diferida: evita mismatch con el prerender.
  useEffect(() => {
    setEncontrados(leerStorage());
  }, []);

  const setApodo = useCallback((a: string) => {
    const limpio = a.trim().slice(0, 24);
    setApodoState(limpio);
    try {
      localStorage.setItem(APODO_KEY, limpio);
    } catch {
      /* no persiste */
    }
  }, []);

  // Sincronización con el ranking: delegada a <ScoreReporter/> (lazy, con
  // convex/react). Solo se monta cuando hay ≥1 mono cazado.

  const cazar = useCallback((id: string) => {
    setEncontrados((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* almacenamiento no disponible: el contador vive solo en memoria */
      }
      return next;
    });
  }, []);

  const yaEncontrado = useCallback((id: string) => encontrados.includes(id), [encontrados]);

  const value = useMemo<CazaMonosContextValue>(
    () => ({
      encontrados,
      total: encontrados.length,
      objetivo: MONOS_OBJETIVO,
      yaEncontrado,
      cazar,
      uuid,
      apodo,
      setApodo,
    }),
    [encontrados, yaEncontrado, cazar, uuid, apodo, setApodo]
  );

  return (
    <CazaMonosContext.Provider value={value}>
      {children}
      {encontrados.length > 0 && (
        <Suspense fallback={null}>
          <ScoreReporter total={encontrados.length} apodo={apodo} uuid={uuid} />
        </Suspense>
      )}
    </CazaMonosContext.Provider>
  );
}

export function useCazaMonos(): CazaMonosContextValue {
  const ctx = useContext(CazaMonosContext);
  if (!ctx) throw new Error("useCazaMonos debe usarse dentro de <CazaMonosProvider>");
  return ctx;
}
