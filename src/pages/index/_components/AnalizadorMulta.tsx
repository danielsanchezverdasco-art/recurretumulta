import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Upload, FileText, Zap, Download, ChevronDown, ChevronUp,
  Check, AlertTriangle, Mail, MapPin, Hash, Euro, Calendar, Clock, User, CreditCard,
  Lock, Shield, Globe, Car, ExternalLink, TrendingUp, Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog.tsx";
import { useAction, useConvex, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";

// Pack 10 oculto hasta que exista el backend que consume los créditos (decisión de Daniel, 12/10/2026).
const PACK10_VISIBLE = false;
import { getAnonymousFingerprint, withAnalisisTimeout, AnalisisTimeoutError } from "@/lib/analisis-libre.ts";

// Convierte un File a base64 puro (sin prefijo data:...)
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Quitar el prefijo "data:...;base64,"
      const base64 = result.split(",")[1];
      if (!base64) reject(new Error("No se pudo leer el archivo"));
      else resolve(base64);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// Mensaje legible de un error de Convex (nunca el texto técnico)
function mensajeError(err: unknown, porDefecto: string): string {
  const data = (err as { data?: unknown })?.data;
  if (data && typeof data === "object" && typeof (data as { message?: unknown }).message === "string") return (data as { message: string }).message;
  if (typeof data === "string") return data;
  const msg = err instanceof Error ? err.message : "";
  const m = msg.match(/ConvexError: (\{[\s\S]*\})/);
  if (m) { try { const j = JSON.parse(m[1]); if (typeof j.message === "string") return j.message; } catch { /* sigue */ } }
  if (!msg || /\[CONVEX|Server Error|Request ID/i.test(msg)) return porDefecto;
  return msg;
}

// Reduce fotos de pruebas a JPEG de ~1600 px para no superar el límite de subida.
async function comprimirImagen(f: File): Promise<{ nombre: string; base64: string; mime: string } | null> {
  try {
    const bmp = await createImageBitmap(f);
    const k = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
    const c = document.createElement("canvas");
    c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
    const b64 = c.toDataURL("image/jpeg", 0.85).split(",")[1];
    return b64 ? { nombre: f.name, base64: b64, mime: "image/jpeg" } : null;
  } catch { return null; }
}

function conAnexo(carta: string, anexo?: string): string {
  return anexo && !carta.includes("ANEXO: PRUEBAS APORTADAS") ? carta + anexo : carta;
}

// Valida el tipo MIME del archivo
function normalizeMimeType(file: File): string {
  const mime = file.type || (/\.pdf$/i.test(file.name) ? "application/pdf" : "application/octet-stream");
  // Normalizar tipos de imagen comunes
  if (mime.startsWith("image/")) return mime;
  if (mime === "application/pdf") return "application/pdf";
  // Fallback por extensión
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf") return "application/pdf";
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (ext === "png") return "image/png";
  if (ext === "webp") return "image/webp";
  if (ext === "heic" || ext === "heif") return "image/jpeg"; // tratar como jpeg
  return "image/jpeg"; // fallback seguro
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Defecto = { titulo: string; descripcion: string; gravedad: "alta" | "media" | "baja" };

type DatosMulta = {
  provincia: string;
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  plazoRecurso: string;
  matricula?: string;
  velocidadDetectada?: string;
  limiteVia?: string;
  organo?: string;
  fechaNotificacion?: string;
};

type AnalysisResult = {
  carta: string;
  anexoPruebas?: string;
  viabilidad: number;
  nivel: "alta" | "media" | "baja";
  resumen: string;
  defectos: Defecto[];
  datosMulta: DatosMulta;
};

const DGT_EMAILS: Record<string, { email: string; address: string }> = {
  Madrid: { email: "jpt.madrid@dgt.es", address: "C/ Josefa Valcárcel, 28, 28027 Madrid" },
  Barcelona: { email: "jpt.barcelona@dgt.es", address: "C/ Provença, 328-330, 08037 Barcelona" },
  Valencia: { email: "jpt.valencia@dgt.es", address: "C/ Gregorio Gea, 27, 46009 Valencia" },
  Sevilla: { email: "jpt.sevilla@dgt.es", address: "Avda. de Kansas City, 14, 41007 Sevilla" },
  Málaga: { email: "jpt.malaga@dgt.es", address: "C/ Héroe de Sostoa, 12, 29002 Málaga" },
  "Las Palmas": { email: "jpt.laspalmas@dgt.es", address: "C/ León y Castillo, 57, 35003 Las Palmas" },
  Alicante: { email: "jpt.alicante@dgt.es", address: "C/ Ebanistería, 4, 03006 Alicante" },
  Zaragoza: { email: "jpt.zaragoza@dgt.es", address: "C/ Sobrarbe, 1, 50003 Zaragoza" },
  Bilbao: { email: "jpt.vizcaya@dgt.es", address: "Alameda Urquijo, 18, 48008 Bilbao" },
  "A Coruña": { email: "jpt.lacoruna@dgt.es", address: "C/ Médico Rodríguez, 12, 15006 A Coruña" },
};
const DEFAULT_DGT = { email: "jpt.PROVINCIA@dgt.es", address: "Jefatura Provincial de Tráfico de su provincia" };

// Viability gauge color helpers
function viabilidadColor(n: number): string {
  if (n >= 70) return "text-green-600";
  if (n >= 40) return "text-amber-600";
  return "text-red-600";
}
function viabilidadRing(n: number): string {
  if (n >= 70) return "border-green-200";
  if (n >= 40) return "border-amber-200";
  return "border-red-200";
}
function gravedadStyle(g: "alta" | "media" | "baja") {
  const map = {
    alta: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", dot: "bg-red-500" },
    media: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
    baja: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-400" },
  };
  return map[g];
}

export default function AnalizadorMulta({ packToken }: { packToken?: string }) {
  // El análisis es gratis y sin registro. packToken (opcional) viene del
  // enlace personal del Pack 10 y permite generar recursos con sus créditos.
  return <AnalizadorInner packToken={packToken} />;
}

function ViabilidadGauge({ value, nivel }: { value: number; nivel: "alta" | "media" | "baja" }) {
  const { t } = useTranslation("analyzer");
  const nivelLabel = { alta: t("gauge.high"), media: t("gauge.medium"), baja: t("gauge.low") };
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
          {/* Track */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#f0f0f0" strokeWidth="10" />
          {/* Progress */}
          <motion.circle
            cx="50" cy="50" r="40" fill="none"
            stroke={value >= 70 ? "#16a34a" : value >= 40 ? "#d97706" : "#dc2626"}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={`text-2xl font-black ${viabilidadColor(value)}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
      <Badge className={`text-xs font-black px-3 py-1 border ${
        nivel === "alta" ? "bg-green-50 text-green-700 border-green-200" :
        nivel === "media" ? "bg-amber-50 text-amber-700 border-amber-200" :
        "bg-red-50 text-red-700 border-red-200"
      }`}>
        {nivelLabel[nivel]}
      </Badge>
    </div>
  );
}

// ── SCAN ANIMATION ────────────────────────────────────────────────────────────
// 13/10/2026: etapas REALES que informa el backend (tabla progresoAnalisis).
const SCAN_STEPS = [
  { key: "paginas", icon: "📄", label: "Leyendo las páginas...", detail: "Texto del PDF o de la foto" },
  { key: "fotos", icon: "📷", label: "Leyendo las fotos...", detail: "Fotos y pruebas que has subido" },
  { key: "radar", icon: "📡", label: "Comprobando el radar...", detail: "Velocidad, márgenes (Orden ICT/155/2020) y fotograma" },
  { key: "normativa", icon: "⚖️", label: "Comprobando la normativa...", detail: "LSV, RGC, anexo IV y Ley 39/2015" },
  { key: "resultado", icon: "📝", label: "Generando el resultado...", detail: "Veredicto y escrito de recurso" },
];
const ETAPA_IDX: Record<string, number> = { paginas: 0, fotos: 1, analisis: 2, resultado: 4 };

// Fake scanned lines to animate inside the "document"
const SCAN_LINES = [
  { w: "w-3/4", delay: 0 },
  { w: "w-full", delay: 0.05 },
  { w: "w-2/3", delay: 0.1 },
  { w: "w-full", delay: 0.15 },
  { w: "w-1/2", delay: 0.2 },
  { w: "w-5/6", delay: 0.25 },
  { w: "w-full", delay: 0.3 },
  { w: "w-3/5", delay: 0.35 },
  { w: "w-full", delay: 0.4 },
  { w: "w-2/3", delay: 0.45 },
  { w: "w-4/5", delay: 0.5 },
  { w: "w-full", delay: 0.55 },
];

function ScanAnimation({ progresoId, conPruebas }: { progresoId: string; conPruebas: boolean }) {
  const { t } = useTranslation("analyzer");
  const etapa = useQuery(api.multasInterno.getProgreso, progresoId ? { pid: progresoId } : "skip") ?? "paginas";
  const stepIdx = ETAPA_IDX[etapa] ?? 0;
  // radar y normativa se revisan en la misma llamada: ambas activas a la vez.
  const activos = etapa === "analisis" ? [2, 3] : [stepIdx];
  const vistos = useRef(new Set<string>()); vistos.current.add(etapa);
  // 13/10/2026: si Groq está al límite el backend espera y reintenta (hasta ~60s).
  const [tardando, setTardando] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTardando(true), 25_000);
    return () => clearTimeout(t);
  }, []);



  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 py-6"
    >


      {/* ── Logo animado mientras se espera ── */}
      <motion.img
        src="/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png"
        alt="Logotipo de RecurreTuMulta.online"
        className="w-14 h-14 drop-shadow-lg"
        animate={{ scale: [1, 1.12, 1], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Documento con escáner ── */}
      <div className="relative w-52 h-64 select-none">
        {/* Sombra del documento */}
        <div className="absolute inset-0 translate-y-1.5 translate-x-1.5 bg-gray-200 rounded-2xl" />

        {/* Documento */}
        <div className="relative w-full h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl">
          {/* Cabecera roja tipo sello DGT */}
          <div className="h-8 bg-red-600 flex items-center px-4 gap-2">
            <div className="w-3 h-3 bg-white/30 rounded-full" />
            <div className="flex-1 h-1.5 bg-white/20 rounded-full" />
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
          </div>

          {/* Líneas del documento */}
          <div className="px-4 pt-3 pb-2 space-y-2">
            {SCAN_LINES.map((line, i) => (
              <motion.div
                key={i}
                className={`h-2 bg-gray-200 rounded-full ${line.w}`}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: line.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Línea escáner que baja */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 z-10"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #dc2626 20%, #ff6b6b 50%, #dc2626 80%, transparent 100%)",
              boxShadow: "0 0 12px 3px rgba(220,38,38,0.5)",
            }}
            initial={{ top: "30px" }}
            animate={{ top: ["30px", "240px", "30px"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Overlay glow del escáner */}
          <motion.div
            className="absolute left-0 right-0 h-12 z-[5] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(220,38,38,0.06) 50%, transparent 100%)",
            }}
            initial={{ top: "20px" }}
            animate={{ top: ["20px", "220px", "20px"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Esquinas del escáner */}
          {[
            "top-[28px] left-3",
            "top-[28px] right-3",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-3 h-3 z-20`}
              style={{
                borderTop: "2px solid #dc2626",
                borderLeft: i === 0 ? "2px solid #dc2626" : undefined,
                borderRight: i === 1 ? "2px solid #dc2626" : undefined,
              }}
              initial={{ top: "28px" }}
              animate={{ top: ["28px", "238px", "28px"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Sello DGT semi-transparente */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-2 border-red-200 flex items-center justify-center opacity-20">
            <span className="text-red-600 font-black text-[8px]">DGT</span>
          </div>
        </div>

        {/* Partículas flotantes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-red-400"
            style={{ left: `${15 + i * 18}%`, top: "50%" }}
            animate={{
              y: [-20, -45, -20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* ── Etapas reales (altura fija: sin saltos de maquetación) ── */}
      <ol className="w-64 space-y-1.5" aria-live="polite">
        {SCAN_STEPS.map((st, i) => {
          const fin = Math.max(...activos);
          const omitido = i === 1 && i < Math.min(...activos) && !vistos.current.has("fotos") && !conPruebas;
          const hecho = i < Math.min(...activos) && !omitido;
          const activo = activos.includes(i);
          return (
            <li key={st.key} className={`flex items-center gap-2 h-7 rounded-lg px-2 text-xs transition-colors duration-300 ${activo ? "bg-red-50 text-gray-900 font-black" : hecho ? "text-gray-500" : "text-gray-300"}`}>
              <span className="w-4 text-center" aria-hidden>{omitido ? "–" : hecho ? "✓" : activo ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" /> : "·"}</span>
              <span className="whitespace-nowrap truncate">{st.icon} {st.label.replace("...", "")}</span>
              {activo && i === fin && <span className="ml-auto hidden sm:inline text-[10px] font-normal text-gray-400 truncate max-w-[90px]">{st.detail.split(",")[0]}</span>}
            </li>
          );
        })}
      </ol>
      <p role="status" className="h-4 text-xs font-semibold text-amber-700">{tardando ? "Analizando, puede tardar un poco…" : ""}</p>

      {/* ── Barra de progreso ── */}
      <div className="w-52 space-y-2">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((Math.max(...activos) + 1) / SCAN_STEPS.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-300 font-semibold">
          {SCAN_STEPS.map((_, i) => (
            <motion.div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                i <= Math.max(...activos) ? "bg-red-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Chips de lo que busca ── */}
      <div className="flex flex-wrap gap-1.5 justify-center max-w-[280px]">
        {["Expediente", "Importe €", "Fecha", "Infracción", "Notificación", "Firma agente", "Calibración radar", "Plazo"].map((tag, i) => (
          <motion.span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.9, 1, 0.9],
              borderColor: ["#e5e7eb", "#dc2626", "#e5e7eb"],
              color: ["#9ca3af", "#dc2626", "#9ca3af"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.28,
              ease: "easeInOut",
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <p className="text-[10px] text-gray-300 text-center">{t("scan.wait")}</p>
    </motion.div>
  );
}

type DialogMode = "pdf_unico" | "pdf_pack_10" | "pack";
type CodigoEstado = "idle" | "validando" | "valido" | "invalido";

function AnalizadorInner({ packToken }: { packToken?: string }) {
  const { t } = useTranslation("analyzer");
  const convex = useConvex();
  const [file, setFile] = useState<File | null>(null);
  // 13/10/2026: pruebas opcionales (ticket de parquímetro, fotos...), máx. 5 de 5 MB.
  const [pruebas, setPruebas] = useState<File[]>([]);
  const [versionHechos, setVersionHechos] = useState("");
  const [progresoId, setProgresoId] = useState("");
  const pruebasRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"upload" | "processing" | "result">("upload");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [showCarta, setShowCarta] = useState(false);
  const [showInstrucciones, setShowInstrucciones] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Diálogo de datos personales — se abre al pagar o al generar con el pack.
  const [datosDialogOpen, setDatosDialogOpen] = useState(false);
  // Consentimiento RGPD explícito: obligatorio antes de enviar o pagar.
  const [consentimiento, setConsentimiento] = useState(false);
  const [dialogMode, setDialogMode] = useState<DialogMode>("pdf_unico");
  const [confirmando, setConfirmando] = useState(false);

  // Código de creador/colaborador (opcional)
  const [codigo, setCodigo] = useState("");
  const [codigoEstado, setCodigoEstado] = useState<CodigoEstado>("idle");
  const [creadorNombre, setCreadorNombre] = useState("");
  const [creadorCanal, setCreadorCanal] = useState("");

  // Créditos restantes tras generar con el pack (null = aún no generado)
  const [creditosRestantes, setCreditosRestantes] = useState<number | null>(null);

  const analizarMulta = useAction(api.multas.analizarMulta);
  const regenerarCarta = useAction(api.multas.regenerarCartaMulta);
  const createCheckoutSinRegistro = useAction(api.payments.createCheckoutSinRegistro);
  const usarCreditoPack = async (_: any) => ({ ok: false, carta: "", restantes: 0 }); // TODO: restaurar

  const emailValido = EMAIL_RE.test(email.trim());
  const datosCompletos = !!nombre && !!dni && !!domicilio && emailValido && consentimiento;

  const validarCodigoCreador = async () => {
    const c = codigo.trim();
    if (!c) return;
    setCodigoEstado("validando");
    try {
      const res = await convex.query(api.creadores.validarCodigo, { codigo: c });
      if (res) {
        setCodigoEstado("valido");
        setCreadorNombre(res.nombre ?? "");
        setCreadorCanal(res.canal ?? "");
      } else {
        setCodigoEstado("invalido");
        setCreadorNombre("");
        setCreadorCanal("");
      }
    } catch {
      setCodigoEstado("invalido");
      setCreadorNombre("");
      setCreadorCanal("");
    }
  };

  const abrirDialogo = (mode: DialogMode) => {
    setDialogMode(mode);
    setConsentimiento(false);
    setDatosDialogOpen(true);
  };

  // Confirmar datos: pago con Stripe o generar con crédito del pack.
  const handleConfirmarDatos = async () => {
    if (!datosCompletos || !result || confirmando) return;
    setConfirmando(true);
    try {
      const datosJson = JSON.stringify({ datosDoc: result.datosMulta, defectos: result.defectos });
      if (dialogMode === "pack") {
        const r = await usarCreditoPack({
          token: packToken!,
          email: email.trim(),
          nombre: nombre.trim(),
          dni: dni.trim().toUpperCase(),
          domicilio: domicilio.trim(),
          tipo: "multa",
        });
        setResult({ ...result, carta: conAnexo(r.carta, result.anexoPruebas) });
        setCreditosRestantes(r.restantes);
        setDatosDialogOpen(false);
        toast.success(t("toast.done"));
      } else {
        const producto = dialogMode === "pdf_pack_10" ? "pdf_pack_10" : "pdf_unico";
        // 13/10/2026: el checkout exige la carta (antes se mandaba vacía y el pago fallaba siempre).
        const d = result.datosMulta;
        const cartaBase = result.carta ?? "";
        let carta: string;
        try {
          ({ carta } = await regenerarCarta({
            provincia: d.provincia, expediente: d.expediente, importe: d.importe, infraccion: d.infraccion, fecha: d.fecha,
            defectos: result.defectos.map((x) => ({ titulo: x.titulo, descripcion: x.descripcion, gravedad: x.gravedad })),
            nombreRecurrente: nombre.trim(), dniRecurrente: dni.trim().toUpperCase(), domicilioRecurrente: domicilio.trim(),
            cartaBase,
          }));
        } catch {
          carta = cartaBase
            .replace(/\[COMPLETAR:\s*Nombre y apellidos\]/gi, nombre.trim())
            .replace(/\[COMPLETAR:\s*DNI\/NIE\]/gi, dni.trim().toUpperCase())
            .replace(/\[COMPLETAR:\s*Domicilio( completo)?\]/gi, domicilio.trim());
        }
        carta = conAnexo(carta, result.anexoPruebas);
        const { url } = await createCheckoutSinRegistro({
          email: email.trim(),
          nombre: nombre.trim(),
          dni: dni.trim().toUpperCase(),
          domicilio: domicilio.trim(),
          tipo: "multa",
          importe: d.importe,
          carta,
          expediente: d.expediente,
          infraccion: d.infraccion,
          fecha: d.fecha,
          plazoRecurso: d.plazoRecurso,
        });
        window.location.href = url;
      }
    } catch {
      toast.error(dialogMode === "pack" ? t("toast.errorPack") : t("toast.errorPayment"));
      setConfirmando(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer.files[0];
    if (f && (f.type === "application/pdf" || f.type.startsWith("image/"))) {
      setFile(f);
    } else {
      toast.error(t("toast.wrongFile"));
    }
  };

  const handleAnalizar = async () => {
    if (!file) return;

    if (file.size > 6 * 1024 * 1024) {
      toast.error(t("toast.tooLarge"));
      return;
    }

    const pid = (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`).slice(0, 64);
    setProgresoId(pid);
    setStep("processing");
    try {
      toast.info(t("toast.preparing"));
      const fileBase64 = await fileToBase64(file);
      const fileMimeType = normalizeMimeType(file);

      toast.info(t("toast.analyzing"));
      const pruebasPayload = await Promise.all(pruebas.map(async (p) => {
        const img = p.type.startsWith("image/") ? await comprimirImagen(p) : null;
        return img ?? { nombre: p.name, base64: await fileToBase64(p), mime: normalizeMimeType(p) };
      }));
      if (pruebasPayload.reduce((n, p) => n + p.base64.length, 0) > 12_000_000) {
        throw new Error("Las pruebas ocupan demasiado en total. Quita alguna o súbelas más ligeras.");
      }
      const res = await withAnalisisTimeout(analizarMulta({
        ...(pruebasPayload.length ? { pruebas: pruebasPayload } : {}),
        progresoId: pid,
        ...(versionHechos.trim() ? { version: versionHechos.replace(/<[^>]*>/g, " ").trim().slice(0, 1500) } : {}),
        fileBase64,
        fileMimeType,
        fingerprint: getAnonymousFingerprint(),
      }));
      const r = res as AnalysisResult;
      const vacio = (v: string) => !v || /no (encontrado|especificad[oa]|disponible)/i.test(String(v).trim());
      if (vacio(r?.datosMulta?.expediente) && vacio(r?.datosMulta?.importe) && vacio(r?.datosMulta?.fecha)) {
        // Nunca mostrar aviso de ilegible + veredicto a la vez: solo el aviso.
        throw new Error(`${t("result.unreadableTitle")} ${t("result.unreadableBody")}`);
      }
      setResult(r);
      setStep("result");
      toast.success(t("toast.done"));
    } catch (err) {
      if (err instanceof AnalisisTimeoutError) {
        toast.error("Está tardando más de lo normal (puede ser tu conexión). Pulsa de nuevo para reintentar.");
      } else {
        toast.error(mensajeError(err, t("toast.errorMulta")));
      }
      setStep("upload");
    }
  };

  const provincia = result?.datosMulta.provincia ?? "";
  const dgtInfo = DGT_EMAILS[provincia] ?? DEFAULT_DGT;

  if (step === "processing") {
    return <ScanAnimation progresoId={progresoId} conPruebas={pruebas.length > 0} />;
  }

  const descargarPdf = async () => {
    if (!result?.carta) return;
    // jsPDF se carga solo al pulsar (no pesa en la carga inicial).
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const margen = 20, ancho = 170, alto = 297, linea = 5.2;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    let y = margen;
    for (const parrafo of result.carta.replace(/\r/g, "").split("\n")) {
      const lineas = parrafo.trim() ? doc.splitTextToSize(parrafo, ancho) : [""];
      for (const l of lineas) {
        if (y > alto - margen) { doc.addPage(); y = margen; }
        doc.text(l, margen, y);
        y += linea;
      }
    }
    doc.save("recurso-multa.pdf");
  };

  const datosDialog = (
    <Dialog open={datosDialogOpen} onOpenChange={(open) => { if (!confirmando) setDatosDialogOpen(open); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-4 h-4 text-red-600" /> {t("dialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("dialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <User className="w-3 h-3 text-red-500" /> {t("form.name")}
            </label>
            <Input
              placeholder={t("form.namePlaceholder")}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${nombre ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"}`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-red-500" /> {t("form.dni")}
            </label>
            <Input
              placeholder={t("form.dniPlaceholder")}
              value={dni}
              onChange={(e) => setDni(e.target.value.toUpperCase())}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${dni ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"}`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-500" /> {t("form.address")}
            </label>
            <Input
              placeholder={t("form.addressPlaceholder")}
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${domicilio ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"}`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <Mail className="w-3 h-3 text-red-500" /> {t("form.email")}
            </label>
            <Input
              type="email"
              inputMode="email"
              placeholder={t("form.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${email && !emailValido ? "border-red-300 bg-red-50" : email ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"}`}
            />
            {email && !emailValido && (
              <p className="text-[10px] text-red-500 font-semibold">{t("toast.errorEmail")}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <Ticket className="w-3 h-3 text-red-500" /> {t("dialog.creatorCode")}
            </label>
            <div className="flex gap-2">
              <Input
                placeholder={t("dialog.creatorCodePlaceholder")}
                value={codigo}
                onChange={(e) => { setCodigo(e.target.value); setCodigoEstado("idle"); }}
                className="text-sm h-10 font-medium rounded-xl border-2 border-gray-200 bg-gray-50"
              />
              <Button
                type="button"
                variant="secondary"
                className="h-10 px-4 rounded-xl font-bold text-xs shrink-0"
                onClick={validarCodigoCreador}
                disabled={!codigo.trim() || codigoEstado === "validando" || codigoEstado === "valido"}
              >
                {codigoEstado === "validando" ? <Spinner className="w-4 h-4" /> : t("dialog.validate")}
              </Button>
            </div>
            {codigoEstado === "valido" && (
              <p className="text-[11px] text-green-600 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> {t("dialog.creatorValid", { nombre: creadorNombre, canal: creadorCanal })}
              </p>
            )}
            {codigoEstado === "invalido" && (
              <p className="text-[11px] text-red-500 font-bold">{t("dialog.creatorInvalid")}</p>
            )}
          </div>
          <label className="flex items-start gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              checked={consentimiento}
              onChange={(e) => setConsentimiento(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-red-600"
            />
            <span>
              {t("dialog.consentBefore")}{" "}
              <a href="/privacidad/" className="font-bold text-red-700 underline">
                {t("dialog.consentLink")}
              </a>{" "}
              {t("dialog.consentAfter")}
            </span>
          </label>
          <p className="text-[10px] text-gray-400 flex items-center gap-1">
            <Lock className="w-3 h-3" /> {t("dialog.privacy")}
          </p>
        </div>
        <DialogFooter>
          <Button
            className="w-full font-black h-11 bg-red-600 hover:bg-red-700 text-white rounded-xl"
            onClick={handleConfirmarDatos}
            disabled={!datosCompletos || confirmando}
          >
            {confirmando ? (
              <><Spinner className="mr-2" /> {dialogMode === "pack" ? t("dialog.generating") : t("dialog.redirecting")}</>
            ) : (
              <>{dialogMode === "pack" ? t("dialog.confirmPack") : t("dialog.confirm")}</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  if (step === "result" && result) {
    const packGenerado = creditosRestantes !== null;
    // Si la IA no pudo extraer los datos clave, la foto/PDF probablemente no
    // se ve con nitidez: avisar al usuario en vez de mostrar "No encontrado".
    const faltan = (v: string) => !v || /no (encontrado|especificad[oa]|disponible)/i.test(v.trim());
    const docIlegible =
      faltan(result.datosMulta.expediente) &&
      faltan(result.datosMulta.importe) &&
      faltan(result.datosMulta.fecha);
    return (
      <>
        {datosDialog}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">

        {false && docIlegible && (
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-black text-amber-900">{t("result.unreadableTitle")}</p>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">{t("result.unreadableBody")}</p>
            </div>
          </div>
        )}

        {/* ── VIABILIDAD GAUGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl border-2 ${viabilidadRing(result.viabilidad)} bg-white p-5 space-y-4`}
        >
          {/* Header */}
          <div className="flex items-center gap-2">
            <TrendingUp className={`w-4 h-4 ${viabilidadColor(result.viabilidad)}`} />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("result.label")}</p>
            <Badge className="bg-green-50 text-green-700 border-green-200 text-[10px] font-bold ml-auto">
              {t("result.free")}
            </Badge>
          </div>

          {/* Gauge + summary side by side */}
          <div className="flex items-center gap-4">
            <ViabilidadGauge value={result.viabilidad} nivel={result.nivel} />
            <div className="flex-1 space-y-2">
              <p className="text-xs font-black text-gray-900 leading-snug">{t("result.summary")}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{result.resumen}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Shield className="w-3 h-3 text-red-500" />
                <span>{t(result.defectos.length === 1 ? "result.defectsFound_one" : "result.defectsFound_other", { count: result.defectos.length })}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── DEFECTOS DETECTADOS ── */}
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            {t("result.legalDefects")}
          </p>
          <div className="space-y-2">
            {result.defectos.map((d, i) => {
              const s = gravedadStyle(d.gravedad);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={`${s.bg} border ${s.border} rounded-xl p-3 flex items-start gap-2.5`}
                >
                  <div className={`w-2 h-2 rounded-full ${s.dot} mt-1.5 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={`text-xs font-black ${s.text}`}>{d.titulo}</p>
                      <span className={`text-[10px] font-bold uppercase ${s.text} opacity-70`}>
                        {t("result.severity")} {d.gravedad}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{d.descripcion}</p>
                  </div>
                  <Check className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── DATOS DETECTADOS ── */}
        <Card className="border-border bg-card">
          <CardContent className="p-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">{t("result.dataTitleMulta")}</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Hash, label: t("result.field.expediente"), value: result.datosMulta.expediente },
                { icon: Hash, label: "Matrícula", value: result.datosMulta.matricula ?? "" },
                { icon: Euro, label: t("result.field.importe"), value: result.datosMulta.importe },
                { icon: AlertTriangle, label: t("result.field.infraccion"), value: result.datosMulta.infraccion },
                { icon: Calendar, label: t("result.field.fecha"), value: result.datosMulta.fecha },
                { icon: MapPin, label: t("result.field.provincia"), value: result.datosMulta.provincia },
                ...(/\d/.test(result.datosMulta.velocidadDetectada ?? "") ? [{ icon: TrendingUp, label: "Velocidad medida / límite", value: `${result.datosMulta.velocidadDetectada} / ${result.datosMulta.limiteVia ?? "—"}` }] : []),
                ...(result.datosMulta.organo ? [{ icon: Shield, label: "Órgano", value: result.datosMulta.organo }] : []),
                ...(/\d/.test(result.datosMulta.fechaNotificacion ?? "") ? [{ icon: Calendar, label: "Notificación", value: result.datosMulta.fechaNotificacion! }] : []),
                { icon: Clock, label: t("result.field.plazo"), value: result.datosMulta.plazoRecurso },
              ].filter((x) => x.value && x.value.trim()).map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-muted/30 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── PDF PAYWALL / PACK ── */}
        <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-red-200">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-900">{packGenerado ? t("pack.title") : t("pdf.title")}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {packGenerado
                    ? t("pack.creditsLeft", { count: creditosRestantes })
                    : t("pdf.freeAnalysisMulta")}
                </p>
              </div>
            </div>

            {/* What's included */}
            <ul className="space-y-1.5">
              {[
                t("pdf.includesMulta.1"),
                `${result.defectos.length} ${t("pdf.includesMulta.2")}`,
                t("pdf.includesMulta.3"),
                t("pdf.includesMulta.4"),
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs text-gray-700">
                  <Check className="w-3.5 h-3.5 text-red-500 shrink-0" /> {b}
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              {packGenerado ? (
                <Button
                  className="w-full font-black h-12 text-base bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-200"
                  onClick={descargarPdf}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t("pack.download")}
                </Button>
              ) : packToken ? (
                <Button
                  className="w-full font-black h-16 text-lg bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-xl shadow-red-200"
                  onClick={() => abrirDialogo("pack")}
                  disabled={confirmando}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t("pack.generate")}
                </Button>
              ) : (
                <>
                  {/* Botón principal de pago PDF */}
                  <Button
                    className="w-full font-black h-16 text-lg bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-xl shadow-red-200"
                    onClick={() => abrirDialogo("pdf_unico")}
                    disabled={confirmando}
                  >
                    <Download className="w-5 h-5 mr-2" />{t("pdf.download")}
                  </Button>
                  {/* Pack 10 — opción multimulta */}
                  {PACK10_VISIBLE && (
<Button
                    variant="secondary"
                    className="w-full font-bold h-10 text-sm rounded-xl border-2 border-red-200 hover:border-red-400 hover:bg-red-50"
                    onClick={() => abrirDialogo("pdf_pack_10")}
                    disabled={confirmando}
                  >
                    {t("pdf.pack10Question")}
                  </Button>
)}
                </>
              )}
            </div>
            <p className="text-xs text-gray-400 text-center">
              {packGenerado ? t("dialog.privacy") : t("pdf.secureNote")}
            </p>
          </CardContent>
        </Card>

        {/* ── VISTA PREVIA DEL RECURSO (colapsable) ── */}
        <Card className="border-border bg-card overflow-hidden">
          <button
            onClick={() => setShowCarta(!showCarta)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-sm font-semibold text-gray-700">{t("preview.title")}</span>
              <Badge className="bg-gray-100 text-gray-500 border-0 text-[10px]">{t("preview.readonly")}</Badge>
            </div>
            {showCarta ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          <AnimatePresence>
            {showCarta && (
              <motion.div
                initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="relative px-4 pb-4 max-h-64 overflow-y-auto">
                  <pre className={`text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed font-sans ${packGenerado ? "" : "blur-[2px] select-none"}`}>
                    {result.carta}
                  </pre>
                  {/* Blur overlay with CTA */}
                  {!packGenerado && (
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-4">
                      <Button
                        size="sm"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-5 text-xs shadow-md"
                        onClick={() => abrirDialogo(packToken ? "pack" : "pdf_unico")}
                        disabled={confirmando}
                      >
                        <Lock className="w-3 h-3 mr-1.5" />
                        {packToken ? t("pack.generate") : t("preview.unlock")}
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        {/* ── INSTRUCCIONES DE PRESENTACIÓN (colapsable) ── */}
        <Card className="border-border bg-card overflow-hidden">
          <button
            onClick={() => setShowInstrucciones(!showInstrucciones)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">{t("howto.title")}</span>
            </div>
            {showInstrucciones ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          <AnimatePresence>
            {showInstrucciones && (
              <motion.div
                initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-4">
                  {/* DGT */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-red-600 rounded-md flex items-center justify-center shrink-0">
                        <Car className="w-3 h-3 text-white" />
                      </span>
                      <p className="text-xs font-black text-foreground uppercase tracking-wide">Si la multa es de la DGT</p>
                    </div>
                    {[
                      { n: "1", t: "Sede Electrónica DGT", d: <span>Ve a <a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">sede.dgt.gob.es</a> → Trámites → Multas → Alegaciones o recursos.</span> },
                      { n: "2", t: "Identifícate", d: "Cl@ve, DNI electrónico o Certificado Digital." },
                      { n: "3", t: "Adjunta y envía", d: "Sube el PDF descargado. Guarda el justificante con sello de tiempo." },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary-foreground">{s.n}</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">{s.t}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{s.d}</p>
                        </div>
                      </div>
                    ))}
                    <a href="https://sede.dgt.gob.es" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full h-9 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Ir a la Sede Electrónica DGT
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground font-semibold">O bien</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Ayuntamiento */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-gray-700 rounded-md flex items-center justify-center shrink-0">
                        <MapPin className="w-3 h-3 text-white" />
                      </span>
                      <p className="text-xs font-black text-foreground uppercase tracking-wide">Si es de un Ayuntamiento</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Sede Electrónica del Ayuntamiento → Registro Electrónico General → adjunta el PDF. Descarga el resguardo con número de entrada.</p>
                    <div className="bg-muted/40 border border-border rounded-xl p-3 flex items-start gap-2">
                      <Mail className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-foreground">Jefatura de Tráfico de {provincia || "tu provincia"}</p>
                        <p className="text-xs text-muted-foreground">{dgtInfo.address}</p>
                        <p className="text-xs text-primary mt-0.5">{dgtInfo.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-amber-700 leading-relaxed">
                        <strong>Plazo:</strong> {result.datosMulta.plazoRecurso}. Si pagas con descuento del 50% <strong>pierdes el derecho a recurrir</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        <Button
          variant="secondary"
          className="w-full text-xs"
          onClick={() => { setStep("upload"); setFile(null); setResult(null); setShowCarta(false); setShowInstrucciones(false); setCreditosRestantes(null); }}
        >
          {t("button.analyzeAnotherMulta")}
        </Button>
        </motion.div>
      </>
    );
  }

  // ── UPLOAD STEP ──
  return (
    <div className="space-y-3">
      {/* ── ZONA SUBIDA MULTA ── */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 overflow-hidden
          ${dragActive ? "border-red-500 bg-red-50 scale-[1.01]" : file ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50 hover:border-red-400 hover:bg-red-50/40"}`}
      >
        <input ref={fileInputRef} type="file" accept="application/pdf,image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setFile(f); }} />

        {file ? (
          <div className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-gray-900 truncate">{file.name}</p>
              <p className="text-xs text-green-600 font-semibold mt-0.5">{(file.size / 1024).toFixed(0)} KB · {t("upload.ready")}</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-green-600" />
            </div>
          </div>
        ) : (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Upload className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">{t("upload.title")}</p>
              <p className="text-xs text-gray-500 mt-1">{t("upload.subtitle")}</p>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {["PDF", "JPG", "PNG", "HEIC"].map((f) => (
                <span key={f} className="text-[10px] bg-white border border-gray-200 rounded-full px-2 py-0.5 font-bold text-gray-500">{f}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── VERSIÓN DE LOS HECHOS (OPCIONAL) ── */}
      <div className="rounded-2xl border border-dashed border-gray-300 p-4 space-y-2">
        <label htmlFor="version-hechos" className="block text-sm font-black text-gray-900">Tu versión de los hechos (opcional)</label>
        <p className="text-xs text-gray-500">Cuéntanos qué pasó. Se tendrá en cuenta junto con tus pruebas y se incluirá en el recurso.</p>
        <textarea id="version-hechos" value={versionHechos} maxLength={1500} rows={4}
          onChange={(e) => setVersionHechos(e.target.value.slice(0, 1500))}
          placeholder="Ej.: Puse el ticket, pasaron 5 minutos y me multaron"
          className="w-full rounded-xl border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
        <p className="text-right text-xs text-gray-400">{versionHechos.length}/1500</p>
      </div>

      {/* ── PRUEBAS OPCIONALES ── */}
      <div className="rounded-2xl border border-dashed border-gray-300 p-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-black text-gray-900">Adjuntar pruebas (opcional)</p>
            <p className="text-xs text-gray-500">Ticket del parquímetro, fotos de la señal… Hasta 5 archivos de 5 MB (imagen o PDF). Se tendrán en cuenta en el análisis y se añadirán como anexo al recurso.</p>
          </div>
          <Button type="button" variant="outline" size="sm" disabled={pruebas.length >= 5} onClick={() => pruebasRef.current?.click()}>Añadir</Button>
        </div>
        <input ref={pruebasRef} type="file" multiple accept="application/pdf,image/*" className="hidden" data-testid="pruebas-input"
          onChange={(e) => {
            const nuevos = Array.from(e.target.files ?? []);
            const grandes = nuevos.filter((f) => f.size > 5 * 1024 * 1024);
            if (grandes.length) toast.error(`Máximo 5 MB por archivo: ${grandes.map((f) => f.name).join(", ")}`);
            setPruebas((prev) => [...prev, ...nuevos.filter((f) => f.size <= 5 * 1024 * 1024)].slice(0, 5));
            e.target.value = "";
          }} />
        {pruebas.length > 0 && (
          <ul className="space-y-1">
            {pruebas.map((p, i) => (
              <li key={i} className="flex items-center justify-between text-xs bg-gray-50 rounded-lg px-2 py-1">
                <span className="truncate">{p.name} · {(p.size / 1024).toFixed(0)} KB</span>
                <button type="button" className="text-red-600 font-bold ml-2" onClick={() => setPruebas((prev) => prev.filter((_, j) => j !== i))}>Quitar</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── BOTÓN ANALIZAR ── */}
      <Button
        className="w-full h-14 text-base font-black rounded-2xl shadow-lg transition-all duration-200 bg-red-600 hover:bg-red-700 text-white shadow-red-200 hover:scale-[1.01]"
        onClick={() => {
          if (!file) {
            fileInputRef.current?.click();
          } else {
            handleAnalizar();
          }
        }}
      >
        {!file ? (
          <><Upload className="w-5 h-5 mr-2" /> {t("button.uploadHere")}</>
        ) : (
          <><Zap className="w-5 h-5 mr-2" /> {t("button.analyzeFree")}</>
        )}
      </Button>

      {/* ── GARANTÍAS ── */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: Shield, label: t("guarantee.freeTitle"), sub: t("guarantee.freeSub") },
          { icon: Lock, label: t("guarantee.secureTitle"), sub: t("guarantee.secureSub") },
          { icon: Zap, label: t("guarantee.speedTitle"), sub: t("guarantee.speedSub") },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="bg-white border border-gray-100 rounded-xl p-2.5 text-center shadow-sm">
            <Icon className="w-4 h-4 text-red-500 mx-auto mb-1" />
            <p className="text-[11px] font-black text-gray-900">{label}</p>
            <p className="text-[10px] text-gray-400">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
