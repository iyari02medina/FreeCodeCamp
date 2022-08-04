// ### 1. Aprenda sobre la programación funcional
// -> Funciones aisladas: no depende del estado del programa, que incluye variables globales que están sujetas a cambios.
// -> Funciones puras: la misma entrada siempre da la misma salida
// -> Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente

// Function that returns a string representing a cup of green tea
const prepareTea = () => "greenTea";
const getTea = (numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(4);
console.log(tea4TeamFCC);

// ### 2. Comprender la terminología de programación funcional
// -> Las funciones que se pueden asignar a una variable, pasar a otra función o devolver desde otra función como cualquier otro valor normal, se denominan "first class functions." .
// -> Las funciones que toman una función como argumento o devuelven una función como valor de retorno se denominan "higher order functions".
// -> Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o se devolvieron se pueden llamar lambda.

const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 1);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 2);
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// ### 3. Comprender los peligros del uso del código imperativo
// JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes. Por ejemplo, en lugar de usar el for ciclo mencionado anteriormente, puede llamar al map método que maneja los detalles de iterar sobre una matriz.
//pestañas es una matriz de títulos de cada sitio abierto dentro de la ventana

// funcion constructora
const Window = function (tabs) {
  this.tabs = tabs;
};
// Prototipos
Window.prototype = {
  join: function (otherWindow) {
    // union de dos ventanas
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  },
  tabOpen: function (tab) {
    // abrir una pestaña al final
    this.tabs.push("new tab");
    return this;
  },
  tabClose: function (index) {
    // cerrar pestañas
    const tabsBeforeIndex = this.tabs.splice(0, index);
    const tabsAfterIndex = this.tabs.splice(1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
  },
};
const workWindow = new Window(["Gmail", "Slack"]);
const socialWindow = new Window(["FB", "Twitter"]);
const videoWindow = new Window(["Netflix", "Youtube"]);
const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(1))
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// ### 4. Evite mutaciones y efectos secundarios mediante la programación funcional
// Recuerde que en la programación funcional, cambiar o alterar cosas se llama mutación , y el resultado se llama efecto secundario . Una función, idealmente, debería ser una función pura , lo que significa que no causa ningún efecto secundario.

// el ejercicion no es relevante

// ### 5. Pasar argumentos para evitar la dependencia externa en una función
// Otro principio de la programación funcional es declarar siempre tus dependencias explícitamente. Esto significa que si una función depende de la presencia de una variable u objeto, pase esa variable u objeto directamente a la función como argumento.
// The global variable
let fixedValue = 4;
function incrementer(value) {
  return value + 1;
}
console.log(incrementer(fixedValue));

// ### 6. Refactorizar variables globales fuera de funciones
// -> No altere una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. Sugerencia: usar algo como const newArr = arrVar, where arrVaris a array simplemente creará una referencia a la variable existente y no una copia. Entonces, cambiar un valor en newArrcambiaría el valor en arrVar.
// -> Declarar parámetros de función: cualquier cálculo dentro de una función depende solo de los argumentos pasados ​​a la función, y no de ningún objeto o variable global.

const bookList = ["Principito", "Biblia", "Troya", "Mafalda"];
function add(list, bookName) {
  return [...list, bookName]; // crea una copia del array sin modificarlo
}
function remove(list, bookname) {
  return list.filter((book) => book !== bookname);
}
var newBookList = add(bookList, "A Brief History of Time");
console.log(newBookList);
var newerBookList = remove(bookList, "Principito");
console.log(newerBookList);
// array no se modifico
console.log(bookList);

// ### 7. Use el método de map para extraer datos de una matriz
// El mapmétodo itera sobre cada elemento de una matriz y devuelve una nueva matriz que contiene los resultados de llamar a la función de devolución de llamada en cada elemento. Hace esto sin mutar la matriz original.
// Cuando se utiliza la devolución de llamada, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es la matriz sobre la que mapse llamó al método.

const watchList = [
  {
    Title: "Inception",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Batman",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
];
const ratings = watchList.map((item) => ({
  Title: item.Title,
  rating: item.imdbRating,
}));
console.log(ratings);

// ### 8. Implementar map en un prototype
// el map método devuelve una matriz de la misma longitud que la que se invocó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga. En otras palabras, map es una función pura y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

// ejercicio crear un prototipo que actue como el metodo map
var s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback){
    var newArray = [];
    this.forEach(function(a){
        newArray.push(callback(a))
    });
    return newArray;
}
var new_s = s.myMap(function(item){
    return item * 2;
});
console.log(new_s)

// ### 9. Use el método de filter() para extraer datos de una matriz
// filterllama a una función en cada elemento de una matriz y devuelve una nueva matriz que contiene solo los elementos para los que devuelve esa función true. En otras palabras, filtra la matriz, en función de la función que se le pasa. 
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];
let usersUnder30 = users.filter(user => user.age<30);
console.log(usersUnder30)

