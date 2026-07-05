import { motion } from "framer-motion";
import { BadgeCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/utils/scroll";

export default function DoctorProfile() {
  const { doctor, contact } = clinicConfig;
  const { t } = useLanguage();

  const scrollTo = (id) => scrollToSection(id);

  return (
    <section id="doctor" className="py-20 md:py-32 bg-clinic-surface" data-testid="doctor-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.doctor.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.doctor.title}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-clinic-border overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 relative">
              <img src={doctor.image} alt={doctor.name} className="w-full h-[350px] md:h-full object-cover" loading="lazy" data-testid="doctor-image" />
            </div>
            <div className="md:col-span-3 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-2">
                <BadgeCheck className="w-5 h-5 text-clinic-secondary" />
                <span className="text-sm text-clinic-secondary font-body font-medium">{t.doctor.verified}</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-clinic-text" data-testid="doctor-name">{doctor.name}</h3>
              <p className="mt-1 text-clinic-text-secondary font-body" data-testid="doctor-qualification">{doctor.qualification}</p>
              <p className="mt-4 text-base text-clinic-text-secondary font-body leading-relaxed">{t.doctor.bio}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.doctor.specializations.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-clinic-secondary/10 text-clinic-secondary text-sm font-body font-medium">{s}</span>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                {t.doctor.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-clinic-primary shrink-0" />
                    <span className="text-sm font-body text-clinic-text-secondary">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-clinic-surface border border-clinic-border">
                  <Clock className="w-4 h-4 text-clinic-primary" />
                  <div>
                    <p className="text-xs text-clinic-text-secondary font-body">{t.doctor.morning}</p>
                    <p className="text-sm font-body font-semibold text-clinic-text">{doctor.timings.morning}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-clinic-surface border border-clinic-border">
                  <Clock className="w-4 h-4 text-clinic-primary" />
                  <div>
                    <p className="text-xs text-clinic-text-secondary font-body">{t.doctor.evening}</p>
                    <p className="text-sm font-body font-semibold text-clinic-text">{doctor.timings.evening}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button className="rounded-full bg-clinic-secondary hover:bg-clinic-secondary-hover text-white font-body font-semibold px-8" onClick={() => scrollTo("#appointment")} data-testid="doctor-consult-btn">{t.doctor.consultNow}</Button>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  <Button variant="outline" className="rounded-full border-clinic-border font-body gap-2 w-full sm:w-auto"><Clock className="w-4 h-4" /> {t.doctor.viewTimings}</Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
