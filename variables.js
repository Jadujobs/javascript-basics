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

// {
//   let letNum = 99;
// }
// console.log(letNum);
// var, const and let

// const and let
// {}

console.clear();
// Arrays = List
var marks = [70, 50, 80, 60, 80];
marks[1] = 55;
console.log(marks[1]);

var names = ["A", "b", "c", "d"];

var mixedArr = ["a", 1, true, "b", "c"];

console.log(mixedArr[2]);

for (let i = 0; i < mixedArr.length; i++) {
  console.log(mixedArr[i]);
}

let john = {
  name: "John",
  age: 22,
  gender: "Male",
};
/*

*/
let userValue = "gender";
// Key: Value

let eva = {
  name: "Eva",
  age: 22,
  gender: "Female",
};

console.log(john.name, john.age);
let age = john.age;
let name = john.name;
