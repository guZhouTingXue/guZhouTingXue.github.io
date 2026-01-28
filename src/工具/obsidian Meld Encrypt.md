---
category: 工具
tags:
  - obsidian/插件
---
# obsidian Meld Encrypt
>Meld Encrypt is a community plugin that lets you encrypt and decrypt your notes in Obsidian. You can choose to encrypt an entire note or just selected text within a note.

对单篇文档 或 文档内的部分 文本进行加密
<!--more-->

## 功能按钮
启用插件后左侧工具栏新增插件相关功能按钮：
- New encrypted note：新建一篇加密文档
- Lock and Close all open encrypted notes：关闭并锁定所有打开的加密文档
该插件有密码记忆功能，在输入密码后的设置时间范围内（默认30minutes）再次打开文档无需输入密码
- Convert to or from an Encrypted note：对文档进行加密 或 解密
- Encrypt Selection：加密文档内选中的文本
- Decrypt at Cursor：对文档选中的 或 鼠标停留处的加密文本 进行解密

## 使用
**对指定文本加密**
加密前原始内容：
内容：<font color="#ff0000">hello</font>
	选中hello后点击工具栏中的 Encrypt Selection
	
密码配置：
![|345x226](attachments/obsidian%20Meld%20Encrypt-1.webp)

效果：
🔐β 💡1+2+3💡By8XsE3y2rBWRDr7wzJtPgxP/0EzJ7tUENbcMCu7wuRJ21wvHXACY2Sn5x2WP4HTX3ymVRdOyktef+Fqn5o= 🔐

**对单个文档加密**
在文档列表中选中要加密的文档，鼠标右键选择 Encrypt note 菜单项，或 点击 左侧工具栏中的Convert to 。。按钮
文档的类型（后缀）变为mdenc
查看文件内容：
``` js
{
  "version": "2.0",
  "hint": "1+2+3",
  "encodedData": "hGgYz1YQ..."
}
```


**解密指定文本**
![|304x163](./attachments/obsidian%20Meld%20Encrypt.webp)
在文本框内查看加密内容。点击 Decrypt in-place 会替换为实际文本

## 其他
1. 不能对表格进行加密

| N   | Y                                                                                    |
| --- | ------------------------------------------------------------------------------------ |
| 1   | 🔐β 💡1+2+3💡1XQG8M5WfiwIqBBTYcJwr4qUgZkwFi4otXxEAkvqvfiE68MlMKBbdoyprrn4wqdjSw== 🔐 |

选中整个表格后进行加密，只会对最后一个单元格进行加密

可以使用source mode，选中表格后再进行加密，但是解密后只能查看到source mode下的表格数据，无法查看到渲染后的表格。

🔐β 💡1+2+3💡b9ZVASWS7V+nzyyruDJiqe4N1XAEeDbZ1c782y0gQcyUprV9ygp2PiXb/zf/BOZVWTN09IuJ7YdmX2018hjkwDOJ6G5HxZoauotNDjNnpccjnBNme6iGSm8= 🔐

2. 添加或修改内容后整个加密字符串都会发生改变


