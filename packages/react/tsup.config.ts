import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  format: ["cjs", "esm"],
  banner: { js: '"use client";' },
  external: ["react", "react-dom", "react-hook-form"],
});
