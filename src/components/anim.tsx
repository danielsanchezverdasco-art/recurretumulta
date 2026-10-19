import { useLayoutEffect, createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* ─── Kit de animación sin dependencias (03/10/2026, optimización LCP) ─────────
   Sustituye a motion/react en el bundle inicial: las mismas apariencias
   (fade/slide/scale, reveals al hacer scroll, crossfades, marquees) con CSS
   puro + IntersectionObserver. Sin lecturas de layout en el hilo principal.
   Las entradas usan clases CSS puras (.anim-*) para que el HTML prerenderizado
   no dependa de JS para pintarse (mejora el LCP). */

type Tag = "div" | "section" | "span" | "button" | "p";

function useReducedMotion() {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  return reduced;
}

type BaseProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  as?: Tag;
};

type RevealProps = BaseProps & {
  /** Cuánto del elemento debe verse para disparar (default 0.05). */
  threshold?: number;
  /** Retraso en ms una vez visible (default 0). */
  delay?: number;
  /** Desplazamiento vertical inicial en px (default 20). */
  y?: number;
  /** Duración de la transición en ms (default 600). */
  duration?: number;
};

/** Entrada al aparecer en el viewport (sustituye motion whileInView).
 *  En el HTML estático queda oculto hasta que el IO lo revela — igual que
 *  motion hacía. Sin CLS: solo opacity+transform. */
export function Reveal({ children, className, id, style, as = "div", threshold = 0.05, delay = 0, y = 20, duration = 600 }: RevealProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [sinAnim, setSinAnim] = useState(false);
  // 13/10/2026 (LCP): lo que ya está en pantalla al montar se muestra sin animación
  // (antes de pintar), así el contenido prerenderizado no desaparece y reaparece.
  useLayoutEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top < window.innerHeight) { setSinAnim(true); setInView(true); }
  }, []);
  useEffect(() => {
    if (reduced) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, reduced]);
  return createElement(
    as,
    {
      id,
      className: `rtm-reveal${inView ? " is-inview" : ""}${className ? ` ${className}` : ""}`,
      ref,
      style: {
        ...(y !== 20 ? { ["--reveal-y" as string]: `${y}px` } : {}),
        ...(duration !== 600 ? { transitionDuration: `${duration}ms` } : {}),
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
        ...(sinAnim ? { transition: "none" } : {}),
        ...style,
      } as CSSProperties,
    },
    children
  );
}

type SwapProps = BaseProps & {
  /** Clave que reinicia la animación de entrada (sustituye AnimatePresence mode="wait"). */
  swapKey: string | number;
};

/** Re-monta el contenido con animación de entrada al cambiar swapKey. */
export function Swap({ children, className, id, style, as = "div", swapKey }: SwapProps) {
  return createElement(
    as,
    { id, key: swapKey, className: `rtm-swap${className ? ` ${className}` : ""}`, style },
    children
  );
}

type CollapseProps = BaseProps & {
  /** Abierto o cerrado (sustituye motion height:auto con el truco grid-rows). */
  open: boolean;
};

/** Colapsable con animación de altura sin medir el layout. */
export function Collapse({ children, className, id, style, as = "div", open }: CollapseProps) {
  return createElement(
    as,
    {
      id,
      className: `rtm-collapse${className ? ` ${className}` : ""}`,
      "data-open": open ? "true" : "false",
      // inert cuando está cerrado (11/10/2026, a11y): el contenido colapsado
      // sigue en el DOM pero no debe ser enfocable ni leído por AT.
      inert: !open,
      style,
    },
    createElement("div", { className: "rtm-collapse-inner" }, children)
  );
}
