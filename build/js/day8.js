"use strict";
// Utility  Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssaignment = (assign, propToUpdate) => {
    return Object.assign(Object.assign({}, assign), propToUpdate);
};
const assign1 = {
    studentId: "1234",
    title: "final project",
    grade: 0
};
console.log(updateAssaignment(assign1, { grade: 95 }));
const assignGraded = updateAssaignment(assign1, { grade: 95 });
console.log(assignGraded);
// Require and readonly utility Types
const recordAssignment = (assign) => {
    return assign;
};
const assignVarified = Object.assign(Object.assign({}, assignGraded), { varified: true });
//  assignVarified.grade = 88  //not work readonly
recordAssignment(Object.assign(Object.assign({}, assignGraded), { varified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGardes = {
    Sara: "B",
    kelly: "U"
};
const GradeData = {
    Sara: { assign1: 85, assign2: 56 },
    kelly: { assign1: 85, assign2: 56 },
};
const score = {
    studentId: "1234",
    grade: 67
};
const preview = {
    studentId: "12334",
    title: "final task",
    // grade:"1234"
};
// exculed the null and undefine 
// Return Type 
// type newAssign = {title:string,points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const testAssign = createNewAssign("utility types", 100);
console.log(testAssign);
const assignArgs = ["Generics", 100];
const testAssign2 = createNewAssign(...assignArgs);
console.log(testAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
