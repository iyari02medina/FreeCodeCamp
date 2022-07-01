// ### 1. Use an Array to Store a Collection of Data

// e conoce como una matriz unidimensional , lo que significa que solo tiene un nivel o que no tiene ninguna otra matriz anidada dentro de ella. Tenga en cuenta que contiene valores booleanos , cadenas y números , entre otros tipos de datos de JavaScript válidos:

let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);

// . A continuación se puede ver una implementación más compleja de una matriz. Esto se conoce como una matriz multidimensional o una matriz que contiene otras matrices.

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

// ### 2. Access an Array's Contents Using Bracket Notation

//  Para recuperar un elemento de una matriz, podemos encerrar un índice entre paréntesis y agregarlo al final de una matriz, o más comúnmente, a una variable que hace referencia a un objeto de matriz. Esto se conoce como notación de paréntesis .

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
console.log(ourVariable)

// Además de acceder al valor asociado con un índice, también puede establecer un índice en un valor utilizando la misma notación:

ourArray[1] = "not b anymore";
console.log(ourArray[1]);

// ### 3. Agregue elementos a una matriz con push() y unshift()

// Ambos métodos toman uno o más elementos como parámetros y agregan esos elementos a la matriz a la que se llama el método; el push()método agrega elementos al final de una matriz y unshift()agrega elementos al principio.

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];
romanNumerals.unshift("XIX", "XX");
console.log(romanNumerals);
romanNumerals.push(twentyThree);
console.log(romanNumerals);

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));

// ### 4. Eliminar elementos de una matriz con pop() y shift()

// pop() elimina un elemento del final de una matriz, mientras que shift()elimina un elemento del principio.

let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
console.log(greetings);
greetings.shift();
console.log(greetings);

// También podemos devolver el valor del elemento eliminado con cualquier método como este:
let popped = greetings.pop();
console.log(popped);
console.log(greetings);

function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

// ### 5.  Remove Items Using splice()
/* 
splice()Nos permite eliminar cualquier número de elementos consecutivos de cualquier parte de una matriz.
 */

let array = ["I", "am", "feeling", "really", "happy"];
let newArray = array.splice(3,2);
console.log(newArray)