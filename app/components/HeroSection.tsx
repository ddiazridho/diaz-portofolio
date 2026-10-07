"use client";

import { HiArrowTopRightOnSquare, HiEnvelope } from "react-icons/hi2";
import HeroPhoto from "./HeroPhoto";
import RotatingText from "./RotatingText";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

/** Inline SVG squiggle underline — hand-drawn yellow wave */
function SquiggleUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 380 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[340px] sm:max-w-[420px] mt-1.5 overflow-visible"
      preserveAspectRatio="none"
    >
      {/* Neubrutalist hard offset shadow */}
      <path
        d="M4 10 L 35 3 L 66 15 L 97 3 L 128 15 L 159 3 L 190 15 L 221 3 L 252 15 L 283 3 L 314 15 L 345 3 L 376 9"
        stroke="#111111"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2.5, 2.5)"
      />
      {/* Neubrutalist black outline */}
      <path
        d="M4 10 L 35 3 L 66 15 L 97 3 L 128 15 L 159 3 L 190 15 L 221 3 L 252 15 L 283 3 L 314 15 L 345 3 L 376 9"
        stroke="#111111"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Neubrutalist red accent core */}
      <path
        d="M4 10 L 35 3 L 66 15 L 97 3 L 128 15 L 159 3 L 190 15 L 221 3 L 252 15 L 283 3 L 314 15 L 345 3 L 376 9"
        stroke="#E23636"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  const { t } = useThemeLanguage();
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ paddingBottom: "1px" /* clear mobile bottom tab */ }}
    >
      {/* ── Main container ── */}
      <div className="section" style={{ paddingTop: "112px", paddingBottom: "36px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">

          {/* ══ PHOTO COLUMN — LEFT ══ */}
          <div
            className="lg:-mt-8 lg:col-span-5 flex justify-center lg:justify-start
              motion-safe:animate-[slideInLeft_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            <HeroPhoto src="/DIAZ PHOTO.png" />
          </div>

          {/* ══ TEXT COLUMN — RIGHT ══ */}
          <div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-0"
          >
            {/* 1. Status Eyebrow Badge
            <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[2.5px] border-[#111] bg-white text-[#111] font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0_#111] motion-safe:animate-[fadeUp_500ms_160ms_both]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C853] border border-[#111] animate-pulse" />
              <span>Available for Opportunities</span>
            </div> */}

            {/* 2. Name — single line & bold */}
            <div
              className="mb-3 motion-safe:animate-[fadeUp_500ms_240ms_both] w-full"
            >
              <h1
                className="font-black tracking-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                  }}
                  className="block text-2xl sm:text-3xl lg:text-3xl font-black text-[#111] dark:text-[#F8FAFC] -mb-1 lg:-mb-1 [-webkit-text-stroke:1px_#111] dark:[-webkit-text-stroke:1px_#F8FAFC]"
                >
                  {t.hero.im}
                </span>
                <span
                  className="block text-[#0047AB] dark:text-[#38BDF8] font-black leading-tight tracking-tight sm:whitespace-nowrap [-webkit-text-stroke:1px_#0047AB] dark:[-webkit-text-stroke:1px_#38BDF8]"
                  style={{
                    fontSize: "clamp(2rem, 5.2vw, 3.8rem)",
                    fontWeight: 900,
                  }}
                >
                  Diaz R. Yuristianto
                </span>
              </h1>
              {/* Squiggle under name */}
              <div className="flex justify-center lg:justify-start">
                {/* <SquiggleUnderline /> */}
              </div>
            </div>

            {/* 3. Rotating role (Focus card removed) */}
            <div className="mb-3.5 flex items-center justify-center lg:justify-start motion-safe:animate-[fadeUp_500ms_320ms_both]">
              <RotatingText />
            </div>

            {/* 4. Tagline — Neubrutalist Card */}
            <div
              className="w-full max-w-xl mb-6 p-3.5 sm:p-4 rounded-2xl border-[2.5px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] shadow-[4px_4px_0_#111] dark:shadow-[4px_4px_0_#0047AB] text-left motion-safe:animate-[fadeUp_500ms_400ms_both]"
            >
              <p
                className="text-[#374151] dark:text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed border-l-[3.5px] border-[#0047AB] dark:border-[#38BDF8] pl-3 italic"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {t.hero.tagline}
              </p>
            </div>

            {/* 5. CTA row */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3.5 mb-2
                motion-safe:animate-[fadeUp_500ms_480ms_both]"
            >
              {/* Primary - Look CV */}
              <a
                href="/Diaz%20Ridho%20Yuristianto_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-cv"
                className="flex items-center gap-2 h-11 px-6 rounded-full
                  bg-[#E23636] hover:bg-[#DC2626] dark:hover:bg-[#EF4444] border-[2.5px] border-[#111] dark:border-slate-200 font-black text-sm text-white
                  shadow-[4px_4px_0_#111] dark:shadow-[4px_4px_0_#FFFFFF]
                  transition-all duration-150
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] dark:hover:shadow-[6px_6px_0_#38BDF8]
                  active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <HiArrowTopRightOnSquare className="w-4 h-4 stroke-[1]" aria-hidden="true" />
                {t.hero.lookCv}
              </a>

              {/* Secondary - Kontak */}
              <a
                href="#contact"
                id="cta-kontak"
                className="flex items-center gap-2 h-11 px-6 rounded-full
                  bg-white dark:bg-[#121826] hover:bg-neutral-50 dark:hover:bg-[#182236] border-[2.5px] border-[#111] dark:border-slate-200 font-black text-sm text-[#111] dark:text-[#F8FAFC]
                  shadow-[4px_4px_0_#111] dark:shadow-[4px_4px_0_#0047AB]
                  transition-all duration-150
                  hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111] dark:hover:shadow-[6px_6px_0_#38BDF8]
                  active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <HiEnvelope className="w-4 h-4" aria-hidden="true" />
                {t.hero.contact}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
