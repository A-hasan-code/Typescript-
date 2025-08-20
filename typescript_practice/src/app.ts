let age:number = 25;
let name:string = "John Doe";
let isEmployed:boolean = true;
let hobbies:string[] = ["reading", "gaming", "hiking"];
console.log(`Name: ${name}, Age: ${age}, Employed: ${isEmployed}, Hobbies: ${hobbies.join(", ")}`);
let obj:{name: string, age: number,mark:number} = {name: "Alice", age: 30,mark: 95};
console.log(`Object: ${obj.name}`);

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Up);    // Output: 1
console.log(Direction.Down);  // Output: 2
console.log(Direction.Left);  // Output: 3
console.log(Direction.Right); // Output: 4
let dir :Direction = Direction.Down;
let dir2 :Direction = Direction.Up;
console.log(`Direction 1: ${dir}, Direction 2: ${dir2}`);
console.log(`Direction: ${Direction[dir]}`);

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Red);    // Output: "RED"
console.log(Color.Green);  // Output: "GREEN"
console.log(Color.Blue);   // Output: "BLUE"

//hetrogeneous  enum

enum Result{
    Success = 1,
    Failure = "FAILURE",
    Pending = "PENDING"
}

console.log(Result.Success);  // Output: 1
console.log(Result.Failure);  // Output: "FAILURE"
console.log(Result.Pending);  // Output: "PENDING"

