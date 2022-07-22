import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ExampleTransform from "./plugins/example-transform";
import DefineOptions from "unplugin-vue-define-options/vite";
import { Mode } from "vite-plugin-markdown";

const mdPlugin = require("vite-plugin-markdown");

const commonConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    mdPlugin.plugin({
      mode: [Mode.HTML, Mode.VUE],
    }),
    ExampleTransform,
  ],
};

const libConfig = {
  build: {
    outDir: path.resolve(__dirname, "lib"),
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Fit2CloudUIPlus",
      fileName: (format) => `fit2cloud-ui-plus.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};

const docsConfig = {
  base: "./",
  build: {
    outDir: "docs",
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === "lib") {
    return {
      ...libConfig,
      ...commonConfig,
    };
  } else if  (mode === "docs") {
    return {
      ...docsConfig,
      ...commonConfig,
    };
  }
  return commonConfig;
});
