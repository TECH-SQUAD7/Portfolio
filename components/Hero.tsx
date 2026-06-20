"use client";

import { motion } from "framer-motion";

const stats = [
  ["5+", "AI Internships"],
  ["10+", "Projects Built"],
  ["3+", "Startups & Ideas"],
  ["15+", "Competitions"],
  ["Many", "Sleepless Nights"],
];

export default function Hero() {
  return (
    <section id="home" className="relative z-10 grid min-h-[92vh] gap-5 lg:grid-cols-[1.12fr_0.88fr]">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 shadow-glass backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(90,127,255,0.34),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.94),rgba(210,228,255,0.52)_45%,rgba(151,188,255,0.32))]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[40%] top-[5%] h-[28rem] w-[44rem] rounded-full bg-white/55 blur-3xl" />
          <div className="absolute right-[-8%] top-[18%] h-[22rem] w-[38rem] rounded-full bg-[#7db1ff]/35 blur-3xl" />
          <div className="absolute bottom-[10%] left-[24%] h-[14rem] w-[38rem] rounded-full bg-[#ffd6cb]/35 blur-3xl" />
          <motion.div
            className="paper-plane absolute left-[58%] top-[16%]"
            animate={{ y: [0, -12, 0], x: [0, 16, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="paper-plane absolute right-[12%] top-[10%] scale-75"
            animate={{ y: [0, 10, 0], x: [0, -18, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="balcony-line" />
          <div className="anime-silhouette" />
        </div>

        <div className="relative z-10 flex min-h-[92vh] flex-col justify-between p-6 sm:p-10 lg:p-12">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold tracking-[0.32em] text-aura/80">
              夢に向かって、毎日進化中。
            </p>
            <p className="mb-3 text-sm font-semibold text-ink/62">Rajat / student builder</p>
            <h1 className="font-display text-6xl font-semibold leading-[0.9] tracking-normal text-ink sm:text-7xl xl:text-8xl">
              Building
              <br />
              my own
              <br />
              <span className="text-aura">path.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-ink/76 sm:text-lg">
              Student. Builder. Researcher. Founder. Turning ideas into products and impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-aura px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#334cff]"
              >
                Explore My Journey
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/80 bg-white/72 px-7 py-3 text-sm font-semibold text-ink shadow-[0_12px_38px_rgba(56,76,139,0.12)] transition hover:-translate-y-0.5 hover:text-aura"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + index * 0.08 }}
                className="glass rounded-3xl px-4 py-4 text-center"
              >
                <p className="font-display text-3xl font-bold text-ink">{value}</p>
                <p className="text-[11px] font-semibold text-ink/62">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 34 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
        className="grid gap-5 lg:grid-rows-[1fr_auto]"
      >
        <div className="deep-glass relative min-h-[420px] overflow-hidden rounded-[2rem] p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_22%,rgba(255,255,255,0.28),transparent_18rem),linear-gradient(135deg,rgba(31,62,137,0.25),rgba(6,15,50,0.78))]" />
          <div className="absolute -right-12 bottom-4 h-56 w-56 rounded-full border border-white/30 bg-white/10 blur-[1px]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/68">side note</p>
            <blockquote className="max-w-sm font-display text-5xl font-semibold leading-[0.96]">
              Past hurt.
              <br />
              Present builds.
              <br />
              Future heals.
            </blockquote>
            <p className="max-w-xs text-sm leading-6 text-white/74">
              Nobody sees the thousands of thoughts behind one quiet decision to keep going.
            </p>
          </div>
        </div>

        <div className="glass rounded-[2rem] p-7">
          <p className="mb-4 font-display text-3xl font-semibold">What I do</p>
          <div className="flex flex-wrap gap-2">
            {[
              "AI Development",
              "Product Design",
              "Market Research",
              "Community Building",
              "Marketing Strategy",
              "Web Development",
              "Startup Building",
              "Research & Analysis",
            ].map((skill) => (
              <span key={skill} className="rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-xs font-semibold text-ink/70">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
