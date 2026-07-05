import { motion } from "framer-motion";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutClinic() {
  const { about } = clinicConfig;
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative">
              <img src={about.image} alt="Smile N Shine Clinic" className="rounded-3xl w-full h-[350px] sm:h-[420px] object-cover shadow-[0_20px_60px_rgb(0,0,0,0.08)]" loading="lazy" data-testid="about-image" />
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-clinic-primary rounded-2xl p-5 text-white shadow-lg">
                <p className="font-heading font-bold text-3xl">12+</p>
                <p className="font-body text-sm text-white/80">{t.about.yearsOfTrust}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.about.overline}</span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.about.title}</h2>
            <p className="mt-6 text-base text-clinic-text-secondary font-body leading-relaxed">{t.about.description}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-clinic-secondary mt-2 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-clinic-text">{t.about.missionLabel}</p>
                  <p className="text-sm text-clinic-text-secondary font-body">{t.about.mission}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-clinic-secondary mt-2 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-clinic-text">{t.about.visionLabel}</p>
                  <p className="text-sm text-clinic-text-secondary font-body">{t.about.vision}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.about.stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="text-center p-3 rounded-xl bg-clinic-surface border border-clinic-border" data-testid={`about-stat-${i}`}>
                  <p className="font-heading font-bold text-xl text-clinic-primary">{stat.value}</p>
                  <p className="text-xs text-clinic-text-secondary font-body mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
