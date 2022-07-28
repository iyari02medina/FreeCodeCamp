// ### 1. Convert Celsius to Fahrenheit

// Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32. Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8.

function convertCtoF(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

convertCtoF(30);

// ### 2. Invertir una cadena

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
  return reverseStr;
}

reverseString("hello");

// ó

function reverseString2(str) {
  let reverseStr = str.split("");
  console.log(reverseStr);
  reverseStr.reverse();
  console.log(reverseStr);
  let reverse = reverseStr.join("");
  console.log(reverse);
  return reverse;
}
console.log(reverseString2("hello"));

// ### 3. Factorizar un número

// Por ejemplo:5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
console.log(factorialize(5));

// ó

function factorialize2(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorialize2(5));

// ### 4. Encuentra la palabra más larga en una cadena

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > word.length) {
      maxLength = words[i].length;
      word = words[i];
    }
  }
  return word;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// ### 5. Devolver los números más grandes en matrice

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    console.log(largestNumber);
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results.push(largestNumber);
  }

  return results;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// ó
function largestOfFour2(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}
console.log(
  largestOfFour2([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// ### 6. Confirmar el final
// Compruebe si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

function confirmEnding(str, target) {
  if (str.slice(str.length - target.length) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("He has to give me a new name", "name"));

// ### 7.Repetir una cadena Repetir una cadena

// Repetir una cadena dada str(primer argumento) por numtiempos (segundo argumento). Devuelve una cadena vacía si numno es un número positivo.

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";
  for (let i = 0; i < num; i++) {
    accumulatedStr += `${str}, `;
  }
  return accumulatedStr;
}
console.log(repeatStringNumTimes("abc", 3));

// ### 8. Truncar una cadena
// Trunca una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). Devuelve la cadena truncada con un ...final.

function truncateString(str, num) {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  } else {
    return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// ### 9.Finders Keepers
// Cree una función que mire a través de una matriz arry devuelva el primer elemento que pase una 'prueba de verdad'. Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true. Si ningún elemento pasa la prueba, devuelve undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// ### 10.Boo who
// Comprueba si un valor se clasifica como un primitivo booleano. Regresar trueo false.
function booWho(bool) {
    if(typeof(bool)== 'boolean'){
        return true
    } else {
        return false
    }
}

console.log(booWho(null));

// ### 11. Title Case a Sentence
// Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. Asegúrate de que el resto de la palabra esté en minúsculas.

function titleCase(str) {
    let newStr = str.split(' ')
    console.log(newStr)
    let srt2 = [];
    for(let i in newStr){
        console.log(srt2[i])
        srt2[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase()
    }
    console.log(srt2.join(' '))
    return srt2.join(' ')
}

titleCase("sHoRt AnD sToUt");

// ó

function titleCase2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase2("I'm a little tea pot"));

// ### 12. Slice and Splice
// Se le dan dos matrices y un índice. Copie cada elemento de la primera matriz en la segunda matriz, en orden.Comience a insertar elementos en el índice nde la segunda matriz. Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.

function frankenSplice(arr1,arr2, n){
  let newArr = arr2.slice();
  for(let i = 0; i< arr1.length; i++){
    newArr.splice(n,0,arr1[i]);
    n++;
  }
  return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6],2));

// ó

function frankenSplice2(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
console.log(frankenSplice2([1, 2, 3], [4, 5, 6], 2));

// ### 13. Falsy Bouncer
// Elimina todos los valores falsos de una matriz. Los valores falsos en JavaScript son false, null, 0, "", undefinedy NaN.

function bouncer(arr) {
  return arr.filter(Boolean);
}
console.log(bouncer([7, "ate", "", false, 9]));

// ### 14. Where do I Belong
// Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

function getIndexToIns(arr, num) {
  return arr.filter((i)=>i<num).length;
}
console.log(getIndexToIns([40, 60], 50))

// 15. Mutaciones 
// Retorna truesi la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

function mutation(arr) {
  console.log(arr[1].split(''))

  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1 ;
    });
}
console.log(mutation(["hello", "hey"]));

// ### 16. Chunky Monkey
// Escriba una función que divida una matriz (primer argumento) en grupos de la longitud de size(segundo argumento) y los devuelva como una matriz bidimensional.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
