import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
import JuegoPausa from "@/components/caza-monos/JuegoPausa.tsx";
// Bases legales del concurso "Caza de monos" (05/10/2026).
// Tono legal serio pero breve.
import { Link } from "react-router-dom";
import { ArrowLeft, ScrollText } from "lucide-react";
import SharedNavbar from "@/components/shared-navbar";
import SharedFooter from "@/components/shared-footer";
import { useSeo } from "@/hooks/use-seo";

const SECCIONES: Array<{ t: string; c: string }> = [
  {
    t: "1. Organizador",
    c: "El concurso «Caza de monos» lo organiza el titular de RecurreTuMulta.online (ver datos de contacto en el Aviso Legal), en adelante «el Organizador».",
  },
  {
    t: "2. Mecánica del concurso (por temporadas)",
    c: "El concurso se organiza por temporadas. En la Temporada 1 (iniciada en octubre de 2026) hay 350 monos escondidos en distintas páginas de recurretumulta.online (336 aleatorios —uno de ellos en la página de error 404—, 16 fáciles en puntos estratégicos y 1 legendario dorado escondidísimo; ampliada el 13 de octubre de 2026 desde 253). Cada vez que un participante hace clic en un mono, este queda registrado en su navegador (localStorage, sin necesidad de registro ni cuenta). El objetivo es encontrar 350 monos (no es obligatorio que entre ellos esté el legendario dorado). Cada mono tiene un identificador único; al llegar a 350, o al encontrar el dorado, la web genera un código de reclamo personal e intransferible, válido solo para la temporada en curso. Todos los monos se pueden encontrar navegando con normalidad: ninguno exige más interacción que el desplazamiento por la página.",
  },
  {
    t: "3. Premio",
    c: "El premio consiste en: 1º puesto, 1.500 € por transferencia bancaria + 1 año de recursos ilimitados gratis en recurretumulta.online; del 2º al 50º puesto, 1 año de recursos ilimitados gratis. Además, todo participante que encuentre el mono legendario dorado gana 1 año de recursos gratis en recurretumulta.online, sin límite de ganadores. Los puestos se asignan por estricto orden de reclamación verificada entre quienes encuentren 350 monos. No es obligatorio encontrar el dorado para optar a los 1.500 €. El pago de los 1.500 € se realiza por transferencia al IBAN que indique el ganador. Estas bases sustituyen a cualquier importe anterior publicado (900 € o 1000 €).",
  },
  {
    t: "4. Ganadores",
    c: "Serán ganadores, por estricto orden de reclamación verificada, los participantes que (a) encuentren 350 monos, (b) generen su código de reclamo y (c) lo envíen por WhatsApp al número indicado en la página del juego. El primero en completar los 350 monos con reclamación verificada recibe 1.500 € + 1 año de recursos ilimitados gratis; del 2º al 50º, 1 año de recursos ilimitados gratis. Quien haya encontrado el mono dorado recibe 1 año de recursos gratis aunque no esté entre los 50 primeros. El Organizador verificará manualmente la validez de cada código antes de confirmar el premio.",
  },
  {
    t: "5. Verificación y medidas anti-fraude",
    c: "Cada mono incluye un token aleatorio imposible de adivinar; el código de reclamo se genera a partir de los identificadores reales encontrados. El Organizador revisará el uso de bots, scripts u otras ayudas artificiales en cada reclamación y descalificará del premio a quien manipule, automatice o falsifique su progreso (bots, scripts, edición del almacenamiento local, códigos inventados, etc.). La verificación de cada reclamación es manual y la decisión del Organizador sobre su validez es definitiva.",
  },
  {
    t: "6. Fechas",
    c: "La Temporada 1 comienza el 6 de octubre de 2026 y no tiene fecha de fin: dura hasta que se entreguen sus premios. Cada nueva temporada tendrá sus propias fechas y se anunciará en la página del juego. El Organizador publicará el ganador (nombre o apodo, con su permiso) en la página del juego.",
  },
  {
    t: "7. Datos personales",
    c: "Para reclamar el premio solo se solicita un nombre y un medio de contacto (email o teléfono), que se usarán exclusivamente para gestionar la entrega del premio y la verificación de la reclamación. No se crea ninguna cuenta de usuario. El progreso del juego se guarda únicamente en el navegador del participante; si cambia de navegador o borra los datos del sitio, el contador se pierde.",
  },
  {
    t: "8. Contacto",
    c: "Para cualquier duda sobre el concurso: WhatsApp +34 711 292 174 o la página de contacto de la web.",
  },
  {
    t: "9. Aceptación y modificaciones",
    c: "La participación en el concurso implica la aceptación de estas bases. El Organizador se reserva el derecho a modificarlas o cancelar el concurso por causa justificada, publicando los cambios en esta misma página.",
  },
];

export default function JuegoMonosBasesPage() {
  if (!JUEGO_MONOS_ACTIVO) return <JuegoPausa canonical="/juego-monos/bases/" />;
  return <JuegoMonosBasesPageActivo />;
}
function JuegoMonosBasesPageActivo() {
  useSeo({
    title: "Bases legales del concurso Caza de monos",
    description: "Bases del concurso Caza de monos (Temporada 1): 1.500 € + 1 año de recursos ilimitados para el 1º, 1 año ilimitado del 2º al 50º y 1 año gratis para todos los que encuentren el mono dorado.",
    canonical: "/juego-monos/bases",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <SharedNavbar />
      <div className="pt-[49px]">
        <main className="mx-auto max-w-3xl px-4 py-10">
          <Link
            to="/juego-monos/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al juego
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 flex items-center gap-2.5">
            <ScrollText className="w-7 h-7 text-amber-600" /> Bases legales — Caza de monos
          </h1>
          <p className="mt-2 text-xs text-gray-400">Última actualización: 13 de octubre de 2026</p>
          <div className="mt-6 space-y-5">
            {SECCIONES.map((s) => (
              <section key={s.t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="font-black text-gray-900 mb-1.5">{s.t}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{s.c}</p>
              </section>
            ))}
          </div>
        </main>
      </div>
      <SharedFooter editorial={false} />
    </div>
  );
}
