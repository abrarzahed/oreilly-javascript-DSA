/*
for (let i = 1; i < 6; i++) {
  console.log(i);
}

*/
/****************************************** 
COMMENT: variables   
******************************************/
/*
var number;
var name;
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;
*/

/****************************************** 
COMMENT: Arithmetic operators 
******************************************/
/*
var x = 3;
var y = 1.1;
console.log(x + y);
console.log(x * y);
console.log((x + y) * (x - y));
var z = 9;
console.log(Math.sqrt(z));
console.log(Math.abs(y / x));
*/

/****************************************** 
COMMENT: if-else statement   
******************************************/
/*
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
  mid = (current - low) / 2;
} else if (current > mid) {
  mid = (current + high) / 2;
} else {
  found = current;
}
console.log(found);
*/

/****************************************** 
COMMENT: switch case statement   
******************************************/
/*
function printMonthName(value) {
  var monthName;
  switch (String(value)) {
    case "1":
      monthName = "January";
      break;
    case "2":
      monthName = "February";
      break;
    case "3":
      monthName = "March";
      break;
    case "4":
      monthName = "April";
      break;
    case "5":
      monthName = "May";
      break;
    case "6":
      monthName = "June";
      break;
    case "7":
      monthName = "July";
      break;
    case "8":
      monthName = "August";
      break;
    case "9":
      monthName = "September";
      break;
    case "10":
      monthName = "October";
      break;
    case "11":
      monthName = "November";
      break;
    case "12":
      monthName = "December";
      break;
    default:
      console.log("Bad input");
  }
  return console.log(monthName);
}
printMonthName(0);
*/

/****************************************** 
COMMENT: while loop   
******************************************/
/*
var number = 1;
var sum = 0;
while (number < 11) {
  sum += number;
  number++;
}
console.log(sum); // displays 55
*/

/****************************************** 
COMMENT: for loop   
******************************************/
/*
var sum = 0;
for (var number = 1; number < 11; number++) {
  sum += number;
}
console.log(sum); // displays 55
*/

/****************************************** 
COMMENT: for loop in array   
******************************************/
/*
var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
}
console.log(sum); // displays 144
*/

/****************************************** 
COMMENT: functions   
******************************************/
/*
function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}
console.log(factorial(4)); // displays 24
console.log(factorial(5)); // displays 120
console.log(factorial(10)); // displays 3628800
*/
/*
function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades); // displays 82,78,79,86,95
*/

/****************************************** 
COMMENT: variable scope   
******************************************/
/*
function showScope() {
  return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "global"
*/

/*
function showScope2() {
  var scope = "local";
  return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope2()); // displays "local"
*/

/*
function showScope3() {
  scope = "local";
  return scope;
}
scope = "global";
console.log(scope); // displays "global"
console.log(showScope3()); // displays "local"
console.log(scope); // displays "local"
*/

/****************************************** 
COMMENT: recursion   
******************************************/
// function factorial(number) {
//   if (number == 1) {
//     return number;
//   } else {
//     return number * factorial(number - 1);
//   }
// }
// console.log(factorial(5));
/*
function factorial(number) {
  console.log(number);
  if (number == 1) {
    console.log(number);
    return number;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
*/

/****************************************** 
COMMENT:  Objects and Object-Oriented Programming  
******************************************/
/*
function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}
function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log("Insufficient funds");
  }
}
function toString() {
  return "Balance: " + this.balance;
}
var account = new Checking(500);

account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
console.log(account.toString()); // Balance: 750
*/
