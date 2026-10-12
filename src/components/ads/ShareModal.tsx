// Modal de "Regala un análisis gratis a un amigo"
// Incentiva compartir en redes + muestra un banner AdSense mientras el usuario interactúa

import { useState } from "react";
import { Swap } from "@/components/anim.tsx";
import { X, Gift, Share2, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import AdBanner, { AD_SLOTS } from "@/components/ads/AdBanner.tsx";

const APP_URL = "https://recurretumulta.online";
const SHARE_TEXT = "🚗 ¿Te han puesto una multa? Esta IA analiza si tiene errores y genera el recurso gratis. Yo ya lo usé 👇";
const WHATSAPP_URL = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + "\n" + APP_URL)}`;
const FACEBOOK_URL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(APP_URL)}&quote=${encodeURIComponent(SHARE_TEXT)}`;
const TWITTER_URL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(APP_URL)}`;

type ShareModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ShareModal({ open, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${SHARE_TEXT}\n${APP_URL}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  return (
    <>
    {open && (
        <div
          className="anim-modal-overlay fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 px-4 pb-4 sm:pb-0"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <div
            className="anim-modal-panel w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-red-50 to-rose-50">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-red-500" />
                <span className="text-sm font-black text-gray-900">Regala un análisis gratis</span>
              </div>
              <button onClick={onClose} aria-label="Cerrar" className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
              {/* Descripción */}
              <div className="text-center space-y-1">
                <p className="text-sm font-bold text-gray-800">
                  Comparte con un amigo que tenga una multa
                </p>
                <p className="text-xs text-gray-500">
                  El análisis con IA es completamente gratis. Ayúdale a recurrir su multa en segundos.
                </p>
              </div>

              {/* Botones de compartir */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleShare(WHATSAPP_URL)}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    {/* WhatsApp icon */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.847L0 24l6.302-1.508A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.017-1.381l-.36-.214-3.733.893.926-3.638-.235-.374A9.787 9.787 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-green-700">WhatsApp</span>
                </button>

                <button
                  onClick={() => handleShare(FACEBOOK_URL)}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    {/* Facebook icon */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700">Facebook</span>
                </button>

                <button
                  onClick={() => handleShare(TWITTER_URL)}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    {/* X/Twitter icon */}
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-700">X / Twitter</span>
                </button>
              </div>

              {/* Copiar enlace */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Share2 className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-xs text-gray-500 truncate">{APP_URL}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <Swap swapKey={copied ? "copiado" : "copiar"} as="span" className="flex items-center gap-1">
                  {copied ? (
                    <span className="anim-pop flex items-center gap-1 text-xs font-bold text-green-600">
                      <Check className="w-3.5 h-3.5" /> Copiado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-600 group-hover:text-red-600 transition-colors">
                      <Copy className="w-3.5 h-3.5" /> Copiar
                    </span>
                  )}
                  </Swap>
                </div>
              </button>

              {/* Banner AdSense — se muestra mientras el usuario decide */}
              <div className="rounded-xl overflow-hidden">
                <AdBanner slotId={AD_SLOTS.rectangle} format="rectangle" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
