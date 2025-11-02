import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "",
  description: "",

  theme,
  
  plugins: [
    slimsearchPlugin({
      // 配置项
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
