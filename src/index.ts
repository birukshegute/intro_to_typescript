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


// async function hello() {
//     return ('world')
// }