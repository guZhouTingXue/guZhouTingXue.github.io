---
tags:
  - OpenGL
  - GLM
---
windows 上安装GLM
<!-- more -->
# 安装GLM - OpenGL Mathematics
[GLM]( https://github.com/g-truc/glm)
通过上面的连接下载glm
1. 进入到源码根目录
``` bash
cd /path/to/glm
```
2. 构建
``` bash
cmake \
	-DGLM_BUILD_TESTS=OFF \
	-DBUILD_SHARED_LIBS=OFF \
	-B build .
```
参数：
	- DGLM_BUILD_TESTS： 是否构建TESTS
	- DBUILD_SHARED_LIBS：是否创建共享库（动态）
	- B：path-to-build，specify a build directory
3. 编译并安装
``` bash
cmake --build build -- all
cmake --build build -- install
```
参数 --build：Build a CMake-generated project binary
安装的目的：将头文件、库文件等资源安装到系统路径下。在cmake中通过find_package 命令可以直接加载。
![](./attachments/安装GLM%20-%20OpenGL%20Mathematics.webp)
	安装过后 系统路径下新增glm

## cmake --build build --all 出错
执行build -- all 时报错：
``` bash
MSBUILD : error MSB1008: 只能指定一个项目。
开关:all

若要显示开关的语法，请键入“MSBuild -help”
```
解决办法：生成项目时指定 generator
``` bash 
cmake -DGLM_BUILD_TESTS=OFF -DBUILD_SHARED_LIBS=OFF -B build -G "Visual Studio 16 2019"
```
	
可以使用cmake -v 查看generator
``` bash 
Generators

The following generators are available on this platform (* marks default):
  Visual Studio 17 2022        = Generates Visual Studio 2022 project files.
                                 Use -A option to specify architecture.
* Visual Studio 16 2019        = Generates Visual Studio 2019 project files.
                                 Use -A option to specify architecture.

```

然后继续执行前述命令
### 权限不足
![](./attachments/安装GLM%20-%20OpenGL%20Mathematics-1.webp)因为要安装到系统路径，所以执行命令的终端需要管理员权限。
管理员身份打开终端：
右键点击终端exe-》以管理员身份打开

## 成功安装
![](./attachments/安装GLM%20-%20OpenGL%20Mathematics-2.webp)
	这里安装的是Debug 版本，如果要安装Release 版本需要指定：
	-DCMAKE_BUILD_TYPE=Release

## 使用
1. 构建项目
```cmake title="CMakeLists.txt"
cmake_minimum_required(VERSION 3.0)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)


project(learnOpenGL)
add_executable(learnOpenGL main.cpp)

# glm
find_package(glm CONFIG REQUIRED)
target_link_libraries(learnOpenGL PRIVATE glm::glm)

# use header-only version of GLM
# target_link_libraries(learnOpenGL PRIVATE glm::glm-header-only) 
```

2. 使用 glm 中的类 vec3-三维向量
``` cpp title="main.cpp"
#include <iostream>

#include <glm/glm.hpp>
using namespace std;
int main()
{
	glm::vec3 v(1.0f);
	cout << v.x << " " << v.y << " " << v.z << endl;
	return 0;
}
```
	打印3坐标值
3. 结果：输出正确数据
``` cpp
1 1 1
```

