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
wrongRegex.test(testStr2);
console.log(wrongRegex.test(testStr2));

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
const res = ourStr.match(ourRegex);
console.log(res);

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
 const res2 = testStr3.match(ourRegex3);
 console.log(res2);

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
 /* 
Puede buscar un patrón literal con cierta flexibilidad con las clases de caracteres . Las clases de caracteres le permiten definir un grupo de caracteres que desea hacer coincidir colocándolos entre corchetes ( [y ).]
 */
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
const bS = bigStr.match(bgRegex);
console.log(bS);
const bS2 = bagStr.match(bgRegex);
console.log(bS2);
const bS3 = bugStr.match(bgRegex);
console.log(bS3);
const bS4 = bogStr.match(bgRegex);
console.log(bS4);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result6 = quoteSample.match(vowelRegex);
console.log(result6);

// Match Letters of the Alphabet
/* 
Dentro de un conjunto de caracteres, puede definir un rango de caracteres para que coincidan usando un carácter de guión: "-".
 */
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
const res3 = catStr.match(bgRegex2);
console.log(res3);
const res4 = batStr.match(bgRegex2);
console.log(res4);
const res5 = matStr.match(bgRegex2);
console.log(res5)

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result7 = quoteSample2.match(alphabetRegex);
console.log(result7); 

// Match Numbers and Letters of the Alphabet
/* 
El uso del guión ( -) para hacer coincidir un rango de caracteres no se limita a las letras. También funciona para hacer coincidir un rango de números.
 */
let jennyStr = "Jenny8675309";
let myRegex3 = /[a-z0-9]/gi;
const resu=jennyStr.match(myRegex3);
console.log(resu);

let quoteSample4 = "Blueberry 3.141592653s are delicious.";
let myRegex4 = /[h-s2-6]/gi; 
let resu2 = quoteSample4.match(myRegex4);
console.log(resu2);

// Match Single Characters Not Specified
/* 
Para crear un conjunto de caracteres negados, coloque un carácter de intercalación ( ^) después del corchete de apertura y antes de los caracteres que no desea que coincidan.
 */
let quoteSample5 = "3 blind mice.";
let myRegex5 = /[^aeiou3]/gi; // Change this line
let resu5 = quoteSample5.match(myRegex5);
console.log(resu5);

// Match Characters that Occur One or More Times
/* 
Coincidir un carácter (o grupo de caracteres) que aparece una o más veces seguidas. Esto significa que ocurre al menos una vez y puede repetirse.
Puede usar el +carácter para verificar si ese es el caso.
 */
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/gi; // Change this line
let resp = difficultSpelling.match(myRegex2);
console.log(resp);

// Match Characters that Occur Zero or More Times
/* 
 Hace coincidir los caracteres que aparecen cero o más veces. El caracter para hacer esto es el asterisco o estrella: *.
 */
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/gi;
const sw = soccerWord.match(goRegex);
console.log(sw)
const gp = gPhrase.match(goRegex);
console.log(gp)
const op = oPhrase.match(goRegex);
console.log(op);

// Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex6 = /<.*?>/; // . Recuerde que el comodín .en una expresión regular coincide con cualquier carácter.
let resu6 = text.match(myRegex6);
console.log(resu6);

// Match Beginning String Patterns
/* 
Fuera de un conjunto de caracteres, el signo de intercalación se usa para buscar patrones al comienzo de las cadenas.
 */
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
const first = firstRegex.test(firstString);
console.log(first);
let notFirst = "You can't find Ricky now.";
const nFirst = firstRegex.test(notFirst);
console.log(nFirst); 

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result8 = calRegex.test(rickyAndCal);
console.log(result8);

// Match Ending String Patterns
/* 
Puede buscar el final de las cadenas utilizando el carácter de signo de dólar $al final de la expresión regular.
 */
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
let story = storyRegex.test(theEnding);
console.log(story);
let noEnding = "Sometimes a story will have to end";
let story2 = storyRegex.test(noEnding);
console.log(story2);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result9 = lastRegex.test(caboose);
console.log(result9);

