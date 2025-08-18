---
category: 工具
tags:
  - 绘图
---


# Mermaid
[Home | Mermaid Chart](https://www.mermaidchart.com/)
[关于 Mermaid | Mermaid中文文档](https://docs.min2k.com/zh/mermaid/intro/)
**Mermaid lets you create diagrams and visualizations using text and code.**
<!-- more -->

## 在obsidian 中的使用
``` txt
\`\`\` mermaid
classDiagram
	class Animal {
		+int age
		+String gender
	}
\`\`\`
```
代码语言：mermaid
第一行声明diagram 的类型，然后是diagram的内容
效果：
``` mermaid
classDiagram
	class Animal {
		+int age
		+String gender
	}
```
## Diagram syntax
[Sequence diagrams](Sequence%20diagrams.md)
