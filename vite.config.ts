import { defineConfig } from "vitest/config";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/invariant.ts"),
      fileName: "ant-invariant",
      formats: ["es"],
    },
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
  plugins: [
    dts({
      entryRoot: "src",
      include: ["src/**/*.ts"],
      outDir: "dist",
    }),
  ],
});
