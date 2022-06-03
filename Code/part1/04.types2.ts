// Object: 表示一个 js 对象

let aa: Object;
aa= {}
aa = function (){}
let bb: {name: string} // 此处的 bb 就被约束成了必须要有且只有一个 name 属性，而且属性值类型必须是 string 的对象，假如扔需要加别的属性，可以用语法： 
let bb1:{name:string,[propNmae:string]:any} // 这样bb1 就成了 是可以含有name 和其他任意属性的对象；

bb = {name:"11"} // name 属性值如果不是string就会报错，因为name 属性值必须是string 类型；
//  也可以设置多个属性名和属性值
let cc:{name:string|number,id?:number|boolean} // id？ 或者 属性名？ 表示此属性是可选的，可以有，也可以没有； 但不能有除了 name 和 id 之外的属性
cc = {name:"helo",id:15,address:"toronto"} // 这样写就报错，因为 address 是额外属性，没有提前声明
//  对函数 function 的约束：设置函数结构的类型声明
//  语法： (形参1：类型，形参2：类型，。。。)=>返回值
let dd:(a:number,b:number)=>number 

dd = function(n1:number,n2:number):number{
    return n1+n2
} // 这样就是给dd 赋值了一个复合规则的函数；

//  对数组的约束： string[] 表示只存储字符串的数组； number[] 表示只存储数字的数组；语法1： 类型[] 语法2： Array<类型>

let ee:string[]; // 约束ee结构，只能是存储字符串的数组
let ff: number[]// 约束 ff 结构，只能是存储数字的数组；
let gg:Array<number> // 约束规则等同于 number[]

//  tuple 元祖：元祖就是固定长度的数组；例如：

let hh:[string,string] // 就表示定义了一个元祖，里面有两个元素，类型均是 string

//  enum 枚举: 语法就是先创建一个枚举的对象，对象元素包含所有可能的值；

enum Gender{
    Male,
    Female
}

let ii:{name:string,gender:Gender}

ii = {name:"swk",gender:Gender.Male}

//  类型的别名,语法： type 类型名 比如：
type myType = string|number|boolean
let k: myType // 相当于给 上面类型语句起了个别名，可以复用；万一类型复杂
