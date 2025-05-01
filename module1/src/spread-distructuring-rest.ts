{
    /* Spread Operator */

    // Array
    const friends: string[] = ['Hablu', 'Bablu', 'Dablu'];
    const otherFriends: string[] = ['Wahid', 'Habib', 'Sadat'];
    // friends.push(otherFriends); // ❌
    friends.push(...otherFriends); // ✅ using spread (...) operator

    // Object
    const mentors1 = {
        js: 'Jhanker',
        ts: 'Mezbah',
        redux: 'Mir',
        dbms: 'Mizan',
    }
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid',
    }
    const mentorList = {
        ...mentors1,
        ...mentors2
    };
    const { js, next } = mentorList;
    console.log(js, next);
}