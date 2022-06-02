//  声明一个变量 a, 同时指定 a 的类型 是 number
var a;
// a 在以后的使用过程中， a 的类型只能是数字；不能将string 或其他类型赋值给a 了；
a = 10;
var b = "hello"; // 这样会自动默认 b 的类型是 string
//  声明完变量之间进行赋值： 下面的：boolean可以省略，复制时候，TS 会自动辨别变量的类型；
var c = true;
c = false;
// JS 函数中，不考虑函数的参数类型和个数，TS可以指定参数的类型
function sum(a, b) {
    return a + b;
}
console.log(sum(5, "123"));
