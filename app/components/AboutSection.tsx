"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full scroll-mt-24" style={{ background: "var(--color-surface)", borderTop: "1.5px solid var(--color-border)" }}>
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "var(--color-blue)", color: "white" }}
              >
                Tentang Saya
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="section-title"
            >
              Seorang developer yang{" "}
              <span>passionate</span> tentang desain
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
            >
              Saya adalah Full-Stack Developer dengan fokus pada pengembangan web modern
              yang cepat dan skalabel. Saya percaya bahwa kode yang baik dan desain yang
              indah bisa berjalan beriringan — menciptakan pengalaman pengguna yang benar-benar berkesan.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
            >
              Ketika tidak sedang coding, saya senang menjelajahi tren desain terbaru,
              minum kopi ☕, dan berkontribusi pada proyek open-source.
            </motion.p>

            <motion.div variants={fadeUp} custom={4}>
              <a href="#contact" className="btn-primary inline-flex">
                Mari Berkolaborasi 🤝
              </a>
            </motion.div>
          </motion.div>

          {/* Right – Decorative card grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🎯", title: "Goal-Oriented", desc: "Setiap baris kode punya tujuan" },
              { icon: "⚡", title: "Fast Delivery",  desc: "Deadline? Sudah jadi kebiasaan" },
              { icon: "🎨", title: "Design-First",  desc: "UX selalu jadi prioritas" },
              { icon: "🤝", title: "Team Player",   desc: "Kolaborasi adalah kunci" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="card p-5 flex flex-col gap-2"
              >
                <span className="text-3xl">{item.icon}</span>
                <span
                  className="font-bold text-sm"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.title}
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
