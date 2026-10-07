"use client";

import { useThemeLanguage } from "../context/ThemeLanguageContext";

interface ThemeLanguageToggleProps {
  className?: string;
}

export default function ThemeLanguageToggle({
  className = "",
}: ThemeLanguageToggleProps) {
  const { theme, lang, toggleTheme, toggleLang } = useThemeLanguage();

  return (
    <div
      className={`
        inline-flex items-center gap-1.5 p-1
        bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-md
        rounded-full border-2 border-[#111] dark:border-[#EEEEEE]
        shadow-[3px_3px_0_#111] dark:shadow-[3px_3px_0_#EEEEEE]
        transition-all duration-200
        ${className}
      `}
      aria-label="Theme and Language controls"
    >
      {/* Theme Toggle */}
      <button
        type="button"
        id="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={theme === "light" ? "Switch to Dark mode" : "Switch to Light mode"}
        className="
          flex items-center justify-center w-8 h-8 rounded-full
          bg-white/95 dark:bg-[#2A2A2A]
          border-2 border-[#111] dark:border-[#EEEEEE]
          shadow-[1.5px_1.5px_0_#111] dark:shadow-[1.5px_1.5px_0_#EEEEEE]
          text-[#111] dark:text-[#F3F4F6]
          transition-all duration-150
          hover:-translate-x-px hover:-translate-y-px hover:shadow-[2.5px_2.5px_0_#111] dark:hover:shadow-[2.5px_2.5px_0_#EEEEEE]
          active:translate-x-0 active:translate-y-0 active:shadow-none
        "
      >
        {theme === "light" ? (
          /* Moon icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          /* Sun icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#FDB813]"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
        <span className="sr-only">{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </button>

      {/* Language Toggle (Translator) */}
      <button
        type="button"
        id="lang-toggle-btn"
        onClick={toggleLang}
        aria-label={`Switch language to ${lang === "EN" ? "Indonesian" : "English"}`}
        title={lang === "EN" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
        className={`
          flex items-center justify-center h-8 px-2.5 rounded-full
          border-2 border-[#111] dark:border-[#EEEEEE]
          shadow-[1.5px_1.5px_0_#111] dark:shadow-[1.5px_1.5px_0_#EEEEEE]
          text-[11px] font-black tracking-wide
          transition-all duration-150
          hover:-translate-x-px hover:-translate-y-px hover:shadow-[2.5px_2.5px_0_#111] dark:hover:shadow-[2.5px_2.5px_0_#EEEEEE]
          active:translate-x-0 active:translate-y-0 active:shadow-none
          ${
            lang === "ID"
              ? "bg-[#FDB813] text-[#111]"
              : "bg-[#0047AB] text-white"
          }
        `}
      >
        <span>{lang}</span>
      </button>
    </div>
  );
}
