// Using the Test Method
/*
 Las expresiones regulares se utilizan en lenguajes de programación para hacer coincidir partes de cadenas. Usted crea patrones para ayudarlo a hacer esa combinación.
Si desea encontrar la palabra theen la cadena "The dog chased the cat", puede usar la siguiente expresión regular: /the/. Tenga en cuenta que las comillas no son necesarias dentro de la expresión regular.
JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el .test()método. El .test()método toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) y devuelve true o false si su patrón encuentra algo o no. */

let testStr = "freeCodeCamp";
let testRegex = /Code/;
let myResult1 = testRegex.test(testStr);
console.log(myResult1)

let myString = "Hello, World!";
let myRegex = /Hello/;
let myResult = myRegex.test(myString);
console.log(myResult);

// Match Literal Strings

let testStr2 = "Hello, my name is Kevin.";
let testRegex2 = /Kevin/;
testRegex2.test(testStr2);
console.log(testRegex2.test(testStr2));
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
console.log(wrongRegex.test(testStr));

// Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);
console.log(result);

// Ignore Case While Matching
/* 
aquí se centrará en la bandera que ignora las mayúsculas y minúsculas: la "i" bandera. Puede usarlo agregándolo a la expresión regular.
 */
let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result2 = fccRegex.test(myString2);
console.log(result);

// Extract Matches
/*
 También puede extraer las coincidencias reales que encontró con el ".match()" método.
Para usar el ".match()" método, aplique el método en una cadena y pase la expresión regular dentro de los paréntesis. 
*/
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
console.log(ourStr.match(ourRegex));

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result3 = extractStr.match(codingRegex); // Change this line
console.log(result3);

// Find More Than the First Match
/*
 Para buscar o extraer un patrón más de una vez, puede usar la "g" bandera.
  */
 let testStr3 = "Repeat, Repeat, Repeat";
 let ourRegex3 = /Repeat/g;
 testStr3.match(ourRegex3);
 console.log(testStr3.match(ourRegex3));

 let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result4 = twinkleStar.match(starRegex) 
console.log(result4);

// Match Anything with Wildcard Period
/*
 El carácter comodín "." coincidirá con cualquier carácter. El comodín también se llama "dot" y "period". Puede usar el carácter comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si desea hacer coincidir hug, huh, hut y hum, puede usar la expresión regular "/hu./" para hacer coincidir las cuatro palabras. 
 */
 let humStr = "I'll hum a song";
 let hugStr = "Bear hug";
 let huRegex = /hu./;
 console.log(huRegex.test(humStr));
 console.log(huRegex.test(hugStr));

 let exampleStr = "Let's have fun with regular expressions!";
 let unRegex = /.un/; 
 let result5 = unRegex.test(exampleStr);
 console.log(result5);

 // Match Single Character with Multiple Possibilities

 

