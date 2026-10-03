"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface StickerBadgeProps {
  label: string;
  emoji?: string;
  color?: "green" | "yellow" | "blue" | "red" | "white";
  rotate?: number;
  animationVariant?: "float" | "float-alt" | "bounce";
  className?: string;
  onClick?: () => void;
}

const colorMap: Record<string, string> = {
  green:  "bg-green-400 border-green-700 text-green-900",
  yellow: "bg-yellow-300 border-yellow-600 text-yellow-900",
  blue:   "bg-blue-500 border-blue-800 text-white",
  red:    "bg-red-400 border-red-700 text-white",
  white:  "bg-white border-gray-300 text-gray-800",
};

const animMap: Record<string, string> = {
  float:       "animate-float",
  "float-alt": "animate-float-alt",
  bounce:      "animate-bounce-slow",
};

export default function StickerBadge({
  label,
  emoji,
  color = "white",
  rotate = -3,
  animationVariant = "float",
  className,
  onClick,
}: StickerBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1.5",
        "rounded-full border-2 font-bold text-sm shadow-md cursor-pointer select-none",
        colorMap[color],
        animMap[animationVariant],
        className
      )}
      style={
        { "--sticker-rotate": `${rotate}deg` } as React.CSSProperties
      }
      onClick={onClick}
    >
      {emoji && <span className="text-base leading-none">{emoji}</span>}
      <span className="whitespace-nowrap">{label}</span>
    </motion.div>
  );
}
