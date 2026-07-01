import { buildWhatsAppLink } from "@/config/site";

export function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink(
        "Olá! Vim pelo site e quero saber mais sobre o DigestiCão."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.65 4.56 1.78 6.45L4 29l7.7-1.75a12 12 0 0 0 4.32.8h.01c6.62 0 12.01-5.4 12.01-12.03C28.04 8.4 22.65 3 16.02 3Zm7.05 17.13c-.3.84-1.7 1.6-2.36 1.7-.6.09-1.36.13-2.2-.14-.5-.16-1.15-.37-1.98-.72-3.49-1.5-5.77-5-5.95-5.24-.17-.24-1.42-1.88-1.42-3.58 0-1.7.9-2.54 1.21-2.89.31-.34.68-.43.9-.43h.65c.21 0 .49-.08.77.58.3.7.99 2.4 1.07 2.58.09.17.14.37.03.6-.11.24-.17.38-.34.58-.17.2-.36.44-.51.6-.17.17-.35.36-.15.7.2.35.9 1.48 1.93 2.4 1.33 1.18 2.44 1.55 2.79 1.72.35.17.55.15.76-.09.21-.24.87-1.01 1.1-1.36.24-.35.47-.28.79-.17.32.11 2.02.95 2.37 1.12.35.17.58.26.66.4.09.15.09.85-.22 1.69Z" />
      </svg>
    </a>
  );
}
