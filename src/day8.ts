// Utility  Types

// Partial 
 interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    varified?:boolean
 }

 const updateAssaignment = (assign:Assignment, propToUpdate:Partial<Assignment>):Assignment =>{
    return {...assign, ...propToUpdate}
 }


 const assign1: Assignment = {
    studentId:"1234",
    title:"final project",
    grade:0
 }

 console.log(updateAssaignment(assign1,{grade:95}));
 const assignGraded:Assignment = updateAssaignment(assign1,{grade:95});

 console.log(assignGraded);


 // Require and readonly utility Types

 const recordAssignment = (assign:Required<Assignment>):Assignment=>{
    return assign
 }

 const assignVarified: Readonly<Assignment>={...assignGraded,varified:true}

//  assignVarified.grade = 88  //not work readonly

recordAssignment({...assignGraded, varified:true})



// Record
const hexColorMap: Record<string,string>={
 red:"FF0000",
 green:"00FF00",
 blue:"0000FF",
}

type Students = "Sara" |"kelly"
type LatterGardes = "A"|"B"|"C"|"D"|"U"

const finalGardes: Record<Students, LatterGardes>={
    Sara:"B",
    kelly:"U"
}

interface Grades {
    assign1:number,
    assign2:number,
}

const GradeData : Record<Students,Grades> ={
    Sara:{assign1:85,assign2:56},
    kelly:{assign1:85,assign2:56},
}
 



// Pick and Omit
type AssaignResult = Pick<Assignment,"studentId"|"grade">

const score:AssaignResult ={
    studentId:"1234",
    grade:67
}

// oppsite of Pick 
type AssaignPreview = Omit<Assignment,'grade'|'verified'>

const preview : AssaignPreview ={
    studentId:"12334",
    title:"final task",
    // grade:"1234"
}

// Exculdes and Extract 

type adjustedGrade = Exclude<LatterGardes,"U">

type highGrades = Extract<LatterGardes,"A"|"B">


// NoNnulable 

type allPossibleGrades = "dave"|"john"|null|undefined;

type Namesonly = NonNullable<allPossibleGrades>
// exculed the null and undefine 


// Return Type 

// type newAssign = {title:string,points:number}

const createNewAssign = (title:string,points:number)=>{
    return {title,points}
}

type newAssign = ReturnType<typeof createNewAssign>

const testAssign:newAssign = createNewAssign("utility types",100)
console.log(testAssign)


// Parameters
// type is tuple 
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams=["Generics",100]

const testAssign2:newAssign = createNewAssign(...assignArgs)

console.log(testAssign2)

// awaited - helps us with return type of promise

interface User{
    id:number,
    name:string,
    username:string,
    email:string,
}

const fetchUsers =async ():Promise<User[]> => {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    ).then(res=>{
        return res.json()
    }).catch(err=>{
        if(err instanceof Error) console.log(err.message)
    })

return data
    
}

type FetchUserReturnType = Awaited< ReturnType<typeof fetchUsers>>

fetchUsers().then(users=>console.log(users))