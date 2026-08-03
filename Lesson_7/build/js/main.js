const todaysTransction = {
    "pizza": 50,
    "burgger": 20,
    "roll": 30,
    "name": "food"
};
const newTransaction = {
    "pizza": 400,
    "burgger": 200,
    "roll": 300,
    "name": "food"
};
for (const items in todaysTransction) {
    console.log(todaysTransction[items]);
}
for (const items in newTransaction) {
    console.log(newTransaction[items]);
}
Object.keys(todaysTransction).map(item => console.log(todaysTransction[item]));
const findData = (transction, key) => {
    console.log(`data ${key}: ${transction[key]}`);
};
findData(todaysTransction, 'pizza');
const peter = {
    Income: 1500,
    Salary: 3000,
    sideHustle: 4500
};
export {};
//# sourceMappingURL=main.js.map