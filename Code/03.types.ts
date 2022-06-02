// 1. number, boolean, string 等
// 2. 直接使用字面量进行类型声明： 

var a:"male"; // 就是指定 a 的类型就是"male"；字面量本身；
//  3. 可以使用 | 连接多个类型；
 var b: boolean | string; // 表示  变量 b 可以是 布尔值 也可以是 字符串；
//  4： let d: any: any 表示任意类型，一个变量设置类型为any,相当于对该变量关闭了TS类型检测；跟JS里一样，使用TS时候，不建议用any
//5. 声明变量，如果不指定变量，TS 会自动设置为 any 类型，（隐式 any) ,尽量不用； 类型为any 的变量，可以赋值给任意变量，如： e = d, 此处 d 的类型为 any, 即使 假设e 的类型是string, 也不会报错；
// 6. let e:unknown; unknown 表示未知类型的值；