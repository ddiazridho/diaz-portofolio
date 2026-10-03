"use client";

import Image from "next/image";

/** Pill sticker with floating animation */
function Sticker({
  label,
  emoji,
  bg = "white",
  textColor = "#111",
  rotate = 0,
  delay = 0,
  className = "",
}: {
  label: string;
  emoji?: string;
  bg?: string;
  textColor?: string;
  rotate?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`
        absolute z-10
        flex items-center gap-1.5 px-3 py-1.5
        rounded-full border-2 border-[#111]
        text-xs font-bold select-none whitespace-nowrap
        motion-safe:animate-float
        ${className}
      `}
      style={{
        background: bg,
        color: textColor,
        rotate: `${rotate}deg`,
        animationDelay: `${delay}s`,
        boxShadow: "2px 2px 0 #111",
      }}
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {label}
    </span>
  );
}

export default function HeroPhoto({ src }: { src: string }) {
  return (
    /* outer wrapper — positions stickers relative to the frame */
    <div className="relative flex justify-center lg:justify-start mx-auto lg:mx-0 max-w-[220px] md:max-w-[240px] lg:max-w-[260px] w-full">

      {/* ── Offset yellow block (behind) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 -z-10
          rounded-t-[999px] rounded-b-3xl
          bg-[#FFD600] border-[3px] border-[#111]"
      />

      {/* ── Arch frame ── */}
      <div
        className="relative w-full aspect-[4/5]
          rounded-t-[999px] rounded-b-3xl
          border-[3px] border-[#111]
          overflow-hidden bg-[#1A73E8]"
      >
        <Image
          src={src}
          alt="Diaz Ridho — Full-Stack Developer & UI Designer"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
        />
      </div>

      {/* ── Stickers ── */}
      {/* Open to Work — top-right, overlapping arch edge */}


      {/* Coffee-Lover — bottom-left */}
      <Sticker
        label="Software"
        emoji="☕"
        bg="#FFD600"
        rotate={5}
        delay={0.6}
        className="bottom-10 -left-6"
      />

      {/* Fullstack Dev — mid-right */}
      <Sticker
        label="AI Engineer"
        emoji="⚡"
        bg="#1A73E8"
        textColor="white"
        rotate={3}
        delay={1.2}
        className="top-1/2 -translate-y-1/2 -right-8"
      />
    </div>
  );
}
