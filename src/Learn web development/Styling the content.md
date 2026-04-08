---
category: LearnWebDevelopment
---
# Styling the content

## Applying CSS to your HTML
1. 在styles 下新建 style.css 文件，编辑内容如下
```css
p {
  color: red;
}
```
2. 修改index.html
```html
<!doctype html>
<html lang="en-US">
	<head>
		...
	    <link href="styles/style.css" rel="stylesheet"> //[!code highlight]
	</head>
	<body>
	    <h1>番茄工作法</h1>
	    <p>简单易行的时间管理方法</p>
	</body>
</html>
```
3. 效果
![](./attachments/Styling%20the%20content.webp)
element p的content 颜色变为了red

- CSS 能设置文本的颜色
- 需要在html的head内通过link 引入（关联）CSS
	- 如果同时引入多个CSS，且他们对同一个element 进行了不同的设置，结果如何？按照最后引入CSS的进行设置还是报错 或 其他？
## What is CSS
>[!info]
> CSS (Cascading Style Sheets) is the code that styles web content.
> - change the appearance of a plain-looking content
> - controlling typography 
> - controlling scrolling behavior
> - adding animations 
> - building entire web page layouts


## CSS syntax basics
```css
p,
.my-class,
#my-id {
	color: red,
	width: 500px;
	border: 1px solid black;
}
```
- The whole structure is called a ruleset (often referred to as just rule)
- p: selector, selects the element(s) to style
	- 这里p的范围是当前html内的所有 p
- {}: declaration, sets a value for a specific property
- selector 有多种类型，选择的element(s)范围不同
	- 一条rule 可以包含多个selector
	- 多个selector 之间使用“,” 间隔
- property 之间使用 “;”间隔
- 如果一个property 可以有多个值，使用 空格间隔不同的值

## Improving the text
使用本地字体文件
1. 新建fonts目录，将字体文件拷贝到该目录下
2. 修改css
```css
@font-face {
  font-family: "LXGW"; 
  src: url("../LXGWWenKaiMono-Regular.ttf"); 
}

h1 {
  font-size: 10px;
  font-family: "LXGW", sans-serif;
}
```

> The @font-face specifies a custom font with which to display text


- \@font-face：定义要使用字体
	- font-family: Specifies a name that will be used as the font face value for font properties
	- src: Specifies references to font resources including hints about the font format and technology. 指定字体文件的来源、格式/类型
3. 效果
![](./attachments/Styling%20the%20content-1.webp)
对比未设置字体时标题
![](./attachments/Styling%20the%20content-2.webp)



## 其他设置