// ejercicio usando map y filter
const watchList2 = [
  {
    Title: "Inception",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Batman",
    imdbRating: "7.8",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Avatar",
    Director: "James Cameron",
    imdbRating: "8.1",
    imdbVotes: "1,446,708",
  },
];
const filteredList = watchList2.filter(a=> parseFloat(a.imdbRating)>8.0).map(a=>({Title:a.Title, rating: a.imdbRating}));
console.log(filteredList);

// ### 10. Implementar el método de filter en un prototype 

const a = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  this.forEach(function (i){
    if(callback(i) == true){
      newArray.push(i)
    }
  })
  return newArray;
};
const new_a = a.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_a);

// ### 11. Devolver parte de una matriz usando el método slice()
// El slicemétodo devuelve una copia de ciertos elementos de una matriz. El slicemétodo no muta la matriz original, sino que devuelve una nueva.

const inputAnim = ['cat', 'Dog', 'tiger', 'zebra', 'ant']
let sliceArray = (anim, beginSlice, endSlice) => anim.slice(beginSlice,endSlice)
console.log(sliceArray(inputAnim,1,3))

// ### 12. Eliminar elementos de una matriz usando slice() en lugar de splice()
// toma argumentos para el índice de dónde comenzar a eliminar elementos, luego la cantidad de elementos que se eliminarán. Si no se proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final. Sin embargo, el splicemétodo muta la matriz original a la que se llama. Usar slicemétodo en lugar de spliceayuda a evitar cualquier efecto secundario de mutación de matriz.

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
let nonMutatingSplice = (cities) => cities.slice(0,3);
console.log(nonMutatingSplice(inputCities)); 

// ### 13. Combine dos arreglos usando el método concat
// Concatenación significa unir elementos de extremo a extremo. JavaScript ofrece el concatmétodo tanto para cadenas como para matrices que funcionan de la misma manera.

const first = [1,2,3];
const second = [4,5];
const nonMutatingConcat = (original, attach) => original.concat(attach)
console.log(nonMutatingConcat(first,second))

// ### 14. Agregue elementos al final de una matriz usando concat() en lugar de push()

// La programación funcional tiene que ver con la creación y el uso de funciones que no mutan. concat() método como una forma de combinar arreglos en uno nuevo sin mutar los arreglos originales. Comparar concatcon el push() método. push() agrega un elemento al final de la misma matriz en la que se llama, lo que muta esa matriz.

    // ejerecicio es similar al #13.

// ### 15. Use el método reduce para analizar datos
//  El reducemétodo itera sobre cada elemento de una matriz y devuelve un único valor (es decir, cadena, número, objeto, matriz). Esto se logra a través de una función de devolución de llamada que se llama en cada iteración.

const watchList3 = [
  {
    Title: "Inception",
    Director: "Christopher Nolan",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Batman",
    Director: "Christopher Nolan",
    imdbRating: "8.5",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Avatar",
    Director: "James Cameron",
    imdbRating: "7.8",
    imdbVotes: "1,446,708",
  },
];
let getRating = (list) =>{
  let averageRating =
    watchList3
      .filter((film) => film.Director === "Christopher Nolan")
      .map((film) => Number(film.imdbRating))
      .reduce((sumOfRating, rating) => (sumOfRating + rating) / (watchList3.filter((film) => film.Director === "Christopher Nolan").length)) 
    
    return averageRating;
}
console.log(getRating(watchList3))

// ### 16. Utilice el map(), filter() o reduce() para resolver un problema complejo

const list = [-3, 4.8, 5, 3, -3.2];
const squareList = (arr) => {
  return arr.filter(num => num > 0 && num % parseInt(num)===0).map(num => Math.pow(num,2));
};
console.log(squareList(list));

// ### 17. Ordenar una matriz alfabéticamente usando el método de sort()
// El sortmétodo ordena los elementos de una matriz según la función de devolución de llamada.

const ordenar = ["a", "d", "c", "a", "z", "g"];
const alphabeticalOrder = (arr) => arr.sort()
console.log(alphabeticalOrder(ordenar));

// ### 18. Devolver una matriz ordenada sin cambiar la matriz original
// Un efecto secundario del sort() método es que cambia el orden de los elementos en la matriz original. En otras palabras, muta la matriz en su lugar. Una forma de evitar esto es concatenar primero una matriz vacía con la que se está ordenando (recuerde eso slice() y concat() devuelva una nueva matriz), luego ejecute el sort() método.

const globalArray = [5, 6, 3, 2, 9];

let nonMutatingSort = (arr) => {
  const newArr = [...arr];
  return newArr.sort((a,b) => a-b)
};
console.log(nonMutatingSort(globalArray))

// ### 19. Dividir una cadena en una matriz usando el método split()



