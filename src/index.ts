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

type Employee = {
readonly id: number, // this one can't be altered later
name: string,
retire: (date: Date) => void
}

let employee: Employee = {
    id:1,
    name: 'BB',
    retire: (date: Date) => {
        console.log(date);
    }
};

console.log(employee)

function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

type Quantity = 50 | 100;
let quantity: Quantity = 100;

function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(undefined);

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()};
}

let customer = getCustomer(1);
console.log(customer?.birthday) // Optional property access operator
// async function hello() {
//     return ('world')
// }