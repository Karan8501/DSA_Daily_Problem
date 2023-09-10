// Rest perameter 

const total = (a:number,...nums:number[]):number=>{
    return nums.reduce((prev,curr)=> prev + curr)
}

console.log(total(1,2,3))


// Never Type 
// use for mainly error return function
const createError  = (errMsg:string):never=>{
    throw new Error(errMsg);
}

// in case of infinit loop 
const infinite = ()=>{
    let i:number = 1;

    while(true){
        i++
        if(i>100) break
    }
}


// use of the never type 
const numOrString = (value:number | string):string =>{
    if(typeof value === 'string') return "string"
    if(typeof value === 'number') return "number"
    return createError("This not never Happend")
}


// Typecasting or assertion 
type One = string ;
type Two = string | number
type Three = "hello";

// convert to more or less specfic
let z:One = "hello";
var y = z as Two // less specific
var w = z as Three // more specific

var d = <One>"hello";
var e= <string|number>"hello" 
// not work in react 


// practical exampale 
const addOrConcat = (a:number,b:number,c:'add' | 'concat'):number|string =>{
    if(c==='add') return a+b
    return '' + a + b
}

let myVal:string = addOrConcat(2,2,'concat') as string
// carfull TS sees is no problen return a string
let nextVal:number = addOrConcat(2,2,'concat') as number

// force casting or double casting 
(10 as unknown) as string


// the DOM

const img = document.getElementById("#img") as HTMLImageElement // not null assertion using !
const myImg = document.querySelector("img")!

const nextimg = <HTMLImageElement>document.getElementById("#img") 

img.src

myImg.src