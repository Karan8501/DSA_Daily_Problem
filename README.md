# TypeScript Basics Documentation

## Table of Contents
- [Introduction to TypeScript](#introduction-to-typescript)
- [Variable Declarations](#variable-declarations)
- [Type Annotations](#type-annotations)
- [Function Declarations with Type Annotations](#function-declarations-with-type-annotations)
- [Union Types](#union-types)


## Introduction to TypeScript

TypeScript is a statically typed superset of JavaScript. This means TypeScript builds upon JavaScript and adds static typing capabilities, which help catch type-related errors during development.

## Variable Declarations

In TypeScript, variable declarations involve creating variables to store data values. TypeScript provides two main ways to declare variables: implicit and explicit typing.

### Implicit Variable Declaration


Implicit typing occurs when TypeScript infers the variable type based on its initial value. Here are some examples:

```typescript
let a = 12;            // TypeScript infers 'a' as a number
let b = '6';           // TypeScript infers 'b' as a string
```

In these cases, TypeScript examines the assigned values and assigns appropriate types

### Explicit Variable Declaration

Explicit typing involves explicitly specifying the variable type using type annotations. This is useful when you want to define the types yourself. Examples

```typescript

let myName: string = 'Dave';  // 'myName' is explicitly declared as a string
let meaningOfLife: number;    // 'meaningOfLife' is explicitly declared as a number
let isLoading: boolean;      // 'isLoading' is explicitly declared as a boolean
let album: any;              // 'album' can hold any type, but 'any' should be used sparingly
```
Explicit variable declarations provide code clarity and help TypeScript catch type-related errors early in development.

## Type Annotations
Type annotations are used to specify the data type of a variable explicitly. They are placed after the variable name and a colon :. For example:

```typescript

let myName: string = 'Dave';  // 'myName' is explicitly declared as a string
let meaningOfLife: number;    // 'meaningOfLife' is explicitly declared as a number
let isLoading: boolean;      // 'isLoading' is explicitly declared as a boolean
let album: any;              // 'album' can hold any type, but 'any' should be used sparingly
```
Type annotations provide clarity about the expected data type of a variable and make your code more self-documenting.

## Function Declarations with Type Annotations
TypeScript enforces type safety in function parameters and return values. This ensures that you pass the correct types to functions and get the expected results. Example:

```typescript

function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 3); // 'result' will be inferred as a number
```
Here, the add function takes two parameters of type number and returns a number. TypeScript helps prevent unintentional type mismatches in function calls.

## Union Types
Union types allow variables to have multiple valid types. This is useful when a variable can take on different data types. For example:

```typescript

let postId: string | number;   // 'postId' can be either a string or a number
let isActive: number | boolean; // 'isActive' can be either a number or a boolean
Union types provide flexibility when a variable's type can vary.
```

### Regular Expressions with Type Annotation
Type annotations can be applied to regular expressions, providing clarity about their type. Example:

```typescript

let re: RegExp = /\w+/g;
````
're' is explicitly declared as a regular expression
This annotation helps convey that re is a regular expression and not a generic string.

### Arrays
In TypeScript, arrays can be explicitly typed, or TypeScript can infer their types. Examples:

```typescript

let stringArr = ['one', 'hey', 'Dave'];   // 'stringArr' is an array of strings
let guitars = ['Strat', 'Les Paul', 5150]; // TypeScript infers the array type
Arrays can hold elements of a specified type, and TypeScript can detect these types for you.
```

### Tuples
Tuples are arrays with fixed, known types for each element. You can explicitly specify the types for each element of a tuple. Examples:

```typescript

let myTuple: [string, number, boolean] = ['Dave', 42, true];   // Explicit types for each element
let mixed = ['John', 1, false];                               // TypeScript infers tuple type
```
Tuples are useful when you want to maintain a specific order of elements with known types.

### Objects
In TypeScript, objects can be flexible in their assignments. Example:

```typescript

let myObj: object;          // 'myObj' can refer to any object
myObj = [];                 // Valid assignment
myObj = bands;              // Valid assignment
myObj = {};                 // Valid assignment
```
This flexibility allows you to work with a wide range of objects, including arrays and empty objects.

### Interfaces
Interfaces define object structures and optional properties. Example:

```typescript

interface Guitarist {
    name?: string;          // Optional property
    active: boolean;
    albums: (string | number)[];
}
```
Interfaces help describe the shape of objects, including optional properties and their types.

### Enums
Enums provide named numeric constants. Example:

```typescript
enum Grade {
    U = 1,   // Explicit values assigned to enum members
    D,
    C,
    B,
    A,
}

console.log(Grade.U);  // Outputs: 1
```
Enums are useful for defining named constants with associated numeric values.

These topics cover the basics of TypeScript, helping you understand its fundamental concepts and features. You can expand upon this documentation as needed for your project or learning materials.
