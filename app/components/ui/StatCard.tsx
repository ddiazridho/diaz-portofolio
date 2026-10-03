"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.14)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="card flex flex-col gap-1 px-5 py-4 min-w-[140px]"
    >
      {icon && <span className="text-2xl mb-1">{icon}</span>}
      <span
        className="text-2xl font-black leading-none"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          color: "var(--color-blue)",
        }}
      >
        {value}
      </span>
      <span
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--color-text-muted)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}
