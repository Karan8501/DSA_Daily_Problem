"use strict";
// OBJECTS 
var obj;
obj = [];
console.log(typeof obj);
obj = {};
const exObj = {
    name: "karan",
    active: true,
};
// exObj.active = "name" // not okay cause of string type 
exObj.active = false;
let musion1 = {
    name: "karan",
    active: true,
    album: ["song1", "song2"]
};
let musion2 = {
    name: "nargo",
    active: false,
    album: ["song1", "song2"]
};
musion1 = musion2;
// we can not add the properties in obj
// musion1.age=23  not okay
// optional property  use ? before the :
// it make that type to union 
const musion3 = {
    name: "karan",
    album: ["song1", "song2"]
};
const greetMusion = (musion1) => {
    return `Hello ${musion1.name}`;
};
greetMusion(musion1);
// ennumration 
var course;
(function (course) {
    course[course["A"] = 10] = "A";
    course[course["B"] = 11] = "B";
    course[course["C"] = 12] = "C";
    course[course["D"] = 13] = "D";
})(course || (course = {}));
console.log(course.A); // 10 
console.log(course.D); // 13
