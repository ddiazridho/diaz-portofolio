"use client";

const STATS = [
  { value: "10+", label: "Projects" },
  { value: "2+",  label: "Years Learning" },
  { value: "3",   label: "Competitions" },
];

export default function StatsStrip() {
  return (
    <div
      className="grid grid-cols-3 gap-4 max-w-md border-t-2 border-dashed border-[#111]/20 pt-6"
    >
      {STATS.map((stat, i) => (
        <div key={stat.label} className="flex flex-col items-center lg:items-start relative">
          {/* Vertical divider — only between items */}
          {i > 0 && (
            <span
              aria-hidden="true"
              className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-px bg-[#111]/15"
            />
          )}
          <span
            className="text-3xl font-extrabold leading-none"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "#111" }}
          >
            {stat.value}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1 text-center lg:text-left leading-tight">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
