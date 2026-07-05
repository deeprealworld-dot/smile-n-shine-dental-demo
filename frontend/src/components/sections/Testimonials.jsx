import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[current];

  return (
    <section className="py-20 md:py-32 bg-clinic-surface-teal" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.testimonials.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.testimonials.title}</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }} className="bg-white rounded-2xl border border-clinic-border p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center" data-testid={`testimonial-card-${current}`}>
              <Quote className="w-8 h-8 text-clinic-secondary/30 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-5 h-5 ${j < item.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                ))}
              </div>
              <p className="text-base md:text-lg text-clinic-text font-body leading-relaxed italic">"{item.review}"</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clinic-primary flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">{item.initials}</span>
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-clinic-text text-sm" data-testid={`testimonial-name-${current}`}>{item.name}</p>
                  <p className="text-xs text-clinic-text-secondary font-body">{t.testimonials.patient}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-clinic-border bg-white hover:bg-clinic-surface flex items-center justify-center transition-colors" data-testid="testimonial-prev-btn" aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5 text-clinic-text" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-clinic-secondary w-6" : "bg-clinic-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-clinic-border bg-white hover:bg-clinic-surface flex items-center justify-center transition-colors" data-testid="testimonial-next-btn" aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5 text-clinic-text" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
