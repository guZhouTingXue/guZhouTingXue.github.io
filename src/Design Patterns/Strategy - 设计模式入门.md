---
category: DesignPatterns
---
# Strategy


## 简单的模拟鸭子应用
### 鸭子类
``` mermaid
classDiagram 
	class Duck {
		quack()
		swim()
		display()
	}
```
基类：所有的鸭子都会叫、游泳
``` mermaid
classDiagram
	class Duck
	MallarDuck --|> Duck
	ReadheadDuck --|> Duck
	MallarDuck : display() //外观是绿头
	ReadheadDuck : display() //外观是红头
```


让鸭子飞起来
在Duck中添加方法：所有的鸭子都会飞了

可怕的问题
橡皮鸭现在也会飞

继承？
``` mermaid
classDiagram
	class Duck
	MallarDuck --|> Duck
	ReadheadDuck --|> Duck
	MallarDuck : display() //外观是绿头
	ReadheadDuck : display() //外观是红头
	RubberDuck --|> Duck
	RubberDuck : quack() //吱吱叫
	RubberDuck : display() //橡皮鸭
```
	子类覆盖基类定义的方法
缺点：所有的子类都需要判断是否需要覆盖基类的方法。基类的方法改变，子类也要跟着修改。


接口？
将方法作为接口使用
``` mermaid
classDiagram
	 class Flyable { <<Interface>> 
	 fly() }
	 class Quackable { <<Interface>> 
	 quack() }
	class Duck {
		swim()
		display()
	}

	Flyable <.. MallarDuck
	Quackable <.. MallarDuck
	Duck <|-- MallarDuck
	
	Quackable <.. ReadheadDuck
	Duck <|-- ReadheadDuck
```

缺点：代码无法复用，每种鸭子类都要实现接口。

## 设计原则
继承不适用于解决经常变化的问题。
JAVA中接口不能继承，C++中接口（抽象类）可以继承。在JAVA中同样不能使用接口解决经常变化的问题。

>[!Tip]
>找出应用中可能需要变换之处，把它们独立出来，不要和哪些不需要变换的代码混在一起。


## 重新设计鸭子
实现的鸭子是笼统的鸭子，只具有鸭子的外观，其余部分没有要求。
分离变化的部分：将fly 和 quack 放到单独的类中，通过它们提供的接口实行具体的行为。
接口是不变的，但是具体的实现是可变的。

``` mermaid
classDiagram
	class FlyBehavior { <<Interface>>
	}
	FlyBehavior <|.. FlyWithWings
	FlyBehavior <|.. FlyNoWay
```

### 针对接口，而不是具体实现编程
> 针对接口的真正意思是针对超类型编程

超类型-抽象类。利用多态，所有基类指针/引用都可以用子类指针/引用 替换。
具体实现：子类
举例：
``` mermaid
classDiagram
	class Animal {
		+ makeSound() 
	}
	class Dog {
		+ makeSound()
		+ back()
	}
	Dog --|> Animal
	
	class Cat {
		+ makeSound() 
		+ meow()
	}
	Cat --|> Animal
```

针对实现：
``` cpp
Dog *d = new Dog();
d->back();
```
调用的方法和实现绑定，如果更换为其他动物必须修改代码。
更换为cat后
``` cpp
Cat *c = new Cat();
c->meow();
```
针对接口：
在抽象类中定义接口，通过调用接口处理逻辑
``` cpp
Animal *animal = new Dog();
animal->makeSound();
```

### 整合
``` mermaid
classDiagram
	class Duck {
		FlyBehavior flybehavior
		display()
		performFly()
		setFlyBehavior()
	}
	Duck <|-- MallarDuck
	Duck <|-- RedheadDuck

	class FlyBehavior { <<Interface>>
		fly()
	}
	FlyBehavior <|.. FlyWithWings
	FlyWithWings: fly()
	FlyBehavior <|.. FlyNoWay
	FlyNoWay: fly()
	FlyBehavior <-- Duck
```

### 策略模式的定义
>[!quote]
>定义了算法族，分别封装起来，让它们之间可以相互替换，此模式让算法的变化独立于使用算法的客户。




## 实现
算法-封装飞行行为
``` cpp 
class FlyBehavior {
public:
    virtual ~FlyBehavior() = default;
    virtual void fly() = 0;
};

```

| 行号  | 功能       | 说明                                      |
| --- | -------- | --------------------------------------- |
| 3   | 释放基类资源   | 基类析构通常定义为虚函数，保证基类的资源能够被释放               |
| 4   | 飞行行为接口定义 | 算法（功能）调用的接口定义，=0 纯虚函数，让FlyBehavior 为抽象类 |

具体算法（飞行行为）的实现
``` cpp
class FlyWithWings : public FlyBehavior{
public:
    void fly() override {
        cout << "wing wing" << endl;
    }
};

class FlyNoWay : public FlyBehavior {
public:
    void fly() override {
        cout << "noway" << endl;
    }
};
```

| 行号  | 功能   | 说明  |
| --- | ---- | --- |
| 1   | 继承接口 |     |
| 3-5 | 实现接口 |     |

能够飞（使用算法）的Duck（客户）
``` cpp
class Duck {
private:
    std::unique_ptr<FlyBehavior> flyBehavior_;
public:
    explicit Duck(std::unique_ptr<FlyBehavior> &&fb)
        : flyBehavior_(std::move(fb))
    {
    }
	virtual ~Duck() = default;
    void setFlyBehavior(std::unique_ptr<FlyBehavior> &&fb)
    {
        flyBehavior_ = std::move(fb);
    }
    void performFly()
    {
        if(flyBehavior_)
            flyBehavior_->fly();
        else
            cout << "flyBehavior isn't set" << endl;
    }
};
```

| 行号    | 功能           | 说明                                       |
| ----- | ------------ | ---------------------------------------- |
| 3     | 使用指针指针管理飞行行为 | 多态必须通过指针或引用实现；因为不需要共享行为所以使用unique_ptr    |
| 5-8   | 构造           | unique_ptr 只能移动，参数为右值引用类型，实参只能是右值或移动后的左值 |
| 10-13 | 修改飞行行为       | 提供动态修改算法的接口                              |
| 13-19 | 飞飞飞          | 执行算法                                     |

具体的Duck 类
``` cpp
class RubberDuck : public Duck {
public:
    explicit RubberDuck()
        : Duck(std::make_unique<FlyNoWay>())
    {}
};

class RedheadDuck : public Duck {
public:
    explicit RedheadDuck()
        : Duck(std::make_unique<FlyWithWings>())
    {}
};
```
橡皮鸭不会飞，使用FlyNoWay 作为飞行行为。
红头鸭用羽毛飞，使用FlyWithWings作为飞行行为

测试：
``` cpp
    RubberDuck rubber;
    rubber.performFly();

    RedheadDuck redhead;
    redhead.performFly();
```

效果：
``` 
noway
wing wing
```

