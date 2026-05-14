# Advanced text features

## Quotations
:::preview
<p>Here is a blockquote:</p>
<blockquote
	cite="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features">
	<p>
		使用 <code> &lt; blockquote &gt; </code> 元素 indicates 引用的内容 
	</p>
</blockquote>

<p>
	Here is a inline quotation:
	<q cite="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features">
	intended for short quotations that don't require paragraph breaks.
	</q>
</p>

<p>
	According to the <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features"><cite>MDN Advanced text features</cite></a>
	<blockquote> 
	cite element contains the title of the resource being quoted, e.g., the name of the book.
	</blockquote>
</p>

<p>
对比普通的链接（不适用cite）
<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features">MDN Advanced text features</a>
</p>
:::


- quotation 包含两部分内容：引用的内容-显示在当前页面下的；引用的来源
- blockquotes：使用 blockquote element；引用的内容较长，或需要分段；通过缩进表示内容为引用
- inline quotations：使用 q element；引用的内容较短；通过“”表示内容为引用
- 浏览器本身不会对cite-引用来源进行额外的处理（如显示在引用下方）。如果需要跳转查看来源需要自己处理。使用a 并在a内嵌套cite，在cite的content中指定引用来源的标题。和普通链接的区别是，citations 显示为斜体
<span style="background:#fff88f">问</span>：那么quotation内 是否无需指定cite（指定了也没有效果）？
有一些solution 是通过Js or CSS来处理的，它们会利用cite的值来显示来源。使用这些solution 需要指定cite的值。

## Abbreviations
:::preview
<p>
	We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web documents.
</p>

<p>
<abbr title="Abbreviations"> abbr</abbr> element is used to wrap around an abbreviation or acronym.
</p>
:::
- 在title attribute中指定 full expansion，鼠标停留在 abbreviation上时能显示full expansion。

## Marking up contact details
:::preview
<address>
<p>
gztx <br/>
China <br/>
Hubei <br/>
</p>
<ul>
	<li>Tel: 1</li>
	<li>Email: 2@</li>
</ul>
</address>
:::


## Superscript and subscript
:::preview
<p>
	热爱105<sup>度</sup>的你，味道很甜。在寒冷的冬天也会觉得<sub>暖</sub>
</p>
:::


## Representing computer code
:::preview
<pre>For retaining whitespace
下面是一段代码
<code>
const para = document.querySelector('p');
para.onclick = function() {
  alert('Owww, stop poking me!');
}
</code>
</pre>
<p>
对比
const para = document.querySelector('p');
para.onclick = function() {
  alert('Owww, stop poking me!');
}
</p>

<p>
var:For specifically marking up variable names. e.g. <var>para</var>
</p>
<p>
kbd:For marking up keyboard (and other type of) input entered into the computer. $<kbd>ping mozilla.org</kbd>
</p>
<p>
samp:For marking up the output of a computer program.
<samp>Pinging mozilla.org [35.190.14.201] with 32 bytes of data:
Reply from 35.190.14.201: bytes=32 time=54ms TTL=111</samp>
</p>
:::

- 对于c++，包含了\< \> 字符的 如\<iostream> 需要转义

## Marking up times and dates
:::preview
<time datetime="2026-01-20">20 January 2016</time>
<ul>
<li>2016年1月20号</li>
<li>Jan 20 2016</li>
</ul>
<time datetime="19:30:01.865">19:30:01.865</time>
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
:::

按照规定的格式设置时间、日期值，完整的日期格式： YYYY-MM-DD，对于小于10的月份、日期需补全

