import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ExampleTransform from "./plugins/example-transform";
const mdPlugin = require("vite-plugin-markdown");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue(),
	mdPlugin.plugin({
      mode: ["html", "vue"],
    }),
    ExampleTransform ],
});