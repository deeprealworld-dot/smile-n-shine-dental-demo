import { MessageCircle, Phone } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function FloatingButtons() {
  const { contact } = clinicConfig;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        data-testid="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${contact.phone.replace(/\s/g, "")}`}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-clinic-primary hover:bg-clinic-primary-hover text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 lg:hidden"
        data-testid="floating-call-btn"
        aria-label="Call clinic"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
