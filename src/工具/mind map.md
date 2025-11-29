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



## Multilines
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


