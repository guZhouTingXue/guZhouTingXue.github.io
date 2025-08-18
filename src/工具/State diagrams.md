---
category: 工具
tags:
  - Mermaid
  - StateDiagrams
---

# State diagrams
``` mermaid
---
title: Simple sample
---
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]

```


## States
定义状态的三种方式：
1. 直接定义状态名称：stateName
2. state "description" as stateName
3. stateName : description
:::tabs
@tab 
实现：
``` 
stateDiagram-v2
	Still
```
效果：
``` mermaid
stateDiagram-v2
	Still
```

@tab
实现：
``` 
state "description" as Still
```
效果：
``` mermaid
stateDiagram-v2
state "description" as Still
```
@tab
实现：
```
Still : description
```
效果：
``` mermaid
stateDiagram-v2
Still : description
```

:::

## Transitions
>[!quote]
>Transitions are path/edges when one state passes into another. This is represented using text arrow, "-->".

实现：
``` 
stateDiagram-v2
 s1 --> s2: A transition
```
效果：
``` mermaid
stateDiagram-v2
 s1 --> s2: A transition
```


## Start and End
标识状态的起点和终点
实现：
``` 
stateDiagram-v2
[*]-->s1
s1-->[*]
```
\[\*\]：如果它指向一个状态那么它就是该状态的起点，如果它被指向，那么就是终点。
效果：
``` mermaid
stateDiagram-v2
[*]-->s1
s1-->[*]
```


## Notes
对状态的补充说明
语法：
```
note <position> state
	content
end note
```
position:
1. right of 
2. left of

实现：
``` 
stateDiagram-v2
 s1-->s2
note right of s1
	this is a note
end note
```

效果：
``` mermaid
stateDiagram-v2
 s1-->s2
note right of s1
	this is a note
end note
```

## Direction of diagram
默认的状态转换显示为从上至下，可以指定方向

实现：
``` 
stateDiagram-v2
	direction LR 
	[*]-->A
	A-->B
	B-->[*]
```

效果：
``` mermaid
stateDiagram-v2
	direction LR 
	[*]-->A
	A-->B
	B-->[*]
```
