import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// HitosCaza — confetti en hitos y celebración al completar el objetivo (05/10/2026).
// Hitos: 25/50/100/150/200/250/300/350 → confetti discreto + mensaje de Cosa celebrándolo.
// Al completar: celebración a lo grande (confetti + Cosa festejando) antes del
// formulario de reclamación. Vive a nivel App (chunk diferido).
// Todo con transform/opacity y prefers-reduced-motion respetado en CSS.
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PartyPopper, X } from "lucide-react";
import { AVATAR_COSA } from "@/lib/cosa";
import { useCazaMonos } from "./CazaMonosContext";
import { HITOS, MENSAJES_COSA_HITOS } from "./frases";

const COLORES = ["#f59e0b", "#ef4444", "#10b981", "#3b82f6", "#a855f7", "#eab308"];

function Confetti({ disparo }: { disparo: number }) {
  const piezas = Array.from({ length: 42 }, (_, i) => ({
    left: (i * 97 + disparo * 13) % 100,
    color: COLORES[i % COLORES.length],
    delay: ((i * 37) % 400) / 1000,
    w: 6 + ((i * 53) % 6),
  }));
  if (disparo === 0) return null;
  return (
    <div aria-hidden="true" key={disparo}>
      {piezas.map((p, i) => (
        <span
          key={i}
          className="mono-confetti-pieza"
          style={{
            left: `${p.left}%`,
            background: p.color,
            width: p.w,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Toast de Cosa celebrando un hito (no bloqueante, se cierra solo). */
function ToastCosa({ mensaje, onFin }: { mensaje: string; onFin: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onFin, 4000);
    return () => window.clearTimeout(t);
  }, [onFin]);
  return (
    <div
      role="status"
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[75] w-[calc(100%-2rem)] max-w-xs animate-[rtmCosaPop_0.35s_ease-out]"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-gray-900 text-white pl-2 pr-4 py-2.5 shadow-2xl">
        <img
          src={AVATAR_COSA}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <p className="text-xs font-bold leading-snug">{mensaje} <span className="text-amber-400">— Cosa</span></p>
        <button
          type="button"
          onClick={onFin}
          aria-label="Cerrar mensaje"
          className="ml-auto shrink-0 rounded-full p-1 text-white/60 hover:text-white cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

const FLAG_CELEBRACION = "caza-monos-celebracion-vista";

function HitosCazaInner() {
  const { total, objetivo } = useCazaMonos();
  const [disparo, setDisparo] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [celebrar, setCelebrar] = useState(false);
  const prev = useRef(0);

  useEffect(() => {
    if (total > prev.current && HITOS.includes(total)) {
      setDisparo((d) => d + 1);
      if (total >= objetivo) {
        try {
          if (!localStorage.getItem(FLAG_CELEBRACION)) setCelebrar(true);
        } catch {
          setCelebrar(true);
        }
      } else {
        setToast(MENSAJES_COSA_HITOS[total]);
      }
    }
    prev.current = total;
  }, [total, objetivo]);

  const cerrarCelebracion = () => {
    try {
      localStorage.setItem(FLAG_CELEBRACION, "1");
    } catch {
      /* se cierra igualmente */
    }
    setCelebrar(false);
  };

  return (
    <>
      <Confetti disparo={disparo} />
      {toast && !celebrar && <ToastCosa mensaje={toast} onFin={() => setToast(null)} />}
      {celebrar && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="¡Has completado la Caza de monos!"
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={cerrarCelebracion}
            className="absolute inset-0 bg-black/60 cursor-pointer"
          />
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 pt-8 text-center shadow-2xl animate-[rtmCosaPop_0.35s_ease-out]">
            <button
              type="button"
              onClick={cerrarCelebracion}
              aria-label="Cerrar celebración"
              className="absolute top-3 right-3 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={AVATAR_COSA}
              alt="Cosa festejando"
              width={88}
              height={88}
              className="w-[88px] h-[88px] rounded-full object-cover mx-auto -mt-16 border-4 border-white shadow-lg"
            />
            <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-amber-600">
              🦍 ¡Temporada completada!
            </p>
            <p className="mt-2 text-xl font-black text-gray-900">
              ¡Has cazado los {objetivo} monos!
            </p>
            <p className="mt-2 text-sm text-gray-600">
              ¡INCREÍBLE! ¡Eres una leyenda, cazador! 🏆 — <span className="font-black">Cosa</span>
              <br />
              Reclama tu premio: el 1º en completar los 350 gana 1.500 € + 1 año de recursos ilimitados, y del 2º al 50º, 1 año de recursos ilimitados.
            </p>
            <Link
              to="/juego-monos/"
              onClick={cerrarCelebracion}
              className="mt-4 inline-block rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-black px-8 py-3 shadow-lg hover:brightness-110 transition cursor-pointer"
            >
              Reclamar mi premio
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HitosCaza(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <HitosCazaInner {...props} />;
}
