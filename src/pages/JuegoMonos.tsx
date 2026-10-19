import { JUEGO_MONOS_ACTIVO } from "@/config/juego.ts";
import JuegoPausa from "@/components/caza-monos/JuegoPausa.tsx";
// Landing promocional "Caza de monos" (05/10/2026).
// "Encuentra los monos y gana 1.500 €": hero, cómo se juega (3 pasos), progreso,
// reclamar premio (código → WhatsApp), ganadores, FAQ y enlace a las bases.
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trophy, MousePointerClick, Navigation, PartyPopper, ChevronDown,
  MessageCircle, Ticket, Users, CircleHelp, ExternalLink, Crown, Camera,
} from "lucide-react";
import SharedNavbar from "@/components/shared-navbar";
import SharedFooter from "@/components/shared-footer";
import { useSeo } from "@/hooks/use-seo";
import { AVATAR_COSA, AVATAR_COSA_COLGANDO, AVATAR_COSA_LEGENDARIO, POSES_COSA } from "@/lib/cosa";
import { useCazaMonos, fijoId, MONOS_OBJETIVO } from "@/components/caza-monos/CazaMonosContext";
import MonoEscondido from "@/components/caza-monos/MonoEscondido";
import RankingCazadores from "@/components/caza-monos/RankingCazadores";
import ContadorVivos from "@/components/caza-monos/ContadorVivos";
import { GANADORES, PREMIOS_ENTREGADOS, generarCodigoReclamo, enlaceReclamoWhatsApp, WHATSAPP_RECLAMO } from "@/components/caza-monos/datos";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

// Premio del mono legendario dorado (07/10/2026, orden de Daniel):
// 50€ para los 3 primeros que lo cacen. El resto no tiene premio.
function ReclamarLegendario() {
  const { encontrados, uuid, apodo } = useCazaMonos();
  const cazas = useQuery(api.cazaMonos.legendaryCatches);
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [enviado, setEnviado] = useState(false);

  const tengoLegendario = encontrados.some((id) => id.startsWith("l:"));
  if (!tengoLegendario) return null;

  const posicion = cazas?.findIndex((c) => c.nickname === (apodo || "Cazador anónimo"));
  const soyTop3 = posicion !== undefined && posicion !== -1 && posicion < 3;
  const plazasOcupadas = cazas?.length ?? 0;

  const textoWhats = `¡He cazado el MONO LEGENDARIO DORADO! 🥇%0AMi nombre: ${encodeURIComponent(nombre)}%0AContacto: ${encodeURIComponent(contacto)}%0APido mi premio de 50€`;
  const enlaceWhats = `https://wa.me/${WHATSAPP_RECLAMO}?text=${textoWhats}`;

  return (
    <div className="rounded-2xl border-4 border-amber-400 bg-gradient-to-b from-amber-50 to-yellow-100 p-6 text-center mb-6">
      <div className="text-5xl mb-2">🥇</div>
      <p className="font-black text-xl text-amber-900">¡Cazaste el mono legendario dorado!</p>
      {cazas === undefined ? (
        <p className="text-sm text-amber-700 mt-2">Comprobando tu posición…</p>
      ) : soyTop3 ? (
        <>
          <p className="text-amber-800 font-bold mt-2">
            ¡Eres el nº {posicion! + 1}! Te corresponden <span className="font-black">50&nbsp;€</span> 🎉
          </p>
          {!enviado ? (
            <form
              className="mt-4 max-w-sm mx-auto grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!nombre.trim() || !contacto.trim()) return;
                setEnviado(true);
              }}
            >
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                placeholder="Tu nombre"
                className="rounded-xl border border-amber-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                required
                placeholder="Tu contacto (teléfono o email)"
                className="rounded-xl border border-amber-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black px-6 py-3 transition"
              >
                Reclamar mis 50€
              </button>
            </form>
          ) : (
            <>
              <p className="text-sm text-amber-700 mt-3">
                Envíanos un WhatsApp con tu nombre para verificar y recibir los 50€.
                Te avisaremos en cuanto lo comprobemos.
              </p>
              <a
                href={enlaceWhats}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black px-6 py-3 shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Reclamar por WhatsApp
              </a>
            </>
          )}
        </>
      ) : (
        <p className="text-sm text-amber-700 mt-2">
          {plazasOcupadas >= 3
            ? "Los 3 premios de 50€ ya están ocupados. ¡Gracias por jugar! 🦍"
            : "Aún no estás entre los 3 primeros. ¡Sigue cazando!"}
        </p>
      )}
    </div>
  );
}

