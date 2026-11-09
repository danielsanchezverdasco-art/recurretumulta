import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// TutorialCaza — mini-tutorial de descubrimiento orgánico (05/10/2026).
// Al cazar el PRIMER mono aparece una sola vez: el mono habla en primera
// persona. Tarjeta flotante NO bloqueante (sin backdrop): se puede cerrar y
// seguir navegando. Incluye el apodo opcional del cazador para el ranking.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { AVATAR_COSA } from "@/lib/cosa";
import { useCazaMonos } from "./CazaMonosContext";

const STORAGE_KEY = "caza-monos-tutorial-visto";

function TutorialCazaInner() {
  const { total, apodo, setApodo } = useCazaMonos();
  const [visible, setVisible] = useState(false);
  const [borrador, setBorrador] = useState("");

  useEffect(() => {
    if (total < 1) return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
        setBorrador(apodo);
      }
    } catch {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  if (!visible) return null;

  const cerrar = () => {
    const nombre = borrador.trim().slice(0, 24);
    if (nombre && nombre !== apodo) setApodo(nombre);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* se oculta igualmente */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Has descubierto la Caza de monos"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-xs z-[70] animate-[rtmCosaPop_0.35s_ease-out]"
    >
      <div className="relative rounded-3xl bg-white p-5 pt-7 shadow-2xl border-2 border-amber-200">
        <button
          type="button"
          onClick={cerrar}
          aria-label="Cerrar tutorial"
          className="absolute top-2.5 right-2.5 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        <img
          src={AVATAR_COSA}
          alt="Cosa, el mono robot"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover mx-auto -mt-14 border-4 border-white shadow-lg"
        />
        <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-amber-600 text-center">
          🐒 ¡Me encontraste!
        </p>
        <div className="mt-2 space-y-1.5 text-[13px] text-gray-700 leading-relaxed">
          <p>
            ¡Eh, tú! Soy uno de los <span className="font-black">350 monos</span> escondidos
            por la web.
          </p>
          <p>
            Haz clic en cada mono que veas para sumarlo a tu{" "}
            <span className="font-black">contador (arriba en el menú)</span>.
          </p>
          <p>
            Si eres el <span className="font-black">1º en encontrar los 350</span>, te llevas{" "}
            <span className="font-black text-amber-700">1.500 € + 1 año de recursos ilimitados</span>,
            y del <span className="font-black">2º al 50º, 1 año de recursos ilimitados</span>. Y si encuentras el dorado, 1 año de recursos gratis. ¡Corre!
          </p>
          <p className="text-gray-500">
            Tienes tu ranking en <Link to="/juego-monos/" onClick={cerrar} className="font-bold text-amber-700 underline underline-offset-2 cursor-pointer">/juego-monos</Link>. ¡Suerte! 🍀
          </p>
        </div>
        <label className="mt-3 block">
          <span className="text-xs font-bold text-gray-600">¿Cómo te llamas, cazador? 🐒</span>
          <input
            value={borrador}
            onChange={(e) => setBorrador(e.target.value)}
            maxLength={24}
            placeholder="Tu apodo (opcional)"
            aria-label="Tu apodo de cazador"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </label>
        <button
          type="button"
          onClick={cerrar}
          className="mt-3 w-full rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-black px-6 py-2.5 shadow-lg hover:brightness-110 transition cursor-pointer"
        >
          ¡A por ellos!
        </button>
      </div>
    </div>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TutorialCaza(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <TutorialCazaInner {...props} />;
}
