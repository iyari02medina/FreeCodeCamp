// Store Multiple Values in one Variable using JavaScript Arrays

const sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich)

// Nest one Array within Another Array

const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];
console.log(teams);

// Access Array Data with Indexes

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(data)

// Modify Array Data With Indexes

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray);

// Access Multi-Dimensional Arrays With Indexes

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

console.log(arr[3]);
console.log(arr[3][0]);
console.log(arr[3][0][1]);

// Manipulate Arrays With push()

const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1)

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2)

// Manipulate Arrays With pop()

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// Manipulate Arrays With shift()

const ourArray2 = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray2.shift();
console.log(removedFromOurArray)

// Manipulate Arrays With unshift()

const ourArray3 = ["Stimpson", "J", "cat"];
ourArray3.shift();
ourArray3.unshift("Happy");
console.log(ourArray3)

// / / / / / / / / / / / / / / / Shopping List / / / / / / / / / / / / / / / / / / / /
/* 
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e. */

var myList = [
  ["Canned Beans", 3],
  ["Milk Galon", 1],
  ["Cereal", 2],
  ["Toilet Paper", 12],
  ["Sack of Rice", 1],
];