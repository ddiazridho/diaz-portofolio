"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiEnvelope,
  HiClipboardDocument,
  HiCheck,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const EMAIL_ADDRESS = "diazridho57@gmail.com";

const actionCards = [
  {
    label: "GITHUB",
    icon: <SiGithub className="w-4 h-4 text-[#111]" />,
    href: "https://github.com/ddiazridho",
  },
  {
    label: "LINKEDIN",
    icon: <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />,
    href: "https://www.linkedin.com/in/diaz-ridho-yuristianto/",
  },
  {
    label: "INSTAGRAM",
    icon: <FaInstagram className="w-4 h-4 text-[#E1306C]" />,
    href: "https://www.instagram.com/dyzrd_/",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(EMAIL_ADDRESS)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          fallbackCopy();
        });
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    try {
      const el = document.createElement("textarea");
      el.value = EMAIL_ADDRESS;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 relative overflow-hidden"
    >
      <div className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        <div className="flex max-w-2xl w-full flex-col items-center text-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-10 lg:mb-12">
            {/* Counter Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-[2.5px] border-[#111] bg-[#0047AB] text-white font-bold text-xs sm:text-sm tracking-widest shadow-[2px_2px_0px_0px_#111] mb-3 uppercase">
                LAST PAGE <span className="opacity-40 font-normal">|</span> (04)
              </span>
            </motion.div>

            {/* Section Title */}
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111] text-center leading-[1.05] mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              CONTACT ME<br />
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#374151] max-w-xl text-sm sm:text-base font-medium leading-relaxed"
            >
              Interested in hiring, collaborating on AI/ML projects, or just having a chat? My inbox is always open.
            </motion.p>
          </div>

          {/* Unified Contact Master Card (No nested cards!) */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full border-[3px] border-[#111] bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200 flex flex-col gap-6"
          >
            {/* Top: Email Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
              <div className="flex items-center gap-3.5 sm:gap-4 w-full sm:w-auto justify-start">
                <div className="w-12 h-12 rounded-2xl bg-[#0047AB] border-[2.5px] border-[#111] shadow-[2.5px_2.5px_0px_0px_#111] flex items-center justify-center flex-shrink-0 text-white">
                  <HiEnvelope className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#374151]">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-base sm:text-lg md:text-xl font-black text-[#111] hover:text-[#0047AB] transition-colors truncate"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    title={EMAIL_ADDRESS}
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              {/* Interactive Copy Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-[2.5px] border-[#111] font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 cursor-pointer flex-shrink-0 select-none ${copied
                  ? "bg-green-400 text-[#111] shadow-[2px_2px_0px_0px_#111] translate-x-0.5 translate-y-0.5"
                  : "bg-[#E23636] hover:bg-[#DC2626] text-white shadow-[3px_3px_0px_0px_#111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_#111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111]"
                  }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
                aria-label="Salin alamat email"
              >
                {copied ? (
                  <>
                    <HiCheck className="w-4 h-4 stroke-[3]" />
                    <span>TERSALIN!</span>
                  </>
                ) : (
                  <>
                    <HiClipboardDocument className="w-4 h-4" />
                    <span>SALIN EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="w-full border-t-[2.5px] border-[#111]" />

            {/* Bottom: Social Actions Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 w-full">
              <span className="text-xs font-black uppercase tracking-wider text-[#374151]">
                Social Profiles
              </span>
              <div className="flex items-center justify-center sm:justify-end gap-1.5 sm:gap-3 w-full sm:w-auto flex-nowrap">
                {actionCards.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl border-[2px] border-[#111] bg-white hover:bg-[#FDB813] text-[#111] font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#111] sm:shadow-[2.5px_2.5px_0px_0px_#111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_#111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111] transition-all duration-150 no-underline cursor-pointer select-none whitespace-nowrap"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    <span className="flex items-center justify-center flex-shrink-0">{btn.icon}</span>
                    <span>{btn.label}</span>
                    <HiArrowTopRightOnSquare className="w-3.5 h-3.5 text-neutral-500 hidden sm:inline" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
