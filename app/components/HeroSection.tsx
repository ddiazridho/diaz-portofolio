"use client";

import { HiArrowRight, HiEnvelope } from "react-icons/hi2";
import HeroPhoto from "./HeroPhoto";
import RotatingText from "./RotatingText";
import StatsStrip from "./StatsStrip";

/** Inline SVG squiggle underline — hand-drawn yellow wave */
function SquiggleUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[260px] mt-1"
      preserveAspectRatio="none"
    >
      <path
        d="M4 10 C30 3, 60 17, 90 10 S150 3, 180 10 S230 17, 256 10"
        stroke="#FFD600"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Eyebrow role chip */
function RoleChip({
  label,
  tintBg,
  tintText,
}: {
  label: string;
  tintBg: string;
  tintText: string;
}) {
  return (
    <span
      className="rounded-full border-2 border-[#111] px-3 py-1 text-xs font-bold uppercase tracking-wide"
      style={{ background: tintBg, color: tintText }}
    >
      {label}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ paddingBottom: "1px" /* clear mobile bottom tab */ }}
    >
      {/* ── Background blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 w-[480px] h-[480px] rounded-full blur-3xl -z-10"
        style={{ background: "rgba(26,115,232,0.08)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-16 w-[320px] h-[320px] rounded-full blur-3xl -z-10"
        style={{ background: "rgba(255,214,0,0.12)" }}
      />

      {/* ── Main container ── */}
      <div className="section" style={{ paddingTop: "88px", paddingBottom: "32px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-10">

          {/* ══ PHOTO COLUMN — LEFT ══ */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-start
              motion-safe:animate-[slideInLeft_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            <HeroPhoto src="/DIAZ PHOTO.png" />
          </div>

          {/* ══ TEXT COLUMN — RIGHT ══ */}
          <div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-0"
          >
            {/* 1. Eyebrow chips */}


            {/* 2. Greeting */}


            {/* 3. Name — two stacked lines */}
            <div
              className="mb-2 motion-safe:animate-[fadeUp_500ms_240ms_both]"
            >
              <h1
                className="font-extrabold leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(2.6rem, 6vw, 4rem)",
                }}
              >
                <span className="block text-[#111]">I'm</span>
                <span className="block">
                  <span style={{ color: "#1A73E8" }}>Diaz Ridho Yuristianto</span>
                  <span style={{ color: "#FFD600" }}>.</span>
                </span>
              </h1>
              {/* Squiggle under "Ridho" */}
              <div className="flex justify-center lg:justify-start">
                <SquiggleUnderline />
              </div>
            </div>

            {/* 4. Rotating role */}
            <div className="mb-3 motion-safe:animate-[fadeUp_500ms_320ms_both]">
              <RotatingText />
            </div>

            {/* 5. Tagline */}
            <p
              className="italic text-neutral-700 text-sm max-w-xl mb-4 border-l-4 border-[#1A73E8] pl-4 text-left
                motion-safe:animate-[fadeUp_500ms_400ms_both]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              "Membangun produk digital yang cepat, intuitif, dan berdampak nyata."
            </p>

            {/* 6. CTA row */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4
                motion-safe:animate-[fadeUp_500ms_480ms_both]"
            >
              {/* Primary */}
              <a
                href="#projects"
                id="cta-lihat-karya"
                className="flex items-center gap-2 h-10 px-5 rounded-full
                  bg-[#FFD600] border-2 border-[#111] font-bold text-sm
                  shadow-[4px_4px_0_#111]
                  transition-all duration-150
                  hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111]
                  active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <HiArrowRight className="w-4 h-4" aria-hidden="true" />
                Lihat Karya
              </a>

              {/* Secondary */}
              <a
                href="#contact"
                id="cta-kontak"
                className="flex items-center gap-2 h-10 px-5 rounded-full
                  bg-white border-2 border-[#111] font-bold text-sm
                  shadow-[4px_4px_0_#111]
                  transition-all duration-150
                  hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111]
                  active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <HiEnvelope className="w-4 h-4" aria-hidden="true" />
                Kontak
              </a>
            </div>

            {/* 7. Stats strip */}
            <div className="flex justify-center lg:justify-start w-full motion-safe:animate-[fadeUp_500ms_560ms_both]">
              <StatsStrip />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
