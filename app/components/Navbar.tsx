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

const NAV_LINKS = [
  { href: "#about", label: "About", Icon: HiOutlineUser },
  { href: "#skills", label: "Skills", Icon: HiOutlineCodeBracket },
  { href: "#projects", label: "Projects", Icon: HiOutlineBriefcase },
  { href: "#contact", label: "Contact", Icon: HiOutlineEnvelope },
];

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll-spy via IntersectionObserver ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.45 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Shrink on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 sm:px-6 md:px-8 box-border
          flex items-center justify-between
          bg-white/80 backdrop-blur-md
          rounded-full border-2 border-[#111]
          shadow-[4px_4px_0_#111]
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
          <span className="font-black text-base sm:text-lg tracking-tight leading-none text-[#111]">
            Diaz<span className="text-[#0047AB]">.</span>
          </span>
        </Link>

        {/* Center links: Icons on mobile (< md), text on desktop (md+) */}
        <ul className="flex items-center gap-1 sm:gap-1.5 md:gap-1" role="list">
          {NAV_LINKS.map(({ href, label, Icon }) => {
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
                        ? "bg-[#111] text-white shadow-[2px_2px_0_#111]"
                        : "text-[#111] hover:bg-[#111]/5"
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
        <div className="flex items-center gap-2 shrink-0">
          {/* Hire Me — hidden on mobile so nav icons have comfortable space */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 h-9 md:h-10 px-4 md:px-5 rounded-full border-2 border-[#111] bg-[#E23636] hover:bg-[#DC2626] font-bold text-xs md:text-sm text-white transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[2px_2px_0_#111] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            <span>Hire Me</span>
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
