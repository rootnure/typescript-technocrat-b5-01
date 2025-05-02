{
    /* Alias */
    // Name Alias --> store a value in a different variable during destructuring
    const newUser: {
        fullName: string;
        rollNumber: number;
        fullAddress: string;
    } = {
        fullName: 'Nur',
        rollNumber: 6810,
        fullAddress: 'Dhaka',
    }

    const { fullName: name, rollNumber: roll } = newUser;
    console.log(name, roll);

    // Type Alias --> Declare a type and use that type as variable type during variable declaration

    // Type Alias for Object
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

    const student2: TStudent = {
        name: 'Bablu',
        age: 49,
        isMale: true,
        address: "Chader Upor",
    }

    const student3: TStudent = {
        name: 'Hablu',
        age: 34,
        isMale: false,
        address: "Chander Desh",
    }

    const user: TStudent = {
        name: 'Orthy',
        address: 'Panir Niche',
        isMale: false,
        age: 51,
        contactNo: '+8809696825',
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
}