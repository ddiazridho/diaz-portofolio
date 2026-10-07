"use client";

import { useThemeLanguage } from "../context/ThemeLanguageContext";

export default function ThemeLanguageToggle() {
  const { theme, toggleTheme, language, toggleLanguage } = useThemeLanguage();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {/* Theme Changer */}
      <button
        type="button"
        id="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="p-1.5 text-[#111] dark:text-[#F8FAFC] hover:text-[#0047AB] dark:hover:text-[#38BDF8] transition-all duration-150 bg-transparent border-0 shadow-none cursor-pointer flex items-center justify-center focus:outline-none hover:scale-110 active:scale-95"
      >
        {isDark ? (
          /* Sun Icon (shown in Dark mode) */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#FACC15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] transition-transform duration-300 rotate-0 hover:rotate-45"
            aria-hidden="true"
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
        ) : (
          /* Moon Icon (shown in Light mode) */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 hover:-rotate-12"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* Translator / Language Toggle */}
      <button
        type="button"
        id="lang-toggle-btn"
        onClick={toggleLanguage}
        aria-label={`Toggle language (currently ${language.toUpperCase()})`}
        title={`Toggle language (currently ${language.toUpperCase()})`}
        className="flex items-center gap-1 p-1.5 text-[#111] dark:text-[#F8FAFC] hover:text-[#0047AB] dark:hover:text-[#38BDF8] transition-all duration-150 bg-transparent border-0 shadow-none cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
      >
        {/* Globe / Translate Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="text-xs font-black leading-none select-none tracking-wider">
          {language.toUpperCase()}
        </span>
      </button>
    </div>
  );
}
