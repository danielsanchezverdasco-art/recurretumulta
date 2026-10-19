// Audiencia (18/10/2026): utilidades de cliente, sin datos personales.
// - votante: id aleatorio persistente en localStorage (en Convex solo se guarda su hash).
// - sesión: id aleatorio en sessionStorage (deduplicar visitas por sesión).
// Nada de esto se ejecuta en el prerender ni en bots.

export type TipoFicha = "coches" | "motos" | "patinetes";

function uuid(): string {
  const c = globalThis.crypto as Crypto;
  if (typeof c.randomUUID === "function") return c.randomUUID();
  const b = new Uint8Array(16);
  c.getRandomValues(b);
  return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}

let memVotante: string | null = null;
let memSesion: string | null = null;

export function idVotante(): string {
  try {
    let id = localStorage.getItem("rtm-votante");
    if (!id) {
      id = uuid();
      localStorage.setItem("rtm-votante", id);
    }
    return id;
  } catch {
    return (memVotante ??= uuid());
  }
}

export function idSesion(): string {
  try {
    let id = sessionStorage.getItem("rtm-sesion");
    if (!id) {
      id = uuid();
      sessionStorage.setItem("rtm-sesion", id);
    }
    return id;
  } catch {
    return (memSesion ??= uuid());
  }
}

/** true en el prerender (navegador automatizado) y en bots conocidos. */
export function esAutomatizado(): boolean {
  if (typeof navigator === "undefined") return true;
  // ?audiencia-test permite probar la sección en Chrome headless (capturas/QA).
  if (typeof location !== "undefined" && /[?&]audiencia-test\b/.test(location.search)) return false;
  if (navigator.webdriver) return true;
  return /bot|crawl|spider|slurp|lighthouse|headless|preview|facebookexternalhit|whatsapp/i.test(navigator.userAgent);
}

/** Ejecuta fn cuando la página ya está cargada y el hilo libre (no compite con el LCP). */
export function trasCarga(fn: () => void): () => void {
  let cancelado = false;
  let idle: number | undefined;
  let to: ReturnType<typeof setTimeout> | undefined;
  const lanzar = () => {
    if (cancelado) return;
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) idle = w.requestIdleCallback(() => !cancelado && fn(), { timeout: 4000 });
    else to = setTimeout(() => !cancelado && fn(), 1500);
  };
  if (document.readyState === "complete") lanzar();
  else window.addEventListener("load", lanzar, { once: true });
  return () => {
    cancelado = true;
    window.removeEventListener("load", lanzar);
    if (to) clearTimeout(to);
    const w = window as Window & { cancelIdleCallback?: (id: number) => void };
    if (idle !== undefined && w.cancelIdleCallback) w.cancelIdleCallback(idle);
  };
}

export const fmtNum = (n: number) => n.toLocaleString("es-ES");
export const fmtNota = (n: number) => n.toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
export const fmtEur = (n: number) => `${n.toLocaleString("es-ES", { maximumFractionDigits: 0 })} €`;

export const ETIQUETA: Record<TipoFicha, { singular: string; art: "este" | "esta"; mod: string }> = {
  coches: { singular: "coche", art: "este", mod: "coche" },
  motos: { singular: "moto", art: "esta", mod: "moto" },
  patinetes: { singular: "patinete", art: "este", mod: "patinete" },
};

export type Rival = { slug: string; nombre: string; precio: number | null; img: string | null; precioPropio: number | null };

const RIVALES = import.meta.glob<{ default: Record<string, [string, string, number | null, string | null, number | null]> }>(
  "./rivales/*.generated.json",
);

export async function cargarRival(tipo: TipoFicha, slug: string): Promise<Rival | null> {
  const l = /^[a-z]/.test(slug[0] ?? "") ? slug[0] : "0";
  const loader = RIVALES[`./rivales/${tipo}-${l}.generated.json`];
  if (!loader) return null;
  const m = await loader();
  const r = m.default[slug];
  return r ? { slug: r[0], nombre: r[1], precio: r[2], img: r[3], precioPropio: r[4] } : null;
}