function BarraProgreso() {
  const { total, objetivo } = useCazaMonos();
  const pct = Math.min(100, Math.round((total / objetivo) * 100));
  return (
    <div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-3xl sm:text-4xl font-black text-gray-900 tabular-nums">
          {total}
          <span className="text-lg font-bold text-gray-400">/{objetivo}</span>
        </p>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{pct}%</p>
      </div>
      <div
        className="h-4 rounded-full bg-gray-100 border border-gray-200 overflow-hidden"
        role="progressbar"
        aria-valuenow={total}
        aria-valuemin={0}
        aria-valuemax={objetivo}
        aria-label={`Progreso: ${total} de ${objetivo} monos`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 transition-[width] duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Tu contador se guarda en este navegador (sin registro). Llévalo en el menú superior:{" "}
        <img src={AVATAR_COSA} alt="" aria-hidden="true" className="inline w-4 h-4 rounded-full align-[-2px]" />{" "}
        <span className="font-bold text-gray-700 tabular-nums">{total}/{objetivo}</span>
      </p>
    </div>
  );
}

function ReclamarPremio() {
  const { total, objetivo, encontrados } = useCazaMonos();
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");
  const [codigo, setCodigo] = useState<string | null>(null);
  const dorado = encontrados.some((id) => id.startsWith("l:"));
  const completo = total >= objetivo || dorado;

  if (!completo) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-center">
        <Ticket className="w-8 h-8 mx-auto text-gray-300 mb-2" />
        <p className="font-bold text-gray-700">Aún no puedes reclamar el premio</p>
        <p className="text-sm text-gray-500 mt-1">
          Te faltan <span className="font-black text-gray-800 tabular-nums">{objetivo - total}</span> monos (o encuentra el dorado).
          Sigue navegando y haz clic en cada mono que veas 🦍
        </p>
      </div>
    );
  }

  if (codigo) {
    return (
      <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 text-center">
        <PartyPopper className="w-10 h-10 mx-auto text-amber-600 mb-2" />
        <p className="font-black text-xl text-gray-900">¡Código generado! 🎉 ({total} monos{dorado ? " + dorado" : ""})</p>
        <p className="text-sm text-gray-600 mt-1">Tu código de reclamo es:</p>
        <p className="mt-2 inline-block font-mono font-black text-lg sm:text-xl bg-white border border-amber-300 rounded-xl px-4 py-2 text-amber-900 select-all">
          {codigo}
        </p>
        <p className="text-xs text-gray-500 mt-3 max-w-md mx-auto">
          Envíalo por WhatsApp junto con tu nombre. Verificamos manualmente que los monos
          sean de verdad y te explicamos cómo recibir tu premio (1.500 € por transferencia si eres el 1º en completar los 350). Si tienes el dorado, 1 año de recursos gratis.
        </p>
        <a
          href={enlaceReclamoWhatsApp(codigo, nombre, total, dorado)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black px-6 py-3 shadow-lg transition-colors cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" /> Enviar por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        if (!nombre.trim() || !contacto.trim()) return;
        setCodigo(generarCodigoReclamo(encontrados));
      }}
    >
      <p className="font-black text-lg text-gray-900 mb-1">Reclama tu premio</p>
      <p className="text-xs text-gray-500 mb-4">
        Solo necesitamos un nombre y un contacto para entregarte el premio. No es un registro:
        no creamos ninguna cuenta.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Nombre</span>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Tu nombre"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email o teléfono</span>
          <input
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            required
            placeholder="Para avisarte del premio"
            className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-black px-8 py-3 shadow-lg hover:brightness-110 transition cursor-pointer"
      >
        Generar mi código de reclamo
      </button>
    </form>
  );
}

