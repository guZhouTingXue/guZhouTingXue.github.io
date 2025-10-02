---
category: LearnOpenGL
---
# Hello Triangle
- openGL 的大部分工作是将3D坐标转变2D像素
- 通过 graphics pipeline 完成转换
- 转换过程可以划分为两个部分：将3D坐标转换为2D坐标；将2D坐标转换为像素
- graphics pipeline 可以划分为6个步骤，每个步骤的输入是上一个步骤的输出
- 一些步骤（Shader）可以设定为自己编写的程序
	- Shaders are written in the OpenGL Shading Language (GLSL)
- 可以设置绘制的形状类型（数据的结构）如给定3个点可以绘制成一个三角形，也可以绘制成两条线段
	- Those hints are called `primitives`
	- Some of these hints are GL_POINTS, GL_TRIANGLES and GL_LINE_STRIP


| step | name              | 中文名   | 作用                                                                                                                                                     | configurable；可选？ | 说明                                      |
| ---- | ----------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | --------------------------------------- |
| 1    | VERTEX SHARDER    | 顶点着色器 | 1. transform 3D coordinates into different 3D coordinates<br>2. some basic processing on the vertex attributes                                         | Y                |                                         |
| 2    | GEOMETRY SHADER   | 几何着色器 | has the ability to generate other shapes by emitting new vertices to form new primitives                                                               | Y；Y              | 额，示例上看vertex shader 传递过来3个顶点，在这里增加了一个顶点 |
| 3    | SHAPE ASSEMBLY    | 图元装配  | form one or more primitives and assembles all the point(s) in the primitive shape given                                                                | N                | 4个顶点构成了2个triangles                      |
| 4    | RASTERIZATION     | 光栅化   | 1. it maps the resulting primitive(s) to the corresponding pixels on the final screen<br>2. Clipping discards all fragments that are outside your view | N                |                                         |
| 5    | FRAGMENT SHADER   | 片段着色器 | calculate the final color of a pixel                                                                                                                   | Y                |                                         |
| 6    | TESTS AND BLEDING | 测试与混合 | checks the corresponding depth value of the fragment <br>checks for alpha values and blends the objects accordingly.                                   | N                |                                         |

## NDC - Normalized Device Coordinates
OpenGL 使用NDC 坐标系进行绘制。
**坐标系定义**
>[!quote]
>the positive y-axis points in the up-direction and the (0,0) coordinates are at the center of the graph

原点在图像中心，x向右为正，y向上为正。坐标范围 \[-1.0，1.0]，超出范围不会显示
通过glViewport 可以将 NDC 坐标转化为 screen-space coordinates, screen-space 是在glfw 中指定的OpenGL 渲染宽口。
 

## Vertex input
>[!quote]
>To start drawing something we have to first give OpenGL some input vertex data.

步骤：
1. define vertices in normalized device coordinates in a float array
2. creating memory on the GPU where we store the vertex data
3. configure how OpenGL should interpret the memory 
4. specify how to send the data to the graphics card


### define vertices
实现：
``` cpp
float vertices[] = {
    -0.5f, -0.5f, 0.0f,
     0.5f, -0.5f, 0.0f,
     0.0f,  0.5f, 0.0f
}; 
```
使用NDC坐标；浮点类型；
因为是表示3维坐标，每个vertex 用3个坐标值定义，依次是x，y，z。
### creating memory on the GPU
使用 vertex buffer objects (VBO) 存储GPU 内存中的vertices 
因为CPU 传递 数据给GPU的速度非常满，所以尽量一次性将所有要用到的数据发送给GPU，让GPU存储。shader 获取GPU中的数据速度非常快。

实现：
``` cpp
unsigned int VBO;
glGenBuffers(1, &VBO);
```

| 行号  | 功能       | 说明                                                |
| --- | -------- | ------------------------------------------------- |
| 1   | 存放VBO id |                                                   |
| 2   | 生成VBO对象  | 可以一次性创建多个VBO对象，第一个参数是定义的VBO对象的数量，第二个参数是存放VBOid的地址 |

### send data
在发送数据前，需要先bind VBO
实现：
``` cpp
void glBindBuffer(	GLenum target,GLuint buffer);
glBindBuffer(GL_ARRAY_BUFFER, VBO); 
```

| 参数     | 值               | 说明                                                                        |
| ------ | --------------- | ------------------------------------------------------------------------- |
| target | GL_ARRAY_BUFFER | OpenGL has many types of buffer objects, GL_ARRAY_BUFFER 表示 vertex buffer |
| buffer | VBO             | 要绑定的VBO id                                                                |

