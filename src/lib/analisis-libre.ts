// ── Análisis gratis sin registro ────────────────────────────────────────────
// El análisis es libre: solo se pide registro al descargar/pagar el documento.

// Fingerprint anónimo (localStorage) para el rate limiting del backend.
export function getAnonymousFingerprint(): string {
  const KEY = "rtm_anon_fp";
  try {
    let fp = localStorage.getItem(KEY);
    if (!fp) {
      fp = (crypto.randomUUID ? crypto.randomUUID() : `fp-${Date.now()}-${Math.random().toString(36).slice(2)}`);
      localStorage.setItem(KEY, fp);
    }
    return fp;
  } catch {
    return `fp-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

// Estado pendiente para retomar tras el login: el usuario analizó sin cuenta,
// pulsó "descargar", se registró y volvió. Se restaura su resultado.
const PENDING_KEY = "rtm_pending_download";
export type PendingDownload = {
  tipo: "multa" | "sancion";
  result: unknown;
  nombre: string;
  dni: string;
  domicilio: string;
  action: "pdf" | "pack10" | "gratis";
};
export function savePendingDownload(p: PendingDownload) {
  try { localStorage.setItem(PENDING_KEY, JSON.stringify(p)); } catch { /* noop */ }
}
export function takePendingDownload(tipo: "multa" | "sancion"): PendingDownload | null {
  try {
    const raw = localStorage.getItem(PENDING_KEY);
    if (!raw) return null;
    localStorage.removeItem(PENDING_KEY);
    const p = JSON.parse(raw) as PendingDownload;
    return p && p.tipo === tipo ? p : null;
  } catch { return null; }
}

// ── Timeout para las llamadas a la IA ───────────────────────────────────────
// Si la promesa de Convex (WebSocket) se queda colgada —p. ej. por un corte de
// red en el móvil—, no dejamos la UI en "procesando" para siempre: a los 100s
// fallamos con un error claro y botón de reintentar.
// 13/10/2026: 200s — el backend puede esperar hasta ~60s por análisis y por carta
// a que Groq (plan gratuito) libere cuota.
export const ANALISIS_TIMEOUT_MS = 200_000;
export class AnalisisTimeoutError extends Error {
  constructor() { super("timeout"); this.name = "AnalisisTimeoutError"; }
}
export function withAnalisisTimeout<T>(promise: Promise<T>): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new AnalisisTimeoutError()), ANALISIS_TIMEOUT_MS);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer!));
}
