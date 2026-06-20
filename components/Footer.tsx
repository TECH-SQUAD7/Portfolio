"use client";

import SectionReveal from "./SectionReveal";

export default function Footer() {
  return (
    <SectionReveal id="contact" className="relative z-10">
      <footer className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/58 p-8 shadow-glass backdrop-blur-2xl sm:p-10">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-aura/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-28 w-96 rounded-full bg-white/70 blur-2xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-aura/75">
              まだ終わりじゃない、ここからが本番だ。
            </p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
              This is not the end.
              <br />
              It&apos;s just the starting screen.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-ink/68">
              Always open to collaborate, build, research, and create meaningful products from unfinished ideas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="mailto:hello@rajat.dev" className="rounded-full bg-aura px-6 py-3 text-sm font-bold text-white shadow-glow">
              Contact Rajat
            </a>
            <a href="#home" className="rounded-full border border-white/80 bg-white/70 px-6 py-3 text-sm font-bold text-ink">
              Back to top
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-10 flex flex-col justify-between gap-3 border-t border-indigo-100/80 pt-5 text-xs font-semibold text-ink/52 sm:flex-row">
          <p>Rajat / Building my own path.</p>
          <p>Designed as an original anime-inspired glass portfolio.</p>
        </div>
      </footer>
    </SectionReveal>
  );
}
