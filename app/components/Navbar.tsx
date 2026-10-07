"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  HiOutlineUser,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import ThemeLanguageToggle from "./ThemeLanguageToggle";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const { t } = useThemeLanguage();
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about, Icon: HiOutlineUser },
    { href: "#skills", label: t.nav.skills, Icon: HiOutlineCodeBracket },
    { href: "#projects", label: t.nav.projects, Icon: HiOutlineBriefcase },
    { href: "#contact", label: t.nav.contact, Icon: HiOutlineEnvelope },
  ];

  /* ── Robust Scroll-spy & shrink on scroll ── */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          // If reached the bottom of page, highlight contact
          const isBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 60;
          if (isBottom) {
            setActive("#contact");
            ticking = false;
            return;
          }

          // Trigger line is ~28% from the top of the viewport (below fixed navbar)
          const trigger = Math.max(120, window.innerHeight * 0.28);
          let currentSection = "";

          for (const id of SECTION_IDS) {
            const el = document.getElementById(id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top <= trigger && rect.bottom > trigger) {
              currentSection = id === "hero" ? "" : `#${id}`;
              break;
            }
          }

          setActive(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Smooth scroll with offset ── */
  const handleNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const pillSize = scrolled
    ? "h-12 w-[min(88%,880px)]"
    : "h-14 w-[min(92%,960px)]";

  return (
    <>
      {/* ── TOP PILL ── */}
      <nav
        aria-label="Main navigation"
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50 px-3 sm:px-6 md:px-8 box-border
          flex items-center justify-between
          bg-white/85 dark:bg-[#121826]/90 backdrop-blur-md
          rounded-full border-2 border-[#111] dark:border-slate-200
          shadow-[4px_4px_0_#111] dark:shadow-[4px_4px_0_#0047AB]
          transition-all duration-200
          ${pillSize}
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 shrink-0 pl-1 sm:pl-3"
          aria-label="Home"
        >
          <span className="font-black text-base sm:text-lg tracking-tight leading-none text-[#111] dark:text-[#F8FAFC]">
            Diaz<span className="text-[#0047AB] dark:text-[#38BDF8]">.</span>
          </span>
        </Link>

        {/* Center links: Icons on mobile (< md), text on desktop (md+) */}
        <ul className="flex items-center gap-1 sm:gap-1.5 md:gap-1" role="list">
          {navLinks.map(({ href, label, Icon }) => {
            const isActive = active === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  aria-label={label}
                  title={label}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    flex items-center justify-center rounded-full transition-all duration-150 select-none
                    w-8 h-8 sm:w-9 sm:h-9 md:w-auto md:h-auto md:px-4 md:py-2
                    ${
                      isActive
                        ? "bg-[#111] text-white shadow-[2px_2px_0_#111] dark:bg-[#F8FAFC] dark:text-[#0a0d14] dark:shadow-[2px_2px_0_#38BDF8]"
                        : "text-[#111] dark:text-slate-300 hover:bg-[#111]/5 dark:hover:bg-white/10 dark:hover:text-white"
                    }
                  `}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:hidden stroke-[2]" aria-hidden="true" />
                  <span className="hidden md:inline text-sm font-semibold leading-none">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center shrink-0">
          {/* Hire Me — displayed on all screen sizes */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-5 rounded-full border-2 border-[#111] dark:border-slate-200 bg-[#E23636] hover:bg-[#DC2626] dark:hover:bg-[#EF4444] font-bold text-[11px] sm:text-xs md:text-sm text-white transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[2px_2px_0_#111] dark:hover:shadow-[2px_2px_0_#38BDF8] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            <span>{t.nav.hireMe}</span>
          </a>
        </div>

        {/* Desktop floating Theme Changer & Translator (Language Toggle) — placed directly to the right side outside of the main navbar */}
        <div className="hidden md:flex items-center absolute left-[calc(100%+14px)] top-1/2 -translate-y-1/2">
          <ThemeLanguageToggle />
        </div>
      </nav>
    </>
  );
}
