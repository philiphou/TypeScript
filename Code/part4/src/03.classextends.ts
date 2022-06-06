//  类可以实现继承；首先定义一个大类： 
(function(){
    class Auto {
        brand:string;
        color:string;
        model:string
        constructor(brand:string,color:string,model:string){
            this.brand = brand;
            this.color=color;
            this.model = model;
        }
        run(){
            console.log(`The car has the brand :${this.brand} `)
        }
    }
    
    //  定义一个新的类 Car，这个类可以继承 Auto 很多属性方法， 使用关键字： extends;作用就是 使 car 类 继承 Auto 这个类；
    //  此时 Auto 被称为父类， Car 被称为子类； 下面的 honda 是 Car 的实例；
    class Car extends Auto   {
        // Car 这个类可以继承 上面的 Auto 大类的属性和方法；利用 super 关键字；
        // 使用继承后，我们的子类会拥有父类所有的方法和属性；
        //  通过继承，可以将多个类中共同的代码，统一写到父类中，这样所有的子类都会有父类的属性和方法；
        //  如果希望在子类中写一些父类没有的属性和方法；直接加就可以；比如加的下面的 wang() 方法；
             wang(){
            console.log(`${this.model} was made in Car class`)
        };
        // 子类中还可以更新父类中的 run () 函数：如果子类中添加了和父类中同名的方法，则子类中的方法会覆盖掉父类里的方法
        //  这种子类覆盖掉父类方法的形式称之为 方法的重写；
    
        run(): void{
            console.log( `i came from Car class`)
               };
    }
    const honda = new Car('honda','white','civic')
    console.log(honda)
    honda.run()
    honda.wang()
})()
