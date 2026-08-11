---
category: 工具
---
# Oracle VirtualBox

## 共享文件夹
将windows 下的文件夹共享给虚拟机中的linux系统

1. 选择系统进入共享文件夹设置
![|433x152](./attachments/Oracle%20VirtualBox.webp)
2. 添加要共享的windos文件夹
![|267x198](./attachments/Oracle%20VirtualBox-3.webp)
	设置位自动挂载：每次启动后自动挂载共享文件夹到系统下
	挂载的路径点：我的是 /media/sf_share，也可能在/mnt/下
3. 启动虚拟机
![](./attachments/Oracle%20VirtualBox-1.webp)
	文件管理器 左侧列表新增了共享文件夹选项
4. 点击该项报错：
![](./attachments/Oracle%20VirtualBox-2.webp)
5. 查看目录信息：
![](./attachments/Oracle%20VirtualBox-5.webp)
目录的创建者是root，所属组是vboxsf。当前用户是ming，不在组内。其他用户对该目录没有访问权限。
6. 将当前用户添加到 vboxsf 组内
``` bash
sudo usermod -aG vboxsf $USER
```
	$USER 表示当前用户
7. 重启虚拟机后，可以正常访问共享文件夹
![](./attachments/Oracle%20VirtualBox-4.webp)

## 网络
连接方式决定虚拟机 和 外部网络，虚拟机 和 宿主机，以及虚拟机之间能够通讯



