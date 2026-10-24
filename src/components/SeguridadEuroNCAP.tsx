// Sección "Seguridad" de las fichas de coche: estrellas y puntuaciones oficiales de EuroNCAP.
// Cero datos inventados: si el modelo no tiene test verificado, no hay entrada en
// SEGURIDAD_EURONCAP y se muestra "sin datos EuroNCAP". Vídeos solo de canales oficiales.
import { useEffect, useState } from "react";
import VideoYoutube from "@/components/ficha/VideoYoutube.tsx";
import { ShieldCheck } from "lucide-react";
import { useInView } from "./motion-lite.tsx";
import type { SeguridadEuroNCAP as SeguridadEuroNCAPData } from "@/lib/seguridad-euroncap.ts";

import { loadRecordEntry } from "@/lib/data-loader-utils.ts";

function Barra({ etiqueta, valor, grow }: { etiqueta: string; valor: number | null | undefined; grow?: boolean }) {
  if (valor == null) return null;
  const color =
    valor >= 80 ? "bg-emerald-500" : valor >= 60 ? "bg-amber-500" : "bg-red-500";
  const pct = Math.min(100, Math.max(0, valor));
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">{etiqueta}</span>
        <span className="font-extrabold text-gray-900">{valor}%</span>
      </div>
      <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`rtm-barra-fill h-full rounded-full ${color}`}
          style={{ width: grow ? `${pct}%` : "0%" }}
          role="progressbar"
          aria-valuenow={valor}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={etiqueta}
        />
      </div>
    </div>
  );
}

function VideoYouTube({ id, titulo, canal }: { id: string; titulo: string; canal: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        {/* 18/10/2026: fachada (miniatura + play); el iframe carga al tocar */}
        <VideoYoutube id={id} titulo={titulo} />
      </div>
      <p className="mt-1.5 text-xs text-gray-500">
        🎥 {titulo} —{" "}
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-red-600 underline"
        >
          {canal}
        </a>{" "}
        en YouTube
      </p>
    </div>
  );
}

// Datos EuroNCAP en línea en la ficha (estándar 2026-10-07): las fichas nuevas
// traen `euroncap` en el propio objeto; si se pasa, se usa directamente sin cargar.
export interface EuroNCAPInline {
  estrellas: number | null;
  ano: number | null;
  url: string | null;
  nota?: string | null;
}

