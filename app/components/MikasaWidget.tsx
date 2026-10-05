"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   MikasaWidget
   – Chevron anchor fixed below the navbar pill
   – Click → Mikasa drops down on her ODM wire with a pendulum swing
   – Two pill buttons beneath her: theme toggle & language toggle
   ───────────────────────────────────────────────────────────── */

interface MikasaWidgetProps {
  /** Path to the pixel-art image (default: /MIKASA PIXEL.png) */
  imageSrc?: string;
  /** Called when theme changes. Receives "dark" | "light". */
  onToggleTheme?: (theme: "dark" | "light") => void;
  /** Called when language changes. Receives "EN" | "ID". */
  onLanguageChange?: (lang: "EN" | "ID") => void;
}

export default function MikasaWidget({
  imageSrc = "/MIKASA PIXEL.png",
  onToggleTheme,
  onLanguageChange,
}: MikasaWidgetProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [lang, setLang] = useState<"EN" | "ID">("EN");

  /* Persist theme on <html> so global CSS vars can pick it up */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    onToggleTheme?.(next);
  };

  const handleLang = () => {
    const next = lang === "EN" ? "ID" : "EN";
    setLang(next);
    onLanguageChange?.(next);
  };

  return (
    <>
      <style>{`
        /* ── wire drop-in ── */
        @keyframes mikasa-drop {
          0%   { transform: translateY(-120%) scaleY(0.6); opacity: 0; }
          60%  { transform: translateY(6px)   scaleY(1.02); opacity: 1; }
          80%  { transform: translateY(-3px)  scaleY(0.99); }
          100% { transform: translateY(0px)   scaleY(1);    opacity: 1; }
        }

        /* ── pendulum swing ── */
        @keyframes mikasa-swing {
          0%   { transform: rotate(-10deg); }
          50%  { transform: rotate(10deg);  }
          100% { transform: rotate(-10deg); }
        }

        /* ── chevron bounce hint ── */
        @keyframes chevron-hint {
          0%, 100% { transform: translateY(0);   }
          50%       { transform: translateY(4px); }
        }

        .mikasa-chevron {
          animation: chevron-hint 1.8s ease-in-out infinite;
          cursor: pointer;
        }
        .mikasa-chevron:hover { animation: none; transform: translateY(2px); }

        .mikasa-drop-enter {
          animation: mikasa-drop 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mikasa-swing {
          transform-origin: top center;
          animation: mikasa-swing 2.4s ease-in-out infinite;
        }

        .mikasa-panel {
          transform-origin: top center;
          transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .mikasa-panel.hidden-panel {
          opacity: 0;
          pointer-events: none;
          transform: scaleY(0.7) translateY(-20px);
        }
        .mikasa-panel.visible-panel {
          opacity: 1;
          pointer-events: all;
          transform: scaleY(1) translateY(0);
        }
      `}</style>

      {/*
        Anchor: fixed, right-aligned, flush under the navbar pill.
        Navbar pill: top-4 (16px) + h-14 (56px) = 72px bottom edge.
      */}
      <div
        className="fixed right-83 z-40 flex flex-col items-center"
        style={{ top: "72px" }}
        aria-label="Mikasa widget"
      >

        {/* ── Chevron toggle button ── */}
        <button
          id="mikasa-toggle-btn"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Hide Mikasa widget" : "Show Mikasa widget"}
          className={`mikasa-chevron flex items-center justify-center w-8 h-5 rounded-b-full
            bg-white border-2 border-t-0 border-[#111]
            shadow-[0_4px_10px_rgba(0,0,0,0.15)]
            transition-transform duration-200 hover:scale-110
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]`}
          style={{ marginTop: open ? "-2px" : "0" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 10"
            width="12"
            height="8"
            fill="none"
            stroke="#111"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="1,1 8,9 15,1" />
          </svg>
        </button>

        {/* ── Drop-down panel ── */}
        <div
          className={`mikasa-panel flex flex-col items-center ${open ? "visible-panel" : "hidden-panel"}`}
        >
          {/* Wire from chevron to mascot */}
          <div
            style={{
              width: "2px",
              height: "28px",
              background: "#333",
              flexShrink: 0,
            }}
          />

          {/* Mikasa image — pendulum pivot is top-center of this element */}
          <div
            className={open ? "mikasa-drop-enter" : ""}
            key={open ? "open" : "closed"}   /* re-mount to re-trigger drop anim */
          >
            <div className={open ? "mikasa-swing" : ""}>
              <Image
                src={imageSrc}
                alt="Mikasa Ackerman pixel art"
                width={96}
                height={96}
                priority
                style={{
                  imageRendering: "pixelated",
                  display: "block",
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* ── Action pills ── */}
          <div className="flex items-center gap-2 mt-3">
            {/* Theme toggle */}
            <button
              id="mikasa-theme-btn"
              onClick={handleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={theme === "light" ? "Switch to Dark mode" : "Switch to Light mode"}
              className="flex items-center gap-1.5 h-8 px-3 rounded-full
                bg-white/80 backdrop-blur-md
                border-2 border-[#111]
                shadow-[2px_2px_0_#111]
                text-xs font-bold
                transition-all duration-150
                hover:-translate-x-px hover:-translate-y-px
                hover:shadow-[3px_3px_0_#111]
                active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              {theme === "light" ? (
                /* Moon icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              <span className="sr-only">{theme === "light" ? "Dark" : "Light"}</span>
            </button>

            {/* Language toggle */}
            <button
              id="mikasa-lang-btn"
              onClick={handleLang}
              aria-label={`Switch language to ${lang === "EN" ? "Indonesian" : "English"}`}
              title={lang === "EN" ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
              className="flex items-center gap-1 h-8 px-3 rounded-full
                bg-white/80 backdrop-blur-md
                border-2 border-[#111]
                shadow-[2px_2px_0_#111]
                text-[11px] font-black tracking-wide
                transition-all duration-150
                hover:-translate-x-px hover:-translate-y-px
                hover:shadow-[3px_3px_0_#111]
                active:translate-x-0 active:translate-y-0 active:shadow-none"
              style={{ background: lang === "ID" ? "#FFD600" : undefined }}
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
