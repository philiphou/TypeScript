"use strict";
// 创建一个父类 Animal ，父类也叫 super 类
(function () {
    //  以 abstract 开头的类称之为抽象类，抽象类和其他类区别不大，只是抽象类不能用来实例化（创建对象实例），抽象类就是专门用来被继承的父类；生而为父
    //  抽象类还可以添加抽象方法；抽象方法也是以 abstract 开头；
    class Animal {
        constructor(name) {
            this.name = name;
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
        //  子类中必须对父类中的抽象方法进行重写覆盖；
        sayHello() {
            console.log(" 我是子类喵喵喵");
        }
    }
    const miao = new Cat("miao", 20);
    miao.sayHello();
})();
