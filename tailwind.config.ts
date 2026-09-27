import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0F1216",
          light: "#FAF9F6",
        },
        surface: {
          DEFAULT: "#171B21",
          light: "#F0EEE8",
        },
        ink: {
          DEFAULT: "#E7E9EC",
          light: "#1B1D21",
        },
        muted: {
          DEFAULT: "#8B94A3",
          light: "#6B7280",
        },
        line: {
          DEFAULT: "#262B33",
          light: "#DEDBD2",
        },
        signal: "#E3A857",
        wire: "#4A9B8E",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
