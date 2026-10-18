import { useCallback, useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════════
   RTM MOTION v2 — componentes de animación (lote aprobado 03/10/2026)
   Sin dependencias. Todo SSR/prerender-safe: el HTML estático se pinta
   completo y las animaciones solo viven en efectos (igual que anim.tsx).
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
 * aparezca tarde (datos asíncronos que primero renderizan skeleton/null).
 * Con useRef el observer nunca se conectaba y `inView` quedaba en false
 * para siempre (bug 06/10/2026: nota de Cosa en 0,0, estrellas y barras sin rellenar). */
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

/* ── PAGE HERO premium compartido ────────────────────────────────────
   Título SIN animación (orden de Daniel). Entrada escalonada: sello →
   subtítulo → cifras. Ken-burns + parallax(scroll) + parallax(ratón) en la
   imagen componen por usar scale vs translateY (propiedades distintas). */
export interface HeroStat { value: string | number; label: string; countUp?: boolean }
export interface PageHeroProps {
  image: string;
  imageAlt: string;
  badge?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  stats?: HeroStat[];
  children?: ReactNode;
  rounded?: boolean;
}

function Particles({ count = 14 }: { count?: number }) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  const parts = Array.from({ length: count }, (_, i) => {
    const size = 3 + ((i * 7) % 6);
    return {
      left: `${(i * 61) % 100}%`,
      width: size, height: size,
      animationDuration: `${5 + ((i * 13) % 7)}s`,
      animationDelay: `${-((i * 17) % 8)}s`,
    } as CSSProperties;
  });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {parts.map((s, i) => <span key={i} className="rtm-particle" style={s} />)}
    </div>
  );
}

export function PageHero({ image, imageAlt, badge, title, subtitle, stats, children, rounded = true }: PageHeroProps) {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  // Parallax al hacer scroll (translateY) — no pisa al ken-burns (scale).
  useEffect(() => {
    if (reduced) return;
    const hero = heroRef.current; const wrap = imgWrapRef.current;
    if (!hero || !wrap) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = Math.min(1, Math.max(0, -r.top / (r.height || 1)));
        wrap.style.transform = `translateY(${p * 60}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [reduced]);

  // Parallax de ratón (desktop): mueve la imagen unos px con el cursor.
  const onMouseMove = useCallback((e: React.PointerEvent) => {
    if (reduced || !imgWrapRef.current) return;
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    imgWrapRef.current.style.setProperty("--mx", `${x * 14}px`);
    imgWrapRef.current.style.setProperty("--my", `${y * 10}px`);
  }, [reduced]);

  return (
    <header
      ref={heroRef}
      onPointerMove={onMouseMove}
      className={`relative overflow-hidden bg-gray-950 shadow-2xl ${rounded ? "rounded-3xl" : ""}`}
    >
      <div ref={imgWrapRef} className="rtm-hero-parallax absolute inset-0" style={{ transform: "translateY(0px)" }}>
        <img
          src={image} alt={imageAlt}
          className="rtm-hero-img absolute inset-0 h-full w-full object-cover opacity-50"
          loading="eager" fetchPriority="high"
          style={{ translate: "var(--mx, 0px) var(--my, 0px)" } as CSSProperties}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/50 via-transparent to-transparent" />
      <Particles />
      <div className="rtm-hero-sweep" aria-hidden="true" />
      <div className="rtm-hero-orb" aria-hidden="true" style={{ width: 220, height: 220, left: "8%", top: "12%", background: "#dc2626" }} />
      <div className="rtm-hero-orb" aria-hidden="true" style={{ width: 160, height: 160, right: "10%", bottom: "8%", background: "#f59e0b", animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rtm-hero-bar" />
      <div className="relative px-6 py-14 sm:px-10 sm:py-20">
        {badge && (
          <div className="rtm-hero-in mb-5" style={{ "--hero-delay": "60ms" } as CSSProperties}>
            <span className="rtm-badge-shine inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-red-600/90 text-white px-4 py-1.5 rounded-full shadow-lg">
              {badge}
            </span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <div className="rtm-hero-in" style={{ "--hero-delay": "180ms" } as CSSProperties}>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">{subtitle}</p>
          </div>
        )}
        {stats && stats.length > 0 && (
          <div className="rtm-hero-in flex flex-wrap gap-8" style={{ "--hero-delay": "300ms" } as CSSProperties}>
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-white">
                  {s.countUp && typeof s.value === "number" ? <CountUp to={s.value} /> : s.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        )}
        {children && (
          <div className="rtm-hero-in mt-8" style={{ "--hero-delay": "380ms" } as CSSProperties}>{children}</div>
        )}
      </div>
    </header>
  );
}

/* ── Contador animado ──────────────────────────────────────────────── */
export function CountUp({ to, duration = 1400, decimals = 0, prefix = "", suffix = "" }: {
  to: number; duration?: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  // 18/10/2026: arranca en el valor real (el HTML prerenderizado nunca muestra 0); anima solo en el navegador.
  const [val, setVal] = useState(to);
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

/* ── Odómetro (portada) ───────────────────────────────────────────── */
export function Odometer({ value, digits = 5 }: { value: number; digits?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const str = String(Math.max(0, Math.round(value))).padStart(digits, "0").slice(-digits);
  return (
    <span ref={ref} className="inline-flex" aria-label={String(value)}>
      {str.split("").map((d, i) => (
        <span key={i} className="rtm-odo">
          <span
            className="rtm-odo-reel"
            style={reduced || !inView ? { transform: `translateY(-${Number(d)}em)` } : { transform: `translateY(-${Number(d)}em)`, transitionDelay: `${i * 90}ms` }}
          >
            {"0123456789".split("").map((n) => <span key={n} style={{ height: "1em" }}>{n}</span>)}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ── Tira continua de noticias (marquee) ───────────────────────────── */
export function NewsTicker({ items }: { items: { href: string; label: string }[] }) {
  const reduced = useReducedMotion();
  if (items.length === 0) return null;
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((it, i) => (
        <a key={i} href={it.href} className="mx-5 flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-white whitespace-nowrap">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 shrink-0" />
          {it.label}
        </a>
      ))}
    </div>
  );
  return (
    <div className="rtm-marquee bg-gray-950 py-2.5" role="marquee" aria-label="Últimas noticias">
      <div className="rtm-marquee-track" style={reduced ? { animation: "none" } : undefined}>
        {row(false)}{row(true)}
      </div>
    </div>
  );
}

/* ── Carrusel infinito de marcas ───────────────────────────────────── */
export function BrandMarquee({ brands }: { brands: string[] }) {
  const reduced = useReducedMotion();
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {brands.map((b, i) => (
        <span key={i} className="mx-6 text-lg font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">{b}</span>
      ))}
    </div>
  );
  return (
    <div className="rtm-marquee py-4" aria-label="Marcas">
      <div className="rtm-brand-track" style={reduced ? { animation: "none" } : undefined}>{row(false)}{row(true)}</div>
    </div>
  );
}

/* ── Barra de progreso de lectura ──────────────────────────────────── */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  // 05/10/2026 (PageSpeed TBT): `scrollHeight` forzaba layout en CADA frame
  // de scroll. Se cachea `max` y solo se re-mide con ResizeObserver (cuando
  // cambia el documento) — el bucle de scroll ya no lee layout.
  const maxRef = useRef(1);
  useEffect(() => {
    const h = document.documentElement;
    const measure = () => {
      maxRef.current = Math.max(1, h.scrollHeight - h.clientHeight);
    };
    measure();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, h.scrollTop / maxRef.current));
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      });
    };
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    ro?.observe(h);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, []);
  return <div ref={barRef} className="rtm-reading-progress" aria-hidden="true" />;
}

/* ── Cuenta atrás ─────────────────────────────────────────────────── */
export function Countdown({ target, label }: { target: string; label?: string }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  const cells: [number, string][] = [[d, "días"], [h, "horas"], [m, "min"], [s, "seg"]];
  return (
    <div className="inline-flex items-center gap-2" role="timer" aria-label={label ?? "Cuenta atrás"}>
      {cells.map(([v, l], i) => (
        <span key={l} className="flex flex-col items-center bg-white/10 backdrop-blur rounded-xl px-2.5 py-1.5 min-w-[52px]">
          <span className="text-xl font-black text-white tabular-nums" key={`${l}-${v}`}>{String(v).padStart(2, "0")}</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-300">{l}</span>
          {i < cells.length - 1 && <span className="sr-only">, </span>}
        </span>
      ))}
    </div>
  );
}

/* ── Lightbox ──────────────────────────────────────────────────────── */
export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="rtm-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <button className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none px-3 py-1" aria-label="Cerrar">×</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

/* ── Splash de entrada: movido a components/splash.tsx (07/10/2026, PageSpeed).
   App.tsx lo importa desde allí para no meter motion.tsx entero (1693 líneas)
   en el chunk inicial. ─────────────────────────────────────────────── */

/* ── Confetti ──────────────────────────────────────────────────────── */
const CONFETTI_COLORS = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
export function Confetti({ pieces = 90 }: { pieces?: number }) {
  const reduced = useReducedMotion();
  const [items] = useState(() =>
    Array.from({ length: reduced ? 0 : pieces }, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      width: 6 + ((i * 13) % 6),
      height: 8 + ((i * 7) % 8),
      background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      animationDuration: `${2.2 + ((i * 11) % 20) / 10}s`,
      animationDelay: `${((i * 5) % 8) / 10}s`,
      borderRadius: i % 3 === 0 ? "50%" : "2px",
    } as CSSProperties))
  );
  return <>{items.map((s, i) => <span key={i} className="rtm-confetti-piece" style={s} />)}</>;
}

/* ── Tarjeta FLIP (prioridad de Daniel) ────────────────────────────── */
/* ── FlipCard endurecida para táctil (03/10/2026, bug de Daniel) ─────────
   - La cara invisible NUNCA intercepta toques (pointer-events por estado).
   - Distingue toque vs arrastre: si el dedo se mueve >10px fue scroll, no voltea.
   - Antirrebote: ignora toques durante 700ms tras voltear.
   - Primer toque SOLO voltea (nunca navega). Con `href`, el segundo toque
     sobre la tarjeta ya volteada navega; además se pinta un CTA explícito
     "Ver ficha" en el reverso. Los enlaces/botones internos funcionan normal.
   - Solo transform rotateY + backface-visibility: cero cambios de layout. */
export function FlipCard({ front, back, href, ctaLabel = "Ver ficha", className = "", minHeight }: {
  front: ReactNode; back: ReactNode; href?: string; ctaLabel?: string; className?: string; minHeight?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const downPos = useRef<{ x: number; y: number } | null>(null);
  const lastFlip = useRef(0);
  const onPointerDown = (e: React.PointerEvent) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  };
  const onClick = (e: React.MouseEvent) => {
    const t = e.target as HTMLElement;
    // Los enlaces/botones internos navegan con normalidad, sin voltear.
    if (t.closest("a,button")) return;
    // Si el dedo se movió, fue un scroll/arrastre: no voltear (evita el "rebote").
    const d = downPos.current;
    downPos.current = null;
    if (d && (Math.abs(e.clientX - d.x) > 10 || Math.abs(e.clientY - d.y) > 10)) return;
    // Antirrebote: ignora toques durante 700ms tras un volteo.
    const now = Date.now();
    if (now - lastFlip.current < 700) return;
    if (!flipped) {
      // Primer toque: SOLO voltea, nunca navega.
      lastFlip.current = now;
      setFlipped(true);
    } else if (href) {
      // Segundo toque sobre la tarjeta ya volteada: navega.
      window.location.href = href;
    } else {
      lastFlip.current = now;
      setFlipped(false);
    }
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      const t = e.target as HTMLElement;
      if (t.closest("a,button")) return;
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };
  return (
    <div
      className={`rtm-flip${flipped ? " flipped" : ""} ${className}`}
      onPointerDown={onPointerDown}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button" tabIndex={0} aria-pressed={flipped} aria-label="Voltear tarjeta"
    >
      <div className="rtm-flip-inner" style={minHeight ? { minHeight } : undefined}>
        <div className="rtm-flip-face rtm-flip-front">{front}</div>
        <div className="rtm-flip-face rtm-flip-back">
          {back}
          {href && (
            <a href={href} className="rtm-flip-cta" onClick={(e) => e.stopPropagation()}>
              {ctaLabel} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Coverflow 3D ──────────────────────────────────────────────────── */
export function Coverflow({ items, onSelect }: {
  items: { src: string; alt: string; caption?: string }[]; onSelect?: (i: number) => void;
}) {
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const n = items.length;
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);
  return (
    <div className="rtm-coverflow relative">
      <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-hidden py-6">
        {items.map((it, i) => {
          const off = i - active;
          const abs = Math.abs(off);
          if (abs > 2) return null;
          return (
            <button
              key={i}
              onClick={() => (off === 0 ? onSelect?.(i) : setActive(i))}
              className="rtm-coverflow-item shrink-0 rounded-2xl overflow-hidden shadow-xl"
              style={{
                transform: `translateX(${off * -30}%) scale(${1 - abs * 0.18}) rotateY(${off * -38}deg)`,
                opacity: 1 - abs * 0.35, filter: abs ? "brightness(.75)" : "none", zIndex: 10 - abs,
                width: "min(62vw, 340px)",
              }}
              aria-label={it.alt}
            >
              <img src={it.src} alt={it.alt} className="w-full h-44 sm:h-56 object-cover" loading="lazy" draggable={false} />
            </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-3">
        <button onClick={() => go(-1)} className="w-10 h-10 rounded-full bg-white shadow border border-gray-200 font-bold" aria-label="Anterior">‹</button>
        <button onClick={() => go(1)} className="w-10 h-10 rounded-full bg-white shadow border border-gray-200 font-bold" aria-label="Siguiente">›</button>
      </div>
    </div>
  );
}

/* ── Gráficos animados en fichas ───────────────────────────────────── */
export function Donut({ value, max, label, size = 120 }: { value: number; max: number; label: string; size?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const reduced = useReducedMotion();
  const show = inView || reduced;
  const r = 52; const c = 2 * Math.PI * r;
  const pct = Math.min(1, Math.max(0, value / max));
  const uid = useId();
  if (!(Number(value) > 0)) return null; // 18/10/2026: nunca pintar ceros ni vacíos
  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label={`${label}: ${value}`}>
        <circle cx="60" cy="60" r={r} fill="none" stroke="#e2e8f0" strokeWidth="12" />
        <circle cx="60" cy="60" r={r} fill="none" stroke={`url(#${uid})`} strokeWidth="12" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={show ? c * (1 - pct) : c}
          transform="rotate(-90 60 60)" style={{ transition: reduced ? "none" : "stroke-dashoffset 1.2s cubic-bezier(.22,1,.36,1)" }} />
        <defs><linearGradient id={uid}><stop offset="0%" stopColor="#dc2626" /><stop offset="100%" stopColor="#f59e0b" /></linearGradient></defs>
        <text x="60" y="58" textAnchor="middle" className="font-black" fontSize="22" fill="#0f172a">{value}</text>
        <text x="60" y="78" textAnchor="middle" fontSize="11" fill="#64748b">{label}</text>
      </svg>
    </div>
  );
}

export function SpecBar({ label, value, max, unit = "" }: { label: string; value: number; max: number; unit?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const reduced = useReducedMotion();
  const show = inView || reduced;
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  if (!(Number(value) > 0)) return null; // 18/10/2026: nunca pintar ceros ni vacíos
  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
        <span>{label}</span><span className="tabular-nums">{value}{unit}</span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-amber-500"
          style={{ width: show ? `${pct}%` : "0%", transition: reduced ? "none" : "width 1s cubic-bezier(.22,1,.36,1)" }} />
      </div>
    </div>
  );
}

/* ── Deslizador para comparar dos fotos ────────────────────────────── */
export function CompareSlider({ before, after, beforeLabel = "Antes", afterLabel = "Después" }: {
  before: string; after: string; beforeLabel?: string; afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const move = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(98, Math.max(2, ((clientX - r.left) / r.width) * 100)));
  }, []);
  return (
    <div
      ref={ref} className="rtm-compare rounded-2xl border border-gray-200"
      onPointerDown={(e) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => { if (dragging.current) move(e.clientX); }}
      onPointerUp={() => { dragging.current = false; }}
      role="slider" aria-valuenow={Math.round(pos)} aria-valuemin={0} aria-valuemax={100} aria-label="Comparar imágenes" tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
      }}
    >
      <img src={after} alt={afterLabel} className="w-full h-56 sm:h-72 object-cover pointer-events-none" loading="lazy" draggable={false} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
        <img src={before} alt={beforeLabel} className="h-56 sm:h-72 object-cover pointer-events-none max-w-none" style={{ width: `${100 / (pos / 100)}%` }} loading="lazy" draggable={false} />
      </div>
      <div className="rtm-compare-handle" style={{ left: `${pos}%` }}>
        <span className="rtm-compare-knob">⇔</span>
      </div>
      <span className="absolute top-2 left-2 text-xs font-bold bg-black/60 text-white px-2 py-1 rounded-full pointer-events-none">{beforeLabel}</span>
      <span className="absolute top-2 right-2 text-xs font-bold bg-black/60 text-white px-2 py-1 rounded-full pointer-events-none">{afterLabel}</span>
    </div>
  );
}

