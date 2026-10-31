// 31/10/2026 (enriquecimiento de fichas de patinete): fuentes con fecha de verificación y tabla
// de rivales con datos reales. Solo se pinta si la ficha trae esos campos (nunca se inventan).
import { Link } from "react-router-dom";
import { fmtEur } from "@/lib/formato.ts";

export interface FuenteExtra { nombre: string; url: string; fecha?: string }
export interface RivalTabla {
  id: string;
  nombre: string;
  precioEur: number | null;
  autonomiaKm?: number | null;
  potenciaW?: number | null;
  pesoKg?: number | null;
  nota?: string;
}

function fmtFecha(iso?: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return d && m && y ? `${d}/${m}/${y}` : iso;
}

export default function DatosContrastados({
  nombre,
  fuentes,
  rivales,
  verificadoEl,
}: {
  nombre: string;
  fuentes?: FuenteExtra[] | null;
  rivales?: RivalTabla[] | null;
  verificadoEl?: string | null;
}) {
  const fs = (fuentes ?? []).filter((f) => f && f.url && f.nombre);
  const rs = (rivales ?? []).filter((r) => r && r.nombre);
  if (fs.length === 0 && rs.length === 0) return null;
  return (
    <section id="datos-contrastados" className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6" aria-label={`Datos contrastados del ${nombre}`}>
      <h2 className="text-xl font-extrabold text-gray-900">Datos contrastados del {nombre}</h2>
      {fs.length > 0 && (
        <>
          <p className="mt-2 text-sm text-gray-600">
            Cifras comprobadas{verificadoEl ? ` el ${fmtFecha(verificadoEl)}` : ""} en estas fuentes. Los precios cambian: confírmalos en la tienda antes de comprar.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            {fs.map((f) => (
              <li key={f.url}>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="font-medium text-red-600 underline">{f.nombre}</a>
                {f.fecha ? <span className="text-gray-500"> ({fmtFecha(f.fecha)})</span> : null}
              </li>
            ))}
          </ul>
        </>
      )}
      {rs.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[420px] text-sm">
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">{nombre} frente a sus rivales más directos</caption>
            <thead>
              <tr className="bg-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="px-3 py-2">Modelo</th>
                <th className="px-3 py-2 text-right">Precio</th>
                <th className="px-3 py-2 text-right">Autonomía</th>
                <th className="px-3 py-2 text-right">Potencia</th>
                <th className="px-3 py-2 text-right">Peso</th>
              </tr>
            </thead>
            <tbody>
              {rs.map((r) => (
                <tr key={r.id} className="border-t border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-900">
                    <Link to={`/patinetes/${r.id}/`} className="text-red-600 hover:underline">{r.nombre}</Link>
                    {r.nota ? <span className="block text-xs font-normal text-gray-500">{r.nota}</span> : null}
                  </td>
                  <td className="px-3 py-2 text-right">{r.precioEur != null ? fmtEur(r.precioEur) : "—"}</td>
                  <td className="px-3 py-2 text-right">{r.autonomiaKm != null ? `${r.autonomiaKm} km` : "—"}</td>
                  <td className="px-3 py-2 text-right">{r.potenciaW != null ? `${r.potenciaW} W` : "—"}</td>
                  <td className="px-3 py-2 text-right">{r.pesoKg != null ? `${String(r.pesoKg).replace(".", ",")} kg` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
