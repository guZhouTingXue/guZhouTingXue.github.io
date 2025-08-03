
> QML can easily be extended with functionality defined in C++ code.

<!-- more -->

# Exposing Attribtes of C++ Types to QML
> QML engine with the Qt meta-object system, any functionality that is appropriately exposed by a QObject-derived class or a Q_GADGET type is accessible from QML code.

QML 中可以获取到C++ Type的：
- Properties
- Methods
- Signals
- enum

>Registration is recommended for all types you use in QML, as only registered types can be analyzed at compile time

## Data Type Handling and Ownership
> Any data that is transferred from C++ to QML, whether as a property value, a method parameter or return, or a signal parameter value, must be of a type that is supported by the QML engine.
> By default, the engine supports a number of Qt C++ types and can automatically convert them as appropriately then used from QML.

C++ 和 QML 之间交互的类型都要是QML 已知类型

>When data is transferred from C++ to QML, the ownership of the data always remains with C++.

传递给QML 的指针对象需要在C++中销毁


## Exposing Properties
类Message 是 QObject 的子类，他有一个properity 类型为QString，名称为 author。
``` cpp title:message.h
class Message : public QObject
{
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(QString author READ author WRITE setAuthor NOTIFY authorChanged FINAL)
public:
    explicit Message(QObject *parent = nullptr);

    void setAuthor(const QString &a) {
        if(a != m_author)
        {
            m_author = a;
            emit authorChanged();
        }
    }

    QString author() const {
        return m_author;
    }

signals:
    void authorChanged();
private:
    QString m_author = "mingStudent";
};
```
- 使用Q_PROPERTY 声明要暴露的属性。
- 属性相关的方法使用特定的关键字声明，如读取author 使用READ。
- 修改属性后需要发送changed 信号，通知绑定的对象更新

使用：
``` js
    Message {
        id: msg
    }
    Text {
        anchors.fill: parent
        text: msg.author
    }
```

效果：
![](./attachments/Exposing%20Attributes%20of%20cpp%20Types%20to%20QML.webp)


### 不要使用别名
在命名空间Foo内定义枚举类型Enum。Mesage类暴露Enum类型属性
``` cpp
namespace Foo{
enum Enum {
    E0,
    E1
};

}

class Message : public QObject
{
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(Foo::Enum e READ e CONSTANT)
public:
    Foo::Enum e() const {
        return e_;
    }
signals:

private:
    QString m_author = "mingStudent";
    Foo::Enum e_ = Foo::E1;
};
```
	如果property 只读，QtCreator 提示将其声明为CONSTANT
使用：
``` js
    Text {
        anchors.fill: parent
        text: msg.e
    }
```
	QML中访问的属性名是Q_PROPERTY中声明的名称

效果：
![](./attachments/Exposing%20Attributes%20of%20cpp%20Types%20to%20QML-1.webp)
	显示枚举变量对应的int值

#### 别
``` cpp
using FooEnum = Foo::Enum;
class Message
{
    Q_PROPERTY(FooEnum e READ e CONSTANT)
};
```
	虽然我这里编译通过，也能正常显示。

### Notes on Use of Notify Signals
> any property that is writable should have an associated NOTIFY signal that is emitted whenever the property value has changed.

1. 可修改的属性应该具有notify 信号。
2. notify 可应用到 property binding，自动更新关联的属性
3. notify 的名称格式：\<property>Changed，QML中总是通过on\<property>Changed 获取变化信息
4. Grouped Properties 内的properties 可以使用同一个notify signal
5. CONSTANT attribute 只应用在初始化后就不再变化的属性上

t0、t1都显示msg 的author。btn 修改msg 的author。
``` js
    Row {

        Text {
            id: t0
            width: 100
            height: 100
            text: msg.author
        }
        Label {
            width: 100
            text: "    "
        }
        Text {
            id: t1
            width: 100
            height: 100
            text: msg.author
        }

        Button {
            property int i
            text: "btn"
            onClicked: {
                i++
                msg.author = i
            }
            Component.onCompleted: {
                i = 0
            }
        }
    }
```

效果：
![](./attachments/Exposing%20Attributes%20of%20cpp%20Types%20to%20QML-2.webp)
	点击按钮，t0、t1 显示的文本同步变化

### Properties with Object Types
> Object-type properties are accessible from QML providing that the object type has been appropriately registered with the QML type system.

