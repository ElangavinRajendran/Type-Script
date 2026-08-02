class coder {

    constructor(
       public readonly name:string,
       public music:string,
       private age:number,
       protected lang:string = 'type script'
    ){
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
   

    public getAge(){
        return `Hi my age is ${this.age}`
    }
}

const kavin = new coder('kavin','Jazz',28,'java script')
console.log(kavin.getAge())

class user extends coder {

    constructor(public computer : string,
        name:string,music:string,age:number)
        {
         super(name,music,age)
        this.computer = computer
    }
    public getDetails(){
        return `${this.name} using ${this.computer} for ${this.lang}`
    }   
}

const peter = new user('HP','peter','jazz',28)

console.log(peter.getDetails())

interface guitarist {
    name:string,
    instrument:string,
    play(action:string):string
}

class musician implements guitarist{

    constructor(public name:string,public instrument:string){
        
    }
    play(action:string){
        return `${this.name} plays ${this.instrument} and he ${action} ${this.instrument}`
    }
}

const faf = new musician('faf','guitar')

console.log(faf.play('strums'))

class peeps {
    static count : number = 0

    static getCount(){
        return ++peeps.count
    }
    public id : number
    constructor(public name : string){
        this.name = name;
        this.id = peeps.getCount()
    }
}

const steve = new peeps('steve')
const lux = new peeps('lux')
const terer = new peeps('terer')

console.log(peeps.count)
console.log(steve.id)
console.log(lux.id)
console.log(terer.id)
