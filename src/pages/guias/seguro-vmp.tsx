import { useSeo } from "@/hooks/use-seo.ts";
import SharedFooter from "@/components/shared-footer.tsx";

const FAQ_SCHEMA = {"@context":"https://schema.org","@graph":[
{"@type":"FAQPage","@id":"https://recurretumulta.online/guias/seguro-vmp#faq","mainEntity":[
{"@type":"Question","name":"¿Es obligatorio el seguro para el patinete eléctrico?","acceptedAnswer":{"@type":"Answer","text":"Sí. La Ley 5/2025, de 24 de julio, crea el seguro obligatorio de responsabilidad civil para los vehículos personales ligeros, exigible desde el 2 de enero de 2026, una vez operativo el Registro de Vehículos Personales Ligeros de la DGT."}},
{"@type":"Question","name":"¿Primero el registro o primero el seguro del patinete?","acceptedAnswer":{"@type":"Answer","text":"Primero el registro: la inscripción en el Registro de Vehículos Personales Ligeros de la DGT (Real Decreto 52/2026, operativo desde el 30 de enero de 2026) es requisito previo para contratar la póliza obligatoria. Sin inscripción no se puede contratar el seguro."}},
{"@type":"Question","name":"¿Qué cubre el seguro obligatorio del patinete?","acceptedAnswer":{"@type":"Answer","text":"La responsabilidad civil: los daños que causes a otras personas o a sus bienes mientras circulas. No cubre por defecto tu propio patinete ni tus lesiones; para eso existen coberturas opcionales como daños propios, robo o accidentes del conductor."}},
{"@type":"Question","name":"¿Cuál es la multa por circular con el patinete sin seguro?","acceptedAnswer":{"@type":"Answer","text":"Circular sin seguro se sanciona con multa de 250 a 800 euros, según el Ministerio del Interior, y el vehículo puede ser inmovilizado. No inscribir el patinete se sanciona con multa de 202 a 610 euros."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Inicio","item":"https://recurretumulta.online/"},
{"@type":"ListItem","position":2,"name":"Guías","item":"https://recurretumulta.online/guias"},
{"@type":"ListItem","position":3,"name":"Seguro obligatorio del patinete","item":"https://recurretumulta.online/guias/seguro-vmp"}]}]};

export default function GuiaSeguroVmpPage() {
  useSeo({
    title: "Seguro obligatorio del patinete 2026: Ley 5/2025 y registro",
    description: "Desde cuándo es obligatorio el seguro del patinete, qué es un vehículo personal ligero, cómo inscribirlo en la DGT y qué multa hay por circular sin seguro.",
    canonical: "/guias/seguro-vmp",
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
        <span className="text-slate-400">Seguro obligatorio del patinete</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-black leading-tight text-balance">Seguro obligatorio del patinete: Ley 5/2025, registro y multas</h1>
      <p className="text-slate-600 mt-4 leading-relaxed">Desde 2026, circular con un patinete eléctrico sin seguro de responsabilidad civil es una infracción. La Ley 5/2025, de 24 de julio, crea el seguro obligatorio para los vehículos personales ligeros, y el Real Decreto 52/2026 pone en marcha el registro sin el cual no se puede contratar la póliza. El orden importa: primero la inscripción, después el seguro.</p>
      <p className="text-xs text-slate-500 mt-3">Por <strong className="text-slate-700">Daniel</strong>, fundador y responsable de contenidos · Revisada en octubre de 2026</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Qué es un vehículo personal ligero</h2>
      <p className="text-slate-600 mb-4">A efectos del seguro obligatorio, son vehículos personales ligeros los vehículos de una plaza, propulsados exclusivamente por motor eléctrico, que alcanzan entre 6 y 25 km/h y pesan menos de 25 kg, o que alcanzan entre 6 y 14 km/h si pesan más de 25 kg. La gran mayoría de los patinetes eléctricos comerciales entran en esta definición. Los vehículos de más de 25 kg que superan los 14 km/h quedan fuera de ella y se tratan como vehículos a motor; su periodo transitorio venció el 26 de enero de 2026.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fechas que mandan</h2>
      <table className="w-full text-sm text-slate-600 mb-4">
        <thead><tr className="text-left border-b border-slate-200"><th className="py-2 pr-4">Fecha</th><th className="py-2">Qué cambia</th></tr></thead>
        <tbody>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">22 de enero de 2024</td><td className="py-2">Todo VMP nuevo vendido en España debe llevar certificado de circulación.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">2 de enero de 2026</td><td className="py-2">Entra en vigor la obligación del seguro de responsabilidad civil para VMP (Ley 5/2025); la DGT comunicó en diciembre de 2025 que su exigencia quedaba vinculada a que el registro estuviera operativo.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-2 pr-4 font-semibold text-slate-900">30 de enero de 2026</td><td className="py-2">Entra en vigor el Real Decreto 52/2026 y queda operativo el Registro de Vehículos Personales Ligeros de la DGT.</td></tr>
          <tr><td className="py-2 pr-4 font-semibold text-slate-900">22 de enero de 2027</td><td className="py-2">Fin del régimen temporal para patinetes sin certificado de circulación: a partir de esa fecha no podrán circular.</td></tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-10 mb-4">Primero el registro, después el seguro</h2>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
        <li><strong>Reúne la documentación:</strong> certificado de circulación del patinete, número de serie y factura de compra. Sin certificado, revisa la <a href="https://recurretumulta.online/guias/certificado-dgt" className="text-red-600 font-semibold hover:underline">guía del certificado DGT</a>.</li>
        <li><strong>Inscribe el patinete</strong> en el Registro de Vehículos Personales Ligeros, en la sede electrónica de la DGT o en la app miDGT. Al terminar recibes el certificado de inscripción y puedes pedir la etiqueta identificativa para el vehículo.</li>
        <li><strong>Contrata la póliza obligatoria</strong> de responsabilidad civil con los datos de la inscripción. Sin inscripción previa no se puede contratar el seguro, y la DGT comprueba que cada patinete registrado tiene cobertura en vigor.</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Qué cubre el seguro y qué no</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><strong>Cubre:</strong> la responsabilidad civil, es decir, los daños que puedas causar a otras personas o a sus bienes mientras circulas (desde un atropello a un peatón hasta un golpe a un coche aparcado).</li>
        <li><strong>No cubre por defecto:</strong> tu propio patinete ni tus lesiones. Para eso existen coberturas opcionales: daños propios, robo, accidentes del conductor o asistencia.</li>
        <li><strong>Sin seguro, respondes con tu patrimonio:</strong> si provocas un daño sin cobertura, la factura la pagas tú, además de la multa.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Multas</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><strong>Circular sin seguro:</strong> multa de 250 a 800 euros, según el Ministerio del Interior, y el vehículo puede ser inmovilizado.</li>
        <li><strong>No inscribir el patinete:</strong> multa de 202 a 610 euros, según el Ministerio del Interior.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Preguntas frecuentes</h2>
      <div className="space-y-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-10">
      <div><h3 className="font-bold mb-1">¿Es obligatorio el seguro para el patinete eléctrico?</h3><p className="text-slate-600">Sí. La Ley 5/2025, de 24 de julio, crea el seguro obligatorio de responsabilidad civil para los vehículos personales ligeros, exigible desde el 2 de enero de 2026, una vez operativo el Registro de Vehículos Personales Ligeros de la DGT.</p></div>
      <div><h3 className="font-bold mb-1">¿Primero el registro o primero el seguro del patinete?</h3><p className="text-slate-600">Primero el registro: la inscripción en el Registro de Vehículos Personales Ligeros de la DGT (Real Decreto 52/2026, operativo desde el 30 de enero de 2026) es requisito previo para contratar la póliza obligatoria. Sin inscripción no se puede contratar el seguro.</p></div>
      <div><h3 className="font-bold mb-1">¿Qué cubre el seguro obligatorio del patinete?</h3><p className="text-slate-600">La responsabilidad civil: los daños que causes a otras personas o a sus bienes mientras circulas. No cubre por defecto tu propio patinete ni tus lesiones; para eso existen coberturas opcionales como daños propios, robo o accidentes del conductor.</p></div>
      <div><h3 className="font-bold mb-1">¿Cuál es la multa por circular con el patinete sin seguro?</h3><p className="text-slate-600">Circular sin seguro se sanciona con multa de 250 a 800 euros, según el Ministerio del Interior, y el vehículo puede ser inmovilizado. No inscribir el patinete se sanciona con multa de 202 a 610 euros.</p></div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Fuentes oficiales</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
        <li><a href="https://www.dgt.es/nuestros-servicios/tu-vehiculo/matricular-un-vehiculo/inscripcion-vmp/" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">DGT · Inscripción de vehículos de movilidad personal</a>: cómo inscribir un VMP y qué documentación exige.</li>
        <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2026-2140" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">Real Decreto 52/2026 (BOE)</a>: crea el Registro de Vehículos Personales Ligeros, en vigor desde el 30 de enero de 2026.</li>
        <li><a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">Texto refundido de la Ley de Tráfico (RDL 6/2015, BOE)</a>: marco de los VMP y su régimen sancionador.</li>
      </ul>
      </main>
      <SharedFooter />
    </div>
  );
}
