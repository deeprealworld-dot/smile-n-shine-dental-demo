import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export default function ContactSection() {
  const { contact } = clinicConfig;
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.contact.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.contact.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="flex items-start gap-4" data-testid="contact-address">
              <div className="w-11 h-11 rounded-xl bg-clinic-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-clinic-primary" /></div>
              <div>
                <p className="font-heading font-semibold text-clinic-text">{t.contact.address}</p>
                <p className="text-sm text-clinic-text-secondary font-body mt-1">{contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-phone">
              <div className="w-11 h-11 rounded-xl bg-clinic-primary/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-clinic-primary" /></div>
              <div>
                <p className="font-heading font-semibold text-clinic-text">{t.contact.phone}</p>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-sm text-clinic-secondary font-body mt-1 hover:underline block">{contact.phone}</a>
                <a href={`tel:${contact.emergency.replace(/\s/g, "")}`} className="text-sm text-clinic-text-secondary font-body hover:underline block">{t.hero.emergency}: {contact.emergency}</a>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-email">
              <div className="w-11 h-11 rounded-xl bg-clinic-primary/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-clinic-primary" /></div>
              <div>
                <p className="font-heading font-semibold text-clinic-text">{t.contact.email}</p>
                <a href={`mailto:${contact.email}`} className="text-sm text-clinic-secondary font-body mt-1 hover:underline block">{contact.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-whatsapp">
              <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0"><MessageCircle className="w-5 h-5 text-green-600" /></div>
              <div>
                <p className="font-heading font-semibold text-clinic-text">{t.contact.whatsapp}</p>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 font-body mt-1 hover:underline block">{t.contact.chatWhatsApp}</a>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-hours">
              <div className="w-11 h-11 rounded-xl bg-clinic-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-clinic-primary" /></div>
              <div>
                <p className="font-heading font-semibold text-clinic-text">{t.contact.workingHours}</p>
                <div className="mt-2 space-y-1">
                  {t.contact.days.map((wh) => (
                    <div key={wh.day} className="flex gap-2 text-sm font-body">
                      <span className="font-medium text-clinic-text min-w-[130px]">{wh.day}</span>
                      <span className="text-clinic-text-secondary">{wh.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl overflow-hidden border border-clinic-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full min-h-[400px]">
              <iframe src={contact.mapEmbedUrl} width="100%" height="100%" style={{ border: 0, minHeight: 400 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Smile N Shine Clinic Location" data-testid="google-map-embed" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
