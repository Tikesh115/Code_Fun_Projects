// Annotation
// Strings
let myName: string = "Tikesh";
myName = "something other person";
console.log(myName);

// Numbers
let myAge: number = 20;
console.log(myAge);

// Boolean
let tsHard: boolean = false;
tsHard = true;
console.log(tsHard);

// Type Interference
let tech = "TypeScript";
console.log(tech);
console.log(typeof tech);

let age = 25;
console.log(age);
console.log(typeof age);

let isActive = true;
console.log(isActive);
console.log(typeof isActive);

// Any Type
let color: any = "crimson";
color = 20;
color = true;
console.log(color);

//Regular Function
function addOne(num: number) {
  return num + 1;
}
const res = addOne(3);
console.log(res);

//Arrow Function
const double = (x: number, y: number) => x * y;
const result = double(5, 10);
console.log(result);

//Default Parameter
function greet(person: string = "Anonymous") {
  return `Hello, ${person}`;
}
const greeting = greet("Tikesh");
console.log(greeting);

//return annotation
function double1(x: number): number {
  return x * x;
}
const result1 = double1(4);
console.log(result1);

const double2 = (x: number): number => x * x;
console.log(double2(5));

//void function
function printMessage(message: string): void {
  console.log(`This is my ${message}`);
}
printMessage("Message");

//never keyword
function infinteLoop(): never {
  while (true) {}
}

function throwError(msg: string): never {
  throw new Error(msg);
}

let x: never;
function neverReturn(): never {
  while (true) {}
}
x = neverReturn(); // This will never complete
