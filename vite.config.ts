import { defineConfig } from "vitest/config";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: { entry: resolve(__dirname, "src/invariant.ts"), formats: ["es"] },
    rollupOptions: {
      output: {
        exports: "named",
      },
    },
    minify: "terser",
    terserOptions: {
      mangle: false,
    },
  },
  test: {
    globals: true,
  },
  esbuild: {
    keepNames: true,
  },
});
