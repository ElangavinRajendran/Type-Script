//Type Aliases
// functions
let addition = (a, b) => {
    return a + b;
};
let subract = function (a, b) {
    return a - b;
};
let logMessage = (msg) => {
    console.log(msg);
};
let multiply = (a, b) => {
    return a * b;
};
logMessage(addition(1, 2));
logMessage(subract(1, 2));
logMessage(multiply(1, 2));
//optional Params
let sumAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default Params
let addAll = (a, b, c = 2) => {
    return a + b + c;
};
//rest Params
let addingAll = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(sumAll(2, 3));
logMessage(addAll(2, 3, 5));
logMessage(addingAll(2, 4, 5));
//never Type
let createError = (err) => {
    throw new Error(err);
};
//type gaurd
const isNumber = (value) => {
    return typeof value === 'number';
};
const isString = (value) => {
    return typeof value === 'string';
};
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    if (isString(value))
        return 'string';
    return createError('this should not happen');
};
logMessage(numberOrString(true));
export {};
//# sourceMappingURL=main.js.map