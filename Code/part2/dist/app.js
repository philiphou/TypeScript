// import {hi} from 'm.js'
let a = 10, b = 5;
console.log(a + b);
// console.log(hi)
console.log("from index.ts --2");
define("m", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hi = void 0;
    exports.hi = "hello 你好";
});
