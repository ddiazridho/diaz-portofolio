"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StickerBadge from "./ui/StickerBadge";

interface WindowCardProps {
  avatarSrc: string;
  title?: string;
}

export default function WindowCard({ avatarSrc, title = "avatar.jpg" }: WindowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative rounded-2xl overflow-hidden border-2"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)", boxShadow: "var(--shadow-card)" }}
    >
      {/* Window title bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b-2"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface-hover)" }}
      >
        {/* Traffic lights */}
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400 border border-red-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-400 border border-green-500 inline-block" />
        </div>
        {/* Title */}
        <span
          className="text-xs font-semibold"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
        >
          {title}
        </span>
        {/* Window controls placeholder */}
        <div className="w-14" />
      </div>

      {/* Avatar area */}
      <div
        className="relative flex items-end justify-center overflow-hidden"
        style={{ minHeight: "380px", background: "linear-gradient(180deg, #e8f0fe 0%, #f5f5f5 100%)" }}
      >
        <Image
          src={avatarSrc}
          alt="Diaz Ridho — Full-Stack Developer"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Coffee sticker overlay */}
        <div className="absolute bottom-4 left-4 z-10">
          <StickerBadge
            label="Coffee-Lover"
            emoji="☕"
            color="yellow"
            rotate={-4}
            animationVariant="float-alt"
          />
        </div>
      </div>
    </motion.div>
  );
}
