---
category: 工具
---
# KaTex
官网：
[Supported Functions · KaTeX](https://katex.org/docs/supported)

>[!warning]
>ob显示的效果和最终网页渲染的结果不一致，以网页呈现效果为准
## Accents
:::preview
$$
\vec{F} \quad \hat{\theta} \quad \overline{AB} \quad \underline{AB}
\quad a' \quad a'' \quad \bar{y}
$$
:::


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


:::tabs
@tab pmatrix
$$
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
$$

@tab vmatrix
$$
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
$$
@tab Bmatrix
$$
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
$$
@tab cases
$$
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
$$

@tab bmatrix
$$
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
$$
:::

### 换行
1. 简单换行
:::preview
$$
a + db = c \\
x + y = z
$$
:::
可以看到上下两行中 = 的位置没有对齐
2. 可设置对齐的换行
:::preview
$$
\begin{aligned}
a + bd &= c \\
x + y &= z
\end{aligned}
$$
:::
通过&指定对齐的元素
3. 设置行间距
:::preview
$$
a \\[1em] b \\[1cm] c
$$
:::
格式：\\\[distance]，单位有em- 正文字高；mm-毫米；cm-厘米 ...

## Letters and Unicode - 符号
:::preview
$$
\pi \quad \theta \quad \alpha \quad \delta \quad \Delta \quad \varphi
$$
:::

## Layout
如何排布元素

### Annotation - 标注
:::preview
$$
\boxed {a b} \quad \not=
$$
:::

### Vertical Layout
示例：下角标
:::preview
$$
x_n
$$
:::

:::tabs
@tab \^
$$
e^x
$$

@tab \\overset
$$
\overset{!}{=}
$$
@tab \\underset
$$
\underset{!}{=}
$$
:::

### Spacing
公式代码中的空格会被忽略，如：
$$
x y
$$
公式中x 和 y 之间间隔了一个空格，但实际显示中没有间隔
:::tabs
@tab \\quad 1 em space
$$
x \quad y
$$
@tab \\qquad 2
$$
x \qquad y
$$
@tab \\enspace
$$
x \enspace y
$$
@tab non-breaking space
$$
x~y
$$
@tab \\space
$$
x \space y
$$
:::

## Logic and Set Theory
示例
:::preview
$$
\subset
$$
:::

| 符号  | 语法         | 含义  |
| --- | ---------- | --- |
| →   | \to        |     |
| ←   | \gets      |     |
| ∵   | \because   | 因为  |
| ∴   | \therefore | 所以  |

## Operators
### Math operators

| 符号  | 语法               | 含义  |
| --- | ---------------- | --- |
| f   | \operatorname{f} |     |
| log | \log             |     |
| ln  | \ln              |     |
| sin | \sin             |     |
|     | \sqrt            | 根号  |
:::preview
$$
\sqrt{x} \quad \sqrt[3]{x}
$$
:::

### Binary Operators
:::preview
$$
x \cdot y \quad x \cdotp y \quad x \centerdot y \\
\times
$$
:::

### Relations
:::preview
$$
 \perp
$$
:::

### Fractions
小数
:::preview
$$
\frac{a}{b} \qquad {a \over b} \qquad  \tfrac{a}{b} \qquad  \dfrac{a}{b}
\qquad {a \above{2pt} b}
$$
:::
- above 可设置分线的宽度

## Style
### color
:::preview
$$
F=ma \\
\color{blue} F=ma \\
\text{换行}
\textcolor{red}{F=ma}
$$
:::
第一种写法：切换为蓝色，后面的内容都为蓝色
第二种写法：“Other color functions expect the content to be a function argument:”，要应用颜色的内容包括在{ } 内

问题：<span style="background:#fff88f">在matrix (Environment) 中不能跨行、列设置颜色？</span>
:::preview
$$
\begin{bmatrix}
\color{red}1 & 2\\
3
\end{bmatrix}
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

