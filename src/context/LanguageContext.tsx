"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Language } from "@/types";
import { pt, Dictionary } from "@/data/i18n/pt";
import { en } from "@/data/i18n/en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
  toggleLanguage: () => void;
}

const dictionaries: Record<Language, Dictionary> = {
  pt,
  en,
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = "pt",
}: {
  children: React.ReactNode;
  initialLocale?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const language: Language = initialLocale;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }
    try {
      localStorage.setItem("preferred-language", language);
    } catch {}
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    try {
      localStorage.setItem("preferred-language", lang);
    } catch {}

    if (pathname) {
      const segments = pathname.split("/");
      if (segments[1] === "pt" || segments[1] === "en") {
        segments[1] = lang;
        router.push(segments.join("/") || `/${lang}`);
      } else {
        router.push(`/${lang}`);
      }
    } else {
      router.push(`/${lang}`);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const t = dictionaries[language] || dictionaries.pt;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
