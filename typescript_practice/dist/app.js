"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
let name = "John Doe";
let isEmployed = true;
let hobbies = ["reading", "gaming", "hiking"];
console.log(`Name: ${name}, Age: ${age}, Employed: ${isEmployed}, Hobbies: ${hobbies.join(", ")}`);
let obj = { name: "Alice", age: 30, mark: 95 };
console.log(`Object: ${obj.name}`);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
console.log(Direction.Left); // Output: 3
console.log(Direction.Right); // Output: 4
let dir = Direction.Down;
let dir2 = Direction.Up;
console.log(`Direction 1: ${dir}, Direction 2: ${dir2}`);
console.log(`Direction: ${Direction[dir]}`);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"
//hetrogeneous  enum
var Result;
(function (Result) {
    Result[Result["Success"] = 1] = "Success";
    Result["Failure"] = "FAILURE";
    Result["Pending"] = "PENDING";
})(Result || (Result = {}));
console.log(Result.Success); // Output: 1
console.log(Result.Failure); // Output: "FAILURE"
console.log(Result.Pending); // Output: "PENDING"
//# sourceMappingURL=app.js.map