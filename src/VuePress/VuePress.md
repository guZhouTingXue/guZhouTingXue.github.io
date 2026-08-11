
# VuePress


## Project Command
在项目路径下的 `package.json` 中定义了几个命令
```js
  "scripts": {
    "docs:build": "vuepress-vite build src",
    "docs:clean-dev": "vuepress-vite dev src --clean-cache",
    "docs:dev": "vuepress-vite dev src",
    "docs:update-package": "npx vp-update"
  },
```
- dev: Starts a development server for local preview with hot-reloading.
启动开发服务器，在本地浏览器查看效果，实时更新页面
- build: Compiles your site into optimized static files for production deployment.
生成最终部署的静态网页

在启动dev时可能出现的问题：
- 默认端口被占用
```
√ Initializing and preparing data - done in 7.06s
Port 8080 is in use, trying another one...
error Error: listen EACCES: permission denied 0.0.0.0:8081
    at Server.setupListenHandle [as _listen2] (node:net:1918:21)
    at listenInCluster (node:net:1997:12)
```
默认端口为8080，被占用时尝试8081.
>[!info]
>EACCES: permission denied. On Windows, this usually means port 8081 has been reserved or blocked by the OS(often due to Hyper-V, WSL, ...)

总之是端口不可用（为什么没有继续尝试下一个端口号？）
解决办法：指定一个不会被占用（可用）的默认端口号 
```js
   "docs:dev": "vuepress-vite dev src --port 8280",
```
启动服务器时从指定端口开始绑定
```
$ npm run docs:dev

> vuepress-theme-hope-template@2.0.0 docs:dev
> vuepress-vite dev src --port 8280

```

**查看可用端口**
```txt title="PowerShell"
netsh int ipv4 show excludedportrange protocol=tcp
```
- netsh: 网络配置命令工具
- int: ipv4
- show excluded-port-range: 显示不包含的端口范围（不可使用的/被保留的）
- protocol=tcp: 通讯协议为tcp
结果：
```
Protocol tcp Port Exclusion Ranges

Start Port    End Port
----------    --------
      5426        5426
      8081        8180
      9666        9666
      9843        9942
     10043       10142
	...
     10543       10642
     50000       50059     *

* - Administered port exclusions.
```

设置为不在 Start Port ~ End Port 范围内的端口号（如8280）
