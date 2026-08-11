---
category: VuePress
---
# PDF
[PDF | 组件库](https://plugin-components.vuejs.press/zh/guide/media/p-d-f.html)

>[!note]
>在本地服务器查看，使用edge 基本无法加载出文档内容（显示为空白），但是使用chrome 就可以。

在md文档中嵌入PDF阅读器
1. 下载 `pdf.js`:[PDF.js - Getting Started](https://mozilla.github.io/pdf.js/getting_started/#download)，将解压后的pdfjs 文件夹拷贝到`.vuepress/public/`下（当前下载最新版本为5.4.394）
2. 启用
``` ts title="theme.ts"
plugins: {
    components: {
      components: [
	  "VPBanner", 
	  "PDF"], //[!code highlight]
	  componentOptions: {
	    pdf: {
		  pdfjs: "/pdfjs/web",  //[!code highlight]
	    },
	},
	
    },
},
```

| 行号  | 功能           | 说明                                        |
| --- | ------------ | ----------------------------------------- |
| 5   | 启用PDF组件      |                                           |
| 8   | 配置本地pdfjs的路径 | 路径为viewer.html所在路径。可以不配置本地pdfjs，注意事项见官网说明 |

3. 设置
查看网络上的pdf文档，验证是否能否正常加载PDF：
:::preview
<PDF url="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"  />
:::
4. 拷贝PDF文件到 `.vuepress/public/`下，设置url为本地pdf文件路径
:::preview
<PDF url="/test/RJ45.pdf"  />
:::

>[!warning]
>注意：如果没有报错，但是本地pdf文件没有显示，可能是还没有加载完成，需要等待一会儿 或者 刷新页面 😂时间可能有点长，也没别的办法

**附**
1. 文件结构
``` 
.
├── pdfjs
│   ├── LICENSE
│   ├── build
│   │   ├── pdf.mjs
│   │   ├── ..
│   └── web
│       ├── viewer.css
│       ├── viewer.html
│       ├── 。。。
├── resources
├── test
│   ├── RJ45.pdf

```
**需要整个pdfjs 目录，包括build**
2. pdfjs项目地址：[mozilla/pdf.js: PDF Reader in JavaScript](https://github.com/mozilla/pdf.js)


**其他**
IDM好像抽风了一直提示下载完成，退出程序后它马上自己启动了，然后又弹窗。即使勾选不再提示还是会提示。。。还好它只是提示不是一直下载
哦，我猜到可能的原因了，是不是因为启动了开发服务器，然后我这里编辑导致页面刷新，然后IDM就会跟着刷新提示？


## 问题
1. 如果在没有显示（内容空白）时点击全屏按钮，页面就会卡住，需要刷新页面。
2. windows 上查看github 站点有效果，在 手机上查看 显示为404，ipad上无法编辑，显示内容（文本）被压缩