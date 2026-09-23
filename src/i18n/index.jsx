import { createContext, useContext, useEffect, useState } from "react";
import { enSiteData } from "../data/siteData";
import { bnSiteData, BN_MESSAGES } from "../data/bn";

const STORAGE_KEY = "garibook_language";
const WRAPPER_CLASS = { en: "english-font-wrapper", bn: "bangla-font-wrapper" };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "bn" ? "bn" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  const setLanguage = (next) => {
    if (next === "en" || next === "bn") setLang(next);
  };
  const toggle = () => setLang((prev) => (prev === "en" ? "bn" : "en"));

  const t = (str) => (lang === "bn" && BN_MESSAGES[str] != null ? BN_MESSAGES[str] : str);

  const value = {
    lang,
    setLanguage,
    toggle,
    t,
    wrapperClass: WRAPPER_CLASS[lang],
    data: lang === "bn" ? bnSiteData : enSiteData,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}