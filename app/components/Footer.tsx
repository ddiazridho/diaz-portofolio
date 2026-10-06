"use client";

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-8 border-t-2"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div className="max-w-[960px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span
          className="text-lg font-black"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Diaz<span style={{ color: "var(--color-blue)" }}>.</span>
        </span>


        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            { icon: <SiGithub className="w-5 h-5" />, href: "https://github.com/ddiazridho", label: "GitHub" },
            { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/diaz-ridho-yuristianto/", label: "LinkedIn" },
            { icon: <HiEnvelope className="w-5 h-5" />, href: "mailto:hello@diazridho.dev", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-opacity hover:opacity-50"
              style={{ color: "var(--color-text)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
