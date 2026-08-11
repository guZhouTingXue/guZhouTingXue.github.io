# Lists
:::preview
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight ...</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the ...</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>

<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, ...
  </dd>
</dl>
:::


## Unordered lists
组成部分：
- ul：表示unordered lists - 看作是一个容器（用于容纳/粘贴 列表项的看板）
- li：list item，单个列表项目

渲染效果：
## Ordered
组成：
- ol：ordered list
- li：list item
按照li在ol中的顺序对li进行编号

渲染效果：数字编号
## Nesting lists
Unordered list 和 ordered list 之间（包含自身）可以相互嵌套
如在示例中有序列表中嵌套了无序列表
:::preview
<ul>
	<li>a</li>
	<ul>
		<li>b</li>
	</ul>
</ul>
:::

## Description lists
> mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers.

组成
- dl: description lists
- dt: description term
- dd: description definition

一个term可以有多个 definition
:::preview
<dl>
	<dt>a</dt>
	<dd>one</dd>
	<dd>used when you talk about one example of sth for the first time</dd>
</dl>
:::

渲染效果：indent  
问：
>[!info]
>缩进是指书写一段文字时在某些行（通常是段落的第一行）的开头插入的一个或几个空格。汉语一般首行缩进两个空格。

缩、进 表示的含义不应该是距离、空间减小吗？为什么是插入空格，这样开头不是和左边界隔开了，距离不是变大了吗？这里的距离是相对右侧而言？

