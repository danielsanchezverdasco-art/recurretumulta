// Bloque «Análisis editorial» de cada ficha: 2-3 párrafos de análisis único
// redactados por el equipo editorial a partir de los datos de la ficha
// (estándar AdSense 2026-10-19). Se muestra tras la descripción principal;
// si la ficha no tiene análisis, no renderiza nada.
import { getAnalisisEditorial } from "@/lib/analisis-editorial";

export default function AnalisisEditorial({ slug }: { slug: string }) {
  const analisis = getAnalisisEditorial(slug);
  if (!analisis || analisis.parrafos.length === 0) return null;
  return (
    <section
      className="rtm-card mt-8 scroll-mt-32 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label="Análisis editorial"
      data-editorial="analisis"
    >
      <h2 className="text-xl font-extrabold text-gray-900">Nuestro análisis</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-800">
        {analisis.parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {analisis.veredicto ? (
        <p className="mt-4 rounded-xl bg-gray-50 px-4 py-3 text-[15px] leading-relaxed text-gray-900">
          <strong className="font-bold">Veredicto: </strong>
          {analisis.veredicto}
        </p>
      ) : null}
    </section>
  );
}
