---
category: 工具
tags:
  - Mermaid
  - SequenceDiagrams
---
# Sequence diagrams
> A Sequence diagram is an interaction diagram that shows how processes operate with one another and in what order.

- interaction diagram
- processes operate with one another
- order

``` mermaid
    sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```
其他参考：
- [关于序列图你需要知道的一切 - Visual Paradigm 博客](https://blog.visual-paradigm.com/cn/everything-you-need-to-know-about-sequence-diagrams/#chuang_jian_he_xiao_hui_xiao_xi)


## Syntax

### Participants
交互的对象：Alice、John
定义的方式：
1. 在消息中隐式声明：Alick->>John: Hello .. 表示participant 有Alick 和 John
2. 显式声明：
``` 
participant Alice
participant Bob
```

效果：
``` mermaid 
sequenceDiagram
participant Alice
participant Bob
```
按照声明的顺序从左到右依次排列

#### Aliases
给Participant起别名
``` 
participant A as Alice
//类似于
#defined A Alice
```
	别名在前
效果：
``` mermaid
sequenceDiagram
participant A as Alice
```

#### Actors
可以用“小人”代替矩形框
``` 
actor Alice
```

效果：
``` mermaid
sequenceDiagram
actor Alice
```

## Messages
消息的类型：
同步消息：发送方发送消息后等待接收方的回复，或 发生异常（超时）后继续处理。带arrowhead，三角形箭头 ->>
异步消息：发送方发送消息后继续活动。带open arrow，-)
返回消息：接收方收到消息后回复. -->>

``` mermaid
sequenceDiagram
participant A 
participant B
A->B: -> Solid line without arrow
A-->B: --> Dotted line without arrow
A->>B: ->> Solid line with arrowhead
A-->>B: -->> Dotted line with arrowhead
A<<->>B: <<->>
A<<-->>B: <<-->>
A-xB: -x
A--xB: --x
A-)B: -)
A--)B: --)
```

总结：
虚线与实线：-、--
箭头符号：实心三角>>、普通箭头）、叉x、不带箭头>
问：<mark style="background: #FFF3A3A6;">不带箭头为什么不是- 和 --而时 -> 和 -->?</mark>

## Activations (Focus of Control)
对象执行操作的时间段。在diagram 中表示为life time 上的矩形块。
``` 
A->>B: activate
activate B
B-->>A: ok
deactivate B
```
效果：
``` mermaid
sequenceDiagram
A->>B: activate
activate B
B-->>A: ok
deactivate B
```

可以在arrow 中设置激活状态
``` 
A->>+B: activate
B-->>-A: ok
```
	<mark style="background: #FFF3A3A6;">在箭头符号后添加+表示激活接收对象；在箭头符号后添加-表示发送对象发送消息后解除激活？</mark>
效果：
``` mermaid
sequenceDiagram
A->>+B: hello
B-->>-A: ok
```

### Activations can be stacked 
对象处于激活状态时（响应一个消息时）可以同时再接收另一消息并对其进行处理
实现：
``` txt
sequenceDiagram
A-)B: hello
activate B
A-)B: nihao
activate B
B-->>A: ok
deactivate B
B-->>A: haode
deactivate B
```
	通常假设发送消息后立马接收到消息，忽略延时。
效果：
``` mermaid
sequenceDiagram
A-)B: hello
activate B
A-)B: nihao
activate B
B-->>A: ok
deactivate B
B-->>A: haode
deactivate B
```
从上图看，haode 回复的是hello，ok 回复的是nihao。但这只是时间进度上推断出来的。<mark style="background: #FFF3A3A6;">如果ok回复的是helo，haode 回复的是nihao该如何编写？</mark>

看起来是activate 和 deactivate 符合 最近匹配：相邻的一对构成一组激活与解除激活状态

## Notes
添加单独的注释文本框
语法：
``` 
Note [right of | left of | over][Actor]: content
```
Note：关键字
\[right of | left of | over]：相对Actor的位置
Actor：注释的对象
content：注释内容

实现：
:::tabs
@tab right
``` mermaid
sequenceDiagram
participant A
Note right of A: Note
```

@tab left
``` mermaid
sequenceDiagram
participant A
Note left of A: Note
```

@tab over
``` mermaid
sequenceDiagram 
participant A
Note over A: Note
```

@tab 横跨多个对象
``` mermaid
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction

```

:::

## Line breaks
消息、注释中的line break
实现：
``` 
sequenceDiagram
A-->>B: hello<br> mermaid
```
效果：
``` mermaid
sequenceDiagram
A-->>B: hello<br> mermaid
```

对象名中的换行
实现：
``` 
participant A as object<br>Alice
```

效果：
``` mermaid
sequenceDiagram
participant A as object<br>Alice
```


## Grouping / Box
可以将多个actor放到一个带背景颜色（可选）的框内
实现：
``` 
sequenceDiagram
box Aqua title
	participant A
	participant B
end
box Another Group
	participant C
end
box rgb(33,66,99)
	participant D
end
	A ->> B: hello
	B ->> C: nihao
	C ->> D: ..
```

| 行号   | 功能                           | 说明  |
| ---- | ---------------------------- | --- |
| 2-4  | 指定颜色为Aqua，grouping 的标题为title |     |
| 6-8  | 不带颜色的grouping                |     |
| 9-11 | 通过rgb指定颜色，不带title            |     |

- 不能直接在box内使用 A->>B 定义actors的同时定义消息，只能使用participant 定义box包含的actor
- <mark style="background: #FFF3A3A6;">发送的消息必须带内容？</mark>
效果：
``` mermaid
sequenceDiagram
box Aqua title
	participant A
	participant B
end
box Another Group
	participant C
end
box rgb(33,66,99)
	participant D
end
	A ->> B: hello
	B ->> C: nihao
	C ->> D: ..
```

