import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDown, Loader2, Sparkles, X } from "lucide-react";

/**
 * BuscadorMarcaModelo — sustituto accesible de los <select> nativos de
 * marca/modelo en los comparadores (coches, motos, patinetes).
 *
 * Dos comboboxes con filtrado en tiempo real (insensible a tildes y
 * mayúsculas). Si lo escrito no existe en la base, el desplegable de modelo
 * ofrece inline "Investigar con IA" (cuando estadoIA.disponible es true) o un
 * aviso de modelo no encontrado.
 *
 * Accesibilidad: labels reales, role=combobox con aria-expanded /
 * aria-activedescendant, listbox con options, navegación por teclado
 * (flechas + Enter + Escape) y zona táctil amplia en móvil.
 */

export type OpcionBuscador = {
  id: string;
  marca: string;
  modelo: string;
  /** Texto secundario junto al modelo, p. ej. "Híbrido" o "24.990 €". */
  detalle: string;
};

export type EstadoIABuscador = {
  /** false en el comparador de motos: no hay investigador en el backend. */
  disponible: boolean;
  investigando: boolean;
  error: string | null;
};

type Props = {
  opciones: OpcionBuscador[];
  /** id de la opción seleccionada ("" si ninguna) */
  valueId: string;
  onSelect: (id: string) => void;
  /** id que no debe aparecer (el elegido en el otro lado) */
  excludeId?: string;
  /** clase de borde según el lado, p. ej. "border-gray-300" */
  bordeClase: string;
  /** "Coche A" — para etiquetas aria */
  etiquetaLado: string;
  estadoIA: EstadoIABuscador;
  onInvestigarIA: (marca: string, modelo: string) => void;
};

