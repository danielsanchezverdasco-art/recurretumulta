// 18/10/2026 (rediseño fichas): rivales en tarjetas deslizables (scroll-snap)
// con foto, nombre, precio y enlace al comparador. Datos: scripts/gen-rivales.mjs
// (mismo segmento y franja de precio; docs/seo/rivales.csv manda si existe).
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";
import { fmtEur } from "@/lib/formato.ts";
import type { Rival, TipoFicha } from "@/lib/ficha-extra.ts";

type Tipo = TipoFicha;
const COMPARADOR: Record<Tipo, string> = {
  coches: "/comparador-coches/",
  motos: "/comparador-motos/",
  patinetes: "/comparador-patinetes/",
};

function FotoRival({ src, alt, contain }: { src: string; alt: string; contain: boolean }) {
  const [ok, setOk] = useState(!!src);
  if (!ok) return <div className="flex aspect-[16/10] w-full items-center justify-center bg-gray-100 text-3xl font-black text-gray-300">{alt.charAt(0)}</div>;
  return <img src={src} alt={alt} loading="lazy" decoding="async" width={320} height={200} onError={() => setOk(false)} className={`aspect-[16/10] w-full ${contain ? "bg-white object-contain" : "object-cover"}`} />;
}

export default function RivalesCarrusel({ tipo, id, nombre, rivales, intro }: { tipo: Tipo; id: string; nombre: string; rivales?: Rival[]; intro?: string }) {
  if (!rivales || rivales.length === 0) return null;
  return (
    <section id="rivales" className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={`Rivales del ${nombre}`}>
      <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
        <ArrowLeftRight className="h-5 w-5 text-red-600" /> Rivales directos
      </h2>
      {intro && <p className="mt-1 text-sm text-gray-600">{intro}</p>}
      <ul className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
        {rivales.map(([rid, rnombre, precio, foto]) => (
          <li key={rid} className="w-56 shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Link to={`/${tipo}/${rid}/`} className="block">
              <FotoRival src={foto} alt={rnombre} contain={tipo !== "coches"} />
              <div className="p-3">
                <p className="truncate font-bold text-gray-900">{rnombre}</p>
                <p className="text-sm text-gray-600">{precio != null ? `desde ${fmtEur(precio)}` : "Sin precio oficial"}</p>
              </div>
            </Link>
            <Link to={`${COMPARADOR[tipo]}?a=${id}&b=${rid}`} className="mx-3 mb-3 flex items-center justify-center gap-1.5 rounded-xl border border-red-600 py-1.5 text-sm font-bold text-red-600 hover:bg-red-50">
              <ArrowLeftRight className="h-3.5 w-3.5" /> Comparar
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
