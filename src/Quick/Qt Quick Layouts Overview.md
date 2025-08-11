---
category: Quick
---


# Qt Quick Layout Overview
> Use Qt Quick Layouts to arrange items in a user interface. Qt Quick Layouts resize their items, which makes them well suited for resizeable user interfaces.

<!-- more -->


## A simple layout
Layouts 相关类型在 QtQuick.Layouts 模块中

在window内横向排列两个方块，左侧的绿色方块最合适的大小为（100，150），右侧的plum方块填充剩下的空间

实现：
``` js
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

ApplicationWindow {
    visible: true
    width: 600
    height: 400
    title: qsTr("Hello QQuick")

    RowLayout {
        anchors.fill: parent // [!code highlight]
        Rectangle {
            color: "green"
			Layout.preferredHeight: 100 // [!code highlight]
            Layout.preferredWidth: 150 
        }
        Rectangle {
            color: "plum"
            Layout.fillWidth: true // [!code highlight]
            Layout.fillHeight: true
        }
    }
}
```
1. 12 ：layout 本身大小随着window 大小变化而变化（layout 要填充window）
2. 15：设置绿色方块的最佳大小，如果允许，layout 按照preferred 尺寸显示控件
3. 20： 设置plum 填充剩余空间

效果：
初始：
![](./attachments/Qt%20Quick%20Layouts%20Overview.webp)
	绿色方块初始在左侧的中间位置
> Layouts are responsible for their children's geometry. This includes properties such as width, height, x, y, anchors.

window 横向、竖向均有缩小：
![](./attachments/Qt%20Quick%20Layouts%20Overview-2.webp)
	
window 横向宽度最小：
![](./attachments/Qt%20Quick%20Layouts%20Overview-1.webp)

如果最小宽度是150，那么就是绿色方块的 preferredWidth
### 问题：最小宽度是？
增加打印
``` js
    onWidthChanged: {
        console.debug(`(${width}, ${height})`);
    }
    onHeightChanged: {
        console.debug(`(${width}, ${height})`);
    }
```
最小宽度时打印：
``` 
qml: (122, 128)
qml: (122, 126)
qml: (122, 125)
```
但是截图显示最小的宽度是150：按键移动十字线，左侧：（584，y）右侧：（737，y），单位像素，737-584 = 150
所以为什么不一致？？？

最窄时绿色方块是比初始时窄的，在刚好只显示绿色方块时debug（）打印的width为150

打印初始的window 大小为（600，400），实际截图大小为（750，500）
不懂。。。

## anchor layout
> Don't specify properties that influence the geometry of child items in your application.
> ...
> only layouts with no parent layout can have anchors.fill: parent.

layout 管理放在其中的控件的大小、位置。如果控件在layout内，那么就不要设置影响其大小、位置的属性，否则产生冲突，最终的效果未知。
在RowLayout 内放置一个RowLayout，然后设置子RowLayout 为 anchors.fill
实现：
``` js
RowLayout {
    anchors.fill: parent
    RowLayout {
	    id: playout
        anchors.fill: parent
        Rectangle {
	        id: clayout
            color: "green"
            Layout.preferredHeight: 100
            Layout.preferredWidth: 150
        }
        Rectangle {
            color: "plum"
            Layout.fillWidth: true
            Layout.fillHeight: true
        }
    }
}
```
	clayout 的布局由playout 控制，但是又设置它总是填充满playout，这会造成冲突。
效果：
``` 
QML RowLayout: Detected anchors on an item that is managed by a layout. This is undefined behavior; use Layout.alignment instead.
```

### layout 控制的层级
问：<mark style="background: #FFF3A3A6;">layout 控制其childern 的布局，那是否也会影响其grandchildren？</mark>

蓝色方块和plum方块是 layout 的children，绿色方块是蓝色方块的child，也就是layout 的grandchild。设置绿色方块的anchors，看是否生效。
``` js
RowLayout {
    anchors.fill: parent

    Rectangle {
        Layout.preferredWidth: 100
        Layout.preferredHeight: 100
        id: item
        color: "blue"
        Rectangle {
            color: "green"
            width: 50
            height: 50
            anchors.bottom: item.bottom
            anchors.right: item.right
        }

    }
    Rectangle {
        color: "plum"
        Layout.fillWidth: true
        Layout.fillHeight: true
    }

}

```

