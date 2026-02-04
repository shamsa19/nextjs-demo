import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          900: "#ffffff",
          800: "#f9fafb",
          700: "#f3f4f6",
          500: "#9ca3af",
          400: "#6b7280",
        },
        dark: {
          100: "#111827",
          200: "#151821",
          300: "#1f2937",
          400: "#374151",
          500: "#6b7280",
        },
        primary: {
          500: "#ff7000",
        },
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
