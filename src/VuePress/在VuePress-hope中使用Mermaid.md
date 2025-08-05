---
tags:
  - Mermaid
  - vuepress
---
# 在VuePress-hope中使用Mermaid
1. 安装mermaid
``` bash
npm i -D mermaid
```
2. 配置
``` title=theme.ts
hopetheme({
	markdown: {
		mermaid: true,
	},
})
```
3. 测试
``` mermaid
sequenceDiagram

    Alice->>+John: Hello John, how are you?

    Alice->>+John: John, can you hear me?

    John-->>-Alice: Hi Alice, I can hear you!

    John-->>-Alice: I feel great!
```
代码块语言为mermaid