/*
Scope is smply the hierarchy of variables within our code
    -Global scope or parent scope
    -Local scope or child scope
*/

let global = "Earth";

function scope(){
    let local = "Indy";
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}.`);
}

scope();
// local variable cannot be accessed outside the function
// console.log(local); //undefined