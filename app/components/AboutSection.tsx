"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-24 relative overflow-hidden"
      style={{ background: "var(--color-surface)", borderTop: "1.5px solid var(--color-border)" }}
    >
      {/* Wrapper matching HeroSection size */}
      <div className="section">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20 lg:mb-28">
          {/* <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full border-[2.5px] border-[#111] bg-yellow-400 text-[#111] font-bold text-xs sm:text-sm tracking-widest shadow-[2px_2px_0px_0px_#111] mb-4 uppercase">
              Background Story
            </span>
          </motion.div> */}
          <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            GET TO KNOW ME
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-neutral-600 max-w-xl text-sm sm:text-base font-medium leading-relaxed">
            A glimpse into my background, education, and what drives my passion for software engineering.
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
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }} className="border-[3px] border-[#111] bg-white rounded-2xl shadow-[6px_6px_0px_0px_#111] p-6 lg:p-8 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full border-[3px] border-[#111] bg-yellow-400 flex items-center justify-center shadow-[2px_2px_0px_0px_#111] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>WHO I AM</h3>
                </div>
                <div className="text-neutral-800 text-sm font-medium leading-relaxed">
                  <p>
                    I'm a Computer Engineering student at Universitas Diponegoro with strong focus in AI/ML Engineering. Skilled at developing full-lifecycle AI systems, from data preparation and model architecture to deployment. With a solid foundational understanding of core AI principles.
                  </p>
                </div>
              </div>

              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-1/4 -right-[24px] w-[24px] border-t-[3px] border-[#111] z-0"></div>
              <div className="hidden lg:block absolute top-1/4 -right-[24px] w-4 h-4 rounded-full border-[3px] border-[#111] bg-yellow-400 translate-x-1/2 -translate-y-1/2 z-10 shadow-[2px_2px_0px_0px_#111]"></div>
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
                <div className="w-10 h-10 rounded-full border-[3px] border-[#111] bg-red-500 flex items-center justify-center shadow-[2px_2px_0px_0px_#111] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>EDUCATION</h3>
              </div>

              {/* Timeline track */}
              <div className="flex flex-col gap-4 pl-5 border-l-[3px] border-[#111] ml-5">

                {/* Education Card 1 */}
                <div className="flex items-start gap-4">
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] bg-yellow-400 flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111]"></div>
                  {/* Card */}
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] bg-white rounded-2xl shadow-[4px_4px_0px_0px_#111] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>COMPUTER ENGINEERING</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] bg-blue-300 text-[#111] font-bold text-[10px] shadow-[1px_1px_0px_0px_#111] whitespace-nowrap">2025 - Present</span>
                    </div>
                    <p className="text-blue-600 font-bold text-xs mb-2">Universitas Diponegoro</p>
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                      Focused on artificial intelligence, large language model, data science.
                    </p>
                  </div>
                </div>

                {/* Education Card 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] bg-blue-300 flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111]"></div>
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] bg-white rounded-2xl shadow-[4px_4px_0px_0px_#111] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>SCIENCE MAJOR</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] bg-blue-300 text-[#111] font-bold text-[10px] shadow-[1px_1px_0px_0px_#111] whitespace-nowrap">2022 – 2025</span>
                    </div>
                    <p className="text-blue-600 font-bold text-xs mb-2">SMA PGRI 1 Pati</p>
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                      Learned strong academic fundamentals and developed good social skills.
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
                <div className="w-10 h-10 rounded-full border-[3px] border-[#111] bg-green-500 flex items-center justify-center shadow-[2px_2px_0px_0px_#111] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide" style={{ fontFamily: "var(--font-space-grotesk)" }}>EXPERIENCE</h3>
              </div>

              {/* Timeline track */}
              <div className="flex flex-col gap-4 pl-5 border-l-[3px] border-[#111] ml-5">

                {/* Exp Card 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] bg-purple-400 flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111]"></div>
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] bg-white rounded-2xl shadow-[4px_4px_0px_0px_#111] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>TREASURER II</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] bg-purple-400 text-white font-bold text-[10px] shadow-[1px_1px_0px_0px_#111] whitespace-nowrap">2024 – Present</span>
                    </div>
                    <p className="text-purple-600 font-bold text-xs mb-2">OSIS SMA PGRI 1 Pati</p>
                    <ul className="text-xs text-neutral-600 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Assisted the Head Treasurer in managing operational budgets and routine cash flow.</li>
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Managed event budgets and recorded routine cash flows.</li>
                    </ul>
                  </div>
                </div>

                {/* Exp Card 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] bg-cyan-400 flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111]"></div>
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] bg-white rounded-2xl shadow-[4px_4px_0px_0px_#111] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>GENERAL SECRETARY</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] bg-cyan-400 text-[#111] font-bold text-[10px] shadow-[1px_1px_0px_0px_#111] whitespace-nowrap">2023 – 2024</span>
                    </div>
                    <p className="text-cyan-600 font-bold text-xs mb-2">OSIS SMA PGRI 1 Pati</p>
                    <ul className="text-xs text-neutral-600 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Handled official correspondence, documentation, and activity proposals.</li>
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Coordinated internal communications</li>
                    </ul>
                  </div>
                </div>

                {/* Exp Card 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] bg-pink-400 flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111]"></div>
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] bg-white rounded-2xl shadow-[4px_4px_0px_0px_#111] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>GOOGLE STUDENT AMBASSADOR</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] bg-pink-400 text-[#111] font-bold text-[10px] shadow-[1px_1px_0px_0px_#111] whitespace-nowrap">2023</span>
                    </div>
                    <p className="text-pink-600 font-bold text-xs mb-2">Google Indonesia</p>
                    <ul className="text-xs text-neutral-600 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Promoted Google technologies and programs across student communities.</li>
                    </ul>
                  </div>
                </div>

                {/* Exp Card 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full border-[3px] border-[#111] bg-orange-400 flex-shrink-0 mt-5 -ml-[22px] shadow-[2px_2px_0px_0px_#111]"></div>
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }} className="flex-1 border-[3px] border-[#111] bg-white rounded-2xl shadow-[4px_4px_0px_0px_#111] p-5 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-black uppercase tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>AI ENGINEER COHORT</h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full border-[2px] border-[#111] bg-orange-400 text-[#111] font-bold text-[10px] shadow-[1px_1px_0px_0px_#111] whitespace-nowrap">2022 – 2023</span>
                    </div>
                    <p className="text-orange-600 font-bold text-xs mb-2">Dicoding</p>
                    <ul className="text-xs text-neutral-600 font-medium space-y-1">
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Studied machine learning and deep learning concepts through practical coursework.</li>
                      <li className="flex items-start gap-2"><span className="text-[#111] font-black mt-0.5 flex-shrink-0">■</span>Completed end-to-end AI pipelines from data preprocessing to deployment.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div >
    </section >
  );
}
