let userName : string; // string Type
let age : string | number; // Union Type  (string or number)
let isActive: number | boolean; // Union Type  (number or boolean)
let isLoading: boolean; // boolean type
let role: "admin" | "user" // Literal Type

// type can be declared in function parameters
const sum = (a:number,b:number):number => {
 return a+b;
}

//The function performs an action but returns nothing.
const print = (role:string):void =>{
    console.log(role)
}

 //A function will never successfully complete.
 /*  
  * Usually used for:

****Errors
****Infinite loops
  */
const error = (err:string):never=>{
    throw error(err)
}

userName = "kavin";
age = 28;
isActive = 0;
isLoading = true;
role = "admin"
print(role)

console.log(sum(2,4))