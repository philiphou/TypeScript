(function(){
// 定义类例子： 使用 class 关键字来定义类；
//  对象中包含了两大部分：属性和方法
class Person{
    // 下面是直接定义的属性，属于实例属性， 是 person的实例属性，需要创建实例后调用才能读取）：  
    name:string = "swk";
    age:number = 20;
    // 下面 readonly 开头的属性是只读属性，可以读取，但是不能修改；也是实例对象的属性；
    readonly id:number=5588;
    // 还有一种是属于 类  的属性，也叫静态属性，通过 Person.属性名 去 调用；
    // 在属性前，使用 static 关键字，可以定义类属性，或者叫静态属性，不需要创建对象实例就可以引用；而且实例对象是读取不到类的静态属性的；是类私有的；
    static address:string = "beijing"

    //  定义方法： 
    sayHello(){
        console.log('hello,welcome to TS class')
        }
     //  如果方法前加入了 static 关键字，就变成了 类的方法： 
    static sayBye(){
        console.log("Good Bye")
    }
}


const per = new Person()

console.log(per)
console.log(per.name) // 输出： swk
console.log(Person.address) // 编译后输出： beijing
per.sayHello() // sayHello是类 Person 实例 per 的方法，要通过实例去调用；此处输出： hello,welcome to TS class
Person.sayBye() // sayBye是类 Person  的方法，要通过类去调用；此处输出：Good Bye

})()

