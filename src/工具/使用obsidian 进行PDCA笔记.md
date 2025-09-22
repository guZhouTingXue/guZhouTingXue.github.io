---
category: 工具
tags:
  - obsidian
  - 读书笔记/PDCA循环工作法
---
# 使用obsidiian 进行PDCA笔记
**Goal**
使用obsidian作为编辑器，构建符合PDCA循环工作法中介绍的笔记框架的笔记。并且能够通过vuepress中呈现

**Plan**
使用单个表格，按照PDCA笔记区域进行划分。
标题栏需要横跨多列（表格合并单元格功能）
由于ob以及vuepress 的markdown 语法不支持合并单元格，所以无法直接构建。ob 需要插件扩展表格功能，以支持编辑显示可合并表格。vuepress 需要插件支持显示合并后的表格。

1. obsidian 表格插件
2. vuepress 表格插件

**Do**
1. obsidian 表格插件：[PKMer_Obsidian 插件：Table Extended 表格合并利器](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/table-extended/)
功能:
>提供了MultiMarkdown 表格语法 和 内部链接 和 完整嵌入的功能，主要有 单元跨列合并、单元跨行合并、。。。需要放在 tx 代码块中或者在上一行加上 -tx- 才能渲染成功；

对表语法的支持需要前缀提示

2. vuepress 表格插件：[markdown-it-multimd-table - npm](https://www.npmjs.com/package/markdown-it-multimd-table)
>This plugin extends markdown-it with MultiMarkdown table syntax.

通过npm安装插件后，vuepress 可以直接显示符合MultiMarkdown table syntax 的表格。

**Check**
不想进行额外的设置（如在ob中使用-tx-前缀编辑表格，在vuepress转换md 为html 进行解析时去掉-tx-前缀），并且ob中没有直接使其支持Multimd table syntax 的插件，所以先放弃使用可合并的表格作为PDCA笔记框架。

PDCA的各个步骤并非一定要并列显示，书中的框架受限于使用的笔记工具-A4笔记本。通过obsidian 电子工具记录笔记可以不限制纵向的高度。所以可以将PDCA笔记纵向排列

行动不顺的原因：根据书中介绍的笔记框架想到使用表格来构建PDCA笔记很正常。问题在于，
1. 书中的笔记是整体说明，没有具体实际执行的完整示例；
2. 既然想到了表格记笔记，为什么没有查找excel PDCA模板，比较模板和书中示例的区别，再实现自己的笔记框架。
3. 拘泥于形式，重点在于笔记的内容

**Act**


**Plan**
查找excel PDCA模板，根据模板内容 设计PDCA模板

**Do**
[Free PDCA Templates, Forms & Examples](https://www.smartsheet.com/content/pdca-templates)
参考其中的PDCA Form Template Example

## 日常PDCA笔记模板

时间：
今日目标：

| time  | plan | 优先级 | 结果  | 想法  | 行动是否顺利 | 遇到的困难 | 造成困难的原因 | 改进(adapt) | 采用(adopt) | 废弃(abandon) |
| ----- | ---- | --- | --- | --- | ------ | ----- | ------- | --------- | --------- | ----------- |
| 7:00  |      |     |     |     |        |       |         |           |           |             |
| 8:00  |      |     |     |     |        |       |         |           |           |             |
| ...   |      |     |     |     |        |       |         |           |           |             |
| 21:00 |      |     |     |     |        |       |         |           |           |             |
| 22:00 |      |     |     |     |        |       |         |           |           |             |


## 目标达成PDCA笔记模板

goal：
前言：目标出现的原因
current state：存在的问题，对问题的分析、理解

| No. | Task | Start Date | End Date | Expected Outcomes | What worked？ | What Didn't Work? | Data Review |
| --- | ---- | ---------- | -------- | ----------------- | ------------ | ----------------- | ----------- |
|     |      |            |          |                   |              |                   |             |
|     |      |            |          |                   |              |                   |             |

**Act**
adapt:
adopt:
abandon:

Next Steps:

