// Variables

console.clear();
// Integers and Floats
// 123, 3.14

var number = 90;
var pi = 3.14;
var numberPi = number + pi;
console.log(number);
console.log(numberPi);
console.log(pi);

// Strings
var firstName = "Arsalan";
var lastName = "Khattak";

var fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// Booleans
var isAuthenticated = false; // true, false

console.log(isAuthenticated);
isAuthenticated = true;
// console.log(isAuthenticated)
// isAuthenticated = undefined;
// console.log(isAuthenticated)

// Null & Undefined
var username;
console.log(username);
username = null;
console.log(username);
var typeOfFullName = typeof fullName;
console.log(typeof number);
console.log(typeof pi);
console.log(typeOfFullName);
console.log(typeof null);
console.log(typeof undefined);

number = null;

console.log(number);

// Function Scope => var
// Block Scope => const and let

{
  let letNum = 99;
}
console.log(letNum);
// var, const and let

// const and let
// {}
