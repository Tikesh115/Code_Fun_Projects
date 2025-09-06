// ---- *Generics* ----

function uniqueDataTypes<Type>(item: Type, defaultValue: Type): [Type, Type] {
    return [item, defaultValue];
}
 
//Examole1
const res3 = uniqueDataTypes<number>(10, 24); 
const str3 = uniqueDataTypes<string>("Hello", "world"); 
const bool3 = uniqueDataTypes<boolean>(true, false); 
console.log(res3);
console.log(str3);
console.log(bool3);

//Example2
interface Dog {
    name: string;
    breed: string;
}

const dogs = uniqueDataTypes<Dog>(
    { name: "Buddy", breed: "Labroador"},
    { name: "Default", breed: "Unknown"}
);
console.log(dogs);

//Example3 
function getRandomKeyValuePair<T>(obj: {[key: string]: T}): {
    key: string;
    value: T;
} {
    const keys = Object.keys(obj)
    const randkey = keys[Math.floor(Math.random()*keys.length)];
    return { key: randkey, value: obj[randkey] };
}

const stringObject = {a: 'apple', b: 'banana', c: 'cherry'}
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair); 

const numberObject = {one: 1, two: 2, three: 3};
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair);

//Exapmle4
function filterArray<T>(array:T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = filterArray<number>(numberArray, (num) => num%2 == 0);
console.log(evenNumbers);

const stringArr = ['apple', 'banana', 'cherry', 'date'];
const shortWords = filterArray<string>(stringArr, (word) => word.length < 6);
console.log(shortWords);

//
interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" }
];

const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color == "Red");
console.log(redFruits);

//Example5
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const reversedPair = reversePair("hello", 20);
console.log(reversedPair);

class Box<T> {
    private content: T;
    constructor(initialContent: T) {
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("hello, TypeScript");
console.log(stringBox.getContent());
stringBox.setContent("New Content added");
console.log(stringBox.getContent());

//
const numBox = new Box<number>(20);
console.log(numBox.getContent());
numBox.setContent(100);
console.log(numBox.getContent());