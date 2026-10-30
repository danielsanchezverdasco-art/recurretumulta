import { useState } from "react";

/* ── COSA EN BANNER (orden de Daniel 06/10/2026, tamaño C aprobado):
   Cosa sin fondo asomando abajo a la derecha de cada banner.
   Decorativo: pointer-events-none, alt vacío, carga lazy.
   Sin z-index: se inserta entre los gradientes y el contenido del banner,
   así el texto siempre pinta por encima. Entrada suave CSS coherente
   con DriveInImage; desactivada con prefers-reduced-motion.
   SSR/prerender-safe (el HTML estático se pinta completo).
   className/imgClassName permiten ajustes finos por página. ── */
export default function CosaEnBanner({
  className = "right-2 sm:right-4",
  imgClassName = "h-40 w-auto",
}: {
  className?: string;
  imgClassName?: string;
}) {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 ${className} ${
        reduced ? "" : "rtm-cosaenbanner-enter"
      }`}
    >
      <style>{`
        .rtm-cosaenbanner-enter { animation: rtmCosaEnBanner 1.1s cubic-bezier(0.22,1,0.36,1) 0.35s both; will-change: transform, opacity; }
        @keyframes rtmCosaEnBanner {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <img
        src="/media/cosa-banner-cut.webp"
        alt="Cosa, la mascota robot de RecurreTuMulta.online"
        loading="lazy"
        decoding="async"
        draggable={false}
        className={`select-none ${imgClassName}`}
      />
    </span>
  );
}
