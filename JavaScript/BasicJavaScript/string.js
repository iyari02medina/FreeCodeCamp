// Find the Length of a String

var str1 = "Hello";
var length1 = str1.length; // This returns 5
var length2 = " Camper".length; // This returns 7 because the space is counted as one character.

// Use Bracket Notation to Find the First Character in a String

const firstName = "Charles";
const firstLetter = firstName[0];
console.log(firstLetter) // C

// Understand String Immutability

var myStr = "Bob"; // no se pueden mutar los string 
myStr[0] = "J";
console.log(myStr)

// Use Bracket Notation to Find the Nth Character in a String

const firstName2 = "Ada";
const secondLetterOfFirstName = firstName2[1];
console.log(secondLetterOfFirstName)

// Use Bracket Notation to Find the Last Character in a String

const firstName3 = "Adan";
const lastLetter = firstName3[firstName3.length - 1];
console.log(lastLetter)

// Use Bracket Notation to Find the Nth-to-Last Character in a String

const firstName4 = "Augusta";
const thirdToLastLetter = firstName4[firstName4.length - 3];
console.log(thirdToLastLetter)

