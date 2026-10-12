import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App.tsx";

document.documentElement.lang = "es";
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
// 11/10/2026: señal para el prerender (scripts/prerender.mjs).
// Se fija tras el primer commit de React, indicando que la app arrancó.
requestAnimationFrame(() => {
  (window as unknown as { __rootMutated?: boolean }).__rootMutated = true;
});
