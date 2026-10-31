// Bloque «Datos verificados» de las fichas de coche: cifras reales con fuente y año.
// Si la ficha no tiene enriquecimiento, no renderiza nada.
import { getEnriquecimiento } from "@/lib/enriquecimiento-3110";
import { AVISO_ORIENTATIVO } from "@/lib/enriquecimiento-3110/tipos";

export default function DatosVerificados({ slug }: { slug: string }) {
  const e = getEnriquecimiento(slug);
  if (!e) return null;
  return (
    <section
      className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label="Datos verificados"
      data-editorial="datos-verificados"
    >
      <h2 className="text-xl font-extrabold text-gray-900">{e.titulo}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-800">
        {e.parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2 pr-2 font-medium">Dato</th>
              <th className="py-2 pr-2 font-medium">Valor</th>
              <th className="py-2 pr-2 font-medium">Fuente</th>
              <th className="py-2 font-medium">Año</th>
            </tr>
          </thead>
          <tbody>
            {e.filas.map((f, i) => (
              <tr key={i} className="border-t border-gray-200/70 align-top">
                <th className="py-2.5 pr-2 text-left font-medium text-gray-500">{f.etiqueta}</th>
                <td className="py-2.5 pr-2 text-gray-900">
                  {f.valor}
                  {f.orientativo ? (
                    <span className="mt-1 block text-xs text-amber-700">{AVISO_ORIENTATIVO}</span>
                  ) : null}
                </td>
                <td className="py-2.5 pr-2">
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-red-700 underline"
                  >
                    {f.fuente}
                  </a>
                </td>
                <td className="py-2.5 text-gray-700">{f.anio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
