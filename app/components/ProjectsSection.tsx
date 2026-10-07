"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub, SiPython, SiDocker, SiFastapi, SiHuggingface, SiLaravel, SiPostgresql } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { Bot } from "lucide-react";
import { useThemeLanguage } from "@/app/context/ThemeLanguageContext";

interface ProjectTag {
  name: string;
  icon?: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  tags: ProjectTag[];
  github: string;
  live?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const projects: Project[] = [
  {
    title: "JobFit AI",
    description:
      "A CV analysis tool that extracts your skills and matches them against 1.3M real LinkedIn jobs to show where you stand and what skills you need next.",
    thumbnail: "/JOBFIT.png",
    tags: [
      { name: "Python", icon: <SiPython className="w-3.5 h-3.5 text-[#3776AB]" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-3.5 h-3.5 text-[#009688]" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="w-3.5 h-3.5 text-[#FFD21E]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-3.5 h-3.5 text-[#FF2D20]" /> },
    ],
    github: "https://github.com/ddiazridho/jobfit-ai-api",
  },
  {
    title: "OpenClaw-IG Integration",
    description:
      "An Instagram DM bot built on OpenClaw and Meta Webhooks that answers questions about competitions and opportunities info. This project is still in development phase",
    thumbnail: "/OPENCLAW-IG.png",
    tags: [
      { name: "Python", icon: <SiPython className="w-3.5 h-3.5 text-[#3776AB]" /> },
      { name: "Docker", icon: <SiDocker className="w-3.5 h-3.5 text-[#2496ED]" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-3.5 h-3.5 text-[#009688]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" /> },
      { name: "OpenClaw", icon: <Bot className="w-3.5 h-3.5 stroke-[2.5] text-[#111] dark:text-slate-200" /> },
      { name: "OpenAI API", icon: <RiOpenaiFill className="w-3.5 h-3.5 text-[#10A37F]" /> },
    ],
    github: "https://github.com/ddiazridho/instagram_openclaw",
  },
];

export default function ProjectsSection() {
  const { t } = useThemeLanguage();

  const localizedProjects = [
    {
      ...projects[0],
      description: t.projects.jobfitDesc,
    },
    {
      ...projects[1],
      description: t.projects.openclawDesc,
    },
  ];

  return (
    <section
      id="projects"
      className="w-full scroll-mt-24 relative overflow-hidden"
    >
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
              {t.projects.badge} <span className="opacity-40 font-normal">|</span> (03)
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
            {t.projects.title} <br />
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
            {t.projects.subtitle}
          </motion.p>
        </div>

        {/* Grid 2 Kolom (Desktop) / 1 Kolom (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {localizedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              custom={3 + index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-[3px] border-[#111] dark:border-slate-200 bg-white dark:bg-[#121826] rounded-2xl sm:rounded-3xl shadow-[6px_6px_0px_0px_#111] dark:shadow-[6px_6px_0px_0px_#0047AB] p-5 sm:p-6 lg:p-7 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#111] dark:hover:shadow-[8px_8px_0px_0px_#38BDF8] transition-all duration-200 flex flex-col h-full group"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl border-[2.5px] border-[#111] dark:border-slate-300 overflow-hidden bg-neutral-100 dark:bg-[#182236] shadow-[3px_3px_0px_0px_#111] dark:shadow-[3px_3px_0px_0px_#0047AB] mb-5">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Judul Project */}
              <h3
                className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111] dark:text-[#F8FAFC] mb-2.5"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {project.title}
              </h3>

              {/* Deskripsi Project */}
              <p className="text-xs sm:text-sm text-[#374151] dark:text-slate-300 font-medium leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <div
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border-[2px] border-[#111] dark:border-slate-300 bg-white dark:bg-[#182236] text-[#111] dark:text-slate-100 font-bold text-xs shadow-[2px_2px_0px_0px_#111] dark:shadow-[2px_2px_0px_0px_#0047AB] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#111] dark:hover:shadow-[3px_3px_0px_0px_#38BDF8] transition-all cursor-default select-none"
                  >
                    {tag.icon && (
                      <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                        {tag.icon}
                      </span>
                    )}
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>

              {/* Tombol selalu bawah (mt-auto / tombol selalu bawah) */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border-[2.5px] border-[#111] dark:border-slate-200 bg-[#E23636] hover:bg-[#DC2626] dark:hover:bg-[#EF4444] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_0px_#111] dark:shadow-[3px_3px_0px_0px_#FFFFFF] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_#111] dark:hover:shadow-[5px_5px_0px_0px_#38BDF8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#111] transition-all duration-150 no-underline cursor-pointer select-none"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <SiGithub className="w-4 h-4 text-white" />
                <span>{t.projects.githubBtn}</span>
                <HiArrowTopRightOnSquare className="w-4 h-4 stroke-[2]" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
