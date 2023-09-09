

// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]

type car = {
    name:string,
    active:boolean,
    modal:stringOrNumber,
}


// Literl Types 
let neName:"karan"

let username :"karan" | "rechel"

let add = (a:number,b:number):number=>{
    return a+b
}

// void return type 
let logMsg = (msg:any):void=>{
    console.log(msg)
}

logMsg("hello");
logMsg(add(1,2));


type mathfunction = (a:number,b:number)=>number
// interface mathfunction {
//      (a:number,b:number):number
// }
let multiply: mathfunction = function(c,d){
    return c*d
}

logMsg(multiply(2,2))


// optional parameter
// last in the list of perameter 

const addAll = (a:number,b:number,c?:number):number=>{

    // type gaurd 
    if(typeof c!=='undefined'){
        return a+b+c;
    }
    return a+b;
    
}

// default value 
const sumAll = (a:number,b:number,c:number=2):number=>{

 
        return a+b+c;

    
}

logMsg(addAll(1,2,3));
logMsg(addAll(1,2));
logMsg(sumAll(1,2));
