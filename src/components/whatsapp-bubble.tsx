import { MessageCircle } from "lucide-react";

const WHATSAPP_HREF =
  "https://wa.me/34711292174?text=Hola%2C%20necesito%20ayuda%20con%20RecurreTuMulta.";

/** Burbuja de ayuda por WhatsApp, fija abajo a la derecha en toda la web. */
export default function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ayuda por WhatsApp"
      title="Ayuda por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/20 transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