export default function SeguridadEuroNCAP({
  fichaId,
  nombre,
  inline,
}: {
  fichaId: string;
  nombre: string;
  inline?: EuroNCAPInline | null;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.35);
  // Carga perezosa (05/10/2026): solo el registro de este modelo vía chunk
  // dedicado, no toda la base EuroNCAP. Mientras carga no se renderiza nada.
  const [s, setS] = useState<SeguridadEuroNCAPData | null | undefined>(undefined);
  useEffect(() => {
    if (inline !== undefined) return; // datos en línea: no cargar
    let alive = true;
    loadRecordEntry<SeguridadEuroNCAPData>("euroncap", fichaId).then((v) => {
      if (alive) setS(v ?? null);
    });
    return () => {
      alive = false;
    };
  }, [fichaId, inline]);

  if (inline !== undefined) {
    return <InlineEuroNCAP inline={inline} nombre={nombre} inView={inView} sectionRef={ref} />;
  }

  if (s === undefined) return null;
  if (!s) {
    return (
      <section
        className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
        aria-label="Seguridad EuroNCAP"
      >
        <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
          <ShieldCheck className="h-5 w-5 text-red-600" /> Seguridad
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Sin test <strong>EuroNCAP</strong> publicado.
        </p>
      </section>
    );
  }

  const protocolo2026 = s.conduccion != null;

  return (
    <section
      ref={ref}
      className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label="Seguridad EuroNCAP"
    >
      <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
        <ShieldCheck className="h-5 w-5 text-red-600" /> Seguridad
      </h2>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          className={`text-3xl tracking-tight${inView ? " rtm-stars-inview" : ""}`}
          role="img"
          aria-label={`${s.estrellas} de 5 estrellas EuroNCAP`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className="rtm-star"
              style={{
                animationDelay: `${i * 130}ms`,
                color: i < s.estrellas ? "#fbbf24" : "#d1d5db",
              }}
            >
              ★
            </span>
          ))}
        </span>
        <span className="text-sm font-semibold text-gray-700">
          {s.estrellas}/5 · Test {s.anioTest}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {protocolo2026 ? (
          <>
            <Barra etiqueta="Conducción segura" valor={s.conduccion} grow={inView} />
            <Barra etiqueta="Prevención de colisiones" valor={s.anticolision} grow={inView} />
            <Barra etiqueta="Protección en colisión" valor={s.proteccion} grow={inView} />
            <Barra etiqueta="Seguridad post-colisión" valor={s.postcolision} grow={inView} />
          </>
        ) : (
          <>
            <Barra etiqueta="Ocupante adulto" valor={s.adulto} grow={inView} />
            <Barra etiqueta="Ocupante infantil" valor={s.infantil} grow={inView} />
            <Barra etiqueta="Peatones y usuarios vulnerables" valor={s.peatones} grow={inView} />
            <Barra etiqueta="Asistencias de seguridad" valor={s.asistencias} grow={inView} />
          </>
        )}
      </div>

      {(s.videoCrashId || s.videoAlceId) && (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {s.videoCrashId && (
            <VideoYouTube
              id={s.videoCrashId}
              titulo={`Crash test oficial del ${nombre}`}
              canal="Euro NCAP"
            />
          )}
          {s.videoAlceId && (
            <VideoYouTube
              id={s.videoAlceId}
              titulo={`Prueba del alce del ${nombre}`}
              canal="km77.com"
            />
          )}
        </div>
      )}

      <p className="mt-4 text-xs text-gray-500">
        Datos:{" "}
        <a
          href="https://www.euroncap.com/en/ratings-rewards/latest-safety-ratings/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-red-600 underline"
        >
          EuroNCAP
        </a>{" "}
        (test de {s.anioTest}). Las estrellas resumen el protocolo vigente ese año: un 5★ de
        2019 no equivale a un 5★ de 2026.
      </p>
    </section>
  );
}

function InlineEuroNCAP({
  inline,
  nombre,
  inView,
  sectionRef,
}: {
  inline: EuroNCAPInline | null;
  nombre: string;
  inView: boolean;
  sectionRef: React.Ref<HTMLElement>;
}) {
  if (!inline || inline.estrellas == null) {
    return (
      <section
        className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
        aria-label="Seguridad EuroNCAP"
      >
        <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
          <ShieldCheck className="h-5 w-5 text-red-600" /> Seguridad
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {inline?.nota ?? "Sin datos EuroNCAP: modelo no probado."} El programa europeo
          ensaya los modelos de forma voluntaria (o por iniciativa propia), así que no todos
          los coches del mercado tienen valoración oficial.
        </p>
      </section>
    );
  }
  return (
    <section
      ref={sectionRef}
      className="rtm-card mt-8 rounded-3xl border border-gray-200 bg-white p-4 sm:p-6"
      aria-label={`Seguridad EuroNCAP del ${nombre}`}
    >
      <h2 className="flex items-center gap-2 text-xl font-extrabold text-gray-900">
        <ShieldCheck className="h-5 w-5 text-red-600" /> Seguridad
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          className={`text-3xl tracking-tight${inView ? " rtm-stars-inview" : ""}`}
          role="img"
          aria-label={`${inline.estrellas} de 5 estrellas EuroNCAP`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className="rtm-star"
              style={{
                animationDelay: `${i * 130}ms`,
                color: i < inline.estrellas! ? "#fbbf24" : "#d1d5db",
              }}
            >
              ★
            </span>
          ))}
        </span>
        <span className="text-sm font-semibold text-gray-700">
          {inline.estrellas}/5{inline.ano ? ` · Test ${inline.ano}` : ""}
        </span>
      </div>
      {inline.url && (
        <p className="mt-3 text-sm">
          <a
            href={inline.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-red-600 underline"
          >
            Ver test oficial en EuroNCAP
          </a>
        </p>
      )}
    </section>
  );
}
