import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/i18n/translations";

const LanguageContext = createContext();

const LANGUAGES = [
  { code: "en", label: "English", native: "EN" },
  { code: "hi", label: "Hindi", native: "HI" },
  { code: "mr", label: "Marathi", native: "MR" },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("clinic_lang") || "en";
    } catch {
      return "en";
    }
  });

  const changeLang = useCallback((code) => {
    setLang(code);
    try { localStorage.setItem("clinic_lang", code); } catch {}
    document.documentElement.lang = code;
  }, []);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
