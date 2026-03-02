---
category: 工具
tags:
  - 绘图/mindMap
---
# mind map

## plantuml

### 基本语法

:::tabs
@tab OrgMode 
实现：
```
@startmindmap
* root node
	** some first level node
	*** second level node
	*** another second level node
	** another first level node
@endmindmap
```
效果：
@startmindmap
* root node
	** some first level node
	*** second level node
	*** another second level node
	** another first level node
@endmindmap

@tab Markdown 
实现：
```
@startmindmap
* root node
	* some first level node
		* second level node
		* another second level node
	* another first level node
@endmindmap
```
效果：
@startmindmap
* root node
	* some first level node
		* second level node
		* another second level node
	* another first level node
@endmindmap
:::



### Multilines
:::preview
@startmindmap
* root
	**:标题 
	文本里的换行
	结尾;
@endmindmap
:::

使用\:   \; 包围多行文本 

>[!warning]
>必须在\** - 层级符号后声明起始符号“\:” ，否则语法错误


## markmap
1. 安装
``` bash
npm i -D markmap-lib markmap-toolbar markmap-view
```
2. 启用
``` ts title="theme.ts"
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  markdown: {
    markmap: true,
  },
});
```
3. 使用
:::preview
````markmap
# 一级标题
## 二级标题
- 子项目: 使用markdown 语法
- 链接
  - <https://markmap.js.org/>
  - [markmap](https://markmap.js.org/)
  - [Obsidian Base](/工具/Obsidian%20Bases.html)  
- **粗体**, ~~删除线~~，*斜体*，==高亮==
- 跨行
  文本
- `inline code`
-
	```js
		console.log(`code block`);
	```
- 公式：$\vec{F}$
````
:::

项目可以是代码块，但是如果包含了代码块，那么markmap 要使用 4个\` 字符，否则markmap的\` 会和项目代码块中的\` 匹配导致呈现效果有问题

如果要链接到本地路径html或是要指定链接名称，使用下面的格式：
```
[名称](链接地址)
```
注意md文件对应的html格式：空格使用%20代替


