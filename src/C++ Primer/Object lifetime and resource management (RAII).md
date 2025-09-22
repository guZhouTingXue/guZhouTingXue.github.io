---
category: C++Primer
---


# Object lifetime and resource management
[参考](https://learn.microsoft.com/en-us/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170)

## leak
1. C++ doesn't have automatic garbage collection
2. C++ 程序需要处理-releases 从系统获取到的 且 不再使用的资源，包含heap memory
3. 如果没有释放那么就会产生leak，后果就是 资源无法再被使用，直到进程退出。
4. Memory leaks 是C++ 程序常见的BUG

garbage = 从系统获取的 且 不再使用的资源
问题：
1. 如何acquired resources
2. 如何release


## RAII
1. resource 太大时应该其分配给对象
2. 对象初始化时获取它所需要的resources
3. 拥有resources 的对象分配在stack上
4. 对象destroyed 时release resource

> The principle that objects own resources is also known as "resource acquisition is initialization", or RAII

资源获取即初始化-RAII。即：立即。初始化：指定拥有资源的对象，该对象分配在栈上。


## object lifetime 
1. （拥有资源的）栈上分配的对象，超过其所在scope 时自动调用其destructor
2.  对象销毁时释放资源，可以控制什么时候创建对象，这样也就控制了什么时候释放资源

### 不需要控制资源的示例
代码：
``` cpp
class widget {
private:
    gadget g;   // lifetime automatically tied to enclosing object
public:
    void draw();
};

void functionUsingWidget () {
    widget w;   // lifetime automatically tied to enclosing scope
                // constructs w, including the w.g gadget member
    // ...
    w.draw();
    // ...
} // automatic destruction and deallocation for w and w.g
  // automatic exception safety,
  // as if "finally { w.dispose(); w.g.dispose(); }"
```
在函数内创建对象w，函数返回时w自动销毁。w销毁时其成员g也会随之销毁。
这里什么意思？
g算是w的资源？一开始就绑定到w上，所以不需要其余操作？
或者 w没有获取资源，所以不需要在其析构中release resource？

### delete the memory in destructor
``` cpp
class widget
{
private:
    int* data;
public:
    widget(const int size) { data = new int[size]; } // acquire
    ~widget() { delete[] data; } // release
    void do_something() {}
};

void functionUsingWidget() {
    widget w(1000000);  // lifetime automatically tied to enclosing scope
                        // constructs w, including the w.data member
    w.do_something();

} // automatic destruction and deallocation for w and w.data
```
同样地，在函数内创建了对象w。但是这一次 w owns int\[size],。w 销毁时，其成员data指向的memory 不会自动销毁，所以需要在destructor 中主动delete

## 使用智能指针管理资源
``` cpp
#include <memory>
class widget
{
private:
    std::unique_ptr<int[]> data;
public:
    widget(const int size) { data = std::make_unique<int[]>(size); }
    void do_something() {}
};

void functionUsingWidget() {
    widget w(1000000);  // lifetime automatically tied to enclosing scope
                        // constructs w, including the w.data gadget member
    // ...
    w.do_something();
    // ...
} // automatic destruction and deallocation for w and w.data
```
为了避免leak memory，必须要release unused resources，析构时要处理所有garbage。智能指针对象帮助解决必须手动release garbage 的问题。让智能指针对象拥有资源，smart point 是类的成员，类对象销毁时，smart point 跟着销毁。smart point 销毁时 会 release 它所拥有的resource。




