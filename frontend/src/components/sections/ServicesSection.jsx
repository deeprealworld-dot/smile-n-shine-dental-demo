import { motion } from "framer-motion";
import { Stethoscope, Activity, HeartPulse, ClipboardCheck, Syringe, ShieldCheck } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = { Stethoscope, Activity, HeartPulse, ClipboardCheck, Syringe, ShieldCheck };

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-32 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.services.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.services.title}</h2>
          <p className="mt-4 text-base text-clinic-text-secondary font-body max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const translated = t.services.items[i] || {};
            return (
              <motion.div key={service.icon} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="group bg-white rounded-2xl border border-clinic-border p-8 md:p-10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300" data-testid={`service-card-${i}`}>
                <div className="w-14 h-14 rounded-2xl bg-clinic-secondary/10 flex items-center justify-center mb-6 group-hover:bg-clinic-secondary/20 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-clinic-secondary" />}
                </div>
                <h3 className="font-heading font-semibold text-xl text-clinic-text mb-3">{translated.title}</h3>
                <p className="text-sm text-clinic-text-secondary font-body leading-relaxed">{translated.description}</p>
                <button className="mt-5 text-sm font-body font-semibold text-clinic-primary hover:text-clinic-secondary transition-colors inline-flex items-center gap-1" data-testid={`service-learn-more-${i}`}>
                  {t.services.learnMore}
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
