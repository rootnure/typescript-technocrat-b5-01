// Optional Type
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

//Literal Type
const user2 : {
    name: string;
    course: 'Level 2 Development'; // type --> literal type (value as a type)
    age: number;
} = {
    name: 'Nure Alom',
    course: 'Level 2 Development', // course value is now fixed to "Level 2 Develpment"
    age: 26,
}

// Access Modifier
const user3 : {
    course: 'Level 2 Web Dev';
    readonly userId: string; // value only assignabel during declaration.
} = {
    course: 'Level 2 Web Dev',
    userId: 'WEB5-1234', // ✅
}
// user3.userId = 'WEB5-5500'; // ❌
