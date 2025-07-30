"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello, TypeScript!";
console.log(message);
var isBeginner = true;
console.log(isBeginner + ' teste 2 testes ');
var name = "Jonh";
var total = 20;
function add(num1, num2) {
    return [num1 + (num2 !== null && num2 !== void 0 ? num2 : 0), "Result"];
}
console.log(add(10, 20));
console.log(add(10));
;
function fullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age);
}
console.log(fullName({ firstName: "John", lastName: "Doe", age: 30 }));
