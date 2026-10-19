import { Link } from "react-router-dom";
import { useState } from "react";
import { Printer, FileText } from "lucide-react";
import { useSeo } from "@/hooks/use-seo.ts";
import { DriveInImage } from "@/components/motion.tsx";
import SharedNavbar from "@/components/shared-navbar.tsx";
import SharedFooter from "@/components/shared-footer.tsx";
import "./contrato-print.css";
import CosaEnBanner from "@/components/CosaEnBanner.tsx";

const jsonLd = { "@context": "https://schema.org", "@graph": [ { "@type": "WebApplication", "name": "Generador de contrato de compraventa de vehículo", "url": "https://recurretumulta.online/herramientas/contrato-compraventa-vehiculo", "applicationCategory": "UtilityApplication", "operatingSystem": "All", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", availability: "https://schema.org/InStock" } }, { "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "¿Es válido un contrato de compraventa entre particulares?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El contrato privado firmado por comprador y vendedor es válido. Conviene firmarlo por duplicado, describir bien el vehículo y conservar un justificante del pago." } }, { "@type": "Question", "name": "¿Quién paga los impuestos al comprar un coche a un particular?", "acceptedAnswer": { "@type": "Answer", "text": "El comprador: asume el impuesto de transmisiones patrimoniales (modelo 620 o 621 según la comunidad autónoma) y los gastos del cambio de titularidad en Tráfico." } }, { "@type": "Question", "name": "¿Hay que cambiar la titularidad en Tráfico?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El comprador debe tramitar el cambio de titularidad del vehículo en la Jefatura Provincial de Tráfico en el plazo legalmente establecido." } }, { "@type": "Question", "name": "¿Qué documentos hay que entregar al vender un coche?", "acceptedAnswer": { "@type": "Answer", "text": "El permiso de circulación, la tarjeta de la ITV, las llaves y el contrato de compraventa firmado por ambas partes. El vendedor debe notificar la venta." } } ] }, { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://recurretumulta.online/" }, { "@type": "ListItem", "position": 2, "name": "Herramientas", "item": "https://recurretumulta.online/herramientas" }, { "@type": "ListItem", "position": 3, "name": "Contrato de compraventa de vehículo", "item": "https://recurretumulta.online/herramientas/contrato-compraventa-vehiculo" } ] } ] };

type Datos = {
  nombreV: string; dniV: string; domicilioV: string;
  nombreC: string; dniC: string; domicilioC: string;
  marca: string; modelo: string; matricula: string; bastidor: string; km: string; anio: string;
  precio: string; formaPago: string; senal: string;
  lugar: string; fecha: string;
  libreCargas: boolean; itvCorriente: boolean;
  clausulaExtra: string;
};

const hoyISO = () => new Date().toISOString().slice(0, 10);

const VACIO: Datos = {
  nombreV: "", dniV: "", domicilioV: "",
  nombreC: "", dniC: "", domicilioC: "",
  marca: "", modelo: "", matricula: "", bastidor: "", km: "", anio: "",
  precio: "", formaPago: "transferencia bancaria", senal: "",
  lugar: "", fecha: hoyISO(),
  libreCargas: true, itvCorriente: true,
  clausulaExtra: "",
};

const fmtEur = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 2 }) + " €";

const fechaLarga = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return "____";
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" }).format(new Date(y, m - 1, d));
};

function Campo({ id, label, value, onChange, placeholder, type = "text", required = true }: {
  id: string; label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
        {label}{required && <span className="text-red-600"> *</span>}
      </label>
      <input id={id} type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
    </div>
  );
}

