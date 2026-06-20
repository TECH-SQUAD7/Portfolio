"use client";

import SectionReveal from "./SectionReveal";

export default function About() {
  const journey = [
    "Curious Student",
    "Started Building",
    "First Internships",
    "AI Research",
    "Founded Crev",
    "Leading Teams",
    "Building The Future",
  ];

  return (
    <SectionReveal id="about" className="relative z-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="deep-glass relative overflow-hidden rounded-[2rem] p-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(120,167,255,0.32),transparent_16rem)]" />
        <div className="relative z-10">
          <p className="mb-8 text-5xl text-white/80">“</p>
          <p className="font-display text-4xl font-semibold leading-tight text-balance">
            The dreams that keep me up at night are the ones that drive me every day.
          </p>
        </div>
      </div>

      <div className="glass rounded-[2rem] p-7 sm:p-9">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-aura/75">My Journey ✦</p>
        <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          A builder with dreams bigger than my age.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-ink/72">
          I&apos;m Rajat, a student, product builder, and researcher who loves solving real-world problems.
          I explore AI, product design, development, marketing, communities, and startup building. I&apos;ve
          failed, I&apos;ve been hurt, and I&apos;ve had moments that could have stopped me, but I kept
          building. Every setback became fuel.
        </p>

        <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/42 p-5">
          <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
            <div className="absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-transparent via-aura/40 to-transparent lg:block" />
            {journey.map((item, index) => (
              <div key={item} className="relative z-10 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-blueglass text-aura shadow-glow">
                  {index + 1}
                </div>
                <p className="text-xs font-semibold leading-5 text-ink/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
