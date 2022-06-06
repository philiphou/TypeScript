"use strict";
(function () {
    //  描述一个对象的类型：
    //  type myType={
    //      name:string,
    //      age:number,
    class myClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物喵喵喵');
        }
        ;
    }
    const dog = new myClass("swk", 25);
    dog.sayHello();
    console.log(dog);
})();
