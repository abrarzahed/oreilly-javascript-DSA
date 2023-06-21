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
/*
const str = "a quick brown fox jumps over the lazy dog";
function makeArrayFromString(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    console.log(`Word ${i + 1}: ${words[i]}`);
  }
}
makeArrayFromString(str);
*/

//=== searching for a value with the help of indexOf method  ===//
/*
const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
function findName(arr, targetName) {
  const index = arr.indexOf(targetName);
  if (index !== -1) {
    console.log(`Found ${targetName} at position ${index}`);
  } else {
    console.log(`${targetName} not found in array`);
  }
}
findName(names, "Clayton");
*/
//=== adding element to the beginning of an array without using unshift method  ===//
/*
const nums = [2, 3, 4, 5];
function addElementAtBeginning(arr, element) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr;
}
nums;
console.log(addElementAtBeginning(nums, 1)); // 1,2,3,4,5
*/

//=== removing an element from the beginning of an array without shift method  ===//
/*
const nums = [9, 1, 2, 3, 4, 5];
function removeElementFromBeginning(arr) {
  const copyArr = [];
  for (let i = 0; i < nums.length; ++i) {
    let item = arr[i + 1];
    if (item !== undefined) {
      copyArr.push(item);
    }
  }
  return copyArr;
}
console.log(removeElementFromBeginning(nums));
*/

//=== inserting element at the middle of an array  ===//
/*
const nums = [1, 2, 3, 7, 8, 9];
const newElements = [4, 5, 6];
nums.splice(Math.round(newElements.length / 2 + 1), 0, "middle" + newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9
*/

//=== putting array's elements in order  ===//
// const arr = [1, 4, 3, 5, 6, 8, -1];
// arr.reverse();
// console.log(arr);

/****************************************** 
COMMENT: iterator functions   
******************************************/
//=== non-array generating iterator functions  ===//
/*
function makeSquare(num) {
  console.log(num, num * 2);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(makeSquare);
*/
// var twod = [];
// var rows = 5;
// for (var i = 0; i < rows; ++i) {
//   twod[i] = [];
// }
// console.log(twod);

/*
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];
function printAverageMarks(arr) {
  let total = 0;
  let average = 0.0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      total += arr[row][col];
    }
    average = total / arr[row].length;
    console.log(`Student ${row + 1} average: ${average.toFixed(2)}`);
    total = 0;
    average = 0.0;
  }
}
printAverageMarks(grades);
*/

//=== jagged array  ===//
/*
const grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
let total = 0;
let average = 0.0;
for (let row = 0; row < grades.length; ++row) {
  for (let col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student " + parseInt(row + 1) + " average: " + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}
*/

/****************************************** 
COMMENT: arrays in object(OOP)   
******************************************/
/*
class WeekTemps {
  constructor() {
    this.dataStore = [];
  }

  add(temp) {
    this.dataStore.push(temp);
  }
  average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
      total += this.dataStore[i];
    }
    return total / this.dataStore.length;
  }
}
const thisWeek = new WeekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());
*/

/****************************************** 
COMMENT: Chapter 2 exercises   
******************************************/
/*
1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.
2. Store a set of words in an array and display the contents both forward and backward.
3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly aver‐
age, a specific week’s average, and all the weeks’ averages.
4. Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word.
*/

/*=== exercise 1 : Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.  ===*/
/*
class StudentGrades {
  constructor(studentName) {
    this.grades = [];
    this.name = studentName;
  }
  add(point) {
    this.grades.push(point);
  }
  average() {
    let total = 0;
    let average = 0.0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
      average = Math.abs(total / this.grades.length).toFixed(2);
    }
    console.log(`The average grade of ${this.name} is : ${average}`);
  }
}

const student1 = new StudentGrades("Abrar");
student1.add(30);
student1.add(20);
student1.add(45);
student1.average();
*/

/*
   exercise 2: Store a set of words in an array and display the contents both forward and backward.
*/
/*
const str =
  "store a set of words in an array and display the contents both forward and backward";
const wordArr = str.split(" ");

function printFromBothSide(arr) {
  console.log(arr);
  console.log(arr.reverse().toString());
}
printFromBothSide(wordArr);
*/

/*
   exercise 3: Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
   data using a two-dimensional array. Create functions to display the monthly aver‐
   age, a specific week’s average, and all the weeks’ averages.
*/
/*
class Temps {
  constructor() {
    this.dataStore = [];
  }

  sum(accSum, temp) {
    return accSum + temp;
  }

  add(temp) {
    this.dataStore.push(temp);
  }
  calcAverageWeek(week) {
    const weekTemps = this.dataStore[week - 1];
    return weekTemps.reduce(this.sum) / weekTemps.length;
  }

  calcAverageAllWeek() {
    const averageAllWeeks = this.dataStore.map((weekTemp) => {
      return weekTemp.reduce(this.sum) / weekTemp.length;
    });
    return averageAllWeeks;
  }

  calcAverageMonthly() {
    const average = this.calcAverageAllWeek();
    return average.reduce(this.sum) / average.length;
  }
}
const temps = new Temps();
temps.add([52, 55, 61, 65, 55, 50, 52]);
temps.add([62, 63, 64, 65, 52, 55, 60]);
temps.add([60, 61, 52, 53, 60, 64, 55]);
temps.add([52, 53, 61, 64, 51, 57, 58]);

console.log(temps.calcAverageWeek(1));
console.log(temps.calcAverageAllWeek());
console.log(temps.calcAverageMonthly());
*/

/*
   exercise 4: Create an object that stores individual letters in an array and has a function for
   displaying the letters as a single word.
*/
/*
class ArraysOfLetterFromWords {
  constructor(str) {
    this.words = str.split(" ");
  }

  makeArrayOfLetterAndPrint() {
    const result = [];
    for (let i = 0; i < this.words.length; i++) {
      const subArray = this.words[i].split("");
      const arr = [];
      for (let j = 0; j < subArray.length; j++) {
        arr.push(subArray[j]);
      }
      result.push(arr);
    }
    return result;
  }
}

const wordsArray = new ArraysOfLetterFromWords("Abrar Hussen");
console.log(wordsArray.makeArrayOfLetterAndPrint());
*/
