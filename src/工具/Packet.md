---
category: 工具
tags:
  - 绘图/Packet
---
# Packet
>[!quote]
>A packet diagram is visual representation used to illustrate the structure and contents of a network packet.

<!-- more -->

## 示例
::: preview 
``` mermaid
---
packet demo
---
packet-beta
	+8: "Block 0"
	8: "Block 1"
	9-15: "Block 2"
	+8: "Block 3"
```
:::


| 行号  | 功能              | 说明             |
| --- | --------------- | -------------- |
| 6   | 指定数据宽度          | 起始位置：基于前面 包的长度 |
| 7   | 指定起始位置，1bit 的数据 |                |
| 8   | 指定数据起始和结束位置     |                |


>[!note]
>不要混用指定长度 和 起始-结束位置 两种语法，如果指定的起始位置和计算的位置不一致，无法正确解析并显示


问：<mark style="background: #FFF3A3A6;">怎么设置一行的长度？</mark>
比如下面的：
``` mermaid
packet
    0: "0"
    1-7: "1"
    8-15: "2"
    16-23: "3"
    24-31: "4"
```
如何设置为2字节（16bits）一行？

目前Packet 图很简单，只能用于包的整体说明。
希望能添加以下功能：
- 可以设置一行数据宽度
- 可以设置一行前的说明
- 可以在下方或上方对多个属性进行说明
