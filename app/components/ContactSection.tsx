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

const EMAIL_ADDRESS = "hello@diazridho.dev";

const actionCards = [
  {
    label: "GITHUB",
    icon: <SiGithub className="w-5 h-5 text-[#111]" />,
    iconBg: "bg-neutral-100",
    href: "https://github.com/ddiazridho",
  },
  {
    label: "LINKEDIN",
    icon: <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />,
    iconBg: "bg-blue-100",
    href: "https://www.linkedin.com/in/diaz-ridho-yuristianto/",
  },
  {
    label: "INSTAGRAM",
    icon: <FaInstagram className="w-5 h-5 text-[#E1306C]" />,
    iconBg: "bg-pink-100",
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
      style={{ background: "var(--color-bg)", borderTop: "1.5px solid var(--color-border)" }}
    >
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
        <div className="flex max-w-2xl flex-col items-center text-center">
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
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-[2.5px] border-[#111] bg-yellow-400 text-[#111] font-bold text-xs sm:text-sm tracking-widest shadow-[2px_2px_0px_0px_#111] mb-3 uppercase">
                LAST PAGE <span className="opacity-40 font-normal">|</span> (04)
              </span>
            </motion.div>

            {/* Section Title: Selected Works */}
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
              className="text-neutral-600 max-w-xl text-sm sm:text-base font-medium leading-relaxed"
            >
              A curated showcase of real-world AI systems, full-lifecycle applications, and automated tools I have built.
            </motion.p>
          </div>

          {/* Main Card */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full border-[3px] border-[#111] bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-[6px_6px_0px_0px_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200 flex flex-col gap-4 sm:gap-5"
          >
            {/* Kotak Email Utama */}
            <div className="border-[2.5px] border-[#111] bg-neutral-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#111] flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Email Content */}
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-yellow-400 border-[2.5px] border-[#111] shadow-[2px_2px_0px_0px_#111] flex items-center justify-center flex-shrink-0 text-[#111]">
                  <HiEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-neutral-400">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-base sm:text-lg md:text-xl font-black text-[#111] hover:text-[#1877F2] transition-colors truncate"
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
                  : "bg-yellow-400 hover:bg-yellow-300 text-[#111] shadow-[3px_3px_0px_0px_#111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_#111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111]"
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

            {/* Kartu Tombol Aksi (GitHub, LinkedIn, Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full">
              {actionCards.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 sm:p-4 bg-neutral-50 hover:bg-white border-[2.5px] border-[#111] rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_0px_#111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111] transition-all duration-200 no-underline cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-[2px] border-[#111] shadow-[2px_2px_0px_0px_#111] flex items-center justify-center flex-shrink-0 ${btn.iconBg}`}
                    >
                      {btn.icon}
                    </div>
                    <span
                      className="font-black text-xs sm:text-sm tracking-wider text-[#111] uppercase"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {btn.label}
                    </span>
                  </div>
                  <HiArrowTopRightOnSquare className="w-4 h-4 text-neutral-400 group-hover:text-[#111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0 ml-1" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
