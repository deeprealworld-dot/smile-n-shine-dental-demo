import { motion } from "framer-motion";
import { UserCheck, MapPin, IndianRupee, HeartHandshake, Timer } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = { UserCheck, MapPin, IndianRupee, HeartHandshake, Timer };

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-white" data-testid="why-choose-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.whyChoose.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.whyChoose.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicConfig.whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            const translated = t.whyChoose.items[i] || {};
            const isWide = i === 0 || i === 3;
            return (
              <motion.div key={item.icon} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className={`group rounded-2xl border border-clinic-border p-8 md:p-10 bg-clinic-surface hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ${isWide ? "lg:col-span-2" : ""}`} data-testid={`why-choose-card-${i}`}>
                <div className="w-12 h-12 rounded-2xl bg-clinic-primary/10 flex items-center justify-center mb-5 group-hover:bg-clinic-secondary/10 transition-colors">
                  {Icon && <Icon className="w-6 h-6 text-clinic-primary group-hover:text-clinic-secondary transition-colors" />}
                </div>
                <h3 className="font-heading font-semibold text-xl text-clinic-text mb-2">{translated.title}</h3>
                <p className="text-sm text-clinic-text-secondary font-body leading-relaxed">{translated.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
