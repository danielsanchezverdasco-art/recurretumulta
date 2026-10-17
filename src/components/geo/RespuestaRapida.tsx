// Bloque GEO «Respuesta rápida» bajo el H1 de cada ficha. Texto generado en
// src/lib/geo-ficha.ts solo con datos de la ficha y del historial de precios.
// No lleva indicador de seguimiento (el punto verde vive en el bloque de precio).
export default function RespuestaRapida({ frases }: { frases: string[] }) {
  if (!frases.length) return null;
  return (
    <section
      aria-label="Respuesta rápida"
      data-geo="respuesta-rapida"
      className="mt-3 max-w-3xl rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
    >
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Respuesta rápida</h2>
      <p className="mt-1 break-words text-[15px] leading-relaxed text-gray-800">{frases.join(" ")}</p>
    </section>
  );
}
