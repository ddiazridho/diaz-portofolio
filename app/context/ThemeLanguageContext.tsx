"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "EN" | "ID";

interface ThemeLanguageContextType {
  theme: Theme;
  lang: Language;
  toggleTheme: () => void;
  toggleLang: () => void;
  setTheme: (theme: Theme) => void;
  setLang: (lang: Language) => void;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export function ThemeLanguageProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Language>("EN");

  useEffect(() => {
    // Read initial theme and language from localStorage or defaults
    try {
      const savedTheme = localStorage.getItem("portfolio_theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }

      const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang === "EN" || savedLang === "ID") {
        setLangState(savedLang);
        document.documentElement.setAttribute("lang", savedLang === "ID" ? "id" : "en");
      }
    } catch {
      // In case localStorage is restricted
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setThemeState(next);
    try {
      localStorage.setItem("portfolio_theme", next);
    } catch {}
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const toggleLang = () => {
    const next = lang === "EN" ? "ID" : "EN";
    setLangState(next);
    try {
      localStorage.setItem("portfolio_lang", next);
    } catch {}
    document.documentElement.setAttribute("lang", next === "ID" ? "id" : "en");
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("portfolio_theme", t);
    } catch {}
    document.documentElement.setAttribute("data-theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("portfolio_lang", l);
    } catch {}
    document.documentElement.setAttribute("lang", l === "ID" ? "id" : "en");
  };

  return (
    <ThemeLanguageContext.Provider
      value={{ theme, lang, toggleTheme, toggleLang, setTheme, setLang }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error("useThemeLanguage must be used within a ThemeLanguageProvider");
  }
  return context;
}
