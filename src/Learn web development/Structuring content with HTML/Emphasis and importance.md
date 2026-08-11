# Emphasis and importance

:::preview
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
I am glad you weren't late.
<p>I am <i>glad</i> you weren't <i>late</i>.</p>

<p>This liquid is <strong>highly toxic</strong></p>
<p>This liquid is <b>highly toxic</b>.</p>

<p>This liquid is <strong>highly toxic</strong> - if you drink it, <strong>you <em>may die</em></strong>.</p>

<em> em element can be <em>nested</em></em>

<style>
u.spelling { text-decoration: red wavy underline; }
</style>
<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
:::

## Emphasis
```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

>marks text that has stress emphasis. can be nested, with each level of nesting indicating a greater degree of emphasis.

## Strong importance
>indicates that its contents have strong importance, seriousness, or urgency. 

## Italic, bold, underline…
> only affect presentation and not semantics, are known as **presentational elements** and should no longer be used.
> 
> The **`<u>`** [HTML](http://127.0.0.1:11495/html/developer.mozilla.org/en-US/docs/Web/HTML.html) element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.


u: The Unarticulated Annotation(Underline) element. 
适用于
- proper name
- misspelling
- ...
i: The Idiomatic Text element
- foreign words
- taxonomic
- designation
- technical terms
- a thought
- ...
b: The Bring Attention To element：引起注意
- keywords
- product names
- lead sentence

**non-textual annotation 非文本说明**
对比 textual annotation
<p>This paragraph includes a wrong spelled word. not wrnogly should be wrong</p>

通过u标注的内容，标记的呈现方式-外在显示 已经说明了内容的含义是拼写错误，无需额外的文本注释。

**unarticulated**
使用 presentational element 标注的内容仅在显示上有区别，其他方面-通过阅读器阅读时其发音和普通文本没有区别。

### underline and hyperlink
![](./attachments/Emphasis%20and%20importance.webp)
由于hyperlink 通常带有下划线 导致 形成了一种认知习惯，带有下划线的都是hyperlink。
为了符合用户阅读习惯（避免实际内容和认知产生冲突），对于一般的使用 underline 的内容，应该另外设置其样式。
比如前面的css，将拼写错误的下划线样式更改为 red wavy underline





