import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/utils/scroll";

export default function HeroSection() {
  const { hero, contact } = clinicConfig;
  const { t } = useLanguage();

  const scrollTo = (id) => scrollToSection(id);

  return (
    <section id="home" className="relative pt-20 lg:pt-24 overflow-hidden bg-white" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clinic-surface border border-clinic-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-clinic-secondary animate-pulse-soft" />
              <span className="text-sm font-body font-medium text-clinic-text-secondary">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-clinic-primary leading-[1.1] tracking-tight"
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-base md:text-lg text-clinic-text-secondary font-body leading-relaxed max-w-lg"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="rounded-full bg-clinic-secondary hover:bg-clinic-secondary-hover text-white font-body font-semibold text-base px-8 h-12 gap-2"
                onClick={() => scrollTo("#appointment")}
                data-testid="hero-book-btn"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} data-testid="hero-call-btn">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-clinic-primary text-clinic-primary font-body font-semibold text-base px-8 h-12 gap-2 hover:bg-clinic-primary hover:text-white w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4" />
                  {t.header.callNow}
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-4 text-sm text-clinic-text-secondary font-body"
            >
              {t.hero.emergency}: <a href={`tel:${contact.emergency.replace(/\s/g, "")}`} className="font-semibold text-clinic-primary hover:underline" data-testid="hero-emergency-number">{contact.emergency}</a>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgb(15,76,129,0.15)]">
              <img src={hero.image} alt="Mumbai Care Clinic" className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover" loading="eager" data-testid="hero-image" />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-primary/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 border border-clinic-border"
              data-testid="hero-floating-badge"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-clinic-secondary/10 flex items-center justify-center">
                  <span className="text-clinic-secondary font-heading font-bold text-lg">5K+</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-clinic-text text-sm">{t.hero.happyPatients}</p>
                  <p className="text-xs text-clinic-text-secondary font-body">{t.hero.andCounting}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