/* ── Scrollytelling: frase palabra por palabra ─────────────────────── */
export function ScrollyWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [lit, setLit] = useState(0);
  // 05/10/2026 (PageSpeed TBT): evita despachar setState 60 veces/s cuando el
  // valor no cambia (React lo ignoraría, pero el dispatch cuesta main thread).
  const litRef = useRef(0);
  const words = text.split(" ");
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height + vh * 0.25)));
        const v = Math.floor(p * words.length);
        if (v !== litRef.current) { litRef.current = v; setLit(v); }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [words.length]);
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className={`rtm-scrolly-word${i < lit ? " lit" : ""}`}>{w}{i < words.length - 1 ? " " : ""}</span>
      ))}
    </p>
  );
}

/* ── Divisor con olas ──────────────────────────────────────────────── */
export function WaveDivider({ color = "#f8fafc", flip = false }: { color?: string; flip?: boolean }) {
  const wave = "M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z";
  return (
    <div className="overflow-hidden leading-[0]" style={flip ? { transform: "rotate(180deg)" } : undefined} aria-hidden="true">
      <svg className="rtm-waves" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: 60 }}>
        <path d={wave} fill={color} />
        <path d={wave} fill={color} transform="translate(1440,0)" />
      </svg>
    </div>
  );
}

/* ── Imagen con wipe reveal (SOLO imágenes) ────────────────────────── */
export function WipeImage({ src, alt, className = "", imgClassName = "" }: {
  src: string; alt: string; className?: string; imgClassName?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.2);
  return (
    <span ref={ref} className={`rtm-wipe${inView ? " is-inview" : ""} ${className}`}>
      <img src={src} alt={alt} className={imgClassName} loading="lazy" />
    </span>
  );
}

/* ── Imagen con blur-up ───────────────────────────────────────────── */
export function BlurUpImage({ src, alt, className = "", imgClassName = "", eager = false }: {
  src: string; alt: string; className?: string; imgClassName?: string; eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={`block overflow-hidden ${className}`}>
      <img
        src={src} alt={alt} onLoad={() => setLoaded(true)}
        loading={eager ? "eager" : "lazy"}
        className={`rtm-blurup${loaded ? " is-loaded" : ""} ${imgClassName}`}
      />
    </span>
  );
}

