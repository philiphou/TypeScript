// 引入一个包

const path = require('path')
    // 编写 webpack 的配置文件： 
    // webpack 中的所有配置信息都要写在 module.exports 里
module.exports = {
    // entry: 指定入口文件, 通常有一个目录src, 一般源码都放在 src 目录下
    entry: "./src/index.ts",
    //  指定打包文件所在的目录：
    output: {
        // path: 指定打包后的目录
        path: path.resolve(__dirname, "dist"), // 利用path.resolve 给我们拼一个完整路径；这里是绝对路径；
        // filename: 是打包后文件的名字；
        filename: "bundle.js"
    },
    // module 来指定webpack打包时候用的一些loader， 或者模块
    module: {
        // 指定loader 的规则

        rules: [{
            // 指定一个规则；test 指定的是规则生效的文件；test 后面跟一个正则表达式，用来选中规则约束的文件；
            test: /\.ts$/i,
            // use 来确定要使用哪些规则来约束上面 test 内指定的文件
            use: [
                "ts-loader"

            ],
            //  指定要排除的文件夹。文件，哪些文件可以不处理
            exclude: /node_modules/
        }]
    },
    mode: "production"

}