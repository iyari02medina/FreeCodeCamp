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

// Match All Letters and Numbers
/* 
La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es "\w".
 */
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
const ljn= longHand.test(numbers);
console.log(ljn);
const shn= shortHand.test(numbers);
console.log(shn);
const lhname= longHand.test(varNames);
console.log(lhname);
const shname=shortHand.test(varNames);
console.log(shname);

let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let resul3 = quoteSample.match(alphabetRegexV2).length;
console.log(resul3);

// Match Everything But Letters and Numbers
/* 
Puede buscar el opuesto de \wcon \W. Tenga en cuenta que el patrón opuesto usa una letra mayúscula. Este atajo es el mismo que [^A-Za-z0-9_]
 */
let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
console.log(numbers2.match(shortHand2));
console.log(sentence.match(shortHand2));

// Match All Numbers
/* 
El atajo para buscar caracteres de dígitos es \d, con minúsculas d. Esto es igual a la clase de caracteres [0-9]
 */
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let resul = movieName.match(numRegex).length;
console.log(resul);

// Match All Non-Numbers
/* 
El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9]
 */
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let resul2 = movieName2.match(noNumRegex).length;
console.log(resul2);

// Match Whitespace
/* 
Puede buscar espacios en blanco usando \s, que es una minúscula s.
 */
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));

// Match Non-Whitespace Characters
/* 
Busque espacios que no sean en blanco usando \S, que es una mayúscula
 */
let whiteSpace2 = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex).length);

// Specify Upper and Lower Number of Matches
/* 
Los especificadores de cantidad se utilizan con corchetes ( {y }). Pones dos números entre las llaves, para el número inferior y superior de patrones.
 */
let A4 = "aaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));

// Specify Only the Lower Number of Matches
/* 
Para especificar solo el número más bajo de patrones, mantenga el primer número seguido de una coma.
 */
let a4 = "haaaah";
let a2 = "haah";
let a100 = "h" + "a".repeat(100) + "h";
let multipleA2 = /ha{3,}h/;
console.log(multipleA2.test(a4));
console.log(multipleA2.test(a2));
console.log(multipleA2.test(a100));

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/gi; // Change this line
console.log(haRegex.test(haStr));

// Specify Exact Number of Matches
/* 
Para especificar una cierta cantidad de patrones, solo tenga ese número entre llaves.
 */
let A = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A4));
console.log(multipleHA.test(A3));
console.log(multipleHA.test(A100));

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/gi; 
console.log(timRegex.test(timStr));

// Check for All or None
/* 
Puede especificar la posible existencia de un elemento con un signo de interrogación, ?
 */
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));

let favWord = "favorite";
let favRegex = /favou?rite/gi; // Change this line
console.log(favRegex.test(favWord));

//  ositive and Negative Lookahead
/* 
Una búsqueda anticipada positiva buscará asegurarse de que el elemento en el patrón de búsqueda esté allí, pero en realidad no lo coincidirá. Se utiliza una búsqueda anticipada positiva (?=...)donde el ... es la parte requerida que no coincide.
 */
/* 
una búsqueda anticipada negativa buscará asegurarse de que el elemento en el patrón de búsqueda no esté allí. Se utiliza una búsqueda anticipada negativa (?!...)donde ...está el patrón que no desea que esté allí.
 */
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

//  Check For Mixed Grouping of Characters
/* 
A veces queremos verificar grupos de caracteres usando una expresión regular y para lograr eso usamos paréntesis ().
 */
let testStr4 = "Pumpkin";
let testRegex4 = /P(engu|umpk)in/;
console.log(testRegex4.test(testStr4));

let myString3 = "Eleanor Roosevelt";
let myRegex7 = /(Franklin|Eleanor).*Roosevelt/; 
console.log(myRegex7.test(myString3)); 

// Reuse Patterns Using Capture Groups
/* 
Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular que se va a capturar ej. "/(\w+)/."  // "w" el programa buscara palabras que contengan la letra "w".
La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular usando una barra invertida y el número del grupo de captura (p. ej \1., ).
 */
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1 /;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex)); 

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
console.log(reRegex.test(repeatNum));
console.log(repeatNum.match(repeatRegex));

// Use Capture Groups to Search and Replace
/* 
Puede buscar y reemplazar texto en una cadena usando .replace()en una cadena. Las entradas para .replace()son primero el patrón de expresiones regulares que desea buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.
 */
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
console.log(str.replace(fixRegex, replaceText));

