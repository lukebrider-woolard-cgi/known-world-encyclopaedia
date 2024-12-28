/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import typography from "@tailwindcss/typography";

export default {
  content: {
    files: ["./index.html", "./src/App.tsx", "./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    extract,
  },
  theme: {
    extend: {
      aspectRatio: {
        map: "4096 / 3351",
      },
      backgroundImage: {
        "arcane-lib":
          "linear-gradient(rgba(31, 41, 55, 0.75), rgba(31, 41, 55, 0.75)), url('/known-world-encyclopaedia/background.jpg')",
      },
      fontFamily: {
        // lora: ["Lora"],
      },
      maxHeight: {
        90: "90%",
      },
    },
    screens,
    fontSize,
    // typography: {
    //   DEFAULT: {
    //     css: {
    //       p: {
    //         marginTop: 0,
    //         marginBottom: "1rem",
    //       },
    //     },
    //   },
    // },
  },
  plugins: [fluid, typography],
};
