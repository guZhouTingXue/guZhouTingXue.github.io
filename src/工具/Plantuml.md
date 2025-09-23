---
category: 工具
---
# Plantuml
配置：
``` ts title="theme.ts"
hopetheme({
	markdown: {
		plantuml: true,
	},
})
```

使用：

@startuml
Bob -> Alice : hello
@enduml

问题：<mark style="background: #FFB8EBA6;">obsidian中可以通过PlantUML插件支持plantuml，但是需要通过代码块使用，设置代码块的语言。而vuepress 自带的plantuml扩展需要使用@startuml 及 @enduml 来包围plantuml 代码。两者不一致</mark>

问题不大，obsidian中预览不了效果就直接在网页上查看，需要的是最终呈现效果。

