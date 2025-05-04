/* Learning Function */

// Normal Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 2); // ✅
// add(2, "2"); // ❌

// Arrow Function
const arrowAdd = (num1: number, num2: number): number => num1 + num2;
arrowAdd(2, 5); // ✅

// Method (Object Property --> Function)
const userData = {
    name: 'Nur',
    age: 26,
    balance: 0,
    getAge(): number { // no parameter
        return this.age;
    },
    addBalance(balance: number): number { // receive and return number type value
        return this.balance + balance;
    },
    reduceBalance(balance: number): string { // receive number type and return string type value
        return `My new balance is ${this.balance - balance}`;
    }
}

const numberArr: number[] = [5, 7, 15];
const newArr: number[] = numberArr.map((elem: number): number => elem * elem);