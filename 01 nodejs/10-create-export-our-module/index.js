/*
const oper = require("./new-module");

console.log(oper);
console.log(oper.add(5, 4));
console.log(oper.sub(10, 5));
console.log(oper.name);
*/
// another best method is

const { add, sub, name } = require("./new-module");
console.log(name);
console.log(add(5, 4));
console.log(sub(5, 4));
