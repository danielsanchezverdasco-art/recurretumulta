import { useEffect, useState } from "react";

/* ── Splash de entrada (1 vez por sesión) ─────────────────────────── */
// Extraído de motion.tsx (07/10/2026, PageSpeed): App.tsx solo necesita
// Splash en el bundle inicial. Importar motion.tsx entero (1693 líneas,
// 48 exports) metía todo en el chunk crítico. Este fichero es mínimo.
export function Splash() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    // 24/10/2026 (velocidad): nunca en el prerender. Según cuándo se capturase, el
    // splash (fijo, blanco, pantalla completa) quedaba horneado en el HTML estático
    // (332 páginas en vivo) y tapaba el contenido hasta que cargaba el JS.
    if ((window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__) return;
    try {
      if (sessionStorage.getItem("rtm-splash") === "1") return;
    } catch { /* noop */ }
    setShow(true);
    const t1 = setTimeout(() => setDone(true), 1000);
    const t2 = setTimeout(() => { setShow(false); try { sessionStorage.setItem("rtm-splash", "1"); } catch { /* noop */ } }, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (!show) return null;
  return (
    <div className={`rtm-splash${done ? " done" : ""}`} aria-hidden="true">
      <div className="rtm-splash-logo flex items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 shadow-xl shadow-red-200">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
        </span>
        <span className="text-2xl font-black text-gray-900">RecurreTuMulta<span className="text-red-600">.online</span></span>
      </div>
      <div className="rtm-splash-bar"><span /></div>
    </div>
  );
}
