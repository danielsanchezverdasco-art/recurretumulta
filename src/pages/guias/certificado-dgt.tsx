import { useSeo } from "@/hooks/use-seo.ts";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/certificado-dgt#faq","mainEntity":[
{"@type":"Question","name":"¿Qué es el certificado de circulación de un patinete?","acceptedAnswer":{"@type":"Answer","text":"El documento que acredita que ese modelo de VMP cumple los requisitos técnicos del Manual de características de los VMP, aprobado por Resolución de 12 de enero de 2022 de la DGT."}},
{"@type":"Question","name":"¿Todos los patinetes necesitan certificado de la DGT?","acceptedAnswer":{"@type":"Answer","text":"Sí para circular legalmente: es obligatorio para los VMP comercializados desde el 22 de enero de 2024. Los anteriores a esa fecha sin certificado pueden inscribirse de forma temporal y circular hasta el 22 de enero de 2027."}},
{"@type":"Question","name":"¿Cómo compruebo si mi patinete tiene certificado?","acceptedAnswer":{"@type":"Answer","text":"Pídelo al vendedor: el certificado de circulación acompaña al modelo. Sin él no se completa la inscripción en el Registro de Vehículos Personales Ligeros de la DGT."}},
{"@type":"Question","name":"¿Puedo circular sin certificado de la DGT?","acceptedAnswer":{"@type":"Answer","text":"No, salvo el régimen temporal para unidades anteriores al 22 de enero de 2024 sin certificado, que solo permite circular hasta el 22 de enero de 2027. A partir de esa fecha, sin certificado no se puede circular."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias"},
{"@type":"ListItem","position":3,"name":"Certificado DGT del patinete","item":"https://recurretumulta.online/guias/certificado-dgt"}]}]};

export default function GuiaCertificadoDgtPage() {
  useSeo({
    title: "Certificado DGT del patinete: qué es y cómo comprobarlo",
    description: "Qué es el certificado de circulación de un VMP, desde cuándo es obligatorio, qué pasa si tu patinete no lo tiene y cómo comprobarlo antes de comprar.",
    canonical: "/guias/certificado-dgt",
    schema: FAQ_SCHEMA,
  });

  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen" style={{ fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif' }}>
      <main className="max-w-4xl mx-auto px-4 pt-10 pb-16">
      <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
        <a href="https://recurretumulta.online/" className="hover:underline">Inicio</a>
        <span aria-hidden="true">/</span>
        <a href="https://recurretumulta.online/guias" className="hover:underline">Guías</a>
        <span aria-hidden="true">/</span>
        <span className="text-slate-400">Certificado DGT del patinete</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-black leading-tight text-balance">Certificado DGT del patinete: qué es y cómo comprobarlo</h1>
      <p className="text-slate-600 mt-4 leading-relaxed">El certificado de circulación es el documento que acredita que un modelo de vehículo de movilidad personal (VMP) cumple los requisitos técnicos del Manual de características de los VMP, aprobado por Resolución de 12 de enero de 2022 de la Dirección General de Tráfico. Sin certificado, un patinete no puede inscribirse ni asegurarse, y por tanto no puede circular legalmente.</p>
      <p className="text-xs text-slate-500 mt-3">Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Desde cuándo es obligatorio</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><strong>Desde el 22 de enero de 2024:</strong> todo VMP comercializado en España debe llevar certificado de circulación.</li>
        <li><strong>Unidades anteriores al 22 de enero de 2024 sin certificado:</strong> pueden inscribirse de forma temporal en el Registro de Vehículos Personales Ligeros y circular hasta el 22 de enero de 2027. A partir de esa fecha, sin certificado no podrán circular por la vía pública.</li>
        <li><strong>Segunda mano:</strong> antes de comprar un patinete usado, pide el certificado de circulación y comprueba que el modelo lo tiene; sin él, la inscripción temporal tiene fecha de caducidad.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Cómo comprobarlo, paso a paso</h2>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
        <li><strong>Pide el certificado al vendedor.</strong> El certificado de circulación acompaña al modelo; si el vendedor no lo entrega, desconfía.</li>
        <li><strong>Inscribe el patinete en la DGT.</strong> La inscripción en el Registro de Vehículos Personales Ligeros exige el certificado (salvo el régimen temporal anterior) y genera la etiqueta identificativa que debe llevar el vehículo.</li>
        <li><strong>Contrata el seguro.</strong> Sin inscripción no se puede contratar la póliza obligatoria: el orden es certificado, inscripción y seguro. La <a href="https://recurretumulta.online/guias/seguro-vmp" className="text-red-600 font-semibold hover:underline">guía del seguro obligatorio del patinete</a> explica los plazos y las multas.</li>
      </ol>
      <p className="text-slate-600 mb-4">La normativa completa de patinetes (dónde circular, edad, casco según la ordenanza de tu ciudad y multas) está en la <a href="https://recurretumulta.online/guias/patinetes-electricos" className="text-red-600 font-semibold hover:underline">guía de patinetes eléctricos</a>.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Qué es el certificado de circulación de un patinete?</h3><p className="text-slate-600">El documento que acredita que ese modelo de VMP cumple los requisitos técnicos del Manual de características de los VMP, aprobado por Resolución de 12 de enero de 2022 de la DGT.</p></div>
      <div><h3 className="font-bold mb-1">¿Todos los patinetes necesitan certificado de la DGT?</h3><p className="text-slate-600">Sí para circular legalmente: es obligatorio para los VMP comercializados desde el 22 de enero de 2024. Los anteriores a esa fecha sin certificado pueden inscribirse de forma temporal y circular hasta el 22 de enero de 2027.</p></div>
      <div><h3 className="font-bold mb-1">¿Cómo compruebo si mi patinete tiene certificado?</h3><p className="text-slate-600">Pídelo al vendedor: el certificado de circulación acompaña al modelo. Sin él no se completa la inscripción en el Registro de Vehículos Personales Ligeros de la DGT.</p></div>
      <div><h3 className="font-bold mb-1">¿Puedo circular sin certificado de la DGT?</h3><p className="text-slate-600">No, salvo el régimen temporal para unidades anteriores al 22 de enero de 2024 sin certificado, que solo permite circular hasta el 22 de enero de 2027. A partir de esa fecha, sin certificado no se puede circular.</p></div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><a href="https://www.dgt.es/nuestros-servicios/tu-vehiculo/matricular-un-vehiculo/inscripcion-vmp/" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">DGT · Inscripción de vehículos de movilidad personal</a>: cómo inscribir un VMP y qué documentación exige.</li>
        <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: marco de los VMP y su régimen sancionador.</li>
      </ul>
      </main>
      <SharedFooter />
    </div>
  );
}
