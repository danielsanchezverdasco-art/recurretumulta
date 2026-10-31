import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Upload, FileText, Zap, Download, ChevronDown, ChevronUp,
  Check, AlertTriangle, MapPin, Hash, Euro, Calendar, User, CreditCard,
  Lock, Shield, TrendingUp, Scale, Gavel, Mail, Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog.tsx";
import { useAction, useConvex } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { toast } from "sonner";

// Pack 10 oculto hasta que exista el backend que consume los créditos (decisión de Daniel, 12/10/2026).
const PACK10_VISIBLE = false;
import { getAnonymousFingerprint, withAnalisisTimeout, AnalisisTimeoutError } from "@/lib/analisis-libre.ts";
import { LazyConvexProvider } from "@/components/providers/convex-lazy.tsx";

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1];
      if (!base64) reject(new Error("No se pudo leer el archivo"));
      else resolve(base64);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function normalizeMimeType(file: File): string {
  const mime = file.type || "application/octet-stream";
  if (mime.startsWith("image/")) return mime;
  if (mime === "application/pdf") return "application/pdf";
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf") return "application/pdf";
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (ext === "png") return "image/png";
  if (ext === "webp") return "image/webp";
  if (ext === "heic" || ext === "heif") return "image/jpeg";
  return "image/jpeg";
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Defecto = { titulo: string; descripcion: string; gravedad: "alta" | "media" | "baja" };

type DatosSancion = {
  municipio: string;
  expediente: string;
  importe: string;
  infraccion: string;
  fecha: string;
  ley: string;
  plazoRecurso: string;
};

type Nivel = "alta" | "media" | "baja" | "no_valorable";
type AnalysisResult = {
  carta: string;
  nivel: Nivel;
  motivosNivel?: string[];
  resumen: string;
  defectos: Defecto[];
  datosSancion: DatosSancion;
};

function nivelColor(n: Nivel): string {
  return n === "alta" ? "text-green-600" : n === "media" ? "text-amber-600" : n === "baja" ? "text-red-600" : "text-gray-600";
}
function nivelRing(n: Nivel): string {
  return n === "alta" ? "border-green-200" : n === "media" ? "border-amber-200" : n === "baja" ? "border-red-200" : "border-gray-200";
}
function gravedadStyle(g: "alta" | "media" | "baja") {
  const map = {
    alta: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", dot: "bg-red-500" },
    media: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500" },
    baja: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-400" },
  };
  return map[g];
}

// ── TIPOS DE MULTA PATINETE ELÉCTRICO (VMP) ────────────────────────────────────────────────
const TIPOS_SANCION = [
  { label: "Circular por la acera o zona peatonal (200 €)", law: "RGC · RD 518/2026" },
  { label: "Usar el móvil o auriculares (200 €)", law: "RGC · RD 518/2026" },
  { label: "Circular sin casco (200 €)", law: "RGC · RD 518/2026" },
  { label: "Circular dos personas en el patinete (100 €)", law: "RGC · RD 518/2026" },
  { label: "Alcohol o drogas (500 a 1.000 €)", law: "RGC · RD 518/2026" },
  { label: "Circular de noche sin alumbrado o reflectante (200 €)", law: "RGC · RD 518/2026" },
  { label: "Menor de 15 años conduciendo (100 €)", law: "RGC · RD 518/2026" },
];

const SCAN_STEPS = [
  { icon: "📄", label: "Leyendo el documento...", detail: "Extrayendo texto e imágenes" },
  { icon: "🔍", label: "Identificando la infracción...", detail: "Ley aplicada, expediente, importe" },
  { icon: "⚖️", label: "Analizando vicios de forma...", detail: "RGC, Ley 39/2015, CE" },
  { icon: "🧠", label: "Valorando los motivos...", detail: "Proporcionalidad, tipicidad, motivación" },
  { icon: "📝", label: "Redactando el recurso...", detail: "Generando texto jurídico con jurisprudencia TC" },
];

const SCAN_LINES = [
  { w: "w-3/4", delay: 0 }, { w: "w-full", delay: 0.05 }, { w: "w-2/3", delay: 0.1 },
  { w: "w-full", delay: 0.15 }, { w: "w-1/2", delay: 0.2 }, { w: "w-5/6", delay: 0.25 },
  { w: "w-full", delay: 0.3 }, { w: "w-3/5", delay: 0.35 }, { w: "w-full", delay: 0.4 },
  { w: "w-2/3", delay: 0.45 }, { w: "w-4/5", delay: 0.5 }, { w: "w-full", delay: 0.55 },
];

function ScanAnimation() {
  const { t } = useTranslation("analyzer");
  const [stepIdx, setStepIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStepIdx((prev) => (prev < SCAN_STEPS.length - 1 ? prev + 1 : prev));
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  const current = SCAN_STEPS[stepIdx];

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6 py-6">
      {/* ── Logo animado mientras se espera ── */}
      <motion.img
        src="/media/file_JCUW0M5ZDov5VKrmqbwPmQSz.png"
        alt="Logotipo de RecurreTuMulta.online"
        className="w-14 h-14 drop-shadow-lg"
        animate={{ scale: [1, 1.12, 1], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative w-52 h-64 select-none">
        <div className="absolute inset-0 translate-y-1.5 translate-x-1.5 bg-blue-100 rounded-2xl" />
        <div className="relative w-full h-full bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-xl">
          <div className="h-8 bg-blue-800 flex items-center px-4 gap-2">
            <div className="w-3 h-3 bg-white/30 rounded-full" />
            <div className="flex-1 h-1.5 bg-white/20 rounded-full" />
            <div className="w-8 h-1.5 bg-white/30 rounded-full" />
          </div>
          <div className="px-4 pt-3 pb-2 space-y-2">
            {SCAN_LINES.map((line, i) => (
              <motion.div key={i} className={`h-2 bg-gray-200 rounded-full ${line.w}`}
                initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: line.delay, ease: "easeInOut" }}
              />
            ))}
          </div>
          <motion.div className="absolute left-0 right-0 h-0.5 z-10"
            style={{ background: "linear-gradient(90deg, transparent 0%, #1e3a8a 20%, #3b82f6 50%, #1e3a8a 80%, transparent 100%)", boxShadow: "0 0 12px 3px rgba(30,58,138,0.5)" }}
            initial={{ top: "30px" }} animate={{ top: ["30px", "240px", "30px"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-2 border-blue-200 flex items-center justify-center opacity-20">
            <Scale className="w-5 h-5 text-blue-800" />
          </div>
        </div>
      </div>
      <div className="text-center space-y-1.5 max-w-[260px]">
        <AnimatePresence mode="wait">
          <motion.div key={stepIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="space-y-1">
            <p className="text-sm font-black text-gray-900">{current.icon} {current.label}</p>
            <p className="text-xs text-gray-400">{current.detail}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-52 space-y-2">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-blue-700 to-blue-500 rounded-full"
            initial={{ width: "0%" }} animate={{ width: `${((stepIdx + 1) / SCAN_STEPS.length) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center max-w-[280px]">
        {["RGC", "RD 518/2026", "Proporcionalidad", "Motivación", "Notificación", "Prescripción", "TC jurisprudencia", "Tipicidad"].map((tag, i) => (
          <motion.span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1, 0.9], borderColor: ["#e5e7eb", "#1e3a8a", "#e5e7eb"], color: ["#9ca3af", "#1e3a8a", "#9ca3af"] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.28, ease: "easeInOut" }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <p className="text-[10px] text-gray-300 text-center">{t("scan.wait")}</p>
    </motion.div>
  );
}

// Nivel cualitativo (sin porcentaje: un % sería una precisión inventada).
const NIVEL_TEXTO: Record<Nivel, { titulo: string; sub: string }> = {
  alta: { titulo: "Hay motivos sólidos", sub: "Motivo objetivo para recurrir" },
  media: { titulo: "Posibles motivos", sub: "Merece la pena presentarlo" },
  baja: { titulo: "Pocos motivos", sub: "No se aprecian defectos claros" },
  no_valorable: { titulo: "No se puede valorar", sub: "Faltan datos del documento" },
};
function NivelBadge({ nivel }: { nivel: Nivel }) {
  const tx = NIVEL_TEXTO[nivel] ?? NIVEL_TEXTO.no_valorable;
  const cls = nivel === "alta" ? "bg-green-50 text-green-700 border-green-200" : nivel === "media" ? "bg-amber-50 text-amber-700 border-amber-200"
    : nivel === "baja" ? "bg-red-50 text-red-700 border-red-200" : "bg-gray-50 text-gray-700 border-gray-200";
  return (
    <div className="flex flex-col items-center gap-1.5 w-28 shrink-0 text-center">
      <TrendingUp className={`w-9 h-9 ${nivelColor(nivel)}`} />
      <Badge className={`text-[11px] font-black px-2.5 py-1 border whitespace-normal leading-tight ${cls}`}>{tx.titulo}</Badge>
      <span className="text-[10px] text-gray-400 leading-tight">{tx.sub}</span>
    </div>
  );
}

type DialogMode = "pdf_unico" | "pdf_pack_10" | "pack";
type CodigoEstado = "idle" | "validando" | "valido" | "invalido";

function AnalizadorSancionSinProvider({ packToken }: { packToken?: string }) {
  // El análisis es gratis y sin registro. packToken (opcional) viene del
  // enlace personal del Pack 10 y permite generar recursos con sus créditos.
  return <AnalizadorInner packToken={packToken} />;
}

function AnalizadorInner({ packToken }: { packToken?: string }) {
  const { t } = useTranslation("analyzer");
  const convex = useConvex();
  const [file, setFile] = useState<File | null>(null);
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
  const [descargando, setDescargando] = useState(false);

  // Código de creador/colaborador (opcional)
  const [codigo, setCodigo] = useState("");
  const [codigoEstado, setCodigoEstado] = useState<CodigoEstado>("idle");
  const [creadorNombre, setCreadorNombre] = useState("");
  const [creadorCanal, setCreadorCanal] = useState("");

  // Créditos restantes tras generar con el pack (null = aún no generado)
  const [creditosRestantes, setCreditosRestantes] = useState<number | null>(null);

  const analizarSancion = useAction(api.sanciones.analizarSancion);
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
      const datosJson = JSON.stringify({ datosDoc: result.datosSancion, defectos: result.defectos });
      if (dialogMode === "pack") {
        const r = await usarCreditoPack({
          token: packToken!,
          email: email.trim(),
          nombre: nombre.trim(),
          dni: dni.trim().toUpperCase(),
          domicilio: domicilio.trim(),
          tipo: "sancion",
        });
        setResult({ ...result, carta: r.carta });
        setCreditosRestantes(r.restantes);
        setDatosDialogOpen(false);
        toast.success(t("toast.done"));
      } else {
        const producto = dialogMode === "pdf_pack_10" ? "pdf_pack_10" : "pdf_unico";
        const { url } = await createCheckoutSinRegistro({
          email: email.trim(),
          nombre: nombre.trim(),
          dni: dni.trim().toUpperCase(),
          domicilio: domicilio.trim(),
          tipo: "sancion",
          importe: "",
          carta: "",
          expediente: "",
          infraccion: "",
          fecha: "",
          plazoRecurso: "",
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
    if (file.size > 6 * 1024 * 1024) { toast.error(t("toast.tooLarge")); return; }
    setStep("processing");
    try {
      toast.info(t("toast.preparing"));
      const fileBase64 = await fileToBase64(file);
      const fileMimeType = normalizeMimeType(file);
      toast.info(t("toast.analyzing"));
      const res = await withAnalisisTimeout(analizarSancion({
        fileBase64,
        fileMimeType,
        fingerprint: getAnonymousFingerprint(),
      }));
      setResult(res as AnalysisResult);
      setStep("result");
      toast.success(t("toast.done"));
    } catch (err) {
      if (err instanceof AnalisisTimeoutError) {
        toast.error("Está tardando más de lo normal (puede ser tu conexión). Pulsa de nuevo para reintentar.");
      } else {
        toast.error(err instanceof Error ? err.message : t("toast.errorSancion"));
      }
      setStep("upload");
    }
  };

  if (step === "processing") return <ScanAnimation />;

  const descargarPdf = async () => {
    if (!result?.carta || descargando) return;
    setDescargando(true);
    try {
      const [{ jsPDF }, { construirPdfRecurso }] = await Promise.all([import("jspdf"), import("@/convex/lib/recursoPdf.ts")]);
      const d = result.datosSancion;
      const doc = construirPdfRecurso(jsPDF, result.carta, {
        expediente: d.expediente, importe: d.importe, infraccion: d.infraccion, fecha: d.fecha, plazoRecurso: d.plazoRecurso,
      });
      doc.save("recurso-sancion.pdf");
    } catch (e) {
      console.error("[pdf] error generando el PDF", e);
      toast.error("No se ha podido generar el PDF. Inténtalo de nuevo; si falla otra vez, copia el texto del recurso y pégalo en un documento.");
    } finally {
      setDescargando(false);
    }
  };

  const datosDialog = (
    <Dialog open={datosDialogOpen} onOpenChange={(open) => { if (!confirmando) setDatosDialogOpen(open); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-700" /> {t("dialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("dialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <User className="w-3 h-3 text-blue-600" /> {t("form.name")}
            </label>
            <Input
              placeholder={t("form.namePlaceholder")}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${nombre ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-blue-600" /> {t("form.dni")}
            </label>
            <Input
              placeholder={t("form.dniPlaceholder")}
              value={dni}
              onChange={(e) => setDni(e.target.value.toUpperCase())}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${dni ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-600" /> {t("form.address")}
            </label>
            <Input
              placeholder={t("form.addressPlaceholder")}
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${domicilio ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <Mail className="w-3 h-3 text-blue-600" /> {t("form.email")}
            </label>
            <Input
              type="email"
              inputMode="email"
              placeholder={t("form.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`text-sm h-10 font-medium rounded-xl border-2 transition-colors ${email && !emailValido ? "border-red-300 bg-red-50" : email ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50"}`}
            />
            {email && !emailValido && (
              <p className="text-[10px] text-red-500 font-semibold">{t("toast.errorEmail")}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1">
              <Ticket className="w-3 h-3 text-blue-600" /> {t("dialog.creatorCode")}
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
              className="mt-0.5 h-4 w-4 shrink-0 accent-blue-700"
            />
            <span>
              {t("dialog.consentBefore")}{" "}
              <a href="/privacidad/" className="font-bold text-blue-700 underline">
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
            className="w-full font-black h-11 bg-blue-700 hover:bg-blue-800 text-white rounded-xl"
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
      faltan(result.datosSancion.expediente) &&
      faltan(result.datosSancion.importe) &&
      faltan(result.datosSancion.fecha);
    return (
      <>
        {datosDialog}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">

        {docIlegible && (
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-black text-amber-900">{t("result.unreadableTitle")}</p>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">{t("result.unreadableBody")}</p>
            </div>
          </div>
        )}

        {/* VIABILIDAD */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className={`rounded-2xl border-2 ${nivelRing(result.nivel)} bg-white p-5 space-y-4`}>
          <div className="flex items-center gap-2">
            <TrendingUp className={`w-4 h-4 ${nivelColor(result.nivel)}`} />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("result.label")}</p>
            <Badge className="bg-green-50 text-green-700 border-green-200 text-[10px] font-bold ml-auto">{t("result.free")}</Badge>
          </div>
          <div className="flex items-center gap-4">
            <NivelBadge nivel={result.nivel} />
            <div className="flex-1 space-y-2">
              <p className="text-xs font-black text-gray-900 leading-snug">{t("result.summary")}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{result.resumen}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Shield className="w-3 h-3 text-blue-600" />
                <span>{t(result.defectos.length === 1 ? "result.defectsFound_one" : "result.defectsFound_other", { count: result.defectos.length })}</span>
              </div>
            </div>
          </div>
          {(result.motivosNivel?.length ?? 0) > 0 && (
            <ul className="space-y-1 text-xs text-gray-600 list-disc pl-4">
              {result.motivosNivel!.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          )}
          <p className="text-[10px] text-gray-400 leading-relaxed">Valoración orientativa basada solo en los datos leídos y en la normativa; no es una probabilidad de éxito ni asesoramiento jurídico.</p>
        </motion.div>

        {/* DEFECTOS */}
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            {t("result.legalDefects")}
          </p>
          <div className="space-y-2">
            {result.defectos.map((d, i) => {
              const s = gravedadStyle(d.gravedad);
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                  className={`${s.bg} border ${s.border} rounded-xl p-3 flex items-start gap-2.5`}>
                  <div className={`w-2 h-2 rounded-full ${s.dot} mt-1.5 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={`text-xs font-black ${s.text}`}>{d.titulo}</p>
                      <span className={`text-[10px] font-bold uppercase ${s.text} opacity-70`}>{t("result.severity")} {d.gravedad}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{d.descripcion}</p>
                  </div>
                  <Check className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* DATOS DETECTADOS */}
        <Card className="border-border bg-card">
          <CardContent className="p-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">{t("result.dataTitleSancion")}</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Hash, label: t("result.field.expediente"), value: result.datosSancion.expediente },
                { icon: Euro, label: t("result.field.importe"), value: result.datosSancion.importe },
                { icon: AlertTriangle, label: t("result.field.infraccion"), value: result.datosSancion.infraccion },
                { icon: Calendar, label: t("result.field.fecha"), value: result.datosSancion.fecha },
                { icon: MapPin, label: t("result.field.municipio"), value: result.datosSancion.municipio },
                { icon: Scale, label: t("result.field.ley"), value: result.datosSancion.ley },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-muted/30 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className="w-3 h-3 text-blue-700" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* PDF PAYWALL / PACK */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-black text-gray-900">{packGenerado ? t("pack.title") : t("pdf.title")}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  {packGenerado
                    ? t("pack.creditsLeft", { count: creditosRestantes })
                    : t("pdf.freeAnalysisSancion")}
                </p>
              </div>
            </div>
            <ul className="space-y-1.5">
              {[
                t("pdf.includesSancion.1"),
                `${result.defectos.length} ${t("pdf.includesSancion.2")}`,
                t("pdf.includesSancion.3"),
                t("pdf.includesSancion.4"),
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs text-gray-700">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              {packGenerado ? (
                <Button className="w-full font-black h-12 text-base bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg shadow-green-200"
                  onClick={descargarPdf} disabled={descargando}>
                  {descargando ? <Spinner className="w-4 h-4 mr-2" /> : <Download className="w-4 h-4 mr-2" />} {t("pack.download")}
                </Button>
              ) : packToken ? (
                <Button className="w-full font-black h-16 text-lg bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-xl shadow-blue-200"
                  onClick={() => abrirDialogo("pack")} disabled={confirmando}>
                  <Download className="w-5 h-5 mr-2" /> {t("pack.generate")}
                </Button>
              ) : (
                <>
                  <Button className="w-full font-black h-16 text-lg bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-xl shadow-blue-200"
                    onClick={() => abrirDialogo("pdf_unico")} disabled={confirmando}>
                    <Download className="w-5 h-5 mr-2" /> {t("pdf.download")}
                  </Button>
                  {PACK10_VISIBLE && (
<Button variant="secondary"
                    className="w-full font-bold h-10 text-sm rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                    onClick={() => abrirDialogo("pdf_pack_10")} disabled={confirmando}>
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

        {/* VISTA PREVIA */}
        <Card className="border-border bg-card overflow-hidden">
          <button onClick={() => setShowCarta(!showCarta)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-sm font-semibold text-gray-700">{t("preview.title")}</span>
              <Badge className="bg-gray-100 text-gray-500 border-0 text-[10px]">{t("preview.readonly")}</Badge>
            </div>
            {showCarta ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          <AnimatePresence>
            {showCarta && (
              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="relative px-4 pb-4 max-h-64 overflow-y-auto">
                  <pre className={`text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed font-sans ${packGenerado ? "" : "blur-[2px] select-none"}`}>{result.carta}</pre>
                  {!packGenerado && (
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-4">
                      <Button size="sm" className="bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full px-5 text-xs shadow-md"
                        onClick={() => abrirDialogo(packToken ? "pack" : "pdf_unico")} disabled={confirmando}>
                        <Lock className="w-3 h-3 mr-1.5" />{packToken ? t("pack.generate") : t("preview.unlock")}
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        {/* INSTRUCCIONES */}
        <Card className="border-border bg-card overflow-hidden">
          <button onClick={() => setShowInstrucciones(!showInstrucciones)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-semibold">{t("howto.title")}</span>
            </div>
            {showInstrucciones ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          <AnimatePresence>
            {showInstrucciones && (
              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                <div className="px-4 pb-4 space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs font-black text-gray-900 uppercase tracking-wide">Si la sanción es de la Policía Local / Ayuntamiento</p>
                    {[
                      { n: "1", t: "Sede Electrónica del Ayuntamiento", d: "Busca 'Sede electrónica' de tu municipio → Registro Electrónico → Recurso de reposición." },
                      { n: "2", t: "Identifícate con Cl@ve o DNI electrónico", d: "Adjunta el PDF del recurso y cualquier prueba que tengas (fotos, testigos, etc.)." },
                      { n: "3", t: "Guarda el justificante", d: "Descarga el resguardo con número de entrada y fecha. Es tu prueba de presentación en plazo." },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-3">
                        <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">{s.n}</span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">{s.t}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground font-semibold">O bien</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black text-gray-900 uppercase tracking-wide">Si es de la Policía Nacional / Guardia Civil</p>
                    <p className="text-xs text-muted-foreground">Presenta el recurso en la Subdelegación del Gobierno de tu provincia. Plazo: 30 días hábiles desde la notificación.</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-amber-700 leading-relaxed">
                        <strong>Plazo:</strong> {result.datosSancion.plazoRecurso}. <strong>No pagues</strong> mientras el recurso esté en tramitación — solicita suspensión cautelar en el propio recurso.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        <Button variant="secondary" className="w-full text-xs"
          onClick={() => { setStep("upload"); setFile(null); setResult(null); setShowCarta(false); setShowInstrucciones(false); setCreditosRestantes(null); }}>
          {t("button.analyzeAnotherSancion")}
        </Button>
        </motion.div>
      </>
    );
  }

  // ── UPLOAD STEP ──
  return (
    <div className="space-y-3">
      {/* Selector de tipo de sanción */}
      <div className="bg-blue-50 rounded-2xl border border-blue-100 p-3 space-y-2">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-700" />
          <p className="text-xs font-black text-blue-900">{t("sanctionTypesTitle")}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {TIPOS_SANCION.map((tipo) => (
            <span key={tipo.label} className="text-[10px] px-2 py-1 bg-white border border-blue-200 text-blue-700 rounded-lg font-semibold">
              {tipo.label}
            </span>
          ))}
        </div>
      </div>

      {/* Upload zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => !file && fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${dragActive ? "border-blue-400 bg-blue-50" : file ? "border-blue-300 bg-blue-50/50" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"}`}
      >
        <input ref={fileInputRef} type="file" accept=".pdf,image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) setFile(f); }} />
        <AnimatePresence mode="wait">
          {file ? (
            <motion.div key="file" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-sm font-black text-blue-700 truncate max-w-[220px] mx-auto">{file.name}</p>
              <p className="text-xs text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              <button onClick={(e) => { e.stopPropagation(); setFile(null); }}
                className="text-xs text-gray-400 hover:text-red-500 underline cursor-pointer">{t("upload.changeFile")}</button>
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <Upload className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-600">{t("upload.titleSancion")}</p>
              <p className="text-xs text-gray-400">{t("upload.subtitleSancion")}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Button className="w-full font-black h-12 text-base bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleAnalizar} disabled={!file}>
        <Zap className="w-4 h-4 mr-2" />
        {file ? t("button.analyzeSancionFree") : t("button.uploadFirst")}
      </Button>

      <div className="flex items-center justify-center gap-4 py-1">
        {[
          { icon: Shield, text: t("guarantee.freeTitle") },
          { icon: Scale, text: "RGC" },
          { icon: Zap, text: t("guarantee.speedTitle") },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-1 text-xs text-gray-400">
            <Icon className="w-3 h-3 text-blue-600" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 26/10/2026 (fix menú móvil fichas): usa hooks de convex/react; se autoenvuelve en
// LazyConvexProvider para no depender del provider raíz diferido («Could not find Convex client»).
export default function AnalizadorSancion(props: React.ComponentProps<typeof AnalizadorSancionSinProvider>) {
  return (
    <LazyConvexProvider>
      <AnalizadorSancionSinProvider {...props} />
    </LazyConvexProvider>
  );
}
