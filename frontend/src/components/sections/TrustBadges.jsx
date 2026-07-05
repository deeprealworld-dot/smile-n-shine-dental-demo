import { motion } from "framer-motion";
import { Award, Clock, Monitor, Heart } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = { Award, Clock, Monitor, Heart };

export default function TrustBadges() {
  const { t } = useLanguage();

  return (
    <section className="bg-clinic-surface py-10 md:py-14 border-y border-clinic-border" data-testid="trust-badges-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {clinicConfig.trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon];
            const translated = t.trustBadges[i] || {};
            return (
              <motion.div
                key={badge.icon}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-3"
                data-testid={`trust-badge-${i}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-clinic-secondary/10 flex items-center justify-center">
                  {Icon && <Icon className="w-6 h-6 text-clinic-secondary" />}
                </div>
                <div>
                  <p className="font-heading font-bold text-clinic-primary text-lg">{translated.value}</p>
                  <p className="font-body text-sm text-clinic-text-secondary">{translated.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
