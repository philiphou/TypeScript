(function(){

    //  描述一个对象的类型：
    //  type myType={
    //      name:string,
    //      age:number,
      
    //  }

    //  const obj:myType ={
    //      name:'swk',
    //      age:20
    //  }

     /*
     1. 接口就是用来定义一个类（对象）的结构; 以关键字 interface 开头；
     2. 接口用来定义一个类中，应该包含哪些属性和方法，同时接口也可以当成类型声明去使用； 跟普通的类型声明类似： 例如上面的mytype 
     3. 接口是可以重复声明的；TS 中会把同名的 interface 做一个合集处理，都起作用；
     4. 接口可以在定义类的时候去限制类的结构
     5. 接口中所有的属性都不能有实际的值，接口的方法类似于 abstract 方法，是没有函数体的；
     6. 接口指定以对象或类的结构，不考虑实际值；
     7。 定义类时候，可以使我们的类，去实现一个接口，利用关键字 implements
     8. 实现接口就是使这个类满足接口的要求；
          */

     interface myInterface {
         name:string,
         age:number,

     }
     interface myInter{
         name:string;
         sayHello():void;
     }
   class myClass implements myInterface{
    name:string;
    age:number;
       constructor(name:string,age:number){
           this.name = name
           this.age=age
       }

       sayHello(){
           console.log('动物喵喵喵')
       };
   }
   const dog = new myClass("swk",25)
dog.sayHello()
console.log(dog)

})()