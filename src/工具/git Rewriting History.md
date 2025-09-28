---
category: 工具
tags:
  - git
---
# git Rewriting History


## 修改历史版本中的文件内容
``` mermaid
gitGraph
	commit id: "1"
	commit id: "2"
	commit id: "3"
```
当前仓库有main分支有3个版本.2中包含文件2.txt，内容为：223
准备下个版本时发现错误。已经提交了版本3无法进行amend

**目的**
使用交互变基修改版本2的2.txt 的内容为 222
初始信息：
``` 
$ git log
commit da163daee355fb2c74ae324108975bc4028cb626 (HEAD -> main)
Author: guZhouTingXue <2422173022@qq.com>
Date:   Sun Sep 28 23:05:31 2025 +0800

    3

commit 898f5affa62341c23083a96f83997888cb943fc4
Author: guZhouTingXue <2422173022@qq.com>
Date:   Sun Sep 28 23:05:12 2025 +0800

    2

commit e0e6e8ddbc652bc704b1babe305aab0633d737bc
Author: guZhouTingXue <2422173022@qq.com>
Date:   Sun Sep 28 23:04:16 2025 +0800

    1
```

实现：
1. 启动
``` git
git rebase -i e0e6e
```

96dff 是版本1的id的前5位（能够分辨出版本号，取前面5位就行了）
效果：
``` 
pick 898f5af # 2
pick da163da # 3

# Rebase e0e6e8d..da163da onto e0e6e8d (2 commands)
#
# Commands:
# p, pick <commit> = use commit
# ...
```
2. 通过终端修改版本2 前的pick 为 edit
如果用的是vim，输入i-》修改内容-》esc -》：wq。
保存并退出后终端提示：
``` 
Stopped at 898f5af...  # 2
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue
```
工作区会停留在（恢复为）版本2
使用sourcetree查看时显示为正在变基：
![](./attachments/git%20Rewriting%20History.webp)
HEAD指向2
![](./attachments/git%20Rewriting%20History-1.webp)
3. 修改文件：将2.txt 内容修正为222
4. 提交信息：
![](./attachments/git%20Rewriting%20History-2.webp)
	保留之前的体检信息 或 进行修正
5. 完成变基：进行amend后会弹出提示，点击继续变基
![](./attachments/git%20Rewriting%20History-3.webp)
6. 结果：
![](./attachments/git%20Rewriting%20History-4.webp)
![](./attachments/git%20Rewriting%20History-5.webp)

文件内容和提交信息都更新完成

