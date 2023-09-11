"use strict";
// Classed
// class Coder{
//     name:string
//     music:string
//     age:number
//     lang:string
//     constructor(
//         name:string,
//         music:string, 
//         age:number,
//         lang:string
//         ){
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
// visbility Modiafire 
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Dave = new Coder("karan", "Rock", 22);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class Webdev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new Webdev("mac", "sara", "lofi", 25);
console.log(Sara.getLang()); // protected
class Guiterist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guiterist("jimmy", "guitar");
console.log(Page.play("strums"));
///////////////////////////////////////////////
// static is applied to direct to class 
class Peeps {
    static getCound() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("john");
const steave = new Peeps("steave");
const emy = new Peeps("emy");
console.log(steave.id);
console.log(john.id);
console.log(emy.id);
console.log(Peeps.count);
/////////////////////////////////////////
// getor setors 
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Prams not array of of string");
    }
}
const myBand = new Bands();
myBand.data = ["karan", "hello"];
console.log(myBand.data);
myBand.data = [...myBand.data, "zz top"];
console.log(myBand.data);
myBand.data = "val Halen";
