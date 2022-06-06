### ============ TypeScript 学习笔记 =====================
1. TypeScript 简介 
    - TypeScript(TS) 是 JavaScript(JS)的一个超集；是在JS基础上增添了许多功能；引入了类型的概念，使变量有了静态类型；不像JS里的弱类型；
    - 可以在任何支持JS的平台中运行，但是TS不能被JS解析器直接执行；
    - TS 需要编译为 JS， 最终执行 JS； 只是写的时候，用TS写的；
    - 支持ES 新特性，添加ES不具有的新特性，还有丰富的配置选项，也有强大的开发工具；
    - TypeScript 开发环境搭建：
        下载安装node.js---> 使用 npm i -g typescript 安装 typescript ----> 创建一个 ts 文件 ----> 使用 tsc 对 ts 文件简写编译
2. 基本类型
    - 类型声明
        1. 类型声明时TS非常重要的一个特点
        2. 通过类型声明可以指定TS中变量（参数，形参）的类型
        3. 指定类型后，当为变量赋值时候，TS编译器会自动检查是否符合类型声明，符合则赋值，否则报错
        4. 简而言之，类型声明给变量设置了类型，使变量只能存储某种类型的值
        5. 语法： 
            -- let 变量： 类型；
            -- let 变量： 类型 = 值

            -- function fn（ 参数：类型，参数：类型）：类型{}
    - 自动类型判断：
        1. TS拥有自动的类型判断机制
        2. 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
        3. 所以如果你的变量声明和赋值同时进行时候，可以省略类型声明
    - 类型： 
        1. number 任意数字
        2. string: 任意字符串
        3. boolean: 布尔值 true 或 false
        4. 字面量： 其本身，限制变量的值就是该字面量的值
        5.  any: 任意类型
        6. unknown: 类型安全的 any
        7. void: 
        。。。
3. TS 编译 ： 
        1. 语法： tsc <文件名>.ts -w  加了 -w 表示watch 实时监控文件变化； 监视关掉用 ctr+c
        2. 批量编译：需要新建 tsconfig.json 文件，会有一个默认结构，即便是空的，执行： tsc  也会把所有的ts 文件统一编译成js; 
        3. tsc -w 会监视所有文件；配合第二步的tsconfig.js 使用； tsconfig.json 是ts编译器的配置文件，可以根据它的嘻嘻来对代码进行编译： 
        4.  tsconfig.json 是ts编译器的配置文件，ts编译器可以根据它的信息对代码进行编译，里面的配置包含：
            - include
               用来指定哪些ts文件需要被编译； 
               {
                   "include":[
                       "./src/**/*",  ** 表示任意目录 * 表示任意文件；此处表示仅去编译 src 目录下的任意ts 文件；
                   ]，
                   “exclude":["./src/hello/**/*"]， 表示除了hello目录下的所有ts文件；
               }
            - exclude : 表示不编译哪些文件； 默认值是： ['node_modules','bower_components','jspm_packages']
            - extends  : 继承某一个配置文件，类似引入外部文件；
            - files： 类似include, include 是设置文件路径 files 是直接把文件名一个个列进去: files:["xxx.ts",'xx2.ts',...]
        5. "compilerOptions": 
            - 指的是编译器的选项；作用是决定了编译器如何对ts进行编译；里面包含了子选项： 
            - 例子：
              "compilerOptions": {
                                // target 用来指定ts文件被编译成的ES的版本； 默认型是转换成 ES3,因为 ES3的兼容性较好；可以设置的值： 'es3','es5','es6','es2015','es2016','es2017(-2020)'
                                "target": "ES6",
                                // module 用来指定使用的模块化的规范； 值可以选： 'commonjs' , 'es6', 'es2015', 'es2020', 'amd', 'ststem'; ES6 = ES2015
                            "module":"amd",
                            //    lib 是用来指定项目中需要使用的库；可选值有很多。。。有提示；
                            "lib":[
                                "DOM","ES2015"
                            ],
                            //    outDir 来指定编译后的文件存放目录；一般是根目录下的 dis 目录： ./dist
                            "outDir": "./dist",
                            //此处编译好的文件统一放在了 dist 文件目录下
                            //  outFile 可以用来将代码合并为一个文件；所有的全局作用域中的代码，会合并到同一个文件中；用了模块化就合并不上了。
                                "outFile": "./dist/app.js"
                            }
4. webpack 打包 ts 代码： 
    - 首先创建一个项目，打开一个新的文件夹；
    - 运行： npm init -y 
       这个命令就是对项目初始化，产生一个 package.json 文件；这个文件类似于说明书，用于管理我们的项目；
    - 安装 webpack: 运行： npm i -D webpack webpack-cli typescript ts-loader
       -D 表示添加到开发依赖，全写可以是  --save-dev; webpack-cli 这个依赖可以让我们在命令行运行webpack; 
    - 安装完毕后，package.json文件中就会显示这四个包（依赖）
           "devDependencies": {
                                "ts-loader": "^9.3.0",
                                "typescript": "^4.7.3",
                                "webpack": "^5.73.0",
                                "webpack-cli": "^4.9.2"
                              }
    - 创建一个webpack的 配置文件： webpack.config.js
    - 创建 tsconfig.json 配置文件
    - package.json 的 script 下创建一个新的命令： 'build':"webpack" 这样直接 npm run build 就可以直接运行 weback打包
5. 面向对象简介：
    - 介绍：
        一切操作都要通过对象，就是所谓的面向对象； 对象就是对具体事物的抽象，对象有两大特点：数据和功能； 数据被称为属性，功能被称为方法；
    - 类： 
        要想面向对象，操作对象，首先要拥有对象。创建对象就要先定义类； 类就是对象的模型，程序可以根据类创建指定类型的对象；
        -- 语法： 
            class 类名 {
                属性名：类型；
                constructor(参数：类型){
                    this.属性名=参数
                }
                方法名（）{
                    。。。
                }
            }
        -- 例子： 
                // 定义类例子： 使用 class 关键字来定义类；
                //  对象中包含了两大部分：属性和方法
                class Person{
                    // 下面是直接定义的属性，属于实例属性， 是 person的实例属性，需要创建实例后调用才能读取）：  
                    name:string = "swk";
                    age:number = 20;
                    // 还有一种是属于 类  的属性，也叫静态属性，通过 Person.属性名 去 调用；
                    // 在属性前，使用 static 关键字，可以定义类属性，或者叫静态属性，不需要创建对象实例就可以引用；而且实例对象是读取不到类的静态属性的；是类私有的；
                    static address:string = "beijing"
                }

                const per = new Person()

                console.log(per)
                console.log(per.name) // 输出： swk
                console.log(Person.address) // 编译后输出： beijing
        --继承： 
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
        -- 接口 interface: 
                
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
                        constructor(name:string){
                            this.name = name
                        }

                        sayHello(){
                            console.log('动物喵喵喵')
                        };
                    }
                    const dog = new myClass("swk")
                    dog.sayHello()
                    console.log(dog)

                    })()

        -- 属性的封装： 
            1. 
  