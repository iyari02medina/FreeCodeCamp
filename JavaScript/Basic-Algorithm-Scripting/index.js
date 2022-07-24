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

