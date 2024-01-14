/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/App.tsx", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        chromatic: "multicolor 3s linear infinite",
      },
      keyframes: {
        multicolor: {
          "0%": {
            color: "#9ceb34",
            transform: "rotate(0deg)",
          },
          "20%": {
            color: "#eb3483",
          },
          "40%": {
            color: "#a534eb",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "60%": {
            color: "#ebb734",
          },
          "80%": {
            color: "#34eb8f",
          },
          "100%": {
            color: "#9ceb34",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [typography],
};
