/* 
-also called Fat Arrow Functions
-They are NOT declarations
-Do NOT get hoisted
-Two Types:
    -Concise body --> return is automatic
    -Block Body --> Return is NOT automatic
- A concise way to write function expressions
*/

// CONCISE BODY
// speak('Kona'); <-- ex to show no hoisting
let speak = (name) => console.log(`${name} goes woof!`);

speak('Kona');

let firstName = "Peter";
let lastName = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstName, lastName);
console.log(fullName);

// BLOCK BODY
// Use {curly bros} to contain the logic
let speakAgain = name => {
    console.log(`The ${name} goes woof! - Line 27 Console.log`);
}

speakAgain('dog');

// ----------------------------

let concat = (first, last) => {
    return `${first} ${last}`;
}

let newFullName = concat(firstName, lastName);
console.log(newFullName);

// -----------------------------------

let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}

let returnedValue = sum(x, y);
console.log(returnedValue);

