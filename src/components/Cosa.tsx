// ── Componentes de Cosa, la IA mascota de RecurreTuMulta.online ──────────────
// Todos usan AVATAR_COSA (src/lib/cosa.ts): cambiar de avatar = editar 1 línea.
// Animaciones: utilidades propias del repo (motion.tsx, sin dependencias,
// seguras en prerender) + keyframes GPU en index.css (.rtm-cosa-float).
// NOTA (05/10/2026): se usa motion.tsx en vez de motion/react a propósito: la
// auditoría de PageSpeed del 03/10 demostró que motion/react lastraba el LCP.
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import {
  AVATAR_COSA,
  AVATAR_COSA_CARGANDO,
  AVATAR_COSA_COLGANDO,
  AVATAR_COSA_GUINO,
  calcularNotaCosa,
  type NotaCosaInput,
} from "@/lib/cosa.ts";
import { useInView, CountUp } from "./motion-lite.tsx";
import { loadRecordEntry } from "@/lib/data-loader-utils.ts";
import type { SeguridadEuroNCAP as SeguridadEuroNCAPData } from "@/lib/seguridad-euroncap.ts";

/**
 * Avatar de Cosa. Tamaño en px; siempre rounded-full con dimensiones explícitas.
 * `src` permite usar una pose concreta (AVATAR_COSA_HERO, _CARGANDO, _404,
 * _GUINO); por defecto, el avatar principal.
 */
export function CosaAvatar({
  size = 40,
  className = "",
  src = AVATAR_COSA,
}: {
  size?: number;
  className?: string;
  src?: string;
}) {
  return (
    <img
      src={src}
      alt="Cosa, la IA que gestiona RecurreTuMulta.online"
      width={size}
      height={size}
      loading="lazy"
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/** Loader con Cosa (pose "cargando"): avatar flotando + microcopy. Analizador y fichas. */
export function CosaLoader({
  texto = "Cosa está trabajando...",
  subtexto,
}: {
  texto?: string;
  subtexto?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 py-4" role="status" aria-live="polite">
      <div className="rtm-cosa-float">
        <CosaAvatar size={64} src={AVATAR_COSA_CARGANDO} />
      </div>
      <p className="text-sm font-bold text-gray-800">
        {texto}
        <span className="rtm-cosa-dots" aria-hidden="true">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>
      {subtexto && <p className="text-xs text-gray-500">{subtexto}</p>}
    </div>
  );
}

/**
 * Marca de agua SUTIL en la esquina de las fichas técnicas (pose guiño).
 * Fija abajo-derecha, opacidad baja, aparece suavemente al hacer scroll.
 * No interfiere con el contenido (pointer-events-none) ni con el SEO.
 */
export function MarcaAguaCosa() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed bottom-3 right-3 z-40 flex items-center gap-1.5 rounded-full bg-white/70 py-1 pl-1 pr-2.5 shadow-sm backdrop-blur-sm transition-opacity duration-700 ${
        visible ? "opacity-60" : "opacity-0"
      }`}
    >
      <CosaAvatar size={22} src={AVATAR_COSA_GUINO} />
      <span className="text-[10px] font-semibold text-gray-500">nota automática</span>
    </div>
  );
}

/** Badge "La elección de Cosa" (pose guiño) para comparador y duelos. */
export function EleccionCosa({ compacto = false }: { compacto?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 font-bold text-white shadow-md ${
        compacto ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"
      }`}
      title="La elección de Cosa: la mejor relación calidad-precio según los datos reales de la ficha (criterio automático, no patrocinado)"
    >
      <CosaAvatar size={compacto ? 16 : 20} src={AVATAR_COSA_GUINO} />
      La elección de Cosa
    </span>
  );
}

/**
 * Mono colgando del rabo: elemento decorativo juguetón.
 * Uso: dentro de un contenedor `relative` con hueco arriba (p. ej. un div con
 * `pt-10`), se coloca colgando del borde superior de la tarjeta con un suave
 * balanceo (transform-origin arriba, solo transform → GPU).
 */
