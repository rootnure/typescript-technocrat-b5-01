{
    /* Union and Intersection in TS */

    // Union --> Any of the following types are acceptable
    type TPositiveBloodGroups = "A+" | "B+" | "AB+" | "O+";
    type TNegativeBloodGroups = "A-" | "B-" | "AB-" | "O-";
    type TUser = {
        name: string;
        gender: "male" | "female" | null;
        bloodGroup: TPositiveBloodGroups | TNegativeBloodGroups | null;
        isAdmin?: boolean | null;
    }

    const user1: TUser = {
        name: 'Subul',
        gender: 'male',
        bloodGroup: 'AB-',
    }

}