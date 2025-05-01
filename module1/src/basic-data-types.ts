/* Basic Data Type */

/* Primitive Types */
// string
let firstName : string = 'Nure Alom';

// number
let age : number = 26;

// boolean
let isAdmin = true;

// undefined
let x : undefined = undefined;

// null
let z : null = null;

let d: string; // only string type data can be stored in this variable now
d = 'abc'; // ✅
// d = 123 // ❌
// d = false; // ❌

/* Non-primitive Types */
// Array
let friends : string[] = ['Ashiq', 'Bablu', 'Hablu']; // string type array
friends.push('Dablu'); // ✅
// friends.push(22); // ❌

let eligibleIds : number[] = [2411, 6457, 8790]; // number type array
eligibleIds.push(9122); // ✅
// eligibleIds.push('WEB8-2555'); // ❌

// Tuple --> array --> order --> type of value
// Special type of array with fixed length and every index has meaning
let coordinates : [number, number] = [23.21447, 39.91419]; // [0] --> latitude, [1] --> longitude
let user : [string, number, boolean] = ['Nure Alom', 26, true]; // [0] --> name, [1] --> age, [2] --> isAdmin