const FAQS = [
  {
    q: "¿Tengo que registrarme para jugar?",
    a: "No. No hay cuentas ni registros: tu progreso se guarda automáticamente en tu navegador. Cuando llegues a 350 monos (o encuentres el dorado) solo te pedimos un nombre y un contacto para poder entregarte el premio.",
  },
  {
    q: "¿Cómo sé cuántos monos llevo?",
    a: "Cuando cazas tu primer mono aparece tu contador en el menú superior de la web, con el icono del mono (p. ej. 37/350). También puedes ver tu progreso con la barra de esta página.",
  },
  {
    q: "¿Dónde están escondidos los monos?",
    a: "Por toda la web: artículos del blog, fichas de coches, motos y patinetes, comparadores, herramientas… Hay 350 repartidos al azar (uno de ellos, en la página de error 404) y unos pocos fáciles en sitios visibles (el menú, el pie de página, la portada). Haz clic en cada mono que veas: desaparece y suma 1.",
  },
  {
    q: "¿Cómo se verifica que los encontré de verdad?",
    a: "Cada mono tiene un código único imposible de adivinar. Al reclamar se genera un código con todos tus monos y lo comprobamos manualmente por WhatsApp antes de entregar el premio. Sin trampas.",
  },
  {
    q: "¿En qué consiste el premio?",
    a: "El 1º puesto se lleva 1.500 € por transferencia bancaria + 1 año de recursos ilimitados; del 2º al 50º, 1 año de recursos ilimitados. El 1º es el primero en encontrar los 350 monos y reclamar con un código válido; no hay fecha límite: el juego dura hasta que alguien lo complete. Además, todos los que encuentren el mono dorado ganan 1 año de recursos gratis (los detalles, en las bases).",
  },
  {
    q: "¿Qué es el ranking de cazadores?",
    a: "Los 50 jugadores con más monos aparecen en el ranking de esta página. Si quieres salir, pon tu apodo en el formulario del ranking: es opcional y no necesitas ninguna cuenta.",
  },
  {
    q: "¿Qué es el mono legendario?",
    a: "Hay UN mono dorado escondidísimo en lo más profundo de la web. No es más difícil de cazar que los demás (se ve con scroll normal), pero casi nadie entra en su página. Si lo encuentras, ¡presume! Las pistas solo salen en el Instagram de Cosa: @soycosa.ia.",
  },
  {
    q: "¿Los monos se mueven?",
    a: "A veces: si un mono lleva un minuto viéndote sin que lo caces, se aburre y se cambia de escondite dentro de la misma página (te deja una pista en un bocadillo). Sigue contando igual. El legendario dorado es el único que no huye.",
  },
  {
    q: "¿Vale usar bots o scripts para cazar monos?",
    a: "No. Revisamos cada reclamación a mano y el uso de bots, scripts, automatizaciones o cualquier ayuda artificial descalifica automáticamente del premio. Juega limpio: son 350 monos, se pueden encontrar todos navegando con normalidad.",
  },
  {
    q: "¿Puedo jugar desde el móvil?",
    a: "Sí, el juego funciona igual en móvil y en ordenador. Ojo: si cambias de navegador o borras los datos del sitio, tu contador se pierde, así que juega siempre en el mismo.",
  },
];

