// Plantilla Maextro V800 — piezas compartidas entre Ficha y Blog.
// (11/10/2026) NO modificar componentes existentes: todo lo nuevo vive aquí.
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import type { MaextroFAQ, MaextroCifra, MaextroSpec } from "./tipos.ts";

/** IntersectionObserver mínimo: anima al entrar en viewport (1 sola vez).
 * Accesibilidad (manual rtm-web-builder): con prefers-reduced-motion se
 * muestra el estado final directamente, sin animación. */
export function useEnPantalla<T extends HTMLElement = HTMLElement>(umbral = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  // Movimiento reducido: se devuelve para que las animaciones se desactiven.
  const [reducido] = useState(
    () =>
      typeof window !== "undefined" &&
      !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Sin animación si el usuario la ha desactivado: estado final ya.
    if (reducido) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const obs = new IntersectionObserver(
      (entradas) => { if (entradas.some((e) => e.isIntersecting)) { setVisible(true); obs.disconnect(); } },
      { threshold: umbral }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [umbral, reducido]);
  return { ref, visible, reducido };
}

/** Envoltorio de sección obligatoria con h2 (estructura Maextro V800). */
export function SeccionMaextro({
  id,
  titulo,
  children,
}: {
  id: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label={titulo}
    >
      <h2 className="text-xl font-extrabold text-gray-900">{titulo}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

/** "En cifras": cuadrícula de datos clave. */
export function EnCifras({ cifras }: { cifras: MaextroCifra[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {cifras.map((c, i) => (
        <div key={i} className="rounded-2xl bg-gray-50 p-3 text-center">
          <div className="text-lg font-extrabold text-gray-900">{c.valor}</div>
          <div className="mt-0.5 text-xs text-gray-600">{c.etiqueta}</div>
        </div>
      ))}
    </div>
  );
}

/** Fila de spec con barra animada (ficha técnica animada del paquete obligatorio). */
function FilaSpec({ campo, valor, activar, max, reducido }: { campo: string; valor: string; activar: boolean; max: number; reducido: boolean }) {
  // Barra proporcional a la longitud del valor: decorativa pero consistente.
  const ancho = Math.min(100, Math.max(12, (valor.length / max) * 100));
  return (
    <div className="border-b border-gray-100 py-2.5 last:border-0">
      <div className="flex items-baseline justify-between gap-3">
        <dt className="text-sm text-gray-600">{campo}</dt>
        <dd className="text-right text-sm font-bold text-gray-900">{valor}</dd>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 ${reducido ? "" : "transition-[width] duration-1000 ease-out"}`}
          style={{ width: activar ? `${ancho}%` : "0%" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/** Tabla de especificaciones animada (ficha técnica animada obligatoria). */
export function TablaSpecsAnimada({ specs }: { specs: MaextroSpec[] }) {
  const { ref, visible, reducido } = useEnPantalla<HTMLDivElement>(0.1);
  const max = Math.max(...specs.map((s) => s.valor.length), 1);
  return (
    <div ref={ref}>
      <dl>
        {specs.map((s, i) => (
          <FilaSpec key={i} campo={s.campo} valor={s.valor} activar={visible} max={max} reducido={reducido} />
        ))}
      </dl>
    </div>
  );
}

/** Estrellas EuroNCAP (5) — o "sin datos EuroNCAP" honesto (mandato). */
export function EstrellasEuroNCAP({ estrellas }: { estrellas: number | null }) {
  if (estrellas == null) {
    return (
      <p className="text-sm font-bold text-gray-700">
        Sin datos EuroNCAP: modelo no probado por EuroNCAP.
      </p>
    );
  }
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${estrellas} de 5 estrellas EuroNCAP`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`h-6 w-6 ${n <= estrellas ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
      <span className="ml-2 text-sm font-bold text-gray-900">{estrellas}/5</span>
    </div>
  );
}

/** Anillo de nota 0-10 para "La nota de Cosa". */
export function AnilloNota({ nota }: { nota: number }) {
  const { ref, visible, reducido } = useEnPantalla<HTMLDivElement>(0.4);
  const radio = 34;
  const circ = 2 * Math.PI * radio;
  const color = nota >= 7.5 ? "#059669" : nota >= 5 ? "#d97706" : "#dc2626";
  return (
    <div ref={ref} className="relative h-24 w-24 shrink-0">
      <svg viewBox="0 0 84 84" className="h-24 w-24 -rotate-90">
        <circle cx="42" cy="42" r={radio} fill="none" stroke="#e5e7eb" strokeWidth="9" />
        <circle
          cx="42"
          cy="42"
          r={radio}
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={visible ? circ * (1 - Math.min(10, Math.max(0, nota)) / 10) : circ}
          style={reducido ? undefined : { transition: "stroke-dashoffset 1.2s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-black text-gray-900">{nota.toFixed(1)}</span>
      </div>
    </div>
  );
}

/** Acordeón de preguntas frecuentes (el schema FAQPage se inyecta con useSeo). */
export function AcordeonFaq({ faqs }: { faqs: MaextroFAQ[] }) {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((f, i) => {
        const open = abierta === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setAbierta(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-3 py-3 text-left"
            >
              <span className="text-sm font-bold text-gray-900">{f.pregunta}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div
                className="pb-4 text-sm leading-relaxed text-gray-700"
                // Las respuestas permiten <a>/<strong>; el HTML viene de datos revisados.
                dangerouslySetInnerHTML={{ __html: f.respuesta }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/** CTA al analizador de multas (paquete obligatorio del blog). */
export function CtaAnalizador() {
  return (
    <div className="rtm-card mt-8 rounded-3xl border-2 border-red-600 bg-gradient-to-br from-red-700 to-red-900 p-4 text-white sm:p-6">
      <h2 className="text-xl font-extrabold">¿Tienes una multa? Analízala antes de recurrir</h2>
      <p className="mt-2 text-sm text-red-100">
        Nuestra IA comprueba gratis si tu multa tiene defectos de forma o vicios que
        permitan recurrirla. Sin registro.
      </p>
      <a
        href="https://recurretumulta.online/#analizador"
        className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-extrabold text-red-700 shadow-lg transition-transform hover:scale-105"
      >
        Analizar mi multa gratis
      </a>
    </div>
  );
}
