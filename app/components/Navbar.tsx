"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
  HiOutlinePhone,
} from "react-icons/hi2";

const NAV_LINKS = [
  { href: "#about", label: "About", Icon: HiOutlineUser },
  { href: "#skills", label: "Skills", Icon: HiOutlineSparkles },
  { href: "#projects", label: "Projects", Icon: HiOutlineSquares2X2 },
  { href: "#contact", label: "Contact", Icon: HiOutlinePhone },
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
          fixed top-4 left-1/2 -translate-x-1/2 z-50 px-8 box-border
          flex items-center justify-between
          bg-white/80 backdrop-blur-md
          rounded-full border-2 border-[#111]
          shadow-[4px_4px_0_#111]
          transition-all duration-200
          ${pillSize}
        `}
      >
        {/* Logo */}
        <Link href="/" style={{ paddingLeft: '24px' }} className="flex items-center gap-2 shrink-0" aria-label="Home">
          <span className="font-black text-base tracking-tight leading-none">
            Diaz<span className="text-[#1A73E8]">.</span>
          </span>
        </Link>

        {/* Center links — hidden < md */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    text-sm font-semibold px-4 py-2 rounded-full
                    transition-all duration-150 select-none
                    ${isActive
                      ? "bg-[#111] text-white"
                      : "text-[#111] hover:bg-[#111]/5"}
                  `}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* CV — icon-only on mobile */}
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV"
            className="flex items-center gap-1.5 h-10 px-4 rounded-full border-2 border-[#111] bg-white font-semibold text-sm transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[2px_2px_0_#111]"
          >
            <HiArrowDownTray className="w-4 h-4" />
            <span className="hidden md:inline">CV</span>
          </a>

          {/* Hire Me */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="flex items-center gap-1.5 h-10 px-5 rounded-full border-2 border-[#111] bg-[#FFD600] font-bold text-sm transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[2px_2px_0_#111] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            <HiEnvelope className="w-4 h-4 md:hidden" aria-hidden="true" />
            <span className="hidden md:inline">Hire Me</span>
            <span className="md:hidden sr-only">Hire Me</span>
          </a>
        </div>
      </nav>

      {/* ── BOTTOM TAB BAR — mobile only (< md) ── */}
      <div
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          w-[min(92%,420px)] h-14 px-3
          flex items-center justify-around
          bg-white/90 backdrop-blur-md
          rounded-full border-2 border-[#111]
          shadow-[4px_4px_0_#111]"
      >
        {NAV_LINKS.map(({ href, label, Icon }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              aria-label={label}
              aria-current={isActive ? "page" : undefined}
              className={`
                flex flex-col items-center justify-center gap-0.5
                px-3 py-1.5 rounded-full text-[10px] font-bold
                min-w-[44px] min-h-[44px]
                transition-all duration-150
                ${isActive ? "bg-[#FFD600] border-2 border-[#111]" : "text-[#111]"}
              `}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
              <span>{label}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
