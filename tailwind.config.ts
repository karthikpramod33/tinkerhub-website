import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",       // bright white page background
        charcoal: "#1E1B16",    // dark overlays, modal backdrops, badges
        surface: "#FFFFFF",     // card background
        surface2: "#F4F3FA",    // secondary panel / tag background
        line: "#E7E5F0",        // hairline borders
        paper: "#242233",       // primary text
        muted: "#7A7887",       // secondary text
        electric: "#EC7FB0",    // pink — primary accent
        cyan: "#5CB8DB",        // light blue — secondary accent
        violet: "#A78BFA",      // violet — tertiary accent
        yellow: "#F2C94C",      // yellow — fourth accent
        green: "#6FB37E",       // pastel green — fifth accent
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        marquee: "marquee 22s linear infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
