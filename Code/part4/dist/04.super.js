"use strict";
(function () {
    // 创建一个父类 Animal ，父类也叫 super 类
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log(`${this.name} is saying hello, 动物在叫`);
        }
    }
    class Cat extends Animal {
        // 在子类中再次引入构造函数 constructor ，注意此时constructor 中传入的参数属性：第一部分是继承自父类的参数，第二部分是子类新添加的
        constructor(name, age) {
            // 对于继承自父类的参数属性， 直接调用 super(参数名...), 作用相当于调用父类的构造函数，这样就可以把父类的属性添加到子类中了。
            super(name);
            // 对于子类中自己新添加的属性，要手动加入： 
            this.age = age;
        }
        sayHello() {
            //  在类的方法中，super 就表示当前类的父类； 如果不想引用，也可以重写：
            // super.sayHello()
            console.log(" 我是子类喵喵喵");
        }
    }
    const miao = new Cat("miao", 20);
    miao.sayHello();
})();
