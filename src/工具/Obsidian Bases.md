---
category: 工具
tags:
  - obsidian/核心插件
---
# Obsidian Bases
>Bases is a core plugin that lets you create database-like views of your notes.

- 多种视图：内置有Table、List、cards
- 通过文件properties 进行过滤

<!-- more -->

## Create a base
**Ribbon**
左侧工具栏中
![|155x32](./attachments/Obsidian%20Bases.webp)

**Command palette**
输入命令：
- `Bases: Create new base` ：创建一个新的Base
- `Bases: Insert new base` ：创建一个新的Base 并嵌入到当前文档中

新建的base 默认生成在根目录下，没有过滤条件（包含所有文件）
### Embed a base
在文档中嵌入一个base
- 指定语法
```
![[File.base#View]
```
`File.base` : base 文件名
`View`: base 中视图的名称
一个base 可以包含多种视图

- code block
:::preview

``` base
views:
  - type: cards
    name: Table
    filters:
      and:
        - file.inFolder("读书笔记")
```

:::

效果：
![|399x78](./attachments/Obsidian%20Bases-1.webp)
过滤条件为 `file.inFoler(“读书笔记”)`
包含了读书笔记文件夹下所有的内容（包含子文件夹-attachments 下的图片）

通过代码块的方式嵌入base 不会创建单独的base 文件（所有信息已经在code block 中指定）

## Layouts
### Cards View
**Settings**
![|200x346](./attachments/Obsidian%20Bases-2.webp)

- Card Size：卡片的大小
- Image property：可以为Card 设置图片，图片通过文件的指定property 设置
property 的值可以是：
1. A link to a local attachment；
2. An external link（URL）
3. A hex color 
示例：
指定 cover 属性 为 image property
:::tabs
@tab local
实现：
``` yaml
cover: 笔记的方法封面.png
```
效果：
![|218x255](./attachments/Obsidian%20Bases-3.webp)
@tab color code
实现：
``` yaml
cover: "#3378ae"
```
效果：
![|220x262](./attachments/Obsidian%20Bases-4.webp)
:::

- Image fit：
:::tabs
@tab Cover
![|220x257](./attachments/Obsidian%20Bases-5.webp)
相当于把图片盖到card上，多出card的部分会被裁剪掉
@tab Contain
![|220x256](./attachments/Obsidian%20Bases-6.webp)
会调整图片的大小以适应card
:::