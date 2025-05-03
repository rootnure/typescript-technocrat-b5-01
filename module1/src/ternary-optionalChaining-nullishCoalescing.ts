{
    /* Ternary Operator, Optional Chaining, Nullish Coalescing */

    // Ternary Operator
    const age: number = 12;
    age >= 18 ? console.log("adult") : console.log("not adult");

    // Nullish Coalescing
    // null / undefined --> Decision Making
    const userRole: string | null | undefined = null;
    const userType: string = userRole ?? "Guest";
    console.log(userType);

    // Optional Chaining
    // Stop object chaining if property not found or undefined
    type TUser = {
        name: string;
        address: {
            city: string;
            postalCode: number;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

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
}