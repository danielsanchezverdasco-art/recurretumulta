import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// CelebracionLegendario — modal de celebración al cazar el mono legendario dorado (07/10/2026).
// Registra la caza en Convex (tabla legendaryCatches) para que Daniel vea quién lo cogió.
import { useEffect, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { POSES_COSA } from "@/lib/cosa";

function CelebracionLegendarioInner({
  hunterId,
  nickname,
  onClose,
}: {
  hunterId: string;
  nickname: string;
  onClose: () => void;
}) {
  const reportar = useMutation(api.cazaMonos.reportLegendaryCatch);
  const reportado = useRef(false);

  useEffect(() => {
    if (reportado.current) return;
    reportado.current = true;
    reportar({
      hunterId,
      nickname: nickname || undefined,
      ruta: window.location.pathname,
    }).catch(() => {});
  }, [hunterId, nickname, reportar]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="¡Has cazado el mono legendario dorado!"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full rounded-3xl bg-gradient-to-b from-amber-100 via-yellow-50 to-amber-200 border-4 border-amber-400 shadow-2xl p-8 text-center animate-[pop_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-3">🏆</div>
        <img
          src={POSES_COSA["legendario"]}
          alt="Mono legendario dorado"
          width={120}
          height={120}
          className="mx-auto mb-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
          draggable={false}
        />
        <h2 className="text-2xl font-black text-amber-900 mb-2">
          ¡EL MONO LEGENDARIO DORADO!
        </h2>
        <p className="text-amber-800 font-bold mb-1">
          ¡Lo has cazado!
        </p>
        <p className="text-sm text-amber-700 mb-5">
          Has ganado <span className="font-black">1 año de recursos gratis</span> (todos los que lo encuentran ganan).
          Genera tu código y envíalo por WhatsApp para recibirlo.
        </p>
        <a
          href="/juego-monos/"
          onClick={onClose}
          className="inline-block rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black px-8 py-3 text-lg transition shadow-lg"
        >
          Reclamar mi premio 🎁
        </a>
        <button
          onClick={onClose}
          className="block mx-auto mt-3 text-sm text-amber-700 underline"
        >
          Cerrar
        </button>
      </div>
      <style>{`@keyframes pop{0%{transform:scale(.7);opacity:0}100%{transform:scale(1);opacity:1}}`}</style>
    </div>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CelebracionLegendario(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <CelebracionLegendarioInner {...props} />;
}
