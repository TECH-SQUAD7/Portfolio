"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    name: "Crev.ai",
    description: "All-in-one community and productivity platform for ambitious young builders and creators.",
    status: "Building",
  },
  {
    name: "NoResume",
    description: "Proof-of-work based hiring platform designed to replace traditional resumes with real proof.",
    status: "R&D",
  },
  {
    name: "Signal",
    description: "AI Chief of Staff for founders and hackathon teams.",
    status: "Prototype",
  },
  {
    name: "NuroLink",
    description: "AI-powered knowledge and intelligence layer for smarter information flow.",
    status: "Concept",
  },
  {
    name: "ZAX AI",
    description: "Personal AI ecosystem for productivity, creativity, learning, and growth.",
    status: "Experimental",
  },
  {
    name: "Client Websites",
    description: "High-performance websites built for businesses, doctors, and entrepreneurs.",
    status: "Active",
  },
];

export default function Projects() {
  return (
    <SectionReveal id="projects" className="relative z-10 glass rounded-[2rem] p-7 sm:p-9">
      <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-aura/75">Projects ✦</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Ideas that I&apos;m turning into reality.
          </h2>
        </div>
        <a href="#contact" className="text-sm font-bold text-aura">
          Build with me →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="group rounded-[1.5rem] border border-white/80 bg-white/58 p-5 shadow-[0_16px_42px_rgba(56,76,139,0.1)] transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aura to-cyan-300 text-2xl font-black text-white shadow-glow">
                {project.name.charAt(0)}
              </div>
              <span className="rounded-full bg-blueglass px-3 py-1 text-xs font-bold text-aura">{project.status}</span>
            </div>
            <h3 className="font-display text-3xl font-semibold">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/68">{project.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}
