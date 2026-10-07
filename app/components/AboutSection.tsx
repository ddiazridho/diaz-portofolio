"use client";

import { motion } from "framer-motion";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function AboutSection() {
  const { t } = useThemeLanguage();

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 relative overflow-hidden"
    >
      {/* Wrapper matching HeroSection size */}
      <div className="section">

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
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-[2.5px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm tracking-widest shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#38BDF8] mb-3 uppercase">
              {t.about.badge}<span className="opacity-40 font-normal">|</span> (01)
            </span>
          </motion.div>

          {/* Section Title */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC] text-center leading-[1.05] mb-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {t.about.title} <br />
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#374151] dark:text-slate-400 max-w-xl text-sm sm:text-base font-medium leading-relaxed"
          >
            {t.about.subtitle}
          </motion.p>
        </div>


        {/* Grid Layout (Matches Hero: 5 cols left, 7 cols right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT COLUMN: WHO I AM & EDUCATION */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">

            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full relative"
            >
              <div style={{
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }} className="border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[6px_6px_0px_0px_#111] dark:shadow-[6px_6px_0px_0px_#0047AB] p-6 lg:p-8 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] dark:hover:shadow-[8px_8px_0px_0px_#38BDF8] transition-all duration-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#1D4ED8] flex items-center justify-center shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#38BDF8] flex-shrink-0 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-wide text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.whoIAm}</h3>
                </div>
                <div className="text-[#374151] dark:text-slate-300 text-sm font-medium leading-relaxed">
                  <p>
                    {t.about.whoIAmText}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Section heading */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#1D4ED8] flex items-center justify-center shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#38BDF8] flex-shrink-0 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.education}</h3>
              </div>

              {/* Timeline track */}
              <div className="flex flex-col gap-4 pl-5 border-l-[3px] border-[#111] dark:border-slate-700 ml-5">

                {/* Education Card 1 */}
                <div className="flex items-start gap-4">
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#38BDF8] flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB]"></div>
                  {/* Card */}
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[4px_4px_0px_0px_#111] dark:shadow-[4px_4px_0px_0px_#0047AB] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] dark:hover:shadow-[6px_6px_0px_0px_#38BDF8] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.edu1.title}</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] dark:border-slate-200 bg-[#E23636] dark:bg-[#EF4444] text-white font-bold text-[10px] shadow-[1.5px_1.5px_0px_0px_#111] dark:shadow-[1.5px_1.5px_0px_0px_#38BDF8] whitespace-nowrap">{t.about.edu1.status}</span>
                    </div>
                    <p className="text-[#0047AB] dark:text-[#38BDF8] font-bold text-xs mb-2">{t.about.edu1.institution}</p>
                    <p className="text-xs text-[#374151] dark:text-slate-300 font-medium leading-relaxed">
                      {t.about.edu1.desc}
                    </p>
                  </div>
                </div>

                {/* Education Card 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#38BDF8] flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB]"></div>
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[4px_4px_0px_0px_#111] dark:shadow-[4px_4px_0px_0px_#0047AB] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] dark:hover:shadow-[6px_6px_0px_0px_#38BDF8] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.edu2.title}</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] dark:border-slate-200 bg-[#E23636] dark:bg-[#EF4444] text-white font-bold text-[10px] shadow-[1.5px_1.5px_0px_0px_#111] dark:shadow-[1.5px_1.5px_0px_0px_#38BDF8] whitespace-nowrap">{t.about.edu2.period}</span>
                    </div>
                    <p className="text-[#0047AB] dark:text-[#38BDF8] font-bold text-xs mb-2">{t.about.edu2.institution}</p>
                    <p className="text-xs text-[#374151] dark:text-slate-300 font-medium leading-relaxed">
                      {t.about.edu2.desc}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: EXPERIENCE */}
          <div className="lg:col-span-7 flex flex-col gap-10">

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Section heading */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#1D4ED8] flex items-center justify-center shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#38BDF8] flex-shrink-0 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.experience}</h3>
              </div>

              {/* Timeline track */}
              <div className="flex flex-col gap-4 pl-5 border-l-[3px] border-[#111] dark:border-slate-700 ml-5">

                {/* Exp Card 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#38BDF8] flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB]"></div>
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[4px_4px_0px_0px_#111] dark:shadow-[4px_4px_0px_0px_#0047AB] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] dark:hover:shadow-[6px_6px_0px_0px_#38BDF8] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.exp1.title}</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] dark:border-slate-200 bg-[#E23636] dark:bg-[#EF4444] text-white font-bold text-[10px] shadow-[1.5px_1.5px_0px_0px_#111] dark:shadow-[1.5px_1.5px_0px_0px_#38BDF8] whitespace-nowrap">{t.about.exp1.period}</span>
                    </div>
                    <p className="text-[#0047AB] dark:text-[#38BDF8] font-bold text-xs mb-2">{t.about.exp1.org}</p>
                    <ul className="text-xs text-[#374151] dark:text-slate-300 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp1.bullet1}</li>
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp1.bullet2}</li>
                    </ul>
                  </div>
                </div>

                {/* Exp Card 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#38BDF8] flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB]"></div>
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[4px_4px_0px_0px_#111] dark:shadow-[4px_4px_0px_0px_#0047AB] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] dark:hover:shadow-[6px_6px_0px_0px_#38BDF8] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>{t.about.exp2.title}</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] dark:border-slate-200 bg-[#E23636] dark:bg-[#EF4444] text-white font-bold text-[10px] shadow-[1.5px_1.5px_0px_0px_#111] dark:shadow-[1.5px_1.5px_0px_0px_#38BDF8] whitespace-nowrap">{t.about.exp2.period}</span>
                    </div>
                    <p className="text-[#0047AB] dark:text-[#38BDF8] font-bold text-xs mb-2">{t.about.exp2.org}</p>
                    <ul className="text-xs text-[#374151] dark:text-slate-300 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp2.bullet1}</li>
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp2.bullet2}</li>
                    </ul>
                  </div>
                </div>

                {/* Exp Card 3 — Title kept as Google Student Ambassador */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#38BDF8] flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB]"></div>
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[4px_4px_0px_0px_#111] dark:shadow-[4px_4px_0px_0px_#0047AB] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] dark:hover:shadow-[6px_6px_0px_0px_#38BDF8] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>GOOGLE STUDENT AMBASSADOR</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] dark:border-slate-200 bg-[#E23636] dark:bg-[#EF4444] text-white font-bold text-[10px] shadow-[1.5px_1.5px_0px_0px_#111] dark:shadow-[1.5px_1.5px_0px_0px_#38BDF8] whitespace-nowrap">{t.about.exp3.period}</span>
                    </div>
                    <p className="text-[#0047AB] dark:text-[#38BDF8] font-bold text-xs mb-2">{t.about.exp3.org}</p>
                    <ul className="text-xs text-[#374151] dark:text-slate-300 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp3.bullet1}</li>
                    </ul>
                  </div>
                </div>

                {/* Exp Card 4 — Title kept as AI Engineer Cohort */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] dark:border-slate-200 bg-[#0047AB] dark:bg-[#38BDF8] flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB]"></div>
                  <div style={{
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl shadow-[4px_4px_0px_0px_#111] dark:shadow-[4px_4px_0px_0px_#0047AB] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] dark:hover:shadow-[6px_6px_0px_0px_#38BDF8] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC]" style={{ fontFamily: "var(--font-space-grotesk)" }}>AI ENGINEER COHORT</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] dark:border-slate-200 bg-[#E23636] dark:bg-[#EF4444] text-white font-bold text-[10px] shadow-[1.5px_1.5px_0px_0px_#111] dark:shadow-[1.5px_1.5px_0px_0px_#38BDF8] whitespace-nowrap">{t.about.exp4.period}</span>
                    </div>
                    <p className="text-[#0047AB] dark:text-[#38BDF8] font-bold text-xs mb-2">{t.about.exp4.org}</p>
                    <ul className="text-xs text-[#374151] dark:text-slate-300 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp4.bullet1}</li>
                      <li className="flex items-start gap-2"><span className="text-[#111] dark:text-[#38BDF8] font-black mt-0.5 flex-shrink-0">■</span>{t.about.exp4.bullet2}</li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
