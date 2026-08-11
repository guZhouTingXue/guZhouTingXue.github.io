---
category: LearnWebDevelopment
---
# How the web works

## Clients and servers
![|506x157](./attachments/How%20the%20web%20works.webp)

- Client：向Server 发送 requests，展示数据，如Chrom 浏览器。
- Server：存储数据，响应Client的请求。

在浏览器输入网址到浏览器显示网页的过程需要的条件：
1. internet connection：存在连接通路，client发送的requests能够达到server，server回复的responses能够达到client
2. TCP/IP：传输方式，稳定、可靠的连接
3. DNS：位置确定
4. HTTP：交流的语言
5. Files：具体传输的内容

## DNS - Domain Name System
Real web addresses - IP address：192.0.2.172，类似于武汉站 经度 114.424522 维度 30.607391

URLS(Uniform Resource Locators)：https://www.mozilla.org/en-US/

> URLs define the locations of unique resources on the internet.

- https: HyperText Transfer Protocol Secure is an encrypted version of the HTTP protocol
- www.mozilla.org :The domain name of the URL, which represents the top-level location of the server you are connecting to. 实际在网址栏输入的地址，一般情况下网站所有可访问资源都在该路径下。
- en-US：The path to the resource on the server that you are accessing.输入域名后，浏览器会根据当前设置的（语言）访问对应语言目录下的主页，这里en-US表示美式英语

使用[DNS lookup tool](https://www.nslookup.io/website-to-ip-lookup/) 查询 https://developer.mozilla.org/zh-CN/ 的结果：

| IP address     | Location                                 |
| -------------- | ---------------------------------------- |
| 151.101.193.91 | San Francisco, California, United States |
| 151.101.1.91   | -                                        |
| 2a04:4e42::347 | , , Hong Kong SAR China                  |

## Packets
> When data is sent across the web, it is sent in multiple small chunks called packets. Each packet contains: a head, a payload

使用small chunks - packets 的好处：
- 出错时只需要重新发送出错的packet，而不是整个文件
- can be routed along different paths
从client 到达 server的路径有多条，分成packets发送，不同的pakcet可以走不同的路径。可以实时调整发送的路径
如果每次传输整个文件，传输的途中发现速度缓慢，没办法调整路径？
- server 可以同时响应多个用户的请求：传输整个文件时，server需要确认文件已经被client接收，此时无法响应其他用户的请求，其他用户就需要等待。拆分成packets后，每个packet的确认时间很短，其他用户等待的时间缩短


## HTTP - Hypertext Transfer Protocol
