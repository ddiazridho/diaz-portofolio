"use client";

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import ThemeLanguageToggle from "./ThemeLanguageToggle";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full py-8 border-t-[2.5px] border-[#111] dark:border-[#EEEEEE] transition-colors"
    >
      <div className="max-w-[960px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span
          className="text-lg font-black text-[#111] dark:text-[#F3F4F6]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Diaz<span className="text-[#0047AB]">.</span>
        </span>

        {/* Mobile Theme Changer & Translator (< md) */}
        <div className="flex md:hidden items-center justify-center my-1 sm:my-0">
          <ThemeLanguageToggle />
        </div>

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
              className="transition-opacity hover:opacity-50 text-[#111] dark:text-[#F3F4F6]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
