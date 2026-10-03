"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiTailwindcss, SiPostgresql, SiMongodb, SiPrisma,
  SiGit, SiFigma, SiDocker, SiVercel,
  SiJavascript, SiPython, SiGithub, SiVite,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillGroup = {
  category: string;
  emoji: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    emoji: "🖥️",
    skills: [
      { name: "React",       icon: <SiReact />,       color: "#61DAFB" },
      { name: "Next.js",     icon: <SiNextdotjs />,   color: "#000000" },
      { name: "TypeScript",  icon: <SiTypescript />,  color: "#3178C6" },
      { name: "JavaScript",  icon: <SiJavascript />,  color: "#F7DF1E" },
      { name: "Tailwind CSS",icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Vite",        icon: <SiVite />,        color: "#646CFF" },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js",    icon: <SiNodedotjs />,   color: "#339933" },
      { name: "Python",     icon: <SiPython />,      color: "#3776AB" },
      { name: "PostgreSQL", icon: <SiPostgresql />,  color: "#4169E1" },
      { name: "MongoDB",    icon: <SiMongodb />,     color: "#47A248" },
      { name: "Prisma",     icon: <SiPrisma />,      color: "#2D3748" },
    ],
  },
  {
    category: "Tools & Design",
    emoji: "🛠️",
    skills: [
      { name: "Git",     icon: <SiGit />,    color: "#F05032" },
      { name: "GitHub",  icon: <SiGithub />, color: "#181717" },
      { name: "Figma",   icon: <SiFigma />,  color: "#F24E1E" },
      { name: "Docker",  icon: <SiDocker />, color: "#2496ED" },
      { name: "Vercel",  icon: <SiVercel />, color: "#000000" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full scroll-mt-24" style={{ background: "var(--color-bg)" }}>
      <div className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 mb-14 text-center"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mx-auto"
            style={{ background: "var(--color-yellow)", color: "var(--color-text)", border: "2px solid var(--color-text)" }}
          >
            Tech Stack
          </span>
          <h2 className="section-title">
            Skills & <span>Teknologi</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
          >
            Tools dan teknologi yang saya gunakan untuk membangun produk digital
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="flex flex-col gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{group.emoji}</span>
                <h3
                  className="text-base font-bold uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--color-text-muted)" }}
                >
                  {group.category}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--color-border)" }}
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                    className="card flex flex-col items-center gap-2 py-4 px-3 cursor-default"
                  >
                    <span
                      className="text-2xl"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span
                      className="text-xs font-semibold text-center"
                      style={{ color: "var(--color-text)", fontFamily: "var(--font-inter)" }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
