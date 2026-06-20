import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071338",
        blueglass: "#eaf2ff",
        aura: "#4a63ff",
      },
      boxShadow: {
        glow: "0 18px 60px rgba(76, 103, 255, 0.22)",
        glass: "0 24px 80px rgba(56, 76, 139, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
