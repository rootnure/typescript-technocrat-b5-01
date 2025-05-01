# Typescript Technocrad 01

## Basic Data Types in TS
- Primitive types: string, number, boolean, undefined, null
```ts
let firstName : string = 'Nure Alom'; // string
let age : number = 26; // number
let isAdmin = true; // boolean
let x : undefined = undefined; // undefined
let z : null = null; // null
```
- Non-primitive types: array, tuple, object
```ts
let friends : string[] = ['Ashiq', 'Bablu', 'Hablu']; // string type array
let eligibleIds : number[] = [2411, 6457, 8790]; // number type array
let coordinates : [number, number] = [23.27, 39.19]; // Tuple with same typs of data
let user : [string, number, boolean] = ['Nure Alom', 26, true]; // Tuple with different types of data
// Object
const user: {
    firstName: string;
    middleName: string;
    lastName: string;
} = {
    firstName: 'Md',
    middleName: 'Nure',
    lastName: 'Alom',
}
```
- Optional Type
```ts
const user1 : {
    firstName: string;
    middleName?: string; // ? --> Optional type property
    lastName: string;
    isMarried: boolean;
} = { // middleName property is now optional
    firstName: 'Nure',
    lastName: 'Alom',
    isMarried: false,
}
```
- Literal Type
```ts
const user2 : {
    name: string;
    course: 'Level 2 Development'; // type --> literal type (value as a type)
    age: number;
} = {
    name: 'Nure Alom',
    course: 'Level 2 Development', // course value is now fixed to "Level 2 Develpment"
    age: 26,
}
```
- Access Modifier
```ts
const user3 : {
    course: 'Level 2 Web Dev';
    readonly userId: string; // value only assignabel during declaration.
} = {
    course: 'Level 2 Web Dev',
    userId: 'WEB5-1234', // ✅
}
// user3.userId = 'WEB5-5500'; // ❌
```
- Functions in TS
    - Normal Function
    - Arrow Function
    - Method (Funciton in an object as property)
    - Array Method (map(), forEach(), filter(), find(), some(), all())
```ts
// Normal Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 2); // ✅
// add(2, "2"); // ❌

// Arrow Function
const arrowAdd = (num1: number, num2: number): number => num1 + num2;
arrowAdd(2, 5); // ✅

// Method (Object Property --> Function)
const userData = {
    name: 'Nur',
    age: 26,
    balance: 0,
    getAge(): number { // no parameter
        return this.age;
    },
    addBalance(balance: number): number { // receive and return number type value
        return this.balance + balance;
    },
    reduceBalance(balance: number): string { // receive number type and return string type value
        return `My new balance is ${this.balance - balance}`;
    }
}

const numberArr: number[] = [5, 7, 15];
const newArr: number[] = numberArr.map((elem: number): number => elem * elem); // map() method receiving a number and returning a number
```