//Type Aliases

type StringorNumber = string | number;

//Type Literal

type name = "kavin" | "Peter"

interface gutarist {
  name:name;
  age: StringorNumber;
  isActive: boolean
}

// functions

let addition = (a:number,b:number):number =>{
  return a+b;
}

let subract = function (a:number,b:number):number {
  return a-b
}

let logMessage = (msg:any):void =>{
console.log(msg)
}

type mathFunction = (a:number,b:number) => number

let multiply : mathFunction = (a,b) => {
  return a*b
}
logMessage(addition(1,2))
logMessage(subract(1,2))
logMessage(multiply(1,2))

//optional Params

let sumAll = (a:number,b:number,c?:number) : number =>{
  if(typeof c !== 'undefined'){
      return a+b+c
  }  
    return a+b
}

//default Params

let addAll = (a:number,b:number,c:number =2) : number =>{
  
      return a+b+c
 
}

//rest Params

let addingAll = (...nums:number[]):number=>{
  return nums.reduce((prev,curr) => prev + curr)
}

logMessage(sumAll(2,3))
logMessage(addAll(2,3,5))
logMessage(addingAll(2,4,5))

//never Type

let createError = (err:string) : never =>{
  throw new Error(err)
}

//type gaurd

const isNumber = (value:any):boolean =>{
  return typeof value === 'number'
}
const isString = (value:any):boolean =>{
  return typeof value === 'string'
}

const numberOrString = (value: any) : string =>{
  if (isNumber(value)) return 'number'
  if (isString(value)) return 'string'
  return createError('this should not happen')
}
logMessage(numberOrString(true))

