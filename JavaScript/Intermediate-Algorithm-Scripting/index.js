// ### 1.  Suma todos los números en un rango
const sumAll = (arr) => {
  const firstNum = arr[0];
  const lastNum = arr[arr.length - 1];
  const numCount = Math.abs(firstNum - lastNum) + 1;
  const sum = ((firstNum + lastNum) * numCount) / 2;
  return sum;
};
console.log(sumAll([1, 4]));

// ### 2. Diferenciar dos matrices

const diffArray = (arr1, arr2) =>
  arr1.concat(arr2).filter((i) => !arr1.includes(i) || !arr2.includes(i));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// ### 3. Buscar y destruir

const destroyer = (arr, ...remove) =>
  arr.filter((element) => !remove.includes(element));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// ### 4. Donde estás

const whatIsInAName = (collection, source) => {
  // Object.keys() devuelve un array de las propiedades
  const sourceKey = Object.keys(source);
  return collection.filter((obj) =>
    sourceKey.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { first: "Romeo" }
  )
);

// ### 5. Convierte una cuerda en una caja espinal.

const spinalCase = (str) =>
  str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
console.log(spinalCase("This Is Spinal Tap"));

// ### 6. Jerga
// -> Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y añádala ay.
// -> Si una palabra comienza con una vocal, solo agregue way al final.

const translatePigLatin = (str) =>
  str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
console.log(translatePigLatin("consonant"));

// ### 7. Buscar y reemplazar
// Realice una búsqueda y reemplace en la oración utilizando los argumentos proporcionados y devuelva la nueva oración. Preserve las mayúsculas y minúsculas del primer carácter de la palabra original cuando lo reemplace.

const myReplace = (str, before, after) => {
  let index = str.indexOf(before);
  str[index] === str[index].toUpperCase()
    ? (after = after.charAt(0).toUpperCase() + after.slice(1))
    : (after = after.charAt(0).toLowerCase() + after.slice(1));
  str = str.replace(before, after);
  return str;
};
console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

// ### 8. Emparejamiento de ADN
const pairElement = (str) => {
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let arr = str.split("");
  return arr.map((x) => [x, pairs[x]]);
};
console.log(pairElement("GCG"));

// ### 9. Cartas perdidas

// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     if (charCode !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(charCode - 1);
//     }
//   }
//   return undefined;
// }

const fearNotLetter = (str) =>{
    str.map((i)=>{
        const charCode = str.charCodeAt(i);
        charCode !== str.charCodeAt(0) + i
        ?(String.fromCharCode(charCode -1)):(false)
    });
    return undefined
}
console.log(fearNotLetter("abcdf"));
