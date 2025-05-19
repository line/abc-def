import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/react/src/**/*.{ts,tsx}",
  ],
  plugins: [require("@abc-def/tailwindcss")],
} satisfies Config;
