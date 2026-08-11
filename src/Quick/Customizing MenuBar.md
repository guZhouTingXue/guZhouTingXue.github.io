


# Customizing MenuBar
> MenuBar can have a visual background item, and MenuBarItem consists of two visual items: background and content item.

示例代码修改MenuBar 的background 以及 显示在MenuBar 中的 MenuBarItem 的background 和 content。
实现：
``` js
import QtQuick
import QtQuick.Controls.Basic

MenuBar {
    id: menuBar

    Menu { title: qsTr("File")
        MenuItem { text: "new ..." }
        MenuItem { text: "open ..." }
    }
    Menu { title: qsTr("Edit")
        MenuItem { text: "Undo" }
    }
    Menu { title: qsTr("View") }
    Menu { title: qsTr("Help") }

    delegate: MenuBarItem { // [!code highlight]
        id: menuBarItem

        contentItem: Text { // [!code highlight]
            text: menuBarItem.text
            font: menuBarItem.font
            opacity: enabled ? 1.0 : 0.3
            color: menuBarItem.highlighted ? "#ffffff" : "#21be2b"
            horizontalAlignment: Text.AlignLeft
            verticalAlignment: Text.AlignVCenter
            elide: Text.ElideRight
        }

        background: Rectangle { // [!code highlight]
            implicitWidth: 40
            implicitHeight: 40
            opacity: enabled ? 1 : 0.3
            color: menuBarItem.highlighted ? "#21be2b" : "transparent"
        }
    }

    background: Rectangle {
        implicitWidth: 40
        implicitHeight: 40
        color: "#ffffff"

        Rectangle {
            color: "#21be2b"
            width: parent.width
            height: 1
            anchors.bottom: parent.bottom
        }
    }
}

```
1.  38：MenuBar 的background。使用Rectangle 作为 background，这里整体的背景色是白色，在MenuBar的底部绘制了一条绿色的线（height：1）
2. 30：MenuBarItem 的background。item 被选中（通过鼠标或按键）时背景为绿色，未被选中时为透明
3. 17：MenuBarItem 的content。设置Text 作为显示内容，选中时文本为白色，未被选中时为绿色


效果：
![|374x204](./attachments/Customizing%20MenuBar.webp)
	注意到File Menu 中的 new 和 open 没有受到影响。MenuBar 的delegate只影响MenuBarItem
	