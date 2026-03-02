---
category: 网络编程
tags:
  - IEC60870
---
# lib60870 socket

## Socket
TCP client socket
```mermaid
classDiagram
    class Socket{
        int fd
        uint32_t connectTimeout
        TcpSocket_create() void
        setConnectTimeout(timeoutInMs) void
		bind(srcAddress, srcPort) bool

        getLocalAddress()
        
        connect(address, port) bool
        connectAsync(address, port) bool
        checkAsyncConnectState() SocketState
        
		getPeerAddressStatic(peerAddressString)
        
		getPeerAddress()
        
        read(buf, size) int
        write(buf, size) int

    }
```

>[!note]
>- 省略了源代码中方法的前缀部分（Socket_），如源代码中bind() 方法的全称是 Socket_bind()
>- 省略了self参数

```cpp
/** State of an asynchronous connect */
typedef enum
{
    SOCKET_STATE_CONNECTING = 0,
    SOCKET_STATE_FAILED = 1,
    SOCKET_STATE_CONNECTED = 2
} SocketState;
```

建立连接前的设置：
- TcpSocket_create：创建socket（）对象
- setConnectTimeout：设置连接超时时间
- bind：绑定地址、端口
- getLocalAddress：获取本地socekt地址信息。在未指定本地地址时-随机分配，通过该接口获取地址信息

连接：
- connect：
- connectAsync：
- checkAsyncConnectState：

连接后：
- read
- write
- getPeerAddress：
- getPeerAddressStatic：
### create
```mermaid
graph TD
    n0(create)
    n1[初始化返回的socket为NULL]
    n2@{ shape: rect, label: "sock = socket(AF_INET, SOCK_STREAM,0) \r创建TCP socket"}
    n3@{ shape: diamond, label: "sock != -1 \r是否创建成功？"}
    n3-1@{ shape: rect, label: "sock == -1 \r 创建失败"}
    n3-2@{ shape: rect, label: "sock != -1 \r 创建成功 \r"}
    n4@{shape: rect, label: "self = (Socket) GLOBAL_MALLOC(sizeof(struct sSocket)) \r 创建Socket 对象"}
    n5@{ shape: diamond, label: "(self)? - 是否为空 \r 是否分配成功？"}
    n5-1@{ shape: rect, label: "self == NULL \r 分配内存失败 \r close(sock) \r 关闭socket"}
    n5-2@{ shape: rect, label: "分配成功 \r 设置属性"}
    n6@{ shape: diamond, label: "LINUX_VERSION_CODE >= KERNEL_VERSION(2, 6, 37) \r 是否支持要设置的socket 选项？"}
    n7@{ shape: rect, label: "支持 \r  setsockopt(sock, SOL_TCP,  TCP_USER_TIMEOUT, &tcpUserTimeout, sizeof(tcpUserTimeout)); \r 设置option"}
    r(返回 NULL)
    r1(返回 Socket)
    n0 --> n1 --> n2 --> n3 --> n3-1 --> r
    n3 --> n3-2 --> n4 --> n5 --> n5-1 --> r
    n5 --> n5-2 --> n6 --> n7 --> r1
```


### prepareAddress
```cpp
/*
* \brief 获取可用的地址信息
* \param Server ip 或 NULL
* \param port 端口号
* \param sockaddr_in 返回的地址信息
* \return true 如果成功获取到地址信息，false 无法连接到服务端
*/
static bool
prepareAddress(const char* address, int port, struct sockaddr_in* sockaddr);
```

```mermaid
flowchart TD
 n0(准备socket地址信息)
 n1@{shape: diamond, label: "address != NULL <br> Server or Client？"}
 n1-1@{shape: rect, label: "address != NULL <br> Client <br>sockaddr->sin_addr.s_addr = htonl(INADDR_ANY); <br> 任意本地地址"}
 n1-2@{shape: rect, label: "address == NULL <br> Server <br>可用的ipv4地址"}
 n2@{shape: diamond, label: "result != 0 <br> 获取信息成功?"}
 n3[处理port输入异常-负数置零]

 r0(false)
 r1(true)
 
 n0 --> n1 --> n1-1
 n1 --> n1-2 --> n2 --> |resutl != 0|r0
 n1-2 --> n3 --> r1
 n2 --> |result == 0|n3
 
```

<span style="background:#fff88f">问：</span>为什么获取地址时只指定了 addressHints.ai_family = AF_INET; 未指定socket 类型？
如果不指定type 那么getaddrinfo（）返回的结果是包含了所有type的？
### bind
```mermaid
flowchart TD
	n0(创建地址信息结构体)
	n1[prepareAddress]
	n2(返回创建结果)
	
	n0 --> n1 --> n2
```


