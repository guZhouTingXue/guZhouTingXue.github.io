---
category: LearnWebDevelopment
---
# How browsers load websites
![Rendering process overview|700x270](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites/rendering.svg)

> When the user navigates to a new web page, several HTTP requests are sent, and several files are sent back in HTTP responses. The files received in these responses are processed by the browser and put together into a web page that user can interact with.

Server 是存储文件的仓库，网络是传输的数据通道。在本地打开网站 和 通过Server 下载文件呈现网站是相同的。


## Handling HTML
浏览器接收到HTML 后首先将其转换为 DOM(Document Object Model) tree 
>The DOM represents the HTML document structure in the computer's memory.


```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```
转化后的DOM tree
```
P
├─ "Let's use:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

在Develop Tools 中查看element的properties
![|601x276](./attachments/How%20browsers%20load%20websites.webp)
element p 对应的 DOM node 有3个child - 3个span


<span style="background:#fff88f">问：</span>按照说明 “Let's use:” 应该也属于p的child，为什么没有出现在children列表里？
>Its children include a text node and the three nodes corresponding to our \<span> elements.


<span style="background:#fff88f">问：</span>chilNodes中的 text 是自动添加的？
![](./attachments/How%20browsers%20load%20websites-4.webp)


## Parsing CSS and rendering the page
1. The browser parses the CSS found on the page, and sorts the different CSS styling rules into different "buckets" based on which HTML elements they will be applied to. The browser then attaches styles to different elements as required. 得到 render tree

在css中不同rule的选择器可能选中同一个element，此时需要决定最终元素应用的rule。根据选中器类型（大概率是选择器的范围从小-》大）进行分类并排序，然后将rule 调整的属性应用到DOM的nodes上

2. The visual display of the page is shown on the screen (this stage is called painting).
<span style="background:#fff88f">问：</span>没搞清楚，这里就直接绘制了？后面不是还有js吗？可能是先绘制到缓冲中

## Handling Javascript
>After the CSS has been handled, any Javascript found on the page is parsed, interpreted, compiled, and executed. This happens at some point before the final page rendering is completed.