效果：
![|287x206](./attachments/Qt%20Quick%20Layouts%20Overview-3.webp)
	绿色方块正确anchors 到了蓝色方块的右下角
### 高度设置为0的问题
一开始我使用item 包含绿色方块，且没有设置preferredHight。

效果：
![|240x168](./attachments/Qt%20Quick%20Layouts%20Overview-4.webp)
高度为0时top 和 bottom 相同。所以绿色方块的bottom 在竖直方向的中间。

同时提供height、width

## spacing
layout 内 item 之间的间隙。默认值是5
设置lspacing 为 40时：
![|255x195](./attachments/Qt%20Quick%20Layouts%20Overview-5.webp)

一个Layout 内的item 都设置为fillWidth时，如果它们的implicitWidth相等，那么它们实际的宽度也是相同的。

RowLayout 下有两个ColumnLayout，左侧ColumnLayout 包含了一个RowLayout ，而右侧的ColumnLayout 只包含3个Rectangle。
实现：
``` js 
    RowLayout {
        anchors.fill: parent
        ColumnLayout {
            Rectangle {
                color: "tomato";
                Layout.fillWidth: true
                Layout.fillHeight: true
            }
            RowLayout {
                Rectangle {
                    color: "navajowhite"
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                }
                Rectangle {
                    color: "darkseagreen"
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                }
            }
            Component.onCompleted: { console.debug( "Column0" + " " + implicitWidth)}
        }
        ColumnLayout {
            Rectangle {
                color: "lightpink"
                Layout.fillWidth: true
                Layout.fillHeight: true
            }
            Rectangle {
                color: "slategray"
                Layout.fillWidth: true
                Layout.fillHeight: true
            }
            Rectangle {
                color: "lightskyblue"
                Layout.fillWidth: true
                Layout.fillHeight: true
            }
            Component.onCompleted: { console.debug( "Column1" + " " + implicitWidth)}
        }
    }
```
输出打印：
``` 
qml: Column1 0
qml: Column0 5
```
	左侧的layout implicitWidth 为5，右侧的为0。因为左侧的ColumnLayout 包含了RowLayout，而RowLayout 默认的spacing - 5就是其implicitWidth。

效果：
![](./attachments/Qt%20Quick%20Layouts%20Overview-6.webp)

### equal size
如果要两个columnLayout width 相同可以：
- 设置左侧包含的RowLayout 的spacing 为0
- 显示指定两个ColumnLayout 的preferredWidth 为同一个值

说明了进行布局时优先按照preferred进行设置
效果：
![|248x272](./attachments/Qt%20Quick%20Layouts%20Overview-7.webp)


## specifying preferred size
> For each item, the effective preferred size may come from one of several candidate properties.

以width 为例

| 优先级（从高到低） | 属性名称                  | 属性类型 | 含义                                     | 例子                |
| --------- | --------------------- | ---- | -------------------------------------- | ----------------- |
| 1         | Layout.preferredWidth | 附加   | 可在程序中随时修改的实时宽度，layout 会根据这个值调整item 的宽度 |                   |
| 2         | implicitWidth         | 自身   | give a meaningful ideal size           | Text：能完全显示文本内容的宽度 |
| 3         | width                 | 自身   | 最终显示的宽度                                |                   |
> [!waring]
> You shouldn't rely on width as a source for the effective preferred width.

如果没有设置preferred 和 implicit，那么就是使用width 作为 preferred。但是你不应该依赖这一规则。
> changing the width or height properties won't trigger a layout rearrangement

layout 内有一个Recatangle 和 一个Button。只对 Rectangle 的width进行设置。按下Button 会 减小Rectangle 的宽度，观察结果。
won't trigger a layout rearrangement 的含义：改变layout 内 item 的width layout 内其他item 的width不会跟着变化

实现：
``` js
   RowLayout {
        anchors.fill: parent
        Rectangle {
            id: rect
            color: "green"

            width: 200
            height: width
        }
        Button {
            text: "subtract Rect width"
            Layout.fillWidth: true
            Layout.fillHeight: true
            onClicked: {
                rect.width -= 50
            }
            background: Rectangle { color: "plum"; anchors.fill: parent }
        }
    }
```

效果：
初始：
![](./attachments/Qt%20Quick%20Layouts%20Overview-8.webp)
	绿色方块的实际大小为200（window窗口width 的一半）
