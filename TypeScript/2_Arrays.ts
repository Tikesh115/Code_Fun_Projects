// Array Types
// 1. using [] notation to define array types
const num: number[] = [1, 2, 4, 5, 6];
const str: string[] = ["one", "two", "three"];
console.log(num);
console.log(str);

const items: string[] = ["apple"];
items.push("banana"); //push method to add an item
console.log(items);

// 2. using Array<type> notation to define array types
const num2: Array<number> = [1, 2, 3, 4];
console.log(num2);

// Multi-dimensional arrays
const singleDi: number[][] = [[1, 2, 3, 4]];
const multiDi: number[][] = [[1, 2, 3, 4]];
const tripleDi: number[][][] = [[[1, 2, 3, 4, 5]]];

console.log(singleDi);
console.log(multiDi);
console.log(tripleDi);

// Objects
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30,
};

console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

//Objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alice",
    age: 28,
    location: "China",
  };
}

const rest = printUser();
console.log(rest);