/* ── Subrayado marcador en palabra clave ──────────────────────────── */
export function Marker({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.6);
  return <span ref={ref} className={`rtm-marker${inView ? " is-inview" : ""}`}>{children}</span>;
}

/* ── Icono SVG que se dibuja solo ─────────────────────────────────── */
export function DrawIcon({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  return <span ref={ref} className={`rtm-draw${inView ? " is-inview" : ""} ${className}`} aria-hidden="true">{children}</span>;
}

/* ── Spotlight que sigue el puntero (desktop) ─────────────────────── */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      el.style.setProperty("--hx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--hy", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener("pointermove", move, { passive: true });
    return () => el.removeEventListener("pointermove", move);
  }, []);
  return ref;
}

/* ── Tilt 3D sutil (desktop) ──────────────────────────────────────── */
export function TiltCard({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current; if (!el || reduced) return;
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
      });
    };
    const leave = () => { cancelAnimationFrame(raf); el.style.transform = ""; };
    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); cancelAnimationFrame(raf); };
  }, [max, reduced]);
  return <div ref={ref} className={`rtm-tilt ${className}`}>{children}</div>;
}

/* ── Botón magnético (desktop) ────────────────────────────────────── */
export function Magnetic({ children, strength = 18 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = ref.current; if (!el || reduced) return;
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        const d = Math.hypot(x, y);
        const pull = Math.min(1, d / 120);
        el.style.transform = `translate(${(x / 120) * strength * pull}px, ${(y / 120) * strength * pull}px)`;
      });
    };
    const leave = () => { cancelAnimationFrame(raf); el.style.transform = ""; };
    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); cancelAnimationFrame(raf); };
  }, [strength, reduced]);
  return <span ref={ref} className="rtm-magnetic inline-block">{children}</span>;
}

/* ── Ripple al tocar ──────────────────────────────────────────────── */
export function withRipple(e: React.PointerEvent<HTMLElement>) {
  const host = e.currentTarget;
  const r = host.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const ink = document.createElement("span");
  ink.className = "rtm-ripple-ink";
  ink.style.width = ink.style.height = `${size}px`;
  ink.style.left = `${e.clientX - r.left - size / 2}px`;
  ink.style.top = `${e.clientY - r.top - size / 2}px`;
  host.appendChild(ink);
  setTimeout(() => ink.remove(), 650);
}

/* ── CTA fijo al bajar ────────────────────────────────────────────── */
export function StickyCta({ href, label, showAfter = 600 }: { href: string; label: string; showAfter?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setShow(window.scrollY > showAfter));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [showAfter]);
  return (
    <div className={`rtm-sticky-cta${show ? " show" : ""}`} aria-hidden={!show}>
      <a
        href={href} tabIndex={show ? 0 : -1}
        className="rtm-btn-shine rtm-ripple-host rtm-cta-pulse flex items-center justify-center gap-2 bg-red-600 text-white font-black py-4 px-6 rounded-2xl shadow-2xl"
        onPointerDown={withRipple}
      >
        {label} →
      </a>
    </div>
  );
}

/* ── Check animado de éxito en formularios ─────────────────────────── */
export function FormSuccessCheck({ label = "¡Enviado!" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-8" role="status">
      <span className="rtm-check-pop flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path className="rtm-check-draw" d="M4 12.5l5 5L20 6.5" />
        </svg>
      </span>
      <p className="text-lg font-black text-gray-900">{label}</p>
    </div>
  );
}

/* ── Skeleton genérico ────────────────────────────────────────────── */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`rtm-skeleton ${className}`} aria-hidden="true" />;
}

/* ── Sección de scroll horizontal de modelos ───────────────────────── */
export function HorizontalModels({ children, title }: { children: ReactNode; title?: ReactNode }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && window.innerWidth >= 640) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);
  return (
    <section aria-label={typeof title === "string" ? title : undefined}>
      {title}
      <div ref={trackRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </section>
  );
}

