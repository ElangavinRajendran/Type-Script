interface TranscationObj {
    //[key:string]:number|string,
    "name":string,
    "pizza":50,
    "burgger":20,
    "roll":30,
}

interface TranscationObjWithKeyType {
     [key:string]:number|string,
}

const todaysTransction:TranscationObj = {
    "pizza":50,
    "burgger":20,
    "roll":30,
    "name":"food"
}

const newTransaction:TranscationObjWithKeyType = {
     "pizza":400,
    "burgger":200,
    "roll":300,
    "name":"food"
}
for(const items in todaysTransction){
console.log(todaysTransction[items as keyof TranscationObj])
}
for( const items in newTransaction){
    console.log(newTransaction[items])
}

Object.keys(todaysTransction).map(item=>console.log(todaysTransction[item as keyof typeof todaysTransction]))

const findData =(transction:TranscationObj , key : keyof TranscationObj) : void {

    console.log(`data ${key}: ${transction[key]}`)
}

findData(todaysTransction,'pizza')

type streams = 'Income' | 'Salary' | 'sideHustle'

type incomes = Record<streams, number>

const peter :incomes = {
    Income : 1500,
    Salary : 3000,
    sideHustle: 4500
}