
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

ChatGPT的回答
>大多数情况下以QObject* 或 其子类指针的形式暴露
>QML 是脚本语言，类似JavaScript，不具备栈上对象语义
>在QML中创建的C++类型对象是在堆上分配

## Exposing Methods (Including Qt Slots)
> Any method of a QObject-derived type is accessible from QML code if it is :
> - A public method flaged with the Q_INVOKABLE() macro
> - A method that is a public Qt slot

在MessageBoard 中通过以上两种方式定义method，在QML中进行调用

``` cpp title=MessageBoard
class MessageBoard : public QObject{
    Q_OBJECT
    QML_ELEMENT
public:
    MessageBoard(QObject *parent = nullptr)
        : QObject(parent)
    {
    }

    Q_INVOKABLE QString postMessage(const QString &msg)
    {
        qDebug() << "Called the C++ method with" << msg;
        return "hello QML";
    }

public slots:
    void refresh()
    {
        qDebug() << "Called the C++ slot";
    }
};
```
使用：
``` js title=Main.qml
    MessageBoard {
        id: board
    }
    MouseArea {
        anchors.fill: parent
        onClicked: {
            var result = board.postMessage("Hello from QML")
            console.log("Result of postMessage():", result);
            board.refresh();
        }
    }
```
	MouseArea 定义了一个鼠标区域（这里填充整个窗体），点击后调用board 的method
效果：
``` title=output
Called the C++ method with "Hello from QML"
qml: Result of postMessage(): hello QML
Called the C++ slot
```
board的方法被调用， 可以正确接收到QML传递的参数，并且返回的参数在QML中也可以正确打印出来。

### required property
board 可以使用属性定义的形式：
``` js 
    property MessageBoard board: MessageBoard {}
```
如果没有初始化，那么后面使用board 时，其值为NULL，会报错。
未初始化：
``` js
property MessageBoard board
```
报错：
``` title=error
 TypeError: Cannot call method 'postMessage' of null
```

如果用required modifies property， 那么创建拥有该属性的对象时必须指定属性值

在main.cpp中创建MessageBoard 对象，设置其id值，并传递给指定的QML对象-Main.qml作为property，QML中property 的id（对象名称）要和cpp中设置的一致
``` cpp title=main.cpp
#include "message.h" //头文件
...
int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;
    MessageBoard board;
    engine.setInitialProperties({ {"board", QVariant::fromValue(&board)} });
	connect(...);
	engine.loadFromModule("TableViewTest", "Main");

    return app.exec();
}
```
注意：
1. 设置engine 的properties 时对象指针需要使用QVariant 进行包装，原文档中直接给定裸指针的方式已经不可用。
	2.setInitialProperties（）要在 load之前
	
QML 定义property
``` title=Main.qml
    required property MessageBoard board

```

最终使用效果和在QML中定义board 一致

### overloaded C++ functions
> QML supports the calling of overloaded C++ functions. If there are multiple C++ functions with the same name but different argument, the correct function will be called according to the number and the types of arguments that are provided.

 新增带QString 参数的refresh，在qml中分别调用不带参数和带string参数的refresh

``` cpp title=MessageBoard
public slots:
    void refresh()
    {
        qDebug() << "Called the C++ slot";
    }
    void refresh(const QString &s)
    {
        qDebug() << "Called the refresh(QString):" << s;
    }
```

使用：
``` js title=Main.qml
    MouseArea {
        anchors.fill: parent
        onClicked: {
            board.refresh()
            board.refresh("Hello from QML")
        }
    }
```

结果：
``` title=output
Called the C++ slot
Called the refresh(QString): "Hello from QML"
```

### C++ methods and the 'this' object
> You may want to retrieve a C++ method from one object and call it on a different object.

在C++ 中类的方法带有隐式的this指针参数，是一个指向调用它的对象的指针常量。
在QML中可以获取C++ method，然后让其他对象调用该method

Invokable 类定义了一个给QML 调用的接口：invoke()， 在其中打印自身的objectName 
``` cpp title=Inovkable
class Invokable : public QObject {
    Q_OBJECT
    QML_ELEMENT
public:
    Invokable(QObject *parent = nullptr) : QObject(parent) {}
    Q_INVOKABLE void invoke()
    {
        qDebug() << "invoked on" << objectName();
    }
};
```

使用：
创建一个objectName 为parent的对象，parent 中定义同类型的 且 objectName 为child 的property。
获取child的 invoke（）method，然后传递 parent 的this 作为 隐式的this参数 调用invoke，最终的结果应该打印parent 的objectName：parent
``` js 
    Invokable {
        objectName: "parent"
        property Invokable child: Invokable {}
        Component.onCompleted: {
            child.objectName = "child"
            child.invoke.call(this)
        }
    }
```
js中function 是对象，通过call 可以指定this

注意：原文档中 没有给child 设置objectName，所以其objectName 是空的“”、

结果：
``` title=output
Calling C++ methods with 'this' objects different from the one they were retrieved from is broken, due to historical reasons. The original object is used as 'this' object. You can allow the given 'this' object to be used by setting 'pragma NativeMethodBehavior: AcceptThisObject'
invoked on "child"
```
	由于调用方法的this 和 获取 method 的this 不一致，这里使用original object 作为this object，所以最后打印的objectName 是 child

如果需要指定this 参数，通过提示进行设置
设置：
``` js
pragma NativeMethodBehavior: AcceptThisObject
```
结果：
``` title=output
invoked on "parent"
```


## Exposing Signals
> Any public signal of a QObject-derived type is accessible from QMLY code.
> The QML engine automatically creates a signal handler for any signal of a QObject-derived type that is used from QML. Signal handler are always named on\<Signal> where \<Signal> is the name of the signal, with the first letter capitalized.

在MessageBoard 中定义 newMessagePosted（）信号， emitSignal（）用于发射信号
``` cpp
public:
    Q_INVOKABLE void emitSignal()
    {
        emit newMessagePosted("animal");
    }

signals:
    void newMessagePosted(const QString &subject);
```

使用：
``` js
    MessageBoard {
        onNewMessagePosted: (subject)=> console.log("New message received:", subject);
        Component.onCompleted: {
            this.emitSignal()
        }
    }
```
	
结果：
``` title=output
qml: New message received: animal
```

注意：在构造函数中emit signal qml 中的handler 是收不到的，构造函数执行完毕后才会进行信号连接等工作

### Multiple signals with same name
> only the final signal is accessible as a QML signal. Note that signals with the same name but different parameters cannot be distinguished from one another.

定义同名的signal，参数类型为int，并在参数类型string 的signal后定义。
``` cpp
public:
    Q_INVOKABLE void emitSignal()
    {
        emit newMessagePosted("animal");
        emit newMessagePosted(100);
    }
signals:
    void newMessagePosted(const QString &subject);
    void newMessagePosted(int i);
```

效果：
``` 
qml: New message received: 100
```