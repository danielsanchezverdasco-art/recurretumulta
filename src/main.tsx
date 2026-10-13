import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App.tsx";

document.documentElement.lang = "es";
const rootEl = document.getElementById("root")!;
// 13/10/2026: copia del HTML prerenderizado. Si algo falla al montar React,
// el ErrorBoundary la vuelve a pintar en vez de "Algo salió mal" (Googlebot).
(window as unknown as { __HTML_PRERENDER__?: string }).__HTML_PRERENDER__ =
  rootEl.innerHTML.trim().length > 200 ? rootEl.innerHTML : undefined;
const root = createRoot(rootEl);
root.render(<App />);
// 11/10/2026: señal para el prerender (scripts/prerender.mjs).
// Se fija tras el primer commit de React, indicando que la app arrancó.
requestAnimationFrame(() => {
  (window as unknown as { __rootMutated?: boolean }).__rootMutated = true;
});
