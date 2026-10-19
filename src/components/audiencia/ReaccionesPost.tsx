import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { useMutation, useQuery } from "convex/react";
import { ConvexError } from "convex/values";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";
import { esAutomatizado, fmtNum, idVotante, trasCarga } from "@/lib/audiencia/cliente.ts";

/* Reacciones rápidas 👍 😮 😡 al final de cada post (18/10/2026).
   Una por persona y post (se puede cambiar). Solo cliente, tras la carga. */

const REACCIONES = [
  { k: "like", emoji: "👍", txt: "Me gusta" },
  { k: "wow", emoji: "😮", txt: "Me sorprende" },
  { k: "angry", emoji: "😡", txt: "Me indigna" },
] as const;

function Inner({ slug }: { slug: string }) {
  const votante = idVotante();
  const d = useQuery(api.audiencia.reacciones, { slug, votante });
  const reaccionar = useMutation(api.audiencia.reaccionar);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const total = d ? d.like + d.wow + d.angry : 0;
  return (
    <section aria-labelledby="reacciones-h" className="rounded-2xl border border-gray-200 bg-white p-4">
      <h2 id="reacciones-h" className="text-sm font-black text-gray-900">¿Qué te ha parecido?</h2>
      <div className="mt-3 grid grid-cols-3 gap-2" aria-busy={d === undefined}>
        {REACCIONES.map((r) => {
          const n = d ? d[r.k] : 0;
          const mia = d?.mia === r.k;
          return (
            <button
              key={r.k}
              type="button"
              disabled={d === undefined || enviando}
              aria-pressed={mia}
              aria-label={`${r.txt}${d ? `: ${fmtNum(n)}` : ""}`}
              onClick={async () => {
                setError(null);
                setEnviando(true);
                try {
                  await reaccionar({ slug, votante, reaccion: r.k });
                } catch (e) {
                  const m = e instanceof ConvexError ? (e.data as { message?: string })?.message : null;
                  setError(m ?? "No se ha podido guardar tu reacción.");
                } finally {
                  setEnviando(false);
                }
              }}
              className={`flex min-h-12 min-w-0 items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-red-600 disabled:opacity-60 ${
                mia ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-800 hover:border-gray-500"
              }`}
            >
              <span className="text-xl leading-none" aria-hidden="true">{r.emoji}</span>
              <span className="tabular-nums">{d ? fmtNum(n) : "·"}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-gray-500" aria-live="polite">
        {d === undefined ? "Cargando reacciones…" : total ? `${fmtNum(total)} ${total === 1 ? "reacción" : "reacciones"} de lectores. Una por persona.` : "Sé el primero en reaccionar. Una reacción por persona."}
      </p>
      {error ? <p className="mt-1 text-xs font-semibold text-red-700" role="alert">{error}</p> : null}
    </section>
  );
}

class Boundary extends Component<{ children: ReactNode }, { fallo: boolean }> {
  state = { fallo: false };
  static getDerivedStateFromError() {
    return { fallo: true };
  }
  render() {
    return this.state.fallo ? null : this.props.children;
  }
}

export default function ReaccionesPost({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [montar, setMontar] = useState(false);
  useEffect(() => {
    if (esAutomatizado()) return;
    let io: IntersectionObserver | null = null;
    const cancelar = trasCarga(() => {
      if (!ref.current || typeof IntersectionObserver === "undefined") return setMontar(true);
      io = new IntersectionObserver((e) => {
        if (e.some((x) => x.isIntersecting)) {
          setMontar(true);
          io?.disconnect();
        }
      }, { rootMargin: "900px 0px" });
      io.observe(ref.current);
    });
    return () => {
      cancelar();
      io?.disconnect();
    };
  }, [slug]);
  if (!montar) return <div ref={ref} aria-hidden="true" />;
  return (
    <Boundary>
      <LazyConvexProvider>
        <Inner slug={slug} />
      </LazyConvexProvider>
    </Boundary>
  );
}