MessageBody 作为 Message 的body 属性
``` cpp
class MessageBody : public QObject{
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(QString text READ text CONSTANT)
public:
    QString text() const {
        return "Body";
    }
};
//省略author
class Message : public QObject
{
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(QString author READ author WRITE setAuthor NOTIFY authorChanged FINAL)
    Q_PROPERTY(MessageBody* body READ body CONSTANT)
public:
    explicit Message(QObject *parent = nullptr);
    ~Message() {
        delete m_body;
    }

    MessageBody* body()const {
        return m_body;
    }
private:
    MessageBody *m_body = nullptr;
};

```

使用：
``` js
    Text {
        id: t0
        width: 100
        height: 100
        text: msg.author + msg.body.text
    }
```
	使用msg中的author属性以及它的body中的text属性 
效果：
![](./attachments/Exposing%20Attributes%20of%20cpp%20Types%20to%20QML-3.webp)


### Properties with Object-List Types
> Properties containing lists of QObject-derived types can also be exposed to QML. For this purpose, however, one should use QQmlListProperty rather than QList\<T> as the property type. This because QList is not QObject-derived type, and so cannot provide the necessary QML property characteristics through the Qt meta object system, such as signal notifications when a list is modified.


MessageBoard 中包含一组Message
``` cpp
class MessageBoard : public QObject{
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(QQmlListProperty<Message> messages READ messages)
public:
    MessageBoard(QObject *parent = nullptr)
        : QObject(parent)
    {
        auto msg = new Message(this);
        msg->setAuthor("Rod");
        m_messages.append(msg);

        msg = new Message(this);
        msg->setAuthor("Ade");
        m_messages.append(msg);
    }
    QQmlListProperty<Message> messages() {
        return QQmlListProperty<Message>(this, &m_messages);
    }
private:

#if 0
    static void append_message(QQmlListProperty<Message> *list, Message *msg) {
        MessageBoard *msgBoard = qobject_cast<MessageBoard*>(list->object);
        if(msg && msgBoard)
            msgBoard->m_messages.append(msg);
    }
#endif

private:
    QList<Message *> m_messages;
};
```
	原文档中构造QQmlListProperty时构造参数错误，首先是数量错误，其次没有传递list对象。
这里使用最简单的QQmlListProperty 构造函数：
``` cpp
	QQmlListProperty(QObject *object, QList<T *> *list)
```
	QList中要存储 Object-derived 类型对象的指针
<mark style="background: #FFB8EBA6;">注意这里READ 方法不能是const 的</mark>
使用：创建board，打印所有的message
``` js
    MessageBoard {
        id: board
        Component.onCompleted: {
            for(let i = 0; i < board.messages.length; i++)
            {
                let msg = board.messages[i]
                console.debug(msg.author)
            }
        }
    }
```

效果：
``` output
qml: Rod
qml: Ade
```

### Grouped Properties
property 的类型 是一个Object Type，并且Object Type 包含有多个Property
``` cpp
class MessageAuthor : public QObject {
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(QString name READ name CONSTANT)
    Q_PROPERTY(QString email READ email CONSTANT)
public:
    MessageAuthor(QObject *parent = nullptr) : QObject(parent) {}
    QString name() const {
        return "mingStudent";
    }
    QString email() const {
        return ":)@qq.com";
    }
};

class Message : public QObject
{
    Q_OBJECT
    QML_ELEMENT
    Q_PROPERTY(MessageAuthor *author READ author CONSTANT)
    ...
};
```

使用：
``` js
    Message {
        id: msg

    }
    Text {
        height: 100
        width: 50
        text: msg.author.name + " " + msg.author.email;
    }
```

效果：
![](./attachments/Exposing%20Attributes%20of%20cpp%20Types%20to%20QML-4.webp)

### 小结
- c++ 类型的property（还有function、signal）可以暴露给QML使用，基于Qt 的 meta-Object system 实现
- 暴露的类型需要是 QObject-derived（或使用Q_GADGET），并且需要注册到QML中
- 使用Q_PROPERTY 定义暴露的property，并在其中声明相关的方法

问题：
前述：定义proerpty 类型时，如果是内置类型，如QString，可以直接声明。如果是自定义类型，如MessageAuthor、MessageBody。property 的type 都是指针类型。
问：
1. <mark style="background: #FFF3A3A6;">在QML中创建C++ 注册到QML中的类型的对象时，对象是如何创建的？是类似于直接定义一个对象还是类似于new 一个对象？</mark>
2. <mark style="background: #FFF3A3A6;">是否所有自定义的类型都只能通过指针形式传递？</mark>
