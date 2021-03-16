function names(name, age) {
  console.log("Hello " + name);
  console.log(name + " is " + age + " years old");

  //   return isValid(name, age)
  //   return [name, age];
  return {
    name,
    age,
  };
}

function isValid(name, age) {
  console.log("Hello " + name);
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// names();
// names();
// names();
// console.log("Hello John");
// console.log("John is 20 years old");

// console.log("Hello Eva");
// console.log("Eva is 10 years old");

// console.log("Hello Smith");
// console.log("Smith is 24 years old");

// names("John", 20);
// names("Eva", 10);
// names("Smith", 25);
// console.log(isValid("John", 20));
// console.log(isValid("John", 10));
// console.log(names("john", 20));
// if (isValid("John", 10)) {
//   console.log("You are 18+");
// } else {
//   console.log("You are underage");
// }

console.log(names("john", 20));

// Pass by Value
var username = "john";
var user2 = username; // john
var username = "smith";
console.log(user2);
// Pass by Reference
// let userName = {
//   name: "John",
// };

// let user22 = userName;
// userName.age = 22;
// user22.name = "EVa";
// console.log(user22);
// console.log(userName);

let ages = [1, 2, 3, 4];
let ages2 = ages;
ages.push(22);
ages = [1, 3, 2];
console.log(ages);
console.log(ages2);
