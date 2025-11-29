---
category: 工具
tags:
  - obsidian
---
# Obsidian Help
ob 软件本身的使用，不包含插件

参考：
[Home - Obsidian Help](https://help.obsidian.md/)

<!--more-->

## Math
在obsidian 中插入公式，使用LaTeX 标记语法
1. 行间
实现：
```LaTex 
$$
\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc
$$
```
效果：
$$
\begin{vmatrix}a & b\\
c & d
\end{vmatrix}=ad-bc
$$
$$
e^{2i\pi} = 1
$$

2. inline
实现：
```LaTex
这是文本行内的公式$e^{2i\pi} = 1$
```
效果：
这是文本行内的公式$e^{2i\pi} = 1$

行内 和 行间 显示的效果不一致，行间的公式显示中央，inline 公式显示在文本行内



## Linking notes and files
### Supported formats for internal links
1. `[[Enlgish/ResouRelative Pronouns]]`
2. `[[Relative Pronouns.md]]`
3. `[Relative Pronouns](Relative%20Pronouns)`
4. `[Relative Pronouns](Relative%20Pronouns.md)`

以上4中链接都会链接到Relative Pronouns.md 

1、2 是 Wikilink 格式，3、4是 Markdown 格式
可以看到wiki 格式只需要文件名称就能链接到对应的md文件，而Markdown 格式链接名 和 链接文件分开指定，同时链接文档路径需要 URL encode（用`%20` 替换文件名中的空格）

### Link to a file
在编辑模式下输入`[[` 就会弹出链接文件菜单，输入链接文件名称，根据提示进行选择

- 即使使用Markdown 格式的链接也能通过`[[` 输入链接，ob会自动转换链接的格式


### Link to a heading in a note
>[!info]
>To link to a heading in another note, add a hash (`#`) at the end of the link destination, followed by the heading text.

如果是要链接到当前文档的内的heading，直接使用\#
