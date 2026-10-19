// RankingCazadores — top 50 de la Caza de monos (05/10/2026).
// Datos en Convex (tabla monkeyHunters), sin cuentas: UUID anónimo + apodo opcional.
// La query es reactiva: el ranking se actualiza solo. Si el backend aún no está
// desplegado, la sección falla en silencio (no rompe la página).
import { Component, useState } from "react";
import type { ReactNode } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { Crown, Medal } from "lucide-react";
import { useCazaMonos } from "./CazaMonosContext";

function Silencioso({ children }: { children: ReactNode }) {
  return <BordeSilencioso>{children}</BordeSilencioso>;
}

class BordeSilencioso extends Component<{ children: ReactNode }, { roto: boolean }> {
  state = { roto: false };
  static getDerivedStateFromError() {
    return { roto: true };
  }
  render() {
    if (this.state.roto) return null;
    return this.props.children;
  }
}

function Tabla() {
  const datos = useQuery(api.cazaMonos.topHunters);
  const { total, uuid, apodo, setApodo } = useCazaMonos();
  const [borrador, setBorrador] = useState(apodo);
  const [guardado, setGuardado] = useState(false);

  return (
    <div>
      {/* Apodo opcional para salir en el ranking (se puede cambiar aquí) */}
      <form
        className="mb-5 flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setApodo(borrador);
          setGuardado(true);
          window.setTimeout(() => setGuardado(false), 2500);
        }}
      >
        <input
          value={borrador}
          onChange={(e) => setBorrador(e.target.value)}
          maxLength={24}
          placeholder="Tu apodo de cazador (opcional)"
          aria-label="Tu apodo de cazador"
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <button
          type="submit"
          className="rounded-xl bg-gray-900 text-white text-sm font-black px-5 py-2.5 hover:bg-gray-700 transition cursor-pointer"
        >
          {guardado ? "¡Guardado! ✓" : "Salir en el ranking"}
        </button>
      </form>

      {datos === undefined ? (
        <p className="text-sm text-gray-400 text-center py-6">Cargando el ranking…</p>
      ) : datos.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-6">
          Aún no hay cazadores en el ranking. ¡Sé el primero! 🦍
        </p>
      ) : (
        <ol className="space-y-1.5 max-h-[32rem] overflow-y-auto pr-1">
          {datos.map((c, i) => {
            const soyYo = c.hunterId === uuid;
            return (
              <li
                key={c.hunterId}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-all ${
                  soyYo
                    ? "border-amber-400 bg-amber-50 ring-2 ring-amber-300"
                    : i === 0
                      ? "border-amber-300 bg-amber-50"
                      : "border-gray-100 bg-white"
                }`}
              >
                <span className="w-7 text-center shrink-0">
                  {i === 0 ? (
                    <Crown className="w-5 h-5 mx-auto text-amber-500" />
                  ) : i < 3 ? (
                    <Medal className="w-5 h-5 mx-auto text-gray-400" />
                  ) : (
                    <span className="text-xs font-black text-gray-400 tabular-nums">{i + 1}</span>
                  )}
                </span>
                <span className="flex-1 font-bold text-sm text-gray-800 truncate">
                  {c.nickname}
                  {soyYo && (
                    <span className="ml-2 text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-200 rounded-full px-2 py-0.5">
                      Tú
                    </span>
                  )}
                </span>
                <span className="text-sm font-black text-gray-900 tabular-nums">
                  {c.found} <span className="font-bold text-gray-400 text-xs">🦍</span>
                </span>
              </li>
            );
          })}
        </ol>
      )}
      {total > 0 && (
        <p className="mt-3 text-xs text-gray-500 text-center">
          Tú llevas <span className="font-black text-gray-800 tabular-nums">{total}</span> monos.{" "}
          {apodo ? "Ya sales en el ranking con tu apodo." : "Pon tu apodo arriba para aparecer."}
        </p>
      )}
      <p className="mt-2 text-[11px] text-gray-400 text-center leading-relaxed">
        El ranking es por navegador; si cambias de dispositivo empiezas de cero.
        El premio se verifica a mano.
      </p>
    </div>
  );
}

export default function RankingCazadores() {
  return (
    <LazyConvexProvider>
      <RankingCazadoresInner />
    </LazyConvexProvider>
  );
}

function RankingCazadoresInner() {
  return (
    <Silencioso>
      <Tabla />
    </Silencioso>
  );
}
