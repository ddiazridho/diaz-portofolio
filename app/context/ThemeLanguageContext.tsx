"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Translations } from "../data/translations";

type Theme = "light" | "dark";
type Language = "en" | "id";

interface ThemeLanguageContextType {
  theme: Theme;
  language: Language;
  t: Translations;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(
  undefined
);

export function ThemeLanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Initialize Theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : systemPrefersDark
        ? "dark"
        : "light";

    setThemeState(initialTheme);
    applyThemeClass(initialTheme);

    // 2. Initialize Language from localStorage
    const savedLang = localStorage.getItem("lang") as Language | null;
    if (savedLang === "en" || savedLang === "id") {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      document.documentElement.lang = "en";
    }

    setMounted(true);
  }, []);

  const applyThemeClass = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeClass(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "en" ? "id" : "en";
    setLanguage(nextLang);
  };

  const t = translations[language] || translations.en;

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        language,
        t,
        toggleTheme,
        setTheme,
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error(
      "useThemeLanguage must be used within a ThemeLanguageProvider"
    );
  }
  return context;
}

