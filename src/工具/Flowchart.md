---
category: 工具
tags:
  - Mermaid
---
# Flowchart
各种形状的节点表示处理对象、处理过程、处理结果等

## 基本流程图要素
``` mermaid
graph TD
    A[fa:fa-user Tom] -->|Get money| B(Go shopping)
    B --> C{Select}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

定义节点的语法：
:::tabs
@tab id 和 文本相同
```
graph
	node
```

``` mermaid
graph
	node
```

@tab id 和 文本不同的节点
``` 
flowchart 
    id1[这是框中的文本]
```

``` mermaid
flowchart 
    id1[这是框中的文本]
```
:::

通过id 引用节点

各种形状的节点定义：

| 形状    | 定义          | 功能      |
| ----- | ----------- | ------- |
| 矩形    | \[ ]        | 过程      |
| 圆角矩形  | ( )         | 开始/结束   |
| 菱形    | { }         | 选择      |
| 3个矩形  | \[ \[ \] \] | 子流程     |
| 圆柱    | \[ ( )\]    | 数据库     |
| 平行四边形 | \[  / /\]   | 数据输入/输出 |

链接上的文本：
``` 
NodeA -->|text| NodeB
```
效果：
``` mermaid
flowchart
	NodeA -->|text| NodeB
```
