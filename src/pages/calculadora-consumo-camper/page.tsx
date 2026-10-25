import { useState } from "react";
import { Link } from "react-router-dom";
import { BatteryCharging, Plus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

type Equipo = {
  id: number;
  nombre: string;
  potenciaW: number;
  horasDia: number;
};

const EQUIPOS_INICIALES: Equipo[] = [
  { id: 1, nombre: "Nevera de compresor", potenciaW: 45, horasDia: 8 },
  { id: 2, nombre: "Luces LED", potenciaW: 20, horasDia: 4 },
  { id: 3, nombre: "Cargador móvil / USB", potenciaW: 15, horasDia: 3 },
  { id: 4, nombre: "Bomba de agua", potenciaW: 30, horasDia: 0.5 },
  { id: 5, nombre: "Portátil", potenciaW: 65, horasDia: 2 },
  { id: 6, nombre: "Ventilador calefacción", potenciaW: 25, horasDia: 6 },
];

const TAMANOS_COMERCIALES_AH = [20, 30, 50, 75, 100, 120, 150, 200, 250, 300];

const FAQS: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: "¿Cómo se calcula el consumo eléctrico de una camper?",
    respuesta:
      "Multiplica la potencia de cada equipo (en vatios, W) por las horas que lo usas al día y suma todos los resultados. Obtendrás tu consumo diario en vatios-hora (Wh/día). La tabla de esta página hace ese cálculo automáticamente por ti.",
  },
  {
    pregunta: "¿Cómo paso de Wh a Ah a 12 V?",
    respuesta:
      "Divide los Wh/día entre la tensión de tu instalación, que en la mayoría de campers es 12 V: Ah = Wh / 12. Por ejemplo, 780 Wh/día equivalen a 65 Ah útiles a 12 V.",
  },
  {
    pregunta: "¿Qué batería necesito para mi camper?",
    respuesta:
      "A tus Ah útiles añade un 30 % de margen de seguridad y divide entre la profundidad de descarga útil de la tecnología elegida: 0,9 para litio (LiFePO4) o 0,5 para AGM. Con 65 Ah útiles necesitarás unos 94 Ah en litio (una batería comercial de 100 Ah) o unos 169 Ah en AGM.",
  },
  {
    pregunta: "¿AGM o litio para camper?",
    respuesta:
      "La AGM es más barata y válida para un uso ocasional: ofrece unos 500 ciclos de vida y solo un 50 % de descarga útil. El litio (LiFePO4) admite un 90 % de descarga útil, pesa unas tres veces menos y dura entre 3.000 y 5.000 ciclos, así que compensa si vives en la furgo o haces muchos ciclos de carga.",
  },
  {
    pregunta: "¿Cuántos días de autonomía me da una batería de 100 Ah?",
    respuesta:
      "Depende de tu consumo diario y del tipo de batería: días = Ah × 12 V × profundidad de descarga / Wh por día. Una batería de litio de 100 Ah con un consumo de 780 Wh/día da unos 1,4 días de autonomía. Es una estimación orientativa.",
  },
  {
    pregunta: "¿La placa solar cambia el cálculo?",
    respuesta:
      "Sí. Una placa solar recarga la batería durante las horas de sol y cubre parte del consumo diario, así que necesitarás menos capacidad instalada o ganarás días de autonomía. Úsala como apoyo: dimensiona la batería para tu consumo en Wh/día y considera la solar un extra, no un sustituto del cálculo.",
  },
];

function fmt(n: number, decimales = 0): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("es-ES", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });
}

function tamanoComercial(ah: number): number {
  for (const t of TAMANOS_COMERCIALES_AH) {
    if (t >= ah) return t;
  }
  return Math.ceil(ah);
}