所有针对GL_ARRAY_BUFFER的操作都是基于当前bind的 buffer。
发送：
``` cpp
void glBufferData(	GLenum	target,
GLsizeiptr	size,
const GLvoid *	data,
GLenum	usage);

glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
```

>[!quote]
>glBufferData is a function specifically targeted to copy user-defined data into the currently bound buffer.

| 参数     | 值                | 用途                                                                      | 说明                 |
| ------ | ---------------- | ----------------------------------------------------------------------- | ------------------ |
| target | GL_ARRAY_BUFFER  | type of the buffer we want to copy data into                            |                    |
| size   | sizeof(vertices) | specifies the size of the data (in bytes) we want to pass to the buffer |                    |
| data   | vertices         | the actual data we want to send                                         |                    |
| usage  | GL_STATIC_DRAW   | how we want the graphics card to manage the given data                  | 数据变化的频率，这里的值表示不会变化 |

问：<mark style="background: #FFF3A3A6;">所以调用glBufferData 后才会在GPU中分配对应buffer使用的内存？bind 新的buffer 后之前的buffer 怎么样了，是被释放了？</mark>

| 值               | 含义                                                                | 说明                          |
| --------------- | ----------------------------------------------------------------- | --------------------------- |
| GL_STREAM_DRAW  | the data is set only once and used by the GPU at most a few times | 只设置依次（数据不会发生变化），最多使用几次（频率低） |
| GL_STATIC_DRAW  | the data is set only once and used many times                     |                             |
| GL_DYNAMIC_DRAW | the data is changed a lot and used many times.                    |                             |

问：<mark style="background: #FFF3A3A6;">对于经常变化的数据，每次如何更新数据？还是需要再glBufferData？</mark>


## Vertex shader
### writing a shader
vertex shader的目的：
>[!quote]
>transform the input data to coordinates that fall within OpenGL's visible region.

最简单的vertex shader程序：
``` glsl
#version 330 core
layout (location = 0) in vec3 aPos;

void main()
{
    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
}
```

| 行号  | 功能                                      | 说明                                                                                                                                               |
| --- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | declaration of its version              | 当前使用3.3 版本 及 core profile functionality                                                                                                          |
| 2   | declare all the input vertex attributes | in 表示 input；vec 是 vector的缩写，是GLSL 语言定义的数据类型，后面的3是vector 的维度-3维向量。<br>Layout (location = 0) 说明 变量在buffer中的位置                                      |
| 4   | 函数起始                                    |                                                                                                                                                  |
| 5   | 设置vertex shader的输出                      | gl_Position 是 predefined 的变量，它的类型是vec4<br>vector 最大维数是1，每个维度的值的名称依次是x, y, z, w，通过下标运算符+名称访问对应的值。<br>将aPos的值拷贝到gl_Position, 并设置gl_Position的w为 1.0 |


### Compiling a shader
编译的过程：
1. create a shader object
``` cpp
unsigned int vertexShader;
vertexShader = glCreateShader(GL_VERTEX_SHADER);
```
shader 有多种类型，这里使用GL_VERTEX_SHADER表示要创建的是vertex shader

2. 将vertex shader 存储到 c字符串中
``` cpp
const char *vertexShaderSource = "#version 330 core\n"
    "layout (location = 0) in vec3 aPos;\n"
    "void main()\n"
    "{\n"
    "   gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
    "}\0";
```
3. attach the shader source code to the shader object and compile the shader
``` cpp
glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
glCompileShader(vertexShader);
```
source code 可以分为多段，编译前将其拼接到一起。最后一个参数的含义是字符串的长度数组，设置为NULL，表示每段字符都是以\0结尾。

#### 错误处理
``` cpp
int  success;
char infoLog[512];
glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);

if(!success)
{
    glGetShaderInfoLog(vertexShader, 512, NULL, infoLog);
    std::cout << "ERROR::SHADER::VERTEX::COMPILATION_FAILED\n" << infoLog << std::endl;
}
```

| 行号  | 功能              | 说明                                                |
| --- | --------------- | ------------------------------------------------- |
| 1   | 出错的标志           |                                                   |
| 2   | 存储错误信息          |                                                   |
| 3   | 获取shader的编译状态参数 | GL_COMPILE_STATUS： 编译状态参数，还有其他参数，如：GL_SHADER_TYPE |
| 7   | 获取错误日志          |                                                   |
| 8   | 打印日志            |                                                   |
