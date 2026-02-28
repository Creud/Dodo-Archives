import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      colors: {
        ink: {
          50: "#f7f8fb",
          100: "#eef1f7",
          200: "#d8deeb",
          300: "#b3bfd9",
          400: "#7f93be",
          500: "#536aa0",
          600: "#3e4f80",
          700: "#304062",
          800: "#232f47",
          900: "#172033",
          950: "#0b101b",
        },
      },
      boxShadow: {
        pixel: "0 0 0 2px rgba(255,255,255,0.06), 0 10px 0 0 rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
