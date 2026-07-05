import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/utils/scroll";

export default function Footer() {
  const { contact, social, name } = clinicConfig;
  const { t } = useLanguage();

  const scrollTo = (href) => scrollToSection(href);

  const navItems = clinicConfig.navigation.map((item, i) => ({
    ...item,
    label: Object.values(t.nav)[i] || item.label,
  }));

  return (
    <footer className="bg-clinic-primary text-white" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">MC</span>
              </div>
              <span className="font-heading font-bold text-lg">{name}</span>
            </div>
            <p className="text-white/70 text-sm font-body leading-relaxed">{t.footer.description}</p>
            <div className="flex items-center gap-3 mt-6">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook" data-testid="footer-social-facebook"><Facebook className="w-4 h-4" /></a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram" data-testid="footer-social-instagram"><Instagram className="w-4 h-4" /></a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Twitter" data-testid="footer-social-twitter"><Twitter className="w-4 h-4" /></a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="YouTube" data-testid="footer-social-youtube"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {navItems.map((nav) => (
                <li key={nav.href}><a href={nav.href} onClick={(e) => { e.preventDefault(); scrollTo(nav.href); }} className="text-white/70 text-sm font-body hover:text-white transition-colors">{nav.label}</a></li>
              ))}
              <li><a href="#appointment" onClick={(e) => { e.preventDefault(); scrollTo("#appointment"); }} className="text-white/70 text-sm font-body hover:text-white transition-colors">{t.footer.bookAppointment}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2.5">
              {t.services.items.slice(0, 6).map((s) => (
                <li key={s.title}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("#services"); }} className="text-white/70 text-sm font-body hover:text-white transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" /><p className="text-white/70 text-sm font-body">{contact.address}</p></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-white/50 shrink-0" /><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-white/70 text-sm font-body hover:text-white transition-colors">{contact.phone}</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-white/50 shrink-0" /><a href={`mailto:${contact.email}`} className="text-white/70 text-sm font-body hover:text-white transition-colors">{contact.email}</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" data-testid="footer-copyright">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body">&copy; {new Date().getFullYear()} {name}. {t.footer.copyright}</p>
          <p className="text-white/40 text-xs font-body">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