function JuegoMonosPage() {
  useSeo({
    title: "Encuentra los monos y gana 1.500 €",
    description: "Caza de monos: 350 monos escondidos por la web. El 1º en encontrar los 350 gana 1.500 € + 1 año de recursos ilimitados; quien encuentre el mono dorado, 1 año gratis.",
    canonical: "/juego-monos",
    image: "https://recurretumulta.online/media/og-caza-monos-1500e.jpg",
    keywords: ["caza de monos", "juego", "premio 1500 euros", "gana dinero"],
  });

  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      <SharedNavbar />
      <div className="pt-[49px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gray-950 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 via-transparent to-red-600/20" aria-hidden="true" />
          {/* Monos animados de fondo (decorativos) */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <img
              src={POSES_COSA["mono-trepando"]}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              className="absolute bottom-6 left-4 w-10 h-10 rounded-full object-cover opacity-30 animate-[rtmCosaFloat_4.5s_ease-in-out_infinite]"
            />
            <img
              src={POSES_COSA["mono-lengua"]}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="absolute top-24 left-1/4 w-8 h-8 rounded-full object-cover opacity-20 animate-[rtmCosaFloat_3.8s_ease-in-out_infinite] [animation-delay:-1.7s]"
            />
            <img
              src={POSES_COSA["mono-fotobomba"]}
              alt=""
              width={44}
              height={44}
              loading="lazy"
              className="absolute bottom-16 right-4 w-9 h-9 rounded-full object-cover opacity-25 animate-[rtmCosaFloat_5.2s_ease-in-out_infinite] [animation-delay:-2.9s]"
            />
          </div>
          {/* Mono colgando del borde superior del hero */}
          <div className="absolute top-0 right-6 sm:right-16 z-10" aria-hidden="true">
            <img
              src={AVATAR_COSA_COLGANDO}
              alt=""
              width={72}
              height={144}
              className="w-[56px] h-[112px] sm:w-[72px] sm:h-[144px] object-cover rounded-b-xl animate-[rtmCosaSwing_3.2s_ease-in-out_infinite] origin-top"
            />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400 mb-3">🦍 La caza de monos</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-amber-300">Temporada 1</span>
            </div>
            <p className="mb-3"><span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-gray-900 font-black text-base sm:text-xl px-5 py-2 shadow-[0_0_30px_rgba(251,191,36,0.55)] ring-2 ring-amber-200">💶 PREMIO: 1.500 € por transferencia</span></p>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight">
              Encuentra los monos y<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-red-400">gana 1.500 €</span>
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-gray-300 max-w-xl mx-auto">
              Hay <span className="font-black text-white">350 monos</span> escondidos por toda la web
              más el <span className="font-black text-amber-300">legendario dorado</span>.
              El 1º en cazar los 350 gana <span className="font-black text-white">1.500 € por transferencia + 1 año de recursos ilimitados</span>.
              Del 2º al 50º, 1 año de recursos ilimitados. ¿Encuentras el dorado? <span className="font-black text-amber-300">1 año de recursos gratis</span>.
            </p>
            <div className="mt-4 h-7 text-amber-200"><ContadorVivos /></div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#como-se-juega"
                className="rounded-full bg-gradient-to-r from-amber-500 to-red-500 font-black px-8 py-3.5 shadow-xl hover:brightness-110 transition cursor-pointer"
              >
                Empezar a cazar 🦍
              </a>
              <Link
                to="/juego-monos/bases/"
                className="rounded-full border border-white/30 font-bold px-6 py-3 text-sm hover:bg-white/10 transition cursor-pointer"
              >
                Ver las bases
              </Link>
            </div>
            <p className="mt-4 text-[11px] text-gray-500">Sin registro · Gratis · Cada mes, una temporada nueva con más monos</p>
          </div>
          {/* Un mono fácil en la propia landing */}
          <div className="absolute bottom-4 left-4">
            <MonoEscondido id={fijoId("juego-monos")} pose="mono-colgado" size={36} titulo="¡Hasta aquí hay un mono! Haz clic 🦍" />
          </div>
        </section>

        <main className="mx-auto max-w-3xl px-4 py-10 space-y-12">
          {/* ── CÓMO SE JUEGA ── */}
          <section id="como-se-juega" className="scroll-mt-20">
            <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">Cómo se juega</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Navigation, paso: "1", titulo: "Navega por la web", texto: "Los monos están escondidos en artículos, fichas, comparadores y herramientas." },
                { icon: MousePointerClick, paso: "2", titulo: "Haz clic en cada mono", texto: "Al hacer clic desaparece y suma 1 a tu contador del menú superior." },
                { icon: Trophy, paso: "3", titulo: "Llega a 350 y reclama", texto: "Genera tu código y envíalo por WhatsApp. ¡El primero gana 1.500 €!" },
              ].map((s) => (
                <div key={s.paso} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm text-center">
                  <div className="mx-auto w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-red-500 text-white flex items-center justify-center mb-3">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-black text-amber-600 uppercase tracking-widest">Paso {s.paso}</p>
                  <p className="font-black text-gray-900 mt-1">{s.titulo}</p>
                  <p className="text-sm text-gray-600 mt-1.5">{s.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── TEASER LEGENDARIO ── */}
          <section aria-label="Mono legendario" className="relative overflow-hidden rounded-3xl bg-gray-950 text-white p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/25 via-transparent to-yellow-600/20" aria-hidden="true" />
            <div className="relative flex flex-col sm:flex-row items-center gap-5">
              <img
                src={AVATAR_COSA_LEGENDARIO}
                alt="Mono legendario dorado"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover shadow-[0_0_30px_rgba(234,179,8,0.6)] shrink-0"
              />
              <div className="text-center sm:text-left">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-400">✨ Mono legendario</p>
                <p className="mt-1.5 text-sm sm:text-base text-gray-200 leading-relaxed">
                  Entre los 350 hay <span className="font-black text-amber-300">uno DORADO</span> escondido
                  en una página profunda de la web. Quien lo encuentre gana <span className="font-black text-white">1 año de recursos gratis</span>, sin límite de ganadores. Las <span className="font-black text-white">pistas solo salen en Instagram</span>.
                </p>
                <a
                  href="https://www.instagram.com/soycosa.ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white text-gray-900 text-xs font-black px-4 py-2 hover:bg-amber-100 transition cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" /> Seguir @soycosa.ia para las pistas
                </a>
              </div>
            </div>
          </section>

          {/* ── MI PROGRESO ── */}
          <section aria-label="Mi progreso">
            <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">Mi progreso</h2>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <BarraProgreso />
            </div>
          </section>

          {/* ── RECLAMAR ── */}
          <section aria-label="Reclamar premio">
            <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">Reclamar premio</h2>
            <ReclamarLegendario />
            <ReclamarPremio />
          </section>

          {/* ── RANKING ── */}
          <section aria-label="Ranking de cazadores">
            <h2 className="text-2xl font-black text-gray-900 mb-2 text-center flex items-center justify-center gap-2">
              <Crown className="w-6 h-6 text-amber-500" /> Ranking de cazadores
            </h2>
            <p className="text-center text-sm text-gray-500 mb-5">
              Los 50 mejores cazadores de monos. ¿Llegarás a lo más alto? 🦍
            </p>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
              <RankingCazadores />
            </div>
          </section>

          {/* ── GANADORES ── */}
          <section aria-label="Ganadores">
            <h2 className="text-2xl font-black text-gray-900 mb-2 text-center flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-amber-500" /> Ganadores
            </h2>
            <p className="text-center text-sm text-gray-500 mb-5">
              <span className="font-black text-gray-800 tabular-nums">{PREMIOS_ENTREGADOS}</span>/50 premios entregados
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {GANADORES.map((g, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-3 text-center ${g ? "border-amber-300 bg-amber-50" : "border-dashed border-gray-200 bg-gray-50"}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Premio {i + 1}</p>
                  {g ? (
                    <>
                      <p className="font-black text-gray-900 text-sm mt-1">{g.nombre}</p>
                      <p className="text-[11px] text-gray-500">{g.fecha}</p>
                    </>
                  ) : (
                    <p className="text-xs text-gray-400 mt-1 italic">Sin reclamar</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-label="Preguntas frecuentes">
            <h2 className="text-2xl font-black text-gray-900 mb-5 text-center flex items-center justify-center gap-2">
              <CircleHelp className="w-6 h-6 text-amber-500" /> Preguntas frecuentes
            </h2>
            <div className="space-y-2.5">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-xl border border-gray-200 bg-white open:shadow-sm">
                  <summary className="flex items-center justify-between gap-3 px-4 py-3.5 font-bold text-sm text-gray-900 cursor-pointer list-none">
                    {f.q}
                    <ChevronDown className="w-4 h-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-center text-sm">
              <Link
                to="/juego-monos/bases/"
                className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800 underline underline-offset-4 cursor-pointer"
              >
                Leer las bases legales del concurso <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </p>
          </section>
        </main>
      </div>
      <SharedFooter editorial={false} />
    </div>
  );
}

export default function JuegoMonosPageWithConvex() {
  if (!JUEGO_MONOS_ACTIVO) return <JuegoPausa canonical="/juego-monos/" />;
  return <JuegoMonosPageWithConvexActivo />;
}
function JuegoMonosPageWithConvexActivo() {
  return (
    <LazyConvexProvider>
      <JuegoMonosPage />
    </LazyConvexProvider>
  );
}
