"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { translations, LangKey } from "@/data/translations";

type Lang = LangKey;

type TranslationContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const LANG_COOKIE = "shamy_lang";

function persistLang(lang: Lang) {
  document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export function TranslationProvider({
  children,
  initialLang = "es",
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const langRef = useRef(lang);
  const busyRef = useRef(false);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  // Cleanup de timeouts pendientes al desmontar
  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, []);

  const toggleLang = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    document.body.classList.add("lang-changing");

    const t1 = window.setTimeout(() => {
      const next: Lang = langRef.current === "es" ? "en" : "es";
      setLang(next);
      persistLang(next);
      document.documentElement.lang = next;

      const t2 = window.setTimeout(() => {
        document.body.classList.remove("lang-changing");
        busyRef.current = false;
      }, 50);
      timeoutsRef.current.push(t2);
    }, 350);
    timeoutsRef.current.push(t1);
  }, []);

  const t = useCallback(
    (key: string): string => translations[lang]?.[key] || key,
    [lang]
  );

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t]);

  return (
    <TranslationContext.Provider value={value}>
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
