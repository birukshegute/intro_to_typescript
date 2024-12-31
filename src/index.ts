console.log('hello world');

let age: number = 30;
if (age < 50)
    age+=10;
console.log(age);

let numbers: number[] = [1, 2, 3]
numbers.forEach(n=>n.toExponential)
let user: [number, string] = [1, 'B']
enum Size { Small, Medium, Large};
let mySize: Size = Size.Medium;
const enum Size2 {Smaall, Medium, Large};
let mySize2: Size2 = Size2.Medium
console.log(mySize, mySize2);
console.log(numbers)

function calculateTax(income: number, taxYear = 2022) : number {
    if (income< 50_000 && taxYear < 2022)
        return income * 0.2;
    return income * 0.3;
}

console.log(calculateTax(10_000))

let employee: {
    readonly id: number, // this one can't be altered later
    name: string,
    retire: (date: Date) => void
} = {id:1,
    name: 'BB',
    retire: (date: Date) => {
        console.log(date);
    }
};

console.log(employee)
// async function hello() {
//     return ('world')
// }