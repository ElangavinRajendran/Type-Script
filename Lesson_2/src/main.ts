let userName : string; // string Type
let age : string | number; // Union Type  (string or number)
let isActive: number | boolean; // Union Type  (number or boolean)
let isLoading: boolean; // boolean type

// type can be declared in function parameters
const sum = (a:number,b:number) =>{
 return a+b;
}

userName = "kavin";
age = 28;
isActive = 0;
isLoading = true;

console.log(sum(2,4))