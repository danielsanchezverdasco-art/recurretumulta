import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App.tsx";

document.documentElement.lang = "es";
const rootEl = document.getElementById("root")!;
// 13/10/2026: copia del HTML prerenderizado. Si algo falla al montar React,
// el ErrorBoundary la vuelve a pintar en vez de "Algo salió mal" (Googlebot).
(window as unknown as { __HTML_PRERENDER__?: string }).__HTML_PRERENDER__ =
  rootEl.innerHTML.trim().length > 200 ? rootEl.innerHTML : undefined;
// 13/10/2026: título/description prerenderizados (ya con titulos.csv aplicado).
// useSeo los conserva en la URL de entrada: Googlebot ve el título del SEO.
// 15/10/2026 (fix radar): la ruta prerenderizada es la del canonical del HTML,
// NO location.pathname. Con el fallback SPA, location es la ruta nueva pero el
// HTML servido es la portada: usar location.pathname hacía que useSeo conservara
// el título de la portada en artículos nuevos (bug de títulos por defecto).
if (rootEl.innerHTML.trim().length > 200) {
  const canonHref = document
    .querySelector('link[rel="canonical"]')
    ?.getAttribute("href");
  let pathIni = location.pathname.endsWith("/")
    ? location.pathname
    : location.pathname + "/";
  try {
    if (canonHref) pathIni = new URL(canonHref, location.origin).pathname;
  } catch {
    /* mantener location.pathname */
  }
  if (!pathIni.endsWith("/")) pathIni += "/";
  (window as unknown as { __SEO_INICIAL__?: { path: string; title: string; desc: string } }).__SEO_INICIAL__ = {
    path: pathIni,
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
  };
}
// 13/10/2026 (PageSpeed/LCP): con HTML prerenderizado, React monta en un contenedor
// invisible superpuesto y se intercambia cuando ya ha pintado la página (o a los 4 s).
// Así el contenido prerenderizado sigue visible (es el LCP) y no se sustituye por el
// cargador mientras llegan los chunks diferidos.
// No en el prerender (navegador automatizado): allí se monta directamente sobre #root.
// 24/10/2026 (velocidad): antes se excluía con navigator.webdriver, que también es true
// en Lighthouse/PageSpeed (Chrome headless): allí React borraba el HTML prerenderizado y
// el LCP esperaba a todo el JS. Ahora solo se excluye el prerender (window.__PRERENDER__).
// Desmonta un árbol grande en trozos de ~8 ms (sin tareas largas). Primero se oculta (display:none).
function retirarPorTrozos(raiz: HTMLElement) {
  raiz.removeAttribute("id");
  raiz.style.display = "none";
  raiz.setAttribute("aria-hidden", "true");
  // Contenedor con más hijos directos (la rejilla de tarjetas): se vacía por trozos y luego se quita el resto.
  let grande: Element = raiz, maxHijos = raiz.childElementCount; // (childElementCount es O(n): se cachea el máximo)
  raiz.querySelectorAll("*").forEach((el) => { const h = el.childElementCount; if (h > maxHijos) { maxHijos = h; grande = el; } });
  const paso = () => {
    const fin = performance.now() + 8;
    while (grande.lastElementChild && performance.now() < fin) {
      for (let i = 0; i < 40 && grande.lastElementChild; i++) grande.lastElementChild.remove();
    }
    if (grande.childElementCount > 0) setTimeout(paso, 0);
    else raiz.remove();
  };
  paso();
}
const esPrerender = !!(window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__;
const prerender = rootEl.innerHTML.trim().length > 200 && !esPrerender && !/[?&]sinswap\b/.test(location.search);
let destino = rootEl;
if (prerender) {
  destino = document.createElement("div");
  destino.setAttribute("aria-hidden", "true");
  destino.style.cssText = "position:absolute;top:0;left:0;width:100%;visibility:hidden;pointer-events:none;z-index:-1";
  rootEl.after(destino);
  const objetivo = (rootEl.textContent ?? "").replace(/\s+/g, "").length * 0.6;
  let hecho = false;
  const intercambiar = () => {
    if (hecho) return; hecho = true; obs.disconnect(); clearTimeout(t);
    // 31/10/2026 (velocidad): en páginas con HTML enorme (/fichas-tecnicas/: miles de nodos) quitar #root de golpe
    // era una tarea de ~1 s (TBT). Se oculta y se desmonta por trozos en reposo; en el resto, como siempre.
    if (rootEl.getElementsByTagName("*").length > 3000) retirarPorTrozos(rootEl);
    else rootEl.remove();
    destino.removeAttribute("aria-hidden"); destino.removeAttribute("style"); destino.id = "root";
  };
  const listo = () => (destino.textContent ?? "").replace(/\s+/g, "").length >= objetivo;
  const obs = new MutationObserver(() => { if (listo()) requestAnimationFrame(intercambiar); });
  obs.observe(destino, { childList: true, subtree: true, characterData: true });
  const t = setTimeout(intercambiar, 4000);
  // Si el usuario interactúa con el HTML estático antes del intercambio, se intercambia ya.
  ["pointerdown", "keydown"].forEach((e) => window.addEventListener(e, intercambiar, { once: true, capture: true }));
}
const root = createRoot(destino);
root.render(<App />);
// 11/10/2026: señal para el prerender (scripts/prerender.mjs).
// Se fija tras el primer commit de React, indicando que la app arrancó.
requestAnimationFrame(() => {
  (window as unknown as { __rootMutated?: boolean }).__rootMutated = true;
});
