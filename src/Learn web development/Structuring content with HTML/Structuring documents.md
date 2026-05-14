# Structuring documents

## Basic sections of a document
:::tabs
@tab 示例
![|501x330](./attachments/Structuring%20documents.webp)
@tab MDN
![|497x239](./attachments/Structuring%20documents-1.webp)
@tab vue
![|497x239](./attachments/Structuring%20documents-2.webp)
:::
网站的standard components：
- header: 广告或重要通知，通常在整个网站中的所有页面保持不变
- navigation bar
- main content
- sidebar
- footer

## HTML layout elements in more detail
>[!info]
>use the right element for the right job.

HTML 中有和网页components 对应的带有 semantics 的element

**header**
```html
  <body>
    <!-- The main header used across all the pages of our website -->
    <header>
      <h1>Header</h1>
    </header>
    </body>
或
<header>
当前页面拥有的header
</header>
<body>
</body>
```
如果header定义在body内，整个站点使用该header

**nav**
:::preview
  <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
  </nav>
:::

**main**
:::preview
    <!-- Our page's main content -->
    <body>
    <main>
    content unique to this page. only once per page, and put it directly inside body
    </main>
    </body>
:::

**aside**
:::preview
      <aside>
        <h2>Related</h2>
        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
        </ul>
      </aside>
:::


**footer**
:::preview
    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
:::

**article**
>encloses a block of related content that makes sense on its own without the rest of the page

独立的文章，和页面其他内容无关。单独存在时含义仍然清晰

**section**
> represents a generic standalone section of a document. should always have a heading

:::preview
      <!-- An article -->
      <article>
        <h2>Article heading</h2>
	    <section>
          <h3>Subsection</h3>
	    </section>
	  </article>
:::

section 按照功能对document进行分块
<span style="background:#fff88f">问：</span>section 下通常带有 heading，heading 本身不是就带有分块的含义吗，为什么还要用section？直接用heading 不行吗？


## Non-semantic wrappers
> can't find an ideal semantic element to group some items together or wrap some content

- div: block level non-semantic element
- span: inline non-semantic element


## Line breaks and horizontal rules
:::preview
<p>
ab
a<br />b
</p> 
<hr/>
<p>
另一个段落
</p>
:::

- hr：denotes a thematic change in the text。需要在不同的thematic之间使用hr（切换时），不能在p内使用hr（单个thematic内部没有发生切换）


## Structuring a basic website
