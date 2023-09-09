
// OBJECTS 
var obj:object
obj = []
console.log(typeof obj)

obj = {};

const exObj = {
    name:"karan",
    active:true,
}

// exObj.active = "name" // not okay cause of string type 

exObj.active = false;

type Musion = {
    name:string,
    active?:boolean,
    album: (string | number)[],
}

let musion1: Musion = {
    name:"karan",
    active: true,
    album:["song1", "song2"]
}

let musion2: Musion = {
    name:"nargo",
    active: false,
    album:["song1", "song2"]
}

musion1 = musion2

// we can not add the properties in obj
// musion1.age=23  not okay

// optional property  use ? before the :
// it make that type to union 

const musion3 : Musion ={
    name:"karan",
    album:["song1", "song2"]

}
const greetMusion = (musion1:Musion)=>{
    return `Hello ${musion1.name}`;
}

greetMusion(musion1);


// ennumration 

enum course  {
    A=10,
    B,
    C,
    D,
}

console.log(course.A) // 10 
console.log(course.D) // 13



