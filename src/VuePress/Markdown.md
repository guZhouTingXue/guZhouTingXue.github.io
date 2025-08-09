# Markdown
推荐的文档结构：
``` markdown
# 文档标题： 同文件名
作者
摘要
目录
## 标题1
### 标题1.1
## 标题2
.。。
```
	这应该算是传统的markdown 文档结构，但是为了适应工具要求，比如hope主题 在fronmatter 中设置作者，摘要标签前所有信息均为摘要 等，可以适当调整结构。这里从2级标签开始划分文档，我之前都是从1级开始，1级前作为文档说明。

## 代码块
``` cpp title="demo"
#include <iostream>

int main()
{
	int i; // [!code --]
	int i = 3; // [!code ++]
	
	std::cout << "hello" << std::endl; // [!code highlight]
	int *p = new int(3); // [!code warning]
	auto j = i / 0; // [!code error]
	// [!code word:Word]
	//Word highlight
	Word
	
	//从这里开始折叠折叠
	:collapsed-lines = 17
	auto func = []() {
		std::cout << "lambda";
	}
	
	return 0;
	
}
```

| 行号    | 功能   | 语法                                                                        | 配置属性                  |
| ----- | ---- | ------------------------------------------------------------------------- | --------------------- |
| 5、6   | 差异   | \[!code --], \[!code ++]                                                  | notationDiff          |
| 8     | 行高亮  | \[!code highlight]                                                        | notationHighlight     |
| 9、10  | 错误标记 | \[!code warning], \[!code error]                                          | notationErrorLevel    |
| 12、13 | 字符高亮 | \[!code word:Word]                                                        | notationWordHighlight |
| 16    | 折叠   | :collapsed-lines<br>:no-collapsed-lines<br>:collapsed-lines=17 //从17行开始换行 | collapsedLines        |
|       | 标题   | \`\`\`  cpp title="demo"                                                  |                       |

问题：<mark style="background: #FFF3A3A6;">标题是不支持中文吗？</mark>

配置：
``` js title="theme.ts"
hopetheme({
	//...
	markdown: {
		highlighter: {
			notationDiff: true,
			notationHighlight: true,
			notationErrorLevel: true,
			notationWordHighlight: true,
			notationFocus: true,
			collapsedLines: true,
		},
	},
)}
```
### 聚焦
``` js
console.log(`1`);
console.debug(`2`); // [!code focus]
console.log(`3`);
```

| 行号  | 功能  | 语法             | 配置属性          |
| --- | --- | -------------- | ------------- |
| 2   | 聚焦  | \[!code focus] | notationFocus |

## GFM 警告
具有图标、背景颜色，用来突出显示信息的块
配置：
``` js title="theme.ts"
markdown: {
	...
	alert: true,
	...
},
```

示例：
> [!note]
> 这是一条注释信息
> 语法：\>\[!note]  换行 > 这是一条。。。

支持的类型：
- important
- info
- tip
- warning
- caution
- note

## 未归档
表格：表格内换行 使用\<br>
