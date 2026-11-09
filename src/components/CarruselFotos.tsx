import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lightbox } from "@/components/motion.tsx";

export interface FotoCarrusel {
  src: string;
  alt: string;
  /** Crédito visible, p. ej. "Foto oficial de BYD" o "Imagen editorial generada por IA". */
  credito?: string;
}

/**
 * Carrusel de fotos ligero: scroll-snap nativo (swipe táctil en móvil),
 * flechas y puntos en desktop, sin librerías. Respeta prefers-reduced-motion.
 */
export default function CarruselFotos({
  fotos,
  titulo = "Galería",
}: {
  fotos: FotoCarrusel[];
  titulo?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  // Evita abrir el lightbox al hacer swipe: solo si el puntero apenas se movió
  const downPos = useRef<{ x: number; y: number } | null>(null);
  const n = fotos.length;

  useEffect(() => {
    setIdx(0);
  }, [n]);

  const irA = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const next = ((i % n) + n) % n;
      const reduce =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({
        left: next * el.clientWidth,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [n]
  );

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || el.clientWidth === 0) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIdx(Math.min(n - 1, Math.max(0, i)));
  }, [n]);

  // Teclado: flechas cuando el foco está en el carrusel
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      irA(idx - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      irA(idx + 1);
    }
  };

  if (n === 0) return null;

  const credito = fotos[idx]?.credito;

  return (
    <div className="my-2">
      <div
        className="group relative overflow-hidden rounded-2xl bg-gray-100"
        role="region"
        aria-roledescription="carrusel"
        aria-label={titulo}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          onPointerDown={(e) => { downPos.current = { x: e.clientX, y: e.clientY }; }}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {fotos.map((f, i) => (
            <figure
              key={f.src}
              className="w-full shrink-0 snap-center snap-always cursor-zoom-in"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${n}`}
              aria-hidden={i !== idx}
              onClick={(e) => {
                // Ignora el clic si hubo arrastre (swipe)
                const d = downPos.current;
                downPos.current = null;
                if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 10) return;
                setLightbox(i);
              }}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="aspect-[16/10] w-full select-none object-cover"
              />
            </figure>
          ))}
        </div>

        {/* Flechas: visibles en desktop / hover */}
        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => irA(idx - 1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75 focus-visible:block sm:block sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => irA(idx + 1)}
              aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75 focus-visible:block sm:block sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Contador */}
        {n > 1 && (
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur"
          >
            {idx + 1} / {n}
          </span>
        )}
      </div>

      {/* Puntos */}
      {n > 1 && (
        <div className="mt-2 flex items-center justify-center gap-1.5" role="tablist" aria-label="Elegir foto">
          {fotos.map((f, i) => (
            <button
              key={f.src}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`Ver foto ${i + 1}`}
              onClick={() => irA(i)}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-6 bg-red-600" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* Crédito */}
      {credito && (
        <p className="mt-1.5 text-center text-[11px] italic text-gray-400">{credito}</p>
      )}

      {/* Lightbox al tocar la foto (interactividad global 03/10/2026) */}
      {lightbox !== null && (
        <Lightbox
          src={fotos[lightbox].src}
          alt={fotos[lightbox].alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
