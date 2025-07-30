export {};

let message = "Hello, TypeScript!";
console.log(message);


let isBeginner: boolean = true;
console.log(isBeginner + ' teste 2 testes ');

const name: string = "Jonh";
const total: number = 20;

function add (num1: number, num2?: number): [number, string] {
    return [num1 + (num2 ?? 0), "Result"];
}


console.log(add(10,20));
console.log(add(10));


interface Person {
    firstName: string,
    lastName: string,
    age: number
};


function fullName(person: Person): string {
    return `${person.firstName} ${person.lastName} ${person.age}`;
}

console.log(fullName({ firstName: "John", lastName: "Doe", age: 30 }));

