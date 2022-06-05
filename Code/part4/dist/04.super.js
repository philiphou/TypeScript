"use strict";
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
    sayHello() {
        //  在类的方法中，super 就表示当前类的父类； 如果不想引用，也可以重写：
        // super.sayHello()
        console.log(" 我是子类喵喵喵");
    }
}
const miao = new Cat("miao");
miao.sayHello();
