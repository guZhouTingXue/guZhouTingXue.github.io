---
category: 网络编程
tags:
  - IEC60870
  - Thread
---
# lib60870 thread
lib60870 对thread的包装
以及linux平台下的具体实现
文件：
- hal_thread.h
- thread_linux.c
- 
<!--more-->

## hal_thread

>[!info]
>This file is part of Platform Abstraction Layer (libpal)
>Abstraction layer for threading and synchronization

**类型定义**
``` cpp
/** Opaque reference of a Thread instance */
typedef struct sThread* Thread;

/** Opaque reference of a Semaphore instance */
typedef void* Semaphore;

/** Reference to a function that is called when starting the thread */
typedef void* (*ThreadExecutionFunction) (void*);
```
定义Thread 为 sThread的指针类型，隐藏了具体的sThread实现。所有对sThread的操作只能通过头文件中声明的方法进行访问。

**接口声明**
``` mermaid
classDiagram
    class Thread{     
        Thread_create(function, parameter, autodestroy) Thread
        Thread_start(thread)
        Thread_destroy(thread)
        Thread_sleep(millies)
    }
            
```
 - create: Create a new Thread instance
 - start: Start a Thread.
 - destroy: Destroy a Thread and free all related resources.
 - sleep: Suspend execution of the Thread for the specified number of milliseconds

``` mermaid
classDiagram
    class Semaphore{     
        Semaphore_create(initialValue) Semaphore
        Semaphore_wait(self) void
        Semaphore_post(self) void
        Semaphore_destroy(self) void
    }
```

## thread
**类定义**
``` cpp
struct sThread {
    ThreadExecutionFunction function;
    void* parameter;
    pthread_t pthread;
    int state;
    bool autodestroy;
};
```

| 属性          | 含义                                                 |
| ----------- | -------------------------------------------------- |
| function    | 执行的函数                                              |
| parameter   | 函数的参数                                              |
| pthread     | 线程ID                                               |
| state       | 线程的执行状态<br>1：正在执行 或 正等待被执行（pthread_create() 后设置为1） |
| autodestroy | 线程执行完毕后（return）是否自动销毁                              |

### create
``` cpp
Thread
Thread_create(ThreadExecutionFunction function, void* parameter, bool autodestroy)
{
    Thread thread = (Thread) GLOBAL_MALLOC(sizeof(struct sThread));

    if (thread != NULL) {
        thread->parameter = parameter;
        thread->function = function;
        thread->state = 0;
        thread->autodestroy = autodestroy;
    }

    return thread;
}
```

| 参数          | 值   | 用途                                                                                 | 说明                          |
| ----------- | --- | ---------------------------------------------------------------------------------- | --------------------------- |
| function    |     | the entry point of the thread                                                      |                             |
| parameter   |     | a parameter that is passed to the threads start function                           |                             |
| autodestroy |     | the thread is automatically destroyed if the ThreadExecutionFunction has finished. | 自动销毁：detach<br>等待被主动回收：join |
| RETURN      |     | the newly created Thread instance                                                  |                             |

和pthread_create( ) 不同的是该函数仅仅创建一个线程类对象，将要执行的线程函数、函数参数 以及 其他设置保存到生成的线程类对象中。

### start
``` cpp
void
Thread_start(Thread thread)
{
    if (thread->autodestroy == true) {
        pthread_create(&thread->pthread, NULL, destroyAutomaticThread, thread);
        pthread_detach(thread->pthread);
    }
    else
        pthread_create(&thread->pthread, NULL, thread->function, thread->parameter);

    thread->state = 1;
}

static void*
destroyAutomaticThread(void* parameter)
{
    Thread thread = (Thread) parameter;

    thread->function(thread->parameter);

    GLOBAL_FREEMEM(thread);

    pthread_exit(NULL);
}
```

thread 被当作参数传递给了destroyAutomaticThread

| 行号  | 功能     | 说明  |
| --- | ------ | --- |
| 17  | 类型转换   |     |
| 19  | 执行线程函数 |     |
| 21  | 释放线程对象 |     |
| 23  | 终止线程   |     |

>[!info]
>This function invokes the start function of the thread. The thread terminates when the start function returns.

### destroy
``` cpp
void
Thread_destroy(Thread thread)
{
    if (thread->state == 1) {
        pthread_join(thread->pthread, NULL);
    }

    GLOBAL_FREEMEM(thread);
}
```
如果已经创建线程，并且要销毁的线程不是自动销毁的，那么等待线程执行结束后再进行销毁。

<span style="background:#fff88f">问：</span>对于destroyAutomaticThread 的线程，调用该函数是否存在问题？
thread 本身只是用来启动线程的对象，线程启动运行并不需要该对象。所以可以直接销毁thread。
destroyAutomaticThread 在执行完函数后会销毁thread，如果在它前面调用了Thread_destroy( )会重复释放内存吗？
应该会有问题，对于destroyAutomaticThread 不可以再进行destroy

### sleep
``` cpp
void
Thread_sleep(int millies)
{
    usleep(millies * 1000);
}
```
这里参数只有时间，所以是让调用该函数的线程sleep。对于已经create的线程也没有办法直接让其sleep吧？
usleep（）的单位是微秒，这里需要的单位是 millisecond - 毫秒，所以将参数乘以了1000

## Semaphore
**create**
``` cpp
Semaphore
Semaphore_create(int initialValue)
{
    Semaphore self = GLOBAL_MALLOC(sizeof(sem_t));

    sem_init((sem_t*) self, 0, initialValue);

    return self;
}
```

**wait**
``` cpp
/* Wait until semaphore value is more than zero. Then decrease the semaphore value. */
void
Semaphore_wait(Semaphore self)
{
    sem_wait((sem_t*) self);
}
```

**post**
``` cpp
void
Semaphore_post(Semaphore self)
{
    sem_post((sem_t*) self);
}
```

**destroy**
``` cpp
void
Semaphore_destroy(Semaphore self)
{
    sem_destroy((sem_t*) self);
    GLOBAL_FREEMEM(self);
}
```
