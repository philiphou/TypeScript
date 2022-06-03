// 1. number, boolean, string 等
// 2. 直接使用字面量进行类型声明： 

var a:"male"; // 就是指定 a 的类型就是"male"；字面量本身；
//  3. 可以使用 | 连接多个类型；
 var b: boolean | string; // 表示  变量 b 可以是 布尔值 也可以是 字符串；
//  4： let d: any: any 表示任意类型，一个变量设置类型为any,相当于对该变量关闭了TS类型检测；跟JS里一样，使用TS时候，不建议用any
//5. 声明变量，如果不指定变量，TS 会自动设置为 any 类型，（隐式 any) ,尽量不用； 类型为any 的变量，可以赋值给任意变量，如： e = d, 此处 d 的类型为 any, 即使 假设e 的类型是string, 也不会报错；
// 6. let e:unknown; unknown 表示未知类型的值；实际上是一个类型安全的any, unknown 类型的变量，不能赋值给其他变量。
var s: string; 
var e:'unknown'; // 如果我们就是想把unknown 的 e 赋值给变量 s （string 类型）。 我们需要： 
if(typeof e ==="string"){
    s=e
}
// 或者： 
s = e as string // 这叫类型断言；就是判断语言， 写上 as string 就是告诉编译器，让它知道e就是string型，但必须都说事实。 
//   或者2： 
s =<string>e

// void: 表示空值,可以用在函数返回值类型，函数返回值可以设置类型 例如： 
function fn():number{
    return 123
}; // 表示函数返回值是数值型
function fn2():boolean{
    return true
} // 表示返回值是布尔值

function fn3():void{

} // 没写或者写 void 表示没有返回值；不过如果返回值是 null 或者 undefined, 也不会报错，默认是void

function fn4():never{
    throw new Error('出错了')

} // never 表示永远不会返回结果，never比 void 还狠， 连void 空都没有，就是never, 是用来报错的， Error() 是构造函数，用来传入错误信息而创建错误实例