//***---- InterFace ----***
//Example1:
interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const computerExample: Computer = {
    name: "Dell XPS 13",
    ram: 16,
    hdd: 512
}

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);

//Example2:
console.log("");
interface Movie {
    readonly name: string;
    ratings: number;
    genra?: string;     //optional property
}

const movie1: Movie = {
    name: "Inception",
    ratings: 8.8,
    genra: "Sci-Fi"
}

console.log(movie1.name);
console.log(movie1.ratings);

// Interface with function
console.log("");
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(sub(6, 3));

// method in interface
console.log("");
interface Person4 {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;   // method
}

function greet(person: Person4) {
    console.log(`Hello, my name is ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const John: Person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello() {
        console.log("Nice to meet you!");
    }
};

const Tiku: Person4 = {
    firstName: "Tiku",
    lastName: "Sahu",
    age: 20,
    sayHello() {
        console.log("Nice to meet you!");
    }
};

greet(John);
greet(Tiku);

// Example of interface with a function and method
console.log("");
interface Song {
    songName: string;
    artist: string;
    printSongInfo(songName: string, artist: string): string;
}

const song1: Song = {
    songName: "Sunflower",
    artist: "Post Malone & Swae Lee",
    printSongInfo: (songName: string, artist: string) => {
        return `Song: ${songName}, Artist: ${artist}`;
    }
}

const song2: Song = {
    songName: "Perfect",
    artist: "Ed Sheeran",
    printSongInfo: (songName: string, artist: string) => {
        return `Song: ${songName}, Artist: ${artist}`;
    }
}

console.log(song1.printSongInfo(song1.songName, song1.artist));

// subinterface
interface MovieDetails {
    readonly title: string;
    ratings: number;
    printMovieInfo(title: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
    genra: string;
}

const movie3: MovieGenra = {
    title: "The Dark Knight",
    ratings: 9.0,
    genra: "Action",
    printMovieInfo(title: string, price: number, ratings: number): string | number {
        return `Movie title: ${title} Price: ${price} Ratings: ${ratings}`;
    }
};

const response = movie3.printMovieInfo('John Wick', 100, 8);
console.log(response);

//interface with class
console.log("");
interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car is starting...");
    }
    stop(): void {
        console.log("Car is stopped!");
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();

//Declaration Merging
interface Car1 {
    brand: string;
    start(): void;
}

interface Car1 {
    modal: string;
    stop(): void;
}

const myCar1: Car1 = {
    brand: "BMW",
    modal: "M3",
    start() {
        console.log("Start");
    },
    stop() {
        console.log("Stop");
    },
};

myCar1.start();
myCar1.stop();
