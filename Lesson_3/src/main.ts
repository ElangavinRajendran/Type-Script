let userList : string[];
let userDetail : [string,boolean,number];

userList = ["kavin","peter","leo"]
userDetail = ["user",true,28]

let userObject : userDetailType;
 


type userDetailType = {
  "name":string;
  "isActive":boolean;
  "age":number
}

userObject = {
  "name":"kavin",
  "isActive":true,
  "age":28,
}

enum test {A,B,C}

console.log(test)