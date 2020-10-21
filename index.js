// Comments
console.log('Hello World');

// variables, should be meainingfull, cannot start with a number, no spaces or hypens
let name = 'Mosh';
console.log(name);

let firstName = 'Austin';
console.log(firstName);

// Constants
// let interestRate = .3;
// interestRate = 1;
// console.log(interestRate)

// instead use 
const interestRate = 0.3;
console.log(interestRate)

// 
// let name = 'Austin'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
// let firstName = undefined;
let selectedColor = null;

// Dynamic Typing
// use typeof to determine type of operator
// clear consule with control + L
// Primitives/ Value Types = string, number, boolen, undefined, null
// Reference Types = object, array, function

// Objects = turn multiple variables in an object
// let name1 = 'Austin';
// let age1 = 22;
// turn these variables into an object
let person = {
    name: 'Austin',
    age: 30
};
console.log(person)
// how to change name
// Dot Notation
person.name = 'Jack';
console.log(person.name);

// Bracket Notation
person['name'] = 'John';
console.log(person.name);

// Arrays
let selectedColors = ['red', 'blue',];
selectedColors[2] = 'green';
console.log(selectedColors.length);

// Functions
function greet(name, lastName) {
    
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Austin', 'Reed'); 
greet('Jack', 'Reed')