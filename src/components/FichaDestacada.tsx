import { Link } from "react-router-dom";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { Donut, BatteryFill, SpecBar, Speedometer } from "@/components/motion.tsx";
import EtiquetaDGT from "@/components/EtiquetaDGT.tsx";
import { fmtMiles } from "@/lib/formato.ts";
import type { CocheComparador } from "@/lib/comparador-coches-data.ts";

/* ── Ficha destacada al inicio de los artículos de coches (03/10/2026, orden
   Daniel: el blog del modelo empieza con la ficha y luego cuenta la historia).
   La plantilla del blog la muestra automáticamente cuando el artículo enlaza
   a una ficha (/coches/…).
   03/10/2026 ~21:05: Daniel quiere la ficha animada COMPLETA ("En cifras"
   con Donuts, velocímetro, batería y barras) en TODOS los blogs de coches. ── */

const fmtEur = (v: number | null) =>
  // 20/10/2026 (fix plantilla): fmtMiles agrupa siempre (toLocaleString no agrupaba 4 cifras).
  v == null ? "—" : fmtMiles(v) + " €";

export default function FichaDestacada({ coche }: { coche: CocheComparador }) {
  // Datos estrella para los Donut (solo valores reales, nunca inventados).
  const donuts: { value: number; max: number; label: string }[] = [];
  if (coche.autonomiaKm != null)
    donuts.push({ value: coche.autonomiaKm, max: 800, label: "km de autonomía" });
  if (coche.potenciaCv != null)
    donuts.push({ value: coche.potenciaCv, max: 500, label: "CV de potencia" });
  if (coche.maleteroL != null)
    donuts.push({ value: coche.maleteroL, max: 700, label: "L de maletero" });
  if (donuts.length < 3 && coche.cargaRapidaKw != null)
    donuts.push({ value: coche.cargaRapidaKw, max: 350, label: "kW de carga DC" });

  // Datos técnicos para las SpecBar (solo valores reales).
  const specbars: { label: string; value: number; max: number; unit: string }[] = [];
  if (coche.potenciaCv != null)
    specbars.push({ label: "Potencia", value: coche.potenciaCv, max: 500, unit: " CV" });
  if (coche.autonomiaKm != null)
    specbars.push({ label: "Autonomía (WLTP)", value: coche.autonomiaKm, max: 800, unit: " km" });
  if (coche.maleteroL != null)
    specbars.push({ label: "Maletero", value: coche.maleteroL, max: 700, unit: " L" });
  if (specbars.length < 4 && coche.velocidadMax != null)
    specbars.push({ label: "Velocidad máxima", value: coche.velocidadMax, max: 260, unit: " km/h" });
  if (specbars.length < 4 && coche.consumo != null)
    specbars.push({
      label: "Consumo",
      value: coche.consumo,
      max: 30,
      unit: coche.consumoUnidad ? ` ${coche.consumoUnidad}` : "",
    });

  const esElectrico = /^eléctrico$/i.test(coche.tipo ?? "");

  return (
    <section
      aria-label={`Ficha técnica del ${coche.marca} ${coche.modelo}`}
      className="overflow-hidden rounded-3xl border-2 border-red-100 bg-white shadow-sm"
    >
      {/* Cabecera con foto y precio */}
      <div className="grid sm:grid-cols-2">
        <div className="relative min-h-[200px]">
          {coche.imagenOficial ? (
            <img
              src={coche.imagenOficial}
              alt={`${coche.marca} ${coche.modelo}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          ) : null}
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow">
            Ficha técnica
          </span>
        </div>
        <div className="bg-gradient-to-b from-red-50/60 to-white p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600">{coche.tipo}</p>
          <h2 className="mt-1 text-2xl font-black text-gray-900">
            {coche.marca} {coche.modelo}
          </h2>
          <div className="mt-2 flex items-center gap-3">
            <p className="text-3xl font-black text-gray-900">
              {coche.aprox.includes("precioDesde") ? "≈ " : ""}
              {fmtEur(coche.precioDesde)}
            </p>
            <EtiquetaDGT etiqueta={coche.etiquetaDgt} size="md" />
          </div>
          {coche.aprox.includes("precioDesde") && (
            <p className="mt-1 text-[11px] text-gray-500">
              ≈ Precio estimado, no oficial.
            </p>
          )}
          <div className="mt-4 grid gap-2.5">
            <Link
              to={`/coches/${coche.id}/`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black text-white transition hover:bg-red-700"
            >
              Ver ficha técnica completa
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={`/comparador-coches/?a=${coche.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-200 px-4 py-2.5 text-sm font-bold text-red-700 transition hover:border-red-400 hover:bg-red-50"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Comparar con otro modelo
            </Link>
          </div>
        </div>
      </div>

      {/* En cifras: Donuts animados */}
      {donuts.some((d) => d.value > 0) && (
        <div className="border-t border-gray-100 p-4 sm:p-6">
          <h3 className="text-xl font-extrabold text-gray-900">En cifras</h3>
          <div className="mt-4 flex flex-wrap items-start justify-around gap-6">
            {donuts.filter((d) => d.value > 0).map((d) => (
              <Donut key={d.label} value={d.value} max={d.max} label={d.label} />
            ))}
          </div>
          {/* Velocímetro + batería */}
          {(coche.velocidadMax != null || coche.potenciaCv != null || (coche.cargaRapidaKw != null && esElectrico)) && (
            <div className="mt-6 flex flex-wrap items-start justify-around gap-6">
              {coche.velocidadMax != null ? (
                <Speedometer value={coche.velocidadMax} max={260} label="Velocidad máxima" />
              ) : coche.potenciaCv != null ? (
                <Speedometer value={coche.potenciaCv} max={500} label="Potencia (escala CV)" unit="CV" />
              ) : null}
              {coche.cargaRapidaKw != null && esElectrico && (
                <BatteryFill kw={coche.cargaRapidaKw} />
              )}
            </div>
          )}
          {specbars.some((sb) => sb.value > 0) && (
            <div className="mt-6 space-y-4">
              {specbars.filter((sb) => sb.value > 0).map((s) => (
                <SpecBar
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  max={s.max}
                  unit={s.unit}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
