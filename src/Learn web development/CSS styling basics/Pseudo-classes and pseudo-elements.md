# Pseudo-classes and pseudo-elements

## What is a pseudo-class?
>A pseudo-class is a selector that selects elements that are in a specific state

**specific state**
- the first child element of an element: first-child
- being hovered over by the mouse pointer: hover

给article下的第一个段落设置样式
使用class selector
```html title="index.html"
<article>
	<p class="first">PPP</p>
</article>
```

```css title="style.css"
.first {
	font-size: 120%;
	font-weight: bold;
}
```
如果有新的段落添加到了最前面，需要：
1. 删除以前段落的class中的first；
2. 给新添加的段落添加class="first"

需要一种class 不需要定义在具体的element内（作为element的attribute），而是和selector所匹配的element关联（根据selector匹配的element动态的添加class）
使用pseudo-class设置article的一个段落的样式：
```css title="style.css"
article p:first-child {
	font-size: 120%;
	font-weight: bold;
}
```


## What is a pseudo-element?
>they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements.

目的：select the first line of a paragraph 
使用span 包围第一行的内容
```html 
    <p>
      <span
        >For example, if you wanted to select the first line of a paragraph </span
      >you could warp it in a span element and use an element selector;
    </p>
```

```css
      span {
        color: red;
      }
```
效果：
![|300x87](./attachments/Pseudo-classes%20and%20pseudo-elements.webp)

但是一但p的宽度发生变化，第一行的内容也会变化
![|300x53](./attachments/Pseudo-classes%20and%20pseudo-elements-1.webp)

需要一个特别的 span 能够表示 p 内的第一行

使用pseudo-element对p的第一行进行样式设置
```html
    <p>
      For example, if you wanted to select the first line of a paragraph you
      could warp it in a span element and use an element selector;
    </p>
```

```css
p::first-line {
	color: red;
}
```
相当于创建了一个element名称为first-line，它的内容是p的first-line
```css
p first-line { color: red; }
```
	选择p的子元素first-line
效果：
![|300x188](./attachments/Pseudo-classes%20and%20pseudo-elements-2.webp)
![|300x52](./attachments/Pseudo-classes%20and%20pseudo-elements-3.webp)

### pseudo-class 和 pseudo-element 的区别
- pseudo-element:new element，可以是关联element的一部分
<span style="background:#fff88f">问：</span>可以选择p内first-line，那是不是可以选择指定的行？第n行，最后一行。。。
- pseudo-class：和关联的element的状态 或 子element有关
可以选择first-child，最小的粒度就是element

>[!note]
>Some early pseudo-elements used the single colon syntax.
>Modern browsers support the early pseudo-elements with single or double-colon syntax for backwards compatibility.


### Generating content with ::before and ::after
可以使用pseudo-element添加内容
```html
    <p class="box">Content in the box in my HTML page.</p>
```
应用css前：
![|300x55](./attachments/Pseudo-classes%20and%20pseudo-elements-4.webp)

:::tabs
@tab after
```css title="style.css"
      p.box::after {
        content: "This should show after the other content";
        background-color: yellow;
      }
```
效果：
![|300x69](./attachments/Pseudo-classes%20and%20pseudo-elements-6.webp)
@tab before
```css
      p.box::before { }
```
效果：
![|300x55](./attachments/Pseudo-classes%20and%20pseudo-elements-5.webp)
:::

添加其他内容：
:::tabs
@tab icon
```css
      p.box::after {
        content: " ➥";
      }
```
效果：

@tab shapes
```css
      p.box::after {
        content: "box";
        display: block;
        width: 100px;
        height: 100px;
        background-color: greenyellow;
        border: 1px solid black;
      }
```

效果：
![|300x161](./attachments/Pseudo-classes%20and%20pseudo-elements-7.webp)

:::

#### CSS Arrow Please
实现 a custom box with an arrow extending out from the side.
![|300x185](./attachments/Pseudo-classes%20and%20pseudo-elements-9.webp)

[参考](https://cssarrowplease.com/)
```html
    <div class="arrow_box">
      <h1>CSS ARROW PLEASE</h1>
    </div>
```

```css
      .arrow_box {
        position: relative;
        background: #88b7d5;
        border: 4px solid #f5c2cb;
        top: 100px;
      }
```
效果：
![|300x112](./attachments/Pseudo-classes%20and%20pseudo-elements-8.webp)

箭头是通过两个三角形实现的：
![|300x194](./attachments/Pseudo-classes%20and%20pseudo-elements-10.webp)

- 外三角形
	- 背景颜色：矩形 border
	- 底部和border内边界平齐
- 内三角形
	- 背景颜色：矩形 backgroun-color
	- 底部和border外边界平齐

添加一个矩形
```css
      .arrow_box::after {
        content: "after";
        border: 10px solid;
        border-color: aquamarine;
        border-bottom-color: black;
      }
```
效果：
![|300x408](./attachments/Pseudo-classes%20and%20pseudo-elements-11.webp)
底边是一个梯形，而不是矩形。
如果内容为空：
```css
        content: "";
```
效果：
![|108](./attachments/Pseudo-classes%20and%20pseudo-elements-12.webp)
底边的梯形就变成了三角形🔺
现在调整颜色、大小以及位置
```css
      .arrow_box::after {
        content: "";
        border: 30px solid transparent;
        border-bottom-color: black;
        position: absolute;
        bottom: 100%;
        left: 50%;
      }
```

| 行号  | 功能              | 说明                     |
| --- | --------------- | ---------------------- |
| 3   | 设置border        | 背景颜色设置为transparent     |
| 4   | 三角形颜色           | 这里设置blakc是为了区分         |
| 5   | 三角形需要相对于div进行定位 | div的position是 relative |
| 6   |                 | 三角形的底部贴着矩形的顶部          |

效果：
![|300x125](./attachments/Pseudo-classes%20and%20pseudo-elements-13.webp)

两个问题：
1. after似乎和div是兄弟，它的ancestor应该是body，定位应该是相对于body，为什么是相对于div？
<span style="background:#affad1">答：</span>实际上 after 添加的element是在h1的后面，并且div是relative，那么after的 closest positioned ancestor 就是div，所以absolute 是相对div进行定位的
![after是div内的节点和h1同级|300x131](./attachments/Pseudo-classes%20and%20pseudo-elements-14.webp)

2. left设置为50%，实际上三角形的位置有点偏右，因为三角形的左边界在div的50%，应该将三角形的中心和div的中心对齐
解决：
```css
        margin-left: -30px;
```

效果：
![|300x125](./attachments/Pseudo-classes%20and%20pseudo-elements-15.webp)
对位了
类似地添加 before，before比after大一点。矩形border的宽度是4，额这个应该不用计算的特别准。
```css
      .arrow_box::before {
        content: "";
        border: 36px solid transparent;
        border-bottom-color: #f5c2cb;
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -36px;
      }
```

效果：
![|300x117](./attachments/Pseudo-classes%20and%20pseudo-elements-16.webp)

整合下代码：
```css
      .arrow_box::after,
      .arrow_box::before {
        content: "";
        border: solid transparent;
        position: absolute;
        bottom: 100%;
        left: 50%;
      }

      .arrow_box::after {
        border-width: 30px;
        border-bottom-color: #88b7d5;
        margin-left: -30px;
      }
      .arrow_box::before {
        border-width: 36px;
        border-bottom-color: #f5c2cb;
        margin-left: -36px;
      }
```

## Combining pseudo-classes and pseudo-elements 
```css
article p:first-child::first-line {}
```


