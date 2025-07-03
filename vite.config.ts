import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
      entry: "src/app.tsx",
      template: "/index.html",
    }),
  ],
});
