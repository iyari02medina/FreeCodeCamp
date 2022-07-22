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
    let reverseStr = ''
    for(let i = str.length-1; i >=0; i--){
        reverseStr += str[i];
    }
    console.log(reverseStr)
    return reverseStr;
}

reverseString("hello");

// ó

function reverseString2(str) {
    let reverseStr = str.split(''); 
    console.log(reverseStr);
    reverseStr.reverse();
    console.log(reverseStr);
    let reverse = reverseStr.join('')
    console.log(reverse)
  return reverse ;
}
console.log(reverseString2('hello'))

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
  for(let i = 2; i<=num; i++){
    product *= i;
  }
  return product; 
}
console.log(factorialize2(5));

// ### 4. Encuentra la palabra más larga en una cadena

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;
  let word = ''

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > word.length) {
      maxLength = words[i].length;
      word = words[i];
    }
  }
  return word;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

