"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiFastapi,
  SiLaravel,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiDocker,
  SiHuggingface,
  SiMysql,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import {
  Wrench,
  Bot,
  FileSearch,
  Layers,
  BrainCircuit,
  Network,
  ArrowLeftRight,
  BotMessageSquare,
  CloudLightning,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const toolsAndFrameworks: SkillItem[] = [
  {
    name: "Python",
    icon: <SiPython className="w-4 h-4 text-[#3776AB]" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="w-4 h-4 text-[#009688]" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-4 h-4 text-[#FF2D20]" />,
  },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn className="w-4 h-4 text-[#F7931E]" />,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" />,
  },
  {
    name: "Keras",
    icon: <SiKeras className="w-4 h-4 text-[#D00000]" />,
  },
  {
    name: "Pandas",
    icon: <SiPandas className="w-4 h-4 text-[#150458]" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-4 h-4 text-[#4479A1]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
  },
  {
    name: "Git",
    icon: <SiGit className="w-4 h-4 text-[#F05032]" />,
  },
];

const aiAndMlOps: SkillItem[] = [
  {
    name: "RAG",
    icon: <FileSearch className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-4 h-4 text-[#2496ED]" />,
  },
  {
    name: "Transformers",
    icon: <SiHuggingface className="w-4 h-4 text-[#FFD21E]" />,
  },
  {
    name: "LLM",
    icon: <BotMessageSquare className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
  {
    name: "Machine Learning",
    icon: <BrainCircuit className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
  {
    name: "Deep Learning",
    icon: <Network className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
  {
    name: "REST API",
    icon: <ArrowLeftRight className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
  {
    name: "Vector Search",
    icon: <Layers className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
  {
    name: "Pretrained API",
    icon: <CloudLightning className="w-4 h-4 stroke-[2.5] text-[#111]" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full scroll-mt-24" style={{ background: "var(--color-bg)" }}>

      <div className="section">
        {/* ── Neo-Brutalist Editorial Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="pb-8 mb-14"
          style={{ marginBottom: "60px" }}
        >
          <div className="gap-2 relative select-none flex flex-col items-center">
            {/* Giant two-line editorial text */}
            <div className="w-full flex justify-center items-center h-28 sm:h-36 overflow-visible" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <div className="scale-[0.45] sm:scale-[0.6] origin-center relative">
                {/* Line 1: "SKILLS AND" */}
                <div className="flex items-end leading-none gap-3 sm:gap-4">
                  <span
                    className="font-black tracking-tighter uppercase text-[clamp(3.2rem,10vw,8rem)] text-[#111]"
                    style={{ lineHeight: 0.88 }}
                  >
                    SKILLS
                  </span>
                  <span
                    className="inline-block -translate-x-2 font-black uppercase text-[clamp(1.1rem,3.5vw,2.8rem)] text-[#FF5722] mb-[0.15em] whitespace-nowrap leading-none"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#FF5722",
                      textDecorationThickness: "3px",
                      textUnderlineOffset: "5px",
                    }}
                  >
                    AND
                  </span>
                  <div className="self-center ml-1 w-[5rem] sm:w-[6.2rem] h-[5rem] sm:h-[6.2rem] bg-white border-[3px] border-black rounded-xl shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] flex items-center justify-center p-2 overflow-hidden group">
                    <SiDocker className="w-3/4 h-3/4 text-[#2496ED] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>

                {/* Line 2: "DEV STACK" */}
                <div
                  className="font-black tracking-tighter uppercase text-[clamp(3.2rem,10vw,8rem)] text-[#111] mt-1"
                  style={{ lineHeight: 0.88 }}
                >
                  DEV STACK
                </div>
              </div>
            </div>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mx-auto text-neutral-600 max-w-xl text-sm sm:text-base font-medium leading-relaxed">
              A glimpse into my background, education, and what drives my passion for software engineering.
            </motion.p>
          </div>

        </motion.div>


        {/* ── Neo-Brutalism Two-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Card: Tools & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
            className="bg-white border-[3px] border-[#111] rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-300 border-[2px] border-[#111] shadow-[2px_2px_0px_#111] flex items-center justify-center flex-shrink-0 text-[#111]">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Tools & Frameworks
              </h3>
            </div>

            <div className="w-full border-b-[2px] border-[#111] mt-1" />

            {/* Badges */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {toolsAndFrameworks.map((item) => (
                <div
                  key={item.name}
                  className="flex w-full items-center gap-2.5 border-[2px] border-[#111] rounded-xl bg-white px-3 h-6 text-xs font-bold text-[#111] shadow-[2px_2px_0px_#111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_#111] transition-all cursor-default select-none"
                >
                  <span style={{ marginLeft: '10px' }} className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card: AI & MLOps */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
            className="bg-white border-[3px] border-[#111] rounded-3xl p-6 md:p-8 shadow-[5px_5px_0px_0px_#111] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] transition-all duration-200"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-yellow-300 border-[2px] border-[#111] shadow-[2px_2px_0px_#111] flex items-center justify-center flex-shrink-0 text-[#111]">
                <Bot className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                AI & MLOps
              </h3>
            </div>

            <div className="w-full border-b-[2px] border-[#111] mt-1" />

            {/* Badges */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {aiAndMlOps.map((item) => (
                <div
                  key={item.name}
                  className="flex w-full items-center gap-2.5 border-[2px] border-[#111] rounded-xl bg-white px-3 h-6 text-xs font-bold text-[#111] shadow-[2px_2px_0px_#111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_#111] transition-all cursor-default select-none"
                >
                  <span style={{ marginLeft: '10px' }} className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="truncate">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
