import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════════
   MOTION-LITE — utilidades mínimas de animación para el bundle inicial
   Extraído de motion.tsx (07/10/2026, PageSpeed): Cosa.tsx (usado en la
   portada) importaba useInView+CountUp desde motion.tsx entero (1693 líneas,
   48 exports), metiendo todo en el chunk crítico. Este fichero solo trae
   lo que necesita el above-the-fold. Sin dependencias.
   ═══════════════════════════════════════════════════════════════════ */

function useReducedMotion() {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  return reduced;
}

/** IntersectionObserver de un solo disparo.
 * Usa callback-ref con estado (no useRef): así funciona aunque el elemento
 * aparezca tarde (datos asíncronos que primero renderizan skeleton/null). */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const [inView, setInView] = useState(false);
  const [el, setEl] = useState<T | null>(null);
  useEffect(() => {
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px 60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [el, threshold]);
  return { ref: setEl, inView };
}

export function CountUp({ to, duration = 1400, decimals = 0, prefix = "", suffix = "" }: {
  to: number; duration?: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduced) { setVal(to); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);
  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString("es-ES", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}
