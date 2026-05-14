# Headings and paragraphs

## Why do we need structure?
- 区分标题和正文
- 对内容进行划分
- 快速浏览-导航、搜索 

标题的使用原则：
1. use a single \<h1> per page - this is the top level heading: 每篇文章以 h1 作为起始标题，其他标题包含在h1下 
2. 正确嵌套标题
```html
<h1>h1<\h1>
	<h2>h2<\h2>
		<h3>h3<\h3>
	<h2>h2-2<\h2>
	
```
标题的等级要连续，h2下嵌套h3，而不能是h4...
3. 标题层级数量不超过3级
层级过多时：
- 主体内容模糊：内容过多，容易迷失在细节里
- 导航困难


## Why do we need semantics?
> Semantics are relied on everywhere around us
> We need to make sure we are using the correct elements, giving our content the correct meaning, function, or appearance.

element 的 appearance, function/meaning 需要保持一致，即element 需要和它的semantics对应。

| 物品    | 外观 - appearance | Semantics - meaning |
| ----- | --------------- | ------------------- |
| 红灯信号灯 | 红色              | 禁止通行                |
| 绿灯信号灯 | 绿色              | 允许通行                |

| element | appearance         | function          |
| ------- | ------------------ | ----------------- |
| h1、h2   | large font size。。。 | navigation、search |

:::preview
<h1>h1 have large font size </h1>
普通文本
:::

虽然可以在其他element中通过CSS 让文本具有标题的显示效果，如：
:::preview
<span style="font-size: 32px; margin: 21px 0; display: block;">
Is this a top level heading?
</span>
:::
但是span 不具有 h1 的 function 

保持一致的反面：appearance 和 function 有差异。
错误的使用情况：
- 为了显示效果，使用h1来格式化文本
- 使用css将内容格式化 和 h1显示效果近似：绿灯看起来像是红灯，外观上失去了区分度

