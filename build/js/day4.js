"use strict";
// Rest perameter 
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3));
// Never Type 
// use for mainly error return function
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// in case of infinit loop 
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// use of the never type 
const numOrString = (value) => {
    if (typeof value === 'string')
        return "string";
    if (typeof value === 'number')
        return "number";
    return createError("This not never Happend");
};
// convert to more or less specfic
let z = "hello";
var y = z; // less specific
var w = z; // more specific
var d = "hello";
var e = "hello";
// not work in react 
// practical exampale 
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// carfull TS sees is no problen return a string
let nextVal = addOrConcat(2, 2, 'concat');
// force casting or double casting 
10;
// the DOM
const img = document.getElementById("#img"); // not null assertion using !
const myImg = document.querySelector("img");
const nextimg = document.getElementById("#img");
img.src;
myImg.src;
