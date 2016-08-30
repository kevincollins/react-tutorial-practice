/**
 * Created by 58 on 2016/6/8.
 *
 * 使用了es6的语法, 可以 babel-node xxx.js 来运行
 *
 */

"use strict";


// let [a,b,c] = [1,2,3];
// console.log(a,b,c);

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(tail);

// Rest properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Spread properties
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
