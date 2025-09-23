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
``` plantuml
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
``` plantuml
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




