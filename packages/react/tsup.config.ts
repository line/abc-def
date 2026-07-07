import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/*.{ts,tsx}"],
  dts: {
    compilerOptions: {
      ignoreDeprecations: "6.0",
    },
  },
  format: ["esm", "cjs"],
  clean: true,
  minify: true,
  sourcemap: false,
  external: ["react", "react-dom"],
});
