import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Texto único por página (25/10/2026, top7).
 * Para unas pocas rutas con muchas impresiones, sustituye las frases de
 * plantilla compartidas por una redacción propia de esa página, con sus
 * datos reales. No cambia los componentes comunes (Merlín trabaja en
 * ellos en dedupe-8g-merlin): solo actúa en las rutas de RUTAS_TU.
 * Las reglas viven en src/lib/textos-unicos-top7.ts y se cargan aparte.
 */
export const RUTAS_TU = new Set([
  "/coches/stelato-g9-erev-2026-precio-ficha-tecnica/",
  "/motos/yamaha-xsr900-gp-2025-ficha-tecnica-precio/",
  "/coches/haval-h6-hev-2025-precio-ficha-tecnica/",
  "/coches/skoda-kodiaq-iv-2025-precio-ficha-tecnica/",
  "/coches/skoda-kodiaq-iv-hibrido-enchufable-2026-precio-ficha-tecnica/",
  "/motos/honda-adv350-2024-ficha-tecnica-precio/",
  "/coches/icaur-v25-2026-precio-ficha-tecnica/",
  "/blog/icaur-v25-2026-precio-autonomia/",
]);

type Regla = [string, string];
const norm = (s: string) => s.replace(/\s+/g, " ");

function aplicar(raiz: HTMLElement, reglas: Regla[]) {
  const nodos: Text[] = [];
  const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) nodos.push(n as Text);
  const padres = new Set<HTMLElement>();
  for (const t of nodos) {
    const p = t.parentElement;
    if (!p || p.closest("script,style,nav,header,footer")) continue;
    const v0 = t.nodeValue ?? "";
    let v = norm(v0);
    for (const [a, b] of reglas) if (v.includes(a)) v = v.split(a).join(b);
    if (v !== norm(v0)) t.nodeValue = v;
    if (p.childNodes.length > 1) padres.add(p);
  }
  // Frases partidas en varios nodos de texto (JSX con {variables}):
  // solo si el elemento contiene únicamente texto.
  for (const p of padres) {
    const hijos = Array.from(p.childNodes);
    if (!hijos.every((h) => h.nodeType === Node.TEXT_NODE)) continue;
    const v0 = norm(p.textContent ?? "");
    let v = v0;
    for (const [a, b] of reglas) if (v.includes(a)) v = v.split(a).join(b);
    if (v === v0) continue;
    (hijos[0] as Text).nodeValue = v;
    for (const h of hijos.slice(1)) (h as Text).nodeValue = "";
  }
}

export default function TextoUnico() {
  const { pathname } = useLocation();
  const ruta = pathname.endsWith("/") ? pathname : pathname + "/";
  const activa = RUTAS_TU.has(ruta);
  const [reglas, setReglas] = useState<Regla[] | null>(null);

  useLayoutEffect(() => {
    setReglas(null);
    if (!activa) return;
    let vivo = true;
    import("@/lib/textos-unicos-top7.ts").then((m) => {
      if (vivo) setReglas(m.TEXTOS_UNICOS[ruta] ?? null);
    });
    return () => {
      vivo = false;
    };
  }, [activa, ruta]);

  useLayoutEffect(() => {
    if (!reglas) return;
    const raiz = document.getElementById("root") ?? document.body;
    let pendiente = false;
    const correr = () => {
      pendiente = false;
      obs.disconnect();
      aplicar(raiz, reglas);
      obs.observe(raiz, { subtree: true, childList: true, characterData: true });
    };
    const obs = new MutationObserver(() => {
      if (!pendiente) {
        pendiente = true;
        queueMicrotask(correr);
      }
    });
    correr();
    return () => obs.disconnect();
  }, [reglas]);

  return null;
}
