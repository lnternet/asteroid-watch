import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { createHtmlPlugin } from "vite-plugin-html";
import checker from "vite-plugin-checker";

export default defineConfig({
  logLevel: "info",
  plugins: [
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
      entry: "src/app.tsx",
      template: "/index.html",
    }),
    checker({ typescript: true }),
  ],
});
