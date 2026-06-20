"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const experiences = [
  {
    role: "AI Development Intern",
    text: "Worked on AI tools, models, automations, and AI product workflows.",
  },
  {
    role: "Community Manager",
    text: "Built and managed engaged communities, campaigns, and user interaction.",
  },
  {
    role: "AI Researcher",
    text: "Explored AI research, models, market trends, and applications.",
  },
  {
    role: "Market Research Analyst & Product Designer",
    text: "Currently working at Hera AI / Hera Video. Researching product opportunities, user behavior, market positioning, and product design improvements.",
  },
  {
    role: "Marketing Lead & Head",
    text: "Currently leading marketing and growth at Pluto AI. Working on content strategy, brand growth, campaigns, and audience building.",
  },
];

export default function Experience() {
  return (
    <SectionReveal id="experience" className="relative z-10 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
      <div className="glass rounded-[2rem] p-7 sm:p-9">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-aura/75">Experience ✦</p>
        <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          The journey behind the builder.
        </h2>
        <div className="mt-8 space-y-4">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="relative rounded-[1.35rem] border border-white/80 bg-white/60 p-5 pl-7 shadow-[0_14px_38px_rgba(56,76,139,0.09)]"
            >
              <span className="absolute left-0 top-6 h-8 w-1 rounded-r-full bg-aura shadow-glow" />
              <h3 className="font-display text-2xl font-semibold">{item.role}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/68">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/48 p-8 shadow-glass backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.65),rgba(178,207,255,0.34)),radial-gradient(circle_at_70%_72%,rgba(77,101,255,0.22),transparent_18rem)]" />
        <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
          <div>
            <p className="font-display text-5xl font-semibold leading-none">
              The Story
              <br />
              No one sees.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-ink/68">
              There were nights I overthought. Days I felt lost. Moments I wanted to quit. People who left.
              Plans that failed.
            </p>
          </div>
          <p className="max-w-sm border-l-2 border-aura pl-5 text-lg font-bold leading-7">
            But every time I broke, I built something instead.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
