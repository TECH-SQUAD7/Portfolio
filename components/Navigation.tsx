"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home", icon: "✦" },
  { href: "#about", label: "Journey", icon: "⌁" },
  { href: "#projects", label: "Projects", icon: "▦" },
  { href: "#experience", label: "Experience", icon: "◈" },
  { href: "#quotes", label: "Quotes", icon: "❝" },
  { href: "#contact", label: "Contact", icon: "✉" },
];

export default function Navigation() {
  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 top-0 z-30 hidden h-screen w-24 border-r border-white/70 bg-white/52 shadow-[18px_0_70px_rgba(69,88,151,0.08)] backdrop-blur-2xl lg:block"
    >
      <div className="flex h-full flex-col items-center">
        <a href="#home" className="flex h-20 w-full items-center justify-center border-b border-indigo-100/60">
          <span className="star-glow text-4xl text-ink">✦</span>
        </a>
        <nav className="flex w-full flex-1 flex-col items-stretch py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center gap-1 px-2 py-4 text-[11px] font-semibold text-ink/70 transition hover:bg-white/55 hover:text-aura"
            >
              <span className="text-lg transition group-hover:scale-110">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
}
