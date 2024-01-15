/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/App.tsx", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
