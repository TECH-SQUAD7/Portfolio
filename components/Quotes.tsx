"use client";

import SectionReveal from "./SectionReveal";

const quotes = [
  "I’ve been broken before. But broken things learn how to build better.",
  "Some people leave. Some stay. The goal doesn’t.",
  "Discipline is choosing between what you want now and what you want most.",
  "I don’t chase dreams. I build them.",
  "Every silent night has a louder story.",
];

export default function Quotes() {
  return (
    <SectionReveal id="quotes" className="relative z-10">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="deep-glass rounded-[2rem] p-8 text-white">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/62">Quotes ✦</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Reminders for the days I feel weak.
          </h2>
          <div className="mt-10 space-y-4">
            <p className="text-sm leading-6 text-white/74">I don&apos;t chase success, I build it.</p>
            <p className="text-sm leading-6 text-white/74">Every project is a new arc.</p>
            <p className="text-sm leading-6 text-white/74">Pain changes people. Building changes everything.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {quotes.map((quote) => (
            <article key={quote} className="glass rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <p className="mb-8 text-4xl text-aura/60">✦</p>
              <p className="font-display text-2xl font-semibold leading-tight">{quote}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
