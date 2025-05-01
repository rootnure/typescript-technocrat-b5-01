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
```