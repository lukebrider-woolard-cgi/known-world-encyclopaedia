/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/App.tsx", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "arcane-lib":
          "linear-gradient(rgba(31, 41, 55, 0.75), rgba(31, 41, 55, 0.75)), url('/known-world-encyclopaedia/background.jpg')",
      },
    },
  },
  plugins: [typography],
};
