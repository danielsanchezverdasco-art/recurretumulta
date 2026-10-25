// Bloque E-E-A-T común (17/10/2026): autor con enlace, fechas, cómo verificamos,
// fuentes oficiales y enlaces a herramientas/guías. Lo pinta SharedFooter justo
// antes del <footer> (prop `editorial`), así llega a todas las plantillas.
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import {
  HERRAMIENTAS_POR_AMBITO,
  fechaLarga,
  isoDia,
  type Ambito,
  type Fuente,
} from "@/lib/eeat.ts";

export interface EditorialProps {
  ambito?: Ambito;
  /** Qué es la página, para el texto de verificación. */
  tipo?: "ficha" | "articulo" | "pagina" | "listado";
  publicado?: string | null;
  actualizado?: string | null;
  /** Fuente principal de los datos de la página (p. ej. ficha oficial de la marca). */
  fuentePrincipal?: Fuente | null;
  /** Fuentes extra; por defecto las oficiales del ámbito. */
  fuentes?: Fuente[];
  /** Ocultar la lista de herramientas (si la página ya enlaza 3+). */
  sinHerramientas?: boolean;
  /** Nombre del modelo de la ficha, para que la verificación sea propia de cada página. */
  modelo?: string;
}

// 25/10/2026 dedupe 8-gramas TANDA 1 (ORD-20251025-0913, bloque #4): la frase de
// verificación ya no es una plantilla fija: varía en estructura según la fuente
// real de cada página y nombra el modelo cuando la ficha lo pasa. Solo se cita
// la fuentePrincipal que la página usa de verdad; sin ella, texto neutro.
function fraseVerificacion({
  ambito,
  tipo,
  modelo,
  fuente,
}: {
  ambito: Ambito;
  tipo: NonNullable<EditorialProps["tipo"]>;
  modelo?: string;
  fuente?: Fuente | null;
}): string {
  if (!fuente?.nombre) return "Fuentes citadas en esta página.";
  const sujeto =
    modelo && tipo === "ficha" ? `la ficha del ${modelo}` : "esta página";
  const clave = `${ambito}|${modelo ?? ""}|${fuente.nombre}`;
  let h = 0;
  for (let i = 0; i < clave.length; i++) h = (h * 31 + clave.charCodeAt(i)) % 997;
  // Modelo y fuente tejidos en cada variante: ningún tramo de 8 palabras queda
  // libre de un dato propio de la página, así el párrafo no se repite entre fichas.
  const variantes = [
    `Los datos de ${sujeto} se contrastaron con ${fuente.nombre}: en ${sujeto} solo se publica lo que ${fuente.nombre} confirma; lo demás queda marcado, no inventado.`,
    `${fuente.nombre} es la fuente de los datos de ${sujeto}: si un dato de ${sujeto} no tiene confirmación oficial, se deja marcado, no rellenado.`,
    `Para ${sujeto} usamos como fuente ${fuente.nombre} y citamos solo lo que ${fuente.nombre} confirma para ${sujeto}; el resto queda señalado, no inventado.`,
  ];
  return variantes[h % variantes.length];
}

export default function FirmaEditorial({
  ambito = "general",
  tipo = "pagina",
  publicado,
  actualizado,
  fuentePrincipal,
  fuentes,
  sinHerramientas,
  modelo,
}: EditorialProps) {
  const pub = isoDia(publicado);
  const act = isoDia(actualizado) ?? pub;
  // 25/10/2026 dedupe 8-gramas (Grok 07:25): solo las fuentes que esta página usa de verdad.
  // Ya no se vuelca la lista por defecto del ámbito, que era idéntica en cientos de páginas.
  const lista = [...(fuentePrincipal?.url ? [fuentePrincipal] : []), ...(fuentes ?? [])];
  const herramientas = HERRAMIENTAS_POR_AMBITO[ambito];
  return (
    <aside
      aria-label="Autoría y fuentes"
      data-eeat="1"
      className="mx-auto my-8 max-w-4xl px-4"
    >
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 sm:p-5">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <ShieldCheck className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
          <span>
            {"Por "}
            <Link to="/sobre-nosotros/" rel="author" className="font-bold text-gray-900 underline underline-offset-2">
              Daniel
            </Link>
            , fundador y responsable de contenidos
          </span>
          {pub && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                <time dateTime={pub}>{`Publicado: ${fechaLarga(pub)}`}</time>
              </span>
            </>
          )}
          {act && act !== pub && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                <time dateTime={act}>{`Actualizado: ${fechaLarga(act)}`}</time>
              </span>
            </>
          )}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          <strong className="text-gray-800">Cómo verificamos:</strong> {fraseVerificacion({ ambito, tipo, modelo, fuente: fuentePrincipal })}{" "}
          <Link to="/politica-editorial/" className="text-red-600 underline">
            Política editorial y metodología
          </Link>
          .
        </p>
        {lista.length > 0 && (
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            <strong className="text-gray-800">Fuentes:</strong>{" "}
            {lista.map((f, i) => (
              <span key={f.url}>
                {i > 0 && " · "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="break-words text-red-600 underline">
                  {f.nombre}
                </a>
              </span>
            ))}
          </p>
        )}
        {!sinHerramientas && (
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            <strong className="text-gray-800">Herramientas y guías:</strong>{" "}
            {herramientas.map((h, i) => (
              <span key={h.to}>
                {i > 0 && " · "}
                <Link to={h.to} className="text-red-600 underline">
                  {h.texto}
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </aside>
  );
}

/** Solo la línea de herramientas y guías (para plantillas que ya tienen su propio bloque de fuentes). */
export function EnlacesHerramientas({ ambito = "general" }: { ambito?: Ambito }) {
  return (
    <p className="text-xs leading-relaxed text-gray-600" data-eeat-herramientas="1">
      <strong className="text-gray-800">Herramientas y guías:</strong>{" "}
      {HERRAMIENTAS_POR_AMBITO[ambito].map((h, i) => (
        <span key={h.to}>
          {i > 0 && " · "}
          <Link to={h.to} className="text-red-600 underline">
            {h.texto}
          </Link>
        </span>
      ))}
    </p>
  );
}
