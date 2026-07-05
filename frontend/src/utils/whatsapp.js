import clinicConfig from "@/data/clinicConfig";

/**
 * Generates the correct WhatsApp chat URL.
 * Uses https://wa.me/ which is the official WhatsApp Click-to-Chat format.
 * 
 * IMPORTANT: Replace the placeholder number (919876543210) in clinicConfig.js
 * with your real WhatsApp Business number for this to work.
 */
export function getWhatsAppUrl(customMessage) {
  const { whatsapp, whatsappMessage } = clinicConfig.contact;
  const message = customMessage || whatsappMessage || "";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsapp}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}
