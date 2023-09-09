"use strict";
// Literl Types 
let neName;
let username;
let add = (a, b) => {
    return a + b;
};
// void return type 
let logMsg = (msg) => {
    console.log(msg);
};
logMsg("hello");
logMsg(add(1, 2));
// interface mathfunction {
//      (a:number,b:number):number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameter
// last in the list of perameter 
const addAll = (a, b, c) => {
    // type gaurd 
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default value 
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
