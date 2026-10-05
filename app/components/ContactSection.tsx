"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiEnvelope, HiPaperAirplane } from "react-icons/hi2";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
  { icon: <SiGithub />, label: "GitHub", href: "https://github.com/ddiazridho" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <SiX />, label: "X (Twitter)", href: "https://x.com" },
  { icon: <HiEnvelope className="w-5 h-5" />, label: "Email", href: "mailto:hello@diazridho.dev" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send (replace with real API call)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24"
      style={{ background: "var(--color-bg)", borderTop: "1.5px solid var(--color-border)" }}
    >
      <div className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col gap-3 mb-14"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mx-auto"
            style={{ background: "var(--color-green)", color: "white" }}
          >
            Get in Touch
          </span>
          <h2 className="section-title">
            Yuk, <span>Ngobrol!</span> 💬
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
          >
            Punya proyek seru atau ingin berkolaborasi? Kirim pesan dan saya akan merespons dalam 24 jam!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <span className="text-5xl">🎉</span>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Pesan Terkirim!
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}>
                  Terima kasih! Saya akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-blue-500"
                    style={{
                      borderColor: "var(--color-border)",
                      fontFamily: "var(--font-inter)",
                      background: "var(--color-bg)",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-blue-500"
                    style={{
                      borderColor: "var(--color-border)",
                      fontFamily: "var(--font-inter)",
                      background: "var(--color-bg)",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Halo Diaz, saya ingin mendiskusikan..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors focus:border-blue-500 resize-none"
                    style={{
                      borderColor: "var(--color-border)",
                      fontFamily: "var(--font-inter)",
                      background: "var(--color-bg)",
                    }}
                  />
                </div>

                <motion.button
                  id="contact-submit"
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary justify-center"
                >
                  <HiPaperAirplane className="w-4 h-4" />
                  Kirim Pesan
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right – Social + info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Temukan Saya Di 🌐
              </h3>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 card px-5 py-4 no-underline"
                    style={{ color: "var(--color-text)", textDecoration: "none" }}
                  >
                    <span className="text-xl" style={{ color: "var(--color-blue)" }}>{s.icon}</span>
                    <span
                      className="font-semibold text-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {s.label}
                    </span>
                    <span className="ml-auto text-gray-400 text-xs">↗</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="card p-6 flex gap-4 items-start"
              style={{ borderLeft: "4px solid var(--color-green)" }}
            >
              <span className="text-3xl">🟢</span>
              <div className="flex flex-col gap-1">
                <span
                  className="font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Open to Opportunities
                </span>
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-inter)" }}
                >
                  Tersedia untuk proyek freelance, full-time, maupun kolaborasi jangka panjang.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
