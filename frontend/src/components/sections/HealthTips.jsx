import { motion } from "framer-motion";
import { Activity, Leaf, HeartPulse, CloudRain, ArrowRight } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = { Activity, Leaf, HeartPulse, CloudRain };

export default function HealthTips() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white" data-testid="health-tips-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.healthTips.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.healthTips.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicConfig.healthTips.map((tip, i) => {
            const Icon = iconMap[tip.icon];
            const translated = t.healthTips.items[i] || {};
            return (
              <motion.article key={tip.icon} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="group bg-clinic-surface rounded-2xl border border-clinic-border p-6 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300" data-testid={`health-tip-${i}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-clinic-secondary/10 flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-clinic-secondary" />}
                  </div>
                  <span className="text-xs font-body font-bold tracking-wider text-clinic-secondary uppercase">{translated.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-clinic-text mb-2">{translated.title}</h3>
                <p className="text-sm text-clinic-text-secondary font-body leading-relaxed">{translated.excerpt}</p>
                <button className="mt-4 text-sm font-body font-semibold text-clinic-primary hover:text-clinic-secondary transition-colors inline-flex items-center gap-1">
                  {t.healthTips.readMore}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
