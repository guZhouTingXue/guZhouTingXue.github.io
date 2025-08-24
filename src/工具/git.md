---
category: 工具
tags:
  - 版本控制
  - git
---
# git
版本控制工具
[Git - Downloads](https://git-scm.com/downloads)


## Merge into
合并两个分支
``` 
gitGraph
	commit
	commit
	branch develop
	checkout develop
	commit
	checkout main
	merge develop
	commit
```
	develop 合并到 main
效果：
``` mermaid
gitGraph
	commit
	commit
	branch develop
	checkout develop
	commit
	checkout main
	merge develop
	commit
```

fork中的操作：
将tbranch2 合并到 main
``` txt title="tbranch2"
tbranch2 分支
```

``` txt title="main"
main 分支
```

两个分支的第一行内容不同

切换到main
![](./attachments/git.webp)

tbranch2 右键菜单，选择Merge into 'main'...
![](./attachments/git-1.webp)

![|523x211](./attachments/git-2.webp)
	Merge：tbranch2 被合并的分支
	into：main 合并到的分支
	Merge Option：

点击Merge
由于存在冲突，无法直接合并
![|529x193](./attachments/git-3.webp)
	1.txt：冲突文件

解决冲突：
![|584x249](./attachments/git-4.webp)


解决冲突
:::tabs
@tab Beyond Compare
添加Beyond Compare后，在下拉菜单中选择Beyond Compare
使用Beyond Compare解决冲突：
最终合并后的内容：
![](./attachments/git-5.webp)
	绿色：tbranch 分支的内容
	红色：main分支的内容
	点击箭头采用对应分支的内容

@ tab fork 内置合并工具
点击Merge
![](./attachments/git-6.webp)
选择采用的分支内容 或 手动修改
:::

确认合并后内容点击Resolve
![](./attachments/git-7.webp)
	提交新的版本

最终效果：
![](./attachments/git-8.webp)



## 在指定版本上创建分支
``` mermaid
gitGraph
	commit 
	commit
```
当前有一个main 分支，两个版本，head 指向main最后提交的版本（节点），需要在第一个节点上创建分支。

:::tabs
@tab Sourcetree
选中节点-》分支
![|422x170](./attachments/git-9.webp)
	选择创建新分支的提交
:::

