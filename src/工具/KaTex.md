---
category: 工具
---
# KaTex
官网：
[Supported Functions · KaTeX](https://katex.org/docs/supported)


## Environments
构成：
- 外围符号（包装）
- 内部关系：
	- `\\`：上下层级
	- `&` : 间隔
语法：
``` latex
\begin{environment} 
	a && b \\ c
\end{environment}
```

| 行号  | 功能                  | 说明  |
| --- | ------------------- | --- |
| 1   | 下面的元素在 environment内 |     |
| 3   | 结束environment       |     |


示例：
:::preview
$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$
:::


## 线性代数相关

### 向量
:::preview
$$
\vec{u}
$$
:::

:::preview
$$\vec{v} = \begin {pmatrix} x \\y \\z \end {pmatrix}$$
:::

