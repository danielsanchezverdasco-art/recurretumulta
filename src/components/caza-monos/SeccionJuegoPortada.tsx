import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
// SeccionJuegoPortada — sección COMPACTA del juego en la portada (05/10/2026).
// Va tras "Antes de recurrir, analiza tu multa": mini-titular + una línea +
// CTA "Jugar" → /juego-monos, con el mono colgando como decoración.
// Compacta a propósito: no rompe el ritmo vertical de la portada.
import { Link } from "react-router-dom";
import ContadorVivos from "./ContadorVivos";
import { AVATAR_COSA_COLGANDO } from "@/lib/cosa";

function SeccionJuegoPortadaInner() {
  return (
    <section aria-label="Caza de monos" className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-y border-amber-100">
      {/* Mono colgando del borde superior, decorativo */}
      <div className="absolute top-0 right-5 sm:right-12 z-10 pointer-events-none" aria-hidden="true">
        <img
          src={AVATAR_COSA_COLGANDO}
          alt=""
          width={44}
          height={88}
          loading="lazy"
          className="w-[40px] h-[80px] sm:w-[44px] sm:h-[88px] object-cover rounded-b-lg animate-[rtmCosaSwing_3.4s_ease-in-out_infinite] origin-top"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-7 pr-16 sm:pr-20">
        <h2 className="text-lg sm:text-xl font-black text-gray-900">
          <span className="inline-block align-middle rounded-full bg-gradient-to-r from-amber-400 to-red-500 text-white text-xs sm:text-sm font-black px-2.5 py-0.5 mr-2 shadow">💶 PREMIO 1.500 €</span>
          🦍 Encuentra los monos y gana 1.500 €
        </h2>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">
          Hay 350 monos escondidos por la web. El 1º en cazar los 350 gana 1.500 € + 1 año de recursos ilimitados; del 2º al 50º, 1 año de recursos ilimitados. Y quien encuentre el mono dorado gana 1 año de recursos gratis.
        </p>
        <div className="mt-2 h-5 text-gray-800"><ContadorVivos compacto /></div>
        <Link
          to="/juego-monos/"
          className="mt-3 inline-block rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-black text-sm px-6 py-2.5 shadow-lg hover:brightness-110 transition cursor-pointer"
        >
          Jugar
        </Link>
      </div>
    </section>
  );
}

// Interruptor del juego (src/config/juego.ts).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SeccionJuegoPortada(props: any) {
  if (!JUEGO_MONOS_ACTIVO) return null;
  return <SeccionJuegoPortadaInner {...props} />;
}
