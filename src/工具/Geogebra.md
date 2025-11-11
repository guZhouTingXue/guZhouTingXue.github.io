---
category: 工具
---
# Geogebra
>[!info]
>Teach and learn math in a smarter way

可视化的计算辅助工具

<!--more-->

下载：
https://geogebra.github.io/docs/reference/en/GeoGebra_Installation/
windows 下载：
- GeoGebra Classic 6：新版，多个平台界面统一
- GeoGebra Classic 5 for Desktop： 经典版本，更稳定
classic 是多个计算工具合并到一个软件中

我使用的classic 5

## 界面
![|602x328](./attachments/Geogebra.webp)

1. Toolbar
2. 对象列表？显示图形界面中的对象 
3. 图形界面
4. Menu
5. Style Bar

## Vector

## create
1. 在菜单栏中点击Manual 进入到用户手册
2. 在搜索栏中输入vector，查询vectore相关信息
3. vector command
```
Vector( <Point> )
Returns the position vector of the given point.

Vector( <Start Point>, <End Point> )
Creates a vector from Start Point to End Point.

```

| 行号  | 功能                          | 说明                         |
| --- | --------------------------- | -------------------------- |
| 1   | 创建一个起点为原点，终点为给定point的vector | 创建vector 的命令格式，下面是其说明以及示例。 |
| 2   | 通过给定起点以及终点创建vectore         | 每个点使用（）包围                  |

4. 示例
![|400x214](./attachments/Geogebra-1.webp)

### Dot product
```
Dot( <Vector>, <Vector> )

Returns the dot product (scalar product) of the two vectors.
```


### Cross product
``` 
Cross( <Vector u> , <Vector v> )

Calculates the cross product of u and v. Instead of vectors you can also use lists.
```


## Polygon
1. 指定多边形的所有顶点
``` 
Polygon((1, 1), (3, 0), (3, 2), (0, 4))
```
![|299x330](./attachments/Geogebra-2.webp)
2. 通过list 指定顶点
```
q1=Polygon({(1,1),(3,0),(3,2),(0,4)})
```
效果和前面的一样，list只不过是将点放到了{ }中

2. 指定底边以及边数
```
Polygon((1, 1), (4, 1), 6)
```
![|303x331](./attachments/Geogebra-3.webp)

