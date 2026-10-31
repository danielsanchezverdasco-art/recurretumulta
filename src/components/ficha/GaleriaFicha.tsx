// 18/10/2026 (rediseño fichas): galería al principio de la ficha.
// Scroll-snap nativo (swipe), contador 1/N, pantalla completa con flechas y
// teclado, miniaturas en escritorio. Sin librerías. La 1.ª foto es la LCP:
// eager + fetchpriority high + srcset con las variantes -480w/-828w.
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import CreditoFoto from "@/components/CreditoFoto.tsx";

export interface FotoFicha {
  src: string;
  alt: string;
  ancho?: number;
  alto?: number;
}

const SIZES = "(min-width: 1024px) 760px, (min-width: 896px) 860px, 100vw";

function srcSetDe(src: string, ancho?: number) {
  if (!/^\/media\/.+\.webp$/.test(src)) return undefined;
  return `${src.replace(/\.webp$/, "-480w.webp")} 480w, ${src.replace(/\.webp$/, "-828w.webp")} 828w, ${src} ${ancho && ancho > 828 ? ancho : 1200}w`;
}

export default function GaleriaFicha({
  fotos,
  nombre,
  ajuste = "cover",
  vacio,
}: {
  fotos: FotoFicha[];
  nombre: string;
  /** cover (coches) | contain (motos y patinetes, fotos recortadas sobre blanco) */
  ajuste?: "cover" | "contain";
  /** Qué mostrar si no hay ninguna foto válida. */
  vacio: React.ReactNode;
}) {
  // 31/10/2026 (orden de Daniel): este componente NUNCA oculta una foto que existe. Solo se descartan items sin src.
  // Antes, un fallo de carga puntual (p. ej. una variante -480w/-828w ausente) marcaba la foto como «rota», la quitaba y
  // pintaba «Foto pendiente» + noindex. Ahora, si falla una variante se carga el original y la foto se queda siempre.
  const lista = fotos.filter((f) => f.src);
  const n = lista.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [grande, setGrande] = useState<number | null>(null);
  const down = useRef<{ x: number; y: number } | null>(null);

  const irA = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el || n === 0) return;
      const next = ((i % n) + n) % n;
      const reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
    },
    [n],
  );

  const onScroll = () => {
    const el = trackRef.current;
    if (!el || !el.clientWidth) return;
    setIdx(Math.min(n - 1, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))));
  };

  useEffect(() => {
    if (grande === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGrande(null);
      else if (e.key === "ArrowRight") setGrande((g) => (g === null ? g : (g + 1) % n));
      else if (e.key === "ArrowLeft") setGrande((g) => (g === null ? g : (g - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [grande, n]);

  // 31/10/2026: solo hay hueco si la ficha no tiene NINGUNA foto (marcador data-foto-pendiente solo para informe; nunca noindex).
  if (n === 0) return <div data-foto-pendiente="1">{vacio}</div>;
  const fit = ajuste === "cover" ? "object-cover" : "object-contain bg-white";

  return (
    <div>
      <div
        className="group relative overflow-hidden rounded-3xl bg-gray-100"
        role="region"
        aria-roledescription="carrusel"
        aria-label={`Fotos del ${nombre}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); irA(idx - 1); }
          if (e.key === "ArrowRight") { e.preventDefault(); irA(idx + 1); }
        }}
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          onPointerDown={(e) => { down.current = { x: e.clientX, y: e.clientY }; }}
          className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {lista.map((f, i) => (
            <figure
              key={f.src}
              className="w-full shrink-0 snap-center snap-always cursor-zoom-in"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${n}`}
              onClick={(e) => {
                const d = down.current;
                down.current = null;
                if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 10) return;
                setGrande(i);
              }}
            >
              <img
                src={f.src}
                srcSet={i === 0 ? srcSetDe(f.src, f.ancho) : undefined}
                sizes={i === 0 && srcSetDe(f.src) ? SIZES : undefined}
                alt={f.alt}
                width={f.ancho}
                height={f.alto}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding={i === 0 ? "sync" : "async"}
                draggable={false}
                onError={(e) => {
                  // 31/10/2026: si falla una variante del srcset (-480w/-828w) pero la foto original existe, no se
                  // descarta la foto: se quita el srcset y se carga el original. Solo es «rota» si falla el src.
                  const im = e.currentTarget;
                  if (im.getAttribute("srcset")) {
                    im.removeAttribute("srcset");
                    im.removeAttribute("sizes");
                    im.src = f.src;
                  }
                }}
                className={`aspect-video w-full select-none ${fit}`}
              />
            </figure>
          ))}
        </div>

        {n > 1 && (
          <>
            <button type="button" onClick={() => irA(idx - 1)} aria-label="Foto anterior"
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75 sm:block">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => irA(idx + 1)} aria-label="Foto siguiente"
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75 sm:block">
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
        <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-bold text-white" aria-live="polite">
          {idx + 1} / {n}
        </span>
        <button type="button" onClick={() => setGrande(idx)} aria-label="Ver a pantalla completa"
          className="absolute bottom-2 right-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80">
          <Expand className="h-4 w-4" />
        </button>
      </div>

      {n > 1 && (
        <div className="mt-2 hidden gap-2 overflow-x-auto lg:flex" aria-label="Miniaturas">
          {lista.map((f, i) => (
            <button key={f.src} type="button" onClick={() => irA(i)} aria-label={`Ver foto ${i + 1}`} aria-current={i === idx}
              className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${i === idx ? "border-red-600" : "border-transparent opacity-70 hover:opacity-100"}`}>
              <img src={f.src} alt="" loading="lazy" decoding="async" className={`h-full w-full ${fit}`} />
            </button>
          ))}
        </div>
      )}
      <CreditoFoto src={lista[idx]?.src} />

      {grande !== null && lista[grande] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95" role="dialog" aria-modal="true" aria-label={`Fotos del ${nombre} a pantalla completa`} onClick={() => setGrande(null)}>
          <img src={lista[grande].src} alt={lista[grande].alt} className="max-h-[90vh] max-w-[96vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button type="button" aria-label="Cerrar" onClick={() => setGrande(null)} className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><X className="h-6 w-6" /></button>
          {n > 1 && (
            <>
              <button type="button" aria-label="Foto anterior" onClick={(e) => { e.stopPropagation(); setGrande((grande - 1 + n) % n); }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft className="h-6 w-6" /></button>
              <button type="button" aria-label="Foto siguiente" onClick={(e) => { e.stopPropagation(); setGrande((grande + 1) % n); }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight className="h-6 w-6" /></button>
            </>
          )}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white">{grande + 1} / {n}</span>
        </div>
      )}
    </div>
  );
}
