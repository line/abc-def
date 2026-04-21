import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tailwind/index": "src/tailwind/index.ts",
  },
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
});
