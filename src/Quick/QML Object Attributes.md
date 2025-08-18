---
category: Quick
---


# QML Object Attributes
> Every QML object type has a defined set of attributes.

## Enumeration Attributes
> Enumerations provide a fixed set of named choices. They can be declared in QML using the enum keyword

- fixed
- set of named choices
定义枚举类型：
``` js
enum TextType {
	Normal,
	Heading,
}
```
1. 关键字：enum
2. 类型名（set 的名称）：TextType
3. 可选名称：Normal

>[!Note]
>enumeration types and values must begin with an uppercase letter.

使用：
访问枚举值
``` 
<Type>.<EnumerationType>.<Value> 
<Type>.<Value>
```
Type：所在文件的名称，如定义在Main.qml，则Type 为Main
EnumerationType：枚举类型名
	枚举值和模块的访问层级相同
和c++中，在类外访问定义在类内的enum值的形式类似：
``` cpp
class MyText {
public:
	enum TextType{
		Normal,
		Heading
	};	
};
Mytext::TextType::Normal
Mytext::Normal
```
	枚举值和类中的成员的访问层级相同
问：<mark style="background: #FFF3A3A6;">区别在于c++中，定义enum 的类内访问时可以直接访问枚举值，但是qml中必须通过枚举类型名访问？</mark>

定义属性：
``` js
property int textType: TextType.Normal
```

>[!Note]
>不能通过枚举类型定义属性：property TextType textType

根据TextType设置显示字体的样式
实现：
``` js
    property int textType: Main.TextType.Normal
    Text {
        text: "txt"
        font.pixelSize: root.textType === Main.Normal ? 12 : 24
        font.bold: root.textType === Main.Normal ? false : true
    }
```

效果：
:::tabs
@tab Normal
![](./attachments/QML%20Object%20Attributes-1.webp)
@tab Heading
![](./attachments/QML%20Object%20Attributes.webp)
:::