function norm(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

const MAX_OPCIONES = 60;

export default function BuscadorMarcaModelo({
  opciones,
  valueId,
  onSelect,
  excludeId,
  bordeClase,
  etiquetaLado,
  estadoIA,
  onInvestigarIA,
}: Props) {
  const baseId = useId().replace(/:/g, "");
  const marcaInputId = `bm-marca-${baseId}`;
  const modeloInputId = `bm-modelo-${baseId}`;
  const marcaListId = `bm-marca-list-${baseId}`;
  const modeloListId = `bm-modelo-list-${baseId}`;

  const sel = opciones.find((o) => o.id === valueId);

  const [marcaQ, setMarcaQ] = useState(sel?.marca ?? "");
  const [modeloQ, setModeloQ] = useState(sel?.modelo ?? "");
  const [marcaOpen, setMarcaOpen] = useState(false);
  const [modeloOpen, setModeloOpen] = useState(false);
  const [marcaActive, setMarcaActive] = useState(-1);
  const [modeloActive, setModeloActive] = useState(-1);

  const wrapRef = useRef<HTMLDivElement>(null);
  const marcaRef = useRef<HTMLInputElement>(null);
  const modeloRef = useRef<HTMLInputElement>(null);

  // Sincroniza los campos cuando la selección cambia desde fuera
  // (duelos populares, enlace compartido, resultado de la IA…).
  useEffect(() => {
    const s = opciones.find((o) => o.id === valueId);
    setMarcaQ(s?.marca ?? "");
    setModeloQ(s?.modelo ?? "");
    setMarcaOpen(false);
    setModeloOpen(false);
    setMarcaActive(-1);
    setModeloActive(-1);
  }, [valueId, opciones]);

  const marcas = useMemo(() => {
    const set = new Set<string>();
    for (const o of opciones) set.add(o.marca);
    return [...set].sort((a, b) => a.localeCompare(b, "es"));
  }, [opciones]);

  const marcasFiltradas = useMemo(() => {
    const q = norm(marcaQ);
    const lista = q ? marcas.filter((m) => norm(m).includes(q)) : marcas;
    return lista.slice(0, MAX_OPCIONES);
  }, [marcas, marcaQ]);

  const marcaExacta = useMemo(() => {
    const q = norm(marcaQ);
    if (!q) return null;
    return marcas.find((m) => norm(m) === q) ?? null;
  }, [marcas, marcaQ]);

  const modelosBase = useMemo(
    () => (marcaExacta ? opciones.filter((o) => o.marca === marcaExacta) : opciones),
    [opciones, marcaExacta]
  );

  const modelosFiltrados = useMemo(() => {
    const q = norm(modeloQ);
    const lista = q
      ? modelosBase.filter(
          (o) =>
            norm(o.modelo).includes(q) ||
            norm(`${o.marca} ${o.modelo}`).includes(q) ||
            (o.detalle && norm(o.detalle).includes(q))
        )
      : modelosBase;
    return lista.filter((o) => o.id !== excludeId).slice(0, MAX_OPCIONES);
  }, [modelosBase, modeloQ, excludeId]);

  // ¿Coincide exactamente lo escrito con alguna opción de la base?
  const hayCoincidenciaExacta = useMemo(() => {
    const qm = norm(marcaQ);
    const qmo = norm(modeloQ);
    if (!qmo) return false;
    return opciones.some(
      (o) =>
        o.id !== excludeId &&
        norm(o.modelo) === qmo &&
        (!qm || norm(o.marca) === qm || norm(o.marca).includes(qm))
    );
  }, [opciones, marcaQ, modeloQ, excludeId]);

  const mostrarFilaIA =
    estadoIA.disponible &&
    norm(modeloQ).length > 0 &&
    !hayCoincidenciaExacta &&
    !estadoIA.investigando;

  const textoIA = `${marcaQ.trim()} ${modeloQ.trim()}`.trim();

  const cerrarTodo = () => {
    setMarcaOpen(false);
    setModeloOpen(false);
    setMarcaActive(-1);
    setModeloActive(-1);
  };

  const onBlurWrap = (e: React.FocusEvent) => {
    if (!wrapRef.current?.contains(e.relatedTarget as Node | null)) cerrarTodo();
  };

  const elegirMarca = (marca: string) => {
    setMarcaQ(marca);
    setModeloQ("");
    setMarcaOpen(false);
    setMarcaActive(-1);
    // No se selecciona modelo todavía: se abre el buscador de modelo.
    setModeloOpen(true);
    setModeloActive(-1);
    requestAnimationFrame(() => modeloRef.current?.focus());
  };

  const elegirModelo = (id: string) => {
    cerrarTodo();
    onSelect(id);
  };

  const onKeyMarca = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!marcaOpen) {
        setMarcaOpen(true);
        setMarcaActive(0);
      } else {
        setMarcaActive((a) => (a + 1) % Math.max(marcasFiltradas.length, 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setMarcaActive((a) =>
        a <= 0 ? marcasFiltradas.length - 1 : a - 1
      );
    } else if (e.key === "Enter") {
      if (marcaOpen && marcaActive >= 0 && marcasFiltradas[marcaActive]) {
        e.preventDefault();
        elegirMarca(marcasFiltradas[marcaActive]);
      } else if (marcaOpen && marcasFiltradas.length === 1) {
        e.preventDefault();
        elegirMarca(marcasFiltradas[0]);
      }
    } else if (e.key === "Escape") {
      setMarcaOpen(false);
    }
  };

  const onKeyModelo = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!modeloOpen) {
        setModeloOpen(true);
        setModeloActive(0);
      } else {
        const total =
          modelosFiltrados.length + (mostrarFilaIA || (!estadoIA.disponible && norm(modeloQ) && modelosFiltrados.length === 0) ? 1 : 0);
        setModeloActive((a) => (a + 1) % Math.max(total, 1));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const total =
        modelosFiltrados.length + (mostrarFilaIA || (!estadoIA.disponible && norm(modeloQ) && modelosFiltrados.length === 0) ? 1 : 0);
      setModeloActive((a) => (a <= 0 ? total - 1 : a - 1));
    } else if (e.key === "Enter") {
      const esFilaIA = mostrarFilaIA && modeloActive === modelosFiltrados.length;
      if (esFilaIA) {
        e.preventDefault();
        cerrarTodo();
        onInvestigarIA(marcaQ.trim(), modeloQ.trim());
      } else if (modeloOpen && modeloActive >= 0 && modelosFiltrados[modeloActive]) {
        e.preventDefault();
        elegirModelo(modelosFiltrados[modeloActive].id);
      } else if (modeloOpen && modelosFiltrados.length === 1) {
        e.preventDefault();
        elegirModelo(modelosFiltrados[0].id);
      }
    } else if (e.key === "Escape") {
      setModeloOpen(false);
    }
  };

  const inputClase = `mt-1 w-full rounded-xl border-2 bg-white py-2.5 pl-3 pr-9 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none ${bordeClase} focus:border-violet-400`;

  const renderOpcionesMarca = (
    lista: { id: string; titulo: string; subtitulo?: string }[]
  ) => (
    <ul
      role="listbox"
      id={marcaListId}
      aria-label={`Marcas (${etiquetaLado})`}
      className="absolute inset-x-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-xl border border-gray-200 bg-white py-1 shadow-xl"
    >
      {lista.map((op, i) => (
        <li
          key={op.id}
          id={`${marcaListId}-op-${i}`}
          role="option"
          aria-selected={i === marcaActive}
          onMouseDown={(e) => {
            // onMouseDown antes del blur: elige sin perder el foco antes.
            e.preventDefault();
            elegirMarca(op.titulo);
          }}
          onMouseEnter={() => setMarcaActive(i)}
          className={`flex min-h-[44px] cursor-pointer items-center justify-between gap-2 px-3 py-2.5 text-sm ${
            i === marcaActive ? "bg-violet-50" : "bg-white"
          }`}
        >
          <span className="font-medium text-gray-900">{op.titulo}</span>
          {op.subtitulo && (
            <span className="shrink-0 text-xs text-gray-500">{op.subtitulo}</span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={wrapRef} onBlur={onBlurWrap}>
      <div className="grid gap-2 sm:grid-cols-2">
        {/* ── Marca ── */}
        <div className="relative">
          <label
            htmlFor={marcaInputId}
            className="text-xs font-semibold uppercase tracking-wide opacity-70"
          >
            Marca
          </label>
          <div className="relative">
            <input
              ref={marcaRef}
              id={marcaInputId}
              type="text"
              role="combobox"
              aria-expanded={marcaOpen}
              aria-controls={marcaListId}
              aria-activedescendant={
                marcaOpen && marcaActive >= 0 ? `${marcaListId}-op-${marcaActive}` : undefined
              }
              aria-label={`Marca (${etiquetaLado})`}
              autoComplete="off"
              spellCheck={false}
              value={marcaQ}
              placeholder="Busca una marca…"
              onChange={(e) => {
                setMarcaQ(e.target.value);
                setMarcaOpen(true);
                setMarcaActive(-1);
              }}
              onFocus={() => {
                setMarcaOpen(true);
                setModeloOpen(false);
              }}
              onKeyDown={onKeyMarca}
              className={inputClase}
            />
            {marcaQ ? (
              <button
                type="button"
                aria-label="Borrar marca"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setMarcaQ("");
                  setModeloQ("");
                  setMarcaOpen(true);
                  marcaRef.current?.focus();
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
          </div>
          {marcaOpen &&
            renderOpcionesMarca(
              marcasFiltradas.map((m) => ({
                id: `marca-${m}`,
                titulo: m,
                subtitulo: `${opciones.filter((o) => o.marca === m).length} modelos`,
              }))
            )}
        </div>

        {/* ── Modelo ── */}
        <div className="relative">
          <label
            htmlFor={modeloInputId}
            className="text-xs font-semibold uppercase tracking-wide opacity-70"
          >
            Modelo
          </label>
          <div className="relative">
            <input
              ref={modeloRef}
              id={modeloInputId}
              type="text"
              role="combobox"
              aria-expanded={modeloOpen}
              aria-controls={modeloListId}
              aria-activedescendant={
                modeloOpen && modeloActive >= 0 ? `${modeloListId}-op-${modeloActive}` : undefined
              }
              aria-label={`Modelo (${etiquetaLado})`}
              autoComplete="off"
              spellCheck={false}
              value={modeloQ}
              placeholder="Busca un modelo…"
              onChange={(e) => {
                setModeloQ(e.target.value);
                setModeloOpen(true);
                setModeloActive(-1);
              }}
              onFocus={() => {
                setModeloOpen(true);
                setMarcaOpen(false);
              }}
              onKeyDown={onKeyModelo}
              className={inputClase}
            />
            {modeloQ ? (
              <button
                type="button"
                aria-label="Borrar modelo"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setModeloQ("");
                  setModeloOpen(true);
                  modeloRef.current?.focus();
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
          </div>
          {modeloOpen && (
            <div className="absolute inset-x-0 top-full z-30 mt-1">
              {modelosFiltrados.length > 0 ? (
                <ul
                  role="listbox"
                  id={modeloListId}
                  aria-label={`Modelos (${etiquetaLado})`}
                  className="max-h-64 overflow-auto rounded-xl border border-gray-200 bg-white py-1 shadow-xl"
                >
                  {modelosFiltrados.map((o, i) => (
                    <li
                      key={o.id}
                      id={`${modeloListId}-op-${i}`}
                      role="option"
                      aria-selected={i === modeloActive}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        elegirModelo(o.id);
                      }}
                      onMouseEnter={() => setModeloActive(i)}
                      className={`flex min-h-[44px] cursor-pointer items-center justify-between gap-2 px-3 py-2.5 text-sm ${
                        i === modeloActive ? "bg-violet-50" : "bg-white"
                      }`}
                    >
                      <span className="font-medium text-gray-900">
                        {marcaExacta ? o.modelo : `${o.marca} ${o.modelo}`}
                      </span>
                      {o.detalle && (
                        <span className="shrink-0 text-xs text-gray-500">{o.detalle}</span>
                      )}
                    </li>
                  ))}
                  {mostrarFilaIA && (
                    <li
                      id={`${modeloListId}-op-${modelosFiltrados.length}`}
                      role="option"
                      aria-selected={modeloActive === modelosFiltrados.length}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        cerrarTodo();
                        onInvestigarIA(marcaQ.trim(), modeloQ.trim());
                      }}
                      onMouseEnter={() => setModeloActive(modelosFiltrados.length)}
                      className={`flex min-h-[44px] cursor-pointer items-center gap-2 border-t border-violet-100 px-3 py-2.5 text-sm ${
                        modeloActive === modelosFiltrados.length ? "bg-violet-100" : "bg-violet-50"
                      }`}
                    >
                      <Sparkles className="h-4 w-4 shrink-0 text-violet-600" />
                      <span className="font-semibold text-violet-800">
                        Investigar «{textoIA}» con IA
                      </span>
                    </li>
                  )}
                </ul>
              ) : (
                <ul
                  role="listbox"
                  id={modeloListId}
                  aria-label={`Modelos (${etiquetaLado})`}
                  className="overflow-auto rounded-xl border border-gray-200 bg-white py-1 shadow-xl"
                >
                  {estadoIA.disponible ? (
                    <li
                      id={`${modeloListId}-op-0`}
                      role="option"
                      aria-selected={modeloActive === 0}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        cerrarTodo();
                        onInvestigarIA(marcaQ.trim(), modeloQ.trim());
                      }}
                      onMouseEnter={() => setModeloActive(0)}
                      className={`flex min-h-[44px] cursor-pointer items-center gap-2 px-3 py-2.5 text-sm ${
                        modeloActive === 0 ? "bg-violet-100" : "bg-violet-50"
                      }`}
                    >
                      <Sparkles className="h-4 w-4 shrink-0 text-violet-600" />
                      <span className="font-semibold text-violet-800">
                        Investigar «{textoIA}» con IA
                      </span>
                    </li>
                  ) : (
                    <li className="px-3 py-3 text-sm text-gray-600">
                      No tenemos «{modeloQ.trim()}» en la base todavía.{" "}
                      <a
                        href="https://wa.me/34711292174?text=Hola%2C%20echo%20en%20falta%20un%20modelo%20en%20el%20comparador."
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseDown={(e) => e.stopPropagation()}
                        className="font-semibold text-red-600 underline"
                      >
                        Escríbenos por WhatsApp
                      </a>{" "}
                      y lo priorizamos.
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Estado de la investigación con IA */}
      {(estadoIA.investigando || estadoIA.error) && (
        <div aria-live="polite" className="mt-2">
          {estadoIA.investigando && (
            <p className="flex items-center gap-2 text-xs font-medium text-violet-700">
              <Loader2 className="h-4 w-4 animate-spin" />
              Investigando el modelo en la web… puede tardar unos segundos.
            </p>
          )}
          {estadoIA.error && (
            <p className="rounded-xl bg-red-50 p-3 text-xs font-medium text-red-700">
              {estadoIA.error}
            </p>
          )}
        </div>
      )}
      {estadoIA.disponible && !estadoIA.investigando && !estadoIA.error && (
        <p className="mt-2 text-[11px] text-gray-400">
          Si el modelo no está en la lista, la IA lo investiga en la web y genera su ficha.
          Límite: 5 investigaciones al día por dispositivo.
        </p>
      )}
    </div>
  );
}
