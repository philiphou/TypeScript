(function(){
    // 定义一个表示人的类
    class Person{
        // 可以在属性前面添加属性修饰符：
        /*
        1. public ： 修饰的属性，可以在任意位置修改和访问， public是默认状态，如果什么都不写，就默认属性是 public 的， 可以任意访问和修改
        2。private : 叫私有属性； 只能在类内部进行修改和防伪； 在类的外部，比如 类的实例对象下访问就会报错；设置了 private属性就相当于关闭了访问方式，外部访问不到；
        3.  private 约束的属性只能在类内部访问，可以在类中添加方法，使得私有属性被外部读取或者更改
        4. protected: 受保护的属性， 只能在当前类和当前类的子类中访问（修改）
        -- 简写方式： 可以把类的属性直接定义放在constructor 构造函数中，： class C{ constructor(public name:string,public age:number){this.name=name;this.age=age}}
                */
         private _name:string;
        private _age:number;
        constructor(name:string,age:number){
            this._name = name;
            this._age =age
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
        get age(){
            return this._age
        }

        // 同理，TS中，set age 也可以通过设定set 方法： 
        set age(value:number){
            if(value>0){
                this._age =value
            }

        }
    }
 const per = new Person("swk",25)
 console.log(per)

// 现在属性是直接在对象实例 per中设置的，也就是属性可以被任意的修改，例如：  per。name = "zbj" , 这样实例对象per 的 name 就被改变了。
// per.name = "zbj"
// console.log(per.getAge()) // 输出： 25 是通过类的get 方法来读取内部私有属性
// 属性可以被任意修改，将会导致我们对象中的数据变得很不安全，要把属性固定，就可以利用新的标识 下划线+属性名

// per.setAge(30) // 通过类内部的 set 方法 实现对类内部私有属性的更改；
// console.log(per.getAge()) // 输出 30

console.log(per.age) // 输出 25， 本质是 per 去调用的 name 方法，name 方法是 get name ()

per.age=88 // 其实是调用  set age() 方法来设定新的私有属性值
console.log(per.age) // 输出： 88 
})()