点击 subtract 按钮后
![](./attachments/Qt%20Quick%20Layouts%20Overview-9.webp)
	绿色方块width 减小，但是设置为 fillWidth 的button width 没有跟着增大

再点击button一次后，改变window 窗体大小：绿色方块width 恢复为200。
拖动window 观察 Rectangle 的width 和 height 的变化：拖动window改变大小时，widthChanged（heightChanged） 的handler 没有打印信息，只在点击按钮后 (代码中设置大小)和 自动恢复为200 时有打印.
相当于Rectangle 的实际大小 和 width、height properties 不相等

> the layout might use the actual width and height - not the width and height specified in your QML file - when forced to do a full rebuild.

## Size constraints
layout 内包含多个 设置了fill 的items 根据items的preferred 和 implicit size 按比例分配space。

在一个RowLayout 内放置一个orange 和 一个 plum
它们的属性值：

|                | orange | plum |
| -------------- | ------ | ---- |
| minimumWidth   | 50     | 100  |
| maximumWidth   | 100    |      |
| preferredWidth | 100    | 200  |
观察RowLayout 大小变化时orange 和 plum 的大小变换情况，初始window 大小为400
实现：
``` js
   RowLayout {
        id: layout
        anchors.fill: parent
        spacing: 6
        Rectangle {
            color: 'orange'
            Layout.fillWidth: true
            Layout.minimumWidth: 50
            Layout.preferredWidth: 100
            Layout.maximumWidth: 300
            Layout.minimumHeight: 150
            Text {
                anchors.centerIn: parent
                text: parent.width + 'x' + parent.height
            }
        }
        Rectangle {
            color: 'plum'
            Layout.fillWidth: true
            Layout.minimumWidth: 100
            Layout.preferredWidth: 200
            Layout.preferredHeight: 100
            Text {
                anchors.centerIn: parent
                text: parent.width + 'x' + parent.height
            }
        }
    }
```

效果：

::: tabs

@tab 初始

![](./attachments/Qt%20Quick%20Layouts%20Overview-10.webp)

@tab 最小宽度

![](./attachments/Qt%20Quick%20Layouts%20Overview-11.webp)

@tab 更宽
![|416x188](./attachments/Qt%20Quick%20Layouts%20Overview-12.webp)
:::

以下值都是debug打印值
spacing = 6

| 状态  | window | orange | plum | plum.width  / orange.width | orange + plum + spacing |
| --- | ------ | ------ | ---- | -------------------------- | ----------------------- |
| 初始  | 400    | 131    | 263  | 2.00                       | 400                     |
| 最小  | 122    | 50     | 100  | 2.00                       | 156                     |
| 更宽  | 455    | 150    | 299  | 1.99                       | 455                     |
plum的最小宽度实际上是比minimum 限制的宽度更小
下面的图为显示宽度 = 实际宽度时状态
![|146x189](./attachments/Qt%20Quick%20Layouts%20Overview-14.webp)
	可以看到100X100

总结：
1. Layout 中有多个设置为fill 的item时，它们的大小保持 preferred 的比例
2. 理论上Layout的size 范围应该是它管理的所有items 的综合结果

|                               | minimum                                                                | preferred           | maximum           |
| ----------------------------- | ---------------------------------------------------------------------- | ------------------- | ----------------- |
| implicit constraints<br>width | orange.minimumWidth + plum.minimumWidth + spacing = 50 + 100  + 6= 156 | 100 + 200 + + = 306 | 200 + ∞ = ∞       |
| height                        | max(150, 0, 0) (RowLayout不处理Vertical 方向) = 150                         | 按各自的preferred 显示    | max(150, 0) = 150 |
在RowLayout 中 只计算max 、 min height，这里min 和 max 相等所以implicit preferred height 是150 

## Connecting windows and layouts
限制layout所在的windows 的大小

1. 将window 的minimum、maximum width/height 绑定到Layout 的 min 、max width/height
2. 将window 的初始大小（width/height）绑定到layout 的width/height

实现：
``` js
   minimumWidth: layout.Layout.minimumWidth
    minimumHeight: layout.Layout.minimumHeight
    maximumWidth: 1000
    maximumHeight: layout.Layout.maximumHeight

    width: layout.implicitWidth
    height: layout.implicitHeight
```
	3: 由于plum 没有限制最大width，手动设置Window的maximum 为1000
 效果：
 ::: tabs
 @tab 初始
