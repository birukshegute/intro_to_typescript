"use strict";
console.log('hello world');
let age = 30;
if (age < 50)
    age += 10;
console.log(age);
let numbers = [1, 2, 3];
numbers.forEach(n => n.toExponential);
let user = [1, 'B'];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
;
let mySize2 = 1;
console.log(mySize, mySize2);
console.log(numbers);
function calculateTax(income, taxYear = 2022) {
    if (income < 50000 && taxYear < 2022)
        return income * 0.2;
    return income * 0.3;
}
console.log(calculateTax(10000));
let employee = {
    id: 1,
    name: 'BB',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map