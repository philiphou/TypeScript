/*
function fn(a:any ):amy{
    return a
}
*/

/*
在定义函数或者类时候，遇到类型不明确的就可以使用 泛型，就是不确定的类型； 比如上面的 a;
定义一个 泛型，名字可以随意，类似于变量，语法是： <泛型名>


*/

function fn<K>(a:K){
    // 上面就是定义了一个泛型，名字叫 K 的泛型，所以后面的变量 a 可以设置为 K 类型， 这个类型也不确定是啥类型，只有函数执行时候才确定；
return a

}

//   可以直接调用具有泛型的函数: 
fn(10) // 此时就相当于把10 赋值给了a, a 的类型也就自动变成了 number 型，之前是泛型；这里利用了 ts 里的自动类型推断； 
//  也可以手动指定传入的参数类型： 
fn<string>('520beijing') // 这里手动指定了泛型的具体型 string

//  同时，泛型可以指定多个

function fn2<T,K>(a:T,b:K){
   console.log(a,b)
}
//  调用 fn2()时候，也可以传入两个泛型： 
fn2<string,number>("beijing",520)

//  也可以引入 interface 来约束泛型

interface Inter{
    length:number;
}
//  下面指定泛型 P， 但是用 Inter 接口； 也就是传入的 参数 泛型P 的参数 必须要有 length 属性，
function fn3<P extends Inter >(a:P){
    // 此处的 P extends Inter 表示 泛型 P 必须是 Inter 的实现类；或者 子类；
    return a.length 
}


fn3<string>("liyi") // 传入的 字符串 “liyi‘ 有length 属性，所以是不报错的
fn3<number>(123)  // 此处的 number 参数 是没有 length 属性的，所以会报错；

//  在类中也可以使用泛型和接口；

class myClass <T>{
    name:T;
    constructor(name:T){
        this.name=name
    }
}

const mm = new myClass<string>('liyi')