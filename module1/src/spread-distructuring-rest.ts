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

    /* Rest Operator */

    // function greatFriends(student1: string, student2: string, student3: string) { // ❌
    //     console.log(`Hi ${students[0]} ${students[1]} ${students[2]} ${students[3]} ${students[4]}`);
    // }
    function greatFriends(...students: string[]) { // ✅
        console.log(`Hi ${students.map((student: string) => student).join(" ")}`);
    }
    greatFriends('Bablu', 'Hablu', 'Gablu', 'Dablu', 'Oblu');

    /* Destructuring */

    // Object destructuring
    const user = {
        id: 871,
        name: {
            firstName: 'Nure',
            lastName: 'Alom',
        },
        contatNo: "+880 1234-567890",
        address: "Golir mor e"
    }

    const {
        contatNo, // normal destructuring
        address: string,
        name: { lastName } // multi level destructuring
    } = user;

    // Array destructuring
    const myContact = ['Rahab', 'Nafis', 'Saraf', 'Jotya', 'Avro'];
    const [a, b, frequentContact] = myContact;
    const [, , , gf] = myContact;
    const [m, n, ...rest] = myContact;
}