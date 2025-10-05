---
category: 工具
tags:
  - Mermaid
---
# Flowchart
各种形状的节点表示处理对象、处理过程、处理结果等
类型：graph TD
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
## Links between nodes
节点连接
::: preview
``` mermaid
flowchart LR
	A --> B 
	C --- D 
	E --- |This is the text| F
	G -.-> |text| H
	k ==> |text| L
	M --> N & O --> P
	R <--> S
    T --o U
    V --x W

```
:::

| 连接类型                 | 语法                | 说明                                     |
| -------------------- | ----------------- | -------------------------------------- |
| link with arrow head | A --> B；C --- D   |                                        |
| 带文本描述的arrow head     | E --> \|text\| F  | 在箭头后使用\| \| 包围说明文本，所有箭头都可以使用这种方法定义文本描述 |
| Dotted Link          | G -.-> H          |                                        |
| Thick Link           | K ==> L           |                                        |
| multiple link        | M --> N & O --> P | 看作是一个整体，拆分后对整体内包含的所有node 都有有效          |
| 双向箭头                 | R <--> S          |                                        |
| ⚪                    | T --o U           |                                        |
| x                    | V --x W           |                                        |

## Comments
::: preview
``` mermaid
flowchart LR
	A --> B
	%% this is a comment 
	B --> C
```
:::

注释的要求：
- 另起一行
- 使用\%% 作为起始

