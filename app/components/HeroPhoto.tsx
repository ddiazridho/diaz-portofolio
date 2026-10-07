"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Code2 } from "lucide-react";

/** Floating pill sticker matching reference attachment */
function FloatingBadge({
  label,
  icon,
  rotate = 0,
  delay = 0,
  duration = 3.2,
  className = "",
}: {
  label: string;
  icon?: React.ReactNode;
  rotate?: number;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [rotate, rotate + 1.5, rotate],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className={`
        absolute z-20
        flex items-center gap-1.5 px-2.5 py-1
        rounded-full border-[2px] border-[#111] dark:border-slate-200
        bg-white dark:bg-[#121826] text-[#111] dark:text-[#F8FAFC]
        shadow-[3px_3px_0px_0px_#111] dark:shadow-[3px_3px_0px_0px_#38BDF8]
        text-[11px] sm:text-xs font-black select-none whitespace-nowrap
        ${className}
      `}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}

export default function HeroPhoto({ src }: { src: string }) {
  return (
    /* outer wrapper with group for hover states */
    <div className="relative group flex justify-center lg:justify-start items-end mx-auto lg:mx-0 w-full max-w-[300px] sm:max-w-[320px] h-[390px] sm:h-[415px] select-none">

      {/* ── CARD PLACEHOLDERS (Spider-Man aesthetic dual arches behind Diaz) ── */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[225px] sm:w-[245px] h-[268px] sm:h-[285px] bottom-2 -z-10">
        {/* Back placeholder: Spidey Crimson Red arch (tilted counter-clockwise) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -rotate-[9deg] -translate-x-2.5 translate-y-2
            rounded-t-[999px] rounded-b-[28px]
            bg-[#E23636] border-[3.5px] border-[#111] dark:border-slate-200
            shadow-[8px_8px_0px_0px_#111] dark:shadow-[8px_8px_0px_0px_#0047AB]"
        />

        {/* Front placeholder: Heroic Cobalt Blue arch (slightly tilted clockwise) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rotate-[2deg]
            rounded-t-[999px] rounded-b-[28px]
            bg-[#0047AB] dark:bg-[#1D4ED8] border-[3.5px] border-[#111] dark:border-slate-200
            shadow-[8px_8px_0px_0px_#111] dark:shadow-[8px_8px_0px_0px_#38BDF8]"
        />
      </div>

      {/* ── DIAZ PHOTO IN FRONT (Larger than cards, head & shoulders popping out) ── */}
      <div className="relative z-10 w-full h-full overflow-hidden pointer-events-auto">
        <Image
          src={src}
          alt="Diaz Ridho - AI Engineer"
          fill
          className="object-cover object-top scale-[1.06] transition-transform duration-300 ease-out group-hover:scale-[1.12] group-hover:-translate-y-2"
          priority
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
        />
      </div>

      {/* ── Badges ── */}
      {/* AI Engineer Badge — right side, compact, clean bot icon matching Software icon style */}
      <FloatingBadge
        label="AI Engineer"
        icon={<Bot className="w-3.5 h-3.5 text-[#0047AB] dark:text-[#38BDF8] stroke-[2.5]" />}
        rotate={5}
        delay={0}
        className="-right-2 sm:-right-5 top-[39%]"
      />

      {/* Software Badge — bottom-left, compact, code icon */}
      <FloatingBadge
        label="Software"
        icon={<Code2 className="w-3.5 h-3.5 text-[#E23636] dark:text-[#F87171] stroke-[2.5]" />}
        rotate={-5}
        delay={1.5}
        className="-left-2 sm:-left-4 bottom-8"
      />
    </div>
  );
}
