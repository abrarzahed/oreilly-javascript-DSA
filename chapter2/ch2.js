/****************************************** 
COMMENT: array   
******************************************/
/*
var number = 3;
var arr = [7, 4, 1776];
console.log(Array.isArray(number)); // displays false
console.log(Array.isArray(arr));
*/

/*
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}
console.log(nums);
*/
/*
var numbers = [1, 2, 3, 5, 8, 13, 21];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  sum += numbers[i];
  console.log(sum);
}
*/

/*
var sentence = "the quick brown fox jumped over the lazy dog";
var wordsArr = sentence.split(" ");
console.log(wordsArr);

for (var i = 0; i < wordsArr.length; i++) {
  console.log(`Word ${i + 1} : ${wordsArr[i]}`);
}
*/
/*
var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}
console.log(nums);

var sameNums = nums;
nums[0] = 2000;
console.log(sameNums[0]);
*/

/* 
  COMMENT: Deep copy array
*/
/*
function copyArr(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
  console.log(arr1, arr2);
}

var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}

var sameNums = [];

copyArr(nums, sameNums);

nums[0] = 5000;
console.log(nums[0], sameNums[0]);
*/

/*
// prettier-ignore
var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3, 3);
console.log(dmpDept); // Raymond,Cynthia,Danny
console.log(itDiv); // Mike,Clayton,Terrill,Jennifer
*/
/*
var nums = [3, 1, 2, 100, 4, 200];
nums.sort((a, b) => a - b);
console.log(nums);
*/

/* 
  COMMENT: forEach()
*/
/*
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.forEach((e) => {
  console.log(e, e * e);
});
*/

/*
var grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
*/
/*
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student " +
      parseInt(row + 1) +
      " average: " +
      average.toFixed(2) +
      " , Total : " +
      total
  );
  total = 0;
  average = 0.0;
}
*/
/*
var total = 0;
var average = 0;
for (var std = 0; std < grades.length; std++) {
  for (var mark = 0; mark < grades[std].length; mark++) {
    total += grades[std][mark];
    average = total / grades[std].length;
  }
  console.log(
    `Student ${std + 1} total : ${total} and Average : ${average.toFixed(2)}`
  );
  total = 0;
  average = 0;
}
*/

/*
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// function displayPts(arr) {
//   for (var i = 0; i < arr.length; ++i) {
//     console.log(arr[i].x + ", " + arr[i].y);
//   }
// }
var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);
console.log(p1);
var points = [p1, p2, p3, p4];
for (var i = 0; i < points.length; ++i) {
  console.log(
    "Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y
  );
}
*/

/* 
  COMMENT:  Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.
*/
/*
function storeGrades() {
  this.grades = [];
  this.add = add;
  this.average = average;
}
function add(grade) {
  this.grades.push(grade);
}
function average() {
  var total = 0;
  for (var i = 0; i < this.grades.length; ++i) {
    total += this.grades[i];
  }
  return console.log(total / this.grades.length);
}

const stud1 = new storeGrades();
stud1.add(80);
stud1.add(88);
stud1.add(90);
stud1.add(70);
console.log(stud1.grades);
stud1.average();
*/

/* 
  COMMENT: Store a set of words in an array and display the contents both forward and backward.
*/
/*
const sentence = "A quick brown fox jumped over the lazy dog";
const wordArr = sentence.split(" ");
function printBothWay(arr) {
  console.log(arr.join(" "));
  console.log(arr.reverse().join(" "));
}
printBothWay(wordArr);
*/

//=== creating array from string  ===//
const str = "a quick brown fox jumps over the lazy dog";
function makeArrayFromString(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    console.log(`Word ${i + 1}: ${words[i]}`);
  }
}
makeArrayFromString(str);
