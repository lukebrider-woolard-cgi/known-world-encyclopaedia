import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://lukebrider-woolard.github.io/known-world-encyclopaedia/",
  assetsInclude: ["**/*.md"],
});
