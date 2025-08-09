

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



