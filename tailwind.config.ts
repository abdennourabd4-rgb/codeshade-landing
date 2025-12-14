import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This array tells Tailwind where to look for class names
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056D2",
          hover: "#0044A5",
          light: "#E6F0FF",
        },
        background: "#FFFFFF",
        foreground: "#171717",
      },
      fontFamily: {
        sans: ["var(--font-arabic)", "var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;