export default function ContratoCompraventaPage() {
  useSeo({
    title: "Contrato compraventa vehículo gratis",
    description: "Genera tu contrato de compraventa de vehículo gratis: rellena vendedor, comprador y vehículo, obtén el documento listo para firmar y descárgalo en PDF.",
    canonical: "/herramientas/contrato-compraventa-vehiculo",
    image: "https://recurretumulta.online/media/contrato-compraventa-vehiculo.webp",
    keywords: ["contrato compraventa vehiculo", "contrato compraventa coche particulares", "modelo contrato compraventa coche pdf"],
  });

  const [d, setD] = useState<Datos>(VACIO);
  const [generado, setGenerado] = useState(false);
  const [error, setError] = useState("");
  const set = (k: keyof Datos) => (v: string | boolean) => setD((p) => ({ ...p, [k]: v }));

  const generar = () => {
    const oblig = [
      ["nombreV", "nombre del vendedor"], ["dniV", "DNI/NIE del vendedor"], ["domicilioV", "domicilio del vendedor"],
      ["nombreC", "nombre del comprador"], ["dniC", "DNI/NIE del comprador"], ["domicilioC", "domicilio del comprador"],
      ["marca", "marca del vehículo"], ["modelo", "modelo del vehículo"], ["matricula", "matrícula"],
      ["bastidor", "nº de bastidor"], ["km", "kilómetros"], ["anio", "año de matriculación"],
      ["precio", "precio"], ["lugar", "lugar de firma"], ["fecha", "fecha de firma"],
    ] as const;
    const falta = oblig.find(([k]) => !String(d[k]).trim());
    if (falta) { setError(`Falta por rellenar: ${falta[1]}.`); setGenerado(false); return; }
    const p = parseFloat(d.precio), s = d.senal ? parseFloat(d.senal) : 0;
    if (isNaN(p) || p <= 0) { setError("El precio debe ser una cantidad válida mayor que cero."); setGenerado(false); return; }
    if (d.senal && (isNaN(s) || s < 0)) { setError("La señal debe ser una cantidad válida."); setGenerado(false); return; }
    if (s > p) { setError("La señal no puede ser mayor que el precio total."); setGenerado(false); return; }
    setError("");
    setGenerado(true);
    requestAnimationFrame(() => document.getElementById("contrato-documento")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const imprimir = () => {
    const original = document.title;
    document.title = `Contrato compraventa ${d.marca} ${d.modelo}`;
    const restaurar = () => { document.title = original; window.removeEventListener("afterprint", restaurar); };
    window.addEventListener("afterprint", restaurar);
    window.print();
  };

  const precioNum = parseFloat(d.precio) || 0;
  const senalNum = d.senal ? parseFloat(d.senal) || 0 : 0;
  const resto = precioNum - senalNum;

  return (
    <div className="min-h-screen bg-white">
      <SharedNavbar />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="pt-[57px] contrato-no-print">
        <div className="relative overflow-hidden">
          <DriveInImage src="/media/contrato-compraventa-vehiculo.webp" alt="Dos personas firmando un contrato de compraventa de coche con las llaves del vehículo sobre la mesa" eager={true} className="absolute inset-0" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-950/50 via-transparent to-transparent" aria-hidden="true" />
          <CosaEnBanner />
          <div className="relative max-w-3xl mx-auto px-4 pt-10 pb-12 space-y-4">
            <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Inicio</Link><span aria-hidden="true">/</span>
              <Link to="/herramientas/" className="hover:text-white">Herramientas</Link><span aria-hidden="true">/</span>
              <span className="text-white/40 truncate max-w-[200px]">Contrato de compraventa</span>
            </nav>
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5">
                <span className="text-xs text-red-300 font-bold uppercase tracking-widest">Herramienta gratuita · Sin registro</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight text-balance drop-shadow-lg">
              Generador de contrato de compraventa de vehículo
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Rellena los datos del vendedor, el comprador y el vehículo, y obtén tu contrato listo para firmar. Descárgalo en PDF gratis.
            </p>
          </div>
        </div>
      </div>

      <main className="pt-8 pb-16 px-4 max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <section className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-8 contrato-no-print" aria-label="Formulario del contrato">
          <div className="space-y-8">
            <fieldset>
              <legend className="text-lg font-black mb-4 flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-black">1</span>Vendedor</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Campo id="nombreV" label="Nombre y apellidos" value={d.nombreV} onChange={set("nombreV")} placeholder="Ej.: Juan Pérez García" />
                <Campo id="dniV" label="DNI / NIE" value={d.dniV} onChange={set("dniV")} placeholder="Ej.: 12345678Z" />
                <div className="sm:col-span-2"><Campo id="domicilioV" label="Domicilio" value={d.domicilioV} onChange={set("domicilioV")} placeholder="Calle, número, CP y localidad" /></div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-black mb-4 flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-black">2</span>Comprador</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Campo id="nombreC" label="Nombre y apellidos" value={d.nombreC} onChange={set("nombreC")} placeholder="Ej.: María López Ruiz" />
                <Campo id="dniC" label="DNI / NIE" value={d.dniC} onChange={set("dniC")} placeholder="Ej.: 87654321X" />
                <div className="sm:col-span-2"><Campo id="domicilioC" label="Domicilio" value={d.domicilioC} onChange={set("domicilioC")} placeholder="Calle, número, CP y localidad" /></div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-black mb-4 flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-black">3</span>Vehículo</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Campo id="marca" label="Marca" value={d.marca} onChange={set("marca")} placeholder="Ej.: Volkswagen" />
                <Campo id="modelo" label="Modelo" value={d.modelo} onChange={set("modelo")} placeholder="Ej.: Golf 1.5 TSI" />
                <Campo id="matricula" label="Matrícula" value={d.matricula} onChange={set("matricula")} placeholder="Ej.: 1234 ABC" />
                <Campo id="bastidor" label="Nº de bastidor (VIN)" value={d.bastidor} onChange={set("bastidor")} placeholder="17 caracteres" />
                <Campo id="km" label="Kilómetros" value={d.km} onChange={set("km")} placeholder="Ej.: 85000" type="number" />
                <Campo id="anio" label="Año de matriculación" value={d.anio} onChange={set("anio")} placeholder="Ej.: 2019" type="number" />
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-black mb-4 flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-black">4</span>Precio y firma</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <Campo id="precio" label="Precio total (€)" value={d.precio} onChange={set("precio")} placeholder="Ej.: 12500" type="number" />
                <div>
                  <label htmlFor="formaPago" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">Forma de pago<span className="text-red-600"> *</span></label>
                  <select id="formaPago" value={d.formaPago} onChange={(e) => set("formaPago")(e.target.value)} className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white">
                    <option value="transferencia bancaria">Transferencia bancaria</option>
                    <option value="efectivo">Efectivo</option>
                  </select>
                </div>
                <Campo id="senal" label="Señal / entrega a cuenta (€)" value={d.senal} onChange={set("senal")} placeholder="Opcional" type="number" required={false} />
                <Campo id="lugar" label="Lugar de firma" value={d.lugar} onChange={set("lugar")} placeholder="Ej.: Madrid" />
                <div className="sm:col-span-2"><Campo id="fecha" label="Fecha de firma" value={d.fecha} onChange={set("fecha")} type="date" /></div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={d.libreCargas} onChange={(e) => set("libreCargas")(e.target.checked)} className="mt-1 w-4 h-4 accent-green-600" />
                  <span>El vendedor manifiesta que el vehículo está <strong>libre de cargas y gravámenes</strong>.</span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={d.itvCorriente} onChange={(e) => set("itvCorriente")(e.target.checked)} className="mt-1 w-4 h-4 accent-green-600" />
                  <span>El vehículo está <strong>al corriente de la ITV y del impuesto de circulación</strong>.</span>
                </label>
              </div>
              <div className="mt-4">
                <label htmlFor="clausulaExtra" className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">Cláusula adicional (opcional)</label>
                <textarea id="clausulaExtra" value={d.clausulaExtra} onChange={(e) => set("clausulaExtra")(e.target.value)}
                  placeholder="Ej.: El vendedor se compromete a entregar el vehículo con el depósito lleno y la revisión recién pasada."
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:ring-2 focus:ring-green-500 outline-none resize-y" />
                <p className="text-xs text-slate-400 mt-1">Si la rellenas, aparecerá como cláusula novena en el contrato.</p>
              </div>
            </fieldset>
          </div>

          {error && <p role="alert" className="mt-6 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm font-semibold">{error}</p>}

          <button type="button" onClick={generar} className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg transition active:scale-[0.99]">
            <FileText className="h-5 w-5" aria-hidden="true" /> Generar contrato
          </button>
          <p className="text-center text-xs text-slate-400 mt-4">Modelo orientativo, no constituye asesoramiento jurídico. Revisa el documento antes de firmarlo.</p>
        </section>

        {generado && (
          <section aria-label="Contrato generado">
            <div id="contrato-documento" className="bg-white rounded-2xl border border-slate-300 shadow-lg p-8 sm:p-12 font-serif text-slate-900 leading-relaxed">
              <h2 className="text-center text-xl sm:text-2xl font-black tracking-wide mb-2">CONTRATO DE COMPRAVENTA DE VEHÍCULO</h2>
              <p className="text-center text-sm mb-8">En {d.lugar}, a {fechaLarga(d.fecha)}.</p>

              <h3 className="font-black text-sm tracking-widest mb-3 mt-6">REUNIDOS</h3>
              <p className="text-sm mb-3 text-justify">De una parte, D./Dña. <strong>{d.nombreV}</strong>, mayor de edad, con DNI/NIE n.º <strong>{d.dniV}</strong> y domicilio en {d.domicilioV}, en adelante, <em>la parte vendedora</em>.</p>
              <p className="text-sm mb-3 text-justify">De otra parte, D./Dña. <strong>{d.nombreC}</strong>, mayor de edad, con DNI/NIE n.º <strong>{d.dniC}</strong> y domicilio en {d.domicilioC}, en adelante, <em>la parte compradora</em>.</p>
              <p className="text-sm mb-3 text-justify">Ambas partes se reconocen mutuamente capacidad legal suficiente para contratar y obligarse, y</p>

              <h3 className="font-black text-sm tracking-widest mb-3 mt-6">EXPONEN</h3>
              <p className="text-sm mb-3 text-justify"><strong>I.</strong> Que la parte vendedora es legítima propietaria del vehículo de las siguientes características: marca <strong>{d.marca}</strong>, modelo <strong>{d.modelo}</strong>, matrícula <strong>{d.matricula}</strong>, n.º de bastidor (VIN) <strong>{d.bastidor}</strong>, con {Number(d.km).toLocaleString("es-ES")} kilómetros y año de matriculación {d.anio}.</p>
              {(d.libreCargas || d.itvCorriente) && (
                <p className="text-sm mb-3 text-justify"><strong>II.</strong> Que la parte vendedora manifiesta {d.libreCargas ? "que el vehículo se encuentra libre de cargas y gravámenes" : ""}{d.libreCargas && d.itvCorriente ? " y " : ""}{d.itvCorriente ? "que está al corriente del pago del impuesto sobre vehículos de tracción mecánica y de la inspección técnica (ITV)" : ""}.</p>
              )}
              <p className="text-sm mb-3 text-justify"><strong>{d.libreCargas || d.itvCorriente ? "III" : "II"}.</strong> Que es voluntad de ambas partes formalizar la compraventa del vehículo descrito, con arreglo a las siguientes</p>

              <h3 className="font-black text-sm tracking-widest mb-3 mt-6">CLÁUSULAS</h3>
              <p className="text-sm mb-3 text-justify"><strong>PRIMERA. Objeto.</strong> La parte vendedora vende a la parte compradora, que compra, el vehículo descrito en el expositivo I, con todos sus accesorios y su documentación.</p>
              <p className="text-sm mb-3 text-justify"><strong>SEGUNDA. Precio y forma de pago.</strong> El precio total de la compraventa es de <strong>{fmtEur(precioNum)}</strong>, que la parte compradora abona mediante <strong>{d.formaPago}</strong>.{senalNum > 0 && <> En este acto la parte compradora entrega la cantidad de <strong>{fmtEur(senalNum)}</strong> en concepto de señal y a cuenta del precio total, quedando pendiente de pago la cantidad de <strong>{fmtEur(resto)}</strong>.</>}</p>
              <p className="text-sm mb-3 text-justify"><strong>TERCERA. Entrega del vehículo y documentación.</strong> La parte vendedora hace entrega en este acto del vehículo, sus llaves y su documentación (permiso de circulación y tarjeta de ITV), quedando la parte compradora en posesión del mismo a su entera satisfacción.</p>
              <p className="text-sm mb-3 text-justify"><strong>CUARTA. Cargas y gravámenes.</strong> {d.libreCargas ? "La parte vendedora garantiza que el vehículo está libre de cargas, gravámenes, precintos y sanciones pendientes." : "La parte compradora declara conocer el estado administrativo del vehículo y acepta la transmisión en dichas condiciones."}</p>
              <p className="text-sm mb-3 text-justify"><strong>QUINTA. Cambio de titularidad.</strong> La parte compradora se obliga a tramitar el cambio de titularidad del vehículo ante la Jefatura Provincial de Tráfico en el plazo legalmente establecido.</p>
              <p className="text-sm mb-3 text-justify"><strong>SEXTA. Gastos e impuestos.</strong> Todos los gastos e impuestos derivados de la presente transmisión serán por cuenta de la parte compradora.</p>
              <p className="text-sm mb-3 text-justify"><strong>SÉPTIMA. Fuero.</strong> Para la resolución de cuantas cuestiones pudieran derivarse del presente contrato, las partes se someten a la jurisdicción de los Juzgados y Tribunales competentes.</p>
              <p className="text-sm mb-3 text-justify"><strong>OCTAVA.</strong> El presente contrato se extiende por duplicado ejemplar, firmando las partes cada uno de ellos en prueba de conformidad.</p>
              {d.clausulaExtra.trim() && (
                <p className="text-sm mb-3 text-justify whitespace-pre-line"><strong>NOVENA. Cláusula adicional.</strong> {d.clausulaExtra.trim()}</p>
              )}

              <p className="text-sm mt-8 mb-10 text-justify">Y en prueba de conformidad, firman el presente contrato en {d.lugar}, a {fechaLarga(d.fecha)}.</p>

              <div className="grid grid-cols-2 gap-8 mt-12 text-sm">
                <div>
                  <p className="font-bold mb-16">Fdo.: La parte vendedora</p>
                  <p className="border-t border-slate-400 pt-2">D./Dña. {d.nombreV}</p>
                </div>
                <div>
                  <p className="font-bold mb-16">Fdo.: La parte compradora</p>
                  <p className="border-t border-slate-400 pt-2">D./Dña. {d.nombreC}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-10 italic">Modelo orientativo, no constituye asesoramiento jurídico.</p>
            </div>

            <button type="button" onClick={imprimir} className="contrato-no-print mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 hover:bg-gray-700 text-white font-bold py-4 px-8 text-lg transition active:scale-[0.99]">
              <Printer className="h-5 w-5" aria-hidden="true" /> Descargar en PDF
            </button>
            <p className="contrato-no-print text-center text-xs text-slate-400 mt-2">Se abrirá el diálogo de impresión: elige «Guardar como PDF».</p>
          </section>
        )}

        <div className="flex items-center gap-2 flex-wrap contrato-no-print">
          <span className="text-sm font-semibold text-slate-700">Compartir:</span>
          <a href="https://wa.me/?text=Generador%20gratuito%20de%20contrato%20de%20compraventa%20de%20veh%C3%ADculo%20https%3A%2F%2Frecurretumulta.online%2Fherramientas%2Fcontrato-compraventa-vehiculo" target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Generador%20gratuito%20de%20contrato%20de%20compraventa%20de%20veh%C3%ADculo&url=https%3A%2F%2Frecurretumulta.online%2Fherramientas%2Fcontrato-compraventa-vehiculo" target="_blank" rel="noopener noreferrer" aria-label="Compartir en X" title="Compartir en X" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frecurretumulta.online%2Fherramientas%2Fcontrato-compraventa-vehiculo" target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" title="Compartir en Facebook" className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 contrato-no-print">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-5">
            <div><h3 className="font-bold mb-1">¿Es válido un contrato de compraventa entre particulares?</h3><p className="text-slate-600">Sí. El contrato privado firmado por comprador y vendedor es válido. Conviene firmarlo por duplicado, describir bien el vehículo y conservar un justificante del pago.</p></div>
            <div><h3 className="font-bold mb-1">¿Quién paga los impuestos al comprar un coche a un particular?</h3><p className="text-slate-600">El comprador: asume el impuesto de transmisiones patrimoniales (modelo 620 o 621 según la comunidad autónoma) y los gastos del cambio de titularidad en Tráfico.</p></div>
            <div><h3 className="font-bold mb-1">¿Hay que cambiar la titularidad en Tráfico?</h3><p className="text-slate-600">Sí. El comprador debe tramitar el cambio de titularidad del vehículo en la Jefatura Provincial de Tráfico en el plazo legalmente establecido.</p></div>
            <div><h3 className="font-bold mb-1">¿Qué documentos hay que entregar al vender un coche?</h3><p className="text-slate-600">El permiso de circulación, la tarjeta de la ITV, las llaves y el contrato de compraventa firmado por ambas partes. El vendedor debe notificar la venta.</p></div>
          </div>
        </section>

        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center contrato-no-print">
          <h2 className="text-2xl font-bold mb-3">¿Te ha llegado una multa?</h2>
          <p className="text-slate-300 mb-6">Analízala gratis con nuestra IA y descubre si tiene defectos recurribles.</p>
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition">Analizar mi multa</Link>
        </div>

        <nav className="bg-slate-100 rounded-3xl p-6 border border-slate-200 contrato-no-print">
          <h2 className="font-bold mb-4">Más herramientas y guías</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/herramientas/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Todas las herramientas</Link>
            <Link to="/valor-venal-vehiculo/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Valor venal del vehículo</Link>
            <Link to="/equivalencia-neumaticos-itv/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Equivalencia de neumáticos e ITV</Link>
            <Link to="/guias/comprar-coche-electrico-segunda-mano/" className="bg-white p-4 rounded-xl border hover:border-green-400 transition">Guía: comprar coche de segunda mano</Link>
          </div>
        </nav>
      </main>
      <SharedFooter />
    </div>
  );
}
