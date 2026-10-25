import { Search } from "lucide-react";
import CosaEnBanner from "./CosaEnBanner";

interface StatHero {
  valor: string | number;
  etiqueta: string;
}

interface HeroVSProps {
  imagen1: string;
  imagen2: string;
  alt1?: string;
  alt2?: string;
  titulo: string;
  subtitulo: string;
  busqueda: string;
  onBusqueda: (v: string) => void;
  placeholderBusqueda?: string;
  stats: StatHero[];
  ocultarVS?: boolean;
}

/**
 * Hero con 2 fotos enfrentadas y círculo "VS" en el centro.
 * Va DEBAJO del SharedNavbar. Incluye buscador y mini-stats.
 */
export default function HeroVS({
  imagen1,
  imagen2,
  alt1 = "Vehículo 1",
  alt2 = "Vehículo 2",
  titulo,
  subtitulo,
  busqueda,
  onBusqueda,
  placeholderBusqueda = "Busca por marca o modelo…",
  stats,
  ocultarVS = false,
}: HeroVSProps) {
  return (
    <section className="relative overflow-hidden bg-gray-950" aria-label={titulo}>
      {/* Fotos enfrentadas 50/50 */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        <div className="relative w-1/2 overflow-hidden">
          <img
            src={imagen1}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="relative w-1/2 overflow-hidden">
          <img
            src={imagen2}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Círculo VS central: el wrapper centra con `translate`; los keyframes
          solo animan `scale` para no desplazarlo (bug de doble translate en TW v4) */}
      {!ocultarVS && (
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 sm:h-20 sm:w-20">
        <span className="vs-anim absolute inset-0 rounded-full bg-[#cd001d]/40 motion-safe:animate-[vsPing_2.2s_cubic-bezier(0,0,.2,1)_infinite]" />
        <span className="vs-anim absolute inset-0 flex items-center justify-center rounded-full bg-[#cd001d] text-xl font-black tracking-tight text-white shadow-xl ring-4 ring-white/90 sm:text-2xl motion-safe:animate-[vsDueloEntrada_0.9s_ease-out_both,vsDueloPulso_2.8s_ease-in-out_1s_infinite]">
          VS
        </span>
      </div>
      )}
      {/* Línea divisoria detrás del VS */}
      {!ocultarVS && (
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 z-[5] h-full w-px -translate-x-1/2 bg-white/25" />
      )}

      {/* Cosa asomando abajo-derecha (decorativo): z-auto, queda detrás del
          contenido (z-10) y del círculo VS; tamaño reducido para no tapar
          el buscador ni las stats en móvil */}
      <CosaEnBanner className="right-1 sm:right-3" imgClassName="h-24 sm:h-32 w-auto" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-10 pt-14 text-center sm:pb-14 sm:pt-20">
        <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-lg sm:text-5xl motion-safe:animate-[fadeSlideUp_0.6s_ease-out_both]">
          {titulo}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 drop-shadow sm:text-lg motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.1s_both]">
          {subtitulo}
        </p>

        {/* Buscador */}
        <div className="mx-auto mt-6 max-w-xl motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.2s_both]">
          <label htmlFor="hero-busqueda" className="sr-only">
            {placeholderBusqueda}
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              id="hero-busqueda"
              type="search"
              value={busqueda}
              onChange={(e) => onBusqueda(e.target.value)}
              placeholder={placeholderBusqueda}
              className="w-full rounded-full border-0 bg-white py-3.5 pl-12 pr-5 text-base text-gray-900 shadow-2xl outline-none ring-[#cd001d] transition placeholder:text-gray-400 focus:ring-4"
            />
          </div>
        </div>

        {/* Mini-stats */}
        {stats.length > 0 && (
          <dl className="mx-auto mt-6 flex max-w-md items-start justify-center gap-8 motion-safe:animate-[fadeSlideUp_0.6s_ease-out_0.3s_both]">
            {stats.map((s) => (
              <div key={s.etiqueta} className="text-center">
                <dt className="sr-only">{s.etiqueta}</dt>
                <dd className="text-2xl font-black text-white drop-shadow sm:text-3xl">{s.valor}</dd>
                <dd className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                  {s.etiqueta}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <style>{`
        /* Los keyframes animan SOLO scale/opacity; el centrado lo hace la
           propiedad CSS translate de Tailwind (ver nota en DueloVS).
           Entrada una vez + pulso infinito sin parpadeo en el reinicio. */
        @keyframes vsDueloEntrada {
          0% { transform: scale(0); opacity: 0; }
          14% { transform: scale(1.18); opacity: 1; }
          24% { transform: scale(0.94); }
          34%, 100% { transform: scale(1); opacity: 1; }
        }
        @keyframes vsDueloPulso {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes vsPing {
          0% { transform: scale(1); opacity: 0.7; }
          80%, 100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .vs-anim { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