### convertAddressToStr
```cpp
static char*
convertAddressToStr(struct sockaddr_storage* addr);
```
[inet_ntop](接口说明补充.md#inet_ntop)

```mermaid
graph TD
    n0(初始化 存储地址信息的字符数组 - 局部变量)
    n1@{shape: diamond, label: "addr->ss_family == AF_INET <br> 地址类型是ipv4？"}
    n1-1@{shape: rect, label: "IPv4 <br> 转换端口 以及 地址"}
    n1-2@{shape: rect, label: "IPv6 "}
    n1-3@{shape: rect, label: "其他类型"}

    n2[拼接后的字符串 - MALLOC分配内存]
    n3@{shape: diamond, label: "IPv6 ?"}
    n3-1@{shape: rect, label: "输出格式:[%s]:%i"}
    n3-2@{shape: rect, label: "输出格式:%s:%i"}

    r0(返回地址信息字符串)
    r1(返回NULL)

    n0 --> n1 --> n1-1 --> n2 -->n3 --> |yes|n3-1 --> r0
    n1 --> n1-2 --> n2  
    n1 --> n1-3 --> r1
    n3 --> |no|n3-2 --> r0
```


### Socket_connectAsync
```mermaid
graph TD
    n0[获取服务端地址的类型 <br> 转换为sockaddr structure]
    n1[将本地socket加入到监视列表中]
    n2[设置socket TCP_NODELAY 选项 - 关闭Nagle 算法]
    n3[设置socket 为非阻塞类型]
    n4[尝试连接服务端]
    n5@{shape: diamond, label: "connect() < 0 ? <br> 连接失败"}
    n6@{shape: diamond, label: "错误类型为EINPROGRESS？<br> 连接未完成"}
    n7[关闭socket]

    r0(连接成功)
    r1(连接未完成 或 出错)

    n0 --> n1 --> n2 --> n3 --> n4 --> n5
    --> |yes|n6 --> |yes|r1
    n6 --> |no,其他错误|n7 --> r1
    n5 --> |no|r0
```
<span style="background:#fff88f">问：</span>为什么要设置TCP_NODELAY 选项 - packets will be sent immediately?

<span style="background:#fff88f">问：</span>既然没有用到select，为什么要将socket 添加到fd_set中？

### Socket_connect
```mermaid
graph TD
    n0@{shape: diamond, label: "connectAsync == false <br>连接是否成功？"}
    n1[设置超时时间]
    n2[加入到监听列表]
    n3@{shape: diamond, label: "select() == 1 <br> socket 可写？"}
    n3-1@{shape: rect, label: "关闭socket"}
    n4@{shape: diamond, label: "so_error == 0 <br> Check if connection is established"}
    n4-1[连接成功]
    
    r0(false)
    r1(true)
    n0 --> |no|r0
    n0 --> |yes|n1 --> n2 --> n3 --> |select 超时或出错|n3-1 --> r0
    n3 --> |Y|n4 --> |Y|n4-1 --> r1
```
<span style="background:#fff88f">问：</span>为什么这里还要通过so_error 是否为0 来判断连接是否建立？前面调用 connectAsync 在connect（）返回0的情况还可能出现没有连接的情况吗？


### Socket_checkAsyncConnectState
通过select（）检查socket是否可写，来判断连接状态。select（）超时时间设置为0 - 立即返回
- 可写（1）：已建立连接
- 超时（0）：正在连接
- 出错（-1）：连接失败



## HandleSet
> A set of server and socket handles

```cpp
struct sHandleSet {
    LinkedList sockets;
    bool pollfdIsUpdated;
    struct pollfd* fds;
    int nfds;
    
    Handleset_new();
    void Handleset_reset();
    void Handleset_addSocket(const Socket sock);
    void Handleset_removeSocket(const Socket sock);
    int Handleset_waitReady(unsigned int timeoutMs);
    void Handleset_destroy();
};
```


| 属性/方法           | 含义/功能 |
| --------------- | ----- |
| sockets         |       |
| pollfdIsUpdated |       |
| fds             |       |
| nfds            |       |
| new             |       |
| reset           |       |
| addSocket       |       |
| removeSocket    |       |
| waitReady       |       |
| destroy         |       |

### new
```cpp
struct sLinkedList {
	void* data;
	struct sLinkedList* next;
};
```
- data：单个节点保存的数据
- next：指向下一个链表
这是一个单向的链表

创建HandleSet 时，只是分配了内存，初始的HandleSet 没有管理的对象，链表中首个节点的data以及next均为NULL。

### addSocket
向handleset中添加socket
前提：handleset 存在 且 socket 已创建
创建一个新的节点，节点数据为socket，并将该节点放到链表的末端

### waitReady
