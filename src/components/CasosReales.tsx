import { useRef } from "react";
import { ChevronLeft, ChevronRight, ScanSearch } from "lucide-react";

/* ── Casos reales (03/10/2026, orden Daniel): carrusel horizontal compacto
   debajo del analizador con ejemplos de multas de radar. 3 visibles,
   desplazamiento lateral, ocupa poco espacio. ── */

const CASOS = [
  {
    img: "/media/caso-radar-madrid.jpg",
    alt: "Boletín de denuncia real con fotos de radar, Madrid",
    titulo: "Radar de tramo · Madrid",
    dato: "73 km/h en zona 50",
    resultado: "Recurrida",
    color: "bg-green-600",
  },
  {
    img: "/media/caso-radar-bmw.webp",
    alt: "BMW captado por radar en autopista de noche",
    titulo: "Radar fijo · Autopista",
    dato: "128 km/h en zona 90",
    resultado: "En análisis",
    color: "bg-amber-500",
  },
  {
    img: "/media/caso-radar-seat.webp",
    alt: "SEAT León captado por radar en vía urbana",
    titulo: "Radar urbano · Barcelona",
    dato: "68 km/h en zona 50",
    resultado: "Recurrida",
    color: "bg-green-600",
  },
  {
    img: "/media/caso-radar-golf.webp",
    alt: "Volkswagen Golf captado por radar en carretera",
    titulo: "Radar móvil · Carretera",
    dato: "105 km/h en zona 90",
    resultado: "Recurrida",
    color: "bg-green-600",
  },
];

export default function CasosReales() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section aria-label="Casos reales analizados" className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-600">Ejemplos</p>
            <h2 className="text-xl md:text-2xl font-black text-gray-900">Casos analizados con IA</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {CASOS.map((c) => (
            <article
              key={c.titulo}
              className="snap-start shrink-0 w-[240px] rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
            >
              <div className="relative h-[130px]">
                <img src={c.img} alt={c.alt} className="w-full h-full object-cover" loading="lazy" />
                <span className={`absolute top-2 right-2 ${c.color} text-white text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full`}>
                  {c.resultado}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-gray-900">{c.titulo}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{c.dato}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-red-700">
                  <ScanSearch className="w-3.5 h-3.5" />
                  Analizar la mía gratis
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
