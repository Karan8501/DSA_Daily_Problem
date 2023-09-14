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

class Coder{
    secondLang!:string // assertion for not initalisation
    
    constructor(
        public readonly name:string,
        public music:string, 
        private age:number,
        protected lang:string = "Typescript"
        ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang

    }
    public getAge(){
        return `Hello, I am ${this.age}`
    }
}

const Dave = new Coder("karan","Rock",22)
console.log(Dave.getAge())
// console.log(Dave.age)
// console.log(Dave.lang)


class Webdev extends Coder {
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number
    ){
        super(name,music,age)
        this.computer = computer
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new Webdev("mac","sara","lofi",25)
console.log(Sara.getLang())// protected

///////////////////////////////////////////////
// Interface in calss 
interface Musician{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guiterist implements Musician{
    name:string
    instrument:string
    
    constructor(name:string,instrument:string){
        this.name = name
        this.instrument = instrument
    }

    play(action:string){
        return `${this.name} ${action} the ${this.instrument}`
    }

}


const Page = new Guiterist("jimmy","guitar")
console.log(Page.play("strums"))


///////////////////////////////////////////////
// static is applied to direct to class 
class Peeps {
    static count: number = 0
    static getCound():number{
        return Peeps.count
    }

    public id:number
    constructor(public name:string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const john = new Peeps("john")
const steave = new Peeps("steave")
const emy = new Peeps("emy")
console.log(steave.id)
console.log(john.id)
console.log(emy.id)
console.log(Peeps.count)

/////////////////////////////////////////
// getor setors 

class Bands{
    private dataState:string[]
    constructor(){
        this.dataState=[]
    }

    public get data():string[]{
        return this.dataState
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(el=> typeof el === 'string')){
            this.dataState = value
            return
        }
        else throw new Error("Prams not array of of string")
    }
}

const myBand = new Bands()
myBand.data = ["karan","hello"];
console.log(myBand.data)
myBand.data = [...myBand.data,"zz top"]
console.log(myBand.data)

// myBand.data = "val Halen"
