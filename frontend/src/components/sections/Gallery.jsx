import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 md:py-32 bg-clinic-surface" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.gallery.overline}</span>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-clinic-primary leading-[1.2] tracking-tight">{t.gallery.title}</h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>div]:mb-5">
          {clinicConfig.gallery.map((img, i) => (
            <motion.div key={img.src} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }} className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl" onClick={() => setLightbox(img)} data-testid={`gallery-image-${i}`}>
              <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-clinic-primary/0 group-hover:bg-clinic-primary/30 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-body font-semibold text-sm">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightbox(null)} data-testid="gallery-lightbox">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setLightbox(null)} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" data-testid="lightbox-close-btn" aria-label="Close lightbox"><X className="w-8 h-8" /></button>
              <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <p className="text-white/80 font-body text-center mt-4 text-sm">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