/* ── Quiz "¿qué coche encaja contigo?" ─────────────────────────────── */
interface QuizQ { q: string; opts: { label: string; tag: string }[] }
const QUIZ: QuizQ[] = [
  { q: "¿Para qué lo vas a usar sobre todo?", opts: [
    { label: "Ciudad y trayectos cortos", tag: "urbano" },
    { label: "Viajes largos por carretera", tag: "viajero" },
    { label: "Familia y maletero grande", tag: "familiar" },
    { label: "Disfrutar conduciendo", tag: "deportivo" } ] },
  { q: "¿Qué presupuesto tienes?", opts: [
    { label: "Menos de 25.000 €", tag: "eco" },
    { label: "25.000 – 40.000 €", tag: "mid" },
    { label: "Más de 40.000 €", tag: "premium" } ] },
  { q: "¿Qué te importa más?", opts: [
    { label: "Gastar poco en consumo", tag: "eco" },
    { label: "Máxima autonomía eléctrica", tag: "electrico" },
    { label: "Potencia y prestaciones", tag: "deportivo" },
    { label: "Espacio y practicidad", tag: "familiar" } ] },
];
const QUIZ_RESULT: Record<string, { title: string; desc: string; href: string }> = {
  urbano: { title: "Un urbano eléctrico", desc: "Ágil, barato de usar y perfecto para la ciudad y la ZBE.", href: "/comparador-coches" },
  viajero: { title: "Una berlina de gran autonomía", desc: "Cómoda, eficiente y con autonomía de sobra para viajar.", href: "/comparador-coches" },
  familiar: { title: "Un SUV familiar", desc: "Espacio, maletero y seguridad para los tuyos.", href: "/comparador-coches" },
  deportivo: { title: "Un deportivo eléctrico", desc: "Potencia instantánea y sensaciones fuertes.", href: "/comparador-coches" },
  eco: { title: "Un eléctrico asequible", desc: "El menor coste por kilómetro sin renunciar a nada.", href: "/comparador-coches" },
  mid: { title: "Un SUV equilibrado", desc: "El punto justo entre precio, espacio y autonomía.", href: "/comparador-coches" },
  premium: { title: "Un premium eléctrico", desc: "Lo mejor en tecnología, acabados y prestaciones.", href: "/comparador-coches" },
  electrico: { title: "Un eléctrico de gran autonomía", desc: "Más de 500 km para olvidarte del enchufe.", href: "/comparador-coches" },
};
export function QuizCoche() {
  const [step, setStep] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const pick = (tag: string) => {
    const nt = [...tags, tag];
    setTags(nt);
    if (step + 1 >= QUIZ.length) setDone(true);
    else setStep(step + 1);
  };
  if (done) {
    const counts = new Map<string, number>();
    tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1));
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "mid";
    const r = QUIZ_RESULT[top];
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gray-950 p-8 text-center">
        <Confetti />
        <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Tu resultado</p>
        <h3 className="text-3xl font-black text-white mb-3">Te encaja: {r.title}</h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">{r.desc}</p>
        <a href={r.href} className="rtm-btn-shine rtm-cta-pulse inline-block bg-red-600 hover:bg-red-700 text-white font-black px-8 py-3.5 rounded-2xl transition-colors">
          Comparar modelos →
        </a>
        <button onClick={() => { setStep(0); setTags([]); setDone(false); }} className="block mx-auto mt-4 text-sm text-gray-400 hover:text-white underline">
          Repetir el quiz
        </button>
      </div>
    );
  }
  const q = QUIZ[step];
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
      <div className="flex gap-1.5 mb-5" aria-hidden="true">
        {QUIZ.map((_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-red-600" : "bg-gray-200"}`} />
        ))}
      </div>
      <h3 key={step} className="rtm-hero-in text-xl sm:text-2xl font-black text-gray-900 mb-5" style={{ "--hero-delay": "0ms" } as CSSProperties}>{q.q}</h3>
      <div className="grid gap-3">
        {q.opts.map((o, i) => (
          <button
            key={o.label}
            onClick={() => pick(o.tag)}
            onPointerDown={withRipple}
            className="rtm-quiz-opt rtm-ripple-host rtm-menu-item text-left border-2 border-gray-200 hover:border-red-500 rounded-2xl px-5 py-4 font-bold text-gray-800 hover:bg-red-50"
            style={{ "--mi": i } as CSSProperties}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   LOTE 2 (03/10/2026, orden de Daniel) — 8 animaciones premium.
   Reglas: una animación por elemento/trigger, solo transform/opacity
   (salvo el fill de batería), prefers-reduced-motion desactiva todo,
   sin títulos animados, sin botón volver-arriba, sin fondo aurora.
   ═══════════════════════════════════════════════════════════════════ */

/* 1. Coche SVG que se dibuja solo al entrar en viewport.
   Separador visual elegante, solo trazos, colores de marca. */
export function DrawCar({ className = "" }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className={`rtm-drawcar${inView ? " is-inview" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 420 170" fill="none">
        <path pathLength={1} className="rtm-drawcar-p d1" d="M15 140 H405" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
        <path pathLength={1} className="rtm-drawcar-p d2" d="M30 118 C35 96 55 88 85 84 C110 60 145 52 190 54 C235 56 265 62 290 82 C330 86 365 94 372 112 C376 120 372 128 364 128 L44 128 C34 128 28 124 30 118 Z" stroke="#dc2626" strokeWidth="4" strokeLinejoin="round" />
        <path pathLength={1} className="rtm-drawcar-p d3" d="M118 80 C138 62 165 58 195 60 L195 82 L118 82 Z" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
        <path pathLength={1} className="rtm-drawcar-p d4" d="M205 60 C235 61 258 66 278 80 L205 82 Z" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" />
        <circle pathLength={1} className="rtm-drawcar-p d5" cx="110" cy="128" r="20" stroke="#1e293b" strokeWidth="4" />
        <circle pathLength={1} className="rtm-drawcar-p d6" cx="310" cy="128" r="20" stroke="#1e293b" strokeWidth="4" />
        <path pathLength={1} className="rtm-drawcar-p d7" d="M350 100 L368 105" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* 2. Velocímetro SVG: la aguja sube animada hasta el valor al entrar en viewport.
   Solo se anima la aguja (transform rotate). */
export function Speedometer({ value, max, label, unit = "km/h" }: {
  value: number; max: number; label: string; unit?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const reduced = useReducedMotion();
  const show = inView || reduced;
  const ratio = Math.min(1, Math.max(0, value / max));
  const angle = -90 + ratio * 180;
  const ticks = Array.from({ length: 9 }, (_, i) => -90 + i * 22.5);
  const arcLen = Math.PI * 85;
  if (!(Number(value) > 0)) return null; // 18/10/2026: nunca pintar ceros ni vacíos
  return (
    <div ref={ref} className="rtm-speedo" role="img" aria-label={`${label}: ${value} ${unit}`}>
      <svg viewBox="0 0 200 124">
        <path d="M20 106 A 85 85 0 0 1 180 106" fill="none" stroke="#e5e7eb" strokeWidth="12" strokeLinecap="round" />
        <path d="M20 106 A 85 85 0 0 1 180 106" fill="none" stroke="#dc2626" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={`${(ratio * arcLen).toFixed(1)} ${arcLen.toFixed(1)}`} />
        {ticks.map((t) => {
          const rad = (t * Math.PI) / 180;
          return <line key={t} x1={100 + 66 * Math.cos(rad)} y1={106 + 66 * Math.sin(rad)}
            x2={100 + 78 * Math.cos(rad)} y2={106 + 78 * Math.sin(rad)} stroke="#9ca3af" strokeWidth="2" />;
        })}
        <g className={`rtm-speedo-needle${show ? " is-inview" : ""}${reduced ? " rtm-no-anim" : ""}`}
          style={{ ["--needle-angle" as string]: `${angle.toFixed(1)}deg` } as CSSProperties}>
          <line x1="100" y1="106" x2="100" y2="40" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        </g>
        <circle cx="100" cy="106" r="9" fill="#1e293b" />
        <circle cx="100" cy="106" r="3.5" fill="#dc2626" />
      </svg>
      <p className="rtm-speedo-value">{value}<span> {unit}</span></p>
      <p className="rtm-speedo-label">{label}</p>
    </div>
  );
}

/* 3. Batería que se carga: fill interno animado al hacer scroll + dato de kW.
   El width del fill interno está permitido por la spec del lote. */
export function BatteryFill({ kw }: { kw: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const reduced = useReducedMotion();
  const show = inView || reduced;
  const fill = Math.min(100, Math.round((kw / 350) * 100));
  if (!(Number(kw) > 0)) return null; // 18/10/2026: nunca pintar ceros ni vacíos
  return (
    <div ref={ref} className="rtm-battery" role="img" aria-label={`Carga rápida: ${kw} kilovatios`}>
      <div className="rtm-battery-shell">
        <div className={`rtm-battery-fill${reduced ? " rtm-no-anim" : ""}`} style={{ width: show ? `${fill}%` : "0%" }} />
        <span className="rtm-battery-bolt" aria-hidden="true">⚡</span>
      </div>
      <div className="rtm-battery-tip" aria-hidden="true" />
      <p className="rtm-battery-label">{kw} kW <span>de carga rápida DC</span></p>
    </div>
  );
}

/* 4. Pit stop en el comparador: al cambiar la selección (pitKey), cada mitad
   "entra en boxes" desde su lateral con líneas de velocidad y destello (~800ms). */
export function PitStop({ side, pitKey, children, className = "" }: {
  side: "a" | "b"; pitKey: string; children: ReactNode; className?: string;
}) {
  const [play, setPlay] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) { setPlay(true); return; }
    setPlay(false);
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setPlay(true)));
    return () => cancelAnimationFrame(raf);
  }, [pitKey, reduced]);
  return (
    <div className={`rtm-pitstop rtm-pitstop-${side}${play ? " is-play" : ""} ${className}`}>
      <span className="rtm-pitstop-lines" aria-hidden="true" />
      {children}
    </div>
  );
}

/* 5. Foto → ficha (morph): al tocar la tarjeta, un overlay se expande desde
   la tarjeta a pantalla completa y luego navega. Fallback: navegación normal. */
export function MorphCard({ href, children, className = "", label }: {
  href: string; children: ReactNode; className?: string; label?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const card = ref.current;
    if (!card || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    const r = card.getBoundingClientRect();
    if (r.width === 0) { window.location.href = href; return; }
    const ov = document.createElement("div");
    ov.className = "rtm-morph-ov";
    ov.style.left = `${r.left}px`; ov.style.top = `${r.top}px`;
    ov.style.width = `${r.width}px`; ov.style.height = `${r.height}px`;
    document.body.appendChild(ov);
    const s = Math.max(window.innerWidth / r.width, window.innerHeight / r.height) * 1.3;
    let done = false;
    const go = () => { if (!done) { done = true; window.location.href = href; } };
    try {
      const anim = ov.animate(
        [{ transform: "scale(1)", borderRadius: "16px" }, { transform: `scale(${s})`, borderRadius: "0px" }],
        { duration: 380, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
      );
      anim.onfinish = go;
    } catch { go(); return; }
    window.setTimeout(go, 900);
  };
  return <a ref={ref} href={href} onClick={onClick} className={className} aria-label={label}>{children}</a>;
}

/* 6. Barra comparativa en vivo: al arrastrar el dedo sobre la pista, el fill
   responde con scaleX (sin tocar el layout) y vuelve con spring al soltar. */
export function LiveBar({ pct, ganadora, etiqueta }: {
  pct: number; ganadora: boolean; etiqueta: string;
}) {
  const { ref: viewRef, inView } = useInView<HTMLDivElement>(0.3);
  const trackRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<number | null>(null);
  const handle = (clientX: number) => {
    const el = trackRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setDrag(Math.min(1, Math.max(0, (clientX - r.left) / r.width)));
  };
  const end = () => setDrag(null);
  return (
    <div ref={viewRef}>
      <p className="mb-1 text-xs font-semibold text-gray-600">{etiqueta}</p>
      <div
        ref={trackRef}
        className="rtm-livebar-track h-2.5 overflow-hidden rounded-full bg-gray-100"
        style={{ touchAction: "pan-y" }}
        onPointerDown={(e) => { (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId); handle(e.clientX); }}
        onPointerMove={(e) => { if (drag !== null || e.pointerType === "touch") handle(e.clientX); }}
        onPointerUp={end} onPointerCancel={end} onPointerLeave={end}
      >
        <div
          className={`h-full rounded-full ${ganadora
            ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
            : "bg-gradient-to-r from-red-600 to-amber-500"}`}
          style={{
            width: inView ? `${pct}%` : "0%",
            transform: drag !== null ? `scaleX(${(0.88 + drag * 0.24).toFixed(3)})` : "scaleX(1)",
            transformOrigin: "left center",
            transition: drag !== null
              ? "width 1s cubic-bezier(.22,1,.36,1)"
              : "width 1s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.34,1.56,.64,1)",
          }}
        />
      </div>
    </div>
  );
}

/* 7. Modo noche en galerías: toggle que aplica filtro nocturno + resplandor
   simulado de faros con overlay radial. Transición suave. */
export function NightGallery({ children, label = "Galería" }: { children: ReactNode; label?: string }) {
  const [night, setNight] = useState(false);
  return (
    <div className={`rtm-nightgal${night ? " is-night" : ""}`}>
      <div className="rtm-nightgal-bar">
        <span className="rtm-nightgal-title">{label}</span>
        <button
          type="button" role="switch" aria-checked={night}
          onClick={() => setNight((n) => !n)}
          className={`rtm-nightgal-toggle${night ? " is-on" : ""}`}
        >
          <span className="rtm-nightgal-knob" aria-hidden="true" />
          {night ? "🌙 Noche" : "☀️ Día"}
        </button>
      </div>
      {children}
    </div>
  );
}

/* 8. Zoom infinito en portada: la imagen hace zoom continuo ligado al
   progreso de scroll (rAF, solo transform, sin layout thrash). */
export function InfiniteZoom({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current, img = imgRef.current;
      if (!el || !img) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      img.style.transform = `scale(${(1 + p * 0.7).toFixed(3)})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div ref={ref} className="rtm-infzoom">
      <img ref={imgRef} src={src} alt={alt} loading="lazy" className="rtm-infzoom-img" />
      {caption && <p className="rtm-infzoom-cap">{caption}</p>}
    </div>
  );
}

/* ── HERO SCAN (03/10/2026, ideas 1+5 de Daniel): línea de escaneo que baja
   por el hero como analizando una multa + documento que se escanea y muestra
   ✓. Solo transform/opacity. Respeta prefers-reduced-motion. Los títulos no
   se tocan. ── */
export function HeroScanLine({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div
      aria-hidden="true"
      className={`rtm-scanline ${className}`}
    >
      <style>{`
        .rtm-scanline { position: absolute; left: 0; right: 0; top: 0; height: 72px; pointer-events: none; z-index: 5;
          background: linear-gradient(to bottom, transparent, rgba(34,197,94,.25) 55%, rgba(34,197,94,.8) 98%, #4ade80 100%);
          box-shadow: 0 1px 14px rgba(34,197,94,.6);
          animation: rtm-scan 5.5s ease-in-out infinite; will-change: transform; }
        @keyframes rtm-scan { 0% { transform: translateY(-80px); opacity: 0; } 8% { opacity: 1; }
          55% { transform: translateY(46vh); opacity: 1; } 65% { transform: translateY(46vh); opacity: 0; }
          100% { transform: translateY(-80px); opacity: 0; } }
      `}</style>
    </div>
  );
}

export function HeroScanDoc({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (reduced) return;
    const t1 = setTimeout(() => setChecked(true), 2600);
    const t2 = setTimeout(() => setChecked(false), 5200);
    const iv = setInterval(() => {
      setChecked(true);
      setTimeout(() => setChecked(false), 2600);
    }, 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(iv); };
  }, [reduced]);
  return (
    <div
      aria-hidden="true"
      className={`rtm-scandoc ${className}`}
    >
      <style>{`
        .rtm-scandoc { position: absolute; z-index: 6; pointer-events: none;
          animation: rtm-docfloat 5.5s ease-in-out infinite; will-change: transform; }
        @keyframes rtm-docfloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .rtm-scandoc-card { position: relative; width: 92px; border-radius: 14px; background: rgba(255,255,255,.96);
          box-shadow: 0 10px 30px rgba(0,0,0,.35); padding: 10px 10px 8px; overflow: hidden; }
        .rtm-scandoc-line { height: 6px; border-radius: 3px; background: #e5e7eb; margin-bottom: 6px; }
        .rtm-scandoc-scan { position: absolute; left: 0; right: 0; top: 0; height: 26px;
          background: linear-gradient(to bottom, transparent, rgba(239,68,68,.55));
          animation: rtm-docscan 5.5s ease-in-out infinite; will-change: transform; }
        @keyframes rtm-docscan { 0% { transform: translateY(-30px); } 45% { transform: translateY(110px); } 100% { transform: translateY(-30px); } }
        .rtm-scandoc-tick { position: absolute; right: -8px; top: -8px; width: 28px; height: 28px;
          background: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,.3); transition: opacity .4s ease, transform .4s ease; }
      `}</style>
      <div className="rtm-scandoc-card">
        <div className="rtm-scandoc-line" style={{ width: "70%" }} />
        <div className="rtm-scandoc-line" style={{ width: "100%" }} />
        <div className="rtm-scandoc-line" style={{ width: "85%" }} />
        <div className="rtm-scandoc-line" style={{ width: "55%", marginBottom: 0 }} />
        {!reduced && <div className="rtm-scandoc-scan" />}
        <div
          className="rtm-scandoc-tick"
          style={{ opacity: checked ? 1 : 0, transform: checked ? "scale(1)" : "scale(.4)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── DRIVE-IN: la imagen entra desde la derecha como un coche y se queda fija
   (03/10/2026, orden Daniel: "el coche entrando de portada y se queda luego
   la imagen fija"). Solo transform. Respeta prefers-reduced-motion. ── */
export const HERO_SIZES = "(max-width: 928px) calc(100vw - 32px), 896px";
export function DriveInImage({ src, alt, className = "", imgClassName = "", eager = false, width, height }: {
  src: string; alt: string; className?: string; imgClassName?: string; eager?: boolean; width?: number; height?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <span className={`block overflow-hidden ${className}`}>
      <style>{`
        .rtm-drivein { will-change: transform; }
        .rtm-drivein-enter { animation: rtm-drivein 1.4s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes rtm-drivein {
          0% { transform: translateX(60%) scale(1.04); }
          100% { transform: translateX(0) scale(1); }
        }
      `}</style>
      <img
        src={src}
        // 13/10/2026 (LCP móvil): variantes -480w/-828w generadas por scripts/gen-hero-variantes.py
        // para todas las fotos de portada de fichas y blog (/media/*.webp).
        srcSet={eager && /^\/media\/.+\.webp$/.test(src) ? `${src.replace(/\.webp$/, "-480w.webp")} 480w, ${src.replace(/\.webp$/, "-828w.webp")} 828w, ${src} ${width && width > 828 ? width : 1200}w` : undefined}
        sizes={eager && /^\/media\/.+\.webp$/.test(src) ? HERO_SIZES : undefined}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding={eager ? "sync" : "async"}
        width={width}
        height={height}
        className={`${reduced ? "" : "rtm-drivein rtm-drivein-enter"} ${imgClassName}`}
      />
    </span>
  );
}

/* ── HERO AI DOC (03/10/2026, idea 3 aprobada por Daniel): la IA disecciona
   un boletín de denuncia DGT marcando defectos. Fondo luces de policía,
   sirena roja/azul animada, scan beam, etiquetas de defectos. ── */
export function HeroAIDoc() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden="true" className="rtm-heroaidoc">
      <style>{`
        .rtm-heroaidoc { position: absolute; inset: 0; overflow: hidden; }
        .rtm-heroaidoc-bg { position: absolute; inset: 0; }
        .rtm-heroaidoc-bg img { width: 100%; height: 100%; object-fit: cover; }
        .rtm-heroaidoc-bg::after { content: ""; position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(5,8,20,.72), rgba(5,8,20,.35) 45%, rgba(5,8,20,.78)); }
        .rtm-siren { position: absolute; top: 0; bottom: 0; width: 120px; z-index: 4; pointer-events: none; }
        .rtm-siren-left { left: 0; background: linear-gradient(to right, rgba(239,68,68,.55), transparent);
          animation: rtm-sirenred 1.2s ease-in-out infinite; }
        .rtm-siren-right { right: 0; background: linear-gradient(to left, rgba(59,130,246,.55), transparent);
          animation: rtm-sirenblue 1.2s ease-in-out infinite; }
        @keyframes rtm-sirenred { 0%, 100% { opacity: .15; } 50% { opacity: 1; } }
        @keyframes rtm-sirenblue { 0%, 100% { opacity: 1; } 50% { opacity: .15; } }
        .rtm-doc { position: absolute; left: 50%; top: 36%; transform: translate(-50%,-50%) rotate(-3deg);
          width: min(300px, 76vw); background: #fff; border-radius: 10px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.5); z-index: 5; }
        .rtm-doc-header { background: #1e3a8a; color: #fff; padding: 10px 14px; display: flex; align-items: center; gap: 10px; }
        .rtm-doc-shield { width: 32px; height: 32px; background: #fff; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-weight: 900; color: #1e3a8a; font-size: 12px; flex-shrink: 0; }
        .rtm-doc-t1 { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .5px; }
        .rtm-doc-t2 { font-size: 9px; opacity: .85; }
        .rtm-doc-body { padding: 14px; }
        .rtm-doc-row { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 7px; }
        .rtm-doc-k { color: #6b7280; } .rtm-doc-v { font-weight: 700; color: #111; }
        .rtm-dline { height: 9px; border-radius: 4px; background: #e5e7eb; margin-bottom: 9px; position: relative; }
        .rtm-aimark { position: absolute; inset: -4px; border-radius: 7px; border: 2.5px solid #16a34a;
          opacity: 0; animation: rtm-markin 7s ease-in-out infinite; pointer-events: none; }
        .rtm-aimark::after { content: "!"; position: absolute; right: -11px; top: -13px; width: 22px; height: 22px;
          background: #dc2626; color: #fff; border-radius: 50%; font-size: 13px; font-weight: 900;
          display: flex; align-items: center; justify-content: center; }
        @keyframes rtm-markin { 0%, 6% { opacity: 0; transform: scale(1.12); } 11%, 72% { opacity: 1; transform: scale(1); } 80%, 100% { opacity: 0; } }
        .rtm-scanbeam { position: absolute; left: 10%; right: 10%; height: 3px; z-index: 6;
          background: #4ade80; box-shadow: 0 0 18px 5px rgba(74,222,128,.75);
          animation: rtm-beam 7s ease-in-out infinite; }
        @keyframes rtm-beam { 0% { top: 14%; opacity: 0; } 5% { opacity: 1; } 58% { top: 80%; opacity: 1; } 68%, 100% { top: 80%; opacity: 0; } }
        .rtm-tag { position: absolute; z-index: 7; background: rgba(220,38,38,.95); color: #fff;
          font-size: 10px; font-weight: 700; padding: 5px 11px; border-radius: 999px;
          opacity: 0; animation: rtm-tagin 7s ease-in-out infinite; white-space: nowrap;
          box-shadow: 0 2px 10px rgba(0,0,0,.3); }
        @keyframes rtm-tagin { 0%, 9% { opacity: 0; transform: translateY(6px); } 14%, 70% { opacity: 1; transform: translateY(0); } 78%, 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .rtm-siren-left, .rtm-siren-right, .rtm-aimark, .rtm-scanbeam, .rtm-tag { animation: none !important; }
          .rtm-aimark, .rtm-tag { opacity: 1 !important; }
        }
      `}</style>
      <div className="rtm-heroaidoc-bg">
        <img src="/media/hero-bg-police-lights.webp" alt="" aria-hidden="true" />
      </div>
      {!reduced && (
        <>
          <div className="rtm-siren rtm-siren-left" />
          <div className="rtm-siren rtm-siren-right" />
        </>
      )}
      <div className="rtm-doc">
        <div className="rtm-doc-header">
          <div className="rtm-doc-shield">DGT</div>
          <div>
            <div className="rtm-doc-t1">Dirección General de Tráfico</div>
            <div className="rtm-doc-t2">Boletín de denuncia · Exp. 2026-08417</div>
          </div>
        </div>
        <div className="rtm-doc-body">
          <div className="rtm-doc-row"><span className="rtm-doc-k">Fecha denuncia</span><span className="rtm-doc-v">15/09/2026 18:42</span></div>
          <div className="rtm-doc-row"><span className="rtm-doc-k">Lugar</span><span className="rtm-doc-v">M-30, km 12,4 · Madrid</span></div>
          <div className="rtm-dline" style={{ width: "92%" }}>{!reduced && <div className="rtm-aimark" style={{ animationDelay: ".8s" }} />}</div>
          <div className="rtm-dline" style={{ width: "78%" }}>{!reduced && <div className="rtm-aimark" style={{ animationDelay: "2.1s" }} />}</div>
          <div className="rtm-dline" style={{ width: "86%" }}>{!reduced && <div className="rtm-aimark" style={{ animationDelay: "3.4s" }} />}</div>
          <div className="rtm-dline" style={{ width: "64%" }} />
          <div className="rtm-doc-row" style={{ marginTop: 10, marginBottom: 0 }}><span className="rtm-doc-k">Importe</span><span className="rtm-doc-v" style={{ color: "#dc2626" }}>300 €</span></div>
        </div>
      </div>
      {!reduced && (
        <>
          <div className="rtm-scanbeam" />
          <div className="rtm-tag" style={{ left: "8%", top: "18%", animationDelay: ".8s" }}>Sin firma del agente</div>
          <div className="rtm-tag" style={{ right: "7%", top: "38%", animationDelay: "2.1s" }}>Falta certificado del radar</div>
          <div className="rtm-tag" style={{ left: "9%", top: "56%", animationDelay: "3.4s" }}>Conductor sin identificar</div>
        </>
      )}
    </div>
  );
}

/* ── HERO COMPACT DOC (03/10/2026, idea 3 v3 aprobada por Daniel):
   Versión compacta horizontal: texto alargado a la izquierda, mini boletín
   DGT a la derecha con la IA marcando defectos en verde. Fondo blanco. ── */
export function HeroCompactDoc({ title, subtitle }: { title: React.ReactNode; subtitle: string }) {
  const reduced = useReducedMotion();
  return (
    <div className="bg-white">
      <style>{`
        .rtm-cdoc { position: relative; width: 150px; flex-shrink: 0; }
        .rtm-cdoc-doc { background: #fff; border-radius: 10px; overflow: hidden;
          box-shadow: 0 8px 28px rgba(0,0,0,.14); border: 1px solid #e2e8f0; transform: rotate(3deg); }
        .rtm-cdoc-header { background: #1e3a8a; color: #fff; padding: 8px 10px;
          display: flex; align-items: center; gap: 8px; }
        .rtm-cdoc-shield { width: 24px; height: 24px; background: #fff; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; color: #1e3a8a; font-size: 9px; flex-shrink: 0; }
        .rtm-cdoc-t1 { font-size: 8px; font-weight: 800; text-transform: uppercase; }
        .rtm-cdoc-t2 { font-size: 7px; opacity: .85; }
        .rtm-cdoc-body { padding: 10px; }
        .rtm-cdoc-row { display: flex; justify-content: space-between; font-size: 8px; margin-bottom: 5px; }
        .rtm-cdoc-k { color: #94a3b8; } .rtm-cdoc-v { font-weight: 700; color: #0f172a; }
        .rtm-cdoc-line { height: 7px; border-radius: 4px; background: #f1f5f9;
          margin-bottom: 7px; position: relative; border: 1px solid #e2e8f0; }
        .rtm-cdoc-mark { position: absolute; inset: -3px; border-radius: 6px;
          border: 2px solid #16a34a; opacity: 0; animation: rtm-cdoc-markin 5s ease-in-out infinite; }
        @keyframes rtm-cdoc-markin { 0%, 8% { opacity: 0; } 15%, 75% { opacity: 1; } 85%, 100% { opacity: 0; } }
        .rtm-cdoc-scan { position: absolute; left: -4px; right: -4px; height: 2px;
          background: #22c55e; box-shadow: 0 0 10px 3px rgba(34,197,94,.5);
          animation: rtm-cdoc-beam 5s ease-in-out infinite; }
        @keyframes rtm-cdoc-beam { 0% { top: 10%; opacity: 0; } 8% { opacity: 1; }
          60% { top: 88%; opacity: 1; } 72%, 100% { top: 88%; opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .rtm-cdoc-mark, .rtm-cdoc-scan { animation: none !important; }
          .rtm-cdoc-mark { opacity: 1 !important; }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-5 py-6 flex gap-5 items-center">
        <div className="flex-1 min-w-0">
          <div className="anim-rise inline-flex items-center gap-1.5 bg-red-600 rounded-full px-3 py-1.5 mb-3 whitespace-nowrap shadow-md shadow-red-600/25" style={{ animationDelay: "200ms", animationDuration: "600ms" }}>
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] text-white font-extrabold uppercase tracking-widest">Gratis · Sin registro</span>
          </div>
          <h1 className="anim-rise text-[22px] md:text-3xl font-black text-gray-900 leading-tight mb-2" style={{ animationDelay: "300ms", animationDuration: "600ms" }}>
            {title}
          </h1>
          <p className="anim-rise text-[13px] md:text-sm text-gray-500 leading-relaxed" style={{ animationDelay: "400ms", animationDuration: "600ms" }}>
            {subtitle}
          </p>
        </div>
        <div className="rtm-cdoc" aria-hidden="true">
          {!reduced && <div className="rtm-cdoc-scan" />}
          <div className="rtm-cdoc-doc">
            <div className="rtm-cdoc-header">
              <div className="rtm-cdoc-shield">DGT</div>
              <div>
                <div className="rtm-cdoc-t1">Dirección General de Tráfico</div>
                <div className="rtm-cdoc-t2">Boletín de denuncia</div>
              </div>
            </div>
            <div className="rtm-cdoc-body">
              <div className="rtm-cdoc-row"><span className="rtm-cdoc-k">Fecha</span><span className="rtm-cdoc-v">15/09/2026</span></div>
              <div className="rtm-cdoc-row"><span className="rtm-cdoc-k">Matrícula</span><span className="rtm-cdoc-v">4821 KAT</span></div>
              <div className="rtm-cdoc-line" style={{ width: "95%" }}>{!reduced && <div className="rtm-cdoc-mark" style={{ animationDelay: ".5s" }} />}</div>
              <div className="rtm-cdoc-line" style={{ width: "80%" }}>{!reduced && <div className="rtm-cdoc-mark" style={{ animationDelay: "1.5s" }} />}</div>
              <div className="rtm-cdoc-line" style={{ width: "70%" }} />
              <div className="rtm-cdoc-row" style={{ margin: 0 }}><span className="rtm-cdoc-k">Importe</span><span className="rtm-cdoc-v">300 €</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── HERO CENTERED DOC (03/10/2026, idea 3 v8 aprobada por Daniel):
   Comparativa: documento "sin analizar" (gris, con ?) vs "analizado por IA"
   (scanner, fallos en rojo, sello 80% con contador). ── */
export function HeroCenteredDoc({ title, subtitle }: { title: React.ReactNode; subtitle: string }) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduced) { setCount(80); return; }
    let raf: number; const dur = 6000; let start: number | null = null;
    // 05/10/2026 (PageSpeed TBT): el contador solo despacha setCount cuando el
    // valor cambia — antes llamaba a setState 60 veces/s eternamente.
    let last = -1;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = ((t - start) % dur) / dur;
      let v = 0;
      if (p >= 0.66 && p <= 0.80) v = Math.round(((p - 0.66) / 0.14) * 80);
      else if (p > 0.80 && p < 0.96) v = 80;
      if (v !== last) { last = v; setCount(v); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const docBody = (gray: boolean) => (
    <>
      <div className="rtm-hcd-row"><span className="rtm-hcd-k">Fecha</span><span className="rtm-hcd-v">15/09/2026</span></div>
      <div className="rtm-hcd-row"><span className="rtm-hcd-k">Matrícula</span><span className="rtm-hcd-v">4821 KAT</span></div>
      <div className="rtm-hcd-line" style={{ width: "95%" }}>{!gray && !reduced && <div className="rtm-hcd-mark" style={{ animationDelay: ".7s" }} />}</div>
      <div className="rtm-hcd-line" style={{ width: "85%" }}>{!gray && !reduced && <div className="rtm-hcd-mark" style={{ animationDelay: "1.8s" }} />}</div>
      <div className="rtm-hcd-line" style={{ width: "70%" }}>{!gray && !reduced && <div className="rtm-hcd-mark" style={{ animationDelay: "2.6s" }} />}</div>
      <div className="rtm-hcd-row" style={{ margin: 0 }}><span className="rtm-hcd-k">Importe</span><span className="rtm-hcd-v">300 €</span></div>
    </>
  );

  return (
    <div style={{ background: "#fff" }}>
      <style>{`
        .rtm-hcd-wrap { position: relative; width: 150px; flex-shrink: 0; }
        .rtm-hcd-card { background: #fff; border-radius: 10px; overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,.12); border: 1px solid #e2e8f0; }
        .rtm-hcd-card.gray { filter: grayscale(.8); opacity: .7; transform: rotate(-4deg); }
        .rtm-hcd-card.lit { transform: rotate(3deg); }
        .rtm-hcd-header { background: #1e3a8a; color: #fff; padding: 7px 9px;
          display: flex; align-items: center; gap: 7px; }
        .rtm-hcd-header.g { background: #64748b; }
        .rtm-hcd-shield { width: 22px; height: 22px; background: #fff; border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; color: #1e3a8a; font-size: 8px; flex-shrink: 0; }
        .rtm-hcd-t1 { font-size: 8px; font-weight: 800; text-transform: uppercase; text-align: left; }
        .rtm-hcd-t2 { font-size: 7px; opacity: .85; text-align: left; }
        .rtm-hcd-body { padding: 9px; text-align: left; }
        .rtm-hcd-row { display: flex; justify-content: space-between; font-size: 8px; margin-bottom: 5px; }
        .rtm-hcd-k { color: #94a3b8; } .rtm-hcd-v { font-weight: 700; color: #0f172a; }
        .rtm-hcd-line { height: 7px; border-radius: 4px; background: #f1f5f9;
          margin-bottom: 6px; position: relative; border: 1px solid #e2e8f0; }
        .rtm-hcd-card.gray .rtm-hcd-line { background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%; animation: rtm-hcd-shimmer 2.5s linear infinite; }
        @keyframes rtm-hcd-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .rtm-hcd-mark { position: absolute; inset: -3px; border-radius: 5px;
          border: 2px solid #16a34a; opacity: 0; animation: rtm-hcd-markin 6s ease-in-out infinite; }
        @keyframes rtm-hcd-markin { 0%, 8% { opacity: 0; } 15%, 50% { opacity: 1; } 58%, 100% { opacity: 0; } }
        .rtm-hcd-scan { position: absolute; left: -3px; right: -3px; height: 2px;
          background: #22c55e; box-shadow: 0 0 10px 3px rgba(34,197,94,.5);
          animation: rtm-hcd-beam 6s ease-in-out infinite; border-radius: 2px; z-index: 5; }
        @keyframes rtm-hcd-beam { 0% { top: 8%; opacity: 0; } 6% { opacity: 1; }
          45% { top: 90%; opacity: 1; } 52%, 100% { top: 90%; opacity: 0; } }
        .rtm-hcd-fault { position: absolute; z-index: 8; background: #dc2626; color: #fff;
          font-size: 9px; font-weight: 800; padding: 3px 8px; border-radius: 999px;
          white-space: nowrap; opacity: 0; animation: rtm-hcd-faultin 6s ease-in-out infinite; }
        @keyframes rtm-hcd-faultin { 0%, 52% { opacity: 0; } 60%, 88% { opacity: 1; } 96%, 100% { opacity: 0; } }
        .rtm-hcd-stamp { position: absolute; z-index: 9; top: 50%; left: 50%;
          transform: translate(-50%,-50%) rotate(-12deg) scale(2.2);
          border: 3px solid #16a34a; color: #16a34a; border-radius: 10px;
          padding: 6px 12px; background: rgba(255,255,255,.94);
          opacity: 0; animation: rtm-hcd-stampin 6s ease-in-out infinite; pointer-events: none; }
        .rtm-hcd-stamp .p { font-size: 22px; font-weight: 900; line-height: 1; }
        .rtm-hcd-stamp .l { font-size: 8px; font-weight: 800; text-transform: uppercase; }
        @keyframes rtm-hcd-stampin { 0%, 58% { opacity: 0; transform: translate(-50%,-50%) rotate(-12deg) scale(2.2); }
          66% { opacity: 1; transform: translate(-50%,-50%) rotate(-12deg) scale(1); }
          78%, 88% { opacity: 1; transform: translate(-50%,-50%) rotate(-12deg) scale(1); }
          96%, 100% { opacity: 0; } }
        .rtm-hcd-wait { position: absolute; z-index: 8; top: -12px; right: -12px; width: 32px; height: 32px;
          background: #94a3b8; color: #fff; border-radius: 50%; font-size: 18px; font-weight: 900;
          display: flex; align-items: center; justify-content: center;
          animation: rtm-hcd-waitpulse 2s ease-in-out infinite; }
        @keyframes rtm-hcd-waitpulse { 0%, 100% { transform: scale(1); opacity: .85; } 50% { transform: scale(1.15); opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .rtm-hcd-mark, .rtm-hcd-scan, .rtm-hcd-fault, .rtm-hcd-stamp, .rtm-hcd-wait, .rtm-hcd-card.gray .rtm-hcd-line { animation: none !important; }
          .rtm-hcd-mark, .rtm-hcd-fault, .rtm-hcd-stamp { opacity: 1 !important; }
          .rtm-hcd-stamp { transform: translate(-50%,-50%) rotate(-12deg) scale(1) !important; }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-6 text-center">
        <div className="anim-rise inline-flex items-center gap-1.5 bg-red-600 rounded-full px-3.5 py-1.5 mb-3 whitespace-nowrap shadow-md shadow-red-600/25" style={{ animationDelay: "200ms", animationDuration: "600ms" }}>
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] text-white font-extrabold uppercase tracking-widest">Gratis · Sin registro</span>
        </div>
        <h1 className="anim-rise text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2 max-w-xl mx-auto" style={{ animationDelay: "300ms", animationDuration: "600ms" }}>
          {title}
        </h1>
        <p className="anim-rise text-[13px] md:text-sm text-gray-500 mb-5 max-w-md mx-auto" style={{ animationDelay: "400ms", animationDuration: "600ms" }}>
          {subtitle}
        </p>
        <div className="anim-rise flex justify-center items-start gap-2.5" style={{ animationDelay: "500ms", animationDuration: "600ms" }}>
          <div className="flex flex-col items-center">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2">Sin analizar</div>
            <div className="rtm-hcd-wrap" aria-hidden="true">
              {!reduced && <div className="rtm-hcd-wait">?</div>}
              <div className="rtm-hcd-card gray">
                <div className="rtm-hcd-header g">
                  <div className="rtm-hcd-shield">DGT</div>
                  <div><div className="rtm-hcd-t1">Dirección General de Tráfico</div><div className="rtm-hcd-t2">Boletín de denuncia</div></div>
                </div>
                <div className="rtm-hcd-body">{docBody(true)}</div>
              </div>
            </div>
          </div>
          <div className="text-xl text-green-600 font-black pt-12">→</div>
          <div className="flex flex-col items-center">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-green-600 mb-2">Analizado por IA</div>
            <div className="rtm-hcd-wrap" aria-hidden="true">
              {!reduced && (
                <>
                  <div className="rtm-hcd-scan" />
                  <div className="rtm-hcd-fault" style={{ top: "30%", left: "-8px" }}>Sin firma</div>
                  <div className="rtm-hcd-fault" style={{ top: "52%", right: "-10px" }}>Sin certificado</div>
                  <div className="rtm-hcd-stamp"><div className="p">{count}%</div><div className="l">recurrir</div></div>
                </>
              )}
              <div className="rtm-hcd-card lit">
                <div className="rtm-hcd-header">
                  <div className="rtm-hcd-shield">DGT</div>
                  <div><div className="rtm-hcd-t1">Dirección General de Tráfico</div><div className="rtm-hcd-t2">Boletín de denuncia</div></div>
                </div>
                <div className="rtm-hcd-body">{docBody(false)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroScanner({ title, subtitle }: { title: React.ReactNode; subtitle: string }) {
  const reduced = useReducedMotion();

  return (
    <div style={{
      background: "linear-gradient(rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
      backgroundSize: "28px 28px, 28px 28px, 100% 100%"
    }}>
      <style>{`
        .rtm-hscan-stage { position: relative; height: 205px; overflow: hidden; margin-left: -16px; margin-right: -16px; margin-bottom: -10px; }
        .rtm-hscan-belt { position: absolute; bottom: 22px; left: 0; right: 0; height: 40px; z-index: 4; }
        .rtm-hscan-belt .frame { border-radius: 0 !important; }
        .rtm-hscan-belt .frame::before { border-radius: 0 !important; }
        .rtm-hscan-belt .rubber { border-radius: 0 !important; }
        .rtm-hscan-belt .frame { position: absolute; inset: 0; background: #64748b; border-radius: 20px; box-shadow: 0 8px 18px rgba(0,0,0,.25); }
        .rtm-hscan-belt .frame::before { content: ""; position: absolute; top: 3px; left: 10px; right: 10px; height: 9px; background: linear-gradient(180deg, rgba(255,255,255,.35), transparent); border-radius: 8px; }
        .rtm-hscan-belt .rubber { position: absolute; top: 7px; left: 14px; right: 14px; height: 26px; background: #1e293b; border-radius: 13px; overflow: hidden; box-shadow: inset 0 3px 8px rgba(0,0,0,.6); }
        .rtm-hscan-belt .rubber::before { content: ""; position: absolute; top: 0; bottom: 0; left: -30px; right: 0; background: repeating-linear-gradient(90deg, transparent 0 24px, rgba(255,255,255,.08) 24px 28px); animation: rtm-hscan-beltmv 0.9s linear infinite; }
        .rtm-hscan-belt .rubber::after { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: linear-gradient(180deg, rgba(255,255,255,.1), transparent); }
        @keyframes rtm-hscan-beltmv { from { transform: translateX(0); } to { transform: translateX(28px); } }
        .rtm-hscan-belt .leg { position: absolute; bottom: -13px; width: 8px; height: 15px; background: linear-gradient(180deg, #64748b, #475569); border-radius: 0 0 3px 3px; }
        .rtm-hscan-belt .leg.l1 { left: 15%; } .rtm-hscan-belt .leg.l2 { left: 35%; } .rtm-hscan-belt .leg.l3 { right: 35%; } .rtm-hscan-belt .leg.l4 { right: 15%; }
        .rtm-hscan-machine { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 180px; z-index: 5; }
        .rtm-hscan-machine svg { display: block; width: 100%; height: auto; }
        .rtm-hscan-svgdoc { animation: rtm-hscan-svgdoc 9s linear infinite; }
        @keyframes rtm-hscan-svgdoc { 0%, 30% { opacity: 0; } 35%, 92% { opacity: 1; } 97%, 100% { opacity: 0; } }
        .rtm-hscan-alarm { animation: rtm-hscan-svgalarm 9s infinite; }
        @keyframes rtm-hscan-svgalarm { 0%, 35% { opacity: 0; } 39%, 58% { opacity: .35; } 63%, 100% { opacity: 0; } }
        .rtm-hscan-errmsg { animation: rtm-hscan-svgerr 9s infinite; }
        @keyframes rtm-hscan-svgerr { 0%, 44% { opacity: 0; } 50%, 63% { opacity: 1; } 68%, 100% { opacity: 0; } }
        .rtm-hscan-verdict { animation: rtm-hscan-svgverdict 9s infinite; }
        @keyframes rtm-hscan-svgverdict { 0%, 67% { opacity: 0; } 75%, 93% { opacity: 1; } 98%, 100% { opacity: 0; } }
        .rtm-hscan-beacon { animation: rtm-hscan-svgbeacon 9s infinite; }
        @keyframes rtm-hscan-svgbeacon { 0%, 34% { opacity: .35; } 38%, 58% { opacity: 1; } 62%, 100% { opacity: .35; } }
        .rtm-hscan-halo { animation: rtm-hscan-svghalo 9s infinite; transform-origin: center; transform-box: fill-box; }
        @keyframes rtm-hscan-svghalo { 0%, 36% { opacity: 0; } 40%, 57% { opacity: .5; } 61%, 100% { opacity: 0; } }
        .rtm-hscan-doc { position: absolute; bottom: 62px; left: 0; z-index: 4; width: 125px; animation: rtm-hscan-travel 9s linear infinite; }
        @keyframes rtm-hscan-travel {
          0% { left: -135px; opacity: 0; }
          6% { opacity: 1; }
          28% { left: calc(50% - 100px); opacity: 1; }
          34% { left: calc(50% - 62px); opacity: 0; }
          60% { left: calc(50% - 62px); opacity: 0; }
          66% { left: calc(50% - 20px); opacity: 0; }
          72% { left: calc(50% + 20px); opacity: 1; }
          94% { left: calc(100% + 10px); opacity: 1; }
          100% { left: calc(100% + 10px); opacity: 0; }
        }
        .rtm-hscan-minidoc { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 14px 34px rgba(0,0,0,.28); border: 1px solid #e2e8f0; }
        .rtm-hscan-mdh { background: #1e3a8a; color: #fff; font-size: 9px; font-weight: 800; padding: 7px; text-transform: uppercase; }
        .rtm-hscan-mdb { padding: 10px; text-align: left; }
        .rtm-hscan-mdr { display: flex; justify-content: space-between; font-size: 9px; margin-bottom: 5px; }
        .rtm-hscan-mdk { color: #94a3b8; } .rtm-hscan-mdv { font-weight: 700; color: #0f172a; }
        .rtm-hscan-mdl { height: 7px; border-radius: 4px; background: #f1f5f9; margin-bottom: 6px; border: 1px solid #e2e8f0; position: relative; }
        .rtm-hscan-fault { position: absolute; left: -6px; top: 50%; transform: translateY(-50%); background: #dc2626; color: #fff; font-size: 8px; font-weight: 800; padding: 2px 8px; border-radius: 999px; white-space: nowrap; opacity: 0; animation: rtm-hscan-faultin 9s infinite; box-shadow: 0 2px 8px rgba(220,38,38,.5); z-index: 7; }
        @keyframes rtm-hscan-faultin { 0%, 60% { opacity: 0; } 68%, 90% { opacity: 1; } 96%, 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .rtm-hscan-belt .rubber::before, .rtm-hscan-doc, .rtm-hscan-fault, .rtm-hscan-svgdoc, .rtm-hscan-alarm, .rtm-hscan-errmsg, .rtm-hscan-verdict, .rtm-hscan-beacon, .rtm-hscan-halo { animation: none !important; }
          .rtm-hscan-doc { left: calc(100% + 10px); opacity: 1; }
          .rtm-hscan-fault, .rtm-hscan-verdict, .rtm-hscan-errmsg { opacity: 1 !important; }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 pt-2 pb-0 text-center">
        <div className="inline-flex items-center gap-1.5 bg-red-600 rounded-full px-3.5 py-1.5 mb-2 whitespace-nowrap shadow-md shadow-red-600/25">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] text-white font-extrabold uppercase tracking-widest">Gratis · Sin registro</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-1 max-w-xl mx-auto">
          {title}
        </h1>
        <p className="text-[13px] md:text-sm text-gray-500 mb-0 max-w-md mx-auto">
          {subtitle}
        </p>
        <div className="rtm-hscan-stage" aria-hidden="true">
          <div className="rtm-hscan-machine">
            <svg viewBox="0 0 240 262" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Escáner de multas">
              <g className="rtm-hscan-beacon">
                <circle className="rtm-hscan-halo" cx="52" cy="18" r="20" fill="#ef4444"/>
                <circle className="rtm-hscan-halo" cx="188" cy="18" r="20" fill="#ef4444"/>
                <rect x="49" y="30" width="6" height="102" fill="#475569"/>
                <rect x="185" y="30" width="6" height="102" fill="#475569"/>
                <rect x="46" y="28" width="12" height="8" rx="2" fill="#334155"/>
                <rect x="182" y="28" width="12" height="8" rx="2" fill="#334155"/>
                <path d="M44 28 a8 8 0 0 1 16 0 z" fill="#ef4444"/>
                <path d="M180 28 a8 8 0 0 1 16 0 z" fill="#ef4444"/>
              </g>
              <rect x="70" y="40" width="100" height="14" rx="3" fill="#334155"/>
              <text x="120" y="50" textAnchor="middle" fontSize="8" fontWeight="800" fill="#e2e8f0" fontFamily="system-ui">ESCÁNER IA</text>
              <rect x="114" y="54" width="12" height="8" fill="#475569"/>
              <rect x="60" y="62" width="120" height="66" rx="6" fill="#1e293b"/>
              <rect x="65" y="67" width="110" height="56" rx="3" fill="#000"/>
              <g className="rtm-hscan-svgdoc">
                <g transform="translate(85,72)">
                  <rect x="0" y="0" width="70" height="46" rx="2" fill="#fff"/>
                  <rect x="0" y="0" width="70" height="10" rx="2" fill="#1e3a8a"/>
                  <text x="35" y="7" textAnchor="middle" fontSize="5" fontWeight="800" fill="#fff" fontFamily="system-ui">DGT</text>
                  <rect x="5" y="15" width="40" height="4" rx="2" fill="#cbd5e1"/>
                  <rect x="5" y="22" width="32" height="4" rx="2" fill="#cbd5e1"/>
                  <rect x="5" y="29" width="26" height="4" rx="2" fill="#cbd5e1"/>
                  <text x="5" y="42" fontSize="5" fill="#64748b" fontFamily="system-ui">4821 KAT · 300€</text>
                </g>
              </g>
              <rect className="rtm-hscan-alarm" x="65" y="67" width="110" height="56" rx="3" fill="#ef4444"/>
              <g className="rtm-hscan-errmsg">
                <rect x="65" y="105" width="110" height="18" rx="3" fill="#dc2626"/>
                <text x="120" y="117" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" fontFamily="system-ui">⚠ 3 ERRORES</text>
              </g>
              <g className="rtm-hscan-verdict">
                <rect x="65" y="67" width="110" height="56" rx="3" fill="#000" opacity="0.85"/>
                <rect x="82" y="86" width="76" height="20" rx="10" fill="none" stroke="#4ade80" strokeWidth="2.5"/>
                <text x="120" y="100" textAnchor="middle" fontSize="10" fontWeight="900" fill="#4ade80" fontFamily="system-ui">✓ RECURRIR</text>
              </g>
              <rect x="30" y="132" width="180" height="117" rx="8" fill="#475569"/>
              <rect x="30" y="132" width="180" height="10" rx="5" fill="#64748b"/>
              <rect x="30" y="233" width="180" height="16" rx="4" fill="#334155"/>
              <g>
                <rect x="34" y="134" width="172" height="8" rx="2" fill="#fbbf24"/>
                <polygon points="44,134 52,134 48,142 40,142" fill="#1e293b"/>
                <polygon points="64,134 72,134 68,142 60,142" fill="#1e293b"/>
                <polygon points="84,134 92,134 88,142 80,142" fill="#1e293b"/>
                <polygon points="104,134 112,134 108,142 100,142" fill="#1e293b"/>
                <polygon points="124,134 132,134 128,142 120,142" fill="#1e293b"/>
                <polygon points="144,134 152,134 148,142 140,142" fill="#1e293b"/>
                <polygon points="164,134 172,134 168,142 160,142" fill="#1e293b"/>
                <polygon points="184,134 192,134 188,142 180,142" fill="#1e293b"/>
              </g>
              <rect x="48" y="146" width="144" height="95" rx="6" fill="#0f172a"/>
              <rect x="48" y="146" width="10" height="95" fill="#334155"/>
              <rect x="182" y="146" width="10" height="95" fill="#334155"/>
            </svg>
          </div>
          <div className="rtm-hscan-belt"><div className="frame"></div><div className="rubber"></div><div className="leg l1"></div><div className="leg l2"></div><div className="leg l3"></div><div className="leg l4"></div></div>
          <div className="rtm-hscan-doc">
            <div className="rtm-hscan-minidoc">
              <div className="rtm-hscan-mdh">DGT · Boletín</div>
              <div className="rtm-hscan-mdb">
                <div className="rtm-hscan-mdr"><span className="rtm-hscan-mdk">Matrícula</span><span className="rtm-hscan-mdv">4821 KAT</span></div>
                <div className="rtm-hscan-mdl">{!reduced && <div className="rtm-hscan-fault">✕ Sin firma</div>}</div>
                <div className="rtm-hscan-mdl" style={{ width: "80%" }}>{!reduced && <div className="rtm-hscan-fault" style={{ animationDelay: ".2s" }}>✕ Sin certificado</div>}</div>
                <div className="rtm-hscan-mdl" style={{ width: "65%" }}>{!reduced && <div className="rtm-hscan-fault" style={{ animationDelay: ".4s" }}>✕ Ilegible</div>}</div>
                <div className="rtm-hscan-mdr" style={{ margin: 0 }}><span className="rtm-hscan-mdk">Importe</span><span className="rtm-hscan-mdv">300 €</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