![](./attachments/Qt%20Quick%20Layouts%20Overview-13.webp)

@tab 最小
![](./attachments/Qt%20Quick%20Layouts%20Overview-15.webp)
	
:::

## Spanning 
使用GridLayout，演示columnSpan 属性含义

实现：
``` js
    GridLayout {
       rows: 2
       columns: 3
       anchors.fill: parent
       Rectangle {
           color: 'cyan'
           implicitWidth: 50
           implicitHeight: 50
       }
       Rectangle {
           color: 'magenta'
           implicitWidth: 50
           implicitHeight: 50
       }
       Rectangle {
           color: 'yellow'
           implicitWidth: 50
           implicitHeight: 50
       }
       Rectangle {
           color: 'black'
           implicitWidth: 50
           implicitHeight: 50
           Layout.columnSpan: 2
           Layout.alignment: Qt.AlignHCenter
       }
    }
```
	columnSpan： 指定当前item在Layout 中跨越了几个item.(相当于设置item 的竖直中心位置？)


效果：
::: tabs
@tab 初始
![|195x214](./attachments/Qt%20Quick%20Layouts%20Overview-16.webp)
@tab 改变window 大小后
![](./attachments/Qt%20Quick%20Layouts%20Overview-17.webp)
@tab span的含义
修改：
	columnSpan:3
	 implicitWidth: 150
![](./attachments/Qt%20Quick%20Layouts%20Overview-19.webp)

:::

1. 改变window，不会改变GridLayout 内items 的大小
2. span：2时 黑色方块跨越第一排的前两个方块，span：3时跨越第一个排的3个方块



## Stretching
Layout中存在多个设置了fill的items 时，默认情况下分配空间时按照1：1的比例进行分配。可以通过stretching 控制分配的比例

2行3列的GridLayout内存在cyan (青色)和 magenta(紫红色) ,它们的horizontalStretch 分别为1，2. 
看起来分配额外空间时，它们的width 应该按照1：2 的比例进行拉伸
实现：
``` js
    GridLayout {
       rows: 2
       columns: 3
       anchors.fill: parent
       Rectangle {
           color: 'cyan'
           implicitWidth: 50
           implicitHeight: 50
           Layout.fillWidth: true
           Layout.horizontalStretchFactor: 1
           onWidthChanged: console.debug('cyan width:' + width)
       }
       Rectangle {
           color: 'magenta'
           implicitWidth: 50
           implicitHeight: 50
           Layout.fillWidth: true
           Layout.horizontalStretchFactor: 2
           onWidthChanged: console.debug('magenta width:' + width)
       }
    }
```

效果：
::: tabs 
@tab 初始
![](./attachments/Qt%20Quick%20Layouts%20Overview-18.webp)
@tab 变化后
![](./attachments/Qt%20Quick%20Layouts%20Overview-20.webp)

:::

宽度变化表

| 状态  | cyan | magenta | window | 减去spacing、implicitWidth <br>后扩展的空间 (-106) | cyan 扩展 | magenta扩展 | 扩展比例(C/M) |
| --- | ---- | ------- | ------ | ----------------------------------------- | ------- | --------- | --------- |
| 1   | 0    | 0       | 300    |                                           |         |           |           |
| 2   | 89   | 206     | 300    | 194                                       | 39      | 156       | 0.25      |
| 3   | 91   | 215     | 311    | 205                                       | 41      | 165       | 0.24      |
| 4   | 153  | 460     | 618    | 512                                       | 103     | 410       | 0.25      |

cyan 和 magenta都是在50 的基础上扩展。
如果按照设置的stretchFactor，那么扩展比例应该是1/2 = 0.5，但实际上是0.25 = 1/4

GridLayout 的column 是3，但是这里只设置了2个item。
问：<mark style="background: #FFF3A3A6;">即使magenta占据了空白的item，它的stretchFactor 是 2 + 1，那比例应该是1：3，为什么是4？</mark>

从结果推断，分配空间时仍然计算了第3列的item。
1. 每列的factor 分别是：1，3，1，计算出每列的扩展宽度。
2. magenta span 2列，所以它的扩展的宽度应该是第2、3列之和

>[!note]
>我不确定实际实现是否如此，只是根据实际情况做出的合理推断
>ChatGPT 解释设置columnSpan：1 后实际伸缩比列是1：2，但测试或Magenta仍填充全部剩余width



