// Bloque «Análisis editorial» de cada ficha: 2-3 párrafos de análisis único
// redactados por el equipo editorial a partir de los datos de la ficha
// (estándar AdSense 2026-10-19). Se muestra tras la descripción principal;
// si la ficha no tiene análisis, no renderiza nada.
import { useEffect, useState } from "react";
import type { AnalisisEditorial as Analisis } from "@/lib/analisis-editorial-tipos";
import { cargarAnalisisEditorial } from "@/lib/analisis-editorial/cargar";

// 31/10/2026 (velocidad): el análisis llega de un shard diferido (~100 KB) en vez de un chunk
// estático de 5,4 MB. Mientras carga se pinta un marcador oculto (data-editorial-cargando) que
// el prerender espera a que desaparezca antes de capturar el HTML (el texto sigue horneado).
export default function AnalisisEditorial({ slug }: { slug: string }) {
  const [res, setRes] = useState<{ slug: string; a: Analisis | null } | null>(null);
  useEffect(() => {
    let vivo = true;
    cargarAnalisisEditorial(slug)
      .then((a) => vivo && setRes({ slug, a }))
      .catch(() => vivo && setRes({ slug, a: null }));
    return () => {
      vivo = false;
    };
  }, [slug]);
  if (!res || res.slug !== slug) return <span data-editorial-cargando="" hidden />;
  const analisis = res.a;
  if (!analisis || analisis.parrafos.length === 0) return <DatosVerificados slug={slug} />;
  return (
    <>
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
    <DatosVerificados slug={slug} />
    </>
  );
}