export default function CalculadoraConsumoCamperPage() {
  useSeo({
    title:
      "Calculadora camper: qué batería necesitas 2026",
    description:
      "Calcula el consumo eléctrico de tu camper en Wh/día, pasa a Ah a 12 V y descubre qué batería necesitas, con autonomía y comparativa AGM vs litio.",
    canonical: "/calculadora-consumo-camper",
    keywords: [
      "calculadora consumo energético camper",
      "qué batería necesito para mi camper",
      "pasar Wh a Ah 12V",
      "batería camper AGM o litio",
      "autonomía batería camper",
    ],
  });

  const [equipos, setEquipos] = useState<Equipo[]>(EQUIPOS_INICIALES);
  const [siguienteId, setSiguienteId] = useState(EQUIPOS_INICIALES.length + 1);
  const [bateriaAh, setBateriaAh] = useState(100);
  const [tipoBateria, setTipoBateria] = useState<"litio" | "agm">("litio");

  const totalWh = equipos.reduce((acc, e) => acc + e.potenciaW * e.horasDia, 0);
  const ahUtiles = totalWh / 12;
  const litioAh = (ahUtiles * 1.3) / 0.9;
  const agmAh = (ahUtiles * 1.3) / 0.5;
  const profundidadDescarga = tipoBateria === "litio" ? 0.9 : 0.5;
  const autonomiaDias =
    totalWh > 0 ? (bateriaAh * 12 * profundidadDescarga) / totalWh : 0;

  const actualizarEquipo = (
    id: number,
    campo: "nombre" | "potenciaW" | "horasDia",
    valor: string
  ) => {
    setEquipos((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              [campo]:
                campo === "nombre" ? valor : Math.max(0, parseFloat(valor) || 0),
            }
          : e
      )
    );
  };

  const eliminarEquipo = (id: number) => {
    setEquipos((prev) => prev.filter((e) => e.id !== id));
  };

  const anadirEquipo = () => {
    setEquipos((prev) => [
      ...prev,
      { id: siguienteId, nombre: "Nuevo equipo", potenciaW: 10, horasDia: 1 },
    ]);
    setSiguienteId((v) => v + 1);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Calculadora de consumo energético para camper",
        "url": "https://recurretumulta.online/calculadora-consumo-camper",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" },
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map((f) => ({
          "@type": "Question",
          "name": f.pregunta,
          "acceptedAnswer": { "@type": "Answer", "text": f.respuesta },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://recurretumulta.online/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Herramientas",
            "item": "https://recurretumulta.online/herramientas",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Consumo energético camper",
            "item": "https://recurretumulta.online/calculadora-consumo-camper",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px]">
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/hero-calculadora-consumo-camper.webp" alt="Furgoneta camper con paneles solares en el techo en la montaña, junto a una estación de energía portátil" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <motion.nav initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5}} aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link><span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link><span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">Consumo camper</span>
            </motion.nav>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.08}}>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratuita · Sin registro</span>
              </div>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.16}} className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Calculadora de consumo energético para camper
            </motion.h1>
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.24}} className="text-white/80 text-sm md:text-base leading-relaxed">
              Suma el consumo de tu equipamiento (nevera, luces, cargadores...) y descubre cuántos Wh/día gastas, qué capacidad de batería necesitas en Ah a 12 V y cuántos días de autonomía tendrás.
            </motion.p>
          </div>
        </div>
      </div>
      <main className="pt-8 pb-16 px-4 max-w-2xl mx-auto space-y-4 sm:space-y-6">
      <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
          <BatteryCharging className="w-5 h-5 text-amber-600" />
          Tu equipamiento
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Edita la potencia y las horas de uso de cada equipo. El consumo en Wh/día se
          calcula solo.
        </p>

        <div className="-mx-2 px-2">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="text-left text-[11px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="pb-2 pr-1 sm:pr-2">Equipo</th>
                <th className="pb-2 pr-1 sm:pr-2 w-16 sm:w-24">W</th>
                <th className="pb-2 pr-1 sm:pr-2 w-14 sm:w-24">h/día</th>
                <th className="pb-2 pr-1 sm:pr-2 w-16 sm:w-20 text-right">Wh/día</th>
                <th className="pb-2 w-8 sm:w-10">
                  <span className="sr-only">Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {equipos.map((e) => {
                const wh = e.potenciaW * e.horasDia;
                return (
                  <tr key={e.id} className="border-t border-slate-100">
                    <td className="py-2 pr-1 sm:pr-2">
                      <input
                        type="text"
                        value={e.nombre}
                        onChange={(ev) => actualizarEquipo(e.id, "nombre", ev.target.value)}
                        className="w-full rounded-lg border border-slate-200 p-1.5 sm:p-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-500 outline-none"
                        aria-label="Nombre del equipo"
                      />
                    </td>
                    <td className="py-2 pr-1 sm:pr-2">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={e.potenciaW}
                        onChange={(ev) => actualizarEquipo(e.id, "potenciaW", ev.target.value)}
                        className="w-full rounded-lg border border-slate-200 p-1.5 sm:p-2 text-xs sm:text-sm font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                        aria-label="Potencia en vatios"
                      />
                    </td>
                    <td className="py-2 pr-2">
                      <input
                        type="number"
                        min="0"
                        step="0.5"
                        value={e.horasDia}
                        onChange={(ev) => actualizarEquipo(e.id, "horasDia", ev.target.value)}
                        className="w-full rounded-lg border border-slate-200 p-1.5 sm:p-2 text-xs sm:text-sm font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                        aria-label="Horas de uso al día"
                      />
                    </td>
                    <td className="py-2 pr-1 sm:pr-2 text-right font-mono font-bold text-slate-700 text-xs sm:text-sm">
                      {fmt(wh, Number.isInteger(wh) ? 0 : 1)}
                    </td>
                    <td className="py-2 text-right">
                      <button
                        type="button"
                        onClick={() => eliminarEquipo(e.id)}
                        className="text-slate-400 hover:text-red-600 transition p-1"
                        aria-label={`Eliminar ${e.nombre}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={anadirEquipo}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 border border-amber-200 hover:border-amber-300 bg-amber-50 rounded-xl px-4 py-2 transition"
        >
          <Plus className="w-4 h-4" />
          Añadir equipo
        </button>

        <div className="mt-8 grid sm:grid-cols-2 gap-4 text-center">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <p className="text-xs font-bold uppercase text-slate-500 mb-1">Consumo total</p>
            <p className="text-2xl font-bold font-mono text-amber-700">
              {fmt(totalWh)} Wh/día
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <p className="text-xs font-bold uppercase text-slate-500 mb-1">
              Capacidad útil necesaria (12 V)
            </p>
            <p className="text-2xl font-bold font-mono text-amber-700">
              {fmt(ahUtiles)} Ah
            </p>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p className="text-xs font-bold uppercase text-amber-800 mb-3">
            Batería recomendada · con 30 % de margen de seguridad
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-slate-800">Litio (LiFePO4)</p>
              <p className="text-sm text-slate-600">Descarga útil del 90 %</p>
              <p className="text-xl font-bold font-mono text-slate-900 mt-1">
                ≈ {fmt(litioAh)} Ah
              </p>
              <p className="text-sm text-slate-600">
                → elige una de <strong>{fmt(tamanoComercial(litioAh))} Ah</strong>
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800">AGM</p>
              <p className="text-sm text-slate-600">Descarga útil del 50 %</p>
              <p className="text-xl font-bold font-mono text-slate-900 mt-1">
                ≈ {fmt(agmAh)} Ah
              </p>
              <p className="text-sm text-slate-600">
                → elige una de <strong>{fmt(tamanoComercial(agmAh))} Ah</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-slate-900 text-white rounded-2xl p-5">
          <p className="text-xs font-bold uppercase text-slate-300 mb-3">
            Calcula tu autonomía
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="capacidad-bateria"
                className="block text-xs font-bold uppercase tracking-wide text-slate-300 mb-2"
              >
                Capacidad de tu batería (Ah)
              </label>
              <input
                id="capacidad-bateria"
                type="number"
                min="0"
                step="1"
                value={bateriaAh}
                onChange={(ev) =>
                  setBateriaAh(Math.max(0, parseFloat(ev.target.value) || 0))
                }
                className="w-full rounded-xl border border-slate-600 bg-slate-800 p-3 text-lg font-bold font-mono focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="tipo-bateria"
                className="block text-xs font-bold uppercase tracking-wide text-slate-300 mb-2"
              >
                Tipo de batería
              </label>
              <select
                id="tipo-bateria"
                value={tipoBateria}
                onChange={(ev) => setTipoBateria(ev.target.value as "litio" | "agm")}
                className="w-full rounded-xl border border-slate-600 bg-slate-800 p-3 text-lg font-bold focus:ring-2 focus:ring-amber-500 outline-none"
              >
                <option value="litio">Litio (LiFePO4) · 90 % útil</option>
                <option value="agm">AGM · 50 % útil</option>
              </select>
            </div>
          </div>
          <p className="text-center mt-4">
            <span className="text-xs font-bold uppercase text-slate-400">
              Autonomía estimada
            </span>
            <br />
            <span className="text-3xl font-black font-mono text-amber-400">
              {totalWh > 0 ? `≈ ${fmt(autonomiaDias, 1)} días` : "—"}
            </span>
          </p>
          <p className="text-center text-xs text-slate-400 mt-3">
            Estimación orientativa: el frío, la antigüedad de la batería y las pérdidas
            del inversor reducen la autonomía real.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">

<h2 className="text-2xl font-bold mb-4">Cómo se calcula el consumo de tu camper</h2>
        <ul className="space-y-4 text-slate-600">
          <li>
            <p className="font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800">
              Wh/día = Σ (potencia en W × horas de uso al día)
            </p>
            <p className="mt-2 text-sm">
              Suma lo que consume cada equipo: una nevera de 45 W funcionando 8 horas
              gasta 360 Wh al día.
            </p>
          </li>
          <li>
            <p className="font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800">
              Ah a 12 V = Wh/día ÷ 12
            </p>
            <p className="mt-2 text-sm">
              Así pasas la energía a la capacidad que anuncian las baterías: 780 Wh/día
              equivalen a 65 Ah útiles a 12 V.
            </p>
          </li>
          <li>
            <p className="font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800">
              Batería recomendada = Ah útiles × 1,3 ÷ profundidad de descarga
            </p>
            <p className="mt-2 text-sm">
              Aplica un <strong>margen de seguridad del 30 %</strong> (multiplica por 1,3)
              para no quedarte corto en días nublados o con consumos imprevistos, y
              divide entre la <strong>profundidad de descarga útil</strong>: 0,9 en litio
              (LiFePO4) o 0,5 en AGM, porque no conviene descargarlas del todo.
            </p>
          </li>
        </ul>
      </section>

      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-4">AGM o litio: comparativa honesta</h2>
        <div className="-mx-2 px-2">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="text-left text-[11px] sm:text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="pb-2 pr-2">Característica</th>
                <th className="pb-2 pr-2">AGM</th>
                <th className="pb-2">Litio (LiFePO4)</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-t border-slate-100">
                <td className="py-2 pr-2 font-medium text-slate-800">Profundidad de descarga útil</td>
                <td className="py-2 pr-2">50 %</td>
                <td className="py-2">90 %</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="py-2 pr-2 font-medium text-slate-800">Ciclos de vida aproximados</td>
                <td className="py-2 pr-2">~500</td>
                <td className="py-2">3.000–5.000</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="py-2 pr-2 font-medium text-slate-800">Peso</td>
                <td className="py-2 pr-2">Mayor</td>
                <td className="py-2">Aprox. un tercio del de una AGM equivalente</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="py-2 pr-2 font-medium text-slate-800">Precio</td>
                <td className="py-2 pr-2">Más barata</td>
                <td className="py-2">Más cara</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 mt-4">
          <strong>Conclusión honesta:</strong> la AGM es válida si usas la camper de forma
          ocasional y quieres gastar poco. El litio compensa si vives en la furgo o haces
          muchos ciclos de carga y descarga: dura más, pesa menos y aprovechas casi toda
          su capacidad.
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para reducir el consumo</h2>
        <ul className="space-y-3 text-slate-600 list-disc pl-5">
          <li>
            Coloca la <strong>nevera a la sombra y bien ventilada</strong>: el compresor
            trabaja menos y gasta menos.
          </li>
          <li>
            Usa <strong>iluminación 100 % LED</strong>: consume una fracción de las
            bombillas tradicionales.
          </li>
          <li>
            <strong>Apaga los equipos en standby</strong>: el consumo fantasma de
            cargadores e inversores suma Wh cada día.
          </li>
          <li>
            Añade una <strong>placa solar como apoyo</strong>: recarga la batería durante
            el día y alarga tu autonomía sin ampliar la batería.
          </li>
        </ul>
      </section>

              <figure className="my-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <img src="/media/file_PmAVYwZqh0sxFbR69Tkk5itK.webp" alt="Furgoneta camper con paneles solares: cálculo del consumo energético diario y la batería necesaria" width={1920} height={1280} loading="lazy" className="w-full h-auto block" />
        </figure>
        <div className="my-8 flex items-center justify-center gap-3 flex-wrap rounded-2xl bg-slate-50 border border-slate-200 px-6 py-4 max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-slate-700">¿Te ha sido útil? Compártelo:</span>
          <a href="https://wa.me/?text=Calculadora%20de%20consumo%20energ%C3%A9tico%20para%20camper%20https%3A%2F%2Frecurretumulta.online%2Fcalculadora-consumo-camper" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Calculadora%20de%20consumo%20energ%C3%A9tico%20para%20camper&url=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-consumo-camper" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fcalculadora-consumo-camper" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div><section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
        <div className="space-y-5">
          {FAQS.map((f) => (
            <div key={f.pregunta}>
              <h3 className="font-bold mb-1">{f.pregunta}</h3>
              <p className="text-slate-600">{f.respuesta}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-slate-900 text-white rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">¿Te han multado? Analízala gratis con IA</h2>
        <p className="text-slate-300 mb-6">
          Detectamos posibles vicios de forma en tu multa en segundos, sin registro.
        </p>
        <Link
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition"
          to="/"
        >
          Analizar mi multa gratis
        </Link>
      </div>

      <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200" aria-label="Más herramientas">
        <h2 className="font-bold mb-4">Más herramientas</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Link
            className="bg-white p-4 rounded-xl border hover:border-amber-400 transition"
            to="/herramientas/"
          >
            Todas las herramientas
          </Link>
          <Link
            className="bg-white p-4 rounded-xl border hover:border-amber-400 transition"
            to="/valor-venal-vehiculo/"
          >
            Valor venal del vehículo
          </Link>
          <Link
            className="bg-white p-4 rounded-xl border hover:border-amber-400 transition"
            to="/blog/homologacion-camper-y-caravanas-en-espana-vacios-legales-itv-y-como-evitar-multas-de-la-dgt/"
          >
            Homologación de camper y caravanas: vacíos legales e ITV
          </Link>
        </div>
      </nav>
    </main>
      <SharedFooter />
    </div>
  );
}
