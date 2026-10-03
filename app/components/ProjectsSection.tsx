"use client";

import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import TechBadge from "./ui/TechBadge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform belanja online full-stack dengan fitur autentikasi, keranjang belanja, payment gateway, dan dashboard admin real-time.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    gradient: "linear-gradient(135deg, #1877F2 0%, #0D5DBF 100%)",
    emoji: "🛒",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas kolaboratif dengan drag-and-drop, real-time updates menggunakan WebSocket, dan dark mode.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    gradient: "linear-gradient(135deg, #FF6B35 0%, #FF3B30 100%)",
    emoji: "📋",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Chat Dashboard",
    description:
      "Dashboard interaktif untuk visualisasi data percakapan AI dengan charts, filter real-time, dan export laporan.",
    tags: ["Next.js", "Python", "OpenAI API", "Tailwind"],
    gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
    emoji: "🤖",
    github: "https://github.com",
  },
  {
    title: "Design System UI Kit",
    description:
      "Komponen library React yang reusable dengan Storybook documentation, dark mode support, dan a11y compliance.",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    gradient: "linear-gradient(135deg, #00C853 0%, #00897B 100%)",
    emoji: "🎨",
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-24"
      style={{ background: "var(--color-surface)", borderTop: "1.5px solid var(--color-border)" }}
    >
      <div className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 mb-14"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block self-start"
            style={{ background: "var(--color-red)", color: "white" }}
          >
            Portofolio
          </span>
          <h2 className="section-title">
            Proyek <span>Pilihan</span>
          </h2>
          <p
            className="text-base max-w-lg"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
          >
            Beberapa karya terbaik yang pernah saya kerjakan
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="card overflow-hidden group cursor-pointer"
              style={project.featured ? { gridColumn: "span 2" } : {}}
            >
              {/* Color banner */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{ background: project.gradient }}
              >
                <span className="text-4xl">{project.emoji}</span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live demo"
                    >
                      <HiArrowTopRightOnSquare className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h3
                  className="text-lg font-bold group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} variant="outline" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
