import { useState } from "react";

/**
 * Calculadora "¿Ha prescrito mi multa?"
 * Base legal: artículo 112 del RDL 6/2015 (texto refundido de la Ley de Tráfico),
 * verificado en el BOE: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722
 *  - art. 112.1: infracciones leves prescriben a los 3 meses; graves y muy
 *    graves, a los 6 meses, contados desde el mismo día de los hechos.
 *  - art. 112.4: las sanciones consistentes en multa prescriben a los 4 años
 *    desde el día siguiente a su firmeza en vía administrativa.
 */

const GRAVEDADES = [
  { value: "leve", label: "Leve", meses: 3 },
  { value: "grave", label: "Grave", meses: 6 },
  { value: "muy-grave", label: "Muy grave", meses: 6 },
] as const;

type GravedadValue = (typeof GRAVEDADES)[number]["value"];

function parseLocalDate(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return isNaN(d.getTime()) ? null : d;
}

/** Suma meses naturales "de fecha a fecha"; si el mes de destino no tiene
 *  el día equivalente, vence el último día del mes. */
function addMonths(d: Date, months: number): Date {
  const day = d.getDate();
  const r = new Date(d.getFullYear(), d.getMonth() + months, 1);
  const lastDay = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
  r.setDate(Math.min(day, lastDay));
  return r;
}

function fmtFecha(d: Date): string {
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}

function fmtFechaCorta(d: Date): string {
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function CalculadoraPrescripcion() {
  const [fecha, setFecha] = useState("");
  const [gravedad, setGravedad] = useState<GravedadValue>("grave");

  const g = GRAVEDADES.find((x) => x.value === gravedad) ?? GRAVEDADES[1];
  const fechaHechos = fecha ? parseLocalDate(fecha) : null;

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const isoHoy = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(
    hoy.getDate()
  ).padStart(2, "0")}`;

  const fechaFutura = fechaHechos !== null && fechaHechos.getTime() > hoy.getTime();
  const limite = fechaHechos && !fechaFutura ? addMonths(fechaHechos, g.meses) : null;
  const vencido = limite !== null && limite.getTime() < hoy.getTime();
  const dias = limite
    ? Math.round((limite.getTime() - hoy.getTime()) / 86400000)
    : 0;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cp-fecha" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
            Fecha de la infracción
          </label>
          <input
            id="cp-fecha"
            type="date"
            value={fecha}
            max={isoHoy}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 text-base font-semibold focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
          <p className="mt-2 text-xs text-slate-500">
            El día en que ocurrieron los hechos (el que figura en la denuncia).
          </p>
        </div>
        <div>
          <label htmlFor="cp-gravedad" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
            Gravedad de la infracción
          </label>
          <select
            id="cp-gravedad"
            value={gravedad}
            onChange={(e) => setGravedad(e.target.value as GravedadValue)}
            className="w-full rounded-xl border border-slate-300 p-3 text-base font-semibold bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          >
            {GRAVEDADES.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-slate-500">
            La gravedad figura en la denuncia; ante la duda, la mayoría de multas de tráfico son graves.
          </p>
        </div>
      </div>

      <div aria-live="polite" className="mt-5">
        {!fechaHechos && (
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
            Introduce la fecha de la infracción para calcular la fecha límite de prescripción.
          </div>
        )}
        {fechaFutura && (
          <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
            <strong>La fecha no puede ser posterior a hoy.</strong> Revisa el dato introducido.
          </div>
        )}
        {limite && fechaHechos && !fechaFutura && (
          <div
            className={`rounded-2xl border p-4 sm:p-5 ${
              vencido ? "bg-emerald-50 border-emerald-300" : "bg-amber-50 border-amber-300"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">
              Fecha límite de prescripción
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              {fmtFecha(limite)}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {vencido ? (
                <>
                  Han pasado más de {g.meses} meses desde los hechos (
                  {fmtFechaCorta(fechaHechos)}): si la administración{" "}
                  <strong>no te ha notificado nada</strong> desde entonces, la infracción{" "}
                  <strong className="text-emerald-700">podría haber prescrito</strong>.
                </>
              ) : (
                <>
                  {dias === 0 ? (
                    <>El plazo <strong>vence hoy</strong>.</>
                  ) : (
                    <>Quedan <strong>{dias} {dias === 1 ? "día" : "días"}</strong> de plazo.</>
                  )}{" "}
                  Si no te notifican antes del {fmtFecha(limite)}, la infracción prescribirá.
                </>
              )}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed mt-3">
              <strong>Ojo con las interrupciones:</strong> cualquier notificación válida dirigida a ti
              (incluida la publicación en el BOE tras dos intentos fallidos en tu domicilio) interrumpe
              la prescripción y reinicia el cómputo (art. 112.2). Este cálculo no tiene en cuenta
              interrupciones que ya se hayan producido.
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4">
        <p className="text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Prescripción de la infracción ≠ prescripción de la sanción.</strong>{" "}
          Esta calculadora estima la primera: el tiempo que tiene la administración para notificarte
          desde los hechos (3 meses leves, 6 meses graves y muy graves, art. 112.1 del{" "}
          <a
            href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-semibold hover:underline"
          >
            RDL 6/2015, BOE
          </a>
          ). Una vez la multa es firme, es la <strong>sanción</strong> la que prescribe, y lo hace a los{" "}
          <strong>4 años</strong> (art. 112.4). Además, si el procedimiento se alarga más de{" "}
          <strong>1 año</strong> sin resolución, <strong>caduca</strong> (art. 112.3).
        </p>
        <p className="text-xs text-slate-400 mt-2">
          Cálculo orientativo con los plazos legales vigentes; no constituye asesoramiento jurídico.
        </p>
      </div>
    </div>
  );
}
