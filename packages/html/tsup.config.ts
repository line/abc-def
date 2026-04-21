import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
});
