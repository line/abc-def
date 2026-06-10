import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "~/registry/bases/reka/examples",
        replacement: path.resolve(__dirname, "./src/examples"),
      },
      {
        find: "@/registry/bases/reka/components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
});
