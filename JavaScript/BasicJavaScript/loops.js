 // Iterate with JavaScript While Loops

 const ourArray = [];
 let i = 0;

 while (i < 5) {
   ourArray.push(i);
   i++;
 }
 console.log(ourArray)


const myArray = [];
let j = 5;
while(j >= 0) {
  myArray.push(j);
  j--;
}
console.log(myArray)

// Iterate with JavaScript For Loops

const ourArray2 = [];
for (let i = 0; i < 5; i++) {
  ourArray2.push(i);
}
console.log(ourArray2)


var ourArray3 = [];
for (let i = 0; i < 5; i++) {
  ourArray3.push(i);
}
var myArray3 = [];
for (let i = 1; i < 6; i++) {
  myArray3.push(i);
}
console.log(ourArray3);
console.log(myArray3);

// Iterate Odd Numbers With a For Loop

const ourArray4 = [];
for (let i = 0; i < 10; i += 2) {
  ourArray4.push(i);
}
console.log(ourArray4)


var ourArray5 = [];
for (let i = 0; i < 10; i += 2) {
  ourArray5.push(i);
}
var myArray5 = [];
for (let i = 1; i < 10; i += 2) {
  myArray5.push(i);
}
console.log(ourArray5);
console.log(myArray5);

// Count Backwards With a For Loop

const ourArray6 = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray6.push(i);
}
console.log(ourArray6);

// Iterate Through an Array with a For Loop

const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Nesting For Loops

const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}


function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]));

// Iterate with JavaScript Do...While Loops

const ourArray7 = [];
let o6 = 0;

do {
  ourArray7.push(o6);
  o6++;
} while (o6 < 5);
console.log(ourArray7)


var myArray7 = [];
var a7 = 15;
do {
  myArray7.push(a7);
  a7++;
} while (a7 <= 10);
console.log(myArray7)

// Replace Loops using Recursion

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
console.log(multiply([1,2,3,4,5],3))


function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum([1, 2, 3, 4, 5], 5));

// / / / / / / / / / / / / / / / / / / / / Profile Lookup / / / / / / / / / / / / / / / / / / 
/*
 Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

Se ha escrito previamente una lookUpProfilefunción que toma name y una propiedad ( ) como argumentos.prop

La función debe verificar si namees un contacto real firstName y si la propiedad dada ( prop) es una propiedad de ese contacto.

Si ambos son verdaderos, devuelva el "valor" de esa propiedad.

Si nameno corresponde a ningún contacto, devuelva la cadena No such contact.

Si propno corresponde a ninguna propiedad válida de un contacto que coincida name, devuelva la cadena No such property.
 */
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Solution 1
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Akira", "likes"))

// Solution 2
function lookUpProfile2(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile2("Harry", "lastName"));