---
category: 工具
tags:
  - 绘图/gitGraph
---

# Git Graph


## Create a new branch
通过branch name 创建名称为name 的分支。分支名称要求：
- unique：不能定义相同名称的多个分支
- 不能使用语法中的关键字作为分支名，如使用branch branch 创建名为branch 的分支
	- 如果包含了关键字，需要使用“ ” 包围

实现：
``` 
gitGraph
    commit 
    branch develop
    commit
```
效果：
``` mermaid
    gitGraph
    commit 
    branch develop
    commit
```
和git 规定的语法不同：这里创建分支后就直接切换到了新分支，而git 中创建新分支后需要使用checkout进行切换

