/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import typography from "@tailwindcss/typography";

export default {
  content: {
    files: [
      "./index.html",
      "./src/App.tsx",
      "./src/pages/**/*.{ts,tsx}",
      "./src/components/**/*.{ts,tsx}",
    ],
    extract,
  },
  theme: {
    extend: {
      backgroundImage: {
        "arcane-lib":
          "linear-gradient(rgba(31, 41, 55, 0.75), rgba(31, 41, 55, 0.75)), url('/known-world-encyclopaedia/background.jpg')",
      },
      fontFamily: {
        // lora: ["Lora"],
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid, typography],
};
