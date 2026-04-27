import { defineConfig } from "tsup";
import Vue from "unplugin-vue/esbuild";

export default defineConfig({
  esbuildPlugins: [Vue()],
  entry: {
    index: "src/index.ts",
  },
  dts: false,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
  external: ["vue"],
});
