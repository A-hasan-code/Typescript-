TypeScript Concepts

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, enabling developers to detect errors earlier in the development process. This README provides a comprehensive overview of TypeScript concepts.

Table of Contents

Introduction

Basic Types

Variables and Constants

Functions

Objects

Arrays and Tuples

Enums

Interfaces

Classes

Generics

Modules

Type Aliases

Advanced Types

TypeScript Configuration

Compiling TypeScript

1. Introduction

TypeScript is a statically typed language that builds on JavaScript, providing features like static types, interfaces, and generics. It can help you catch errors at compile time and improve code maintainability by offering better tooling and type inference.

Why Use TypeScript?

Static Typing: Helps catch errors early.

Better Tooling: Enhanced IDE support (autocompletion, type-checking, etc.).

Readability and Maintainability: Clear code structure and better refactoring.

2. Basic Types

TypeScript introduces several types that you can use to define variables:

number: Represents numeric values.

string: Represents textual data.

boolean: Represents true or false.

null: Represents an absent value.

undefined: Represents a variable that hasn't been assigned a value.

any: A fallback type, where any type can be assigned.

void: Represents a function that does not return a value.

never: Represents a value that never occurs (e.g., a function that throws an error).

let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;

3. Variables and Constants

You can declare variables using let, const, and var (less commonly used in TypeScript):

let: Used for variables whose values can change.

const: Used for values that cannot be reassigned.

var: Not recommended due to potential issues with scoping.

let message: string = "Hello, TypeScript!";
const pi: number = 3.14159;

4. Functions

Functions in TypeScript can have type annotations for parameters and return types:

function greet(name: string): string {
  return "Hello, " + name;
}

let result: string = greet("Alice");

Function Overloading

TypeScript supports function overloading, allowing you to define multiple signatures for the same function.

function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
  if (age) {
    return `Hello, ${person}. You are ${age} years old.`;
  }
  return `Hello, ${person}.`;
}

5. Objects

Objects in TypeScript are defined by an interface or directly using type annotations.

interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 30 };


You can also define optional properties and read-only properties:

interface Person {
  name: string;
  age: number;
  address?: string;  // Optional
  readonly id: number;  // Read-only
}

6. Arrays and Tuples
Arrays

Arrays in TypeScript can have types for their elements:

let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["apple", "banana"];

Tuples

Tuples are arrays with a fixed number of elements, each with a specific type:

let person: [string, number] = ["Alice", 25];

7. Enums

Enums allow you to define a set of named constants:

enum Color {
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green;


You can use both numeric and string-based enums.

8. Interfaces

Interfaces define the shape of objects, including the structure of their properties and methods:

interface Shape {
  width: number;
  height: number;
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
}

9. Classes

TypeScript supports object-oriented programming (OOP) with classes. You can define methods, constructors, and access modifiers (public, private, protected):

class Person {
  constructor(public name: string, private age: number) {}
  
  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}

let person = new Person("John", 30);
person.greet();

10. Generics

Generics allow you to create reusable components that work with any data type:

function identity<T>(value: T): T {
  return value;
}

let result = identity(1);  // number
let resultStr = identity("hello");  // string

11. Modules

TypeScript supports modularity using the import and export syntax:

Export: Exposes functions, variables, or classes to other modules.

Import: Brings in functions, variables, or classes from other modules.

// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

// app.ts
import { add } from './math';
console.log(add(2, 3));

12. Type Aliases

Type aliases create a new name for a type, making your code more readable:

type StringOrNumber = string | number;

let value: StringOrNumber = "hello";
value = 42;

13. Advanced Types
Intersection Types

Combine multiple types into one:

type Employee = { id: number; name: string };
type Manager = { department: string };

type ManagerEmployee = Employee & Manager;

Union Types

Allows a value to be one of several types:

type StringOrNumber = string | number;

Literal Types

Define exact values a variable can hold:

let role: "admin" | "user";
role = "admin";  // Valid
role = "guest";  // Error

14. TypeScript Configuration

TypeScript projects are configured using a tsconfig.json file. It contains compiler options and file paths.

Here’s a basic configuration:

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}

15. Compiling TypeScript

To compile TypeScript into JavaScript, use the following command:

tsc filename.ts


You can also compile the entire project by running:

tsc


To automatically compile your TypeScript code when files change, use the --watch flag:

tsc --watch

Conclusion

TypeScript brings many features to JavaScript, such as type safety, interfaces, and powerful OOP features. By adopting TypeScript, you can improve the maintainability and reliability of your codebase.

For further reading, you can visit the official TypeScript documentation
.
