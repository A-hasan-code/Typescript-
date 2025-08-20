
# TypeScript Guide: From Beginner to Pro

## Table of Contents
1. [Introduction](#introduction)
2. [Basic Types](#basic-types)
3. [Variables and Constants](#variables-and-constants)
4. [Functions](#functions)
5. [Objects](#objects)
6. [Arrays and Tuples](#arrays-and-tuples)
7. [Enums](#enums)
8. [Interfaces](#interfaces)
9. [Classes](#classes)
10. [Generics](#generics)
11. [Modules](#modules)
12. [Type Aliases](#type-aliases)
13. [Advanced Types](#advanced-types)
14. [Object-Oriented Programming Concepts](#oop-concepts)
15. [TypeScript Configuration](#typescript-configuration)
16. [Compiling TypeScript](#compiling-typescript)
17. [Conclusion](#conclusion)

## 1. Introduction
TypeScript is a **statistically typed superset** of JavaScript that compiles to plain JavaScript. It helps developers catch errors early in the development process by introducing static types to JavaScript. TypeScript adds powerful features like interfaces, classes, and generics to JavaScript, making your code more readable, maintainable, and scalable.

### Why Use TypeScript?
- **Static Typing**: Catch errors early.
- **Better Tooling**: Enhanced IDE support (autocompletion, type-checking).
- **Improved Maintainability**: Clearer code structure for refactoring and scaling.

## 2. Basic Types
TypeScript introduces several basic types to define variables clearly:

- `number`: Represents numeric values.
- `string`: Represents textual data.
- `boolean`: Represents true or false.
- `null` & `undefined`: Represents missing values.
- `any`: A fallback type where any type can be assigned.
- `void`: Represents a function that does not return anything.
- `never`: Represents values that never occur (e.g., a function that throws an error).

```typescript
let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;
```

## 3. Variables and Constants
You can declare variables using `let`, `const`, and `var`:

- `let`: Used for variables whose values can change.
- `const`: Used for values that cannot be reassigned.
- `var`: Not recommended due to scoping issues.

```typescript
let message: string = "Hello, TypeScript!";
const pi: number = 3.14159;
```

## 4. Functions
Functions in TypeScript can have **type annotations** for parameters and return values:

```typescript
function greet(name: string): string {
  return "Hello, " + name;
}

let result: string = greet("Alice");
```

### Function Overloading
TypeScript supports **function overloading**, allowing you to define multiple signatures for the same function.

```typescript
function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
  if (age) {
    return `Hello, ${person}. You are ${age} years old.`;
  }
  return `Hello, ${person}.`;
}
```

## 5. Objects
Objects can be defined by **interfaces** or directly with type annotations:

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 30 };
```

Optional and read-only properties:

```typescript
interface Person {
  name: string;
  age: number;
  address?: string; // Optional
  readonly id: number;  // Read-only
}
```

## 6. Arrays and Tuples
Arrays can hold elements of a specific type:

```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["apple", "banana"];
```

Tuples are arrays with a fixed number of elements, each with a specific type:

```typescript
let person: [string, number] = ["Alice", 25];
```

## 7. Enums
Enums allow you to define a set of named constants:

```typescript
enum Color {
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green;
```

## 8. Interfaces
Interfaces define the shape of objects, including the structure of their properties and methods:

```typescript
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
```

## 9. Classes
TypeScript supports **Object-Oriented Programming (OOP)** with classes. You can define methods, constructors, and access modifiers:

```typescript
class Person {
  constructor(public name: string, private age: number) {}

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}

let person = new Person("John", 30);
person.greet();
```

## 10. Generics
Generics allow you to create reusable components that work with any data type:

```typescript
function identity<T>(value: T): T {
  return value;
}

let result = identity(1);  // number
let resultStr = identity("hello");  // string
```

## 11. Modules
TypeScript supports modularity with **import** and **export**:

```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

// app.ts
import { add } from './math';
console.log(add(2, 3));
```

## 12. Type Aliases
Type aliases create a new name for a type, making your code more readable:

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber = "hello";
value = 42;
```

## 13. Advanced Types
- **Intersection Types**: Combine multiple types into one.
- **Union Types**: A value can be one of several types.
- **Literal Types**: Restrict a variable to specific values.

```typescript
type Employee = { id: number; name: string };
type Manager = { department: string };
type ManagerEmployee = Employee & Manager;
```

## 14. Object-Oriented Programming Concepts in TypeScript
### Encapsulation
Encapsulation is the bundling of data and methods that operate on the data within one unit, typically within a class. In TypeScript, the `private` and `protected` access modifiers help achieve encapsulation.

```typescript
class Animal {
  constructor(private name: string) {}

  public speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}
```

### Inheritance
Inheritance allows a class to inherit properties and methods from another class. 

```typescript
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog('Buddy');
dog.speak();
```

### Polymorphism
Polymorphism allows different classes to be treated as instances of the same class.

```typescript
let animal: Animal = new Dog("Buddy");
animal.speak();  // Buddy barks
```

## 15. TypeScript Configuration
A TypeScript project is configured using the `tsconfig.json` file. It specifies compiler options and file paths:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true
  }
}
```

## 16. Compiling TypeScript
To compile TypeScript into JavaScript:

```bash
tsc filename.ts
```

To compile the entire project:

```bash
tsc
```

To watch for file changes:

```bash
tsc --watch
```

## 17. Conclusion
TypeScript adds a robust set of features on top of JavaScript, making it an invaluable tool for developers. Whether you're building simple scripts or large-scale applications, TypeScript improves maintainability, reduces errors, and enhances developer productivity. By learning TypeScript, you are investing in writing safer, cleaner, and more scalable code.

