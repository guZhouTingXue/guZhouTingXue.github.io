

# Customizing Menu


| 类型            | 可定制属性       |
| ------------- | ----------- |
| Menu          | background  |
| MenuItem      | background  |
|               | contentItem |
|               | indicator   |
|               | arrow       |
| MenuSeqarator | background  |
|               | contentItem |

## MenuSeparator

使用绿色的线作为菜单项的分割线
实现：
``` js
import QtQuick
import QtQuick.Controls

Menu {
    id: menu
    Action { text: qsTr("Tool Bar"); }
    Action { text: qsTr("Side Bar"); }

    MenuSeparator {
        contentItem: Rectangle {
            implicitWidth: 200
            implicitHeight: 1
             color: "#21be2b"
        }
    }
    Action { text: qsTr("Status Bar"); }
}

```
效果：
![](./attachments/Customizing%20Menu.webp)

## Menu
设置绿色边框
实现：
``` js
Menu {
	//same as previous
    background: Rectangle {
        implicitWidth: 200
        implicitHeight: 40
        color: "#ffffff"
        border.color: "#21be2b"
        radius: 2
    }
}
```

效果：
![](./attachments/Customizing%20Menu-2.webp)


## MenuItem
### Indicator
显示Item 是否被选中
实现：
``` js
Menu {
    Action { text: qsTr("Tool Bar"); checkable: true; checked: true}

	delegate: MenuItem {
		id: menuItem
        indicator: Item {
               implicitWidth: 40
               implicitHeight: 40
               Rectangle {
                   width: 26
                   height: 26
                   anchors.centerIn: parent
                   visible: menuItem.checkable // [!code highlight]
                   border.color: "#21be2b"
                   radius: 3
                   Rectangle {
                       width: 14
                       height: 14
                       anchors.centerIn: parent
                       visible: menuItem.checked // [!code highlight]
                       color: "#21be2b"
                       radius: 2
                   }
               }
           }
	}
}
```
1. 9：可选效果。
2. 20：选中效果

效果：
未选中：
![](./attachments/Customizing%20Menu-1.webp)

选中：
![](./attachments/Customizing%20Menu-3.webp)


### arrow
具有子菜单时展开、折叠的箭头
默认效果：
![](./attachments/Customizing%20Menu-4.webp)

设置arrow为绿色三角形箭头
实现：
``` js
        arrow: Canvas {
                  x: parent.width - width
                  implicitWidth: 40
                  implicitHeight: 40
                  visible: menuItem.subMenu
                  onPaint: {
                      var ctx = getContext("2d")
                      ctx.fillStyle = menuItem.highlighted ? "#ffffff" : "#21be2b"
                      ctx.moveTo(15, 15)
                      ctx.lineTo(width - 15, height / 2)
                      ctx.lineTo(15, height - 15)
                      ctx.closePath()
                      ctx.fill()
                  }
              }
```
1. 设置箭头位置，箭头的末尾和MenuItem的末尾重叠：起始位置就是paretn.with - 自身长度


效果：
![](./attachments/Customizing%20Menu-5.webp)

### contentItem

实现：
``` js
        contentItem: Text {
            leftPadding: menuItem.indicator.width
            rightPadding: menuItem.arrow.width
            text: menuItem.text
            font: menuItem.font
            opacity: enabled ? 1.0 : 0.3
            color: menuItem.highlighted ? "#ffffff" : "#21be2b"
            horizontalAlignment: Text.AlignLeft
            verticalAlignment: Text.AlignVCenter
            elide: Text.ElideRight
        }
```
效果：


### background
