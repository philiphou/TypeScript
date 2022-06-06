"use strict";
(function () {
    class Dog {
        // 采用构造函数 constructor，以用来创建个性化的实例；constructor 被称为构造函数，会在对象创建时调用；
        constructor(name, age, color) {
            // 在构造函数里，this 就表示当前的实例，谁调用构造函数，谁就是this
            // 在构造函数中，可以通过this 向新建的对象添加属性；
            this.name = name;
            this.age = age;
            this.color = color;
        }
        //  创建方法： 
        bark() {
            console.log(`${this.name} is barking`);
        }
    }
    const wangCai = new Dog('wangcai', 2, 'black');
    console.log(wangCai);
    wangCai.bark();
})();
