class coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang = 'type script') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hi my age is ${this.age}`;
    }
}
const kavin = new coder('kavin', 'Jazz', 28, 'java script');
console.log(kavin.getAge());
class user extends coder {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getDetails() {
        return `${this.name} using ${this.computer} for ${this.lang}`;
    }
}
const peter = new user('HP', 'peter', 'jazz', 28);
console.log(peter.getDetails());
class musician {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${this.instrument} and he ${action} ${this.instrument}`;
    }
}
const faf = new musician('faf', 'guitar');
console.log(faf.play('strums'));
class peeps {
    name;
    static count = 0;
    static getCount() {
        return ++peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = peeps.getCount();
    }
}
const steve = new peeps('steve');
const lux = new peeps('lux');
const terer = new peeps('terer');
console.log(peeps.count);
console.log(steve.id);
console.log(lux.id);
console.log(terer.id);
export {};
//# sourceMappingURL=main.js.map