---
tags:
  - markdown
  - editor
  - vuepress
---
# Obsidian
好用的本地化Markdown 编辑器
<!-- more -->

## 插件
1. Clear Unused Images： 清理未使用的图片。被删除的图片存放在.trash路径下（即使设置了Deleted files Move to System trash）
2. Code Styler： 代码块显示行号、标题等
3. Highlightr：设置文本的颜色
4. Image Converter：快捷调整图片大小，转换图片格式（压缩图片大小）等

## Image Converter
[中文说明](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/readme/image-converter_readme/)
一个目录下所有的文件资源都放在当前目录的attachments下。图片前缀由其所在文档决定。
Conversion：转换为WEBP格式，转换质量为50。Snipaste 截取的图片格式为png，转换为WEBP，质量50能够节省85.9%的内存同时保持31.16 - PSNR的图像质量

## 图片链接
ob中链接格式是wiki，vuepress 的markdown不支持，无法显示该格式的图片链接。

设置：
![](./attachments/使用Obsidian%20作为本地文档工具.png)
1. 将link的格式设置为相对路径
2. 关闭 Use Wikilinks
3. 设置attachments 的路径为 under current folder
![](./attachments/使用Obsidian%20作为本地文档工具-1.png)
4. 修改已经存在的wiki 格式链接：删除原链接文件，拖拽链接到原位置

