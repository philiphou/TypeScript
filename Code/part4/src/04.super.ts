// 创建一个父类 Animal ，父类也叫 super 类

class Animal{
name:string;
constructor(name:string){
    this.name = name
}
sayHello(){
    console.log(`${this.name} is saying hello, 动物在叫`)
}
}

class Cat extends Animal{
    //  如果我们想给子类 Cat 添加新的属性： 添加了属性后，必须要进行初始化，初始化就要调用构造函数 constructor；
    age:number;
    // 在子类中再次引入构造函数 constructor ，注意此时constructor 中传入的参数属性：第一部分是继承自父类的参数，第二部分是子类新添加的
    constructor(name:string,age:number){
        // 对于继承自父类的参数属性， 直接调用 super(参数名...), 作用相当于调用父类的构造函数，这样就可以把父类的属性添加到子类中了。
        super(name);
        // 对于子类中自己新添加的属性，要手动加入： 
        this.age =age

    }

        sayHello(){
            //  在类的方法中，super 就表示当前类的父类； 如果不想引用，也可以重写：
        // super.sayHello()
         console.log(" 我是子类喵喵喵")
        
    }
}

const miao = new Cat("miao",20)

miao.sayHello()