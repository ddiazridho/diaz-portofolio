"use client";

export default function ThemeLanguageToggle() {
  return (
    <div className="flex items-center gap-2">
      {/* Theme Changer */}
      <button
        type="button"
        id="theme-toggle-btn"
        aria-label="Toggle theme"
        title="Toggle theme"
        className="p-1.5 text-[#111] hover:text-[#0047AB] transition-colors bg-transparent border-0 shadow-none cursor-pointer flex items-center justify-center focus:outline-none"
      >
        {/* Moon Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>

      {/* Translator / Language Toggle */}
      <button
        type="button"
        id="lang-toggle-btn"
        aria-label="Toggle language"
        title="Toggle language"
        className="flex items-center gap-1 p-1.5 text-[#111] hover:text-[#0047AB] transition-colors bg-transparent border-0 shadow-none cursor-pointer focus:outline-none"
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
        <span className="text-xs font-bold leading-none select-none">EN</span>
      </button>
    </div>
  );
}
