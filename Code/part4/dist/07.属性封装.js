"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // // 创建暴露私有属性的方法：叫 get 方法 读取内部私有属性；
        //   getAge(){
        //       return this._age
        //   }
        // //    同样，也可以定义一个 set 方法，来设置内部的私有属性
        // setAge(value:number){
        //     this._age=value
        // }
        // TS 中，设置 get 方法的方式,这样实例对象访问age 时候可以直接通过 .age 访问, 这里的 get age() 就叫 属性的存储器
        get age() {
            return this._age;
        }
        // 同理，TS中，set age 也可以通过设定set 方法： 
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("swk", 25);
    console.log(per);
    // 现在属性是直接在对象实例 per中设置的，也就是属性可以被任意的修改，例如：  per。name = "zbj" , 这样实例对象per 的 name 就被改变了。
    // per.name = "zbj"
    // console.log(per.getAge()) // 输出： 25 是通过类的get 方法来读取内部私有属性
    // 属性可以被任意修改，将会导致我们对象中的数据变得很不安全，要把属性固定，就可以利用新的标识 下划线+属性名
    // per.setAge(30) // 通过类内部的 set 方法 实现对类内部私有属性的更改；
    // console.log(per.getAge()) // 输出 30
    console.log(per.age); // 输出 25， 本质是 per 去调用的 name 方法，name 方法是 get name ()
    per.age = 88; // 其实是调用  set age() 方法来设定新的私有属性值
    console.log(per.age); // 输出： 88 
})();