export function CosaColgando({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-6 top-1 w-14 sm:w-16 ${className}`}
    >
      <div className="rtm-cosa-swing overflow-hidden rounded-xl border-4 border-white bg-white shadow-lg">
        <img
          src={AVATAR_COSA_COLGANDO}
          alt=""
          width={224}
          height={448}
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

const COMO_SE_CALCULA = `La nota de Cosa es una fórmula fija sobre datos reales de la ficha, no una opinión:
· Relación precio/potencia (35 %)
· Consumo o eficiencia (25 %)
· Seguridad EuroNCAP (20 %, solo con test verificado)
· Garantía (10 %)
· Practicidad: maletero, autonomía o peso (10 %)
Si un dato no existe, su peso se reparte entre los demás: nunca se inventa ni se penaliza por falta de datos.`;

/**
 * "La nota de Cosa": tarjeta con puntuación X,X/10, mini justificación y
 * tooltip "cómo se calcula". Si se pasa fichaId, carga las estrellas EuroNCAP
 * verificadas de forma perezosa (mismo chunk que SeguridadEuroNCAP).
 */
export function NotaCosa({
  entrada,
  nombre,
  fichaId,
}: {
  entrada: NotaCosaInput;
  nombre: string;
  fichaId?: string;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  const [estrellas, setEstrellas] = useState<number | null | undefined>(
    entrada.estrellasEuroNCAP !== undefined ? (entrada.estrellasEuroNCAP ?? null) : undefined,
  );
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (entrada.estrellasEuroNCAP !== undefined || !fichaId) return;
    let vivo = true;
    loadRecordEntry<SeguridadEuroNCAPData>("euroncap", fichaId).then((v) => {
      if (vivo) setEstrellas(v?.estrellas ?? null);
    });
    return () => {
      vivo = false;
    };
  }, [fichaId, entrada.estrellasEuroNCAP]);

  if (estrellas === undefined) {
    return (
      <section
        className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
        aria-label="La nota de Cosa"
      >
        <div className="flex items-center gap-3">
          <div className="rtm-cosa-float">
            <CosaAvatar size={48} />
          </div>
          <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
        </div>
      </section>
    );
  }

  const resultado = calcularNotaCosa({ ...entrada, estrellasEuroNCAP: estrellas });
  const colorNota =
    resultado.nota >= 7.5
      ? "text-emerald-600"
      : resultado.nota >= 5
        ? "text-amber-600"
        : "text-red-600";

  return (
    <section
      ref={ref}
      className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label={`La nota de Cosa para el ${nombre}`}
    >
      <div className="flex items-start gap-4">
        <div className="rtm-cosa-float shrink-0">
          <CosaAvatar size={56} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="text-xl font-extrabold text-gray-900">La nota de Cosa</h2>
            <p className={`text-3xl font-black tracking-tight ${colorNota}`}>
              {/* 14/10/2026 (AdSense): nota real en el HTML, sin contador desde 0,0 */}
              {resultado.nota.toFixed(1).replace(".", ",")}
              <span className="text-base font-bold text-gray-400">/10</span>
            </p>
          </div>
          <p className="mt-1.5 text-sm text-gray-600">{resultado.justificacion}</p>
          <p className="mt-1 text-xs text-gray-500">
            Nota automática (<a href="/metodologia/" className="underline">método</a>)
          </p>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-600 underline decoration-dotted underline-offset-2"
          >
            <Info className="h-3.5 w-3.5" />
            Método
          </button>
          {abierto && (
            <div className="anim-fade mt-2 rounded-2xl bg-gray-50 p-3 text-xs leading-relaxed text-gray-600">
              {COMO_SE_CALCULA.split("\n").map((l, i) => (
                <p key={i} className={i === 0 ? "mb-1 font-semibold text-gray-700" : ""}>
                  {l}
                </p>
              ))}
              <div className="mt-2 space-y-1 border-t border-gray-200 pt-2">
                {resultado.criterios.map((c) => (
                  <div key={c.clave} className="flex items-center justify-between gap-2">
                    <span>
                      {c.etiqueta}: <b className="text-gray-800">{c.nota}</b>
                    </span>
                    <span className="font-bold text-gray-500">
                      {c.peso > 0 ? `${c.puntos.toFixed(1)}` : "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
