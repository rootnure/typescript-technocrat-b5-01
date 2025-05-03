{
    /* Never, Unknown, Nullable Types */

    // Nullable Type --> When a value accept null value then it is nullable type
    const getUsers = (id: number | null) => {
        return id ? `User details of id ${id}` : "All Users details";
    }
    const users = getUsers(null);
    console.log(users);

    // Unknown Type --> Type is defined during runtime
    const getMeterPerSecond = (speedInKMPerSecond: unknown) => {
        return typeof speedInKMPerSecond === "number" ?
            `The speed is ${speedInKMPerSecond * 1000 / 3600} m/s` :
            typeof speedInKMPerSecond === 'string' && !!speedInKMPerSecond ?
                `The speed is ${parseFloat(speedInKMPerSecond.split(" ")[0]) * 1000 / 3600} m/s` :
                "Wrong Input";
    }
    console.log(getMeterPerSecond(''));

    // Never Type
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError('Hai hai, error hoye gechey.');


}