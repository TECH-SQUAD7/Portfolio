"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  delay: (index % 8) * 0.42,
  duration: 8 + (index % 5),
}));

export default function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 hairline opacity-50" />
      <div className="cloud left-[18%] top-[8%] h-20 w-64" />
      <div className="cloud right-[8%] top-[22%] h-24 w-80" />
      <div className="cloud bottom-[12%] left-[12%] h-24 w-96 opacity-60" />
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-[-8%] h-2 w-3 rounded-[70%_30%_70%_30%] bg-white/80 shadow-[0_0_18px_rgba(99,123,255,0.38)]"
          style={{ left: petal.left }}
          animate={{
            y: ["0vh", "112vh"],
            x: [0, petal.id % 2 ? 70 : -70, 0],
            rotate: [0, 120, 260],
            opacity: [0, 0.95, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
