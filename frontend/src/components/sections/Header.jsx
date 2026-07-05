import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";
import { scrollToSection } from "@/utils/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang, languages } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const wasMobileOpen = mobileOpen;
    setMobileOpen(false);
    scrollToSection(href, { delay: wasMobileOpen ? 300 : 0 });
  };

  const navItems = clinicConfig.navigation.map((item, i) => ({
    ...item,
    label: Object.values(t.nav)[i] || item.label,
  }));

  return (
    <header
      data-testid="sticky-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/90 border-b border-slate-100 shadow-sm"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-2"
            data-testid="clinic-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-clinic-primary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">MC</span>
            </div>
            <span className="font-heading font-bold text-lg text-clinic-primary hidden sm:block">
              {clinicConfig.name}
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-sm font-body font-medium text-clinic-text-secondary hover:text-clinic-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-clinic-border text-clinic-text font-body gap-1.5 hover:bg-clinic-surface h-9 px-3"
                  data-testid="language-switcher-btn"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{lang.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px]">
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`font-body text-sm cursor-pointer ${lang === l.code ? "bg-clinic-surface font-semibold" : ""}`}
                    data-testid={`lang-option-${l.code}`}
                  >
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href={`tel:${clinicConfig.contact.phone.replace(/\s/g, "")}`} data-testid="header-call-btn">
              <Button variant="outline" className="rounded-full border-clinic-border text-clinic-text font-body gap-2 hover:bg-clinic-surface">
                <Phone className="w-4 h-4" />
                {t.header.callNow}
              </Button>
            </a>
            <Button
              className="rounded-full bg-clinic-secondary hover:bg-clinic-secondary-hover text-white font-body font-semibold"
              onClick={() => scrollTo("#appointment")}
              data-testid="header-book-btn"
            >
              {t.header.bookAppointment}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="mobile-language-btn">
                  <Globe className="w-5 h-5 text-clinic-text" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px]">
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`font-body text-sm cursor-pointer ${lang === l.code ? "bg-clinic-surface font-semibold" : ""}`}
                  >
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="p-2 text-clinic-text"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            data-testid="mobile-menu"
          >
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="block px-4 py-3 rounded-xl text-clinic-text-secondary font-body font-medium hover:bg-clinic-surface transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Button
                  className="w-full rounded-full bg-clinic-secondary hover:bg-clinic-secondary-hover text-white font-body font-semibold"
                  onClick={() => scrollTo("#appointment")}
                >
                  {t.header.bookAppointment}
                </Button>
                <a href={`tel:${clinicConfig.contact.phone.replace(/\s/g, "")}`}>
                  <Button variant="outline" className="w-full rounded-full border-clinic-border font-body gap-2">
                    <Phone className="w-4 h-4" /> {t.header.callNow}
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
