"use client";

import { useEffect, useState } from "react";

const ROLES = ["AI Engineer", "Software Engineer"];

export default function RotatingText() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // respect prefers-reduced-motion — just show first item statically
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block text-xl md:text-2xl font-semibold text-[#111] dark:text-[#F8FAFC]"
      style={{
        fontFamily: "var(--font-space-grotesk)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 300ms ease, transform 300ms ease",
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      {ROLES[idx]}
    </span>
  );
}
