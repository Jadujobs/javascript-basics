// Less Than =>    <
// Greater Than =>   >
// Not Equals => !
// AND => && , OR => ||
let number = 90;
let isAuth = false;

if (number == 90 && isAuth == true) {
  console.log("(AND) You Passed!");
}

if (number != 90 || isAuth == true) {
  console.log("(OR) You Passed");
}

let num = 9;

if (!(num == 9 && isAuth == true)) {
  console.log("(Not) You Passed");
}

/*
num == 9 && isAuth == true
true && false
false
!false = true

*/
