// Define some variables with explicit types
let a = 12;            // a is implicitly a number
let b = '6';           // b is implicitly a string
let c = 2;             // c is implicitly a number

// TypeScript is a statically typed language, but it can infer types
// Example: b is inferred as a string due to its initial value.

// Uncommenting these lines will result in type errors:
// console.log(a / b);   // Error: Operator '/' cannot be applied to types 'number' and 'string'.
// console.log(b * c);   // Error: Operator '*' cannot be applied to types 'string' and 'number'.

// Define variables with explicit types
let myName: string = 'Dave';  // myName is explicitly declared as a string
let meaningOfLife: number;    // meaningOfLife is explicitly declared as a number
let isLoading: boolean;      // isLoading is explicitly declared as a boolean
let album: any;              // 'any' allows for any type, but it's best to avoid it when possible

// TypeScript provides type annotations to specify variable types.

myName = 'John';            // Valid assignment since myName is of type string
meaningOfLife = 42;         // Valid assignment since meaningOfLife is of type number
isLoading = true;           // Valid assignment since isLoading is of type boolean
album = 5150;               // Valid assignment with 'any' type, but not recommended

// Define a function with type annotations
const sum = (a: number, b: string) => {
    return a + b;           // Error: Operator '+' cannot be applied to types 'number' and 'string'.
}

// TypeScript enforces type safety in function parameters and return values.

// Define variables with union types
let postId: string | number;   // postId can be either a string or a number
let isActive: number | boolean; // isActive can be either a number or a boolean

// Regular expression with type annotation
let re: RegExp = /\w+/g;   // re is explicitly declared as a regular expression

// Arrays
let stringArr = ['one', 'hey', 'Dave'];   // Array of strings
let guitars = ['Strat', 'Les Paul', 5150]; // TypeScript infers array type
let mixedData = ['EVH', 1984, true];       // Array with mixed types

stringArr[0] = 'John';       // Valid assignment
stringArr.push('hey');       // Valid operation

guitars[0] = 1984;           // Error: Type '1984' is not assignable to type 'string'.
guitars.unshift('Jim');      // Error: Argument of type 'string' is not assignable to parameter of type 'string | number'.

let test = [];
let bands: string[] = [];    // bands is explicitly declared as an array of strings
bands.push('Van Halen');     // Valid operation

// Tuples
let myTuple: [string, number, boolean] = ['Dave', 42, true];   // Tuple with explicit types
let mixed = ['John', 1, false];                               // TypeScript infers tuple type

myTuple[1] = 42;            // Valid assignment, tuples are indexed by position

// Objects
let myObj: object;          // myObj can refer to any object
myObj = [];                 // Valid assignment
console.log(typeof myObj);  // Outputs: 'object'
myObj = bands;              // Valid assignment
myObj = {};                 // Valid assignment

// TypeScript allows for flexibility when assigning objects.

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John';  // Valid operation

// Interfaces
interface Guitarist {
    name?: string;          // Optional property
    active: boolean;
    albums: (string | number)[];
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

// Define and use interfaces to describe object structures.

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
}

console.log(greetGuitarist(jp));

// Enums
enum Grade {
    U = 1,   // Explicit values assigned to enum members
    D,
    C,
    B,
    A,
}

console.log(Grade.U);  // Outputs: 1

// Enums provide a way to define named numeric constants.

// Remember to add import statements for external modules or libraries if needed.
