import { defineConfig } from "umi";
const path = require('path');

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs/:docName", component: "docs/[docName]" }, // 动态路由
  ],
  npmClient: "pnpm",
  chainWebpack: (memo) => {
    memo.module
      .rule("markdown")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader");
    memo.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    memo.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
    memo.resolve.alias.set('@utils', path.resolve(__dirname, 'src/utils'));
  },
});
