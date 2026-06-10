import { defineConfig } from "tsup";
import Vue from "unplugin-vue/esbuild";

export default defineConfig({
  esbuildPlugins: [Vue()],
  entry: ["src/components/*/index.ts"],
  dts: false,
  format: ["esm", "cjs"],
  clean: true,
  minify: true,
  sourcemap: false,
  external: ["vue"],
});
