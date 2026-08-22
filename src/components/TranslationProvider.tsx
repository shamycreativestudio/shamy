"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, LangKey } from "@/data/translations";

type TranslationContextType = {
  lang: string;
  toggleLang: () => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("shamy_lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    document.body.classList.add("lang-changing");
    setTimeout(() => {
      const newLang = lang === "es" ? "en" : "es";
      setLang(newLang);
      localStorage.setItem("shamy_lang", newLang);
      setTimeout(() => {
        document.body.classList.remove("lang-changing");
      }, 50);
    }, 350);
  };

  const t = (key: string): string => {
    return translations[lang as LangKey]?.[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
