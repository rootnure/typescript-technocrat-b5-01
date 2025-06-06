# Typescript Technocrad 01

## Basic Data Types in TS
### Primitive types: string, number, boolean, undefined, null
```ts
let firstName : string = 'Nure Alom'; // string
let age : number = 26; // number
let isAdmin = true; // boolean
let x : undefined = undefined; // undefined
let z : null = null; // null
```
### Non-primitive types: array, tuple, object
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
### Optional Type
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
### Literal Type
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
### Access Modifier
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
### Functions in TS
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
### Spread (...) operator
- Spread on object or array
```ts
// Spread operator in Array
const arr1: string[] = ['a', 'b', 'c'];
const arr2: string[] = ['d', 'e'];
const newArr: string[] = [...arr1, ...arr2]; /// ['a', 'b', 'c', 'd', 'e']
// Spread operator in Object
const obj1 : {name: string; age: number} = {name: 'Nur', age: 26};
const obj2 : {isStudent: boolean; isEnrolled: boolean;} = {isStudent: true, isEnrolled: false};
const obj = {...obj1, ...obj2};
```
### Rest (...) operator
- Rest on array
```ts
// Rest in Array
function greatFriends(...students: string[]) { // do something }
greatFriends('Bablu', 'Hablu', 'Gablu', 'Dablu', 'Oblu');
```
### Destructuring
- Object destructuring
- Array destructuring
- Object destructuring don't support type assign during destructuring
```ts
// Object destructuring
const {
    contatNo, // normal destructuring
    // address: string, // ❌
    name: { lastName } // multi level destructuring
} = user;
// Array destructuring
const myContact = ['Rahab', 'Nafis', 'Saraf', 'Jotya', 'Avro'];
const [m, , ...rest] = myContact;
```
### Alias
- Name Alias
- Type Alias
```ts
    // Name Alias --> store a value in a different variable than property name during destructuring
    const {fullName: name, rollNumber: roll} = user;
    // Type Alias → Declare a structure as type and use that as variable type during variable declaration
    // Object
    type TStudent = {
        name: string;
        age: number;
        isMale: boolean;
        contactNo?: string;
        address: string;
    }
    const student1: TStudent = {
        name: 'Nur',
        age: 62,
        isMale: true,
        contactNo: "+982342345234",
        address: "Ghorer Kona",
    }

    // Primitive Type Alias
    type TAddress = string;
    type TUserId = number;
    type TIsAdmin = boolean;

    const isAdmin: TIsAdmin = false;
    const address: TAddress = "Nodir Dhare";
    const userId: TUserId = 4240;

    // Type Alias for Function
    type TAdd = (num1: number, num2: number) => number;
    const add: TAdd = (num1, num2) => num1 + num2;
```
### Union and Intersection in TS
- Union --> Any of the following types are acceptable
```ts
type TPositiveBloodGroups = "A+" | "B+" | "AB+" | "O+";
type TNegativeBloodGroups = "A-" | "B-" | "AB-" | "O-";
type TUser = {
    name: string;
    gender: "male" | "female" | null;
    bloodGroup: TPositiveBloodGroups | TNegativeBloodGroups | null;
}
```
- Intersection --> Must fill all types
```ts
type TFrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
}
type TBackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
}
type TFullstackDeveloper = TFrontendDeveloper | TBackendDeveloper;
const developer1: TFullstackDeveloper = {
    skills: ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
}
```
### Different Names of ? (Question Marks) in TS
- Ternary Operator: Short-cut of if-else conditions
    - condition ? if_true : if_false
```ts
const age: number = 12;
age >= 18 ? console.log("adult") : console.log("not adult");
```
- Nullish Coalescing: null / undefined --> Decision Making
    - condition ?? decision
```ts
const userRole: string | null | undefined = null;
const userType: string = userRole ?? "Guest";
console.log(userType);
```
- Optional Chaining: Stop object chaining if property not found or undefined to avoid error
    - variable?.property?.innerProperty
```ts
const user1: TUser = {
    name: 'Nur',
    address: {
        city: 'Dhaka',
        postalCode: 1000,
        presentAddress: 'Dhaka, Bangladesh',
    }
}
const permanentAddress = user1?.address?.permanentAddress ?? 'No permanent address found';
console.log(permanentAddress);
```
### More Types in TS
- Nullable type --> When a value is null then it it nullable types
```ts
const userToken: string | null = null;
console.log(userToken);
```
- Unknown type --> When type is not known before runtime then unknown type is used
```ts
const getRole = (token: unknown) => token ? 'user' : 'guest';
// token can be string, null, undefined or esle type
```
- Never type --> When a funciton return nothing but error then the return type is never
```ts
const throwError = (msg: string): never => {
    throw new Error(msg);
}
```