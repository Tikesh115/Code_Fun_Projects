// Type Aliases
type Person = {
    name: string;
    age: number;
    location: string;
}

const printUserInfo = (person: Person) => {
    return `Name: ${person.name}, Age: ${person.age}, Location: ${person.location}`;
};

const res2 = printUserInfo({ name: "Alice", age: 28, location: "USA"});
console.log(res2);

// Optional Propertites
type User = {
    name: string;
    age?: number;
    readonly location: string; // 'readonly' makes the property immutable
}

const user: User = {
    name: "Bob",
    location: "Canada"
}

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);

// Intersection types
type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

type UserAccount = UserInfo & AccountDetails;
const Madhav: UserAccount = {
    first: "Madhav",
    last: "WebDev",
    age: 21,
    email: "webdev@gmail.com",
    password: "password123",
};

console.log(`Name: ${Madhav.first} ${Madhav.last} Age: ${Madhav.age}, Email: ${Madhav.email} Password: ${Madhav.password}`);

// Unions
let password: string | number = 20;

let userId: UserInfo | AccountDetails = {
    email: "someone@gmail.com",
    password: "password123"
}; 

const item: (number | string)[] = [1, 2, 4, "five", "hello"];

//Literal Types
let colors: "red" | "green" | "blue";
colors = "red"; //valid
//colors = "yellow"; //invalid, will cause an error

let isTrue: "true" | "false";
isTrue = "true"; //valid
//isTrue = "maybe"; //invalid, will cause an error

// Tuples 
let myTuple: [string, number] = ["hello", 42];
myTuple = ["world", 100];
console.log(myTuple);

const games: [string, string, string] = ["Football", "Basketball", "Tennis"];
console.log(games);