import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

import "dotenv/config";

//
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

export default hopeTheme({
  hostname: "https://guzhoutingxue.github.io/", //当前网站部署到的域名

  author: {
    name: "mingStudent",
  },
  
  //logo: "/awesomeface.png",	//导航栏图标(页面左上角)
  favicon: "/awesomeface.png",   //站点图标
  //repo: "vuepress-theme-hope/vuepress-theme-hope", //项目链接(点击“在github 编辑页面”时跳转的链接?) 

  docsDir: "src",

  // 导航栏
  navbar,//: true,
	//主题切换
	darkmode: "switch", //默认自动切换

  // 侧边栏
  sidebar,

  // 页脚
  footer: "MIT Licensed",
  displayFooter: true,
	
  //标题导航
  //toc: {
	//levels: [1,6]
  //},
	
  blog: {
    name: "明同学",
	avatar: "/awesomeface.png",
    description: "student",
    intro: "/intro",
    medias: {
	  discord: "https://discord.gg/VDDTk2cK",
    },
  },

  // 加密配置
  encrypt: {
	config: {
		"/生活/私.html": {
		  password: [process.env.PASSWORD!],
		  hint: "The password you specified.",
		},
	},
  },


  // 多语言配置
  metaLocales: {
    editLink: false//"在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
	//代码块设置
	highlighter: {
		notationDiff: true,
		notationHighlight: true,
		notationErrorLevel: true,
		notationWordHighlight: true,
		notationFocus: true,
		collapsedLines: true,
	},
	//GFM 警告
	alert: true,
	preview: true, //预览
	
    // 取消注释它们如果你需要 TeX 支持
     math: {
       // 启用前安装 katex
       type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
     },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts npm install -D echarts
    echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
     mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: {
		excerpt: true,
		excerptLength: 0
	},
	//搜索
	slimsearch: {
	
	},
	
	//注册全局组件
	//registerComponentsPlugin({

	//}),
	
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard", "VidStack", 
	  "VPBanner", 
	  "PDF"],
	  componentOptions: {
	    pdf: {
		  pdfjs: "/pdfjs/web", // 告诉组件 viewer.html 的路径
	    },
	},
	
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
