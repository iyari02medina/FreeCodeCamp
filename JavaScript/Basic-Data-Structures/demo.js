// ### 1. Use an Array to Store a Collection of Data

// se conoce como una matriz unidimensional , lo que significa que solo tiene un nivel o que no tiene ninguna otra matriz anidada dentro de ella. Tenga en cuenta que contiene valores booleanos , cadenas y números , entre otros tipos de datos de JavaScript válidos:

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

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let newArray2 = arr.splice(1, 4);
console.log(newArray2)
console.log(arr);

// ### 6 Add Items Using splice()
/* 
splice() puede tomar hasta tres parámetros, puede usar el tercer parámetro, compuesto por uno o más elementos, para agregarlo a la matriz. 
 */
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//### 7. Copy Array Items Using slice()
/* 
  slice()copia o extrae una cantidad dada de elementos a una nueva matriz, dejando intacta la matriz a la que se llama. slice()toma solo 2 parámetros: el primero es el índice en el que comienza la extracción y el segundo es el índice en el que se detiene la extracción (la extracción ocurrirá hasta el elemento en este índice, pero sin incluirlo). */

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);

function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// ### 8. Copy an Array with the Spread Operator

// ES6 nos permite copiar fácilmente todos los elementos de una matriz, en orden, con una sintaxis simple y fácil de leer. La sintaxis extendida simplemente se ve así:...

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// ### 9. Combine Arrays with the Spread Operator

// Otra gran ventaja del operador de dispersión es la capacidad de combinar matrices, o de insertar todos los elementos de una matriz en otra, en cualquier índice.

let thisArray2 = ["sage", "rosemary", "parsley", "thyme"];
let thatArray2 = ["basil", "cilantro", ...thisArray2, "coriander"];
console.log(thatArray2);

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
console.log(spreadOut());

// ### 10. Check For The Presence of an Element With indexOf()

//  nos permite verificar rápida y fácilmente la presencia de un elemento en una matriz. indexOf()toma un elemento como parámetro y, cuando se llama, devuelve la posición o el índice de ese elemento, o -1si el elemento no existe en la matriz.

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
console.log(fruits.indexOf("dates"));
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("pears"));

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// ### 11. Iterate Through All an Array's Items Using For Loops

// iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular una matriz en función de qué elementos de datos cumplan con un determinado conjunto de criterios.

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr)
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// si el elem aparece dentro de arr. este no se guardara en newArr.
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]); 
    }
  }
  console.log(newArr);
  return newArr;
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// ### 12. Create complex multi-dimensional arrays

//  los arreglos pueden contener una profundidad infinita de arreglos que pueden contener otros arreglos, cada uno con sus propios niveles arbitrarios de profundidad, podemos acceder muy fácilmente a los niveles más profundos de una matriz tan compleja con notación de paréntesis:

let nestedArray = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [[["deepest"], ["deepest"]], [[["deepest-est?"]]]],
];
console.log(nestedArray[2][1][0][0][0]);
nestedArray[2][1][0][0][0] = "deeper still";
console.log(nestedArray[2][1][0][0][0]);

// Add Key-Value Pairs to JavaScript Objects

//  los objetos son solo colecciones de pares clave-valor . En otras palabras, son piezas de datos ( valores ) asignados a identificadores únicos llamados propiedades ( claves ).

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};
// Si desea agregar una propiedad adicional, como "origen", puede hacerlo asignando original objeto:
tekkenCharacter.origin = "South Korea";
console.log(tekkenCharacter);

tekkenCharacter["hair color"] = "dyed orange";
console.log(tekkenCharacter)

// ### 13. Modify an Object Nested Within an Object

//  Las propiedades de los objetos se pueden anidar en una profundidad arbitraria y sus valores pueden ser cualquier tipo de datos compatibles con JavaScript

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};
nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject);

// ### 14. Access Property Names with Bracket Notation 

// el uso de la notación de corchetes como una forma de acceder a los valores de propiedad mediante la evaluación de una variable.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));

// ### 15. Use the delete Keyword to Remove Object Properties

let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;
console.log(foods2);

// ### 16. Check if an Object has a Property

// JavaScript nos proporciona dos formas diferentes de hacer esto. Uno usa el hasOwnProperty()método y el otro usa la inpalabra clave.

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isEveryoneHere(users));

// ### 17. Iterate Through the Keys of an Object with a for...in Statement

// es posible que necesite iterar a través de todas las claves dentro de un objeto. Esto requiere una sintaxis específica en JavaScript llamada declaración for...in . 

const users2 = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
function countOnline(usersObj) {
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      count++;
    }
  }
  return count;
}
console.log(countOnline(users2));

// ### 18. Generate an Array of All Object Keys with Object.keys()

// podemos generar una matriz que contenga todas las claves almacenadas en un objeto con el Object.keys()método. Este método toma un objeto como argumento y devuelve una matriz de cadenas que representan cada propiedad del objeto.

let users3 = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users3));

// ### 19. Modify an Array Stored in an Object

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));



