// "El coche de la semana" — sección para el índice del blog (/blog).
// Rotación automática semanal sobre comparador-coches-data.ts con override
// editorial opcional (ver src/lib/coche-semana.ts).
import { Link } from "react-router-dom";
import { ArrowRight, Car, GitCompareArrows, Newspaper } from "lucide-react";
import { getCocheSemana } from "@/lib/coche-semana.ts";
import { COCHES_CON_ANALISIS } from "@/lib/coches-con-analisis.generated";
import { hrefDesdeBlog } from "@/lib/blog-redir.generated";
import { fmtMiles } from "@/lib/formato.ts";

function formatoPrecio(euros: number | null): string {
  if (euros == null) return "—";
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  return fmtMiles(euros) + " €";
}

export default function CocheSemana() {
  const { coche, titular, gancho, esEditorial, semana } = getCocheSemana();
  // 13/10/2026: solo enlazar al análisis si el post existe (antes /blog/<id> daba 404).
  const analisis = COCHES_CON_ANALISIS[coche.id];
  const datos: Array<[string, string]> = [
    ["Precio desde", formatoPrecio(coche.precioDesde)],
    ["Autonomía", coche.autonomiaKm != null ? `${coche.autonomiaKm} km` : "—"],
    ["Potencia", coche.potenciaCv != null ? `${coche.potenciaCv} CV` : "—"],
    ["Etiqueta DGT", coche.etiquetaDgt || "—"],
  ];

  return (
    <section
      aria-label="El coche de la semana"
      className="overflow-hidden rounded-3xl border-2 border-red-100 bg-white"
    >
      <div className="flex items-center justify-between gap-2 bg-red-600 px-5 py-3">
        <p className="text-sm font-black uppercase tracking-widest text-white">
          El coche de la semana
        </p>
        <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-bold text-white">
          Semana {semana}
        </span>
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-2 sm:items-center">
        {coche.imagenOficial ? (
          <img
            src={coche.imagenOficial}
            alt={`Foto oficial del ${coche.marca} ${coche.modelo}`}
            className="aspect-[16/10] w-full rounded-2xl object-cover"
            loading="lazy"
          />
        ) : null}
        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-600">
              {coche.marca} · {coche.tipo}
            </p>
            <h2 className="mt-1 text-2xl font-black text-gray-900">{titular}</h2>
          </div>
          <p className="text-sm text-gray-600">{gancho}</p>

          <dl className="grid grid-cols-2 gap-2">
            {datos.map(([k, v]) => (
              <div key={k} className="rounded-xl bg-gray-50 px-3 py-2">
                <dt className="text-xs text-gray-500">{k}</dt>
                <dd className="font-bold text-gray-900">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2 pt-1">
            <Link
              to={`/coches/${coche.id}/`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <Car className="h-4 w-4" />
              Ver la ficha completa
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to={`/comparador-coches/?a=${coche.id}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:text-red-600"
              >
                <GitCompareArrows className="h-4 w-4" />
                Comparar
              </Link>
              {analisis && <Link
                to={hrefDesdeBlog(analisis)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-300 hover:text-red-600"
              >
                <Newspaper className="h-4 w-4" />
                Leer análisis
              </Link>}
            </div>
          </div>
        </div>
      </div>

      <p className="border-t border-gray-100 px-5 py-3 text-xs text-gray-400">
        {esEditorial
          ? "Elección editorial de la redacción."
          : "Selección automática rotativa entre los modelos de nuestro comparador."}{" "}
        <Link to="/comparador-coches/" className="font-semibold text-red-600 hover:underline">
          Ver todos los modelos
          <ArrowRight className="ml-1 inline h-3 w-3" />
        </Link>
      </p>
    </section>
  );
}
