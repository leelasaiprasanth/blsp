import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "@/app/**/*.{ts,tsx}",
    "@/app/components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
      },
      backgroundColor: {
        contrast: "var(--contrast-color)",
        primary: "var(--gray-1)",
        secondary: "var(--gray-2)",
        tertiary: "var(--gray-3)",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-3)",
      },
      boxShadow: {
        soft: "0 15px 30px 0 rgba(0, 0, 0, 0.04)",
      },
      divideColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-3)",
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        in: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "in-reverse": {
          "0%": { opacity: "0", transform: "translateY(-18px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      ringOffsetColor: {
        primary: "var(--gray-12)",
      },
      textColor: {
        link: "var(--blue-11)",
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
      },
    },
  },
};
export default config;
