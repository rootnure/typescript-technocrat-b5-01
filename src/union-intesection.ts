{
    /* Union and Intersection in TS */

    // Union --> Join multiple types and accept any of the following types
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

    // Intersection --> Join multiple types and must ful-fill multiple types
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

}