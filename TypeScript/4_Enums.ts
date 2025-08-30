// Enums
enum WheatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy",
}

console.log(WheatherConditions.Sunny);
const currentWheather = WheatherConditions.Snowy;
console.log(`Current weather is: ${currentWheather}`);

// **----- OOPs -----**
// 1. class
class Person2 {
    name: string;
    age:  number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person2 =  new Person2("Jhon", 30);
console.log(person2);

// 2. Access Modifiers
class Person3 {
    private first: string;
    public last: string;
    protected age: number;

    constructor(first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `${this.first} ${this.last}, Age: ${this.age}`;
    }
}

class Human extends Person3 {
    constructor(first: string, last: string, age: number) {
        super(first, last, age);
        this.age = age; // Accessing protected property
    }
}

let p1 = new Person3("Jane", "Doe", 20);
console.log(p1.getName());
const hum = new Human("John", "Smith", 25);
console.log(hum.getName()); 

// 3. getters and setters
class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const myInstance = new MyClass();
console.log(`Current value: ${myInstance.myProperty}`);
myInstance.myProperty = 42;
console.log(`Current value after update : ${myInstance.myProperty}`);

